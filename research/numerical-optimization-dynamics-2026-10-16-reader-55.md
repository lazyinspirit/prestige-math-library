# Step 3a reader report — batch 55

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `55`  
Reviewed: 2026-10-17

## Inventory opened

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/hyperbolic-finite-difference-methods.md` (A)
- `library/numerical-pdes-and-spatial-discretization/hyperbolic-finite-difference-methods-examples.md` (B)

The 15 assigned items were opened in dependency order:

1. `def-uniform-grid-and-difference-operators`
2. `def-periodic-one-way-advection-schemes`
3. `def-centered-leapfrog-wave-scheme`
4. `lem-dirichlet-grid-summation-by-parts`
5. `lem-dirichlet-grid-poincare-inequality`
6. `thm-smooth-advection-stencils-consistent`
7. `thm-dirichlet-leapfrog-discrete-energy`
8. `lem-periodic-advection-amplification-symbols`
9. `thm-periodic-centered-wave-amplification-and-endpoint`
10. `thm-periodic-advection-power-stability`
11. `thm-nearest-neighbor-cfl-domain-condition`
12. `ex-wave-cfl-endpoint-and-energy-breakdown`
13. `ex-upwind-versus-downwind-advection`
14. `ex-centered-advection-consistent-but-unstable`
15. `ex-grid-fourier-stability-needs-a-common-space-lift`

Opened the page-level prerequisite context pages:

- `wave-energy-finite-propagation-and-huygens`
- `linear-scheme-stability-and-lax-equivalence`
- `stationary-iterations-and-relaxation`
- `parabolic-finite-difference-methods`
- `finite-fourier-analysis-and-the-fast-fourier-transform`

The declared item suppliers were checked against their current source files, including the grid/scalar definitions, transport, Taylor remainder and mixed-partial results, discrete Fourier and heat-symbol results, operator norm, cutoff, integer-part and test-function results, dependent choice, common-space interface and Lax-equivalence theorem. I also opened the supporting local proofs needed to assess these claims, including the finite-character orthogonality lemma, the Baire and uniform-boundedness proofs, and the cited complex-exponential identities.

Reviewed `research/numerical-optimization-dynamics-2026-10-16-batch-55.proof-contracts.json` by item, along with the batch-55 authoring notes, manifest, and live run status. These were treated as evidence; current item proofs and page prose governed the review.

## Findings that remain outside this reader's edit scope

1. `lem-periodic-heat-difference-amplification-symbol` is a draft supplier in another batch of the current run. Proof 1.1 uses the Euler/trigonometric identity for the eigenvalue without deriving it or citing a complex-exponential supplier. Proof 1.2 asserts the finite root-of-unity geometric sum and concludes that the modes form a basis; the item's only declared dependency is `def-parabolic-theta-finite-difference-scheme`, which defines the stencil but does not supply the exponential periodicity, root test, or geometric-sum result. The published `lem-orthogonality-of-characters-on-a-finite-cyclic-group` and `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` contain the relevant ingredients; the supplier should cite/use them or give the short derivation locally. This affects the assigned consumers `thm-periodic-centered-wave-amplification-and-endpoint` and `ex-wave-cfl-endpoint-and-energy-breakdown`. The raw source SHA-256 observed at review and still current at report creation is `4628b34d110a61ccb5aa1dd4162545a59851f1199ac25378306a7a34aa90ece3`.

2. The published dependency `lem-schwartz-cutoffs-from-the-standard-smooth-step`, Proof 1.1, differentiates `P_k(1/t) exp(-1/t)` and states the derivative recurrence without supplying the real-exponential derivative, reciprocal derivative, and product-rule steps. Its declared dependencies include exponential growth and the chain rule, but not the published `thm-derivative-of-exponential` result or a reciprocal-derivative argument. Add that supplier and show the short differentiation, or give an equivalent local derivation. The assigned consumer is `thm-nearest-neighbor-cfl-domain-condition`.

3. The same published cutoff dependency, Proof 2.1, concludes that `a(t)/(a(t)+a(1-t))` is smooth from nonvanishing of the denominator. The listed dependencies do not establish closure of `C^infty` under division by a nowhere-zero smooth function. Supply a local reciprocal-smoothness argument or cite an appropriate result. The assigned consumer is `thm-nearest-neighbor-cfl-domain-condition`.

These are nonfatal proof omissions: the missing calculations are elementary, but the current source arguments do not state or cite them. No published item or other-batch draft was edited.

## Edits and validation

No assigned item or page prose was edited. Therefore no proof contract or judge record was changed, and no reflow, precheck, or proof-layout command was needed. No review stamp or self-certification was added.

## Page verdicts

- **A — `hyperbolic-finite-difference-methods`:** The summary, scope distinctions, and mathematical descriptions match the assigned item statements. The page's Fourier claims inherit the in-run heat-symbol supplier finding; its CFL theorem also reaches the published cutoff proof omissions.
- **B — `hyperbolic-finite-difference-methods-examples`:** The summary and example placement match the authored examples. The Nyquist-energy example inherits the in-run heat-symbol supplier finding.

## Blocker and coverage note

There is no batch-55-specific blocker. The live run status also showed a pre-existing `3a-split` blocker for batch 6 (`split-6 failed 3x`), outside this assignment.

All assigned pages, all 15 assigned items, and their declared direct suppliers were opened. I did not independently fetch the cited lecture-note PDFs, so this review does not certify bibliography locators against those external documents. I did not recursively re-audit every dependency beneath all published foundational suppliers; the findings above record the specific supplier gaps encountered while checking the assigned proof chains.
