---
id: "ex-afem-coefficient-jump-adds-flux-oscillation"
kind: "example"
title: "A coefficient jump creates nonzero edge-flux oscillation"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
generation:
  role: example
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Example

Assume Countable Choice for the cited Sobolev/L2 interface.

Let $E=\{(0,y):0\le y\le1\}$ be shared by $K^-=\operatorname{conv}\{(-1,0),(0,0),(0,1)\}$ and $K^+=\operatorname{conv}\{(1,0),(0,0),(0,1)\}$. Set $A^-=1$, $A^+=1+y$, and $U(x,y)=x$. On each triangle $A$ is positive and Lipschitz; its traces differ on $E$.

## Facts & Assumptions

[A1] Countable Choice is the background assumption in the cited Sobolev and $L^2$ suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, The piecewise-Lipschitz coefficient interface and projected edge flux oscillation of [[def-afem-p1-residual-estimator-and-data-oscillation]].

[F1] For a scalar diffusion coefficient, the outward conormal flux on a side is $A\nabla U\cdot n$; edge oscillation is the squared $L^2$ distance of the outward flux sum from its edge mean ([[def-afem-p1-residual-estimator-and-data-oscillation]]).

## Verification

1.1 The gradient is $\nabla U=(1,0)$. The outward normals on $E$ are $n^-=(1,0)$ and $n^+=(-1,0)$, so the sum of outward conormal fluxes is $J_E(y)=1-(1+y)=-y$. Its edge mean on $[0,1]$ is $-1/2$. [A1, F1, given, algebra]

2.1 Since $h_E=1$, $h_E\|J_E-\Pi_E^0J_E\|_{L^2(E)}^2=\int_0^1(y-\tfrac12)^2\,dy=\tfrac1{12}>0.$ Thus the coefficient interface creates a nonzero projected edge contribution. No general reliability or complexity assertion for this coefficient model follows from the example. [step 1.1, algebra] ∎

## Finite check

The edge integral is the elementary variance of $y$ on $[0,1]$, equal to $1/12$.
