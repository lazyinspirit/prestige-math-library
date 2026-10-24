---
id: thm-xd-finite-budget-adaptive-projection-soundness
kind: theorem
title: "Adaptive projection certificates are sound and finite-budgeted"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-xd-finite-budget-adaptive-projection
  - thm-xd-finite-state-projection-loss-and-observable-bound
  - thm-xd-uniformization-truncation-and-error
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free conditional on the given nonexplosive chain and supplied finite list of projections."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§III, printed pp. 044104-4–044104-5; a projection is accepted only after its finite-state probability mass passes the declared criterion."
---

## Statement

Under the input conditions of [[alg-xd-finite-budget-adaptive-projection]], the algorithm terminates after at most $N$ projection attempts and at most $NB$ uniformization terms. If it returns `certified` for $F_i$, then the true killed loss $c_{F_i}(T)$ is at most $\varepsilon$, the embedded killed-vector $\ell^1$ error is at most $\varepsilon$, and every bounded observable with oscillation $\operatorname{osc}(f)$ has cemetery-lift error at most $\tfrac12\operatorname{osc}(f)\varepsilon$. An `inconclusive` return makes no claim that any finite projection meets the tolerance.

## Facts & Assumptions

**Given:** A finite nested candidate list $F_1\subseteq\cdots\subseteq F_N$, a finite term cap $B$, a tolerance $\varepsilon>0$, and valid projection-rate and arithmetic certificates as required by the algorithm.

[F1] [[alg-xd-finite-budget-adaptive-projection]]: each candidate is attempted at most once, solver terms are capped by $B$, and `certified` is returned only when a validated upper endpoint $U_i$ satisfies $U_i\le\varepsilon$.

[F2] [[thm-xd-finite-state-projection-loss-and-observable-bound]]: for each actual projection, its cemetery mass is the exit probability, the embedded killed-vector $\ell^1$ error equals that mass, and the bounded-observable error is at most half the oscillation times that mass.

[F3] [[thm-xd-uniformization-truncation-and-error]]: a computed finite cemetery vector with certified total error $\delta_i$ has each coordinate within $\delta_i$ of the exact coordinate.

## Proof


**Proof technique:** verify the finite loop bound and the interval certificate.

1.1 The procedure iterates over only the supplied finite list $F_1,\ldots,F_N$, and for each $F_i$ the uniformization solver uses at most $B$ terms by [F1]. It either returns during one of these calls or after the last candidate, so it terminates after at most $N$ projections and $NB$ terms. [given, F1, algebra]

1.2 Suppose the algorithm returns `certified` at index $i$. By [F3], $|\widehat c_i-c_{F_i}(T)|\le\delta_i$. Since $0\le c_{F_i}(T)\le1$, the interval endpoints in [F1] enclose $c_{F_i}(T)$; hence $c_{F_i}(T)\le U_i\le\varepsilon$. [F1, F3, algebra]

2.1 Apply [F2] to this actual $F_i$: the embedded killed-vector error equals $c_{F_i}(T)$ and the observable error is at most $\tfrac12\operatorname{osc}(f)c_{F_i}(T)$. Step 1.2 gives the asserted $\varepsilon$ bounds. [F2, step 1.2, algebra]

3.1 If no candidate passes, or a finite solver returns an unavailable certificate, [F1] specifies `inconclusive`; the procedure has examined only the supplied finite list and therefore establishes no existence claim for a projection outside that list. [F1, given] ∎
