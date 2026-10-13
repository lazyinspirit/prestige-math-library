# Batch 43 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-43`; scope: batch 43 only.

## Review checkpoint (completed)

Completed level 1: `lem-nrqm-framework-ccr-on-the-schwartz-core`. Checked steps 1.1, 1.2, 2.1 and 3.1: Schwartz polynomial/derivative invariance gives both product domains and the positive i-hbar commutator sign. Cutoffs converge by dominated convergence in position graph norm; mollification on bounded supports controls the weighted error. For momentum, testing chi_n times the test function gives the weak product rule, the derivative cutoff error is O(1/n), and Fubini on compact supports transfers derivatives through convolution. The supplied complex approximate-identity lemma applies at p=2 to both compactly supported input and weak derivative. Countable choice is explicitly assumed for diagonal epsilon choices; no all-L2 unbounded-product identity is claimed. Smooth representatives pass to a.e. classes. d>=1, hbar>0 and f=0 are covered. Reader and refuter give no finding for this carrier.

Exact supplier statements read from the twelve declared item files, especially `lem-complex-translation-and-approximate-identity-interfaces` (finite-p convergence and smooth compact-support convolution), `lem-schwartz-cutoffs-from-the-standard-smooth-step` (scaled derivative bound), and `lem-classical-derivatives-are-weak-derivatives` (Countable Choice, complex C^k inputs). These are actual authored suppliers, not planned assertions. No repair or decision is owed for this risk-only carrier.

Initial risk-report: exit 0, 14 routed items, 12 HIGH/CRITICAL requiring reviews. Next: level 3 Newtonian definition, then level 4 units.

## Level 3: Newtonian spacetime

`accepted_repair`. HEAD supplies exact pre-reader bytes (SHA matches the pre inventory); current raw bytes matched post inventory before Alpha edits. The only delta specifies nonempty open I, making the curve C^k convention explicit. The affine-coordinate suppliers give a bijection and affine smooth transitions, so chart independence is valid. Simultaneity and the slice metric use tau(q-p)=0; no temporal metric or Lorentzian structure is imported. Tong section 1.2.1, pp. 5–7 supports the adopted absolute-time interpretation; the local geometric formulation is explicitly defined.

## Level 4: quantities and units

`amended_repair`, repair_confidence 1. Accepted the reader additions of scalar types and the dimensions of h, c, e, mu_0 and epsilon_0, independently checked against BIPM SI Brochure v4.01, sections 2.2.1, pp. 127–128. A separate existing typing defect remained: Z^4 excludes ell^(-3/2) and momentum amplitudes with half-integer exponents. Replaced the ambient dimension group by Q^4 and explicitly defined rational dimension powers; Z^4 remains its subgroup. Product, inverse, derivative and every particular assigned dimension are preserved. The manifest Definition is synchronized; no proof or dependency is added.

Consumer check: all 166 item files containing this supplier and the three page references were searched. Actual unit/dimension uses were inspected: energy/action phases, spectral-coordinate units, position/momentum amplitudes, currents, couplings and derived length scales retain precisely the same exponents and equalities in Q^4. No consumer relies on the universal assertion that all exponents are integers; no consumer repair is needed for this correction and no second hop is triggered. An unrelated out-of-batch defect was noticed in `def-nrqm-symmetries-framework-symmetry-groups-and-conservation`, clause (f): it calls the translation length unit u_H, although clause (a) defines u_H as the energy unit. This remains read-only and is alerted to the owner below.

## Level 5: state and composition P1

`accepted_repair`, repair_confidence 1. Nonzero separable complex H is assigned, so a supplied dense sequence gives a finite/countable ON basis. Pure states are nonzero rays with unit representatives, not just phase orbits of arbitrary-norm vectors; T_psi,psi is phase invariant for unit representatives. Trace-class positivity and tr=1 are explicit. The mixing proof uses ||rho_n||_1=1, Banach convergence, ||T||<=||T||_1 and continuous trace; zero weights and finite mixtures cause no exception. Tensor supplier (c),(d) gives the completed space and dense finite spans; arbitrary unit rays in that completion are allowed. Bounded subsystem maps only are extended here; no unbounded-domain identity is asserted. Countable Choice is carried, including tensor completion and trace calculus. This is adopted fixed-particle-number matter structure, not observation or a proof of physical composition. Reader clarification preserves all existing full-Hilbert-space consumer uses; refuter raises no P1 defect. Exact suppliers checked: the completed Hilbert tensor construction (a)–(d), bounded tensor maps (a),(c), rank-one calculus (b),(c), density expansion (a), trace ideal (1)–(3) and basis-independent trace (4), all with Countable Choice. Current P1 bytes match the post inventory and HEAD preimage matches pre. Next: apparatus, dynamics, spin, probability and shear at level 6.

## Level 6: apparatus and autonomous dynamics

Apparatus: `reviewed_no_defect`, change_kind `audit_enrichment`. The reader makes the necessary affine-parameter condition complete: on a nondegenerate interval, alpha*s+beta=s identically forces alpha=1 and beta=0. The former only-alpha=1 assertion was a correct necessary condition, so this is enrichment rather than a fabricated false-claim defect. The Definition and its C^2, time-parametrized domain are unchanged.

Dynamics risk review complete: Read clauses (i)–(vi): self-adjoint energy with its full domain and declared joule unit; spectral U(t)=exp(-itH/hbar), with generator T=-H/hbar. The cited group lemma gives domain invariance and norm differentiability iff psi(0) is in D(H); translating time with the group law gives the all-t claim. Unit phases are dimensionless. Density conjugation preserves positivity and unit trace by applying U to the ON eigenvector expansion from the density supplier; zero energy and finite/infinite H are covered. AC and Countable Choice are explicit. Driven and open models are separately qualified; no experimental isolation or time-dependent existence claim is asserted. No routed finding for this item. Exact supplier: `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group` Statement with AC and derivative iff; adjoint/self-adjoint definitions require equal domains, spectral theorem on nonzero H, and the PVM integral has its square-integrability domain.

## Level 6: spin, probability and shear

P6: `reviewed_no_defect`, change_kind `audit_enrichment`, defect_ids empty. Reviewed adopted tensor sectors through the n>=1 permutation supplier: U_pi uses pi inverse, finite sums give orthogonal P_+ and P_-, and repeated factors vanish under P_-; only sector-preserving operators restrict, with labelled local operators explicitly not guaranteed to do so. Spin s=0 is separately trivial, and s>0 uses n=2s and the exact basis map v_k to e_(s-k), matching raising/lowering coefficients. Multiplying J by hbar gives the displayed commutator and Casimir with correct units; the one-parameter generator is -iJ. The optional orbital representation is separately assigned, and tensor composition plus dense simple tensors gives its continuity. No relativistic spin-statistics deduction, species value or observed certainty is claimed. Reader delta is punctuation only and refuter makes no finding here.

P2: `accepted_repair`, repair_confidence 1. Checked clauses (i)–(vi) and the normalization calculation. Self-adjointness means equality of domains and values, AC supplies the unique spectral PVM, and Countable Choice supplies trace/density calculus. General-H effects are now defined by bounded self-adjoint quadratic-form inequalities; the finite-dimensional supplier by itself was insufficient for infinite H. Density expansion in trace norm, rank-one tr(T_u,u F)=<Fu,u>, the ideal norm bound and continuous trace justify the nonnegative normalized finite probability vector. Spectral outcomes are probability measures on Borel sets; no Lebesgue density, normalizable continuum eigenstate or unbounded tr(rho A) is assumed. Mean/variance require separate integrability. Zero effects and bins at ideal density zeros are covered; p=0 cannot normalize I on nonzero H. No data or theory-falsification claim is introduced.

Shear risk review complete. Checked all four steps on the explicit global smooth map (t,x)->(t,x+t^2 c), inverse (t,y-t^2 c). Comparing at t=0 forces a=0 and R=I; at T0 and 2T0, c nonzero and T0 positive yield the contradiction. The second coordinate of gamma(s)=(s,us) has zero acceleration before and 2c after, with acceleration units length/time^2. Both directions of membership use the exact Galilean map definition and global frame-chart class. No force or measured body is inferred. c=0 is excluded and u=0 remains valid. No choice or limiting argument is needed despite the automated risk triggers.

All exact direct supplier statements at this level were read, including PVM/scalar measure definitions and the finite-spin and symmetric-power representation results (s=0 and n=0 conventions inspected). Next: conditional measurement, massive-particle model, mean counterexample and type checks, level 7.

## Level 7 reviews

`post-nrqm-framework-ideal-conditional-measurement`: Risk review complete. Reviewed all six clauses: mutually orthogonal bounded projections have strong sum I. The density eigen-expansion gives p_a=sum_n w_n||P_a u_n||^2, hence countable normalization from orthogonal norm sums. Selected P_a rho P_a/p_a is defined only when p_a>0, and P_a rho_a P_a=rho_a gives repeatability; no division by zero occurs. For discarded outcomes, the nuclear terms have total norm sum sum_(a,n) w_n||P_a u_n||^2=1, so their series is absolutely trace-norm summable (trace-class Banach supplier is available through P2/P1); the tails have the corresponding positive norm sums. Coherence remains within a degenerate range and cross-branch terms are discarded. Finite effects do not determine instruments, with the cited example explicitly finite dimensional. Countable Choice is adopted and spectral-AC assumptions of P2 remain inherited where invoked. No continuum delta normalization or branch-selection theorem is claimed.

`post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`: Risk review complete. Read the introductory local realization and all six clauses. The finite-r tuple map is an isometry with an explicit onto inverse sum_l f_l tensor e_l. Testing one component characterizes the adjoint domain, so finite direct sums of scalar self-adjoint operators are self-adjoint on componentwise domains. The real bounded measurable V baseline uses the Fourier multiplier supplier with c=2*pi^2*hbar^2/m and b=0; hence -(c/(4*pi^2))*Delta=-hbar^2 Delta/(2m), domain W^{2,2}. Q/P and the Schwartz CCR have precisely the declared component domains and hbar sign. m>0, finite r=2s+1>=1, s=0 and V=0 are covered. Singular potentials, boundaries, massless models, radiation and driven families are expressly excluded or separate. AC and Countable Choice are carried. This is an adopted model, not a measured identification.

`cex-nrqm-framework-mean-position-can-fail-to-exist`: Risk review complete. Checked steps 1.1–2.1 and all constants. The two formulas agree at |x|=L0>0, wave-function unit is length^{-1/2}; central and tail masses are 1/2 each. Central second moment is L0^2/6 and central first absolute moment L0/4; tails are respectively constant and proportional to 1/|x|, hence divergent on both sides. Norm is one, but the mean as a finite Lebesgue expectation fails; a symmetric principal value does not rescue it. The multiplier-PVM supplier at m(x)=x on sigma-finite positive Lebesgue measure supplies the law and exact domain, with AC and Countable Choice inherited from P1/P2. Monotone truncations justify passage to nonnegative full integrals. Cauchy-Schwarz applied to 1 and x in L2 of the probability measure gives the separately stated sufficient second-moment condition, not its converse. No empirical outcome is asserted.

`ex-nrqm-framework-quantity-type-checks`: `accepted_repair`, repair_confidence 1. Checked all five verification steps, including the reader changes in 1.2–1.4. A unit representative defines a ray and a trace-one rank-one density. For 0<w<1 the two orthogonal vectors are nonzero eigenvectors of rho with positive eigenvalues, proving rank two without inferring rank from non-idempotence. Both endpoints w=0,1 are intentionally excluded and would be pure. The bounded tensor adjoint supplier gives self-adjoint S_z tensor I and the finite product basis gives spectral projection P_+ tensor I and probability one in e_+ tensor e_+. Equal superposition gives the two-point measure with weights 1/2 and mean zero, not a deterministic zero outcome. hbar>0 is inherited from unit conventions and P6; no identical-particle-sector restriction is silently imposed on the two-factor toy system. This is a conditional type check and reports no measurement.

Type-check preimage: HEAD raw hash equals pre; current raw hash equals post. The rank argument is clearer; in the prior proof, trace one also forces ||varphi||=1 if rho=T_varphi,varphi, so the missing intermediate normalization was immediately recoverable rather than a fatal false theorem. The replacement is sound and does not narrow the example. Next: mass-limit and dimensions, level 8.

## Level 8 reviews

Mass-limit: `amended_repair`, repair_confidence 1. Reviewed the precise reader delta and steps 1.1–2.1. The length-scaled bump is smooth by exponential boundary decay, normalizes by x=L0*y, and has Delta psi(0)=-6*N*exp(-1)*L0^{-7/2}; continuity therefore makes its L2 Laplacian norm strictly positive. ||K_m psi||=hbar^2||Delta psi||/(2m) diverges, excluding strong action convergence on all Schwartz vectors to any finite operator value. The claimed limit now explicitly requires Schwartz to lie in D(K0). For fixed normalized W^{2,2} psi, Plancherel with multipliers 2*pi*hbar*xi_j and 2*pi^2*hbar^2|xi|^2/m gives the exact kinetic expectation p2/(2m); p2>0 is explicit, and v_rms varies with m. Fixed k nonzero has omega_m=hbar|k|^2/(2m) tending to infinity; k=0 is excluded and plane waves are formal, not L2 states. AC and Countable Choice are explicit. No strong-resolvent conclusion or exclusion of independent radiation models is claimed. Corrected L2 momentum self-adjointness locator to clause (b), since (a) concerns Q. The exact pre-reader statement assigned an undefined frequency law to K0; the reader replaced it by the explicitly computed pointwise massive-family frequency limit. The no-strong-action result itself is preserved.

Dimension-bookkeeping risk complete: Checked each of the six dimension steps in the corrected rational-exponent dimension group: |psi|^2 dx is dimensionless; Q and P have length and mass*length/time units; QP and hbar have action units; both Hamiltonian terms and the Schroedinger derivative have energy*wavefunction units; current has length^{-2}/time in d=3; m*v dot x/hbar is dimensionless. The current supplier requires continuous time derivative and all first/second spatial derivatives, continuous real V, positive m/hbar, and open Omega/I; the example only uses its displayed formula for a smooth solution and does not claim continuity for arbitrary operator-domain states. Internal spin labels are dimensionless. Units impose no covariance, validity of model, measured value or finite moment. The reader/refuter give no defect for this item; the units supplier correction resolves the half-integer typing prerequisite without changing this proof.

Additional source-locator corrections within touched carriers: type-check and scope-limit remarks cited Teschl section 3.3 with pages 92–95; those pages belong to section 3.1, while 3.3 starts at p.104. Replaced 3.3 by 3.1; mathematical bodies are unchanged. This amends their reader repairs. Next: level 9 refuter finding and final scope remark.

## Level 9: refuter finding and final scope

`refuter:43:1`, route `flagged`: `confirmed_fatal`, repair_confidence 1. The current pre-edit remark retained the exact false sentence observed by the refuter: it attributed energies, angular momenta and other spectral quantities to a model Hamiltonian. Independently checked P2 (i),(ii), P5 (iv), P6 (ii), finite spin matrices (e), and the free Fourier-multiplier theorem (b). At s=1/2 and V=0, the energy is a nonnegative scalar kinetic operator amplified identically on the spin factor, while S_z is the internal operator with eigenvalues +hbar/2 and -hbar/2 and action units. Those are its spectral coordinates, not Hamiltonian energy values. The repaired sentence assigns energy spectra to the Hamiltonian and other spectra to their corresponding specified self-adjoint observables with declared P2 units. No definition or physics premise is changed.

There are no item consumers of the status remark; its sole page reference in `qm-framework-and-quantities` only says that primitive/adopted/derived status is recorded, so it remains accurate. The manifest body is synchronized. Refuter original observation binding is preserved in the decisions; no missing historical bytes or owner historical disposition is involved.

Scope-limit remark: its reader wording distinguishing a probability measure from a deterministic outcome is sound audit enrichment. Alpha amended the incorrect Teschl section locator to 3.1; `amended_repair`, repair_confidence 1. All five example/counterexample supplier conclusions were checked above against the summary. The mass limit is expressly restricted to strong action on Schwartz and fixed nonzero k; no empirical certainty or exclusion of independently assigned massless models is claimed.

All 12 HIGH/CRITICAL risk reviews are now complete. The untouched group lemma was opened as frame/P5 context; parameter injectivity, composite boost term v2*b1, inverse translation -R^T(a-vb) and both-sided inverse checked directly. No risk-only decision is added.

## Historical bindings and final decisions

All nine touched pre-reader raw hashes match `git show HEAD:physics/items/<id>.md`; all nine reader-result raw hashes matched the post inventory before Alpha edits. Comparison is to exact carrier bytes, not inferred from the reader account. The refuter carrier was unchanged by the reader and its false sentence was present when Alpha reviewed it. Independently recomputing the sorted-JSON hash of its frozen post carrier (item/contract/manifest fingerprints) reproduces the routed observed_sha256 c464bc8fb5e73470a1612a4bbaede2249f9c7ba95b1ae0107d579e23dc57ed03 exactly. Engine decision seals are deliberately absent. Final decisions: three accepted repairs, four amended repairs, two reviewed-no-defect audit enrichments, and one confirmed fatal refuter finding. Nine closed defect-ledger rows are referenced exactly once; no mechanical failure has a defect row.

## Consumer review and frontier records

Direct dependency/reference uses of every changed public interface were inspected, including the 166 units item carriers and 50 additional P1/P2 carriers lacking a direct units mention. These are focused actual-use reviews, not whole-item acceptance of those outside carriers. No current outside consumer needs a surgical change as a consequence of these supplier corrections. Only the units ambient group and explicit limit-domain convention received substantive Alpha public-section changes; particular dimensions, operators, postulate regimes and limit conclusions are retained. The status remark has no item consumer. The assigned scope remark and both page summaries remain accurate. The outside radiation postulate uses exactly the retained strong-action and fixed-k conclusions. No consumer public section changes, so no second propagation hop is needed.

The owning cross-batch input retains its 55 rows. Three obsolete prerequisite edges are marked removed: CCR to the momentum self-adjointness and weak-product-rule lemmas, and P2 to finite-effects-and-instruments. Current CCR closes its graph-core proof locally by cutoff/mollifier tests; P2 defines general-H effects and proves normalization by its declared trace suppliers. These removals concern obsolete uses, not item withdrawals. Remaining actual rows were checked against current supplier Statements/Definitions and hypotheses; no new item or page is added. See `physics-cm-qm-gr-79-2026-10-11-batch-43.cross-batch-dependencies.json`.

## Sources and source limits

Primary sources opened independently: [BIPM SI Brochure v4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf), sections 2.2.1, printed pp.127–128, for exact h,c,e and measured mu_0; [Tong Dynamics and Relativity](https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf), section 1.2.1, pp.5–7, for fixed-unit Galilean translations, rotations, boosts and absolute-time shifts; [Tong Quantum Mechanics](https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf), wavefunction/Born introductory discussion and section 3.3, pp.76–77, including the degenerate eigenspace projection update; [Binney–Skinner](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf), section 10.1, pp.226–227, for exchange sectors; [Teschl 2009](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), section 2.1, pp.55–58, the graph/core discussion at pp.63–64, section 8.1, pp.173–174, and table-of-contents section locations. Exact mathematical supplier definitions/statements and local elementary calculations, rather than textbook shorthand, justify the reviewed deductions. I did not independently retrieve every redundant MIT reference or re-audit every transitive proof in imported mathematics. Existing coverage retrieval attestations are preserved as prior evidence, not claimed as this adjudicator's full-text reading.

No carrier reports an experiment, dataset, significance level or measured precision. Postulate adoption, mathematical deductions and empirical model identification remain separate. No defective published item was found in the inspected mathematical prerequisite uses; published content and imports were left read-only, so no published-ledger mutation was needed.

## Owner alerts outside carrier-change obligations

1. `def-nrqm-symmetries-framework-symmetry-groups-and-conservation`, Definition (f): "parameter a ... unit of length u_H" conflicts with Definition (a), where u_H is the energy unit. The actual translation parameter has length dimension. This pre-existing out-of-batch defect is independent of the rational dimension-group correction. Owner should route a surgical removal/replacement of u_H and inspect its actual Definition consumers; the carrier was not edited here.

2. Risk-only `lem-nrqm-framework-ccr-on-the-schwartz-core`: its Teschl reference attributes position/momentum/CCR to section 2.1, pp.55–57. The explicit Schwartz CCR is equation (8.8), section 8.1, pp.173–174. The local proof is complete; this is a bibliography-location issue. Engine should route the carrier metadata correction; no extra touched decision is invented for a risk-only obligation.

3. Risk-only `post-nrqm-framework-ideal-conditional-measurement`: its Teschl PVM reference says section 3.3 at pp.92–95. The table of contents places those pages in section 3.1 and section 3.3 at p.104. The countable Lüders claims were independently checked against their local suppliers and Tong's degenerate-measurement discussion; this is a nonfatal locator issue. Owned coverage now uses the correct 3.1 mapping. Engine should route the remaining carrier metadata correction; its public postulate is unchanged.

These alerts remain open for their respective owners. No substantial unmet mathematical prerequisite blocks any of the ten routed decisions, and no escalation or historical-owner resolution is fabricated.

## Focused validation

All commands ran from the physics workspace with explicit paths only. Reflow on the ten routed changed carriers: exit 0, all unchanged. `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on the same ten paths: exit 0, five applicable structures checked (three nonproof postulates and two direct proofs), zero failures; definition/remark paths have no proof structure. `node tools/physics-support/rendercheck.mjs` on the ten paths: exit 0, all YAML and real-KaTeX spans pass. Final required `node tools/physics-support/proof-layout.mjs` on those ten paths: exit 0, **10 items, 9 steps, 0 defects**. Initial risk-report and final `node tools/physics-support/risk-report.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-43.proof-contracts.json --require-reviewed`: exit 0, 14 routed contract items, all 12 HIGH/CRITICAL reviews complete. Local JSON checks confirm exactly ten distinct owed decisions and nine unique closed ledger references, with exactly one row for the refuter finding. No judge, stamping, dispatch, publication or gate battery was run; those remain engine-owned.

## Exact consumer index

Supplier-reference line numbers are recorded below. The focused dispositions are in the Consumer review section; this index is not whole-item acceptance of outside consumers. No use requires a supplier-driven consumer rewrite.

- S1: `def-nrqm-framework-newtonian-spacetime`.
- S2: `def-nrqm-framework-quantities-and-units`.
- S3: `post-nrqm-framework-state-and-composition`.
- S4: `post-nrqm-framework-observable-and-probability`.
- S5: `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit`.
- S6: `rem-nrqm-framework-primitive-and-derived-status`.

| Consumer path | Supplier: reference lines |
|---|---|
| `items/cex-nrqm-framework-mean-position-can-fail-to-exist.md` | S2:11,26,72; S3:12,27; S4:13,28 |
| `items/cex-nrqm-framework-quadratic-shear-is-not-galilean.md` | S1:12,22,59; S2:18,28,67 |
| `items/cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit.md` | S2:16,34,84,96; S3:12,30; S4:13,31 |
| `items/cex-nrqm-observables-plane-wave-is-not-a-preparation.md` | S3:21,36,73,79,81 |
| `items/cex-nrqm-state-geometry-zero-vector-is-not-a-preparation.md` | S3:11,22,66 |
| `items/cex-nrqm-symmetries-nonconstant-potential-breaks-translation.md` | S2:17,39; S3:27,49; S4:26,48 |
| `items/def-nrqm-angular-momentum-framework-angular-momentum-observables.md` | S2:10,15,70; S3:10,31,60; S4:10,30,61 |
| `items/def-nrqm-approximations-framework-perturbed-family-model.md` | S2:17,37,91; S3:14,34,85; S4:15,35,86 |
| `items/def-nrqm-approximations-framework-variational-trial-model.md` | S2:16,32,88; S3:13,29,81; S4:14,30,82 |
| `items/def-nrqm-approximations-framework-wkb-regime-model.md` | S2:17,30,82; S3:13,26,74; S4:14,27,75 |
| `items/def-nrqm-autonomous-dynamics-framework-evolution.md` | S2:17,40,93,97; S3:32,55; S4:31,54 |
| `items/def-nrqm-bell-declared-spin-arrangement.md` | S2:10,22,62; S3:10,14,51; S4:10,15,52,129 |
| `items/def-nrqm-central-framework-central-potential-model.md` | S2:19,45,120; S3:13,39,108; S4:14,40,109 |
| `items/def-nrqm-central-framework-coulomb-and-hydrogen-model.md` | S2:10,19,59,112,150; S3:10,13; S4:10,14 |
| `items/def-nrqm-composites-framework-composite-systems-and-local-readouts.md` | S2:19,40,141; S3:29,50,85,96; S4:28,49,86 |
| `items/def-nrqm-composites-framework-reduced-preparations.md` | S3:21,35,71 |
| `items/def-nrqm-composites-marker-model-and-fringe-visibility.md` | S2:17,32,94 |
| `items/def-nrqm-driven-dynamics-framework-adiabatic-protocol.md` | S2:17,36,79; S3:14,33,93; S4:15,34,93 |
| `items/def-nrqm-driven-dynamics-framework-driven-model.md` | S2:16,39,101,103; S3:13,36,101; S4:14,37,101 |
| `items/def-nrqm-driven-dynamics-framework-interaction-picture.md` | S2:29,48,79; S3:15,34,79; S4:16,35,79 |
| `items/def-nrqm-framework-classical-apparatus-trajectories.md` | S1:11,18,49; S2:15,22,64 |
| `items/def-nrqm-framework-inertial-frames.md` | S1:11,21,57; S2:18,28 |
| `items/def-nrqm-framework-newtonian-spacetime.md` | S2:43 |
| `items/def-nrqm-framework-quantities-and-units.md` | S1:9,11,33 |
| `items/def-nrqm-identical-particles-framework-orbital-occupation-model.md` | S2:18,29,64; S4:17,28,62 |
| `items/def-nrqm-identical-particles-framework-species-sectors-and-preparations.md` | S2:20,34,74; S3:14,28,70 |
| `items/def-nrqm-interference-recorded-detector-and-sampling-model.md` | S2:10,16,99; S4:10,13,44,82 |
| `items/def-nrqm-interference-two-path-preparation-and-detection-model.md` | S2:10,17,293; S3:10,12,64,80; S4:10,13,65,197,250 |
| `items/def-nrqm-kinematics-framework-massive-spin-s-model.md` | S2:16,35,104,122,127,142,154,162,188; S3:28,47,101 |
| `items/def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength.md` | S2:10,16,55; S3:10,12,46; S4:10,13,47 |
| `items/def-nrqm-light-matter-framework-finite-level-coupled-model.md` | S2:10,18,72; S3:10,12,57; S4:10,13,58 |
| `items/def-nrqm-light-matter-framework-spectral-transition-and-detection.md` | S2:10,17,63; S3:10,13,49; S4:10,14,50 |
| `items/def-nrqm-many-body-framework-declared-fixed-n-model.md` | S2:17,44,122; S3:19,46,101; S4:20,47,103 |
| `items/def-nrqm-many-body-framework-entropy-and-free-energy.md` | S2:17,32,117; S4:24,39,79 |
| `items/def-nrqm-many-body-framework-one-body-reduced-operator.md` | S2:22,35,97; S3:16,29,67; S4:17,30,68 |
| `items/def-nrqm-measurement-framework-declared-measurements-and-instruments.md` | S3:26,43,75; S4:24,41,75 |
| `items/def-nrqm-observables-framework-observable-and-outcome-law.md` | S2:17,38,88; S4:29,50,88 |
| `items/def-nrqm-oscillator-coherent-states.md` | S3:12,21,58 |
| `items/def-nrqm-oscillator-framework-quadratic-potential-model.md` | S2:20,40,90,109; S3:12,32,90; S4:13,33,90 |
| `items/def-nrqm-photons-framework-fixed-mode-polarization-model.md` | S2:19,36,88; S3:12,29,77; S4:13,30,78 |
| `items/def-nrqm-photons-framework-ideal-counting-and-detection-model.md` | S2:22,41; S3:13,32,85; S4:14,33,86 |
| `items/def-nrqm-photons-framework-radiation-sector-and-quantum-assignments.md` | S2:19,40,105; S3:14,35,95; S4:15,36,96 |
| `items/def-nrqm-potentials-interval-and-delta-models.md` | S2:19,39,95; S3:13,33; S4:14,34 |
| `items/def-nrqm-potentials-one-dimensional-line-model.md` | S2:19,39,103,186,192; S3:13,33,91; S4:14,34,92 |
| `items/def-nrqm-scattering-coulomb-dollard-model.md` | S2:10,20,56; S3:10,15,49; S4:10,16,50 |
| `items/def-nrqm-scattering-framework-short-range-model.md` | S2:18,40,107; S3:12,34,95; S4:13,35,96 |
| `items/def-nrqm-scattering-partial-wave-and-phase-shift-readings.md` | S2:20,33,72; S3:17,30; S4:18,31 |
| `items/def-nrqm-scattering-single-channel-resonance-model.md` | S2:18,29,65; S3:15,26; S4:16,27 |
| `items/def-nrqm-scattering-stationary-beam-and-cross-section-model.md` | S2:19,34,85,111; S3:15,30,75; S4:16,31,76 |
| `items/def-nrqm-state-geometry-framework-state-space.md` | S3:12,20,54 |
| `items/def-nrqm-symmetries-framework-symmetry-groups-and-conservation.md` | S2:15,34,98,185; S3:28,47,95; S4:27,46,96 |
| `items/def-nrqm-uncertainty-preparation-spread.md` | S2:14,26,121; S3:20,32,73; S4:19,31,74 |
| `items/ex-nrqm-angular-momentum-spin-half-directional-probabilities.md` | S2:10,16; S3:10,25,51; S4:10,24,52 |
| `items/ex-nrqm-angular-momentum-zeeman-toy-model.md` | S2:10,17,160; S3:10,30; S4:10,28 |
| `items/ex-nrqm-approximations-smooth-barrier-tunnelling-limits.md` | S2:18,32,77; S3:19,33,73; S4:20,34,74 |
| `items/ex-nrqm-approximations-stark-finite-level-shift.md` | S2:20,41; S3:21,42; S4:22,43 |
| `items/ex-nrqm-approximations-two-level-finite-gap-correction.md` | S2:15,25,69; S3:16,26,63,139; S4:17,27,64 |
| `items/ex-nrqm-approximations-zeeman-multiplet-splitting.md` | S2:10,18,53; S3:10,19,45; S4:10,20,46 |
| `items/ex-nrqm-autonomous-dynamics-finite-stationary-superposition.md` | S2:20,43 |
| `items/ex-nrqm-autonomous-dynamics-two-level-precession.md` | S2:20,46,119 |
| `items/ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass.md` | S2:10,15,52,72,97 |
| `items/ex-nrqm-central-hydrogen-radial-distributions-and-moments.md` | S2:10,17 |
| `items/ex-nrqm-driven-dynamics-ammonia-two-level-resonance.md` | S2:20,34,66; S3:17,31; S4:18,32 |
| `items/ex-nrqm-driven-dynamics-circular-drive-exact-populations.md` | S2:20,34,63; S3:16,30; S4:17,31 |
| `items/ex-nrqm-driven-dynamics-driven-oscillator-coherent-response.md` | S2:25,44,103; S3:21,40,103; S4:22,41,103 |
| `items/ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget.md` | S2:20,34,63; S3:17,31; S4:18,32 |
| `items/ex-nrqm-framework-dimension-bookkeeping.md` | S1:12,22; S2:11,21,56,60,68,88 |
| `items/ex-nrqm-framework-quantity-type-checks.md` | S2:12,23,72,99; S3:13,24,72; S4:14,25,72,80 |
| `items/ex-nrqm-interference-ideal-flat-two-path-screen-distribution.md` | S4:10,14,99 |
| `items/ex-nrqm-light-matter-hydrogen-dipole-angular-factors.md` | S2:10,21,117; S3:10,20,117 |
| `items/ex-nrqm-light-matter-two-level-dipole-drive-check.md` | S2:10,22,111; S3:10,19; S4:10,20 |
| `items/ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble.md` | S2:20,37; S3:21,38; S4:22,39 |
| `items/ex-nrqm-many-body-gas-statistics-dilute-limits.md` | S2:17,32; S3:18,33; S4:19,34 |
| `items/ex-nrqm-many-body-two-site-bond-thermal-ensemble.md` | S2:20,36; S3:21,37; S4:22,38 |
| `items/ex-nrqm-oscillator-coherent-trajectory.md` | S3:12,28; S4:13,29 |
| `items/ex-nrqm-oscillator-ground-state-gaussian.md` | S2:33,58; S3:12,37; S4:13,38 |
| `items/ex-nrqm-oscillator-ladder-norms.md` | S2:17,29,84; S3:12,24; S4:13,25 |
| `items/ex-nrqm-photons-malus-and-jones-analyzer-ratios.md` | S2:18,32; S3:13,27,70; S4:14,28,71 |
| `items/ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal.md` | S2:26,54; S3:20,48,104; S4:21,49,105 |
| `items/ex-nrqm-potentials-box-spectrum-and-nodes.md` | S2:14,24,61 |
| `items/ex-nrqm-potentials-finite-well-exact-root-and-count.md` | S2:15,27,64 |
| `items/ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit.md` | S2:15,26,65 |
| `items/ex-nrqm-scattering-born-uniform-ball-amplitude.md` | S2:17,31; S3:18,32; S4:19,33 |
| `items/ex-nrqm-scattering-long-range-tail-and-coulomb-warning.md` | S2:10,15; S3:10,16; S4:10,17 |
| `items/ex-nrqm-scattering-single-channel-resonance-cross-section.md` | S2:15,27; S3:16,28; S4:17,29 |
| `items/ex-nrqm-scattering-square-well-s-wave-phase-shift.md` | S2:16,38; S3:17,39; S4:18,40 |
| `items/ex-nrqm-symmetries-central-potential-rotation-invariance.md` | S2:20,47,134; S3:33,60; S4:32,59 |
| `items/ex-nrqm-symmetries-free-translation-and-momentum.md` | S2:19,42; S3:31,54; S4:30,53 |
| `items/ex-nrqm-symmetries-parity-selection-rule.md` | S2:19,43; S3:30,54; S4:29,53 |
| `items/ex-nrqm-uncertainty-gaussian-minimum-spread.md` | S3:25,46 |
| `items/post-nrqm-angular-momentum-magnetic-moment-coupling.md` | S2:15,30,82,156; S3:23,38,121; S4:22,37,120 |
| `items/post-nrqm-approximations-static-finite-level-dipole-coupling.md` | S2:10,14,52; S3:10,15; S4:10,16 |
| `items/post-nrqm-framework-autonomous-dynamics.md` | S2:22,35; S3:21,34 |
| `items/post-nrqm-framework-ideal-conditional-measurement.md` | S4:22,35 |
| `items/post-nrqm-framework-identical-particles-and-spin.md` | S2:19,29; S3:18,28 |
| `items/post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle.md` | S1:12,34,92; S2:15,37,92; S3:29,51 |
| `items/post-nrqm-framework-observable-and-probability.md` | S2:28,47; S3:27,46 |
| `items/post-nrqm-framework-preparation-and-apparatus.md` | S3:12,19; S4:13,20 |
| `items/post-nrqm-framework-state-and-composition.md` | S2:23,37 |
| `items/post-nrqm-light-matter-vacuum-preparation-and-emission-assumption.md` | S2:10,24,62; S3:10,15,49; S4:10,16,50 |
| `items/post-nrqm-many-body-canonical-equilibrium-ensemble.md` | S2:28,57; S3:24,53,105; S4:25,54,107 |
| `items/post-nrqm-photons-radiation-extension-and-transverse-mode-assignment.md` | S1:17,38; S2:19,40,122,169; S3:11,32,113; S4:12,33,114; S5:16,37,143,243 |
| `items/post-nrqm-symmetries-prescribed-external-coupling.md` | S2:17,31,115 |
| `items/pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers.md` | S2:10,19; S3:10,31,63; S4:10,30,64 |
| `items/pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws.md` | S2:20,46; S3:34,60,108; S4:33,59,109 |
| `items/pthm-nrqm-angular-momentum-stern-gerlach-conditional-force.md` | S2:10,16; S3:10,29,59; S4:10,28,60 |
| `items/pthm-nrqm-angular-momentum-total-conservation.md` | S2:19,50; S3:37,68,118; S4:36,67,119 |
| `items/pthm-nrqm-angular-momentum-two-spin-composition.md` | S2:10,19; S3:10,28,50,141 |
| `items/pthm-nrqm-angular-momentum-zeeman-precession.md` | S2:10,17; S3:10,36; S4:10,35 |
| `items/pthm-nrqm-approximations-degenerate-first-order-splitting.md` | S3:16,29; S4:17,30 |
| `items/pthm-nrqm-approximations-nondegenerate-perturbation-expansion.md` | S3:14,26; S4:15,27 |
| `items/pthm-nrqm-approximations-variational-bounds-and-min-max.md` | S4:14,28 |
| `items/pthm-nrqm-approximations-wkb-allowed-region-error.md` | S2:14,23 |
| `items/pthm-nrqm-autonomous-dynamics-heisenberg-picture.md` | S3:27,47,86 |
| `items/pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow.md` | S2:17,40,97; S3:31,54,95,113,119,131 |
| `items/pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation.md` | S3:24,42,86 |
| `items/pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy.md` | S2:21,48; S3:17,44,113; S4:18,45,114 |
| `items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md` | S2:10,18; S3:10,15,60; S4:10,16,61 |
| `items/pthm-nrqm-central-coulomb-energy-observable-and-flow.md` | S2:10,18; S3:10,14,63; S4:10,15,64 |
| `items/pthm-nrqm-central-spherical-reduction-of-smooth-states.md` | S2:18,37,174; S3:14,33,96; S4:15,34,97 |
| `items/pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum.md` | S2:20,51; S3:16,47,129; S4:17,48,130 |
| `items/pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations.md` | S4:23,40,120 |
| `items/pthm-nrqm-driven-dynamics-bounded-norm-propagator.md` | S2:18,38; S3:14,34,109; S4:15,35,109 |
| `items/pthm-nrqm-driven-dynamics-circular-drive-exact-rabi.md` | S2:22,39,99; S3:18,35,99; S4:19,36,99 |
| `items/pthm-nrqm-driven-dynamics-common-domain-propagator.md` | S2:16,32,97; S3:14,30,97; S4:15,31,97 |
| `items/pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage.md` | S2:21,44,116; S3:17,40,116; S4:18,41,116 |
| `items/pthm-nrqm-driven-dynamics-finite-adiabatic-leakage.md` | S2:19,37,102; S3:15,33,102; S4:16,34,102 |
| `items/pthm-nrqm-driven-dynamics-first-order-transition-amplitude.md` | S2:20,41,111; S3:17,38,111; S4:18,39,111 |
| `items/pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error.md` | S2:23,43,113; S3:19,39,113; S4:20,40,113 |
| `items/pthm-nrqm-driven-dynamics-mild-propagator-and-pictures.md` | S3:16,34,104; S4:17,35,104 |
| `items/pthm-nrqm-identical-particles-orbital-occupation-exclusion.md` | S4:21,36,72,116 |
| `items/pthm-nrqm-identical-particles-permutation-invariance.md` | S3:20,37,76; S4:21,38,77,121 |
| `items/pthm-nrqm-interference-coherent-and-mixture-detection-laws.md` | S3:13,29,87; S4:14,30,88,97,143 |
| `items/pthm-nrqm-interference-continuity-and-local-probability-balance.md` | S2:10,19,125,162; S3:10,14,55; S4:10,15,56 |
| `items/pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning.md` | S4:10,15,55,102 |
| `items/pthm-nrqm-kinematics-boost-covariance.md` | S2:18,44; S4:30,56,109 |
| `items/pthm-nrqm-kinematics-spin-s-outcome-laws.md` | S4:23,43,89 |
| `items/pthm-nrqm-kinematics-translation-covariance.md` | S2:16,44,148; S4:30,58,109 |
| `items/pthm-nrqm-light-matter-dipole-selection-rules.md` | S2:10,27,127; S3:10,26,127 |
| `items/pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients.md` | S2:10,28,137; S3:10,20; S4:10,21,91,135 |
| `items/pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading.md` | S2:10,21,88; S3:10,17; S4:10,18 |
| `items/pthm-nrqm-light-matter-stimulated-dipole-drive-transitions.md` | S2:10,24,136; S3:10,19,54; S4:10,20,55 |
| `items/pthm-nrqm-many-body-exchange-energy-splitting.md` | S3:17,44,101; S4:18,45,102 |
| `items/pthm-nrqm-many-body-noninteracting-sector-diagonalization.md` | S2:18,43; S3:19,44,95; S4:20,45,96 |
| `items/pthm-nrqm-many-body-one-body-readout-law.md` | S2:34,58,109; S3:19,43,93; S4:20,44,94 |
| `items/pthm-nrqm-many-body-thermal-equilibrium-characterization.md` | S2:17,37; S3:18,38,85; S4:19,39,86 |
| `items/pthm-nrqm-many-body-thermal-occupation-predictions.md` | S2:17,41; S3:18,42,96; S4:19,43,97 |
| `items/pthm-nrqm-many-body-unitary-evolution-preserves-entropy.md` | S3:18,37,84; S4:19,38,85 |
| `items/pthm-nrqm-measurement-countable-kraus-instruments.md` | S3:30,51,82; S4:29,50,82 |
| `items/pthm-nrqm-measurement-degenerate-eigenspace-update.md` | S3:27,44,75; S4:26,43,75 |
| `items/pthm-nrqm-measurement-finite-effects-dilation.md` | S3:31,56,90; S4:30,55,90,115 |
| `items/pthm-nrqm-measurement-instrument-updates-not-determined-by-effects.md` | S3:27,44,73; S4:26,43,73,93 |
| `items/pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles.md` | S3:28,46,76; S4:26,44,76 |
| `items/pthm-nrqm-observables-born-outcome-law-properties.md` | S3:23,37,76,92,94; S4:22,36,76,86,92,96,106 |
| `items/pthm-nrqm-observables-position-and-momentum-outcome-laws.md` | S4:27,50,96,124 |
| `items/pthm-nrqm-observables-preparation-moments.md` | S3:21,34,73,92,102; S4:20,33,73,92 |
| `items/pthm-nrqm-observables-states-separated-by-born-statistics.md` | S3:21,33,64,72; S4:20,32,64,72 |
| `items/pthm-nrqm-oscillator-coherent-state-evolution.md` | S2:21,46; S3:13,38; S4:14,39 |
| `items/pthm-nrqm-oscillator-coherent-state-fluctuations.md` | S2:20,43; S3:13,36; S4:14,37 |
| `items/pthm-nrqm-oscillator-energy-spectrum-and-completeness.md` | S2:20,42; S3:13,35; S4:14,36 |
| `items/pthm-nrqm-photons-fixed-mode-number-and-energy-statistics.md` | S2:19,41; S3:13,35,93; S4:14,36,94 |
| `items/pthm-nrqm-photons-fixed-mode-polarization-outcome-law.md` | S2:20,42; S3:13,35,89; S4:14,36,90 |
| `items/pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws.md` | S2:17,37; S3:12,32,85; S4:13,33,86 |
| `items/pthm-nrqm-potentials-barrier-flux-and-transmission.md` | S2:17,31,81,138; S3:13,27; S4:14,28 |
| `items/pthm-nrqm-potentials-delta-point-interaction-bound-state.md` | S2:18,36; S3:14,32; S4:15,33 |
| `items/pthm-nrqm-potentials-finite-well-bound-states.md` | S2:17,33,133; S3:13,29; S4:14,30 |
| `items/pthm-nrqm-potentials-interval-spectra-completeness-and-nodes.md` | S2:19,42,145,166; S3:15,38,98; S4:16,39,99 |
| `items/pthm-nrqm-potentials-line-model-energy-and-stationary-states.md` | S2:17,33,150,167; S3:13,29,76; S4:14,30,77 |
| `items/pthm-nrqm-scattering-compact-support-asymptotic-completeness.md` | S2:22,38; S3:18,34; S4:19,35 |
| `items/pthm-nrqm-scattering-controlled-born-approximation.md` | S2:22,39; S3:18,35; S4:19,36 |
| `items/pthm-nrqm-scattering-coulomb-dollard-completeness.md` | S2:10,25; S3:10,22; S4:10,23 |
| `items/pthm-nrqm-scattering-partial-wave-cross-section.md` | S2:22,37; S3:19,34; S4:20,35 |
| `items/pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness.md` | S2:20,38; S3:16,34; S4:17,35 |
| `items/pthm-nrqm-scattering-single-channel-resonance-cross-section.md` | S2:16,29; S3:17,30; S4:18,31 |
| `items/pthm-nrqm-scattering-stationary-dynamical-identification.md` | S2:25,43; S3:22,40; S4:23,41 |
| `items/pthm-nrqm-scattering-stationary-wave-amplitude-and-flux.md` | S2:23,40; S3:19,36; S4:20,37 |
| `items/pthm-nrqm-scattering-wave-operator-existence-and-free-continuity.md` | S2:24,48; S3:18,42; S4:19,43 |
| `items/pthm-nrqm-state-geometry-mixtures-and-extremal-preparations.md` | S3:12,24,72,88 |
| `items/pthm-nrqm-state-geometry-pure-preparation-phase-invariance.md` | S3:12,22,60,74 |
| `items/pthm-nrqm-symmetries-generator-conservation.md` | S3:36,66,120; S4:35,65,121 |
| `items/pthm-nrqm-symmetries-rotational-and-parity-invariance.md` | S2:20,54,163,284; S3:40,74,129; S4:39,73,130 |
| `items/pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation.md` | S2:21,52; S3:38,69,116; S4:36,67,117 |
| `items/pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law.md` | S3:25,45,94; S4:24,44,95 |
| `items/pthm-nrqm-uncertainty-position-momentum-incompatible.md` | S2:15,32; S4:24,41,84 |
| `items/pthm-nrqm-uncertainty-position-momentum-relation.md` | S2:15,35; S3:26,46,96; S4:25,45,97 |
| `items/pthm-nrqm-uncertainty-robertson-relation.md` | S2:15,31,134; S3:24,40,84; S4:23,39,85 |
| `items/rem-nrqm-angular-momentum-examples-scope-limits.md` | S2:10,13 |
| `items/rem-nrqm-angular-momentum-scope-and-empirical-status.md` | S2:13,31 |
| `items/rem-nrqm-autonomous-dynamics-scope-and-empirical-status.md` | S2:15,30,65 |
| `items/rem-nrqm-central-hydrogen-spectroscopy-status.md` | S2:10,17; S3:10,16 |
| `items/rem-nrqm-composites-scope-and-empirical-status.md` | S3:18,30,61 |
| `items/rem-nrqm-driven-dynamics-scope-and-empirical-status.md` | S3:10,24,43; S4:10,25,43 |
| `items/rem-nrqm-framework-assumption-classes-and-scope.md` | S1:20,33,70; S2:19,32,85; S3:12,25,66; S4:13,26,67 |
| `items/rem-nrqm-framework-examples-scope-limits.md` | S2:48; S5:13,20,52 |
| `items/rem-nrqm-framework-primitive-and-derived-status.md` | S2:11,22,54; S3:12,23,56; S4:13,24 |
| `items/rem-nrqm-kinematics-scope-and-empirical-status.md` | S2:12,25,101 |
| `items/rem-nrqm-light-matter-examples-scope-limits.md` | S4:10,22 |
| `items/rem-nrqm-light-matter-scope-and-empirical-status.md` | S2:10,25,90; S4:10,23 |
| `items/rem-nrqm-many-body-scope-and-empirical-status.md` | S2:25,41,109 |
| `items/rem-nrqm-observables-scope-and-empirical-status.md` | S4:19,32,64 |
| `items/rem-nrqm-oscillator-examples-scope-limits.md` | S2:20,31 |
| `items/rem-nrqm-oscillator-scope-and-empirical-status.md` | S2:17,26,57 |
| `items/rem-nrqm-photons-examples-scope-limits.md` | S4:18,29 |
| `items/rem-nrqm-photons-scope-and-empirical-status.md` | S2:18,31,106; S4:20,33,77 |
| `items/rem-nrqm-state-geometry-scope-and-empirical-status.md` | S3:22,35,71 |
| `items/rem-nrqm-symmetries-examples-scope-limits.md` | S2:13,23,94 |
| `items/rem-nrqm-symmetries-scope-and-empirical-status.md` | S2:12,26,111 |
| `items/rem-nrqm-uncertainty-energy-time-caveat.md` | S4:15,24,72 |
| `items/rem-nrqm-uncertainty-scope-and-empirical-status.md` | S4:17,30,77 |
| `items/texp-nrqm-angular-momentum-stern-gerlach-splitting.md` | S2:10,16,131; S3:10,27,52; S4:10,25,53 |
| `items/texp-nrqm-composites-singlet-correlations.md` | S4:25,46,167 |
| `items/texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry.md` | S3:10,18,42 |
| `items/texp-nrqm-kinematics-dirichlet-momentum-warning.md` | S4:23,37,81 |
| `items/texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison.md` | S2:10,22; S3:10,19,117; S4:10,20,117 |
| `items/texp-nrqm-many-body-two-site-no-thermalization.md` | S2:26,48; S3:27,49; S4:28,50 |
| `items/texp-nrqm-photons-classical-field-and-quantized-detection-comparison.md` | S2:21,40; S3:14,33,82; S4:15,34,83 |
| `items/texp-nrqm-uncertainty-spin-half-incompatibility.md` | S3:25,45,94; S4:24,44,95 |
| `library/non-relativistic-quantum-mechanics/qm-framework-and-quantities-examples.md` | S5:17,37 |
| `library/non-relativistic-quantum-mechanics/qm-framework-and-quantities.md` | S1:7,35; S2:12,49; S3:14,54; S4:15,55; S6:22,71 |
| `library/non-relativistic-quantum-mechanics/qm-photons-and-radiation-modes.md` | S2:44 |

Next action: engine seals the decisions and routes the three owner alerts as appropriate before its gate battery; Alpha has not initiated that cycle.
