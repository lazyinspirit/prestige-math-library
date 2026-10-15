---
id: lem-two-sided-stationary-extension-preserves-rho-mixing
kind: lemma
title: Two-sided stationary extension preserves maximal-correlation bounds
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-ergodic-measure-preserving-system
  - cor-cauchy-schwarz-for-random-variables
  - thm-dynkin-pi-lambda
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mikhail Gordin and Magda Peligrad, On the functional central limit theorem via martingale approximation, stationary realizations in §1 and rho coefficients in §3.3"
      url: "https://arxiv.org/pdf/0910.3448"
axiom_use: "AC is used through the standard-Borel Kolmogorov extension supplier; no stronger principle is used."
---

## Statement

Assume AC. Let $(Y_k)_{k\ge0}$ be a strictly stationary real sequence, with one-sided coefficients $\rho_Y(n)$ from [[def-mixing-coefficients-for-stationary-markov-chain]]. There is a shift-invariant probability $Q$ on the coordinate sigma-algebra of $\mathbb R^{\mathbb Z}$ such that its coordinate process $(X_k)_{k\in\mathbb Z}$ restricted to $k\ge0$ has the law of $Y$. The invertible left shift $T(x)_i=x_{i+1}$ preserves $Q$. Put $\mathcal F_k=\sigma(X_i:i\le k)$ and $\mathcal G_k=\sigma(X_i:i\ge k)$. For every integer $k$, every $n\ge1$, and real square-integrable $U$ measurable in $\mathcal F_k$ and $V$ measurable in $\mathcal G_{k+n}$,
$$|\operatorname{Cov}_Q(U,V)|\le\rho_Y(n)\sqrt{\operatorname{Var}_Q(U)\operatorname{Var}_Q(V)}.$$
If $\rho_Y(n)\to0$, then $T$ is ergodic: every event $A$ with $Q(A\mathbin\triangle T^{-1}A)=0$ has $Q(A)\in\{0,1\}$.

## Facts & Assumptions

**Given:** AC and the strictly stationary real sequence $Y$ in the statement.

[A1] AC is the inherited choice assumption. ([[def-axiom-of-choice]])

[F1] Consistent finite-dimensional probability laws on standard-Borel coordinate spaces have a unique probability extension on the coordinate sigma-algebra, assuming AC. ([[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]])

[F2] Strict stationarity and $\rho_Y(n)$ use the finite nonnegative past and the entire future at each split. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F3] Square-integrable products satisfy $\mathbb E|UV|\le\|U\|_2\|V\|_2$. ([[cor-cauchy-schwarz-for-random-variables]])

[F4] Simple functions are dense in $L^2$ on a probability space. ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]])

[F5] Two finite measures agreeing on a generating pi-system agree on its generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F6] Ergodicity requires invariant measurable events to have probability zero or one. ([[def-ergodic-measure-preserving-system]])

## Proof

1.1 For finite $F\subset\mathbb Z$, choose an integer $m\ge0$ with $F+m\subset\mathbb N_0$ and prescribe the law of $(X_i)_{i\in F}$ to be that of $(Y_{i+m})_{i\in F}$. If $m'$ is another permissible shift, stationarity compares the smaller shift with the larger one, so the law is independent of the choice. Restrictions are consistent because finitely many coordinate sets can be translated by one common shift. Every coordinate space is the standard Borel space $\mathbb R$, so [F1] gives $Q$. Its nonnegative restriction equals the process law of $Y$ on cylinders and hence everywhere by [F5]. Translating finite sets does not change their prescribed laws, so $Q\circ T^{-1}=Q$ by the same uniqueness argument. Both $T$ and its inverse are measurable because their coordinate maps are coordinates. [A1, F1, F2, F5, construct]

1.2 For any subset $I\subset\mathbb Z$, let $\mathcal A_I$ be the algebra of events depending on finitely many coordinates in $I$. Every event in $\sigma(X_i:i\in I)$ can be approximated in symmetric-difference probability by $\mathcal A_I$. Indeed, the approximable events are closed under complements. For a countable union, first replace that union by a finite subunion with arbitrarily small lost probability, using continuity from below, then approximate its finitely many constituent events and apply the union bound. Thus the approximable events form a sigma-algebra containing $\mathcal A_I$. By [F4], approximate an $L^2$ variable by simple functions, and approximate the finitely many indicator events of each simple function by $\mathcal A_I$ events. For an indicator the squared $L^2$ error is its symmetric-difference probability; finite summation gives the required arbitrarily small $L^2$ error for a simple function. Consequently every such variable has finite-coordinate $L^2$ approximants. [F4, construct]

2.1 First suppose $U$ and $V$ depend on finitely many coordinates in $(-\infty,k]$ and $[k+n,\infty)$, respectively. Translate all coordinates by one integer $m\ge0$ so that the used past coordinates and the split $k+m$ are nonnegative. Their joint distribution is an original-process distribution by step 1.1. The translated variables are measurable in $\sigma(Y_0,\ldots,Y_{k+m})$ and $\sigma(Y_{k+m+n},Y_{k+m+n+1},\ldots)$, so [F2] proves the asserted covariance inequality when both variances are positive. A variable of variance zero equals its mean almost surely and has zero covariance, so the inequality holds then too. For arbitrary $U,V$, take step 1.2's finite-coordinate $L^2$ approximants. Their means, second moments, and covariances converge by [F3], so passage to the limit proves the same inequality. [F2, F3, step 1.1, step 1.2]

3.1 Assume $\rho_Y(n)\to0$, and let $A$ satisfy $Q(A\mathbin\triangle T^{-1}A)=0$, with $p=Q(A)$. Given $\varepsilon>0$, step 1.2 supplies a finite-coordinate event $C$ with $Q(A\mathbin\triangle C)<\varepsilon$; enlarge its coordinate support to $[-m,m]$ for some $m\ge0$. For $n>2m$, $C$ is in $\mathcal F_m$ and $T^{-n}C$ is in $\mathcal G_{n-m}$. Step 2.1 applied to their indicators gives $|Q(C\cap T^{-n}C)-Q(C)^2|\le\rho_Y(n-2m)/4$, since every indicator variance is at most $1/4$. Invariance modulo null sets and measure preservation imply $Q(A\cap T^{-n}A)=p$. The intersection changes in probability by at most $2\varepsilon$ upon replacing both copies of $A$ by copies of $C$, and $|p^2-Q(C)^2|\le2\varepsilon$. Hence $|p-p^2|\le4\varepsilon+\rho_Y(n-2m)/4$. Let $n\to\infty$ and then $\varepsilon\downarrow0$ to obtain $p=p^2$. Therefore $p\in\{0,1\}$, proving [F6] and the stronger mod-null formulation claimed. [F6, step 1.1, step 1.2, step 2.1, given] ∎
