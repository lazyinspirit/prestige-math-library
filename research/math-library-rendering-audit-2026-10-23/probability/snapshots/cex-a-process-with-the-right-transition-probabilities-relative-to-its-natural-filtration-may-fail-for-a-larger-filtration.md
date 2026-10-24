---
id: cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration
kind: counterexample
title: "The Markov property can fail for a larger filtration"
status: published
origin: pipeline
deps: [def-axiom-of-choice, ex-iid-sequences-as-markov-chains-with-state-independent-kernel, def-time-homogeneous-markov-chain-with-transition-kernel]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Filtration-relative Markov definition, printed pp. 268-269"
---

## Statement

Assume Choice. An IID fair-bit sequence has the constant fair transition kernel
relative to its natural filtration, but it need not have that kernel relative
to a larger filtration. In particular, revealing $X_1$ at time zero makes the
time-zero Markov identity fail.

## Facts & Assumptions

**Given:** The IID fair-bit sequence and the two filtrations specified below.

[F1] An IID sequence with law $\nu$ is a Markov chain with constant kernel $K(x,A)=\nu(A)$ relative to its natural filtration. ([[ex-iid-sequences-as-markov-chains-with-state-independent-kernel]])

[F2] The Markov definition is relative to the specified filtration and requires adaptedness. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

## Counterexample

1.1 Let $(X_n)$ be IID fair bits and [F1] $\mathcal F_n^X=\sigma(X_0,\ldots,X_n)$. By [F1], $X$ is a Markov chain for this filtration with $K(x,\{1\})=1/2$. [F1]

1.2 Define a larger filtration by [F2] $$ \mathcal G_0=\sigma(X_0,X_1), \qquad \mathcal G_n=\sigma(X_0,\ldots,X_n,X_1)\quad(n\ge1). $$ Then $\mathcal G_0=\mathcal G_1$ and $\mathcal G_n=\mathcal F_n^X$ for $n\ge1$, so $(\mathcal G_n)$ is increasing; it contains $\mathcal F_n^X$ at every time, and $X$ is adapted. Thus it meets the structural requirements in [F2]. [F2]

2.1 Since $X_1$ is $\mathcal G_0$-measurable, [F2, step 1.1, step 1.2] $$ \mathbb P(X_1=1\mid\mathcal G_0)=1_{\{X_1=1\}} $$ almost surely. This differs from $K(X_0,\{1\})=1/2$ on both positive-probability events $\{X_1=0\}$ and $\{X_1=1\}$. Hence the time-zero identity in [F2] fails for the larger filtration, although it holds naturally. Empty/full target events still give zero/one and do not witness failure. Choice is used only by the conditional-probability classes. [F2, step 1.1, step 1.2] ∎
