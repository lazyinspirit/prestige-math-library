# Batch 10 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-10`.

## Dependency-order checkpoint

1. `lem-emx-paraxial-phase-multiplier-bound`: complete independent proof and direct-supplier statement review; no defect. Rationalization, positive denominator, the MVT hypotheses and the equal-phase case all check. Absolute values cover z=0 and negative propagation. The contract now contains its specific complete risk review. No decision owed for this untouched carrier. Sources: its direct mathematical item Statement/Definition sections; optical external references supply context only, not the locally proved estimate.

This checkpoint was completed by the subsequent item reviews below.

2. `def-emx-angular-spectrum`: accepted reader repair. The explicit C1 real-field mode definition and four homogeneous equations agree with `post-em-vacuum-maxwell`; its scalar multipliers and support hypotheses are unchanged. Positive-root, measurability, equivalence-class and unit checks pass. Direct/reference consumers are the other four local physical items; scalar uses are unchanged and vector uses invoke precisely this smooth branch. The transverse-Fourier draft supplier is used only to distinguish its 3D compact smooth packet data from 2D monochromatic L2 data. The normalized TikZ dispersion cross-section checks. Complete risk review recorded.

Both deductions are reviewed below.

- `pthm-emx-paraxial-error`: independent current proof and supplier review complete; no defect; specific risk review saved. Read all five proof steps, exact direct suppliers and current definition repair. On D_delta, s=|2pi xi|^2/k0^2 lies in [0,delta^2]; the reviewed local multiplier bound is pointwise there, and n=2 Plancherel under Countable Choice turns its square into the L2 estimate for every supported equivalence class, including zero data, z=0 and negative z. The source-free real divergence equation gives Re(i S exp(i phi))=0. Since omega>0, evaluating at x=t=0 and x=0,t=pi/(2omega) separately forces Im S=Re S=0; hence the bilinear relation is valid for complex amplitudes. kz>=k0 sqrt(1-delta^2)>0 licenses division even on the cone edge. Expansion of |qx ey-qy ex|^2 proves the complex two-component Cauchy bound without a hidden Hermitian convention. q=0 and zero polarization are allowed and produce ez=0. All prefactors are dimensionless. Beisert 11.1 (11.6) confirms the sign convention. No empirical or general vector approximation claim. No defect.

- `pthm-emx-scalar-vortex-eigenvalue`: independent current proof and supplier review complete; no defect; specific risk review saved. Read both steps, exact complex derivative, chain-rule, conjugation and angular-spectrum suppliers. For r>0, angular differentiation at fixed r yields ell u, independent of radial derivatives. Integer ell makes the expression single-valued. At the axis the stated polynomial (x+iy)^ell or (x-iy)^|ell| times g(x^2+y^2) supplies the smooth extension for positive and negative winding; when ell!=0 the value at zero vanishes and when ell=0 the rotation vector field vanishes, so the identity holds there too. The resulting ell u is L2 even though no general weighted-derivative L2 bound was assumed. Nonzero L2 class makes the denominator strictly positive; the ell=0 case gives zero numerator. First-variable-linear convention gives ell, with no sign reversal or integration by parts. The existing C-infinity assumption already suffices for chain-rule use. Source paper 2 (1) supplies winding context; no photon, torque, or full-vector angular momentum conclusion is drawn. No defect.

- `cex-emx-paraxial-distance-failure`: completed proof and direct-source review, no defect. Read all five steps and direct box-measure, exponential, modulus, Plancherel and local bound suppliers. For n>=1, delta_n<=1/3, the rectangle side lengths R_n delta_n/8 are positive and its upper squared normalized radius is 1-delta_n/4+delta_n^2/32<=1. Thus its normalized indicator is a nonzero L2 input with fixed norm A_star under Countable Choice. The lower normalized radius tends uniformly to one on these varying sets; the remainder denominator tends uniformly to 2 and stays positive. Substitution of z_n=8pi/(k0 delta_n^4) gives Delta_n->pi uniformly. Modulus multiplicativity handles the negative actual phase, and reverse triangle plus the phase Lipschitz estimate gives uniform modulus convergence to 2. Averages of squares on the normalized positive-measure rectangles therefore tend to 4 without any unjustified exchange of a varying-domain limit and integral; nonnegative roots give error 2. This refutes precisely the universal convergence claim, with no conclusion for fixed distance or arbitrary aperture outputs. No defect.

The example repair and its routed decisions are recorded below.

- `ex-emx-longitudinal-focused-field`: refuter title finding confirmed fatal and repaired; touched reader repair amended. The old focusing title was unsupported by a single-mode construction. The reader correctly removed that mismatch but introduced a universal necessity claim refuted by the perpendicular transverse polarization. New title: “An oblique plane wave with a nonzero longitudinal electric component”; scope binds necessity to the chosen polarization. The existing Example and complete Maxwell verification remain sound. Diagram checked: normalized K=(1/2,sqrt(3)/2), e=(1,-1/sqrt(3)) have dot product zero. Complete risk review saved.

All six current proofs have been reviewed. Citation records now quote the current angular-spectrum Definition; historical_source_interface records remain untouched. Both touched manifest mirrors are synchronized, so both touched decisions are amended repairs (the definition text itself accepts the reader repair). Final checks and all three decision records are complete as recorded below.

## Final routed dispositions

| Obligation | Verdict | Closed defect ID suffix |
|---|---|---|
| `touched:10:def-emx-angular-spectrum` | `amended_repair` | `3a-batch-10-mode-definition` |
| `touched:10:ex-emx-longitudinal-focused-field` | `amended_repair` | `3a-batch-10-focus-title` |
| `refuter:10:1` | `confirmed_fatal` | `3a-batch-10-oblique-title` |

All defect IDs have prefix `physics-non-fluid-129-2026-10-21-r2-`. Exactly three decisions are in the required decisions JSON, with `group: batch-10` and `repair_confidence: 1`. The refuter route is the native `flagged` route. Three distinct defects have closed `fixed` rows at `caught_at_stage: 3a-adjudicate`: the incompletely explicit former mode definition, the original unsupported focusing title, and the reader's subsequently overstrong oblique-mode title. The latter two are distinct successive title defects, with separate decisions and ledger ownership. Reader findings are empty; no page-only decision is owed.

The angular-spectrum source repair is retained exactly. Its touched verdict is amended because Alpha also synchronized its stale manifest Definition and current consumer citation excerpts. All historical supplier-interface records remain intact. No proof-bearing carrier was materially rewritten, and neither touched item had a judge record to invalidate.

## Exact history and current carriers

The reader-result sources matched the post snapshot before Alpha: angular-spectrum raw SHA256 `9a279c192b63d89fcbb8c2add0d1d0d7445a1514feed5edaa0ac59e19a9cb187`; example raw SHA256 `3f12cc322707713cedf658909b6b5c70f8c1f4b1d9ff1845b7fcb739edb112b2`. The retained example in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/` matches its pre snapshot `0f3aa6b8d07bf6b6f0ef923a2aabd89bb14d1945dee986d9d3a7a49ac9be01dd`.

The definition's step2 baseline is older than its pre-reader snapshot and was not treated as an exact preimage. The exact pre-reader bytes were instead recovered in memory: start with the current definition; restore the vector-mode paragraph, A2 and Verification 4.1 from `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-contract-source-em-csm/preimages/def-emx-angular-spectrum.md`; restore soft line wrapping for paragraphs whose joined text agrees with that archive. This produces exactly the pre snapshot raw SHA256 `41c7451ff70fbfefc3ab72b71010c5de219d9a620eca8e494fca2a90d29a05d0`. The recovered source was reviewed; no historical uncertainty or owner-resolution exception is required.

After final edits, the definition retains its post-reader raw hash above. The example raw hash is `4e26c7ccc81ebdd42c4229f30f546b98e6da98b05bdda9aa8b582cd0ee35dcf5`. These are raw source observations, not engine decision stamps.

## Sources and actual supplier use

Read the exact Statement/Definition/Postulate sections of all direct dependencies listed by the six carriers, including the published Fourier inversion and Plancherel statements with Countable Choice, root and ordered-field results, real MVT with continuity on the closed interval, trigonometric and complex exponential/modulus identities, real partial and total derivative conventions, box measure, dot/cross products and divergence/curl, laboratory geometry, SI conventions, fields, sources, the complex plane-wave encoding, and the scalar-aperture and vacuum-Maxwell postulates. The draft transverse-Fourier Definition was checked at its actual comparison-class use. This is a scoped supplier-use review; published proofs and unrelated transitive branches were not independently re-audited.

External source passages were retrieved and read independently:

- [Konijnenberg, Adam and Urbach, BSc Optics §6.3](https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/06%3A_Scalar_diffraction_optics/6.04%3A_Angular_Spectrum_Method): complete angular-spectrum section, including the Fourier convention, positive axial branch for the declared time convention, propagating/evanescent split and final transversality remark. The batch does not import an unqualified equivalence of arbitrary scalar Helmholtz solutions and Maxwell fields.
- [Beisert, Elektrodynamik §11.1](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), PDF pp. 121–123, equations (11.5)–(11.10): frequency convention and the two transverse amplitude constraints and cross-product relations. These agree with the local component derivations.
- [Cerjan and Cerjan, JOSA A 28 (2011)](https://alexcerjan.com/documents/papers/cerjan_JOSA_2011.pdf), §2 equations (1), (2), (8), positive-root and evanescent discussion, §4 equations (22), (29)–(31), (37), and the opening and paraxial comparison of §5: scalar winding and vector-component context. No acceptance of its unrelated infinite-series manipulations or full angular-momentum derivation is claimed. The batch's remainder estimate, long-distance counterexample and scalar-generator identity are proved locally.

## Consumer and diagram dispositions

The definition's complete item/reference consumer search found exactly the four other local physical carriers. `pthm-emx-paraxial-error` uses the scalar multipliers and source-free real divergence equation; `pthm-emx-scalar-vortex-eigenvalue` uses the scalar class only; `cex-emx-paraxial-distance-failure` uses the scalar propagation convention; `ex-emx-longitudinal-focused-field` uses the real-mode convention and all four homogeneous equations. Each actual use remains valid; their carrier statements need no change. Necessary current citation mirrors were updated in the owned contract. No further interface change requires another hop. The example has no item/reference consumer outside its own placement page; its title and polarization qualification require no other carrier repair.

Both assigned diagrams were checked: the angular-spectrum cross-section has the correct positive root and paraxial curve with the declared cone restriction; the example's normalized vectors match its construction and are orthogonal algebraically. The drawings are schematic and both proofs remain independent of them. No missing diagram is required by these arguments.

The two consumer-owned cross-batch rows were updated with the exact batch-9 comparison-class use, and the frontier ledger was refreshed. Stable IDs, placements and logical edges are preserved. No outside item was edited. No defective published supplier was found in the used interfaces, so no published-maintenance ledger entry was needed.

## Completed local checks and limits

- Initial `risk-report.mjs` routed all six items (four CRITICAL, two HIGH). After each dependency-ordered review its contract received specific complete notes. Final `risk-report.mjs ... --require-reviewed`: 0 errors, six items.
- `tsx-run.mjs .../reflow.mts items/ex-emx-longitudinal-focused-field.md`: unchanged.
- `tsx-run.mjs .../precheck.mts` on all six explicit batch item paths: six checked, zero failing.
- `proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-10.proof-contracts.json --strict`: 0 errors, 0 warnings, 6/6 checked.
- `rendercheck.mjs` on the two touched item paths: both pass YAML and KaTeX checks.
- Final `proof-layout.mjs items/def-emx-angular-spectrum.md items/ex-emx-longitudinal-focused-field.md`: two items, nine steps, zero defects. No item edit or formatter followed it.
- Native defect-ledger append: three rows appended and the generated view refreshed. Frontier dependency refresh completed and deduplicated its records.

Two exploratory attempts to invoke `.mts` scripts directly with Node failed because the TypeScript loader was absent; rerunning through the documented `tsx-run.mjs` wrapper succeeded. An exploratory plural `proof-contracts.mjs` filename did not exist; the correct singular tool passed. These mechanical invocation failures are not scientific findings and have no defect-ledger rows.

There are no unresolved local blockers, withdrawals or escalations. All physical conclusions are conditional on their stated models; this batch has no measured inputs, reported observations or statistical inference. No publication, judge cycle, decision stamping, self-certification or engine gate battery was performed. The engine owns current decision hashes and subsequent gates.
