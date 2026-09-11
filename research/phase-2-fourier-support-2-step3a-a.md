# Step 3a scope review — group a

Run: `phase-2-fourier-support-2`

Role: `alpha`

Batch: 1

Review type: scope only; no item or proof approvals

## Review basis

I compared the current four-page manifest and coverage ledger with the binding
FA-22/FA-23 prose, the current `plan-spec.json` entries, the scope ledger,
dependency records, Step 1 drift report, construction notes, and the owner's
five-pair admission record. The batch contains 20/8 items on FA-22 A/B and 20/9
items on FA-23 A/B. The current plan retains the four promised pages in order;
FA-23 depends on FA-22 inside the batch, and the cross-batch dependency records
are empty. The owner admitted both complete pairs, including the rehomed
momentum example and its local multiplier lemma, but explicitly did not certify
proof readiness. There is no current Step 3a `proceed`, merger, or enrichment
record to assume.

The coverage ledger has no open obligations. It maps the complete relevant
sections of Teschl §14.1, Dyatlov §11.1, and supporting material to the two
inventories; it also records complete targeted coverage for the radial
Lebesgue-point argument, Wiener orientation, Poisson summation, Hermite
functions, and the momentum/multiplier example. Its exclusions have coherent
destinations or boundaries: complex-parameter continuation, Fourier range and
support theorems, arbitrary measure convolution, probability continuity
theorems, general-lattice Poisson summation, tempered distributions, and
abstract unbounded spectral theory are not needed for these pairs' stated
library roles. This assessment concerns subject and source coverage, not the
correctness of any proposed proof.

## Decisions

| A page | Inventory | Decision | Scope rationale |
| --- | ---: | --- | --- |
| `fourier-transform-convolution-and-approximate-identities` | A20 / B8 | `sufficient` | Covers the complex $L^1(\mathbb R^n)$ transform and well-definedness, $L^1\to C_0$, covariance laws, convolution/product laws, the normalized Gaussian, Gaussian and general approximate-identity consequences, Lebesgue-point and $L^1$ inversion, uniqueness, finite-measure transforms and injectivity, and the probability normalization. The B page supplies four central computations, three sharp boundary counterexamples, and Wiener orientation. General convolution/approximate-identity theory is deliberately inherited from the earlier $L^p$ page; Hausdorff–Young is correctly left to the published endpoint-interpolation interface and later Fourier analysis. Paley–Wiener/support theory and probability continuity theorems exceed this foundational pair's role. |
| `schwartz-space-and-the-plancherel-theorem` | A20 / B9 | `sufficient` | Covers Schwartz seminorms, topology and Fréchet completeness, cutoff density and integrability, continuity of the basic operations, Fourier invariance/inversion and Schwartz convolution/product laws, Parseval, dense unitary Plancherel extension, $L^1\cap L^2$ agreement, $L^2$ inversion, and Poisson summation. The B page tests the definitions, gives Hermite completeness/eigenfunctions, a Plancherel integral, theta reciprocity, the sharp Heisenberg inequality, interpolation orientation, and the admitted momentum application. These interfaces adequately support the next distribution page and the planned Sobolev, multiplier, restriction, uncertainty, and zeta consumers. Tempered distributions, general $L^p$ Fourier theory, arbitrary lattices, and abstract Stone/spectral theory have intentional later homes or are unnecessary for this pair. |

## Conclusion

Both assigned A/B pairs are scope-sufficient for their prose designs and roles
in the library. I recommend neither scaffold enrichment nor a pair merger. The
decision does not approve proofs, dependency proofs, or an owner transition.
