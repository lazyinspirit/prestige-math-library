---
id: thm-higher-level-schur-weyl-double-centralizer
kind: theorem
title: "The higher-level Schur-Weyl double centralizer and Schur quotient"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 36
deps: [thm-higher-level-schur-weyl-endomorphism-isomorphism,
       def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
       thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       def-degenerate-cyclotomic-hecke-algebra, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Theorems A and B, Theorem 3.7, Theorem 5.10, Theorem 5.14 and Corollary 5.15, printed pp. 3-4, 15-16 and 28-32: the double centralizer, the Morita equivalence under admissibility, the exact Schur quotient and the fully faithful statements."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Theorem 3.7 and Section 3.5, printed pp. 26-28: the endomorphism algebra of the projective generator and its blocks."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 6, Theorem 6.10 area, printed pp. 60-72: the parabolic Struktursatz and the Hom functor from the tensor object."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix the pyramid $\lambda$ with columns
$q_1\ge\cdots\ge q_l$, an origin $c$, a degree $d\ge0$, and let
$V_c^{\otimes d}$ be the truncated tensor space with its finite W-algebra image
$W_d$ and cyclotomic Hecke image $B_d$. Then:

1. $W_d$ and $B_d$ are mutual centralizers on $V_c^{\otimes d}$, for every
   complex origin $c$; this is the raw double centralizer.
2. For admissible origins, $V_c^{\otimes d}$ is a progenerator and
   $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ is a Morita equivalence between
   $W_d$-mod and $B_d$-mod.
3. The genuine Whittaker functor followed by this equivalence is the exact
   Schur Serre quotient killing exactly the off-standard simples; it is fully
   faithful on all projectives of the relevant parabolic summand and on all
   tiltings, and its left adjoint is right exact and recovers
   $\operatorname{add}(T)$ but need not recover every projective.
4. For a nonempty pyramid, in the stable range $q_l\ge d$ the algebra $B_d$ is the full cyclotomic
   algebra $H_d(\mathbf a)$; outside the stable range and for admissible
   origins the central-corner identification $B_d=fH_d(\mathbf a)f$ is used.

Mutual centralizers alone do not give the Morita statement: the nonadmissible
origin example with $c=(0,1)$, $q=(1,1)$ and $d=2$ has a nonprojective tensor
module while the mutual centralizer identities still hold.

## Facts & Assumptions

**Given:** The pyramid, the origin $c$, the tensor space $V_c^{\otimes d}$, the image algebras $W_d$, $B_d$, and the tensor object $T=P_c\otimes V^{\otimes d}$ of the relevant parabolic summand.

[F1] The raw filtered double centralizer holds for every complex origin; for admissible origins the tensor space is a progenerator and $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ is a Morita equivalence $W_d\text{-mod}\to B_d\text{-mod}$; the nonadmissible counterexample with $c=(0,1)$, $q=(1,1)$, $d=2$ separates the two assertions ([[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]]).

[F2] $\operatorname{End}_{\mathfrak g}(T)^{\mathrm{op}}=B_d$ and, componentwise, $\operatorname{End}_{\mathfrak g}(T_\alpha)^{\mathrm{op}}=B_\alpha$ for admissible origins; the map $H_d(\mathbf a)\twoheadrightarrow B_d$ is surjective with injectivity exactly in the nonempty stable range and also in the trivial empty branch ([[thm-higher-level-schur-weyl-endomorphism-isomorphism]]).

[F3] The Whittaker quotient $\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ is exact, its kernel is the Serre subcategory of off-standard simples, it is fully faithful on all projectives and on tiltings, its left adjoint $\pi^*=T\otimes_{B_d}-$ is right exact, and $\pi^*\pi$ recovers $\operatorname{add}(T)$ but need not recover every projective of the ambient category ([[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]], [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]]).

[F4] The stable range is $q_l\ge d$; in it $B_d=H_d(\mathbf a)$, and outside it the admissible-origin image is the central block corner $fH_d(\mathbf a)f$ ([[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]], [[def-degenerate-cyclotomic-hecke-algebra]]).



## Proof

**Proof technique:** direct.

**Given:** The mutual centralizer and Morita inputs of [F1], the endomorphism isomorphism of [F2], the Schur quotient properties of [F3], and the stable-range/corner dictionary of [F4].

1.1 The raw double centralizer. For arbitrary complex origin the filtered leading-symbol lifting argument of [F1] gives $W_d=B_d'$ and $B_d=W_d'$ on $V_c^{\otimes d}$, with associated graded images the Vust centralizers; this is the all-origin clause and does not use admissibility. [F1, algebra]

1.2 Admissible Morita equivalence. Assume $c$ admissible. By the progenerator clause of [F1], $V_c^{\otimes d}$ is a progenerator for $W_d$ and $\operatorname{Hom}_{W_d}(V_c^{\otimes d},-)$ is a Morita equivalence; by the component clause of [F2] its endomorphism algebra is $B_d=\operatorname{End}_{W_d}(V_c^{\otimes d})^{\mathrm{op}}$, so the equivalence is the standard one attached to the $(W_d,B_d)$-bimodule $V_c^{\otimes d}$, identifying $W_d$-mod with $B_d$-mod. [F1, F2, algebra]

2.1 The Schur Serre quotient. The composite of the genuine Whittaker functor with the equivalence of step 1.2 is $\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ by [F2] and [F3]; it is exact and its kernel is the Serre subcategory generated by the off-standard simples, so it is the exact Schur Serre quotient killing exactly those simples. [F2, F3, step 1.2, algebra]

3.1 Full faithfulness and the left adjoint. By [F3] the quotient is fully faithful on all projectives of the relevant parabolic summand and on all tiltings, while its left adjoint $T\otimes_{B_d}-$ is only right exact and $\pi^*\pi$ recovers $\operatorname{add}(T)$ but need not recover every projective; these boundaries are part of the statement and are not repaired by changing conventions. [F3, step 2.1, given]

4.1 Stable range and central corner. For the empty pyramid degree zero is the scalar identity and positive degree is the zero-algebra identity, so all comparisons hold directly with $f=1$ in degree zero and $f=0$ in positive degree. For a nonempty pyramid, if $q_l\ge d$ then $B_d=H_d(\mathbf a)$ by [F4] and the component form of step 2.1 uses the full cyclotomic algebra; outside the stable range, and for admissible origins, the image is the central block corner $B_d=fH_d(\mathbf a)f$ of [F4], with the component corners $B_\alpha=f_\alpha H_\alpha(\mathbf a)f_\alpha$ of [F2]. For nonadmissible origins only the raw mutual centralizer statement of step 1.1 remains. [F2, F4, step 1.1, algebra] ∎

## Remarks

- The statement separates three levels of structure that are often conflated: the all-origin mutual centralizer (step 1.1), the admissible-origin Morita equivalence (step 1.2), and the stable-range simplification $B_d=H_d(\mathbf a)$ (step 4.1). Each consumes a different supplier.
- The left adjoint $\pi^*$ is used only where it is exact enough: recovering $\operatorname{add}(T)$ on standard-labelled prinjectives, never for arbitrary projectives.
