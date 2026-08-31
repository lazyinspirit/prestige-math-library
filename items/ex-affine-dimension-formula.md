---
id: ex-affine-dimension-formula
kind: example
title: "The affine dimension formula on a plane curve domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-affine-domain-maximal-ideal-height-equals-dimension, cor-height-plus-quotient-dimension-affine-domain, thm-dimension-formula-for-affine-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
---


## Example

Let
$$
A=k[x,y]/(y-x^2).
$$
Then $A\cong k[x]$ is a one-dimensional affine domain. For the prime ideals $(0)$ and $\mathfrak m=(\bar x,\bar y)$, the affine dimension formula reads
$$
\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=1.
$$

## Facts & Assumptions

**Given:** A field $k$, the domain $A=k[x,y]/(y-x^2)$, and the primes $(0)$ and $\mathfrak m=(\bar x,\bar y)$.

[L1] The affine dimension formula identifies $$ \operatorname{ht}(\mathfrak p)+\operatorname{trdeg}_k\operatorname{Frac}(A/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}(A) $$ ([[thm-dimension-formula-for-affine-domains]]).

[L2] Maximal ideals of an affine domain have full height, and the quotient-dimension reformulation is also available ([[cor-affine-domain-maximal-ideal-height-equals-dimension]], [[cor-height-plus-quotient-dimension-affine-domain]]).

## Verification

**Proof technique:** direct computation.

1.1 The ring $A\cong k[x]$ has dimension $1$, and [L1] at the zero prime reads $0+\operatorname{trdeg}_k\operatorname{Frac}(A)=1$, which is true because $\operatorname{Frac}(A)\cong k(x)$. [L1, given]

2.1 For the maximal ideal $\mathfrak m$, the quotient is $A/\mathfrak m\cong k$, so its quotient dimension is $0$. Then [L2] gives $\operatorname{ht}(\mathfrak m)=1$, and the formula becomes $1+0=1$. [L2, step 1.1]

3.1 Thus the affine dimension formula is verified term by term on this plane curve domain. [step 1.1, step 2.1] ∎
