---
id: lem-finite-pomdp-belief-update-is-probability-kernel
kind: lemma
title: "The finite POMDP Bayes filter is a probability kernel"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-pomdp
  - def-belief-state-and-bayes-filter
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-bayes-formula-for-dominated-kernels
  - def-sum-over-a-finite-index-set
  - lem-a-double-sum-over-finite-index-sets-may-be-interchanged
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaelbling, Littman, and Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown Technical Report CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "Complete PDF; §§3.1–3.4, PDF pp. 8–11. The finite Bayes formula and positive-normalizer domain are proved locally."
    - title: "Pascal Poupart, CS 886 Lecture 13: POMDPs, University of Waterloo"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf"
      locator: "Complete lecture, slides 7–8."
---

## Statement

Let a finite POMDP be fixed, let $b\in\Delta(S)$ and $a\in A$, and put $\bar b(s')=\sum_{s\in S}T(s'\mid s,a)b(s)$, $q(o)=\sum_{s'\in S}O(o\mid s')\bar b(s')$, and, when $q(o)>0$, $\tau(o)(s')=O(o\mid s')\bar b(s')/q(o)$. For Borel $C\subseteq\Delta(S)$ define $K(C)=\sum_{o:q(o)>0}q(o)1_C(\tau(o))$. Then the joint next-state/reward/observation mass in the POMDP definition is normalized; $\bar b$ and $q$ are probability distributions; every defined $\tau(o)$ is a probability distribution and is the conditional law of the next state given observation $o$; and $K$ is a probability measure. Moreover, $(b,a)\mapsto K(C\mid b,a)$ is Borel measurable for each Borel $C$, so $K$ is a probability kernel from $\Delta(S)\times A$ to $\Delta(S)$. No Axiom of Choice is used.

## Statement references

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

[Poupart, University of Waterloo CS 886 Lecture 13](https://cs.uwaterloo.ca/~ppoupart/teaching/cs886-fall05/lectureNotes/cs886-lecture13.pdf).

## Facts & Assumptions

**Given:** A finite POMDP, $b\in\Delta(S)$, and $a\in A$. Write $\bar b_{b,a}(s')=\sum_sT(s'\mid s,a)b(s)$ and $q(o\mid b,a)=\sum_{s'}O(o\mid s')\bar b_{b,a}(s')$.

[F1] [[def-finite-pomdp]]: for each $(s,a)$, $p(s',\rho\mid s,a)$ is a probability mass, $T(s'\mid s,a)=\sum_\rho p(s',\rho\mid s,a)$, and $O(\cdot\mid s')$ is a probability distribution on the finite set $\Omega$.

[F2] [[def-belief-state-and-bayes-filter]]: $\Delta(S)$ consists of nonnegative coordinates summing to one; $\tau(b,a,o)(s')=O(o\mid s')\bar b_{b,a}(s')/q(o\mid b,a)$ when $q>0$; and $K(C\mid b,a)=\sum_{o:q>0}q(o\mid b,a)1_C(\tau(b,a,o))$.

[F3] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has a probability-measure section at every input and measurable event evaluations.

[F4] [[thm-bayes-formula-for-dominated-kernels]]: if a probability kernel has a specified density relative to a sigma-finite measure, then at a positive finite marginal density its posterior coordinates are the prior-weighted likelihood divided by that marginal; the explicit-kernel event identities are choice-free.

[F5] [[thm-measurability-of-integration-against-a-kernel]]: integrating a product-measurable function against a finite kernel gives a measurable function of the input.

[F6] [[def-sum-over-a-finite-index-set]]: finite sums are independent of the chosen enumeration, and may be reindexed along a bijection.

[F7] [[lem-a-double-sum-over-finite-index-sets-may-be-interchanged]]: for finite index sets, either order of a double sum equals the sum over the product set.

## Proof

1.1 For fixed $s,a$, the mass $J(s',\rho,o\mid s,a)=p(s',\rho\mid s,a)O(o\mid s')$ is nonnegative. Summing first over observations gives $\sum_{s',\rho,o}J=\sum_{s',\rho}p(s',\rho\mid s,a)\sum_oO(o\mid s')=\sum_{s',\rho}p(s',\rho\mid s,a)=1$ by [F1]; all index sets are finite, so the reordering is justified by [F6] and [F7]. Thus the joint next-state/reward/observation mass is normalized. [given, F1, F6, F7]

1.2 The predicted coordinates $\bar b_{b,a}(s')$ are nonnegative, and $\sum_{s'}\bar b_{b,a}(s')=\sum_s b(s)\sum_{s'}T(s'\mid s,a)=\sum_s b(s)=1$ by [F1], [F2], and finite double-sum interchange [F7]. Hence $\bar b_{b,a}$ is a probability distribution. [given, F1, F2, F7]

2.1 Every $q(o\mid b,a)$ is nonnegative, and $\sum_o q(o\mid b,a)=\sum_{s'}\bar b_{b,a}(s')\sum_oO(o\mid s')=\sum_{s'}\bar b_{b,a}(s')=1$ by [F1], step 1.2, and [F7]. Thus $q(\cdot\mid b,a)$ is a probability distribution, so each $q$ is finite and lies in $[0,1]$. [step 1.2, F1, F7]

3.1 Fix $o$ with $q(o\mid b,a)>0$. Apply [F4] with prior $\pi=\bar b_{b,a}$ on the finite state set, observation kernel $Q(s',\cdot)=O(\cdot\mid s')$, counting measure on finite $\Omega$, and density $\ell(s',o)=O(o\mid s')$. The density is nonnegative and jointly measurable, and its marginal is exactly $q(o\mid b,a)$, which is finite and positive by step 2.1. The theorem's posterior is therefore $\tau(b,a,o)$, with coordinates summing to one. At $q=0$ the Bayes theorem supplies a filler for its everywhere kernel, but the partial update defined here remains undefined and $K$ omits that zero-mass observation. [step 1.2, step 2.1, F2, F4]

3.2 For fixed $b,a$, the formula for $K$ is a finite nonnegative sum of point masses at the defined $\tau(b,a,o)$. For pairwise disjoint Borel sets $(C_n)_{n\ge1}$, each point $\tau(b,a,o)$ lies in at most one $C_n$, so $1_{\cup_nC_n}(\tau)=\sum_n1_{C_n}(\tau)$ with at most one nonzero term. Since there are finitely many observations, distributing the finite weighted sum over these finitely many nonzero terms gives $K(\cup_nC_n)=\sum_nK(C_n)$. Also $K(\Delta(S))=\sum_{o:q>0}q(o\mid b,a)=1$ by step 2.1. Thus $K(\cdot\mid b,a)$ is a probability measure. [step 2.1, F2, F3]

4.1 On $\Delta(S)\times A$, the predicted law $\bar K(\{s'\}\mid b,a)=\bar b_{b,a}(s')$ is a probability kernel: step 1.2 gives probability sections, and each evaluation is a finite linear function of $b$ on each discrete action. The function $((b,a),s')\mapsto O(o\mid s')$ is product-measurable, so [F5] makes $q(o\mid b,a)=\int O(o\mid s')\bar K(ds'\mid b,a)$ measurable; its displayed finite formula also shows it is continuous in $b$. On the Borel set where $q(o\mid b,a)>0$, every coordinate of $\tau$ is a quotient of continuous functions with positive denominator and is Borel. For Borel $C$, the function equal to $q(o\mid b,a)1_C(\tau(b,a,o))$ there and zero where $q=0$ is Borel; summing these functions over the finite set $\Omega$ proves that $K(C\mid b,a)$ is Borel measurable. By [F3], $K$ is a probability kernel. [step 1.2, step 2.1, step 3.1, F3, F5]

5.1 The only conditional law used in step 3.1 is the explicit dominated-kernel formula at a positive finite marginal. The finite history beliefs are ratios on positive-probability atoms, and all other constructions use specified finite sums and kernels; no version selection or arbitrary-family choice is used. [F2, F4] ∎
