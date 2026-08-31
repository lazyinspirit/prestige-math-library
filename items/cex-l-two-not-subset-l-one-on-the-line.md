---
id: cex-l-two-not-subset-l-one-on-the-line
kind: counterexample
title: "$L^2$ is not a subset of $L^1$ on the line"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]
proof_strategy: "Use the power-function family x^(-a) at infinity with 1/2 < a <= 1."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement refuted

On $\mathbb R$ with Lebesgue measure, every $L^2$ function lies in $L^1$.

## Facts & Assumptions

**Given:** The power-family thresholds from
[[ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]].

[L1] For $f_\infty(x)=x^{-a}\chi_{(1,\infty)}(x)$, one has
$f_\infty\in\mathcal L^p$ exactly when $ap>1$
([[ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership]]).

## Counterexample

**Proof technique:** Use the power-function family $x^{-a}$ at infinity with
$1/2<a\le1$.

1.1 Choose $a=3/4$ and set $f(x):=x^{-3/4}\chi_{(1,\infty)}(x)$. Then [L1]
$a\cdot2=3/2>1$, so [L1] gives $f\in L^2$. But $a\cdot1=3/4\not>1$, so
gives $f\notin L^1$. [L1, given]

2.1 Thus $f$ is an $L^2$ function on $\mathbb R$ that does not lie in $L^1$, [step 1.1]
refuting the claim. ∎
