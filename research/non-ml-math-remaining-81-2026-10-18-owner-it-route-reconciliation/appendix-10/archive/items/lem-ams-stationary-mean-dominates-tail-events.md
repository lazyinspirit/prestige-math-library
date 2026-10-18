---
id: lem-ams-stationary-mean-dominates-tail-events
kind: lemma
title: "A null future-tail event under the stationary mean is null under the AMS law"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-ams-source-and-stationary-mean
  - thm-ams-stationary-mean-asymptotic-dominance
  - def-axiom-of-choice
  - thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
  - def-measure-concentrated-on-a-measurable-set
  - def-mutually-singular-measures
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC for countably many Lebesgue decompositions and tail-preimage choices; no stronger choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Assume AC. If the stationary mean asymptotically dominates P, proves every future-tail event E with Pbar(E)=0 satisfies P(E)=0.

## Facts & Assumptions

**Given:** AC; a probability measure $P$ and measurable map $T$ whose stationary mean $\bar P$ asymptotically dominates $P$; and the future-tail sigma-algebra $\mathcal F_\infty=\bigcap_{n\ge0}\sigma(X_n,X_{n+1},\ldots)$ for the coordinate process.

[A1] [[def-axiom-of-choice]]: AC is used only for the countable family of Lebesgue decompositions and tail preimages below.

[F1] [[thm-ams-stationary-mean-asymptotic-dominance]]: if $\bar P(G)=0$, then $P(T^{-n}G)\to0$.

[F2] [[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]]: a finite positive measure decomposes into an absolutely continuous part with density and a mutually singular part.

[F3] [[def-mutually-singular-measures]] and [[def-measure-concentrated-on-a-measurable-set]]: a singular positive part is concentrated on a measurable carrier that is null for the reference measure.

[F4] [[def-ams-source-and-stationary-mean]]: the stationary mean $\bar P$ is invariant under $T$.

## Proof

**Given:** AC, an AMS law $P$ with stationary mean $\bar P$, and $E\in\mathcal F_\infty$ with $\bar P(E)=0$.

1.1 For each $n$, define the probability measure $P_n(B)=P(T^{-n}B)$. By [F2] and countable choice [A1], write $P_n(B)=\int_B f_n\,d\bar P+\sigma_n(B)$, where $f_n\ge0$. The singularity in [F2] and the carrier convention [F3] give a measurable $N_n$ with $\bar P(N_n)=0$ on which $\sigma_n$ is concentrated. [A1, F2, F3, given]

1.2 Put $N=\bigcup_nN_n$. Then $\bar P(N)=0$, so [F1] gives $P_n(N)=P(T^{-n}N)\to0$. For every measurable $B$,
$$0\le P_n(B)-\int_Bf_n\,d\bar P=\sigma_n(B)\le\sigma_n(N)\le P_n(N).$$
Thus the absolutely continuous approximations have error tending to zero uniformly over $B$. [F1, step 1.1, algebra]

1.3 Since $E\in\mathcal F_\infty$, for every $n$ choose a measurable $B_n$ with $E=T^{-n}B_n$. Stationarity [F4] gives $\bar P(B_n)=\bar P(T^{-n}B_n)=\bar P(E)=0$, so $\int_{B_n}f_n\,d\bar P=0$. Step 1.2 then gives $P(E)=P_n(B_n)\le P_n(N)\to0$. Hence $P(E)=0$. The tail preimages form a countable family; no uncountable simultaneous version selection is made. [A1, F4, step 1.2, given, algebra] ∎
