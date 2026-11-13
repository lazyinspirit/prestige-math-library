---
id: lem-author-a7d202611130-simultaneous-prefix
kind: lemma
title: Simultaneous elementary prefixes force the relative longest prefix
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-a7d202611130-finite-relative-longest
  - lem-author-a7d202611130-elementary-root-prefix
  - def-standard-expressions-artin-tits-normalisers
dependency_roles:
  lem-author-a7d202611130-finite-relative-longest: mathematical-premise
  lem-author-a7d202611130-elementary-root-prefix: mathematical-premise
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root Systems, Tits Cones and Imaginary
        Cones of Brink-Howlett Groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: Lemma 3.12(a), PDF pp. 42–43; §1.5, PDF p. 4
      statement: For a root-action arrow u:I→K, L⊆Π∩Φ_(u^-1) implies ν(L,I)^-1≤u^-1.
        Weak order is length-additive prefix order.
      hypotheses: Arbitrary-rank Coxeter system with standard based root system; a
        Brink–Howlett component. For ν(M,I), M is disjoint from I and the
        relative root difference is finite. No spherical ambient-system
        hypothesis.
      reading_limits: Read extracted definitions and statements in §§1.4–1.5, 1.8–1.9,
        1.19–1.27, 3.1–3.4, Proposition 3.11, Lemma 3.12 (including its proof),
        Proposition 3.13 and Proposition 3.14. Visually inspected PDF pp. 10, 11
        and 43. No complete reading of this paper or reconstruction of its
        rank-two presentation proof is claimed. Brink–Howlett (1999) was not
        accessible and was not read. Section 1.27 prints ν(α,K),ν(β,K) although
        α,β belong to K, contrary to Remark 1.26; only its unambiguous
        exactly-two minimum-word assertion is imported, and initial factors are
        derived independently.
formulation_deps:
  - lem-author-a7d202611130-finite-relative-longest
  - lem-author-a7d202611130-elementary-root-prefix
  - def-standard-expressions-artin-tits-normalisers
argument_deps:
  - lem-author-a7d202611130-finite-relative-longest
  - lem-author-a7d202611130-elementary-root-prefix
  - def-standard-expressions-artin-tits-normalisers
dependency_level: 13
---

## Statement

Let $q$ be the morphism of [[lem-author-a7d202611130-finite-relative-longest]]. If an article morphism $w:I\to K\prime$ has both $v_{a,I}$ and $v_{b,I}$ as length-additive left divisors, then $q\preceq w$ and $q^{-1}w$ is an article morphism from the target of $q$ to $K\prime$.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [[lem-author-a7d202611130-finite-relative-longest]]; [[lem-author-a7d202611130-elementary-root-prefix]]; [[def-standard-expressions-artin-tits-normalisers]].

## Proof


**Given:** The stated Coxeter and groupoid data and the explicit independent inputs cited below.

**Goal:** Establish the assertion in the Statement.

1.1 By [[lem-author-a7d202611130-elementary-root-prefix]] and §1.5, $\alpha_a,\alpha_b\in N(w)$. The inverse label $u=w^{-1}$ is an ordinary root-action arrow out of $I$ (the article condition is $w\Pi_{K\prime}=\Pi_I$). Thus $\{\alpha_a,\alpha_b\}\subseteq\Pi\cap\Phi_{u^{-1}}$. Apply Dyer–Gimenez Lemma 3.12(a): $\nu(\{a,b\},I)^{-1}\preceq u^{-1}=w$. By [[lem-author-a7d202611130-finite-relative-longest]] its left side is $q$. [given]

2.1 If $q:I\to K$, then $q^{-1}w\Pi_{K\prime}=q^{-1}\Pi_I=\Pi_K$. This is the required article morphism $K\to K\prime$, and the prefix conclusion gives $\ell(w)=\ell(q)+\ell(q^{-1}w)$. [step 1.1] ∎
