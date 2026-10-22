---
id: lem-compact-knot-has-choice-free-tube
kind: lemma
title: "A compact smooth knot has a choice-free normal tube"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-normal-addition-map-for-a-euclidean-submanifold,
       lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section,
       thm-lebesgue-number-lemma,
       def-retraction-and-deformation-retract]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Stillwell, Classical Topology and Combinatorial Group Theory, §4.2.4, Wirtinger presentation proof"
      url: "https://homepages.math.uic.edu/~kauffman/Stillwell.pdf"
    - title: "Cole Charbonneau, Computing the Wirtinger Presentation of a Knot Group from a Knot Diagram, §2"
      url: "https://site.uvm.edu/cmcharbo/files/2021/12/knot-group-1.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $K\subset\mathbb R^3$ be the image of a compact smooth embedded circle, and let $E:N^\perp K\to\mathbb R^3$ be the Euclidean normal-addition map $E(p,v)=p+v$. There is a real $\varepsilon>0$ such that $E$ restricts to a diffeomorphism from $\{(p,v):\|v\|<\varepsilon\}$ onto an open neighborhood $N_\varepsilon$ of $K$. Moreover, $\mathbb R^3\setminus K$ strongly deformation retracts onto $\mathbb R^3\setminus N_\varepsilon$ by pushing each nonzero normal vector radially to length $\varepsilon$. The construction uses only a finite cover of the compact circle and no choice axiom.

## Statement references

[[def-normal-addition-map-for-a-euclidean-submanifold|Euclidean normal bundle and normal-addition map]]

## Facts & Assumptions

**Given:** A compact smooth embedded circle $K\subset\mathbb R^3$ and its Euclidean normal-addition map.

[F1] Normal addition is $E(p,v)=p+v$ on the orthogonal normal bundle. [[def-normal-addition-map-for-a-euclidean-submanifold]]

[F2] At each zero vector $(p,0)$, the differential of normal addition is an isomorphism, so the map is a local diffeomorphism near that point. [[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]

[F3] Every open cover of a compact metric space has a positive Lebesgue number: any subset of sufficiently small diameter lies in one member of the cover. [[thm-lebesgue-number-lemma]]

[F4] A deformation retraction consists of a retraction and a homotopy from the identity to inclusion followed by retraction that fixes the retract pointwise. [[def-retraction-and-deformation-retract]]

## Proof

1.1 For each $p\in K$, [F2] supplies a local inverse neighborhood for $E$. Form the set of all tuples consisting of a local trivialization, an open base set $O$ containing its center, and a radius $r>0$ such that $O\times\{v:\|v\|<r\}$ lies in that injectivity neighborhood. These base sets cover $K$. Compactness gives finitely many such tuples whose base sets $O_i$ cover $K$; their recorded radii have a positive finite minimum $r_0$. The tuples are collected as a set of all witnesses and only a finite subfamily is extracted, so no point-indexed choice is used. [given, F2, choose]

2.1 Apply [F3] to the finite cover $\{O_i\}$ of the metric space $K$, obtaining $\delta>0$. Choose $0<\varepsilon<\min\{r_0,\delta/3\}$. If $E(p,v)=E(q,w)$ with $\|v\|,\|w\|<\varepsilon$, then $\|p-q\|=\|w-v\|<2\varepsilon<\delta$. Thus $\{p,q\}$ lies in one $O_i$, and both $(p,v)$ and $(q,w)$ lie in the same recorded neighborhood where $E$ is injective; hence $(p,v)=(q,w)$. Every point of the radius-$\varepsilon$ tube also lies in one of those local-diffeomorphism neighborhoods, so the restriction is an injective local diffeomorphism. [F2, F3, step 1.1, choose, algebra]

3.1 An injective local diffeomorphism is open and has smooth local inverses that agree on overlaps. Therefore $E$ is a diffeomorphism onto its open image $N_\varepsilon$, which contains $K$ by [F1]. [F1, step 2.1]

4.1 For $x=E(p,v)\in N_\varepsilon\setminus K$, define $$H_t(x)=E\!\left(p,\frac{(1-t)\|v\|+t\varepsilon}{\|v\|}v\right),\qquad 0\le t\le1,$$ and set $H_t(x)=x$ for $x\notin N_\varepsilon$. The normal coordinates are unique by step 3.1, and the formula approaches the identity at $\|v\|=\varepsilon$, so these clauses paste continuously. It fixes the exterior pointwise and at $t=1$ sends every point in the punctured tube to its radius-$\varepsilon$ boundary. Thus it is a deformation retraction of $\mathbb R^3\setminus K$ onto $\mathbb R^3\setminus N_\varepsilon$. Only finitely many local neighborhoods and a finite minimum were used. [F1, F4, step 3.1, construct] ∎
