---
id: thm-kriging-systems-and-l2-optimality
kind: theorem
title: "Kriging systems and mean-square optimality"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-simple-ordinary-and-universal-kriging
  - thm-normal-equations-for-best-affine-l2-prediction
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Sections 3.1–3.2"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Dennis Sun, Stats 253 Lecture 5: Prediction and Kriging (Stanford University)"
      url: "https://web.stanford.edu/class/stats253/lectures/lect5.pdf"
---

## Statement

Use the notation of [[def-simple-ordinary-and-universal-kriging]]. For
simple kriging, if $\Sigma$ is positive definite, the unique mean-square
minimizing weight vector is $\lambda_{\mathrm{SK}}=\Sigma^{-1}c_0$, and its
mean-square prediction error is
$$v_0-c_0^\top\Sigma^{-1}c_0.$$

For an unknown trend with design matrix $P$ and target vector $p_0$,
$\lambda^\top Z$ is unbiased for every $\beta\in\mathbb R^q$ if and only if
$P^\top\lambda=p_0$. Suppose $\Sigma$ is positive definite and $P$ has full
column rank (that is, $Py=0$ implies $y=0$ for $y\in\mathbb R^q$). Then the
unique unbiased mean-square minimizing weights $\lambda\in\mathbb R^n$ and Lagrange
multiplier $\nu\in\mathbb R^q$ solve
$$\begin{pmatrix}\Sigma&P\\P^\top&0\end{pmatrix}\begin{pmatrix}\lambda\\\nu\end{pmatrix}=\begin{pmatrix}c_0\\p_0\end{pmatrix}.$$
The augmented matrix is invertible under these hypotheses. The resulting
mean-square prediction error is
$$v_0-\lambda^\top c_0-\nu^\top p_0.$$
For ordinary kriging, take $P=\mathbf 1_n$ and $p_0=1$, giving
$$\begin{pmatrix}\Sigma&\mathbf 1_n\\\mathbf 1_n^\top&0\end{pmatrix}\begin{pmatrix}\lambda\\\nu\end{pmatrix}=\begin{pmatrix}c_0\\1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** A square-integrable target $Y$ and observation vector $Z$ from the definition, with covariance matrix $\Sigma$, covariance vector $c_0$, and target variance $v_0$.

[F1] [[def-simple-ordinary-and-universal-kriging]]: simple prediction centers $Z$ at its known mean and the target at its known mean.

[F2] [[def-simple-ordinary-and-universal-kriging]]: in a finite trend model, unbiasedness for every $\beta$ is constrained by $P^\top\lambda=p_0$.

[F3] [[thm-normal-equations-for-best-affine-l2-prediction]]: the best affine $L^2$ predictor exists as a unique almost-sure class, and its centered coefficients satisfy the covariance normal equations.

[F4] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: variance is the expectation of a centered square, and covariance is symmetric and bilinear on finite linear combinations of square-integrable variables.

## Proof

**Given:** The finite second-moment model, $\Sigma\succ0$, and, for the unknown-trend case, full column rank of $P$.

1.1 For a centered error vector $\varepsilon=Z-\mathbb E Z$ and centered target error $\varepsilon_0=Y-\mathbb E Y$, every unbiased linear predictor has error $\varepsilon_0-\lambda^\top\varepsilon$. Expanding its squared expectation by [F4] gives the common objective $Q(\lambda)=v_0-2\lambda^\top c_0+\lambda^\top\Sigma\lambda$. The centered predictor in the simple case has this same error expression. [given, F1, F4, algebra]

1.2 In the trend model, $\mathbb E[\lambda^\top Z-Y]=(P^\top\lambda-p_0)^\top\beta$. This expression is zero for every $\beta\in\mathbb R^q$ if $P^\top\lambda=p_0$. Conversely, if it is zero for every $\beta$, taking $\beta$ successively to be each coordinate vector shows every coordinate of $P^\top\lambda-p_0$ is zero. Thus the unbiased weights are exactly the affine constraint $P^\top\lambda=p_0$. [F2, algebra]

1.3 Let $M=\begin{pmatrix}\Sigma&P\\P^\top&0\end{pmatrix}$ and suppose $M\binom{x}{y}=0$. The lower block gives $P^\top x=0$. Taking the inner product of $x$ with the upper block gives $x^\top\Sigma x+x^\top Py=0$; the second term is $(P^\top x)^\top y=0$, so positive definiteness gives $x=0$. The upper block now gives $Py=0$, and full column rank gives $y=0$. Hence the finite square matrix $M$ is injective and therefore invertible. [given, algebra]

2.1 In the simple case, [F3] gives the covariance normal equations $\Sigma\lambda=c_0$ for the minimizing centered affine predictor. Positive definiteness makes the solution unique, $\lambda=\Sigma^{-1}c_0$; substituting it into step 1.1 gives $Q(\lambda)=v_0-c_0^\top\Sigma^{-1}c_0$. [given, F3, step 1.1, algebra]

2.2 Invertibility gives a unique solution $(\lambda,\nu)$ of the displayed augmented system, and its lower block makes $\lambda$ feasible. For any other feasible vector $\lambda+h$, one has $P^\top h=0$. Using the upper block $\Sigma\lambda+P\nu=c_0$ in the quadratic from step 1.1 gives $Q(\lambda+h)-Q(\lambda)=2h^\top(\Sigma\lambda-c_0)+h^\top\Sigma h=h^\top\Sigma h$. This is positive for nonzero $h$ and zero for $h=0$, so $\lambda$ is the unique constrained minimizer. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Multiplying $\Sigma\lambda+P\nu=c_0$ on the left by $\lambda^\top$ and using $P^\top\lambda=p_0$ yields $\lambda^\top\Sigma\lambda+\nu^\top p_0=\lambda^\top c_0$. Substitution in $Q(\lambda)$ from step 1.1 gives $Q(\lambda)=v_0-\lambda^\top c_0-\nu^\top p_0$, as claimed. [step 1.1, step 1.2, step 2.2, algebra] ∎