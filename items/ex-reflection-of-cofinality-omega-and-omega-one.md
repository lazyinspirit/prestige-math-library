---
id: ex-reflection-of-cofinality-omega-and-omega-one
kind: example
title: "A trace computation for cofinality strata"
status: published
origin: pipeline
deps: ["def-cofinality-strata-and-stationary-trace", "thm-regular-cofinality-strata-are-stationary"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Definition 15.6 and Example 15.7, p.85"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
    - title: "Rinot, observation after Theorem 4.11 and before Question 22, p.26; expanded elementary instance"
      url: https://papers.assafrinot.com/jensendiamond.pdf
---

## Example

In ZFC, with trace restricted to ordinals of uncountable cofinality,
$$\operatorname{Tr}(E^{\omega_2}_\omega)=E^{\omega_2}_{\omega_1},\qquad \operatorname{Tr}(E^{\omega_2}_{\omega_1})=\varnothing.$$
In particular the cofinality-omega stratum reflects at every ordinal below omega-two of cofinality omega-one, while the cofinality-omega-one stratum is nonreflecting.

## Facts & Assumptions

[F1] [[def-cofinality-strata-and-stationary-trace]]: Trace is tested only at ordinals of uncountable cofinality.

[F2] [[thm-regular-cofinality-strata-are-stationary]]: $E^\theta_\lambda$ is stationary if lambda is infinite regular and $\lambda<\operatorname{cf}(\theta)$.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 For alpha below omega-two, any uncountable cofinality must equal omega-one: cofinality is a cardinal at most the cardinality of alpha, and this is at most aleph-one. If alpha has this cofinality, the stratum theorem with theta equal to alpha and lambda equal to omega says $E^{\omega_2}_\omega\cap\alpha$ is stationary. This proves the first equality. [F1, F2]

2.1 Fix such an alpha and an increasing cofinal sequence $(a_\xi)_{\xi<\omega_1}$ in alpha. Recursively define a strictly increasing cofinal sequence c: take $c_0=a_0+1$, at successors take $c_{\xi+1}=\max(c_\xi,a_{\xi+1})+1$, and at nonzero limits take the supremum of prior values. Countable initial segments remain bounded since alpha has cofinality omega-one. The range is unbounded and closed: a limit point below alpha corresponds to a bounded limit set of indices, whose supremum is below omega-one, and continuity includes that value. [step 1.1]

3.1 At zero and successor indices the c values are successors and have cofinality one. At nonzero limit indices below omega-one, continuity and strict increase give a countable cofinal sequence with no last point, so the value has cofinality omega. Thus this club avoids $E^{\omega_2}_{\omega_1}\cap\alpha$. No eligible alpha belongs to its trace, giving the second equality. [F1, step 2.1] ∎
