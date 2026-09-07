---
id: ex-stationary-cofinality-strata
kind: example
title: "Cofinality strata and stationary costationary sets"
status: draft
origin: pipeline
deps: ["thm-regular-cofinality-strata-are-stationary", "cor-club-filter-not-an-ultrafilter", "thm-hessenberg", "thm-countable-union-of-countable"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vasey, Example 14.13(6) and Corollary 15.4, pp.82–84"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Example

In ZFC, $E^{\omega_1}_\omega$ is club, whereas $E^{\omega_2}_\omega$ and $E^{\omega_2}_{\omega_1}$ are disjoint stationary sets, neither containing a club.

## Facts & Assumptions

[F3] [[thm-countable-union-of-countable]]: Countable choice makes every countable union of at most countable sets at most countable.

[F2] [[thm-hessenberg]]: In ZF every infinite well-ordered cardinal satisfies $\kappa\cdot\kappa=\kappa$ for cardinal multiplication.

[F1] [[thm-regular-cofinality-strata-are-stationary]]: $E^\theta_\lambda$ is stationary when lambda is infinite regular and $\lambda<\operatorname{cf}(\theta)$.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 In ZFC omega-one and omega-two are regular: a cofinal family of at most omega ordinals below omega-one has countable union; a cofinal family of at most omega-one ordinals below omega-two has union of size at most $\aleph_1\cdot\aleph_1=\aleph_1$. Both would contradict the cardinality of the ambient ordinal. For the second union, AC chooses injections of its at most aleph-one members into omega-one, so the union injects into the product of the index set with omega-one. These estimates use countable choice and infinite well-ordered cardinal multiplication. [F2, F3]

2.1 Every nonzero countable limit has cofinality omega: enumerate it and take successive finite maxima to obtain a cofinal sequence; a finite subset cannot be cofinal in a limit. Thus $E^{\omega_1}_\omega$ is exactly the nonzero limits, a closed unbounded set. [step 1.1]

3.1 Apply the stratum theorem at omega-two with lambda equal to omega and omega-one. The resulting stationary sets are disjoint since an ordinal has only one cofinality. A club contained in either would miss the other, contradicting stationarity. [F1, step 1.1] ∎
