---
id: fs-pointwise-integrable-generator-constants-justify-critic-gradient-exchange
kind: false-statement
title: "FALSE: pointwise-integrable generator constants justify ideal-critic gradient exchange"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-compact-metric-wasserstein-one
  - thm-kantorovich-rubinstein-duality-on-compact-metric-spaces
  - def-probability-measure
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-countable-choice
  - def-measure-with-density
  - thm-integration-against-a-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
  - thm-change-of-variables-for-expectation
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

Let $X=([0,1],|x-y|)$, let $g:\mathbb R\times\mathbb R\to[0,1]$ be jointly locally Lipschitz, and write $g_\theta(z):=g(\theta,z)$. Let $\rho$ be a Borel probability measure on latent $\mathbb R$ with a nonnegative Lebesgue-measurable density $q$, meaning $\rho(A)=\int_Aq\,d\lambda$ for every Borel $A\subseteq\mathbb R$, with $\int_{\mathbb R}q\,d\lambda=1$. Suppose for every $(\theta,z)$ there is a finite local joint Lipschitz constant $L(\theta,z)\ge0$ and an open neighborhood $U_{\theta,z}$ on which
$$
|g(\theta_1,z_1)-g(\theta_2,z_2)|\le L(\theta,z)(|\theta_1-\theta_2|+|z_1-z_2|)
$$
for all $(\theta_1,z_1),(\theta_2,z_2)\in U_{\theta,z}$. Assume for every $\theta$ that $z\mapsto L(\theta,z)$ is Borel measurable and $\int_{\mathbb R}L(\theta,z)\,d\rho(z)<+\infty$. Define $P_\theta(B):=\rho(\{z:g_\theta(z)\in B\})$ for Borel $B\subseteq[0,1]$ and $V(\theta):=W_1^X(\delta_0,P_\theta)$. The proposed implication is that for a function $f:[0,1]\to\mathbb R$ with $f(0)=0$ and $|f(x)-f(y)|\le|x-y|$ that attains the signed dual supremum at $\theta_0$, whenever $V'(\theta_0)$ and the Lebesgue integral $\int_{\mathbb R}\partial_\theta[f(g_\theta(z))]|_{\theta_0}\,d\rho(z)$ are defined, one has
$$
V'(\theta_0)=-\int_{\mathbb R}\partial_\theta[f(g_\theta(z))]|_{\theta_0}\,d\rho(z).
$$

## Statement references

[[def-compact-metric-wasserstein-one]]

[Arjovsky et al.](https://arxiv.org/pdf/1701.07875), Theorem 3 and Appendix C, physical PDF pp. 7 and 24–25. This is the claimed exchange under the original pointwise-local hypothesis, not the corrected common-envelope theorem.

## Facts & Assumptions

**Given:** The proposed implication, Countable Choice for the Lebesgue interval supplier, and the explicit construction below; $n\ge1$.

[A1] Countable Choice supplies choices for countable families of nonempty sets. [[def-countable-choice]]

[F1] The geometric series starting at $n=1$ satisfies $\sum_{n\ge1}2^{-n}=1$. [[thm-geometric-series]]

[F2] Increasing nonnegative measurable functions pass to the limit under the integral. [[thm-monotone-convergence-for-the-integral]]

[F3] A nonnegative measurable density defines a measure by integration. [[def-measure-with-density]] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F4] Under Countable Choice, a real interval has Lebesgue measure its length. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] The compact-space Wasserstein cost is the infimum of Borel coupling costs. The Dirac set function at $0$ is a probability measure. [[def-compact-metric-wasserstein-one]] [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]]

[F6] A probability measure is countably additive with total mass one. [[def-probability-measure]]

[F7] On a compact metric space, the signed supremum over normalized $1$-Lipschitz tests equals $W_1$; the compact KR proof also establishes that each such test objective is bounded by every coupling cost. [[thm-kantorovich-rubinstein-duality-on-compact-metric-spaces]]

[F8] A measurable random element has a probability law, and integration against its law equals integration after composition with the random element. [[def-random-element-and-real-random-variable]] [[def-law-or-distribution-of-a-random-element]] [[lem-law-of-a-random-element-is-a-probability-measure]] [[thm-change-of-variables-for-expectation]]

[F9] If $\rho=q\,d\lambda$, then $\int h\,d\rho=\int hq\,d\lambda$ for every nonnegative measurable $h$. [[thm-integration-against-a-density]]

[F10] A nonnegative simple function has a finite measurable representation and its nonnegative integral is the corresponding finite weighted sum. [[def-nonnegative-simple-measurable-function]] [[def-integral-of-a-nonnegative-simple-function]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

## Refutation

**Given:** The proposed implication in the Statement and [A1].

1.1 Set $a_n=4^{-n}$ for $n\ge0$ and $p_n=2^{-n}$ for $n\ge1$. Define a nonnegative piecewise-linear hat $\alpha_n$ on $[0,+\infty)$: it is zero outside $[a_{n+1},a_{n-1}]$, rises linearly from $0$ at $a_{n+1}$ to $1$ at $a_n$, then falls linearly to $0$ at $a_{n-1}$. On $[a_{n+1},a_n]$ only $\alpha_n,\alpha_{n+1}$ are nonzero and their sum is one. Thus $\sum_{n\ge1}\alpha_n(r)=1$ for $0<r\le1/4$. At each fixed positive $r$ only finitely many hat supports meet it. [given, construct, algebra]

1.2 Put $B_n=[n-1/8,n+1/8]$ and $q(z)=\sum_{n\ge1}4p_n\mathbf1_{B_n}(z)$. Define $\rho$ on Borel subsets of $\mathbb R$ by $\rho(A)=\int_Aq\,d\lambda$, the restriction to Borel sets of the measure with density $q$. The density is Borel, and [F1]–[F4] give $\rho(\mathbb R)=\sum_n4p_n\lambda(B_n)=\sum_np_n=1$. Let $u_n(z)$ be one when $|z-n|\le1/8$, decrease linearly to zero when $1/8<|z-n|<1/4$, and be zero for $|z-n|\ge1/4$. It is $8$-Lipschitz; its supports are disjoint, and $u_n=1$ on $B_n$. [A1, F1, F2, F3, F4, F6, construct, algebra]

2.1 Set $b_n(\theta)=\theta\alpha_n(|\theta|)/p_n$ and $g_\theta(z)=1/2+(1/16)\sum_nu_n(z)b_n(\theta)$. Since $|b_n|\le a_{n-1}/p_n=2^{2-n}\le2$ and at most one latent support is active, $3/8\le g\le5/8$. Each $b_n$ is continuous piecewise quadratic with compact support and bounded one-sided slopes, hence globally Lipschitz. More explicitly $|\alpha_n'|\le4/(3a_n)$ and $|\theta|\le4a_n$ on its support, so $|b_n'|\le(1+16/3)/p_n=19/(3p_n)$ wherever the derivative exists; subdivision at finitely many corners gives this bound for all differences. Local finiteness in $z$ then proves joint local Lipschitzness of $g$ and Borel measurability of every section. [step 1.1, step 1.2, algebra]

3.1 A valid measurable local joint constant is $L(\theta,z)=\sum_n M_n\mathbf1_{[a_{n+1},a_{n-1}]}(|\theta|)\mathbf1_{(n-1/2,n+1/2)}(z)$, with $M_n=(16+19/(3p_n))/16$: the two product terms are bounded using $|b_n|\le2$, the $8$-Lipschitz $u_n$, and the bound in step 2.1. At any fixed nonzero $\theta$ only finitely many parameter supports are active, so $\int L(\theta,z)\,d\rho<\infty$. At $\theta=0$ every $b_n$ vanishes on a neighborhood of zero, so for each fixed $z$ the locally finite sum is constant in a neighborhood of $(0,z)$; take $L(0,z)=0$. At latent or parameter support boundaries the displayed positive constants apply whenever needed, and outside the closed active supports a neighborhood has zero variation. Thus the original pointwise-local condition holds at every parameter. [step 1.1, step 1.2, step 2.1, algebra]

3.2 Let $c_n(\theta)=1/2+b_n(\theta)/16$. The density $q$ vanishes off the disjoint union of the intervals $B_n$, and on each $B_n$ the function $g_\theta$ is constant with value $c_n(\theta)$. For $N\ge1$, $q_N=\sum_{n\le N}4p_n\mathbf1_{B_n}$ increases pointwise to $q$, and $g_\theta q_N$ is simple with integral $\sum_{n\le N}4p_nc_n(\theta)\lambda(B_n)=\sum_{n\le N}p_nc_n(\theta)$ by [F4, F10]. By [F2], $\int g_\theta q\,d\lambda=\sum_{n\ge1}p_nc_n(\theta)$; by [F9], this equals $\int g_\theta\,d\rho$. For each fixed $\theta$ only finitely many $b_n(\theta)$ are nonzero, while [F1] gives $\sum_np_n=1$, so $\int g_\theta\,d\rho=1/2+(1/16)\sum_np_nb_n(\theta)=1/2+(\theta/16)\sum_n\alpha_n(|\theta|)$. Therefore this integral is $1/2+\theta/16$ for $0<|\theta|\le1/4$ and is $1/2$ at $\theta=0$. [F1, F2, F4, F9, F10, step 1.1, step 1.2, step 2.1, algebra]

4.1 Put $\iota(y)=(0,y)$ and let $\gamma_\theta=\iota_\#P_\theta$. The map $\iota$ is continuous in the product topology, so [F8] makes $\gamma_\theta$ a Borel probability; for every Borel $A\subseteq X$ its marginals satisfy $\gamma_\theta(A\times X)=\mathbf1_{\{0\in A\}}=\delta_0(A)$ and $\gamma_\theta(X\times A)=P_\theta(A)$, so it is a coupling. Any coupling $\gamma$ is concentrated on $\{0\}\times X$ by its first marginal. For Borel $C\subseteq X\times X$, let $B_C=\iota^{-1}(C)$, which is Borel by continuity; concentration gives $\gamma(C)=\gamma(C\cap(\{0\}\times X))=\gamma(\{0\}\times B_C)$. The first marginal also gives $\gamma((X\setminus\{0\})\times B_C)=0$, so the second marginal gives $\gamma(\{0\}\times B_C)=\gamma(X\times B_C)=P_\theta(B_C)$. Hence $\gamma(C)=\gamma_\theta(C)$ and this coupling is unique. Applying [F8] to $\iota$ and to $g_\theta$ gives its cost $\int_X y\,dP_\theta(y)=\int g_\theta\,d\rho$, so $V(\theta)=W_1^X(\delta_0,P_\theta)=\int g_\theta\,d\rho$. [F5, F8, step 3.2, algebra]

5.1 For any normalized $1$-Lipschitz $h:[0,1]\to\mathbb R$, [F8] applied to the constant-zero map and to $g_\theta$ gives $\int h\,d\delta_0=h(0)=0$ and $\int h\,dP_\theta=\int h(g_\theta(z))\,d\rho(z)$. The function $f(x)=-x$ is normalized and $1$-Lipschitz, and its signed dual objective is $\int f\,d\delta_0-\int f\,dP_\theta=\int g_\theta\,d\rho=V(\theta)$ by step 4.1. The compact KR duality [F7] therefore makes $f$ an attaining critic, in particular at $\theta=0$. By step 3.1, each fixed latent section is constant near zero, so $\partial_\theta f(g_\theta(z))|_0=0$ for every $z$; this derivative is measurable and integrable with expectation zero. Step 3.2 gives $V'(0)=1/16$, so the two defined terms in the proposed identity are unequal. [F7, F8, step 3.1, step 3.2, step 4.1, algebra]

6.1 Suppose there were a common-neighborhood generator envelope at zero: an open neighborhood $U$ of zero, a nonnegative measurable $K$ with $\int K\,d\rho<\infty$, and a measurable set $E$ with $\rho(E)=1$ such that $|g_\theta(z)-g_{\theta'}(z)|\le K(z)|\theta-\theta'|$ for every $z\in E$ and every $\theta,\theta'\in U$. Since $a_n\to0$, there is $n_0$ such that $a_n\in U$ for every $n\ge n_0$. For every such $n$ and $z\in B_n\cap E$, the envelope then gives $K(z)\ge |g_{a_n}(z)-g_0(z)|/a_n=1/(16p_n)$, because $u_n=1$ on $B_n$ and $\alpha_n(a_n)=1$. By [F6], $\rho(B_n\setminus E)\le\rho(E^c)=0$, so $\rho(B_n\cap E)=\rho(B_n)=p_n$ by step 1.2. The sets $B_n\cap E$ are disjoint and each contributes at least $1/16$ to $\int K\,d\rho$. Summing these nonnegative contributions, using [F2] to pass from finite partial sums to their limit, forces $\int K\,d\rho=\infty$, a contradiction. The counterexample therefore violates precisely the stronger corrected envelope premise while satisfying the original one. [F2, F6, step 1.1, step 1.2, step 2.1, step 5.1, algebra] ∎
