---
id: cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function
kind: counterexample
title: "The indicator of a fat Cantor set is upper semicontinuous and equal almost everywhere to no Riemann integrable function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-semicontinuity, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, thm-borel-sets-are-lebesgue-measurable, prop-measure-of-a-set-difference, cor-riemann-integrability-and-lebesgue-null-discontinuity-sets, thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Smith-Volterra-Cantor set (standard construction)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
---

## Statement refuted

Assume the Axiom of Countable Choice.

An upper semicontinuous function on $[0,1]$ is always almost everywhere equal
to some Riemann integrable function.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice. Let the Smith-Volterra-Cantor set $S\subseteq[0,1]$ and its indicator $\chi_S$ be as above.

[L1] Upper semicontinuity at a point means that nearby values stay below the value at the point plus an arbitrary $\varepsilon>0$. ([[def-semicontinuity]])

[L2] The Smith-Volterra-Cantor set is compact, nowhere dense, and does not have measure zero. ([[thm-fat-cantor-set-has-positive-measure]])

[L3] Assuming the Axiom of Countable Choice, every Borel subset of $\mathbb R$ is Lebesgue measurable. ([[thm-borel-sets-are-lebesgue-measurable]])

[L4] If $A\subseteq B$ are measurable with finite measure, then $$\lambda_1(B\setminus A)=\lambda_1(B)-\lambda_1(A).$$ ([[prop-measure-of-a-set-difference]])

[L5] Assuming the Axiom of Countable Choice, a bounded function on $[0,1]$ is Riemann integrable exactly when its discontinuity set has Lebesgue measure $0$. ([[cor-riemann-integrability-and-lebesgue-null-discontinuity-sets]])

[L6] Assuming the Axiom of Countable Choice, every nondegenerate interval has positive Lebesgue measure. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Counterexample

**Proof technique:** direct.

1.1 The function $\chi_S$ is upper semicontinuous on $[0,1]$. If $x\in S$, then $\chi_S(y)\le1<1+\varepsilon$ for every $y$ and every $\varepsilon>0$. If $x\notin S$, then $S$ is closed by [L2], so there is an open neighbourhood of $x$ disjoint from $S$; on that neighbourhood $\chi_S$ is identically $0$, which is certainly below $0+\varepsilon$. Thus [L1] is satisfied at every point. [L1, L2]

2.1 Let $g:[0,1]\to\mathbb R$ satisfy $g=\chi_S$ almost everywhere, and let $N$ be a measurable null set containing the disagreement set. Because $S$ is compact, [L3] makes it measurable, and [L2] says it does not have measure zero. Therefore [L4] gives $$\lambda_1(S\setminus N)=\lambda_1(S)-\lambda_1(S\cap N)=\lambda_1(S)>0.$$ Fix $x\in S\setminus N$. Then $g(x)=1$. Since $S$ is nowhere dense by [L2], every neighbourhood of $x$ meets $[0,1]\setminus S$; the intersection of that neighbourhood with $[0,1]\setminus S$ is a nonempty open set, so it contains a nondegenerate interval and hence has positive measure by [L6]. Because $N$ is null, that positive-measure open set cannot be contained in $N$, so the neighbourhood contains $y\notin S\cup N$. Then $g(y)=\chi_S(y)=0$. Thus $g$ is discontinuous at every $x\in S\setminus N$. [step 1.1, L2, L3, L4, L6]

3.1 Step 2.1 shows that the discontinuity set of $g$ contains the positive-measure set $S\setminus N$. Hence [L5] implies that $g$ is not Riemann integrable. So $\chi_S$ is upper semicontinuous but is almost everywhere equal to no Riemann integrable function, and the statement is false. [step 2.1, L5] ∎
