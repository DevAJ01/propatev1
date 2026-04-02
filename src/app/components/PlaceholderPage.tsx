import { motion } from "motion/react";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="max-w-[960px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1
          className="text-[clamp(28px,4vw,36px)] tracking-[-0.03em] leading-[1.15] mb-2"
          style={{ fontWeight: 400 }}
        >
          {title}
        </h1>
        <p className="text-muted-foreground text-[15px]">Coming soon.</p>
      </motion.div>

      <div className="mt-16 space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-xl bg-white">
            <div className="h-3 bg-secondary rounded w-1/3 mb-3" />
            <div className="h-3 bg-secondary rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}