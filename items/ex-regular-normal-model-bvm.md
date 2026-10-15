---
id: ex-regular-normal-model-bvm
kind: example
title: A correctly specified regular normal mean model
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-standard-normal-and-normal-laws
  - def-total-variation-distance-for-probability-laws
  - lem-normal-density-has-total-mass-one
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited through the library standard-normal and multivariate-normal conventions used by the BvM target. All posterior algebra is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart, Asymptotic Statistics, Chapter 10, §10.2, Theorem 10.1 and proof"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/asymp/bayes.pdf"
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, §1 and §2.1"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

Let $X_1,\ldots,X_n$ be IID $N(\theta^*,1)$, with parameter space
$\Theta=\mathbb R$, and use the proper prior $N(0,\tau^2)$, where $\tau>0$.
The posterior is exactly normal; its $n^{1/2}$-scaled law about the true
interior point converges in total variation to
$N(\sqrt n(\bar X-\theta^*),1)$, the regular BvM form.

## Facts & Assumptions

**Given:** AC; $\theta^*\in\mathbb R$, $\tau>0$, IID data from the density $\phi(x-\theta^*)$, likelihood $\phi(x-\theta)$, and prior density $\tau^{-1}\phi(\theta/\tau)$, where $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the standard-normal law and the nondegenerate Gaussian BvM comparison law.

[F1] [[lem-normal-density-has-total-mass-one]], [[def-standard-normal-and-normal-laws]]: $\phi$ is a probability density; its translate $\phi(x-\theta^*)$ and scale transform $\tau^{-1}\phi(\theta/\tau)$ are probability densities by translation and the change of variables $u=\theta/\tau$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The observations have one common law and are mutually independent.

[F3] [[def-total-variation-distance-for-probability-laws]]: $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|$.

## Verification

**Given:** The model, prior, and data in the Example.

1.1 The prior density is continuous and strictly positive at $\theta^*$, and $\theta^*$ is interior to $\Theta=\mathbb R$. The log-likelihood ratio at $\theta^*+h/\sqrt n$ is exactly $h\Delta_n-h^2/2$, where $\Delta_n=\sqrt n(\bar X-\theta^*)$. The standard-normal density is even, so its mean is zero; integration by parts using $\phi'(x)=-x\phi(x)$ gives $E Z^2=\int x^2\phi(x)dx=\int\phi(x)dx=1$, with boundary term $x\phi(x)\to0$. By [F2], the sample mean has variance $1/n$, hence $E\Delta_n^2=1$. Since $R^2\mathbf1_{\{|\Delta_n|>R\}}\le\Delta_n^2$, $P(|\Delta_n|>R)\le R^{-2}$, so $\Delta_n=O_P(1)$. The compact-uniform LAN condition holds with $V=1$. [A1, F1, F2, given, algebra]

1.2 Multiplying the likelihood by the prior gives a kernel proportional to $\exp\{-\tfrac12[n(\theta-\bar X)^2+\tau^{-2}\theta^2]\}$. Completing the square yields posterior variance $v_n=(n+\tau^{-2})^{-1}$ and posterior mean $m_n=n\bar X/(n+\tau^{-2})$. Thus the scaled posterior of $H_n=\sqrt n(\theta-\theta^*)$ is $N(a_n,b_n)$, where $a_n=\sqrt n(m_n-\theta^*)$ and $b_n=n/(n+\tau^{-2})$. [F1, given, algebra]

2.1 We have $b_n\to1$ and $a_n-\Delta_n=-\tau^{-2}\sqrt n\bar X/(n+\tau^{-2})=o_P(1)$ because $\sqrt n\bar X=\sqrt n\theta^*+O_P(1)$. Translation invariance and the triangle inequality reduce the total-variation distance to a centered scale change and a location shift. For $b\in[1/2,2]$, the centered densities $\phi_b(x)=(2\pi b)^{-1/2}e^{-x^2/(2b)}$ are dominated by $C e^{-x^2/4}$ and converge pointwise to $\phi_1$ as $b\to1$, so dominated convergence gives $\|\phi_b-\phi_1\|_1\to0$. For a shift $u$, the fundamental theorem of calculus gives $\|\phi_b(\cdot-u)-\phi_b\|_1\le |u|\|\phi_b'\|_1=C|u|/\sqrt b$. These two bounds prove $\|N(a_n,b_n)-N(\Delta_n,1)\|_{\rm TV}=o_P(1)$ under the convention [F3]. [F1, F3, step 1.1, step 1.2, algebra]

3.1 The scaled posterior $N(a_n,b_n)$ is tight in probability because $a_n=O_P(1)$ and $b_n\le1$. More explicitly, on $|a_n|\le R$, its mass outside $[-M_n,M_n]$ is at most $P(|Z|>M_n-R)$ for $Z\sim N(0,1)$; first choose $R$ by boundedness of $a_n$, then let $M_n\to\infty$. Thus every-diverging-radius contraction holds, and step 2.1 directly proves the asserted posterior normal approximation. [step 1.2, step 2.1, given] ∎
