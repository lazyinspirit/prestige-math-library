---
id: def-finite-markov-decision-process
kind: definition
title: "Finite Markov decision process with joint reward-transition law"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-countable
  - def-cartesian-product
  - def-sum-over-a-finite-index-set
  - def-max-min
  - lem-finite-set-has-max
  - lem-of-abs-value
  - lem-triangle-inequality-finite
  - lem-finite-sum-laws
  - thm-sum-rule
  - thm-the-characterising-property-of-ordered-pairs
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.6, finite MDP dynamics and the joint reward-transition law; §3.7, expected rewards and value functions."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2 and §2.1, finite state/action model, transition probabilities, rewards, and Markov semantics; PDF pp. 3–5."
---

## Definition

Let $S$ be a finite set, possibly empty, let $\mathcal R$ be a finite subset of $\mathbb R$, and for each $s\in S$ let $A(s)$ be a finite nonempty set. Here **finite** means bijective with a natural number, and the **discrete sigma-algebra** on a set is its power set. Write $D=\{(s,a):s\in S,\ a\in A(s)\}$. A **finite Markov decision process (MDP)** consists of these sets and numbers $p(s',\rho\mid s,a)\in[0,1]$, indexed by $(s,a)\in D$, $s'\in S$, and $\rho\in\mathcal R$, with

$$ \sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)=1 \qquad ((s,a)\in D). $$

Equip each set used here, including $D$, with its power-set (discrete) sigma-algebra. Thus $p$ is the point-mass form of a probability kernel from $D$ to $S\times\mathcal R$: each input assigns a probability measure on $S\times\mathcal R$, and every event section is measurable. The joint law allows the next state and reward to be dependent. Define the expected reward and state-transition probabilities by

$$ r(s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}\rho\,p(s',\rho\mid s,a), \qquad P(s'\mid s,a)=\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a). $$

If $\mathcal R\ne\emptyset$, put $M=\max_{\rho\in\mathcal R}|\rho|$; if $\mathcal R=\emptyset$, put $M=0$. A stationary Markov policy is a family of probabilities $\pi(a\mid s)\ge0$ with $\sum_{a\in A(s)}\pi(a\mid s)=1$ for every $s\in S$. A deterministic policy is a function $\pi$ with $\pi(s)\in A(s)$ for every $s$. When $S=\emptyset$, these families and policies are the unique empty functions and all statewise formulas are vacuous.

## Definition references

[[def-measure-kernel-and-probability-kernel|A probability kernel assigns a probability measure at every input and has measurable event sections]].

[[def-countable|A set is finite when it is bijective with some natural number]].

[[def-cartesian-product|A Cartesian product pairs each element of A with an element of B]].

[[def-sum-over-a-finite-index-set|A sum over a finite set is defined by any enumeration, with permutation invariance ensuring a unique value]].

[[def-max-min|A maximum is an element of the set that bounds every element above]].

[[lem-finite-set-has-max|Every nonempty finite set of real numbers has an attained maximum]].

[[lem-of-abs-value|Absolute value is multiplicative and satisfies the triangle inequality]].

[[lem-triangle-inequality-finite|The absolute value of a finite sum is at most the sum of the absolute values]].

[[lem-finite-sum-laws|Finite sums preserve termwise inequalities and commute with scaling]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

## Facts & Assumptions

**Given:** The finite state set $S$ and a finite nonempty action set $A(s)$ for each $s\in S$.

[F1] [[def-countable]]: a set is finite when it is bijective with some natural number; a bijection transports finiteness.

[F2] [[thm-sum-rule]]: a finite indexed family of pairwise-disjoint finite sets has finite union.

[F3] [[thm-the-characterising-property-of-ordered-pairs]]: $(a,b)=(c,d)$ exactly when $a=c$ and $b=d$, so the second coordinate is unique.

## Verification

1.1 For each $s\in S$, let $D_s=\{(s,a):a\in A(s)\}$. The map $a\mapsto(s,a)$ is a bijection from $A(s)$ onto $D_s$, with inverse the second-coordinate projection, so $D_s$ is finite by [F1]. If $s\ne t$, no ordered pair can have both first coordinate $s$ and first coordinate $t$; hence the family $(D_s)_{s\in S}$ is pairwise disjoint. [given, F1, F3, construct]

2.1 By the definition of $D$, $D=\bigcup_{s\in S}D_s$. Since $S$ is finite and the blocks in step 1.1 are finite and pairwise disjoint, [F2] implies that $D$ is finite. [step 1.1, F2] ∎

## Remarks

For nonempty $S$, each $A(s)$ is nonempty, so the normalization for an admissible pair forces $\mathcal R$ to be nonempty. For every admissible $(s,a)$, $P(s'\mid s,a)\ge0$ and

$$ \sum_{s'\in S}P(s'\mid s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)=1, $$

 so $P(\cdot\mid s,a)$ is a probability distribution. Also, $|\rho|\le M$ and $p\ge0$ give 

$$ |r(s,a)|\le\sum_{s'\in S}\sum_{\rho\in\mathcal R}|\rho|p(s',\rho\mid s,a)\le M\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)=M. $$

Thus both derived marginals are well defined and the expected reward is bounded by the maximum absolute reward. The separate marginals are derived from the joint law; specifying unrelated reward and transition marginals would not preserve their possible dependence.

For a fixed admissible $(s,a)\in D$, the diagram shows two operations on the same joint law on $S\times\mathcal R$. The left branch sums out the reward; the right branch averages the reward coordinate over all joint outcomes. These arrows describe operations on probability masses, not independent draws. If $S=\emptyset$, there is no admissible input and the illustration has no instance.

```tikz
\begin{tikzpicture}
\node (joint) at (0,0) {$p(\cdot,\cdot\mid s,a)$};
\node (state) at (-3,-2) {$P(t\mid s,a)=\sum_{\rho\in\mathcal R}p(t,\rho\mid s,a)$};
\node (reward) at (3,-2) {$r(s,a)=\sum_{t\in S}\sum_{\rho\in\mathcal R}\rho\,p(t,\rho\mid s,a)$};
\draw[->] (joint) -- node[above,sloped] {$\mathrm{sum\ over\ rewards}$} (state);
\draw[->] (joint) -- node[above,sloped] {$\mathrm{average\ reward}$} (reward);
\end{tikzpicture}
```
