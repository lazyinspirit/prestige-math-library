---
id: lem-outgoing-automorphic-resolvent-jump
kind: lemma
title: Outgoing automorphic resolvent jump and local spectral density
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
- lem-cusp-average-cutoff-laplacians-have-compact-resolvent
- thm-finite-cusp-eisenstein-meromorphic-continuation
- thm-spectral-theorem-for-unbounded-self-adjoint-operators
- thm-greens-theorem-for-finite-unions-of-elementary-regions
- thm-interior-h-k-plus-two-elliptic-regularity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–3, printed pp. 89–93 / PDF pp. 4–8: pseudo-resolvent and Eisenstein continuation route; the finite-cusp outgoing coefficient and jump are proved here.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 5.3–5.6, printed pp. 24–30 / PDF pp. 24–30: one-cusp continuous spectrum and finite-cusp outline; exact finite-cusp normalization and resolvent density are proved here.'
dependency_level: 10
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Statement

For the public AC finite-cusp data and compactly supported smooth section $f$, the full resolvent $(A-s(1-s))^{-1}f$ has a meromorphic continuation in compact smooth norms as the outgoing solution, whose constant coefficient at cusp $j$ is $c_{f,j}(s)y^{1-s}$ with
$$c_{f,j}(s)=\frac{\langle f,E_j(\overline s)\rangle_H}{2s-1}.$$
Let $P$ be the spectral projection-valued measure of $A$, and define $F_{f,j}(t)=\langle f,E_j(\tfrac12+it)\rangle_H$. For $\lambda=\tfrac14+t^2$, $t>0$, away from the locally finite set of cusp eigenvalues, the upper-minus-lower resolvent boundary jump is
$$\frac{i}{2t}\sum_{j\in J}E_j(\tfrac12+it)\langle f,E_j(\tfrac12+it)\rangle_H.$$
On the same intervals the PVM density, in the $t$ parameter, is
$$\frac{1}{2\pi}\sum_{j\in J}F_{f,j}(t)\overline{F_{g,j}(t)}\,dt$$
between compactly supported smooth $f,g$. Below $1/4$ the PVM has zero density away from discrete poles. A cusp eigenvalue means an eigenvalue having an $L^2$ eigenfunction whose constant coefficients vanish at every open cusp.

## Statement references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Statement.

[F1] Unit-width data and PUBLIC AC ([[def-finite-cusp-pseudo-laplacian-data]]).

[F2] Compact cutoff resolvent and boundary-jump characterization ([[lem-cusp-average-cutoff-laplacians-have-compact-resolvent]]).

[F3] Continued E, scattering FE, critical-line regularity and exponential Fourier tails ([[thm-finite-cusp-eisenstein-meromorphic-continuation]]).

[F4] Under AC the full self-adjoint operator has its PVM and bounded nonreal resolvent kernel ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

1.1 Let f be smooth with compact support. ChooseY above its support, with all cutoff bands below Y. Put v(s)=(A_Y−λ(s))^−1f. In a band below Y and above the support its open-cusp constant matrix is a_f(s)y^s+b_f(s)y^(1−s), and its upper constant is zero. Extend this lower solution above Y, replacing the upper zero constant and retaining all other modes; call the resultṽ(s). Its value at Y is zero, so it is continuous; its derivative matches the lower solution. By the boundary-delta characterization in [F3] it is a global smooth meromorphic solution (Δ−λ(s))ṽ=f. Set R_out(s)f=ṽ(s)−E(s)a_f(s). It has only outgoing constants c_f(s)y^(1−s) and decaying other modes. Whenever Re s>1/2 and Im λ(s)≠0, it lies in H¹∩L² and its weak equation puts it in D(A). It therefore equals the genuine full resolvent(A−λ(s))^−1f. Consequently this full resolvent between compact test sections has a meromorphic continuation in the s-plane, with locally finite exceptional set, independent of f when f ranges over a fixed compact support: the sameA_Y and finite matrixA(s)^−1 from [F3] work for every suchf. [given, F1, F2, F3, F4]

2.1 Green integration determines its outgoing coefficients exactly. Put u=R_out(s)f and test againstE_j(bar s). Their spectral parameters agree after conjugation. Because f is compact, the volume difference is⟨f,E_j(bar s)⟩. The outgoing constant ofu is c_jy^(1−s), while the conjugate test's incoming constant isy^s. Their top fluxu overline(E_y)−u_y overline(E) equals(2s−1)c_j; outgoing/outgoing terms cancel and other modes decay. Thus c_f,j(s)=⟨f,E_j(bar s)⟩/(2s−1). This identity holds initially for Re s>1 and then meromorphically. Green passage is valid on every finite support/core and cusp end by [F3]; no integration of the growing incoming term over an infinite region is required. [given, F1, F2, F3, F4, step 1.1]

3.1 Fix t>0, s=1/2+it, away from the locally finite continued-resolvent poles. Since Im λ(σ+it)=(1−2σ)t, R_out(s) is the lower-half-plane boundary value; R_out(1−s) is the upper one. Their difference is a homogeneous eigenfunction with incoming coefficient c_f(1−s)=−Ff(t)/(2it), where Ff_j(t)=⟨f,E_j(s)⟩. FE and unitarity give Ff(−t)=Φ(s)Ff(t), hence its outgoing coefficient −c_f(s) equals Φ(s)c_f(1−s). Subtract E(s)c_f(1−s); the result has all cusp constants zero and is a smooth L² cusp eigenfunction. Exclude also the cusp eigenvalues for the moment; then it vanishes. Therefore [R(λ+i0)−R(λ−i0)]f=−E(s)Ff(t)/(2it)=iE(s)Ff(t)/(2t), λ=1/4+t². For compactg this says ⟨[R(λ+i0)−R(λ−i0)]f,g⟩ =i/(2t) Σ_j Ff_j(t) overline(Fg_j(t)). Cusp eigenvalues are locally finite: a cusp eigenfunction lies in D(A_Y) with the same eigenvalue for every fixedY, and A_Y has compact resolvent. Any real pole of the continued cutoff resolvent at t≠0 also belongs to this set: its leading coefficient is a global homogeneous solution with only outgoing constants. Equal-eigenvalue Green flux at infinity gives2it times the squared norm of that outgoing vector equal0, so it has zero constants and is a cusp eigenfunction. Thus the excluded set is locally finite in each compact t-interval avoiding0. [given, F1, F2, F3, F4, step 2.1]

4.1 Here is Stone's argument directly for unboundedA. For finite a<b and ε>0, the scalar PVM kernel is K_ε(λ)=1/(2πi)∫_a^b[(λ−x−i ε)^−1−(λ−x+i ε)^−1]dx =1/π[arctan((b−λ)/ε)−arctan((a−λ)/ε)]. It satisfies0≤K_ε≤1 and tends pointwise to 1_(a,b)+half the endpoint indicators. Bounded convergence against each finite positive PVM vector measure, followed by polarization, proves the strong projection formula. This does not requireA bounded. On a closed interval avoiding threshold and the locally finite poles, step 1.1 makes the cutoff resolvent boundary values continuous uniformly in λ for compactf,g. The ordinary upper/lower approach λ±i ε corresponds to the same meromorphic s-branches, so step 3.1 and dominated convergence apply. Hence the continuous spectral density for λ>1/4 is dP_fg(λ)=1/(4πt) Σ_jFf_j(t)overline(Fg_j(t))d λ =1/(2π)Σ_jFf_j(t)overline(Fg_j(t))dt. For real λ<1/4 away from the discrete poles the two physical boundary values coincide (the same branch Re s>1/2). Thus the density there is zero. [given, F1, F2, F3, F4, step 3.1] ∎


## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
