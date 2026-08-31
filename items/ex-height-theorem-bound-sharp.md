---
id: ex-height-theorem-bound-sharp
kind: example
title: "Coordinate ideals show the height bound is sharp"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-height-plus-quotient-dimension-affine-domain, thm-krull-height-theorem]
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
    - title: "The Stacks Project, Section 10.116: Dimension of finite type algebras over fields, reprise"
      url: "https://stacks.math.columbia.edu/tag/07NB"
pipeline_run: null
---


## Example

In $A=k[x_1,\ldots,x_n]$, the coordinate ideal
$$
I=(x_1,\ldots,x_n)
$$
is maximal, hence minimal over itself, and has height exactly $n$.

## Facts & Assumptions

**Given:** A field $k$ and the polynomial ring $A=k[x_1,\ldots,x_n]$.

[L1] Krull's height theorem gives $\operatorname{ht}(I)\le n$ ([[thm-krull-height-theorem]]).

[L2] The polynomial ring has dimension $n$, and the quotient by $I$ is the field $k$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[cor-height-plus-quotient-dimension-affine-domain]]).

## Verification

**Proof technique:** direct computation.

1.1 The quotient $A/I\cong k$ is a field, so $I$ is maximal and therefore prime. [L2, given]

2.1 By [L2], $\operatorname{ht}(I)+\dim(A/I)=\dim A=n$. Since $\dim(A/I)=0$, we get $\operatorname{ht}(I)=n$. This matches the upper bound from [L1]. [L1, L2, step 1.1]

3.1 Therefore the height bound in Krull's height theorem is sharp. [step 2.1] ∎
