---
id: ex-localisation-strictly-lowers-dimension
kind: example
title: "Localisation can strictly lower dimension"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-height-plus-quotient-dimension-affine-domain, cor-localisation-dimension-does-not-increase, def-height-of-a-prime-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Example

Let $R=k[x,y]$ and let $S=R\setminus(x)$. Then
$$
S^{-1}R=R_{(x)}
$$
has dimension $1$, strictly smaller than $\dim R=2$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[x,y]$, and the multiplicative set $S=R\setminus(x)$.

[L1] Localization does not increase dimension ([[cor-localisation-dimension-does-not-increase]]).

[L2] The polynomial ring $k[x,y]$ has dimension $2$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]).

[L3] In the affine domain $k[x,y]$, the prime $(x)$ satisfies $\operatorname{ht}((x))+\dim(k[x,y]/(x))=\dim(k[x,y])$ ([[cor-height-plus-quotient-dimension-affine-domain]]).

[L4] By definition, the height of a prime equals the dimension of the localization at that prime ([[def-height-of-a-prime-ideal]]).

## Verification

**Proof technique:** direct computation.

1.1 By [L2], $\dim R=2$. Since $R/(x)\cong k[y]$ has dimension $1$, [L3] gives $\operatorname{ht}((x))=1$. Therefore [L4] yields $\dim(S^{-1}R)=\dim(R_{(x)})=1$. [L2, L3, L4, given]

2.1 Fact [L1] independently gives $\dim(S^{-1}R)\le\dim R=2$, so the computed value $1$ is compatible with the general one-sided inequality. Since $1<2=\dim R$, this localization strictly lowers dimension. [L1, step 1.1]

3.1 So localization can strictly lower Krull dimension. [step 1.1, step 2.1] ∎
