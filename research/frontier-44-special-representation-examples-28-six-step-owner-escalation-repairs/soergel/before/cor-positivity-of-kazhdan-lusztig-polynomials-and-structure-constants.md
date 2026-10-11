---
id: cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants
kind: corollary
title: "Positivity of Kazhdan-Lusztig polynomials, mu-coefficients and structure constants"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [thm-soergels-character-conjecture, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-the-type-a-standard-character-is-multiplicative, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-inverse-kazhdan-lusztig-polynomials, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]
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
      locator: "Corollary 1.2(1) and (2) and Remark 3.2 (the normalization of the Kazhdan-Lusztig polynomials)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Bemerkung 1.15 (positivity of all coefficients of all Kazhdan-Lusztig polynomials follows from the conjecture), Section 6 (characters) and Theorem 5.15"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.4 (applications: positivity of the Kazhdan-Lusztig polynomials and algebraic proof of the Kazhdan-Lusztig conjecture)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The Kazhdan-Lusztig basis $\underline H_w$ of the type-$A$ Hecke algebra with the standard basis $H_w$ and the transition coefficients $h_{y,w}=p_{y,w}$ of the expansion $\underline H_w=\sum_{y\le w}h_{y,w}H_y$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]); the standard pairing $\langle H_x,H_y\rangle=\delta_{xy}$; the character $\operatorname{ch}$ with its $\Delta$-multiplicity definition and multiplicativity ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-the-type-a-standard-character-is-multiplicative]]); and the inverse Kazhdan-Lusztig coefficients defined by $H_w=\sum_{y\le w}g_{y,w}\underline H_y$ ([[def-inverse-kazhdan-lusztig-polynomials]]).

[F1] Soergel's character theorem: $\operatorname{ch}(B_w^R)=\underline H_w$ for every $w\in S_n$ ([[thm-soergels-character-conjecture]]).

[F2] The character of a Soergel bimodule is a nonnegative integer combination in the standard basis: $\operatorname{ch}(M)=\sum_{y,d}(M:\Delta_y(d))v^dH_y$ with multiplicities $(M:\Delta_y(d))\in\mathbb Z_{\ge0}$; the character is additive and multiplicative and satisfies $\operatorname{ch}(M(d))=v^d\operatorname{ch}(M)$ ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-the-type-a-standard-character-is-multiplicative]]).

[F3] The class map $\Phi$ sends $[B_w^R]$ to $\underline H_w$ and is a ring isomorphism from the split Grothendieck ring onto the Hecke algebra; the split Grothendieck ring is free with basis the classes of the normalized indecomposables, so a decomposition $B_x^RB_y^R=\bigoplus_zB_z^R(m_z)$ with graded multiplicities $m_z\in\mathbb Z_{\ge0}[v^{\pm1}]$ yields the Hecke identity $\underline H_x\underline H_y=\sum_zm_z\underline H_z$ ([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

## Statement

Write $\underline H_w=\sum_{y\le w}h_{y,w}H_y$ for the expansion of the Kazhdan-Lusztig basis element in the standard basis and $\underline H_x\underline H_y=\sum_z\mu^z_{x,y}\underline H_z$ for the structure constants of the Kazhdan-Lusztig basis. Then:

(1) $h_{y,w}\in\mathbb Z_{\ge0}[v]$ for all $y\le w$; equivalently the Kazhdan-Lusztig polynomials $P_{y,w}(q)=v^{-(\ell(w)-\ell(y))}h_{y,w}(v)$ with $q=v^{-2}$ have nonnegative integer coefficients, and in particular the $\mu$-coefficients $\mu(y,w)=[v]h_{y,w}$ are nonnegative;

(2) $\mu^z_{x,y}\in\mathbb Z_{\ge0}[v^{\pm1}]$: the structure constants are nonnegative, and $\mu^z_{x,y}$ is the character of the multiplicity space of $B_z^R$ in the tensor product $B_x^R\otimes_SB_y^R$, i.e. its graded multiplicity;

(3) the expansion of the product $\operatorname{ch}(B_x)\operatorname{ch}(B_y)$ in the standard basis has nonnegative coefficients, namely the $\Delta$-multiplicities of $B_xB_y$.

No positivity of Kazhdan-Lusztig polynomials is assumed anywhere; the corollary is the local proof of the positivity clause from the character theorem.

## Proof
**Proof technique:** direct; read the multiplicities of the $\Delta$-filtration through the character theorem and compare coefficients in the two bases.

1.1 **The coefficients in the standard basis (1).** By [F1] we have $\operatorname{ch}(B_w^R)=\underline H_w$; expanding both sides in the standard basis, the left side has coefficients given by the $\Delta$-multiplicities, which are nonnegative integers by [F2], and the right side has coefficients $h_{y,w}$ by definition. Hence $h_{y,w}=\sum_d(B_w:\Delta_y(d))v^d\in\mathbb Z_{\ge0}[v]$. Passing to the classical normalization $P_{y,w}(v^{-2})=v^{-(\ell(w)-\ell(y))}h_{y,w}$ of the Kazhdan-Lusztig polynomial displays its coefficients as the same nonnegative multiplicities and therefore nonnegative integers; in particular the $\mu$-coefficient, the coefficient of $v$ in $h_{y,w}$, is a sum of multiplicities and hence nonnegative. This proves (1). [given, F1, F2]

2.1 **The structure constants (2).** The tensor product decomposes into finitely many normalized indecomposables with graded multiplicities, $B_x^RB_y^R=\bigoplus_zB_z^R(m_z)$ with $m_z\in\mathbb Z_{\ge0}[v^{\pm1}]$. Applying the class map $\Phi$ of [F3] and using multiplicativity, $\underline H_x\underline H_y=\Phi([B_x^RB_y^R])=\sum_zm_z\underline H_z$, so that $\mu^z_{x,y}=m_z$; the multiplicity space of $B_z^R$ in the tensor product has character $m_z$ by definition of the multiplicity, which proves (2). [step 1.1, F3]

3.1 **The standard-basis product (3).** By [F2] the character of the tensor product $B_xB_y$ is a nonnegative integer combination of standard basis elements, $\operatorname{ch}(B_xB_y)=\sum_{y',d}(B_xB_y:\Delta_{y'}(d))v^dH_{y'}$, and by multiplicativity of the character and [F1] it equals the product $\operatorname{ch}(B_x)\operatorname{ch}(B_y)=\underline H_x\underline H_y$. Comparing coefficients gives that the expansion of the product in the standard basis has exactly the $\Delta$-multiplicities as coefficients, and these are nonnegative integers. This proves (3) and completes the corollary. [step 1.1, step 2.1, F2] ∎

## Remarks

- The positivity of the Kazhdan-Lusztig polynomials is thereby a corollary of the simultaneous induction of this page, not an input: the only ingredients are the character theorem, the $\Delta$-multiplicity definition of the character and the multiplicativity of the class map.
- The three clauses are the same computation read in the two bases of the Hecke algebra; the graded multiplicity of an indecomposable in a tensor product is intrinsically well defined by the Krull-Schmidt decomposition and is a polynomial with nonnegative coefficients.
