---
id: ex-offline-ope-doubly-robust-correctness-branches
kind: example
title: "Correct ratios and a correct value model give separate DR identities"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-doubly-robust-ope
  - def-axiom-of-choice
  - def-offline-reinforcement-learning-dataset
  - thm-doubly-robust-ope-is-unbiased-under-either-correct-component
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.3 equation (8) and §4.1 equation (10), contextual and sequential DR estimators."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§3.1, PDF pp. 11–12; the correct-propensity or correct-model qualification."
---

## Example

Assume AC and take a one-step MDP with states $s_0,z$, actions $a,b$ at $s_0$, action $c$ at $z$, horizon $H=1$, and discount $\gamma=\tfrac12$. Every action moves to $z$; action $a$ gives reward $0$, action $b$ gives reward $1$, and action $c$ gives reward $0$. The target policy chooses $b$ at $s_0$ and $c$ at $z$, so its value from $s_0$ is $1$.

In the first evaluation case, behavior chooses $a$ and $b$ each with probability $\tfrac12$ at $s_0$, the action ratios are exact, and the fitted Q values are $\widehat Q_0(s_0,a)=\widehat Q_0(s_0,b)=\widehat Q_0(z,c)=0$. The DR score is $2$ on a logged $b$ trajectory and $0$ on a logged $a$ trajectory, so its expectation is $1$ although the Q model is wrong at $b$.

In the second evaluation case, behavior chooses $a$ at $s_0$ with probability $1$, so the target action has no behavior support. The fitted model is exact: $\widehat Q_0(s_0,a)=0$, $\widehat Q_0(s_0,b)=1$, and $\widehat Q_0(z,c)=0$, with $\widehat V_1=0$ and $\widehat V_0(s_0)=1$. Use the finite multipliers $\widehat\rho_0(s,a)=\widehat\rho_0(s,b)=1$. Every behavior trajectory has zero residual, so its DR score is $1$, equal to the target value despite missing support and incorrect action ratios.

In the diagram, vertices are states; an edge labeled $a:r$ means action $a$ produces reward $r$ and moves deterministically to the arrow endpoint. The proof uses the transition/reward values stated in prose, not the drawing.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node[draw,circle] (s) at (0,0) {$s_0$};
\node[draw,circle] (z) at (3,0) {$z$};
\draw[->,bend left=18] (s) to node[above] {$a:0$} (z);
\draw[->,bend right=18] (s) to node[below] {$b:1$} (z);
\draw[->,loop right] (z) to node[right] {$c:0$} (z);
\end{tikzpicture}
```

## Example references

[[def-offline-reinforcement-learning-dataset|The finite-horizon return and behavior-data law.]]

[[alg-doubly-robust-ope|The DR score and finite-horizon terminal convention.]]

[[thm-doubly-robust-ope-is-unbiased-under-either-correct-component|The separate exact-ratio and exact-model unbiasedness branches.]]

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)

## Facts & Assumptions

**Given:** AC, the one-step MDP, both behavior policies, the target policy, the stated Q functions and multipliers, and $H=1$, $\gamma=\tfrac12$.

[F1] [[def-offline-reinforcement-learning-dataset]]: the target value is the expected finite-horizon return, and behavior trajectories use the behavior policy with the same transition/reward law.

[F2] [[alg-doubly-robust-ope]]: with $H=1$, $V_1=0$, the DR score is $\widehat V_0(s_0)+\widehat\rho_0(S_0,A_0)(R_1-\widehat Q_0(S_0,A_0))$.

[F3] [[thm-doubly-robust-ope-is-unbiased-under-either-correct-component]]: exact ratios with trajectory coverage or a correct finite-horizon value model with the zero terminal convention suffices for unbiasedness.

## Verification

1.1 In the first case, $\widehat V_0(s_0)=\tfrac12\widehat Q_0(s_0,a)+\tfrac12\widehat Q_0(s_0,b)=0$, $\widehat\rho_0(s_0,a)=0$, and $\widehat\rho_0(s_0,b)=2$. A logged $a$ has score $0+0(0-0)=0$; a logged $b$ has score $0+2(1-0)=2$. Since each occurs with probability $\tfrac12$, the mean DR score is $1$, the target value, although $\widehat Q_0(s_0,b)=0\ne1$. [given, F1, F2, algebra]

1.2 In the second case, the exact finite-horizon model has $Q_0^\pi(s_0,a)=0$, $Q_0^\pi(s_0,b)=1$, and $Q_0^\pi(z,c)=0$; its target-policy value is $\widehat V_0(s_0)=1$ and its terminal value is $0$. The behavior policy always logs $a$, so each observed residual is $0+\tfrac12\cdot0-0=0$, regardless of the supplied multiplier $1$. Every DR score is therefore $1$, and its expectation is the target value despite the absent target action in behavior data. [given, F1, F2, F3, algebra]

2.1 The first calculation verifies the exact-ratio branch with a misspecified Q function; the second verifies the exact-model branch with missing support and incorrect multipliers. Both use the terminal convention $\widehat V_1=0$ from [F2]. [step 1.1, step 1.2, F2, F3, algebra] ∎
