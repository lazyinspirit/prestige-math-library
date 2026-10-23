---
id: thm-fd-reduced-ode-global-energy
kind: theorem
title: Skew reduced convection and global finite dynamics
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-solenoidal-reduced-ode
  - thm-picard-lindelof-local-existence-and-uniqueness
dependency_roles:
  def-fd-solenoidal-reduced-ode: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
proof_strategy: contradiction
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Emil Wiedemann, Lecture Notes: Navier-Stokes Equations, edited by Jack Skipper, Universität Ulm, Winter 2018/19"
      url: "https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf"
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2019, Stanford University"
      url: "https://virtualmath1.stanford.edu/~ryzhik/STANFORD/STANF256B-19/notes-256B-19.pdf"
---

## Statement

Assume Countable Choice, meaning every sequence of nonempty sets admits a choice function. Let $d\in\{1,2,3\}$, $r\ge1$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with probability measure $d\mu=(2\pi)^{-d}dx$. In the supplied Fourier-Sobolev convention, $H^0(Q_d;\mathbb R^d)$ is the completion of finite real trigonometric polynomials in the norm $\|q\|_{H^0}^2=\sum_{k\in\mathbb Z^d}|\widehat q(k)|^2$, with unique $L^2$ representatives and conjugate-symmetric coefficients for real classes. Let $v_1,\ldots,v_r\in H^0(Q_d;\mathbb R^d)$ have smooth $2\pi$-periodic representatives satisfying $\operatorname{div}v_i=0$ and $\int_{Q_d}v_i\cdot v_j\,d\mu=\delta_{ij}$. Fix $\nu\ge0$ and $a^0\in\mathbb R^r$, set $u_a=\sum_i a_i v_i$, and define

$$A_{ij}=\int_{Q_d}\nabla v_j:\nabla v_i\,d\mu,\qquad c_{ijk}=\int_{Q_d}((v_j\cdot\nabla)v_k)\cdot v_i\,d\mu,$$

where $\nabla v_j:\nabla v_i=\sum_{\ell,m=1}^d(\partial_{x_m}v_j^\ell)(\partial_{x_m}v_i^\ell)$ and $((v_j\cdot\nabla)v_k)^\ell=\sum_{m=1}^d v_j^m\partial_{x_m}v_k^\ell$. Consider the coefficient initial-value system

$$a_i'(t)+\sum_{j,k=1}^r c_{ijk}a_j(t)a_k(t)+\nu\sum_{j=1}^r A_{ij}a_j(t)=0,\qquad a_i(0)=a_i^0,\quad i=1,\ldots,r.$$

There is exactly one solution $a\in C^1([0,\infty),\mathbb R^r)$ of this system. For every $t\ge0$, it satisfies

$$\frac12\frac{d}{dt}|a(t)|^2+\nu\int_{Q_d}|\nabla u_{a(t)}|^2\,d\mu=0,$$

$$|a(t)|^2+2\nu\int_0^t\int_{Q_d}|\nabla u_{a(s)}|^2\,d\mu\,ds=|a^0|^2.$$

This is a global result for the specified finite coefficient ODE only; it asserts no convergence to, existence of, or uniqueness for a solution of the infinite-dimensional Navier–Stokes equations. The Countable Choice assumption is inherited from the periodic Fourier-Sobolev framework; the finite-dimensional proof makes no further choice.

## Statement references

[[def-fd-solenoidal-reduced-ode|Finite solenoidal Galerkin coefficient dynamics]]

[[thm-picard-lindelof-local-existence-and-uniqueness|Picard–Lindelöf local existence and uniqueness]]

[Wiedemann, §3.1.2 and §3.2, Theorem 3.4 proof Steps 1–2](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf)

[Ryzhik, §5, equations (5.24)–(5.35)](https://virtualmath1.stanford.edu/~ryzhik/STANFORD/STANF256B-19/notes-256B-19.pdf)

## Facts & Assumptions

**Given:** The finite smooth solenoidal orthonormal family, normalized periodic measure, parameter $\nu\ge0$, initial vector $a^0$, and the coefficient system in the Statement.

[F1] [[def-fd-solenoidal-reduced-ode]]: The classes lie in the supplied $H^0(Q_d;\mathbb R^d)$ Fourier completion with unique normalized-$L^2$ representatives; the chosen representatives are smooth, periodic, divergence-free, and orthonormal, and the coefficient integrals and ODE are defined from them. The supplier assumes Countable Choice.

[F2] [[thm-picard-lindelof-local-existence-and-uniqueness]]: A continuous vector field locally Lipschitz in the state variable on an open ODE domain has a unique local solution through each initial point.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: Any two solutions through the same initial data agree on every common subinterval containing the initial time.

[A1] The Euclidean space $\mathbb R^r$ is complete: a Cauchy sequence in its Euclidean norm converges coordinatewise because $\mathbb R$ is complete.

## Proof

1.1 Write the system as $a'=F(a)$, where $F_i(a)=-\sum_{j,k}c_{ijk}a_ja_k-\nu\sum_jA_{ij}a_j$. Each component is a polynomial, so $F$ is continuous; its derivative is bounded on every closed ball, and integrating that derivative along the line segment between two points in a ball shows that $F$ is Lipschitz there. Thus $F$ is locally Lipschitz on the open domain $\mathbb R\times\mathbb R^r$, and [F2] applies. [given, F1, F2, algebra]

2.1 Consider all solutions through $(0,a^0)$ on open intervals containing $0$. This collection is nonempty by [F2]. Any two such solutions agree on the intersection of their intervals by [F3]; hence their interval union $I$ is an open interval and their common values define one solution $a:I\to\mathbb R^r$. Every solution through the same data is a restriction of this union solution. [given, F2, F3, step 1.1, construct]

2.2 For each $i,j,k$, periodic integration by parts and $\operatorname{div}v_j=0$ give $c_{ijk}+c_{kji}=\int_{Q_d}v_j\cdot\nabla(v_k\cdot v_i)\,d\mu=\int_{Q_d}\operatorname{div}(v_j(v_k\cdot v_i))\,d\mu=0$, since opposite faces of a periodic cell cancel. Thus $c_{kji}=-c_{ijk}$; the finite contraction $S=\sum_{i,j,k}c_{ijk}a_i a_j a_k$ satisfies $S=-S$ after swapping $i$ and $k$, so $S=0$. Also $\sum_{i,j}A_{ij}a_i a_j=\int_{Q_d}|\nabla u_a|^2\,d\mu$. Multiplying the coefficient equations by $a_i$, summing over $i$, and using $\frac{d}{dt}\frac12|a|^2=\sum_i a_i a_i'$ proves the energy identity on $I$. Suppose for contradiction that the positive endpoint $\beta:=\sup(I\cap(0,\infty))$ is finite. [given, F1, step 1.1, assume-contra, algebra]

3.1 Integrating the identity from $0$ to any $t\in I\cap[0,\infty)$ gives $|a(t)|^2+2\nu\int_0^t\int_{Q_d}|\nabla u_{a(s)}|^2\,d\mu\,ds=|a^0|^2$. Because $\nu\ge0$, this implies $|a(t)|\le R:=|a^0|$ for every $0\le t<\beta$. [given, step 2.2, algebra]

4.1 On $|a|\le R$, each component of $F$ obeys $|F_i(a)|\le R^2\sum_{j,k}|c_{ijk}|+\nu R\sum_j|A_{ij}|$, so $|F(a)|\le M$ for the finite constant $M=\bigl(\sum_i(R^2\sum_{j,k}|c_{ijk}|+\nu R\sum_j|A_{ij}|)^2\bigr)^{1/2}$. Therefore $|a(t)-a(s)|\le M|t-s|$ for $0\le s<t<\beta$ by integrating $a'=F(a)$. The curve is Cauchy as $t\uparrow\beta$, so [A1] gives a limit $a_*\in\mathbb R^r$. [given, A1, step 1.1, step 3.1, algebra]

5.1 Extend $a$ continuously by $a(\beta)=a_*$. For $h<0$, the quotient $(a(\beta+h)-a_*)/h$ is the average of $F(a(s))$ over $[\beta+h,\beta]$, so it tends to $F(a_*)$ as $h\uparrow0$. Applying [F2] at $(\beta,a_*)$ gives a local solution $b$ to the right of $\beta$ with $b'(\beta)=F(a_*)$. Define the joined curve to equal $a$ before $\beta$ and $b$ at and after $\beta$. Its values and one-sided derivatives match at $\beta$, and continuity of $F$ makes its derivative continuous there, so it is a solution on a strictly larger open interval. This contradicts the construction of $I$ as the union of all solution intervals. Hence $\beta=\infty$, and uniqueness follows from the overlap agreement in step 2.1. [F2, step 2.1, step 4.1, discharge-contradiction] ∎
