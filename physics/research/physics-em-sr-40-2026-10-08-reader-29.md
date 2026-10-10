# Reader 29 — physics-em-sr-40-2026-10-08

Batch: `29`. Independent Step 5a review; all content remains draft. No judge or publication stamp was added. Work is confined to the assigned item carriers, their proof contract, and this report/findings output.

## Completion

Opened both assigned pages and all ten assigned items. Repaired nine draft items; the polarization/magnetization definition and both page carriers are unchanged. Updated the affected proof contracts. No assigned item had a `verification.judge` record to remove. Reflow and precheck pass for every changed item. Scoped render checks pass. The strict contract check passes for all ten assigned items. The final batched proof-layout check reports nine items, 36 steps, zero defects.

## Repairs and evidence

- `post-em-coarse-graining`, Postulate(b): replaced an unsupported reference for the local cutoff with `lem-test-function-cutoffs-and-euclidean-localization`. A compact union of nearby footprints lies inside Omega; cutting off the input there gives a globally locally integrable function whose mollification agrees locally. This closes smoothing and openness without assuming boundary integrability of the original zero extension. Exact smoothing and cutoff statements were opened.
- `pthm-em-macroscopic-maxwell`, source reference and Proof3.1: Fitzpatrick node70 is electric interface conditions, whereas node73 equations858–864 contain the bound-current/macroscopic-Ampere rewriting. Corrected the link and locator. The published compatibility theorem assumes Ck; the statement's continuous single-coordinate source derivatives do not imply full C1. Added compact-box localization, single-coordinate integration by parts, Riemann/Lebesgue comparison and Fubini, preserving the broader source class.
- `post-em-material-closure`, Postulate(a)–(c): supplied fixed-position material histories, matrix symmetry/positivity definitions, coefficient units, the full-history domain of the convolution, entrywise kernel integrability and units, separate smoothness hypotheses, closed-half-plane continuity and the adopted harmonic meaning of a standalone analytic transfer. This avoids evaluating an undefined past on a finite laboratory interval and avoids inferring a time-domain operator from holomorphy alone. Corrected Fitzpatrick's linear-magnetization citation from node73 to node74 equations866–868. These are physical-interface clarifications requiring consumer review.
- `pthm-em-material-stationary-jumps`, Statement and Proof1.1–1.2: added sheet-density units and completed the weak-trace passage from slice formulas to spacetime distributions using the stated L1 derivative/trace conditions and Fubini. The volume/sheet coefficient extraction uses genuine ambient smooth tests, positive graph density and the fundamental lemma; the four signs are preserved.
- `pthm-em-causal-dispersive-response`, Statement(c)–(d), Proof1.2,1.4,2.1: kept the dimensionless transfer associated with K distinct from the scaled polarization kernel epsilon0 K; explicitly normalized the physical polynomial branch and stated coefficient units/harmonic response conventions. A supplied theorem about a kernel-derived chi cannot simply be instantiated at arbitrary transfer-only data. Added the direct scalar-period-average calculation for an arbitrary fixed complex matrix C, yielding average work epsilon0 omega Im(e*Ce)/2 and the Hermitian quadratic-form criterion. Restricted the nonzero-skew failure assertion to the instantaneous response alone; combined response must retain M_K+A/i. The symmetric storage term and both circular-amplitude witnesses remain.
- `pthm-em-restricted-material-energy`, source locator, Statement(d), Proof3.1: Tong's Poynting theorem is section4.4 pp92–94, equation4.20, rather than section4.3 pp88–92; section7.3 pp183–184 supplies the material equations/closure, not an energy formula on p185. Corrected the attribution. Showed that the finitely presented boundary is volume-null before replacing the closure integral by the open-volume integral. Conservation requires vanishing net flux plus volume work; zero boundary flux alone is insufficient. Corrected the contract's erroneous empty-domain and J_f=0/flux-free descriptions.
- `ex-em-constitutive-unit-counterexample`, source locator and Verification1.3: BIPM derived units are in section2.3.4 Table4, printed p133/PDF p135, not Table3. Replaced the scalar/unitless witness by E(t)=E_* min(1,max(0,-t/tau))e1 and K(s)=tau^-1 1_[0,tau](s) I3. Its response at zero is epsilon0 E_* e1/2 although E(0)=0; an instantaneous matrix law gives zero. This preserves the counterexample with vector types and SI units. Replaced an unsupported general Fourier-components assertion by the explicit single-harmonic definition, which does not presume a Fourier transform for every bounded continuous history.
- `ex-em-dielectric-interface-example`, Example and Verification1.1,3.1: restricted both sides to Omega, defined scalar normal/vector tangential parts explicitly, supplied surface-charge units, and localized to actual rectangular boxes inside the laboratory region before line integration/product testing. This avoids using whole half-lines on which a field may not be defined. The noncompact plane uses local tests and never invokes a compact-interface theorem globally. Corrected contract-only F3-jump and bounded-volume-source errors.
- `ex-em-dielectric-sphere-example`, Example(b), Verification1.2 and contract reverse direction: potential-trace equality implies tangential-field continuity, but the converse leaves a constant. Adding a constant to one potential changes its trace without changing its field. Removed the false unnormalized equivalence while retaining direct trace equality and the complete transmission uniqueness claim. Defined the radial normal/derivative, coefficient units and the exterior dipole potential/field; distinguished full ambient exterior potentials from laboratory restrictions. Made the monotone nonnegative-energy argument in2.2 explicit and cited the interface derivative formula for the bound charge in2.3. Corrected the contract's interpretation of M=0 as a zero difference; M bounds the competing potential's exterior deviation. The final proof distinguishes the linear interior at the origin from the r>=a exterior regularity argument, and bounds the dipole-gradient norm by its explicit squared norm d^2 r^-6 (1+3(z/r)^2).

## Consumer review obligation

The repaired postulate formulations and physical example/theorem interfaces require direct-consumer review. All owned consumers were examined against the repaired suppliers; no edit outside batch29 is authorized. The outside-batch consumers are listed below. Their exact supplier-use passages were checked for compatibility; this is not a full proof audit of those items. No further consumer edit was indicated by these changes. No defect in any outside-batch carrier is asserted solely because it is a consumer.

## Uneditable findings, blocker and limitations

No uneditable defect remains confirmed; the findings JSON has an empty findings array. No withdrawal is proposed. No blocker remains for this reader handoff. Imported mathematics and another batch's draft suppliers were read only. Published mathematical statements were used with their actual hypotheses; selected local distributional, dispersion and parameter-integral proofs were opened. This is not a whole-corpus or full transitive-proof audit. Author full-book reading assertions remain author evidence; the reader's independent source retrieval is limited to the sections/URLs recorded below.

## Page verdicts and assigned inventory

| Page | Opened carrier | Reader verdict |
|---|---|---|
| `em-material-response` (A) | `library/classical-electromagnetism/em-material-response.md` | Sound within the declared model hypotheses after the item repairs above. Summary and placements remain accurate; prose unchanged. Ready for independent Step5b consideration, not a judge/publication stamp. |
| `em-material-response-examples` (B) | `library/classical-electromagnetism/em-material-response-examples.md` | The three examples now have valid typed witnesses, local domains and transmission normalization. B prose unchanged; no uneditable page defect found. Ready for independent Step5b consideration. |

All ten item carriers were opened, including their frontmatter, definitions/statements/examples, Facts and proof/verification or nonproof status sections, source locators and remarks:

1. `items/post-em-coarse-graining.md` — repaired cutoff/well-definedness; nonproof contract reviewed.
2. `items/def-em-polarization-magnetization.md` — unchanged; C2 maps, bound/free decomposition, SI types and arbitrary-model status checked.
3. `items/pthm-em-macroscopic-maxwell.md` — repaired citation and single-coordinate classical compatibility.
4. `items/post-em-material-closure.md` — repaired formulation/history/units and citation; nonproof contract reviewed.
5. `items/pthm-em-material-stationary-jumps.md` — repaired weak-trace proof passage and explicit units.
6. `items/pthm-em-causal-dispersive-response.md` — repaired normalization, arbitrary-matrix work argument and skew qualification.
7. `items/pthm-em-restricted-material-energy.md` — repaired boundary-null integration, conservation qualification, locator and contract.
8. `items/ex-em-constitutive-unit-counterexample.md` — repaired SI vector/time witness, harmonic interpretation and locator.
9. `items/ex-em-dielectric-interface-example.md` — repaired local sides, tests and decomposition; retained all zero/equal-medium cases.
10. `items/ex-em-dielectric-sphere-example.md` — repaired potential normalization equivalence, definitions and proof/contract details; uniqueness and candidate retained.

The main authored chain was reviewed from averaging to polarization, macroscopic rewriting and closure, then jump/response/energy results and the examples. Specialized supplier reads sometimes exposed additional prerequisite interfaces, which were then opened before settling or repairing their uses; this is not a claim that the initial file-opening sequence was a complete topological traversal of the entire library.

## Opened supplier inventory

The following are exact supplier carrier IDs under `items/`. Interfaces were opened with their complete relevant hypotheses; full bodies of the six local lemmas/theorem noted at the end and the complex mollification proof passage were additionally read. A published supplier statement was not treated as permission to omit its hypotheses, nor as an independently re-audited proof.


Laboratory, units and field/source language:

- `items/def-em-si-conventions.md`
- `items/def-em-lab-geometry.md`
- `items/def-em-fields.md`
- `items/def-em-sources.md`
- `items/def-inertial-frame-and-inertial-chart.md`
- `items/def-sr-affine-minkowski-model.md`
- `items/def-spatial-euclidean-structure-of-an-inertial-frame.md`
- `items/post-em-vacuum-maxwell.md`

Averaging and measure interfaces:

- `items/def-complex-lp-and-euclidean-test-function-conventions.md`
- `items/def-countable-choice.md`
- `items/def-locally-integrable-function-on-r-n.md`
- `items/lem-complex-translation-and-approximate-identity-interfaces.md`
- `items/def-mollifier-family-generated-by-a-unit-mass-smooth-bump.md`
- `items/thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.md`
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md`
- `items/thm-countable-union-of-null-is-null.md`
- `items/thm-heine-borel-rn.md`
- `items/thm-the-lebesgue-integral-respects-almost-everywhere-equality.md`
- `items/thm-dominated-convergence.md`
- `items/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.md`

Classical derivatives and vector calculus:

- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`
- `items/def-directional-and-partial-derivatives.md`
- `items/def-divergence-and-curl-of-a-c1-vector-field.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-clairaut-schwarz-mixed-partials.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/def-cross-product-in-r3.md`
- `items/def-euclidean-inner-product.md`
- `items/lem-the-divergence-and-curl-of-a-cross-product.md`
- `items/thm-integration-by-parts.md`
- `items/thm-ftc-second-part.md`
- `items/thm-real-power-continuity-and-derivatives.md`
- `items/def-laplacian-of-a-c2-function.md`

Distributions and interfaces:

- `items/def-distribution.md`
- `items/def-test-function-space-d-of-an-open-set.md`
- `items/def-distributional-derivative.md`
- `items/def-regular-distribution-from-a-locally-integrable-function.md`
- `items/thm-locally-integrable-functions-embed-in-distributions.md`
- `items/thm-distributional-differentiation-is-continuous-and-commutes.md`
- `items/def-em-surface-distribution.md`
- `items/def-em-weak-sources.md`
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`
- `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`
- `items/prop-the-image-of-a-lower-dimensional-c1-manifold-is-null.md`
- `items/lem-null-sets-in-rn-closed-under-subsets-and-countable-unions.md`
- `items/lem-test-function-cutoffs-and-euclidean-localization.md`
- `items/lem-fundamental-lemma-of-the-calculus-of-variations.md`
- `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`
- `items/cor-graph-of-a-measurable-function-is-lebesgue-null.md`
- `items/lem-em-interface-derivatives.md`
- `items/def-bounded-piecewise-c-one-euclidean-domain.md`
- `items/thm-divergence-theorem-for-bounded-piecewise-c-one-domains.md`

Causal-response mathematics:

- `items/def-complex-differentiability-holomorphic-and-entire.md`
- `items/def-l-one-of-a-measure.md`
- `items/def-dependent-choice.md`
- `items/def-absolutely-continuous-function.md`
- `items/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions.md`
- `items/thm-integration-by-parts-for-absolutely-continuous-functions.md`
- `items/thm-c1-lipschitz-ac-bv-hierarchy.md`
- `items/thm-taylor-expansion-holomorphic-function.md`
- `items/cor-cauchy-theorem-star-shaped-domain.md`
- `items/cor-cauchy-theorem-for-null-homotopic-loops.md`
- `items/thm-uniform-limit-interchanges-complex-line-integrals.md`
- `items/thm-continuous-partials-and-cauchy-riemann-imply-holomorphic.md`
- `items/thm-differentiation-under-the-integral-sign.md`
- `items/thm-continuity-under-the-integral-sign.md`
- `items/thm-heine-cantor-metric.md`
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`
- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`
- `items/def-em-complex-plane-wave.md`
- `items/lem-em-integrable-causal-dispersion.md`
- `items/lem-em-finitely-subtracted-analytic-dispersion.md`
- `items/lem-em-period-average.md`
- `items/thm-em-causal-dispersive-response.md`

Fixed-volume and sphere mathematics:

- `items/lem-em-parameter-integrals.md`
- `items/cor-classical-dirichlet-and-poisson-problems-are-unique.md`
- `items/cor-first-green-identity-on-a-bounded-c-one-domain.md`
- `items/cor-harmonic-cauchy-estimates-in-supremum-norm.md`

Full local supplier arguments additionally inspected: `lem-em-interface-derivatives`, `lem-em-integrable-causal-dispersion`, `lem-em-finitely-subtracted-analytic-dispersion`, `lem-em-period-average`, `thm-em-causal-dispersive-response`, and `lem-em-parameter-integrals`. In `lem-complex-translation-and-approximate-identity-interfaces`, the definitions and proof1.4 of complex mollification, plus the earlier measurability/norm argument, were inspected; its final approximate-identity convergence proof was not completely read and is not claimed as an audited argument. The contour orientations give PV integral = i*pi times the boundary value; the clockwise small upper arc has negative sign. Integrable kernels use AC integration by parts with Countable/Dependent Choice, retain the 1/|z| bound and C1 boundary, and do not infer passivity. The compact kernel's entire-plane bound retains its exponential factor. The sphere proof uses balls of radius R/4 outside the interface, then the nonnegative weighted Green energy, retaining Countable Choice.

## Focused outside-consumer review

All twenty following current-run carriers had their relevant material/jump/energy supplier-use passages opened. The memory/history and transfer-only clarifications have no new outside-batch load-bearing use: the material consumers use the unchanged elementary scalar branch or explicitly discuss branch limitations. Energy consumers use the retained density, positivity and local balance; their weak energy statements have independent declared modal realizations. Plane interfaces and PEC walls remain explicitly adopted models rather than unsupported global applications of a compact-interface theorem. These focused checks found no repair required by this supplier change. They do not certify the other items' complete mathematics.

- Batch30: `post-em-circuit-approximation` (continuum context, separate terminal-law assumptions).
- Batch34: `def-em-medium-wave-parameters`, `ex-em-brewster-angle-example`, `ex-em-evanescent-flux-example`, `ex-em-skin-depth-approximation-example`, `pthm-em-conducting-skin-depth`, `pthm-em-medium-plane-wave-fields`, `pthm-em-normal-fresnel`, `pthm-em-oblique-fresnel`, `pthm-em-phase-matching` (elementary rest-frame coefficients, unchanged local flux/work and declared plane interfaces).
- Batch35: `def-em-guide-cavity-geometry`, `ex-em-tem-topology-example`, `pthm-em-guide-completeness`, `pthm-em-guide-dispersion-energy`, `pthm-em-open-rectangular-guide-completeness`, `pthm-em-rectangular-mode-candidates`, `pthm-em-uniform-ohmic-modal-decay` (PEC idealization, constant scalar response and retained energy definitions; independent weak/modal evolution).
- Batch38: `rem-em-classical-validity-limits` (qualified branch/regime description).
- Batch40: `post-em-scalar-aperture-model`, `pthm-em-pec-monochromatic-exterior-scattering` (separately adopted aperture/PEC models, not deduced from finite-conductivity closure).

## Independent primary-source evidence

- [Fitzpatrick node69, Polarization](https://farside.ph.utexas.edu/teaching/em/lectures/node69.html), complete substantive page: equations803–814 define P, bound charge and D and qualify linear response. [Node70](https://farside.ph.utexas.edu/teaching/em/lectures/node70.html) is electric boundary conditions, establishing the original Maxwell citation mismatch. [Node73, Magnetization](https://farside.ph.utexas.edu/teaching/em/lectures/node73.html), complete substantive page: equations858–864 supply the currents and H rewriting. [Node74](https://farside.ph.utexas.edu/teaching/em/lectures/node74.html), complete substantive page: equations866–868 supply linear magnetic susceptibility/permeability.
- [Fitzpatrick node71](https://farside.ph.utexas.edu/teaching/em/lectures/node71.html), complete substantive page, second example equations835–842: the vacuum-exterior sphere is the epsilon_out=epsilon0 specialization. The generalized coefficients and uniqueness are verified locally; potential continuity is an explicit normalization rather than a consequence of tangential derivatives alone.
- [Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), retrieved 236-page PDF: section4.4 printed pp92–94/PDF pp100–102 (equation4.20, work plus flux); section7.3 pp183–186/PDF pp191–194 (macroscopic rewriting, linear closure, four jumps); section7.5.4 pp200–204/PDF pp208–212 (harmonic/convolution convention, causality and dispersion with the explicit decay caveat). Complete relevant arguments were read using web extraction and the downloaded PDF's text. The source's stronger convenient decay assumption is not misrepresented as the exact local AC-kernel theorem, whose weaker O(1/|z|) contour argument is supplied locally.
- [BIPM SI Brochure, v4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), 214 pages: section2.3.3 Table3 names base dimensions; section2.3.4 Table4, printed p133/PDF p135, gives coulomb, volt, farad, siemens and henry conversions. This fixes the unit example's inaccurate Table3 attribution.

Griffiths and the separate Fitzpatrick course-book full texts were not independently retrieved/read in this session. Existing author source records were treated as evidence, not a verdict or a reader retrieval attestation. The kinetic-theory PDF was opened at metadata level only and is not claimed as an independently read proof source. An early attempt to use pdftotext failed because it is unavailable; subsequent source text extraction used the installed PyMuPDF reader. No empirical measurement, sampling assumption or statistical precision was introduced.

## Local validation and handoff

- For each of the nine changed item paths: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` reported unchanged canonical flow, and `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<id>.md` passed. The initial response-theorem precheck requested dependency-layer numbering; its repaired numbering1.1–1.4,2.1,3.1 was adopted and rechecked successfully.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-29.proof-contracts.json --strict --items <the ten assigned IDs>`: final result **0 errors,0 warnings,10/10 checked**. The initial check exposed stale uses/numbering, a pre-existing L5 quote mismatch and boundary anchors; all affected contracts were corrected to exact source wording and current proof uses before the passing rerun.
- `node tools/physics-support/rendercheck.mjs <the nine changed item paths>` passed; the unit example and sphere were individually rechecked after their final edits and also passed.
- After all item edits/formatters, the single mandatory batched `node tools/physics-support/proof-layout.mjs <the nine changed item paths>` returned **9 items,36 steps,0 defects**.
- Changed carriers: the nine items named above and `research/physics-em-sr-40-2026-10-08-batch-29.proof-contracts.json`. Output carriers: this report and `research/physics-em-sr-40-2026-10-08-reader-findings-29.json`. No page, manifest, plan, imported snapshot, published carrier, other-batch contract or original mathematics carrier was edited.

These checks are local format/citation-contract evidence, not independent mathematical acceptance or empirical certainty. All ordinary Step5b and later workflow reviews remain due.
