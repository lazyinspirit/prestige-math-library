---
id: lem-finite-budget-stopped-normalizer
kind: lemma
title: Finite-budget stopped-kernel measurability and event normalizer
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-budget-stopped-event-kernel
  - def-feynman-kac-path-targets-and-normalizers
  - thm-measurability-of-integration-against-a-kernel
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited only through the finite Markov path-law and Feynman–Kac suppliers; the measurable finite-status recursion uses no additional choice."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, `3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, `6"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Statement

Under the hypotheses of [[def-finite-budget-stopped-event-kernel]], every $\kappa_m$ is a measurable probability kernel from $E$ to $C$. For an initial probability law $\mu$, let
$
p_m=\int_E\kappa_m(x,\{\mathtt{hit}\})\,\mu(dx).
$
Then $p_m=P_\mu(\tau_T<\tau_R,\ \tau_T\le m)$. In the one-step Feynman–Kac model with initial law $\mu$, transition $\kappa_m$, initial potential $1$, and terminal potential $\mathbf1_{\{\mathtt{hit}\}}$, the normalizer is exactly $p_m$. The limit $\lim_{m\to\infty}p_m=P_\mu(\tau_T<\tau_R)$ is the exact-hitting normalizer; an exact simulator with finite expected work requires a separate termination-cost bound.

## Facts & Assumptions

**Given:** A measurable state space, probability kernel $M$, disjoint measurable target and return sets $T,R$, and the finite-budget kernels from [[def-finite-budget-stopped-event-kernel]].

[A1] [[def-axiom-of-choice]]: AC is inherited through the path-law construction used by the finite-horizon supplier.

[F1] [[def-finite-budget-stopped-event-kernel]]: $\kappa_0$ assigns hit, return, or cemetery according to the current state; $\kappa_{m+1}$ fixes terminal states and otherwise integrates $\kappa_m$ after one $M$-transition.

[F2] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a nonnegative measurable section against a probability kernel gives a measurable function of the source state.

[F3] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: Finite-prefix path laws have the prescribed iterated-kernel probabilities.

[F4] [[def-feynman-kac-path-targets-and-normalizers]]: A finite-horizon Feynman–Kac normalizer is the integral of the product of its potentials against the ordered path law.

## Proof

1.1 For $m=0$, the three status probabilities are the indicators of the disjoint partition $T,R,S$; they are measurable and sum to one. Thus $\kappa_0$ is a probability kernel. [F1, given]

1.2 At $m=0$ the hit status occurs exactly when $X_0\in T$. For $m+1$, points in $T$ or $R$ stop immediately, while from $S$ the first $M$-transition is followed by the budget-$m$ rule. The finite-prefix law [F3] and induction therefore identify $\kappa_m(x,\{\mathtt{hit}\})$ with $P_x(\tau_T<\tau_R,\tau_T\le m)$; integrating against $\mu$ gives $p_m$. [F1, F3, given, induction]

2.1 Suppose $\kappa_m$ is a probability kernel. For each $c\in C$, the function $y\mapsto\kappa_m(y,\{c\})$ is measurable. By [F2], its $M(x,\cdot)$-integral is measurable in $x$. On $T$ and $R$ the next status is the corresponding point mass; on $S$ the three integrals sum to $\int 1\,M(x,dy)=1$. Hence $\kappa_{m+1}$ is a probability kernel, and induction proves the first claim. [F1, F2, step 1.1, given]

3.1 In the one-step Feynman–Kac model, the product of potentials is $\mathbf1_{\{\mathtt{hit}\}}$; [F4] therefore gives normalizer $\int\mathbf1_{\{\mathtt{hit}\}}\,d(\mu\kappa_m)=p_m$. The success events by budgets $m$ increase to $\{\tau_T<\tau_R\}$; countable additivity gives the limit identity. [A1, F3, F4, step 1.2, given] ∎
