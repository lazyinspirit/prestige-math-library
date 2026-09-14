---
id: cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state
kind: counterexample
title: "A time-inhomogeneous chain may require enlarged state"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-time-homogeneous-markov-chain-with-transition-kernel]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Time-homogeneous transition convention, printed pp. 268-269"
---

## Statement

Assume Choice. The deterministic process
$$X_0=0,\qquad X_1=0,\qquad X_n=1\quad(n\ge2)$$
cannot be a time-homogeneous Markov chain on $\{0,1\}$. After adjoining time to
the state, the same evolution is a homogeneous deterministic Markov chain.

## Facts & Assumptions

**Given:** The deterministic process and its natural filtration.

[F1] A homogeneous $K$-chain must use the same conditional transition $K(X_n,A)$ at every time. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

## Counterexample

1.1 If the displayed process were a homogeneous $K$-chain, its transition from [F1] $X_0=0$ to $X_1=0$ would force $$K(0,\{1\})=\mathbb P(X_1=1\mid\mathcal F_0)=0.$$ But its next transition from the same state $X_1=0$ to $X_2=1$ would force $$K(0,\{1\})=\mathbb P(X_2=1\mid\mathcal F_1)=1,$$ a contradiction. The witness uses the same state twice, so changing only the row at state $1$ cannot repair it. [F1]

1.2 Put $\widetilde S=\mathbb N_0\times\{0,1\}$ with its power set and let [F1] $b_0=b_1=0$, $b_n=1$ for $n\ge2$. Define $$T(n,x)=(n+1,b_{n+1}),\qquad \widetilde K((n,x),A)=1_A(T(n,x)).$$ Every section is a Dirac probability and every evaluation is measurable. For $Y_n=(n,X_n)$ one has $Y_{n+1}=T(Y_n)$, so its conditional transition is the same kernel $\widetilde K$ at every time. Hence [F1] now holds on the enlarged state space. [F1]

2.1 The failed conclusion is therefore specifically the existence of one [step 1.1, step 1.2] homogeneous kernel on the unaugmented state space, not the Markov nature of the time-augmented evolution. The probabilities zero and one, times zero/one/two, and both state endpoints are explicit. Choice is used only to phrase the conditional-probability identities in [F1]. [step 1.1, step 1.2] ∎
