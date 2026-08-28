---
id: cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order
kind: corollary
title: "If $\\operatorname{char} k \\nmid |G|$, every finite-dimensional representation of $G$ is completely reducible"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-completely-reducible-representation, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, def-subrepresentation-and-irreducible-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 1.2.5"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.1(i)"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group, let $k$ be a field with
$\operatorname{char} k \nmid |G|$, and let $V$ be a finite-dimensional
representation of $G$ over $k$. Then $V$ is completely reducible.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ with $\operatorname{char} k \nmid |G|$, and a finite-dimensional representation $V$ of $G$ over $k$.

[L1] A representation is completely reducible exactly when its underlying space is an internal direct sum of irreducible subrepresentations, and the zero representation is included by the empty direct sum ([[def-completely-reducible-representation]]).

[L2] A representation is irreducible when it is nonzero and has no proper nonzero subrepresentation ([[def-subrepresentation-and-irreducible-representation]]).

[L3] Under the characteristic hypothesis, every subrepresentation has a $G$-invariant complement ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[A1] Every nonempty set of positive integers has a least element.

## Proof

**Proof technique:** induction.

1.1 If $V=0$, then [L1] makes $V$ completely reducible as the empty direct sum. [L1, base]

1.2 Assume now that $\dim_k V>0$, and as induction hypothesis suppose every representation of smaller dimension is completely reducible. Among the nonzero subrepresentations of $V$, choose one with least positive dimension, using [A1]. It is irreducible by [L2], since any proper nonzero subrepresentation would have smaller positive dimension. Call this irreducible subrepresentation $W$. By [L3], there is a subrepresentation $U$ with $V=W\oplus U$. [A1, L2, L3, given, ih, choose]

2.1 The subrepresentation $W$ is nonzero, so $\dim_k U<\dim_k V$. The induction hypothesis therefore makes $U$ completely reducible. Using [L1] to expand that decomposition and adjoining the irreducible summand $W$, one gets a direct-sum decomposition of $V$ into irreducible subrepresentations. Hence $V$ is completely reducible. [step 1.2, L1, discharge-induction] ∎
