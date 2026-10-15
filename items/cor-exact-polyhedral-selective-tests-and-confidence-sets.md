---
id: cor-exact-polyhedral-selective-tests-and-confidence-sets
kind: corollary
title: Exact selective tests and confidence sets from the pivot
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-polyhedral-selective-normal-pivot
  - thm-truncated-normal-selective-pivot-is-conditionally-uniform
  - def-exact-selective-confidence-set-for-a-functional
  - def-axiom-of-choice
  - def-statistical-experiment
  - def-p-value
  - def-test-size-and-power
  - thm-p-value-superuniformity
  - def-pivot
  - thm-pivot-inversion-exact-coverage
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
    - title: "William Fithian, Dennis L. Sun, and Jonathan E. Taylor, Optimal Inference After Model Selection"
      url: "https://arxiv.org/pdf/1410.2597"
---

## Statement

Assume AC and the setup of [[def-polyhedral-selective-normal-pivot]], and suppose $P_\mu(S)>0$ for at least one $\mu\in\mathbb R^n$. Write $\Theta_S=\{\mu\in\mathbb R^n:P_\mu(S)>0\}$. The selected sample space is $S$ with trace Borel sigma-algebra $\mathcal B(S)=\{S\cap B:B\in\mathcal B(\mathbb R^n)\}$, and for $\mu\in\Theta_S$ let $Q_\mu=P_\mu(\,\cdot\mid S)$ be the conditional sampling law. For $\vartheta\in\mathbb R$, define
$$p_\vartheta(Y)=2\min\{q_\vartheta(Y),1-q_\vartheta(Y)\}.$$
For the point null $H_0(\vartheta)=\{\mu\in\Theta_S:\eta^T\mu=\vartheta\}$, assume $H_0(\vartheta)\ne\varnothing$. Then $p_\vartheta$ is a valid p-value in the conditional experiment $(Q_\mu)$ and is Uniform$(0,1)$ under every null law. For every $\alpha\in[0,1]$, rejecting when $p_\vartheta\le\alpha$ has conditional type-I error exactly $\alpha$. If, in addition, a nonempty alternative $\Theta_1\subseteq\Theta_S\setminus H_0(\vartheta)$ is specified, the test has size $\alpha$ and hence level $\alpha$.

For $0\le\alpha\le1$, put $\Theta_\eta=\{\eta^T\mu:\mu\in\Theta_S\}$ and
$$C_\eta(Y)=\{\vartheta\in\Theta_\eta:\alpha/2\le q_\vartheta(Y)\le1-\alpha/2\}.$$
This is an exact selective confidence set for the functional $\tau(\mu)=\eta^T\mu$ in the sense of [[def-exact-selective-confidence-set-for-a-functional]]: for every $\mu$ with $P_\mu(S)>0$,
$$Q_\mu\{\eta^T\mu\in C_\eta(Y)\}=1-\alpha.$$
The guarantee is for one fixed contrast and one fixed selection event, not simultaneous coverage over a selected family.

## Facts & Assumptions

**Given:** AC, a conditional experiment obtained by conditioning on $S$, $0\le\alpha\le1$, and a fixed contrast $\eta\ne0$.

[A1] AC is required by the normal-law and Gaussian projection suppliers in the pivot theorem. [[def-axiom-of-choice]]

[F1] For each $\mu\in\Theta_S$, the pivot section $q_{\eta^T\mu}$ is Borel measurable and Uniform$(0,1)$ under $Q_\mu$. [[thm-truncated-normal-selective-pivot-is-conditionally-uniform]]

[F2] A p-value is a measurable $[0,1]$-valued statistic whose lower-tail probabilities are bounded by their thresholds under every parameter in the null. [[def-p-value]]

[F3] A valid p-value threshold rule is a level-$\alpha$ test whenever the null and alternative are nonempty and disjoint. [[thm-p-value-superuniformity]]

[F4] Test size is the supremum of rejection probabilities on the nonempty null, and level $\alpha$ means size at most $\alpha$. [[def-test-size-and-power]]

[F5] In an experiment, a confidence set for a functional is measured by the probability of its measurable membership section under each corresponding sampling law; exact coverage is equality. [[def-exact-selective-confidence-set-for-a-functional]]

[F6] A pivot is a parameter-indexed measurable family with a common sampling law. [[def-pivot]]

[F7] Inverting a pivot over a measurable acceptance set of probability $1-\alpha$ gives exact confidence coverage $1-\alpha$. [[thm-pivot-inversion-exact-coverage]]

[F8] The conditional laws $Q_\mu$ form an experiment on the selected data space whenever $P_\mu(S)>0$. [[def-statistical-experiment]]

## Proof

1.1 For any $\mu$ in the conditional experiment, [F1] gives $q_{\eta^T\mu}(Y)\sim\operatorname{Uniform}(0,1)$ under $Q_\mu$. For $0\le u\le1$, the event $2\min\{q,1-q\}\le u$ is the union of the two tails $q\le u/2$ and $q\ge1-u/2$, whose uniform probabilities sum to $u$ (their intersection has measure zero). Thus, if $H_0(\vartheta)\ne\varnothing$, $p_\vartheta$ is uniform under every null law and is measurable by the pivot formula; [F2] makes it a valid p-value. [A1, F1, F2, given, algebra]

2.1 If $H_0(\vartheta)\ne\varnothing$ and the alternative is nonempty, [F3] applied to $p_\vartheta$ gives conditional size at most $\alpha$. By [F4] size is the supremum of the null rejection probabilities; since every null law has the exact uniform p-value distribution from step 1.1, $Q_\mu(p_\vartheta\le\alpha)=\alpha$ for every null $\mu$, so the size is exactly $\alpha$. [A1, F1, F3, F4, step 1.1, algebra]

3.1 By [F1], [F6], and [F8], $q_\mu(Y):=q_{\eta^T\mu}(Y)$ is a pivot in the conditional experiment. Its full-parameter inversion is $C_{\rm full}(Y)=\{\mu'\in\Theta_S:q_{\eta^T\mu'}(Y)\in[\alpha/2,1-\alpha/2]\}$. The acceptance interval has uniform probability $1-\alpha$, so [F7] gives exact coverage for $C_{\rm full}$. Its image under $\mu'\mapsto\eta^T\mu'$ is exactly $C_\eta(Y)$ by the definition of $\Theta_\eta$. For each fixed true $\mu$, membership $\eta^T\mu\in C_\eta(Y)$ is precisely $\alpha/2\le q_{\eta^T\mu}(Y)\le1-\alpha/2$, which has $Q_\mu$-probability $1-\alpha$ by [F1]. The membership section is measurable by the Borel pivot formula, so [F5] applies. [A1, F1, F5, F6, F7, F8, step 1.1, algebra] ∎
