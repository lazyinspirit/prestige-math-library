---
id: ex-holder-density-rate-from-entropy-balance
kind: example
title: "A Hölder-density entropy bound gives the source-covered rate"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - thm-iid-posterior-contraction-by-entropy-and-prior-mass
  - lem-iid-sieve-entropy-produces-exponential-tests
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-natural-logarithm
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Subhashis Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics, §2.5.3"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf"
    - title: "Subhashis Ghosal, Jayanta K. Ghosh and Aad W. van der Vaart, Convergence rates of posterior distributions, Theorem 2.1"
      url: "https://doi.org/10.1214/aos/1016218228"
---

## Example

Let $0<\alpha\le1$ and let $\mathcal H^\alpha(L)$ be the class of measurable probability densities on $[0,1]$ satisfying $0\le p\le L$ and $|p(x)-p(y)|\le L|x-y|^\alpha$. Suppose a dominated IID model has truth $p_0\in\mathcal H^\alpha(L)$, density image $\mathcal F_n=\mathcal H^\alpha(L)$ at each $n$, and a proper prior $\Pi$ on a measurable parameterization of this class with a jointly measurable density family. Assume its Hellinger packing numbers obey $\log D(u,\mathcal F_n,h)\le C_Hu^{-1/\alpha}$ for all sufficiently small $u>0$. Fix $C>0$, choose $K\ge\max\{1,C_H^{\alpha/(2\alpha+1)}\}$, and set $\epsilon_0:=K$ and $\epsilon_n:=K n^{-\alpha/(2\alpha+1)}$ for $n\ge1$. Assume that, for all sufficiently large $n$,
$$\Pi\!\left\{\theta:\mathrm{KL}(P_0\Vert P_\theta)\le\epsilon_n^2,\quad \int\left[\log\frac{p_\theta}{p_0}\right]^2p_0\,d\mu\le\epsilon_n^2\right\}\ge e^{-Cn\epsilon_n^2}.$$
Here $\mu$ is Lebesgue measure on $[0,1]$, and the log-square expression is the second moment, with the weighted integrand zero where $p_0=0$ and $+\infty$ where $p_0>0,p_\theta=0$, as in [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]]. Take the full parameter space as the sieve, so its prior tail is zero. Then the entropy balance gives the source-covered rate $\epsilon_n\asymp n^{-\alpha/(2\alpha+1)}$ under the theorem's sufficient conditions.

## Facts & Assumptions

**Given:** The density class, its stated packing-entropy bound, the proper prior and jointly measurable dominated IID model, the local KL/log-square prior-mass bound, and $C_H>0$.

[A1] Assume the Axiom of Choice [[def-axiom-of-choice]] used by the likelihood-density and directional KL conventions inherited from [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]].

[F1] [[lem-iid-sieve-entropy-produces-exponential-tests]] defines $D(u,\mathcal F,h)$ as the supremal cardinality of a finite subset whose pairwise Hellinger distances exceed $u$.

[F2] [[def-kullback-leibler-divergence]] uses the directional convention $\mathrm{KL}(P_0\Vert P_\theta)=P_0\log(p_0/p_\theta)$, with value $+\infty$ if $P_0\not\ll P_\theta$.

[F3] [[thm-iid-posterior-contraction-by-entropy-and-prior-mass]] gives contraction in the selected metric in $P_0^n$-probability when the entropy, sieve-tail, and local KL/log-square prior-mass conditions hold.

## Verification

**Given:** The hypotheses in the Example.

1.1 The chosen $K$ is fixed and $1/(2\alpha+1)>0$, so $\epsilon_n\to0$ and $n\epsilon_n^2=K^2 n^{1/(2\alpha+1)}\to\infty$. For all sufficiently large $n$, the assumed entropy bound gives $\log D(\epsilon_n,\mathcal F,h)\le C_HK^{-1/\alpha}n^{1/(2\alpha+1)}\le K^2n^{1/(2\alpha+1)}=n\epsilon_n^2,$ because $K^{2+1/\alpha}\ge C_H$. The full-space sieve has $\Pi(\Theta_n^c)=0$, and the local prior-mass premise is exactly the theorem's remaining prior condition. [A1, F1, F2, F3, given, algebra]

2.1 All hypotheses of [F3] now hold eventually with the Hellinger metric and the positive sequence $(\epsilon_n)$. Hence for sufficiently large fixed $M$, the posterior mass outside the Hellinger ball of radius $MK n^{-\alpha/(2\alpha+1)}$ tends to zero in $P_0^n$-probability. This is a sufficient-condition rate calculation only; it does not prove the class's entropy bound or assert a minimax lower bound. [F1, F3, step 1.1] ∎
