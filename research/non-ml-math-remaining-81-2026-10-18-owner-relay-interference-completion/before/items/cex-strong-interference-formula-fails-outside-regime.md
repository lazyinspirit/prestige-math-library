---
id: cex-strong-interference-formula-fails-outside-regime
kind: counterexample
title: Outside the strong regime, the MAC intersection can be too small
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-finite-two-user-interference-channel-and-strong-regime, thm-finite-strong-interference-channel-capacity]
aliases: []
proof_strategy: counterexample
axiom_use: No choice axiom is used; all alphabets are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, discussion of the strong-interference hypothesis and its converse, printed pp. 116–120.
---

## Statement refuted

The MAC-intersection formula of [[thm-finite-strong-interference-channel-capacity]], if applied to every finite two-user interference channel without its strong-interference hypothesis, gives the exact capacity region.

## Facts & Assumptions

**Given:** Independent messages and the binary no-interference channel with $\mathcal X_1=\mathcal X_2=\mathcal Y_1=\mathcal Y_2=\{0,1\}$, $Y_1=X_1$, and $Y_2=X_2$.

[F1] [[def-finite-two-user-interference-channel-and-strong-regime]]: the strong regime requires both mutual-information inequalities for every product input law.

[F2] [[thm-finite-strong-interference-channel-capacity]]: only under [F1] does the MAC-intersection formula give capacity.

## Counterexample

1.1 Under independent uniform inputs, $I(X_1;Y_1|X_2)=1$ while $I(X_1;Y_2|X_2)=0$. Thus the first strong-interference inequality fails, so the hypothesis of [F2] is absent. [F1, F2, given, algebra]

1.2 Each receiver observes its own input noiselessly. A binary code of rate below one can therefore be sent independently by each user. Since each output alphabet has size two, no rate can exceed one bit per use. Taking closure gives the true capacity square. [given, algebra]

1.3 For uniform independent inputs, each output is a single bit, so $I(X_1,X_2;Y_1)=I(X_1,X_2;Y_2)=1$. Substitution into the formula stated in [F2] gives $R_1+R_2\le1$. It excludes $(1,1)$, which step 1.2 shows belongs to the true capacity square. Hence the statement is false. [F2, step 1.1, step 1.2, algebra] ∎
