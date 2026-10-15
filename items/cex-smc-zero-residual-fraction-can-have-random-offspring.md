---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: cex-smc-zero-residual-fraction-can-have-random-offspring
kind: counterexample
title: "Zero limiting remainder does not make finite residual offspring deterministic"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - alg-multinomial-and-residual-offspring-resampling
proof_strategy: direct
axiom_use: "No choice axiom is used in the finite residual-count counterexample."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

If $\widetilde\pi(r(\upsilon))=0$, then standard residual resampling has deterministic offspring counts for every finite particle sample, so its residual covariance may always be set to zero.

## Facts & Assumptions

**Given:** The residual-weight notation in [[def-smc-clt-function-classes-and-variance-recursions]] and the standard normalized-weight residual algorithm.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $r(u)=u-\lfloor u\rfloor$ and a normalized Radon–Nikodym weight satisfies $\widetilde\pi(\upsilon)=1$.

[F2] [[alg-multinomial-and-residual-offspring-resampling]]: Residual counts are $\lfloor Np_j\rfloor$ plus multinomial draws from the fractional remainders of the normalized weights $Np_j$.

## Counterexample

**Given:** Let the proposal law on $\{A,C,B\}$ assign probabilities $(1/4,1/4,1/2)$, and let the importance weights be $(2,2,0)$. Their proposal expectation is one, the target law is $(1/2,1/2,0)$, and $\widetilde\pi(r(\upsilon))=0$.

1.1 For $N=3$, the event that the proposal sample contains one $A$, one $C$, and one $B$ has probability $3!(1/4)(1/4)(1/2)=3/16>0$. On this event the total weight is four and the normalized weights are $(1/2,1/2,0)$. [F1, given, algebra]

2.1 The scaled normalized weights are $(Np_A,Np_C,Np_B)=(3/2,3/2,0)$, so their floor counts are $(1,1,0)$ and their fractional remainders are $(1/2,1/2,0)$. By [F2] one residual child is drawn, with equal probability from $A$ and $C$; hence the offspring-count vector is random although the limiting proposal remainder integral is zero. This contradicts the Statement. [F2, step 1.1, algebra] ∎
