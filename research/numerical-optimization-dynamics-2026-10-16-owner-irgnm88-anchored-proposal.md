# INV2 nonlinear regularization: exact anchored repair proposal

Proposal only. No native88 carrier, control, manifest, readiness or runtime edit is made. Root reports verified genuine native completion at 2026-10-16T04:20:53.343Z; application still requires its mathematical approval of the following formula and hypotheses. The unanchored algorithm and its proved one-step lemma/example remain unchanged.

## Confirmed gap and actual sources

The current assigned update is unanchored LM. Its valid one-step identity has alpha times the current error, while anchored IRGNM has alpha times the fixed initial error. Replacing one by the other without changing the method is invalid. No counterexample to every possible unanchored convergence theorem is claimed: the confirmed defect is an unproved unmatched contract, not a proved impossibility of the method.

Actual full PDFs were retrieved to `/tmp/inv88-{jin,kalten,clason}.pdf` and extracted with PyMuPDF after `pdftotext` was unavailable. Read the entire 15-page Kaltenbacher lecture, Jin's exact formulation and Theorem1.1 in section1 (printed2–4), and Clason's entire anchored section11.3 including Assumption11.14, Lemma11.15 and Theorem11.16 with proofs (printed112–116). Jin's Theorem1.1 uses the weighted residual(1.7), tau>2, and a stronger source range; it is not ordinary Morozov for all low source exponents. Clason's proved anchored theorem uses a priori stopping and exponentnu in|A|^nu with nu>=1; its last sentence refers direct discrepancy to another source. Kaltenbacher's slides distinguish LM adaptive-alpha from anchored IRGNM and state a structural condition for low-source discrepancy. The concrete proof below is derived independently; no unread source theorem is asserted as its proof.

## Exact proposed method and theorem

Assume AC, with its inherited Countable Choice uses for adjoints and integration explicit. Let X,Y be real or complex Hilbert spaces, F:U->Y continuously Frechet differentiable, and let the closed convex ball B={x:||x-xdag||<=rho} be contained in open U. Put y=F(xdag), A=F'(xdag), S=A*A. Retain the stated Lipschitz derivative assumption on B. Add this explicit weak-nonlinearity hypothesis: for every x in B there is a bounded operator R_x:Y->Y such that

F'(x)=(I+R_x)A, ||R_x||<=kappa, 0<=kappa<1/5.

Take R_xdag=0. No full rank, lower singular-value bound, finite dimensionality, compactness of A or closed range is assumed. In particular compact injective operators with singular values tending to zero remain admitted.

Let e0=x0-xdag=S^nu w (the original opposite sign is absorbed in w), 0<nu<=1/2, ||w||<=W with W>0. Let alpha0>0 satisfy alpha0>=||A||^2, and let alpha_k=alpha0 q^k, 0<q<1. For bounded noise ||ydelta-y||<=delta, the **new anchored** recurrence is

(A_k*A_k+alpha_k I)s_k=A_k*(ydelta-F(x_k))+alpha_k(x0-x_k), x_next=x_k+s_k.

Keep the original finite-budget/discrepancy/domain statuses. The new theorem pertains to this formula and says that, under the explicit smallness/constants below, the first **ordinary** Morozov crossing is finite, remains inside the ball, and its returned iterate converges in norm to the specified xdag as positive delta tends to zero whenever the finite cap reaches that crossing. No nonlinear rate is asserted. Exact-data anchored iterates converge to xdag as well.

Write beta=nu+1/2, theta=2kappa+kappa^2, d0=2kappa(1+kappa), c0=1+kappa, and define

a=1/(1-theta), b=d0/(1-theta), c=c0/(1-theta).

Require b<q^beta, and define

D=max{1,a/(q^beta-b)}, E=c/(1-b),
C_e=1+D(d0+theta q^beta)/2,
N_e=(c0+(d0+theta)E)/2,
T=(1+kappa)(D+E)+1.

Choose tau>T and require

(C_e+N_e) W alpha0^nu < rho.

These are nonvacuous explicit sufficient conditions: for any fixed q in(0,1), sufficiently small kappa satisfies the coefficient condition, then a sufficiently small source bound W satisfies the ball condition. No iterate-in-ball conclusion is assumed circularly. For the proof it suffices to take 0<delta<W alpha0^beta; the exact root/zero-space cases stop immediately and are handled directly.

## Required real/complex source-power supplier

Author locally in the same pair a typed source-power/filter lemma for bounded A between real or complex Hilbert spaces, S=A*A, with AC. For nonzero complex X use the exact published continuous calculus, positive-spectrum and norm suppliers. For real X construct the Hilbert complexification X+iX with norm squared||x||^2+||y||^2 and its standard complex inner product, not the published rotation-supremum Banach norm. Show completeness componentwise, extend A,S complex-linearly, verify adjoint/self-adjointness/positivity and equality of operator norms. Real-coefficient polynomial approximants to the real function t^nu preserve the embedded real subspace, as do their norm limits; restriction therefore defines S^nu over the real field independently of approximation. A zero Hilbert space is handled directly; A=0 gives S^nu=0 for nu>0. Do not cite the nonzero complex theorem directly for a real space.

Prove the following exact operator bounds by the continuous calculus and elementary scalar inequalities:

||alpha(S+alpha I)^-1 S^nu||<=alpha^nu (0<nu<=1),
||A alpha(S+alpha I)^-1 S^nu||<=alpha^(nu+1/2) (0<nu<=1/2),
||(S+alpha I)^-1 A*||<=1/(2sqrt(alpha)),
||A(S+alpha I)^-1 A*||<=1.

For the first two use t^gamma/(1+t)<=1 for0<=gamma<=1 after lambda=alpha t. For the second use ||AT||^2=||T*ST||. For the third use sqrt(lambda)/(lambda+alpha)<=1/(2sqrt(alpha)); for the fourth use push-through to AA* and lambda/(lambda+alpha)<=1. These bounds are field-complete after the real transfer. Also prove S^nu h=0 for h in ker A by polynomial approximation at zero, so ran S^nu is orthogonal to ker A. This uses no unproved real spectral-power convention.

## Complete local proof route and calculations

1. **Derivative factorization and nonlinear remainder.** For x,z in B, integrate F' along their segment. The derivative remainder F(x)-F(z)-A(x-z) has norm at most kappa||A(x-z)||; this only integrates the continuous vector F'(z+t(x-z))(x-z), so no measurability assumption on the arbitrarily chosen R_x family is needed. Consequently

(1-kappa)||A(x-z)||<=||F(x)-F(z)||<=(1+kappa)||A(x-z)||.

Also ||F(x)-F(z)-F'(z)(x-z)||<=2kappa||A(x-z)||, so the original tangential cone condition is retained with eta=2kappa/(1-kappa)<1/2. At x=x_k, let e_k=x_k-xdag, v_k=||Ae_k|| and t_k=A_k e_k-(F(x_k)-y); then ||t_k||<=2kappa v_k.

2. **Anchored fixed-reference recurrence.** Put e0=x0-xdag and epsilon=ydelta-y. Let H_k=R_k+R_k*+R_k*R_k, so ||H_k||<=theta. The anchored normal equation gives

(A_k*A_k+alpha I)e_next=alpha e0+A_k*(epsilon+t_k),
(S+alpha I)e_next=alpha e0+A* z_k,
z_k=(I+R_k)*(epsilon+t_k)-H_k A e_next.

Therefore ||z_k||<=c0 delta+d0 v_k+theta v_next. This is an identity/bound with the fixed reference A, not an unjustified estimate of alpha B_k^-1 e0 by||e0||.

3. **Residual recurrence and explicit bound.** Apply A(S+alpha I)^-1 to step2 and the filter bounds. For beta=nu+1/2,

(1-theta)v_next<=W alpha_k^beta+d0 v_k+c0 delta,
v_next<=a W alpha_k^beta+b v_k+c delta.

Initially v0<=||A||^(2nu+1)W<=W alpha0^beta. If v_k<=D W alpha_k^beta+E delta, then

v_next<=(a+bD)W alpha_k^beta+(bE+c)delta<=D W alpha_(k+1)^beta+E delta,

because D(q^beta-b)>=a and E(1-b)=c. This proves the residual bound by induction over actually constructed steps; it is not source smoothness assumed for each iterate.

4. **Error bound from source plus reference perturbation.** Apply the norm bound in step2 before taking A:

||e_next||<=W alpha_k^nu+[c0 delta+d0 v_k+theta v_next]/(2sqrt(alpha_k))
<=C_e W alpha_k^nu+N_e delta/sqrt(alpha_k).

Here both residual bounds from step3 were substituted, including v_next<=D W q^beta alpha_k^beta+E delta. Thus the error is O(W alpha^nu)+O(delta/sqrt(alpha)), including the source perturber explicitly. It is not a crude alpha^-1 source estimate.

5. **Inductive ball preservation through a deterministic comparison index.** Let Kdelta=min{k>=0:W alpha_k^beta<=delta}. For0<delta<W alpha0^beta this exists, is positive, and every j<Kdelta satisfies delta<W alpha_j^beta. For each update j<Kdelta, step4 yields

||e_(j+1)||<=(C_e+N_e)W alpha_j^nu<rho.

Base x0 is inside B because ||e0||<=W alpha0^nu. At an induction stage j, factorization/remainder and inverse bounds apply only at the already-admissible x_j and define an unconditional Hilbert step; steps3/4 then place the newly constructed x_(j+1) in B. This proves existence and invariance through Kdelta without assuming future iterates lie there. For exact data, the same induction continues forever with noise term0 and proves e_k->0.

6. **Finite ordinary discrepancy crossing.** Step1 and step3 give

||F(x_Kdelta)-ydelta||<=(1+kappa)v_Kdelta+delta
<=((1+kappa)(D+E)+1)delta=Tdelta<tau delta.

Thus the first direct Morozov index kdelta exists and is at most Kdelta. A finite implementation with cap>=kdelta returns discrepancy; a shorter cap still returns the valid budget/no-crossing status and does not claim convergence at its arbitrary final iterate.

7. **Noise term at any unbounded stopping subsequence.** For1<=kdelta<=Kdelta,

delta/sqrt(alpha_(kdelta-1))<=delta/sqrt(alpha_(Kdelta-1))
< W^(1/(2beta)) delta^(1-1/(2beta))->0,

because W alpha_(Kdelta-1)^beta>delta and beta>1/2. If kdelta tends to infinity, alpha_(kdelta-1)^nu->0, so step4 proves the stopped error tends to zero. No assertion kdelta->infinity is made for every sequence.

8. **Bounded stopping subsequences and solution identification.** For fixed j, noisy iterates depend continuously on the data near y: F,F' are continuous and for fixed positive alpha the normal inverse is continuous by the inverse-difference identity, with norm bound alpha^-1. Induction gives x_j^delta->x_j^0. If a stopping subsequence has constant index j, its discrepancy residual tends to zero, hence F(x_j^0)=y. Step1 then implies A e_j^0=0. Initial e0=S^nu w is orthogonal to ker A, and the anchored normal equation tested against every h in ker A gives <e_next,h>=<e0,h>=0. Thus every exact e_j is orthogonal to ker A. Combined with A e_j=0 this gives e_j=0. These arguments include j=0 and do not assume injectivity of A.

9. **All stopped families converge.** If convergence failed along some data/noise sequence, choose a subsequence of stopping indices: either an unbounded subsequence, contradicting step7, or a bounded one with a constant-index further subsequence, contradicting step8. Equivalently use a finite-index split and uniform tail error bound. Hence x_(kdelta)^delta->xdag for all admissible noise sequences with delta->0.

## Scope, consumers and intended carriers

Keep `alg-iteratively-regularized-gauss-newton-step`, `lem-irlgnm-one-step-error-recurrence` and `ex-nonlinear-exponential-kinetics-one-step` unchanged as the unanchored LM algorithm/identity/example. Add a separate anchored algorithm in the same pair. Replace the currently unproved target `thm-irlgnm-local-source-condition-discrepancy-convergence` with the actual anchored theorem under the explicit hypotheses above, rather than leave an unproved established target as a supplier. Add the smallest typed field-complete source-power/filter lemma and the anchored reference-recurrence lemma locally before the theorem. This adds no pair and retains the approved ill-posed Hilbert scope and all source exponents0<nu<=1/2.

Exact-ID source scans show no item consumer of the unproved target; its A-page and native coverage/contracts/notes are the actual mirrors. The unanchored exponential example depends only on the unchanged algorithm and remains valid. Existing Landweber/LSQR items have no dependence on this nonlinear target and are not re-audited or altered. Active INV2 control must distinguish the two algorithms and bind the anchored source/discrepancy theorem to its own formula/factorization/smallness/tau conditions. Any final source change invalidates its current readiness binding; root owns recertification.
