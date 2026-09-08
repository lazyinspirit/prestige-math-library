# UC-73 owner-requested Astra audit

Read CLAUDE.md and README.md fully first. Work in this repository, preserving
the dirty worktree and active workflow authors. This is a published-item audit,
not workflow scaffold review. Do not change engine state or author-owned files.

Read your numbered assignment from `uc73-astra-audit-assignments.json`.
Audit exactly those items, one item at a time. Finish and record an item's
disposition before starting the next. Do not spawn additional agents.

Act as an unbiased adjudicator. The existing U-C flag establishes a recorded
prerequisite concern, not a verdict on the theorem or proof. Read the entire
current item and all load-bearing prerequisite contracts; examine supplier
proofs where needed to judge adequacy. Check hypotheses, definitions, proof
steps, actual publication status, item/page order, cycles and body-only uses.
Do not infer a mathematical defect from an unrelated item on a supplier page.
Do not certify a whole dependency closure after checking only one edge.

Assume AC as the owner instructs. When a proof uses AC, state it in the item
contract, declare `def-axiom-of-choice`, identify its exact proof use and record
necessary propagation to consumers. Retain genuinely choice-free arguments;
do not fabricate an AC use. Never consume Recorded, Not Proved Here material.

All unfamiliar or uncertain mathematics requires web research and full-text
reading from authoritative sources (original papers, author/university notes,
official mathematical references such as Stacks). Record URLs and exact
sections/theorems consulted. A search excerpt or inaccessible citation does
not count as full-text evidence. Resolve uncertainty before repairing.

Choose and justify a disposition for each item:

- Free of defects within an explicitly stated audit scope, only when the
  prerequisite concern is actually discharged. Published-page status does not
  make a draft supplier published. Unresolved substantive uncertainty must be
  recorded rather than disguised as a clean verdict.
- Repair locally when confident and the proof can close using already
  published adequate earlier suppliers or a complete local argument. Edit only
  your assigned published item files. No new judges are requested; never stamp
  your own repair as independent review. Use apply_patch, run targeted precheck
  and rendercheck, and retain truthful local verification metadata.
- Defer to Phase 3 when a needed supplier is unpublished or the repair cannot
  yet be justified. Bind each unmet prerequisite to the exact replacement
  Phase-2 item ID, A-page home, current publication/build state and repair
  strategy. Existing draft IDs on published pages may be replaced by different
  Phase-2 IDs; inspect the canonical plan and relevant prose before concluding
  the premise is outside Phase 2. Never publish those drafts to evade the debt.

For each item, promptly update your supporting receipt
`research/uc73-astra-agent-N.md` (N is your assignment number), then message
the parent with the item, disposition, evidence, exact suppliers and changes.
This receipt feeds the existing canonical ledger; it is not a replacement ledger.
The parent serializes updates to `published-consumer-supplier-ledger.md`,
`plan-spec.json`, shared prose and Phase-2 manifests to avoid lost edits.
Do not edit those shared files directly. Send exact required amendments.

If a necessary prerequisite is absent from Phase 2, first try a sound local
closure. If that fails, give the parent an exact lemma/definition or A/B-pair
contract, adequate dependencies, proposed home/order, sources, consumers and
all affected authoritative-file paths. The parent will reconcile and apply
the required prose and Phase-2 scope amendments. Do not merely reserve an ID
and claim closure, or silently drop the published claim.

Record per item: ID, audit scope, original concern, findings, disposition,
supplier mapping and availability, source-reading evidence, proof-repair
strategy, exact files changed, local check results and unresolved limitations.
Also distinguish confirmed downstream defects from impact-review candidates.
Send immediate blocker/scope messages; otherwise continue through your list.
