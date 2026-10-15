---
id: ex-normal-working-model-misspecified-coverage
kind: example
title: A unit-variance normal working model can miscalibrate credible intervals
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-standard-normal-and-normal-laws
  - lem-normal-density-has-total-mass-one
  - thm-multivariate-iid-central-limit-theorem
  - thm-portmanteau-theorem
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the iid CLT and library normal-law convention. The posterior completion of the square and width comparison are algebraic."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Example 2.1"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "Natalia Bochkina, Bernstein-von Mises theorem and misspecified models: a review, §§1.2 and 1.4"
      url: "https://www.maths.ed.ac.uk/~nbochkin/ReviewBvMmisspecifiedBochkinaRevision.pdf"
---

## Example

Let $X_i$ be IID from a truth $P_0$ with a Lebesgue density, $E_0X=0$, and
$0<\operatorname{Var}_0(X)=\sigma^2<\infty$. Use the working likelihood
$p_\theta(x)=\phi(x-\theta)$ on $\Theta=\mathbb R$ and prior density
$\pi(\theta)=\tau^{-1}\phi(\theta/\tau)$, where $\tau>0$ and
$\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$. The expected negative log-likelihood is
minimized at $\theta^*=0$; if the directional KL divergence is finite, this
is its KL projection. The exact posterior is normal with width asymptotic to
$n^{-1/2}$, while the sample mean has width $\sigma n^{-1/2}$. A central
posterior interval with nominal mass $1-\alpha$ therefore has limiting
sampling coverage $2\Phi(z_{1-\alpha/2}/\sigma)-1$, which is not generally
$1-\alpha$.

## Facts & Assumptions

**Given:** AC; the truth's IID, zero-mean, finite-positive-variance sample; working density $p_\theta(x)=\phi(x-\theta)$; proper prior density $\tau^{-1}\phi(\theta/\tau)$; and $0<\alpha<1$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the multivariate iid CLT and normal-law suppliers.

[F1] [[lem-normal-density-has-total-mass-one]], [[def-standard-normal-and-normal-laws]]: $\phi$ integrates to one, is even, and defines the standard normal probability law; translation and positive scaling preserve total mass.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The observations are mutually independent and share the common law $P_0$.

[F3] [[thm-multivariate-iid-central-limit-theorem]]: Under AC, iid finite-second-moment vectors satisfy the multivariate CLT.

[F4] [[thm-portmanteau-theorem]]: Under weak convergence, probabilities converge on Borel sets whose boundary has zero limit probability.

## Verification

**Given:** The model and hypotheses in the Example.

1.1 The model and truth are dominated by Lebesgue measure. The supplied Gaussian density is normalized by [F1]. Its log likelihood is $\ell_\theta(x)=-\tfrac12(x-\theta)^2-\tfrac12\log(2\pi)$, so $E_0[\ell_0(X)-\ell_\theta(X)]=\tfrac12\theta^2$ because $E_0X=0$. Thus $\theta^*=0$ is the unique expected-log-likelihood maximizer and $V=1$. The score at zero is $s(X)=X$, hence $I=E_0X^2=\sigma^2$. For $|\theta_1|,|\theta_2|\le r$, $|\ell_{\theta_1}(X)-\ell_{\theta_2}(X)|\le|\theta_1-\theta_2|(|X|+r)$, a square-integrable local envelope. The local log likelihood ratio at $h/\sqrt n$ is exactly $h\sqrt n\bar X-h^2/2$, with $\sqrt n\bar X=O_{P_0}(1)$ by Chebyshev. [A1, F1, F2, given, algebra]

1.2 Completing the square in $\prod_i\phi(X_i-\theta)\pi(\theta)$ gives posterior mean $m_n=n\bar X/(n+\tau^{-2})$ and variance $v_n=(n+\tau^{-2})^{-1}$. The empirical log likelihood is maximized at $\bar X$, since its $\theta$-dependent part is $n\bar X\theta-n\theta^2/2$; $\operatorname{Var}_0(\bar X)=\sigma^2/n$ gives consistency. The exact posterior variance satisfies $nv_n\to1$, while the sample-mean variance is $\sigma^2/n$. [F1, F2, given, algebra]

2.1 The scaled posterior mean is $a_n=\sqrt n m_n=\frac{n}{n+\tau^{-2}}\sqrt n\bar X=O_{P_0}(1)$ and its variance parameter is $b_n=n/(n+\tau^{-2})\le1$. Given any deterministic $M_n\to\infty$, on $|a_n|\le R$ its tail outside $[-M_n,M_n]$ is at most $P(|Z|>M_n-R)$ for $Z\sim N(0,1)$. First take $R$ large using boundedness in probability of $a_n$, then let $n\to\infty$; this proves the every-diverging-radius posterior contraction premise. [F1, step 1.2, given, choose]

2.2 Let $z=z_{1-\alpha/2}=\Phi^{-1}(1-\alpha/2)$. The exact central posterior interval is $[m_n-z\sqrt{v_n},m_n+z\sqrt{v_n}]$. Its coverage event for $\theta^*=0$, after multiplication by $\sqrt n$, is $|\sqrt n\bar X|\le z\sqrt{(n+\tau^{-2})/n}$ because $m_n=n\bar X/(n+\tau^{-2})$. By [F3], $\sqrt n\bar X\Rightarrow N(0,\sigma^2)$; the limiting interval endpoints are continuity points of this nondegenerate normal law, so [F4] gives limiting coverage $\Phi(z/\sigma)-\Phi(-z/\sigma)=2\Phi(z/\sigma)-1$. [A1, F1, F2, F3, F4, step 1.2, given, algebra]

3.1 Since $z>0$, the coverage in step 2.2 equals $1-\alpha$ when $\sigma=1$, is below $1-\alpha$ when $\sigma>1$, and is above $1-\alpha$ when $0<\sigma<1$. Indeed, $\Phi$ is strictly increasing and $\Phi(z)=1-\alpha/2$. Thus the exact posterior width and sampling width disagree away from $\sigma=1$, giving nonnominal coverage. [step 2.2, algebra] ∎
