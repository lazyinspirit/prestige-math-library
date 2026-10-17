---
id: alg-neutral-delay-euler-compatible-grid
kind: algorithm
title: "Explicit Euler for a scalar neutral delay on a compatible grid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-scalar-neutral-delay-equation-and-segment-shift]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Definition

Let $T=K\tau$, $K\ge1$, choose integers $m\ge1$, $N=Km$, and set
$h=\tau/m$, $t_n=nh$. Inputs are $a$, the compatible $C^1$ history $\phi$,
the scalar right-hand side $f$, and an optional evaluation budget.

1. Store $Y_j=\phi(t_j)$ and $V_j=\phi'(t_j)$ for $j=-m,\ldots,-1$, and set
   $Y_0=\phi(0)$.

2. For $n=0,\ldots,N-1$, if the evaluation budget is exhausted return
   `budget-exhausted` with the accepted values. If a required evaluation of $f$
   is undefined on its admitted domain, return `domain-failure` with the accepted
   values. Otherwise set
   $D_n=\phi'(t_n-\tau)$ when $n<m$ and $D_n=V_{n-m}$ when $n\ge m$, then
   set $V_n=aD_n+f(t_n,Y_n,Y_{n-m})$ and $Y_{n+1}=Y_n+hV_n$.

3. Return `completed`, the nodal states $Y_0,\ldots,Y_N$ and nodal derivative
   values $V_0,\ldots,V_{N-1}$. The compatibility condition makes
   $V_0=\phi'(0)$. The method uses $N$ evaluations of $f$ and stores $O(N+m)$
   scalar state and derivative values; it has no constant-memory guarantee.
