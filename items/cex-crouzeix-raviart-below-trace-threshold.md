---
id: cex-crouzeix-raviart-below-trace-threshold
kind: counterexample
title: A zero-boundary solution below the CR trace regularity threshold
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-countable-choice
  - def-crouzeix-raviart-fractional-sobolev-regularity
  - def-sobolev-space-wkp-and-its-norm
  - def-the-standard-smooth-step-function
  - def-wkp-zero-as-a-sobolev-closure
  - lem-crouzeix-raviart-simplex-traces-and-green-identity
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36,
        Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "Lemma 36.8 and Theorem 36.13, PDF pp. 6–7 and 12–13: the strict r>1/2
        normal-gradient trace and duality requirements."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations,
        Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 314–350: cellwise consistency, face-mean cancellation, and
        the H2 energy estimate."
verification:
  precheck: pass
---
## Statement refuted

Every $u\in H^1_0((0,1)^2)$ belongs to $H^{1+r}((0,1)^2)$ for some
$r\in(1/2,1]$.

## Facts & Assumptions

**Given:** Countable Choice, $\Omega=(0,1)^2$, the standard smooth step $\sigma$ of [[def-the-standard-smooth-step-function]], the fractional Sobolev convention of [[def-crouzeix-raviart-fractional-sobolev-regularity]], and $H^1_0$ as the $W^{1,2}$ closure of $C_c^\infty(\Omega)$.

[A1] Countable Choice is an assumption of the fractional Sobolev convention and local simplex trace interface used below. ([[def-countable-choice]], [[def-crouzeix-raviart-fractional-sobolev-regularity]], [[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F1] The standard smooth step $\sigma$ is smooth, takes values in $[0,1]$, equals zero on $(-\infty,0]$, and equals one on $[1,\infty)$. ([[def-the-standard-smooth-step-function]])

[F2] Nonnegative Gagliardo integrals can be restricted to measurable subregions and evaluated by iterated integration. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[F3] The local simplex trace result is stated only for gradient regularity $r>1/2$. ([[lem-crouzeix-raviart-simplex-traces-and-green-identity]])

[F4] Membership in $H^{1+r}(\Omega)$ requires every weak first derivative to lie in $H^r(\Omega)$ with the stated Gagliardo seminorm. ([[def-crouzeix-raviart-fractional-sobolev-regularity]])

[F5] At $r=1$, the regularity definition sets $H^{2}(\Omega)=W^{2,2}(\Omega)$, so membership implies $\Delta u\in L^2(\Omega)$; Holder's inequality also bounds the weak Poisson functional by $\|\nabla u\|_2\|\nabla v\|_2$. ([[def-crouzeix-raviart-fractional-sobolev-regularity]], [[thm-holder-inequality-for-integrals]])

## Counterexample

Set $\chi(x):=1-\sigma(4x-1)$ for $x\in[0,1]$ and define
$$u(x,y)=\chi(x)x^{3/4}y(1-y).$$
By [F1], $\chi$ is smooth, equals one on $[0,1/4]$, and equals zero on
$[1/2,1]$.

1.1 On $0<x<1/4$, writing $c(y)=y(1-y)$, one has $\partial_xu=\tfrac34c(y)x^{-1/4},\qquad \partial_yu=(1-2y)x^{3/4}.$ Everywhere else the cutoff and its derivative are bounded. Since $u$ and $\partial_yu$ are square integrable and $|\partial_xu|^2\le C(1+x^{-1/2})$, the weak first derivatives lie in $L^2(\Omega)$; the classical interior derivatives give the distributional derivatives because test functions are compactly supported away from the boundary. Thus $u\in H^1(\Omega)$. [F1, given, algebra]

1.2 To prove the zero-boundary condition, let $\theta_\epsilon(t):=\sigma((t-\epsilon)/\epsilon)$. By [F1], it is smooth, zero for $t\le\epsilon$, and one for $t\ge2\epsilon$. Since $\sigma'$ is continuous and vanishes outside $[0,1]$, $\|\theta_\epsilon'\|_\infty\le C/\epsilon$. Set $\eta_\epsilon(x,y)=\theta_\epsilon(x)\theta_\epsilon(y)\theta_\epsilon(1-y)$. Each $\eta_\epsilon u$ is smooth and compactly supported in $\Omega$, since the $x$ cutoff removes the only nonsmooth boundary point and $\chi$ vanishes near $x=1$. Write $u-\eta_\epsilon u=(1-\theta_\epsilon(x))u+\theta_\epsilon(x)(1-\theta_\epsilon(y)\theta_\epsilon(1-y))u$. In the first term, all support lies in $x<2\epsilon$; the squared $L^2$ and derivative errors are bounded by $C\epsilon^{2(3/4)-1}=C\epsilon^{1/2}$, including the $\epsilon^{-1}u$ cutoff derivative. In the second term, support lies in the two strips of width $2\epsilon$ near $y=0,1$. There $|u|\le Cx^{3/4}\operatorname{dist}(y,\{0,1\})$ and its first derivatives are bounded by $Cx^{3/4}+Cx^{-1/4}\operatorname{dist}(y,\{0,1\})$; integrating the strips shows the squared errors and cutoff-derivative terms are $O(\epsilon)$. Thus $\eta_\epsilon u\to u$ in $H^1(\Omega)$, so the closure definition gives $u\in H^1_0(\Omega)$. [F1, given, algebra]

2.1 Choose $0<\delta<1/12$ so small that $c(y')/c(y)\le1.05$ whenever $0<x<\delta$, $1/3\le y\le2/5$, and $y\le y'\le y+x$. For the pairs below, $x'\le3x<1/4$, so both points lie where $\chi=1$; also $c(y)$ is bounded below by a positive constant on this $y$ interval. For $2x\le x'\le3x$ and $y\le y'\le y+x$, the values of $\partial_xu(x,y)$ and $\partial_xu(x',y')$ then differ by at least $\tfrac34c(y)x^{-1/4}\bigl(1-1.05\,2^{-1/4}\bigr).$ Thus $|\partial_xu(x,y)-\partial_xu(x',y')|\ge Cx^{-1/4}$. Also $|(x,y)-(x',y')|\le\sqrt5x$. By [F2], restricting the $H^{1/2}$ Gagliardo integral to these pairs gives a lower bound $C\int_0^\delta x^{-1/2}x^{-3}\,x^2\,dx =C\int_0^\delta x^{-3/2}\,dx=\infty,$ where the two factors of $x$ are the lengths of the $x'$ and $y'$ intervals. Thus $\partial_xu\notin H^{1/2}(\Omega)$. [A1, F2, step 1.1, given, algebra]

3.1 Let $D=\operatorname{diam}(\Omega)=\sqrt2$. For $1/2<r<1$ and $x\ne y$, $|x-y|^{-3}=|x-y|^{2r-1}|x-y|^{-2-2r}\le D^{2r-1}|x-y|^{-2-2r}$. Integrating gives $[q]_{H^{1/2}(\Omega)}^2\le D^{2r-1}[q]_{H^r(\Omega)}^2$ for every $q\in H^r(\Omega)$, so $H^r(\Omega)\subset H^{1/2}(\Omega)$. If $u\in H^{1+r}(\Omega)$ for such an $r$, [F4] would imply $\partial_xu\in H^r(\Omega)$ and hence $H^{1/2}(\Omega)$, contradicting step 2.1. Thus no exponent $r\in(1/2,1)$ satisfies the refuted claim. [A1, F4, step 2.1, given, algebra]

3.2 It remains to exclude $r=1$. For $0<x<1/4$, the cutoff is one and $-\Delta u=\tfrac{3}{16}c(y)x^{-5/4}+2x^{3/4}$. On $1/3\le y\le2/5$, $c(y)$ is bounded below by a positive number, so this classical Laplacian is bounded below by $c_0x^{-5/4}$ for some $c_0>0$; its square has divergent integral at $x=0$. Since the distributional Laplacian agrees with this classical function in the open square, it has no $L^2$ representative. By [F5], $u\notin H^2(\Omega)=W^{2,2}(\Omega)$. The example still defines a bounded weak functional on $H^1_0(\Omega)$ by $v\mapsto\int_\Omega\nabla u\cdot\nabla v$, using Holder [F5]; it does not supply the $L^2$ source assumed by the method. Since the example has no $H^{1+r}$ regularity with $r>1/2$, it does not satisfy the trace hypothesis in [F3], and no normal-gradient trace conclusion is claimed. [A1, F3, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 Step 3.1 excludes every $r\in(1/2,1)$, and step 3.2 excludes $r=1$. These are all exponents in the asserted range, so the counterexample refutes the Statement. [step 3.1, step 3.2] ∎
