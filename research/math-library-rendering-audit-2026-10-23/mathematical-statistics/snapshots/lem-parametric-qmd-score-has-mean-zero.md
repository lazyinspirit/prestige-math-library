---
id: lem-parametric-qmd-score-has-mean-zero
kind: lemma
title: A finite-dimensional QMD score has mean zero
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-qmd-path
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-integration-against-a-density
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 8–10"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator, QMD discussion"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
---

## Statement

Let a dominated finite-dimensional parametric model be quadratic-mean
differentiable, with the supplied density family of [[def-qmd-path]], at an interior point $\theta_0\in\mathbb R^d$, with score
$s_{\theta_0}\in L^2(P_{\theta_0};\mathbb R^d)$. Then
$\mathbb E_{\theta_0}s_{\theta_0}=0$.

## Facts & Assumptions

**Given:** The dominated model, supplied density family, and QMD expansion at the interior point $\theta_0$.

[F1] [[def-qmd-path]]: QMD means
$\|\sqrt{p_{\theta_0+h}}-\sqrt{p_{\theta_0}}-\tfrac12h^Ts_{\theta_0}\sqrt{p_{\theta_0}}\|_{L^2(\mu)}=o(\|h\|)$, with square-integrable score and supplied nonnegative measurable densities satisfying $P_\theta(A)=\int_Ap_\theta\,d\mu$.

[F2] [[cor-cauchy-schwarz-inequality-for-l-two]]: for square-integrable $f,g$,
$\int|fg|\,d\mu\le\|f\|_2\|g\|_2$.

[F3] [[thm-integration-against-a-density]]: integration of a nonnegative function against $P_\theta=p_\theta\,d\mu$ equals integration of its product with $p_\theta$ against $\mu$; applying this to positive and negative parts gives the same identity for integrable real functions.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: finite linear combinations of integrable real functions are integrable and their integrals are linear.

## Proof

1.1 Write $q=\sqrt{p_{\theta_0}}$ and $r_h=\sqrt{p_{\theta_0+h}}-q-\tfrac12h^Ts_{\theta_0}q$. By [F1], $\|r_h\|_2=o(\|h\|)$. By [F3], each $q_h=\sqrt{p_{\theta_0+h}}$ is a probability square-root density, so $\|q_h\|_2^2=\|q\|_2^2=1$. Since $P_{\theta_0}$ is a probability and the score is square-integrable, [F2] with the constant function $1$ shows its coordinates are integrable. All products in the following norm expansion are integrable by [F2], since $q$, $r_h$, and $h^Ts_{\theta_0}q$ belong to $L^2(\mu)$. Thus [F4] permits integrating the finite expansion term by term, and [F3] transfers the score term to expectation under $P_{\theta_0}$. Expanding $q_h=q+\tfrac12h^Ts_{\theta_0}q+r_h$ gives $0=h^T\mathbb E_{\theta_0}s_{\theta_0}+2\langle q,r_h\rangle+ \|\tfrac12h^Ts_{\theta_0}q+r_h\|_2^2$. Cauchy–Schwarz [F2] bounds the inner product by $o(\|h\|)$; square-integrability of the score and $\|r_h\|_2=o(\|h\|)$ make the last term $O(\|h\|^2)$. Thus $h^T\mathbb E_{\theta_0}s_{\theta_0}=o(\|h\|)$. [F1, F2, F3, F4, algebra]

2.1 For each coordinate vector $e_j$, set $h=te_j$ with $t>0$ small enough that $\theta_0+te_j\in\Theta$. Divide the relation from step 1.1 by $t$ and let $t\downarrow0$ to obtain $\mathbb E_{\theta_0}s_{\theta_0,j}=0$. This holds for all $j=1,\ldots,d$, hence the score vector has mean zero. [F1, step 1.1, algebra] ∎
