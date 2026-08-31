---
id: cex-l-one-not-subset-l-two-on-the-line
kind: counterexample
title: "$L^1$ is not a subset of $L^2$ on the line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]
proof_strategy: "Use the power-function family x^(-a) near 0 with 1/2 <= a < 1."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement refuted

On $\mathbb R$ with Lebesgue measure, every $L^1$ function lies in $L^2$.

## Facts & Assumptions

**Given:** The power-family thresholds from
[[ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]].

[L1] For $f_0(x)=x^{-a}\chi_{(0,1)}(x)$, one has
$f_0\in\mathcal L^p$ exactly when $ap<1$
([[ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]]).

## Counterexample

**Proof technique:** Use the power-function family $x^{-a}$ near $0$ with
$1/2\le a<1$.

1.1 Choose $a=3/4$ and set $f(x):=x^{-3/4}\chi_{(0,1)}(x)$. Then [L1, given]
$a\cdot1=3/4<1$, so [L1] gives $f\in L^1$. But $a\cdot2=3/2>1$, so [L1] also
gives $f\notin L^2$.

2.1 Thus $f$ is an $L^1$ function on $\mathbb R$ that does not lie in $L^2$, [step 1.1]
refuting the claim. ∎
