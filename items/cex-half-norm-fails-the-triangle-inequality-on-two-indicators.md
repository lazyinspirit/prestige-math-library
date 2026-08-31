---
id: cex-half-norm-fails-the-triangle-inequality-on-two-indicators
kind: counterexample
title: "The half-norm fails the triangle inequality on two indicators"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one]
proof_strategy: "Take two disjoint indicators of equal positive measure. Then the 1/2-functional of the sum exceeds the sum of the two 1/2-functionals."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement refuted

On every measure space, the functional $\|\,\cdot\,\|_{1/2}$ satisfies the
triangle inequality.

## Facts & Assumptions

**Given:** The $0<p<1$ non-norm proposition
[[prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one]].

[L1] The proof of
[[prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one]]
uses two disjoint equal-mass indicators to violate the triangle inequality.

## Counterexample

**Proof technique:** Take two disjoint indicators of equal positive measure.
Then the $1/2$-functional of the sum exceeds the sum of the two
$1/2$-functionals.

1.1 On $[0,1]$ with Lebesgue measure, let [L1, given, algebra]
$f:=\chi_{[0,1/2]}$ and $g:=\chi_{(1/2,1]}$. Then
$$\|f\|_{1/2}=\left(\int_0^{1/2} 1\,d\lambda\right)^2=\frac14,\qquad \|g\|_{1/2}=\frac14,$$
while
$$\|f+g\|_{1/2}=\left(\int_0^1 1\,d\lambda\right)^2=1.$$

2.1 Therefore [step 1.1, L1]
$$\|f+g\|_{1/2}=1>\frac14+\frac14=\|f\|_{1/2}+\|g\|_{1/2},$$
so the triangle inequality fails. This is exactly the phenomenon summarized in
[L1]. ∎
