---
id: cex-oscillatory-step-function-improper-integral-diverges
kind: counterexample
title: "A bounded truncation function need not have an improper limit"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-improper-integral-at-infinity,
       thm-nonnegative-improper-integral-bounded-primitive-criterion,
       thm-additivity-over-subintervals, lem-alternating-sequence,
       def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

Define $f(x)=(-1)^k$ on $[k,k+1)$ for every nonnegative integer $k$. Its truncation primitive is bounded, but $\int_0^\infty f$ diverges.

## Facts & Assumptions

**Given:** The alternating unit-step function $f$.

[L1] Proper integrals add across the integer subintervals ([[thm-additivity-over-subintervals]]).

[L2] The alternating sequence $1,-1,1,-1,\ldots$ has partial sums alternating between two values ([[lem-alternating-sequence]]).

[L3] The bounded-primitive criterion requires a nonnegative integrand ([[thm-nonnegative-improper-integral-bounded-primitive-criterion]]).

## Verification

**Proof technique:** counterexample.

1.1 For a positive integer $N$, additivity gives the displayed sum, whose parity values follow from the alternating sequence. [L1, L2]
$$\int_0^Nf=\sum_{k=0}^{N-1}(-1)^k,$$
which equals one for odd $N$ and zero for even $N$ by [L2]. Thus the integer truncations are bounded but have no limit. [L1, L2]
If $N\le R<N+1$, the remaining integral has absolute value at most one, so the full truncation primitive is bounded as asserted.

2.1 An improper limit would restrict to the same limit along all integer truncations, contradicting step 1.1. The example changes sign, so it does not satisfy the nonnegativity hypothesis in [L3] and shows that hypothesis cannot be deleted. [L3, step 1.1] ∎
