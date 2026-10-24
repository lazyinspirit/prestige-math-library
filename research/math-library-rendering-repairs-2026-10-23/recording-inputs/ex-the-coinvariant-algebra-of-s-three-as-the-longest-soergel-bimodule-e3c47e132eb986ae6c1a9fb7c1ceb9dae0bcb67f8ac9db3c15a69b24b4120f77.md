---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule.json
  precheck: pass
id: ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule
kind: example
title: "The coinvariant algebra of $S_3$ as the Soergel bimodule of the longest element"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-real-type-a-soergel-category-and-scalar-extension, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-reduced-soergel-module-and-dominant-lefschetz-operator, def-the-rank-two-longest-type-a-soergel-bimodule, thm-rank-two-type-a-soergel-bimodule-decompositions, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-the-type-a-standard-character-is-multiplicative]
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

---

## Example

Take $n=3$ and let $w_0=s_1s_2s_1$ be the longest element of $S_3$. Then $B_{w_0}=S\otimes_{S^{S_3}}S(3)$ and its reduced module is $C(3)$, where $C=S/(S^{S_3}_+)$ is the unshifted coinvariant algebra: $C$ has the Poincare polynomial $1+2t^2+2t^4+t^6$, so $\dim C=6$, and in the centered grading
$$\dim(\overline{B_{w_0}})^{-3}=\dim(\overline{B_{w_0}})^{3}=1,\qquad \dim(\overline{B_{w_0}})^{-1}=\dim(\overline{B_{w_0}})^{1}=2 .$$
The standard-basis expansion of the Kazhdan-Lusztig basis element is
$$\underline H_{w_0}=H_{w_0}+v(H_{s_1s_2}+H_{s_2s_1})+v^2(H_{s_1}+H_{s_2})+v^3,$$
obtained by solving the bar-invariance and triangularity conditions with coefficients in $v^d\mathbb Z[v^{-2}]$; its coefficients are non-negative, its value at $v=1$ sums to $6=\dim C$, and it agrees with the rank-one and rank-two Kazhdan-Lusztig data $P_{e,w_0}=P_{s_i,w_0}=P_{w,w_0}=1$ for $\ell(w)=2$. Hence $\operatorname{ch}(B_{w_0})=\underline H_{w_0}$: Soergel's conjecture holds for the longest element of $S_3$, and the $\Delta$-multiplicities of the coinvariant bimodule are the six coefficients just displayed, one for each element of $S_3$.

## Verification
**Proof technique:** direct; the identification with the invariants-tensor bimodule, an explicit bar-invariance computation in the Hecke algebra, and the comparison of the graded dimensions.

**Given:** $S=\mathbb R[x_1,x_2,x_3]$ with $\deg x_i=2$, the longest element $w_0=s_1s_2s_1$, the rank-two longest bimodule $B_{i,i+1,i}=R\otimes_{R^{W_{i,i+1}}}R(3)$ ([[def-the-rank-two-longest-type-a-soergel-bimodule]]), the reduced module and the character ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]), the normalized Hecke algebra with $H_s^2=1+(v^{-1}-v)H_s$ and the Kazhdan-Lusztig basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), and multiplicativity of the standard character ([[lem-the-type-a-standard-character-is-multiplicative]]).

[F1] The rank-two longest bimodule is $S\otimes_{S^{S_3}}S(3)$ after real scalar extension, and right reduction is tensoring with $S/S_+=\mathbb R$ ([[def-the-rank-two-longest-type-a-soergel-bimodule]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]]). The symmetric-polynomial and quotient-basis computations needed here are supplied in step 1.1; no general invariant-ring theorem is assumed.

[F2] In the Hecke algebra $H_s^{-1}=H_s+(v-v^{-1})$ for every simple $s$, and the bar involution acts on the standard basis by $\overline{H_w}=H_{w^{-1}}^{-1}$; the Kazhdan-Lusztig basis is the unique basis of elements $\underline H_w=H_w+\sum_{y<w}p_{y,w}H_y$ with $p_{y,w}\in v\mathbb Z[v]$ and $\overline{\underline H_w}=\underline H_w$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F3] The coefficient of $H_y$ in $\operatorname{ch}(M)$ is $\sum_d(M:\Delta_y(d))v^d$ with non-negative integral multiplicities, and for the standard layer $\Delta_y(d)$ the reduced dimension sits in degree $\ell(y)-d$; hence the multiset of monomials of the character, read with the degrees $\ell(y)-d$, is the graded dimension of the reduced module ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F4] The character is multiplicative with simple value $H_s+v$, and the rank-two decomposition is $B_{s_1}B_{s_2}B_{s_1}\cong B_{w_0}\oplus B_{s_1}$ ([[lem-the-type-a-standard-character-is-multiplicative]], [[thm-rank-two-type-a-soergel-bimodule-decompositions]]).


1.1 **The bimodule and its reduction.** Symmetric polynomials in three variables are generated by $e_1,e_2,e_3$: for a homogeneous symmetric polynomial, its lexicographically leading monomial has exponents $a\ge b\ge c$; subtracting its coefficient times $e_1^{a-b}e_2^{b-c}e_3^c$ lowers that leading monomial. The finite set of monomials of the fixed total degree makes this reduction terminate. Thus $S^{S_3}=\mathbb R[e_1,e_2,e_3]$ and [F1] gives the reduced module $C(3)$ with $C=S/(e_1,e_2,e_3)$. Eliminating $x_3=-x-y$ gives $C=\mathbb R[x,y]/(x^3,y^2+xy+x^2)$: the $e_3$ relation is $x^2y+xy^2=0$, and subtracting this from $x(x^2+xy+y^2)=0$ gives $x^3=0$, with the same identities proving the reverse inclusion of ideals. Over $\mathbb R[x]/(x^3)$, division by the monic quadratic in $y$ gives the free basis $1,y$; hence $1,x,y,x^2,xy,x^2y$ is a real basis and the dimensions are $1,2,2,1$ in degrees $0,2,4,6$, centered at $-3,-1,1,3$ after shifting by $(3)$. The tensor bimodule is generated as a bimodule by $1\otimes1$ and its bottom component is one dimensional, so every degree-zero endomorphism is scalar; it is therefore indecomposable. The balanced surjection $f\otimes g\mapsto f w_0(g)$ onto $S_{w_0}$ proves that it has the $w_0$ graph in its support. In the rank-two decomposition it is the summand carrying the $w_0$ graph (the other summand $B_{s_1}$ has only the $e,s_1$ graphs), so its label is $w_0$. [given, F1]

1.2 **The Kazhdan-Lusztig element.** Put $A:=v-v^{-1}$ and $J:=H_{w_0}+v(H_{s_1s_2}+H_{s_2s_1})+v^2(H_{s_1}+H_{s_2})+v^3$. The element $J$ lies in $H_{w_0}+\sum_{y<w_0}v\mathbb Z[v]H_y$, since all coefficients belong to $v\mathbb Z[v]$. For bar-invariance we expand: from $H_s^{-1}=H_s+A$ and the reduced products $H_{s_1}H_{s_2}=H_{s_1s_2}$ and $H_{s_1s_2}H_{s_1}=H_{w_0}$ one computes $\overline{H_{s_1s_2}}=H_{s_1s_2}+A(H_{s_1}+H_{s_2})+A^2$ and $\overline{H_{w_0}}=H_{w_0}+A(H_{s_1s_2}+H_{s_2s_1})+A^2(H_{s_1}+H_{s_2})+A+A^3$, while $\overline{H_{s_1}}=H_{s_1}+A$ and $\overline{H_{s_2}}=H_{s_2}+A$. Applying the semilinear involution to $J$ gives $\overline J=\overline{H_{w_0}}+v^{-1}(\overline{H_{s_1s_2}}+\overline{H_{s_2s_1}})+v^{-2}(\overline{H_{s_1}}+\overline{H_{s_2}})+v^{-3}$; collecting coefficients in the standard basis, the coefficient of $H_{s_1s_2}+H_{s_2s_1}$ becomes $A+v^{-1}=v$, the coefficient of $H_{s_1}+H_{s_2}$ becomes $A^2+2v^{-1}A+v^{-2}=v^2$, and the coefficient of $H_e$ becomes $A+A^3+2v^{-1}A^2+2v^{-2}A+v^{-3}=v^3$. Hence $\overline J=J$, and by the uniqueness clause of [F2] $J=\underline H_{w_0}$. [given, F2, algebra]

2.1 **Character and multiplicities.** By [F4], $\operatorname{ch}(B_{w_0})=(H_{s_1}+v)(H_{s_2}+v)(H_{s_1}+v)-(H_{s_1}+v)=J$, the last equality following by the quadratic relation $H_s^2=1+(v^{-1}-v)H_s$ and reduced multiplication. Step 1.2 gives $J=\underline H_{w_0}$, so the $\Delta$-multiplicities of $B_{w_0}$ are exactly the six coefficients of $J$, one for each of the six elements of $S_3$. Reading them through [F3], the layer $\Delta_{w_0}(0)$ contributes in degree $\ell(w_0)=3$, the two layers $\Delta_{s_1s_2}(1),\Delta_{s_2s_1}(1)$ contribute in degree $1$ with multiplicity two, the two layers $\Delta_{s_1}(2),\Delta_{s_2}(2)$ contribute in degree $-1$ with multiplicity two and the layer $\Delta_e(3)$ contributes in degree $-3$; this is the graded dimension $1,2,2,1$ of the centered coinvariant algebra computed in step 1.1, and the value at $v=1$ is $6=\dim C$. The coefficients $P_{e,w_0}=P_{s_i,w_0}=P_{s_1s_2,w_0}=P_{s_2s_1,w_0}=1$ are the classical normalization of these coefficients. This verifies the example. [step 1.1, step 1.2, F3, F4] ∎

## Remarks

- The two computations are independent: the bar-invariance determines the Kazhdan-Lusztig element from the Hecke algebra alone, and the graded dimensions of the coinvariant algebra come from the invariant theory; their agreement is the content of Soergel's conjecture at $w_0$.
- The example is an illustration of the character theorem, not a supplier of it; the base of the simultaneous induction is computed on the axiom page and does not use this page.
