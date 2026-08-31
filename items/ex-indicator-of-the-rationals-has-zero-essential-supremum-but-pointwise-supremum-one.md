---
id: ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one
kind: example
title: "Indicator of the rationals has zero essential supremum but pointwise supremum one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-essential-supremum-with-respect-to-a-measure, thm-rationals-countable, lem-countable-sets-are-null]
proof_strategy: "Use that the rationals in [0, 1] are countable and therefore null, so every positive threshold is exceeded only on a null set."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Definition 7.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

On $[0,1]$ with Lebesgue measure, let $f:=\chi_{\mathbb Q\cap[0,1]}$. Then

$$\sup_{x\in[0,1]} f(x)=1,\qquad \|f\|_\infty=0.$$

So essential supremum and pointwise supremum need not agree.

## Facts & Assumptions

**Given:** The function $f=\chi_{\mathbb Q\cap[0,1]}$ on $[0,1]$.

[L1] The essential supremum is the infimum of the essential bounds ([[def-essential-supremum-with-respect-to-a-measure]]).

[L2] $\mathbb Q$ is countable, and every at most countable subset of $\mathbb R$ is null ([[thm-rationals-countable]], [[lem-countable-sets-are-null]]).

## Verification

**Proof technique:** Use that the rationals in $[0,1]$ are countable and therefore null, so every positive threshold is exceeded only on a null set.

1.1 The pointwise supremum is $1$ because $f(x)=1$ on every rational point of $[0,1]$. [given]

1.2 If $0<\varepsilon<1$, then $\{f>\varepsilon\}=\mathbb Q\cap[0,1]$, which is null by [L2]; if $\varepsilon\ge1$, then $\{f>\varepsilon\}=\varnothing$, which is also null. Hence every $\varepsilon>0$ is an essential bound in the sense of [L1], and therefore $\|f\|_\infty=0$. [L1, L2]

2.1 Steps 1.1 and 1.2 prove the two claims. [step 1.1, step 1.2] ∎
