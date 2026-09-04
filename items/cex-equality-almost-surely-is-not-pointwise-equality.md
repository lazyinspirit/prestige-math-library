---
id: cex-equality-almost-surely-is-not-pointwise-equality
kind: counterexample
title: "Equality almost surely is not pointwise equality"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-expectation-is-independent-of-the-ae-representative, def-measure-null-set-and-almost-everywhere]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.5"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement refuted

If two random variables are equal almost surely, then they are pointwise equal.

## Facts & Assumptions

**Given:** The probability space $([0,1],\mathcal B([0,1]),\lambda)$, the zero
function $X$, and the indicator $Y=\mathbf 1_{\{0\}}$.

[L1] A property holds almost everywhere when its exceptional set is contained in
a measurable null set ([[def-measure-null-set-and-almost-everywhere]]).

[L2] Integrable random variables with the same almost-sure class have the same
expectation ([[lem-expectation-is-independent-of-the-ae-representative]]).

## Counterexample

**Proof technique:** direct.

1.1 The functions $X$ and $Y$ differ only at the single point $0$. That set is Lebesgue-null, so [L1] gives $X=Y$ almost surely. [L1, given]

2.1 They are not pointwise equal, because $X(0)=0$ while $Y(0)=1$. They are both bounded and hence integrable, so [L2] also gives $$\mathbb E[X]=\mathbb E[Y]=0.$$ [step 1.1, L2, given]

3.1 Therefore almost-sure equality is strictly weaker than pointwise equality. [step 1.1, step 2.1] ∎
