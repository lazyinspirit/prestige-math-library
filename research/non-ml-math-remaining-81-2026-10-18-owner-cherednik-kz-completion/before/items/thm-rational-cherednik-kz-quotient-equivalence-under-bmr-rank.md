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

**Given:** The rational Cherednik category $\mathcal O_c$, its localization, the KZ functor, and the finite reflection Hecke algebra.

[F1] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]: KZ is the monodromy functor to $\mathbb C[B_W]$-modules and $\mathcal H_{q(c)}(W)$ is its specified Hecke quotient.

[F2] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: localization and KZ are exact, and $M_{\rm reg}$ is the localized vector bundle with connection.

[F3] [[thm-rational-cherednik-kz-factors-through-hecke-algebra]]: the all-object factorization claim is retained as a prerequisite; its proof is separately escalated.

[F4] [[lem-rational-cherednik-category-o-has-finite-length]]: the locally authored category O finiteness statement. It does not include the needed BGG reciprocity and projective-generator rank calculation.

## Proof

**Proof technique:** direct, with an unresolved quotient-equivalence argument.

**Given:** [F1]–[F4] and the stated rank hypothesis.

1.1 By [F2], $\mathcal O_{\rm tor}=\ker(M\mapsto M_{\rm reg})$ is closed under subobjects, quotients, and extensions: apply the exact localization functor to each short exact sequence. The same exactness shows KZ kills this Serre subcategory. By [F3], KZ has target $\mathcal H_{q(c)}(W)$-modules, so it induces an exact functor from the Serre quotient to that module category. [F1, F2, F3, algebra]

2.1 The remaining equivalence is not implied by exactness and the rank hypothesis alone. The published proof uses the regular Riemann–Hilbert correspondence to prove that the quotient KZ functor is fully faithful with image closed under subobjects and quotients; it then uses a projective generator and BGG reciprocity to show the canonical surjection $\mathcal H_{q(c)}(W)\longrightarrow\operatorname{End}(P_{\rm KZ})^{\rm op}$ is an isomorphism by comparing both dimensions with $|W|$. Neither the regular Riemann–Hilbert/full-faithfulness argument nor the required Cherednik-category BGG reciprocity and projective-generator calculation has been proved by [F1]–[F4]. The exact proposed local suppliers are `thm-rational-cherednik-kz-localization-identifies-the-torsion-quotient` (regular integrable connection and full-faithfulness hypotheses) and `thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank` (highest-weight structure, projective generator, BGG reciprocity, and standard ranks). These significant prerequisites need local proof on this A page; this claim is therefore escalated. [F1, F2, F3, F4] ∎
