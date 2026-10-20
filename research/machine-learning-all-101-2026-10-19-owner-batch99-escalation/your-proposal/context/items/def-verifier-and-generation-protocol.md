---
id: def-verifier-and-generation-protocol
kind: definition
title: "Finite truncated response spaces, correctness predicates, and verifiers"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differentiable-stochastic-policy
  - def-probability-measure
  - def-finite-sum
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§§2.2.2–2.2.3, rule-based accuracy and format rewards and the response template."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.1, policy parameterization and differentiable stochastic policies; PDF pp. 283–284, printed pp. 266–267."

---

## Definition

Fix a finite nonempty set $Q$ of prompts. For each $q\in Q$, fix a finite nonempty ordinary-token alphabet $V$, a positive integer generation budget $L_q$, an end-of-sequence token $e\notin V$, and a truncation marker $\tau\notin V\cup\{e\}$. Generate at most $L_q$ tokens from $V\cup\{e\}$. A permitted response is the sampled prefix through its first $e$ if $e$ occurs within the budget; otherwise it is the full $L_q$-token prefix followed by the unsampled marker $\tau$. Fix a nonempty finite ordered list of distinct permitted responses $(y_{q,1},\ldots,y_{q,m_q})$ and let $Y_q$ be its underlying set. The prompt set, tokenizer alphabet, budget, terminal markers, and response list are part of the evaluation protocol; changing them changes the response distribution being evaluated.

For each $q$, fix a strict total order $\prec_q$ on $Y_q$, meaning an irreflexive, transitive relation for which either $y\prec_q z$ or $z\prec_q y$ holds for every pair of distinct responses $y,z$. Let $U\subseteq\mathbb R^d$ be open. For each $q\in Q$, a parameterized sampling policy is a probability mass function $\pi_\theta(\cdot\mid q)$ on $Y_q$, for $\theta\in U$, with a fixed nonempty support $B_q\subseteq Y_q$: $\pi_\theta(y\mid q)>0$ for $y\in B_q$, $\pi_\theta(y\mid q)=0$ for $y\notin B_q$, and $\sum_{j=1}^{m_q}\pi_\theta(y_{q,j}\mid q)=1$. Each mass is totally differentiable in $\theta$. Write the support in the inherited order as $(b_{q,1},\ldots,b_{q,n_q})$. At a fixed prompt this is the finite-action policy of a one-decision finite Markov decision process, with response strings as actions. Its score vector on the support is

$$S_\theta(q,y):=\nabla_\theta\log\pi_\theta(y\mid q),\qquad y\in B_q.$$

For finite sums over supported responses, write
$$\mathbb E_\theta[f(Y)\mid q]:=\sum_{k=1}^{n_q}\pi_\theta(b_{q,k}\mid q)f(b_{q,k}).$$

For each prompt, let $C_q:Y_q\to\{0,1\}$ be a supplied correctness predicate and $A_q:Y_q\to\{0,1\}$ a supplied verifier. The finite response set has its power-set sigma-algebra, so both maps are measurable. $C_q(y)=1$ means that response $y$ is correct for the stated task criterion; $A_q(y)=1$ means that the verifier accepts it. A false acceptance is an output with $A_q(y)=1$ and $C_q(y)=0$. The verifier is not assumed to equal the correctness predicate.

Also fix a finite real reward $r_q(y)$ and a finite real selection score $u_q(y)$ on $Y_q$, when a training or best-of-$N$ procedure uses them. The total order $\prec_q$ resolves equal selection scores by choosing the $\prec_q$-least maximizer. Independent draws from $\pi_\theta(\cdot\mid q)$ mean that the joint mass of any finite tuple $(y_1,\ldots,y_N)$ is $\prod_{i=1}^N\pi_\theta(y_i\mid q)$.

## Definition references

[[def-differentiable-stochastic-policy|A differentiable policy has normalized action probabilities, a fixed support, and the score vector given by the gradient of the log probability.]]

[[def-probability-measure|A probability measure is a measure of total mass one on a measurable space.]]

[[def-finite-sum|Finite sums are defined recursively and are independent of the list extension used for the finitely many terms.]]
