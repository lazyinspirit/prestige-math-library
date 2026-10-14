---
id: lem-huber-covariance-ambient-action-tail-lower-bound
kind: lemma
title: Huber covariance modulus lower bound for unrestricted matrix-valued actions
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-bounded-spectrum-covariance-class
  - def-block-sparse-covariance-class
  - def-huber-covariance-model
  - def-contamination-modulus
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-inner-product-norm
  - cor-triangle-inequality-for-inner-product-norm
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - thm-composition-with-borel-functions-preserves-measurability
  - def-axiom-of-choice
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: AC is required by the Huber mixture equalization supplier. All other steps are finite-product identities or pointwise triangle inequalities and use no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §5 and supplement"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5, §5.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 5
---

## Statement

Assume AC. Fix $p,n\ge1$, $M>0$, $0\le\epsilon\le1$, and let $\Theta$ be
either $\mathcal F_p(M)$ from [[def-bounded-spectrum-covariance-class]] or
$\mathcal F_{p,s}(M)$ from [[def-block-sparse-covariance-class]] with
$1\le s\le p/2$, equipped with its induced Borel sigma-algebra. Let
$\mathscr E_n$ be the set of Borel maps
$(\mathbb R^p)^n\to\mathbb R^{p\times p}$. The clean family is
$P_\Sigma=N_p(0,\Sigma)$. For $\Sigma\in\Theta$ and matrix action $A$, put
$$\ell(\Sigma,A)=\|\Sigma-A\|_{\rm op}^2.$$
Its restriction to $\Theta\times\Theta$ defines the contamination modulus
$\omega(\epsilon,\Theta)$ through [[def-contamination-modulus]]. Suppose
$\omega(\epsilon,\Theta)<\infty$, $0\le M_0<\infty$, $0<c_0\le1$, and
$$\inf_{\widehat\Sigma\in\mathscr E_n}\sup_{\Sigma\in\Theta} P_\Sigma^{\otimes n}\{\ell(\Sigma,\widehat\Sigma)\ge M_0\}\ge c_0.$$
Then
$$\inf_{\widehat\Sigma\in\mathscr E_n}\sup_{\Sigma\in\Theta}\sup_Q P_{\epsilon,\Sigma,Q}^{\otimes n} \left\{\ell(\Sigma,\widehat\Sigma)\ge \frac1{16}\bigl(M_0\vee\omega(\epsilon,\Theta)\bigr)\right\} \ge\min(c_0,1/2).$$

## Facts & Assumptions

**Given:** AC, the bounded covariance class, the Gaussian Huber model, its
contamination modulus, and the clean tail-risk premise in the Statement.

[F1] [[def-huber-covariance-model]]: one observation has law
$(1-\epsilon)N_p(0,\Sigma)+\epsilon Q$ and the sample consists of iid
observations from this law.

[F2] [[def-contamination-modulus]]: for $\epsilon<1$, pairs in the modulus
satisfy $TV(P_{\Sigma_0},P_{\Sigma_1})\le\epsilon/(1-\epsilon)$; at
$\epsilon=1$ all pairs are allowed.

[F3] [[lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold]]:
under AC, every pair satisfying [F2] admits contaminants making the two
one-observation Huber laws equal.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]:
finite product laws are determined by their factor laws and rectangle
values.

[F5] [[def-measurable-space]],
[[def-measurable-function-between-measurable-spaces]], and
[[thm-composition-with-borel-functions-preserves-measurability]]: a Borel
estimator composed with the continuous loss section gives measurable tail
events.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and
[[def-inner-product-norm]] define the matrix and vector norms.
[[cor-triangle-inequality-for-inner-product-norm]] gives the vector-norm
triangle inequality: for every unit $v$,
$\|(B+C)v\|_2\le\|Bv\|_2+\|Cv\|_2\le\|B\|_{\rm op}+\|C\|_{\rm op}$.
Taking the supremum gives
$\|B+C\|_{\rm op}\le\|B\|_{\rm op}+\|C\|_{\rm op}$,
without symmetry assumptions on $B,C$.


## Proof

1.1 Fix any $\widehat\Sigma\in\mathscr E_n$. For each $\Sigma\in\Theta$, choosing $Q=P_\Sigma$ makes the one-observation Huber law equal to the clean law by [F1]. If $\omega\le M_0$, then $\frac1{16}(M_0\vee\omega)\le M_0$, so the robust supremum probability at the smaller threshold is at least the clean supremum probability at $M_0$. The clean premise therefore gives the claimed bound $c_0$ for this estimator. Taking the infimum preserves it. [F1, given, algebra]

1.2 Suppose $\omega>M_0$. By the definition of the finite supremum in [F2], there are $\Sigma_0,\Sigma_1\in\Theta$ with $\ell(\Sigma_0,\Sigma_1)>\omega/2$ and satisfying the total-variation condition there; when $\epsilon=1$ every pair is admissible. By [F3], choose contaminants $Q_0,Q_1$ whose one-observation Huber laws coincide at a law $R_1$. Their iid sample laws both equal $R_1^{\otimes n}$ by [F1] and [F4]. [F1, F2, F3, F4, choose]

2.1 For every matrix action $A$, the triangle inequality gives $$\max_{i=0,1}\ell(\Sigma_i,A) \ge\frac14\ell(\Sigma_0,\Sigma_1) >\frac18\omega(\epsilon,\Theta) >\frac1{16}\bigl(M_0\vee\omega(\epsilon,\Theta)\bigr).$$ Indeed, one of the two distances from $A$ is at least half the distance between $\Sigma_0$ and $\Sigma_1$. The two measurable loss events at threshold $\frac14\ell(\Sigma_0,\Sigma_1)$ therefore cover the sample space under the common law; their probabilities sum to at least one. One has probability at least $1/2$, and its event is contained in the event at the smaller displayed threshold. The robust supremum probability for this estimator is at least $1/2$. [F5, F6, step 1.2, algebra]

3.1 Step 1.1 applies when $\omega\le M_0$ and steps 1.2–2.1 apply when $\omega>M_0$. The bound holds for every Borel matrix-valued estimator, so taking their infimum proves the statement. [step 1.1, step 1.2, step 2.1, algebra] ∎
