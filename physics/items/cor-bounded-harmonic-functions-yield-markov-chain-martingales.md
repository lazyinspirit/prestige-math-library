---
id: cor-bounded-harmonic-functions-yield-markov-chain-martingales
kind: corollary
title: "Bounded harmonic functions yield Markov-chain martingales"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-countable-state-martingale-problem-characterization, def-discrete-generator-of-a-countable-state-transition-matrix]
proof_strategy: specialization
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
    - title: "Roch, Markov Chains: Martingale Methods, Note 24, Section 1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "Definition 24.1, Theorem 24.2, and discussion, printed pp. 1-2"
---

## Statement

Assume Choice. If $X$ is a countable-state $p$-chain and bounded
$f:S\to\mathbb R$ is harmonic, meaning $Pf=f$, then $(f(X_n))_{n\ge0}$ is a
bounded martingale.

## Facts & Assumptions

**Given:** Choice, a $p$-chain $X$, and bounded $f$ with $Pf=f$.

[F1] The generator is $L=P-I$. ([[def-discrete-generator-of-a-countable-state-transition-matrix]])

[F2] For a $p$-chain and bounded $f$, $f(X_n)-\sum_{m<n}Lf(X_m)$ is a martingale. ([[thm-countable-state-martingale-problem-characterization]])

## Proof

1.1 Harmonicity and [F1] give $Lf=Pf-f=0$ pointwise. [F1]

2.1 Hence the compensator in [F2] is the zero sum at every $n$, and [F2] says that $f(X_n)$ is a martingale. [F2, step 1.1] Moreover $|f(X_n)|\le\lVert f\rVert_\infty$, so it is bounded and integrable. The cases $f=0$, $f=1$, $n=0$, and a one-point chain are included. Choice is used only through [F2]'s conditional expectations; there is no converse claim. [F2, step 1.1] ∎
