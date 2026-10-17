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

**Inputs and admissibility.** Take a scalar neutral-delay problem from
[[def-scalar-neutral-delay-equation-and-segment-shift]] with $T=K\tau$,
$\tau>0$, integers $K,m\ge1$, a compatible $C^1$ history $\phi$, coefficient
$a$, and right-hand side $f$. An optional budget $B\in\mathbb N_0$ limits calls
to $f$; if omitted, it imposes no limit. These are the admissible inputs.

**Output.** On completion, return $Y_0,\ldots,Y_N$ and $V_0,\ldots,V_{N-1}$.
If the budget expires first, return `budget-exhausted`, the number of completed
updates, the initialized history and all accepted states and derivatives.

1. Set $N=Km$, $h=\tau/m$, and $t_n=nh$. Store
   $Y_j=\phi(t_j)$ and $V_j=\phi'(t_j)$ for $j=-m,\ldots,-1$, and set
   $Y_0=\phi(0)$.

2. For $n=0,\ldots,N-1$, if a budget was supplied and $n\ge B$, return
   `budget-exhausted` with $n$ completed updates, the initialized values,
   $Y_0,\ldots,Y_n$, and $V_0,\ldots,V_{n-1}$. Otherwise set
   $D_n=\phi'(t_n-\tau)$ when $n<m$ and $D_n=V_{n-m}$ when $n\ge m$, then
   set $V_n=aD_n+f(t_n,Y_n,Y_{n-m})$ and $Y_{n+1}=Y_n+hV_n$. Every required
   evaluation is defined because $n<N$ gives $t_n<T$ and $f$ is defined for all
   state values on the time domain containing $[0,T]$.

3. Return `completed`, the nodal states $Y_0,\ldots,Y_N$ and nodal derivative
   values $V_0,\ldots,V_{N-1}$. Compatibility makes $V_0=\phi'(0)$. The full
   method uses $N$ evaluations of $f$ and stores $O(N+m)$ scalar state and
   derivative values; it has no constant-memory guarantee.
