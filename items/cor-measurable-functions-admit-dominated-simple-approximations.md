---
id: cor-measurable-functions-admit-dominated-simple-approximations
kind: corollary
title: "Every measurable function admits simple approximations dominated by its absolute value"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-positive-and-negative-parts-of-a-function, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Theorem 2.89"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $(X,\mathcal{A})$ be a measurable space and let
$f : X \to \overline{\mathbb{R}}$ be measurable. Then there is a sequence of
simple functions $s_k : X \to \mathbb{R}$ such that

$$|s_k| \le |f| \qquad \text{for every } k,$$

and $s_k(x) \to f(x)$ for every $x \in X$.

## Facts & Assumptions

**Given:** A measurable function $f : X \to \overline{\mathbb{R}}$.

[L1] The positive and negative parts satisfy
$f = f^+ - f^-$, $|f| = f^+ + f^-$, and at each point at least one of
$f^+,f^-$ is zero. ([[def-positive-and-negative-parts-of-a-function]])

[L2] The arithmetic-and-lattice theorem makes $f^+$ and $f^-$ measurable.
([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L3] Every nonnegative measurable function admits an increasing sequence of
simple approximations.
([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

## Proof

**Proof technique:** direct.

1.1 By [L2], the functions $f^+$ and $f^-$ are measurable and nonnegative. Applying [L1, L2, L3]
[L3] to them gives simple functions $u_k \uparrow f^+$ and $v_k \uparrow f^-$.
[L1, L2, L3]

2.1 Put $s_k := u_k - v_k$. Because $u_k$ and $v_k$ are simple, $s_k$ is a [step 1.1, L1]
simple real-valued function. At each point, [L1] makes at least one of $u_k$ and
$v_k$ equal to $0$, so

$$|s_k| = u_k + v_k \le f^+ + f^- = |f|.$$

Also $s_k \to f^+ - f^- = f$ pointwise because $u_k \to f^+$ and
$v_k \to f^-$. [step 1.1, L1] ∎
