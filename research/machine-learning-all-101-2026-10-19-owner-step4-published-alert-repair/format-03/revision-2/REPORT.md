# Revision 2: rendered-label preservation

Supersedes revision 1 candidates only; all revision 1 artifacts and FREEZE.sha256 remain unchanged. Root review identified that raw IDs do not preserve the displayed labels of unlabelled links. This is the second and final review–repair cycle.

All 26 candidates now retain explicit labels or exact target titles as displayed by the actual `resolveWikilinks` implementation in `web/lib/math-library.ts:479–506`. The labels script calls that function, and rendered-labels.json freezes its exact output. No other mathematical prose was edited.

All 75 assigned alerts remain confirmed and addressed; exact findings/dispositions and before/after SHA256 hashes are in inventory.json. Original before/ preimages remain authoritative. Independent comparison confirms the complete Statement/Definition equals its original with wikilinks replaced by their actual displayed labels. Metadata, hypotheses, formulas, proofs, Facts & Assumptions, dependencies, remarks and every surrounding byte are unchanged; reference sections retain original links. Mathematical supplier contracts are unchanged, so there are no consumer repairs. No unresolved candidate issues.

After final edits, explicit proof-layout on all 26 candidates in an isolated temporary tree passed: 26 items, 71 steps, 0 defects, exit 0. Exact command/output are in proof-layout.json. Live source hashes still match the assigned preimages. No live source, native digest, attempts, gate, metadata or Step 3 closure was edited; integration and actual checks remain with root.
