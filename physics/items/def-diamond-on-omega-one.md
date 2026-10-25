---
id: def-diamond-on-omega-one
kind: definition
title: "Diamond on ω1"
status: published
origin: pipeline
deps: [def-club-subsets-of-ordinals, def-club-filter-and-nonstationary-ideal, def-first-uncountable-ordinal]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Karagila, Axiomatic Set Theory, Definition 9.7, printed p44"
      url: https://karagila.org/files/set-theory-2017.pdf
justified_by: []
forward_refs: []
---

## Definition

A **diamond sequence on $\omega_1$** is a sequence $(A_\alpha)_{\alpha<\omega_1}$ such that $A_\alpha\subseteq\alpha$ for every $\alpha$, and for every $A\subseteq\omega_1$ the set

$$S_A=\{\alpha<\omega_1:A\cap\alpha=A_\alpha\}$$

is stationary. Here $\omega_1$ is the first uncountable ordinal of [[def-first-uncountable-ordinal]], and stationary means meeting every club, as in [[def-club-filter-and-nonstationary-ideal]] and [[def-club-subsets-of-ordinals]]. Thus the quantifiers are: for each $A\subseteq\omega_1$ and each club $C\subseteq\omega_1$, there is $\alpha\in C$ with $A\cap\alpha=A_\alpha$.

The principle $\diamondsuit$ asserts the existence of such a sequence; it is an additional hypothesis whenever used here. At zero the subset requirement forces $A_0=\varnothing$; at one the two possible guesses are $\varnothing$ and $\{0\}$. Stationarity is required also for the targets $A=\varnothing$ and $A=\omega_1$. Merely requiring an unbounded set of guesses is a different condition and is not the definition. No restriction to countable targets is intended.
