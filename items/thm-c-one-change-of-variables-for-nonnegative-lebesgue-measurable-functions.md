---
id: thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
kind: theorem
title: "A C^1 diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands, lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets, thm-monotone-convergence-for-the-integral, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-monotone-class, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. For every nonnegative Lebesgue measurable
$f : V \to [0,\infty]$,
$$
\int_V f(y)\,d\lambda_n(y) = \int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x).
$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, open sets
$U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a
nonnegative Lebesgue measurable function $f : V \to [0,\infty]$.

[L1] The formula already holds for continuous compactly supported integrands. ([[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]])

[L2] Monotone convergence passes increasing limits through the integral. ([[thm-monotone-convergence-for-the-integral]])

[L3] Every nonnegative measurable function admits increasing simple approximations. ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

[L4] Assuming countable choice, Lebesgue measurable sets are Borel up to null
sets, and $T$ preserves both null sets and Lebesgue measurability.
([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]],
[[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]],
[[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]])

[A1] The class of Borel sets $E \subseteq V$ for which $$ \lambda_n(E)=\int_U \mathbf 1_E(T(x))\,|\det DT(x)|\,d\lambda_n(x) $$ is a monotone class containing the open rectangles of $V$.

## Proof

**Proof technique:** direct.

1.1 By [L1], the change-of-variables formula holds for continuous compactly supported functions. Approximating indicators of open rectangles from below by such functions and using [L2] shows that the set formula of [A1] holds for open rectangles. Because the class in [A1] is a monotone class, the monotone class theorem extends the set formula to all Borel sets in $V$. [L1, L2]

2.1 Let $s=\sum_{j=1}^m c_j \mathbf 1_{E_j}$ be a nonnegative simple Lebesgue measurable function. By [L4], replace each $E_j$ by a Borel set differing from it only by a null set. The set formula from step 1.1 and null-set invariance in [L4] then give the change-of-variables formula for $s$. [L2, L4]

3.1 Choose simple functions $s_k \uparrow f$ by [L3]. Step 2.1 applies to each $s_k$, and [L2] lets $k \to \infty$ on both sides. This yields the formula for $f$. [L2, L3, step 2.1] ∎
