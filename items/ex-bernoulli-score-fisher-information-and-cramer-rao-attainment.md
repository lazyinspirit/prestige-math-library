---
id: ex-bernoulli-score-fisher-information-and-cramer-rao-attainment
kind: example
title: "Bernoulli score, information, and attainment of the scalar bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - thm-score-mean-zero-and-information-identity
  - thm-cramer-rao-lower-bound
  - def-statistic-and-estimator
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - def-derivative
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, §3.1 and Bernoulli information calculation, PDF pp. 21–23"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 6: Efficient Estimators, Rao-Cramer Bound, PDF pp. 4–6"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/15224973dfc1c2b4287804c8712681f7_MIT14_381F18_lec6.pdf"
---

## Example

Assume AC. Let $X$ take values in $\{0,1\}$, with
$P_p(X=1)=p$, $P_p(X=0)=1-p$, and $p\in(0,1)$. With counting measure as
dominator, this is a one-parameter common-support model. The statistic $T=X$
is unbiased for $\psi(p)=p$, and it attains the scalar Cramér–Rao bound.

## Facts & Assumptions

**Given:** AC; $p\in(0,1)$; the finite probability law on $\{0,1\}$ with
masses $p$ and $1-p$; and the statistic $T(x)=x$.

[A1] [[def-axiom-of-choice]]: AC supplies the arbitrary-index density
representatives used by the general score definition.

[F1] [[def-statistic-and-estimator]]: an estimator is a measurable statistic
with a specified target space.

[F2] [[cor-expectation-agrees-with-the-finite-weighted-sum]]: on a finite
probability space, expectation is the sum of values weighted by their
probabilities.

[F3] [[def-score-and-fisher-information]]: the score is the parameter
derivative of the log density, and scalar information is its expected square.

[F4] [[thm-score-mean-zero-and-information-identity]]: fixed positive support,
continuous first and second derivatives with common integrable envelopes on a
neighborhood, and a finite score second moment imply mean-zero score and the
information identity.

[F5] [[def-moments-variance-and-covariance]]: variance is the expected square
of the centered variable, and covariance is the expected product of centered
variables.

[F6] [[thm-cramer-rao-lower-bound]]: assume AC and an open scalar parameter
interval. For a real-valued estimator $T$ with finite second moment at $p$
and $\mathbb E_qT=\psi(q)$ on a neighborhood of $p$, where $\psi$ is
differentiable at $p$, a mean-zero score with finite positive information
and $\operatorname{Cov}_p(T,S_p)=\psi'(p)$ gives the scalar variance bound
and its almost-sure equality condition.

[F8] [[def-derivative]]: the derivative is the limit of the difference
quotient $(f(x)-f(c))/(x-c)$ at $c$.

## Verification

**Proof technique:** direct.

1.1 Put $\varepsilon:=\tfrac12\min\{p,1-p\}>0$, the open neighborhood $U:=(p-\varepsilon,p+\varepsilon)$, and its compact closure $K:=[p-\varepsilon,p+\varepsilon]\subset(0,1)$. For $q\in K$, the masses $p_q(1)=q$ and $p_q(0)=1-q$ are positive and twice continuously differentiable on the fixed support $S=\{0,1\}$, with common exceptional set $N=\varnothing$. With counting measure $\#$, their first derivatives are $1$ and $-1$, and their second derivatives are $0$. Thus the common envelopes $g_1(0)=g_1(1)=1$ and $g_2\equiv0$ dominate all first and second derivatives on $U$; they are integrable because $\int g_1\,d\#=2$ and $\int g_2\,d\#=0$. [F4, given]

1.2 The map $T(x)=x$ is real-valued and measurable on the full power set of $\{0,1\}$. For every $q\in(0,1)$, the masses sum to $1$, and [F2] gives $\mathbb E_qT=q$ and $\mathbb E_qT^2=q<\infty$; hence $T=X$ is unbiased for $\psi(q)=q$ throughout the parameter interval, including a neighborhood of $p$. At $p$, finite summation gives $\operatorname{Var}_p(T)=p(1-p)$. The log density is $\ell_p(x)=x\log p+(1-x)\log(1-p)$. Differentiating gives $S_p(x)=x/p-(1-x)/(1-p)=(x-p)/(p(1-p))$ and $\ell_p''(x)=-x/p^2-(1-x)/(1-p)^2$. Since the two score values are finite, its second moment is finite. Finite summation yields $\mathbb E_pS_p=0$ and $I(p)=\mathbb E_pS_p^2=1/[p(1-p)]=-\mathbb E_p\ell_p''$, agreeing with [F4]. [A1, F1, F2, F3, F4, given, algebra]

2.1 Since $S_p=(X-p)/(p(1-p))$, [F5] gives $\operatorname{Cov}_p(X,S_p)=\operatorname{Var}_p(X)/[p(1-p)]=1$. On the open parameter interval $(0,1)$, $\psi(p)=p$ has difference quotient $1$ at every $x\ne p$, so [F8] gives $\psi'(p)=1$; the score-covariance identity required by [F6] holds. [F5, F6, F8, step 1.1, step 1.2, algebra]

3.1 The bound from [F6] is $\operatorname{Var}_p(T)\ge1/I(p)=p(1-p)$, and step 1.2 gives equality. Moreover $T-\psi(p)=X-p=p(1-p)S_p=(\psi'(p)/I(p))S_p$, exactly its equality condition. [F6, step 1.1, step 1.2, step 2.1, algebra] ∎
