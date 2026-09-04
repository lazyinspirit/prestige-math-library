---
id: lem-simple-root-form-recovers-factor-lifting
kind: lemma
title: "The simple-root form recovers factor lifting"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a local ring with residue field $k$. Assume every
simple root $\overline a\in k$ of the reduction $\overline f$ of every monic
polynomial $f\in A[T]$ lifts uniquely to an element $a\in A$ satisfying
$f(a)=0$. Then $(A,\mathfrak m)$ has the coprime monic factor-lifting property.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$ in which, for every monic
$f\in A[T]$, every simple root of $\overline f\in k[T]$ lifts uniquely to a
root of $f$ in $A$.

[L1] Stacks, Section 10.153, Lemma 10.153.3 identifies the simple-root lifting condition for a local ring with the coprime monic factor-lifting property.

## Proof

**Proof technique:** invoke the local converse in the cited source.

1.1 The hypothesis of this item is exactly the simple-root lifting condition in [L1], and conclusion (3) of [L1] is exactly the coprime monic factor-lifting property. Therefore the cited source yields the required factorization statement for $(A,\mathfrak m)$. [L1, given]

2.1 Therefore unique lifting of simple residue roots recovers unique lifting of coprime monic factorizations. [step 1.1] ∎
