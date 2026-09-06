---
id: ex-koszul-complex-one-and-two-elements
kind: example
title: "Koszul Complex One And Two Elements"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-basic-koszul-homology, lem-one-element-koszul-complex, lem-koszul-differential-coordinate-formula]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Example

Let $k$ be a field and $R=k[u,v]$. With coefficients $M=R$, the one-element complex is $K(u;R)=[0\to R\xrightarrow{u}R\to0]$, with the displayed copies in degrees $1,0$. It has $H_0\cong k[v]$ and zero homology in every other degree.

The two-element complex is $K(u,v;R)=[0\to R\xrightarrow{d_2}R^2\xrightarrow{d_1}R\to0]$, in degrees $2,1,0$, where degree-two $1$ corresponds to $e_1\wedge e_2$, and

$$d_2(c)=-vc\,e_1+uc\,e_2,\qquad d_1(ae_1+be_2)=au+bv.$$

Its degree-zero homology is $k$, and all other homology vanishes.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[u,v]$, coefficients $R$, and the ordered standard exterior bases. The prerequisites are [[thm-basic-koszul-homology]], [[lem-one-element-koszul-complex]], and [[lem-koszul-differential-coordinate-formula]].

## Proof

**Proof technique:** direct.

1.1 The one-element lemma gives the displayed complex. Multiplication by $u$ on $k[u,v]$ is injective by comparison of polynomial coefficients, so $H_1=0$ and $H_0=R/uR\cong k[v]$; all other terms vanish. [given, algebra]

1.2 For two elements the coordinate formula gives $d_2(c)=(-vc,uc)$ and $d_1(a,b)=ua+vb$, with $d_1d_2(c)=-uvc+vuc=0$. [given, algebra]

2.1 If $ua+vb=0$, reduction modulo $u$ gives $v\overline b=0$ in $k[v]$. Multiplication by $v$ is injective, so $b=uc$ for some $c\in R$. Substitution gives $u(a+vc)=0$, hence $a=-vc$. Thus every degree-one cycle is $d_2(c)$, proving $H_1=0$. [step 1.1, step 1.2, algebra]

3.1 If $d_2(c)=0$, then $uc=0$, so $c=0$ and $H_2=0$. Finally $H_0=R/(u,v)\cong k$, and there are no terms outside degrees $0,1,2$. This proves both computations. [step 1.1, step 1.2, step 2.1, algebra] ∎
