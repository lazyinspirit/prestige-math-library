---
title: Third-stage graded isomorphism
status: draft
research_item: lem-third-graded-isomorphism
dependency_level: 20
---

PDF p. 12: Section 6 opening projection; PDF p. 13: Opening sentence

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence)
- [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing)
- [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)
- [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-motivic-cohomology](item-def-motivic-cohomology)


## Statement
Assume the Axiom of Choice. Let $X$ be a Noetherian scheme of Krull dimension $3$ over a field $k$. Then the actual third-stage projection followed by the graded comparison is an isomorphism
$$p_3:\pi_0F^3_{\mathrm{mot}}K(X)\xrightarrow{\ \cong\ }H^{6,3}_{\mathrm{mot}}(X,\mathbb Z).$$
In particular, this applies to the normal threefolds in Section 6 under the article's standing conventions.

Here $F^r_{\mathrm{mot}}K(X)$ is stage $r$ of the decreasing motivic filtration of the nonconnective $K$-theory spectrum; its third graded spectrum is the cofiber of the transition $F^4_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X)$. The map $p_3$ is induced by the canonical map from the third stage to this cofiber and the specified graded equivalence. For the weight-three motivic complex $C=\mathbb Z(3)_{\mathrm{mot}}(X)$, the group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ means $H^6(C)$. The symbol $\pi_i$ denotes the $i$th stable homotopy group. No injectivity of the map from the third stage to $K(X)$ is asserted here.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, and a Noetherian $k$-scheme $X$ of Krull dimension $3$.

**Goal:** Prove that the actual third-stage projection $p_3$ is an isomorphism.

[F1] A Noetherian scheme is quasi-compact and quasi-separated. Under the choice assumption, [def-motivic-filtration](item-def-motivic-filtration) supplies the decreasing motivic tower over $k$, and [def-motivic-cohomology](item-def-motivic-cohomology) defines the indicated motivic cohomology group.

[F2] For a qcqs $k$-scheme, [prop-motivic-graded-spectral-sequence](item-prop-motivic-graded-spectral-sequence) gives the actual cofiber triangle $F^4_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X)\to\mathbb Z(3)_{\mathrm{mot}}(X)[6]$. The natural shift-index identification in [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) identifies the zeroth homotopy group of this graded spectrum with $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$.

[F3] [lem-high-filtration-vanishing](item-lem-high-filtration-vanishing) states, for a Noetherian scheme of finite dimension $d$ over a field and under the Axiom of Choice, that $\pi_0F^i_{\mathrm{mot}}K(X)=0$ for $i>d$ and $\pi_jF^i_{\mathrm{mot}}K(X)=0$ for $i\ge d$ and $j<0$.

[F4] [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the homotopy exact sequence of a filtered stage and its cofiber: the image of each map equals the kernel of the next.

## Proof

**Proof technique:** Apply the homotopy exact sequence to the third graded cofiber and use the two stage-four vanishing statements.

1.1 Since $X$ is Noetherian, it is qcqs; therefore the tower and the actual third graded cofiber in [F1] and [F2] apply. Write $G^3$ for that cofiber. The supplied graded equivalence and shift-index identification give a natural isomorphism $\pi_0G^3\cong H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. [F1, F2, given]

1.2 Apply [F4] with stage index $3$ and homotopy degree $0$. The resulting exact segment is
$$\pi_0F^4_{\mathrm{mot}}K(X)\longrightarrow\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow\pi_0G^3\longrightarrow\pi_{-1}F^4_{\mathrm{mot}}K(X).$$
The middle arrow is the map induced by the canonical third-stage-to-cofiber map. [F4, step 1.1]

2.1 In [F3], take $d=3$ and $i=4$. Since $4>3$, the first group in step 1.2 is zero. Since $4\ge3$ and $-1<0$, the last group is also zero. Exactness therefore makes the middle arrow both injective and surjective. [F3, step 1.2, algebra]

3.1 Compose this middle arrow with the isomorphism of step 1.1. By definition this composite is $p_3$, so $p_3$ is an isomorphism. The article's normal threefold case is included because its schemes satisfy the stated Noetherian dimension-three hypotheses; normality and algebraic closedness are not needed for this deduction. [step 1.1, step 2.1] ∎
