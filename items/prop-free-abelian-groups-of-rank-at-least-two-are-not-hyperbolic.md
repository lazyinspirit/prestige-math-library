---
id: prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic
kind: proposition
title: "Free abelian groups of rank at least two are not hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hyperbolic-group, def-free-abelian-group, def-cayley-graph, lem-thin-quadrilaterals-in-a-hyperbolic-space]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

If $A$ is a free abelian group of rank at least $2$, then $A$ is not
hyperbolic.

## Facts & Assumptions

**Given:** A free abelian group $A$ with a basis of cardinality at least two, possibly infinite ([[def-free-abelian-group]]).

[L0] A hyperbolic group is finitely generated and has a hyperbolic unit-edge Cayley graph for some finite generating set ([[def-hyperbolic-group]]).

[L1] Cayley edges correspond to the nonzero elements of the symmetric generating set ([[def-cayley-graph]]).

[L2] In a geodesic $\delta$-hyperbolic space every geodesic quadrilateral is $2\delta$-thin ([[lem-thin-quadrilaterals-in-a-hyperbolic-space]]).

## Proof

**Proof technique:** direct.

1.1 If the basis is infinite, every finite set of group elements uses only finitely many basis coordinates and cannot generate $A$. Thus [L0] excludes hyperbolicity. Otherwise identify $A$ with $\mathbb Z^n$, $n\ge2$, and fix any finite generating set. Replace it by its nonzero symmetric closure $S$, which leaves the geometric Cayley graph unchanged by [L1]. It spans $\mathbb R^n$. [given, L0, L1, algebra]

2.1 Choose $s\in S$ of maximal Euclidean norm. The linear functional $f(x)=\langle s,x\rangle/\|s\|^2$ satisfies $f(s)=1$ and $|f(a)|\le1$ for every $a\in S$, by Cauchy–Schwarz and maximality. Since $S$ spans a space of dimension at least two, choose $v\in S$ independent of $s$ and put $w=v-\langle v,s\rangle s/\|s\|^2$. Then $w\ne0$, $\langle w,s\rangle=0$ and $\langle w,v\rangle>0$. Choose $t\in S$ maximizing $\langle w,t\rangle$. Symmetry gives a positive maximum and $|\langle w,a\rangle|\le\langle w,t\rangle$ on $S$. Hence $g(x)=\langle w,x\rangle/\langle w,t\rangle$ has $g(t)=1$, $g(s)=0$ and $|g(a)|\le1$ on $S$. In particular $s,t$ are independent. [step 1.1, choose, algebra]

3.1 Extend these linear functions from graph vertices affinely over each edge. Their slopes have absolute value at most one, so they are 1-Lipschitz for the graph path metric. Thus a path of $m$ successive $s$-edges, or $m$ successive $t$-edges, has endpoints at distance exactly $m$: the path supplies the upper bound and $f$, respectively $g$, supplies the lower bound. Translates and reversals are likewise geodesics. Therefore the four such paths through $0,ms,ms+mt,mt$ form a geodesic quadrilateral. [L1, step 2.1, algebra]

4.1 Choose linear functionals $\alpha,\beta$ on $\mathbb R^n$ with $\alpha(s)=1$, $\alpha(t)=0$, $\beta(s)=0$ and $\beta(t)=1$; solving the nonsingular two-vector Gram system constructs them. Let $C=\max_{a\in S}\max\{|\alpha(a)|,|\beta(a)|\}\ge1$. Their affine extensions to graph edges are $C$-Lipschitz. At the midpoint of the side $0$ to $ms$, their values are $(m/2,0)$. On each of the other three sides, either $\alpha=0$, $\alpha=m$, or $\beta=m$. Consequently every point on those sides is at distance at least $m/(2C)$ from that midpoint. Taking arbitrarily large $m$ contradicts [L2] for every proposed hyperbolicity constant. Since the finite generating set was arbitrary, [L0] excludes hyperbolicity of $A$. [L0, L2, step 3.1, choose, algebra] ∎
