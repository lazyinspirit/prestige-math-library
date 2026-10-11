---
id: def-the-klr-cartan-pairing
kind: definition
title: "The KLR Cartan (graded Hom) pairing on the projective Grothendieck group"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, def-graded-grothendieck-group-shift-module-and-cartan-map, def-split-grothendieck-group-of-an-additive-category, def-graded-balanced-tensor-product-and-homogeneous-hom, def-projective-simple-hom-pairing-on-grothendieck-groups, thm-projective-hom-pairing-is-additive-and-graded-sesquilinear, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: '§2.5, (2.41)-(2.47) and the paragraph computing $([P_j],[P_i])=\mathrm{gdim}(_jR(\nu)_i)$, printed pp. 26-28; §3.1, Proposition 3.3, printed pp. 36-37 and §3.4, the comparison $([P],[Q])''=\mathrm{gdim}\,\mathrm{HOM}(P,Q)$, printed p. 44.'
    - title: 'Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4 (42 pages)'
      url: 'https://arxiv.org/pdf/1102.4677'
      locator: '§2, the definitions of $\mathrm{HOM}(M,N)$, $\dim_q$ and the graded Hom conventions, printed pp. 8-9.'
    - title: 'Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9 (62 pages)'
      url: 'https://arxiv.org/pdf/1001.2020'
      locator: '§1.3, Remark 1.9, printed pp. 19-20: the symmetrizing adjustment of the trace, the convention underlying the dualities used here.'
---

## Definition

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and let $\psi$ be the horizontal-reflection anti-involution of $R(\beta)$ (reflection of diagrams about a horizontal axis, which reverses the order of crossings); for a finitely generated graded left module $P$ let $P^{\psi}$ be the right module with $p\cdot r:=\psi(r)p$. For $\beta\in Q_+$ define the **Cartan pairing**
$$([P],[Q])_\beta:=\mathrm{gdim}_k\bigl(P^{\psi}\otimes_{R(\beta)}Q\bigr)\in\mathbb Z[q,q^{-1}]\cdot(\beta)_q,\qquad (\beta)_q:=\prod_i\prod_{a=1}^{\beta_i}\frac1{1-q^{2d_i a}},$$
for finitely generated graded projective modules $P,Q$, where $\mathrm{gdim}_kM=\sum_{m\in\mathbb Z}q^m\dim_kM_m$; the tensor is over the graded algebra with the total-degree grading ([[def-graded-balanced-tensor-product-and-homogeneous-hom]]). Equivalently define the **hom pairing** $([P],[Q])'_\beta:=\mathrm{gdim}_k\operatorname{HOM}_{R(\beta)}(P,Q)$ ([[def-projective-simple-hom-pairing-on-grothendieck-groups]], [[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]]); then $([P],[Q])'_\beta=([P^\#],[Q])_\beta$ for the graded left projective $P^\#:=\operatorname{HOM}_{R(\beta)}(P,R(\beta))^\psi$. Thus the tensor form is symmetric and bilinear; the Hom form is conjugate-linear in its first variable and linear in its second. For the tensor form $([P],q[Q])=q([P],[Q])$ and $(q[P],[Q])=q([P],[Q])$, while the Hom form obeys $h(q^r[P],q^s[Q])=q^{s-r}h([P],[Q])$. Both are additive, vanish on different-weight components, and descend to $K_0(R)=\bigoplus_\beta K_0(R(\beta))$: the tensor form is $A$-bilinear and the Hom form is $A$-sesquilinear (first variable conjugate-linear), with values in $\mathbb Q(q)$, more precisely in the localization adjoining all $(1-q_i^{2a})^{-1}$; the values lie in $\mathbb Z[q,q^{-1}]\cdot(\beta)_q$ because $P^\psi\otimes_{R(\beta)}Q$ is a finite free graded module over the central color-symmetric polynomial subalgebra $C_\beta$ of [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]. Normalization: $([P_i],[P_i])=(1-q^{2d_i})^{-1}=(1-q_i^2)^{-1}$ and $([P_i],[P_j])=0$ for $i\ne j$, where $P_i=R(\alpha_i)$.

## Remarks

**Well-definedness.** $P^\psi\otimes_{R(\beta)}Q$ is a graded $k$-vector space of finite dimension in each degree and bounded below, so its graded dimension is a well-defined element of $\mathbb Z((q))$; the monic-root tower and PBW calculation in step 1.1 of [[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]] explicitly prove that $R(\beta)$ is finite graded free over $C_\beta$, although freeness is not a separate assertion of that lemma's Statement. Write $V=P^\psi\otimes_RQ$. Taking the split inclusions of $P$ and $Q$ into finite shifted-free $R$-modules and tensoring their splitting maps exhibits $V$ as a direct summand of a finite sum of shifts of $R$. Thus $V$ is finite graded projective over $C_\beta$. This upgrades the value to $\mathbb Z[q,q^{-1}]\cdot(\beta)_q$: lifting a homogeneous $k$-basis of $V/C_\beta^+V$ gives a surjection from a finite shifted free $C_\beta$-module with vanishing cokernel, whose projective splitting has kernel $K$ with $K=C_\beta^+K$, also vanishing by the least-degree argument; hence the Hilbert series is a finite Laurent polynomial times $\mathrm{gdim}\,C_\beta=(\beta)_q$. Symmetry of the tensor form is commutativity of the balanced tensor $P^\psi\otimes_RQ\cong Q^\psi\otimes_RP$ under the flip; the comparison form is the evaluation isomorphism $\operatorname{HOM}_R(P,R)\otimes_RQ\to\operatorname{HOM}_R(P,Q)$, $f\otimes v\mapsto(p\mapsto f(p)v)$, an isomorphism for shifted free $P$ and hence for all finite graded projective summands, twisted by $\psi$ on the first factor.

**Shifts and the two normalizations.** The total Hom-degree convention is that of [[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]], so $h(P\{r\},Q\{s\})=q^{s-r}h(P,Q)$; no scalar conjugation of the tensor value is valid, and the rank-one values $(R(\alpha_i),R(\alpha_i))=1/(1-q_i^2)$ already show that the Hom form is not the plain scalar extension of the tensor form. The generator values follow from $P_i=R(\alpha_i)=k[x_1]$, $P_i^\psi\otimes_{R(\alpha_i)}P_i\cong k[x_1]$ with $\deg x_1=2d_i$, and $([P_i],[P_j])=0$ for $i\ne j$ because the two weight components are orthogonal. The cited projective/module Hom suppliers concern finite-dimensional algebras. Here the same shift and additivity formulas follow directly from homogeneous Hom and evaluation on finite shifted-free modules and summands; their finite-dimensional hypotheses are not applied to $R(\beta)$. The anti-involution $\psi$ is recorded explicitly because it fixes the sign of the shift in the Hom form. No choice principle is used.
