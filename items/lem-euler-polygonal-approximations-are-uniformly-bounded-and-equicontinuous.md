---
id: lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous
kind: lemma
title: "Euler polygonal approximations for a continuous ODE are uniformly bounded and equicontinuous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $h>0$, and let $F$ be continuous on a compact cylinder $[t_0,t_0+h]\times\overline B(x_0,r)$ and bounded there by $M$, with $hM\le r$. The Euler polygonal approximations formed with positive mesh sizes tending to zero remain in the cylinder, are uniformly bounded, and are equicontinuous. More precisely, every approximation is $M$-Lipschitz. The final mesh cell may be shorter than the others.

Euler polygonal approximations on a compact cylinder are uniformly bounded and equicontinuous.

## Facts & Assumptions

**Given:** The compact cylinder, its vector-field bound, and the Euler recursion at mesh vertices.

[L1] A family of $\mathbb R^n$-valued curves is equicontinuous when, for every $\varepsilon>0$, one $\delta>0$ makes $\|x_m(t)-x_m(s)\|_2<\varepsilon$ for every member whenever $|t-s|<\delta$.

## Proof

**Proof technique:** direct.

1.1 Recursively set the next Euler vertex using the field at the preceding vertex and interpolate linearly. Induction gives displacement at most $M$ times elapsed time, and $hM\le r$ keeps every vertex and every interpolated segment inside the cylinder, including a shortened final cell. [given, algebra]

2.1 Each linear segment has slope norm at most $M$, and summing across intervening mesh cells gives $\|x_m(t)-x_m(s)\|_2\le M|t-s|$; this common estimate gives uniform boundedness and [L1], with constant polygons when $M=0$. [step 1.1, L1, algebra] ∎
