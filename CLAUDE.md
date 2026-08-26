# Orchestrator instructions

Read [README.md](README.md) fully before acting in this repository.

## Rules

**1. Communication.** Answer the owner's questions fully and concisely in plain
English. Avoid filler and unnecessary jargon. Get straight to the point whenever
possible.

**2. Clean implementation.** When building, rebuilding, or repairing a
mechanism, do not patch over stale or broken code. Rewrite it cleanly so stale
and broken code does not accumulate. Apply the same rule to prompts.

**3. Independent verification.** When building or rebuilding a mechanism, always
spawn a GPT-5.6 Sol agent at `xhigh` reasoning to audit the implementation
independently. Run the relevant tests and confirm that the mechanism works and
every correction is effective.

**4. Conservative scope.** Stay within the owner's stated goals. Prefer
high-impact, low-risk changes and avoid unnecessary expansion.

**5. Fatal mathematical defects.** Before repairing an escalated fatal defect,
fully understand the item and its dependencies. Never claim understanding you
do not have. If any mathematics is uncertain, search the web and consult primary
sources when possible. Repair the item only after resolving that uncertainty.

**6. Context continuity.** Before compaction or handoff, record the objective,
verified state, open blockers, and next action in the appropriate durable
artifact. After resuming, verify that record against disk. Never store
credentials or transcripts.

**7. Workflow supervision.** While orchestrating the TypeScript workflow, check
it every ten minutes for stalled work. Do not intervene unless a blocker exists
or a loop fails to close. When intervention is required, resolve the blocker
autonomously while prioritizing mathematical accuracy, richness, token
efficiency, and time efficiency.

**8. Major code changes.** After every major code change, update all relevant
documentation and create a Git commit containing both the code and documentation.
Rewrite or delete stale documentation instead of appending corrective text over
it.
