---
id: cex-iid-bootstrap-inconsistency-at-absolute-mean-kink
kind: counterexample
title: The IID bootstrap can fail at the kink of the absolute mean
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-iid-empirical-bootstrap-sample
  - thm-conditional-iid-bootstrap-clt-for-empirical-law
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-continuous-mapping-theorem
  - thm-slutsky-for-real-random-variables
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, Statistica Sinica 7 (1997), §2.3, Example 6"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §§4–5"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
---

## Statement refuted

For every finite-variance IID law and every Borel plug-in map $g$ whose sampling root $\sqrt n\{g(\bar X_n)-g(\mathbb E X_1)\}$ has a continuous weak limit $L$, the conditional empirical-bootstrap root $\sqrt n\{g(\bar X_n^*)-g(\bar X_n)\}$ has CDF converging in probability to the CDF of $L$ at every continuity point, even when $g$ is not differentiable at $\mathbb E X_1$.

## Facts & Assumptions

**Given:** Let $X_i$ be IID Rademacher random variables with $\mathbb P(X_i=1)=\mathbb P(X_i=-1)=1/2$, and use their empirical bootstrap with $g(x)=|x|$. Thus $\mu=0$ and $\operatorname{Var}(X_i)=1$.

[A1] AC is assumed by the IID CLTs and standard normal law used in this counterexample. [[def-axiom-of-choice]]

[F1] For the empirical bootstrap mean with positive projected variance, its conditional CDF converges uniformly in probability to the corresponding normal CDF. [[thm-conditional-iid-bootstrap-clt-for-empirical-law]]

[F2] The centered sample mean of a real IID law with mean zero and positive finite variance obeys the Lindeberg–Levy CLT. [[thm-lindeberg-levy-iid-central-limit-theorem]]

[F3] Continuous maps preserve convergence in distribution. [[thm-continuous-mapping-theorem]]

[F4] If $U_n\Rightarrow U$ and $V_n\to c$ in probability, then $U_n+V_n\Rightarrow U+c$. [[thm-slutsky-for-real-random-variables]]

[F5] The standard normal CDF $\Phi$ is continuous and strictly increasing. [[def-standard-normal-and-normal-laws]] [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

## Counterexample

1.1 By [F2], $Z_n=\sqrt n\,\bar X_n\Rightarrow Z$ with $Z\sim N(0,1)$. Since absolute value is continuous, [F3] gives $\sqrt n|\bar X_n|\Rightarrow |Z|$. The limiting CDF of $|Z|$ is continuous at $0$ and equals $\mathbb P(|Z|\le0)=0$. [A1, F2, F3, given]

1.2 Let $V_n^*=\sqrt n(\bar X_n^*-\bar X_n)$. Its conditional CDF $F_n^*$ satisfies $D_n:=\sup_t|F_n^*(t)-\Phi(t)|\to0$ in probability by [F1]. The bootstrap root for $g(x)=|x|$ is $R_n^*=\sqrt n(|\bar X_n^*|-|\bar X_n|)=|Z_n+V_n^*|-|Z_n|.$ For fixed data value $Z_n=z\ge0$, the event $R_n^*\le0$ is $-2z\le V_n^*\le0$; for $z<0$, it is $0\le V_n^*\le-2z$. [A1, F1, given, algebra]

2.1 For any interval $[u,v]$, the difference between its conditional bootstrap probability and its standard normal probability is at most $2D_n$: use $F_n^*(v)-F_n^*(u-)$ and take left limits in the uniform CDF bound, using continuity of $\Phi$. Therefore $Q_n:=\mathbb P^*(R_n^*\le0\mid X_1,\ldots,X_n)=\Phi(2|Z_n|)-\frac12+o_{\mathbb P}(1).$ Indeed, the normal mass of either interval in step 1.2 is $\Phi(2|z|)-1/2$. By [F3] and [F4], $Q_n\Rightarrow \Phi(2|Z|)-1/2$. This limit is positive with positive probability because $\mathbb P(|Z|\ge1)>0$ and [F5] gives $\Phi(2)-1/2>0$. Thus $Q_n$ does not converge in probability to zero. [F3, F4, F5, step 1.1, step 1.2, given]

3.1 If the conditional bootstrap law consistently estimated the sampling law of $\sqrt n|\bar X_n|$, its conditional CDF at the continuity point $0$ would converge in probability to the sampling limit CDF there, namely zero by step 1.1 and [F5]. Step 2.1 contradicts this. The failure occurs because $g(x)=|x|$ is not differentiable at the true mean $0$. [F1, F5, step 1.1, step 2.1] ∎
