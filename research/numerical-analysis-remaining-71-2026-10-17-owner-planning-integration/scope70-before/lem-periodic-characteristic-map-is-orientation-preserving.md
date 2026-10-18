---
id: lem-periodic-characteristic-map-is-orientation-preserving
kind: lemma
title: "A periodic C1 characteristic map is an orientation-preserving diffeomorphism"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - lem-transport-characteristics-depend-c-one-on-initial-position
  - thm-chain-rule-for-total-derivatives
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-intermediate-value
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Under the hypotheses of [[thm-periodic-c1-velocity-has-global-characteristic-flow]], fix $s,t\in[0,T]$ and let $\Phi_{t,s}(x):=X(t;s,x)$ on the periodic lift $\mathbb R^d$. Then $\Phi_{t,s}$ is a $C^1$ diffeomorphism with inverse $\Phi_{s,t}$, and
$$\det D_x\Phi_{t,s}(x)>0\qquad(x\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** The periodic $C^1$ flow from time $s$ to time $t$ on $\mathbb R^d$.

[F1] [[thm-periodic-c1-velocity-has-global-characteristic-flow]]: the lifted characteristic exists uniquely over $[0,T]$ for every initial point.

[F2] [[lem-transport-characteristics-depend-c-one-on-initial-position]]: for a $C^1$ field, the flow depends $C^1$ on its initial position over a common compact time interval.

[F3] [[thm-chain-rule-for-total-derivatives]]: derivatives of a composition multiply in the order $D(g\circ f)=Dg(f)Df$.

[F4] [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]: a finite square real matrix is invertible exactly when its determinant is nonzero.

[F5] [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]: for fixed finite dimension, determinant is a polynomial and hence a continuous function of the matrix entries.

[F6] [[thm-intermediate-value]]: a continuous real function on an interval cannot pass from a positive value to a negative value without taking zero.

## Proof

1.1 By [F1], both the forward flow $\Phi_{t,s}$ and the reverse-time flow $\Phi_{s,t}$ are defined. Uniqueness of the ODE implies that following the same characteristic first from $s$ to $t$ and then backward to $s$ returns the initial point; likewise in the opposite order. Thus $\Phi_{s,t}\circ\Phi_{t,s}=\mathrm{id}$ and $\Phi_{t,s}\circ\Phi_{s,t}=\mathrm{id}$. By [F2] both maps are $C^1$, so $\Phi_{t,s}$ is a $C^1$ diffeomorphism. [given, F1, F2, algebra]

2.1 Applying [F3] to $\Phi_{s,t}\circ\Phi_{t,s}=\mathrm{id}$ gives $D\Phi_{s,t}(\Phi_{t,s}(x))D\Phi_{t,s}(x)=I_d$. Hence $D\Phi_{t,s}(x)$ is invertible, and [F4] gives $\det D\Phi_{t,s}(x)\ne0$. [step 1.1, F3, F4, algebra]

3.1 For fixed $s,x$, the function $r\mapsto\det D\Phi_{r,s}(x)$ is continuous by [F2] and [F5], and equals $1$ at $r=s$. It never vanishes by step 2.1. If it were negative at some $r$, [F6] on the interval between $s$ and $r$ would force a zero, a contradiction. Therefore it is positive at every $r$, including the chosen $t$. [given, F2, F5, F6, step 2.1, algebra] ∎
