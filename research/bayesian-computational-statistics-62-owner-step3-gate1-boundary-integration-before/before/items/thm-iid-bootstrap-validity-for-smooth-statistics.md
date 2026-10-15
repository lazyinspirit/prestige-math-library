---
id: thm-iid-bootstrap-validity-for-smooth-statistics
kind: theorem
title: First-order IID bootstrap validity for smooth functions of a mean
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-iid-empirical-bootstrap-sample
  - lem-iid-sample-covariance-converges
  - thm-conditional-iid-bootstrap-clt-for-empirical-law
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - def-convergence-in-distribution-for-real-random-variables
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - thm-vector-stochastic-order-calculus
  - thm-multivariate-iid-central-limit-theorem
  - thm-first-and-second-order-delta-method-for-random-vectors
  - cor-markov-inequality-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §5, Theorem 5.1 and full proof"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–2 and §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, Statistica Sinica 7 (1997), §2.3"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
---

## Statement

Assume AC. Let $X_i$ be IID $\mathbb R^d$-valued vectors with $\mathbb E\|X_1\|^2<\infty$, mean $\mu$, and covariance $\Sigma$. Let $g:\mathbb R^d\to\mathbb R$ be Borel and Fréchet differentiable at $\mu$, with derivative $a^T$, and assume
$$0<\sigma^2:=a^T\Sigma a<\infty.$$
Set $\theta=g(\mu)$, $\hat\theta_n=g(\bar X_n)$, and $\hat\theta_n^*=g(\bar X_n^*)$ for the finite-index empirical bootstrap in [[def-iid-empirical-bootstrap-sample]]. Then
$$\sqrt n(\hat\theta_n-\theta)\Rightarrow N(0,\sigma^2),$$
and, for every fixed $x\in\mathbb R$,
$$\mathbb P^*\!\left(\sqrt n(\hat\theta_n^*-\hat\theta_n)\le x\mid X_1,\ldots,X_n\right)\longrightarrow\Phi_\sigma(x)\quad\text{in probability},$$
where $\Phi_\sigma$ is the CDF of $N(0,\sigma^2)$. Thus the ideal conditional bootstrap law and the sampling law have the same first-order limit with the stated centering and $\sqrt n$ scaling. This theorem does not imply coverage of any interval algorithm.

## Facts & Assumptions

**Given:** AC; the IID data, finite second moment, Borel differentiable map, positive finite projected variance, and bootstrap law in the statement.

[A1] AC is assumed because the multivariate IID CLT, multivariate normal construction, and conditional Lindeberg–Feller argument below use it. [[def-axiom-of-choice]]

[F1] The empirical bootstrap is the finite conditional IID law from $P_n$, and $\hat\theta_n=g(\bar X_n)$, $\hat\theta_n^*=g(\bar X_n^*)$. [[def-iid-empirical-bootstrap-sample]]

[F2] Under AC and finite second moment, $\sqrt n(\bar X_n-\mu)\Rightarrow N_d(0,\Sigma)$, including singular $\Sigma$. [[thm-multivariate-iid-central-limit-theorem]]

[F3] If $r_n(T_n-\theta)\Rightarrow Z$ and $g$ is differentiable at $\theta$ with derivative $A$, then $r_n(g(T_n)-g(\theta))\Rightarrow AZ$. [[thm-first-and-second-order-delta-method-for-random-vectors]]

[F4] The conditional projected bootstrap root has CDF converging uniformly in probability to $N(0,a^T\Sigma a)$. [[thm-conditional-iid-bootstrap-clt-for-empirical-law]]

[F5] The sample covariance converges in probability to $\Sigma$. [[lem-iid-sample-covariance-converges]]

[F6] Finite-dimensional weak convergence implies boundedness in probability. [[thm-vector-stochastic-order-calculus]]

[F7] For a multivariate normal vector, $a^TZ\sim N(a^Tm,a^T\Sigma a)$. [[def-multivariate-normal-law]]

[F8] Real convergence in distribution is convergence of CDFs at continuity points of the limiting CDF. [[def-convergence-in-distribution-for-real-random-variables]]

[F9] Conditional Markov bounds the bootstrap vector fluctuation by its conditional second moment. [[cor-markov-inequality-for-random-variables]]

[F10] The normal CDF $\Phi_\sigma$ is continuous. [[def-standard-normal-and-normal-laws]] [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

[F11] In finite-dimensional real spaces, differentiability means a linear first-order term with remainder $o(\|h\|)$. [[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]

## Proof

1.1 By [F2], $Z_n:=\sqrt n(\bar X_n-\mu)\Rightarrow Z$ for $Z\sim N_d(0,\Sigma)$. [A1, F2, given]

1.2 Put $H_n^*=\sqrt n(\bar X_n^*-\bar X_n)$ and $V_n^*=a^TH_n^*$. By [F4], the conditional CDF of $V_n^*$ converges uniformly in probability to $\Phi_\sigma$. Also $\mathbb E^*(\|H_n^*\|^2\mid X_1,\ldots,X_n)=\operatorname{tr}(\widehat\Sigma_n).$ By [F5], this trace converges in probability to $\operatorname{tr}(\Sigma)$. For any $M>0$, $\mathbb P^*(\|H_n^*\|>M\mid X_1,\ldots,X_n)\le \frac{\operatorname{tr}(\widehat\Sigma_n)}{M^2}$ by [F9]. Given $\eta>0$, choose $K>\operatorname{tr}(\Sigma)$; with probability tending to one the trace is at most $K$, and then choosing $M^2>K/\eta$ makes this conditional tail at most $\eta$. Thus $H_n^*$ is bounded in conditional probability, in probability. By [F2] and [F6], $Z_n$ is bounded in probability, so $Z_n+H_n^*=\sqrt n(\bar X_n^*-\mu)$ is also bounded in conditional probability, in probability. [F1, F2, F4, F5, F6, F9, given, algebra, choose]

2.1 Apply [F3] with $r_n=\sqrt n$ and derivative $a^T$. Then $\sqrt n\{g(\bar X_n)-g(\mu)\}\Rightarrow a^TZ$, and [F7] identifies this law as $N(0,\sigma^2)$. This proves the sampling limit. [F3, F7, given, step 1.1]

2.2 By [F11], $g(\mu+h)=g(\mu)+a^Th+r(h)$ with $|r(h)|/\|h\|\to0$. Fix $\varepsilon,\eta>0$. By [F6], choose $R_0$ so that $\limsup_n\mathbb P(\|Z_n\|>R_0)<\eta$. The conditional tightness established in step 1.2 gives $R_1$ such that, for all sufficiently large $n$, the data probability that $\mathbb P^*(\|H_n^*\|>R_1\mid X_1,\ldots,X_n)>\eta$ is below $\eta$. On the complementary data event and $\|Z_n\|\le R_0$, the conditional probability that $\|\sqrt n(\bar X_n^*-\mu)\|>R_0+R_1$ is at most $\eta$. Put $R=R_0+R_1$ and choose $\delta>0$ so $|r(h)|\le \varepsilon\|h\|/(4R)$ for $0<\|h\|<\delta$. For $n$ large enough that $R/\sqrt n<\delta$, the true remainder $\sqrt n|r(\bar X_n-\mu)|$ is at most $\varepsilon/4$ on $\|Z_n\|\le R_0$ (enlarge $R$ to at least $R_0$), and the bootstrap remainder $\sqrt n|r(\bar X_n^*-\mu)|$ is at most $\varepsilon/4$ whenever its root norm is at most $R$. The exceptional data probability has limiting upper bound at most $2\eta$, and the exceptional conditional probability is at most $\eta$ on the remaining data event. Letting $\eta\downarrow0$ proves that the difference of these two remainders is $o_{P^*}(1)$ in probability. Consequently $\sqrt n(\hat\theta_n^*-\hat\theta_n)=V_n^*+\Delta_n^*,$ where $\mathbb P^*(|\Delta_n^*|>\eta\mid X_1,\ldots,X_n)\to0$ in probability for every $\eta>0$. [F1, F6, F11, step 1.2, given, algebra]

3.1 Fix $x\in\mathbb R$ and $h>0$. With $G_n^*$ the conditional CDF of the left side in step 2.2 and $F_n^*$ that of $V_n^*$, the event inclusion gives $F_n^*(x-h)-q_n(h)\le G_n^*(x)\le F_n^*(x+h)+q_n(h),$ where $q_n(h)=\mathbb P^*(|\Delta_n^*|>h\mid X_1,\ldots,X_n)$. By [F4] and step 2.2, for each fixed $h$ these bounds converge in probability to $\Phi_\sigma(x-h)$ and $\Phi_\sigma(x+h)$. Given any tolerance, [F10] lets us choose $h$ so both constants differ from $\Phi_\sigma(x)$ by less than that tolerance; convergence of the bounds then gives $G_n^*(x)\to\Phi_\sigma(x)$ in probability. By [F8], this is conditional weak convergence in probability to the same first-order law as the sampling limit in step 2.1. [F4, F8, F10, step 2.1, step 2.2] ∎
