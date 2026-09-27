# Review of the 1,630 U-P published items

## Owner direction — 2026-09-23

Ten Sol reviewers at xhigh effort review the canonical U-P queue, one assigned
item at a time. Each item receives one decision: **accept** the current
mathematics and remove it from U-P, **repair** a fully understood defect with
the smallest sound local edit, or **defer** it in U-P with an exact unresolved
obligation. A prior impact-only classification is not itself proof of a defect.
Logical validity controls every decision; source authority and old audit stamps
are evidence, not substitutes for checking the inference. Reviewers read the
published library, Phase-2 suppliers and authoritative sources when needed,
and state explicitly what they could not verify.

The 1,630-ID pool is frozen from the canonical
`published-consumer-supplier-ledger.md` U-P section at the start of this review.
`up-1630-review/frozen-up-index.jsonl` retains the item hash and exact starting
ledger reason. Ten disjoint assignment files contain 163 items each. An agent
works its own assignment **sequentially**, completing a receipt for one item
before starting the next. The ten requested reviewers run concurrently as
separate `codex exec` sessions with `gpt-6-sol` and `xhigh` reasoning effort;
the root coordinates their shared workspace through per-shard event/direction
files.

For a repair that changes the original `## Statement` or `## Definition`, the
reviewer traces the complete published direct and indirect dependency/reference
closure. It reads each consumer's exact use. A sound use is accepted without an
edit; a necessary change gets the smallest sufficient repair; an uncertain use
stays or enters U-P with the specific uncertainty. A consumer whose own
Statement/Definition changes triggers another complete downstream review.
Proof-only, citation, metadata or dependency edits do not trigger propagation.
The user explicitly authorizes this full-closure examination; it supersedes the
repository's default direct-only maintenance rule for this review. It does not
authorize blanket U-P classification of every indirect reference.

Reviewers own only their assigned item files and receipts. They send a
Statement/Definition change event to the root before editing a downstream item
assigned to another reviewer; the root coordinates ownership and canonical
ledger/page changes. A reviewer may author a genuinely necessary new lemma only
after recording the exact unmet prerequisite and its consuming proof step,
reserving a unique ID and page with the root, and fully proving the lemma with
honest source evidence. A new lemma is not called published or certified until
the actual registry, page and validation requirements are met. If that cannot
be completed soundly, the original item remains U-P.

The root reconciles item decisions into the single canonical index and keeps
the old evidence: accepted items move to bounded-clear receipts outside the
active queues; fully repaired items move to A-R; deferred items stay U-P. A-P
is used only for an item-specific, defect-focused review whose repair is
pending under the ledger's existing rules. No old verification stamp is reused
after an edit, and focused checks do not claim independent certification.

## Execution and completion checks

1. Freeze the 1,630 IDs, hashes, reasons and disjoint assignments; validate
   their union and publication status.
2. Start ten requested reviewers as concurrency permits. Each writes ordered,
   item-specific receipts and a shard report. The root reconciles findings and
   downstream events continuously.
3. Verify every assignment has one receipt, every actual interface change has
   an impact review, every changed file has focused precheck/rendercheck, and
   ledger counts and unique IDs match the canonical index. Report any
   repository-wide gate failures and the remaining U-P queue honestly.

This review is outside the TypeScript build driver's dispatch. Its results do
not manufacture workflow verdicts, publication stamps or independent audits.

## Completed review — 2026-09-23

All ten `gpt-6-sol` (`xhigh`) reviewer sessions finished their 163-item
assignments in order. The frozen 1,630-item pool has 1,160 accepted,
272 repaired, and 198 deferred decisions, with no pending repair approvals.
The canonical index now has 229 U-P, 0 U-C, 507 A-R, and 320 A-P rows; these
whole-index figures also include items outside the frozen pool. It has 3,254
unique published IDs and no duplicate classification rows. The review receipts,
root adjudications, holds, and changed-claim impact files are under
`research/up-1630-review/`.

All 353 changed item files passed the batch rendercheck; the 314 applicable
proof files passed precheck. Eight changed library pages passed rendercheck,
`git diff --check` passed, and the plan JSON parses. Plan validation has the
same 14 errors as the repository baseline. Twenty-two repaired items still
have plan dependency metadata that cannot be mirrored without a forward-page,
examples-page, or prerequisite-order violation; their exact IDs and reasons
are recorded in `research/up-1630-review/root-plan-validation-reconcile.json`.
Those sequencing issues do not change the published-item review decisions.
