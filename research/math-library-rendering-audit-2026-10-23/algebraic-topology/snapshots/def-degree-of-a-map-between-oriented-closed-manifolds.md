---
id: "def-degree-of-a-map-between-oriented-closed-manifolds"
kind: "definition"
title: "Degree of a map between oriented closed manifolds"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-fundamental-class-of-a-compact-oriented-manifold","thm-top-homology-characterizes-compact-orientable-manifolds","prop-singular-chains-and-homology-are-covariantly-functorial"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, section 3.3 Exercise 7, printed p.258
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $f:M\to N$ be continuous, where $M,N$ are **nonempty connected closed integrally oriented $n$-manifolds** of the same dimension. Closed means compact and boundaryless. Write $[M],[N]$ for their specified fundamental classes from [[def-fundamental-class-of-a-compact-oriented-manifold]]. The **degree** of $f$ is the integer $d=\deg(f)$ determined by
$$f_*[M]=d[N]\quad\text{in }H_n(N;\mathbb Z).$$

This integer exists and is unique. By [[thm-top-homology-characterizes-compact-orientable-manifolds]], restriction at a point of $N$ identifies $H_n(N;\mathbb Z)$ with its infinite cyclic local stalk, carrying $[N]$ to the prescribed generator. Thus every class in $H_n(N;\mathbb Z)$ is a unique integer multiple of $[N]$. The continuous map induces a homomorphism $f_*$ by [[prop-singular-chains-and-homology-are-covariantly-functorial]], so this applies to $f_*[M]$. The same theorem identifies $[M]$ as a generator of the source group. These facts define $d$ from classes and a canonical induced homomorphism, so no choice of cycle representatives affects it.

The orientations are part of the data. Replacing $[M]$ by $-[M]$ multiplies its image by $-1$, and replacing $[N]$ by $-[N]$ replaces the coordinate of a fixed target class by its negative. In either case changing exactly one orientation changes $d$ to $-d$; changing both leaves it unchanged. The fundamental-class definition proves these sign changes from the local orientation values. A degree-zero map means precisely that $f_*[M]=0$; uniqueness follows even in this case because $[N]$ has infinite order.

When $n=0$, a nonempty connected zero-manifold is a single point, as proved in the top-homology theorem. Write its source and target orientation classes as $\epsilon_M[x]$ and $\epsilon_N[y]$, with $\epsilon_M,\epsilon_N\in\{1,-1\}$. The unique point map sends $[x]$ to $[y]$, so
$$\deg(f)=\epsilon_M\epsilon_N.$$
In particular the identically oriented point map has degree $1$, and opposite orientations give degree $-1$. Higher degenerate simplices in the point complex do not alter this computation of $H_0$.

Empty manifolds are excluded: their homology group $H_n$ is zero, so the equation would not determine a unique integer if the target were empty. More directly, $[\varnothing]=0$ has no generator coordinate. Disconnected manifolds instead have several top-class coordinates and are outside this scalar definition. Coefficients here are exactly $\mathbb Z$, not the zero ring or an arbitrary ring. The definition and sign calculations use no AC.
