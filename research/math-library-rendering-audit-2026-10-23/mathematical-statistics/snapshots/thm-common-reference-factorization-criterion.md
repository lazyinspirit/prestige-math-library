---
id: thm-common-reference-factorization-criterion
kind: theorem
title: "Common-reference factorization criterion for sufficiency"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-sufficient-statistic
  - def-statistic-and-estimator
  - def-standard-borel-space
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-likelihood-ratio-change-of-measure
  - thm-doob-dynkin-lemma
  - thm-standard-borel-spaces-admit-bimeasurable-real-codings
  - def-axiom-of-choice
  - thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Let $(\mathcal X,\mathcal A)$ and $(\mathcal Y,\mathcal B)$ be standard Borel, let $\Theta\ne\varnothing$, and let $T:\mathcal X\to\mathcal Y$ be a statistic. Fix $\theta_0\in\Theta$ and set $P_0=P_{\theta_0}$. Assume $P_\theta\ll P_0$ for every $\theta$. Then $T$ is sufficient if and only if for every $\theta$ the Radon–Nikodym derivative $dP_\theta/dP_0$ has a $\sigma(T)$-measurable version. Equivalently, for each $\theta$ there is a Borel $g_\theta:\mathcal Y\to[0,\infty)$ with $dP_\theta/dP_0=g_\theta(T)$ $P_0$-almost surely. The null exceptional set may depend on $\theta$. The requirement $P_0\in\{P_\theta\}$ is essential; an arbitrary external dominating probability is not covered.

## Facts & Assumptions

**Given:** the standard Borel spaces, $T$, the model, the in-model reference $P_0$, and absolute continuity.

[A1] [[def-axiom-of-choice]]: the Radon–Nikodym theorem is used under AC.

[F1] [[def-sufficient-statistic]]: sufficiency is the existence of one conditional distribution kernel common to all model laws.

[F8] [[def-statistic-and-estimator]]: $T$ is a measurable data map, so its generated sigma-field and inverse images are measurable.

[F2] [[def-measure-kernel-and-probability-kernel]]: kernel evaluations are measurable, and each fixed conditioning value gives a probability measure.

[F3] [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]] and [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]: under the standard Borel hypotheses, a regular conditional distribution given $\sigma(T)$ factors through $T$ to a probability kernel on the target.

[F4] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: an absolutely continuous probability has an RN density, unique almost everywhere, and integration against it recovers the probability.

[F5] [[thm-likelihood-ratio-change-of-measure]]: under absolute continuity, integrating against the RN derivative changes $P_0$ to $P_\theta$.

[F6] [[thm-doob-dynkin-lemma]]: a real $\sigma(T)$-measurable function factors through a Borel function of a real-valued statistic.

[F7] [[thm-standard-borel-spaces-admit-bimeasurable-real-codings]]: a standard Borel target is Borel-isomorphic to a Borel subset of $\mathbb R$, so the Doob–Dynkin factor extends by a fixed value off that subset.

[F9] [[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]] and [[thm-monotone-convergence-for-the-integral]]: identities for indicators under a regular conditional distribution extend to nonnegative measurable weights by increasing simple approximations and monotone convergence.


## Proof

1.1 Suppose $T$ is sufficient, and let $K$ be its common kernel. Fix $\theta$. Disintegrating $P_\theta$ and $P_0$ with this same kernel gives $P_\theta(A)=\int K(y,A)P_\theta^T(dy)$ and $P_0(A)=\int K(y,A)P_0^T(dy)$ for every $A$. Since $P_\theta\ll P_0$, also $P_\theta^T\ll P_0^T$; let $r_\theta=dP_\theta^T/dP_0^T$. Change of measure [F5] gives $P_\theta(A)=\int K(y,A)r_\theta(y)P_0^T(dy)$. The disintegration identity under $P_0$ extends to the nonnegative weight $r_\theta$ by [F9], making this $\int_A r_\theta(T)\,dP_0$. Uniqueness in [F4] gives $dP_\theta/dP_0=r_\theta(T)$ $P_0$-almost surely. [A1, F1, F4, F5, F8, F9, given, construct]

2.1 This proves that the derivative has a $\sigma(T)$-measurable version. Modify that version on the $\sigma(T)$-measurable null set where it is negative or infinite to obtain a finite nonnegative version. By [F6, F7] this version has a Borel factor $g_\theta(T)$ on the standard Borel target; reset target values where $g_\theta$ is negative or infinite to zero, which preserves the identity $P_0$-almost surely. [F6, F7, step 1.1, given]

3.1 Conversely suppose $dP_\theta/dP_0=g_\theta(T)$ $P_0$-almost surely for every $\theta$. By [F3], a regular conditional distribution under $P_0$ factors through $T$ to a kernel $K_0$ on $\mathcal Y$. Change of measure [F5] shows $P_\theta^T(C)=\int_Cg_\theta(y)P_0^T(dy)$. For every $A$ and Borel $C$, $P_\theta(A\cap T^{-1}C)=\int 1_A1_C(T)g_\theta(T)dP_0=\int_Cg_\theta(y)K_0(y,A)P_0^T(dy)=\int_CK_0(y,A)P_\theta^T(dy)$. The weighted conditional identity follows from [F9]. Thus the same $K_0$ is a conditional law for every parameter, and [F1] gives sufficiency. [F1, F2, F3, F5, F8, F9, given, algebra] ∎
