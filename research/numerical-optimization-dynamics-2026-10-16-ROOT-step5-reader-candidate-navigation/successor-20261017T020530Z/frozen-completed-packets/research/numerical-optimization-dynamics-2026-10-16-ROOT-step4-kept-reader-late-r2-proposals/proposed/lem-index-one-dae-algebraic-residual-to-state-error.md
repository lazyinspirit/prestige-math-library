---
id: lem-index-one-dae-algebraic-residual-to-state-error
title: "An index-one algebraic residual locally bounds algebraic state error"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - thm-index-one-dae-implicit-function-reduction
  - lem-fundamental-theorem-and-integration-by-parts
  - lem-continuous-functions-riemann-integrable
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375: the regular algebraic equation defines a local branch."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed p. 170: algebraic-variable errors depend on regularity and numerical residuals."
---

## Statement

Let $K$ be a compact set of base points $(t,x)$ in a selected branch chart from [[thm-index-one-dae-implicit-function-reduction]], and put $z_*=\psi(t,x)$. Suppose $g(t,x,\cdot)$ is $C^2$ on $B(z_*,\rho)$ for every $(t,x)\in K$. Let $G_*(t,x)=g_z(t,x,\psi(t,x))$. Assume common constants $\gamma>0$, $\Lambda\ge0$, and $\rho>0$ satisfy

$$
\|G_*(t,x)v\|_2\ge\gamma\|v\|_2\quad(v\in\mathbb R^m),\qquad \|g_z(t,x,z)-G_*(t,x)\|_{\mathrm{op}}\le\Lambda\|z-\psi(t,x)\|_2
$$

for every $(t,x)\in K$ and $z\in B(\psi(t,x),\rho)$; if $\Lambda>0$, assume $\rho\le\gamma/(\sqrt m\,\Lambda)$. Then, uniformly for all such base points and candidates,

$$
\|z-z_*\|_2\le \frac{2}{\gamma}\|g(t,x,z)\|_2.
$$

The estimate is local: it applies only to candidates in the specified branch ball and does not turn a residual into a global branch or uniqueness certificate.

## Facts & Assumptions

**Given:** The compact base set in a selected $C^2$ branch chart, the common branch radius, and the uniform lower singular-value and Jacobian-Lipschitz bounds in the Statement.

[F1] [[thm-index-one-dae-implicit-function-reduction]]: $g(t,x,\psi(t,x))=0$ on the selected local branch, and $g_z(t,x,\psi(t,x))$ is invertible at each base point.

[F2] [[lem-fundamental-theorem-and-integration-by-parts]]: a scalar $C^1$ function on an open interval containing $[0,1]$ satisfies $r(1)-r(0)=\int_0^1 r'(s)\,ds$. The continuous scalar Riemann integral is monotone in its integrand. [[lem-continuous-functions-riemann-integrable]]

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality.



## Proof

1.1 Fix any $(t,x)\in K$, put $z_*=\psi(t,x)$, and set $\delta=z-z_*$. If $\delta=0$, the claimed remainder is zero. Otherwise the whole segment $z_*+s\delta$, $0\le s\le1$, lies in the open branch ball and extends slightly at both ends within it. For each component set $r_i(s)=g_i(t,x,z_*+s\delta)-s(G_*(t,x)\delta)_i$. Differentiability along the affine line gives $r_i'(s)=((g_z(t,x,z_*+s\delta)-G_*(t,x))\delta)_i$, continuously in $s$. Since $g(t,x,z_*)=0$, [F2] gives $g(t,x,z)=G_*(t,x)\delta+R$, where $$R_i=\int_0^1((g_z(t,x,z_*+s\delta)-G_*(t,x))\delta)_i\,ds.$$ By the assumed operator-norm bound, the absolute value of this scalar integrand is at most $\Lambda s\|\delta\|_2^2$. Monotonicity in [F2] and $\int_0^1s\,ds=1/2$ (apply the same fundamental theorem to $s^2/2$) yield $|R_i|\le(\Lambda/2)\|\delta\|_2^2$. Aggregating the $m$ components gives $\|R\|_2\le(\sqrt m\,\Lambda/2)\|\delta\|_2^2$. [given, F1, F2]

2.1 The common lower singular-value bound gives $\|G_*(t,x)\delta\|_2\ge\gamma\|\delta\|_2$. Using [F3] in the form $\|G_*(t,x)\delta+R\|_2\ge\|G_*(t,x)\delta\|_2-\|R\|_2$, we obtain $\|g(t,x,z)\|_2\ge(\gamma-(\sqrt m\,\Lambda/2)\|\delta\|_2)\|\delta\|_2$. If $\Lambda>0$, $\|\delta\|_2<\rho\le\gamma/(\sqrt m\,\Lambda)$ makes the parenthesis at least $\gamma/2$; if $\Lambda=0$, it equals $\gamma$. In either case it is at least $\gamma/2$, with the same constants for every $(t,x)\in K$. [given, F1, F3, step 1.1, algebra]

3.1 Dividing the inequality in step 2.1 by $\gamma/2>0$ proves the asserted residual-to-state estimate for every candidate in the branch ball. [given, step 2.1, algebra] ∎
