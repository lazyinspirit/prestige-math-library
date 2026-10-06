# Batch 21 notes — Surface Riemann-Roch and the Hodge Index Theorem

Run `frontier-40-geometry-braids-rep-27`, role beta, batch 21. One A/B pair:
`surface-riemann-roch-and-the-hodge-index-theorem` (order 897, `algebraic-geometry`)
and `surface-riemann-roch-and-the-hodge-index-theorem-examples` (order 898).

Artifacts written by this dispatch:

- `research/frontier-40-geometry-braids-rep-27-batch-21.pages.json` (18 items: 12 A, 6 B)
- `research/frontier-40-geometry-braids-rep-27-batch-21.coverage.json` (2 pages, 5 source entries, 37 harvested results)
- `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` (18 readiness records)
- `research/frontier-40-geometry-braids-rep-27-batch-21.cross-batch-dependencies.json` (empty array)
- this note

## Owner direction and design/plan reconciliation

`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read
before construction. It fixes the 27 selected pairs, permits lower-order in-run
dependencies, and leaves publication to the owner. Batch 21 is one of the 11
algebraic-geometry pairs; its scope is unchanged.

Design section: `research/plan-algebraic-geometry-expansion-track.md`, AG-SURF-2 row
(the order-897 mention at L42, section in the "Geometry and scheme-theory
extensions" table; the batch task's "L42" is the id mention, the contract row is
L253). The design promises:

- A items `thm-riemann-roch-for-smooth-projective-surfaces`,
  `thm-hodge-index-theorem-for-smooth-projective-surfaces`,
  `cor-negative-definiteness-of-primitive-numerical-divisors`;
- B items `ex-hodge-index-on-p1-times-p1`, `ex-hodge-index-on-a-blowup`,
  `cex-intersection-form-not-negative-definite-on-all-divisors`;
- fill V25 Exercise 20.2.B (adjunction plus
  χ(O_X(D)) = χ(O_X) + ½D·(D−K_X)), prove Theorem 20.2.13 from its exact
  hypotheses, and state numerical-equivalence/base-field assumptions;
- sources V25 Thm. 20.2.13 with proof §§20.2.14–20.2.19 and Exercise 20.2.B; the
  design flags "a second independent full treatment and the exercise details" as
  open gates.

`research/plan-spec.json` orders 897/898 were compared with the design: page ids,
category, order, companion and `requires` agree, and the plan's item lists are
empty (the design's inventories are the scope contract, not plan entries). No
conflict between the design and the current plan was found; nothing in the owner
direction contradicts the design. Every promised claim is preserved, and the
design's three A and three B items are all present.

The design's two open gates are closed in this scaffold:

- second independent full treatment: MIT 18.727 (A. Kumar / K. Venkatram),
  Lecture 2, full 5-page note, which proves adjunction, Riemann-Roch (Theorem 1),
  the positivity remark for ample classes, the Hodge index theorem (Lemma 1,
  Proposition 1, Corollary 1, Theorem 3) and the blowup local facts; corroborated
  by Stacks Project §33.45 (tags 0BEL–0BEY) for positivity and numerical
  intersections;
- exercise details: filled by the local items below (a one-line χ-definition
  proof of Riemann-Roch, a χ-form of adjunction, and the complete Vakil
  §§20.2.15–20.2.19 Hodge-index route), written as manifest proof strategies.

## Inventory and dependency levels

The pair's A page was expanded to a locally closed 12-item inventory; every
prerequisite is on the same A page, and the hard 100-item cap is far from
binding. The B page carries the three example-specific prerequisite lemmas
(the structure of $\mathbb P^1_k\times_k\mathbb P^1_k$, and the two Picard
computations), each of which is used only by later items of the same B page, as
SCHEMA.md permits; nothing outside the B page rests on them. Levels are in-run
levels only (published suppliers do not raise them).

| level | item | kind |
|---|---|---|
| 0 | `def-canonical-divisor-of-a-smooth-projective-surface` | definition |
| 1 | `lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces` | lemma |
| 1 | `thm-riemann-roch-for-smooth-projective-surfaces` | theorem |
| 0 | `def-numerical-equivalence-and-neron-severi-space` | definition |
| 0 | `lem-ample-divisor-positive-intersection-on-smooth-projective-surface` | lemma |
| 0 | `lem-ample-twist-of-line-bundle-is-very-ample` | lemma |
| 1 | `lem-top-cohomology-vanishes-above-canonical-ample-threshold` | lemma |
| 2 | `lem-positive-square-divisor-has-effective-multiple` | lemma |
| 3 | `thm-hodge-index-theorem-ample-case` | theorem |
| 4 | `thm-hodge-index-theorem-for-smooth-projective-surfaces` | theorem |
| 5 | `cor-negative-definiteness-of-primitive-numerical-divisors` | corollary |
| 6 | `rem-surface-riemann-roch-hodge-index-conventions` | remark |

| level | item | kind |
|---|---|---|
| 0 | `lem-product-of-projective-lines-is-a-smooth-projective-surface` (B) | lemma |
| 1 | `lem-picard-group-and-intersection-form-of-p1-times-p1` (B) | lemma |
| 6 | `ex-hodge-index-on-p1-times-p1` (B) | example |
| 0 | `lem-picard-group-of-a-point-blowup-of-the-projective-plane` (B) | lemma |
| 6 | `ex-hodge-index-on-a-blowup` (B) | example |
| 5 | `cex-intersection-form-not-negative-definite-on-all-divisors` (B) | counterexample |

## Dependency and closure evidence

- Actual proof dependencies were read item by item. The proofs use the published
  linear-algebra-free route: Riemann-Roch on a surface is a two-line consequence
  of the *defining alternating sum* of the intersection product plus Serre duality
  (MIT 18.727 Theorem 1; Vakil Exercise 20.2.B(b)); adjunction for arbitrary
  (possibly singular) effective divisors is a χ-computation using the structure
  sequence and the published degree/intersection identity, not the conormal
  sequence and not local factoriality of X.
- Positivity of ample classes against nonzero effective divisors is proved
  without Bertini: a very ample power embeds $X$ in $\mathbb P^N$, the target is
  the leading coefficient of the Hilbert polynomial of a curve supported on $D$
  (published `thm-hilbert-polynomial-degree-support-dimension` and
  `thm-serre-vanishing`), and its sign is recovered from eventual
  nonnegativity. This keeps the statement valid over an arbitrary field and
  avoids the char-0 hypothesis of the published Bertini item.
- The Hodge-index proof is Vakil §§20.2.15–20.2.19 verbatim in structure
  (threshold vanishing, effective multiple, ample case with the equality case,
  then reduction to $H^2>0$ via an ample reference class), so the general
  $H\cdot H>0$ hypothesis is proved, not assumed.
- The B-page structure lemma
  `lem-product-of-projective-lines-is-a-smooth-projective-surface` closes the
  one previously implicit prerequisite of the pair (the surface structure of
  $X=\mathbb P^1_k\times_k\mathbb P^1_k$). Its route is complete for an arbitrary
  field: the four standard product charts $\operatorname{Spec}k[u,v]$ are affine
  domains and share a common generic point, giving reducedness, irreducibility,
  integrality and (with the finite chart cover) pure dimension two; smoothness
  is the arbitrary-field clause of `lem-smoothness-stable-under-product-classical`
  in the local-standard-smooth convention; projectivity and properness come from
  the Segre closed immersion into $\mathbb P^3_k$; and the projections are base
  changes of the flat proper finitely presented morphism $\mathbb P^1_k\to
  \operatorname{Spec}k$, which is exactly the hypothesis set used by the
  cohomology-and-base-change step of the Picard computation.
- Every non-batch dependency resolves to a published item on disk (checked
  programmatically; 0 missing). The suppliers are the four `requires` pages plus
  published items from the projective/ample, products/Segre and Hilbert-polynomial
  developments (`thm-ample-powers-very-ample-proper-base`,
  `thm-segre-line-bundle-external-tensor`, `thm-hilbert-polynomial-*`,
  `thm-serre-vanishing`, `thm-serre-criterion-ampleness`,
  `lem-eventual-global-generation-coherent-twists`), all published.
- No dependency is consumed through a Recorded/unproved item; no Foundations page
  is involved; no Axiom-of-Choice-free claim was made stronger. AC is inherited
  through the published cohomology/Euler-characteristic suppliers everywhere it
  is used, and every item that assumes it says so.
- No in-run (cross-batch) dependency exists: the ledger input is `[]`, and
  `frontier-dependency-ledger.mjs refresh` reports zero batch-21 edges. All
  suppliers are published, i.e. out of run, so all levels above come from
  same-batch edges only.
- `item-dependency-levels.mjs check` currently exits 1 for the run *only*
  because other in-flight batches still have empty scaffold inventories;
  batch 4's missing `dependency_level` labels were supplied by its owner between
  two of our runs. A filtered recomputation over the run showed 0
  dependency_level mismatches and 0 cycles for all 18 batch-21 items.

## Sources and harvest

Five source entries (three independent treatments, two pages):

1. Ravi Vakil, *The Rising Sea*, author-hosted 2025-10-21 version,
   <https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf> — fetch
   stamp 9,643,655 bytes, 852 pages, sha256_16 `d07177aa0317c134` (matches the
   stored source report hash for this edition). Locators: Exercise 15.5.K
   (pp. 449–450); Exercise 16.2.E (pp. 461–462); §18.4.12 (p. 513); §§20.1–20.2
   (pp. 575–588): Exercise 20.1.K, Exercise 20.2.A, Exercise 20.2.B,
   Exercise 20.2.C, Exercise 20.2.D, Theorem 20.2.13 with §§20.2.14–20.2.19,
   §20.2.12/Exercise 20.2.U.
2. A. Kumar and K. Venkatram, MIT 18.727 *Algebraic Surfaces*, Spring 2008,
   Lecture 2, <https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf>
   — fetch stamp 198,721 bytes, 5 pages, sha256_16 `e279bfeed05297da`. Read in
   full: numerical equivalence; conormal adjunction and genus formula;
   Theorem 1 (Riemann–Roch) with proof; the ample-positivity remark;
   §1.2 Hodge index (Lemma 1, Proposition 1, Corollary 1, Theorem 3);
   §1.3 Nakai–Moishezon; §1.4 blowups.
3. The Stacks Project, *Varieties* §33.45 "Numerical intersections",
   <https://stacks.math.columbia.edu/tag/0BEL> — fetch stamp 37,184 bytes,
   18,732 text characters. Used for Definition 33.45.3/33.45.10 and
   Lemma 33.45.9 (positivity), Lemma 33.45.12 (degree of a restriction), and
   the asymptotic-Riemann-Roch row (declined).

Harvest: 37 results disposed as 24 `included`, 6 `inline`, 2 `already-published`
(published `thm-intersection-with-curve-as-degree-of-restriction` and
`lem-blowup-intersection-matrix-at-smooth-point`), and 5 `out-of-scope` with
per-result reasons (proper non-projective generalization, ruled-Hirzebruch/nef
cones, Nakai–Moishezon, asymptotic Riemann-Roch, and the Nakai–Moishezon
one-page section). No result was left undisposed, and no source was dropped, so
no `source_resolution` is present.

## Checks actually run (2026-10-04)

| check | command | result |
|---|---|---|
| manifest deps (mine) | `node tools/manifest-deps.mjs ...batch-21.pages.json` | 18 items, 0 errors (final re-run after adding the structure lemma) |
| policy (mine) | `node tools/content-policy.mjs --manifest-only ...batch-21.pages.json` | 18 scoped items, 0 errors, 0 warnings |
| manifest deps (whole run) | `node tools/manifest-deps.mjs ...batch-*.pages.json` | 271 items, 0 errors |
| policy (whole run) | `node tools/content-policy.mjs --manifest-only ...batch-*.pages.json` | 271 scoped items, 0 errors, 0 warnings; the batch-27 AC-token error seen earlier was repaired by its owner before this run |
| coverage | `node tools/coverage-checklist.mjs ...batch-21.coverage.json --require-destination` | 2 pages, 37 harvested, 0 errors, 0 warnings |
| source full text | `node tools/source-fetch-check.mjs --coverage ...batch-21.coverage.json --stamp` then without `--stamp` | 5/5 fetch-verified; check mode 5/5 resolved |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK (1420 pages with item lists; 247 still item-less, as expected mid-run) |
| external references | `node tools/extcheck.mjs` | OK (only pre-existing advisory rows on unrelated published pages) |
| forward references | `node tools/fwdcheck.mjs --quiet` | OK |
| dependency levels | `node tools/item-dependency-levels.mjs check --run ...` | final run exits 1 with 34 rows, all "empty scaffold inventory" on other in-flight batches; batch 21 has 0 mismatches and 0 cycles in the filtered recomputation (18/18 correct, including the new level-1 label on `lem-picard-group-and-intersection-form-of-p1-times-p1`). |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run ...` | refreshed; batch-21 input `[]`, no batch-21 edges |
| readiness | `node tools/step1-decisions.mjs record ...` ×17, then `step1Decision` over batch-21 items | 17/17 ready and current against the manifest at that time |
| re-check after B1/B3 strategy upgrade | `manifest-deps`, `content-policy --manifest-only`, `coverage-checklist --require-destination`, level recomputation, re-record + `step1Decision` for B1-B4 | 0 errors; all 17 records still current; 0 level mismatches |
| re-check after adding the P¹×P¹ structure lemma | `manifest-deps`, `content-policy --manifest-only`, `coverage-checklist --require-destination`, level recomputation, record ×3 (new item, B1, B2) + `step1Decision` | 0 errors; 18/18 records ready and current; 0 level mismatches; B2 re-recorded only because its supplier's hash moved |
| dependency-declaration completion pass | scripted comparison of every `[[wikilink]]` in each item's statement + proof strategy against its `deps`, then record ×11 + `step1Decision` | 0 links outside `deps` in all 18 items; five items gained cited-not-in-deps targets (`thm-serre-criterion-ampleness`; `def-very-ample-invertible-sheaf-relative`, `lem-very-ample-implies-ample`; `def-divisor-intersection-number-on-smooth-projective-surface`; `def-base-change-map-cohomology` ×2), and their transitive consumers were re-recorded; 18/18 ready and current; 0 level mismatches |

Unresolved findings outside this batch (recorded, not repaired: they belong to
their owners): none outstanding on the checks that read the whole run.
Whole-run `manifest-deps` and `content-policy --manifest-only` now pass with 0
errors (the earlier batch-27 `AC`-token failure was repaired by its owner). The
only remaining whole-run failure is the `item-dependency-levels` exit 1, which
is entirely other-batch scaffolding in flight ("empty scaffold inventory" rows
for batches whose dispatches have not yet written their manifest inventories).

## Uncertainty, caveats and escalations

- No escalation is required for this pair. The inventory is locally closed:
  the A-page items rest only on A-page prerequisites, and the three B-page
  prerequisite lemmas are used only by later items of the same B page. The
  inventory is well under the 100-item cap (12 A + 6 B), and no selected pair or
  plan entry was changed. The dispatch prefers prerequisites on the A page, but
  these three are example-specific computations and their placement is the one
  SCHEMA.md licenses for B pages; a reviewer preferring them on the A page can
  re-home them without touching any dependency edge.
- Base field: everything is stated for an integral **smooth** projective surface
  over an arbitrary field. Over an imperfect field regularity does not imply
  smoothness and the dualizing-bundle/Serre-duality inputs would not apply; the
  restriction is recorded in `rem-surface-riemann-roch-hodge-index-conventions`.
- Numerical equivalence is the equality case in the Hodge index theorem. The
  signature $(1,\rho-1)$ statement is conditional on finiteness of the Picard
  number (Néron–Severi is not proved here); negative definiteness on the
  primitive part is unconditional. This is stated in the corollary itself.
- Proof-length risk for Step 3: the three B-page lemmas
  (`lem-product-of-projective-lines-is-a-smooth-projective-surface`,
  `lem-picard-group-and-intersection-form-of-p1-times-p1`,
  `lem-picard-group-of-a-point-blowup-of-the-projective-plane`) rest on the
  Segre/product-chart and exercise routes of Vakil 15.5.K / 20.2.D. The two
  Picard strategies use the concrete constant-fibre-degree route: twist to make
  all fibre degrees zero, apply the published cohomology-and-base-change items
  to trivialise the pushforward, then read off the generators; the structure
  lemma supplies the surface, flatness, properness and finite-presentation
  hypotheses those applications need. All necessary published suppliers are
  declared as dependencies. These three lemmas remain the longest local
  arguments in the pair and should be checked first in review.
- No published defect was found in any actual prerequisite used. The one
  published statement deliberately weaker than convenient
  (`thm-hilbert-polynomial-degree-support-dimension`, "no positivity asserted")
  is used only through its degree statement plus Serre vanishing, which is
  sufficient. No published consumer debt blocks these suppliers.

## Next action

Step 3 authors should write the 18 items in dependency-level order, starting
with the level-0 definitions, the positivity/twist lemmas and the B-page
structure lemma, then the Hodge-index chain and the B-page examples.
`across-batch` inputs need no update during authoring; any later manifest edit
invalidates the affected readiness records and must be followed by re-recording
and a fresh
`node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`.
