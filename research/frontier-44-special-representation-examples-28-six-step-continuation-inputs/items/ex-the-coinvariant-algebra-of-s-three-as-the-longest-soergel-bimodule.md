---
id: ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule
kind: example
title: "The coinvariant algebra of S_3 as the Soergel bimodule of the longest element"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-real-type-a-soergel-category-and-scalar-extension, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-reduced-soergel-module-and-dominant-lefschetz-operator, thm-soergels-character-conjecture, def-the-rank-two-longest-type-a-soergel-bimodule, thm-rank-two-type-a-soergel-bimodule-decompositions, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-the-type-a-standard-character-is-multiplicative]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.1, the paragraph after Theorem 1.4 on the finite case and the coinvariant ring; Section 3.2 for the bar involution and the Kazhdan-Lusztig basis"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Satz 6.14 and Bemerkung 6.16 (the self-duality and the triangular form of the characters)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 1.7 (modules de Soergel) and Section 0.1 (the geometric identification for finite Weyl groups)"
verification:
  precheck: pass
---

## Example

Take $n=3$ and let $w_0=s_1s_2s_1$ be the longest element of $S_3$. Then $B_{w_0}=S\otimes_{S^{S_3}}S(3)$ and its reduced module is the coinvariant algebra $C=S/(S^{S_3}_+)$ with the external shift removed: $C$ has the Poincare polynomial $1+2t^2+2t^4+t^6$, so $\dim C=6$, and in the centered grading
$$\dim(\overline{B_{w_0}})^{-3}=\dim(\overline{B_{w_0}})^{3}=1,\qquad \dim(\overline{B_{w_0}})^{-1}=\dim(\overline{B_{w_0}})^{1}=2 .$$
The standard-basis expansion of the Kazhdan-Lusztig basis element is
$$\underline H_{w_0}=H_{w_0}+v(H_{s_1s_2}+H_{s_2s_1})+v^2(H_{s_1}+H_{s_2})+v^3,$$
obtained by solving the bar-invariance and triangularity conditions with coefficients in $v^d\mathbb Z[v^{-2}]$; its coefficients are non-negative, its value at $v=1$ sums to $6=\dim C$, and it agrees with the rank-one and rank-two Kazhdan-Lusztig data $P_{e,w_0}=P_{s_i,w_0}=P_{w,w_0}=1$ for $\ell(w)=2$. Hence $\operatorname{ch}(B_{w_0})=\underline H_{w_0}$: Soergel's conjecture holds for the longest element of $S_3$, and the $\Delta$-multiplicities of the coinvariant bimodule are the six coefficients just displayed, one for each element of $S_3$.

## Verification
**Proof technique:** direct; the identification with the invariants-tensor bimodule, an explicit bar-invariance computation in the Hecke algebra, and the comparison of the graded dimensions.

**Given:** $S=\mathbb R[x_1,x_2,x_3]$ with $\deg x_i=2$, the longest element $w_0=s_1s_2s_1$, the rank-two longest bimodule $B_{i,i+1,i}=R\otimes_{R^{W_{i,i+1}}}R(3)$ ([[def-the-rank-two-longest-type-a-soergel-bimodule]]), the reduced module and the character ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]), the normalized Hecke algebra with $H_s^2=1+(v^{-1}-v)H_s$ and the Kazhdan-Lusztig basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), and the character theorem ([[thm-soergels-character-conjecture]]).

[F1] For a finite reflection group the invariant ring is polynomial and $S$ is free over it of rank $|W|$; for $S_3$ acting on the three coordinates one has $S^{S_3}=\mathbb R[e_1,e_2,e_3]$ with $\deg e_i=2i$ and $S$ free of rank $6$ over it, so the Hilbert series of $C=S/(S^{S_3}_+)$ is $[(1-t^4)(1-t^6)]/(1-t^2)^2=1+2t^2+2t^4+t^6$; the reduced module of $B_{w_0}=S\otimes_{S^{S_3}}S(3)$ is $(S\otimes_{S^{S_3}}S)\otimes_S\mathbb R=S/(S^{S_3}_+)$ with the external shift removed ([[def-the-rank-two-longest-type-a-soergel-bimodule]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).

[F2] In the Hecke algebra $H_s^{-1}=H_s+(v-v^{-1})$ for every simple $s$, and the bar involution acts on the standard basis by $\overline{H_w}=H_{w^{-1}}^{-1}$; the Kazhdan-Lusztig basis is the unique basis of elements $\underline H_w=H_w+\sum_{y<w}p_{y,w}H_y$ with $p_{y,w}\in v\mathbb Z[v]$ and $\overline{\underline H_w}=\underline H_w$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F3] The coefficient of $H_y$ in $\operatorname{ch}(M)$ is $\sum_d(M:\Delta_y(d))v^d$ with non-negative integral multiplicities, and for the standard layer $\Delta_y(d)$ the reduced dimension sits in degree $\ell(y)-d$; hence the multiset of monomials of the character, read with the degrees $\ell(y)-d$, is the graded dimension of the reduced module ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

1.1 **The bimodule and its reduction.** For $n=3$ the parabolic $W_{1,2}=\langle s_1,s_2\rangle$ is all of $S_3$, so the rank-two longest bimodule of [F1] is $B_{1,2,1}=S\otimes_{S^{S_3}}S(3)$ (after scalar extension to $\mathbb R$), and the indecomposable of the longest element is $B_{w_0}=B_{1,2,1}$, the top summand of the Bott-Samelson product $B_{s_1}B_{s_2}B_{s_1}\cong B_{w_0}\oplus B_{s_1}$ ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]). Its reduction is $C=S/(S^{S_3}_+)$ with Hilbert series $1+2t^2+2t^4+t^6$ by [F1]; removing the external shift $(3)$ centers the grading, and the graded dimensions in degrees $-3,-1,1,3$ are $1,2,2,1$. [given, F1]

1.2 **The Kazhdan-Lusztig element.** Put $A:=v-v^{-1}$ and $J:=H_{w_0}+v(H_{s_1s_2}+H_{s_2s_1})+v^2(H_{s_1}+H_{s_2})+v^3$. The element $J$ lies in $H_{w_0}+\sum_{y<w_0}v\mathbb Z[v]H_y$, since all coefficients belong to $v\mathbb Z[v]$. For bar-invariance we expand: from $H_s^{-1}=H_s+A$ and the reduced products $H_{s_1}H_{s_2}=H_{s_1s_2}$ and $H_{s_1s_2}H_{s_1}=H_{w_0}$ one computes $\overline{H_{s_1s_2}}=H_{s_1s_2}+A(H_{s_1}+H_{s_2})+A^2$ and $\overline{H_{w_0}}=H_{w_0}+A(H_{s_1s_2}+H_{s_2s_1})+A^2(H_{s_1}+H_{s_2})+A+A^3$, while $\overline{H_{s_1}}=H_{s_1}+A$ and $\overline{H_{s_2}}=H_{s_2}+A$. Applying the semilinear involution to $J$ gives $\overline J=\overline{H_{w_0}}+v^{-1}(\overline{H_{s_1s_2}}+\overline{H_{s_2s_1}})+v^{-2}(\overline{H_{s_1}}+\overline{H_{s_2}})+v^{-3}$; collecting coefficients in the standard basis, the coefficient of $H_{s_1s_2}+H_{s_2s_1}$ becomes $A+v^{-1}=v$, the coefficient of $H_{s_1}+H_{s_2}$ becomes $A^2+2v^{-1}A+v^{-2}=v^2$, and the coefficient of $H_e$ becomes $A+A^3+2v^{-1}A^2+2v^{-2}A+v^{-3}=v^3$. Hence $\overline J=J$, and by the uniqueness clause of [F2] $J=\underline H_{w_0}$. [given, F2, algebra]

2.1 **Character and multiplicities.** By the character theorem $\operatorname{ch}(B_{w_0})=\underline H_{w_0}$, so the $\Delta$-multiplicities of $B_{w_0}$ are exactly the six coefficients of $J$, one for each of the six elements of $S_3$. Reading them through [F3], the layer $\Delta_{w_0}(0)$ contributes in degree $\ell(w_0)=3$, the two layers $\Delta_{s_1s_2}(1),\Delta_{s_2s_1}(1)$ contribute in degree $1$ with multiplicity two, the two layers $\Delta_{s_1}(2),\Delta_{s_2}(2)$ contribute in degree $-1$ with multiplicity two and the layer $\Delta_e(3)$ contributes in degree $-3$; this is the graded dimension $1,2,2,1$ of the centered coinvariant algebra computed in step 1.1, and the value at $v=1$ is $6=\dim C$. The coefficients $P_{e,w_0}=P_{s_i,w_0}=P_{s_1s_2,w_0}=P_{s_2s_1,w_0}=1$ are the classical normalization of these coefficients. This verifies the example. [step 1.1, step 1.2] ∎

## Remarks

- The two computations are independent: the bar-invariance determines the Kazhdan-Lusztig element from the Hecke algebra alone, and the graded dimensions of the coinvariant algebra come from the invariant theory; their agreement is the content of Soergel's conjecture at $w_0$.
- The example is an illustration of the character theorem, not a supplier of it; the base of the simultaneous induction is computed on the axiom page and does not use this page.
