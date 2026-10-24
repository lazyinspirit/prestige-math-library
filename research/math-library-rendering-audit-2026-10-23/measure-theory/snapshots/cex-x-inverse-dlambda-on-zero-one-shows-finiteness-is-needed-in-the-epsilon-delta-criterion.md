---
id: cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion
kind: counterexample
title: "$x^{-1}d\\lambda$ on $(0,1)$ shows finiteness is needed in the epsilon-delta criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-with-density,
       cor-integral-over-a-null-set-vanishes,
       thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 13.2 discussion"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement refuted

The epsilon-delta small-set condition characterises absolute continuity for every sigma-finite measure.

## Facts & Assumptions

**Given:** The measure $\nu(E)=\int_E x^{-1}\chi_{(0,1)}(x)\,d\lambda(x)$ on $\mathbb R$.

[L1] A nonnegative measurable density defines a measure ([[def-measure-with-density]]), and its integral over every Lebesgue-null set vanishes ([[cor-integral-over-a-null-set-vanishes]]), so the resulting measure is absolutely continuous with respect to $\lambda$.

[L2] Under its stated Axiom of Choice, the finite-measure theorem proves the epsilon-delta criterion only under a finiteness hypothesis. This contextual observation is not used to construct the counterexample ([[thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the measure $\nu$ is absolutely continuous with respect to $\lambda$. [L1, given]

2.1 Let $\varepsilon:=1$ and let $\delta>0$. Put $a:=\min(\delta/2,1/2)$ and $E:=(0,a)\subseteq(0,1)$. Then $\lambda(E)=a<\delta$, but $$\nu(E)=\int_0^a\frac{dx}{x}=+\infty>1.$$ The measure $\nu$ is sigma-finite: $(0,1)=\bigcup_{m\ge2}(1/m,1)$ and every displayed interval has finite $\nu$-mass, while $\nu$ vanishes off $(0,1)$. Thus the epsilon-delta conclusion fails for an absolutely continuous sigma-finite measure. [step 1.1, given, algebra] ∎
