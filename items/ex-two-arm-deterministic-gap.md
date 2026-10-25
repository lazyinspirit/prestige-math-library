---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-two-arm-deterministic-gap.json
  precheck: pass
id: ex-two-arm-deterministic-gap
kind: example
title: "A two-arm deterministic gap and explore-then-commit"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, cor-exponential-reciprocal-and-positivity, alg-explore-then-commit, thm-explore-then-commit-expected-regret]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $m\ge1$ be an integer, let $n\ge2m+1$, and fix $0<\Delta<1$. In a two-arm $n$-round bandit, let every reward-stack entry of arm 1 equal $1$ and every reward-stack entry of arm 2 equal $1-\Delta$. Under explore-then-commit with exploration count $m$, the algorithm commits to arm 1 and has expected reward regret exactly $m\Delta$. The expected-regret theorem gives the upper bound $m\Delta+(n-2m)\Delta e^{-m\Delta^2/4}$ for this instance.

## Example references

[[def-stochastic-bandit-and-pseudo-regret]]: arm means, gaps, and expected reward regret.

[[def-centered-subgaussian-reward]]: the mean-centred MGF condition checked for deterministic rewards.

[[cor-exponential-reciprocal-and-positivity]]: the exponential factor in the regret bound is positive.

[[alg-explore-then-commit]]: the fixed round-robin exploration and empirical-mean commitment rule.

[[thm-explore-then-commit-expected-regret]]: the expected-regret bound compared with the exact regret.

## Facts & Assumptions

**Given:** The deterministic reward table and explore-then-commit parameters in the example.

[F1] Arm means, gaps, and expected reward regret are defined by the stochastic-bandit model ([[def-stochastic-bandit-and-pseudo-regret]]).

[F2] Each reward is 1-sub-Gaussian exactly when its mean-centred MGF satisfies the stated bound ([[def-centered-subgaussian-reward]]).

[F3] Explore-then-commit samples each arm $m$ times, commits to a least-index empirical-mean maximizer, then repeats it ([[alg-explore-then-commit]]).

[F4] Under the finite-mean 1-sub-Gaussian assumptions, the theorem bounds expected reward regret by the stated ETC expression ([[thm-explore-then-commit-expected-regret]]).

[F5] The real exponential is positive at every real input ([[cor-exponential-reciprocal-and-positivity]]).

## Verification

1.1 The arm laws are point masses at $1$ and $1-\Delta$, so $\mu_1=1$, $\mu_2=1-\Delta$, and $(\Delta_1,\Delta_2)=(0,\Delta)$. Each centered reward is identically $0$, so its MGF is $1\le e^{\lambda^2/2}$ for every real $\lambda$ and [F4] applies. [given, F1, F2, algebra]

2.1 The exploration means equal the deterministic rewards, so [F3] commits to arm 1. During exploration it pulls arm 2 exactly $m$ times, each with gap $\Delta$; all other pulls have gap $0$. Therefore both the realized reward regret and its expectation equal $m\Delta$. [given, F1, F3, step 1.1, algebra]

3.1 Substituting $\Delta_1=0$ and $\Delta_2=\Delta$ into [F4] gives $m\Delta+(n-2m)\Delta e^{-m\Delta^2/4}$, which is at least $m\Delta$ because $n-2m>0$, $\Delta>0$, and [F5] makes the exponential factor positive. [given, F4, F5, step 2.1, algebra] ∎


## Remarks

The schedule below separates the two sources of regret. In each exploration pair, arm 1 contributes zero regret and arm 2 contributes $\Delta$; after commitment, every pull has zero regret. The diagram illustrates the accounting in step 2.1 and is not used in the verification.

```tikz
\begin{tikzpicture}
\node[draw, rounded corners, minimum width=5.3cm, minimum height=2.7cm, align=center] (explore) at (0,0) {Exploration: $2m$ rounds\\[5pt] $A_{2r-1}=1,\quad A_{2r}=2$\\ $1\le r\le m$\\[5pt] Regret: $m\Delta$};
\node[draw, rounded corners, minimum width=4.7cm, minimum height=2.7cm, align=center] (commit) at (6.8,0) {Commit to arm 1\\[5pt] $A_t=1$\\ $2m<t\le n$\\[5pt] Regret: $0$};
\draw[->, thick] (explore.east) -- node[above] {$J=1$} (commit.west);
\node at (3.25,-2) {Total regret: $m\Delta+0=m\Delta$};
\end{tikzpicture}
```
