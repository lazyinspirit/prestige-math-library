---
id: ex-the-rouquier-complex-of-a-positive-three-strand-braid
kind: example
title: "The Rouquier complex of a positive three-strand braid"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-rouquier-complex-of-a-braid-word, def-positive-and-negative-rouquier-generator-complexes, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "§3.1, formula (3.3) and the tensor-totalization illustration in Lemma 3.11, PDF p. 8"
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.2 braid action; §3.3.1 Theorem 3.5, arXiv pp. 6-11"
verification:
  precheck: pass
---

## Example

For the positive word $\sigma_1\sigma_2\in B_3$ the Rouquier complex is
$$F(\sigma_1\sigma_2)=\bigl[\;B_1\otimes_RB_2\xrightarrow{d^0}B_1(1)\oplus B_2(1)\xrightarrow{d^1}R(2)\;\bigr]$$
with cohomological degrees $0,1,2$ and differentials
$$d^0(x\otimes y)=(x\cdot\varepsilon_2(y),\,\varepsilon_1(x)\cdot y),\qquad d^1(a\otimes r,\ s\otimes b)=\varepsilon_1(a)r-s\,\varepsilon_2(b),$$
under the evident identifications $B_1\otimes_RR(1)=B_1(1)$,
$R(1)\otimes_RB_2=B_2(1)$ and $R(1)\otimes_RR(1)=R(2)$; the example checks
$d^1d^0=0$ on the four left-basis tensors $u_1\otimes u_2$,
$u_1\otimes(1\otimes\alpha_2)$, $(1\otimes\alpha_1)\otimes u_2$,
and $(1\otimes\alpha_1)\otimes(1\otimes\alpha_2)$ of $B_1\otimes_RB_2$,
where $u_i=1\otimes1$ and records the cohomological and
internal degree of every generator.

## Facts & Assumptions

**Given:** The adjacent simple reflections $s_1,s_2$ of $S_3$, the bimodules $B_1,B_2$ with the generators $u_i=1\otimes1$ of degree $-1$ and $1\otimes\alpha_i$ of degree $1$, and the complexes $F_1=[B_1\xrightarrow{\varepsilon_1}R(1)]$, $F_2=[B_2\xrightarrow{\varepsilon_2}R(1)]$ of [[def-positive-and-negative-rouquier-generator-complexes]].

[F1] *Generators and products.* $B_i$ has the left $R$-basis $(1\otimes1,1\otimes\alpha_i)$ of degrees $-1$ and $1$; the multiplication $\varepsilon_i$ sends $1\otimes1\mapsto1$ and $1\otimes\alpha_i\mapsto\alpha_i$, and satisfies $\varepsilon_i(r\otimes r')=rr'$ ([[def-positive-and-negative-rouquier-generator-complexes]]).

[F2] *Totalization.* The signed tensor totalization of $F_1$ and $F_2$ has cohomological degree terms $F^0\otimes G^0=B_1\otimes_RB_2$, $F^0\otimes G^1\oplus F^1\otimes G^0=B_1(1)\oplus B_2(1)$ and $F^1\otimes G^1=R(2)$, with Koszul differential $d(x\otimes y)=d_F(x)\otimes y+(-1)^px\otimes d_G(y)$ for $x\in F^p$ ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

## Verification

**Proof technique:** direct.

1.1 The degree-$0$ term is $B_1\otimes_RB_2$, of cohomological degree $0$; the degree-$1$ term is $F^0\otimes G^1\oplus F^1\otimes G^0=B_1\otimes_RR(1)\oplus R(1)\otimes_RB_2\cong B_1(1)\oplus B_2(1)$; the degree-$2$ term is $R(1)\otimes_RR(1)\cong R(2)$. The four basis monomials $u_1\otimes u_2$, $u_1\otimes(1\otimes\alpha_2)$, $(1\otimes\alpha_1)\otimes u_2$, $(1\otimes\alpha_1)\otimes(1\otimes\alpha_2)$ of $B_1\otimes_RB_2$ have internal degrees $-2,0,0,2$; the basis $u_i,1\otimes\alpha_i$ of $B_i(1)$ has degrees $-2,0$; and the generator of $R(2)$ has degree $-2$. [F1, F2]

2.1 Under the identifications of step 1.1 the Koszul differentials are $d^0(x\otimes y)=(x\cdot\varepsilon_2(y),\,\varepsilon_1(x)\cdot y)\in B_1(1)\oplus B_2(1)$ and $d^1(a,s)=\varepsilon_1(a)-\varepsilon_2(s)$ computed in $R(2)$, i.e. $d^1(a\otimes r,s\otimes b)=\varepsilon_1(a)r-s\varepsilon_2(b)$ in the notation of the display; the minus sign is the Koszul sign on the differential from bidegree $(1,0)$ to $(1,1)$, where the first factor $R(1)$ sits in cochain degree $1$. [F2, step 1.1]

3.1 For every simple tensor $x\otimes y\in B_1\otimes_RB_2$ one computes $d^1d^0(x\otimes y)=\varepsilon_1(x)\varepsilon_2(y)-\varepsilon_1(x)\varepsilon_2(y)=0$: the first component of $d^0(x\otimes y)$ contributes $\varepsilon_1(x)\varepsilon_2(y)$ and the second contributes the same product with the Koszul sign $-1$, so the two cancel. Since the differentials are balanced and $R$-bilinear, this extends to all elements, so $d^1d^0=0$. [F1, step 2.1]

4.1 The degree bookkeeping of step 1.1 shows that $d^0$ and $d^1$ are homogeneous of internal degree zero on the displayed generators, hence on all elements; this records the cohomological and internal degree of every generator of the three terms and completes the verification of the displayed formula. [step 1.1, step 3.1] ∎ 