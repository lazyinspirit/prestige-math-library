---
id: cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control
kind: counterexample
title: Exterior Dirichlet uniqueness needs a far-field condition
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-laplacian-of-a-c2-function, thm-real-power-continuity-and-derivatives, thm-chain-rule, thm-algebra-of-derivatives]
sources:
  references:
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, Problem 4.2, printed p. 38, radial harmonic functions on annuli and exterior domains"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.6.1, printed p. 33, the Newtonian fundamental solution is harmonic away from its pole"
---

## Statement refuted

Let $n\ge3$, $R>0$, $a\in\mathbb R^n$, and $\Omega=\{x:|x-a|>R\}$. The functions $0$ and $u(x)=1-(R/|x-a|)^{n-2}$ are distinct bounded harmonic functions on $\Omega$ with the same zero trace on $\partial B_R(a)$; $u$ tends to $1$ at infinity. Thus boundary data alone, and even boundedness alone, do not imply uniqueness in this exterior domain. A uniqueness class must also prescribe behavior at infinity; in particular, $u\to0$ excludes this witness.

## Facts & Assumptions

**Given:** an integer $n\ge3$, a radius $R>0$, a centre $a\in\mathbb R^n$ and the exterior domain $\Omega=\{x\in\mathbb R^n:|x-a|>R\}$.

[F1] For $t>0$ and real $\beta$, $t^\beta$ is continuous and differentiable with derivative $\beta t^{\beta-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F2] On open real intervals the chain rule, sum, scalar-multiple and product rules apply to differentiable functions ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F3] For a real $C^2$ function on an open subset of $\mathbb R^n$, $\Delta v=\sum_{i<n}\partial_i^2v$; vanishing Laplacian means harmonicity ([[def-laplacian-of-a-c2-function]]). Coordinates and derivative indices below both run from $0$ to $n-1$.

## Counterexample

**Proof technique:** direct.

1.1 Put $q(x):=\sum_{i<n}(x_i-a_i)^2=|x-a|^2>0$ on $\Omega$, $h(x):=q(x)^{(2-n)/2}$ and $u(x):=1-R^{n-2}h(x)=1-(R/|x-a|)^{n-2}$. These expressions are continuous on $\{x:|x-a|\ge R\}$. [given, F1, algebra]

2.1 For $|x-a|>R$ we have $0<R/|x-a|<1$, so $0<\bigl(R/|x-a|\bigr)^{n-2}<1$ and $0<u(x)<1$: the function $u$ is bounded on $\Omega$, while the zero function is bounded as well. [step 1.1, algebra]

2.2 Harmonicity. Write $y_i=x_i-a_i$. Coordinate differentiation using [F1] and [F2] gives $\partial_i h=(2-n)y_iq^{-n/2}$ and $\partial_j\partial_i h=(2-n)\delta_{ij}q^{-n/2}+n(n-2)y_iy_jq^{-(n+2)/2}$. All these derivatives are continuous because $q>0$, so $h$ and $u$ are $C^2$. Summing the pure second partials yields $\Delta h=n(2-n)q^{-n/2}+n(n-2)q\,q^{-(n+2)/2}=0$. The constant function has zero second partials, hence $\Delta u=-R^{n-2}\Delta h=0$; both $u$ and $0$ are harmonic by [F3]. No surface measure or choice assumption is used. [step 1.1, F1, F2, F3, algebra]

3.1 Boundary trace. If $|x-a|=R$ then $R/|x-a|=1$, so $u(x)=1-1=0$ on $\partial\Omega=S_R(a)$; the zero function has the same trace, and $u$ is nonzero on $\Omega$ by step 2.1. [step 1.1, step 2.1, algebra]

3.2 Far-field behaviour. If $|x-a|\to\infty$ then $\bigl(R/|x-a|\bigr)^{n-2}\to0$ because $n-2>0$, so $u(x)\to1$, whereas the zero function tends to $0$; in particular $u$ does not satisfy the decay condition $u\to0$ at infinity. [step 1.1, step 2.1, algebra]

4.1 Steps 2.1, 2.2 and 3.1 exhibit two distinct bounded harmonic functions $0$ and $u$ on the exterior domain $\Omega$ that agree, with value zero, on $\partial B_R(a)$; step 3.2 shows that they are separated by their far-field behaviour. Hence prescribed boundary data, and boundedness by itself, do not give uniqueness, and a far-field condition such as $u\to0$ is needed to exclude this witness. [step 2.1, step 2.2, step 3.1, step 3.2, F3] ∎
