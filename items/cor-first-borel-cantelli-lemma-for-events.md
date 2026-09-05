---
id: cor-first-borel-cantelli-lemma-for-events
kind: corollary
title: "First Borel-Cantelli lemma for events"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limsup-and-infinitely-often-event, thm-first-borel-cantelli]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.3.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If
$$\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$$
then
$$\mathbb P(A_n\ \mathrm{i.o.})=0.$$

No independence hypothesis is needed.

## Facts & Assumptions

**Given:** Events $(A_n)_{n\in\mathbb N}$ with
$\sum_{n=0}^\infty \mathbb P(A_n)<+\infty$.

[L1] The infinitely-often event is the set limsup.
([[def-limsup-and-infinitely-often-event]])

[L2] If the sum of the measures is finite, then the measure of the set limsup is
zero. ([[thm-first-borel-cantelli]])

## Proof

**Proof technique:** direct.

1.1 By [L1], the event $\{A_n\ \mathrm{i.o.}\}$ is exactly $\limsup_{n\to\infty}A_n$. [L1]

2.1 Applying [L2] to the probability measure $\mathbb P$ and the measurable sets $A_n$ gives $$\mathbb P(A_n\ \mathrm{i.o.})=\mathbb P\left(\limsup_{n\to\infty}A_n\right)=0.$$ [step 1.1, L2] ∎
