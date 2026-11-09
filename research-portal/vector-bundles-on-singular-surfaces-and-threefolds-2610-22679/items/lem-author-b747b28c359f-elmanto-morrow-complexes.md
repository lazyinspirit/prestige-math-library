---
id: lem-author-b747b28c359f-elmanto-morrow-complexes
kind: lemma
title: Elmanto–Morrow motivic complex input
status: published
domain: mathematics
external_input: true
deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
dependency_roles:
  def-article-conventions: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction, pp. 2–3, especially Theorem 1.1 and its opening
        statement; Section 4 for the construction
      statement: For a prime field F and each integer j at least zero there is a
        finitary Nisnevich sheaf Z(j)_mot on qcqs F-schemes with values in D(Z).
      hypotheses: F is Q or F_p for a prime p; schemes are quasi-compact and
        quasi-separated over F; j is nonnegative.
      reading_limits: The introduction and the opening statement of Theorem 1.1 were
        read for this input. The construction and proofs in Section 4 were not
        reconstructed or independently checked here; no other property of
        Theorem 1.1 is imported by this item.
proof_strategy: direct
dependency_level: 7
---

## Statement
Let $F$ be a prime field, namely $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. For each integer $j\geq0$, Elmanto and Morrow construct a finitary Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ on the category of quasi-compact quasi-separated $F$-schemes, valued in the derived category $D(\mathbb Z)$ of complexes of abelian groups. Finitary means compatibility with the filtered inverse limits to which the cited theorem applies. The sheaf is understood in the derived, homotopy-coherent sense of the cited source.

For a field $k$ with prime subfield $F$, restriction along the forgetful functor from qcqs $k$-schemes to qcqs $F$-schemes supplies the corresponding contravariant complex-valued functor on $\mathrm{Sch}_k$ of [[def-article-conventions]], with Nisnevich descent for covers in that category. Nisnevich covers are as in [[def-nisnevich-covering-interface]].

## External input
The existence and Nisnevich descent of the prime-field sheaves are imported from the opening assertion of Elmanto–Morrow, Theorem 1.1, under its stated hypotheses. This item does not reconstruct their construction or import the filtration, spectral sequence, or comparison theorems.

## Facts & Assumptions

[F1] The cited external input gives the prime-field functor and its Nisnevich descent.

[F2] A qcqs $k$-scheme is a qcqs $F$-scheme by composition with $\operatorname{Spec}k\to\operatorname{Spec}F$; Nisnevich covering families are defined by their underlying étale morphisms and residue-field maps ([[def-article-conventions]], [[def-nisnevich-covering-interface]]).

## Proof

**Given:** A field $k$, its prime subfield $F$, and $j\geq0$.

**Goal:** Obtain the stated restricted functor and descent from the external input.

1.1 Apply [F1] to $F$ and $j$. Composition with the forgetful functor in [F2] gives a contravariant $D(\mathbb Z)$-valued functor on qcqs $k$-schemes. [F1, F2]

2.1 Every Nisnevich covering family and its fibre-product descent diagram in the chosen qcqs $k$-site is also such a diagram after forgetting to $F$. The descent equivalence supplied by [F1] therefore applies to the restricted diagram. This proves the stated restriction and descent; existence itself remains the external input. [F1, F2, step 1.1] ∎
