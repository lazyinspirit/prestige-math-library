---
id: lem-littlewood-internal-product-outer-compatibility
kind: lemma
title: Littlewood's identity - the internal product against an outer product
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-internal-product-on-symmetric-functions,
       def-kronecker-coefficient-and-internal-tensor-product,
       thm-outer-littlewood-richardson-rule,
       def-littlewood-richardson-tableau-and-coefficient,
       cor-frobenius-reciprocity-for-complex-characters,
       thm-frobenius-formula-for-induced-characters,
       def-outer-induction-product-for-symmetric-group-characters,
       def-induced-character-of-a-complex-representation,
       lem-character-ring-of-a-direct-product-is-the-tensor-product,
       cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product,
       lem-frobenius-characteristic-preserves-outer-products,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions,
       lem-frobenius-characteristic-is-an-isometry,
       def-frobenius-characteristic-map]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "§2.3, printed p. 4, display (1): Littlewood internal/outer compatibility identity."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed pp. 115–117: definition of the internal product, (7.10), and Example 3 on restriction. The exact compatibility identity is sourced in Pak–Panova display (1) and proved locally below."
---

## Statement

Let $\lambda\vdash n$, $\tau\vdash r$ and $\theta\vdash n-r$. Then, in
$\Lambda^n$,
$$s_\lambda*(s_\tau s_\theta)=\sum_{\alpha\vdash r,\ \beta\vdash n-r}c^\lambda_{\alpha\beta}\,(s_\alpha*s_\tau)(s_\beta*s_\theta),$$
where $c^\lambda_{\alpha\beta}$ is the Littlewood–Richardson coefficient. Both
sides have degree $n$ and the sum is finite.

## Facts & Assumptions

**Given:** Integers $n\ge r\ge0$, partitions $\lambda\vdash n$, $\tau\vdash r$, $\theta\vdash n-r$, and the ordered two-block subgroup $H:=S_r\times S_{n-r}\le S_n$.

[F1] Outer Littlewood–Richardson rule: for $\alpha\vdash r$, $\beta\vdash n-r$, the induced module decomposes as $\operatorname{Ind}_H^{S_n}(S^\alpha\boxtimes S^\beta)\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus c^\lambda_{\alpha\beta}}$; equivalently $\operatorname{ch}(\chi^\alpha\circ\chi^\beta)=s_\alpha s_\beta$ ([[thm-outer-littlewood-richardson-rule]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F2] The external product is $(\chi\boxtimes\psi)(\sigma,\tau)=\chi(\sigma)\psi(\tau)$, and the outer product of characters is $f\circ g=\operatorname{Ind}_H^{S_n}(f\boxtimes g)$, $\mathbb Z$-bilinear ([[def-outer-induction-product-for-symmetric-group-characters]], [[def-induced-character-of-a-complex-representation]]).

[F3] Frobenius reciprocity: for a finite group $G$, a subgroup $H\le G$ and complex characters, $\langle\operatorname{Ind}_H^G\chi,\psi\rangle_G=\langle\chi,\operatorname{Res}_H^G\psi\rangle_H$ ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F4] Frobenius' formula: $\operatorname{Ind}_H^G\chi(g)=\frac1{|H|}\sum_{x\in G:\,x^{-1}gx\in H}\chi(x^{-1}gx)$ ([[thm-frobenius-formula-for-induced-characters]]).

[F5] As $\alpha,\beta$ range over partitions of $r$ and $n-r$, the external products $\chi^\alpha\boxtimes\chi^\beta$ are pairwise distinct and form an orthonormal $\mathbb Z$-basis of $R(H)$; every honest character of $H$ is a nonnegative integral combination of them ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]). Hence the multiplicity of $\chi^\alpha\boxtimes\chi^\beta$ in an honest character $\varphi$ of $H$ is $\langle\varphi,\chi^\alpha\boxtimes\chi^\beta\rangle_H$, and for an honest character of $S_n$ the multiplicity of $S^\lambda$ in it is its inner product with $\chi^\lambda$ ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F6] For $f,g$ of the same degree $m$, $f*g=\operatorname{ch}(\operatorname{ch}^{-1}(f)\cdot\operatorname{ch}^{-1}(g))$, and $\operatorname{ch}(\chi^\rho)=s_\rho$ for every $\rho\vdash m$ ([[def-internal-product-on-symmetric-functions]], [[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F7] $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ for $f\in R(S_m)$, $g\in R(S_p)$ ([[lem-frobenius-characteristic-preserves-outer-products]]).

[F8] $\operatorname{ch}$ is injective on $\mathrm{cf}(S_n)$ ([[lem-frobenius-characteristic-is-an-isometry]], [[def-frobenius-characteristic-map]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $\alpha\vdash r$, $\beta\vdash n-r$ write $\varphi_{\alpha\beta}:=\chi^\alpha\boxtimes\chi^\beta$ and $V_{\alpha\beta}:=\operatorname{Ind}_H^{S_n}(S^\alpha\boxtimes S^\beta)$, so that $\chi_{V_{\alpha\beta}}=\operatorname{Ind}_H^{S_n}\varphi_{\alpha\beta}$ by [F2]. By [F1] the multiplicity of $S^\lambda$ in $V_{\alpha\beta}$ is $c^\lambda_{\alpha\beta}$. By [F5] the multiplicity of $\varphi_{\alpha\beta}$ in $\operatorname{Res}_H^{S_n}\chi^\lambda$ is $\langle\operatorname{Res}_H^{S_n}\chi^\lambda,\varphi_{\alpha\beta}\rangle_H$, which by Frobenius reciprocity [F3] equals $\langle\operatorname{Ind}_H^{S_n}\varphi_{\alpha\beta},\chi^\lambda\rangle_{S_n}$; by [F5] again this is the multiplicity of $S^\lambda$ in $V_{\alpha\beta}$, namely $c^\lambda_{\alpha\beta}$. Since the $\varphi_{\alpha\beta}$ form a nonnegative integral basis of the honest characters of $H$ by [F5] and $\operatorname{Res}_H^{S_n}\chi^\lambda$ is an honest character, the expansion $\operatorname{Res}_H^{S_n}\chi^\lambda=\sum_{\alpha\vdash r,\ \beta\vdash n-r}c^\lambda_{\alpha\beta}\,\varphi_{\alpha\beta}$ follows. [F1, F2, F3, F5]

2.1 Put $\xi:=\varphi_{\tau\theta}=\chi^\tau\boxtimes\chi^\theta$. Multiplying step 1.1 pointwise on $H$ by $\xi$ and using the value formula [F2] for both factors gives $(\chi^\alpha\boxtimes\chi^\beta)(\sigma,\rho)(\chi^\tau\boxtimes\chi^\theta)(\sigma,\rho)=\chi^\alpha(\sigma)\chi^\beta(\rho)\chi^\tau(\sigma)\chi^\theta(\rho)=(\chi^\alpha\chi^\tau)(\sigma)(\chi^\beta\chi^\theta)(\rho)$, so the product of the two external products is the external product $(\chi^\alpha\chi^\tau)\boxtimes(\chi^\beta\chi^\theta)$; hence $\operatorname{Res}_H^{S_n}(\chi^\lambda)\cdot\xi=\sum_{\alpha,\beta}c^\lambda_{\alpha\beta}\,(\chi^\alpha\chi^\tau)\boxtimes(\chi^\beta\chi^\theta)$. [F2, step 1.1, algebra]

3.1 Projection formula: for every $g\in S_n$, $\operatorname{Ind}_H^{S_n}(\operatorname{Res}_H^{S_n}(\chi^\lambda)\cdot\xi)(g)=\chi^\lambda(g)\,\operatorname{Ind}_H^{S_n}\xi(g)$. Indeed, by [F4] the left side is $\frac1{|H|}\sum_{x\in S_n:\,x^{-1}gx\in H}\chi^\lambda(x^{-1}gx)\xi(x^{-1}gx)$; the character $\chi^\lambda$ is constant on conjugacy classes, so $\chi^\lambda(x^{-1}gx)=\chi^\lambda(g)$ for every term, and the sum factors as $\chi^\lambda(g)\cdot\frac1{|H|}\sum_{x:\,x^{-1}gx\in H}\xi(x^{-1}gx)=\chi^\lambda(g)\,\operatorname{Ind}_H^{S_n}\xi(g)$ by [F4] again. Applying the $\mathbb C$-linear induction operator of [F2] to step 2.1 and using this identity for the left factor gives, as class functions on $S_n$, $\chi^\lambda\cdot(\chi^\tau\circ\chi^\theta)=\sum_{\alpha,\beta}c^\lambda_{\alpha\beta}\,(\chi^\alpha\chi^\tau)\circ(\chi^\beta\chi^\theta)$, since $\operatorname{Ind}_H^{S_n}\xi=\chi^\tau\circ\chi^\theta$ and $\operatorname{Ind}_H^{S_n}\bigl((\chi^\alpha\chi^\tau)\boxtimes(\chi^\beta\chi^\theta)\bigr)=(\chi^\alpha\chi^\tau)\circ(\chi^\beta\chi^\theta)$ by [F2]. [F2, F4, step 2.1, algebra]

4.1 Translate step 3.1 through $\operatorname{ch}$. By [F7] and [F6], $\operatorname{ch}(\chi^\tau\circ\chi^\theta)=s_\tau s_\theta$, so $\operatorname{ch}^{-1}(s_\tau s_\theta)=\chi^\tau\circ\chi^\theta$; by the definition [F6] of the internal product, $\operatorname{ch}^{-1}(s_\lambda*(s_\tau s_\theta))=\chi^\lambda\cdot\operatorname{ch}^{-1}(s_\tau s_\theta)=\chi^\lambda\cdot(\chi^\tau\circ\chi^\theta)$. Likewise $\operatorname{ch}^{-1}(s_\alpha*s_\tau)=\chi^\alpha\chi^\tau$ and $\operatorname{ch}^{-1}(s_\beta*s_\theta)=\chi^\beta\chi^\theta$ by [F6], and [F7] gives $\operatorname{ch}^{-1}\bigl((s_\alpha*s_\tau)(s_\beta*s_\theta)\bigr)=(\chi^\alpha\chi^\tau)\circ(\chi^\beta\chi^\theta)$. Step 3.1 therefore says that $\operatorname{ch}^{-1}$ of the two sides of the claimed identity are equal; since $\operatorname{ch}$ is injective [F8], the claimed identity holds in $\Lambda^n$. [F6, F7, F8, step 3.1] ∎

No form of the Axiom of Choice is used: induction, Frobenius reciprocity and the outer Littlewood–Richardson rule are finite-group constructions.
