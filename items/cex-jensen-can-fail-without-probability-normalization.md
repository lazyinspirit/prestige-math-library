---
id: cex-jensen-can-fail-without-probability-normalization
kind: counterexample
title: "Jensen's inequality can fail on an infinite measure space without normalization"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-jensens-integral-inequality, def-counting-measure, prop-counting-measure-is-a-measure]
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem (7.44)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement refuted

Jensen's inequality remains valid without the hypothesis that the underlying
measure be a probability measure.

## Facts & Assumptions

**Given:** Counting measure on $\mathbb N$, the function $f:=\chi_{\{1,2\}}$, and $\varphi(x)=x^2$.

[L1] Jensen's theorem is stated for probability measures ([[thm-jensens-integral-inequality]]).

[L2] Counting measure is a measure on $\mathbb N$ ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

## Counterexample

**Proof technique:** direct.

1.1 Under counting measure,[L2, given, algebra]
$$\int f\,d\#=2,\qquad \int\varphi(f)\,d\#=2.$$


2.1 Hence [step 1.1, L1] ∎
$$\varphi\!\left(\int f\,d\#\right)=4>2=\int\varphi(f)\,d\#.$$
So Jensen fails on this infinite measure space, exactly as warned by [L1].
