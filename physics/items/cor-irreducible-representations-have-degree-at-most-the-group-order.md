---
id: cor-irreducible-representations-have-degree-at-most-the-group-order
kind: corollary
title: "Every irreducible representation of a finite group has degree at most $|G|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-dimension-of-a-finite-group-algebra, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-dimension, def-finite-dimensional-representation-of-a-group-over-a-field, thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 2.1.1 and regular-module consequences"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $V$ be an irreducible representation of $G$
over a field $k$. Then
$$\deg(V)\le |G|.$$

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$, and an irreducible representation $V$ of $G$ over $k$.

[L1] The group algebra $k[G]$ has dimension $|G|$ over $k$ ([[cor-dimension-of-a-finite-group-algebra]]).

[L2] The representation $V$ is a quotient of the regular representation ([[thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation]]).

[L3] In a vector space with a spanning set of size $n$, every linearly independent set has size at most $n$ ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[L4] The degree of a representation is the dimension of its underlying vector space, and that dimension is the size of any basis ([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], there is a surjective linear map $q:k[G] \to V$. [L2, given]

2.1 The images under $q$ of the $|G|$ basis vectors of $k[G]$ span $V$, so $V$ has a spanning set with $|G|$ elements by [L1]. [step 1.1, L1]

3.1 Let $B$ be a basis of $V$. Then $B$ is linearly independent, and step 2.1 together with [L3] shows that $|B| \le |G|$. By [L4], $|B|=\deg(V)$. Therefore $\deg(V)\le |G|$. [step 2.1, L3, L4] ∎
