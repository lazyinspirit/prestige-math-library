---
id: cex-uniform-maximum-has-n-rate-not-root-n
kind: counterexample
title: "The uniform endpoint MLE has rate n, not square-root n"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-qmd-path
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - def-convergence-in-distribution-for-real-random-variables
  - def-convergence-in-probability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 15"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf"
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf"
    - title: "Yen-Chi Chen, UW STAT 581 Chapter 3: M-estimation and the maximum likelihood estimator"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec3_Mest.html"
---

## Statement refuted

For an integer $n\ge1$, iid $X_i\sim\operatorname{Unif}[0,\theta]$ with fixed $\theta>0$ have an endpoint MLE with a nonzero root-$n$ fluctuation: $\sqrt n(\theta-X_{(n)})$ does not converge in probability to zero.

## Facts & Assumptions

**Given:** $\theta>0$, IID observations with density $p_\theta(x)=\theta^{-1}\mathbf1_{[0,\theta]}(x)$, and $X_{(n)}:=\max_{1\le i\le n}X_i$.

[F1] IID means a common law and mutual independence ([[def-identically-distributed-and-iid-random-variables]]); a probability law has total mass one ([[def-probability-measure]]).

[F2] QMD at an interior point requires a square-root-density score remainder with squared $L^2(\mu)$ norm $o(h^2)$ ([[def-qmd-path]]).

[F3] For real random variables, $Y_n\Rightarrow Y$ means convergence of CDFs at every continuity point of the limiting CDF ([[def-convergence-in-distribution-for-real-random-variables]]).

[F4] $Y_n\to_P y$ means $P(|Y_n-y|>\varepsilon)\to0$ for every $\varepsilon>0$ ([[def-convergence-in-probability]]).

## Counterexample

The parameter space is $\Theta=(0,\infty)$ and the common dominating measure is Lebesgue measure. The MLE is understood almost surely; on the null event $X_{(n)}=0$, assign any fixed positive value.

**Given:** The Uniform model and IID sample in the Statement.

1.1 On the probability-one event $0<X_{(n)}\le\theta$, the likelihood at a candidate $u>0$ is $L_n(u)=\prod_{i=1}^np_u(X_i)=u^{-n}\mathbf1\{X_{(n)}\le u\}$. It is zero for $u<X_{(n)}$, while for $u\ge X_{(n)}$ it equals $u^{-n}\le X_{(n)}^{-n}=L_n(X_{(n)})$, with strict inequality if $u>X_{(n)}$. Thus $X_{(n)}$ maximizes the likelihood almost surely; on the null event $X_{(n)}=0$, use the arbitrary positive assignment specified above. [F1, given, algebra]

1.2 For $0\le t<n\theta$, independence and the uniform CDF give $P_\theta\{n(\theta-X_{(n)})>t\}=P_\theta\{X_i<\theta-t/n\text{ for every }i\}=(1-t/(n\theta))^n$. For fixed $t\ge0$ this formula applies for all sufficiently large $n$, and its limit is $e^{-t/\theta}$. [F1, given, algebra]

1.3 For every $h>0$ small enough that $\theta+h>0$, the gained support interval $(\theta,\theta+h]$ has $p_\theta=0$ and $p_{\theta+h}=1/(\theta+h)$. If the model were QMD at $\theta$, the score term in [F2] would vanish on this interval and the squared remainder integral would be at least $\int_\theta^{\theta+h}p_{\theta+h}(x)\,dx=h/(\theta+h)$. But $[h/(\theta+h)]/h^2=1/[h(\theta+h)]\to\infty$, contradicting the required $o(h^2)$ remainder. Thus the model is not QMD at $\theta$. [F2, given, assume-contra, algebra, discharge-contradiction: the gained-support remainder is not $o(h^2)$]

2.1 Therefore the nonnegative variable $n(\theta-X_{(n)})$ converges in distribution to the exponential law with rate $1/\theta$, whose CDF is $0$ for $t<0$ and $1-e^{-t/\theta}$ for $t\ge0$. The limiting CDF is continuous, so [F3] applies at every real $t$. [F3, step 1.2]

3.1 For any $\varepsilon>0$ and all $n>\varepsilon^2/\theta^2$, the exact maximum formula gives $P_\theta\{\sqrt n(\theta-X_{(n)})>\varepsilon\}=(1-\varepsilon/(\theta\sqrt n))^n\to0$. Thus $\sqrt n(\theta-X_{(n)})\to_P0$ by [F4], refuting the stated nonzero root-$n$ fluctuation and confirming the faster $n$ rate in step 2.1. [F4, step 1.2, step 2.1, algebra] ∎
