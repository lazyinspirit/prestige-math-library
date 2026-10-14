---
id: def-wald-score-likelihood-ratio-statistics
kind: definition
title: Wald, score, and likelihood-ratio statistics for regular nulls
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-parametric-statistical-model
  - def-qmd-path
  - def-score-and-fisher-information
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26, PDF pp. 1–17"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "John Duchi, Stats 300B Lecture 6, Winter 2018, complete scribe note, PDF pp. 1–5"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2018/lecture-06.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 4: Hypothesis tests in likelihood models"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html"
---

## Definition

Assume AC for the supplied density representatives in
[[def-score-and-fisher-information]] and [[def-axiom-of-choice]]. Let
$X_1,\ldots,X_n$ be iid from a dominated parametric model on an open
$\Theta\subset\mathbb R^d$, and let $\ell_n(\theta)=\sum_{i=1}^n\log
p_\theta(X_i)$. For any nested null $\Theta_0\subseteq\Theta$ for which the
maxima exist, the **likelihood-ratio statistic** is
$$L_n=2\left\{\sup_{\theta\in\Theta}\ell_n(\theta)-\sup_{\theta\in\Theta_0}\ell_n(\theta)\right\}.$$

For the Wald and score statistics, specialize to a **regular equality null of
codimension $q$** at an interior point $\theta_0$: this is a null set which,
in a $C^1$ local parameter chart
$\theta=(\psi,\eta)\in\mathbb R^q\times\mathbb R^{d-q}$, is $\psi=0$ near
$\theta_0=(0,\eta_0)$. Its local tangent is the $\eta$-coordinate subspace.
Assume the QMD information $I(\theta_0)$ is positive definite. Let
$\hat\theta_n$ maximize $\ell_n$ over the full parameter space $\Theta$ and
$\tilde\theta_n$ maximize it over the null $\Theta_0$, so the general
likelihood-ratio definition is
$L_n=2\{\ell_n(\hat\theta_n)-\ell_n(\tilde\theta_n)\}$.

For the score statistic, assume $\log p_\theta(x)$ is differentiable in the
local chart at the parameter values where it is evaluated, and write
$s_\theta(x)=\nabla_\theta\log p_\theta(x)$. Require explicitly that this
pointwise derivative at $\theta_0$ agrees $P_{\theta_0}$-almost surely with
the QMD score; this compatibility is an assumption, not a consequence of QMD
alone. The pointwise score and its information-matrix convention are those in
[[def-score-and-fisher-information]].

Partition the score and information in $(\psi,\eta)$ coordinates:
$s=(s_\psi,s_\eta)$ and
$$I=\begin{pmatrix}I_{\psi\psi}&I_{\psi\eta}\\I_{\eta\psi}&I_{\eta\eta}\end{pmatrix},\qquad I_{\mathrm{eff}}=I_{\psi\psi}-I_{\psi\eta}I_{\eta\eta}^{-1}I_{\eta\psi}.$$
The matrix $I_{\mathrm{eff}}$ is the information for the tested coordinates
after accounting for the nuisance coordinates. If $d=q$, interpret empty-block
products as zero, so $I_{\mathrm{eff}}=I_{\psi\psi}=I$ and $C$ below is the
empty $q\times0$ matrix. If $d>q$, then $I_{\eta\eta}$ is positive definite;
for $z\ne0$, the quadratic form of $I$ at
$(z,-I_{\eta\eta}^{-1}I_{\eta\psi}z)$ equals
$z^TI_{\mathrm{eff}}z>0$. Thus $I_{\mathrm{eff}}$ is positive definite in
either case. Put
$$
U_n(\theta)=n^{-1/2}\sum_{i=1}^n s_\theta(X_i).
$$
For a consistent estimator $\widehat I_{\mathrm{eff},n}$ of
$I_{\mathrm{eff}}$ and a consistent estimator $\widehat C_n$ of
$C=I_{\psi\eta}I_{\eta\eta}^{-1}$, set
$U_{\mathrm{eff},n}=U_{\psi,n}(\tilde\theta_n)-
\widehat C_nU_{\eta,n}(\tilde\theta_n)$. The **score statistic** is
$S_n=U_{\mathrm{eff},n}^T\widehat I_{\mathrm{eff},n}^{-1}U_{\mathrm{eff},n}$.
For a consistent covariance estimator $\widehat V_{\psi,n}$ of the
$\psi$-block of $I^{-1}$, the **Wald statistic** is
$W_n=n\hat\psi_n^T\widehat V_{\psi,n}^{-1}\hat\psi_n$, where
$\hat\psi_n$ is the tested coordinate of $\hat\theta_n$. When a displayed
inverse does not exist, set that statistic to zero; under the regularity
conditions used in the later calibration theorem, the inverse exists with
probability tending to one. This definition gives the statistics and their
normalizations; it asserts no finite-sample or asymptotic distribution.

