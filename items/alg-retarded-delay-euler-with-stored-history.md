---
id: alg-retarded-delay-euler-with-stored-history
kind: algorithm
title: "Explicit Euler with a stored piecewise-linear delay history"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-retarded-delay-equation-and-history-space, lem-retarded-euler-and-delay-midpoint-work-and-storage]
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

**Inputs and admissibility.** Take a retarded-delay problem from
[[def-retarded-delay-equation-and-history-space]] with $\tau>0$, a target
$T>0$, a positive integer $m$, its history $\phi$ and vector field $f$, and an
optional evaluation budget $B\in\mathbb N_0$. The budget counts calls to $f$;
if omitted, it imposes no limit. These conditions are the algorithm's
admissible inputs.

**Output.** On completion, return the nodes and their piecewise-linear
interpolant through $T_h=Nh$, together with its restriction to $[0,T]$. If the
budget expires first, return `budget-exhausted`, the number of completed
updates, all values stored so far, and the piecewise-linear interpolant through
the last accepted node.

1. Set $h=\tau/m$, $N=\lceil T/h\rceil$ (the least integer with $Nh\ge T$),
   and $T_h=Nh$, so $0\le T_h-T<h$. Initialize and store $Y_j=\phi(jh)$ for
   $j=-m,-m+1,\ldots,0$.

2. For $n=0,1,\ldots,N-1$, if a budget was supplied and $n\ge B$, return
   `budget-exhausted` with $n$ completed updates, the stored values
   $Y_{-m},\ldots,Y_n$, and their interpolant on $[-\tau,t_n]$. Otherwise
   evaluate $F_n=f(t_n,Y_n,Y_{n-m})$ and set $Y_{n+1}=Y_n+hF_n$. The delayed
   query is a stored node because $t_n-\tau=t_{n-m}$. Every required evaluation
   is defined: $n<N$ implies $t_n<T$, and the vector field is defined for every
   state on the time domain containing $[0,T]$.

3. On each grid cell in $[-\tau,T_h]$, define $\widehat y_h$ by linear
   interpolation between the stored endpoints. Return `completed`, the nodes
   $Y_{-m},\ldots,Y_N$, and $\widehat y_h$ on $[-\tau,T_h]$ and its restriction
   to $[0,T]$.

## Remarks

The evaluation counts, history storage, and direct-index interpolation cost are
proved in [[lem-retarded-euler-and-delay-midpoint-work-and-storage]].
