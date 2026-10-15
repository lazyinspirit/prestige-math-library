---
id: thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
kind: theorem
title: "A C^1 diffeomorphism satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands, lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets, thm-monotone-convergence-for-the-integral, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-measure-uniqueness-on-a-sigma-finite-pi-system, cor-additivity-of-the-nonnegative-lebesgue-integral, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, def-countable-choice]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions). No independent judge or whole-closure certification.
    delegated_by: owner
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
$$ \int_V f(y)\,d\lambda_n(y) = \int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x). $$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a nonnegative Lebesgue measurable function $f : V \to [0,\infty]$.

[L1] The formula already holds for continuous compactly supported integrands. ([[lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands]])

[L2] Monotone convergence passes increasing limits through the integral. ([[thm-monotone-convergence-for-the-integral]])

[L3] Every nonnegative measurable function admits increasing simple approximations. ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

[L4] Assuming countable choice, Lebesgue measurable sets are Borel up to null sets, and $T$ preserves both null sets and Lebesgue measurability. ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]], [[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]], [[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]])

[L5] Two measures on $V$ agreeing on a generating pi-system with a common increasing finite-mass exhaustion from that system agree on all Borel sets ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]).

[L6] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 On Borel subsets $E$ of $V$ define $$\nu(E):=\int_U\mathbf1_E(T(x))|\det DT(x)|\,d\lambda_n(x).$$ This is a measure: the nonnegative Jacobian weight is measurable, inverse images under $T$ take disjoint countable unions to disjoint countable unions, [L6] gives finite additivity, and [L2] passes the increasing finite sums through the integral. [L2, L6, given]

2.1 Let $W=V\cap R$ for a bounded open rectangle $R$ with rational endpoints. Write $d(y,W^c)$ for Euclidean distance to the complement and $\|y\|_\infty$ for the maximum coordinate modulus. The functions $$\varphi_j(y)=\min\{1,\max(0,jd(y,W^c)-1)\}\min\{1,\max(0,j+1-\|y\|_\infty)\}$$ are continuous, nonnegative and increase pointwise to $\mathbf1_W$. Each support is contained in the compact set $\{d(y,W^c)\ge1/j,\ \|y\|_\infty\le j+1\}\subset W$, so $\varphi_j|_V$ has compact support in $V$. Applying [L1] to each $\varphi_j$ and [L2] to the two monotone limits gives $\nu(W)=\lambda_n(W)$. The empty $W$ is immediate. [L1, L2, step 1.1]

3.1 The sets $V\cap R$ above form a pi-system generating the Borel sigma-algebra of $V$. The increasing members $P_j=V\cap(-j,j)^n$ cover $V$ and satisfy $\lambda_n(P_j)<\infty$; step 2.1 gives $\nu(P_j)=\lambda_n(P_j)$. Hence [L5] makes $\nu(E)=\lambda_n(E)$ for every Borel $E\subseteq V$. This proves the set formula without assuming that an infinite-measure equality class is closed under decreasing intersections. [L5, step 1.1, step 2.1]

4.1 Let $s=\sum_{j=1}^m c_j \mathbf 1_{E_j}$ be a nonnegative simple Lebesgue measurable function. By [L4], replace each $E_j$ by a Borel set differing from it only by a null set. The set formula from step 3.1 and null-set invariance in [L4] then give the change-of-variables formula for $s$. [L2, L4, step 3.1]

5.1 Choose simple functions $s_k \uparrow f$ by [L3]. Step 4.1 applies to each $s_k$, and [L2] lets $k \to \infty$ on both sides. This yields the formula for $f$. [L2, L3, step 4.1] ∎
