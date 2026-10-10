# Batch 29 Step 5a adjudication

Run `physics-em-sr-40-2026-10-08`; group `batch-29`; draft content only. No judge, certification, publication or engine transition was performed.

## Dependency-ordered review checkpoints

- **post-em-coarse-graining — accepted_repair.** The reader replaced an unsupported cutoff citation by `lem-test-function-cutoffs-and-euclidean-localization`. Compact neighbourhood footprints stay inside the open domain; cutting off the slice before zero extension supplies the smoothing theorem’s exact global local-integrability hypothesis. AC_omega, every-time versus almost-every-time slices, extension conditions, non-unit supports and the absence of time regularity are explicit. Reviewed the exact cutoff/smoothing statements and smoothing proof, local Fubini and null-union statements, and laboratory field/source/unit definitions. No new repair. Risk review complete in the owning contract.

All dependency-ordered checkpoints are complete below. The final local-check record and outside-batch impact routing follow them.

- **def-em-polarization-magnetization — flagged-source repair.** Reviewed the jointly C2 model maps P,M, derivative typing, SI units and free/bound decomposition. No uniqueness, constitutive relation or field equation is asserted. Exact Ck, partial-derivative, divergence/curl and one-variable derivative suppliers apply componentwise. Independently read Griffiths printed p.264/PDF280 and p.329/PDF345: (6.13) is curl M and (7.48) is dP/dt. The old locator falsely attributed both to section6.2.1. Corrected only the source locator; Definition and consumers are unchanged.
  Finding `flagged:29:2`: **confirmed_fatal**. Reviewed the jointly C2 model maps P,M, derivative typing, SI units and free/bound decomposition. No uniqueness, constitutive relation or field equation is asserted. Exact Ck, partial-derivative, divergence/curl and one-variable derivative suppliers apply componentwise. Independently read Griffiths printed p.264/PDF280 and p.329/PDF345: (6.13) is curl M and (7.48) is dP/dt. The old locator falsely attributed both to section6.2.1. Corrected only the source locator; Definition and consumers are unchanged. Repair: Split the two current formulas between their actual sections/pages/equations. Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-2` is closed with repair_confidence 1.

- **pthm-em-macroscopic-maxwell — amended_repair.** Independently traced all five steps. C2 mixed-partial commutation cancels bound divergence; distributional commutation applied to smooth vacuum Ampere/Gauss yields continuous-source conservation without differentiating sources classically. Single-coordinate C1 line restrictions, compact-box partition localization, zero test endpoint terms, Riemann/Lebesgue comparison and Fubini justify the broader classical-source clause; regular-distribution injectivity converts its continuous sum to pointwise zero. Direct substitution gives D/H Maxwell with eps0*mu0*c2=1. Zero dipoles and zero sources are included; no weak material law is inferred. Reader repairs accepted; source-only amendment independently verified visually on Griffiths printed p.330/PDF346, equations(7.53)-(7.55); old pp.331-332 are boundary conditions.
  Finding `flagged:29:3`: **confirmed_fatal**. Independently traced all five steps. C2 mixed-partial commutation cancels bound divergence; distributional commutation applied to smooth vacuum Ampere/Gauss yields continuous-source conservation without differentiating sources classically. Single-coordinate C1 line restrictions, compact-box partition localization, zero test endpoint terms, Riemann/Lebesgue comparison and Fubini justify the broader classical-source clause; regular-distribution injectivity converts its continuous sum to pointwise zero. Direct substitution gives D/H Maxwell with eps0*mu0*c2=1. Zero dipoles and zero sources are included; no weak material law is inferred. Reader repairs accepted; source-only amendment independently verified visually on Griffiths printed p.330/PDF346, equations(7.53)-(7.55); old pp.331-332 are boundary conditions. Repair: Locate macroscopic Ampere-Maxwell at p.330 equations(7.53)-(7.55). Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-3` is closed with repair_confidence 1.

- **post-em-material-closure — amended_repair.** Reviewed the rest-frame fixed-position histories, SPD/PSD real matrix definitions and all coefficient units; sigma=0 is allowed, epsilon and mu cannot vanish, and broadband isotropic speed is separately qualified. Bounded full histories and entrywise real L1 K make the integral finite; time/space smoothness is not inferred. Transfer holomorphy and polynomial growth do not construct a general history operator. Added the necessary boundary reality symmetry, including chi(0) real, and explicitly discharged representation independence for +/-frequency and the zero-frequency imaginary-amplitude ambiguity. Reader clarifications accepted with this amendment. Griffiths p.285/PDF301 equation(7.3) supplies restricted Ohmic response; pp.331-333 instead concern boundary conditions. No measurements, empirical precision or universal material validity are asserted. Direct consumers will be checked locally in order and outside scope routed for Step5b.
  Finding `flagged:29:1`: **confirmed_fatal**. For chi(z)=i, the analytic/growth hypotheses hold with n=1, but +omega and -omega give the same cosine input and opposite sine outputs. This is a true missing-hypothesis finding in the current pre-edit carrier, not a statistical issue. The repaired boundary symmetry makes opposite-frequency outputs equal; chi(0) real removes the DC amplitude ambiguity. Repair: Require chi(-omega)=conjugate(chi(omega)) for all real omega and explain its sufficiency. Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-1` is closed with repair_confidence 1.
  Finding `flagged:29:4`: **confirmed_fatal**. Independently read Griffiths printed p.285/PDF301 equation(7.3), and pp.331-332/PDF347-348. The old pp.331-333 locator supports jumps, not the Ohmic attribution. Repair: Move Ohmic attribution to section7.1.1 p.285 equation(7.3). Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-4` is closed with repair_confidence 1.

- **pthm-em-material-stationary-jumps — accepted_repair.** Reviewed all five steps and the complete current interface-derivative supplier proof: local finite chart half-boxes meet finite-face/seam conditions, and opposite outward normals produce plus n dot jump and n cross jump. The assumed distributional macroscopic equations are expressly additional thin-interface model hypotheses, not consequences of smooth equations off the sheet. Stationary S yields no time delta; Fubini and line integration are justified by joint one-sided C1 bounds or the explicit weak-branch L1 derivatives/traces. Ambient smooth product tests beta(z) eta(y,t), not composition with the merely C2 graph, extract coefficients using positive graph density and the fundamental lemma. Volume and surface parts separate because S times I is locally null. Continuity upgrades a.e. sheet identities only as stated. Empty S and zero sheet densities cause no contradiction; sheet units and tangential K are explicit. Reader weak-trace repair accepted; no additional defect.

- **pthm-em-causal-dispersive-response — amended_repair.** Independently read all six proof steps and the complete current mathematical response, period-average, AC-kernel dispersion and finite-subtraction arguments. L1 domination gives bounded continuous causal convolution; compact support inside the open half-line kills endpoint terms in two integrations by parts. Locally AC K with K,Kprime,sK in L1 gives decay O(1/|z|) using K(infinity)=0 and exact AC/DC calculus. Clockwise upper indentation contributes -i*pi*f(omega), yielding PV=i*pi*f; tails converge absolutely. Each Taylor residual needs its own boundary C1, local holomorphy and growth; n=0 uses decay, and Q need not equal the Taylor polynomial. Normalization remains eps0*K versus dimensionless chi. Direct period averaging for arbitrary C gives eps0*omega*Im(e*Ce)/2 and both directions of the Hermitian PSD criterion. The skew example gives +/-eps0*omega; total dissipation includes A/i and no causality-to-passivity inference. Inherited reality symmetry is explicit for transfer-only data, including DC; matrix terms are defined. Corrected Griffiths locator and additionally corrected Fitzpatrick section9.6: printed pp.266-268 concern dielectric propagation/oscillator response, not Kramers-Kronig. All conclusions are model conditional.
  Finding `flagged:29:5`: **confirmed_fatal**. Griffiths pp.331-333 describe jumps; p.285 equation(7.3) is Ohmic, p.330 equations(7.56)-(7.57) gives linear closure, and pp.398-402 gives frequency response. Source-only correction verified in retained PDF text and the visually read p.330. Repair: Split the Ohmic, linear-medium and dispersive attributions by their actual passages. Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-5` is closed with repair_confidence 1.

Additional confirmed source defect: Fitzpatrick section9.6 misattributed Kramers-Kronig; closed as `physics-em-sr-40-2026-10-08-batch-29-causal-fitzpatrick-locator` and referenced by the touched decision.

- **pthm-em-restricted-material-energy — amended_repair.** Reviewed all five steps and the full current parameter-integral proof. Constant symmetric epsilon/mu make the derivative of each quadratic form twice the corresponding work; SPD gives strict positivity except the zero field pair. Cross-product divergence plus complementary Maxwell curl equations gives the signed local balance, and PSD sigma gives nonnegative Ohmic dissipation while external work remains. The finite piecewise C1 presentation supplies bounded compact closure and volume-null faces/seams; closure and open-volume integrals agree. Continuous time derivative on a neighbourhood of compact closure times a compact interior time interval meets the parameter lemma exactly. Fixed-domain divergence retains boundary flux; zero boundary flux alone does not ensure conservation. No dispersive stored-energy claim or empirical assertion. Reader mathematical repairs accepted. Fitzpatrick printed pp.244-246 equations(8.17)-(8.26) and Griffiths p.285 equation(7.3) replace the independently confirmed wrong locators.
  Finding `flagged:29:6`: **confirmed_fatal**. Fitzpatrick printed pp.220-227 are inductance/magnetic circuit material; the inspected p.244 gives(8.17)-(8.19), pp.245-246 gives restricted material(8.24)-(8.26). Griffiths p.331 is boundary conditions, while p.285(7.3) supplies the Ohmic law. Both original attributions were inaccurate; correcting sources does not change the locally proved balance. Repair: Correct Fitzpatrick to section8.2 pp.242-246 and Griffiths Ohmic law to section7.1.1 p.285(7.3). Ledger `physics-em-sr-40-2026-10-08-batch-29-flagged-6` is closed with repair_confidence 1.

- **ex-em-constitutive-unit-counterexample — accepted_repair.** Reviewed all four verification steps: farad=C/volt and volt=kg*m2*s-2*C-1 give the stated eps0D mismatch; eta units are V*m/C and do not fix its value. The vector history is bounded continuous, the real matrix kernel tau^-1 indicator[0,tau] I3 is L1 with inverse-time units, and E(0)=0 while P(0)=eps0*E_star*e1/2 follows from the explicit polynomial primitive by FTC. Every fixed instantaneous matrix gives zero there, so the witness distinguishes the response operators. The harmonic definition does not assume an ordinary Fourier transform of all bounded histories; real kernel symmetry satisfies the repaired closure automatically. Reader source/unit/type repairs accepted. Zero polarization vacuum algebra is included, while witness tau,E_star are positive. No material measurement or empirical claim.

- **ex-em-dielectric-interface-example — accepted_repair.** Reviewed all five steps: the half-spaces are restricted to actual Omega, and compact tests localize to boxes inside the laboratory region. Height integration on the two C1 sides produces +jump delta; tangential and time derivatives have no sheet term. Fubini is justified by joint one-sided bounds. Thin cutoffs tend to zero off the null plane and remain one on it; dominated convergence removes the L1 volume part, and ambient product tests identify the continuous sheet coefficient. No global use of the compact-interface theorem is made on a noncompact plane. The normal formula divides only by epsilon2>0; both directions of equality include zero normal field and equal media, with either sign of sheet charge. Magnetic continuity additionally assumes the shared mu0 law. Reader domain/localization repairs accepted; the repaired transfer-only closure is irrelevant to this instantaneous branch. No existence or empirical claim.

- **ex-em-dielectric-sphere-example — accepted_repair.** Reviewed all six steps. Positive epsilon_in+2epsilon_out makes the explicit transmission coefficients well defined, including equal media (d=0,C=1) and either contrast sign. Interior linear potential is smooth at the origin; exterior dz/r3 is harmonic and smooth up to r=a>0. Trace equality fixes the additive constant; tangential-field continuity alone does not. The exact gradient norm squared d2*r-6*(1+3q2) gives the r-3 bound. Static B=H=0, sigma=0 and zero free sources satisfy all distributional equations using the exact interface lemma. For uniqueness, weighted Green identities on ball/annulus cancel the inner flux; the O(1/r) difference and exterior harmonic Cauchy estimate give gradient O(1/r2) and outer flux O(1/R). Every fixed-region nonnegative energy is then zero; connectedness and decay force the exterior constant to zero, and the interior trace/Dirichlet uniqueness completes equality. Bound charge has sign n dot(P_in-P_out) and SI units; the effective dipole is a defined exterior field identification, not a point source or dynamic polarizability. Reader normalization/type/asymptotic repairs accepted. Checked Griffiths Example4.7 pp.186-188 and Fitzpatrick node71 vacuum-exterior specialization; general positive exterior coefficient and uniqueness are local deductions.

## Sources, supplier scope and limitations

Exact dependency statements were opened for all 60 outside-batch direct suppliers in the ten carriers, including the imported mathematical conventions and published vector-calculus, distribution, measure, Green and harmonic-estimate interfaces. Relevant source hypotheses were checked against their actual uses. Full current local proofs independently reviewed: `lem-em-interface-derivatives`, `lem-em-integrable-causal-dispersion`, `lem-em-finitely-subtracted-analytic-dispersion`, `thm-em-causal-dispersive-response`, `lem-em-period-average`, `lem-em-parameter-integrals`; the imported cutoff proof and mollifier smoothing proof were also inspected. This is a supplier-use review, not a full transitive audit or publication certification. `research/math-imports.json` identifies the pinned imports; none was edited. No defective published library supplier was identified, so no published-ledger row or lock was needed.

- [Tong, Electromagnetism](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), retained `/tmp/reader29-tong.pdf`, 236 pages: printed pp.172–174 (macroscopic polarization and qualified averaging); pp.176–178 (bound charge, displacement and the charge-at-centre sphere, used only as interface context); pp.183–186, equation(7.13) and (7.17)–(7.20) (material Maxwell and jumps); pp.200–204 (causal response and Kramers–Kronig with the explicitly stronger convenient decay assumption); pp.205–206, (7.47)–(7.48) (Drude harmonic/DC conductivity). Local suppliers prove the exact weaker AC-kernel decay and finite-subtraction results; source shorthand is not a replacement for these proofs.
- [Griffiths, Introduction to Electrodynamics, third edition](https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf), retained `/tmp/reader32-griffiths.pdf`, 596 pages: printed p.264/PDF280 (6.13), p.285/PDF301 (7.3), p.329/PDF345 (7.48), p.330/PDF346 (7.53)–(7.57), pp.331–332/PDF347–348 (jumps), pp.398–402/PDF414–418 (oscillator response), pp.186–188/PDF202–204 (Example4.7). The scan's p.330 has no extracted text; its rendered page was independently inspected, including the equations and the closure paragraph. The corrected locators match these passages. No full-book reading is claimed.
- [Fitzpatrick, Classical Electromagnetism course book](http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf), retained `/tmp/reader30-fitzpatrick.pdf`, 364 pages: printed/PDF pp.244–246, (8.17)–(8.26) (vacuum and restricted linear-medium energy); pp.266–268, (9.65)–(9.75) (dielectric propagation/oscillator context). The latter section does not support its old Kramers–Kronig attribution. Local finite-subtraction arguments and Tong supply that content. The original inductance locator was checked against chapter7's actual headings.
- Fitzpatrick's official HTML [node69](https://farside.ph.utexas.edu/teaching/em/lectures/node69.html), [node73](https://farside.ph.utexas.edu/teaching/em/lectures/node73.html) and [node74](https://farside.ph.utexas.edu/teaching/em/lectures/node74.html): P/D and response qualifications, bound-current/H rewriting (858)–(864), and restricted isotropic magnetic closure (866)–(868). [Node71](https://farside.ph.utexas.edu/teaching/em/lectures/node71.html), second example (835)–(842), supports the sphere's vacuum-exterior specialization; the general exterior coefficient and decay-class uniqueness were checked locally. The normalization issue is explicitly addressed locally instead of inheriting the source's tangential-continuity shorthand.
- [BIPM SI Brochure v4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), section2.3.4 Table4, English printed p.133/PDF135: charge, potential and capacitance units. These unit conventions are not measurements or a material identification.

There are no experiment items or measured numerical inputs in this batch. Conditional predictions and adopted constitutive assumptions remain distinct from observations; no statistical confidence, empirical certainty or material applicability was invented.

## Direct-consumer impact routing for Step 5b

Owned consumers were checked during the ordered review. The transfer-only reality condition was explicitly carried into `pthm-em-causal-dispersive-response`; the unit example uses a real L1 kernel, and the other owned consumers use the unchanged instantaneous branch. No additional owned consumer correction was necessary.

The following outside-batch carriers were opened at their actual supplier-use passages. They retain the unchanged branch equations, local energy densities and jump signs, or separately adopt their weak/PEC/aperture models. No repair is indicated by this supplier change; **their cross-batch obligations remain routed to Step 5b**, without editing or certifying their carriers:

| Batch | Consumers and actual use |
| --- | --- |
| 30 | `post-em-circuit-approximation`: continuum closure is contextual; terminal laws are separately adopted. |
| 34 | `def-em-medium-wave-parameters`, `pthm-em-medium-plane-wave-fields`, `pthm-em-conducting-skin-depth`, `pthm-em-phase-matching`, `pthm-em-normal-fresnel`, `pthm-em-oblique-fresnel`, `ex-em-brewster-angle-example`, `ex-em-evanescent-flux-example`, `ex-em-skin-depth-approximation-example`: isotropic instantaneous lossless/Ohmic branches with finite-band qualifications; local flux/work and separately assumed noncompact planar matching. No transfer-only arbitrary-frequency response is used. |
| 35 | `def-em-guide-cavity-geometry`, `ex-em-tem-topology-example`, `pthm-em-guide-completeness`, `pthm-em-guide-dispersion-energy`, `pthm-em-open-rectangular-guide-completeness`, `pthm-em-rectangular-mode-candidates`, `pthm-em-uniform-ohmic-modal-decay`: unchanged constant scalar model and energy forms; PEC open-wall and weak reflection/variational evolution are separately adopted, so smooth-only results are not silently extended. |
| 38 | `rem-em-classical-validity-limits`: qualified constitutive regime context. |
| 40 | `post-em-scalar-aperture-model`, `pthm-em-pec-monochromatic-exterior-scattering`: separately adopted ideal aperture/PEC assumptions, not deductions from finite conductivity. |

The 46 owned consumer-input rows in `research/physics-em-sr-40-2026-10-08-batch-29.cross-batch-dependencies.json` retain their existing verified statuses and receive this focused current-review evidence. The authorized `frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08` merged/deduplicated those inputs successfully. No other batch input was edited. The owning page manifest was synchronized with current dependencies, roles and public statements, including the reader's added local cutoff and classical-source suppliers; page order and stable IDs are preserved. No withdrawal is proposed.

## Hash comparison and decisions

The pre/post snapshots record nine reader-changed items and one unchanged definition. All five accepted reader carriers remain byte-identical to their post-reader hashes: `post-em-coarse-graining`, `pthm-em-material-stationary-jumps`, and the three examples. The four amended reader carriers receive the corrections described above; the unchanged definition receives its routed citation repair. Reader reports and pre/post fingerprints support the reader delta; the complete current arguments, not those reports alone, support acceptance. No exact historical carrier reconstruction or full-book audit is claimed.

Exactly 15 owed decisions are supplied: nine touched decisions (five accepted_repair, four amended_repair) and six flagged decisions (confirmed_fatal). Each flagged decision references exactly one closed ledger row owned at caught_at_stage 5a-adjudicate. The additional current Fitzpatrick source defect is closed separately and referenced by the response theorem's touched decision. Completed repairs carry repair_confidence 1. The engine retains responsibility for current decision hashes and all independent gates.

## Local checks and handoff

- Initial risk-report without `--require-reviewed` routed nine HIGH/CRITICAL carriers; their specific complete risk reviews were recorded before moving higher. Final `risk-report.mjs research/physics-em-sr-40-2026-10-08-batch-29.proof-contracts.json --require-reviewed`: 0 errors, 10 items routed.
- Reflow of all five Alpha-edited item carriers reported unchanged canonical flow. The four applicable proof/nonproof prechecks pass; the definition has no proof-like section (0 checked, 0 failing).
- Strict owning proof-contract check: 0 errors, 0 warnings, 10/10 items checked. An initial contract-check failure was solely a nonstandard new boundary-case label; the evidence was merged into the standard zero boundary record and the check passed. No defect-ledger row was created for this mechanical issue.
- Scoped rendering of all five Alpha-edited carriers: YAML and every math span parse using the real renderer/KaTeX; no delimiter or wikilink-in-math defects.

The final mandatory batched proof-layout result follows after the last item edit/formatter. No substantial prerequisite gap or unresolved local finding remains. Outside impact reviews and independent gates remain the engine/Step5b lead's work.

- Mandatory final command: `node tools/physics-support/proof-layout.mjs items/def-em-polarization-magnetization.md items/pthm-em-macroscopic-maxwell.md items/post-em-material-closure.md items/pthm-em-causal-dispersive-response.md items/pthm-em-restricted-material-energy.md` returned **5 items, 16 steps, 0 defects** after the final item edit and formatter.

- Scoped `content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-29.pages.json`: **10 items, 0 errors, 0 warnings**.

## Exact supplier inventory

Every ID below denotes `items/<id>.md`; each relevant Definition, Statement or Postulate and its stated hypotheses was opened. Full-proof review is limited to the suppliers explicitly identified above. These source locations preserve the review mapping without extending write ownership.

- `def-complex-lp-and-euclidean-test-function-conventions`
- `def-countable-choice`
- `def-em-fields`
- `def-em-lab-geometry`
- `def-em-si-conventions`
- `def-em-sources`
- `def-locally-integrable-function-on-r-n`
- `lem-complex-translation-and-approximate-identity-interfaces`
- `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
- `thm-countable-union-of-null-is-null`
- `thm-heine-borel-rn`
- `thm-the-lebesgue-integral-respects-almost-everywhere-equality`
- `lem-test-function-cutoffs-and-euclidean-localization`
- `def-ck-euclidean-maps-and-diffeomorphisms`
- `def-directional-and-partial-derivatives`
- `def-divergence-and-curl-of-a-c1-vector-field`
- `thm-algebra-of-derivatives`
- `post-em-vacuum-maxwell`
- `thm-clairaut-schwarz-mixed-partials`
- `def-distribution`
- `def-distributional-derivative`
- `def-regular-distribution-from-a-locally-integrable-function`
- `thm-locally-integrable-functions-embed-in-distributions`
- `thm-distributional-differentiation-is-continuous-and-commutes`
- `thm-integration-by-parts`
- `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`
- `def-complex-differentiability-holomorphic-and-entire`
- `def-inertial-frame-and-inertial-chart`
- `def-l-one-of-a-measure`
- `def-cross-product-in-r3`
- `def-em-surface-distribution`
- `def-em-weak-sources`
- `def-euclidean-inner-product`
- `def-test-function-space-d-of-an-open-set`
- `lem-em-interface-derivatives`
- `def-surface-integral-on-a-compact-c-one-hypersurface`
- `lem-surface-integral-is-independent-of-c-one-boundary-charts`
- `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
- `lem-fundamental-lemma-of-the-calculus-of-variations`
- `thm-dominated-convergence`
- `def-bounded-c-one-domain-boundary-charts-and-outward-normal`
- `cor-graph-of-a-measurable-function-is-lebesgue-null`
- `def-dependent-choice`
- `lem-em-finitely-subtracted-analytic-dispersion`
- `thm-em-causal-dispersive-response`
- `lem-em-period-average`
- `thm-complex-exponential-is-entire-with-derivative-itself`
- `thm-chain-rule-for-total-derivatives`
- `lem-em-parameter-integrals`
- `lem-the-divergence-and-curl-of-a-cross-product`
- `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`
- `thm-ftc-second-part`
- `cor-classical-dirichlet-and-poisson-problems-are-unique`
- `cor-first-green-identity-on-a-bounded-c-one-domain`
- `cor-harmonic-cauchy-estimates-in-supremum-norm`
- `def-laplacian-of-a-c2-function`
- `thm-real-power-continuity-and-derivatives`
