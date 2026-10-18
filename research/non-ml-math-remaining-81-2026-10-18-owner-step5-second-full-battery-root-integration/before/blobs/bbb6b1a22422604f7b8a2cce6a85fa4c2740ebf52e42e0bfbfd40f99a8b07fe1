---
id: lem-it-wyner-ziv-auxiliary-cardinality-bound
kind: lemma
title: "Cardinality bound for the finite Wyner-Ziv auxiliary"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-finite-wyner-ziv-code
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-it-finite-entropy-chain-rule
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the perturbation is a finite-dimensional linear-algebra argument on a finite auxiliary alphabet."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aaron D. Wyner and Jacob Ziv, The Rate-Distortion Function for Source Coding with Side Information at the Decoder"
      url: "https://web.mit.edu/6.962/www/www_fall_2001/kusuma/wynerziv.pdf"
      locator: "Appendix, Theorem A2, pp. 9–10: finite auxiliary cardinality and attainment."
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 12, Wyner-Ziv Theorem, p. 17, auxiliary cardinality |U| <= |X|+1."
---

## Statement

Let $P_{XY}$ be a finite joint law, let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$, and let $(U,P_{U|X},g)$ be any finite Wyner-Ziv test channel from [[def-it-finite-wyner-ziv-code]] with expected distortion at most $D$. There is another finite test channel $(U',P_{U'|X},g')$ such that
$$|\mathcal U'|\le|\mathcal X|+1,\qquad \mathbb E[d(X,g'(Y,U'))]=\mathbb E[d(X,g(Y,U))],\qquad I(X;U'|Y)\le I(X;U|Y).$$
Consequently the infimum $R_{\rm WZ}(D)$ in [[def-it-finite-wyner-ziv-code]] is a minimum and it suffices to optimize over $|\mathcal U|\le|\mathcal X|+1$.

## Facts & Assumptions

**Given:** A finite law $P_{XY}$, a finite distortion, a finite test channel, and $D$.

[F1] [[def-it-finite-wyner-ziv-code]]: a test channel has $P_{XYU}=P_{XY}P_{U|X}$, a decoder map $g(Y,U)$, and distortion $\mathbb E[d(X,g(Y,U))]$.

[F2] [[thm-it-finite-entropy-chain-rule]]: $I(X;U|Y)=H(X|Y)-H(X|U,Y)$ for finite random variables.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy uses $0\ln0=0$ and is continuous on each finite probability simplex because $-t\ln t$ extends continuously at $0$.

[F4] [[thm-heine-borel-rn]]: a closed bounded subset of finite-dimensional Euclidean space is compact.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact space attains its minimum.

## Proof

1.1 Remove all zero-probability values of $U$. For each remaining $u$, set $\pi_u=P_U(u)>0$, $q_u(x)=P(X=x|U=u)$, $a_u=\mathbb E[d(X,g(Y,u))|U=u]$, and $h_u=H(X|Y,U=u)$. Because $U-X-Y$, the conditional law of $Y$ given $(X,U)$ is $P_{Y|X}$, so $a_u$ is determined by $q_u$ and the fixed decoder map $g(\cdot,u)$. Also, $P_X(x)=\sum_u\pi_uq_u(x),\quad \mathbb E d(X,g(Y,U))=\sum_u\pi_ua_u,\quad H(X|Y,U)=\sum_u\pi_uh_u.$ These are finite sums. [F1, given]

1.2 Put $m=|\mathcal X|$. If there are more than $m+1$ positive weights, the vectors $v_u=(q_u(x_1),\ldots,q_u(x_m),a_u)\in\mathbb R^{m+1}$ are linearly dependent. Choose coefficients $c_u$, not all zero, with $\sum_uc_uv_u=0$. The first $m$ coordinates imply $\sum_uc_u=0$, so the coefficients have both signs. Choose the sign so that $\sum_uc_uh_u\ge0$. Let $t=\min_{c_u<0}\pi_u/(-c_u)>0$ and put $\pi'_u=\pi_u+tc_u$. Then every $\pi'_u\ge0$, at least one is zero, and the source marginal and expected distortion remain unchanged, while $\sum_u\pi'_uh_u\ge\sum_u\pi_uh_u$. [F1, choose, algebra]

2.1 Define $U'$ to have the remaining positive weights $\pi'_u$, conditional posterior $P(X=x|U'=u)=q_u(x)$, and conditional side-information law $P_{Y|X}$. Equivalently set $P_{XYU'}(x,y,u)=P_{XY}(x,y)P(U'=u|X=x)$ with $P(U'=u|X=x):=\pi'_uq_u(x)/P_X(x)$ for $P_X(x)>0$, and choose any row on zero-mass $x$. The source marginal is preserved by step 1.2, and $\sum_u\pi'_uq_u(x)=P_X(x)$ makes each conditional row sum to one. Use the same reconstruction map $g(y,u)$. The distortion is unchanged by step 1.2, and [F2] gives $I(X;U'|Y)=H(X|Y)-\sum_u\pi'_uh_u\le H(X|Y)-\sum_u\pi_uh_u=I(X;U|Y).$ At least one positive auxiliary value was removed. Repeating finitely many times leaves at most $m+1$ values and never increases the objective. [F1, F2, step 1.2, algebra]

3.1 For fixed $|\mathcal U|=m+1$, the stochastic matrices $P_{U|X}$ form a closed bounded subset of a finite-dimensional Euclidean space. Any smaller auxiliary can be embedded in this alphabet by adding zero-probability labels and assigning arbitrary decoder values to them. For each of the finitely many decoder maps $g:\mathcal Y\times\mathcal U\to\widehat{\mathcal X}$, the distortion constraint is closed and $I(X;U|Y)$ is continuous by the finite entropy formulas and [F3]. Thus every nonempty feasible set is compact by [F4], and its objective minimum is attained by [F5]. Every finite auxiliary can be reduced to at most $m+1$ labels by steps 1.2–2.1 and then embedded in this fixed alphabet, so this minimum equals the original infimum. [F1, F3, F4, F5, step 1.2, step 2.1] ∎
