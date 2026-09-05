---
id: lem-harish-chandra-projection-computes-highest-weight-scalars
kind: lemma
title: "The Harish-Chandra projection computes the highest-weight scalar"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harish-chandra-projection, lem-central-elements-have-weight-zero, def-highest-weight-vector-and-cyclic-highest-weight-module]
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
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a cyclic highest-weight module with highest vector $v$ of weight $\lambda$, and let $z\in Z(U(\mathfrak g))$. Then

$$zv=\operatorname{pr}(z)(\lambda)\,v,$$

so the scalar by which $z$ acts on $M$ is obtained by evaluating the Harish-Chandra projection at $\lambda$.

## Facts & Assumptions

**Given:** A cyclic highest-weight module $M=U(\mathfrak g)v$ of highest weight $\lambda$ and a central element $z\in Z(U(\mathfrak g))$.

## Proof

**Proof technique:** direct.

1.1 By [[lem-central-elements-have-weight-zero]], the central element $z$ lies in $U(\mathfrak g)_0$, so write $z=\operatorname{pr}(z)+a$ using [[def-harish-chandra-projection]], with $a\in \mathfrak n^-U(\mathfrak g)+U(\mathfrak g)\mathfrak n^+$. [given, construct]

2.1 Every summand of $a$ either has a factor from $\mathfrak n^+$ on the right, which kills the highest vector $v$, or has a nontrivial factor from $\mathfrak n^-$ on the left, which lowers the weight and therefore cannot contribute to the highest-weight line. Hence $av=0$. [step 1.1, algebra]

3.1 The element $\operatorname{pr}(z)$ lies in $U(\mathfrak h)$, so it acts on $v$ by the scalar obtained from the polynomial $\operatorname{pr}(z)$ by evaluation at the weight $\lambda$. Combining this with step 2.1 gives $zv=\operatorname{pr}(z)(\lambda)v$. [step 1.1, step 2.1] ∎
