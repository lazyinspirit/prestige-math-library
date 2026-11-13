---
id: lem-author-7bd202611130-atomic-suffix-dichotomy
kind: lemma
title: Appending an elementary factor is additive or removes its inverse
status: published
domain: mathematics
origin: pipeline
deps:
  - def-standard-expressions-artin-tits-normalisers
  - lem-author-b19d43a8e520-bh-opposite-identification
  - def-brink-howlett-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
dependency_roles:
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
  lem-author-b19d43a8e520-bh-opposite-identification: mathematical-premise
  def-brink-howlett-artin-tits-normalisers: mathematical-premise
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Matthew Dyer and Harrison Gimenez, Root systems, Tits cones and imaginary
        cones of Brink-Howlett groupoids
      url: https://arxiv.org/abs/2606.12937v1
      locator: §§1.4–1.5, PDF p.4; §1.19, PDF p.8; Proposition 3.14(a),(b) and proof,
        PDF pp.43–44
      statement: For root-action Brink–Howlett arrows with common target, an
        elementary arrow s is atomic; its inversion set is either contained in
        or disjoint from that of any arrow g. Inversion inclusion is
        length-additive prefix order, and disjointness of N(x inverse) and N(y)
        is equivalent to length additivity of xy.
      hypotheses: Arbitrary-rank Coxeter system with standard based root system, and a
        component or union of components of the root-action Brink–Howlett
        groupoid. No spherical or finite-rank assumption. The article convention
        reverses root-action arrows with unchanged labels.
      reading_limits: For this adjudication, read extracted PDF text in §§1.1–1.5,
        1.17–1.19 and 1.21, and Proposition 3.14(a),(b) with its proof (PDF
        pp.43–44). Checked the inversion convention, arbitrary-rank scope,
        common-target condition and elementary-generator atomicity at their
        stated locators. This is not a full-paper reading or a reading of
        Brink–Howlett (1999); no presentation theorem is used.
dependency_level: 13
formulation_deps:
  - def-standard-expressions-artin-tits-normalisers
  - def-brink-howlett-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
argument_deps:
  - def-standard-expressions-artin-tits-normalisers
  - lem-author-b19d43a8e520-bh-opposite-identification
  - def-brink-howlett-artin-tits-normalisers
  - def-coxeter-data-artin-tits-normalisers
---

## Statement

Let $w:I\to K$ and let $t=v_{a,K}:K\to L$ be elementary. Exactly one of the following holds: $\ell(wt)=\ell(w)+\ell(t)$; or $w=ut^{-1}$ for an article morphism $u:I\to L$ with $\ell(w)=\ell(u)+\ell(t)$. Write $N(x)=\Phi^+\cap x(\Phi^-)$ for the root inversion set (not the reflection inversion notation of the cited source).

## External input

The independent external inputs are the inversion and weak-order identities in Dyer–Gimenez §§1.4–1.5, and the preprincipal property and identification of atoms in Proposition 3.14(a),(b), with preprincipal defined in §1.19. In the notation $N(x)$ used here, the latter property says $N(t)\subseteq N(w^{-1})$ or $N(t)\cap N(w^{-1})=\varnothing$. The source proves this for arbitrary rank. No presentation theorem is imported.

## Facts & Assumptions

[F99] The independent external inputs are the inversion and weak-order identities in Dyer–Gimenez §§1.4–1.5, and the preprincipal property and identification of atoms in Proposition 3.14(a),(b), with preprincipal defined in §1.19. In the notation $N(x)$ used here, the latter property says $N(t)\subseteq N(w^{-1})$ or $N(t)\cap N(w^{-1})=\varnothing$. The source proves this for arbitrary rank. No presentation theorem is imported.

## Proof

**Given:** The arbitrary-rank Coxeter and left-to-right groupoid conventions of [[def-standard-expressions-artin-tits-normalisers]]. All paths are finite.



The independent external inputs are the inversion and weak-order identities in Dyer–Gimenez §§1.4–1.5, and the preprincipal property and identification of atoms in Proposition 3.14(a),(b), with preprincipal defined in §1.19. In the notation $N(x)$ used here, the latter property says $N(t)\subseteq N(w^{-1})$ or $N(t)\cap N(w^{-1})=\varnothing$. The source proves this for arbitrary rank. No presentation theorem is imported.



**Goal:** Establish the assertion in the Statement.

**Proof technique:** direct.

1.1 Use the arrow reversal in [[lem-author-b19d43a8e520-bh-opposite-identification]]. The article arrows $w^{-1}:K\to I$ and $t:K\to L$ correspond to root-action arrows with common target $K$, carrying the same labels $w^{-1}$ and $t$. The elementary arrow is atomic in that root-action groupoid. Proposition 3.14 and the definition of preprincipal therefore give either $N(t)\cap N(w^{-1})=\varnothing$ or $N(t)\subseteq N(w^{-1})$. [given, F99]

2.1 In the disjoint case, §1.5 gives the asserted additivity. In the inclusion case it gives $\ell(w^{-1})=\ell(t)+\ell(t^{-1}w^{-1})$. Inverting the equality $w^{-1}=t(t^{-1}w^{-1})$ and setting $u=wt$ gives $w=ut^{-1}$ and $\ell(w)=\ell(u)+\ell(t)$, using invariance of Coxeter length under inversion. The groupoid laws give the asserted endpoints. [step 1.1, given, F99]

3.1 An elementary generator has positive Coxeter length. The two displayed length equalities are consequently incompatible. The preprincipal alternatives exhaust the possibilities, proving the claim. [step 1.1, step 2.1] ∎
