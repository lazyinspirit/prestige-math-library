---
id: lem-compact-uniform-lan-posterior-approximation
kind: lemma
title: Compact-uniform LAN approximates compact-prior posteriors
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-lan-experiment
  - def-convergence-in-distribution-of-random-elements
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-measurability-of-integration-against-a-kernel
  - cor-markov-inequality-for-random-variables
  - thm-continuous-mapping-theorem
  - def-total-variation-distance-for-probability-laws
  - def-axiom-of-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - cor-weakly-convergent-sequences-are-tight
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §3.1, PDF pp. 13–16
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 23, PDF pp. 11–13
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf
---

## Statement

Assume AC.

Let $H\subset\mathbb R^d$ be compact, let $\pi$ be a probability measure on
$H$, and let $P_{n,0}$ be base laws. Suppose $L_n(h,x)$ is jointly measurable
in $(h,x)$, nonnegative, and satisfies
$\int L_n(h,x)P_{n,0}(dx)=1$ for every $h\in H$. Let
$\Delta_n\Rightarrow Z\sim N_d(0,K)$ under $P_{n,0}$, where $K$ is positive
semidefinite, and put
$$g_h(z)=\exp(h^Tz-\tfrac12h^TKh).$$
Assume the random variable
$$a_n(x):=\sup_{h\in H}|L_n(h,x)-g_h(\Delta_n(x))|$$
is measurable and $E_{P_{n,0}}a_n\to0$. Let the prior-predictive law be
$M_n(dx)=m_n(x)P_{n,0}(dx)$ with
$m_n(x)=\int_HL_n(h,x)\pi(dh)$, and define posteriors
$$\Pi_n(dh\mid x)=\frac{L_n(h,x)\pi(dh)}{m_n(x)},\qquad \Pi^G(dh\mid z)=\frac{g_h(z)\pi(dh)}{m(z)},\quad m(z)=\int_Hg_h(z)\pi(dh),$$
where an arbitrary probability measure is assigned if a denominator is zero.
Then
$$E_{M_n}\int_H\left| \frac{L_n(h,X)}{m_n(X)}- \frac{g_h(\Delta_n(X))}{m(\Delta_n(X))} \right|\pi(dh)\longrightarrow0.$$
In particular the posterior laws converge in expected total variation,
because their event-probability differences are bounded by this $L^1(\pi)$
distance. The convention for total variation is
[[def-total-variation-distance-for-probability-laws]].

This lemma assumes an $L^1$ uniform likelihood-field approximation. Pointwise
LAN alone does not supply that hypothesis.

## Facts & Assumptions

**Given:** AC; the compact set and prior, the mean-one likelihood field, the
central sequence and its Gaussian limit, and the measurable $L^1$ uniform
approximation above.

[A1] [[def-axiom-of-choice]]: AC is assumed for the multivariate normal law.

[F1] [[def-convergence-in-distribution-of-random-elements]]: Weak convergence
of $\Delta_n$ gives convergence of expectations for bounded continuous
functions.

[F2] [[thm-dominated-convergence]]: For a nonnegative integrable $U$,
$E(U-Q)_+\to0$ as $Q\to\infty$, since $(U-Q)_+\le U$.

[F3] [[def-multivariate-normal-law]] and
[[def-standard-normal-and-normal-laws]]: For $Z\sim N_d(0,K)$,
$h^TZ\sim N(0,h^TKh)$; completing the square in the standard normal density
gives $E\exp(h^TZ)=\exp(h^TKh/2)$, so $E g_h(Z)=1$.

[F4] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a
jointly measurable nonnegative function against the prior gives measurable
predictive densities and posterior integrals.

[F5] [[cor-markov-inequality-for-random-variables]]: For nonnegative
integrable $U$ and $b>0$, $P(U>b)\le EU/b$.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: A nonnegative
jointly measurable function may be integrated in either order.

[F7] [[thm-continuous-mapping-theorem]]: Applying a continuous map to weakly
convergent random elements preserves convergence in distribution.

[F8] [[thm-dominated-convergence]]: Pointwise convergence under a common
integrable majorant passes through the integral.

[F9] [[def-euclidean-inner-product]]: $\|z\|_2$ is the Euclidean norm.

[F10] [[cor-weakly-convergent-sequences-are-tight]]: A weakly convergent
sequence of probability laws on $\mathbb R^d$ is tight.

## Proof

**Proof technique:** normalize the two posterior densities and control their
denominators on tight central-sequence sets.

1.1 By [F4], integration against the prior makes $m_n$ measurable; [F6] gives $E_{P_{n,0}}m_n=1$. Also $|m_n(x)-m(\Delta_n(x))|\le a_n(x),$ so $E_{P_{n,0}}m(\Delta_n)\to1$. The function $m$ is continuous: if $z_j\to z$, then $g_h(z_j)\to g_h(z)$ for each $h$, and compactness of $H$ gives a common finite bound on $g_h(z_j)$; [F8] passes the limit through the prior integral. Thus [F1] and [F7] give $m(\Delta_n)\Rightarrow m(Z)$. By [F3], $E m(Z)=1$. Write $U_n=m(\Delta_n)$ and $U=m(Z)$, and discard finitely many indices so $EU_n<\infty$. For $Q>0$, weak convergence of the bounded continuous cutoff and convergence of the means give $E(U_n-Q)_+=EU_n-E(U_n\wedge Q)\to EU-E(U\wedge Q)=E(U-Q)_+$. Since $u\mathbf1_{\{u>2Q\}}\le2(u-Q)_+$, the limsup of the tail expectations is at most $2E(U-Q)_+$, which tends to zero by [F2]. The finitely many initial integrable terms also have vanishing tails; thus $(U_n)$ is uniformly integrable on this eventual index range. [A1, F1, F2, F3, F4, F6, F7, F8, given, algebra]

1.2 Fix $R>0$. On the compact set $\{z:\|z\|_2\le R\}$, the continuous function $m(z)$ has a positive minimum $c_R$, since each $g_h(z)>0$ and $\pi$ is a probability. On the event $\|\Delta_n\|_2\le R$ and $a_n\le c_R/2$, one has $m_n\ge c_R/2$. For the two posterior densities with respect to $\pi$, $\int_H\left|\frac{L_n(h,x)}{m_n(x)}- \frac{g_h(\Delta_n(x))}{m(\Delta_n(x))}\right|\pi(dh) \le\frac{2a_n(x)}{m_n(x)}\le\frac{4a_n(x)}{c_R}.$ Thus the posterior total variation distance is at most $4a_n/c_R$ on this event. [F9, given, algebra]

2.1 The sequence $\Delta_n$ is tight by [F10] because it converges in distribution. For any $Q>0$, $E[m(\Delta_n)\mathbf1_{\{\|\Delta_n\|_2>R\}}] \le E[m(\Delta_n)\mathbf1_{\{m(\Delta_n)>Q\}}] +Q P(\|\Delta_n\|_2>R).$ First choose $Q$ large using uniform integrability from step 1.1, then $R$ large using tightness. Since $m_n\le m(\Delta_n)+a_n$ and $Ea_n\to0$, the predictive probability of $\|\Delta_n\|_2>R$ is correspondingly small. [F1, F2, F10, step 1.1, given, algebra]

3.1 On $\{\|\Delta_n\|_2\le R\}$, $m(\Delta_n)\le M_R$ for some finite $M_R$. By [F5], $M_n(\|\Delta_n\|_2\le R,\ a_n>c_R/2) \le M_R\frac{2Ea_n}{c_R}+Ea_n\to0,$ using $m_n\le m+a_n$. On the complement of the exceptional events established in the preceding two steps, step 1.2 bounds the posterior $L^1(\pi)$ distance by $4a_n/c_R$, and $m_n\le M_R+c_R/2$. Its predictive expectation is therefore at most $4(M_R+c_R/2)Ea_n/c_R\to0$. The distance is at most two on the exceptional events, whose predictive probabilities vanish as first $n\to\infty$ and then $R\to\infty$. This proves the first conclusion. [F4, F5, step 1.2, step 2.1, given, algebra]

4.1 For bounded continuous $f$, the predictive law satisfies $E_{M_n}f(\Delta_n)=E_{P_{n,0}}[m_n f(\Delta_n)] =E_{P_{n,0}}[m(\Delta_n)f(\Delta_n)]+o(1).$ For a cutoff $Q$, $(m\wedge Q)f$ is bounded and continuous, so its expectation converges by [F1]. The tail error is at most $\|f\|_\infty E[m(\Delta_n)\mathbf1_{\{m(\Delta_n)>Q\}}]$, which tends uniformly to zero as $Q\to\infty$ by step 1.1. Thus the limit is $E[m(Z)f(Z)]$. This is the Gaussian-shift mixture with base law $N_d(0,K)$ and density $m(z)$. [F1, step 1.1, F3, given, algebra] ∎

