---
id: thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups
kind: theorem
title: "Finite subgroups of a hyperbolic group have uniformly bounded order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hyperbolic-group, def-delta-slim-geodesic-triangle-and-hyperbolic-space]
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
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.1 (slim-triangle background; the finite-orbit argument is proved below)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a hyperbolic group and fix a finite generating set $S$. Then there
exists a constant $B_S$ such that every finite subgroup $F \le G$ satisfies
$|F| \le B_S$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$ with finite generating set $S$. Choose a finite generating set $T$ witnessing hyperbolicity and a slim-triangle constant $\delta$ for its Cayley graph $X$; the bound obtained from $T$ also supplies the asserted $B_S$.

[L1] The geometric Cayley graph $X$ is a geodesic metric space in which every geodesic triangle is $\delta$-slim ([[def-hyperbolic-group]], [[def-delta-slim-geodesic-triangle-and-hyperbolic-space]]).

[L2] The vertex ball of any fixed integer radius in $X$ is finite because $T$ is finite. Left translation by $G$ is free and transitive on Cayley vertices: $gx=hx$ for a vertex $x\in G$ implies $g=h$.

## Proof

**Proof technique:** direct.

1.1 Let $F\le G$ be finite and put $M=F\cdot e$, a finite set of vertices of $X$. For a vertex $x$ define $R(x)=\max_{m\in M}d(x,m)$. The nonempty set of integer values $R(x)$ has a least value $R$, attained at some vertex $x$. Left translation by each $f\in F$ preserves $M$ and distances, so $R(fx)=R(x)=R$. Thus the center set $C=\{v\in G:R(v)=R\}$ is $F$-invariant and contains the orbit $Fx$. [L1, given, construct]

2.1 Let $x,y\in C$, write $D=d(x,y)$, and let $z$ be the midpoint of a geodesic $[x,y]$. For any $m\in M$, slimness of the triangle with vertices $x,y,m$ gives a point $p$ on $[x,m]$ or $[y,m]$ with $d(z,p)\le\delta$. In the first case, $d(x,p)\ge D/2-\delta$ and $d(x,m)\le R$, so $d(z,m)\le R-D/2+2\delta$; the second case is symmetric. Choose a vertex $v$ of the edge containing $z$, with $d(v,z)\le1/2$. Then $R(v)\le R-D/2+2\delta+1/2$. Minimality of $R$ forces $D\le4\delta+1$. Hence every two vertices of $C$, and in particular of $Fx$, are at distance at most $4\delta+1$. [L1, step 1.1]

3.1 The map $f\mapsto fx$ is injective by [L2]. The orbit $Fx$ lies in the vertex ball about $x$ of radius $N=\lceil4\delta+1\rceil$, whose cardinality is the fixed finite number $B=|B_X(e,N)\cap G|$ by Cayley vertex transitivity. Thus $|F|=|Fx|\le B$ for every finite $F\le G$. Taking $B_S=B$ proves the assertion for the given $S$. [L2, step 1.1, step 2.1] ∎
