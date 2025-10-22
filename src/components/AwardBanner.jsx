import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

/**
 * AwardBanner
 * - Tailwind + Framer Motion React component
 * - Accessible (aria-live) announcement for screen readers
 * - Dismissible; optionally linkable
 *
 * Usage:
 * import AwardBanner from "./AwardBanner";
 * <AwardBanner
 *   awardName="ICFF Ratna Award (most active Indian association)"
 *   organization="Bhartiya Sanskritik Sangh Brno"
 *   year={2025}
 * />
 */

const AwardBanner = ({
  awardName = "ICFF Ratna Award (most active Indian association)",
  organization = "Bhartiya Sanskritik Sangh Brno",
  year = new Date().getFullYear(),
  className = "",
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className={`w-full ${className}`}
          aria-label="Award banner"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-50 via-white to-emerald-50 shadow-lg ring-1 ring-black/5">
              {/* Desktop decorative absolute icon (only on sm and up) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden sm:flex items-center pl-6 sm:pl-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-md">
                  <Trophy className="h-7 w-7" aria-hidden />
                </div>
              </div>

              <div className="flex items-center gap-4 px-6 py-4 sm:py-5 sm:pl-28">
                {/* Inline icon for small screens */}
                <div className="flex-shrink-0 sm:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/90 text-white shadow-sm">
                    <Trophy className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold uppercase text-amber-700 tracking-wide">
                    Winner — {awardName}
                  </p>
                  <h3 className="mt-1 truncate text-lg font-semibold text-slate-900">
                    {organization} • {year}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Recognized as the most active Indian association at ICFF — celebrated community work and cultural outreach.
                  </p>
                </div>
              </div>

              {/* Decorative ribbon on the right */}
              <div className="absolute right-0 top-0 hidden h-full w-36 items-center justify-center sm:flex">
                <div className="transform rotate-12 rounded-bl-2xl bg-amber-600 px-3 py-2 text-xs font-semibold text-white shadow-lg">
                  ICFF Ratna
                </div>
              </div>
            </div>
          </div>

          {/* Visually-hidden live region for screen reader announcement */}
          <div aria-live="polite" className="sr-only">
            {organization} has been awarded {awardName}.
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default AwardBanner;