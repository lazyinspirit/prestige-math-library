---
id: thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch
kind: theorem
title: Equal observation laws force a metric-risk lower bound
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-operator-and-prior-mismatch
  - def-ip-forward-map-and-solution-classes
  - def-metric-space
  - lem-metric-nonnegativity
  - def-probability-measure
  - def-loss-function-and-risk
  - lem-procedure-action-law-is-measurable
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Maxim Raginsky, Minimax lower bounds, §1, Lemma 1 and complete proof, PDF pp. 3–5"
      url: "https://maxim.ece.illinois.edu/teaching/fall13/notes/minimax.pdf"
      locator: "§1, Lemma 1 and proof"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §§8.1–8.3"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
      locator: "§8.1 metric risk; Proposition 8.2.1 proof; §8.3, especially (8.3.1)–(8.3.3)"
---

## Statement

Let $(Q,d_Q)$ be a metric target space and let $\mathcal G$ be a sigma-algebra on $Q$. Let $\tau_i=(x_i,A_i,\nu_i)$, $i\in\{0,1\}$, be two admissible truth/operator/noise specifications on one measurable data space $(\mathsf Y,\mathcal Y)$, with sampling laws $P_i$ and targets $q_i=q(x_i)$. Assume the metric-loss sections $a\mapsto d_Q(q_i,a)$ are $\mathcal G$-measurable. Let $\delta$ be one randomized decision rule from $(\mathsf Y,\mathcal Y)$ to $(Q,\mathcal G)$, used under both specifications, and define its expected metric risk by
$$R_i(\delta)=\int_{\mathsf Y}\left(\int_Q d_Q(q_i,a)\,\delta(y,da)\right)P_i(dy).$$
If $P_0=P_1$ and $\Delta=d_Q(q_0,q_1)$, then
$$\max\{R_0(\delta),R_1(\delta)\}\ge\frac{\Delta}{2}.$$
Each risk is an extended nonnegative integral; deterministic measurable estimators are included as point-mass decision kernels. This theorem makes no assertion when the observation laws differ, and quantitative robustness requires a separately established stability modulus.

## Statement references

[Maxim Raginsky, *Minimax lower bounds*, §1, Lemma 1 and complete proof](https://maxim.ece.illinois.edu/teaching/fall13/notes/minimax.pdf)

[John Duchi, *Lecture Notes on Statistics and Information Theory*, Chapter 8, §§8.1–8.3](https://web.stanford.edu/class/stats311/lecture-notes.pdf)

## Facts & Assumptions

**Given:** Two admissible specifications $\tau_i=(x_i,A_i,\nu_i)$ with sampling laws $P_i$ on $(\mathsf Y,\mathcal Y)$, one randomized decision kernel $\delta$ from $(\mathsf Y,\mathcal Y)$ to $(Q,\mathcal G)$, $P_0=P_1=P$, and $\Delta=d_Q(q(x_0),q(x_1))$.

[F1] [[def-ip-operator-and-prior-mismatch]]: each admissible truth/operator/noise specification defines its sampling law as a probability measure on the common data space.

[F2] [[def-ip-forward-map-and-solution-classes]]: each admissible truth $x$ has a target $q(x)$ in the metric target space $(Q,d_Q)$.

[F3] [[def-metric-space]]: $d_Q$ is symmetric and satisfies $d_Q(a,c)\le d_Q(a,b)+d_Q(b,c)$ for all $a,b,c\in Q$.

[F4] [[lem-metric-nonnegativity]]: every metric distance is nonnegative.

[F5] [[def-loss-function-and-risk]]: a randomized decision rule is a probability kernel.

[F6] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: integrals of sums of nonnegative measurable functions equal the sum of their extended nonnegative integrals.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous under nonnegative finite scalars.

[F8] [[def-probability-measure]]: $P(\mathsf Y)=1$.

[F9] [[def-nonnegative-lebesgue-integral]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[def-integral-of-a-nonnegative-simple-function]]: for a probability measure $\mu$ on a measurable space $(S,\mathcal S)$, the constant function $z\mapsto\Delta$ is simple and has integral $\Delta\mu(S)=\Delta$.

[F10] [[lem-procedure-action-law-is-measurable]]: if $a\mapsto g(a)$ is a nonnegative measurable loss section and $\delta$ is a probability kernel, then $y\mapsto\int_Q g(a)\,\delta(y,da)$ is measurable.

[F11] [[def-loss-function-and-risk]]: risk is the outer integral of the kernel-averaged nonnegative measurable loss under the sampling law; a deterministic measurable estimator is included as a point-mass kernel.

## Proof


1.1 By [F2], $q_i=q(x_i)$ are points of $Q$. For every $y\in\mathsf Y$ and $a\in Q$, [F3] gives $\Delta=d_Q(q_0,q_1)\le d_Q(q_0,a)+d_Q(a,q_1)$. Integrating this pointwise inequality against the probability measure $\delta(y,\cdot)$, using nonnegativity in [F4], monotonicity in [F7], total mass one in [F8], the constant integral identity in [F9], symmetry in [F3] to write $d_Q(a,q_1)=d_Q(q_1,a)$, the probability-kernel property in [F5], and additivity in [F6], yields $\Delta\le\int_Q d_Q(q_0,a)\,\delta(y,da)+\int_Q d_Q(q_1,a)\,\delta(y,da)$. The integrands are measurable by Given and nonnegative by [F4]. [given, F2, F3, F4, F5, F6, F7, F8, F9, algebra]

2.1 The inner loss functions of $y$ are measurable by [F10], so we may integrate step 1.1 under the common law $P$. By [F11], these outer integrals are $R_0(\delta)$ and $R_1(\delta)$. Monotonicity and additivity give $\Delta P(\mathsf Y)\le R_0(\delta)+R_1(\delta)$. By [F1], $P$ is a sampling law; by [F8] and [F9], the left side is $\Delta$. Each risk is nonnegative by [F4] and [F11]. If $\max\{R_0,R_1\}<\Delta/2$, both risks are finite and their sum is less than $\Delta$, contradicting the preceding inequality. Hence $\max\{R_0(\delta),R_1(\delta)\}\ge\Delta/2$, including the case of an infinite risk. [given, F1, F4, F6, F7, F8, F9, F10, F11, step 1.1, algebra] ∎
