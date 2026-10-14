---
id: ex-likelihood-ratio-test-supermartingale
kind: example
title: A finite-horizon likelihood-ratio test supermartingale
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-nonnegative-test-supermartingale
  - def-filtration-and-filtered-probability-space
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
generation:
  role: example
sources:
  references: []
---

## Example

Fix an integer $K\ge1$. Let $\Omega=\{0,1\}^K$ and let $P_0$ be uniform on
$\Omega$, so the coordinate variables $X_1,\ldots,X_K$ are independent
Bernoulli$(1/2)$. Let $Q$ be the product Bernoulli$(3/4)$ law and let
$\mathcal F_t=\sigma(X_1,\ldots,X_{\min(t,K)})$. The likelihood ratio of $Q$
to $P_0$ on $\mathcal F_t$ is
$$E_t=\prod_{i=1}^{\min(t,K)}\ell(X_i),\qquad \ell(1)=\frac32,\quad \ell(0)=\frac12,$$
with the empty product $E_0=1$. It is a nonnegative test martingale, hence a
nonnegative test supermartingale, for the simple null $\{P_0\}$.

## Facts & Assumptions

**Given:** $K\ge1$, the finite sample space, laws, filtration, and process in
the Example. Assume AC for the test-supermartingale convention.

[F1] [[def-nonnegative-test-supermartingale]]: the process must be real-valued, adapted, integrable, nonnegative, supermartingale under the null, and have initial expectation at most one.

[A1] [[def-axiom-of-choice]]: AC supplies the conditional-expectation convention used in F1.

## Verification

1.1 For a prefix $x_1,\ldots,x_t$ with $t\le K$, the ratio of its $Q$-probability to its $P_0$-probability is $\prod_{i=1}^t(Q(X_i=x_i)/P_0(X_i=x_i))=\prod_{i=1}^t\ell(x_i)$, because every $P_0$ prefix has positive probability. Thus the displayed process is the finite-prefix likelihood ratio; after time $K$ it is held constant. [given, construct]

2.1 Each $E_t$ is a finite nonnegative function of the first $\min(t,K)$ coordinates, hence is adapted and integrable. Conditional on any prefix before time $K$, the next bit is fair and $\mathbb E_{P_0}[\ell(X_{t+1})\mid\mathcal F_t]=(3/2+1/2)/2=1$, so $\mathbb E_{P_0}[E_{t+1}\mid\mathcal F_t]=E_t$. For $t\ge K$ the process is constant. [given, step 1.1, algebra]

3.1 Since $E_0=1$, steps 1.1 and 2.1 verify every condition in F1 under the null law $P_0$; hence $E$ is a test martingale and a test supermartingale. [F1, A1, step 1.1, step 2.1] ∎
