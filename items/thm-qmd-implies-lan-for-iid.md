---
id: thm-qmd-implies-lan-for-iid
kind: theorem
title: Quadratic-mean differentiability implies iid LAN
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-qmd-path
  - def-likelihood-density
  - lem-qmd-score-centered-and-finite-information
  - def-lan-experiment
  - lem-qmd-normalized-product-likelihood-expansion
  - thm-multivariate-iid-central-limit-theorem
  - def-axiom-of-choice
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 8–11
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §2
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume the Axiom of Choice. Let $\{P_\theta:\theta\in\Theta\subseteq
\mathbb R^d\}$ be dominated by a common sigma-finite measure, with $\Theta$
open, and suppose the model is QMD at an interior $\theta_0$ with score $s$
and information $I=E_{\theta_0}[ss^T]$. Let $X_1,\ldots,X_n$ be IID
$P_{\theta_0}$, and for each fixed local sequence $h_n\to h$ set
$u_n=h_n/\sqrt n$. Then the local product laws
$P_{\theta_0+u_n}^{\otimes n}$ admit mean-one likelihood-ratio proxies
$L_n$ relative to $P_{\theta_0}^{\otimes n}$ such that
$$\left\|P_{\theta_0+u_n}^{\otimes n}-L_nP_{\theta_0}^{\otimes n}\right\|_{\rm TV} \to0,$$
and under $P_{\theta_0}^{\otimes n}$,
$$\log L_n=h_n^T\Delta_n-\tfrac12h^TIh+o_P(1),\qquad \Delta_n=n^{-1/2}\sum_{i=1}^ns(X_i)\Rightarrow N_d(0,I).$$
Thus the IID QMD experiment is LAN in the proxy sense of
[[def-lan-experiment]]. This assertion does not claim that the full local
product law has a Radon–Nikodym derivative relative to the base law.

## Facts & Assumptions

**Given:** AC; the QMD model, common dominator, score, and information above;
and IID observations from $P_{\theta_0}$.

[A1] [[def-axiom-of-choice]]: AC is the stated set-theoretic axiom. It is
assumed here because the multivariate IID CLT supplier explicitly assumes it.

[L1] [[def-likelihood-density]]: The chosen density versions satisfy
$P_\theta(A)=\int_Ap_\theta\,d\mu$ for every measurable $A$.

[F1] [[def-qmd-path]]: At $\theta_0$, the square-root densities have an
$L^2(\mu)$ first-order expansion with score $s$.

[F2] [[lem-qmd-normalized-product-likelihood-expansion]]: For every
$h_n\to h$, the normalized absolutely continuous product proxy has mean-one
likelihood $L_n$, differs from the full product law in total variation by
$o(1)$, has $P_{\theta_0}^{\otimes n}(L_n=0)\to0$, and its log likelihood
has expansion $h_n^T\Delta_n-\frac12h^TIh+o_P(1)$.

[F3] [[thm-multivariate-iid-central-limit-theorem]]: Under AC and for a
finite integer $d\ge1$, IID vectors with finite second moment and covariance $I$ satisfy
$n^{-1/2}\sum_i(X_i-EX_i)\Rightarrow N_d(0,I)$; singular $I$ is allowed.

[F4] [[def-lan-experiment]]: LAN means a Gaussian central-sequence limit, the
stated log-likelihood expansion for each fixed local direction, and a
total-variation-close mean-one absolutely continuous proxy.

[F5] [[def-euclidean-inner-product]]: The local directions and score sums use
the Euclidean inner product and norm on $\mathbb R^d$.

[F6] [[lem-qmd-score-centered-and-finite-information]]: A QMD score has
mean zero and finite positive-semidefinite information matrix.

## Proof

**Proof technique:** combine the normalized QMD likelihood expansion with
the score central limit theorem.

1.1 If $d=0$, the parameter space containing $\theta_0$ is the singleton empty tuple by [F5]. Thus $h_n=h=0$, $u_n=0$, and every local law equals the base law. The score and $\Delta_n$ are empty vectors and $I$ is the empty matrix. Choose $L_n=1$: its mean is one, the total variation error is zero, and the log expansion is the exact identity $0=0$. The law of $\Delta_n$ is the unique law on the singleton, denoted $N_0(0,0)$ under the empty-tuple convention; its weak convergence is immediate. These facts give LAN by [F4] without a CLT. Henceforth suppose $d\ge1$. [F4, F5, given, construct, algebra]

2.1 By [A1, L1, F1] the path is QMD with the specified density versions. [F2] applies to the chosen sequence $u_n=h_n/\sqrt n$ and supplies the normalized proxy $L_n$, the total variation approximation, and the log expansion. Its normalizer is $1-\alpha_n>0$ for all sufficiently large $n$, since $\alpha_n=o(\|u_n\|_2^2)$ and $u_n\to0$. [A1, F1, F2, L1, step 1.1, given]

2.2 By [F6], the score has $E_{\theta_0}s=0$ and covariance $E_{\theta_0}[ss^T]=I$ with finite entries. QMD also supplies $E_{\theta_0}\|s\|_2^2<\infty$ by [F1]. Thus [F3] applies to $s(X_i)$ and yields $\Delta_n\Rightarrow N_d(0,I)$, including singular information. [A1, F1, F3, F5, F6, step 1.1, given]

3.1 For each fixed $h$, steps 2.1 and 2.2 give the proxy approximation, the log expansion and the Gaussian central-sequence limit required in [F4]. Hence the local experiment is LAN. The proof used the full likelihood only for the normalized absolutely continuous component; singular mass is handled by the total-variation bound in [F2]. This proves the stated proxy-LAN conclusion. [F2, F4, step 1.1, step 2.1, step 2.2] ∎

