---
id: prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one
kind: proposition
title: "The $p$-functional need not be a norm for $0 < p < 1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-real-power, thm-real-power-laws, thm-exponential-is-strictly-increasing, def-norm-and-normed-space, def-counting-measure, prop-counting-measure-is-a-measure]
proof_strategy: "Use the concavity of t maps to t^p on [0, infinity) to show triangle inequality fails on two disjoint equal-mass indicators, so the p-functional is not subadditive and therefore is not a norm."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, reverse inequality discussion before Definition 7.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $0<p<1$. Then the functional

$$[f]\longmapsto\left(\int |f|^p\,d\mu\right)^{1/p}$$

on $L^p(\mu)$ need not satisfy the triangle inequality. Consequently it is not
a norm in general in the sense of [[def-norm-and-normed-space]].

## Facts & Assumptions

**Given:** A real exponent $0<p<1$.

[L1] Real powers are defined for positive bases and obey the exponent laws; for
fixed base $2>1$, the map $x\mapsto 2^x$ is strictly increasing
([[def-real-power]], [[thm-real-power-laws]],
[[thm-exponential-is-strictly-increasing]]).

[L2] A norm must satisfy the triangle inequality
([[def-norm-and-normed-space]]).

[L3] Counting measure on a two-point set is a measure
([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

## Proof

**Proof technique:** Use two disjoint equal-mass indicators, so the triangle
inequality becomes the scalar inequality $2^{1/p}\le2$, which fails because
$1/p>1$.

1.1 Work on the two-point counting space $\{0,1\}$ from [L3]. Let [L3, given]
$e_0:=\chi_{\{0\}}$ and $e_1:=\chi_{\{1\}}$. Then
$$\|e_0\|_p=\|e_1\|_p=1,\qquad \|e_0+e_1\|_p=(1+1)^{1/p}=2^{1/p}.$$

2.1 Because $0<p<1$, one has $1/p>1$. Strict monotonicity in [L1] therefore [L1, step 1.1]
gives
$$2^{1/p}>2^1=2.$$
So
$$\|e_0+e_1\|_p>\|e_0\|_p+\|e_1\|_p.$$

3.1 The triangle inequality from [L2] fails on this concrete measure space, so [L2, step 2.1]
the $p$-functional is not a norm in general for $0<p<1$. ∎
