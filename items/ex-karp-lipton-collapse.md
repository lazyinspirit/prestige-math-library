---
id: ex-karp-lipton-collapse
kind: example
title: "A Sigma_2 verification of a candidate SAT circuit"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-karp-lipton-collapse]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

For the concrete $\Pi_2^p$ predicate
$$\forall y\in\{0,1\}^m\ \exists z\in\{0,1\}^m\;(z=y),$$
the Karp--Lipton certificate is the search circuit $C(y)=y$ followed by the
universal check that its output satisfies the formula encoding $z=y$.

## Facts & Assumptions

**Given:** the displayed predicate and the identity circuit $C$.

[L1] The Karp--Lipton theorem uses a candidate SAT search circuit with a local check. by [[thm-karp-lipton-collapse]].

## Verification

**Proof technique:** direct.

1.1 For a fixed $y$, let $F_y(z)=\bigwedge_{i=1}^m(z_i\leftrightarrow y_i)$. The identity circuit has size $O(m)$ and outputs $C(y)=y$, so $F_y(C(y))=1$ for every $y$. [given, construct]

2.1 Hence the predicate has the $\Sigma_2^p$ certificate form $\exists C\,\forall y\;F_y(C(y))=1$. The deterministic check evaluates only the displayed assignment $C(y)$ in $F_y$; it does not try to verify a global claim that $C$ decides satisfiability. [L1, step 1.1]

3.1 This is the finite local-verification pattern used in the Karp--Lipton argument of [L1]. [L1, step 2.1] ∎
