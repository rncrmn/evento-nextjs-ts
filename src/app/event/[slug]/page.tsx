import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;

    const event = await getEvent(slug);

    return {
        title: `Event: ${event.name} by ${event.organizerName}`,
    };
}

export async function generateStaticParams() {
    return [
        {
            slug: "comedy-extravaganza",
        },
        {
            slug: "dj-practice-session",
        },
    ];
}

export default async function Event({ params }: Props) {
    const slug = params.slug;

    const event = await getEvent(slug);

    return (
        <main>
            <section className="flex justify-center items-center relative overflow-hidden py-14 md:py-20">
                <Image
                    src={event.imageUrl}
                    alt={event.name}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    quality={50}
                    className="object-cover blur-3xl z-0"
                    priority
                />
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 relative z-10">
                    <Image
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={201}
                        className="rounded-xl border-2 border-white/50 object-cover"
                    />
                    <div className="flex flex-col">
                        <p className="text-white/75">
                            {new Date(event.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                            {event.name}
                        </H1>
                        <p className="whitespace-nowrap text-xl text-white/75">
                            Organized by:{" "}
                            <span className="italic">
                                {event.organizerName}
                            </span>
                        </p>
                        <button className="bg-white/20 bg-blur text-lg capitalize mt-top md:mt-auto rounded-md py-2 border-white/10 border-2 state-effects">
                            Get Tickets
                        </button>
                    </div>
                </div>
            </section>
            <div className="text-center px-5 py-16">
                <Section>
                    <SectionHeading>About this event</SectionHeading>
                    <SectionContent>{event.description}</SectionContent>
                </Section>
                <Section>
                    <SectionHeading>Location</SectionHeading>
                    <SectionContent>{event.location}</SectionContent>
                </Section>
            </div>
        </main>
    );
}

function Section({ children }: { children: React.ReactNode }) {
    return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
    return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
            {children}
        </p>
    );
}
