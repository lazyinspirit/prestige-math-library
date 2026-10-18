---
id: ex-ar-covariance-toeplitz-forecast-solve
kind: example
title: "An AR(1) covariance forecast and general-RHS Toeplitz solve"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-durbin-levinson-forecast-recursion
  - alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve
  - def-autocovariance-and-sample-autocovariance
  - def-moments-variance-and-covariance
  - def-strict-and-weak-stationarity-for-time-series
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-durbin-levinson-solves-the-prediction-equations
  - thm-gohberg-semencul-inverse-identity-and-cost
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.5.3"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
    - title: "MIT OpenCourseWare 6.341, Discrete-Time Signal Processing, Lecture 13:
        The Levinson-Durbin Recursion"
      url: "https://users.utcluj.ro/~cmuresan/PSM/6-341-fall-2005/contents/lecture-no\
        tes/lec13.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume a real, mean-zero, weakly stationary process $X_t$ satisfies the causal AR(1) model
$$X_t=\tfrac12X_{t-1}+\varepsilon_t$$
in $L^2$, where $\varepsilon_t$ is centered with variance $3/4$, is uncorrelated with $X_s$ for every $s<t$, and the process is weakly stationary. Here “AR(1)” means precisely this first-order autoregression; the stated uncorrelatedness is the innovation orthogonality used below. Then its autocovariance function (ACVF) is $\gamma(h)=2^{-|h|}$. The order-two Durbin–Levinson output is $\phi_2=(1/2,0)^T$ and $\nu_2=3/4$. Separately, for $T=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$ and $b=(1,1)^T$, the general-RHS Hermitian Toeplitz solver returns $T^{-1}b=(2/3,2/3)^T$ by the Gohberg–Semencul formula.

## Facts & Assumptions

**Given:** The process and innovation hypotheses in the Statement, the Durbin–Levinson covariance-input procedure, and the exact Hermitian Toeplitz solver.

[F1] Weak stationarity supplies a constant mean and an ACVF $\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$ depending only on lag. [[def-strict-and-weak-stationarity-for-time-series]] [[def-autocovariance-and-sample-autocovariance]]

[F2] Covariance is symmetric and bilinear for finite linear combinations of square-integrable variables. [[def-moments-variance-and-covariance]] [[lem-variance-and-covariance-identities-for-random-variables]]

[F3] The real Durbin–Levinson recursion computes $\phi_k,\nu_k$ from $\gamma(0),\ldots,\gamma(k)$ when the leading covariance blocks are positive definite. [[alg-durbin-levinson-forecast-recursion]]

[F4] Under those leading-block hypotheses, $\phi_k$ solves the prediction equations and $\nu_k=\gamma(0)-r_k^T\phi_k$. [[thm-durbin-levinson-solves-the-prediction-equations]]

[F5] The Hermitian Toeplitz solver constructs the endpoint inverse columns and applies the exact Gohberg–Semencul formula. [[alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve]] [[thm-gohberg-semencul-inverse-identity-and-cost]]

## Proof

1.1 Centering and weak stationarity give $E[X_t]=0$ and $\gamma(0)=\operatorname{Var}(X_t)$ for every $t$. From the autoregression and innovation orthogonality, $$\gamma(0)=\operatorname{Var}(\tfrac12X_{t-1}+\varepsilon_t)=\tfrac14\gamma(0)+\tfrac34,$$ so $\gamma(0)=1$. [given, F1, F2, algebra]

1.2 For the separate general-RHS solve, set $T=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$ as in the Statement. For each nonzero $z\in\mathbb C^2$, $z^*Tz=|z_1+z_2/2|^2+3|z_2|^2/4>0$, so $T$ is Hermitian positive definite. Its first lag data are $t_0=1,t_1=1/2$, hence $\alpha_1=t_1/t_0=1/2$, $\phi_1=\alpha_1=1/2$, and $\nu_1=t_0(1-|\alpha_1|^2)=3/4$. The endpoint columns from [F5] are $$v=(-2/3,4/3)^T,\qquad u=J_2v=(4/3,-2/3)^T,\qquad u_0=4/3>0.$$ The lower triangular Toeplitz products are $$L(u)L(u)^*=\begin{pmatrix}16/9&-8/9\\-8/9&20/9\end{pmatrix},\qquad L(Z_2v)L(Z_2v)^*=\begin{pmatrix}0&0\\0&4/9\end{pmatrix}.$$ Therefore the formula in [F5] gives $$T^{-1}=\begin{pmatrix}4/3&-2/3\\-2/3&4/3\end{pmatrix},\qquad T^{-1}b=(2/3,2/3)^T.$$ Direct multiplication also verifies $T(2/3,2/3)^T=(1,1)^T$. [given, F5, algebra]

2.1 For each integer $h\ge1$, covariance bilinearity and $\operatorname{Cov}(\varepsilon_t,X_{t-h})=0$ give $$\gamma(h)=\operatorname{Cov}(X_t,X_{t-h})=\tfrac12\gamma(h-1).$$ Induction yields $\gamma(h)=2^{-h}$ for $h\ge0$; covariance symmetry gives $\gamma(-h)=\gamma(h)$. [given, F1, F2, step 1.1, induction]

3.1 The order-one recursion gives $\kappa_1=\gamma(1)/\gamma(0)=1/2$, $\phi_1=(1/2)$ and $\nu_1=1(1-1/4)=3/4$. At order two, $$\kappa_2=\frac{\gamma(2)-\phi_{1,1}\gamma(1)}{\nu_1}=\frac{1/4-(1/2)(1/2)}{3/4}=0,$$ so $\phi_2=(\phi_{1,1}-\kappa_2\phi_{1,1},\kappa_2)^T=(1/2,0)^T$ and $\nu_2=\nu_1(1-\kappa_2^2)=3/4$. By steps 1.1 and 2.1, $\Gamma_1=[1]$ and $\Gamma_2=T$. Step 1.2 proves $T$ Hermitian positive definite, so the real leading covariance blocks are positive definite; [F3] applies and [F4] identifies this vector as the unique prediction solution. [given, F3, F4, step 1.1, step 1.2, step 2.1, algebra]

4.1 The first calculation reuses the published real covariance prediction recursion, while the second is a distinct arbitrary-right-hand-side Hermitian Toeplitz solve; the computed vector satisfies its stated system. [step 3.1, step 1.2, algebra] ∎
