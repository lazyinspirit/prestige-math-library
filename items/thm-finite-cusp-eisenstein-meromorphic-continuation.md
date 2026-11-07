---
id: thm-finite-cusp-eisenstein-meromorphic-continuation
kind: theorem
title: Finite-cusp Eisenstein meromorphic continuation and critical regularity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
- lem-initial-cofinite-eisenstein-cusp-asymptotics
- lem-cusp-average-cutoff-laplacians-have-compact-resolvent
- lem-finite-cusp-maass-selberg-truncation-identity
- thm-interior-h-k-plus-two-elliptic-regularity
- thm-greens-theorem-for-finite-unions-of-elementary-regions
- thm-fourier-basis-and-parseval-on-the-n-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: one-cusp cutoff-resolvent continuation and functional equation; the finite-cusp matrix and character generalization is proved here.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 4.1–4.4 and 5.1, printed pp. 19–25 / PDF pp. 19–25: cutoff-kernel continuation, scattering identities and one-cusp pole analysis; finite-cusp matrix details are proved here.'
dependency_level: 9
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Statement

For the public AC finite-cusp data, the Eisenstein column matrix $E(s)$ and outgoing matrix $\Phi(s)$ continue meromorphically to all $s\in\mathbb C$, locally in every compact smooth norm. They satisfy, as meromorphic identities,
$$E(s)=E(1-s)\Phi(s),\qquad \Phi(1-s)\Phi(s)=\Phi(s)\Phi(1-s)=I.$$
In the unit-period cusp coordinates, $\Phi(\tfrac12+it)$ is unitary for every real $t$. Both $E(s)$ and $\Phi(s)$ are holomorphic on the full line $\operatorname{Re}s=\tfrac12$, including $s=\tfrac12$. Every pole of $E(s)$ with $\operatorname{Re}s>\tfrac12$ is simple, real, and lies in $(\tfrac12,1]$; its residue is a smooth square-integrable eigenfunction of $A$ with eigenvalue $s(1-s)$. The nonconstant cusp modes remain exponentially decaying.

## Statement references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Statement.

[F1] The unit-width finite-cusp data and PUBLIC AC ([[def-finite-cusp-pseudo-laplacian-data]]).

[F2] Initial E has the specified incoming constants, decay, eigen-equation and absolute Poincaré convergence ([[lem-initial-cofinite-eisenstein-cusp-asymptotics]]).

[F3] The cutoff operator has compact meromorphic resolvent and exactly constant boundary-delta defects ([[lem-cusp-average-cutoff-laplacians-have-compact-resolvent]]).

[F4] Smooth elliptic regularity and local estimates ([[thm-interior-h-k-plus-two-elliptic-regularity]]).

[F5] Finite-region Green integration; unitary paired sides cancel ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]]).

[F6] The unit-circle Fourier characters form a complete orthonormal basis and satisfy Parseval under Countable Choice, supplied by the public AC; multiplication by exp(2πiαx) gives the shifted-frequency version. ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

## Proof

1.1 Fix h(y) smooth, zero for y≤b+1 and one for y≥b+2<Y. Let h_j(s) be h(y)y^s in cusp j and zero elsewhere; put λ(s)=s(1−s) and f_j(s)=(Δ−λ(s))h_j(s). These sources are compactly supported below Y, entire, and lie in H_Y. Define F_j(s)=h_j(s)−(A_Y−λ(s))^−1f_j(s). This is meromorphic locally away from the horocycles in every smooth norm. The form-norm estimate follows from sup_n(1+λ_n)^1/2/|λ_n−λ|<∞ off poles, and then the interior elliptic estimates bootstrap. AboveY the open-cusp constant matrix is exactlyy^sI. In the band b+2<y<Y it solves the constant-coefficient Euler ODE, so is y^sA(s)+y^(1−s)B(s). Values and derivatives at one fixed band height determineA,B meromorphically; the 2×2 determinant is1−2s, so at 1/2 these matrices still have at most a meromorphic singularity. Continuity at Y gives Y^sA(s)+Y^(1−s)B(s)=Y^sI. [given, F1, F2, F3, F4, F5]

2.1 Extend the lower constant solution y^sA+y^(1−s)B beyondY, replacing only the old upper constant term in F. Call the result F̃. The replacement agrees in value at Y by step 1.1 and in derivative with the lower solution by construction; nonconstant modes already have no jump by [F3]. Therefore (Δ−λ(s))F̃(s)=0 globally. It is smooth meromorphically acrossY by elliptic regularity. The nonconstant Fourier modes are decaying modes because they come from the L² correction in step 1.1; the growing solution is notL². Their derivatives have exponential decay locally uniformly in parameters away from poles. This follows directly from the separated equation u_n''−[(2π(n+α)/w)²−λ/y²]u_n=0: its decaying solution has the Volterra integral equation obtained from the fundamental pair exp(±ky), k=2π|n+α|/w. The tail kernel norm isO(|λ|/(kR)), so iteration contracts for R sufficiently large. It yields exp(−ky) times bounded polynomial derivatives. For large|n| this holds at a fixedR; smooth data there have Fourier coefficients decreasing faster than every power, so the series and its derivatives sum uniformly. Continuation handles the remaining finite band and finitely many small frequencies. This proves decay at any rate below the smallest allowedk, and does not falsely replace a closed-cusp gap by 1. [given, F1, F2, F3, F4, F5, step 1.1, F6]

3.1 If Re s>1, λ(s) is outside[0,∞). Any smooth global eigenfunction with zero incoming terms and only decaying other modes lies in H¹∩L²; cutoff integration makes its weak equation the full form equation, placing it in D(A). Self-adjoint nonnegativity makes it zero. The initial E(s) therefore gives F̃(s)=E(s)A(s). If A(s)a=0, this uniqueness makes F̃(s)a=0; its value at Y isY^sa by step 1.1, so a=0. Thus A is invertible on a nonempty open subset avoiding the discrete pseudo-spectrum. Its determinant is not identically zero. The formulas E(s)=F̃(s)A(s)^−1, Φ(s)=B(s)A(s)^−1 give actual meromorphic continuation, agreeing with the initial Poincaré series where it was defined. [given, F1, F2, F3, F4, F5, step 2.1, F6]

4.1 On Re s<0, uniqueness with parameter1−s gives F̃(s)=E(1−s)B(s): now B is incoming and A outgoing. This equality and that of step 3.1 extend meromorphically to C. Cancel generically invertibleA and useB=ΦA to obtain E(s)=E(1−s)Φ(s). Comparing incoming coefficients givesI=Φ(1−s)Φ(s), and square finite matrices give also the reversed product. [given, F1, F2, F3, F4, F5, step 3.1]

5.1 For s=1/2+it, t≠0, away from poles, Green integration of E(s)a and E(s)b with equal real eigenvalue, with top height tending∞, gives ⟨a,b⟩_W=⟨Φ(s)a,Φ(s)b⟩_W, W=diag(1). The boundary constant flux is2it times the difference of these pairings; other modes decay. Thus W^1/2ΦW^−1/2 is unitary. Every matrix entry is bounded along the punctured critical line. A nonzero Laurent leading term would be unbounded along that line, so all candidate poles of Φ there are removable. Approaching t→0 proves removability also at the central point. [given, F1, F2, F3, F4, F5, step 4.1, F6]

6.1 A pole of E at a critical-line point where Φ is regular would have a leading coefficientu with zero constants at every open cusp and decaying modes elsewhere. It is a smooth L² cusp eigenfunction. For any such eigenfunctionv, absolute unfolding of the initial Poincaré series againstv gives ⟨E_j(s),v⟩=∫_0∞y^(s−2)(∫_0^{1}\overline{v(x+iy)}dx)dy=0 for Re s>1. Absolute unfolding follows from the initial absolute convergence and the boundedness of v on the quotient: v is smooth on its compact core and exponentially decaying in its finitely many cusp tails. At unfolded height y→0, boundedness gives the integrable majorant Cy^(Re s−2) for Re s>1; at infinity exponential decay gives integrability. The pairing extends meromorphically: v decays exponentially and E is locally meromorphic of bounded power growth, with locally uniform exponential nonconstant tails by step 2.1. Takingv=u, its principal coefficient is||u||²=0, contradiction. Thus E also has no critical-line poles. [given, F1, F2, F3, F4, F5, step 5.1, F6]

7.1 If s0 is a pole with Re s0>1/2, its leading coefficientu has only outgoing constants y^(1−s0) and decaying other modes, so lies in H¹∩L² and D(A). Thus λ(s0) is real and nonnegative. Since Im λ(s0)=(1−2Re s0)Im s0, s0 is real, and 1/2<s0≤1. If its orderr≥2, the next coefficientv is also in D(A): its constant terms involve only y^(1−s0) and y^(1−s0)logy, both square-integrable with energy derivatives. Laurent comparison gives (A−λ(s0))v=λ'(s0)u. Pairing withu yields0=λ'(s0)||u||², impossible since λ'(s0)=1−2s0≠0. Every such pole is simple and its residue has the asserted eigenvalue. [given, F1, F2, F3, F4, F5, step 6.1, F6] ∎


## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
