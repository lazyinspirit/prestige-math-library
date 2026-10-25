---
id: ex-multivariate-normal-conditioning-singular-state
kind: example
title: "Gaussian conditioning with singular state covariance"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - thm-multivariate-normal-conditional-law
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the multivariate-normal construction and conditional-law theorem."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §3.5 and Appendix A"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Appendix A.1, Lemma A.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
---

## Statement

Assume AC. Let $Z=(Z_1,Z_2)\sim N_2(0,I_2)$, where $I_2$ is the $2\times2$
identity matrix, and set $X=(Z_1,Z_1)$ and $Y=Z_1+Z_2$. The state covariance
is singular, $\operatorname{Var}(Y)=2>0$, and the conditional law at every
$y\in\mathbb R$ is
$$X\mid Y=y\sim N_2\left((y/2,y/2),\begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}\right).$$

## Facts & Assumptions

**Given:** AC, $Z\sim N_2(0,I_2)$, and the definitions of $X$ and $Y$ in the Statement.

[A1] AC is assumed by the multivariate-normal construction and conditional-law theorem. [[def-axiom-of-choice]].

[F1] Under AC, $N_d(m,\Sigma)$ exists for every positive-semidefinite covariance, has the stated mean and covariance, and is characterized by its Gaussian linear projections. [[def-multivariate-normal-law]].

[F2] If a jointly Gaussian pair has block covariance $\begin{pmatrix}A&C\\C^T&B\end{pmatrix}$ with $B$ positive definite, its conditional kernel has mean $a+CB^{-1}(y-b)$ and covariance $A-CB^{-1}C^T$, which may be singular. [[thm-multivariate-normal-conditional-law]].

## Verification

**Given:** AC and the Gaussian vector and affine definitions in the Statement, with facts [A1], [F1], [F2].

1.1 For any $u_1,u_2,v\in\mathbb R$, $u_1X_1+u_2X_2+vY=(u_1+u_2+v)Z_1+vZ_2$ is Gaussian by [F1]. Its mean is zero. Computing covariances from $\operatorname{Cov}(Z)=I_2$ gives $A=\begin{pmatrix}1&1\\1&1\end{pmatrix}$, $C=\begin{pmatrix}1\\1\end{pmatrix}$, and $B=(2)$. Since $\det A=0$, the state covariance is singular. [A1, F1, given, algebra]

2.1 The observed block $B=(2)$ is positive definite. Its inverse is $(1/2)$, so $A-CB^{-1}C^T=\begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}$ and $CB^{-1}(y-0)=(y/2,y/2)$. The conditional covariance is also singular, with determinant zero. [step 1.1, algebra]

3.1 Apply [F2] with these blocks. It gives the displayed conditional Gaussian kernel for every $y$, despite singularity of $A$ and the conditional covariance; no inverse or pseudoinverse of either is used. [A1, F2, step 2.1, given] ∎