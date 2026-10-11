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

[F3] The polynomial graph convention: the standard graph bimodule $R_x$ carries the left coordinate action $f\cdot r=f\cdot x r$ on the right parameter, so a constituent whose central-action branch is $f\mapsto f(y^{-1}\tau)$ corresponds to the graph label $x=y^{-1}$; the standard support filtration multiplicities $r_{x,d}(-)$ are defined by the graph layers and are preserved by passing to the fraction field, and right origin reduction collapses all graph supports ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F4] The antidominant projective has a Verma flag with the factors $\Delta(w\cdot\lambda)$, $w\in W$, once each; by BGG reciprocity $(P(a):\Delta(w\cdot\lambda))=[\Delta(w\cdot\lambda):L(a)]=1$ for every $w$, so $V\Delta(w\cdot\lambda)\cong\mathbb k$ for every $w$ and $V_R\Delta_R(w\cdot\lambda)$ is free of rank one over $R$, its closed fiber being one-dimensional ([[thm-projectives-in-category-o-have-verma-flags]], [[thm-bgg-reciprocity]], [[def-verma-flag-and-its-multiplicities]], [[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[thm-soergels-struktursatz-full-faithfulness-on-projectives]]).

## Proof

**Proof technique:** direct.

1.1 The functor $V_R$ is exact and sends each deformed standard $\Delta_R(y\cdot\lambda)$ to a finite free $R$-module of rank one: by [F4] its closed fiber is one-dimensional, and by [F2] the Hom module into the Verma-filtered standard is finite free with base change, so the rank is one. [F2, F4]

1.2 On that rank-one free module the center acts on the generic constituent of highest weight $y\cdot\lambda+\tau$ by the scalar $\operatorname{HC}_\rho(z)(y(\lambda+\rho)+\tau)=\sigma_\lambda(\operatorname{HC}_\rho(z))(y^{-1}\tau)$, which in the polynomial graph convention [F3] is the branch of the graph label $x=y^{-1}$; hence the graph label of the standard constituent is the inverse of its highest-weight label. [F2, F3]

1.3 Deformed wall crossing and reduction-of-Hom identify the right localization of the chosen polynomial lift $\mathsf B(P)$ with $V_RP_R$: the empty word corresponds to the identity graph branch, the wall formula of [F2] realizes the iterated $C\otimes_{C^s}(-)$ action, and the dictionary of [F1] matches the labels $w\leftrightarrow w^{-1}$. [F1, F2]

2.1 Passing to the fraction field, the graph-support ranks of $\mathsf B(P)$ at $x$ are therefore the multiplicities of the deformed Verma constituents of $P_R$ at the inverse label $y=x^{-1}$, and flat localization preserves these ranks; the deformed Verma flag of $P_R$ specializes exactly to the Verma flag of $P$ by [F2], so summing the graded multiplicities gives $(P:\Delta(y\cdot\lambda))=\sum_dr_{y^{-1},d}(\mathsf B(P))$, which is the stated comparison at $v=1$. [F2, F3, step 1.1, step 1.2, step 1.3]

3.1 The comparison is stated for ranks before reduction: right origin reduction turns $\mathsf B(P)$ into $V(P)$ but identifies all graph supports, so no separated labelled support filtration intrinsic to the finite-dimensional $V(P)$ is claimed; the argument uses only the type-A graph calculus and the deformed wall-crossing dictionary, so the same ungraded comparison holds with the Weyl-group polynomial/deformed lifts in the other complex semisimple types, and the fixed average coordinate of the permutation realization is split off before reduction. [F1, F3, step 2.1] ∎
