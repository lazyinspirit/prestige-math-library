---
id: def-accessibility-communication-and-irreducibility
kind: definition
title: "Accessibility, communication, and irreducibility"
status: published
origin: pipeline
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---
## Definition

For the countable transition matrix $p$ of [[def-transition-matrix-and-n-step-transition-probabilities]], define accessibility by

$$x\to y\quad\Longleftrightarrow\quad p^{(n)}(x,y)>0\text{ for some }n\in\mathbb N_0.$$

States communicate, written $x\leftrightarrow y$, when $x\to y$ and $y\to x$. The chain is irreducible when every pair of states communicates. Because $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, every state is accessible from itself with a zero-step path.
