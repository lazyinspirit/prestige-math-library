---
id: ex-four-square-representations-of-sixty-five
kind: example
title: "Four essentially different four-square representations of $65$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sum-of-four-squares-representation, thm-lagrange-four-square-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Example 6.1"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Example

The integer $65$ has the four-square representations

$$65=1^2+8^2+0^2+0^2=4^2+7^2+0^2+0^2=2^2+5^2+6^2+0^2=2^2+3^2+4^2+6^2.$$

Their multisets of absolute values are $\{8,1,0,0\}$, $\{7,4,0,0\}$,
$\{6,5,2,0\}$ and $\{6,4,3,2\}$, which are pairwise distinct, so no two of the
four are obtained from one another by permuting coordinates or changing signs:
they are essentially different in the sense of
[[def-sum-of-four-squares-representation]].

## Facts & Assumptions

**Given:** The integer $65$ and the four displayed quadruples.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$; two representations are equivalent up to signs and order exactly when their multisets of absolute values coincide, and essentially different otherwise ([[def-sum-of-four-squares-representation]]).

[L1] Every nonnegative integer is a sum of four integer squares ([[thm-lagrange-four-square-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Each display is an identity: $1+64+0+0=65$, $16+49+0+0=65$, $4+25+36+0=65$ and $4+9+16+36=65$, so all four quadruples are representations of $65$ in the sense of [F1], whose existence [L1] guarantees in advance. [given, F1, L1, algebra]

2.1 The multisets $\{8,1,0,0\}$, $\{7,4,0,0\}$, $\{6,5,2,0\}$ and $\{6,4,3,2\}$ are pairwise distinct, since the first two differ in their largest entry, the third contains $5$ and the others do not, and the fourth is the only one with no entry $0$; by the criterion in [F1] the four representations are pairwise essentially different. [step 1.1, F1, algebra] ∎

## Remarks

**Existence and multiplicity are different questions.** [[thm-lagrange-four-square-theorem]] asserts that a representation exists. How many essentially different representations a given integer has is not settled by it, and nothing above computes that number for $65$: the four displayed are exhibited, not claimed to be all.
