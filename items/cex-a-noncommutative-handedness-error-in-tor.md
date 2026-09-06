---
id: cex-a-noncommutative-handedness-error-in-tor
title: "A noncommutative handedness error in Tor"
kind: counterexample
status: published
origin: pipeline
deps: ["fs-tor-takes-two-left-modules-over-an-arbitrary-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Let $R=M_2(k)$ and let $V=k^2$ be supplied only as the usual left column
$R$-module. Two copies of the supplied left module ${}_RV$ do not by themselves
provide an expression ${}_RV\otimes_R{}_RV$ or
$\operatorname{Tor}^R_i({}_RV,{}_RV)$.

## Counterexample

**Given:** the left matrix action of $R$ on column vectors, with no right
$R$-action included in the data.

1.1 A balanced tensor relation needs a right action on the first factor: $(xr)\otimes y=x\otimes(ry)$. [given]

2.1 The notation ${}_RV$ specifies only $r\cdot v$ for the first copy; it supplies no value for $v\cdot r$. One could ask for additional right-module or bimodule data, but it is not part of the two given left modules. [step 1.1, algebra]

3.1 Therefore the proposed tensor and Tor expressions have missing type data; this is a concrete handedness counterexample. [step 2.1, algebra] ∎
