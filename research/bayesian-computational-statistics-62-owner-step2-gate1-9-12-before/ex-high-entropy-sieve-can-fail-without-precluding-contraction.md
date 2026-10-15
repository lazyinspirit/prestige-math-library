---
id: ex-high-entropy-sieve-can-fail-without-precluding-contraction
kind: example
title: "A sieve can miss the entropy bound while the posterior contracts exactly"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-iid-posterior-contraction-by-entropy-and-prior-mass
  - lem-iid-sieve-entropy-produces-exponential-tests
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-probability-measure
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 2.1"
      url: "https://doi.org/10.1214/aos/1016218228"
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.2"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
---

## Example

Let $\Theta=[0,1]$, let $X_i\mid\theta$ be IID Bernoulli$(\theta)$, and put the full Bernoulli family $\mathcal F_n=\{p_\theta:\theta\in[0,1]\}$ in every sieve $\Theta_n=\Theta$. Take the true value $\theta_0=1/2$ and prior $\Pi=\delta_{1/2}$. In the full density $L^1$ metric, the entropy premise of [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]] fails for $\epsilon_n=(\log n)^{1/4}/\sqrt n$ at all sufficiently large $n$, although the other displayed conditions hold and the posterior mass outside every positive-radius ball is exactly zero for every data vector.

## Facts & Assumptions

**Given:** The Bernoulli model, its jointly measurable mass function $p_\theta(1)=\theta$, $p_\theta(0)=1-\theta$, the point prior at $\theta_0=1/2$, and $n\ge3$.

[F1] [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]] defines the data-fiber posterior by likelihood-weighted normalization on finite positive evidence, and its contraction conclusion is in $P_0^n$-probability under the stated entropy, sieve-tail, and local KL/log-square conditions.

[F2] [[lem-iid-sieve-entropy-produces-exponential-tests]] defines $D(u,\mathcal F_n,d_1)$ using finite sets whose pairwise full density $L^1$ distances exceed $u$.

[F3] [[def-kullback-leibler-divergence]] uses the direction $\mathrm{KL}(P_0\Vert P_\theta)=P_0\log(p_0/p_\theta)$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] for the imported directional KL convention; all displayed Bernoulli densities and the point-prior update are explicit.

[F4] [[def-probability-measure]]: the IID Bernoulli sampling law $P_0^n$ is a probability measure on the finite data vectors.

[F5] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]] give the natural-log product and quotient identities; [[thm-logarithm-derivative-and-integral]] gives $\log x=\int_1^xdt/t$ for $x>0$.

[F6] [[def-identically-distributed-and-iid-random-variables]] defines the IID sampling regime.

## Verification

**Given:** The model, sieve, prior, truth, and rate sequence in the Example.

1.1 Put $t_n:=\log n$. For $n\ge3$, $t_n>1$, and $\epsilon_n^2=\frac{\sqrt{t_n}}{n},\qquad n\epsilon_n^2=\sqrt{t_n}\longrightarrow\infty.$ The integral formula [F5] gives $\log n\le2\sqrt n$ for $n\ge1$, hence $\epsilon_n^2\le\sqrt2\,n^{-3/4}\to0$. Thus $\epsilon_n\to0$ and the rate conditions in [F1] hold. [F1, F5, given, algebra]

1.2 For $j=0,\ldots,\lfloor1/\epsilon_n\rfloor$, set $\theta_j=j\epsilon_n$. These parameters lie in $[0,1]$, and $d_1(p_{\theta_j},p_{\theta_k})=2|\theta_j-\theta_k|> \epsilon_n\quad(j\ne k).$ Therefore $D(\epsilon_n,\mathcal F_n,d_1)\ge\lfloor1/\epsilon_n\rfloor+1>1/\epsilon_n$ and $\log D(\epsilon_n,\mathcal F_n,d_1)>\log(1/\epsilon_n)=\frac12t_n-\frac14\log t_n.$ For $t\ge1$, [F5] gives $\log t\le2\sqrt t$. If $t_n\ge64$, then $\frac12t_n-\frac14\log t_n\ge\frac12t_n-\frac12\sqrt{t_n}>\sqrt{t_n}=n\epsilon_n^2$. Hence the entropy premise fails for all sufficiently large $n$. [F2, F5, given, algebra, construct]

1.3 The sieve is the full parameter space, so $\Pi(\Theta_n^c)=0$. Its local KL/log-square set contains $\theta_0$, where $\mathrm{KL}(P_0\Vert P_{\theta_0})=0$ and $\log(p_{\theta_0}/p_0)=0$; consequently its prior mass is $1$, which exceeds $e^{-Cn\epsilon_n^2}$ for every $C>0$. [A1, F3, given]

2.1 For any data vector $x_{1:n}$, the likelihood at the sole prior atom is $p_{\theta_0}^{\otimes n}(x_{1:n})=2^{-n}>0$, so the evidence is also $2^{-n}$. The normalization in [F1] therefore gives $\Pi(\cdot\mid x_{1:n})=\delta_{\theta_0}$. For every $M>0$, its mass on $\{\theta:d_1(p_\theta,p_0)>M\epsilon_n\}$ is exactly zero for every sample, and thus it contracts in $P_0^n$-probability under the IID data law [F4, F6] despite the failed entropy condition. [F1, F4, F6, given] ∎