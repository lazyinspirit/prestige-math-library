---
id: lem-euler-poisson-darboux-equation-for-spherical-means
kind: lemma
title: "The Euler–Poisson–Darboux equation for spherical means"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
proof_strategy: direct
deps: [def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, lem-ball-and-sphere-mean-radial-identity, lem-radial-derivative-of-a-spherical-average, def-laplacian-of-a-c2-function, def-ball-average-operator-on-r-n, thm-algebra-of-derivatives, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 173, Euler–Poisson–Darboux equation (7.17) and Problem 7.10"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.3, printed p. 285, Remark 9.1.3(a): $rM_r(u,x)$ satisfies the one-dimensional wave equation"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.1, printed p. 20, Theorem 2.1 and equation (2.4): the ball–sphere mean identities reused by the radial computation"
---


## Statement

Assume the Axiom of Countable Choice, let $n\ge1$, let $f\in C^2(\mathbb R^n)$ and let $M=M_f$ be the spherical mean of [[def-spherical-mean-of-space-dependent-data]]. Then for every $x\in\mathbb R^n$ and $r>0$
$$\Delta_xM(x,r)=M_{rr}(x,r)+\frac{n-1}{r}M_r(x,r).$$
The right-hand side extends continuously to $r=0$ with value $\Delta f(x)$: with $M(x,0):=f(x)$ one has $M_r(x,r)\to0$ and $\bigl(M_{rr}+\frac{n-1}{r}M_r\bigr)(x,r)\to\Delta f(x)$ as $r\downarrow0$. If $u\in C^2(\mathbb R^n\times I)$ is a classical solution of $\Box_cu=0$ on an interval $I$, then its space-time mean $(x,r,t)\mapsto M_u(x,r,t):=\omega_{n-1}^{-1}\int_{S^{n-1}}u(x+r\omega,t)\,d\sigma(\omega)$ satisfies $\partial_t^2M_u=c^2\bigl(M_{rr}+\frac{n-1}{r}M_r\bigr)$. No equation for $f$ is needed for the identity itself.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $f\in C^2(\mathbb R^n)$, the spherical mean $M=M_f$ with $M(x,0)=f(x)$, and, when stated, a $C^2$ solution $u$ of $\Box_cu=0$ on $\mathbb R^n\times I$.

[F1] For $k\ge1$ and $h\in C^k(\mathbb R^n)$, $(x,r)\mapsto M_h(x,r)$ is $C^k$ on $\mathbb R^n\times(0,\infty)$ with all derivatives obtained by differentiating $h$ under the sphere integral; it extends continuously to $r=0$ with $M_h(x,0)=h(x)$, and its radial derivative tends to $0$ uniformly on compacta ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F2] If $g\in C^2(\mathbb R^n)$ and $r>0$, then $\partial_rM_g(x,r)=\frac rnA_{\Delta g}(x,r)$, where $A_{\Delta g}(x,r)=|B_r(x)|^{-1}\int_{B_r(x)}\Delta g$ is the ball average ([[lem-radial-derivative-of-a-spherical-average]], [[def-ball-average-operator-on-r-n]]).

[F3] For $h\in C^0(\mathbb R^n)$ one has $M_h(x,r)=A_h(x,r)+\frac rn\partial_rA_h(x,r)$ for all $r>0$ ([[lem-ball-and-sphere-mean-radial-identity]]).

[F4] A continuous real function on a nonempty compact metric space is bounded; Euclidean closed balls are compact ([[thm-extreme-value-metric]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

## Proof

1.1 The spatial Laplacian passes under the sphere integral: by [F1] the map $(x,r)\mapsto M(x,r)$ is $C^2$, and differentiating the defining integral twice in $x$, $\Delta_xM(x,r)=\omega_{n-1}^{-1}\int_{S^{n-1}}\Delta f(x+r\omega)\,d\sigma(\omega)=M_{\Delta f}(x,r)$ for every $r>0$. [F1, algebra]

1.2 Radial identities. Put $A(x,r):=A_{\Delta f}(x,r)$. Applying [F2] only to $f$ gives $M_r(x,r)=\frac rnA(x,r)$. Since $\Delta f$ is continuous, [F3] applied to $\Delta f$ gives $M_{\Delta f}(x,r)=A(x,r)+\frac rn\partial_rA(x,r)$. Differentiating the first identity in $r$ gives $M_{rr}(x,r)=\frac1nA(x,r)+\frac rn\partial_rA(x,r)$; therefore $M_{rr}+\frac{n-1}{r}M_r=\frac1nA+\frac rn\partial_rA+\frac{n-1}{n}A=A+\frac rn\partial_rA=M_{\Delta f}(x,r)=\Delta_xM(x,r)$. The radial-derivative formula is used only with the $C^2$ function $f$; no differentiability of $\Delta f$ is assumed. [F2, F3, algebra]

1.3 The limits at $r\downarrow0$. For $0<r\le1$ the bound $|A_{\Delta f}(x,r)|\le\sup_{B_1(x)}|\Delta f|<\infty$ holds, the supremum being finite by [F4]; hence $M_r(x,r)=\frac rnA_{\Delta f}(x,r)\to0$. Moreover the identity just proved gives $M_{rr}(x,r)+\frac{n-1}{r}M_r(x,r)=M_{\Delta f}(x,r)=\Delta_xM(x,r)$. Since $\Delta f$ is continuous at $x$, $|M_{\Delta f}(x,r)-\Delta f(x)|\le\sup_{\omega\in S^{n-1}}|\Delta f(x+r\omega)-\Delta f(x)|\to0$ as $r\downarrow0$. [F4, algebra]

1.4 The space-time version. If $u\in C^2$ solves $\Box_cu=0$, applying the differentiation-under-the-sphere-integral computation of [F1] to the $C^2$ function $(x,t)\mapsto u(x,t)$ yields $\Delta_xM_u(x,r,t)=M_{\Delta_xu}(x,r,t)$ and $\partial_t^2M_u(x,r,t)=M_{u_{tt}}(x,r,t)$ for all $r>0$ and $t\in I$. Since $u_{tt}=c^2\Delta u$, this gives $\partial_t^2M_u=c^2M_{\Delta u}=c^2\Delta_xM_u$; and the identity of the first two steps applied to the $C^2$ spatial function $u(\cdot,t)$ gives $\Delta_xM_u(x,r,t)=M_{rr}(x,r,t)+\frac{n-1}{r}M_r(x,r,t)$. Substituting, $\partial_t^2M_u=c^2\bigl(M_{rr}+\frac{n-1}{r}M_r\bigr)$. [F1, algebra]

2.1 Collecting: the Euler–Poisson–Darboux identity holds for every $C^2$ datum, its right-hand side has the stated continuous extension at $r=0$ with value $\Delta f(x)$, and the space-time means of solutions satisfy the same radial equation with two time derivatives on the left. [given] ∎ 
