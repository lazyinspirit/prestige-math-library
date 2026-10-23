# Step 3a reader report — batch 17

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `17`  
Scope: `fd-s01` and `fd-s01-examples`, 13 assigned items.

## Opened inventory

Assigned pages, both read in full:

- `fd-s01` — `library/fluid-dynamics-mathematics/fd-s01.md`
- `fd-s01-examples` — `library/fluid-dynamics-mathematics/fd-s01-examples.md`

Assigned items, read in full:

- `def-fd-periodic-fourier-sobolev-spaces`
- `def-fd-projected-no-slip-stokes-space`
- `lem-fd-rectangular-test-divergence-inverse`
- `lem-fd-periodic-fourier-embedding-products`
- `def-fd-periodic-leray-pressure-maps`
- `lem-fd-periodic-tame-transport-commutator`
- `thm-fd-periodic-pressure-recovery`
- `lem-fd-zero-trace-directional-poincare`
- `thm-fd-projected-stationary-stokes`
- `lem-fd-given-smooth-solutions-difference-energy`
- `thm-fd-rectangular-no-slip-stokes-velocity-pressure`
- `ex-fd-single-mode-pressure`
- `rem-fd-stokes-pressure-prerequisite`

Published mathematical item suppliers opened to check the actual interfaces and arguments:

- `def-countable-choice`
- `def-the-one-dimensional-torus-and-normalized-haar-integral`
- `def-fourier-coefficients-and-trigonometric-polynomials`
- `thm-fourier-basis-and-parseval-on-the-n-torus`
- `def-sobolev-space-wkp-and-its-norm`
- `thm-sobolev-spaces-are-banach-spaces`
- `def-axiom-of-choice`
- `def-real-and-complex-inner-product-space`
- `def-hilbert-space`
- `thm-riesz-representation-for-hilbert-space`

The five page prerequisites on the A page were also opened at their canonical mathematical library paths: `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, and `weak-derivatives-and-sobolev-spaces`. Their identities and published status match the page prerequisites. The ten imported item supplier files listed above match their corresponding current raw SHA-256 entries in `research/math-imports.json`; the imports and root mathematical workspace were not edited.

The batch manifest, current proof-contract file, batch notes, coverage file, and cross-batch dependency file were consulted as navigation and review evidence. Their author dispositions were not treated as verdicts. The cross-batch dependency file is empty. All 13 assigned items are mathematical; there are no statistical or empirical claims in this batch.

## Independent mathematical review

The Fourier branch is internally consistent after the definition repair below. The weighted coefficient completion, normalized (2\pi)-periodic convention, real conjugate symmetry, negative-order limitation, Leray and pressure multipliers, tame commutator estimate, pressure recovery identity and uniqueness proof, and the smooth-solution difference-energy estimates agree with their stated hypotheses. The pressure theorem’s distribution-uniqueness argument supplies the density of finite Fourier sums in the smooth test topology; the example now invokes the theorem’s explicit uniqueness conclusion directly.

The Stokes branch is internally consistent after the vector Sobolev clarification below. The directional Poincaré constant follows from the (2R) side length of the containing cube. The projected variational theorem uses the closure-based (H_0^1) condition and the stated full-choice hypotheses; the rectangular pressure construction uses the compact-support divergence inverse and obtains only (H^{-1}) pressure modulo constants. It does not assert (L^2) pressure or smoothness at corners.

No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Repairs and validation

1. `def-fd-periodic-fourier-sobolev-spaces`: made (N\ge1) explicit, gave the coefficient integral an integrability domain, defined the finite real trigonometric-polynomial core, and specified how Fourier coefficient coordinates extend to the completion. The (H^s) weighted coefficient spaces are unchanged. The proof now identifies the real completion with the conjugate-symmetric weighted coefficient subspace and makes no function-representative claim at negative order. This is supported by the exact finite-torus Fourier-basis supplier, which gives the (L^2) coefficient isometry and Parseval under Countable Choice.

2. `def-fd-projected-no-slip-stokes-space`: defined vector (W^{1,2}) as the finite product of scalar (W^{1,2}) spaces, specified componentwise weak derivatives and the sum-of-squares norm, and defined the vector and matrix pairings used by (H_0^1) and (V). The proof now establishes vector completeness by taking component limits in the finite product, using the published scalar Sobolev completeness theorem under full AC.

3. `ex-fd-single-mode-pressure`: replaced the unsupported shorthand about every zero-gradient distribution with a direct application of the pressure-recovery theorem’s uniqueness clause. The zero distribution is a second mean-zero solution of the same projected identity, so the recovered pressure is zero.

4. `rem-fd-stokes-pressure-prerequisite`: stated the dimension, bounded-domain, forcing, viscosity, and rectangle hypotheses from the two Stokes suppliers, along with the relevant variational equation and the limited (H^{-1}) pressure conclusion.

The affected proof-contract derivations and risk reviews were updated in `research/fluid-dynamics-all-47-2026-10-23-batch-17.proof-contracts.json`. None of the four repaired draft items had a `verification.judge` record, so there was no stale judge record to remove. Reflow and precheck both passed for each repaired item. Proof-step paragraphs were separated throughout all 13 assigned items. The final required command,

```bash
node tools/physics-support/proof-layout.mjs items/def-fd-periodic-fourier-sobolev-spaces.md items/def-fd-projected-no-slip-stokes-space.md items/lem-fd-rectangular-test-divergence-inverse.md items/lem-fd-periodic-fourier-embedding-products.md items/def-fd-periodic-leray-pressure-maps.md items/lem-fd-periodic-tame-transport-commutator.md items/thm-fd-periodic-pressure-recovery.md items/lem-fd-zero-trace-directional-poincare.md items/thm-fd-projected-stationary-stokes.md items/lem-fd-given-smooth-solutions-difference-energy.md items/thm-fd-rectangular-no-slip-stokes-velocity-pressure.md items/ex-fd-single-mode-pressure.md items/rem-fd-stokes-pressure-prerequisite.md
```

passed: **13 items, 39 steps, 0 defects**.

## Consumer check for the Fourier-space definition

The current run manifests show 19 direct and 23 indirect consumers of `def-fd-periodic-fourier-sobolev-spaces` (42 in total). All 19 direct items were inspected, including the 13 direct consumers outside batch 17. Those consumers either use smooth periodic fields, which are integrable, or define an explicit (L^1) Fourier coefficient map; none depends on applying an integral to a nonintegrable arbitrary map. The corrected coefficient domain therefore preserves their actual use and leaves the weighted (H^s) completion unchanged. The 23 indirect consumers reach the definition through these unchanged direct interfaces, so no downstream claim or contract repair was needed. The four direct consumers of `def-fd-projected-no-slip-stokes-space` are all in this batch and were checked: `lem-fd-zero-trace-directional-poincare`, `thm-fd-projected-stationary-stokes`, `thm-fd-rectangular-no-slip-stokes-velocity-pressure`, and `rem-fd-stokes-pressure-prerequisite`.

## Uneditable published-dependency defects

The following published mathematical carriers are imported and read-only. Their statements or definitions contain inline item hyperlinks instead of placing every link after the complete section in the required references heading. The text remains mathematically readable, so these are recorded as nonfatal `ill-formed` presentation defects. Each listed consumer belongs to batch 17 and its current dependency closure reaches the defective published item.

| Published subject | Exact location | Assigned consumers whose closure reaches it |
|---|---|---|
| `def-countable-choice` | `## Definition`, the equivalence sentence links `def-choice-function` and `def-countable` inline; the definition references heading follows, but the links still interrupt the definition. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `lem-fd-periodic-tame-transport-commutator`; `thm-fd-periodic-pressure-recovery`; `lem-fd-given-smooth-solutions-difference-energy`; `ex-fd-single-mode-pressure`; `def-fd-projected-no-slip-stokes-space`; `lem-fd-zero-trace-directional-poincare`; `thm-fd-projected-stationary-stokes`; `thm-fd-rectangular-no-slip-stokes-velocity-pressure`; `rem-fd-stokes-pressure-prerequisite`. |
| `def-the-one-dimensional-torus-and-normalized-haar-integral` | `## Definition`, including the opening choice/torus paragraph and the finite-torus construction; inline wikilinks occur throughout and no immediately following `## Definition references` section follows the complete definition. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `lem-fd-periodic-tame-transport-commutator`; `thm-fd-periodic-pressure-recovery`; `lem-fd-given-smooth-solutions-difference-energy`; `ex-fd-single-mode-pressure`. |
| `def-fourier-coefficients-and-trigonometric-polynomials` | `## Definition`, including the Characters and Fourier coefficients paragraphs; inline item links occur within the definition and no immediately following `## Definition references` section follows it. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `lem-fd-periodic-tame-transport-commutator`; `thm-fd-periodic-pressure-recovery`; `lem-fd-given-smooth-solutions-difference-energy`; `ex-fd-single-mode-pressure`. |
| `thm-fourier-basis-and-parseval-on-the-n-torus` | `## Statement`, its Countable Choice hypothesis and coordinate-character sentence contain inline item links; no immediately following `## Statement references` section follows the complete statement. | `def-fd-periodic-fourier-sobolev-spaces`; `lem-fd-periodic-fourier-embedding-products`; `def-fd-periodic-leray-pressure-maps`; `lem-fd-periodic-tame-transport-commutator`; `thm-fd-periodic-pressure-recovery`; `lem-fd-given-smooth-solutions-difference-energy`; `ex-fd-single-mode-pressure`. |
| `thm-sobolev-spaces-are-banach-spaces` | `## Statement`, the theorem sentence links `def-sobolev-space-wkp-and-its-norm` inline; no immediately following `## Statement references` section follows the complete statement. | `def-fd-projected-no-slip-stokes-space`; `lem-fd-zero-trace-directional-poincare`; `thm-fd-projected-stationary-stokes`; `thm-fd-rectangular-no-slip-stokes-velocity-pressure`; `rem-fd-stokes-pressure-prerequisite`. |

No published supplier was edited. The five items above account for 38 subject-consumer findings in the routed JSON response.

## Source-location check and limitations

The Teschl PDF’s §2.5 / Theorem 2.17, Bühler–Salamon’s Example 2.66 and §5.3.1, Tao’s periodic Leray/pressure discussion and Proposition 35 / Exercise 36, and Schulz’s §2.1.5.2 and §4.1.1 were checked at the cited locations. The local Fourier, commutator, and Stokes arguments remain the load-bearing proofs; the textbook sources were not substituted for those arguments. Links: [Teschl](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf), [Bühler–Salamon](https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21%2112_02_01_AM.pdf), [Tao](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/), [Schulz](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

The exact Vohralík URL cited for the rectangular Stokes context timed out during this review. A separately indexed same-title PDF has a different pagination/content layout and was not treated as evidence for the cited locator. The rectangular pressure result is proved locally in `thm-fd-rectangular-no-slip-stokes-velocity-pressure`, so this retrieval limit does not leave its mathematical argument open. No finding is made that the published URL or citation is inaccurate.

## Page verdicts and blocker

- `fd-s01`: **pass**. The A page is frontmatter-only, draft mathematics, has the required `compact-v1` layout flag, and its 11-item inventory matches the current batch manifest. No summary or body prose is present.
- `fd-s01-examples`: **pass**. The B page is frontmatter-only, draft mathematics, has `compact-v1`, requires `fd-s01`, and its two examples match the current manifest. No summary or body prose is present.

No blocker remains for batch 17 review. The five read-only published statement/definition hyperlink-placement defects remain routed for owner disposition.
