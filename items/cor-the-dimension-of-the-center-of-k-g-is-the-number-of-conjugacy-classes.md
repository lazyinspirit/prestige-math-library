---
id: cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes
kind: corollary
title: "The dimension of $Z(k[G])$ is the number of conjugacy classes of $G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-class-sums-form-a-basis-of-the-center-of-k-g]
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
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 3.4.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be a field. Then

$$
\dim_k Z(k[G])
$$

is exactly the number of conjugacy classes of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ and a field $k$.

[L1] For a finite group, the class sums indexed by the conjugacy classes of $G$ form a basis of $Z(k[G])$ ([[thm-class-sums-form-a-basis-of-the-center-of-k-g]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is one basis vector of $Z(k[G])$ for each conjugacy class of $G$. [L1, given]

2.1 The dimension of a finite-dimensional vector space is the number of vectors in any basis, so step 1.1 identifies $\dim_k Z(k[G])$ with the number of conjugacy classes. [step 1.1, given, algebra] ∎
