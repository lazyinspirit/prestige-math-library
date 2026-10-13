# Batch 28 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-28`; role: alpha.

Two touched obligations; no routed page, reader or refuter findings. Reader and refute-28.json read as evidence, not verdicts. No item edits.

## Completed dependency-ordered reviews

- `ex-cm12-regular-not-surjective`: Verified all five steps: exp has positive Hessian and image (0,infinity), so no inverse exists at p<=0. The local inverse theorem supplies C1 log; H prime=log. For C2 q, p=exp(q prime)>0 and both evolution systems are equivalent to q double prime=0. No physical or endpoint assertion, or choice.

- `def-cm12-cotangent-momentum`: Definition (a)-(d) agrees with the mechanical and generalized-coordinate suppliers: p=Mv or Gv is the fibre derivative covector. Positive masses, C3 immersion and coordinate dimensions are specified. Pairing has energy dimension; residual force and potential normalization do not change p. No inverse or dynamics asserted.

- `def-cm12-regularity`: Definition (a)-(d) tests the square velocity Hessian determinant, including at zero velocity. The local branch is defined as C1 inverse on open neighborhoods, without an existence assertion. Determinant/invertibility equivalence matches its supplier; singularity, local inversion and global surjectivity are distinguished.

- `def-cm12-hyperregularity`: Definition (a)-(c) requires every fibre map bijective onto the whole momentum fibre and a jointly C1 inverse on the full chart, exactly as the mathematical definition. No globalization from local regularity; zero momentum is allowed and no arbitrary choice is made.

- `pthm-cm12-local-legendre`: All seven steps checked: C3 X gives C2 DX and G; for nonzero w, w transpose G w=(DXw) dot M(DXw)>0 by immersion and positive masses. Hessians are M and G. Block derivative lemma and C1 inverse theorem apply on open fibre-full domains. No globality or dynamics inferred.

- `def-cm12-hamiltonian`: Definition (a)-(d) uses the stated C1 inverse branch and H=p dot v-L on its full chart; all terms have energy dimension. Generalized pairing has the same dimension for each coordinate convention. U+c(t) shifts H by c(t). No energy identification or conservation follows from definition alone.

- `pthm-cm12-mechanical-hyperregularity`: All four steps instantiate the mechanical-chart proposition with C2 positive definite G, A=0 and C2 substituted potential. Unique inverse G inverse p covers each full fibre and is jointly C2. Hamiltonian formula and dimensions follow directly; noninjective X does not compromise fibre bijectivity. No equation of motion is claimed.

- `pthm-cm12-hamilton-equivalence`: Eight proof steps checked in both directions. With p=Mx prime, the first equation is automatic and momentum equation is Newton with residual force retained. Generalized H_q includes derivative of G inverse. Stationarity on every closed subinterval is equivalent to EL on the open interval. Constraint reduction is used only for the stated scleronomic regular locus, C3 immersion and adopted ideal reaction; no coordinate lift uniqueness or solution existence inferred.

- `pthm-cm12-energy-time`: Four proof steps checked: substituting p=Mx prime or Gq prime identifies H with K+U on inertial Cartesian and time-independent substituted charts. Along a motion, energy balance includes U_t and residual power with correct signs. Conservation requires stated vanishing inputs; U+c(t) shifts H and balance. No time-dependent-chart energy identity or empirical observation asserted.

- `rem-cm12-singular-models`: All five remarks checked. A C1 local inverse forces nonsingular derivative by differentiating inverse identities; thus the singular Hessian warning concerns the defined C1 branch, not merely setwise invertibility. Mechanical positivity excludes singular states. exp separates regularity from full-fibre surjectivity. Only elimination of scleronomic regular constraints is claimed, and no general phase-space constraint algorithm or empirical result is supplied.

- `ex-cm12-mechanical-legendre-positive-metric`: All five verification steps checked. For m>0 uniform field, H gradients give p prime=-mg e3 and x double prime=-g e3; displayed polynomial solves each initial datum on all R and is maximal by IVP uniqueness. Two-label inverse divides by each positive mass and is not scalar for unequal masses. Zero momenta and arbitrary initial velocities are admitted; declared constants are idealized model data.

- `ex-cm12-shifted-momentum`: All six steps checked: smooth F=alpha t x1 is defined on full projection and has action dimension. Shift p_new=p+alpha t e1 has affine global inverse; H_new=H(t,x,p_new-alpha t e1)-alpha x1. Differentiating shift proves both system directions, and endpoint/gauge terms match the supplier. Free witness has H_new-E=-alpha q t with alpha nonzero,q>0; alpha=0 reduces correctly to original.

- `ex-cm12-moving-coordinates`: All seven steps checked independently: affine time-dependent X has X_q=I and smooth full domain; L_new has G=mI,A=mv0 e1,V=k y1 squared/2-m v0 squared/2, giving the displayed C2 global branch. Hamilton gradients yield harmonic y1 and free transverse coordinates; exact sine/cosine solution matches y0,q. H_new=E-v0 p1 and E prime=-k v0 y1. H_new derivative cancels; v0 y0 nonzero implies E prime(0) nonzero and nonconstancy. v0=0 and co-moving equilibrium y0=0,q=mv0 correctly permit constant E. No finite-interval strict monotonicity across changing sign is inferred. Reader change agrees with static-chart energy theorem and source cart calculation.

- `ex-cm12-pendulum-legendre`: All four steps checked independently: positive l makes constraint Jacobian rank two on the circle; both open angular intervals map injectively to exactly N intersect Q_a, covering both cut points with the other chart. DX norm=l, hence Gkin=ml squared>0 and fibre inverse p/(ml squared). Hamilton gradients give theta double prime=-(g/l)sin(theta); elimination recovers ideal reaction on each restricted ambient domain. Overlap transitions are constant shifts by 2pi k with p unchanged, so identity derivative preserves the explicitly defined alternating bilinear form. Local inverse and continuity give time-local charts for every constrained curve, including rotations. No global injective angle or string capability inference is made.

## Routed decisions and historical comparison

Exactly two decisions are owed; both are `accepted_repair`, with `repair_confidence: 1`. No page or finding decisions were added. All fourteen current carriers match their post-reader raw SHA-256. Git HEAD supplies both exact pre-reader carriers: moving coordinates `03607129d176498fd14286d32867725933048750829e1c0da6a9bd4551d04340`, pendulum `52349800384b8416e3b86eec667a14eed37672bb9436a518ee17109931733309`. Their current/post hashes are respectively `567fdc969d56d6aed13feeafc39691e28b039bdbf1eadd4c2e5c3e3e78c96f68` and `4bb09e76d5c8c2572f3ae9f69770e5517996bdb6c55ce95f815369782ec0521d`. The exact Git diff agrees with the reader report; historical delta is known.

- `ex-cm12-moving-coordinates`, `physics-cm-qm-gr-79-2026-10-11-3a-batch-28-moving-energy-qualification` (fatal, closed): The pre-reader clause unconditionally says E is not conserved although v0=0 is admitted and then E prime=0. For v0 nonzero the co-moving equilibrium y0=0,q=mv0 also has constant E. Strict monotonicity is valid locally on a connected interval where v0*y1 stays nonzero, but is not a global conclusion across sign changes. Reader retained the exact balance E prime=-k v0 y1 and asserted a nonzero derivative at times with v0*y1 nonzero, plus nonconstancy for displayed data with v0*y0 nonzero.

- `ex-cm12-moving-coordinates`, `physics-cm-qm-gr-79-2026-10-11-3a-batch-28-static-chart-energy-identity` (fatal, closed): The former remark says H and E coincide only in the inertial chart. pthm-cm12-energy-time clause 3 also identifies H=E in time-independent generalized coordinates: substituting p=Gq prime yields K+U. Reader remark now states the inertial and time-independent generalized-chart identity, while retaining H_new=E-v0 p1 for the time-dependent chart.

- `ex-cm12-pendulum-legendre`, `physics-cm-qm-gr-79-2026-10-11-3a-batch-28-pendulum-form-definition` (nonfatal, closed): The exact pre-reader carrier uses dtheta wedge dp without defining the alternating form on this phase chart. The overlap invariance is elementary once that form is explicitly specified. Reader defines omega(u,v)=u_theta*v_p-v_theta*u_p on each chart, introduces F5 and verifies preservation by the identity derivative of the overlap map.

## Consumers, contracts and imports

A current search of all item and page Markdown found no item consumers of either changed example; the sole reference consumer is `library/non-relativistic-classical-mechanics/cm12-legendre-transformation-and-hamiltonian-mechanics-examples.md`. Its actual use concerns the full angular atlas, reduced Hamilton system, moving-chart Hamiltonian, exact energy rate and energy difference. It asserts no global monotonicity and uses no undefined alternating-form notation, so needs no repair. The A-page summary remains consistent. No consumer public interface changed in Alpha; no second propagation hop is needed and no outside consumer is awaiting disposition.

The two stale Example transcriptions in `batch-28.pages.json` were synchronized with current carriers. The reader already updated pendulum derivation 4.1 with F5 and moving-coordinate derivations 4.1/6.1; all agree with the authored steps. Added specific complete risk reviews to all fourteen contracts. Provenance remains ai-altered for the two examples, and no judge record was present or introduced. No item/page bytes were edited by Alpha, no stable IDs were changed, and no imports or original mathematics were edited. No published defect was found, so the published-consumer ledger requires no addition.

All fifty distinct external direct prerequisite items were opened at their exact relevant definitions/statements; key local inverse, branch-identity and mechanical-chart proofs were also checked. The mathematical suppliers are actual draft chart results or pinned mathematical items, not planned results treated as proved. The physical suppliers supply explicit model types, force regularity, dimensions, potential presentation, stationarity, IVP uniqueness, energy balance, gauge invariance, coordinate covariance and ideal-constraint reduction. The current reduction and covariance arguments were inspected at their relevant proof steps. No claim of a recursive audit of every foundational supplier is made. None of this batch uses measurements or statistical inference.

The existing 128 batch-owned cross-batch ledger rows remain verified, with no added/removed edge. `briefs/tasks/frontier-dependency-ledger.md` records the concrete uses and consumer disposition for this review. No other owner's input was edited.

## Source evidence and limits

[Tong, Chapter 4](https://davidtong.org/pdfs/teaching/classical-dynamics/clas4.pdf), printed pp. 80–84, §§4.1–4.1.3: generalized momentum, pendulum phase cylinder, inverse-dependent Legendre transform, Hamilton equations and particle-in-potential calculation were read. The source's convex-maximum restriction is not adopted as the local inverse theorem; local nonsingular Hessian inversion is proved by the cited mathematical lemma.

[Stewart, MIT OCW notes](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf), printed pp. 8–11 and 14–15, equations (1.26), (1.30)–(1.35), (1.37)–(1.43), (1.55)–(1.59): read the differential identity, static quadratic energy identity, positive-matrix inverse, constrained pendulum example and entire moving-cart calculation. The pendulum on pp. 10–11 has a sliding support, so it supplies the general coordinate calculation rather than being identical to this fixed-support witness. The local proof independently checks the witness.

[Likharev, Classical Mechanics](https://essentialgraduatephysics.org/Files/CM%20merged.pdf), §10.1, chapter pp. 1–3, equations (10.1)–(10.13): read momentum, differential cancellation, Hamilton equations and recovery of the one-coordinate Lagrange equation. The displayed title page identifies the September 1, 2026 edition. No dissipation-free equation was applied to the residual-force case without its additional explicit source term.

Cline's cited PDF retrieval returned an internal error; no full-text check is claimed. A SICM HTML mirror was located but is not used as primary source certification, and the cited publisher ZIP was not inspected. These are source-access limits, not proof suppliers: the current computations have complete local deductions and exact mathematical/physical prerequisites. No fabricated source reading or empirical precision is asserted.

## Local checks and handoff

- Initial risk-report: 14 HIGH/CRITICAL items, zero errors; each received an independent specific risk review in dependency order.
- `node tools/physics-support/risk-report.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-28.proof-contracts.json --require-reviewed`: zero errors, all 14 routed items complete.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/ex-cm12-moving-coordinates.md items/ex-cm12-pendulum-legendre.md`: 2 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/ex-cm12-moving-coordinates.md items/ex-cm12-pendulum-legendre.md`: 2 items, 11 steps, 0 defects; no later item edit or formatter occurred.

No unresolved mathematical blocker or escalation remains. The engine owns decision hash stamping and gate execution. No judge, stamp, self-certification or engine transition was initiated.

Final artifact consistency check: exactly the two scope-named obligations appear once; their three referenced ledger rows are closed at `3a-adjudicate`. All fourteen item hashes still match reader post bytes, and both touched manifest Example transcriptions match current carriers. This check validates record consistency, not mathematical acceptance or an engine gate.
