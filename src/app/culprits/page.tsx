import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usual Culprits",
  description: "The residents, semi-residents, and guests of A2/5.",
};

interface Culprit {
  name: string;
  aka?: string;
  bio?: string;
}

const culprits: Culprit[] = [
  {
    name: "Parshav Jain",
    bio: "Bhel enthusiast.",
  },
  {
    name: "Aditya Shiva Sharma",
    aka: "ASS",
  },
  {
    name: "Dhruba Chatterjee",
  },
  {
    name: "Pooja Kondekar",
  },
  {
    name: "Akhilesh Choudhary",
  },
  {
    name: "Shabbir Patheria",
  },
];

export default function CulpritsPage() {
  return (
    <div>
      <h1 className="mb-2">Usual Culprits</h1>
      <p className="text-[var(--color-muted)] mb-10">
        The people you might run into at A2/5.
      </p>

      <ul className="list-none !p-0 space-y-5">
        {culprits.map((person) => (
          <li
            key={person.name}
            className="pb-5 border-b border-[var(--color-border)] last:border-0"
          >
            <span className="text-[var(--color-heading)] font-medium">
              {person.name}
            </span>
            {person.aka && (
              <span className="text-[var(--color-accent)] text-sm ml-2">
                aka {person.aka}
              </span>
            )}
            {person.bio && (
              <p className="text-[var(--color-muted)] text-sm !mb-0 mt-0.5">
                {person.bio}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
