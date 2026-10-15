---
id: thm-variance-component-identifiability-iff-covariance-map-injective
kind: theorem
title: "Gaussian variance-component identifiability is covariance-map injectivity"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-linear-mixed-model
  - def-gaussian-linear-mixed-model
  - def-parametric-statistical-model
  - def-identifiability-of-an-estimand
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 10–11"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §§2.3.3–2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Assume AC. Let $\Theta$ be a nonempty parameter set and let $\theta\mapsto(G_\theta,R_\theta)$ be a declared covariance-component parameterization of the Gaussian mixed model, with
$$V_\theta=ZG_\theta Z^T+R_\theta$$
positive semidefinite for every $\theta\in\Theta$. Consider the parametric family
$$P_{\beta,\theta}=N_n(X\beta,V_\theta),\qquad (\beta,\theta)\in\mathbb R^p\times\Theta,$$
and the estimand $\psi(\beta,\theta)=\theta$. Then $\psi$ is identifiable if and only if the covariance map $\theta\mapsto V_\theta$ is injective on $\Theta$.

## Facts & Assumptions

**Given:** The parameterized Gaussian model and target in the Statement.

[F1] An estimand is identifiable exactly when equal sampling laws force equal target values. [[def-identifiability-of-an-estimand]].

[F2] Under AC, a multivariate-normal law is determined by its mean and covariance, including in singular cases. [[def-multivariate-normal-law]], [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F3] Variance and covariance are moments of the sampling law, so equal laws with finite second moments have equal covariance matrices. [[def-moments-variance-and-covariance]].

[A1] AC holds, and every covariance parameter value in $\Theta$ yields the stated Gaussian law. [[def-axiom-of-choice]].

## Proof

**Given:** The Gaussian family and target $\psi(\beta,\theta)=\theta$.

1.1 Suppose $\theta\mapsto V_\theta$ is injective. If $P_{\beta,\theta}=P_{\beta',\theta'}$, equality of laws and [F3] give $V_\theta=V_{\theta'}$. Injectivity then gives $\theta=\theta'$, so the target values agree. By [F1], $\psi$ is identifiable. [A1, F1, F3, algebra]

1.2 Conversely, if the covariance map is not injective, choose $\theta\ne\theta'$ with $V_\theta=V_{\theta'}$. For any fixed $\beta$, the two Gaussian laws $N_n(X\beta,V_\theta)$ and $N_n(X\beta,V_{\theta'})$ are equal by [F2], while the target values are different. Thus $\psi$ is not identifiable by [F1]. [A1, F1, F2, choose]

2.1 Steps 1.1 and 1.2 prove both implications. [step 1.1, step 1.2] ∎