---
id: def-linear-process-and-arma-model
kind: definition
title: "Linear processes, white noise, and ARMA models"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-moments-variance-and-covariance
justified_by:
  - lem-absolutely-summable-linear-filters-preserve-weak-stationarity
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 3.1 and Theorems 3.1–3.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 2.1–2.5"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X=(X_t)_{t\in\mathbb Z}$ be a real process on one probability space.
The backshift is $(BX)_t:=X_{t-1}$, and for a polynomial
$a(z)=\sum_{j=0}^m a_jz^j$ set
$a(B)X_t:=\sum_{j=0}^m a_jX_{t-j}$. Weak stationarity and the covariance
convention are those of
[[def-strict-and-weak-stationarity-for-time-series]] and
[[def-moments-variance-and-covariance]].

A real process $\epsilon=(\epsilon_t)_{t\in\mathbb Z}$ is **white noise**
with variance $\sigma^2$ when
$\mathbb E[\epsilon_t]=0$, $0<\sigma^2=\mathbb E[\epsilon_t^2]<\infty$,
and $\operatorname{Cov}(\epsilon_t,\epsilon_s)=0$ for all $s\ne t$.
This definition requires only zero covariance at distinct times; it does not
require independence, identical distributions, or Gaussian laws.

For a real sequence $\psi=(\psi_j)_{j\ge0}$ with
$\sum_{j\ge0}|\psi_j|<\infty$, a **causal linear process** driven by white
noise is
$$X_t-\mu:=\sum_{j=0}^{\infty}\psi_j\epsilon_{t-j},\qquad t\in\mathbb Z,$$
where the series is its almost-sure and $L^2$ limit, established by
[[lem-absolutely-summable-linear-filters-preserve-weak-stationarity]].

An **ARMA$(p,q)$ model**, for nonnegative integers $p,q$, is an equation
$$\phi(B)(X_t-\mu)=\theta(B)\epsilon_t,\qquad t\in\mathbb Z,$$
where
$$\phi(z)=1-\sum_{j=1}^p\phi_jz^j,\qquad \theta(z)=1+\sum_{j=1}^q\theta_jz^j$$
have real coefficients and constant term one. If $p=0$ or $q=0$, the
corresponding polynomial is $1$. The displayed equation is imposed with a
**coprime normalized pair**, meaning that the two polynomials have no common
complex root and both have constant term one. Given an unreduced pair,
cancel every common nonconstant factor in $\mathbb C[z]$ and normalize
both remaining polynomials to have constant term one to define its associated
**reduced model**. This is a model convention: a solution of the unreduced
equation need not satisfy the reduced equation. Root criteria for the reduced
pair apply only to solutions of that reduced equation.

For an AR$(p)$ model ($q=0$), expansion gives the regression form
$X_t=c+\sum_{j=1}^p\phi_jX_{t-j}+\epsilon_t$ with
$c=\mu(1-\sum_{j=1}^p\phi_j)$. Thus a fixed intercept in the AR regression
is the original mean parameter written in observation coordinates.

A **causal representation** of this model is a representation
$X_t-\mu=\sum_{j\ge0}\psi_j\epsilon_{t-j}$ with
$\sum_j|\psi_j|<\infty$. An **invertible representation** is
$\epsilon_t=\sum_{j\ge0}\pi_j(X_{t-j}-\mu)$ with
$\sum_j|\pi_j|<\infty$. These are properties of the displayed relation
between $X$ and $\epsilon$, not claims that white noise is iid.
