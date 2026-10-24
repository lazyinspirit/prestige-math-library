---
id: ex-finite-mdp-common-reward-shift
kind: example
title: "A common reward shift moves every one-state Bellman value equally"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.7, policy-value recursion from the expected reward and discounted continuation."
---

## Example

Let $S=\{s\}$, $A(s)=\{a,b\}$, and $\gamma=1/2$. Both actions return deterministically to $s$, with reward $1$ under $a$ and reward $3$ under $b$. View the deterministic policies choosing $a$ and $b$ as stationary policies assigning probability one to those actions; their unique policy Bellman fixed points are $2$ and $6$, respectively. More generally, for a stationary policy with $\theta:=\pi(b\mid s)\in[0,1]$, its fixed point is $2+4\theta$. After adding $2$ to both rewards, the deterministic-policy fixed points are $6$ and $10$, and the fixed point for the same stochastic policy is $6+4\theta$. Thus every policy value shifts by $2/(1-\gamma)=4$, the difference between the two deterministic-policy values remains $4$, and $b$ maximizes the Bellman optimality backup at the optimal fixed point in both models.

## Example references

[[def-finite-markov-decision-process|The one-state joint reward-transition model]].

[[def-policy-bellman-operator|The policy evaluation formula]].

[[def-bellman-optimality-operator|The greedy action-value formula]].

[[thm-bellman-contraction-and-unique-fixed-point|Uniqueness of the displayed Bellman fixed points]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** The one-state MDP and $\gamma=1/2$ in the example.

[F1] [[def-finite-markov-decision-process]]: a deterministic self-loop with reward $\rho$ has $r(s,a)=\rho$ and $P(s\mid s,a)=1$.

[F2] [[def-policy-bellman-operator]] and [[def-bellman-optimality-operator]]: the policy and optimality maps use $r(s,a)+\gamma P(s\mid s,a)V(s)$.

[F3] [[thm-bellman-contraction-and-unique-fixed-point]]: each policy operator and the Bellman optimality operator have unique fixed points.

## Verification

1.1 Under the point-mass stationary policy choosing $a$, [F1] and [F2] give $T^a(v)=1+\tfrac12v$, whose fixed point solves $v=1+\tfrac12v$, hence is $v=2$. Under the point-mass stationary policy choosing $b$, the equation is $v=3+\tfrac12v$, hence its unique fixed point is $v=6$. [given, F1, F2, F3, algebra]

1.2 For a stationary policy with $\pi(b\mid s)=\theta$, the expected one-step reward is $(1-\theta)\cdot1+\theta\cdot3=1+2\theta$, so $T^\pi(v)=1+2\theta+\tfrac12v$ and its unique fixed point is $v=2+4\theta$. [given, F1, F2, F3, algebra]

2.1 Adding $2$ to each reward changes the deterministic maps to $T^{a,+}(v)=3+\tfrac12v$ and $T^{b,+}(v)=5+\tfrac12v$, whose fixed points are $6$ and $10$. For the stochastic policy, the expected one-step reward becomes $3+2\theta$, so $T^{\pi,+}(v)=3+2\theta+\tfrac12v$ and the unique fixed point is $6+4\theta$. All these policy values increase by $4$, and the difference between the deterministic values remains $4$. [step 1.2, F1, F2, F3, algebra]

3.1 At $v=6$, the original action values are $1+\tfrac12\cdot6=4$ and $3+\tfrac12\cdot6=6$, so $T^*6=6$ and $b$ is greedy; [F3] makes $6$ the unique optimal fixed point. After the shift, at $v=10$ the action values are $3+\tfrac12\cdot10=8$ and $5+\tfrac12\cdot10=10$, so the shifted optimality operator fixes $10$ and $b$ is greedy there; [F3] again gives uniqueness. [step 1.1, step 2.1, F2, F3, algebra] ∎
## Remarks

The diagram shows the original MDP only: circles are states, rectangles are actions, state-to-action arrows show the two action choices, and return arrows are labeled by their joint transition masses. The shifted MDP changes the two reward labels from $1,3$ to $3,5$ while leaving both transition probabilities equal to one. The verification does not rely on the diagram.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.5,transform shape,font=\large]
  \node[circle,draw] (s) at (0,0) {$s$};
  \node[rectangle,draw] (a) at (-2,1.4) {$a$};
  \node[rectangle,draw] (b) at (2,1.4) {$b$};
  \draw[->] (s) -- node[pos=0.35,below left] {choose $a$} (a);
  \draw[->] (a) to[bend left=22] node[pos=0.15,above left,yshift=12pt] {$p(s,1\mid s,a)=1$} (s);
  \draw[->] (s) -- node[pos=0.35,below right] {choose $b$} (b);
  \draw[->] (b) to[bend right=22] node[pos=0.15,above right,yshift=12pt] {$p(s,3\mid s,b)=1$} (s);
\end{tikzpicture}
```
