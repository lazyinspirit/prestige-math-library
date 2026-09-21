# Step 7 rewrite build plan

## Objective and operating state

Implement the owner's 2026-09-21 replacement for Step 7. The live run
`phase-2-remaining-27` is paused at `7-rejudge`; preserve its evidence and leave
it paused during this build. Do not run paid mathematical workers as tests.

## Required protocol

1. **7.1:** One Sol xhigh adjudicator per batch reviews Step-6 rejections,
   adjudicates logical validity, repairs all confirmed defects (including
   nonfatal defects), and identifies
   all downstream consumers.
2. **7.2:** Three Sol xhigh owner repair agents resolve relevant downstream
   effects across the whole library, including published items.
3. **7.3:** After every writer drains, the orchestrator recertifies the complete
   repaired state in one pass.
4. **7.4:** Terra rejudges the repaired items on that stable state.
5. **7.5:** Sol xhigh adjudicators review and repair renewed rejections and
   identify all downstream consumers.
6. **7.6:** Three Sol xhigh owner agents repair downstream effects, including
   published consumers.
7. **7.7:** The orchestrator recertifies everything in one pass after writers
   drain. Repeat 7.4–7.7 until the latest adjudication round finds fatal defects
   in strictly less than 5% of the original frozen frontier. The denominator
   never shrinks; count unique fatal frontier items, not rejection rows.
8. **7.8:** Run the complete gate battery.
9. **7.9:** Owner agents resolve all failures and recertify changed items.
10. **7.10:** Rerun the complete gate; repeat 7.9–7.10 until it passes.

The percentage threshold permits entry to the final gate, never acceptance of
an unresolved fatal defect. Missing decisions, missing verdicts, incomplete
impact coverage, uncertainty, or stale certification cannot count as success.
Fatal classification affects only that threshold. Every actual defect must be
repaired; newly discovered downstream work continues in the repair phase with
fresh disjoint assignments until complete, before central certification.
Batch adjudicators and all three owner agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Require exact mathematical
justification, unique IDs, registry/index and metadata registration, dependency
and downstream closure, and inclusion in central certification and gates. Added
items never enlarge the frozen original-frontier denominator.
Logical validity is authoritative; agents and the orchestrator must state
uncertainty, consult authoritative sources when uncertain, and independently
check arguments because sources can contain mistakes.

## Build sequence

- [x] Confirm the live engine is paused and write this plan.
- [x] Implement durable round state, immutable original scope, complete impact
  discovery, disjoint ownership, stable certification barriers, and threshold
  validation in dedicated Step-7 modules.
- [x] Replace the old group/terminal/reseal stage sequence with the ten-part
  protocol and explicit engine-controlled repeat loops. Preserve restart and
  dispatch adoption semantics; historical receipts must not cover new rounds.
- [x] Replace obsolete prompts and documentation; define the model assignment
  and whole-library published repair authority consistently.
- [x] Integrate current judge, adjudication, contract, certification, and gate
  tools without fabricating verdicts or silently weakening existing checks.
- [x] Add focused fixture tests for threshold boundaries, missing evidence,
  downstream and published coverage, writer barriers, restart/idempotence,
  repeated judge rounds, and repeated gate repair.
- [x] Review the complete implementation, run focused integration tests, record
  results here, and commit only the workflow build changes and documentation.
- [x] Verify the live run remains paused and report the implementation and any
  explicit migration boundary. Do not resume the mathematical build.

## Work allocation

The primary agent owns integration, stage replacement, compatibility, and final
verification. Up to three Astra medium agents may implement independent pieces:
round/impact state tooling; executor repeat support; and prompts/documentation.
Each agent reads canonical repository instructions and preserves unrelated
working-tree changes.

## Verification record

2026-09-21: 159 focused tests passed across stage routing, executor efficiency,
Step-7 round helpers, workflow integration, stage wiring, centralized guard,
legacy guard/group compatibility, closure/gate roster, outage/pipeline behavior,
writer barriers and certification consumers. `npm run typecheck` in
`tools/autopilot` passed; staged whitespace checks passed. No paid model calls
or mathematical content edits were used for this build.

The regression suite covers the strict 5% boundary, fixed original denominator,
restart-safe round identities, repeated gate repair, live-writer barriers,
published/transitive/alias consumers, new impact discovery, nonfatal repairs,
missing verdicts, tampered evidence, and a consumer reviewed before a later
supplier repair in the same wave. Workers capture dependency-context hashes at
review completion; the controller never manufactures a fresh review context.
Unfinished or stale reviews produce fresh disjoint owner assignments inside
the repair phase. Only after those assignments close does certification run.

Three owner lanes run serially to protect shared contracts/pages and supplier
ordering. All three are Sol xhigh; additional closure passes reuse those lanes
with distinct evidence identities, without intervening certification.

Final read-only state verification: `paused:true`, legacy stage `7-rejudge`,
revision `group-authors-nine-step-v1`. The replacement revision is
`batch-step7-rounds-v2`; no live-state relabeling or workflow resume occurred.
Historical mathematical edits and pre-existing terminal-reseal changes remain
outside this build commit.

## Migration boundary

The paused legacy run cannot adopt the replacement stage table by changing its
revision or relabeling dispatch results. Read-only verification on 2026-09-21
found `paused:true`, stage `7-rejudge`, and revision
`group-authors-nine-step-v1`. Its original `pre-step7` snapshot
(`2026-09-19T09:15:55.598Z`) contains 20,088 truncated, 16-character GUARD hashes;
v2 requires full baseline identities. These must be reconstructed from matching
text or genuine full GUARD evidence, never padded or replaced with current
repaired hashes.

Previously repaired Step-6 rejections also need an explicit fresh review bridge:
v2's ordinary initial adjudication requires a new repair for each confirmed
fatal finding, which cannot honestly be demanded of an already repaired sound
carrier. Fresh review must cover all inherited repairs and downstream impacts
before centralized certification and Terra rejudgment; old terminal receipts
are historical evidence, not fresh worker successes. A migration therefore needs
that bridge before any cutover command is safe. The live state and evidence
remain untouched and paused. The bounded cutover design and required fixtures
are recorded in [step7-v2-migration-review.md](step7-v2-migration-review.md).
