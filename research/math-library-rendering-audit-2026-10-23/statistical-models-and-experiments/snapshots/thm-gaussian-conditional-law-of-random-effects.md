---
id: thm-gaussian-conditional-law-of-random-effects
kind: theorem
title: "Conditional Gaussian law of random effects"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-gaussian-linear-mixed-model
  - def-linear-mixed-model
  - def-multivariate-normal-law
  - lem-marginal-covariance-of-linear-mixed-model
  - def-moments-variance-and-covariance
  - lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent
  - def-conditional-expectation-given-a-sigma-algebra
  - def-independent-random-elements
  - thm-covariance-bilinearity-and-symmetry
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
  - cor-cauchy-schwarz-inequality-for-l-two
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
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 11–12"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.3 and Appendix D"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

Assume AC and the Gaussian branch of the finite-dimensional mixed model. Let $V=ZGZ^T+R$ be positive definite. With conditional expectation taken componentwise given $\sigma(Y)$, and conditional covariance defined entrywise by conditional expectations of centered products, one has
$$\mathbb E[b\mid Y]=GZ^TV^{-1}(Y-X\beta),\qquad \operatorname{Cov}(b\mid Y)=G-GZ^TV^{-1}ZG.$$
The latent covariance $G$ may be singular.

## Facts & Assumptions

**Given:** The Gaussian mixed model, AC, and $V\succ0$.

[F1] $Y=X\beta+Zb+\varepsilon$, with centered independent $b,\varepsilon$ and covariance matrices $G,R$; these are finite-second-moment covariances. [[def-linear-mixed-model]], [[def-moments-variance-and-covariance]].

[F2] The marginal covariance is $V=ZGZ^T+R$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F3] Under AC, $(b,\varepsilon)$ is jointly multivariate normal with covariance $\operatorname{diag}(G,R)$. [[def-gaussian-linear-mixed-model]], [[def-multivariate-normal-law]].

[F4] Jointly Gaussian coordinate blocks with zero cross-covariance are independent, including when either covariance is singular. [[lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent]].

[F5] Independence of random elements means independence of their generated sigma-algebras. [[def-independent-random-elements]].

[F6] A conditional-expectation version is characterized by its integrals on every event in the conditioning sigma-algebra. [[def-conditional-expectation-given-a-sigma-algebra]].

[F7] Measurable functions of independent random elements remain independent, and integrable products of independent variables factor. [[lem-measurable-functions-preserve-independence]], [[thm-factorization-of-expectations-for-independent-variables]].

[F8] Products of square-integrable variables are integrable by Cauchy–Schwarz. [[cor-cauchy-schwarz-inequality-for-l-two]].

[F9] Covariance is bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F10] Expectation is linear on finite sums of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F11] Finite-dimensional linear maps are continuous, and continuous maps between Euclidean spaces have Borel preimages of Borel sets. [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[thm-continuous-preimages-of-borel-sets-are-borel]].

[A1] AC holds, $V$ is symmetric positive definite, and all variables have the finite second moments stated in [F1]. [[def-axiom-of-choice]].

## Proof

**Given:** The Gaussian branch with $V\succ0$ and AC.

1.1 Put $Y_c=Y-X\beta$. Linearity [F10] and [F1] give $\mathbb E Y=X\beta$, so centering by this deterministic vector leaves covariance unchanged; [F2] gives $\operatorname{Cov}(Y_c)=V$. Coordinatewise independence of $b$ and $\varepsilon$ gives $\operatorname{Cov}(b,\varepsilon)=0$ by [F5] and [F7], so bilinearity [F9] gives $\operatorname{Cov}(b,Y_c)=\operatorname{Cov}(b,Zb)=GZ^T$. Since $V$ is invertible by [A1], set $H=GZ^TV^{-1}$ and $U=b-HY_c$. Bilinearity yields $\operatorname{Cov}(U,Y_c)=GZ^T-HV=0$, and expectation linearity [F10] gives $\mathbb E U=0$. [A1, F1, F2, F5, F7, F9, F10, algebra]

2.1 The vectors $U$ and $Y_c$ are Borel random vectors by [F11]. For any coefficient vectors $s,t$, the scalar $s^TU+t^TY_c$ is a linear combination of the coordinates of $(b,\varepsilon)$, so it is normal by the projection definition in [F3]. Thus $(U,Y_c)$ is jointly multivariate normal. Its covariance is block diagonal by step 1.1, so [F4] implies that $U$ and $Y_c$ are independent. [A1, F3, F4, F11, step 1.1]

3.1 By step 2.1 and [F5], $U$ and $Y_c$ generate independent sigma-algebras. For every event $E\in\sigma(Y_c)$, [F7] applied to $U_k$ and $1_E$ gives $\mathbb E[U_k1_E]=\mathbb E[U_k]\mathbb P(E)=0$. Since $HY_c$ is square-integrable and $\sigma(Y_c)$-measurable, [F10] gives $\mathbb E[b_k1_E]=\mathbb E[(HY_c)_k1_E]$ for every such event; [F6] identifies $HY_c$ as a version of $\mathbb E[b\mid Y_c]$. Finally, $\sigma(Y_c)=\sigma(Y)$, so the stated conditional-mean formula follows. [A1, F5, F6, F7, F10, step 1.1, step 2.1]

4.1 For each coordinate pair $k,\ell$, $U_kU_\ell$ is integrable by [F8]. As a measurable function of $U$, it is independent of $Y_c$ by [F7] and step 2.1. For every $E\in\sigma(Y_c)$, factorization gives $\mathbb E[U_kU_\ell1_E]=\mathbb E[U_kU_\ell]\mathbb P(E)$, so [F6] yields $\mathbb E[U_kU_\ell\mid Y_c]=\mathbb E[U_kU_\ell]$. Together with the conditional mean from step 3.1, step 1.1, and $\sigma(Y_c)=\sigma(Y)$, the defined entrywise conditional covariance of $b=HY_c+U$ is $\operatorname{Cov}(U)$. [F6, F7, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 Expanding $\operatorname{Cov}(U)=\operatorname{Cov}(b-HY_c)$ by [F9] and [F1]–[F2] yields $\operatorname{Cov}(U)=G-GZ^TV^{-1}ZG-GZ^TV^{-1}ZG+GZ^TV^{-1}VV^{-1}ZG =G-GZ^TV^{-1}ZG.$ Together with steps 3.1–4.1 this proves both formulas. No inverse of $G$ is used, so singular $G$ is allowed. [F1, F2, F9, step 1.1, step 3.1, step 4.1, algebra] ∎