---
id: ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition
kind: example
title: "The rank-two Bott-Samelson bimodule B_sB_t: character, decomposition and the braid relation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-real-type-a-soergel-category-and-scalar-extension, lem-the-type-a-standard-character-is-multiplicative, def-type-a-standard-graph-bimodules-support-filtrations-and-character, thm-rank-two-type-a-soergel-bimodule-decompositions, thm-soergels-character-conjecture, def-bott-samelson-bimodule-of-a-word, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]
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
      locator: "Sections 3.4-3.5 (Bott-Samelson bimodules and characters) and the rank-two decompositions quoted in the introduction; Section 3.2 for the bar-invariant computation"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Theorem 4.2 and Proposition 4.6 (the dihedral computation of the character and the Kazhdan-Lusztig basis in rank two)"
verification:
  precheck: pass
---

## Example

Take $n=3$ and the two simple reflections $s=s_1$, $t=s_2$. The rank-two Bott-Samelson bimodule $B_sB_t$ has character
$$\operatorname{ch}(B_sB_t)=\operatorname{ch}(B_s)\operatorname{ch}(B_t)=(H_s+v)(H_t+v)=H_{st}+vH_s+vH_t+v^2$$
in the standard basis, so its $\Delta$-multiplicities are $1$ at $H_{st}$, $1$ at $H_s$ and at $H_t$ with shift $v$, and $1$ at the identity with shift $v^2$; in particular all multiplicities are non-negative and $\dim(\overline{B_sB_t})=1+1+1+1=4$. In $S_3$ the product $st$ has length $2$ and $B_{st}$ has the same character $\underline H_{st}=H_{st}+vH_s+vH_t+v^2$, so $B_sB_t=B_{st}$ is already indecomposable; equivalently the only summand is the top one $B_{st}$ and all multiplicities $m_y$ for $y<st$ vanish. Similarly $B_sB_tB_s=B_{sts}\oplus B_s$ with characters $\underline H_{sts}+\underline H_s$, and the rank-two type-$A$ braid relation holds; the example also verifies the rank-two values of the Kazhdan-Lusztig polynomials $P_{e,st}=P_{s,st}=P_{t,st}=1$ used on the companion page.

## Verification

**Proof technique:** direct; multiplicativity of the character, the explicit two-letter Hecke computation, and comparison with the rank-two decomposition.

**Given:** The simple reflections $s=s_1$, $t=s_2$ of $S_3$, the one-letter bimodules $B_s,B_t$ and the Bott-Samelson product $B_sB_t$ ([[def-bott-samelson-bimodule-of-a-word]], [[def-real-type-a-soergel-category-and-scalar-extension]]), the character with its $\Delta$-multiplicities ([[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[lem-the-type-a-standard-character-is-multiplicative]]), the normalized Hecke algebra with its two bases and $\underline H_s=H_s+v$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), the rank-two decomposition theorem ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]) and the character theorem ([[thm-soergels-character-conjecture]]).

[F1] The character is multiplicative and satisfies $\operatorname{ch}(B_{s_i})=H_{s_i}+v$; the coefficient of $H_y$ in $\operatorname{ch}(M)$ is $\sum_d(M:\Delta_y(d))v^d$, and the reduced dimension of a layer $\Delta_y(d)$ is one in degree $\ell(y)-d$ ([[lem-the-type-a-standard-character-is-multiplicative]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]).

[F2] The standard basis of the Hecke algebra multiplies by $H_uH_s=H_{us}$ when $\ell(us)=\ell(u)+1$; the Kazhdan-Lusztig basis is the unique basis $\underline H_w\in H_w+\sum_{y<w}v\mathbb Z[v]H_y$ of bar-invariant elements ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F3] The rank-two decomposition theorem: $B_sB_tB_s\cong B_{sts}\oplus B_s$ with no shifts; more generally the products of two or three adjacent simple generators decompose with the top summand occurring once and all lower summands unshifted ([[thm-rank-two-type-a-soergel-bimodule-decompositions]]).

[F4] By the character theorem $\operatorname{ch}(B_w)=\underline H_w$ for every $w$, so a bimodule decomposition $B_sB_t=B_{st}\oplus\bigoplus_{y<st}B_y^{m_y}$ can be recognized by comparing characters ([[thm-soergels-character-conjecture]]).

1.1 **The character of the two-letter product.** By [F1] and multiplicativity, $\operatorname{ch}(B_sB_t)=(H_s+v)(H_t+v)=H_sH_t+vH_s+vH_t+v^2$; since $st$ is reduced, [F2] gives $H_sH_t=H_{st}$, so the standard-basis expansion is $H_{st}+vH_s+vH_t+v^2$. Its coefficients give the multiplicities $1,1,1,1$ displayed, and reading the layers through [F1] the reduced dimension is $1+1+1+1=4$. [given, F1, F2]

2.1 **The Kazhdan-Lusztig element of $st$.** Put $A:=v-v^{-1}$ and $J:=H_{st}+v(H_s+H_t)+v^2$; then $J\in H_{st}+v\mathbb Z[v]H_s+v\mathbb Z[v]H_t+v^2\mathbb Z[v]$. Since $H_s^{-1}=H_s+A$, $H_t^{-1}=H_t+A$ and $H_{st}^{-1}=H_1^{-1}H_2^{-1}=(H_s+A)(H_t+A)=H_{st}+A(H_s+H_t)+A^2$ (the last identity uses $H_sH_t=H_{st}$), applying the semilinear involution gives $\overline J=\overline{H_{st}}+v^{-1}(\overline{H_s}+\overline{H_t})+v^{-2}=H_{st}+A(H_s+H_t)+A^2+v^{-1}(H_s+H_t)+2v^{-1}A+v^{-2}$, whose coefficients are $A+v^{-1}=v$ at $H_s+H_t$ and $A^2+2v^{-1}A+v^{-2}=(v^2-2+v^{-2})+(2-2v^{-2})+v^{-2}=v^2$ at $H_e$; hence $\overline J=J$, and by uniqueness [F2], $J=\underline H_{st}$. [step 1.1, F2]

3.1 **Indecomposability of $B_sB_t$.** By the character theorem [F4], $\operatorname{ch}(B_{st})=\underline H_{st}=\operatorname{ch}(B_sB_t)$. The comparison lemma gives $B_sB_t=B_{st}\oplus\bigoplus_{y<st}B_y^{a_y}$ with unshifted summands, since the product $st$ is reduced of length two and $\mathrm S(y)$ holds for all $y<st$; comparing characters with [F4] gives $\underline H_{st}=\underline H_{st}+\sum_{y<st}a_y\underline H_y$, so $a_y=0$ for every $y<st$ by linear independence of the Kazhdan-Lusztig basis. Hence $B_sB_t=B_{st}$ is indecomposable and the multiplicities $m_y$ for $y<st$ vanish. [step 1.1, step 2.1, F4]

4.1 **The three-letter braid relation.** By multiplicativity and the products computed in steps 1.1 and 2.1, $\operatorname{ch}(B_sB_tB_s)=\underline H_s\underline H_t\underline H_s=\underline H_{st}\underline H_s$; expanding with the Hecke relations gives $\underline H_{st}\underline H_s=\underline H_{sts}+\underline H_s$ (equivalently, comparing with the decomposition $B_sB_tB_s=B_{sts}\oplus B_s$ of [F3] and using [F4] for $B_{sts}$ and $B_s$). The reduced dimensions add to $4+2=6$ and the braid relation $B_sB_tB_s\cong B_tB_sB_t$ holds by [F3] after exchanging $s$ and $t$; the rank-two Kazhdan-Lusztig data $P_{e,st}=P_{s,st}=P_{t,st}=1$ are the coefficients displayed in step 2.1. This verifies the example. [step 2.1, step 3.1, F3, F4] ∎

## Remarks

- The reduction to rank two is essential here: the computation uses the explicit two- and three-letter decompositions and is an illustration only; the design of the page forbids its use as a supplier inside the general induction, whose base is computed on the axiom page.
- The equality of characters alone would not identify the summands without the comparison lemma or [F3]; the verification therefore compares the abstract decomposition with the Hecke computation on both sides.
