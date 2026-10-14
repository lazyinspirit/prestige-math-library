---
id: cex-noncontiguous-binary-sequences
kind: counterexample
title: Binary laws with a rare event are not contiguous
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-contiguous-sequences-of-measures
  - thm-mean-one-likelihood-ratio-limit-implies-contiguity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §1.2
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

For $n\ge2$, define probability laws on $\{0,1\}$ by
$$P_n\{1\}=1/n,\qquad Q_n\{1\}=1/2.$$
Then $Q_n$ is not contiguous with respect to $P_n$. The likelihood ratios
$L_n=dQ_n/dP_n$ exist, but their $P_n$-distributional limit has mean less
than one; therefore the matching-mean hypothesis in
[[thm-mean-one-likelihood-ratio-limit-implies-contiguity]] is essential.

## Facts & Assumptions

**Given:** The two-point measurable space, the probability laws above, and the
event-supremum definition of contiguity.

[F1] [[def-contiguous-sequences-of-measures]]: $Q_n\triangleleft P_n$ would
require $Q_n(A_n)\to0$ whenever $P_n(A_n)\to0$.

[F2] [[thm-mean-one-likelihood-ratio-limit-implies-contiguity]]: A
nonnegative likelihood ratio with mean one and a nonnegative distributional
limit of mean one gives contiguity.

## Proof

**Proof technique:** exhibit a rare event and compute the likelihood ratio.

1.1 Let $A_n=\{1\}$. Then $P_n(A_n)=1/n\to0$, while $Q_n(A_n)=1/2$ for every $n$. By [F1], this disproves $Q_n\triangleleft P_n$. [F1, given, algebra]

2.1 On the two atoms, the density is $L_n(1)=\frac{Q_n\{1\}}{P_n\{1\}}=\frac n2,\qquad L_n(0)=\frac{Q_n\{0\}}{P_n\{0\}}=\frac{n}{2(n-1)}.$ Under $P_n$, the value $n/2$ occurs with probability $1/n$ and the other value tends to $1/2$, so $L_n\Rightarrow 1/2$. Each $E_{P_n}L_n=1$, but $E(1/2)=1/2\ne1$; hence the matching-mean condition of [F2] fails. [F2, given, algebra] ∎
