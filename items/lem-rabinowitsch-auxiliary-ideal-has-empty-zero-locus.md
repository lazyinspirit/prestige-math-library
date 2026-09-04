---
id: lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus
kind: lemma
title: "The Rabinowitsch auxiliary ideal has no common zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 13.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $I\subseteq k[x_1,\ldots,x_n]$ be an ideal, and let
$f\in k[x_1,\ldots,x_n]$ vanish on every point of $V(I)$. Then the ideal
$$ J:=I+(1-yf)\subseteq k[x_1,\ldots,x_n,y] $$
has empty zero locus.

## Facts & Assumptions

**Given:** A field $k$, an ideal $I\subseteq k[x_1,\ldots,x_n]$, and a polynomial $f$ that vanishes on $V(I)$.

[L1] Evaluation at a point is well defined in a polynomial ring ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(a,b)\in k^{n+1}$ were a common zero of $J$. Then every element of $I$ vanishes at $a$, so $a\in V(I)$. By hypothesis, $f(a)=0$. [L1, given]

2.1 But $1-yf\in J$, so evaluating at $(a,b)$ gives $1-bf(a)=0$. Using step 1.1 this becomes $1=0$, which is impossible in a field. Therefore $J$ has no common zero. [L1, step 1.1, algebra] ∎
