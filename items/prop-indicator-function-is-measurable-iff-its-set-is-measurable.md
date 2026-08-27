---
id: prop-indicator-function-is-measurable-iff-its-set-is-measurable
kind: proposition
title: "An indicator function is measurable exactly when its set is measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measurable-function-between-measurable-spaces]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $(X,\mathcal{A})$ be a measurable space and let $E \subseteq X$. The
indicator function

$$\mathbf{1}_E(x) := \begin{cases} 1, & x \in E,\\ 0, & x \notin E \end{cases}$$

is measurable as a map $X \to \mathbb{R}$ if and only if $E \in \mathcal{A}$.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal{A})$, a subset $E \subseteq X$, and
the indicator function $\mathbf{1}_E$.

[L1] A function is measurable exactly when the preimage of every measurable set
in the codomain is measurable in the domain.
([[def-measurable-function-between-measurable-spaces]])

## Proof

**Proof technique:** direct.

1.1 If $E \in \mathcal{A}$, then the preimage of any Borel set $B \subseteq [given, L1]
\mathbb{R}$ under $\mathbf{1}_E$ is one of $\varnothing$, $X$, $E$, or
$X \setminus E$, because $\mathbf{1}_E$ takes only the values $0$ and $1$.
Each of those sets lies in $\mathcal{A}$, so $\mathbf{1}_E$ is measurable by
[L1]. [given, L1]

1.2 If $\mathbf{1}_E$ is measurable, then [given, L1]

$$E = \mathbf{1}_E^{-1}((1/2,\infty)),$$

and $(1/2,\infty)$ is a Borel subset of $\mathbb{R}$. Hence [L1] gives
$E \in \mathcal{A}$. [given, L1]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
