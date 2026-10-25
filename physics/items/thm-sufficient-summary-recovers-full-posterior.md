---
id: thm-sufficient-summary-recovers-full-posterior
kind: theorem
title: A sufficient summary preserves the Bayesian posterior
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - def-conditional-law-given-a-random-element
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-measure-kernel-and-probability-kernel
  - def-posterior-evidence-normalizer-and-fiberwise-update
  - def-polish-space
  - def-separable-space
  - def-standard-borel-space
  - def-statistic-and-estimator
  - def-sufficient-statistic
  - lem-prior-and-model-kernel-define-joint-law
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-bayes-formula-for-dominated-kernels
  - thm-monotone-convergence-for-the-integral
  - thm-standard-borel-bayesian-posterior-kernel-exists
justified_by: []
proof_strategy: direct
axiom_use: "AC is used in step 1.1 through thm-standard-borel-bayesian-posterior-kernel-exists to obtain the summary posterior kernel. The common-kernel integration argument and the dominated factorization cancellation use no further choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§1.3.2 and 2.3.1 (printed pp. 14–15 and 33–34)"
      url: https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Paul Fearnhead and Dennis Prangle, Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC"
      url: https://arxiv.org/pdf/1004.1112
---

## Statement

Assume AC. Let $(\Theta,\mathcal T)$, $(\mathsf Y,\mathcal Y)$, and $(\mathsf T,\mathcal C)$ be standard Borel spaces ([[def-standard-borel-space]]), let $\Pi$ be a proper prior, and let $K$ be a sampling probability kernel as in [[def-bayesian-model-as-prior-and-sampling-kernel]]. Let $S:\mathsf Y\to\mathsf T$ be a measurable statistic ([[def-statistic-and-estimator]]) that is sufficient in the common-kernel sense of [[def-sufficient-statistic]]. Write $K_S(\theta,C)=K(\theta,S^{-1}(C))$, let $M$ be the joint prior-predictive law of $(\theta,S(Y))$, and let $J_Y$ and $J_S$ be the data and summary marginals. A posterior kernel $\Pi^S_t$ of $\theta$ given $S(Y)=t$ exists. Then
$$\widehat\Pi_y(A):=\Pi^S_{S(y)}(A)$$
is a data-indexed posterior version for the full observation: for every $A\in\mathcal T$ and $D\in\mathcal Y$,
$$J(\Theta\in A,Y\in D)=\int_D\widehat\Pi_y(A)\,J_Y(dy).$$
Thus full-data posterior information is preserved by a sufficient summary, up to the usual almost-everywhere version convention.

In a dominated branch, suppose $\mu$ and $\nu$ are sigma-finite reference measures for the full data and summary, respectively, and the specified jointly measurable densities satisfy
$$K(\theta,dy)=p_\theta(y)\,\mu(dy),\qquad K_S(\theta,dt)=h_\theta(t)\,\nu(dt),\qquad p_\theta(y)=g(y)h_\theta(S(y))$$
on the specified common versions, with $g:\mathsf Y\to[0,\infty]$ independent of $\theta$. For any $y$ where the factorization holds $\Pi$-almost everywhere, $0<g(y)<\infty$, and
$$0<Z_S(S(y)):=\int_\Theta h_\theta(S(y))\,\Pi(d\theta)<\infty,$$
the explicit full-data and summary posterior updates agree at $y$ by cancellation of $g(y)$. No equality is asserted on zero or infinite evidence fibres.

## Facts & Assumptions

**Given:** The model, proper prior, standard Borel spaces, AC, statistic $S$, common conditional-data kernel from sufficiency, and, in the dominated branch, the stated reference measures and factorized density versions.

[A1] The Axiom of Choice (AC). [[def-axiom-of-choice]]

[F1] Sufficiency means there is one probability kernel $Q(t,D)$, independent of $\theta$, satisfying
$$K(\theta,D\cap S^{-1}(C))=\int_C Q(t,D)\,K_S(\theta,dt)$$
for all $\theta$, data events $D$, and summary events $C$. [[def-sufficient-statistic]]

[F2] A proper prior and a parameter-measurable sampling kernel define a joint probability law; its rectangle law is prior mass integrated against the sampling kernel. [[lem-prior-and-model-kernel-define-joint-law]]

[F3] Under AC, a proper Bayesian model with standard Borel parameter and data spaces has a data-indexed posterior probability kernel satisfying the joint event identity. [[thm-standard-borel-bayesian-posterior-kernel-exists]]

[F4] A data-indexed posterior kernel is a probability kernel whose evaluations satisfy the conditional-law event identities. [[def-bayesian-posterior-as-regular-conditional-law]], [[def-conditional-law-given-a-random-element]]

[F5] Increasing nonnegative simple approximations pass through integrals by monotone convergence. [[thm-monotone-convergence-for-the-integral]]

[F6] On positive finite evidence fibres, the dominated Bayes formula gives the posterior update by normalizing the likelihood against the prior. [[def-posterior-evidence-normalizer-and-fiberwise-update]], [[thm-bayes-formula-for-dominated-kernels]]

[F7] Measurable real functions are closed under the product operation used below. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The summary simulator $K_S(\theta,C)=K(\theta,S^{-1}(C))$ is a probability kernel because $S$ is measurable. Both its parameter space and target are standard Borel, so [A1] and [F3], applied to this summary experiment, give a posterior kernel $\Pi^S_t$ satisfying the joint summary-law identity. Define $\widehat\Pi_y(A)=\Pi^S_{S(y)}(A)$. This is a probability kernel in $y$ by measurability of $S$ and the posterior-kernel property. [given, A1, F3, F4, construct]

2.1 Let $A\in\mathcal T$, $D\in\mathcal Y$, and $C\in\mathcal C$. By [F1], for each $\theta$, $K(\theta,D\cap S^{-1}(C))=\int_C Q(t,D)\,K_S(\theta,dt).$ Integrating over $A$ under $\Pi$ gives the joint event probability on the left. To justify the corresponding right-hand integral, the measurable function $h(t)=1_C(t)Q(t,D)$ takes values in $[0,1]$ by [F1] and [F7]. Its dyadic lower approximations $h_n(t)=2^{-n}\lfloor2^nh(t)\rfloor$ are finite-valued simple functions: their level sets are preimages under $h$ of Borel intervals, and every positive level set is contained in $C$. The nested dyadic grids give $h_n\uparrow h$, with $0\le h-h_n<2^{-n}$. For each such simple function, the rectangle identity for $M$ from [F2] gives $\int_A\int h_n(t)K_S(\theta,dt)\Pi(d\theta)=\int h_n(t)M(A,dt).$ Applying [F5] on both sides as $n\to\infty$ yields $J(\Theta\in A,Y\in D,S(Y)\in C)=\int_C Q(t,D)M(A,dt).$ By the summary posterior identity from step 1.1, $M(A,dt)=\Pi^S_t(A)J_S(dt)$. [F1, F2, F5, F7, step 1.1]

3.1 Set $C=\mathsf T$ in step 2.1 to obtain $J(\Theta\in A,Y\in D)=\int_{\mathsf T}Q(t,D)\Pi^S_t(A)\,J_S(dt).$ Taking $A=\Theta$ in the same identity gives the prior-predictive conditional-data formula $J_Y(D)=\int Q(t,D)\,J_S(dt)$. [F1, F2, step 2.1]

4.1 Let $h(t)=\Pi^S_t(A)$, a measurable function with values in $[0,1]$. For a simple $h=\sum_{j=1}^m c_j1_{C_j}$ with disjoint measurable $C_j$, step 2.1 with $A=\Theta$ gives $\int_D h(S(y))\,J_Y(dy)=\sum_jc_jJ_Y(D\cap S^{-1}(C_j))=\sum_jc_j\int_{C_j}Q(t,D)\,J_S(dt)=\int h(t)Q(t,D)\,J_S(dt).$ For general $h$, use the same dyadic construction $h_n=2^{-n}\lfloor2^nh\rfloor$ as in step 2.1 and apply [F5] on both sides. Hence $\int_D\widehat\Pi_y(A)\,J_Y(dy)=\int Q(t,D)\Pi^S_t(A)\,J_S(dt)=J(\Theta\in A,Y\in D),$ where the last equality is step 3.1. By [F4], $\widehat\Pi$ is a posterior version for the full observation. [F4, F5, F7, step 2.1, step 3.1]

5.1 In the dominated branch, on a specified good fibre $y$ let $Z_S=\int h_\theta(S(y))\,\Pi(d\theta)$. The factorization and $0<g(y)<\infty$ give $Z_Y(y):=\int p_\theta(y)\,\Pi(d\theta)=g(y)Z_S,$ so $Z_Y(y)$ is also positive finite. Applying [F6] to both likelihoods gives, for every $A\in\mathcal T$, $\frac{\int_Ap_\theta(y)\,\Pi(d\theta)}{Z_Y(y)} =\frac{g(y)\int_Ah_\theta(S(y))\,\Pi(d\theta)}{g(y)Z_S} =\frac{\int_Ah_\theta(S(y))\,\Pi(d\theta)}{Z_S}.$ This is the stated cancellation, and no quotient is formed on excluded evidence fibres. [given, F6, algebra] ∎
