---
id: ex-policy-iteration-tie-retention
kind: example
title: "Changing a tied greedy action can cycle, while retention stops"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - alg-policy-iteration
  - def-policy-bellman-operator
  - def-bellman-optimality-operator
  - thm-bellman-contraction-and-unique-fixed-point
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.3, the arbitrary-tie cycling warning for policy iteration."
---

## Example

Let $S=\{s\}$, $A(s)=\{a,b\}$, $\gamma=1/2$, and let both actions give reward $0$ and return deterministically to $s$. Start exact policy iteration from the deterministic policy $\pi_0(s)=a$. The policy value is $0$, and both actions are greedy. The tie-retaining procedure keeps $a$ and stops after its first evaluation; a rule that always switches to the other maximizing action alternates forever between $a$ and $b$.

## Example references

[[def-finite-markov-decision-process|The one-state MDP and its two action laws]].

[[def-policy-bellman-operator|The exact policy evaluation map]].

[[def-bellman-optimality-operator|The greedy action-value formula]].

[[alg-policy-iteration|The exact policy-iteration tie-retention rule]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** The one-state MDP, $\gamma=1/2$, and initial deterministic policy $\pi_0(s)=a$ in the example.

[F1] [[def-finite-markov-decision-process]]: both one-step laws return to $s$ with reward $0$.

[F2] [[def-policy-bellman-operator]]: for either deterministic policy, $T^\pi v(s)=\tfrac12v(s)$.

[F3] [[alg-policy-iteration]]: policy evaluation is exact, and the current action is retained whenever it maximizes the one-step action value.

[F4] [[def-bellman-optimality-operator]]: greedy actions maximize $r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)v(s')$.

[F5] [[thm-bellman-contraction-and-unique-fixed-point]]: each policy Bellman map has a unique fixed point.

## Verification

1.1 Under either action the policy Bellman equation is $v(s)=\tfrac12v(s)$ by [F1] and [F2], so the unique evaluated value is $v(s)=0$, consistently with [F5]. [given, F1, F2, F5, algebra]

2.1 At this value, [F4] gives $Q(s,a)=0=Q(s,b)$; both actions maximize. The procedure [F3] retains the current action $a$, so the policy is unchanged and the stop condition is met. [step 1.1, F3, F4]

2.2 In the variant that always switches to a different maximizing action, both $a$ and $b$ remain maximizing after every evaluation because the model and value $0$ are unchanged. Thus each update sends $a$ to $b$ and $b$ to $a$, so the procedure never reaches a stable policy. [step 1.1, F4, algebra]

3.1 The displayed MDP therefore distinguishes the tie-retaining rule from the explicitly defined switching rule, without asserting that every arbitrary tie rule cycles. [step 2.1, step 2.2] ∎
## Remarks

The diagram uses a circle for the state and rectangles for the available action nodes. Arrows from the state to each action show the available choices, not a single policy; arrows back to the state show each deterministic transition, labeled with probability and reward. The example separately specifies the initial policy and the alternative switching rule, and the verification does not rely on the drawing.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (s) at (0,0) {$s$};
  \node[rectangle,draw] (a) at (-2,1.4) {$a$};
  \node[rectangle,draw] (b) at (2,1.4) {$b$};
  \draw[->] (s) -- node[above left] {choose $a$} (a);
  \draw[->] (a) to[bend left=22] node[left] {$p(s,0\mid s,a)=1$} (s);
  \draw[->] (s) -- node[above right] {choose $b$} (b);
  \draw[->] (b) to[bend right=22] node[right] {$p(s,0\mid s,b)=1$} (s);
\end{tikzpicture}
```
