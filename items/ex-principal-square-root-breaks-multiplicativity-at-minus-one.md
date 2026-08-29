---
id: ex-principal-square-root-breaks-multiplicativity-at-minus-one
kind: example
title: "The principal square root fails to respect products at $(-1,-1)$"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [rem-holomorphic-logarithm-and-principal-power-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2 §3.4 The Logarithm"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

For the principal square root defined from the principal logarithm,

$$\sqrt[\operatorname{Log}] {zw}\ne \sqrt[\operatorname{Log}] z\,\sqrt[\operatorname{Log}] w$$

at $z=w=-1$.

Indeed,

$$\sqrt[\operatorname{Log}]1=1,\qquad \sqrt[\operatorname{Log}] {-1}=e^{\operatorname{Log}(-1)/2}=e^{i\pi/2}=i,$$

so

$$\sqrt[\operatorname{Log}] {((-1)(-1))}=1\qquad\text{but}\qquad \sqrt[\operatorname{Log}] {-1}\,\sqrt[\operatorname{Log}] {-1}=i^2=-1.$$

## Facts & Assumptions

**Given:** The principal-logarithm and principal-power conventions of
[[rem-holomorphic-logarithm-and-principal-power-dictionary]].

[F1] The principal logarithm has $\operatorname{Log}(-1)=i\pi$, and branch
power laws can fail across the cut
([[rem-holomorphic-logarithm-and-principal-power-dictionary]]).

## Verification

1.1 Since $1=1(\cos 0+i\sin 0)$, the principal square root of $1$ is $1$. [given]

2.1 By [F1], $\sqrt[\operatorname{Log}] {-1}=e^{i\pi/2}=i$, hence $\sqrt[\operatorname{Log}] {-1}\,\sqrt[\operatorname{Log}] {-1}=i^2=-1\ne1=\sqrt[\operatorname{Log}]1=\sqrt[\operatorname{Log}] {((-1)(-1))}$. [F1, step 1.1, algebra] ∎
