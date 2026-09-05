---
id: cex-divergent-probability-sum-without-independence
kind: counterexample
title: "A divergent probability sum does not force infinitely many occurrences without independence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-limsup-and-infinitely-often-event, lem-probability-measure-basic-identities]
proof_strategy: constructive
sources:
  references: []
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

If $(A_n)_{n\in\mathbb N}$ is a sequence of events with
$$\sum_{n=0}^\infty \mathbb P(A_n)=+\infty,$$
then
$$\mathbb P(A_n\ \mathrm{i.o.})=1.$$

## Facts & Assumptions

**Given:** An event $A$ with $0<\mathbb P(A)<1$, and define $A_n:=A$ for every
$n\in\mathbb N$.

[L1] The event $A_n\ \mathrm{i.o.}$ is the event that infinitely many of the
$A_n$ occur. ([[def-limsup-and-infinitely-often-event]])

[L2] Probability measures respect complements and monotone set identities.
([[lem-probability-measure-basic-identities]])

## Counterexample

**Proof technique:** constructive.

1.1 Since every $A_n$ equals $A$, one has $$\sum_{n=0}^\infty \mathbb P(A_n)=\sum_{n=0}^\infty \mathbb P(A)=+\infty.$$ [given, algebra, construct]

1.2 For every outcome $\omega$, either $\omega\in A$ and then $\omega\in A_n$ for all $n$, or $\omega\notin A$ and then $\omega\notin A_n$ for all $n$. Hence the infinitely-often event is exactly $A$ itself: $$A_n\ \mathrm{i.o.}=A.$$ [L1]

2.1 Therefore $$\mathbb P(A_n\ \mathrm{i.o.})=\mathbb P(A),$$ and the chosen hypothesis $0<\mathbb P(A)<1$ makes this probability strictly between $0$ and $1$. So the displayed implication is false without an independence hypothesis. [step 1.1, step 1.2, L2, discharge-construct] ∎
