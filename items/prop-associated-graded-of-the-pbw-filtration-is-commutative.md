---
id: prop-associated-graded-of-the-pbw-filtration-is-commutative
kind: proposition
title: "The associated graded algebra of the PBW filtration is commutative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex Lie algebra. In the filtration from [[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]], one has

$$[F_mU(\mathfrak g),F_nU(\mathfrak g)]\subseteq F_{m+n-1}U(\mathfrak g) \qquad (m,n\ge 0),$$

so the graded algebra $\operatorname{gr}U(\mathfrak g)$ is commutative.

## Facts & Assumptions

**Given:** A complex Lie algebra $\mathfrak g$ and the PBW filtration $F_\bullet U(\mathfrak g)$.

## Proof

**Proof technique:** direct.

1.1 For $x\in \mathfrak g$ and a monomial $y_1\cdots y_n$ of filtration degree $n$, repeatedly using $xy_i-y_ix=[x,y_i]$ from [[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]] rewrites $x(y_1\cdots y_n)-(y_1\cdots y_n)x$ as a sum of terms with exactly one bracket and therefore filtration degree at most $n$. [given, algebra]

2.1 Applying step 1.1 repeatedly to products of filtration degrees $m$ and $n$ shows that every commutator of elements of $F_mU(\mathfrak g)$ and $F_nU(\mathfrak g)$ drops by at least one filtration step, so it lies in $F_{m+n-1}U(\mathfrak g)$. [step 1.1, algebra]

3.1 Hence the degree-$m$ and degree-$n$ symbols commute in $\operatorname{gr}U(\mathfrak g)$, and the associated graded algebra is commutative. [step 2.1] ∎
