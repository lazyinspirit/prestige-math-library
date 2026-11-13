---
id: lem-author-a7d202611130-elementary-root-prefix
kind: lemma
title: Elementary inversions detect the two initial prefixes
status: draft
domain: mathematics
origin: pipeline
deps:
  - lem-author-a7d202611130-finite-relative-longest
  - def-standard-expressions-artin-tits-normalisers
dependency_roles:
  lem-author-a7d202611130-finite-relative-longest: mathematical-premise
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
      locator: §§1.4–1.5, PDF/printed p. 4; §1.24 and Lemma 1.25(a), PDF/printed p.
        10; §1.28, PDF/printed p. 11
      statement: The map α↦s_α is a bijection from positive roots to reflections, and
        the root subsystem of W_L consists of roots whose reflections lie in
        W_L. For J⊆H⊆Π with (W_H\W_J)∩Ref(W) finite, the union D of components
        of H meeting H\J is spherical and ν(H\J,J)=w_D w_(D∩J) satisfies
        Φ^+∩ν(H\J,J)^(-1)Φ^-=Φ_H^+\Φ_J^+. For x,y∈W, inclusion Φ^+∩xΦ^-⊆Φ^+∩yΦ^-
        is equivalent to ℓ(y)=ℓ(x)+ℓ(x^(-1)y).
      hypotheses: A Coxeter system with its standard based geometric root system;
        arbitrary rank is allowed. In Lemma 1.25, J⊆H⊆Π and (W_H\W_J)∩Ref(W) is
        finite. The application uses J=Π_I and H=Π_(I+c); neither W nor W_I is
        assumed finite. Here the item’s N(x) denotes the source’s root inversion
        set Φ_x, rather than its reflection inversion set N(x).
      reading_limits: For this proposal, read the frozen extracted §§1.4–1.5, §1.24
        and Lemma 1.25, and §1.28 through its reflection-subgroup and
        standard-parabolic root conventions; visually checked PDF pp. 4, 10 and
        11. Checked the source PDF URL. Only the positive-root/reflection
        correspondence, relative-longest statement and weak-order equivalence
        are imported. No reconstruction of their background proofs, complete
        paper reading, or reading of Brink–Howlett (1999) is claimed.
formulation_deps:
  - lem-author-a7d202611130-finite-relative-longest
  - def-standard-expressions-artin-tits-normalisers
argument_deps:
  - lem-author-a7d202611130-finite-relative-longest
  - def-standard-expressions-artin-tits-normalisers
dependency_level: 12
---

## Statement

Under the finite-relative-root hypotheses of [[lem-author-a7d202611130-finite-relative-longest]], the article generators $v_{a,I},v_{b,I}$ exist. For $c\in\{a,b\}$, $N(v_{c,I})=\Phi_{I+c}^+\setminus\Phi_I^+$, this set contains $\alpha_c$, and $v_{c,I}\preceq q$, where $u\preceq x$ means $\ell(x)=\ell(u)+\ell(u^{-1}x)$. In particular the two generators are distinct.

## Facts & Assumptions

[F1] The definitions and results used in this argument are supplied, under their stated hypotheses, by [[lem-author-a7d202611130-finite-relative-longest]]; [[def-standard-expressions-artin-tits-normalisers]].

## Proof


**Given:** The stated Coxeter and groupoid data and the explicit independent inputs cited below.

**Goal:** Establish the assertion in the Statement.

1.1 For $c\in\{a,b\}$, the inclusion $\Phi_{I+c}\setminus\Phi_I\subseteq\Phi_{I+a+b}\setminus\Phi_I$ makes the relative root difference finite. By the positive-root/reflection correspondence in Dyer–Gimenez §§1.4 and 1.28, $\Phi_{I+c}^+\setminus\Phi_I^+$ is in bijection with $(W_{I+c}\setminus W_I)\cap\operatorname{Ref}(W)$. Apply Lemma 1.25 to $\Pi_I\subseteq\Pi_{I+c}$: the component $[I,c]$ containing $c$ is spherical. The inverse of $\nu(c,I)=w_{[I,c]}w_{[I,c]-c}$ is exactly the generator $v_{c,I}$ of [[def-standard-expressions-artin-tits-normalisers]]. Lemma 1.25(a) gives $N(v_{c,I})=\Phi_{I+c}^+\setminus\Phi_I^+$. [F1, given]

2.1 The inversion set is contained in $N(q)$ supplied by [[lem-author-a7d202611130-finite-relative-longest]], so §1.5 gives $v_{c,I}\preceq q$. Its intersection with the simple roots is precisely $\{\alpha_c\}$: every other simple root in $I+c$ lies in $I$. Hence $v_{a,I}\ne v_{b,I}$. [step 1.1] ∎
