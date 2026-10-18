---
id: ex-na-wall-pressure-correction-tangential-velocity-defect
kind: example
title: "A Neumann pressure correction can break tangential no-slip"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§3.2 and Remark 3.2, printed pp. 6013–6014: the artificial pressure
        Neumann condition and tangential wall-velocity defect."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "§2.3.3, printed pp. 46–47: boundary treatment caveats for pressure
        projection."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

On the channel $\Omega=\mathbb T\times(0,1)$, with periodic coordinate
$x\in\mathbb T=\mathbb R/\mathbb Z$ and wall coordinate $y$, consider the
smooth tentative velocity
$$ \widetilde u(x,y)=(\cos(2\pi x)y(1-y),0). $$
The field need not be divergence-free; it is zero on both walls. Apply the
unit-step pressure projection that solves
$$ \Delta\phi=\nabla\cdot\widetilde u,\qquad \partial_y\phi(x,0)=\partial_y\phi(x,1)=0, $$
periodically in $x$, and sets $u=\widetilde u-\nabla\phi$. The corrected
normal velocity is zero at each wall, but its tangential velocity at $(0,0)$
is $-2\pi g(0)\ne0$, where
$$ g(0)=\frac{2\pi}{(2\pi)^4}\left(2\pi\coth\pi-2\right)>0. $$
Thus this pressure boundary condition does not preserve tangential no-slip
for this field. The example asserts no convergence rate.

## Facts & Assumptions

**Given:** A periodic channel, the displayed smooth tentative field, the
Neumann pressure equation, and the velocity correction $u=\widetilde
u-\nabla\phi$.

[F1] The pressure correction considered here is precisely the Poisson
problem, homogeneous Neumann wall condition and gradient subtraction written
in the statement.

[F2] The scalar identities $\Delta(\sin(ax)g(y))=\sin(ax)(g''-a^2g)$
and $\partial_x\sin(ax)=a\cos(ax)$ follow by differentiation of smooth
functions.

## Proof
1.1 Write $a=c=2\pi$. Direct differentiation gives $\nabla\cdot\widetilde u=-c\sin(ax)y(1-y)$. Define $$ g(y)=-\frac c{a^2}y^2+\frac c{a^2}y-\frac{2c}{a^4} +\frac{c}{a^3\sinh(a/2)}\cosh(a(y-1/2)),\qquad \phi(x,y)=\sin(ax)g(y). $$ Differentiating the polynomial and hyperbolic terms gives $g''-a^2g=-c y(1-y)$ and $g'(0)=g'(1)=0$. By [F2], this $\phi$ solves the stated Poisson problem and satisfies both Neumann conditions. Since $\widetilde u_y=0$ and $\partial_y\phi=0$ at the walls, the corrected normal velocity remains zero. [given, F1, F2, algebra]

1.2 For uniqueness of its gradient, if two classical periodic Neumann solutions are given, their difference $w$ is harmonic with $\partial_yw=0$ on both walls. For each fixed $y$, one-dimensional integration by parts in $x$ gives $\int_{\mathbb T}w w_{xx}=-\int_{\mathbb T}w_x^2$ because the periodic endpoint terms cancel; integration by parts in $y$ gives $\int_0^1 w w_{yy}=[w w_y]_0^1-\int_0^1w_y^2=-\int_0^1w_y^2$ by the Neumann data. Integrating the latter equality in $x$ and using $\Delta w=0$ yields $\int_\Omega|\nabla w|^2=0$. Hence $\nabla w=0$, so the correction is independent of the pressure constant. [given, F1, F2, algebra]

2.1 Since $\widetilde u_x(x,0)=0$, the corrected tangential trace at the lower wall is $$ u_x(x,0)=-\partial_x\phi(x,0)=-a\cos(ax)g(0). $$ At $x=0$, $$ g(0)=\frac c{a^4}\bigl(a\coth(a/2)-2\bigr)>0, $$ because $\coth(a/2)>1$ and $a=2\pi>2$. Therefore $u_x(0,0)=-a g(0)\ne0$, which proves the tangential no-slip defect. [F1, step 1.1, algebra] ∎
