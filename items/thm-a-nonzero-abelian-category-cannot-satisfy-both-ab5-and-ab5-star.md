---
id: thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star
kind: theorem
title: "A nonzero abelian category cannot satisfy both AB5 and AB5*"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-axioms-ab5-and-ab5-star, def-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise A.4.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf"
pipeline_run: frontier-22
---

## Statement

If an abelian category satisfies both AB5 and AB5*, then it is the zero
category. Equivalently, no nonzero abelian category satisfies both axioms.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ satisfying both AB5 and AB5*.

[L1] AB5 and AB5* are the directed-join and decreasing-meet distributivity laws
of [[def-the-axioms-ab5-and-ab5-star]].

[L2] An abelian category has zero objects, kernels, cokernels, and finite
biproducts ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is a nonzero object. Let $S:=\coprod_{n\ge0} X$ and $P:=\prod_{n\ge0} X$, which exist by the AB3 and AB3* parts of [L1]. Let $s:S\to P$ be the canonical map. For each $n$, let $T_n\le P$ be the tail subobject $\prod_{k\ge n} X$. Then $(T_n)$ is decreasing, $\bigcap_n T_n=0$ because the product projections jointly detect morphisms, and $T_n\vee \operatorname{im}(s)=P$ because the finite head $X^{\oplus n}\le S$ together with the tail generates all of $P$. Applying AB5* to the family $(T_n)$ and the subobject $\operatorname{im}(s)$ gives $\operatorname{im}(s)=P$. [L1, L2, choose, construct]

2.1 For each $n$, let $S_n\le S$ be the finite partial sum $X^{\oplus n}$. The family $(S_n)$ is directed and has join $S$. Transport the product diagonal $\delta:X\to P$ across the isomorphism $S\cong P$ from step 1.1, and let $D\le S$ be its image. The diagonal is monic because each product projection composed with it is $1_X$, so $D\ne0$. But for every $n$ one has $D\wedge S_n=0$: a map factoring through both $D$ and $S_n$ has zero $(n+1)$-st coproduct projection because it factors through $S_n$, while through $D$ that same projection is the factor map itself, so the map is zero. [step 1.1, L2, construct]

3.1 Applying AB5 to the directed family $(S_n)$ and the fixed subobject $D$ gives $$ D=\left(\bigvee_n S_n\right)\wedge D=\bigvee_n(S_n\wedge D)=0, $$ contradicting step 2.1. Therefore no nonzero object $X$ exists, so $\mathcal A$ is the zero category. [L1, step 2.1, contradiction: nonzero object]

4.1 Step 3.1 proves that satisfying both AB5 and AB5* forces the category to be zero, which is the contrapositive form of the theorem's second sentence. [step 3.1, contrapositive: nonzero category] ∎
