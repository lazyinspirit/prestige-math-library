---
id: cor-finite-nonnegative-integral-implies-finite-almost-everywhere
kind: corollary
title: "A nonnegative measurable function with finite integral is finite almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cor-finite-nonnegative-integral-implies-finite-almost-everywhere). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.20"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If $f:X\to[0,+\infty]$ is measurable and $\int f\,d\mu<+\infty$, then
$f(x)<+\infty$ for almost every $x$.

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$ with finite integral.

[L1] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] The nonnegative integral of the simple function $n\chi_F$ equals its simple integral $n\mu(F)$ ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 Let $F:=\{f=+\infty\}$, which is measurable. For every positive integer $n$, $n\chi_F\le f$. By [L1] and [L2], $n\mu(F)=\int n\chi_F\,d\mu\le\int f\,d\mu<+\infty$. [L1, L2, given]


2.1 If $\mu(F)>0$, the inequalities in step 1.1 fail for sufficiently large $n$; if $\mu(F)=+\infty$, they fail already for $n=1$. Thus $\mu(F)=0$, so the exceptional set where $f$ is infinite is null. Equivalently, $f<+\infty$ almost everywhere. [step 1.1, algebra] ∎
