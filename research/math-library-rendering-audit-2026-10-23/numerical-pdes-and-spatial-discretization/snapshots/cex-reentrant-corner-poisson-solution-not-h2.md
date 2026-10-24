---
id: cex-reentrant-corner-poisson-solution-not-h2
kind: counterexample
title: A reentrant corner prevents automatic H² dual regularity
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-countable-choice
  - def-h-minus-one-as-the-dual-of-h-one-zero
  - def-the-standard-smooth-step-function
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-dirichlet-solution-for-a-divergence-form-operator
  - def-wkp-zero-as-a-sobolev-closure
  - lem-classical-derivatives-are-weak-derivatives
  - thm-algebra-of-derivatives
  - thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chain-rule
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-extreme-value-r
  - thm-poincare-inequality-for-w-one-p-zero
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification: {}
---

## Statement refuted

Every bounded Lipschitz planar domain and every $f\in L^2$ have a
zero-Dirichlet weak Poisson solution in $H^2$, so the full-adjoint
$s=1$ hypothesis in an Aubin–Nitsche estimate is automatic on every such
domain.

## Facts & Assumptions

**Given:** Countable Choice; the open L-shaped domain
$$\Omega=((-1,0)\times(-1,1))\cup((-1,1)\times(0,1)),$$
whose interior angle at the origin is $3\pi/2$; and polar coordinates
$0<r<1$, $0<\theta<3\pi/2$ near that corner.

[F1] $H^1_0(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$ in $W^{1,2}(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] The standard flat function $\beta$ is smooth and positive on $(0,\infty)$, and $\sigma(t)=\beta(t)/(\beta(t)+\beta(1-t))$. Its denominator is positive on $\mathbb R$, so the quotient rule gives smoothness; the formula gives $0\le\sigma\le1$ and the constant tails ([[def-the-standard-smooth-step-function]]).

[F3] Product and chain rules apply to the smooth cutoff constructions ([[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F4] The continuous functions $\sigma'$ and $\sigma''$ are bounded on $[0,1]$ ([[thm-extreme-value-r]]); they vanish off this interval because $\sigma$ is constant there.

[F5] Polar change of variables on a sector has Jacobian $r$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F6] The complex $L^2$ pairing is well defined and satisfies Cauchy–Schwarz ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F7] If an open set is contained in a slab of width $b-a$ in one direction, then $\|w\|_{L^2}\le(b-a)\|\nabla w\|_{L^2}$ for $w\in H^1_0$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F8] A zero-Dirichlet weak solution is an $H^1_0$ class satisfying the variational identity for every $H^1_0$ test ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F9] $H^{-1}(\Omega)$ consists of bounded conjugate-linear functionals on $H^1_0(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]).

[F10] On an open set, the classical derivatives of a smooth function are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F11] The Aubin–Nitsche estimate requires the stated adjoint regularity and dual approximation bounds; it does not assert those hypotheses for every domain ([[thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity]]).

[A1] Countable Choice is assumed by the Sobolev, polar-change, Poincaré and adjoint suppliers used here ([[def-countable-choice]]).

## Counterexample
1.1 Put $\alpha=3\pi/2$ and $\lambda=2/3$. The domain is bounded Lipschitz: at the origin, the rotation $s=(x_1+x_2)/\sqrt2$, $t=(x_2-x_1)/\sqrt2$ writes it locally as $t>-|s|$; every other boundary point lies on a line segment or at a right-angle corner, where a rotation gives a Lipschitz graph. Define $\chi(r)=1-\sigma(4r-1)$, so $\chi=1$ for $r\le1/4$ and $\chi=0$ for $r\ge1/2$, and set $\Phi(r,\theta)=r^\lambda\sin(\lambda\theta)$ and $u=\chi\Phi$. Polar differentiation gives $\partial_{rr}\Phi=\lambda(\lambda-1)r^{\lambda-2}\sin(\lambda\theta)$ and $\Delta\Phi=0$. Also $|u|\le Cr^{2/3}$ and $|\nabla u|\le Cr^{-1/3}$ near the corner. By [F5], $\int_{r<1/4}(|u|^2+|\nabla u|^2)\,dx\le C\int_0^{1/4}(r^{4/3}+r^{-2/3})r\,dr<\infty$; on the remaining support $u$ is smooth with bounded derivatives by [F3, F4]. Thus $u$ and its classical first derivatives are in $L^2(\Omega)$. [given, A1, F2, F3, F4, F5, algebra]

1.2 Let $\epsilon_n=1/(100(n+1))$, $\eta_n(r)=\sigma((r-\epsilon_n)/\epsilon_n)$, and $\kappa_n(\theta)=\sigma((\theta-\epsilon_n)/\epsilon_n)\sigma((\alpha-\theta-\epsilon_n)/\epsilon_n)$. Then $u_n=\eta_n\kappa_nu$ belongs to $C_c^\infty(\Omega)$: it vanishes for $r\le\epsilon_n$, for $r\ge1/2$, and within angular distance $\epsilon_n$ of either boundary ray. The cutoff derivatives satisfy $|\nabla\eta_n|\le C/\epsilon_n$ and $|\nabla\kappa_n|\le C/(\epsilon_n r)$ on their transition regions by [F3, F4]. [F2, F3, F4, given, algebra]

2.1 The radial cutoff region contributes $O(\epsilon_n^{10/3})$ to the squared function error and $O(\epsilon_n^{4/3})$ to the squared gradient error; also $\int_{\epsilon_n<r<2\epsilon_n}|u\nabla\eta_n|^2=O(\epsilon_n^{4/3})$. In the angular strips of width $2\epsilon_n$, $|u|\le Cr^{2/3}\min(\theta,\alpha-\theta)$ and $|\nabla u|\le Cr^{-1/3}$; hence $|u\nabla\kappa_n|\le Cr^{-1/3}$. Polar integration [F5] bounds the squared function and gradient errors on those strips by $O(\epsilon_n)$. These estimates give $u_n\to u$ in $H^1(\Omega)$, so [F1] gives $u\in H^1_0(\Omega)$. [A1, F1, F5, step 1.1, step 1.2, algebra]

2.2 Define $f=-\Delta u$ on $\Omega$. Since $\chi=1$ and $\Phi$ is harmonic for $r<1/4$, while the derivatives of $\chi$ are supported in the compact annulus $1/4\le r\le1/2$, $f$ is bounded and supported in that annulus. Thus $f\in L^2(\Omega)$. [F2, F3, F4, step 1.1, algebra]

2.3 On $0<r<1/4$, the classical radial second derivative is a unit-direction contraction of the Cartesian Hessian. If $u\in H^2(\Omega)$, [F10] identifies its weak Hessian with the classical Hessian on $\Omega$, and $|e_r^\mathsf{T}D^2u\,e_r|\le|D^2u|_{\mathrm F}$ makes the radial derivative square-integrable. But [F5] gives $$\int_{0<r<1/4}|\partial_{rr}u|^2\,dx=|\lambda(\lambda-1)|^2\left(\int_0^{3\pi/2}\sin^2(\lambda\theta)\,d\theta\right)\left(\int_0^{1/4}r^{2\lambda-3}\,dr\right)=\infty,$$ since the angular integral is $3\pi/4$ and $2\lambda-3=-5/3<-1$. This contradicts square-integrability of the Hessian, so $u\notin H^2(\Omega)$. [A1, F1, F5, F10, step 1.1, algebra, contradiction]

3.1 Set $F(v)=\int_\Omega f\overline v$. By [F6] and $\|v\|_{L^2}\le\|v\|_{H^1}$, $F$ is bounded and conjugate-linear, so $F\in H^{-1}(\Omega)$ by [F9]. For every test $v\in C_c^\infty(\Omega)$, support is away from $\partial\Omega$ and classical integration by parts gives $\int_\Omega\nabla u\cdot\overline{\nabla v}=F(v)$. [F10] gives the weak-derivative interpretation, and both sides are continuous in the $H^1$ norm by [F6]; density [F1] extends the identity to all $v\in H^1_0(\Omega)$. Thus $u$ is a zero-Dirichlet weak solution by [F8]. [A1, F1, F6, F8, F9, F10, step 1.1, step 2.1, step 2.2, algebra]

4.1 Let $\widetilde u\in H^1_0(\Omega)$ be any other zero-Dirichlet weak solution for this $f$. By [F8], subtracting the two variational identities and testing with $w=u-\widetilde u$ gives $\|\nabla w\|_{L^2}^2=0$ by [F6]. Since $\Omega\subset\{-1<x_1<1\}$, [F7] gives $\|w\|_{L^2}\le2\|\nabla w\|_{L^2}=0$. Thus $u=\widetilde u$ as a Sobolev class, so an $H^2$ weak solution would force $u\in H^2(\Omega)$. [A1, F1, F6, F7, F8, step 3.1, algebra]

5.1 Step 4.1 shows that no other weak solution can lie in $H^2$, while step 2.3 excludes $u$ itself. Thus this $L^2$ forcing on a bounded Lipschitz domain has no $H^2$ zero-Dirichlet weak solution, refuting the universal statement. The Aubin–Nitsche estimate remains conditional on its actual adjoint regularity and approximation hypotheses [F11]. [A1, F11, step 4.1, step 2.3, contradiction] ∎
