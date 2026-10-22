---
id: lem-ip-centered-neumann-sequence-map-and-differentiability
kind: lemma
title: Centered Neumann voltage sequences on the three-dimensional ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-spherical-harmonics-form-complete-basis-and-addition-formula
  - lem-ip-calderon-boundary-trace-quotient-identification
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-poincare-wirtinger-on-bounded-connected-extension-domains
  - thm-lax-milgram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Example 2 and Example 4; the centered affine-data correction is proved here
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
      locator: Theorem 6.9 uses the centered observation g=j(NtD_gamma-NtD_1)j*
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice. Let $\Omega=B_1(0)\subset\mathbb R^3$, fix $0<\rho<1$ and $0<m<1<M$, and let $E$ be the closed real subspace of $L^\infty(\Omega)$ consisting of functions vanishing almost everywhere outside $B_\rho(0)$. Set $\mathcal A=\{a\in E:\operatorname*{ess\,inf}(1+a)>m,\ \operatorname*{ess\,sup}(1+a)<M\}$ and $\sigma=1+a$. Choose an orthonormal spherical-harmonic basis $Y_{\ell k}$ of mean-zero $L^2(S^2)$, with $\ell\ge1$ and $1\le k\le2\ell+1$. For each basis current there is a unique weak solution $u_{\sigma,\ell k}\in H^1(\Omega)$ with boundary mean zero such that
$$\int_\Omega\sigma\nabla u_{\sigma,\ell k}\cdot\overline{\nabla v}=\int_{S^2}Y_{\ell k}\overline{\operatorname{Tr}v}\qquad(v\in H^1(\Omega)).$$
The centered sequence
$$G(a):=\big(\operatorname{Tr}(u_{\sigma,\ell k}-u_{1,\ell k})\big)_{\ell,k}$$
belongs to $Y=\ell^2(L^2(S^2))$. The map $G:\mathcal A\to Y$ is Fréchet differentiable, and both $G$ and $G'$ are Lipschitz on $\mathcal A$, with constants depending only on $m,M,\rho$ and the ball. Its derivative in direction $h\in E$ is the trace sequence of the unique boundary-mean-zero solutions
$$\int_\Omega\sigma\nabla v_{h,\ell k}\cdot\overline{\nabla w}=-\int_\Omega h\nabla u_{\sigma,\ell k}\cdot\overline{\nabla w}.$$
The uncentered sequence $(\operatorname{Tr}u_{1,\ell k})_{\ell,k}$ does not belong to $Y$. Thus absolute voltage data in this convention lie in an affine translate of $Y$, whereas data differences belong to $Y$. All complex spaces here may be regarded as real Banach spaces when taking derivatives with respect to real conductivities.

## Statement references

[[lem-spherical-harmonics-form-complete-basis-and-addition-formula]]

[[lem-ip-calderon-boundary-trace-quotient-identification]]

[[thm-lax-milgram]]

[Kaltenbacher, Examples 2 and 4](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The choices, fixed collar radius, uniformly elliptic conductivities and mean-zero current basis in the Statement.

[F1] The degree-$\ell$ harmonic space has dimension $2\ell+1$, and these spaces form a complete orthogonal expansion on $S^2$. [[lem-spherical-harmonics-form-complete-basis-and-addition-formula]]

[F2] The ball is an extension domain, satisfies the mean-zero Poincaré inequality, and has a bounded trace $H^1(\Omega)\to W^{1/2,2}(S^2)\subset L^2(S^2)$. [[thm-extension-theorem-for-bounded-smooth-domains]], [[thm-poincare-wirtinger-on-bounded-connected-extension-domains]], [[lem-ip-calderon-boundary-trace-quotient-identification]]

[F3] Bounded coercive forms have unique solutions for bounded conjugate-linear functionals. [[thm-lax-milgram]]

[A1] Choice assumptions are used at [F1]–[F3]; the Axiom of Choice selects the countable family of finite-dimensional bases. [[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 Let $V=\{w\in H^1(\Omega):\int_{S^2}\operatorname{Tr}w=0\}$. This is closed by [F2]. For $w\in V$, write $\bar w$ for its volume mean. Poincaré gives $\|w-\bar w\|_{H^1}\le C\|\nabla w\|_2$, and the trace bound and boundary-mean condition give $|\bar w|\,|S^2|\le|S^2|^{1/2}\|\operatorname{Tr}(w-\bar w)\|_2\le C\|\nabla w\|_2$. Thus $\|w\|_{H^1}\le C\|\nabla w\|_2$ on $V$. The form $A_\sigma(w,v)=\int\sigma\nabla w\cdot\overline{\nabla v}$ is bounded and coercive there, uniformly for $m<\sigma<M$. By [F3], any functional $v\mapsto-\int H\cdot\overline{\nabla v}$ with $H\in L^2(\Omega)^3$ has a unique solution in $V$, of $H^1$ norm at most $C\|H\|_2$. [A1, F2, F3, given, algebra]

2.1 The background solution is $u_{1,\ell k}(r,\omega)=r^\ell Y_{\ell k}(\omega)/\ell$. It is a harmonic polynomial with normal derivative $Y_{\ell k}$ and boundary mean zero. Its weak equation follows by integration by parts for polynomials, first against smooth functions and then against $H^1$ functions by extension and smooth convolution approximation using [F2]. The same integration by parts on $B_\rho$ gives $\|\nabla u_{1,\ell k}\|_{L^2(B_\rho)}^2=\rho^{2\ell+1}/\ell$. In particular $A_\rho:=\sum_{\ell\ge1}(2\ell+1)\rho^{2\ell+1}/\ell<\infty$, since $(2\ell+1)/\ell\le3$. [F1, F2, step 1.1, given, algebra]

3.1 Apply step 1.1 with $H=a\nabla u_{1,\ell k}$, supported in $B_\rho$, to obtain $w_{a,\ell k}\in V$ satisfying $A_\sigma(w_{a,\ell k},v)=-\int a\nabla u_{1,\ell k}\cdot\overline{\nabla v}$. The sum $u_{1,\ell k}+w_{a,\ell k}$ solves the required Neumann equation, first for $v\in V$ and then for all $v\in H^1$ by subtracting its boundary mean. The current annihilates constants. Uniqueness follows by testing the difference with itself and using step 1.1. Summing the energy estimates gives $\sum\|w_{a,\ell k}\|_{H^1}^2\le C\|a\|_\infty^2 A_\rho$. The trace bound proves $G(a)\in Y$. Moreover $\sum\|\nabla u_{\sigma,\ell k}\|_{L^2(B_\rho)}^2\le2A_\rho+2\sum\|w_{a,\ell k}\|_{H^1}^2\le C$, uniformly over $\mathcal A$, since $\|a\|_\infty\le\max\{1-m,M-1\}$. [F2, step 1.1, step 2.1, algebra]

4.1 For $a,b\in\mathcal A$, subtract the weak equations to obtain $A_{1+a}(u_{1+a,\ell k}-u_{1+b,\ell k},v)=-\int(a-b)\nabla u_{1+b,\ell k}\cdot\overline{\nabla v}$. By step 1.1 and the summed interior bound in step 3.1, the sequence of differences has $\ell^2(H^1)$ norm at most $C\|a-b\|_\infty$. For $h\in E$, the same estimate constructs the asserted derivative sequence $v_{a,h}$ with norm at most $C\|h\|_\infty$. Subtracting its equation from the difference equation for $a+h,a$ shows that the remainder has forcing $-h\nabla(u_{1+a+h}-u_{1+a})$ and hence $\ell^2(H^1)$ norm at most $C\|h\|_\infty^2$. Taking traces proves Fréchet differentiability. Finally, subtract the derivative equations at $a,b$: $A_{1+a}(v_{a,h}-v_{b,h},w)=-\int h\nabla(u_{1+a}-u_{1+b})\cdot\overline{\nabla w}-\int(a-b)\nabla v_{b,h}\cdot\overline{\nabla w}$. The established estimates bound its sequence norm by $C\|a-b\|_\infty\|h\|_\infty$, proving the operator-norm Lipschitz derivative bound and the asserted Lipschitz bound for $G$. [F2, step 1.1, step 3.1, algebra]

5.1 By step 2.1, $\operatorname{Tr}u_{1,\ell k}=Y_{\ell k}/\ell$. Its squared sequence norm is $\sum_{\ell\ge1}(2\ell+1)/\ell^2$, which diverges since each summand is at least $2/\ell$. Thus the absolute background voltage sequence is not in $Y$, while every centered difference is in $Y$ by step 3.1. This establishes the affine-data distinction without changing the set of measured currents. [F1, step 2.1, step 3.1, algebra] ∎
