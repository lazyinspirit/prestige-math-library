---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-qmd-score-centered-and-finite-information.json
  precheck: pass
id: lem-qmd-score-centered-and-finite-information
kind: lemma
title: A QMD score is centered and has finite information
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-qmd-path
  - def-likelihood-density
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 8–9
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §1.5
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC and a parametric model QMD at $\theta_0$ with score $s_{\theta_0}$.
Then
$$E_{\theta_0}s_{\theta_0}=0,$$
and the information matrix
$I_{\theta_0}=E_{\theta_0}[s_{\theta_0}s_{\theta_0}^T]$ has finite entries
and is positive semidefinite. The QMD convention and square-integrability of
the score are those of [[def-qmd-path]].

## Facts & Assumptions

**Given:** AC; an open parameter set in $\mathbb R^d$, a common sigma-finite
dominator with density versions $p_\theta$, an interior point $\theta_0$,
and the QMD score $s=s_{\theta_0}$ with $E_{\theta_0}\|s\|_2^2<\infty$.

[A1] [[def-axiom-of-choice]]: AC supplies the selected density versions in
[[def-likelihood-density]].

[F1] [[def-likelihood-density]]: Each $p_\theta$ is a measurable density
version satisfying $P_\theta(A)=\int_Ap_\theta\,d\mu$.

[F2] [[def-qmd-path]]: For $u\to0$,
$$\sqrt{p_{\theta_0+u}}=\sqrt{p_{\theta_0}}+\tfrac12(u^Ts)\sqrt{p_{\theta_0}}+r_u, \qquad \|r_u\|_{L^2(\mu)}=o(\|u\|_2).$$

[F3] [[def-euclidean-inner-product]]: $u^Ts=\sum_{j=1}^d u_js_j$ and
$\|u\|_2^2=u^Tu$ are the Euclidean inner product and norm.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: For Euclidean vectors,
$|u^Tv|\le\|u\|_2\|v\|_2$.

[F5] [[thm-holder-inequality-for-integrals]] and
[[thm-minkowski-inequality-for-integrals]]: On a probability space,
$|E UV|\le(EU^2)^{1/2}(EV^2)^{1/2}$ and the $L^2$ norm satisfies the triangle
inequality.

## Proof

**Proof technique:** differentiate the squared norm of the square-root density along a line.

1.1 Fix $v\in\mathbb R^d$ and put $f_t=\sqrt{p_{\theta_0+tv}}$, $f_0=\sqrt{p_{\theta_0}}$. By [F1]–[F2], $f_t-f_0=\tfrac t2(v^Ts)f_0+r_{tv},\qquad \|r_{tv}\|_2=o(|t|).$ Since each density integrates to one, $\|f_t\|_2=\|f_0\|_2=1$, and $0=2\langle f_0,f_t-f_0\rangle+\|f_t-f_0\|_2^2.$ This identity uses the unit norms of the square-root densities. [A1, F1, F2, given, algebra]

2.1 The increment has norm $O(|t|)$, so its squared norm divided by $t$ tends to zero. By Cauchy–Schwarz, the residual inner product $\langle f_0,r_{tv}\rangle/t$ also tends to zero. Divide the identity in step 1.1 by $t$ and let $t\to0$; the remaining term is $E_{\theta_0}(v^Ts)=0$. Since this holds for every $v$, each coordinate of $E_{\theta_0}s$ is zero. [F2, F5, step 1.1, given, algebra]

3.1 Each $s_j$ is square-integrable under a probability law, so $E|s_j|<\infty$ by Cauchy–Schwarz. Also $E|s_js_k|\le(E s_j^2)^{1/2}(E s_k^2)^{1/2}<\infty$; hence every entry of $I_{\theta_0}$ is finite. For any $a\in\mathbb R^d$, $a^TI_{\theta_0}a=E(a^Ts)^2\ge0$, proving positive semidefiniteness, with no nonsingularity assertion. [F2, F3, F4, F5, given, algebra] ∎

