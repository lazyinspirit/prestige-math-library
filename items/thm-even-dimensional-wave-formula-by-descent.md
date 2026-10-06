---
id: thm-even-dimensional-wave-formula-by-descent
kind: theorem
title: "The even-dimensional wave formula by descent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
proof_strategy: direct
deps: [thm-odd-dimensional-wave-formula-by-spherical-means, lem-spherical-surface-integrals-project-onto-weighted-ball-integrals, def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, thm-algebra-of-derivatives, thm-poisson-formula-for-the-two-dimensional-wave-equation, def-wave-equation-cauchy-data-and-wave-speed, def-countable-choice]
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
      locator: "§7.2, printed p. 175, even-dimensional formula (7.24) and Theorem 7.8"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.4, printed pp. 285–286: method of descent from three to two dimensions"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n=2k\ge2$ be even, $c>0$, $u_0\in C^{k+2}(\mathbb R^n)$, $u_1\in C^{k+1}(\mathbb R^n)$, let $W$ be the weighted ball integral of [[def-spherical-mean-of-space-dependent-data]] and put $D_t=t^{-1}\partial_t$. Then
$$u(x,t):=c^{1-n}\Bigl[\frac{\partial}{\partial t}D_t^{k-1}W_{u_0}(x,ct)+D_t^{k-1}W_{u_1}(x,ct)\Bigr]$$
defines a $C^2$ function on $\mathbb R^n\times(0,\infty)$ solving $u_{tt}=c^2\Delta u$. For $n=2$ ($k=1$) this is exactly Poisson's formula [[thm-poisson-formula-for-the-two-dimensional-wave-equation]], and the factor $c^{1-n}$ is the exact rescaling of the unit-speed formula obtained by substituting $s=ct$ in the $(n+1)$-dimensional odd-dimensional formula.

## Facts & Assumptions

**Given:** Countable Choice, $n=2k\ge2$, $c>0$, $u_0\in C^{k+2}(\mathbb R^n)$, $u_1\in C^{k+1}(\mathbb R^n)$, and the cylindrical extensions $U_j(\xi,z):=u_j(\xi)$ to $\mathbb R^{n+1}$.

[F1] For odd $m=2k+1$ and data in $C^{k+2}$ respectively $C^{k+1}$, the formula of [[thm-odd-dimensional-wave-formula-by-spherical-means]] with $D_t=t^{-1}\partial_t$ defines a $C^2$ solution of $v_{tt}=c^2\Delta v$ on $\mathbb R^m\times(0,\infty)$.

[F2] For even $n$, $t^{n-1}M^{(n+1)}_{U}((x,0),ct)=\frac{(n-1)!!}{c^{n-1}}W_{u}(x,ct)$ for the cylindrical extension of $u$, where $M^{(n+1)}$ is the spherical mean in $n+1$ variables ([[lem-spherical-surface-integrals-project-onto-weighted-ball-integrals]]).

[F3] For $n=2$ and $k=1$ the formula reduces to Poisson's formula [[thm-poisson-formula-for-the-two-dimensional-wave-equation]] with $W_f(x,ct)=\frac{1}{2\pi}\int_{B_{ct}(x)}f(y)(c^2t^2-|y-x|^2)^{-1/2}dy$ ([[def-spherical-mean-of-space-dependent-data]]).

[F4] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules, and constants commute with differentiation ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Descent. The number $n+1=2k+1$ is odd, and $U_0\in C^{k+2}(\mathbb R^{n+1})$, $U_1\in C^{k+1}(\mathbb R^{n+1})$, so [F1] applies in dimension $n+1$ with the same $k$: $V(\xi,z,t):=\frac{1}{(n-1)!!}\bigl[\partial_tD_t^{k-1}\bigl(t^{n-1}M^{(n+1)}_{U_0}((\xi,z),ct)\bigr)+D_t^{k-1}\bigl(t^{n-1}M^{(n+1)}_{U_1}((\xi,z),ct)\bigr)\bigr]$ is $C^2$ on $\mathbb R^{n+1}\times(0,\infty)$ with $V_{tt}=c^2\Delta_{n+1}V$. Since $U_j(\xi+ct\omega,z+ct\omega_{n+1})=u_j(\xi+ct\omega)$ is independent of $z$, the means of $U_0,U_1$ at centre $(\xi,z)$ do not depend on $z$; hence $V$ does not depend on $z$, so $\partial_z^2V=0$, $\Delta_{n+1}V=\Delta_nV$, and the restriction $u(x,t):=V(x,0,t)$ is a $C^2$ function on $\mathbb R^n\times(0,\infty)$ with $u_{tt}=c^2\Delta_nu$. [F1, algebra]

1.2 Rewriting with the weighted ball integral. By [F2] with the cylindrical extensions, $t^{n-1}M^{(n+1)}_{U_j}((x,0),ct)=\frac{(n-1)!!}{c^{n-1}}W_{u_j}(x,ct)$ for $j=0,1$; substituting into the definition of $V$ and using [F4] to move the constant $\frac{(n-1)!!}{c^{n-1}}$ and the factor $\frac{1}{(n-1)!!}$ through the $t$-derivatives gives $u(x,t)=c^{1-n}\bigl[\partial_tD_t^{k-1}W_{u_0}(x,ct)+D_t^{k-1}W_{u_1}(x,ct)\bigr]$. [F2, F4, algebra]

1.3 The two-dimensional case. For $n=2$, $k=1$ and $c^{1-n}=c^{-1}$, so the formula reads $c^{-1}\bigl[\partial_tW_{u_0}(x,ct)+W_{u_1}(x,ct)\bigr]$, which by [F3] is exactly the Poisson expression of [[thm-poisson-formula-for-the-two-dimensional-wave-equation]]. [F3, algebra]

2.1 Therefore the displayed even-dimensional formula defines a $C^2$ solution of the homogeneous wave equation, it reduces to Poisson's formula when $n=2$, and its prefactor $c^{1-n}$ is the one produced by substituting $s=ct$ in the $(n+1)$-dimensional odd formula. [given] ∎ 