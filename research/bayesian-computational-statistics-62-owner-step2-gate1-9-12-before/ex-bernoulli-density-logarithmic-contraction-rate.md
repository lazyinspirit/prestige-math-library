---
id: ex-bernoulli-density-logarithmic-contraction-rate
kind: example
title: "A one-parameter density prior meets the logarithmic contraction conditions"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-iid-posterior-contraction-by-entropy-and-prior-mass
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - cor-mean-value-theorem
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-real-power-continuity-and-derivatives
  - cor-differentiable-implies-continuous
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
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 2.1 and finite-dimensional discussion"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.3"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Example

Fix $0<a<\theta_0<b<1$. The sample space is $\{0,1\}$ with counting measure, and $p_\theta(1)=\theta$, $p_\theta(0)=1-\theta$ for $\theta\in[a,b]$. Let $p_0=p_{\theta_0}$ and let $\Pi$ be the prior with constant density $1/(b-a)$ on $[a,b]$. The parameter sieve is $\Theta_n=[a,b]$, its density image is $\mathcal F_n=\{p_\theta:a\le\theta\le b\}$, and the selected distance is the full density $L^1$ distance $d_1$.

## Facts & Assumptions

**Given:** The Bernoulli density model and prior above, and the constants $a,b,\theta_0$.

[A1] Assume AC for the likelihood-density versions used by [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]] ([[def-axiom-of-choice]]). The map $(\theta,x)\mapsto p_\theta(x)$ is jointly measurable directly from its two displayed affine sections.

[F1] [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]]: if the same-metric entropy, sieve-tail and local KL/log-square prior-mass conditions hold, posterior mass outside $M\epsilon_n$ tends to zero in $P_0^n$-probability for sufficiently large fixed $M$.

[F2] [[def-kullback-leibler-divergence]]: $\mathrm{KL}(P_0\Vert P_\theta)=\int\log(p_0/p_\theta)\,dP_0$, with this argument direction.

[F3] [[cor-mean-value-theorem]]: continuity on a closed interval and differentiability on its interior give a point where the difference quotient equals the derivative.

[F4] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $(\log x)'=1/x$.

[F5] [[thm-natural-logarithm-laws]]: the logarithm is continuous on $(0,\infty)$ and logarithms of positive products and quotients obey the usual sum and difference identities.

[F6] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: derivatives obey the chain, sum, scalar, product, and quotient rules.

[F7] [[thm-real-power-continuity-and-derivatives]]: for $x>0$, $x^{-1}$ is differentiable with derivative $-x^{-2}$.

[F8] [[cor-differentiable-implies-continuous]]: differentiability on an open interval gives continuity at each point of that interval.

## Verification

1.1 Put $\epsilon_n:=2\sqrt{\log n/n}$ for $n\ge3$. For two parameters, $d_1(p_\theta,p_{\theta'})=2|\theta-\theta'|$. Hence an $\epsilon_n$-packing of $\mathcal F_n$ has at most $1+2(b-a)/\epsilon_n$ points, so $\log D(\epsilon_n,\mathcal F_n,d_1)\le\frac12\log n+O(1)\le4\log n=n\epsilon_n^2$ for all sufficiently large $n$. Since $\Theta_n=[a,b]$, its prior complement has mass zero. Also $\epsilon_n\to0$ and $n\epsilon_n^2=4\log n\to\infty$. [given, algebra]

1.2 For $g(\theta):=\mathrm{KL}(P_0\Vert P_\theta)$, use [F5] to write $g(\theta)=c_0-\theta_0\log\theta-(1-\theta_0)\log(1-\theta)$, with $c_0=\theta_0\log\theta_0+(1-\theta_0)\log(1-\theta_0)$. The chain, sum, and scalar rules [F6], together with [F4], give $g(\theta_0)=g'(\theta_0)=0$ and $g''(\theta)=\frac{\theta_0}{\theta^2}+\frac{1-\theta_0}{(1-\theta)^2}$; the reciprocal-power derivative in this computation is [F7]. These formulas show that $g$ and $g'$ are differentiable on $(0,1)$; hence they are continuous there by [F8], so the mean value theorem hypotheses hold on the relevant subintervals of $[a,b]$. The explicit bound $|g''(\theta)|\le L:=\theta_0/a^2+(1-\theta_0)/(1-b)^2$ holds there. Apply the mean-value theorem [F3] first to $g$ and then to $g'$ to obtain $|g(\theta)|\le L|\theta-\theta_0|^2$. Put $C_1:=L$. For the log-square term, apply [F3] to $\log\theta$ and $\log(1-\theta)$; these functions are continuous on $[a,b]$ by [F5], and the chain rule [F6] and derivative bounds $1/\theta\le1/a$ and $1/(1-\theta)\le1/(1-b)$ give $\int\left[\log\frac{p_\theta}{p_0}\right]^2p_0\,d\mu\le C_2|\theta-\theta_0|^2$, for example with $C_2=L$. [F2, F3, F4, F5, F6, F7, F8, given, algebra]

2.1 Choose $c>0$ with $c^2\max(C_1,C_2)\le1$. For all sufficiently large $n$, the interval $[\theta_0-c\epsilon_n,\theta_0+c\epsilon_n]$ lies in $[a,b]$ and is contained in the theorem's local KL/log-square set. Its uniform prior mass is $2c\epsilon_n/(b-a)$. Since $-\log\epsilon_n=\frac12\log n+O(\log\log n)$ while $n\epsilon_n^2=4\log n$, there is a fixed $C>0$ such that this mass is at least $e^{-Cn\epsilon_n^2}$ for large $n$. [A1, F2, step 1.2, algebra]

3.1 All hypotheses of [F1] now hold with $d=d_1$; consequently the posterior mass of $\{\theta:d_1(p_\theta,p_0)>M\epsilon_n\}$ tends to zero in $P_0^n$-probability for sufficiently large fixed $M$. The rate furnished by this global-entropy theorem is $2M\sqrt{\log n/n}$ in the full density $L^1$ norm; this example makes no minimax-optimality claim. [A1, F1, step 1.1, step 2.1] ∎
