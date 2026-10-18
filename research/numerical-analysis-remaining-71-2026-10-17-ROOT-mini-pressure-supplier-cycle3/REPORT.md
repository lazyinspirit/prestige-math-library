# PE06 instantaneous pressure: explicitly authorized third and final targeted round

## Decision and unchanged scope

Neither original instantaneous pressure clause was proved under its unchanged hypotheses in this additional round. Both remain precise owner-held mathematical authoring gaps:

1. A generic subsequential energy limit on the original bounded connected Lipschitz **polyhedral** domain, with f in L²_tL²_x and u0 in H_sigma, must have a mean-zero instantaneous pressure in L^(4/3)_tL²_x.
2. The original smooth MINI backward-Euler branch, with its original shape-regular matching meshes, arbitrary allowed time partitions, mass-orthogonal initialization and stated smooth u,p, must have a first-order instantaneous pressure-error bound.

No impossibility of either exact claim is established here. Neither is replaced by a primitive conclusion, assigned an open-problem status, narrowed by an extra mesh/domain/initialization assumption, or waived. The two already-complete additive pressure-primitive results are retained unchanged, with no gratuitous recertification.

The explicit user answer, “Authorize one additional repair round”, and the root receipt at `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/user-additional-targeted-repair-round.json` authorize this third round only for the named pressure/Gaussian findings. CLAUDE.md was read fully; its ordinary two-round rule is unchanged for other findings. The persisted configuration confirms automatic compaction 500000, scope total. No fourth round is inferred or requested by this report.

## Work performed in this same round

Used two expressly permitted disjoint research-only Sol6.1/medium helpers: generic instantaneous regularity and smooth instantaneous pressure error. I supplied the actual original-hypothesis constraints and aggregated their work; neither helper was assigned consumer maintenance or canonical repair. Their complete research notes are:

- `generic-helper/disk-stokes-endpoint-and-gap.md`.
- `smooth-helper/derivative-route-review.md`.

Read the actual current claims and two additive carriers against the first- and second-cycle packets and the current batch notes. The complete ten relevant current mathematical item/page carriers are retained under `observed-current/`, preserving the inspected inputs without a source-hash/readiness claim. These are observation copies, not preimages of an edit: **no canonical source was edited in this round**.

## Generic instantaneous regularity: what is established and missing

The existing exact original-class criterion remains valid. Write g=f−a_nu(u,·)−c(u;u,·). The original energy estimates put g in L^(4/3)(0,T;V*). The mean-zero pressure distribution reconstructed from the actual integrated residual belongs to L^(4/3)_tQ if and only if the **actual full** V*-valued distributional derivative u_t belongs to L^(4/3)_tV*. One direction follows from u_t=g−b(·,p). Conversely, g−u_t annihilates all solenoidal tests outside one common null set (obtained from separability and scalar distributional identities), and the existing divergence-right-inverse pressure-recovery lemma applies.

Nothing in this criterion identifies a bounded extension of the restricted derivative with the actual full derivative. That substitution remains invalid. The new work did not establish the missing full derivative estimate on the actual polyhedral Newtonian trajectory, nor an alternative direct instantaneous pressure estimate there.

A concrete ruled-out shortcut was established: arbitrary-L²-data linear Stokes evolution on a smooth disk does **not** automatically supply the L^(4/3)_tL² pressure endpoint. The complete independent derivation is in the generic helper note. In brief, for k_n the positive zeros of J_2, clamped stream functions

$$\psi_n(r,\theta)=[J_1(k_nr)-J_1(k_n)r]\cos\theta$$

produce normalized no-slip Stokes eigenfields e_n with eigenvalues k_n² and collinear mean-zero pressures

$$\pi_n=\sqrt{2/\pi}\,k_n y,\qquad k_n\asymp n.$$

The exact normalization follows by integration by parts and the Bessel ODE identities; the linear root bounds follow from a Prüfer-angle calculation, not a quoted asymptotic. With a_n=n^(-1/2)(log n)^(-a), 1/2<a<=3/4, the initial sum is L² and its Stokes evolution is in the energy class, whereas

$$\|p(t)\|_2\ge c\,t^{-3/4}(\log(1/t))^{-a},$$

which is not L^(4/3) near zero. Its pressure primitive remains bounded, consistently with the existing additive theorem.

This is **not** an original-scope counterexample: the disk is not polyhedral, and converting this Stokes trajectory to a Newtonian NS trajectory with the original L²_tL²_x forcing requires an additional nonlinear forcing estimate. Neither transfer was proved. No disk item is proposed for canonical authoring, and no further wrong-domain work is required by this packet. The calculation serves only to reject the blanket smooth-domain Stokes-regularization shortcut.

## Smooth instantaneous pressure: actual positive reductions

The full-test derivative-error interface Delta in the current escalation remains sufficient: the exact unintegrated mixed residual and uniform inf-sup give an instantaneous error bounded by the already-proved smooth velocity error and time/pressure approximation terms **plus Delta**. No estimate on Delta follows merely by differentiating the primitive error.

The new research identifies useful original-hypothesis reductions without inventing a kernel projector estimate.

### Exact time consistency is full-L² and needs no second time derivative

Let u_n=u(t_n), bar u_n the exact cell average, and N(u)=(u·grad)u for the exactly divergence-free exact solution. The exact averaged/nodal discrepancy has the L² representative

$$r_n=-\nu\Delta(\bar u_n-u_n)+\nabla(\bar p_n-p_n)+\overline{N(u)}_n-N(u_n).$$

The original u,u_t in H² and p,p_t in H¹ give, using the usual H² product embeddings in d<=3,

$$\|r_n\|_2\le C_D\tau_n[(\nu+1)M+M^2].$$

The exact D_tau u_n is the interval average of u_t. Thus this reduction adds neither u_tt nor time regularity of an independently chosen forcing, and imposes no relation between h and tau. It leaves spatial projection and nonlinear discrete-error estimates to prove.

### A genuinely zero-initial mass-error split

For the existing mass projector P onto Z_h, define rho=(I−P)u and xi^n=Pu(t_n)−u_h^n. Then xi^0=0 under the original initialization. Bounded linearity of P in L², best approximation, and the existing solenoidal energy-projection approximation for u_t imply

$$\|(I-P)u_t\|_2\le Ch(1+\nu^{-1})M.$$

Consequently the contribution of D_tau rho to the full-test derivative norm is at most C_P C T^(3/4)h(1+nu^(-1))M. This is a genuine O(h) contribution without H1 stability of P. It does not close the derivative problem for xi: its kernel equation contains the viscous defect a_nu(Pu−u,·), whose required V control is not supplied by the available L² best approximation.

### Conditional initial-layer and derivative estimates, with their exact limits

For the finite-dimensional positive self-adjoint discrete Stokes operator A_h on Z_h, the homogeneous recursion D_tau y^n+A_hy^n=0 has

$$y^n=\prod_{j\le n}(I+\tau_jA_h)^{-1}y^0.$$

Since product(1+tau_j lambda)>=1+t_n lambda, spectral diagonalization gives, for 1/4<s<1,

$$\left(\sum_n\tau_n\|D_\tau y^n\|_2^{4/3}\right)^{3/4}\le c_s[1-\tfrac43(1-s)]^{-3/4}T^{s-1/4}\|A_h^sy^0\|_2.$$

The right-endpoint sum is bounded by the corresponding integrable decreasing power integral, so this diagnostic estimate has no step-ratio or mesh/time assumption. Its viscosity dependence resides explicitly in A_h^s. A uniform O(h) bound on the fractional norm of the **actual** initial error S_hu0−P_Zhu0 would therefore control the homogeneous initialization contribution in this stronger L²-derivative route. Such a graded-mesh approximation bound has not been proved from the current suppliers. The scalar one-step example lambda=tau_1^(-1) shows why the known O(h) L² initial-error estimate cannot simply be substituted: the homogeneous L^(4/3)(L²) derivative contribution scales as lambda^(1/4)|y0|.

For a linear kernel error with actual L² load F_n, testing with D_tau theta^n rigorously gives

$$\sum_n\tau_n\|D_\tau\theta^n\|_2^2\le a_\nu(\theta^0,\theta^0)+\sum_n\tau_n\|F_n\|_2^2.$$

This offers a second conditional route, but the original initialization is not already known to be O(h) in V on arbitrary graded meshes. There is also an independent nonlinear issue: the energy-controlled quadratic error in three dimensions is generally only L^(3/2) spatially. One cannot treat it as an L² load when testing by the time difference. Proving initialization control alone would not close the full NS derivative argument.

These are sufficient diagnostic routes, not necessary conditions for every possible proof. Failure to complete them is not a counterexample to the original pressure rate. Their exact proofs and limitations are in the smooth helper note.

## Prerequisite inventory and native integration disposition

**Ready new canonical prerequisites: none.** No completed new item in this packet supplies either missing original instantaneous clause. The off-domain linear counterexample and conditional derivative calculations must not be admitted as substitutes or as logical suppliers that assert the unproved conclusions. There is therefore no genuine new native creation inventory or native continuation request from this third-round pressure work.

The smallest still-sufficient continuous interface is the actual full derivative bound/equivalent instantaneous pressure estimate on the original class. The smallest still-sufficient discrete interface is Delta=O(hM+tau_max M²), or a different complete original-scope instantaneous pressure argument. The fractional initialization and nonlinear-load bounds are possible subordinate obligations in one attempted route; they are not claimed to exhaust all alternative proofs.

## Actual old/current consumer closure

The current literal-reference search over `items/` and `library/` again returns exactly:

- `lem-na-continuous-pressure-recovery-from-solenoidal-residual`;
- `thm-na-mini-navier-stokes-be-subsequential-limit`;
- `thm-na-mini-be-smooth-velocity-error`;
- `lem-na-solenoidal-evolution-integrated-pressure-recovery`;
- `thm-na-mini-be-smooth-integrated-pressure-error`;
- `rem-na-pe06-pressure-recovery-escalation`;
- the PE06 A page.

The relevant IDs have no aliases; the earlier closure and genuine added consumers are retained. No original Statement/Definition or supplier interface changed in this round, so no consumer repair or new propagation duty was triggered. The conditional continuous recovery remains conditional; the velocity-limit theorem remains velocity-only; the smooth velocity theorem remains velocity-only; both additive primitive results remain sound in their exact stated spaces; the escalation and A-page prose continue to preserve the two instantaneous gaps. The B page, pressure-gauge/energy examples and conditional 3D computation do not acquire stronger regular-pressure existence or uniqueness from this work. No separate consumer reviewer was used.

## Exact source reading and operational limits

The canonical source/old packet reads include the actual full-text Süli–Tscherpel extraction at PDF pp.1–5 through Definition 2.1 and its following pressure-free paragraph, and its earlier fully inspected §§3.1–3.3 and §4 through Theorem4.1; the earlier full Guermond Chapter53 readings and He Chapter9 weak/backward-Euler sections remain the source context. The smooth helper additionally inspected the existing full-text He extraction at PDF pp.25–27. These texts do not supply the missing estimates. No new full-source theorem is attributed to Simon, Temam, or another inaccessible text. Direct search retrieval produced challenge pages; DLMF requests returned HTTP403 and were not represented as successful readings. The disk Bessel calculation is independently derived from series/ODE identities, not falsely attributed to an unread source.

No canonical content, manifests, contracts, levels, hashes, readiness, runtime or gate-control files were changed. No tests or gates were run. Since no item was edited, no new proof-layout or primitive-proof recertification was invoked; the final actual changed-item layout evidence from cycle2 remains historical. Root retains all native control and metadata ownership. This additional round ends with both original pressure clauses still explicitly unresolved, without silently extending the authorized round budget.
