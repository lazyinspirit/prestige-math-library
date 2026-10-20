---
id: cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain
kind: counterexample
title: "Exterior-sphere domains need not have global C2alpha Dirichlet solutions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-shin-elliptic-divergence-form-operator
  - lem-shin-elliptic-residual-stability
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - lem-shin-radial-smooth-cutoff
  - def-laplacian-of-a-c2-function
  - thm-chain-rule-for-total-derivatives
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Theorem D.1, PDF p.25"
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.3, weak maximum principle"
---

## Statement refuted

The following assertion is false under the library's bounded global Hölder norm: every bounded Lipschitz domain satisfying an exterior sphere condition at each boundary point, with a strictly elliptic operator having Hölder coefficients and nonpositive expanded zero-order coefficient, has for every Hölder forcing and continuous Dirichlet data a unique solution in $C^{2,\alpha}(U)\cap C^0(\bar U)$.

## Statement references
[Shin et al., Theorem D.1: the exterior-sphere classical Dirichlet assertion](https://arxiv.org/pdf/2004.01806)

[Shin et al., Theorem D.1, PDF p.25: existence claim refuted here](https://arxiv.org/pdf/2004.01806)

[Hunter, §2.3: weak maximum principle used for uniqueness](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** $0<\alpha<1$ and the source's claimed $C^{2,\alpha}(U)\cap C^0(\bar U)$ solution class.

[F1] The library's $C^{2,\alpha}(U)$ is the bounded global Hölder class; its norm includes the supremum of every second derivative over all of $U$ ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]).

[F2] For $L=\Delta$, a bounded-domain function $w\in C^2(U)\cap C^0(\bar U)$ with $\Delta w=0$ and $w|_{\partial U}=0$ vanishes identically ([[lem-shin-elliptic-residual-stability]]).

[F3] The locally proved radial profile $\chi$ is smooth, equals $1$ for $r\le1/4$, and equals $0$ for $r\ge1/2$ ([[lem-shin-radial-smooth-cutoff]]).

[F4] The Laplacian of a scalar $C^2$ function on an open subset of $\mathbb R^2$ is $w_{xx}+w_{yy}$ ([[def-laplacian-of-a-c2-function]]).

[F5] The total chain rule applies to the smooth local polar-coordinate change on $r>0$ ([[thm-chain-rule-for-total-derivatives]]).

## Counterexample

1.1 Let $U=\{(r\cos\theta,r\sin\theta):0<r<1,\ 0<\theta<2\pi/3\}$. It is bounded and Lipschitz: its boundary consists of two line segments and a circular arc, meeting at finitely many corners of angles $2\pi/3$ and $\pi/2$. At a smooth boundary point, a sufficiently small ball tangent on the exterior side is disjoint from $U$; on the circular arc one can use a ball outside the unit disk. At a corner of interior angle $\beta<\pi$, choose a ball tangent at the corner with its center on the exterior angle bisector. Directions from the vertex to points in this ball lie within angle $\pi/2$ of the center direction, while the sector directions are at angular distance at least $\pi-\beta/2>\pi/2$; hence the ball is exterior. Therefore $U$ satisfies the exterior sphere condition everywhere. [given, cases]

1.2 Let $\chi$ be the profile supplied by [F3]. Set
$$u(r,\theta)=\chi(r)r^{3/2}\sin(3\theta/2),\qquad L=\Delta,\qquad f=\Delta u,\qquad g=0.$$
Since $r>0$ on $U$, $u\in C^\infty(U)$. It extends continuously by zero at the vertex, vanishes on both straight sides because the sine factor vanishes, and vanishes on the circular arc because $\chi(1)=0$. To compute $\Delta w$ for any $C^2$ function in local polar coordinates, write $c=\cos\theta$ and $s=\sin\theta$. The chain rule [F5] gives
$$w_{xx}=c^2w_{rr}+\frac{s^2}{r}w_r+\frac{s^2}{r^2}w_{\theta\theta}-\frac{2sc}{r}w_{r\theta}+\frac{2sc}{r^2}w_\theta,\quad
w_{yy}=s^2w_{rr}+\frac{c^2}{r}w_r+\frac{c^2}{r^2}w_{\theta\theta}+\frac{2sc}{r}w_{r\theta}-\frac{2sc}{r^2}w_\theta.$$
By [F4], adding yields $\Delta w=w_{rr}+r^{-1}w_r+r^{-2}w_{\theta\theta}$. For $w=r^{3/2}\sin(3\theta/2)$, these derivatives are $w_r=\frac32r^{1/2}\sin(3\theta/2)$, $w_{rr}=\frac34r^{-1/2}\sin(3\theta/2)$, and $w_{\theta\theta}=-\frac94r^{3/2}\sin(3\theta/2)$, so the polar Laplacian is zero on $r<1/4$. On the annulus where $\chi$ varies, $r$ is bounded away from zero and all factors are smooth; outside $r<1/2$, $u=0$. Thus $f$ is smooth and supported in $1/4\le r\le1/2$. The domain $U$ is convex, so boundedness of $\nabla f$ gives a Lipschitz bound on $f$ along each segment in $U$; since $U$ is bounded and $0<\alpha<1$, this implies $f\in C^{0,\alpha}(U)$. [given, F3, F4, F5, algebra]

2.1 Along the ray $\theta=\pi/3$ and for $0<r<1/4$, $\partial_{rr}u=(3/4)r^{-1/2}$, which is unbounded as $r\downarrow0$. A bounded global $C^{2,\alpha}$ norm bounds every Cartesian second derivative and hence every unit-direction second derivative, so [F1] implies $u\notin C^{2,\alpha}(U)$. The coefficients of $L=\Delta$ are smooth, the ellipticity constant is $1$, and the expanded zero-order coefficient is $0\le0$. [step 1.2, F1, algebra]

2.2 The displayed $u$ is a classical solution in $C^2(U)\cap C^0(\bar U)$ of $\Delta u=f$ with zero Dirichlet data. Any other solution in that class differs from $u$ by a zero-boundary harmonic function, which vanishes by [F2]. Hence it is the unique classical solution, and no solution in the asserted global $C^{2,\alpha}(U)\cap C^0(\bar U)$ class exists. This refutes the assertion. [step 1.2, step 2.1, F2, algebra] ∎

