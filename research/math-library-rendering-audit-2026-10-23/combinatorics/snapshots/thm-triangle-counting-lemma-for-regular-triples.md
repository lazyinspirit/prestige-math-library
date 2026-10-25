---
id: thm-triangle-counting-lemma-for-regular-triples
kind: theorem
title: "Triangle counting lemma for three pairwise regular vertex sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-typical-degrees-in-a-regular-pair, def-epsilon-regular-pair]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.2.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $X,Y,Z$ be pairwise disjoint nonempty vertex sets such that all three cross-pairs are $\epsilon$-regular. Write
$$d(X,Y)=a,\qquad d(X,Z)=b,\qquad d(Y,Z)=c,$$
and suppose $a,b\ge2\epsilon$. Then the number of ordered triples $(x,y,z)\in X\times Y\times Z$ spanning a triangle is at least
$$(1-2\epsilon)(a-\epsilon)(b-\epsilon)(c-\epsilon)|X||Y||Z|.$$
When $c<\epsilon$, the right side is nonpositive and the inequality is interpreted literally.

## Facts & Assumptions

**Given:** Three vertex sets satisfying the hypotheses in the Statement.

[L1] In an $\epsilon$-regular pair $(X,Y)$ of density $d$, and for $Y'\subseteq Y$ with $|Y'|\ge\epsilon|Y|$, fewer than $\epsilon|X|$ vertices $x\in X$ have $|N(x)\cap Y'|<(d-\epsilon)|Y'|$, and separately fewer than $\epsilon|X|$ have $|N(x)\cap Y'|>(d+\epsilon)|Y'|$ ([[lem-typical-degrees-in-a-regular-pair]]).

[L2] If $(Y,Z)$ is $\epsilon$-regular, then any subsets of sizes at least $\epsilon|Y|$ and $\epsilon|Z|$ have density at least $d(Y,Z)-\epsilon$ ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], fewer than $\epsilon|X|$ vertices have fewer than $(a-\epsilon)|Y|$ neighbours in $Y$, and fewer than $\epsilon|X|$ have fewer than $(b-\epsilon)|Z|$ neighbours in $Z$. Thus at least $(1-2\epsilon)|X|$ vertices $x\in X$ satisfy both lower bounds. [given, L1, algebra]

2.1 For each such $x$, put $Y_x=N(x)\cap Y$ and $Z_x=N(x)\cap Z$. Since $a,b\ge2\epsilon$, step 1.1 gives $|Y_x|\ge\epsilon|Y|$ and $|Z_x|\ge\epsilon|Z|$. [step 1.1, algebra]

3.1 By [L2], there are at least $(c-\epsilon)|Y_x||Z_x|$ edges between $Y_x$ and $Z_x$, and each produces a unique triangle $(x,y,z)$. [step 2.1, L2]

4.1 Since $a\le1$ and $a\ge2\epsilon$, we have $\epsilon\le1/2$, so $1-2\epsilon\ge0$. If $c<\epsilon$ then $c-\epsilon<0$ makes the claimed lower bound nonpositive, while the triangle count is nonnegative, so the inequality holds. If $c\ge\epsilon$ then $c-\epsilon\ge0$, so substituting the bounds $|Y_x|\ge(a-\epsilon)|Y|$ and $|Z_x|\ge(b-\epsilon)|Z|$ of step 1.1 into $(c-\epsilon)|Y_x||Z_x|$ preserves the inequality of step 3.1; summing over the at least $(1-2\epsilon)|X|$ good choices of $x$ gives exactly the claimed product bound. [step 1.1, step 3.1, algebra] ∎
