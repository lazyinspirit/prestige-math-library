---
id: cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness
kind: counterexample
title: "Counting measure on $[0,1]$ shows the dominating measure needs sigma-finiteness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-counting-measure, prop-counting-measure-is-a-measure, def-measure-with-density, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 6.23 and Example 6.28"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Lebesgue measure on $[0,1]$ has a Radon-Nikodym density with respect to counting measure on $[0,1]$.

## Facts & Assumptions

**Given:** Counting measure $c$ on $[0,1]$ and Lebesgue measure $\lambda$ on $[0,1]$.

[L1] Counting measure is a measure, and for a singleton one has $c(\{x\})=1$. ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]])

[L2] A density representation would mean $\lambda(E)=\int_E f\,dc$ for every measurable set $E$. ([[def-measure-with-density]])

## Counterexample

**Proof technique:** direct.

1.1 Suppose $\lambda(E)=\int_E f\,dc$ for every measurable set $E\subseteq[0,1]$. Applying this to a singleton $\{x\}$ and using [L1] gives $$0=\lambda(\{x\})=\int_{\{x\}}f\,dc=f(x)\qquad(x\in[0,1]).$$ Thus $f=0$ pointwise. [L1, L2, assume-contra, algebra]

2.1 Step 1.1 and [L2] then give $$\lambda([0,1])=\int_{[0,1]}f\,dc=0,$$ contradicting the fact that the interval has Lebesgue mass $1$. Therefore no such density exists. [step 1.1, L2, contradiction: total mass one, discharge-contradiction] ∎
