---
id: thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank
kind: theorem
title: "KZ identifies the torsion quotient with Hecke modules under the Hecke-rank hypothesis"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 14
deps:
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - thm-rational-cherednik-kz-factors-through-hecke-algebra
  - lem-rational-cherednik-category-o-has-finite-length
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image
  - thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.4, Theorems 5.14–5.15 and proof, PDF pp. 20–21; the subsection assumes dim H=|W|."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§6.3, Theorem 6.10, PDF p. 47; explicit hypothesis dim Hq(G)=|G|."
---

## Statement

Let $\mathcal O_{\rm tor}=\{M\in\mathcal O_c:M_{\rm reg}=0\}$, the kernel of localization to $\mathfrak h_{\rm reg}$. If
$$\dim_{\mathbb C}\mathcal H_{q(c)}(W)=|W|,$$
then KZ induces an equivalence
$$\mathcal O_c(W,\mathfrak h)/\mathcal O_{\rm tor}\simeq\mathcal H_{q(c)}(W)\text{-mod}.$$
The rank equality is an explicit hypothesis; no unconditional equivalence is claimed.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] [[thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image]]: the quotient $\mathcal C=\mathcal O_c/\mathcal O_{\rm tor}$ embeds fully faithfully and exactly into braid-group modules with image closed under subobjects and quotients.

[F2] [[thm-rational-cherednik-kz-factors-through-hecke-algebra]]: the embedding has target $\mathcal H=\mathcal H_{q(c)}(W)$-modules.

[F3] [[thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank]]: the underlying vector-space KZ functor is $\operatorname{Hom}_{\mathcal O_c}(P,-)$ for a projective $P=P_{\rm KZ}$, and $\dim\operatorname{End}_{\mathcal O_c}(P)=|W|$; its proof supplies highest-weight structure, BGG reciprocity and the full rank calculation.

[F4] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: KZ is exact and its kernel is precisely the torsion subcategory, since a nonzero localized flat bundle has nonzero fiber.

## Proof

**Proof technique:** direct.

**Given:** The stated hypotheses and Facts.

1.1 Exact localization makes $\mathcal O_{\rm tor}$ Serre, and [F1]–[F2] give an exact fully faithful functor $\overline{\operatorname{KZ}}:\mathcal C\to\mathcal H\text{-mod}$ with subquotient-closed image. It is faithful on objects: a zero fiber means a zero localized bundle. Set $Q=\overline P$, the image of [F3]'s projective. [F1, F2, F3, F4, construct]

2.1 For every torsion object $T$, $\operatorname{Hom}(P,T)=\operatorname{KZ}(T)=0$. Consequently $P$ has no nonzero torsion quotient. In the explicit Serre-quotient roofs, any source subobject $P'\subset P$ with torsion quotient must equal $P$. A map $P\to M/T$ lifts to $M$ by projectivity, uniquely modulo maps into $T$, which are zero. Hence $\operatorname{Hom}_{\mathcal C}(Q,\overline M)=\operatorname{Hom}_{\mathcal O_c}(P,M)=\operatorname{KZ}(M)$ naturally. This proves $Q$ projective because its represented functor is exact. It is a finite generator: evaluation from finitely many copies of $Q$ is onto, since a nonzero cokernel would receive a nonzero map from $Q$, lifting by projectivity and contradicting the evaluation image. Hom spaces are finite by [F1]. [F1, F3, F4, step 1.1, algebra]

3.1 Put $A=\operatorname{End}_{\mathcal C}(Q)^{\rm op}=\operatorname{End}_{\mathcal O_c}(P)^{\rm op}$. Finite presentations by $Q$ and projectivity show that $\operatorname{Hom}_{\mathcal C}(Q,-)$ is an equivalence $\mathcal C\simeq A\text{-mod}$: apply it to a presentation, and conversely lift a finite free $A$-presentation to copies of $Q$ and take its cokernel. Naturality identifies the Hecke action with restriction along an algebra homomorphism $\phi:\mathcal H\to A$. Explicitly if $q_h\in\operatorname{End}(P)$ acts by precomposition, $h\cdot f=fq_h$, then $\phi(h)=q_h^{\rm op}$ and $\phi(h_1h_2)=\phi(h_1)\phi(h_2)$. Under $f\mapsto f^{\rm op}$ the module $\operatorname{KZ}(P)$ is the regular left $A$-module restricted by $\phi$. [F2, F3, step 2.1, construct, algebra]

4.1 The map $\phi$ is surjective. Let $B=\operatorname{im}\phi\subset A$, an $\mathcal H$-submodule of the regular restricted module, containing $1$. By [F1] it belongs to the essential image. Full faithfulness makes its inclusion into $A$ an $A$-linear map when interpreted through the equivalence in the preceding step. Its image is therefore an $A$-submodule containing $1$, hence all of $A$. Thus $B=A$. This proves surjectivity using actual subobject closure; exactness and the numerical hypothesis alone would not prove it. [F1, step 3.1, algebra]

5.1 By [F3], $\dim A=|W|$. The stated hypothesis gives $\dim\mathcal H=|W|$, so the surjection $\phi$ is an isomorphism. Restriction along it is an equivalence, and the equivalence in the earlier step identifies it with $\overline{\operatorname{KZ}}$. This proves the required torsion-quotient equivalence under exactly the stated Hecke-rank hypothesis. [F3, step 3.1, step 4.1, given, algebra] ∎
