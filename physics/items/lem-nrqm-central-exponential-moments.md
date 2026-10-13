---
id: lem-nrqm-central-exponential-moments
aliases: [nrqm-central-exponential-moments]
kind: lemma
domain: mathematics
title: "Moments of the exponential law on the half-line"
status: published
origin: session
dependency_level: 0
deps: [def-real-gamma-function-by-the-euler-integral, cor-real-gamma-positive-integer-values, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, def-countable-choice]
dependency_roles:
  def-real-gamma-function-by-the-euler-integral: mathematical-premise
  cor-real-gamma-positive-integer-values: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4 pp. 229-235 (evaluation of the Laguerre normalisation integrals of the Coulomb eigenfunctions, which reduce to the moments of this lemma)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §5.2 'Definitions' (the gamma function as an integral, and its values at positive integers: §5.2(i) and the recurrence of §5.5(i))"
      url: "https://dlmf.nist.gov/5.2"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), the choice
hypothesis used by the change-of-variables lemma cited below. For every real
$\lambda>0$ and every integer $k\ge0$ the function $r\mapsto r^{k}e^{-\lambda
r}$ is Lebesgue integrable on $(0,\infty)$ and

$$\int_0^\infty r^{k}e^{-\lambda r}\,dr=\frac{k!}{\lambda^{k+1}}.$$

The assertion is an identity for the Lebesgue integral of a nonnegative Borel
function; no probabilistic interpretation and no normalised density are
asserted. In particular no statement is made about any other exponent, about
complex $\lambda$, or about negative powers.

## Facts & Assumptions

**Given:** A real $\lambda>0$, an integer $k\ge0$, and the Axiom of Countable Choice.

[F1] **Gamma integral.** For every $s>0$ one has $\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt$, the Euler integral being finite and positive for exactly these $s$ ([[def-real-gamma-function-by-the-euler-integral]]).

[F2] **Integer values.** $\Gamma(n+1)=n!$ for every $n\in\mathbb N_0$ ([[cor-real-gamma-positive-integer-values]]).

[F3] **Change of variables.** Let $m\ge1$ and let $T:U\to V$ be a $C^1$ diffeomorphism between open subsets of $\mathbb R^m$. For every nonnegative Borel $h:V\to[0,\infty]$ one has $\int_V h(y)\,dy=\int_U h(T(x))|\det DT(x)|\,dx$, with equality in $[0,\infty]$ ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

## Proof

**Proof technique:** direct; change variables $r\mapsto\lambda r$ on the open half-line and evaluate the resulting gamma integral at an integer argument.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Change of variables] Let $T:(0,\infty)\to(0,\infty)$ be $T(x):=x/\lambda$. Then $T$ is a $C^1$ diffeomorphism of open subsets of $\mathbb R$ with $T'(x)=1/\lambda$ and $\det DT(x)=1/\lambda$ nonzero and constant, and its inverse is $y\mapsto\lambda y$. The function $h(r):=r^{k}e^{-\lambda r}$ is continuous, hence Borel, and nonnegative on $(0,\infty)$. With $y=T(x)$ one has $h(T(x))\cdot|\det DT(x)|=(x/\lambda)^{k}e^{-x}\cdot(1/\lambda)=\lambda^{-(k+1)}x^{k}e^{-x}$, a nonnegative Borel function of $x$. [given, F3, algebra]

1.2 [Gamma value] Taking $s:=k+1>0$ in [F1], the integral $\int_0^\infty x^{k}e^{-x}\,dx=\Gamma(k+1)$ is finite, and [F2] gives $\Gamma(k+1)=k!$. [F1, F2]

2.1 [Assembly] By [F3] applied to the diffeomorphism of step 1.1 and the function $h$ of that step, $$\int_0^\infty r^{k}e^{-\lambda r}\,dr=\int_0^\infty \lambda^{-(k+1)}x^{k}e^{-x}\,dx=\lambda^{-(k+1)}\int_0^\infty x^{k}e^{-x}\,dx=\frac{k!}{\lambda^{k+1}},$$ where the middle equality is the scalar rule for the nonnegative integral and the last equality is step 1.2; the value is finite, so $r\mapsto r^{k}e^{-\lambda r}$ is integrable on $(0,\infty)$. [step 1.1, step 1.2, F3, algebra] ∎

## Remarks

- **Only the half-line is used.** The change of variables is applied to the open
  half-line $(0,\infty)$, which is an open subset of $\mathbb R$; no endpoint
  value of the integrand at $0$ or at $+\infty$ is used, and the equality is an
  equality in $[0,\infty]$.
- **Scaling convention.** The exponent $k+1$ in the denominator and the
  factorial $k!$ in the numerator are fixed by the convention that the
  unscaled integral is $\Gamma(k+1)=k!$; in particular the mean of the
  normalised density $r\mapsto\lambda e^{-\lambda r}$ is $1/\lambda$.
