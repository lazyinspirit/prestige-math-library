# Reader report — physics-td-qft-rpm-62-2026-10-14, batch 44

## Scope and opened inventory

Reviewed the assigned batch independently as Step 3a reader. The batch contains these 16 items, opened in dependency order:

`def-qft-photon-transverse-space`, `def-qft-qed-gauge-data`, `lem-qft-photon-no-global-polarization-frame`, `lem-qft-photon-null-quotient`, `lem-qft-photon-smeared-potential`, `lem-qft-photon-transverse-projector-kernel`, `lem-qft-qed-dirac-gauge-current`, `lem-qft-qed-coulomb-constraint`, `lem-qft-qed-dirac-first-order-constraints`, `lem-qft-photon-covariance-spectrum`, `lem-qft-photon-local-field-strength`, `lem-qft-photon-local-weyl-observables`, `ex-qft-qed-two-polarizations`, `cex-qft-qed-negative-auxiliary`, `cex-qft-qed-coulomb-potential-locality`, and `cex-qft-qed-torus-charge`.

Opened both assigned pages:

- `library/quantum-field-theory-mathematics/qft-mg01.md` (A page, “Charged gauge data and SI-natural conventions”).
- `library/quantum-field-theory-mathematics/qft-mg01-examples.md` (B examples page).

The direct supplier inventory needed for the assigned claims was: `def-countable-choice`, `def-euclidean-inner-product`, `def-qft-fock-and-test-spaces`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `def-qft-dirac-projections`, `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere`, `def-qft-photon-transverse-space`, `lem-qft-fock-ccr-car`, `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`, `thm-product-of-countable`, `def-separable-space`, `def-test-function-space-d-of-an-open-set`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `lem-em-sphere-zonal-moments`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-real-power-continuity-and-derivatives`, `def-qft-qed-gauge-data`, `lem-qft-free-action-equations`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `def-lorentz-map-and-lorentz-group`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-qft-lorentz-boost-rotation-factorization`, `lem-qft-photon-null-quotient`, `lem-qft-second-quantized-spectrum`, `lem-qft-scalar-causal-commutator`, `lem-qft-segal-weyl-domain`, `def-cross-product-in-r3`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`, and `thm-cross-product-norm-is-the-two-vector-gram-determinant`. Required transitive statements were also checked, including the Fourier/measure/calculus prerequisites, the Newtonian fundamental-solution statement, and the Fock and Lorentz interfaces used by the direct suppliers.

## Review evidence and conclusions

Checked definitions, quantified statements, proof steps, witnesses, computations, citations, item/page summaries, and the applicable prerequisite closures. The main literature checks were David Tong, *Quantum Field Theory*, Ch. 6 §§6.2.1–6.2.2 (including equations 6.517–6.523); Mark Srednicki, author-hosted 2006 draft, §55 (including equations 55.15 and 55.20); Allen Hatcher, *Algebraic Topology*, Theorem 2.28, pp. 134–135; and the BIPM 9th-edition SI Brochure, §2.3.1. These support the polarization/projector and topology comparisons and the distinction between the SI definition and measured value of the vacuum permeability. They do not turn model deductions into empirical evidence. The assigned claims remain conditional mathematical or model statements; no measurement or statistical precision is asserted by this review.

### Repairs made

| Item | Repair and mathematical basis |
|---|---|
| `lem-qft-photon-smeared-potential` | The CCR supplier requires a separable one-particle Hilbert space. Added dependencies and facts for rational-box density, countability of finite products, and the definition of separability; the proof now constructs a countable dense subset of scalar (L^2), then (L^2(\mathbb R^3;\mathbb C^3)), and applies the bounded transverse projection to obtain separability of \(\mathcal H_T\) before applying CCR. |
| `lem-qft-photon-covariance-spectrum` | Matched boost coordinates and the Jacobian derivative to the supplier convention: (\omega'=\gamma(\omega+\beta\,n\cdot k)) and (d^3k'/d^3k=\omega'/\omega). Defined joint spectrum by support of the joint PVM, stated its sector multipliers and exact maximal energy/momentum domains, and expanded the boundary/interior support arguments. Added the positive-volume box, Euclidean triangle inequality, and sphere-measure facts needed at the points where they are used; computed (\nu(B_\delta)=\pi\delta^2\) for the small-momentum continuity argument. |
| `lem-qft-qed-coulomb-constraint` | Replaced the unsupported uniqueness shortcut with periodic integration by parts to identify Fourier coefficients of (\Delta u\), then used Fourier completeness and continuity to conclude the claimed equality. |
| `cex-qft-qed-negative-auxiliary` | Replaced an unproved positive-measure annulus assertion with the explicit box (E=(5/4,3/2)\times(-1/8,1/8)^2), whose measure is (1/64) by the cited box-measure theorem. |
| `cex-qft-qed-coulomb-potential-locality` | Corrected the sign/type description: the real differentiated kernel is positive on the selected separated supports, while the commutator pairing is (-i) times a positive real integral and hence is continuous and nonzero. |
| `lem-qft-photon-local-field-strength` | Expanded the covariance calculation: integration by parts gives (\widehat{j^b}=-ip_a\widehat h^{ab}); contraction depends on the polarization class through (p_a\epsilon_b-p_b\epsilon_a), is unchanged by adding a multiple of (p), and transforms as a two-form. |
| `lem-qft-photon-local-weyl-observables` | Proved separability of (\mathcal H_T) from a countable dense family in (L^2(\mathbb R^3;\mathbb C^3)) and its bounded transverse projection before using the Segal-Weyl supplier. The statement also specifies the Hilbert norm topology for the separability claim. |

Updated both the batch and run proof-contract files for these seven items, including the exact source quotes, current proof-step claims, statement excerpts, and raw item hashes. No stale `verification.judge` record was present on the changed items.

## Uneditable dependency defects

1. `lem-qft-fock-ccr-car`, Statement lines 49–52 and Facts & Assumptions lines 76–78, uses “separable complex Hilbert space” without declaring `def-separable-space` in its dependencies. A transitive dependency-closure check also finds no such definition. The assigned consumer is `lem-qft-photon-smeared-potential`; its repaired proof supplies the missing separability argument for its particular \(\mathcal H_T\), but cannot repair the out-of-batch supplier statement.
   Observed current source SHA-256: `ff58f1b75476b79997d888acfe9201a6d8ff3dfe1df89a798c25d0cb62b8d801`.
2. `lem-qft-segal-weyl-domain`, Statement lines 78–80 and 86–87, uses “separable complex Hilbert space” and a countable orthonormal basis without declaring `def-separable-space` in its dependencies; no definition occurs in its transitive dependency closure. The assigned consumer is `lem-qft-photon-local-weyl-observables`; its repaired proof establishes separability for its own \(\mathcal H_T\), but the supplier defect remains out of scope.
   Observed current source SHA-256: `7568328ea67f04cb5f2d4cf9e3370479ee517e59ae53637b92120a14fa741509`.

The machine-readable findings are in `research/physics-td-qft-rpm-62-2026-10-14-reader-findings-44.json`.

## Page verdicts

- **A page `qft-mg01`:** no page-prose defect identified. Its summary accurately describes the fixed conventions, conditional free/classical constructions, nonlocal potential versus local field strength, torus neutrality hypothesis, and limitations; it does not present the model deductions as experimental findings.
- **B page `qft-mg01-examples`:** no page-prose defect identified. Its summary matches the assigned examples and correctly limits the counterexamples to the stated auxiliary, potential-locality, and periodic-charge claims.

No page edits were made. No proposed withdrawal was removed or rewritten.

## Validation and blocker

- Reflow reported `unchanged` for all seven repaired items.
- Precheck passed for all seven repaired items.
- Strict proof-contract validation passed for the seven repaired items: 0 errors, 0 warnings.
- Ran the required single `proof-layout.mjs` command with all seven changed item paths. It exited before producing a layout result because the renderer could not resolve `@/components` imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). This renderer-resolution failure is the handoff blocker; no second proof-layout run was made.

Coverage note: all assigned pages and items and the supplier statements needed for the reviewed deductions were opened. The out-of-scope supplier findings above remain for their owners; proof-layout rendering could not be completed in this environment.
