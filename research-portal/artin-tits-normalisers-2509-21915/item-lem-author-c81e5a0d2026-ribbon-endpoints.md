---
title: Elementary ribbons have explicitly determined endpoints
status: published
research_item: lem-author-c81e5a0d2026-ribbon-endpoints
dependency_level: 6
sources:
  references:
    - title: "Eddy Godelle, Parabolic subgroups of Garside groups II: ribbons,
        arXiv:0811.0751v1"
      url: https://arxiv.org/pdf/0811.0751v1
      locator: Definitions 3.7–3.8 (printed pp. 12–13); §3.3 opening paragraph and
        Definition 3.12 (printed p. 14); Example 3.14 (printed p. 15)
      statement: Standard positive parabolic monoids are objects of the positive
        ribbon category. For spherical Artin type, Example 3.14 gives a
        nu-structure with nu_I(a)=Delta_I^{-1}Delta_{I union {a}} for a outside
        I and nu_I(s)=Delta_{L_s} for s in I, where L_s indexes the
        indecomposable standard parabolic factor containing s. Indecomposable
        there means that the group is not an internal direct product of two
        proper standard parabolic subgroups. Definition 3.12 makes these values
        positive ribbon atoms. The opening of Section 3.3 uses g^{-1} A_I^+
        g=A_J^+ for ribbons I to J.
      hypotheses: Finite-rank Artin–Tits system (A,S) of spherical type; standard
        parabolic subgroups and their positive monoids.
      reading_limits: In this adjudication, read the online extracted PDF text of
        Definitions 3.7–3.8 on printed pp. 12–13, the opening of Section 3.3 and
        Definition 3.12 on printed p. 14, and Example 3.14 including its
        definition of indecomposable on printed p. 15 of arXiv:0811.0751v1. No
        visual PDF check was completed. Only the stated spherical nu-structure,
        formulas, positive ribbon convention and atomicity are imported; the
        proof attributed to [15] and that historical source were not read or
        reconstructed. The identification of indecomposable standard parabolic
        factors with diagram components is proved locally from existing
        mathematical suppliers, as are the endpoint and support separation. No
        arbitrary-type or ribbon splitting theorem is imported.
---

## Prerequisites

- [thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites)
- [lem-author-c81e5a0d2026-positive-support](item-lem-author-c81e5a0d2026-positive-support)
- [lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation)
- [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)
- [math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection)
- [math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [math:def-internal-direct-product-of-subgroups](https://alphabetamath.cc/item/def-internal-direct-product-of-subgroups)
- [` Eddy Godelle, Parabolic subgroups of Garside groups II: ribbons, arXiv:0811.0751v1 · Definitions 3.7–3.8 (printed pp. 12–13); §3.3 opening paragraph and Definition 3.12 (printed p. 14); Example 3.14 (printed p. 15) `](https://arxiv.org/pdf/0811.0751v1)


## Statement

In a spherical Artin system $(A,S)$, let $I\subseteq S$ and $a\in S\setminus I$, put $K=I\cup\{a\}$ and $J=\iota_K(I)$. Then $r(I,a)=\Delta_I^{-1}\Delta_K$ is positive, belongs to the positive ribbon category, and satisfies $r(I,a)^{-1}A_I^+r(I,a)=A_J^+$ and $r(I,a)^{-1}A_Ir(I,a)=A_J$. It is an arrow $I\to J$ in the left-to-right convention. Moreover $r(I,a)\notin A_I^+$. For $s\in I$, Godelle's other elementary atom $\nu_I(s)=\Delta_{I_s}$, where $I_s$ is the vertex set of the connected component containing $s$ in the induced Coxeter diagram on $I$, belongs to $A_I^+$.

## Facts & Assumptions

[F1] The spherical positive monoid is the monoidal Garside structure in [thm-spherical-artin-garside-input-artin-tits-prerequisites](item-thm-spherical-artin-garside-input-artin-tits-prerequisites). The same theorem applies to the restricted spherical systems in [F7].

[F2] Positive support and support of $\Delta_K$ are given in [lem-author-c81e5a0d2026-positive-support](item-lem-author-c81e5a0d2026-positive-support).

[F3] Longest-lift conjugation on all standard generators is computed in [lem-author-c81e5a0d2026-longest-conjugation](item-lem-author-c81e5a0d2026-longest-conjugation).

[F4] The independent spherical nu-structure and positive ribbon meaning are the external input below.

[F5] The Coxeter diagram, induced subdiagram on $I$ and connected-component vertex sets are defined in [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type).

[F6] The universal properties of the Artin monoid and group and the projection $\pi:A\to W$, $\pi(\sigma_s)=s$, are supplied by [math:lem-cg-artin-presentation-universal-properties-and-coxeter-surjection](https://alphabetamath.cc/item/lem-cg-artin-presentation-universal-properties-and-coxeter-surjection), Statement (1)–(3). Only these parts are used.

[F7] For every $X\subseteq S$, the restricted Coxeter presentation is $(W_X,X)$, with $W_X\cap S=X$; since $W$ is finite, every such system is spherical. ([math:thm-hh-parabolic-minimal-representatives-and-length-additivity](https://alphabetamath.cc/item/thm-hh-parabolic-minimal-representatives-and-length-additivity), Statement (2).)

[F8] The Coxeter matrix entries satisfy $m(u,v)=\operatorname{ord}(uv)$ in $W$ for distinct simple generators. ([math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length), Conventions.)

[F9] An internal direct product consists of normal subgroups generating the whole group, each intersecting the subgroup generated by the other factors trivially. ([math:def-internal-direct-product-of-subgroups](https://alphabetamath.cc/item/def-internal-direct-product-of-subgroups).)

## External input

Godelle's Definitions 3.7–3.8 and 3.12 specify positive ribbons and nu-functions. Example 3.14 imports the spherical nu-structure and its formulas: the exterior value is $\Delta_I^{-1}\Delta_K$, and the internal value at $s\in I$ is $\Delta_{L_s}$, where $L_s$ indexes the indecomposable standard parabolic factor containing $s$. Here indecomposable excludes an internal direct product of two proper standard parabolic subgroups. Existence and atomicity, including exterior positivity, are imported without reconstructing the proof attributed there to [15]. The equivalence $L_s=I_s$ is established locally in steps 1.4–3.1, rather than assumed from the diagram definition. The endpoint and support separation are also local deductions.

## Proof

**Given:** The spherical Artin system $(A,S)$, $I\subseteq S$, $a\in S\setminus I$, $K=I\cup\{a\}$, $J=\iota_K(I)$ and the elementary ribbon above.

**Goal:** Identify its endpoint and decide whether each type of atom is internal, including the component identification required by the internal formula.

1.1 The external Example 3.14 identifies $r(I,a)$ with $\nu_I(a)$ and states that these functions give a nu-structure; Definition 3.12 makes their values atoms of the positive ribbon category. In particular $r(I,a)$ is positive and conjugates the indicated positive parabolic monoids. [F1, F4]

1.2 By [F3], conjugation by $\Delta_I$ permutes $I$ and conjugation by $\Delta_K$ sends it to $\iota_K(I)$. Therefore $r(I,a)^{-1}A_I^+r(I,a)=\Delta_K^{-1}\Delta_I A_I^+\Delta_I^{-1}\Delta_K=A_J^+$. The same calculation gives the subgroup equality. This fixes the endpoint independently of any source/target naming. [F3]

1.3 If $r(I,a)$ belonged to $A_I^+$, the positive identity $\Delta_K=\Delta_I r(I,a)$ would have support contained in $I$ by [F2]. But its support is $K$, containing $a\notin I$. This contradiction proves it is outside $A_I^+$. [F2]

1.4 For $X\subseteq I$, apply [F1] to the restricted spherical system from [F7]. Its Artin group maps onto $A_X$ by sending each restricted generator to the ambient generator; this is a homomorphism by [F6]. In that restricted group every element is $uv^{-1}$ with $u,v$ positive: such expressions include each generator and its inverse, and are closed under multiplication, since a common right multiple $bp=cq$ of positive $b,c$ gives $(ab^{-1})(cd^{-1})=(ap)(dq)^{-1}$. Such common right multiples exist by [F1]. Mapping these expressions into $A$ proves that every element of $A_X$ is $uv^{-1}$ with $u,v\in A_X^+$. No injectivity of the restricted-group map is assumed here. [F1, F6, F7, algebra]

2.1 Let $C_1,\ldots,C_k$ be the diagram components of $I$. Distinct components have $m(u,v)=2$ between their generators, so the Artin relations make the subgroups $A_{C_j}$ commute elementwise; they generate $A_I$. To prove uniqueness, suppose $g_1\cdots g_k=1$ with $g_j\in A_{C_j}$, and use step 1.4 to write $g_j=u_jv_j^{-1}$ with $u_j,v_j\in A_{C_j}^+$. Commuting distinct factors gives $u_1\cdots u_k=v_1\cdots v_k$ in $A$. By [F1] this is an equality in the presented positive monoid, hence a finite sequence of positive braid replacements connects the two words. By [F2], all intermediate words use only $I$. For a fixed $C_j$, erase all letters outside $C_j$ throughout this sequence. A braid relation within $C_j$ remains that relation, one outside it becomes empty on both sides, and one crossing components is a commuting relation and becomes the same word on both sides. Thus $u_j=v_j$ and $g_j=1$ for every $j$. Each factor is normal, since it is preserved by conjugation from itself and commutes with the other generating factors. The factors therefore form an internal direct product in [F9]. When $I=\varnothing$ this is the empty product. [F1, F2, F5, F6, F9, step 1.4]

3.1 Conversely, suppose $A_X$ is an internal direct product of two proper standard parabolic subgroups $A_U,A_V$, where $U,V\subseteq X\subseteq I$. The generators are nonidentity by [F6] and [F7], so trivial intersection forces $U\cap V=\varnothing$. Projecting the equality $A_X=A_UA_V$ to $W$ gives $W_X\subseteq W_{U\cup V}$, and hence $X=U\cup V$ by $W_{U\cup V}\cap S=U\cup V$ in [F7]. Normality of both factors and trivial intersection make them commute: each commutator belongs to both factors and is therefore the identity. For $u\in U,v\in V$, their Coxeter images commute, so $(uv)^2=1$; the order convention [F8] forces $m(u,v)=2$. Thus the nonempty parts $U,V$ have no diagram edge between them. In particular a connected $X$ admits no such decomposition. Together with step 2.1, this proves that the indecomposable standard parabolic factors are exactly the diagram components, and Godelle's $L_s$ equals $I_s$. [F5, F6, F7, F8, F9, step 2.1]

4.1 For $s\in I$, apply Example 3.14 only after the identification in step 3.1: it gives $\nu_I(s)=\Delta_{L_s}=\Delta_{I_s}$. By [F2] its support is $I_s\subseteq I$, so it belongs to $A_I^+$. Combined with steps 1.1–1.3, this proves all the assertions. [F2, F4, step 1.1, step 1.2, step 1.3, step 3.1] ∎
