# frontier-31a beta batch 15 — scaffold notes

## Scope and plan check

Read the combinatorics-and-categories design section for the assigned entry (the
mention at `research/plan-combinatorics-and-categories.md:3916` lies in §16,
whose surrounding §16.3 route is the relevant design) and
`research/plan-spec.json`.  They agree on the A page, order 433, its B
companion at order 434, and the A prerequisite
`property-star-and-comb-outcomes`; there is no design-versus-spec drift to
adjudicate.  The design requires a finite, simple, undirected graph convention,
nonempty blockade blocks, `module` rather than the ambiguous word
`homogeneous set` for a module, explicit orientation of sparse pairs, and an
integral rounding repair for geometric layers.  This pair uses only finite ZF
arguments.

The A page has 10 items and the B page has 4, both below the 60-item split
ceiling.  All 14 manifest objects carry explicit `deps`, including `deps: []`
where that would have been applicable (none are dependency-free here).

## Sources read and harvest

The complete source-by-source harvest, exact URLs, locators, headings/results,
and dispositions is `research/frontier-31a-batch-15.coverage.json`.

- Huang–Ju–Zhou, *Erdős–Hajnal beyond the five-vertex path*, v2, §5
  ‘Deducing property (*)’, is the target primary mathematical treatment.  Its
  complete §5 proof (Lemma 5.1, Claims 5.1.1–5.1.2, and the final layer sum)
  was read at `https://arxiv.org/html/2606.06258v2`.
- Diestel, *Graph Theory*, sixth edition, Chapter 1, is the independent
  textbook with an official harvestable table of contents.  The read ranges
  are §1.1 and §1.3 through Proposition 1.3.2 at
  `https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf`.
- Nguyen, *Notes on Recent Work on the Erdős–Hajnal Conjecture*, is the second
  independent treatment of the Erdős–Hajnal/blockade framework.  The read
  ranges are §1, the §3 blockade definition, and §5 at
  `https://web.math.princeton.edu/~tunghn/ehnotes.pdf`.

The target Lemma 5.1 is novel to the Huang–Ju–Zhou source; Diestel and Nguyen
are independent support for the graph and Erdős–Hajnal/blockade framework, not
an independently claimed proof of that new criterion.  Nguyen permits empty
blockade blocks, so its definition is deliberately not imported: the existing
library convention is nonempty blocks of positive width.

## Scaffold and proof route

| Item | Exact claim and conventions | Dependencies and source support | Proposed proof strategy |
| --- | --- | --- | --- |
| `def-structural-comb-partition-hypothesis` | Uniformly for every complement-of-`H`-free graph and every special-vertex `(ell,w)`-comb, each comb block is `X_i` disjoint union `Y_i`; `Y_i` is `F_1`-free; `X_i` has a pure blockade with `F_2`-free pattern; every such block is pure to every other comb block. | Existing comb, family-free, complement, pure-blockade and pattern definitions; Huang–Ju–Zhou Lemma 5.1 hypotheses. | State all quantifiers and nonempty-block conventions explicitly. |
| `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set` | If a `Y_i` has size at least `w/2`, its `F_1`-EH exponent gives the first property-(*) outcome. | Structural hypothesis; existing EH/clique/stable definitions; target proof before Claim 5.1.1. | Take common `c` in `(0,1]`; for `w >= 4`, `(w/2)^c >= w^(c/2)`. |
| `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade` | One block of width at least `w/(2ell)` in each of `ell` partitions gives a pure `(ell,w/ell^2)` blockade. | Structural hypothesis and existing purity/blockade definitions; Claim 5.1.1. | Select a transversal; cross-block purity supplies pairwise purity and `ell >= 4` supplies the width bound. |
| `lem-no-property-star-outcome-forces-a-small-structural-block-partition` | Failure of outcomes one and three leaves an `i` with `|X_i| >= w/2`, `t_i >= ell`, and every partition block at most `w/(2ell)`. | Previous two lemmas; target reduction after Claim 5.1.1. | Contrapose each prior outcome and sum the small blocks. |
| `def-integral-geometric-layers-of-a-decreasing-block-partition` | For decreasing nonempty blocks, `m_r` is the greatest integer `<= t` and `<= ell^(r/2)`; successive differences are the layers, ending at least `q` with `m_q=t`. | Existing blockade definition and real-power laws; target’s geometric layer paragraph; Diestel’s finite partition convention. | Define only integral indices; no unrounded `j <= ell^(r/2)` notation is admitted. |
| `lem-integral-geometric-layers-have-rounded-cutoff-bounds` | The layers cover all blocks and, before termination, `ell^(r/4) <= m_r <= ell^(r/2)`. | Integral-layer definition, power laws, Archimedean and well-ordering items; target layer argument. | Use finite maxima and choose termination; `floor(x) >= sqrt(x)` for `x >= 4` supplies the retained lower bound. |
| `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` | A clique/stable set in a pure blockade’s pattern lifts to selected pairwise complete/anticomplete blocks. | Existing pattern/purity/blockade definitions. | Unpack the pattern-graph edge definition, preserving common width. |
| `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade` | A layer whose blocks all have size at least `w/ell^(5r/2)` produces the second property-(*) outcome. | Structural hypothesis; layers and cutoff bounds; pattern lifting; EH; real powers; Claim 5.1.2. | The first `m_r` pattern vertices give `k >= m_r^c >= ell^(cr/4)`; with `c_2=10/c`, `k^c_2 >= ell^(5r/2)` and `k >= ell^(c/4)`. |
| `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part` | If every preterminal layer has a block below `w/ell^(5r/2)`, then its ordered blocks total less than `w/2`, contradicting `|X_i| >= w/2`. | Layers/cutoffs, geometric series, real powers; final target proof. | Initial layer is at most `w/(2sqrt(ell))`; later layers are at most `w ell^(1/2-2r)`.  At `ell >= 4`, their infinite majorant is `w(1/4+2/15)=23w/60 < w/2`. |
| `thm-the-structural-comb-partition-criterion-implies-property-star` | The uniform structural hypothesis implies property (*) for `H`. | Property-(*) definition, structural definition, all preceding decision and layer lemmas; Huang–Ju–Zhou Lemma 5.1. | Choose `c=min(c(F_1),c(F_2),1)`, `c_1=c_3=c/4`, `c_2=10/c`; the first/third-outcome reductions, a wide layer, or the strict layer-sum contradiction exhaust the cases. |
| B examples/counterexample | Concrete large-`Y`, wide-transversal and fourteen-block layer calculations, plus failure without cross-block purity. | Their stated A-item dependencies; source constructions and the design’s demand for explicit local cases/rounding. | Calculate the stated finite examples and an adjacency-table counterexample; B remains a leaf. |

## Rounding repair and known limits

The target source writes geometric cutoffs with unrounded expressions such as
`j <= ell^(r/2)`.  The manifest repairs that genuine indexing gap rather than
copying it: all cutoffs are finite integer maxima.  This loses exponent room,
so the theorem uses the conservative floor-safe constants
`c_1=c_3=c/4` and `c_2=10/c`, rather than the source’s `c/2, 5/c`.

The source’s displayed Lemma 5.1 begins with a locally named graph but ends by
asserting that `H` has property (*).  The proposed definition makes the
necessary uniform quantification over every complement-of-`H`-free ambient
graph explicit.  This is a formalization repair, not a claim that one fixed
graph proves a property of `H`.

No generic floor/ceiling item is already available in the library.  The
page-local finite-cutoff definition and lemma prove exactly the rounding facts
needed here; they do not silently add a general floor theory.  No later B item
is a dependency of the A proof.

## Validation record

Completed on 2026-09-05:

- `node tools/coverage-checklist.mjs --require-destination
  research/frontier-31a-batch-15.coverage.json`: 1 page, 25 harvested results,
  0 errors.  It gives one advisory low-yield warning (8 included results of 25)
  because the independent textbook and lecture notes also expose established or
  expressly out-of-scope material; each such disposition has its own reason.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-31a-batch-15.coverage.json`: 3/3 sources fetch-verified by
  the durable web-reader receipts recorded in the harvest.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-15.pages.json`:
  14 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-31a-batch-15.pages.json`: 14 scoped items, 0 errors, 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed.  The global
  plan reports acyclic declared page order and no unresolved item-level ids or
  B-page dependency violations among its written page lists.
- Required whole-run manifest-only policy was also run.  It reports seven
  pre-existing, unrelated missing dependencies: five in
  `frontier-31a-batch-1.pages.json` (the absent derived-functor group
  homology/cohomology definitions) and two in
  `frontier-31a-batch-3.pages.json` (the absent exponential convexity and
  monotonicity lemmas).  Batch 15 passes when scoped alone; no other batch was
  edited to mask these failures.
- `url-sweep --recover --fail-on-dead` attempted all three exact source URLs
  and archive variants.  The local runner could not resolve any host (`curl:
  (6) Could not resolve host`), so it reported 0/3 live and no archive recovery.
  This is a local DNS transport limitation, not an unverified source claim:
  each unchanged exact URL was opened as full text in the web reader and has a
  corresponding receipt in the coverage file.  No alternate source or archive
  substitution is justified by that contradictory runner-only failure.

Next action: author these 14 source-backed items at step 5 from this dependency
order and these locators; preserve the integer-cutoff proof route and its
conservative constants.

## Step-3 fix pass

Reviewed `research/frontier-31a-alpha-h-step3-scaffold-review.md`, whose
Batch-15 dependency finding is unnumbered.  It is quoted below by its supplied
description rather than being assigned a new number; the five numbered source
declines retain their existing `decline_id` values from
`research/frontier-31a-alpha-h-scope-decisions.json`.

- Finding id: **unlabelled — “The rounded-layer route needed declared
  real-power order support.”** Disposition: **applied and confirmed**. The
  reviewer-required dependencies are already present in
  `research/frontier-31a-batch-15.pages.json`: `def-real-power`,
  `thm-real-power-laws`, `thm-natural-logarithm-laws`, and
  `thm-exponential-is-strictly-increasing` occur on the large-`Y`, wide-layer,
  and final theorem items; `lem-rational-power-monotone` and
  `thm-real-power-agrees-with-rational-exponent` occur on the rounded-cutoff
  and successive-small-layers lemmas. Evidence: Huang--Ju--Zhou, §5
  “Deducing property (*)”, Lemma 5.1 and Claims 5.1.1--5.1.2,
  <https://arxiv.org/html/2606.06258v2>, HTML lines 856--915, explicitly uses
  the large-`Y` exponent lowering, geometric cutoffs, and the final sum. The
  floor-safe scaffold retains the reviewed `c_1=c_3=c/4`, `c_2=10/c` route;
  the `ell=4` tail is bounded by `23w/60<w/2`. Changed scaffold record:
  `research/frontier-31a-batch-15.pages.json` was already repaired and is
  intentionally unchanged; this note records the verified application.

- Finding id: `36a7e316d1455bd7d50c84d108b5f7478bb71707414558312d6b3e1d66072776`
  (Diestel, Proposition 1.3.1). Disposition: **out-of-scope stands**. Evidence:
  the verified official Chapter 1 source,
  <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf>,
  §1.3, printed pp. 7--8, states the minimum-degree path result; the target
  proof instead begins from a structural comb partition in Huang--Ju--Zhou §5.
  Changed scaffold record: none; the existing coverage row keeps this exact
  source-specific reason.

- Finding id: `3468be6b1b44cd4155f710de0d93a162419441163cf1937e529b0f27d22fff3c`
  (Diestel, Proposition 1.3.2). Disposition: **out-of-scope stands**. Evidence:
  the same verified §1.3 range gives the minimum-degree/girth-cycle bound,
  which is not a premise or intermediate result of the comb-partition or
  geometric-layer argument. Changed scaffold record: none; the coverage row
  remains the correct disposition.

- Finding id: `9dae6965c1db5a840988cee3bdd47d7df5510b69980798288cee786f3047d50b`
  (Nguyen, §3 blockade definition). Disposition: **out-of-scope stands**.
  Evidence: the verified definition at
  <https://web.math.princeton.edu/~tunghn/ehnotes.pdf>, §3, printed p. 8,
  permits possibly empty blocks, whereas this scaffold's finite structural
  blocks are nonempty with positive width. Changed scaffold record: none;
  importing that definition would contradict the stated convention.

- Finding id: `5c0893b073b5ac55945fd8fdfe418682f25280cc01ab6d326f99d318dc12c45f`
  (Nguyen, Lemma 5.3). Disposition: **out-of-scope stands**. Evidence: the
  verified §5 lemma is the restricted-set iteration step for bounded
  VC-dimension, not a comb-partition step; the selected Huang--Ju--Zhou §5
  proof invokes no such hypothesis. Changed scaffold record: none; its
  existing coverage reason remains accurate.

- Finding id: `5bbf9b65e5ff919fdbf9691778a8fcde36a99f5b5a1d438deb769a59703c5ed1`
  (Nguyen, §5 bounded-VC iterative-sparsification route). Disposition:
  **out-of-scope stands**. Evidence: the verified section opens with the
  bounded-VC theorem and proceeds through the separate iterative route; it
  neither supplies nor is required by the finite structural criterion. Changed
  scaffold record: none; the existing source-specific coverage disposition is
  retained.

Fresh source and validator evidence on 2026-09-05: all three URLs in
`research/frontier-31a-batch-15.coverage.json` opened as their recorded full
texts, and `source-fetch-check` reports 3/3 fetch-verified. The primary §5,
Diestel's harvested §1.1/§1.3 range, and Nguyen's harvested §1, §3, and §5
ranges were re-read. `manifest-deps` reports 14 items and 0 errors;
batch-scoped and whole-run manifest-only `content-policy` report 14 and 908
scoped items respectively, both with 0 errors and 0 warnings;
`validate-plan` passes. `coverage-checklist --require-destination` has 0
errors and its one low-yield advisory is exactly the five reviewed declines
above. `scope-decisions check --run frontier-31a --group h` reports 19 current
declines and 0 errors.

## Step-5 authoring

Authored the planned draft A/B pages and all fourteen planned items: two
definitions, seven supporting lemmas, the structural-criterion theorem, three
examples, and the cross-block-purity counterexample. The theorem retains the
integral-cutoff repair with $c_1=c_3=c/4$ and $c_2=10/c$; no claim was dropped
or narrowed. B claims are `ai-generated` with generation data; the source
formalizations are truthfully marked `ai-altered`.

The primary source was Huang--Ju--Zhou, complete §5, Lemma 5.1 and Claims
5.1.1--5.1.2 at the recorded arXiv locator. The proof-contract records all 12
proof-bearing items, exact dependency citations, derivations, and boundary
worksheets.

- focused `precheck` on all 14 manifest item paths: 12 proof-bearing items,
  0 failing;
- `proof-contract --strict`: 0 errors, 0 warnings, 12/12 checked;
- `validate-plan.mjs research/plan-spec.json`: passed (global advisory output
  only);
- `content-policy.mjs research/frontier-31a-batch-15.pages.json`: 14 scoped
  items, 0 errors, 0 warnings.

No authoring blocker remains.
