---
id: ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux
kind: example
title: The two-dimensional logarithmic kernel has unit normalized flux
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.6 equations (2.12), (2.14)–(2.15), printed p. 33 (PDF p. 39)"
deps:
  - def-countable-choice
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-directional-and-partial-derivatives
  - thm-logarithm-derivative-and-integral
  - cor-volume-of-the-unit-n-ball
  - thm-real-gamma-functional-equation
  - def-norm-and-normed-space
  - def-p-norms-on-rn
  - def-euclidean-spheres-and-closed-balls
  - def-metric-ball
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - thm-heine-borel-rn
  - thm-real-power-continuity-and-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-algebra-of-derivatives
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice. For every $r>0$, put
$S_r:=\partial B_r(0)=\{x\in\mathbb R^2:\lVert x\rVert_2=r\}$ and take the
outward unit normal of the disk. For
$$\Phi(x)=-\frac1{2\pi}\log\lVert x\rVert_2\qquad(x\ne0),$$
the outward flux is
$$\int_{S_r}\partial_\nu\Phi\,dS=-1,$$
equivalently $-\int_{S_r}\partial_\nu\Phi\,dS=1$ for the positive operator
$-\Delta$. On the inner boundary of an annulus with its central disk removed,
the normal is reversed and the flux is $+1$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $r>0$, and use the normalized
two-dimensional kernel and the chart surface measure.

[A1] Countable Choice is written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).
It is used only through the chart surface-area convention and
compact-hypersurface integration cited below; no full Axiom of Choice is used.

[F1] The normalized kernel in dimension two is
$\Phi_2(x)=-(2\pi)^{-1}\log|x|$ for $x\ne0$
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] Chart surface measure scales by $R^{n-1}$ under $\omega\mapsto a+R\omega$,
and $|S^{n-1}|=n|B_1|$
([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F3] On a compact embedded $C^1$ hypersurface, surface integration is defined
by charts; signed functions with finite absolute integral are integrated by
subtracting their positive and negative integrals
([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] The Lebesgue integral is linear on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F5] The directional derivative is the derivative at zero of the line
restriction, $D_vf(a)=\lim_{t\to0}(f(a+tv)-f(a))/t$
([[def-directional-and-partial-derivatives]]).

[F6] $\log'(s)=1/s$ for $s>0$
([[thm-logarithm-derivative-and-integral]]).

[F7] The volume of the unit $n$-ball is
$V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$
([[cor-volume-of-the-unit-n-ball]]).

[F8] For $s>0$, $\Gamma(s+1)=s\Gamma(s)$ and $\Gamma(1)=1$
([[thm-real-gamma-functional-equation]]).

[F9] The Euclidean norm is homogeneous:
$\lVert cv\rVert_2=|c|\lVert v\rVert_2$
([[def-norm-and-normed-space]]).

[F10] The Euclidean sphere of radius $r$ is the level set
$S_2(0,r)=\{x:\lVert x\rVert_2=r\}$
([[def-euclidean-spheres-and-closed-balls]]).

[F11] The open Euclidean ball is $B_r(0)=\{x:\lVert x\rVert_2<r\}$
([[def-metric-ball]]).

[F12] The Euclidean norm on $\mathbb R^n$ is continuous for the Euclidean
metric ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F13] In coordinates,
$\lVert x\rVert_2=\sqrt{\sum_{k<n}x_k^2}$
([[def-p-norms-on-rn]]).

[F14] A subset of $\mathbb R^n$ is compact exactly when it is closed and
bounded ([[thm-heine-borel-rn]]).

[F15] On $(0,\infty)$, $s\mapsto s^\alpha$ is continuous and differentiable
with derivative $\alpha s^{\alpha-1}$; applying its continuity assertion to
the exponent $\alpha-1$ makes that derivative continuous
([[thm-real-power-continuity-and-derivatives]]).

[F16] A Euclidean map is $C^1$ when each component is $C^1$
([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F17] Finite sums and products and compositions of $C^1$ Euclidean maps are
$C^1$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F18] Differentiable real functions satisfy the product rule
([[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 The set $S_r$ is nonempty, since $(r,0)\in S_r$. By [F12] it is closed as the preimage of the closed singleton $\{r\}$ under $x\mapsto\lVert x\rVert_2$. By [F13], each coordinate of a point in $S_r$ has absolute value at most $r$, so $S_r$ is bounded; [F14] makes it compact. Norm continuity shows that points of norm less or greater than $r$ are not on $\partial B_r(0)$. If $\lVert x\rVert_2=r$, write $\omega=x/r$. For $0<t<r$, homogeneity [F9] gives $\lVert x-t\omega\rVert_2=r-t<r$ and $\lVert x+t\omega\rVert_2=r+t>r$. Thus every neighborhood of $x$ meets both the disk and its complement, proving $S_r=\partial B_r(0)$. [F9, F10, F11, F12, F13, F14, given, algebra]

2.1 At each $x=(x_1,x_2)\in S_r$, at least one coordinate is nonzero. If $x_1\ne0$, a neighborhood of $x$ in the circle is the graph $x_1=\pm\sqrt{r^2-x_2^2}$ with the sign chosen to match $x_1$; if $x_2\ne0$, use the corresponding graph solving for $x_2$. The radicand is positive on the relevant open interval, so [F15]–[F17] make these graph maps $C^1$. Each graph map has rank one because its free coordinate has derivative one; on overlaps the transition is a restriction of the same $C^1$ square-root formula. Thus $S_r$ is an embedded $C^1$ hypersurface, as required by [F3]. Differentiating $\gamma_1(t)^2+\gamma_2(t)^2=r^2$ along chart curves using [F18] shows every tangent vector is perpendicular to $x$; the tangent space is one-dimensional by the chart rank, hence equals $x^\perp$. For $\omega=x/r$, $x-t\omega=(r-t)\omega$ is inside the disk and $x+t\omega=(r+t)\omega$ is outside; therefore the disk-outward unit normal is $\nu(x)=\omega$. [A1, F3, F9, F15, F16, F17, F18, step 1.1, algebra]

3.1 Scaling in [F2] gives $\int_{S_r}1\,dS=r|S^1|=2r|B_1|$. By [F7] and [F8], $|B_1|=V_2(1)=\pi/\Gamma(2)=\pi$, so the chart area is $2\pi r$. It is finite, and therefore every constant function on $S_r$ is integrable under [F3]. [A1, F2, F3, F7, F8, step 2.1, algebra]

3.2 Put $q(s)=-(2\pi)^{-1}\log s$ for $s>0$. For $x=r\omega\in S_r$, $x+t\omega=(r+t)\omega$ for $t$ near zero. By [F1], [F5], and [F6], $\partial_\nu\Phi(x)=D_\omega\Phi(x)=q'(r)=-1/(2\pi r)$. This derivative is evaluated at a point away from the pole. [F1, F5, F6, step 2.1, algebra]

4.1 The derivative in step 3.2 is constant and absolutely integrable on $S_r$ by step 3.1. Linearity [F4] now gives $\int_{S_r}\partial_\nu\Phi\,dS=-\frac1{2\pi r}\int_{S_r}1\,dS=-\frac1{2\pi r}(2\pi r)=-1$. Thus $-\int_{S_r}\partial_\nu\Phi\,dS=1$ for the operator $-\Delta$. [A1, F3, F4, step 3.1, step 3.2, algebra]

5.1 For the annulus $r<|x|<R$, with $R>r$, at $x=r\omega$ a small move in direction $-\omega$ enters the removed disk, while a move in direction $+\omega$ enters the annulus. Its outward normal on the inner circle is $-\omega$. Therefore [F5] and step 3.2 give $\partial_{\nu_{\rm inner}}\Phi=+1/(2\pi r)$; using the area from step 3.1, the inner-boundary flux is $+1$ and its negative is $-1$. [A1, F3, F4, F5, step 3.1, step 3.2, algebra] ∎

## Source notes

Hunter §2.6 gives the logarithmic kernel in equation (2.12), computes its
radial derivative in equation (2.14), and states the normalized sphere flux in
equation (2.15), all on printed p. 33 (PDF p. 39). Hunter then explains that
the flux is radius-independent by the divergence theorem and harmonicity on an
annulus. This item derives the two-dimensional derivative, the $2\pi r$
surface area, and both boundary orientations explicitly; it does not use that
divergence-theorem argument or take equation (2.15) as proof.
