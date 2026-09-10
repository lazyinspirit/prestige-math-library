---
id: "lem-uniform-filling-data-give-a-uniform-slimness-bound"
kind: "lemma"
title: "Filling constants give a uniform slimness bound"
status: published
origin: "pipeline"
deps: ["thm-linear-relator-area-implies-slim-geodesic-triangles", "lem-point-wedges-preserve-a-common-triangle-minsize-bound", "thm-sublinear-triangle-minsize-implies-hyperbolicity", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Frigerio–Sisto, Characterizing hyperbolic spaces and real trees — Lemma 11 (PDF pp. 7–8); point-wedge contradiction supplied locally to make uniformity precise"
      url: "https://arxiv.org/pdf/0810.1526"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. For every $K,L\geq0$ there exists a finite $\delta(K,L)$ such that every finite presentation with relator lengths at most $L$ and $\operatorname{Area}(w)\leq K|w|$ for every null word has $\delta(K,L)$-slim triangles in its unit-edge metric Cayley realization. More generally, a countable family of nonempty geodesic spaces with a common nonnegative nondecreasing majorant $F$ for $m_X$, satisfying $F(P)/P\to0$ as $P\to\infty$, has a common finite slimness bound. The claim is existence, without an explicit numerical formula for $\delta$.

## Facts & Assumptions

**Given:** Assume AC; fix $K,L\geq0$, or the countable family and function $F$ in the general assertion.

[F1] The fixed constants $K,L$ give every such Cayley realization the same nonnegative nondecreasing sublinear function $F(P)=A(K,L)\sqrt{P+7}+B(L)$. ([[thm-linear-relator-area-implies-slim-geodesic-triangles]]).

[F2] The point wedge is geodesic, preserves the common minsize bound, and isometrically embeds all factors and their chosen triangles. ([[lem-point-wedges-preserve-a-common-triangle-minsize-bound]]).

[F3] Under AC any geodesic space with sublinear $m_X$ has a finite slimness bound. ([[thm-sublinear-triangle-minsize-implies-hyperbolicity]]).

[F4] AC selects witnesses and basepoints from the nonempty sets used below. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 First take the given countable family. Choose a basepoint in each nonempty space and form its wedge. F2 gives $m_W(P)\leq F(P)$, so $m_W(P)/P\to0$. F3 applies to this geodesic wedge and yields a finite number $\delta$ bounding every triangle's slimness there. Each chosen factor triangle has precisely its original metric on the union of its sides, since the factor embeds isometrically. Distances from a side point to the union of the other two sides are therefore unchanged. The same $\delta$ works in every factor. An empty family satisfies the conclusion with $\delta=0$. [F2, F3, F4]

1.2 For the presentation assertion suppose no common bound exists. Finite generating alphabets can be relabelled by $\{1,\ldots,k\}$, and finite sets of finite words over these alphabets form a set. Take each presented group as the quotient of the corresponding set of words and each edge realization using copies of $[0,1]$. Thus these spaces and the collections of their interval-parameterized triangles are sets, so the following choices are legitimate set-indexed applications of AC. For each positive integer $n$, failure of a common bound supplies one such presentation and a chosen triangle whose slimness exceeds $n$; choose them, and point each space at its identity vertex. Relabelling preserves word lengths, area and distances. [given, F4]

2.1 All these chosen spaces have the identical function $F(P)=A(K,L)\sqrt{P+7}+B(L)$ by F1. Its nonnegativity, monotonicity and sublinearity were established there with constants depending only on the fixed $K,L$. Apply step 1.1 to this countable family. It gives a finite $\delta$ bounding the selected triangle in each factor. A positive integer $n>\delta$ contradicts the choice of a triangle with slimness greater than $n$. Therefore a common finite bound exists for the entire class at these $K,L$; denote one by $\delta(K,L)$. If no presentations satisfy the hypotheses, zero is a bound. This proves both assertions. [F1, step 1.1, step 1.2] ∎
