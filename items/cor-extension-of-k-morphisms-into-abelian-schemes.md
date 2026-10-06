---
id: cor-extension-of-k-morphisms-into-abelian-schemes
kind: corollary
title: "K-morphisms from smooth models into abelian schemes extend uniquely"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-weil-extension-rational-map-into-group-scheme
  - def-abelian-scheme
  - thm-valuative-criterion-properness
  - def-s-dense-open-and-s-rational-map
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-scheme-theoretic-fibre
  - lem-field-valued-points-of-schemes
  - lem-filtered-colimit-fp-scheme-stage
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.4/4 (extension of K-morphisms into abelian schemes)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $S$ be a Dedekind scheme with function field $K$, let $A\to S$ be an abelian scheme ([[def-abelian-scheme]]), and let $Z\to S$ be a smooth $S$-scheme of finite type. Then restriction along the generic fibre $Z_K=Z\times_S\operatorname{Spec}K\hookrightarrow Z$ is a bijection
$$\operatorname{Hom}_S(Z,A)\longrightarrow\operatorname{Hom}_K(Z_K,A_K).$$

## Facts & Assumptions

**Given:** AC and DC, a Dedekind scheme $S$ with function field $K$, an abelian scheme $A\to S$, a smooth finite-type $S$-scheme $Z$, and a $K$-morphism $u_K:Z_K\to A_K$.

[F1] A smooth scheme over the regular Dedekind base is regular, hence normal ([[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-regular-local-rings-are-normal]]). Its local rings at the generic points of special fibres are discrete valuation rings with fraction field the function field of the component ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[def-scheme-theoretic-fibre]]); points and field-valued points correspond as in [[lem-field-valued-points-of-schemes]].

[F2] A proper morphism satisfies the valuative criterion of properness, so a morphism from the generic point of a valuation ring extends uniquely ([[thm-valuative-criterion-properness]], [[def-abelian-scheme]]).

[F3] Weil's extension theorem for rational maps into smooth separated group schemes over a regular Noetherian base: a rational map defined in codimension at most one extends uniquely ([[thm-weil-extension-rational-map-into-group-scheme]], [[def-s-dense-open-and-s-rational-map]], assuming AC and DC).

[F4] A morphism into a finitely presented target over a filtered limit of affine schemes descends to a finite stage. For an affine neighbourhood of $\xi$, its local ring is the filtered limit of the rings of principal neighbourhoods of $\xi$; hence an $S$-morphism $\operatorname{Spec}\mathcal O_{Z,\xi}\to A$ spreads to an open neighbourhood of $\xi$ ([[lem-filtered-colimit-fp-scheme-stage]]).

## Proof

**Proof technique:** direct: the valuative criterion at the generic points of the special fibres supplies definedness in codimension one, and Weil's extension theorem extends.

1.1 Restriction produces a well-defined map $\operatorname{Hom}_S(Z,A)\to\operatorname{Hom}_K(Z_K,A_K)$, injective because $A$ is separated over $S$ and $Z_K$ is schematically dense in the flat $S$-scheme $Z$; so it remains to show surjectivity. [F3, given, algebra]

2.1 For each height-one point $\xi$ of $Z$ lying over a closed point $s\in S$, [F1] gives a DVR $\mathcal O_{Z,\xi}$ whose fraction field is the function field of the component of $Z$ containing $\xi$. The restriction of $u_K$ gives a point of $A$ over that fraction field, and properness [F2] extends it to an $S$-morphism $\operatorname{Spec}\mathcal O_{Z,\xi}\to A$. By [F4] this map spreads to an open neighbourhood $W_\xi$ of $\xi$ in $Z$. Its restriction to $W_\xi\cap Z_K$ equals $u_K$, since they agree at the generic point and $A$ is separated. Independently, $u_K$ spreads to a morphism on an open neighbourhood $W_0\subseteq Z$ containing the whole generic fibre: work locally on a finite-type affine open of the Dedekind base, apply [F4] to its generic localization and the finitely presented smooth source and target, and then glue the resulting restrictions by separatedness. Put $V=W_0\cup\bigcup_\xi W_\xi$. This is an open subscheme containing the generic fibre and every vertical height-one point; every horizontal height-one point lies in the generic fibre. For each closed $s$, $V_s$ contains the generic points of all components of the smooth, hence reduced fibre $Z_s$, so $V$ is $S$-dense. The local extensions agree with each other and with $u_K$ on overlaps: the generic fibre is schematically dense in every open subscheme of the flat $Z$, and $A$ is separated. Thus they glue to a morphism $V\to A$, which represents an $S$-rational map defined at every height-one point. [F1, F2, F4, step 1.1, construct]

3.1 The base $S$ is regular Noetherian and $Z$ is smooth over $S$, so Weil's extension theorem [F3] applies to the $S$-rational map represented in step 2.1. It extends uniquely to an $S$-morphism $Z\to A$ restricting to $u_K$. This proves surjectivity and hence the bijection. Uniqueness also follows from separatedness and schematic density of $Z_K$. The argument is applied componentwise; components of a smooth scheme over a Dedekind base are disjoint locally. [F3, step 2.1, algebra] ∎
