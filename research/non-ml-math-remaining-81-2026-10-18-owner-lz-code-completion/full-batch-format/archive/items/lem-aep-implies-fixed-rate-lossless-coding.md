---
id: lem-aep-implies-fixed-rate-lossless-coding
kind: lemma
title: "AEP criterion for fixed-rate lossless coding"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-block-information-and-entropy
  - def-finite-block-source-code
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

For any finite-alphabet source with -n^{-1}log2 P(X^n) converging in probability to h, proves vanishing block error is achievable for R>h and impossible for R<h.

## Facts & Assumptions

**Given:** Finite block laws $p_n$ on $\mathcal A^n$, entropy-rate candidate $h$, and normalized self-information $I_n(X^n)/n$ from [[def-finite-block-information-and-entropy]]. Assume $I_n(X^n)/n\to h$ in probability.

[F1] [[def-finite-block-information-and-entropy]]: $I_n(x)=-\log_2p_n(x)$ on positive-probability blocks.

[F2] [[def-finite-block-source-code]]: a rate-$R$ fixed-length code has at most $2^{\lfloor nR\rfloor}$ messages and success-set cardinality at most that number.

## Proof

**Given:** The AEP convergence and finite-block coding convention [F1]–[F2].

1.1 Let $R>h$ and choose $\epsilon>0$ with $h+\epsilon<R$. Define $T_n=\{x:p_n(x)>0,\ I_n(x)\le n(h+\epsilon)\}$. On $T_n$, each word has probability at least $2^{-n(h+\epsilon)}$, so $|T_n|\le2^{n(h+\epsilon)}$. The AEP gives $P(X^n\in T_n)\to1$. [F1, given, algebra]

1.2 For all sufficiently large $n$, $|T_n|\le2^{\lfloor nR\rfloor}$. Assign distinct fixed-length messages to $T_n$ and decode all other messages as an arbitrary fixed word. The block error is at most $P(X^n\notin T_n)\to0$. [F2, step 1.1, algebra]

1.3 Let $R<h$ and choose $\epsilon>0$ with $R+\epsilon<h$. Any decoder succeeds on a set $S_n$ of at most $2^{\lfloor nR\rfloor}$ words. Split it according to whether $I_n(x)>n(R+\epsilon)$. The probability of successful words in that part is at most $2^{nR}2^{-n(R+\epsilon)}=2^{-n\epsilon}$, while the other part has total probability tending to zero by the AEP. Thus success probability tends to zero. At $R=h$ neither conclusion is asserted. [F1, F2, given, algebra] ∎
