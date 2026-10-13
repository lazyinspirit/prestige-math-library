# Batch 61 Step 3a adjudication

Run: physics-cm-qm-gr-79-2026-10-11. Group: batch-61. Scope assignment group w retained.

Pre/post reader hashes are identical; no reader repairs or page changes were routed. Eight reader/refuter obligations are owed. Review proceeds in the generated dependency order.

## Completed level 0 review

`lem-nrqm-scattering-three-dimensional-current-and-flux`: reader:61:4 and refuter:61:4 confirmed_nonfatal, repaired with confidence 1. Statement explicitly quantifies over arbitrary nonempty open Omega in R^3 and I in R. def-interval Definition supplies order-convex real intervals, not these open sets. Removing that citation leaves every hypothesis and all derivative/current conclusions unchanged; F1 still uses one-variable intervals.

Checked current Statement, Facts and all steps against exact supplier statements. C2 functions yield C1 current, real V cancels in continuity, stationary substitution cancels (V-E)uv, and the divergence theorem applies to the interior closed ball with AC_omega. Plane-wave current uses |d|=1. Radial outgoing current requires C1 angular amplitude and r>r0>0 only; no free equation is asserted. Zero and both equivalent readings checked. Citation correction preserves the public hypotheses and conclusion; no consumer repair is required. Contract risk review complete. Local layout/precheck remain pending until final edits.

## Review checkpoint (subsequently completed)

Review level 4 scaling and its exact operator/PVM suppliers, then the level 11 obligations. No published defect identified so far.

## Completed level 4 review

`lem-nrqm-scattering-model-scaling-correspondence`: All ten steps checked against the exact free Sobolev-domain identification, positive self-adjoint scaling, regular PVM uniqueness, bounded integrals, dominated cutoff convergence, monotone convergence and nonzero Lebesgue dilation suppliers. V may be unbounded only with the explicitly assumed multiplier-domain inclusion and self-adjoint A; bounded V discharges both. Pushforward is E_A(B/c), preserving regularity; the domain integral scales by c^2 and the cutoff is |c lambda|<=n. The common domain and action identify H exactly. c>0 transfers null sets, atoms, eigenvectors and both tails of the positive time bijection; zero vectors and empty B are harmless. AC and AC_omega retained, no physical premise. No decision owed and no edit required. Next: stationary definition and resolvent-tail theorem.

## Completed level 11 stationary-definition review

Definition (a) admits both model classes, whereas the stationary construction and its exact mathematical supplier require real bounded compact support and k>0. Clause (d) now attributes existence and finiteness only to that proved class, while retaining the conditional readings whenever the limit and integral exist for other data. Direct item/reference consumers inspected: stationary construction, Born theorem, partial-wave definition/theorem, stationary-dynamical theorem, uniform-ball example and scope remark, plus the A-page summary. Their actual stationary uses specify compact support or defer to the compact-support construction; none uses universal resolvent-tail stationary existence. No necessary consumer repair or outside consumer escalation. Verdicts: reader:61:1 and refuter:61:1 confirmed_fatal; repair confidence 1. The general short-range dynamical class is preserved. No planned stationary result for the broader class is treated as proved. Exact suppliers: short-range Definition (b), stationary physical Statement (a)-(c), mathematical stationary-outgoing Statement (a)-(c). Next: resolvent-tail proof.

## Completed level 11 resolvent-tail review

Proof 3.1 inserted a tag between S_* and its sentence continuation; earlier steps give unitary S_* and D_*, hence unitary conjugation. The current interior tag has no self-reference, whereas the historical report describes one; the present defect is still the interrupted math/prose and nontrailing tag. Removed all four interior duplicate tags (1.1,2.1,3.1,4.1), retaining their valid final justification groups and every equation. Read every step and current resolvent-tail supplier Statement and full proof. W_* has L2 norm E_*^-1 L_*^-3/2 ||V2|| and bounded part E_*^-1 ||Vb||; h_* is exactly the input-tail norm, not an output cutoff. Supplier supplies the multiplier-domain inclusion, self-adjointness, both isometries, equal continuous/absolutely-continuous ranges, vanishing singular-continuous space and unitary S. Positive energy/time scaling and unitary D_* transfer each conclusion. S=D_*^*S_*D_*. Sufficient decay uses delta>0 and C/E_*, with local compact support dilated. Coulomb bump f_r=(A0-i)phi_r is supported beyond r, resolvent returns phi_r, denominator is nonzero and independent of r, and the norm lower bound constant/(2r+R) is not integrable. No stationary or threshold conclusion. Fixed all interior tag interruptions, including reported 3.1; no mathematical interface changed. Reader:61:3 and refuter:61:3 confirmed_nonfatal, repair confidence 1. Exact sources: controlled resolvent-tail Statement and steps 1.1-9.1; bump Statement, translation Statement, central-free Statement (a), local scaling proof above. Historical observed fingerprints differ from the immutable pre/post snapshot; historical wording is reported evidence, not a claim that it matches current bytes. Next: Cook/free-continuity theorem.

## Completed review: pthm-nrqm-scattering-wave-operator-existence-and-free-continuity

All six steps checked against current Cook existence (a)-(c), Cook isometry/intertwining (a)-(d), no-positive-eigenvalue Statement and scaling (a)-(e). Real bounded compact W is L2, with self-adjointness already supplied, so no circular use of Cook. Positive substitution t=(2m/hbar)tau on finite intervals followed by increasing half-line limits gives both integrals; continuity follows from bounded W and strong free flow. Isometry and domain intertwining transfer with c>0. Free scalar measures give zero negative/zero mass and no atoms; positive eigenvalue contradiction uses k=sqrt(lambda/c)>0 and psi nonzero. No threshold or completeness claim, no empirical premise. AC/AC_omega declared. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed review: pthm-nrqm-scattering-compact-support-asymptotic-completeness

All four steps checked against exact compact-support completeness supplier (a)-(c), scaling and model Definition (d). Reduced W remains real bounded compact, same Sobolev domain. Positive energy dilation preserves ac, atomless singular, eigenvector span and its orthogonal complement; limits coincide. Individual equal ranges (not just their sum) justify both sides of unitarity, and free commutation transfers for every t. Zero vectors and V=0 are included. k=0 is never a stationary claim. The threshold remark refers only to compact-defect cutoffs and is not a premise for completeness. Conditional model interpretation and choice assumptions retained. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 12 stationary-wave review

Step 5.1 attributed the outgoing reading to the incident exponential; exact supplier (b) and physical step 3.1 give Psi=e_inc+e^{ikr}f_k/r+error. Now explicitly assigns the equation and outgoing reading to total Psi and keeps smoothness of the incident exponential separate. All five steps checked against full stationary-outgoing supplier proof and full outgoing-Fredholm supplier proof, local scaling and current lemma. W real bounded compact and k>0 meet each hypothesis; the square-integrable singular kernel defines bounded K. I+K is invertible, not K. H2_loc equation is distributional across the potential; off its essential closed support, separated convolution permits smooth derivatives. Far-field O(r^-2) and radial derivative bounds give the scattered-component current O(r^-3); no removal of total-field interference is assumed. n_inc>0 cancels with incident flux; smooth bounded amplitude on finite-area sphere yields finite cross section. The outgoing reading belongs to total Psi, corrected in step 5.1. Uniqueness asserted only for the invertible construction, not for arbitrary exterior-only solutions. No k=0, preparation or observation claim. Verdicts reader:61:2 and refuter:61:2 confirmed_nonfatal, repair confidence 1. This proof-only repair does not change the physical public interface. All eight owed decisions now recorded; remaining risk reviews proceed in dependency order.

## Completed level 13 review: pthm-nrqm-scattering-controlled-born-approximation

Every step checked against full controlled-Born supplier (a)-(c) and its geometric-series proof. Actual W is real bounded compact; K and amplitude use the same kernel and k. q finite, q<1 only for (a)-(b); coupling branch needs |eta|q<1 even when base q>=1. Two factors of |eta| arise from scaled amplitude functional and solution error. q=0 and eta=0 give zero error, denominator stays positive. ||e_d||=|B_R|^1/2 makes estimate uniform in both directions. Complex eta is algebraic and explicitly supplies no real-potential flux or unitarity conclusion. AC_omega and AC retained, no measured quantity. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 13 review: pthm-nrqm-scattering-partial-wave-cross-section

All four physical steps and exact supplier Statement plus full six-step proof checked. Real bounded central W with compact support preserves radial class. Supplier constructs normalized regular solutions by Volterra series for bounded measurable radial data; outgoing Wronskian is nonzero and free-potential sign gives S_l=1. Smooth compact-source amplitude supplies absolute/uniform as well as L2 Legendre convergence; no unjustified exchange of infinite channel sum and far-field limit. Angular norm is 4pi/(2l+1); Parseval gives pi/k^2 times weighted |S_l-1|^2, and |S_l-1|^2=4sin^2(delta_l). Phase is modulo pi; no sign, low-energy or generic-resonance claim. k>0, zero potential and zero amplitude covered; empirical inference absent. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 14 review: pthm-nrqm-scattering-single-channel-resonance-cross-section

All four steps checked against resonance Definition (b), channel definition and exact partial-wave supplier (c). Positive Gamma keeps x+iy nonzero on the whole auxiliary real axis. Arg in (0,pi) defines phase modulo pi without the E=E_r division; arctan only used for x nonzero. L=1 iff E=E_r and L=1/2 iff E=E_r +/-Gamma/2. E_r may be nonpositive, but physical k and cross sections stay E>0 and centre evaluation requires E_r>0. Width is of L, not the energy-dependent cross section and no maximum or lifetime is inferred. Every displayed factor and unit checked; no empirical premise. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 14 review: pthm-nrqm-scattering-stationary-dynamical-identification

All five physical steps checked against sector-identification exact Statement (a)-(d) and Facts; W and physical-model S agree with the source via positive scaling. Source explicitly uses Fourier normalization (2pi)^-3/2 and E=k^2, so the free energy-angular trace includes E^1/4/sqrt(2); auxiliary E is not physical joule energy. Kernel f_k and factor ik/(2pi) agree exactly. Invertibility is of I+K, complete waves are independent inputs, and physical conclusion is only a.e. in positive E. Rotations give covariance between V_R and V, with fixed-potential channel diagonalization only for central V. Negative/zero bound states are not asserted absent. No measurements or uniform threshold bound. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 14 review: ex-nrqm-scattering-born-uniform-ball-amplitude

All five verification steps checked against Born error supplier and polar-coordinate/sphere-measure formulas. Ball Fourier integral gives 4pi(sin(qR)-qR cos(qR))/q^3 for q>0; at q_tr=0 its integrand is one and volume 4pi R^3/3 supplies the exact removable forward value. Kernel-square bound integrates |x-y|^-2 over radius 2R, giving q_HS=|2mV0/hbar^2| R^2 sqrt(2/3), dimensionless. Sufficient q_HS<1 and monotonic t/(1-t) give stated uniform amplitude error; V0=0 gives exact zero. Length and area-per-solid-angle units retained, forward Born reading distinguished from exact amplitude and measurements. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 14 review: ex-nrqm-scattering-square-well-s-wave-phase-shift

All seven verification steps checked against actual regular/outgoing channel convention, Taylor bound, trigonometric identity, IVT/MVT and polar/Sobolev suppliers. Matching u,u_prime across bounded jump gives z=K cos(Ka)+ik sin(Ka), nonzero since k,K>0, and S0=e^-2ika z/conjugate(z); W=-Bk e^-i delta fixes sign. Nonresonant fixed-depth expansion gives a_eff and k^3 remainder; exact threshold has X=-s_n a k^2/2+O(k^4), Y=s_n k+O(k^5), yielding delta=pi/2-ak/2+O(k^3). Zero-energy exterior 1/r is not L2. Negative branch f_g(x)=x cot x+sqrt(g^2-x^2) has opposite endpoint signs and strictly negative derivative for alpha_n<x<g<(n+1)pi; matched exponential yields a nonzero W2,2 eigenfunction with no surface delta. Threshold limit kappa->0 and limited branch exclusion checked. Hard-sphere comparison is iterated and conditional, not universal deep-well limit. U=0, sin(Ka)=0 and cos(Ka)=0 all use nondividing formula. No empirical claim. No routed decision or mathematical repair required; later source-locator corrections are recorded separately.

## Completed level 15 review: pthm-nrqm-scattering-coulomb-dollard-completeness

All six physical steps checked against exact Dollard remainder and channel-completeness Statements; the latter full eighteen-step proof was also read. Coupling gamma0, c0 and numerical time tau are positive. Unitary SI coordinate map transports H2 and PVM; log(|t|/t_star)=log|tau|-2log L, so modifier equals source modifier times the fixed free-energy phase B_sigma,L. Coefficient equals gamma0/(2sqrt(lambda)); B is bounded Borel unimodular even at the assigned zero value. No unbounded reciprocal-momentum domain is imposed on arbitrary vectors. Strong limits pass through fixed B and positive time bijection; onto phases preserve the full ac=c ranges. Isometry, both unitarity products and commutation follow from independently supplied intertwinings. Changed reference times give Q_+^* S Q_- rather than unchanged S. Source annular remainder is integrable and dense extension covers all channels. No unmodified comparison, amplitude or empirical assertion.

## Completed level 15 review: ex-nrqm-scattering-long-range-tail-and-coulomb-warning

All four steps checked against resolvent-tail theorem (c),(d), exact exponential-beats-polynomial Statement and Coulomb declaration. Local 1/r singularity has finite L2 integral 4pi g^2 integral_0^L e^-2mu r dr; tail bounded by g/L. For real delta>0 choose an integer N>1+delta and apply integer polynomial dominance, giving bounded e^-mu_*s(1+s)^(1+delta), with compact-region continuity. Positive mu_* is essential; no uniform constant as mu->0 is claimed. The theorem supplies full input-resolvent integrability, not only a pointwise bound. Coulomb pointwise limit away from origin fails sufficient decay, and the cited theorem (d) separately proves failure of the general class by a translated-bump norm lower bound. No limit of wave operators or measured screening is inferred. Removed interior duplicate tags in steps 1.1 and 2.1; complete trailing tags retained.

## Completed level 15 review: ex-nrqm-scattering-single-channel-resonance-cross-section

All four steps checked against resonance theorem (a)-(c) with l=0, E_r>0 and arbitrary Gamma>0. Centre value positive so ratio division is legitimate. k_r^2/k(E)^2=E_r/E retains positive-energy domain; lower half-height point is positive iff Gamma<2E_r, excluded at zero and negative otherwise. E_r=4Gamma gives exact ratios 4/9 and 4/7, not half. Full real-axis factor width remains Gamma without changing cross-section domain or asserting a maximum. No slow prefactor assumption, lifetime or empirical value.

## Additional required-risk-review repairs

`ex-nrqm-scattering-long-range-tail-and-coulomb-warning`: removed two interior duplicate tag groups without altering its mathematics; closed ledger row `physics-cm-qm-gr-79-2026-10-11-batch-61-yukawa-tags`, repair confidence 1. No additional routed decision is owed.

`lem-nrqm-scattering-model-scaling-correspondence`: Author-hosted Teschl first-edition PDF (version February 12, 2009) table of contents and section headings locate Sections 7.2-7.3 at printed 167-170 and Section 3.1 at printed 87-98. Prior source titles mixed later-edition page numbers with the first-edition URL. Corrected only those locators; actual operator/PVM suppliers and mathematical interfaces are unchanged. Closed ledger row `physics-cm-qm-gr-79-2026-10-11-batch-61-scaling-source-locators`, repair confidence 1. No additional routed decision is owed.

## Source-version locator review

Current Binney/Skinner author-hosted PDF has §12.3 at printed 267-270, §12.5.1 at 276-278, and §12.6.1 at 280, rather than the displaced page numbers in the authored titles. Corrected reference locators on routed items only (source URLs and interfaces unchanged), with one closed citation-inaccurate row per affected carrier and repair confidence 1. Fitzpatrick Yukawa discussion is §15.3, printed 211-212; corrected that association in the routed Yukawa example. Exact affected IDs:

- `lem-nrqm-scattering-three-dimensional-current-and-flux`
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity`
- `pthm-nrqm-scattering-compact-support-asymptotic-completeness`
- `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`
- `pthm-nrqm-scattering-partial-wave-cross-section`
- `pthm-nrqm-scattering-controlled-born-approximation`
- `pthm-nrqm-scattering-stationary-dynamical-identification`
- `pthm-nrqm-scattering-coulomb-dollard-completeness`
- `pthm-nrqm-scattering-single-channel-resonance-cross-section`
- `ex-nrqm-scattering-square-well-s-wave-phase-shift`
- `ex-nrqm-scattering-single-channel-resonance-cross-section`
- `ex-nrqm-scattering-born-uniform-ball-amplitude`
- `ex-nrqm-scattering-long-range-tail-and-coulomb-warning`
- `def-nrqm-scattering-stationary-beam-and-cross-section-model`

The unassigned definitions/remarks with similar old locators remain read-only; owner follow-up is recorded below.

## Yukawa prerequisite declaration

Verification 1.1 used polar integration and sphere area 4pi without declaring the actual suppliers. Added thm-polar-coordinates-formula-for-lebesgue-measure and lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates to deps/dependency_roles and F1, with exact Statement quotes and use 1.1 in the contract. Their dimension-three and AC_omega hypotheses hold. Also stated the integer N>1+delta comparison needed to apply the integer-polynomial dominance supplier; no public setup or conclusion changed. Repair confidence 1; closed ledger row `physics-cm-qm-gr-79-2026-10-11-batch-61-yukawa-polar-premises`.

## Source evidence and review limits

Authoritative external text inspected: [Teschl, first edition (2009)](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), Chapter 12, printed 249 and 253-256: Cook existence and the full input-tail/Enss completeness argument. Current local mathematical suppliers carry the actual dimension-three, regularity, potential, domain and choice hypotheses used here; draft supplier status is retained. This review does not claim a new audit of their entire transitive mathematical closure.

[Fitzpatrick](https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf), §15.2, printed 209-211, equations (15.9)-(15.17), explicitly separates total, incident and scattered shapes and includes the beam-density normalization and flux ratio. §15.3, printed 211-212, supplies the Born/Yukawa context. The rendered (15.18) has a sign inconsistent with its preceding (15.12) and subsequent (15.19); the local negative sign is checked directly from the outgoing Green construction, rather than treating the source as infallible.

[Binney and Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf), §12.3, printed 267-270, particularly (12.54)-(12.60), qualifies its packet-to-cross-section comparison by collimation and smooth amplitude assumptions. §12.6.1, printed 280, (12.106), uses an energy-dependent prefactor and a small-width approximation for the full cross-section half-height interpretation. Our resonance carriers retain the exact Lorentzian-factor calculation and explicitly avoid claiming its width or peak is the width or peak of the full cross section for arbitrary parameters. No measured values, apparatus, sample independence or uncertainty precision are invented.

Published/imported mathematical suppliers and original mathematics were read-only. The import receipt identifies the snapshots; all sixteen edited carriers are locally authored drafts. No defective published carrier was identified, so no published-consumer ledger row or published-ledger lock was needed. There is no new judgment, verification stamp, publication, dispatch or gate cycle.

## Owner follow-up outside routed carrier edits

Source-locator metadata in these unflagged, non-risk carriers was inspected as consumer context and remains for owner routing: `def-nrqm-scattering-partial-wave-and-phase-shift-readings` attributes partial waves/hard spheres to Fitzpatrick §15.5 at 217-219, whereas the current sections are §15.4 (213-216), §15.5 (216-217), §15.6 (217-219); its Binney §12.5 range is displaced from the current 273-278. `def-nrqm-scattering-single-channel-resonance-model` gives Binney 281-284 for §§12.6-12.6.1, currently 278-280. `def-nrqm-scattering-coulomb-dollard-model` points its Yukawa discussion to Fitzpatrick §15.4, currently §15.3 (211-212). `rem-nrqm-scattering-scope-and-empirical-status` has the displaced Binney §12.3 locator, currently 267-270. These are supplementary source-locator alerts, not missing mathematical prerequisites or empirical evidence. Their definitions and actual supplier uses were not changed. No substantial prerequisite blocker or proposed withdrawal was found in the routed obligations.

## Final local checks and handoff

Exactly eight decisions are present: reader/refuter findings 1 are `confirmed_fatal`; findings 2, 3 and 4 are `confirmed_nonfatal`. Each decision references exactly one closed defect row, with repair confidence 1. The paired reports share the same row for each defect. Supplementary risk-review repairs have separate closed rows and report references, and add no invented obligation. Pre/post snapshots agree; no touched or page delta decision was owed. The reader/refuter observed hashes differ from the immutable current pre/post snapshot, so historical descriptions are retained as reports and not represented as current-byte hashes; the current defects were independently checked. No unbound finding or owner-authorized historical disposition was supplied or invented.

The batch-61 manifest is synchronized with current statements, source titles, dependencies, roles and provenance. Contract citations to the corrected current lemma/definition are synchronized; Yukawa's exact polar/sphere-area supplier citations and risk review are present. Owned cross-batch records retain earlier evidence and add current consumer evidence, including the sphere-area edge. Frontier refresh completed and deduplicated the engine-managed merged ledger.

Commands run after final carrier edits:

- `node tools/physics-support/risk-report.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json` initially: 15 HIGH/CRITICAL items routed, zero errors. Rerun with `--require-reviewed`: all 15 complete, zero errors, exit 0.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the explicit sixteen edited paths: 15 proof-bearing items checked, zero failures, exit 0; the definition has no proof. An earlier two-item `untagged-steps` diagnostic was resolved by making each full step one source paragraph line, with no interior tag duplicates; no mechanical-failure defect row was created.
- `node tools/physics-support/rendercheck.mjs` with those same sixteen paths: all YAML and math spans parse through the real renderer/KaTeX, exit 0.
- `node tools/physics-support/proof-layout.mjs` once after final edits, batching all sixteen changed paths: 82 steps, zero defects, exit 0.
- Exact obligation/closed-ledger-reference check: 8/8 obligations, one closed row per decision.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`: refreshed and deduplicated, exit 0.

A mistaken `rendercheck --help` invocation selected the default corpus rather than a help mode; its result is not used as evidence. Only the explicit sixteen-file result above is claimed. Source retrieval via the PDF web reader succeeded; a local `pdftotext` attempt was unavailable and is not represented as source reading. No full gate battery was initiated.

Routed work is complete. The engine owns decision hash stamping and gates. Owner source-locator follow-up above remains explicit.

Current final carrier hashes (handoff evidence only, not decision stamps):

- `lem-nrqm-scattering-model-scaling-correspondence`: `0c68d1f9533ea7d252adc5c4601d96744488c8b3390c47cadd71ede2fd8d4a4a`
- `lem-nrqm-scattering-three-dimensional-current-and-flux`: `bab2b83ab94dc7228b8fb48d7c7ae47affd7e75e716d928bc36d38f31ffd6395`
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity`: `3c83bc014303dc6307e1b24527bad51d08784bfdf7c5f2ac0b3290c35f11d612`
- `pthm-nrqm-scattering-compact-support-asymptotic-completeness`: `05298997841167b19c859fb2ee1feca2b189d0cba361cfb21621c5b0f1b86d4f`
- `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness`: `b5e03350dccda8cd2654c8f84e96d88204389bf7397df93fa3ed6a4c254d03a5`
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux`: `9bf2541a7198859ea2201833ced139593cafd5950313be456f9910fd96a9bc3b`
- `pthm-nrqm-scattering-partial-wave-cross-section`: `e04c89cfb4d9b3a89033452020d0746ba31b6ea0092ab644b6bdaff573b57d79`
- `pthm-nrqm-scattering-controlled-born-approximation`: `241d35ebaf794cc9ddf9594256a0301a3e0e1c8cb8a26c73ffff2fae8d2e4ccb`
- `pthm-nrqm-scattering-stationary-dynamical-identification`: `9fc5cbb0bb6c13be8ee4de13d7c357a162944eee37023e05e6191853c15cb0ab`
- `pthm-nrqm-scattering-coulomb-dollard-completeness`: `703b1f18508f7534b1cbac20878e708ed0082c41d6c05b046fc0386c61108428`
- `pthm-nrqm-scattering-single-channel-resonance-cross-section`: `76ac8dcf5f5cf0750691a9eff30888cc8713c09a1b40a93a70643b56d48bca1a`
- `ex-nrqm-scattering-square-well-s-wave-phase-shift`: `412db250cebbbbbfcfff04bb0a58eb1cae7d5609931711d11c0ef82863c06f06`
- `ex-nrqm-scattering-single-channel-resonance-cross-section`: `326127745cebac27cd413bd0bb0861be9a73bbc8a531649ab41dd26b63f31833`
- `ex-nrqm-scattering-born-uniform-ball-amplitude`: `7961964cdfd261092daf115e26b0f8383040720609d997a2a92594d50e43cdbf`
- `ex-nrqm-scattering-long-range-tail-and-coulomb-warning`: `866bfa64d79de06e956e30bdb2d9b164e9c8c8f3866a5f87a171870823a1c90f`
- `def-nrqm-scattering-stationary-beam-and-cross-section-model`: `a08f767e546408ac0104552dc7be299fdcce409c02aa96fc7cb8b434d89f0c6a`

Decision route vocabulary checked against `tools/physics-support/step3-scope.mjs`: `reader:*` uses `reader`, and `refuter:*` uses `flagged`. The four refuter obligation IDs remain unchanged; no hash stamps were added.

Each paired flagged decision explicitly records `same_defect_as` and `same_defect_evidence`: reader/refuter target IDs, types and observed fingerprints match, so each pair shares one coherent closed defect row without double counting.
