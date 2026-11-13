---
id: lem-expander-sync-elementary-angle-bounds
title: Elementary angle and logarithm estimates used in amplification
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-ordered-angle-inequalities
  - prop-expander-prereq-geometric-growth-budget
  - math:lem-integer-part
dependency_roles:
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  prop-expander-prereq-geometric-growth-budget: mathematical-premise
  math:lem-integer-part: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 27 and 30, proofs of Theorems 1.10 and 1.4
      statement: The article uses the displayed inverse-sine, ceiling and logarithm
        estimates in its amplification arguments.
      hypotheses: The ranges are stated explicitly in the lemma below.
      reading_limits: The supplied article text was inspected for attribution; this
        reference is not used as proof of the estimates.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $\arcsin$ be the inverse of sine restricted to $[-\pi/2,\pi/2]$, let $\log$ denote the natural logarithm, and let $\lceil x\rceil$ be the least integer greater than or equal to $x$. Then $\arcsin x\le\pi x/2$ for $0\le x\le1$, $\lceil x\rceil\le2x$ for $x\ge1$, $\log(1+x)\ge2x/(2+x)$ for $x\ge0$, and $\arcsin x\le1.05x$ for $0\le x\le1/4$.

## Facts & Assumptions

[F1] The inverse-sine and logarithm estimates in the Statement hold on their respective stated intervals ([[prop-expander-prereq-ordered-angle-inequalities]]).

[F2] The least integer $\lceil x\rceil$ at least a real $x$ exists ([[prop-expander-prereq-geometric-growth-budget]]). For every real $x$ there is an integer $m$ with $m\le x<m+1$ ([[math:lem-integer-part]]).

## Proof

**Given:** The real variable $x$ lies in the interval specified for each inequality.

**Goal:** Prove the four stated inequalities.

1.1 The two inverse-sine inequalities and the logarithm inequality follow on their stated ranges directly from [F1]. [F1]

2.1 If $x\ge1$, choose $m$ as in [F2]. Since $m+1$ is an integer greater than $x$, the least-integer property gives $\lceil x\rceil\le m+1\le x+1\le2x$. Together with step 1.1, this proves all four inequalities. [given, F2, step 1.1, algebra] ∎



The article uses these estimates in the proofs cited above. Its citation records attribution, while the proof here uses the stated suppliers.

## Source attribution

The article uses these estimates in the proofs cited above. Its citation records attribution, while the proof here uses the stated suppliers.
