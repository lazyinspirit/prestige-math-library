---
id: thm-retraction-armijo-acceptance-and-step-lower-bound
kind: theorem
title: Uniform pullback smoothness guarantees an Armijo step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-riemannian-armijo-backtracking
  - thm-stiefel-retractions-are-first-order
  - def-riemannian-gradient-of-a-smooth-function
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 4 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap4.pdf"
    locator: "Complete 37-page chapter, §4.2: retraction Armijo search and sufficient decrease."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§4.3–4.5: line searches and pullback regularity."
  - title: "Nicolas Boumal, P.-A. Absil, and Coralia Cartis, Global rates of convergence for nonconvex optimization on manifolds (2018), arXiv v2"
    url: "https://arxiv.org/pdf/1605.08101"
    locator: "Complete 33-page PDF, §2.2 and Appendices B–C: Armijo steps, local retraction radius and sufficient-decrease proof."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $M=\operatorname{St}(n,r)$ or $\operatorname{Gr}(r,n)$ be compact, let
$f:M\to\mathbb R$ be smooth, and let $R$ be a QR or polar retraction with the
first-order property of [[thm-stiefel-retractions-are-first-order]]. Write
$\widehat f_x(\eta)=f(R_x(\eta))$. Assume a uniform bound
$\|\operatorname{grad}f(x)\|\le G$ and a constant $L_R\ge0$ such that, for
every $x$ and $\|\eta\|\le1$,
$$\|\operatorname{grad}\widehat f_x(\eta)-\operatorname{grad}\widehat f_x(0)\|\le L_R\|\eta\|.$$
For $a\in(0,1)$ and a nonstationary iterate, set
$$\delta=\min\{1,(2G)^{-1},2(1-a)/L_R\},$$
where a reciprocal of zero is interpreted as $+\infty$. If the finite
backtracking budget tests some $t_j=\beta^j\le\delta$, then it accepts a step;
the first accepted step obeys $t\ge\beta\delta$. For $0<t\le\delta$, the bound
$t\|\operatorname{grad}f(x)\|\le1/2$ keeps the pullback argument inside its
assumed unit tangent ball; an earlier accepted trial may be larger.

## Facts & Assumptions

**Given:** The compact manifold, smooth objective, first-order retraction, constants $G,L_R,a,\beta$, and finite budget reaching $\delta$.

[F1] The retraction pullback has derivative at zero equal to the original tangent direction ([[thm-stiefel-retractions-are-first-order]]).

[F2] The Riemannian gradient represents the differential in the chosen metric ([[def-riemannian-gradient-of-a-smooth-function]]).

[F3] The finite Armijo search tests $t_j=\beta^j$ and accepts only the sufficient-decrease inequality ([[alg-riemannian-armijo-backtracking]]).

[F4] The Euclidean inner product obeys Cauchy–Schwarz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** integrate the Lipschitz pullback-gradient bound along the negative-gradient segment.

1.1 Since $g\ne0$ and $\|g\|\le G$, we have $G>0$. For $0<t\le\delta$, $\eta=-tg$ has norm $t\|g\|\le tG\le1/2$, so the entire segment $s\eta$, $0\le s\le1$, lies in the unit ball. [given, algebra]

2.1 By [F1] and [F2], $D\widehat f_x(0)[\eta]=\langle g,\eta\rangle=-t\|g\|^2$. The fundamental theorem of calculus along $s\mapsto s\eta$ and the assumed Lipschitz bound give $$\widehat f_x(\eta)\le f(x)-t\|g\|^2+\int_0^1 L_R s\|\eta\|^2\,ds =f(x)-t\|g\|^2+\tfrac12L_Rt^2\|g\|^2.$$ The integral bound uses [F4] to estimate the inner product of the gradient difference with $\eta$. If $L_R=0$ the last error is zero; otherwise $t\le2(1-a)/L_R$ makes the right side at most $f(x)-a t\|g\|^2$. Thus every tested $t\le\delta$ satisfies the Armijo test in [F3]. [F1, F2, F3, F4, given, step 1.1, algebra]

3.1 Let $j$ be the first tested index with $\beta^j\le\delta$. By step 2.1 this trial passes, so the algorithm stops no later than $j$. If $j=0$, then $t=1\ge\beta\delta$ because $\delta\le1$. If $j>0$, minimality gives $\beta^{j-1}>\delta$, hence $\beta^j>\beta\delta$. Any earlier accepted grid point is larger still. [F3, given, step 2.1, algebra] ∎
