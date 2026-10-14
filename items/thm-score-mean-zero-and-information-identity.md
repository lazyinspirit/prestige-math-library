---
id: thm-score-mean-zero-and-information-identity
kind: theorem
title: "Mean-zero score and the information identity"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-probability-measure
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-higher-derivatives-and-smoothness
  - cor-mean-value-theorem
  - thm-dominated-convergence
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, §3.1–3.2, Theorems 3.4 and 3.7, PDF pp. 21–24"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture 13: Unbiased Estimation and Risk Inequalities, PDF pp. 6–8, 16–17"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/9e3152248b9f79ea4d5cfaae9f31c21b_MIT18_655S16_LecNote13.pdf"
---

## Statement

Assume the Axiom of Choice for the selected density representatives. Let
$\Theta$ be open in $\mathbb R^d$, let $\mu$ be a fixed sigma-finite
dominating measure, and let $p_\eta$ be the selected densities of a
statistical model. Fix $\theta\in\Theta$. Suppose that on a neighborhood
$U$ of $\theta$ there are a fixed measurable support $S$ and a
$\mu$-null set $N$ such that, for every $x\in S\setminus N$,
$p_\eta(x)>0$ and $\eta\mapsto p_\eta(x)$ has continuous first and second
partial derivatives on $U$; outside $S\cup N$, $p_\eta(x)=0$ for all
$\eta\in U$. Suppose there are nonnegative $g_1,g_2\in L^1(\mu)$ that
uniformly dominate every first partial derivative and every second partial
derivative, respectively, on $U$. Also assume
$\mathbb E_\theta\|S_\theta(X)\|^2<\infty$.

Then $\mathbb E_\theta S_\theta(X)=0$, and, entrywise,
$$I(\theta)=\mathbb E_\theta[S_\theta(X)S_\theta(X)^\mathsf T] =-\mathbb E_\theta[\nabla_\theta^2\ell_\theta(X)].$$
For a scalar parameter this reads
$\mathbb E_\theta S_\theta=0$ and
$I(\theta)=\mathbb E_\theta S_\theta^2
=-\mathbb E_\theta[\ell_\theta''(X)]$.

This common-support, integrable-envelope setup is sufficient, not necessary:
the theorem does not claim that every model with valid score identities must
have common support or these envelopes.

## Facts & Assumptions

**Given:** AC; $\Theta\subseteq\mathbb R^d$ open; a fixed sigma-finite dominating measure $\mu$; a selected density family $p_\eta$; a fixed support $S$ and common null set $N$ on a neighborhood $U$; pointwise continuous first and second partial derivatives on $S\setminus N$; integrable uniform envelopes $g_1,g_2$ for those derivatives; and a finite second moment of the score.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function; here it supplies the simultaneous family of density representatives.

[F1] [[def-dominated-statistical-experiment]]: every sampling law $P_\eta$ is dominated by the fixed sigma-finite positive measure $\mu$.

[F2] [[def-likelihood-density]]: $p_\eta$ is a selected measurable Radon–Nikodym representative of $dP_\eta/d\mu$.

[F3] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]: $P_\eta(A)=\int_Ap_\eta\,d\mu$ for every measurable $A$.

[F4] [[def-probability-measure]]: $P_\eta(\mathcal X)=1$.

[F5] [[def-measure-with-density]] and [[thm-integration-against-a-density]]: if $P_\eta=p_\eta\,d\mu$, then $\mathbb E_\eta f(X)=\int f p_\eta\,d\mu$ for nonnegative $f$. For real integrable $f$, apply this identity to $f^+$ and $f^-$; applying it first to $|f|$ shows $|f|p_\eta$ is integrable, so the signed identity follows from the definition of the signed integral.

[F6] [[cor-mean-value-theorem]]: for a differentiable function on an interval, the difference quotient between two endpoints equals its derivative at an intermediate point.

[F7] [[thm-dominated-convergence]]: pointwise almost-everywhere convergence under one integrable majorant implies convergence of the integrals.

[F8] [[def-score-and-fisher-information]]: on $p_\theta>0$, the score is $\nabla_\theta\log p_\theta$ and the information matrix has entries $\mathbb E_\theta[S_{\theta,i}S_{\theta,j}]$.

[F9] [[thm-chain-rule]], [[thm-algebra-of-derivatives]], and [[thm-logarithm-derivative-and-integral]]: on the positive support, $\partial_j\ell=(\partial_jp)/p$ and $\partial_{ij}\ell=(\partial_{ij}p)/p-(\partial_ip)(\partial_jp)/p^2$.

[F10] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: expectations are integrals and signed expectations require integrability.

[F11] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: for integrable functions, the integral commutes with differences and scalar multiplication.

## Proof

**Proof technique:** direct.

1.1 By [F2]–[F4], every selected density has $\int p_\eta\,d\mu=P_\eta(\mathcal X)=1$. Fix a coordinate $j$ and a sequence $h_n\to0$ with $\theta+h_ne_j\in U$. For almost every $x\in S$, the mean value theorem [F6] bounds $\left|(p_{\theta+h_ne_j}(x)-p_\theta(x))/h_n\right|$ by $g_1(x)$, and the quotient converges to $\partial_jp_\theta(x)$. Dominated convergence [F7] therefore gives convergence of the quotient integrals. Linearity [F11] shows each quotient integral is $(1-1)/h_n=0$, so $\int\partial_jp_\theta\,d\mu=0$. Since $\mathbb E_\theta S_{\theta,j}^2<\infty$ and $P_\theta$ is a probability, $S_{\theta,j}$ is integrable (use $|z|\le(1+z^2)/2$). On $S$, the signed density identity [F5] and [F8] identify $\mathbb E_\theta S_{\theta,j}$ with this integral; outside $S$ the law is zero. Thus every score coordinate has mean zero. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F11, given, choose]

2.1 For any coordinates $i,j$, apply the same sequence argument to $\partial_i p_{\theta+h_ne_j}$. The mean value theorem bounds its difference quotient by $g_2$, so [F7] interchanges this derivative and the integral. Step 1.1 holds at every parameter in $U$, hence $\int\partial_i p_\eta\,d\mu=0$ throughout $U$; linearity [F11] turns each difference-quotient integral into the difference of these zero integrals. Dominated convergence then gives $\int\partial_{ij}p_\theta\,d\mu=0$. [F6, F7, F11, step 1.1, given]

3.1 On $S\setminus N$, differentiate $\ell_\theta=\log p_\theta$ using [F9]. Multiplying the Hessian formula by $p_\theta$, integrating with the signed density identity [F5] and linearity [F11], and using step 2.1 yields $\mathbb E_\theta[\partial_{ij}\ell_\theta] =\int\partial_{ij}p_\theta\,d\mu-\mathbb E_\theta[S_{\theta,i}S_{\theta,j}] =-\mathbb E_\theta[S_{\theta,i}S_{\theta,j}]$. The terms are integrable: $\int|\partial_{ij}p_\theta|\,d\mu\le\int g_2\,d\mu$, and $2|S_{\theta,i}S_{\theta,j}|\le S_{\theta,i}^2+S_{\theta,j}^2$. [F5, F8, F9, F10, F11, step 2.1, given, algebra]

4.1 The coordinate identities in step 3.1 give the asserted matrix identity; when $d=1$ they give the scalar identity. Step 1.1 supplies the score mean-zero claim in both cases. [step 1.1, step 3.1] ∎
