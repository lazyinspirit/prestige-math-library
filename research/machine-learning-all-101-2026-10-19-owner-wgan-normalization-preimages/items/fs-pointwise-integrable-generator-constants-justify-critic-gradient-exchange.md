---
id: fs-pointwise-integrable-generator-constants-justify-critic-gradient-exchange
kind: false-statement
title: "FALSE: pointwise-integrable generator constants justify ideal-critic gradient exchange"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-compact-metric-wasserstein-one
  - def-probability-measure
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-dirac-integral-evaluation
  - def-countable-choice
  - def-measure-with-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: explicit counterexample
axiom_use: "Countable Choice is assumed for the stated Lebesgue interval measure supplier; the counterexample already holds in ordinary mathematics with full AC."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Arjovsky, Chintala and Bottou, Wasserstein GAN; Assumption 1 and Appendix C, physical PDF pp. 20–21 and 24–25"
      url: https://arxiv.org/pdf/1701.07875
---

## Statement

Suppose $g:\mathbb R\times\mathbb R\to[0,1]$ is jointly locally Lipschitz and satisfies the pointwise-local condition $\int L(\theta,z)\rho(dz)<\infty$ at every $\theta$, where $L(\theta,z)$ is a local joint Lipschitz constant and $\rho$ has a real Lebesgue density. The proposed implication is that for an attaining normalized $1$-Lipschitz critic $f$ at $\theta_0$, whenever $V'(\theta_0)$ and $\int \partial_\theta[f(g_\theta(z))]|_{\theta_0}\,d\rho(z)$ both exist, $V'(\theta_0)=-\int \partial_\theta[f(g_\theta(z))]|_{\theta_0}\,d\rho(z)$, where $V(\theta)=W_1(\delta_0,(g_\theta)_\#\rho)$.

## Statement references

[[def-compact-metric-wasserstein-one]]

Arjovsky et al., Theorem 3 and Appendix C, physical PDF pp. 7 and 24–25. This is the claimed exchange under the original pointwise-local hypothesis, not the corrected common-envelope theorem.

## Facts & Assumptions

**Given:** The proposed implication, Countable Choice for the Lebesgue interval supplier, and the explicit construction below; $n\ge1$.

[A1] Countable Choice supplies choices for countable families of nonempty sets. [[def-countable-choice]]

[F1] The geometric series starting at $n=1$ satisfies $\sum_{n\ge1}2^{-n}=1$. [[thm-geometric-series]]

[F2] Increasing nonnegative measurable functions pass to the limit under the integral. [[thm-monotone-convergence-for-the-integral]]

[F3] A nonnegative measurable density defines a measure by integration. [[def-measure-with-density]] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F4] Under Countable Choice, a real interval has Lebesgue measure its length. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] The compact-space Wasserstein cost is the infimum of Borel coupling costs. A Dirac measure is a probability measure and integrates by evaluation. [[def-compact-metric-wasserstein-one]] [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]] [[lem-dirac-integral-evaluation]]

[F6] A probability measure is countably additive with total mass one. [[def-probability-measure]]

## Refutation

**Given:** The proposed implication in the Statement and [A1].

1.1 Set $a_n=4^{-n}$ for $n\ge0$ and $p_n=2^{-n}$ for $n\ge1$. Define a nonnegative piecewise-linear hat $\alpha_n$ on $[0,+\infty)$: it is zero outside $[a_{n+1},a_{n-1}]$, rises linearly from $0$ at $a_{n+1}$ to $1$ at $a_n$, then falls linearly to $0$ at $a_{n-1}$. On $[a_{n+1},a_n]$ only $\alpha_n,\alpha_{n+1}$ are nonzero and their sum is one. Thus $\sum_{n\ge1}\alpha_n(r)=1$ for $0<r\le1/4$. At each fixed positive $r$ only finitely many hat supports meet it. [given, construct, algebra]

1.2 Put $B_n=[n-1/8,n+1/8]$, $q(z)=\sum_{n\ge1}4p_n\mathbf1_{B_n}(z)$ and $\rho=q\,d\lambda$. The density is Borel, and [F1]–[F4] give $\rho(\mathbb R)=\sum_n4p_n\lambda(B_n)=\sum_np_n=1$. Let $u_n(z)$ be one when $|z-n|\le1/8$, decrease linearly to zero when $1/8<|z-n|<1/4$, and be zero for $|z-n|\ge1/4$. It is $8$-Lipschitz; its supports are disjoint, and $u_n=1$ on $B_n$. [A1, F1, F2, F3, F4, F6, construct, algebra]

1.3 Set $b_n(\theta)=\theta\alpha_n(|\theta|)/p_n$ and $g_\theta(z)=1/2+(1/16)\sum_nu_n(z)b_n(\theta)$. Since $|b_n|\le a_{n-1}/p_n=2^{2-n}\le2$ and at most one latent support is active, $3/8\le g\le5/8$. Each $b_n$ is continuous piecewise quadratic with compact support and bounded one-sided slopes, hence globally Lipschitz. More explicitly $|\alpha_n'|\le4/(3a_n)$ and $|\theta|\le4a_n$ on its support, so $|b_n'|\le(1+16/3)/p_n=19/(3p_n)$ wherever the derivative exists; subdivision at finitely many corners gives this bound for all differences. Local finiteness in $z$ then proves joint local Lipschitzness of $g$ and Borel measurability of every section. [step 1.1, step 1.2, algebra]

1.4 A valid measurable local joint constant is $L(\theta,z)=\sum_n M_n\mathbf1_{[a_{n+1},a_{n-1}]}(|\theta|)\mathbf1_{(n-1/2,n+1/2)}(z)$, with $M_n=(16+19/(3p_n))/16$: the two product terms are bounded using $|b_n|\le2$, the $8$-Lipschitz $u_n$, and the bound in step 1.3. At any fixed nonzero $\theta$ only finitely many parameter supports are active, so $\int L(\theta,z)\,d\rho<\infty$. At $\theta=0$ every $b_n$ vanishes on a neighborhood of zero, so for each fixed $z$ the locally finite sum is constant in a neighborhood of $(0,z)$; take $L(0,z)=0$. At latent or parameter support boundaries the displayed positive constants apply whenever needed, and outside the closed active supports a neighborhood has zero variation. Thus the original pointwise-local condition holds at every parameter. [step 1.1, step 1.2, step 1.3, algebra]

2.1 Integrating over $B_n$, where $u_n=1$, gives $\int g_\theta\,d\rho=1/2+(1/16)\sum_n p_n b_n(\theta)=1/2+(\theta/16)\sum_n\alpha_n(|\theta|)$. For a fixed $\theta$ this sum is finite, including the zero sum at $\theta=0$. Hence for $|\theta|\le1/4$ the expectation is exactly $1/2+\theta/16$. Every coupling with first marginal $\delta_0$ has cost equal to this expectation, and the pushforward under $x\mapsto(0,x)$ realizes it. Thus [F5] gives $V(\theta)=1/2+\theta/16$ near zero, and $V'(0)=1/16$. [F5, step 1.1, step 1.2, step 1.3, algebra]

2.2 The function $f(x)=-x$ is normalized at zero and $1$-Lipschitz. Its signed critic objective is $\int f\,d\delta_0-\int f\,dP_\theta=\int x\,dP_\theta=V(\theta)$, so it attains the ideal supremum, in particular at zero. But each fixed latent section is constant near zero by step 1.4, so $\partial_\theta f(g_\theta(z))|_0=0$ for every $z$. The derivative is measurable, integrable and has expectation zero. Both terms in the proposed identity exist and are unequal: $1/16\ne0$. [F5, step 1.4, step 2.1, algebra]

2.3 A common-neighborhood generator envelope $K$ would, for every sufficiently large $n$ and $z\in B_n$, obey $K(z)\ge |g_{a_n}(z)-g_0(z)|/a_n=1/(16p_n)$, because $\alpha_n(a_n)=1$. The disjoint $B_n$ each then contribute at least $1/16$ to $\int K\,d\rho$, so this integral is infinite. The counterexample therefore violates precisely the stronger corrected envelope premise while satisfying the original one. [step 1.1, step 1.2, step 1.3, step 2.2, algebra] ∎
