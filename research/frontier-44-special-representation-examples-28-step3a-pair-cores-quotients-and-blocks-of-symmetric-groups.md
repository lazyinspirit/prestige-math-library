# Step 3a scope review — `cores-quotients-and-blocks-of-symmetric-groups` (A) / `cores-quotients-and-blocks-of-symmetric-groups-examples` (B)

- Run: `frontier-44-special-representation-examples-28` (batch 21; both pages).
- Reviewer role: alpha, Step 3a scope (non-owner). Scope only; not proof
  review, not item approval, no scaffold edits.
- Date: 2026-10-10.
- Decision: **sufficient**.
- Receipt: `research/frontier-44-special-representation-examples-28-step3a-review-cores-quotients-and-blocks-of-symmetric-groups.json`
  (recorded by `tools/step3-decisions.mjs record-scope`).

## 1. Inputs read

- Manifests/coverage: `research/frontier-44-special-representation-examples-28-batch-21.pages.json`
  (13 A items, 4 B items), `...-batch-21.coverage.json` (37 harvested source
  results disposed), `...-batch-21.cross-batch-dependencies.json` (26 open rows),
  plus `...-batch-22` and `...-batch-24` cross-batch rows for the two in-run
  consumer pages.
- Prose design: `research/plan-symmetric-group-representations-track.md`
  (SYMR-8 row, L43; §0 reading architecture: every A page has a B leaf of
  finite computations and sharp boundary failures), `research/symmetric-group-planning/proposed-inventory.md`
  §SYMR-8 (binding 13 + 4 item table with exact claims, deps, proof routes and
  locators), `research/plan-spec.json` (page shells, orders 1571/1572, empty
  `items`), `research/symmetric-group-planning/pages.json`.
- Owner decisions: `...-owner-authoring-direction.md` (build the 24 planned
  pairs retaining planned claims, sources and proof obligations; suppliers
  before consumers; no new pairs), the run scope ledger, and this page's drift
  evidence (declared `requires` only; no item drift).
- Scaffold record: `...-batch-21.notes.md` (design/plan reconciliation,
  hypothesis clarifications, dependency additions, computational checks),
  `...-alpha-step1-drift.md` and successors.
- Suppliers: published items under `items/`; the in-run pages
  `rim-hooks-and-the-murnaghan-nakayama-rule` (batch 19),
  `type-a-hecke-specht-modules-and-cellular-bases` (batch 20) and
  `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`.
- Sources re-fetched for this review; complete PDF byte lengths and
  `sha256_16` all match the coverage `fetch_verified` records:
  Mathas, *Hecke algebras and Schur algebras of the symmetric group*,
  `https://web.math.ucsb.edu/~bigelow/books/mathas.pdf` (750 887 bytes,
  `8cfeb611a95a3ff2`); Law/Tomczak, *Representation Theory of Symmetric
  Groups*, `https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf`
  (623 208 bytes, `eb7051ab74e7753b`); O'Donovan, arXiv:1708.04365 (207 627
  bytes, `52583cd8e22d8e5c`); Lyle–Mathas,
  `https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf`
  (246 381 bytes, `bc914b97bc7b1976`).

## 2. Intended role and subject

SYMR-8 carries the abacus calculus for partitions (beta-sets, shifts,
bead/gap hooks), the e-core / e-quotient / e-weight invariants with their
order-independence, quotient control of e-divisible hooks and size formula,
then the type-A q-Schur and Hecke block classification by e-core, the q = 1
Nakayama block classification with the (gamma, w) indexing, the weight-zero
/ defect-zero case, the weight-one bidiagonal decomposition pattern, and a
boundary remark separating block weight from numerical defect. Its B leaf
provides finite computations (two core/quotient abacus examples, one complete
weight-one decomposition matrix) and one sharp counterexample (removable-hook
counts do not determine the block).

Intended library role: the sole supplier of the e-core/Nakayama block theory
for symmetric groups and of the type-A Hecke block classification used by the
in-run consumers `modular-branching-and-the-good-node-crystal` (batch 22,
page-level require currently open) and `cyclotomic-hecke-and-quiver-hecke-algebras`
(batch 24, whose item rows consume `def-e-core-e-quotient-and-e-weight`,
`thm-e-core-is-independent-of-the-rim-hook-removal-order`,
`prop-core-quotient-size-and-weight-formula` and
`cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`).

## 3. Scaffold vs. prose design

All 13 design A items and 4 design B items are scaffolded with their design
scope; no design claim was dropped or narrowed, and no unplanned item was
added to this pair:

| design item | scaffold id | design scope retained |
|---|---|---|
| beta-set / e-abacus | `def-beta-set-and-e-runner-abacus-of-a-partition` | yes (shift, `P(X)`, runner labelling, bijection with bead configurations) |
| hooks = bead-gap pairs | `lem-hooks-are-bead-gap-pairs-on-an-abacus` | yes (hook-length row criterion, removal beta-set formula, e-divisibility = same runner) |
| e-core / e-quotient / e-weight | `def-e-core-e-quotient-and-e-weight` | yes (top-packed core, normalised quotient, weight; core is e-regular and e-restricted) |
| core order-independence | `thm-e-core-is-independent-of-the-rim-hook-removal-order` | yes (well-defined core = terminal rim e-hook removal, any order) |
| quotient controls e-divisible hooks | `thm-e-quotient-controls-hooks-divisible-by-e` | yes (bijection, lengths divided by e, quotient after removal) |
| size/weight formula | `prop-core-quotient-size-and-weight-formula` | yes (lambda-size equals core-size plus e times w; w = number of e-divisible hooks) |
| q-Schur block separation lemma | `lem-virtual-weyl-combinations-detect-q-schur-block-separation` | yes (Mathas Lemma 5.35 form) |
| q-Schur Weyl block theorem | `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | yes (field F, quantum characteristic e, d >= n; plus the block-indexing consequence) |
| weight-one decomposition pattern | `thm-weight-one-block-decomposition-pattern` | yes (exactly e labels in dominance order, bidiagonal q-Schur matrix, e-restricted pattern, Schur-functor and conjugate/sign translation) |
| Hecke Specht block corollary | `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | yes (same hypotheses, block indexing) |
| Nakayama classification | `thm-nakayama-block-classification-for-symmetric-groups` | yes (splitting field char p; same p-core iff same block; blocks (gamma, w) with n = gamma-size + p*w) |
| weight-zero = defect-zero | `prop-weight-zero-symmetric-group-blocks-are-defect-zero` | yes (single label, decomposition (1), Cartan (1), full matrix algebra, trivial defect group) |
| weight vs. numerical defect | `rem-block-weight-is-not-the-same-as-numerical-defect` | yes, with the design's explicit bound: the general Sylow defect-group theorem is *not* asserted |
| B: e = 3 core/quotient example | `ex-three-core-and-three-quotient-by-abacus` | yes |
| B: (4,3,2,1) 3-core by two orders | `ex-three-core-of-four-three-two-one` | yes |
| B: weight-one decomposition matrix | `ex-a-weight-one-block-decomposition-matrix` | yes |
| B: removable-hook counterexample | `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` | yes (verified pair (5)/(4,1) at p = 3) |

The batch-21 notes' recorded changes are consistent with the design and with
the sources: hypothesis clarification on the q-Schur theorem (PID/prime/lift
strategy feeding the field statement; see §4), completion of the Hecke
corollary's block-count step (Lyle–Mathas Proposition 2.3 route), and added
direct dependencies that are genuinely used (batch-19 border-strip items,
batch-20 q-Schur/Schur-functor/central-idempotent items). The page-level
`requires` chain and companion arrows match `plan-spec.json` verbatim.

## 4. Source-statement verification (read in the re-fetched PDFs)

- Mathas manuscript, printed pp. 57–63 (Ch. 5 §2–3): the working hypotheses
  of the Jantzen–Schaper theorem (R a PID, prime pi, lift q-hat with
  `[n]!_{q-hat} != 0`, `q = q-hat + piR`) — matching the batch-20 supplier
  `thm-q-schaper-virtual-radical-layer-formula`; Lemma 5.34 (e-core well
  defined), Lemma 5.35 (virtual Weyl combinations), Theorem 5.36 ("Suppose
  that F is a field and that d >= n. Then the Weyl modules W^lambda_F and
  W^mu_F belong to the same block if and only if lambda and mu have the same
  e-core"), Corollary 5.37 (Dipper–James, James–Mathas; proof via
  Proposition 4.19 and the block count `S(d,n) has at least as many blocks as
  H`), Proposition 5.38 (exactly e partitions in dominance order; bidiagonal
  entries `d_{mu lambda_k} = delta_{mu lambda_{k+1}}`), and the proof sentence
  fixing the orientation `W^{lambda_e} = L^{lambda_e}` and
  `[W^{lambda_k}] = [L^{lambda_k}] + [L^{lambda_{k+1}}]`. The printed p. 61
  example "(4,3,2,1) ... the 3-core of lambda is the partition (1)" is present.
- Tomczak/Law §4.1, printed pp. 53–64: beta-set and l-shift definitions,
  e-abacus, Lemma 4.3/4.4 and Corollaries 4.5/4.6, Proposition 4.7, Corollary
  4.8, the e-core/e-quotient definitions with the `|X| = 0 mod e`
  normalisation remark, Theorem 4.10, Theorem 4.11, Proposition 4.12 (i)–(iii),
  and the worked e = 3 example: `X = {11,9,5,3,2,1}`, `C_3 = (3,1)`,
  runner row-labels `{3,1}`, `{0}`, `{3,1,0}`, `Q_3 = ((2,1), empty, (1))`,
  four bead moves, two displayed removal orders.
- O'Donovan Theorem 1 and §1: blocks of S_n labelled by pairs (gamma, w) with
  gamma a p-core, n = |gamma| + pw, and S^lambda in (gamma, w) iff
  c_p(lambda) = gamma; p-core well-defined by the abacus.
- Lyle–Mathas preprint pp. 4–8: Lemma 2.1 (Graham–Lehrer), Lemma 2.4 (Weyl
  classes linearly independent), the block-count half of Proposition 2.3
  (`End_H(M) = product End_{B_i}(M B_i)` giving at least as many Schur blocks
  as Hecke blocks), and Proposition 2.9 with proof (blocks = Jantzen
  equivalence classes). These are exactly the declared uses.

## 5. Prerequisites

Full transitive closure of all 17 items' declared dependencies (run-manifest
`deps`; published-item front matter `deps`/`justified_by`/`forward_refs`;
plan-spec fallback; parsed with the repository YAML loader): **2 037 nodes, 0
unresolved**. Every supplier is either a published item in `items/` or a
currently scaffolded in-run item; the page-level `requires` resolve to the
published SYMR-6, Grothendieck, Artinian and blocks pages plus the in-run
batch-20 Hecke page. No prerequisite is absent from both the published
library and the current scaffold, so no scaffold addition is recommended.

Load-bearing interfaces were read and matched: published
`thm-defect-zero-blocks-are-simple-algebras` (defect trivial iff full matrix
algebra iff projective simple), `def-defect-group-and-numerical-defect-of-a-block`,
`def-splitting-p-modular-system-for-a-finite-group`,
`def-p-blocks-by-primitive-central-idempotents`,
`thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular`,
`thm-cartan-matrix-is-d-transpose-d`,
`thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads`,
`prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality`,
`def-q-integer-q-factorial-and-q-multinomial`,
`def-grothendieck-group-of-an-essentially-small-abelian-category`,
`def-partition-young-diagram-and-conjugate-partition`,
`def-hook-arm-leg-and-hook-length`, `def-dominance-order-on-partitions`;
in-run `thm-q-schaper-virtual-radical-layer-formula` (PID/prime/lift
hypotheses), `def-type-a-q-schur-algebra-and-weyl-modules`,
`def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras`,
`thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`,
`lem-semistandard-weight-dimensions-detect-virtual-weyl-classes`,
`lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents`,
`lem-central-idempotent-decompositions-of-one-are-unique`,
`prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`,
`def-e-regular-and-e-restricted-partitions`,
`def-type-a-hecke-specht-module-and-cell-form`, and batch-19
`def-removable-border-strip-and-height`,
`lem-hooks-correspond-to-removable-border-strips`.

## 6. Independent recomputations (examples page)

- e = 3, lambda = (6,5,2,1^3): beta-set {11,9,5,3,2,1}; top-packed beads
  {3,0} on runner 0, {1} on runner 1, {8,5,2} on runner 2; C_3 = (3,1),
  Q_3 = ((2,1), empty, (1)), weight 4 and 16 = 4 + 3*4.
- e = 3, lambda = (4,3,2,1): beta-set {7,5,3,1} on runners 1,2,0,1;
  top-packed {4,2,1,0}, P = (1); 10 - 1 = 9 = 3*3.
- Counterexample at p = 3: (5) has hook lengths {5,4,3,2,1} with exactly one
  removable 3-hook and core (2); (4,1) has hook lengths {5,3,2,1,1} with
  exactly one removable 3-hook and core (1,1); the cores differ, so the two
  labels cannot share a block (Nakayama).
- Weight-one n = 3, e = p = 3, gamma = empty: labels (3) > (2,1) > (1,1,1);
  (3) is not 3-restricted, the other two are. Characteristic-3 computation:
  S^(3) = triv, S^(2,1) has trivial submodule with sign quotient, so
  [S^(2,1)] = [D^(3)] + [D^(2,1)], and S^(1,1,1) = sgn; the p-regular matrix
  with rows (3),(2,1),(1,1,1) and columns (3),(2,1) is [[1,0],[1,1],[0,1]],
  as stated.

## 7. Observations and residual uncertainty (non-blocking)

1. Coverage disposes Tomczak §4.2 onwards (Theorem 4.13 core–quotient
   bijection, Theorem 4.16, quotient towers, e-adic expansion, cores of the
   irreducibles) as *deferred with destination*
   `modular-branching-and-the-good-node-crystal`. No current run item
   consumes that material (checked across the run's scaffold items). This matches
   the design's SYMR-8 inventory, so the pair is not under-scoped; the owner
   may wish to confirm that the destination pair carries it (or consciously
   drop it) at that pair's Step 3a.
2. `artinian-rings-and-length` is a declared page `requires` with no
   item-level use on either page (already recorded in the batch-21 notes); it
   is published, so this is an unreferenced edge, not an unmet prerequisite.
3. The clause "exactly lambda_1 is not e-restricted while lambda_2,...,lambda_e
   are", and the Schur-functor / conjugate-sign renormalisation of the matrix,
   extend the printed wording of Mathas Proposition 5.38 (which gives the
   count, dominance order and bidiagonal entries). They are part of the
   design's declared claim; the scaffold records a proof route (Jantzen
   valuations plus the e-restricted simple classification) and computational
   checks. This review re-verified the q = 1, e = 3 case directly. Retained as
   a Step-3b proof obligation, not a scope gap.
4. The Mathas PDF's math font encoding is partly control-characterised; digits
   and theorem labels were decoded and Theorems 5.34–5.38, the (4,3,2,1)
   example and the orientation sentence were read directly. The dominance
   symbol glyph itself could not be visually rendered in this session, but
   the surrounding statements fix the ordering and the matrix unambiguously.
5. The Hecke corollary's source proof is terse at the Specht-to-Weyl transfer;
   the scaffold's completion follows the fully written Lyle–Mathas
   Proposition 2.3 argument (read this session), and Step 3b must keep it, as
   the batch-21 notes already require.

## 8. Decision

`sufficient`. The planned definitions, results and examples adequately cover
the intended subject (abacus combinatorics, e-core/e-quotient/e-weight,
type-A Hecke and q-Schur block classification, Nakayama blocks, weight-zero
defect-zero and the weight-one pattern with its defect-weight boundary); the
source coverage is complete, re-fetched and statement-checked; the full
dependency closure has no unresolved prerequisite. Scope only — no scaffold
file was edited and no item approval is implied.
