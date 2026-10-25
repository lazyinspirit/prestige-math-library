---
id: lem-it-cq-typical-projector-dimension
kind: lemma
title: Typical-projector bounds for finite quantum sources and cq ensembles
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - lem-finite-alphabet-iid-information-aep
  - def-it-von-neumann-entropy
  - def-it-classical-quantum-state-and-holevo-information
  - def-qc-density-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-operator-characterisations
  - thm-chebyshev-inequality
  - def-variance-and-covariance
  - thm-natural-logarithm-laws
  - prop-trace-is-linear
  - lem-probability-measure-basic-identities
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 15"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §5.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

All logarithms are natural. First, for every density operator $\rho$ on a nonzero finite-dimensional space and every $\delta>0$, there are spectral projectors $\Pi_n$ for $\rho^{\otimes n}$ such that, as $n\to\infty$,
$$\operatorname{tr}(\Pi_n\rho^{\otimes n})\to1,\qquad \operatorname{rank}\Pi_n\le e^{n(S(\rho)+\delta)},\qquad \Pi_n\rho^{\otimes n}\Pi_n\preceq e^{-n(S(\rho)-\delta)}\Pi_n.$$

Second, let $\mathcal X$ be a finite nonempty set, let $(p_x)_{x\in\mathcal X}$ be a probability vector, and let $\sigma_x$ be density operators on a nonzero finite-dimensional output space. Put $\bar\sigma=\sum_xp_x\sigma_x$ and $H(B|X)=\sum_{x:p_x>0}p_xS(\sigma_x)$. For every $\delta>0$, there are sets $T_n\subseteq\mathcal X^n$ with $p^{\otimes n}(T_n)\to1$, global spectral projectors $\Pi_n$ for $\bar\sigma^{\otimes n}$, and conditional spectral projectors $\Pi_{x^n}$ for $\bigotimes_i\sigma_{x_i}$, such that one sequence $u_n\to0$ satisfies, for every sufficiently large $n$ and every $x^n\in T_n$,
$$\operatorname{tr}(\Pi_n\bar\sigma^{\otimes n})\to1,\quad \operatorname{tr}(\Pi_n\bigotimes_i\sigma_{x_i})\ge1-u_n,\quad \operatorname{tr}(\Pi_{x^n}\bigotimes_i\sigma_{x_i})\ge1-u_n,$$
$$\operatorname{rank}\Pi_n\le e^{n(S(\bar\sigma)+\delta)},\quad \Pi_n\bar\sigma^{\otimes n}\Pi_n\preceq e^{-n(S(\bar\sigma)-\delta)}\Pi_n,$$
$$\operatorname{rank}\Pi_{x^n}\le e^{n(H(B|X)+\delta)},\quad \Pi_{x^n}\left(\bigotimes_i\sigma_{x_i}\right)\Pi_{x^n}\preceq e^{-n(H(B|X)-\delta)}\Pi_{x^n}.$$
Zero eigenvalues are omitted from surprisal sums. No identical-distribution assumption is made for the conditional eigenbasis measurements.

## Facts & Assumptions

**Given:** The finite states, ensemble, and $\delta>0$ from the Statement.

[F1] [[lem-finite-alphabet-iid-information-aep]]: for a finite IID law, the average surprisal converges in probability to its entropy, with an explicit variance-over-$n$ tail bound.

[F2] [[def-it-von-neumann-entropy]]: $S(\rho)=-\sum_{\lambda_j>0}\lambda_j\ln\lambda_j$, with zero terms set to zero and units nats.

[F3] [[def-it-classical-quantum-state-and-holevo-information]]: $\bar\sigma=\sum_xp_x\sigma_x$ is the finite ensemble average state.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: each finite-dimensional density operator has an orthonormal eigenbasis with nonnegative eigenvalues.

[F5] [[thm-non-negative-operator-characterisations]]: a nonnegative operator with zero quadratic form at a vector annihilates that vector.

[F6] [[thm-chebyshev-inequality]] and [[def-variance-and-covariance]]: a finite random variable satisfies $\mathbb P(|Z-\mathbb EZ|\ge t)\le\operatorname{Var}(Z)/t^2$, and variance is the expected squared centered value.

[F7] [[thm-natural-logarithm-laws]]: $\ln(ab)=\ln a+\ln b$ for positive $a,b$.

[F8] [[prop-trace-is-linear]]: trace is linear over finite sums and scalar multiples.

[F9] [[lem-probability-measure-basic-identities]]: the probability of a finite union is at most the sum of its event probabilities.

[F10] [[def-qc-density-operator]]: every $\sigma_x$ and $\bar\sigma$ is nonnegative with trace one.

## Proof




1.1 Diagonalize $\rho=\sum_{j:\lambda_j>0}\lambda_j|j\rangle\langle j|$ by [F4], and sample $J$ with law $\mathbb P(J=j)=\lambda_j$. The surprisal $-\ln\lambda_J$ is a finite-alphabet random variable of mean $S(\rho)$ by [F2]. For a product eigenvector with coordinates $j_1,\ldots,j_n$, its eigenvalue is $\prod_i\lambda_{j_i}$ and its surprisal is $-\ln(\prod_i\lambda_{j_i})=\sum_i-\ln\lambda_{j_i}$ by [F7]. Let $\Pi_n$ project onto product eigenvectors whose total surprisal lies in $[n(S(\rho)-\delta),n(S(\rho)+\delta)]$. The probability of this set tends to one by [F1]. Every selected product eigenvalue is at most $e^{-n(S(\rho)-\delta)}$ and at least $e^{-n(S(\rho)+\delta)}$; the first bound gives the operator inequality, and the second together with total mass at most one gives the rank bound. [F1, F2, F4, F7, given, construct, algebra]

1.2 For an input word $x^n$, let $N_x$ count its occurrences of $x$. Define $T_n$ by $N_x=0$ when $p_x=0$ and $|N_x/n-p_x|\le\kappa$ for every $p_x>0$. The coordinate indicators are independent under $p^{\otimes n}$ and have variance at most $1/4$; [F6]–[F9] give $p^{\otimes n}(T_n^c)\le|\mathcal X|/(4n\kappa^2)\to0$. For each $x$ with $p_x>0$, $\bar\sigma\succeq p_x\sigma_x$ by [F3] and [F10]; a vector in $\ker\bar\sigma$ therefore has zero quadratic form for $\sigma_x$, so [F5] gives $\operatorname{supp}\sigma_x\subseteq\operatorname{supp}\bar\sigma$. The spectral logarithm on the latter positive support is bounded in finite dimension by [F4], making $\mu_x:=\operatorname{tr}(\sigma_x[-\ln\bar\sigma])$ finite for every such $x$. Define this family only for $p_x>0$; the zero-probability symbols never occur in $T_n$. Choose $\kappa>0$ small enough that the empirical averages of each of the two finite families $S(\sigma_x)$ and $\mu_x$, restricted to $p_x>0$, differ from their $p$-averages by at most $\delta/2$ on $T_n$. These choices are possible because both restricted families are finite and their entries are finite. [F3, F4, F5, F6, F8, F9, F10, given, choose]

2.1 For each $x$, diagonalize $\sigma_x$ and, conditional on a fixed $x^n\in T_n$, measure each tensor factor in its chosen eigenbasis. The resulting surprisal variables $Z_i=-\ln\lambda_{J_i|x_i}$ are independent, finite, and uniformly bounded over the finite family of positive eigenvalues. By [F7], the product eigenvalue surprisal is their sum. Their means sum to $\sum_i S(\sigma_{x_i})$, which is within $n\delta/2$ of $nH(B|X)$ by step 1.2. Their sum has variance at most $nL^2$ for a fixed finite bound $L$; independence makes cross-covariances zero. Chebyshev [F6] shows that the probability of leaving the window $[n(H(B|X)-\delta),n(H(B|X)+\delta)]$ tends to zero uniformly over $x^n\in T_n$. Project onto the product eigenvectors whose surprisal lies in this window. Each selected eigenvalue is at most $e^{-n(H(B|X)-\delta)}$ and at least $e^{-n(H(B|X)+\delta)}$, proving conditional acceptance, the operator bound, and the rank bound as in step 1.1. [F2, F4, F6, F7, step 1.1, step 1.2, construct, algebra]

2.2 By [F10], $\bar\sigma$ is a state and $\bar\sigma-p_x\sigma_x=\sum_{z\ne x}p_z\sigma_z\succeq0$. Any $v\in\ker\bar\sigma$ has $\langle\sigma_xv,v\rangle=0$ when $p_x>0$, so [F5] gives $\sigma_xv=0$. Hence $\operatorname{supp}\sigma_x\subseteq\operatorname{supp}\bar\sigma$. On that support, the variable $-\ln\lambda_J$ obtained by measuring $\sigma_x$ in an eigenbasis of $\bar\sigma$ is finite and uniformly bounded over $x$ with $p_x>0$ and positive eigenvalue index. Its mean is $\mu_x$. The $p$-average of these means is $\operatorname{tr}(\bar\sigma[-\ln\bar\sigma])=S(\bar\sigma)$ by [F2], [F3], and [F8]. [F2, F3, F4, F5, F8, F10, step 1.2, algebra]

3.1 For fixed $x^n\in T_n$, measuring the product state $\bigotimes_i\sigma_{x_i}$ in the product eigenbasis of $\bar\sigma^{\otimes n}$ gives independent surprisal variables with means $\mu_{x_i}$ and a common finite bound on their absolute values. By [F7], each product eigenvalue surprisal is the sum of the coordinate surprisals. Their means sum to within $n\delta/2$ of $nS(\bar\sigma)$ by step 1.2, and their sum has variance at most $nL'^2$ for a finite $L'$. Chebyshev [F6] therefore bounds uniformly by a quantity tending to zero the probability of leaving the $\delta$-window around $nS(\bar\sigma)$. The spectral projector of $\bar\sigma^{\otimes n}$ for that window accepts every such conditional product state with probability at least $1-u_n$. Its rank and compressed-operator bounds follow from its eigenvalue window exactly as in step 1.1. [F2, F4, F6, F7, step 1.1, step 1.2, step 2.2, construct, algebra]

4.1 Take $u_n$ to be the maximum of the uniform failure bounds in steps 2.1 and 3.1; both tend to zero, so $u_n\to0$. The global state acceptance follows from step 1.1 applied to $\bar\sigma$; all conditional and operator/rank assertions are those proved in steps 2.1 and 3.1. The constructions use only finite spectra, finite sums, and finite probability spaces, so no choice axiom is invoked. [step 1.1, step 2.1, step 3.1, algebra] ∎
