---
id: thm-poincare-inequality-for-w-one-p-zero
kind: theorem
title: "The Poincare inequality for zero-boundary Sobolev closures on domains bounded in one direction"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-wkp-zero-as-a-sobolev-closure, cor-vector-valued-ftc-and-lipschitz-bound, thm-holder-inequality-for-integrals, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Theorem 3.10 and its proof, printed pp. 68-69"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4 §4.4, Theorem 4.9 and its proof, printed p. 98 (the source proves p=2; the present argument uses Holder for general p)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 9 §9.3, the first half of Theorem 9.34, printed pp. 219-220"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open and bounded in one direction: there are a unit vector $e$ and $a<b$ with $a<x\cdot e<b$ for every $x\in\Omega$. Let $1\le p<\infty$. Then $\|u\|_{L^p(\Omega)}\le C(p)\,(b-a)\,\|Du\|_{L^p(\Omega)}$ for every $u\in W^{1,p}_0(\Omega;\mathbb K)$.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ bounded in the direction $e\in S^{n-1}$ between $a<b$; an exponent $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W_0^{1,p}(\Omega;\mathbb K)$.

[F1] $W_0^{1,p}(\Omega;\mathbb K)$ is the closure in $W^{1,p}(\Omega;\mathbb K)$ of the compactly supported smooth functions $C_c^\infty(\Omega;\mathbb K)$, and every such smooth function lies in $W^{1,p}$ with its classical derivatives as weak derivatives ([[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Vector-valued fundamental theorem: if $f:[a,b]\to\mathbb R^m$ is differentiable with integrable derivative, then $\int_a^bf'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F3] Holder's inequality for integrals ([[thm-holder-inequality-for-integrals]]).

[F4] Tonelli's theorem on sigma-finite products, allowing iterated integrals of nonnegative measurable functions in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Linear change of variables: an invertible linear map $T$ of $\mathbb R^n$ scales Lebesgue measure by $|\det T|$ and the integral substitution formula holds for nonnegative Borel integrands; in particular an orthogonal change of orthonormal coordinates preserves the integral ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F6] $W^{1,p}$ consists of $L^p$ classes with weak derivatives in $L^p$ and the norm is the $\ell^p$ norm of $u$ and its coordinate weak derivatives ([[def-sobolev-space-wkp-and-its-norm]]); $L^p$ classes are almost-everywhere classes ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F7] Countable Choice, assumed for the measure and closure interfaces above ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The smooth case: pointwise bound. Let $\varphi\in C_c^\infty(\Omega;\mathbb K)$ and extend it by zero to $\mathbb R^n$. Write $x=x_\perp+x_ne$ with $x_\perp\perp e$. For each fixed $x_\perp$, the profile $g(s):=\varphi(x_\perp+se)$ is smooth and supported in $(a,b)$, since $\Omega\subset\{a<y\cdot e<b\}$. If $x=x_\perp+x_ne\in\Omega$, then $a<x_n<b$ and $g(a)=0$. Applying [F2] componentwise (in $\mathbb R$ or $\mathbb R^2$ according to the scalar field) gives $\varphi(x)=g(x_n)-g(a)=\int_a^{x_n}D\varphi(x_\perp+se)\cdot e\,ds$. Hence $|\varphi(x)|\le\int_a^{x_n}|D\varphi(x_\perp+se)|\,ds$. Holder [F3], followed by $x_n-a\le b-a$ and enlargement of the integration interval, yields $|\varphi(x)|^p\le(b-a)^{p-1}\int_a^b|D\varphi(x_\perp+se)|^p\,ds$. [F2, F3, given, algebra]

2.1 The smooth case: integration. If $n=1$, then $|\Omega|\le b-a$, so integrating step 1.1 gives $\int_\Omega|\varphi|^p\le(b-a)^p\int_a^b|D\varphi(se)|^p\,ds=(b-a)^p\int_\Omega|D\varphi|^p$ by the change of variable $y=se$ and the support of $D\varphi$ in $\Omega$. Now suppose $n\ge2$. Choose orthonormal coordinates with last vector $e$ and write $x=x_\perp+x_ne$; by [F5] integration on $\mathbb R^n$ is integration over $(x_\perp,x_n)\in\mathbb R^{n-1}\times\mathbb R$. For each $x_\perp$, the slice $S_{x_\perp}:=\{x_n:(x_\perp,x_n)\in\Omega\}$ is a measurable subset of $(a,b)$, so $|S_{x_\perp}|\le b-a$. Integrating step 1.1 over $\Omega$ and applying Tonelli [F4] gives $\int_\Omega|\varphi|^p\,dx\le(b-a)^{p-1}\int_{\mathbb R^{n-1}}\int_{S_{x_\perp}}\int_a^b|D\varphi(x_\perp+se)|^p\,ds\,dx_n\,dx_\perp\le(b-a)^p\int_{\mathbb R^{n-1}}\int_a^b|D\varphi(x_\perp+se)|^p\,ds\,dx_\perp$. The last integral equals $\int_{\mathbb R^n}|D\varphi|^p\,dx=\int_\Omega|D\varphi|^p$, since $\varphi$ and its gradient vanish outside $\Omega$ and $\Omega$ lies in the slab. Therefore $\|\varphi\|_{L^p(\Omega)}^p\le(b-a)^p\|D\varphi\|_{L^p(\Omega)}^p$. [F4, F5, step 1.1, algebra]

3.1 The general class. By [F1] there are $\varphi_k\in C_c^\infty(\Omega;\mathbb K)$ with $\varphi_k\to u$ in $W^{1,p}(\Omega;\mathbb K)$; by step 2.1, $\|\varphi_k\|_{L^p}\le(b-a)\|D\varphi_k\|_{L^p}$ for every $k$. Both sides are continuous in the $W^{1,p}$ norm: $\|\varphi_k\|_p\to\|u\|_p$ and $\|D\varphi_k\|_p\to\|Du\|_p$ by [F6]. Passing to the limit gives $\|u\|_{L^p(\Omega)}\le(b-a)\|Du\|_{L^p(\Omega)}$, so the asserted inequality holds with $C(p)=1$. [F1, F6, F7, step 2.1, algebra] ∎

## Source notes

Kinnunen's Theorem 3.10 proves the estimate on bounded open sets by taking the primitive in one coordinate direction and applying Holder; the proof above runs the same argument along the unit vector $e$ of the hypothesis, uses the orthonormal coordinate decomposition for the integration, and then extends from $C_c^\infty(\Omega)$ to $W_0^{1,p}(\Omega)$ by the definition of the latter as a closure. The constant obtained is $1$, independent of $p$; the statement permits a $p$-dependent constant.
