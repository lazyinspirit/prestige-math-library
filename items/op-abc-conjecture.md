---
id: op-abc-conjecture
kind: open-problem
title: abc conjecture over the rational integers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Vojta, Diophantine Approximation and Nevanlinna Theory
      url: https://math.berkeley.edu/~vojta/cime/cime.pdf
      locator: §22, Conjecture 22.6, printed pp. 190–191.
    - title: Peter Scholze and Jakob Stix, Why abc is still a conjecture (2018)
      url: https://arxiv.org/pdf/1808.08964
      locator: §1.1, exact formulation; §2.2, the authors’ stated objection and recorded dissent.
    - title: Kirti Joshi, arXiv:2505.10568
      url: https://arxiv.org/pdf/2505.10568
      locator: Opening §§1.1–1.2 and conclusion §1.4, the author's response and proof claim.
---

## Open problem

For every real $\epsilon>0$, prove that there is a constant $C_\epsilon$ such that every triple of nonzero integers $a,b,c$ satisfying $a+b+c=0$ and $\gcd(a,b,c)=1$ satisfies
$$h([a:b:c])\le(1+\epsilon)\sum_{p\mid abc}\log p+C_\epsilon,$$
where $h([a:b:c])=\log\max\{|a|,|b|,|c|\}$ for these primitive integer coordinates and the sum is over rational primes dividing $abc$. The primitivity condition is the common-gcd condition, not a separate convention about pairs.

## Open problem references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[Paul Vojta, *Diophantine Approximation and Nevanlinna Theory*, Conjecture 22.6](https://math.berkeley.edu/~vojta/cime/cime.pdf)

[Peter Scholze and Jakob Stix, *Why abc is still a conjecture*, §§1.1 and 2.2](https://arxiv.org/pdf/1808.08964)

[Kirti Joshi, arXiv:2505.10568](https://arxiv.org/pdf/2505.10568)

## Facts & Assumptions

**Given:** $\epsilon>0$ and integers $a,b,c\ne0$ with $a+b+c=0$ and common gcd $1$.

[A1] The absolute logarithmic projective-height normalization used for this formulation requires AC in the library interface. ([[def-axiom-of-choice]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F1] The absolute logarithmic projective height is $h(P)=\log H(P)$ and is independent of projective coordinates. ([[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

## Status

The item records the abc formulation as a conjectural problem. The sources consulted include Scholze–Stix's 2018 objection to a proposed proof and a later public response by Joshi that contests that objection and advances another proof claim. Those sources disagree; this item does not adjudicate their arguments or assert a present-day consensus status, and it is not a theorem supplier.
