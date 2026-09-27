---
id: lem-harish-chandra-projection-computes-highest-weight-scalars
kind: lemma
title: "The Harish-Chandra projection computes the highest-weight scalar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harish-chandra-projection, lem-central-elements-have-weight-zero, def-highest-weight-vector-and-cyclic-highest-weight-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 4"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (lem-harish-chandra-projection-computes-highest-weight-scalars). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $M$ be a cyclic highest-weight module with highest vector $v$ of weight $\lambda$, and let $z\in Z(U(\mathfrak g))$. Then

$$zv=\operatorname{pr}(z)(\lambda)\,v,$$

so the scalar by which $z$ acts on $M$ is obtained by evaluating the Harish-Chandra projection at $\lambda$.

## Facts & Assumptions

**Given:** A cyclic highest-weight module $M=U(\mathfrak g)v$ of highest weight $\lambda$ and a central element $z\in Z(U(\mathfrak g))$.

## Proof

**Proof technique:** direct.

1.1 By [[lem-central-elements-have-weight-zero]], $z$ lies in $U(\mathfrak g)_0$. Fix the PBW order $\mathfrak n^-,\mathfrak h,\mathfrak n^+$ used in [[def-harish-chandra-projection]]. Every PBW monomial is an $\mathfrak h$-weight vector, with weight equal to the sum of its root weights. In the expansion of the zero-weight element $z$, only zero-weight monomials occur. [given, algebra]

2.1 A zero-weight ordered monomial with a nontrivial $\mathfrak n^-$ factor must also have a nontrivial $\mathfrak n^+$ factor: without the latter its weight is a nonzero negative sum of positive roots. Thus every zero-weight PBW monomial outside $U(\mathfrak h)$ has a rightmost factor in $\mathfrak n^+$ and annihilates $v$. Consequently $zv=\operatorname{pr}(z)v$. Merely having a left $\mathfrak n^-$ factor would not imply annihilation; the zero-weight restriction supplies the needed right factor. [step 1.1, given, algebra]

3.1 The element $\operatorname{pr}(z)$ lies in $U(\mathfrak h)$, so it acts on $v$ by the scalar obtained from the polynomial $\operatorname{pr}(z)$ by evaluation at the weight $\lambda$. Combining this with step 2.1 gives $zv=\operatorname{pr}(z)(\lambda)v$. [step 1.1, step 2.1] ∎
