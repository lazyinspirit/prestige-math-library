---
id: thm-a-stopped-martingale-is-a-martingale
kind: theorem
title: A stopped martingale is a martingale
status: published
origin: pipeline
deps: [def-stopped-random-variable-and-stopped-process, lem-equivalent-event-tests-for-a-discrete-stopping-time, def-discrete-martingale-transform, def-martingale-submartingale-and-supermartingale, thm-taking-out-what-is-known, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §§2.3 and 2.8", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $M$ is a martingale and $\tau$ is a stopping time, then $M_n^\tau=M_{n\wedge\tau}$ is a martingale with respect to the original filtration.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-stopped-random-variable-and-stopped-process]] gives a finite formula for every $M_{n\wedge\tau}$.

[F2] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] gives $\{\tau\ge n\}\in\mathcal F_{n-1}$.

[F3] [[def-discrete-martingale-transform]] interprets the stopped increments as a bounded predictable transform.

[F4] [[def-martingale-submartingale-and-supermartingale]] supplies the conditional mean-zero increments.

[F5] [[def-axiom-of-choice]] states AC, assumed here because the martingale and conditional-expectation interfaces require it.

[F6] [[thm-taking-out-what-is-known]] permits the bounded $\mathcal F_{n-1}$-measurable indicator in step 1.2 to be taken outside conditional expectation.

## Proof

1.1 The finite formula in F1 makes $M_{n\wedge\tau}$ $\mathcal F_n$-measurable and integrable: it is a finite sum of $M_k1_{\{\tau=k\}}$ for $k<n$ and $M_n1_{\{\tau\ge n\}}$. [F1, F2]

1.2 Pathwise, $$M_{n\wedge\tau}-M_{(n-1)\wedge\tau} =1_{\{\tau\ge n\}}(M_n-M_{n-1}).$$ The indicator is bounded and $\mathcal F_{n-1}$-measurable by F2, so this is the $n$th increment of the predictable transform in F3. [F2, F3]

2.1 Taking the conditional expectation of step 1.2 and pulling out the indicator by F6 gives zero by F4. Together with adaptedness and integrability from step 1.1, this is exactly the martingale condition. The stopped process never evaluates a value at infinity; AC has only the role in F5. [F4, F5, F6, step 1.1, step 1.2] ∎
