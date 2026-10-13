---
id: lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label
kind: lemma
title: Wall-crossing compositions produce the projective with the top standard label
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s,
       lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension,
       cor-projective-standard-labels-lie-above-the-head, thm-bgg-reciprocity,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       def-verma-flag-and-its-multiplicities, def-axiom-of-choice,
       thm-bgg-verma-homomorphism-criterion,
       thm-strong-linkage-principle-for-verma-modules,
       def-bruhat-order-on-a-finite-weyl-group,
       lem-finite-weyl-strong-exchange-and-deletion,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       lem-finite-length-objects-decompose-into-indecomposables,
       thm-projectives-in-category-o-have-verma-flags,
       def-projective-functors-on-a-regular-integral-category-o-block,
       thm-universal-property-of-verma-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Proposition 4.10 and Corollary 4.11: the module P_x = Theta_u...Theta_s(P_1), its standard filtration with Delta_x appearing exactly once, and its uniqueness as the indecomposable summand of P_x not occurring for shorter expressions (printed pp. 9-10)"
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.5, the inductive description of P(x.A) as the unique indecomposable summand of B_n...B_1 M(A) not isomorphic to any P(y.A) with l(y) < l(x) (preprint pp. 16-18)"
---

## Statement

Assume the Axiom of Choice. For a dominant regular integral representative
$\lambda$ and a reduced word $w=s_1\cdots s_k$, set
$\theta_{\underline w}=\theta_{s_k}\cdots\theta_{s_1}$, so that the standards
follow right multiplication in word order. Then
$$\theta_{\underline w}\Delta(\lambda)\cong P(w\cdot\lambda)\oplus\bigoplus_{x<w}P(x\cdot\lambda)^{m_x},\qquad m_x\in\mathbb Z_{\ge0}.$$
Its class is $(1+s_1)\cdots(1+s_k)$ under the standard class map, with actual
subexpression multiplicities. The BGG matrix satisfies
$(P(x\cdot\lambda):\Delta(y\cdot\lambda))=[\Delta(y\cdot\lambda):L(x\cdot\lambda)]$,
vanishes unless $y\le x$ in the Bruhat order, and has diagonal entries one.
Hence the top summand $P(w\cdot\lambda)$ occurs once and is the only summand
whose flag contains $\Delta(w\cdot\lambda)$; the remaining multiplicities are
determined by this triangular matrix and the product class. Consequently every
indecomposable projective is a summand of a word of wall crossings applied to
$\Delta(\lambda)$.

## Facts & Assumptions

**Given:** The regular integral block $\mathcal O_\lambda$ with dominant representative $\lambda$, a reduced word $w=s_1\cdots s_k$, and the word functor $\theta_{\underline w}$.

[F1] The dominant Verma $\Delta(\lambda)$ is projective in the block: by the universal property $\operatorname{Hom}_{\mathcal O_\lambda}(\Delta(\lambda),N)\cong N_\lambda$, and the $\lambda$-weight functor is exact on the block because $\lambda$ is the maximal weight of its linkage class; wall crossing is exact and biadjoint, hence preserves projectives; projectives have Verma flags and decompose into finitely many indecomposables ([[def-regular-integral-category-o-block-and-its-antidominant-weight]], [[thm-universal-property-of-verma-modules]], [[def-projective-functors-on-a-regular-integral-category-o-block]], [[thm-projectives-in-category-o-have-verma-flags]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[lem-finite-length-objects-decompose-into-indecomposables]]).

[F2] The class of $\theta_{\underline w}\Delta(\lambda)$ is $(1+s_1)\cdots(1+s_k)$ with subexpression multiplicities, and every standard factor of $\theta_{\underline w}\Delta(\lambda)$ has a label $\le w$ in the Bruhat order ([[lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s]], [[lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension]]).

[F3] For a projective $P(x\cdot\lambda)$ the BGG reciprocal multiplicities $(P(x\cdot\lambda):\Delta(y\cdot\lambda))=[\Delta(y\cdot\lambda):L(x\cdot\lambda)]$ vanish unless $y\le x$ in the Bruhat order, and $(P(x\cdot\lambda):\Delta(x\cdot\lambda))=1$: the nonzero-composition direction is the published label triangle, and the Bruhat form follows from strong linkage and the strong-exchange/reflection-descent criterion for the dominant orbit ([[thm-bgg-reciprocity]], [[cor-projective-standard-labels-lie-above-the-head]], [[thm-strong-linkage-principle-for-verma-modules]], [[lem-finite-weyl-strong-exchange-and-deletion]], [[def-bruhat-order-on-a-finite-weyl-group]], [[thm-bgg-verma-homomorphism-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The object $Y:=\theta_{\underline w}\Delta(\lambda)$ is projective by [F1], and the block has finite-dimensional Hom spaces and finite decompositions, so $Y\cong\bigoplus_xP(x\cdot\lambda)^{m_x}$ with nonnegative multiplicities; its standard-flag multiplicities are read from its class in [F2], and every standard factor has a label $\le w$. [F1, F2]

2.1 No summand $P(x\cdot\lambda)$ with $x\not\le w$ occurs: the diagonal entry of the BGG matrix gives $(P(x\cdot\lambda):\Delta(x\cdot\lambda))=1$ by [F3], so such a summand would contribute a standard factor $\Delta(x\cdot\lambda)$ to $Y$ with $x\not\le w$, contradicting step 1.1. [F3, step 1.1]

3.1 The full subexpression contributes $\Delta(w\cdot\lambda)$ with multiplicity one to the product class, and no other summand $P(x\cdot\lambda)$ with $x\le w$, $x\neq w$ contributes to the multiplicity of $\Delta(w\cdot\lambda)$: $(P(x\cdot\lambda):\Delta(w\cdot\lambda))\neq0$ forces $w\le x$ by [F3], so with $x\le w$ it forces $x=w$. Hence $m_w=1$, and the only summand whose flag contains $\Delta(w\cdot\lambda)$ is $P(w\cdot\lambda)$. [F3, step 1.1, step 2.1]

4.1 The remaining multiplicities $m_x$, $x<w$, are determined recursively from the product class: the coefficient of $\Delta(x\cdot\lambda)$ in the class of $Y$ equals $m_x+\sum_{x<z}m_z(P(z\cdot\lambda):\Delta(x\cdot\lambda))$, whose second term involves only strictly larger labels already determined; solving downward in the finite Bruhat order gives all $m_x$. [step 3.1, algebra]

5.1 Every indecomposable projective is a summand of such a word: the decomposition of step 1.1 with diagonal support realizes each $P(w\cdot\lambda)$ as a summand of $\theta_{\underline w}\Delta(\lambda)$ for any reduced word $w$, which is the stated generation statement. [step 3.1] ∎
