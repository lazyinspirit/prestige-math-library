# Step 3a Reader Report — Batch 4

**Run:** `physics-td-qft-rpm-62-2026-10-14`  
**Role:** reader  
**Batch:** `4`

## Opened inventory

Assigned pages:

- A page `td-math-nonsmooth-equilibrium` — `library/thermodynamics-mathematics/td-math-nonsmooth-equilibrium.md`.
- B page `td-math-nonsmooth-equilibrium-examples` — `library/thermodynamics-mathematics/td-math-nonsmooth-equilibrium-examples.md`.

Assigned A-page items, read in their dependency order:

- `def-tdmath-extended-convex-function`
- `def-tdmath-fenchel-transform-and-subgradient`
- `lem-tdmath-extended-convex-epigraph-equivalence`
- `lem-tdmath-closed-convex-separation`
- `lem-tdmath-fenchel-young-equality`
- `thm-tdmath-finite-dimensional-biconjugation`
- `thm-tdmath-fenchel-attainment`
- `thm-tdmath-finite-mixture-envelope`
- `cor-tdmath-ordered-finite-mixture-envelope`
- `lem-tdmath-lever-rule`
- `lem-tdmath-concave-affine-maximizer-and-hessian`
- `lem-tdmath-constrained-curvature`
- `lem-tdmath-stoichiometric-tangent-cone`
- `thm-tdmath-local-implicit-rank`
- `thm-tdmath-phase-dimension`

Assigned B-page examples:

- `ex-tdmath-vertical-separation-biconjugate`
- `ex-tdmath-flat-face-nonunique-minimizer`
- `ex-tdmath-singular-phase-rank`
- `ex-tdmath-water-reaction-boundary-tangent`

For the conditional mixture corollary, I also opened its current batch-3 prerequisite page `td-math-ordered-composition` and the relevant current draft dependency chain: `def-tdmath-tagged-scalable-compound`, `lem-tdmath-compound-mass-well-defined`, `def-tdmath-comparison-and-stability`, `lem-tdmath-reciprocal-naturals-tend-zero`, `def-tdmath-signed-comparison`, `lem-tdmath-spectator-cancellation`, `lem-tdmath-reference-order`, `lem-tdmath-reference-supremum-bounds`, and `thm-tdmath-additive-entropy-representation`.

I opened the exact statement or definition used from each published imported mathematical prerequisite in the assigned items and the cited batch-3 chain. The suppliers are pinned in `research/math-imports.json` and include: `cor-mean-value-theorem`, `cor-of-one-positive`, `def-c-one-map-and-local-inverse`, `def-canonical-natural`, `def-ck-euclidean-maps-and-diffeomorphisms`, `def-complete-ordered-field`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-euclidean-inner-product`, `def-finite-sum`, `def-infimum`, `def-interval`, `def-invertible-euclidean-linear-map`, `def-metric-topology`, `def-nat-addition`, `def-nat-order`, `def-natural-numbers`, `def-real-limit`, `def-total-derivative-in-euclidean-space`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `lem-finite-set-has-max`, `lem-finite-sum-laws`, `lem-finite-sum-reindexing-and-fubini`, `lem-inf-epsilon`, `lem-nat-add-commutative`, `lem-nat-add-identity`, `lem-nat-order-add-compatible`, `lem-of-inverse-positive`, `lem-of-naturals-positive`, `lem-of-q-embeds`, `lem-of-sign-rules`, `thm-algebra-of-total-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule-for-total-derivatives`, `thm-compact-iff-finite-intersection-property`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-euclidean-implicit-function-theorem`, `thm-euclidean-inverse-function-theorem`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-infimum-property`, and `thm-of-archimedean`.

## Repairs and evidence

Four assigned draft statements did not state the positive Euclidean dimension required by the exact definitions and theorem suppliers they invoke. I made the hypotheses explicit; the mathematical arguments themselves were unchanged.

- `thm-tdmath-fenchel-attainment`, Statement ([item](/Users/ianx/Projects/prestige-math-library/physics/items/thm-tdmath-fenchel-attainment.md:58)): added that `d` is an integer with `d≥1`. The exact local convention in `def-tdmath-extended-convex-function` begins with integer `d≥1`; the proof also uses `thm-heine-borel-rn`, whose statement assumes `n≥1`.
- `thm-tdmath-finite-mixture-envelope`, Statement ([item](/Users/ianx/Projects/prestige-math-library/physics/items/thm-tdmath-finite-mixture-envelope.md:56)): specified integers `m≥1` and `d≥1`. The function, conjugate, and biconjugation suppliers are stated for positive dimension; `thm-tdmath-finite-dimensional-biconjugation` explicitly assumes `d≥1`.
- `cor-tdmath-ordered-finite-mixture-envelope`, Statement ([item](/Users/ianx/Projects/prestige-math-library/physics/items/cor-tdmath-ordered-finite-mixture-envelope.md:36)): specified integer `d≥1` and `m≥1`, gave `q_i∈R^d`, defined the coordinate map as `χ:{M_θ:θ∈Δ_m}→R^d`, and quantified its affine-coordinate condition and the output coordinate `x∈R^d`. Its supplier `thm-tdmath-finite-mixture-envelope` now states the matching dimension hypothesis.
- `lem-tdmath-constrained-curvature`, Statement ([item](/Users/ianx/Projects/prestige-math-library/physics/items/lem-tdmath-constrained-curvature.md:50)): specified integer `d≥1` and `k≥0` for the domain and codomain of `A`. Its compact-unit-sphere argument invokes `thm-heine-borel-rn` in `R^d` when `ker A` is nonzero.

I updated the corresponding `case: one` evidence in `research/physics-td-qft-rpm-62-2026-10-14-batch-4.proof-contracts.json`. The four items had no `verification.judge` records to remove. No proofs or public dependency edges changed.

The local proof checks were consistent with the cited mathematical results. I checked Rockafellar’s *Convex Analysis*: §11, Theorem 11.5 (closed convex sets as intersections of containing closed half-spaces, printed p. 100); §12, Theorems 12.1–12.2 (affine minorants and `f** = cl f`, printed pp. 102–104); and §23, Theorem 23.5 (subgradient, conjugate attainment, and Fenchel equality, printed pp. 218–219). The accessible text is [Rockafellar, *Convex Analysis*](https://djvu.online/file/68u51YEBQaqiP), digital lines 4325–4333, 4460–4494, 4537–4539, and 8878–8900, respectively. These statements agree with the local uses; the assigned items supply the remaining arguments.

Validation after the repairs:

- Reflow and precheck passed for each of the four changed items; each reflow reported `unchanged` and each precheck reported `PASS`.
- `proof-layout` passed on all four changed items: 20 steps, 0 layout defects. The first invocation hit the environment’s fallback TypeScript loader limitation with the web `@/` alias. I reran the same renderer with a temporary resolver, obtained the pass above, then removed the temporary file. No tool or external checkout was edited.

## Dependency review

The current draft batch-3 representation theorem and its listed support chain remain explicitly conditional draft mathematics. Their definitions and proof arguments were checked for this consumer; the representation corollary correctly inherits the strict-reference assumptions and the extra affine coordinate assignment. I found no defect requiring an in-run dependency finding.

The convex epigraph/separation, Fenchel equality and biconjugation proofs, coercive attainment proof, finite-mixture envelope and supporting-face argument, lever rule, concavity and curvature results, stoichiometric tangent-cone result, implicit-rank theorem, phase-dimension count, and four examples all have complete arguments under their stated hypotheses. I found no source, computation, title, or page-summary defect remaining after the dimension clarifications.

## Page verdicts

- `td-math-nonsmooth-equilibrium` (A): **pass after the four statement repairs**. Its summary matches the current items and distinguishes mathematical conditional results from physical claims.
- `td-math-nonsmooth-equilibrium-examples` (B): **pass**. The examples are mathematical constructions; the reaction example limits its claim to the displayed model and objective.

## Unedited defects and blockers

None. All confirmed defects found were within this assigned draft batch and were repaired. No blocker remains.
