---
id: thm-huber-contamination-modulus-lower-bound
kind: theorem
title: "Huber contamination modulus lower bound for tail risk"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-loss-function-and-risk
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-huber-contamination-model
  - def-contamination-robust-risk
  - def-contamination-modulus
  - lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold
  - lem-common-law-forces-two-point-tail-loss-bound
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §5, Theorem 5.1, and proof in the supplement"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5, §§5.1–5.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Fix a contamination level $0\le\epsilon\le1$, an integer sample size $N\ge1$, and a nonempty statistical model $\{P_\theta:\theta\in\Theta\}$ on a common measurable sample space, and give $\Theta$ a measurable structure as the parameter action space ([[def-measurable-space]]). Let the target-first loss $L:\Theta\times\Theta\to[0,+\infty]$ of [[def-loss-function-and-risk]] have measurable sections $a\mapsto L(\theta,a)$. Suppose a fixed $0<\kappa\le1$ satisfies
$$
\max\{L(\theta_0,a),L(\theta_1,a)\}\ge\kappa L(\theta_0,\theta_1)
$$
for all $a,\theta_0,\theta_1\in\Theta$. Suppose also that $0\le M_0<\infty$, $0<c_0\le1$, and
$$
\inf_{\hat\theta:\mathcal X^N\to\Theta\ {\rm measurable}}\sup_{\theta\in\Theta}P_{\theta}^{\otimes N}\{L(\theta,\hat\theta)\ge M_0\}\ge c_0.
$$
If $\omega(\epsilon,\Theta)<\infty$, then with
$$
M_\epsilon=\frac{\kappa}{4}\bigl(M_0\vee\omega(\epsilon,\Theta)\bigr)
$$
one has
$$
\inf_{\hat\theta:\mathcal X^N\to\Theta\ {\rm measurable}}\sup_{\theta\in\Theta}\sup_QP_{\epsilon,\theta,Q}^{\otimes N}\{L(\theta,\hat\theta)\ge M_\epsilon\}\ge\min(c_0,1/2).
$$
Thus the lower-bound threshold is comparable to $M_0\vee\omega(\epsilon,\Theta)$. If $\omega(\epsilon,\Theta)=+\infty$, the same supremum is at least $1/2$ at every finite threshold. In particular, if $c_0\ge c_*>0$ for a fixed constant $c_*\le1/2$ independent of the model, the finite-modulus conclusion has the universal probability constant $c_*$. A metric loss has the separation property with $\kappa=1/2$; its square has it with $\kappa=1/4$.

## Facts & Assumptions

**Given:** AC; $N\ge1$; a nonempty statistical model; a measurable parameter loss with the stated separation property; the clean tail-risk lower bound $(M_0,c_0)$; and $0\le\epsilon\le1$.

[A1] [[def-axiom-of-choice]]: AC is used through the density construction in [F4].

[F1] [[def-huber-contamination-model]]: one observation has law $P_{\epsilon,\theta,Q}=(1-\epsilon)P_\theta+\epsilon Q$ and the $N$ observations are iid from this law.

[F2] [[def-contamination-modulus]]: $\omega(\epsilon,\Theta)$ is the supremum of parameter loss over clean pairs with $TV(P_{\theta_0},P_{\theta_1})\le\epsilon/(1-\epsilon)$; at $\epsilon=1$ all pairs are allowed.

[F3] [[def-contamination-robust-risk]]: the tail criterion is the worst-case probability of the event $L(\theta,\hat\theta)\ge t$, distinct from expected risk.

[F4] [[lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold]]: under AC, clean laws within the stated TV threshold admit contaminating laws that make their Huber mixtures equal.

[F5] [[lem-common-law-forces-two-point-tail-loss-bound]]: if two parameter values have the same data law, the maximum of their two tail-error probabilities at the pairwise separation threshold is at least $1/2$.

[F6] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: a finite product of sigma-finite factor laws is the unique measure with its rectangle values.

## Proof

1.1 Suppose $\omega(\epsilon,\Theta)\le M_0$. For any estimator $\hat\theta$, the clean premise says its supremum over $\theta$ of the clean probability at threshold $M_0$ is at least $c_0$. For each $\theta$, the Huber supremum may choose $Q=P_\theta$, giving $P_{\epsilon,\theta,Q}=P_\theta$ by [F1]. Since $M_\epsilon=(\kappa/4)M_0\le M_0$, the event at $M_\epsilon$ contains the clean event at $M_0$. Taking suprema therefore gives at least $c_0$ for every estimator. [given, F1, algebra]

1.2 Suppose $\omega(\epsilon,\Theta)>M_0$ and is finite. Then $\omega>0$, so the definition of supremum supplies $\theta_0,\theta_1$ with $L(\theta_0,\theta_1)>\omega/2$; if $\epsilon<1$ this pair satisfies $TV(P_{\theta_0},P_{\theta_1})\le\epsilon/(1-\epsilon)$, while if $\epsilon=1$ every pair is allowed. [F2, given, choose]

2.1 If $\omega(\epsilon,\Theta)\le M_0$, step 1.1 gives the asserted bound. [F2, given, step 1.1]

2.2 By [F4] choose $Q_0,Q_1$ making the two one-observation Huber laws equal to a common law $R_1$. By [F1], each sample law is the product of $N$ copies of $R_1$. The finite product sigma-algebra and measure are formed recursively; at each stage the existing partial product is sigma-finite, so [F6] supplies the next factor product. Both parameters therefore give the same recursively constructed sample law $R:=R_1^{\otimes N}$. [A1, F1, F4, F6, step 1.2, choose, construct]

3.1 The loss-separation hypothesis gives $\max_iL(\theta_i,a)\ge\kappa L(\theta_0,\theta_1)>\kappa\omega/2>M_\epsilon$ for every $a$. Thus the events at threshold $\kappa L(\theta_0,\theta_1)$ in [F5] are contained in those at threshold $M_\epsilon$. Apply [F5] under $R$ to get $\max_iR\{L(\theta_i,\hat\theta)\ge M_\epsilon\}\ge1/2$. The supremum over $\theta,Q$ is at least this maximum for each estimator. [F2, F3, F5, step 1.2, step 2.2, algebra]

4.1 If $\omega\le M_0$, step 2.1 gives $c_0$; if $\omega>M_0$, step 3.1 gives $1/2$. Taking the infimum over estimators proves the stated $\min(c_0,1/2)$ bound. The explicit formula for $M_\epsilon$ gives comparability to $M_0\vee\omega$. If $c_0\ge c_*>0$ for a fixed $c_*\le1/2$, then $\min(c_0,1/2)\ge c_*$, yielding a universal probability constant under that additional clean-bound normalization. [F3, given, step 2.1, step 3.1, algebra]

5.1 If $\omega=+\infty$, fix any finite threshold $T$. The supremum definition gives a pair with $L(\theta_0,\theta_1)>2T/\kappa$ satisfying the TV constraint (or any pair when $\epsilon=1$). Equalize their mixtures by [F4]. Pairwise separation makes the events at threshold $\kappa L(\theta_0,\theta_1)$ in [F5] subsets of the corresponding events at threshold $T$, so [F5] gives a maximum tail probability at threshold $T$ of at least $1/2$. This holds for every estimator and hence for the minimax supremum. [A1, F2, F4, F5, choose, algebra] ∎
