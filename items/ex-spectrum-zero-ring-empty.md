---
id: ex-spectrum-zero-ring-empty
kind: example
title: "The zero ring has empty spectrum"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme-spectrum, def-prime-and-maximal-ideals, thm-global-sections-affine-scheme]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.4"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Example

With the unital convention, $\operatorname{Spec}(0)=\varnothing$ and the
empty affine scheme has global ring $0$.

## Facts & Assumptions

**Given:** The zero ring $0$, in which $0=1$.

[F1] Global functions on an affine spectrum recover its defining ring
([[thm-global-sections-affine-scheme]]).

## Verification

**Proof technique:** direct.

1.1 The only ideal of the zero ring contains $1=0$, hence is not proper. [given]

2.1 Thus $\operatorname{Spec}(0)$ has no points and is empty. [step 1.1]

3.1 By [F1], its global sections are $0$. [F1, step 2.1] ∎
 
