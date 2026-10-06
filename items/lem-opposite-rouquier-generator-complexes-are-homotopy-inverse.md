---
id: lem-opposite-rouquier-generator-complexes-are-homotopy-inverse
kind: lemma
title: "Opposite Rouquier generator complexes are homotopy inverse"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-positive-and-negative-rouquier-generator-complexes, lem-the-rank-one-soergel-bimodule-square-splits, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-invertible-differential-block-and-schur-complement-reduction, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, def-complex-homotopy-and-contractibility-in-an-additive-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Lemma 3.3, PDF p. 9; Proposition 2.1, PDF pp. 3-4"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Lemma 3.11 and the display before it (the tensor product and its four terms), printed p. 545"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

$F_i\otimes_RF_i^{-1}\simeq R\simeq F_i^{-1}\otimes_RF_i$ in
$K^b(R^e\text{-grmod})$, where $R$ denotes the unit complex concentrated in
cohomological degree $0$ with zero differential. Explicitly, the signed tensor
totalization of $F_i$ and $F_i^{-1}$ has terms
$$B_i(-1)\ \longrightarrow\ B_i\otimes_RB_i\oplus R\ \longrightarrow\ B_i(1)$$
in cohomological degrees $-1,0,1$; the rank-one splitting
$B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1)$ exhibits two successive
invertible differential blocks. Gaussian elimination splits off two
contractible two-term complexes, leaving $R$ in degree $0$.
The same argument with the factors exchanged gives
$F_i^{-1}\otimes_RF_i\simeq R$. All scalars occurring in the contractions are
units $\varepsilon_i^{\pm1},2^{\pm1}\in\mathbb Q$, so the homotopy classes do
not depend on the signs of the chosen normalization.

## Facts & Assumptions

**Given:** A simple reflection $s_i$, the bimodule $B_i=R\otimes_{R^{s_i}}R(1)$ with the generators $u=1\otimes1$ of degree $-1$ and $w_0=1\otimes(\alpha_i/2)$ of degree $1$, the generator complexes $F_i=[B_i\xrightarrow{\varepsilon_i}R(1)]$, $F_i^{-1}=[R(-1)\xrightarrow{\eta_i}B_i]$ of [[def-positive-and-negative-rouquier-generator-complexes]].

[F1] *The rank-one splitting.* The invariant decomposition $R=R^{s_i}\oplus\alpha_iR^{s_i}$ in the middle tensor factor gives a degree-zero bimodule isomorphism
$$B_i\otimes_RB_i\cong B_i(1)\oplus B_i(-1).$$
The first summand is represented by $r\otimes1\otimes r'$ and the second by $r\otimes\alpha_i\otimes r'$. This is the middle-invariant and middle-$\alpha_i$ decomposition of [[lem-the-rank-one-soergel-bimodule-square-splits]]. The outer factors form $R\otimes_{R^{s_i}}R$; in particular the outer actions of $\alpha_i$ need not be equal.

[F2] *The totalization.* The signed tensor totalization $K=F_i\otimes_RF_i^{-1}$ has terms $K^{-1}=B_i(-1)$, $K^0=B_i\otimes_RB_i\oplus R$, $K^1=B_i(1)$ and Koszul differential $d(x\otimes y)=d_F(x)\otimes y+(-1)^px\otimes d_G(y)$; in particular $d^{-1}(x)=\varepsilon_i(x)+x\otimes\eta_i(1)$ for $x\in B_i(-1)$ and $d^0$ is $\varepsilon_i$ on the first tensor factor of $B_i\otimes_RB_i$ and $-\eta_i$ on the $R$-summand ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]], [[def-positive-and-negative-rouquier-generator-complexes]]).

[F3] *Gaussian elimination.* If a cochain differential has an invertible block $\varphi:U\to V$ with respect to fixed biproduct decompositions $X^n=A\oplus U$, $X^{n+1}=B\oplus V$, then $X\simeq\bar X$ for the reduction $\bar X$ obtained by deleting $U,V$ and replacing $d^n$ by its Schur complement, and $X\cong\bar X\oplus K$ with $K=[U\xrightarrow{\varphi}V]$ a contractible two-term complex ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]], [[def-invertible-differential-block-and-schur-complement-reduction]]).

[F4] *Contractibility.* A two-term complex $[X\xrightarrow{\varphi}Y]$ with $\varphi$ invertible is contractible, and homotopy equivalent complexes have the same homotopy class; $\simeq$ is transitive ([[def-complex-homotopy-and-contractibility-in-an-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 The terms of $K$ are as in [F2]: over degree $-1$ only $B_i\otimes R(-1)\cong B_i(-1)$ contributes, over degree $0$ the two summands $B_i\otimes B_i$ and $R(1)\otimes R(-1)\cong R$, and over degree $1$ only $R(1)\otimes B_i\cong B_i(1)$. [F2]

1.2 Write $E=R\otimes_{R^{s_i}}R\otimes_{R^{s_i}}R$, suppressing the common internal shifts, and denote the three copies of $\alpha_i$ by $a,b,c$. Let $S=R\otimes_{R^{s_i}}R$ refer to the outer factors. Since $b^2=c^2$ and every invariant balances, $E=S\oplus Sb$ as an outer bimodule. The map $1\otimes\eta_i$ sends a source element $x$ to $x(b+c)$. Because $(b-c)(b+c)=0$, its value is also $x(a,c)(b+c)$: this is immediate on the right $R^{s_i}$-basis $1,\alpha_i$ of the source and hence for every $x$. Its projection to the $Sb$ summand is therefore the identity $S\to Sb$ under the shifted identification [F1]. This is the invertible block $B_i(-1)\to B_i(-1)$ of $d^{-1}$. No equality between the outer $a$ and $c$ is used. [F1, F2, algebra]

2.1 Apply Gaussian elimination [F3] to that block. It removes the degree $-1$ term and the middle-$\alpha_i$ summand, leaving a complex with $B_i(1)\oplus R$ in degree $0$ and $B_i(1)$ in degree $1$. Its degree-zero differential is the restriction of the original $d^0$ to the surviving summands: the preceding cancellation changes only the coordinates associated with the eliminated block, and $d^0d^{-1}=0$ ensures that its eliminated column is zero in the new coordinates. [F2, F3, step 1.2]

3.1 On the middle-invariant summand, $\varepsilon_i\otimes1$ sends $r\otimes1\otimes r'$ to $r\otimes r'$. Hence the block $B_i(1)\to B_i(1)$ of the remaining differential is the identity. A second application of [F3] cancels it and leaves only $R$ in degree $0$. Both canceled two-term complexes are contractible by [F4], so $F_i\otimes_RF_i^{-1}\simeq R$. [F1, F2, F3, F4, step 2.1]

4.1 Taking the opposite bimodule interchanges left and right actions and reverses the order of a tensor product. On complexes, the identification $(X\otimes_RY)^{\mathrm{op}}\cong Y^{\mathrm{op}}\otimes_RX^{\mathrm{op}}$ sends a term of cohomological bidegree $(p,q)$ with the sign $(-1)^{pq}$; direct substitution in the signed tensor differential verifies that it is a chain isomorphism. Reversing the two factors of $B_i$ preserves multiplication and the symmetric element $\alpha_i\otimes1+1\otimes\alpha_i$, so $F_i^{\mathrm{op}}\cong F_i$ and $(F_i^{-1})^{\mathrm{op}}\cong F_i^{-1}$. Applying this additive operation to the equivalence just proved gives $F_i^{-1}\otimes_RF_i\simeq R$. [F1, F2, F4, step 3.1, algebra] ∎

## Remarks

The proof follows the route of GKS Lemma 3.11: the tensor product is the displayed three-term complex, its four-term middle term splits by the rank-one square, and two successive Gaussian eliminations cancel the two contractible two-term pieces; the two surviving directions are $R$ in degree $0$. The two pivots use the middle-factor invariant decomposition; the two outer actions of $\alpha_i$ are kept distinct. The ground field $\mathbb Q$ makes the invariant decomposition available and all normalization scalars invertible. Rouquier's alternative proof of Lemma 3.3 uses the adjoint pairs attached to the split sequence $0\to R^{s_i}\to R\to R^{s_i}(2)\to0$ and Proposition 2.1 of the same paper; that route is not used here.
