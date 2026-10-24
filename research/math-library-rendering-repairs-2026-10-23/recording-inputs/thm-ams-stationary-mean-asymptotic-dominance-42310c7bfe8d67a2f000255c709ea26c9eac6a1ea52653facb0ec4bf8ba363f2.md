---
id: thm-ams-stationary-mean-asymptotic-dominance
kind: theorem
title: "The stationary mean asymptotically dominates an AMS law"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-ams-source-and-stationary-mean
  - thm-fatou-lemma
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Probability, Random Processes, and Ergodic Properties"
      url: "https://ee.stanford.edu/~gray/arp.pdf"
      locator: "§6.3.2–6.3.4, printed pp.130–132: invariant-set agreement for AMS laws, stationary-mean asymptotic domination, the Lebesgue-decomposition estimate, and null future-tail transfer."
---
## Statement

For an AMS law $P$ with stationary mean $\bar P$, $P(T^{-n}G)$ tends to zero for every event $G$ with $\bar P(G)=0$.

## Facts & Assumptions

**Given:** A probability measure $P$ on a measurable space $(\Omega,\mathcal F)$, a measurable map $T$, and an AMS stationary mean $\bar P$ as in [[def-ams-source-and-stationary-mean]].

[F1] [[def-ams-source-and-stationary-mean]]: $\bar P(G)=\lim_NN^{-1}\sum_{j<N}P(T^{-j}G)$ for every measurable $G$, and $\bar P$ is stationary.

[F2] [[thm-fatou-lemma]]: for nonnegative measurable functions $f_n$, $\int\liminf_n f_n\,dP\le\liminf_n\int f_n\,dP$.

## Proof

**Given:** The AMS probability system and [F1]–[F2].

1.1 If $B$ is strictly invariant, then $P(T^{-j}B)=P(B)$ for every $j$, so [F1] gives $\bar P(B)=P(B)$. Thus the two laws agree on strictly invariant events. [F1, given]

2.1 Fix measurable $G$ with $\bar P(G)=0$ and set $B=\limsup_n T^{-n}G=\bigcap_N\bigcup_{n\ge N}T^{-n}G$. Stationarity gives $\bar P(T^{-n}G)=0$ for each $n$, hence $\bar P(B)=0$ by countable subadditivity. Also $T^{-1}B=B$ because removing the first term of a limsup does not change it. Step 1.1 yields $P(B)=0$. [F1, step 1.1, algebra]

3.1 Apply [F2] to $f_n=\mathbf 1_{(T^{-n}G)^c}$. Since $\liminf_n(T^{-n}G)^c=B^c$ and $P(B^c)=1$ by step 2.1, Fatou gives $$1=P(B^c)=\int\liminf_n f_n\,dP\le\liminf_n\bigl(1-P(T^{-n}G)\bigr)=1-\limsup_nP(T^{-n}G).$$ Thus $\limsup_nP(T^{-n}G)\le0$, and nonnegativity implies $P(T^{-n}G)\to0$. This is asymptotic domination of $P$ by its stationary mean. [F2, step 2.1, algebra] ∎
