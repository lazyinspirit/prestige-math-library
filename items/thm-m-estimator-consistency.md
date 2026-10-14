---
id: thm-m-estimator-consistency
kind: theorem
title: "Consistency of M-estimators under a uniform law"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps: [def-consistency-in-probability, def-m-estimator, def-op-and-little-op-stochastic-bounds]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15, Theorem and proof, PDF pp. 7–8"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Aad W. van der Vaart, Semiparametric Statistics, Lecture 5 §5.3, Theorem 5.8 and proof, PDF p. 54"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Yen-Chi Chen, UW STAT 581, Chapter 3, lines 100–109"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
---

## Statement

Let $(\Theta,d)$ be a metric space, let $X_1,\ldots,X_n$ be IID with law $P$, and let $m_\theta$ be a jointly measurable, $P$-integrable real criterion for every $\theta\in\Theta$. Write $M_n(\theta)=P_nm_\theta$ and $M(\theta)=Pm_\theta$. Fix $\theta_0\in\Theta$. Assume the displayed suprema and estimator evaluations below are measurable and finite where used. In the maximization case, suppose

1. $U_n=\sup_{\theta\in\Theta}|M_n(\theta)-M(\theta)|=o_P(1)$;

2. for every $\varepsilon>0$, $\gamma_\varepsilon=M(\theta_0)-\sup\{M(\theta):d(\theta,\theta_0)\ge\varepsilon\}>0$, with $\sup\varnothing=-\infty$;

3. the measurable estimator $\hat\theta_n$ satisfies $M_n(\hat\theta_n)\ge M_n(\theta_0)-\rho_n$ for a nonnegative $\rho_n=o_P(1)$.

Then $\hat\theta_n$ is consistent in probability for $\theta_0$, meaning $P^{\otimes n}\{d(\hat\theta_n,\theta_0)>\varepsilon\}\to0$ for every $\varepsilon>0$ ([[def-consistency-in-probability]]). The same conclusion holds for a minimizing estimator if, for every $\varepsilon>0$, $\inf\{M(\theta):d(\theta,\theta_0)\ge\varepsilon\}-M(\theta_0)>0$ and $M_n(\hat\theta_n)\le M_n(\theta_0)+\sigma_n$ for a nonnegative measurable $\sigma_n=o_P(1)$. The relative criterion-gap premise in the maximizing case is implied by the global exact or $o_P(1)$-approximate M-estimator definition, as proved in the final proof step.

The uniform-convergence premise is an explicit hypothesis. This theorem does not replace it with pointwise convergence or a pointwise law of large numbers.

## Facts & Assumptions

**Given:** The IID sampling law, metric parameter space, measurable criterion and estimator, and the three displayed maximization hypotheses; also [A6] when invoking the global-M-estimator specialization.

[F1] [[def-m-estimator]]: An M-estimator is a data-measurable exact or $o_P(1)$-approximate maximizer or minimizer of the empirical criterion $P_nm_\theta$.

[F2] [[def-op-and-little-op-stochastic-bounds]]: $o_P(1)$ for a real random variable means convergence in probability to zero; for finite-dimensional vectors it means the norm exceeds each fixed positive threshold with probability tending to zero.

[F3] [[def-consistency-in-probability]]: At a fixed target, consistency means that the probability of every fixed positive metric error tends to zero.

[A1] The parameter space $(\Theta,d)$ is a metric space, the data are IID with law $P$, each $m_\theta$ is integrable, and all displayed criterion evaluations and suprema are measurable.

[A2] The uniform error $U_n$ is $o_P(1)$.

[A3] For every $\varepsilon>0$, the population criterion has the stated positive separation gap $\gamma_\varepsilon$.

[A4] The empirical maximization error $\rho_n$ is nonnegative and $o_P(1)$, and $M_n(\hat\theta_n)\ge M_n(\theta_0)-\rho_n$.

[A5] For the minimizing branch, the population minimum has the stated positive separation gap and the nonnegative measurable minimization error $\sigma_n$ is $o_P(1)$ with $M_n(\hat\theta_n)\le M_n(\theta_0)+\sigma_n$.

[A6] For the global M-estimator specialization, the nonnegative empirical gap $\tau_n=\sup_{\theta\in\Theta}M_n(\theta)-M_n(\hat\theta_n)$ is finite and $o_P(1)$; exact maximizers have $\tau_n=0$.

## Proof

1.1 Fix $\varepsilon>0$. If $\{\theta:d(\theta,\theta_0)\ge\varepsilon\}$ is empty, the corresponding metric-error event is empty and its probability is zero for every $n$. Otherwise write $\gamma=\gamma_\varepsilon$, which is finite and positive because the nonempty set contains a point with finite population criterion and [A3] bounds its supremum strictly below the finite $M(\theta_0)$. On the event $d(\hat\theta_n,\theta_0)\ge\varepsilon$, separation gives $M(\hat\theta_n)\le M(\theta_0)-\gamma$. The remaining steps treat this nonempty case. [A1, A3, choose]

2.1 On that event, [A2] gives $M_n(\hat\theta_n)\le M(\theta_0)-\gamma+U_n$ and $M_n(\theta_0)\ge M(\theta_0)-U_n$. The approximate-maximization inequality [A4] also gives $M_n(\hat\theta_n)\ge M_n(\theta_0)-\rho_n$. Combining them yields $\gamma\le2U_n+\rho_n$. [A2, A3, A4, step 1.1, algebra]

3.1 Since $U_n=o_P(1)$ and $\rho_n=o_P(1)$, the probability of $2U_n+\rho_n\ge\gamma$ tends to zero. Step 2.1 therefore gives $P^{\otimes n}\{d(\hat\theta_n,\theta_0)\ge\varepsilon\}\to0$, which implies the strict-error probability in [F3] tends to zero. Thus $\hat\theta_n$ is consistent. [F2, F3, A2, A4, step 2.1, given]

4.1 For the minimizing case, set $\widetilde M_n=-M_n$ and $\widetilde M=-M$. By [A5], the separated-minimum condition becomes separated maximization of $\widetilde M$, and $\widetilde M_n(\hat\theta_n)\ge\widetilde M_n(\theta_0)-\sigma_n$. By [A2], $\sup_\theta|\widetilde M_n(\theta)-\widetilde M(\theta)|=U_n=o_P(1)$. Thus the maximizing hypotheses in steps 1.1–3.1 hold for the transformed criterion, proving consistency in the minimizing case as well. [A1, A2, A5, step 1.1, step 2.1, step 3.1, algebra]

5.1 For an exact or approximate global M-estimator, [F1] and [A6] give $M_n(\hat\theta_n)\ge\sup_{\theta\in\Theta}M_n(\theta)-\tau_n$. Since $M_n(\theta_0)\le\sup_{\theta\in\Theta}M_n(\theta)$, this implies $M_n(\hat\theta_n)\ge M_n(\theta_0)-\tau_n$, which is the relative maximization condition [A4] with $\rho_n=\tau_n$. Thus the theorem applies. [A4, A6, F1, algebra] ∎
