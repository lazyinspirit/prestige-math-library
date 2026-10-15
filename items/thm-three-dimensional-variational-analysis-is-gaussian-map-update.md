---
id: thm-three-dimensional-variational-analysis-is-gaussian-map-update
kind: theorem
title: The 3DVAR quadratic has the Gaussian MAP and Kalman analysis update
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-three-dimensional-variational-assimilation
  - def-data-assimilation-problem
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-bayes-formula-for-dominated-kernels
  - thm-least-squares-solutions-and-normal-equation
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - alg-kalman-filter
  - thm-kalman-filter-is-exact-posterior
proof_strategy: direct
axiom_use: Assume AC as in the Gaussian-law and exact-filter suppliers; the local matrix minimization uses no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.1"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapters 3 and 6"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Statement

Let $d,p\ge1$, $m^f\in\mathbb R^d$, $y\in\mathbb R^p$, $H\in\mathbb R^{p\times d}$, and symmetric positive-definite $B\in\mathbb R^{d\times d}$ and $\Gamma\in\mathbb R^{p\times p}$. Put $S=HBH^T+\Gamma$, $K=BH^TS^{-1}$, and
$$J(u)=\tfrac12(u-m^f)^TB^{-1}(u-m^f)+\tfrac12(y-Hu)^T\Gamma^{-1}(y-Hu).$$
The 3DVAR analysis $m^a=m^f+K(y-Hm^f)$ from [[alg-three-dimensional-variational-assimilation]] is the unique global minimizer of $J$. If $m^f,B$ are the mean and covariance of a Gaussian forecast and the observation model is $Y=HX+r$ with independent $r\sim N_p(0,\Gamma)$, then $m^a$ is the unique maximum-a-posteriori point of the posterior density. It is also the mean update of the exact one-step Kalman filter with identity state transition, zero process covariance, and datum $y$.

## Facts & Assumptions

**Given:** AC and the finite-dimensional objects and positive-definite hypotheses in the Statement.

[A1] AC is assumed for the multivariate-normal laws and exact conditional-law results. [[def-axiom-of-choice]]

[F1] [[alg-three-dimensional-variational-assimilation]] defines $J$, $S$, $K$, and returns $m^a=m^f+K(y-Hm^f)$.

[F2] A vector minimizes a finite-dimensional least-squares norm exactly when it satisfies the normal equation; all minimizers differ by a vector in the kernel of the linear map. [[thm-least-squares-solutions-and-normal-equation]]

[F3] A real symmetric positive-definite matrix has an invertible Cholesky factor. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]

[F4] A positive-definite multivariate normal law has Lebesgue density proportional to $\exp[-\tfrac12(x-m)^T\Sigma^{-1}(x-m)]$. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] For a dominated observation kernel with positive finite marginal density, Bayes' formula gives the posterior density proportional to prior density times likelihood. [[thm-bayes-formula-for-dominated-kernels]]

[F6] The one-step Kalman procedure uses the innovation $S=HBH^T+\Gamma$ and updates the mean by $m^f+K(y-Hm^f)$. [[alg-kalman-filter]]

[F7] Under AC and an admissible linear-Gaussian model, that recursion is an exact conditional Gaussian law. [[thm-kalman-filter-is-exact-posterior]]

## Proof

**Given:** AC, $B\succ0$, $\Gamma\succ0$, the matrix $H$, and the vectors $m^f,y$.

1.1 For $z\ne0$, $z^TSz=(H^Tz)^TB(H^Tz)+z^T\Gamma z>0$, so $S\succ0$ and $K$ is defined. The inverses $B^{-1}$ and $\Gamma^{-1}$ are positive definite: for nonzero $v$, $v^TB^{-1}v=(B^{-1}v)^TB(B^{-1}v)>0$, and the same argument applies to $\Gamma$. By [F3], choose Cholesky factors $B^{-1}=L_BL_B^T$ and $\Gamma^{-1}=L_\Gamma L_\Gamma^T$. Define $T u=(L_B^Tu,L_\Gamma^THu)$ and $b=(L_B^Tm^f,L_\Gamma^Ty)$. Then $2J(u)=\|Tu-b\|^2$. The first block $L_B^T$ is invertible, hence $\ker T=\{0\}$. [F1, F3, given, construct, algebra]

2.1 The normal equation in [F2] is $B^{-1}(u-m^f)+H^T\Gamma^{-1}(Hu-y)=0$. Let $\delta=y-Hm^f$ and $u=m^f+BH^TS^{-1}\delta=m^a$. Then $B^{-1}(u-m^f)=H^TS^{-1}\delta$, while $y-Hu=(I-HBH^TS^{-1})\delta=\Gamma S^{-1}\delta$. Substitution gives the normal equation. By [F2] this $u$ minimizes $J$, and because $\ker T=\{0\}$ it is the unique minimizer. [F1, F2, step 1.1, algebra]

3.1 Under the Gaussian prior and independent Gaussian observation-error model, [F4] gives a prior density proportional to $\exp[-\tfrac12(u-m^f)^TB^{-1}(u-m^f)]$ and a jointly continuous likelihood density proportional to $\exp[-\tfrac12(y-Hu)^T\Gamma^{-1}(y-Hu)]$. The likelihood is strictly positive and bounded above by its finite Gaussian normalizing constant; hence its prior integral is finite and positive. Bayes' formula [F5] makes the posterior density proportional to $e^{-J(u)}$; its unique maximum is therefore the unique minimizer from step 2.1. [A1, F4, F5, given, step 2.1, algebra]

4.1 Apply [F6] to the one-step model with forecast covariance $B$, identity transition, zero process covariance, and observation covariance $\Gamma$. Its innovation covariance is $S\succ0$ by step 1.1, so the output mean is $m^f+K(y-Hm^f)=m^a$. By [F7] this is the mean of the exact conditional Gaussian law. [A1, F6, F7, step 1.1, given, step 2.1] ∎
