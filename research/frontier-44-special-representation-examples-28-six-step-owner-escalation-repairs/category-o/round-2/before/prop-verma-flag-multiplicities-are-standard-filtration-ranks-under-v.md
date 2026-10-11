---
id: prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v
kind: proposition
title: Verma-flag multiplicities are standard-filtration ranks under V
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       def-the-antidominant-projective-and-the-soergel-functor,
       thm-soergels-struktursatz-full-faithfulness-on-projectives,
       thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules,
       def-verma-flag-and-its-multiplicities,
       thm-projectives-in-category-o-have-verma-flags,
       def-reduced-soergel-module-and-dominant-lefschetz-operator,
       def-axiom-of-choice,
       lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree,
       thm-lifting-of-indecomposable-projectives-to-the-deformed-family,
       def-type-a-standard-graph-bimodules-support-filtrations-and-character,
       lem-the-central-action-on-the-deformed-antidominant-projective,
       thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule,
       thm-bgg-reciprocity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.2, Lemma 1 and its use in the proofs of Lemmas 3-4; Section 2.6, Lemma 10(i): <P(x^{-1}.0)> = C_x(1)<M(0)> and the associated Verma multiplicity statement"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Remark 4.20(1): dim V(M) = [M : L_{w_0}], the rank-one case of the general multiplicity statement"
---

## Statement

Assume the Axiom of Choice. For a projective $P$ in a regular integral type-A
block, choose its polynomial Soergel lift $\mathsf B(P)$ determined by the
preceding projective dictionary: if $P=\bigoplus_wP(w\cdot\lambda)^{m_w}$, take
$\mathsf B(P)=\bigoplus_wB_{w^{-1}}^{m_w}$, so that its right reduction is
$V(P)$ after forgetting auxiliary grading. Write $r_{x,d}(\mathsf B(P))$ for
the graded multiplicity of the polynomial standard graph module supported at
$x$ in its standard support filtration, with the standard-generator
normalization of the polynomial Soergel category. Then
$$(P:\Delta(y\cdot\lambda))=\sum_d r_{y^{-1},d}(\mathsf B(P)).$$
Equivalently the polynomial Soergel character of this lift, evaluated at $v=1$
and with inverse labels, recovers the ordinary Verma-flag character of $P$.
These are ranks before reduction; no separated Bruhat-support filtration
intrinsic to the finite-dimensional module $V(P)$ is asserted, since the graph
supports coalesce at the origin. The same ungraded multiplicity comparison
holds with the corresponding Weyl-group polynomial/deformed lifts in other
complex semisimple types.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular integral block with $V=\operatorname{Hom}(P(w_0\cdot\lambda),-)$, the deformed family over $R=S(\mathfrak h)_{(0)}$, and the type-A polynomial graph conventions.

[F1] The projective/Soergel-module dictionary: $V$ restricts to an equivalence $\operatorname{Proj}(\mathcal O_\lambda)\xrightarrow{\sim}\{\text{ungraded Soergel modules}\}$ with $P(w\cdot\lambda)\mapsto\bar B_{w^{-1}}$, and the normalized polynomial lifts are the self-dual ones ([[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]]).

[F2] Deformed data: each lifted projective $P_R$ has a finite deformed Verma flag with the same multiplicities as its closed fiber, $\operatorname{Hom}_{\mathcal O_R}(P_R,N)$ is finite free for Verma-filtered $N$ with arbitrary base change, and a map that is an isomorphism on the residue fiber is an isomorphism; the central action on a deformed standard constituent of highest weight $x\cdot\lambda+\tau$ is by $\operatorname{HC}_\rho(z)(x(\lambda+\rho)+\tau)=\sigma_\lambda(\operatorname{HC}_\rho(z))(x^{-1}\tau)$, and $V\theta_s\cong C\otimes_{C^s}V$ ([[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], [[lem-the-central-action-on-the-deformed-antidominant-projective]], [[thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule]]).

[F3] The standard graph bimodule $S_x$ has ordinary left action and right action $r\cdot g=r\,x(g)$, where $x(g)(\tau)=g(x^{-1}\tau)$. Untwisting its right action by $r\mapsto x^{-1}(r)$ makes the right parameter ordinary and the left action $f\mapsto x^{-1}(f)$, whose value at $\tau$ is $f(x\tau)$. Thus the central branch $f\mapsto f(y^{-1}\tau)$ has graph label $x=y^{-1}$. Support-layer ranks are preserved on passing to the fraction field, while origin reduction coalesces all supports ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F4] The antidominant projective has a Verma flag with the factors $\Delta(w\cdot\lambda)$, $w\in W$, once each; by BGG reciprocity $(P(a):\Delta(w\cdot\lambda))=[\Delta(w\cdot\lambda):L(a)]=1$ for every $w$, so $V\Delta(w\cdot\lambda)\cong\mathbb k$ for every $w$ and $V_R\Delta_R(w\cdot\lambda)$ is free of rank one over $R$, its closed fiber being one-dimensional ([[thm-projectives-in-category-o-have-verma-flags]], [[thm-bgg-reciprocity]], [[def-verma-flag-and-its-multiplicities]], [[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[thm-soergels-struktursatz-full-faithfulness-on-projectives]]).

## Proof

**Proof technique:** direct.

1.1 The functor $V_R$ is exact and sends each deformed standard $\Delta_R(y\cdot\lambda)$ to a finite free $R$-module of rank one: by [F4] its closed fiber is one-dimensional, and by [F2] the Hom module into the Verma-filtered standard is finite free with base change, so the rank is one. [F2, F4]

1.2 On that rank-one free module the center acts on the generic constituent of highest weight $y\cdot\lambda+\tau$ by the scalar $\operatorname{HC}_\rho(z)(y(\lambda+\rho)+\tau)=\sigma_\lambda(\operatorname{HC}_\rho(z))(y^{-1}\tau)$, which in the polynomial graph convention [F3] is the branch of the graph label $x=y^{-1}$; hence the graph label of the standard constituent is the inverse of its highest-weight label. [F2, F3]

1.3 The preceding dictionary proves the deformed, action-compatible wall isomorphism $V_R\theta_s\cong R\otimes_{R^s}V_R$ by adjunction, the translated central inclusion and the coefficient-of-$\alpha_s$ Frobenius pairing; it also proves deformed full faithfulness and the natural reduction-of-Hom map. Iteration identifies the localized polynomial word with the $V_R$-image of its lifted projective word. The unique top-label polynomial summand and the top projective summand match under this full faithfulness, by the dictionary's length induction. Restriction to their matching idempotents therefore gives an actual $A$-module isomorphism $\mathsf B(P)\otimes_SR\cong V_RP_R$, preserving every generic branch. It is not inferred from a mere origin isomorphism. [F1, F2, F3, algebra]

2.1 Passing to the fraction field, the graph-support ranks of $\mathsf B(P)$ at $x$ are therefore the multiplicities of the deformed Verma constituents of $P_R$ at the inverse label $y=x^{-1}$, and flat localization preserves these ranks; the deformed Verma flag of $P_R$ specializes exactly to the Verma flag of $P$ by [F2], so summing the graded multiplicities gives $(P:\Delta(y\cdot\lambda))=\sum_dr_{y^{-1},d}(\mathsf B(P))$, which is the stated comparison at $v=1$. [F2, F3, step 1.1, step 1.2, step 1.3]

3.1 These are ranks before origin reduction, so no intrinsic separated support filtration on $V(P)$ is asserted. For another complex semisimple type use the deformed lift $V_RP_R$ and its generic branch ranks, constructed in the preceding dictionary without type-A diagrammatic classification. Steps 1.1--1.2 identify each standard with its rank-one inverse branch in any reflection realization, so the same equality holds for these Weyl-group deformed lifts; whenever a corresponding polynomial lift is chosen, its localization has those same ranks. The type-A polynomial support-filtration formula is the particular case of step 2.1, with the fixed average coordinate split off. [F1, F2, F3, step 1.1, step 1.2, step 2.1, algebra] ∎
