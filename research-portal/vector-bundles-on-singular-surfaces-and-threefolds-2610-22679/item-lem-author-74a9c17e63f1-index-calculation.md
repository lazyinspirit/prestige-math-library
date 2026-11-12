---
title: Cohomological indexing of the actual graded groups
status: published
research_item: lem-author-74a9c17e63f1-index-calculation
dependency_level: 16
---

PDF p. 4: Motivic graded spectral sequence; PDF p. 9: Eventual filtration vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison)
- [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index)
- [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-motivic-filtration](item-def-motivic-filtration)


## Statement
Assume the Axiom of Choice and the fixed compatible size conventions of the supplied constructions. Let $k$ be the standing field and let $X$ be a quasi-compact quasi-separated $k$-scheme. Use the integer-indexed motivic filtration $F^\bullet_{\mathrm{mot}}K(X)$ augmented to $K(X)$, with its constant nonpositive extension and actual source graded comparisons. Write $\operatorname{gr}^rF_{\mathrm{mot}}K(X)=\operatorname{cofib}(F^{r+1}_{\mathrm{mot}}K(X)\to F^r_{\mathrm{mot}}K(X))$ and let $\pi_n$ denote spectral homotopy in degree $n$.

For $j\geq0$ use $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)=H^i(\mathbb Z(j)_{\mathrm{mot}}(X))$; for $j<0$ extend this notation by $H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=0$, consistently with the zero extension of the motivic complexes. For all integers $a,b$, the additive tower spectral sequence indexed from page 2 has
$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}F_{\mathrm{mot}}K(X)\cong H^{a-b,-b}_{\mathrm{mot}}(X,\mathbb Z),$$
with zero terms when $-b<0$. Its differentials are $d_s:E_s^{a,b}\to E_s^{a+s,b-s+1}$ for $s\geq2$, and the corresponding target homotopy degree at $(a,b)$ is $-a-b$. Convergence is a separate assertion requiring additional hypotheses, such as the degreewise bounds of the tower interface.

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed compatible size conventions are those of the supplied tower, graded comparison and shift interfaces. They discharge the foundational and realization premises at their first applications below; the stipulated size assumptions are additional to Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** These assumptions, the standing field $k$, a qcqs $k$-scheme $X$, the actual integer-indexed augmented motivic tower and its source graded equivalences.

**Goal:** Check the stage, weight, shift and differential labels explicitly, including the negative-weight convention.

[F1] [def-motivic-filtration](item-def-motivic-filtration) supplies this coherent integer-indexed decreasing tower, its augmentation to $K(X)$ and its constant nonpositive extension on the stated scheme category. [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) applies to that tower and supplies the page-2 indexing $\pi_{-a-b}\operatorname{gr}^{-b}$ and the differential degrees without convergence hypotheses. Its convergence clause additionally requires degreewise high-stage vanishing and low-stage isomorphisms, which are not assumed here.

[F2] [lem-author-74a9c17e63f1-graded-comparison](item-lem-author-74a9c17e63f1-graded-comparison) supplies the actual graded equivalence $\operatorname{gr}^rF_{\mathrm{mot}}K(X)\simeq(\mathcal U M_r(X))[2r]$ for $r\geq0$, where $M_r(X)=\mathbb Z(r)_{\mathrm{mot}}(X)$ and $\mathcal U$ is that supplier's exact derived-to-spectrum realization. Its realization convention gives $\pi_n(\mathcal U C)=H^{-n}(C)$ and $\mathcal U(C[2r])\simeq(\mathcal U C)[2r]$. The same supplier identifies negative graded terms with zero, including $r=-1$.

[F3] [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) supplies the cochain shift convention and the cohomology calculation $H^{-n}(C[2r])\cong H^{2r-n}(C)$. Only this cochain calculation is used here; no equivalence between its sequential Eilenberg–Mac Lane model and $\mathcal U C$ is assumed. [def-motivic-cohomology](item-def-motivic-cohomology) defines $H^{i,r}_{\mathrm{mot}}(X,\mathbb Z)=H^i(M_r(X))$ for $r\geq0$; negative-weight notation is the inline zero extension in the Statement.

## Proof
1.1 Under [A1], apply the tower construction of [F1] to its actual augmented tower, obtaining the stated additive page-2 spectral sequence. For $r\geq0$, apply the supplied realization and graded comparison of [F2]: $\pi_n\operatorname{gr}^rF_{\mathrm{mot}}K(X)\cong\pi_n\mathcal U(M_r(X)[2r])\cong H^{-n}(M_r(X)[2r])\cong H^{2r-n}(M_r(X))$, where the last identification uses [F3]. Substitute $r=-b$ and $n=-a-b$ when $b\leq0$. Then $2r-n=-2b+a+b=a-b$, giving the displayed motivic group. If $b>0$, [F2] makes the negative graded term zero and the explicit extension in the Statement makes its motivic notation zero as well. [A1, F1, F2, F3, algebra]

2.1 The exact-couple source and target labels are those supplied in [F1]; their differential sends $(a,b)$ to $(a+s,b-s+1)$ and lowers total homotopy degree by one. Indeed $-(a+s)-(b-s+1)=-a-b-1$. Thus the shift calculation is compatible with the differential and with the corresponding target homotopy degree. It establishes these indices; convergence requires the separate additional hypotheses in [F1]. [F1, step 1.1, algebra] ∎
