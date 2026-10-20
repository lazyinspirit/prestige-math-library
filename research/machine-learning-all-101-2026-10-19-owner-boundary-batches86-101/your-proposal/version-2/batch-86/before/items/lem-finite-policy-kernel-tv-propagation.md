---
id: lem-finite-policy-kernel-tv-propagation
kind: lemma
title: "One-step total-variation propagation under a fixed policy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-learned-mdp-model
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - lem-total-variation-coupling-and-kernel-contraction
  - lem-of-abs-value
  - lem-triangle-inequality-finite
  - lem-finite-sum-laws
  - def-sum-over-a-finite-index-set
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition-in-progress"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "Chapter 8 §8.5, printed pp. 210–212: full and sample transition backups for finite MDP models."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§5.1, PDF pp. 25–26: total-variation model error and its accumulation under distribution shift."
---

## Statement

Let $S$ be a finite nonempty set, let $A(s)$ be finite and nonempty for each $s\in S$, and let $P(\cdot\mid s,a)$ and $\widehat P(\cdot\mid s,a)$ be probability distributions on $S$ for each admissible pair. For distributions $u,v$ on $S$, write $\operatorname{TV}(u,v)=\frac12\sum_{x\in S}|u(x)-v(x)|$. Let $\pi(\cdot\mid s)$ be a probability distribution on $A(s)$ for each state. Define the induced transition rows

$$K^\pi(s,x)=\sum_{a\in A(s)}\pi(a\mid s)P(x\mid s,a),\qquad \widehat K^\pi(s,x)=\sum_{a\in A(s)}\pi(a\mid s)\widehat P(x\mid s,a).$$

If $d$ and $\widehat d$ are probability distributions on $S$ and, for some $\epsilon\ge0$,

$$\operatorname{TV}(P(\cdot\mid s,a),\widehat P(\cdot\mid s,a))\le\epsilon$$

whenever $\widehat d(s)>0$ and $\pi(a\mid s)>0$, then

$$\operatorname{TV}(dK^\pi,\widehat d\widehat K^\pi)\le\operatorname{TV}(d,\widehat d)+\epsilon.$$

Here $dK^\pi$ and $\widehat d\widehat K^\pi$ are the next-state distributions obtained by applying the indicated transition rows.

## Statement references

[[def-total-variation-distance-for-probability-laws|Total variation is the event-supremum distance on probability laws.]]

[[lem-total-variation-half-l1-formula-on-a-countable-space|For finite discrete laws, total variation is one half of the sum of absolute mass differences.]]

## Facts & Assumptions

**Given:** The finite state/action sets, true and estimated transition rows, policy rows, state distributions, and row-error bound in the Statement.

[F1] [[def-learned-mdp-model]]: each true and learned transition row is a probability distribution on the same finite state set; its total-variation error is the half-$\ell^1$ distance.

[F2] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-measure sections and measurable event sections; on finite discrete spaces each row table is a probability kernel.

[F3] [[def-total-variation-distance-for-probability-laws]] and [[lem-total-variation-half-l1-formula-on-a-countable-space]]: on finite discrete $S$, $\operatorname{TV}(u,v)=\frac12\sum_x|u(x)-v(x)|$ and this equals the supremum of event-probability differences.

[F4] [[lem-total-variation-coupling-and-kernel-contraction]]: applying one probability kernel to two input probability laws cannot increase their total-variation distance.

[F5] [[lem-of-abs-value]]: absolute value is nonnegative and $|uv|=|u||v|$ for real $u,v$.

[F6] [[lem-triangle-inequality-finite]]: for every finite initial segment, the absolute value of a sum of reals is at most the sum of their absolute values.

[F7] [[lem-finite-sum-laws]]: finite sums obey additivity and recursion, so finite repeated sums may be expanded using the field laws.

[F8] [[def-sum-over-a-finite-index-set]]: sums over a finite set are independent of enumeration and invariant under bijective reindexing.

## Proof

1.1 For each state $s$, the policy mixture $K^\pi(s,\cdot)$ is a probability distribution because it is a convex combination of the probability rows $P(\cdot\mid s,a)$; the same holds for $\widehat K^\pi$. The state set is finite discrete, so both row tables are probability kernels by [F2]. Applying [F4] to the common kernel $K^\pi$ gives $\operatorname{TV}(dK^\pi,\widehat dK^\pi)\le\operatorname{TV}(d,\widehat d)$. [given, F1, F2, F4, algebra]

1.2 Enumerate the finite set $D$ of admissible state-action pairs. For each $x\in S$, the finite-sum triangle inequality [F6] and absolute-value product formula [F5] give $\operatorname{TV}(\widehat dK^\pi,\widehat d\widehat K^\pi)=\frac12\sum_{x\in S}|\sum_{(s,a)\in D}\widehat d(s)\pi(a\mid s)(P(x\mid s,a)-\widehat P(x\mid s,a))|\le\frac12\sum_{x\in S}\sum_{(s,a)\in D}\widehat d(s)\pi(a\mid s)|P(x\mid s,a)-\widehat P(x\mid s,a)|$. The finite sums over $S$ and $D$ can be interchanged: enumerate both sets, expand by additivity [F7], and use the coordinate-swap bijection with enumeration invariance [F8]. This gives $\sum_{s\in S}\widehat d(s)\sum_{a\in A(s)}\pi(a\mid s)\frac12\sum_{x\in S}|P(x\mid s,a)-\widehat P(x\mid s,a)|\le\epsilon$. The last inequality uses the row bound on every positive-weight pair; zero-weight terms vanish, and the weights sum to $\sum_s\widehat d(s)\sum_a\pi(a\mid s)=1$ because both rows are probability distributions. [given, F1, F3, F5, F6, F7, F8, algebra]

2.1 For every $x\in S$, write $dK^\pi(x)-\widehat d\widehat K^\pi(x)=[dK^\pi(x)-\widehat dK^\pi(x)]+[\widehat dK^\pi(x)-\widehat d\widehat K^\pi(x)]$. The scalar triangle inequality [F5], summed over finite $S$ using [F6], gives $\operatorname{TV}(dK^\pi,\widehat d\widehat K^\pi)\le\operatorname{TV}(dK^\pi,\widehat dK^\pi)+\operatorname{TV}(\widehat dK^\pi,\widehat d\widehat K^\pi)$. Steps 1.1 and 1.2 bound the right side by the claim. [F5, F6, step 1.1, step 1.2, algebra] ∎
