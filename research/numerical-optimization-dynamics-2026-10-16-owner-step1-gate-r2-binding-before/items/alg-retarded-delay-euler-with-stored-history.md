---
id: alg-retarded-delay-euler-with-stored-history
kind: algorithm
title: "Explicit Euler with a stored piecewise-linear delay history"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-retarded-delay-equation-and-history-space]
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

For the retarded-delay problem of [[def-retarded-delay-equation-and-history-space]],
fix an integer $m\ge1$, set $h=\tau/m$, and choose any target $T>0$. Let
$N=\lceil T/h\rceil$ (the least integer with $Nh\ge T$), and run the uniform
grid $t_n=nh$ through $T_h=Nh$. Thus $0\le T_h-T<h$; the requested output on
$[0,T]$ is the restriction of the returned interpolant. The input history is
$\phi\in\mathcal C_\tau$ and the vector field is $f$. The algorithm takes an
optional nonnegative evaluation budget $B$; absent such a budget, it performs
all $N$ updates.

1. If $m$ is not a positive integer or $T\le0$, return `invalid-input`.
   Otherwise initialize $Y_j=\phi(jh)$ for $j=-m,-m+1,\ldots,0$ and store
   those values.

2. For $n=0,1,\ldots,N-1$, if the budget has been exhausted, return
   `budget-exhausted` with the last accepted index and all stored values. Otherwise
   evaluate $F_n=f(t_n,Y_n,Y_{n-m})$ and set $Y_{n+1}=Y_n+hF_n$. The delayed
   query is a stored node because $t_n-\tau=t_{n-m}$.

3. On every grid cell $[jh,(j+1)h]$ in the initial history and every generated
   cell $[t_n,t_{n+1}]$, define the returned history $\widehat y_h$ by linear
   interpolation between its stored endpoints. If a required evaluation is
   undefined for a restricted implementation domain, return `domain-failure`
   with the last accepted index. Return `completed`, the nodal values, and
   $\widehat y_h$ when all updates finish.

The method stores $N+m+1$ vectors in $\mathbb R^d$, so its history storage is
$O(d(N+m))=O(d(T+\tau)/h)$ real entries. It uses $N$ vector-field evaluations;
an arbitrary stored-history query uses $O(d)$ arithmetic with direct array
indexing. It makes no constant-memory claim.
