# Batch18 — `the-degenerate-ariki-categorification-theorem` (KL-8)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair at orders 1792/1793,
category `special-topics-in-representation-theory`, `requires` unchanged
(`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`,
`grothendieck-groups-and-graded-cartan-pairings`). Owner authoring direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) was read
first; it preserves the approved scope of this pair and authorizes no other pair.

Scaffold written: **7 A items + 4 B items = 11**, all recorded `ready`; no page split was needed
(both pages far below the 100-item cap) and no source escalation was needed (8/8 sources
fetch-verified). No item file, published content, shared plan, engine state, verdict or foreign
batch artifact was edited. Only this batch's manifest, coverage, notes, cross-batch dependency
input and Step-1 readiness records were written, plus the derived unified frontier ledger refresh.

## Design, plan, owner direction and recorded conflicts

- **Design locator.** The dispatch names `research/plan-kazhdan-lusztig-track.md` L228. That line
  lies inside the KL-6 table; the KL-8 section (`## KL-8 — The degenerate Ariki categorification
  theorem`) is at L320-336 with its B inventory at L393-396 and the frozen-seam note at L481. The
  complete KL-8 design section was read and followed; the L228 locator is recorded here as a stale
  locator, not a mathematical conflict.
- **Plan comparison (`research/plan-spec.json`).** No page-level conflict: the plan carries
  `the-degenerate-ariki-categorification-theorem` at order 1792 and its companion at 1793, both
  `special-topics-in-representation-theory`, the same titles and the same `requires` as the batch
  task, with empty `items[]` (inventories land at this stage). The serial owner Category-O
  prerequisite/order correction moved this pair to 1792/1793 (previously 1554/1555); the current
  orders and the two `requires` are exactly what the batch manifest now carries.
- **Design vs source on the hypothesis, recorded.** The design states the main theorem "under the
  bounded-below charge hypotheses", and the Schur-Weyl/parabolic proof in the source
  (Theorem 3.10 and the reduction at the start of its proof; the same reduction as in the proof of
  Theorem 3.8) indeed runs for bounded-below `I` and then extends to arbitrary consecutive `I` by
  the block truncation argument. The scaffold keeps the bounded-below hypothesis as the standing
  hypothesis of the Schur-Weyl step and records the source's truncation extension explicitly in
  the statement of `thm-degenerate-ariki-categorification`, because the charge-reversal proposition
  needs the theorem for `I = Z`. This is a design/source reconciliation, not a change of scope: no
  claim of the design is dropped, and the bounded-below case is the case the in-run parabolic
  suppliers (batch16) actually prove.
- **Owner direction.** None of the binding owner sections changes this pair's scope. The Category-O
  prerequisite/order reconciliation supplies the current orders and the exact supplier interfaces
  from batches 15-17, which the manifest uses; the quantum/Fock and KLR sections are consumed only
  through the batch-16/batch-17 scaffolds. No owner conflict required adjudication.
- **Nondegenerate pointer.** The design's `rem` and the B counterexample must "point to QG-8 plus
  the cyclotomic Hecke-KLR isomorphism". QG-8 is the in-run page
  `cyclotomic-klr-algebras-and-highest-weight-categorification` (batch 11), which is not yet
  scaffolded. The two items therefore name QG-8 and the Hecke-KLR bridge in prose (no wikilink and
  no `deps` entry), and record the Fock/root-of-unity parameter distinction from [BK4] directly;
  a link can be added at Step 4 once batch 11 owns item ids.

## Items and proof routes

All 7 A items are the design's exact IDs and kinds in the design's dependency order; the 4 B items
are the design's exact example/counterexample IDs.

| item | kind | proof route (source) |
|---|---|---|
| `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | definition | [BKAR] §3.2-3.3 (3.7)-(3.20); blocks via primitive central idempotents; Cartan pairing and residue functors on the tower |
| `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | theorem | [BKAR] Theorem 3.10 right square + Theorem 2.2: transfer across the Schur functor; dual-canonical basis, standard monomials, Chevalley action, generation |
| `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` | theorem | [BKAR] Theorem 3.10(i),(iv),(v): Schur adjunction, quasi-canonical family, Cartan = Shapovalov, adjoint Chevalley actions |
| `thm-degenerate-ariki-categorification` | theorem | [BKAR] Theorem 3.10 complete (i)-(vi) plus the truncation extension; normalization `P_A = q^a T_{A\uparrow}` at `q=1` |
| `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one` | theorem | [BKAR] Theorem 3.10(ii)-(iii) with (2.16)-(2.21) and the parabolic KL form (2.18); unitriangular Bruhat support |
| `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | proposition | [BKAR] §3.7 (3.33)-(3.40), Lemmas 3.12-3.13, Theorem 3.14; §4.3-4.4 Lemma 4.10, Theorems 4.15/4.17, Corollaries 4.18-4.19 |
| `rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges` | remark | [BK4] Corollary 2 + Main Theorem; [BKAR] Introduction; no implication asserted |
| `ex-degenerate-ariki-decomposition-numbers-in-small-rank` | example | two-factor level-2 Fock data (I={0}, Λ=2Λ0): L10 = M10 − sM01, full 3×4 decomposition matrix |
| `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block` | example | degree-1 block C[x]/(x²): [Y(01)] = 2[D(01)] but Cartan pairing 1; P01/L01 dictionary; degree-2 singleton weight class |
| `ex-charge-reversal-and-fock-involution-in-a-small-example` | example | symmetric charge (0,0), I=Z, degree ≤ 2: transpose 01↔10, σ* on the small blocks, tilting/projective dictionary |
| `cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one` | counterexample | generic-only isomorphism [BK4, Cor 2]; q=−1 specialization C[T]/(T+1)² vs degenerate C[S2]; affine e and grading absent |

No claim of the design was weakened. Every dependency added beyond the design's prose is a
load-bearing supplier and is named in the item's `deps` and coverage rows.

## Sources (full text actually read and stamped)

- [BKAR] Jonathan Brundan and Alexander Kleshchev, *The degenerate analogue of Ariki's
  categorification theorem*, Math. Z. 266 (2010) 877-919, <https://arxiv.org/pdf/0901.0057>,
  complete 44-page article; Sections 1, 2.1-2.8, 3.1-3.7 and 4.1-4.4 were read in the retrieved
  full text (the central monomial/canonical/dual-canonical/quasi-canonical bases, Theorems 2.2,
  2.5, 2.7, 3.1, 3.6-3.10, 3.14, Lemmas 3.12-3.13 and 4.10-4.19).
- [BKHL] Brundan-Kleshchev, *Schur-Weyl duality for higher levels*, Selecta Math. (N.S.) 14 (2008)
  1-57, <https://arxiv.org/pdf/math/0605217>, complete 50-page article; Lemma 3.5, Theorem 4.5,
  Corollary 4.6, Theorem 5.13, Lemma 5.16, Corollary 6.7, Theorems 6.9-6.15 and (6.20) read.
- [BKMEM] Brundan-Kleshchev, *Representations of shifted Yangians and finite W-algebras*, Mem.
  Amer. Math. Soc. 196 (2008), no. 918, <https://arxiv.org/pdf/math/0508003>, complete 109-page
  memoir; Introduction, §4.4 (parabolic category O(π), (4.38)-(4.45)) and §8.1-8.5 (Skryabin,
  tensor identities, translation functors, Whittaker functor) read as the independent
  monograph-level treatment of the same Schur-Weyl/parabolic route.
- [BK4] Brundan-Kleshchev, *Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras*,
  Invent. Math. 178 (2009) 451-484, <https://arxiv.org/pdf/0808.2032>, complete 32-page article;
  §1 Main Theorem, Corollaries 1-2 and the following paragraph, and §6 read (generic isomorphism;
  type A^{(1)}_{e-1} quiver for e>0; the equivalence with Ariki's generic theorem).
- [DM] O. Dudas and J. Michel, *Lectures on Finite Reductive Groups and Their Representations*,
  <https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf>, complete 74-page
  lecture-note set; §11.2-11.3 with Definition 11.3 (printed p. 46) read for the generic Hecke
  algebra presentation `T_s^2 = (q_s-1)T_s + q_s` used in the counterexample's q=−1 computation.

`node tools/source-fetch-check.mjs --coverage research/frontier-44-special-representation-examples-28-batch-18.coverage.json --stamp`
reports **8/8 source(s) fetch-verified (8 newly stamped)** and check mode resolves 8/8 with no
documented drops. Every harvested source heading is dispositioned in the coverage file (43 rows:
included/inline into the batch items or named in-run/published page destinations, plus explicit
out-of-scope reasons for the Koszul grading and the modular comparison).

## Normalization dictionary recorded in the contracts

- Parameter one throughout: KL-8 is the ungraded `q=1` statement. Batch16 uses source parameter
  `s` with library parameter `t=s^{-1}`; the four Fock families are `M_A` (monomial), `L_A`
  (dual-canonical, ordinary-bar fixed), `T_A` (canonical), `P_A` (quasi-canonical), with
  `M_B = sum_A d_{A,B}(s) L_A` and `P_A = sum_B d_{A,B}(s) M_B`, and at parameter one the
  normalization power `q^{(2Λ-α,α)/2}` disappears so that `P_A = T_{A\uparrow}`.
- Hecke side: `P_A` is the class of `Y(A)` and `L_A`/`D_A = pi L_A` the class of `D(A)`; the
  Cartan pairing is the Hom pairing `dim Hom(P,M)`, not a composition-multiplicity matrix; the
  degree-1 block example records the difference explicitly.
- The bounded-below charge hypothesis means `I` bounded below (so the diagram of `Λ` is finite and
  the level-`l` Schur-Weyl duality with finite-dimensional parabolic category O applies); the
  extension to arbitrary consecutive `I` is by the source's block/direct-limit argument and is
  recorded in the main theorem's statement.

## Cross-batch dependencies

`research/frontier-44-special-representation-examples-28-batch-18.cross-batch-dependencies.json`
carries 71 rows (70 item + 1 page), all `open` for ordinary supplier-before-consumer authoring
and review: the batch-16 items (Fock module and four bases, parabolic K0/Fock identification,
three distinguished bases, highest-weight global bases, Fock pairing, Ringel dual, tiltings) and
the batch-17 items (degenerate cyclotomic Hecke algebra, stable-range/block idempotents, residue
functors, higher-level Schur-Weyl generator and double centralizer, Schur functor images,
translation interwining), plus the page edge to
`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`. The published second `requires`
supplier, `grothendieck-groups-and-graded-cartan-pairings`, is outside the run and therefore does
not produce a ledger edge; its items are used directly as published dependencies. The derived
unified ledger was refreshed with
`node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
(refreshed and deduplicated; 529 in-run edges, batch-18 rows included).

## Checks (actual results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no error for any batch-18 item: all 11 declared `dependency_level`s equal the computed labels
  (36, 39, 40, 41, 42, 43, 42 on the A page; 43, 42, 44, 43 on the B page), 0 label mismatches,
  0 cycles, 0 malformed dep arrays; the recomputed label audit after the final wording edits is
  unchanged. The only reported lines are `empty scaffold inventory` for the three still-unscaffolded
  sibling pairs (batches 11, 24, 25), which are not part of this batch.
- `node tools/manifest-deps.mjs research/frontier-44-special-representation-examples-28-batch-18.pages.json`
  — `manifest-deps: 11 item(s), 0 normalized, 0 error(s)`; whole-run invocation over all batch
  manifests: `manifest-deps: 582 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-44-special-representation-examples-28-batch-*.pages.json`
  — `content-policy: 582 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-44-special-representation-examples-28-batch-18.coverage.json --require-destination`
  — `2 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage …-batch-18.coverage.json --stamp` — 8/8
  fetch-verified, 8 newly stamped; check mode 8/8 resolved, 0 documented drops.
- `node tools/frontier-item-gate.mjs --run frontier-44-special-representation-examples-28 --tool validate-plan`
  — final result **OK**: "declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 50 page(s) with item lists".
  One non-blocking `[redundant-prereq]` advisory names this pair
  (`the-degenerate-ariki-categorification-theorem` requires `grothendieck-groups-and-graded-cartan-pairings`
  directly although it is already reached through `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`).
  It is preserved because the plan and the design declare the full `requires` set; recorded for the
  Step-4 reconciler, no plan or design text was edited. The six planned pages without item lists
  are the sibling unscaffolded pairs of batches 11/24/25.
- `extcheck`/`fwdcheck` in item mode remain at the documented Step-1 boundary: run on the explicit
  batch-18 selection they report `[focus-item-unknown]` for the manifest-only IDs and FAIL closed,
  because item files are deliberately absent before Step 3. No batch-18 item declares `forward_refs`,
  `proved_here`, `external_refs` or `external_dependency`, so no external-reference or
  retirement-policy finding is hidden by the boundary.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `refreshed and deduplicated`; 529 in-run edges, batch-18 rows included, 25 orphaned review rows
  (published suppliers outside the run) preserved for provenance.
- Label audit and readiness refresh: after the final wording passes on five statements the
  affected Step-1 records were stale and were re-recorded in prerequisite order; the check now
  reports 0 open batch-18 rows. No escalation was created or overwritten.

## Step-1 decisions

All 11 items were recorded `ready` in prerequisite order with the examined dependency IDs and
evidence in `research/frontier-44-special-representation-examples-28-step1-<item>.json`; after the
final statement-wording pass the ten affected records were refreshed, so every batch-18 record is
current (`node tools/step1-decisions.mjs check --run …`: 581/582 run items ready, no batch-18 row
open; the single open row is the pre-existing batch-10 owner-held KLR escalation). No owner
escalation was created or overwritten. Owner/operator reconciliation and the engine's Step-1 gate
follow; neither a worker exit nor a readiness record is independent mathematical approval, and
Step 3 provides that review.

## Honesty notes

- The B-page computations were re-derived at scaffold level from the source's displayed formulas,
  not quoted from memory: the two-factor transition matrix (L10 = M10 − sM01, P01 = M01 + sM10),
  the 3×4 unitriangular decomposition matrix, the degree-1 block C[x]/(x²) with [Y(01)] = 2[D(01)]
  against the Hom pairing 1, the transpose dictionary 01↔10 on the symmetric charge, and the
  specialization `T^2 = (v-1)T+v` at `v=-1` giving C[T]/(T+1)². These are finite checks; the
  general theorems remain the source's.
- The counterexample does not claim the two theories are unrelated: the generic isomorphism
  [BK4, Corollary 2] is real, and the comparison of primitive-p-th-root blocks with degenerate
  blocks in characteristic p (loc. cit. §6) is a genuine further result. What fails is the
  proposed implication to all parameters.
- A first pass of this analysis briefly treated the nontrivial rank below the four-box parabolic
  window as if it could produce a decomposition number greater than one; the recorded example
  therefore deliberately stays in the two-factor rank with all parabolic KL coefficients 0/1 and
  says so. No example claims a coefficient that was not recomputed.
