---
id: lem-qmd-singular-and-zero-overlap-masses
kind: lemma
title: QMD controls singular and zero-overlap masses
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-qmd-path
  - def-likelihood-density
  - def-axiom-of-choice
  - lem-qmd-score-centered-and-finite-information
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
  - thm-absolute-continuity-of-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 8–10
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §1.5
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC and the hypotheses of [[def-qmd-path]]. Write $p_0=p_{\theta_0}$,
$p_u=p_{\theta_0+u}$, and $P_0=P_{\theta_0}$. Let
$$\alpha(u):=P_{\theta_0+u}(p_0=0),\qquad \beta(u):=P_0(p_u=0).$$
Then $\alpha(u)=o(\|u\|_2^2)$ and $\beta(u)=o(\|u\|_2^2)$ as $u\to0$.

## Facts & Assumptions

**Given:** AC; QMD at $\theta_0$ with score $s$ square-integrable under $P_0$,
and density versions $p_0,p_u$ relative to the common measure $\mu$.

[A1] [[def-axiom-of-choice]]: AC supplies the density representatives in
[[def-likelihood-density]].

[L1] [[def-likelihood-density]]: Each selected $p_\theta$ is nonnegative and
measurable with $P_\theta(A)=\int_Ap_\theta\,d\mu$.

[F1] [[def-qmd-path]]: The residual
$$r_u=\sqrt{p_u}-\sqrt{p_0}-\tfrac12(u^Ts)\sqrt{p_0}$$
satisfies $\|r_u\|_{L^2(\mu)}=o(\|u\|_2)$.

[F2] [[lem-qmd-score-centered-and-finite-information]]: $E_0\|s\|_2^2<\infty$.

[F3] [[def-euclidean-inner-product]] and
[[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Ts|\le\|u\|_2\|s\|_2$.

[F4] [[thm-holder-inequality-for-integrals]] and
[[thm-minkowski-inequality-for-integrals]]: Cauchy–Schwarz bounds $L^2$
inner products and the $L^2$ norm satisfies the triangle inequality.

[F5] [[thm-absolute-continuity-of-the-integral]]: If $g\in L^1(P_0)$ and
$P_0(B_u)\to0$, then $E_0[|g|\mathbf1_{B_u}]\to0$.

## Proof

**Proof technique:** restrict the QMD residual to the two support-complement
sets.

1.1 Set $S=\{p_0>0\}$. On $S^c$, both $\sqrt{p_0}$ and $(u^Ts)\sqrt{p_0}$ vanish, so $r_u=\sqrt{p_u}$ there. Therefore $\alpha(u)=\int_{S^c}p_u\,d\mu=\int_{S^c}r_u^2\,d\mu \le\|r_u\|_2^2=o(\|u\|_2^2).$ This is the claimed singular-mass bound. [A1, F1, L1, given, algebra]

1.2 Let $B_u=S\cap\{p_u=0\}$. On $B_u$, $\sqrt{p_u}-\sqrt{p_0}=-\sqrt{p_0}$, so $P_0(B_u)\le\|\sqrt{p_u}-\sqrt{p_0}\|_2^2 =O(\|u\|_2^2)\to0,$ where the last bound follows from [F1], [F2], [F3], and [F4]. Thus the sets $B_u$ shrink to zero in $P_0$ measure. [F1, F2, F3, F4, L1, given, algebra]

2.1 On $B_u$, the residual identity in [F1] gives $\sqrt{p_0}\,\mathbf1_{B_u} =-\tfrac12(u^Ts)\sqrt{p_0}\,\mathbf1_{B_u}-r_u\mathbf1_{B_u}.$ Taking $L^2(\mu)$ norms and using [F3] yields $\sqrt{\beta(u)}\le\tfrac12\|u\|_2 \big(E_0[\|s\|_2^2\mathbf1_{B_u}]\big)^{1/2}+o(\|u\|_2).$ This is the required norm bound. [F1, F2, F3, F4, L1, step 1.2, given]

3.1 Since $\|s\|_2^2$ is integrable and $P_0(B_u)\to0$, [F5] gives $E_0[\|s\|_2^2\mathbf1_{B_u}]\to0$. Step 2.1 therefore gives $\sqrt{\beta(u)}=o(\|u\|_2)$ and $\beta(u)=o(\|u\|_2^2)$. Because $P_0(p_u=0)=P_0(B_u)$, this is the claimed zero-overlap bound. [F2, F5, step 1.2, step 2.1, algebra] ∎

