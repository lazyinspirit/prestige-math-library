---
dependency_level: 1
id: lem-strong-mixing-quantile-covariance-bound
kind: lemma
title: Strong-mixing covariance bound in terms of tail quantiles
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - cor-layer-cake-formulas-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-finite-measure-uniqueness-on-a-pi-system
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: P. Doukhan, P. Massart and E. Rio, The functional central limit theorem for strongly mixing processes, Lemma 1 and Proposition 1
      url: https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf
axiom_use: No choice principle is used; the proof uses threshold events, Tonelli and scalar inequalities.
---

## Statement

Let $\mathcal A,\mathcal B$ be sub-sigma-algebras of a probability space and put
$$a=\sup_{A\in\mathcal A,\,B\in\mathcal B}|\mathbb P(A\cap B)-\mathbb P(A)\mathbb P(B)|.$$
For any real random variable $U$, define its absolute tail quantile by
$$Q_U(u)=\inf\{t\ge0:\mathbb P(|U|>t)\le u\},\qquad 0<u<1.$$
This is a nonnegative nonincreasing Borel function and, for every nonnegative Borel function $\psi$,
$$\int_0^1\psi(Q_U(u))\,du=\mathbb E\psi(|U|).$$
If $U,V$ are square-integrable real random variables measurable respectively with respect to $\mathcal A,\mathcal B$, then
$$|\operatorname{Cov}(U,V)|\le4\int_0^a Q_U(u)Q_V(u)\,du.$$
In particular, if $|U|\le A$ and $|V|\le B$ almost surely, the right-hand side is at most $4ABa$. For complex $U,V$ with these bounds and the same measurability,
$$|\mathbb E(UV)-\mathbb EU\mathbb EV|\le16ABa.$$
For two collections of observations separated by $n$ time steps in a process $Y$, the coefficient $a$ of their sigma-algebras is at most $\alpha_Y(n)$ as defined in [[def-mixing-coefficients-for-stationary-markov-chain]]. An integral whose upper endpoint is zero is zero.

## Facts & Assumptions

**Given:** The sigma-algebras, quantiles, moment and measurability hypotheses in the Statement.

[F1] The strong-mixing coefficient is the supremum of the event-probability differences for the specified separated sigma-algebras. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] Covariance is $\mathbb E(UV)-\mathbb EU\mathbb EV$ for square-integrable real variables. ([[def-moments-variance-and-covariance]])

[F3] Cauchy–Schwarz bounds the expectation of the absolute product of two square-integrable real variables. ([[cor-cauchy-schwarz-for-random-variables]])

[F4] A nonnegative random variable is the integral of its threshold indicators, and its expectation is its integrated tail probability. ([[cor-layer-cake-formulas-for-random-variables]])

[F5] Nonnegative product-measurable functions on sigma-finite product spaces admit either order of integration. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F6] Finite measures agreeing on a generating pi-system and on the whole space are equal. ([[lem-finite-measure-uniqueness-on-a-pi-system]])

## Proof

1.1 For a finite real $U$, write $T(t)=\mathbb P(|U|>t)$ for $t\ge0$. The tail tends to zero at infinity, is nonincreasing and is right-continuous. Thus $Q_U(u)$ is finite for $u>0$, is nonincreasing, and is Borel measurable. More precisely, $Q_U(u)>t$ if and only if $u<T(t)$: if $T(t)\le u$, then $t$ belongs to the set defining the infimum; if $T(t)>u$, right-continuity supplies an $\varepsilon>0$ with $T(t+\varepsilon)>u$, so that infimum exceeds $t$. Consequently Lebesgue measure on $(0,1)$ gives $\lambda\{u:Q_U(u)>t\}=T(t)$ for every $t\ge0$. The laws of $Q_U$ under $\lambda$ and of $|U|$ therefore agree on all closed left rays and both have total mass one. These rays form a pi-system and generate the Borel sigma-algebra: their differences give half-open intervals, and countable unions of those give all open intervals. By [F6] the laws agree, proving the stated integral identity. In particular $\int_0^1Q_U^2=\mathbb EU^2$. [F6, given, algebra]

1.2 Suppose first $U,V\ge0$ and $U,V\in L^2$. Their first moments and $\mathbb E(UV)$ are finite by [F3]. The threshold-indicator identities and [F5] give $\mathbb E(UV)=\int_0^\infty\int_0^\infty\mathbb P(U>s,V>t)\,ds\,dt$ and $\mathbb EU\mathbb EV=\int_0^\infty\int_0^\infty\mathbb P(U>s)\mathbb P(V>t)\,ds\,dt$. Both integrands have finite integrals, so their difference represents the covariance and the integral triangle inequality applies. The absolute threshold-indicator covariance is bounded by $a$, by $\mathbb P(U>s)$, and by $\mathbb P(V>t)$, since the joint probability and the product probability both lie between zero and either marginal probability. [F2, F3, F4, F5, given]

1.3 Put $T_U(s)=\mathbb P(U>s)$ and $T_V(t)=\mathbb P(V>t)$. By [F5] and step 1.1,
$$\int_0^\infty\int_0^\infty\min\{a,T_U(s),T_V(t)\}\,ds\,dt=\int_0^a Q_U(u)Q_V(u)\,du.$$
Indeed the minimum is $\int_0^a\mathbf1_{\{u<T_U(s)\}}\mathbf1_{\{u<T_V(t)\}}\,du$, and each inner threshold set has length its quantile. The right-hand side is finite by Cauchy–Schwarz on $(0,1)$ and the squared-quantile identity in step 1.1; this particular integral Cauchy–Schwarz inequality follows by integrating $(Q_U-cQ_V)^2\ge0$ and minimizing the resulting quadratic, with the zero-norm case immediate. Step 1.2 therefore proves the covariance bound with constant one for nonnegative $U,V$. [F5, step 1.1, step 1.2, algebra]

2.1 For real $U,V$, expand $\operatorname{Cov}(U^+-U^-,V^+-V^-)$ into four terms. Each nonnegative part has a tail quantile at most the corresponding absolute quantile, because its tail probabilities are smaller. The result of step 1.3 bounds each term by $\int_0^aQ_UQ_V$; the triangle inequality gives the asserted factor four. If $|U|\le A$ and $|V|\le B$, their absolute quantiles are bounded by $A,B$, so the bound becomes $4ABa$, including $a=0$ or either zero bound. [F2, step 1.3, algebra]

2.2 For complex $U,V$, expand $\mathbb E(UV)-\mathbb EU\mathbb EV$ into the four real bilinear covariance terms of their real and imaginary parts. Each real part is bounded in absolute value by $A$ or $B$, so step 2.1 and the complex triangle inequality give $16ABa$. Finally, for observations separated by $n$, both collection sigma-algebras are sub-sigma-algebras of the past and future fields appearing in [F1]; their event supremum is therefore at most $\alpha_Y(n)$. All assertions follow. [F1, step 2.1, algebra] ∎
