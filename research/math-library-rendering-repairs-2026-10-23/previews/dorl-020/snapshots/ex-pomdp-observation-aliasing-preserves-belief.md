---
id: ex-pomdp-observation-aliasing-preserves-belief
kind: example
title: "An observation with identical state likelihoods leaves the belief unchanged"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - lem-finite-pomdp-belief-update-is-probability-kernel
  - def-sum-over-a-finite-index-set
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

Let $S=\{s_0,s_1\}$, $A=\{a\}$, $\Omega=\{x\}$, reward alphabet $\{0\}$, horizon $H=1$, and discount $\gamma=1$. From each state, the joint next-state/reward law assigns probability one to the same state with reward zero. Let $b_0(s_0)=2/3$, $b_0(s_1)=1/3$, and let $O(x\mid s_0)=O(x\mid s_1)=1$. Then $q(x\mid b_0,a)=1$ and the posterior after $x$ is again $(2/3,1/3)$; the observation does not distinguish the two hidden states.

## Facts & Assumptions

**Given:** The finite POMDP model in the example and the observation $x$.

[F1] The finite POMDP transition is the marginal of its joint reward-transition law, and each observation law is normalized. [[def-finite-pomdp]]

[F2] The predicted state distribution, observation normalizer, and positive-probability Bayes update are the finite sums and quotient in the belief-filter definition. [[def-belief-state-and-bayes-filter]]

[F3] A positive-normalizer update is a probability vector and the induced belief transition is a probability kernel. [[lem-finite-pomdp-belief-update-is-probability-kernel]]

[F4] Finite sums over a finite index set are well defined and enumeration-independent. [[def-sum-over-a-finite-index-set]]

## Verification

1.1 The hidden-state transition is the identity, so the predicted distribution is $\bar b(s_0)=2/3$ and $\bar b(s_1)=1/3$. [given, F1, F2]

2.1 The normalizer is $q(x\mid b_0,a)=1\cdot(2/3)+1\cdot(1/3)=1>0$. [step 1.1, F2, F4, algebra]

3.1 The posterior coordinates are $\tau(b_0,a,x)(s_0)=1\cdot(2/3)/1=2/3$ and $\tau(b_0,a,x)(s_1)=1\cdot(1/3)/1=1/3$. They sum to one as required by [F3], so the observation leaves the belief unchanged. [step 1.1, step 2.1, F2, F3, algebra] ∎


## Remarks

In the diagram, vector coordinates are ordered as $(s_0,s_1)$. The arrows show operations on beliefs, rather than transitions between hidden states: prediction uses the identity transition, and conditioning on $x$ multiplies both coordinates by the same likelihood $1$ before dividing by $q(x\mid b_0,a)=1$.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[draw,rounded corners,align=center,minimum height=1.1cm] (prior) at (0,0) {prior $b_0$\\$(2/3,1/3)$};
\node[draw,rounded corners,align=center,minimum height=1.1cm] (pred) at (4,0) {predicted $\bar b$\\$(2/3,1/3)$};
\node[draw,rounded corners,align=center,minimum height=1.1cm] (post) at (8.4,0) {posterior $\tau(b_0,a,x)$\\$(2/3,1/3)$};
\draw[->] (prior) -- node[above] {$T=I$} (pred);
\draw[->] (pred) -- node[above] {$O(x\mid s_i)=1$} node[below] {$q(x\mid b_0,a)=1$} (post);
\end{tikzpicture}
```

Thus the observation has no effect on the relative weights of the two states. The verification above establishes the calculation independently of the illustration.
