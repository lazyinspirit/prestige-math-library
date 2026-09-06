---
id: thm-neat-submanifolds-have-boundary-adapted-slice-charts
kind: theorem
title: "Neat submanifolds have boundary-adapted slice charts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-neat-submanifold-of-a-manifold-with-boundary, thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts, thm-transverse-preimage-theorem, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

A neat $k$-submanifold $S$ of an $n$-manifold with boundary has boundary charts simultaneously straightening $S$ and $\partial M$; in particular its induced boundary is $S\cap\partial M$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 If $p\in\operatorname{Int}S$, then neatness puts $p$ in $\operatorname{Int}M$, and the ordinary slice case of [[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]] applies inside $\operatorname{Int}M$. Now let $p\in\partial S=S\cap\partial M$. Choose boundary coordinates $(u,s)\in\mathbb R^{k-1}\times[0,\infty)$ on $S$ and $(z,t)\in\mathbb R^{n-1}\times[0,\infty)$ on $M$, and write the inclusion as $$F(u,s)=(G(u,s),h(u,s)).$$ Because the faces agree, $h(u,0)=0$. Transversality to $\partial M$ says $d(h|_S)_p\ne0$; since its derivatives in the $u$-directions vanish on the face, $\partial_sh(p)\ne0$. It is positive after shrinking because $F$ carries $s\ge0$ into $t\ge0$. [given]

2.1 By [[thm-euclidean-inverse-function-theorem]], replacing the source normal coordinate $s$ by $h(u,s)$ is a half-space-preserving local coordinate change. Thus assume $F(u,s)=(G(u,s),s)$. The restriction of $F$ to the face is an embedding, so $D_uG(u,0)$ has rank $k-1$. If $k>1$, permute the $z$-coordinates so that the first $k-1$ components have invertible derivative and use another inverse-function coordinate change, preserving $s$; if $k=1$, this change is empty. In either case this gives $$F(u,s)=(u,H(u,s),s),$$ where $H$ has $n-k$ components. [step 1.1]

3.1 The target coordinate change $$(z',z'',t)\longmapsto (z',z''-H(z',t),t)$$ is a half-space-preserving local diffeomorphism, with inverse obtained by adding $H(z',t)$. It sends $S$ to the coordinate half-slice $\{z''=0,\ t\ge0\}$ and sends $S\cap\partial M$ to its face $\{z''=0,\ t=0\}$. This proves the simultaneous straightening and the asserted equality of induced boundary structures. [step 2.1] ∎
