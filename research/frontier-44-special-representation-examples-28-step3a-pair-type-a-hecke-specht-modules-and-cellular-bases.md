# Step 3a scope review — type-a-hecke-specht-modules-and-cellular-bases

- Run: `frontier-44-special-representation-examples-28`, batch 20, role alpha,
  label `step3a-pair-type-a-hecke-specht-modules-and-cellular-bases-ee5f79756021ed68`.
- Pair: A `type-a-hecke-specht-modules-and-cellular-bases` (order 1569, 29 items,
  category `special-topics-in-representation-theory`) / B
  `type-a-hecke-specht-modules-and-cellular-bases-examples` (order 1575, 5 items,
  dependency leaf: its only `requires` entry is the A page).
- Decision recorded: **sufficient** (scope only; this is not proof approval and not an
  item acceptance).
- Command:
  `node tools/step3-decisions.mjs record-scope --run frontier-44-special-representation-examples-28 --page type-a-hecke-specht-modules-and-cellular-bases --decision sufficient --reason "<evidence + this report path>"`.

## Evidence read

Current inputs on disk (hashes are sha256 of the files read):
`research/frontier-44-special-representation-examples-28-batch-20.pages.json`
`ec8790726c07b9e977330ac491b009a28a57bc6e60ef60fd714702fe4ebee6aa`;
`.coverage.json` `c705d36a1a3a2e6935bef9a103ed4dec175f2e4e8d3a8eb90b345ac5c650b507`;
`.notes.md` `907a11696850eac10bd1ce8789b209608aa97b412577eb52959ff10c653f77c9`;
`.cross-batch-dependencies.json` `c61a3aec269c8ad3b945ffedd23ad39d3876bba85acca1f28c59af2f7cc32054`;
scope ledger (100 pages, including batches 19 and 50), planning notes, `plan-spec.json`
page shells, `research/plan-symmetric-group-representations-track.md` L42 (SYMR-7), the
prose design `research/symmetric-group-planning/proposed-inventory.md` SYMR-7 section
(lines 188–250, both pages), and `frontier-44-special-representation-examples-28-owner-authoring-direction.md`
(including the 2026-10-10 section authorizing the batch-50 pair). Owner-repair records read:
`owner-cell-head-classification-repair/final2-verdict-and-handoff.json`,
`owner-authorized-phrase-deletion-exception/complete-one-time-consumer-extension/whole-escalation-final-actual-resolved-verdict.json`
(verdict `RESOLVED_SUFFICIENT_ACTUAL_FINAL_AFTER_BINDING`; its guard hash for batch 20 equals
the current file hash above, and its batch-50 guard `a7e48637134b9eede4b257ebc4ccb2f09fe072be7efb0ea06c4a37a0fc882224`
equals the current `batch-50.pages.json`). Supplier items were read in their manifests:
batch 19 (`def-removable-border-strip-and-height`, `lem-hooks-correspond-to-removable-border-strips`)
and batch 50 (`def-dj-bridge-…`, `lem-dj-bridge-sign-automorphism-and-star-dual`,
`thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`,
`cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`).
I did not re-fetch sources; the coverage/notes fetch stamps (Mathas 1998 manuscript
`8cfeb611…997e0`; Mathas–Soriano math/0604108 `a2cd21ce…64698a1`; Kleshchev 0909.4844
`86851996…c6f2cab`; Hu–Mathas 1304.0906 `54b11286…cf520`; 7/7 fetch-verified) are
recorded as run state, not re-verified here.

## Design-vs-manifest scope parity

The SYMR-7 prose design proposes 25 A items and 5 B items; the manifest has 29 A + 5 B.
Every design item is present under its design ID; no design claim, source result or example
was dropped or weakened. The four A additions are local prerequisite closure, each
documented in the batch notes: `lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra`
(the `*` used in `m_st = T_{d(s)}^* m_λ T_{d(t)}`),
`def-e-regular-and-e-restricted-partitions` (labels of the classification theorem), and the
two choice-free central-idempotent lemmas replacing the design's nonexistent
`lem-artinian-product-idempotents` / `cor-artinian-local-ring-only-idempotents-are-zero-and-one`
(so the block definition no longer imports the Axiom of Choice). The B page keeps its
design role: all five design examples/counterexamples, no load-bearing suppliers on B.

## Intended subject and library role

Track role (L42): "Hecke module theory beyond RG-13 and q-Schur suppliers". The inventory
covers the full arc of the intended subject: Graham–Lehrer cellular algebras, cell forms and
the corrected Graham–Lehrer classification (with the non-identically-zero criterion and the
zero-form caveat); Murphy elements and the Murphy cellular basis over any commutative ring
with invertible `q`; the Specht module and its cell form in the Dipper–James signed
normalization, with the conjugate/sign dictionary handled by the batch-50 comparison pair;
the e-regular/e-restricted simple classification and dominance unitriangular decomposition
matrix; Hecke Jucys–Murphy elements, q-contents, dominance-triangular action, the `e>n`
seminormal basis with the exact two-branch generator formula; the `q=1` specialization back
to group Specht theory; the type-A q-Schur algebra, Weyl modules and Schur functor; beta
sequences, the James–Mathas Gram determinant, the Jantzen layer-valuation lemma, the
q-Schaper/Jantzen sum formula; and an explicit open-problem boundary remark. The pair serves
its planned consumers in the same run: batches 21, 22 and 25 take 19/5/7 item-level edges
from it (blocks, modular branching, graded decomposition), and batch 24 requires the page.

Deferrals are explicit and homed, not omissions: e-core blocks/weight-one/irreducibility
→ batch 21; modular branching/good nodes → batch 22; graded decomposition and
KLR/Ariki material → batches 24/25; double centralizer → cores-and-blocks. Declines carry
reasons (dual cellular bases, quasi-heredity, e-restricted-tableau existence, James's
tables, Soriano's algorithm). The published neighbouring treatments
(`generic-coxeter-hecke-algebras-and-the-standard-basis`, RG-13; the group-side SYMR-6 page;
the cyclotomic prose scaffold `cyclotomic-murphy-bases-and-cellular-module-constructions`,
whose `items` list is empty) do not duplicate authorable content of this pair.

## Prerequisite audit

Method: the union of all `deps` of the 34 items plus every `[[…]]` link inside their
statements and strategies was checked against `items/` (26 654 files), all 50 current batch
manifests, and `plan-spec.json`. Result: all 63 distinct item-link targets resolve; every
referenced item is either published or a declared dependency; the single non-resolving token
is the bibliography citation `[[Hu-Mathas]]`, not an item. No prerequisite was found that is
absent from both the published library and the current scaffold.

Published side: 32 dependency IDs exist in `items/` with `status: published` and matching
titles, including the sensitive group-side interfaces consumed by the q=1 proposition and
the Schur-functor theorem (`def-modular-specht-form-and-radical-quotient`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
`thm-standard-polytabloid-basis`), which I spot-read against the uses.

In-run side: the six non-published suppliers are scaffolded in this run — batch 19
(`def-removable-border-strip-and-height`, `lem-hooks-correspond-to-removable-border-strips`,
consumed by the Gram-determinant and q-Schaper items and by the page `requires`) and batch 50
(the four `dj-bridge` items plus the comparison pair page, consumed by
`def-type-a-hecke-specht-module-and-cell-form` and
`prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`). The cross-batch
ledger records 5 `open` rows for batch 19 and 7 `verified` rows for batch 50 under the
owner-authorized one-time repair. Sequencing note (not a scope gap): the four dependent
items are authorable only after those suppliers are authored and pass their own reviews;
batch-50 items are build targets by the owner direction of 2026-10-10, not supplied proofs.
No scaffold edit was made by this review.

## Checks run (read-only, exact results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-44-…-batch-*.pages.json` | 858 items, 0 normalized, **0 errors** |
| `node tools/content-policy.mjs --manifest-only research/frontier-44-…-batch-*.pages.json` | 858 scoped items, **0 errors, 0 warnings** (a single-batch run reports 10 expected `batch-dependency-missing` artifacts for the cross-batch deps) |
| `node tools/coverage-checklist.mjs <batch-20 coverage> --require-destination` | 2 pages, 78 harvested results, **0 errors**, 1 warning `coverage-low-yield` on the B page |
| `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-…` | **OK** — acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 100 pages (only unrelated `redundant-prereq` advisories remain) |
| step-1 readiness | 34/34 batch-20 items have current `ready` records |

## Residual uncertainty (reported, non-blocking)

1. The batch-19 rim-hook interfaces and the batch-50 comparison pair are scaffold contracts
   only; if either fails authoring/review, the consumer items listed above stay blocked. The
   run's cross-batch ledger already tracks this; no owner action is proposed here beyond that
   tracking.
2. The B-page `coverage-low-yield` advisory (5/21 harvested results scaffolded) is expected:
   the design supplies exactly these 5 worked items and the remaining rows are absorbed inline
   or declined with reasons. Flagged for the Step-5 reader, not treated as a scope omission.
3. The earlier escalated subjects (nonzero cell-form classification, its two batch-20
   consumers, and the removed q=1 inference) are repaired in the current manifest; the
   after-binding verdict covers exactly the current guard hashes. This review claims no fresh
   mathematical acceptance of those repairs.

## Decision

**sufficient** for the A/B pair on the current scope hash: the planned definitions, results
and examples cover the intended subject, the source coverage is complete with destinations
for every deferral, and every prerequisite is present in the published library or in this
run's current scaffold.
