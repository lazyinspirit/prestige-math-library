---
id: lem-the-casimir-element-is-independent-of-dual-bases
kind: lemma
title: "The quadratic Casimir element is independent of the choice of dual bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, def-killing-form-of-a-semisimple-lie-algebra, prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-the-casimir-element-is-independent-of-dual-bases). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex semisimple Lie algebra with Killing form $B$.
For any pair of $B$-dual bases $(x_i),(x^i)$, the tensor
$\sum_i x_i\otimes x^i\in\mathfrak g\otimes\mathfrak g$, and hence its
image $\sum_i x_ix^i\in U(\mathfrak g)$ under multiplication, is independent
of the chosen pair.

## Facts & Assumptions

**Given:** Two pairs of dual bases of a complex semisimple Lie algebra with
respect to its nondegenerate Killing form
([[prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Nondegeneracy identifies $\mathfrak g$ with $\mathfrak g^*$, and under that identification the tensor $\sum_i x_i\otimes x^i$ is the image of the identity map on $\mathfrak g$. Therefore it depends only on the form, not on the chosen dual bases. [given]

2.1 Multiplication $\mathfrak g\otimes\mathfrak g\to U(\mathfrak g)$ ([[def-universal-enveloping-algebra-as-a-tensor-quotient]]) sends that basis-independent tensor to $\sum_i x_ix^i$. Its image is therefore basis independent as well. [step 1.1] ∎
