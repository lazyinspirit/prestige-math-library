# Owner-authorized early published repairs

The owner authorized these three repairs with “repair now” after the 08:18
authority escalation. This is not general permission to repair published
content during Phase 2. The canonical repair inventory remains
`published-consumer-supplier-ledger.md`.

## Applied changes

- `def-dependent-choice`: replace the real-sequence dependency with
  `def-function`; retain the same prescribed-start DC statement. Move its
  single home from `compactness-in-metric-spaces` (120) to immediately after
  Countable Choice on `countability-and-uncountability` (18), in both published
  composition and plan. Its compactness-ledger orientation is an explicit
  non-load-bearing forward reference in Remarks.
- `thm-equivalent-characterizations-of-noetherian-modules`: declare DC and
  the exact generated-submodule and submodule-criterion interfaces. Prove
  finite-generation-to-ACC by a finite generating set in an ascending union;
  use DC on strict inclusion only for ACC-to-maximal; prove maximal-to-finite
  generation by adjoining one element. Explicitly distinguish the choice-free
  implications. Conrad's complete Theorem 1.7, pp. 2–3, was reread at
  <https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf>.
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`: replace
  the invalid open-extension union with equality of weak and Euclidean closed
  sets. Each simplex is ambient closed, so a weakly closed subset is a finite
  union of ambient closed traces. Then apply Heine–Borel and metric separation.
  Preserve the empty case; do not cite the later AT-24 lemma.

Only three item files and the two DC composition pages were changed in
published content. No new item or A/B pair was added. Their plan inventories,
dependencies and strategies are synchronized. Old audit dates and judge
stamps were removed from changed items, not carried forward as certification.

## Verification and independent group-f closure

Group f independently accepted all three repairs on 2026-09-08 and restored
delegated verification with model `gpt-5.6-sol`, scope
`owner-authorized-published-repair`, and `delegated_by: owner`. The normalized
mathematical-content hashes (the guard form, excluding verification evidence)
are:

- `def-dependent-choice`: `5037afbd308e661c94b20dc4669d12913d48171f35636120e17ef59d4cf71db6`;
- `thm-equivalent-characterizations-of-noetherian-modules`: `47f7995d67e3632d5f2dc0773a48a67610c3625ce588e1b8ac3fbe5e8d73b16f`;
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`: `fe5c83700cb2caff7d23cf0bc3300f7e0edfa0066c4af60e34a88d551be3cc47`.

The DC definition is correctly typed as an arbitrary function
`N -> X`, has the prescribed-start relation contract, and now has one legal
home immediately after Countable Choice. The Noetherian theorem correctly
isolates DC to ACC implying the maximal condition; its other two arrows are
proved directly. The realization proof correctly identifies the finite weak
topology with a Euclidean subspace topology by closed sets and then applies
Heine--Borel and metric separation, including the empty realization.

The ordinary item judge checked all three independently using the configured
Terra lane; all returned `keep: true` on 2026-09-08 at 08:29 UTC. Exact item
and context hashes and reasons are in
`phase-2-wave-1-owner-repairs-judge.jsonl`. This is not a substitute for the
independent scaffold/impact audit, and no judge pass was manually stamped.

The current YAML-parsed impact scan finds 84 direct DC consumers. Their declared
uses retain the same generic relation/function interface; no typing regression
from replacing `def-sequence` by `def-function` was found. It finds ten direct
Noetherian-characterization consumers, rather than the receipt's earlier nine.
The repaired theorem is sound, but five consumers in the assigned batch cones
spend its choice-sensitive implication without a sufficient local contract or
proof, and one additional later consumer has an undeclared choice premise.
Those are separate downstream defects recorded in the canonical consumer
ledger and group-f recheck, not failures of the three repairs.

Audit limit: this delegated closure certifies the three named repairs, their
direct suppliers, the DC home/interface cutover, and the direct-consumer impact
scan. It does not certify the complete 104-page batch-7 or 65-page batch-8
dependency cones. Those broader semantic audits, and the downstream published
consumer defects, keep both scaffold verdicts insufficient. The three original
owner-repair defect rows may close; no broader publication or repair authority
is implied.
