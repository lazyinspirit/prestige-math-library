---
id: ex-interior-square-root-singularity
kind: example
title: "$|x-c|^{-1/2}$ has a convergent improper integral across an interior singularity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mixed-improper-integral, thm-improper-p-test-rational,
       lem-truncated-integrals-of-rational-powers, thm-substitution,
       thm-linearity-of-the-integral, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

If $a<c<b$, then
$$\int_a^b|x-c|^{-1/2}dx=2\sqrt{c-a}+2\sqrt{b-c},$$
where the integral is improper at the interior point $c$.

## Facts & Assumptions

**Given:** Reals $a<c<b$.

[L1] A mixed integral at $c$ requires separate convergence on $[a,c)$ and $(c,b]$ ([[def-mixed-improper-integral]]).

[L2] The exponent $1/2<1$ gives convergence at a finite endpoint ([[thm-improper-p-test-rational]]).

[L3] The truncated power formula gives $\int_0^A t^{-1/2}dt=2\sqrt A$ ([[lem-truncated-integrals-of-rational-powers]]).

## Verification

**Proof technique:** computation.

1.1 On the left use $t=c-x$; on the right use $t=x-c$. The two one-sided integrals become respectively $\int_0^{c-a}t^{-1/2}dt$ and $\int_0^{b-c}t^{-1/2}dt$.

1.2 Both converge separately by [L2], as [L1] requires. Evaluating them with [L3] and adding gives the displayed value. ∎
