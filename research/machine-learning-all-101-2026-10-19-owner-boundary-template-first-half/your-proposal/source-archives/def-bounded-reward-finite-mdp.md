---
id: def-bounded-reward-finite-mdp
kind: definition
title: "Finite MDP with bounded real rewards"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-markov-decision-process, def-borel-sigma-algebra, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-probability-measure, def-measure-kernel-and-probability-kernel, def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-ionescu-tulcea-construction-of-a-markov-chain, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Introduction, finite state/action, reward, and transition model (PDF lines 34–41); §2, regret convention (PDF lines 134–138)."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, MDP model and UCRL2, printed pp. 222–228."}
proof_strategy: direct
---

## Definition

Let $S$ be a finite nonempty state set and let $A(s)$ be a finite nonempty action set for each $s\in S$, as in the finite-MDP convention. Put $D=\{(s,a):s\in S,\ a\in A(s)\}$ with its discrete sigma-algebra. Equip $S$ with its power-set sigma-algebra, $[0,1]$ with its Borel sigma-algebra, and $S\times[0,1]$ with the product sigma-algebra. A finite MDP with bounded real rewards specifies a probability kernel $Q$ from $D$ to $S\times[0,1]$; equivalently, each admissible $(s,a)$ has a probability measure $Q(\cdot\mid s,a)$ on that product measurable space. The reward-coordinate projection $(s',\rho)\mapsto\rho$ is measurable because the preimage of each Borel set $B\subseteq[0,1]$ is the product rectangle $S\times B$. Define the next-state law by $P(s'\mid s,a)=Q(\{s'\}\times[0,1]\mid s,a)$ and the mean reward by $r(s,a)=\int_{S\times[0,1]}\rho\,Q(ds',d\rho\mid s,a)\in[0,1]$. At each time, conditional on the observed history and the selected action, the next-state/reward pair has this law. Assume the Axiom of Choice for the path-space construction under policies.

## Definition references

[Finite-MDP supplier](../items/def-finite-markov-decision-process.md): supplies the finite state/action and joint one-step-law conventions; its reward alphabet is finite, while this definition explicitly permits every Borel reward law on $[0,1]$.

[Borel sigma-algebra](../items/def-borel-sigma-algebra.md): specifies the Borel events on the reward interval.

[Product sigma-algebra](../items/def-product-sigma-algebra-and-finite-product-sigma-algebras.md): specifies measurable events on $S\times[0,1]$.

[Probability measure](../items/def-probability-measure.md): $Q(\cdot\mid s,a)$ is a probability measure for each admissible pair.

[Probability kernel](../items/def-measure-kernel-and-probability-kernel.md): the family $Q$ has measurable event sections over the finite pair set $D$.

[Expectation as an integral](../items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md): defines the mean reward integral.

[UCRL2 model and reward scope](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): Introduction, finite state/action, reward, and transition model (PDF lines 34–41).

[Ionescu–Tulcea path-law construction](../items/thm-ionescu-tulcea-construction-of-a-markov-chain.md): unique path law from sequential probability kernels under Choice.

[Axiom of Choice](../items/def-axiom-of-choice.md): assumed by the path-law construction.

## Axiom use

The Axiom of Choice is assumed exactly for the path-space construction under policies. The one-step kernel and its finite state marginal require no choice.
