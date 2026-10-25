---
id: lem-fixed-design-gaussian-regression-exponential-tests
kind: lemma
title: "Supremum sieves admit tests in fixed-design Gaussian regression"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - lem-gaussian-linear-and-quadratic-statistic-tail
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is used to select a finite cover at each n; all subsequent tests are finite maxima."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §3.3"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §3"
      url: "https://arxiv.org/pdf/0708.0491"
---

## Statement

Let $x_1,\ldots,x_n$ be deterministic, $Y_i=w_0(x_i)+\sigma_0Z_i$ under the truth with independent $Z_i\sim N(0,1)$, and let candidate parameters be $(w,\sigma)$ with $\sigma\in[a,b]$, $0<a<b$, and $\sigma_0\in[a,b]$. Put $\|u\|_n^2=n^{-1}\sum_i u(x_i)^2$. Suppose $\epsilon_n\to0$, $n\epsilon_n^2\to\infty$, and a measurable function sieve $B_n$ has a finite supremum-norm cover of radius $3\epsilon_n$ with at most $\exp(6C n\epsilon_n^2)$ centers, for a fixed $C>0$. For every $T>0$, there is a sufficiently large fixed $M$ and a measurable test $\phi_n$ such that, for all sufficiently large $n$,
$$P_0^n(\phi_n=1)\le e^{-Tn\epsilon_n^2},\qquad \sup_{\substack{w\in B_n,\ \sigma\in[a,b]\\ \|w-w_0\|_n+|\sigma-\sigma_0|>M\epsilon_n}}P_{w,\sigma}^n(\phi_n=0)\le e^{-Tn\epsilon_n^2}.$$

## Facts & Assumptions

**Given:** The deterministic design, true independent Gaussian errors, compact positive scale interval, rate sequence and finite measurable supremum cover.

[A1] Assume AC [[def-axiom-of-choice]] to select a finite cover for each n.

[F1] [[lem-gaussian-linear-and-quadratic-statistic-tail]]: if $\|c\|_n$ is fixed, $n^{-1}\sum_i c_i\sigma Z_i$ has tails at scale $\|c\|_n/\sqrt n$; if $\|\delta\|_n\le1$, the centered residual-energy statistic $n^{-1}\sum_i(\delta_i+\sigma Z_i)^2-(\sigma^2+\|\delta\|_n^2)$ has tails bounded by $2e^{-nt^2/(4V_b)}$ for $t\le b^2+2$.

## Proof

**Given:** Fix a cover $v_1,\ldots,v_{N_n}$ of $B_n$ with $\|v_j-v\|_\infty<3\epsilon_n$ for the covered $v$, and $N_n\le e^{6C n\epsilon_n^2}$.


1.1 For each center put $\delta_{ji}=v_j(x_i)-w_0(x_i)$ and $\rho_j=\|\delta_j\|_n$. For centers with $\rho_j\ge M\epsilon_n/4$, define $U_j=n^{-1}\sum_i\delta_{ji}(Y_i-w_0(x_i))$ and $\phi_j=\mathbf1\{U_j\ge\rho_j^2/4\}$. Under the truth, $U_j$ is centered normal with variance $\sigma_0^2\rho_j^2/n$, so [F1] gives $P_0^n(\phi_j=1)\le\exp[-n\rho_j^2/(32b^2)]$. [A1, F1, given, construct]

1.2 Put $\Delta=M\epsilon_n/2$ and $Q_n=n^{-1}\sum_i(Y_i-w_0(x_i))^2$. If $\|w-w_0\|_n\le\Delta$ and $|\sigma-\sigma_0|>\Delta$, then under $(w,\sigma)$, $E Q_n=\sigma^2+\|w-w_0\|_n^2$. For an upper scale alternative, this mean is at least $\sigma_0^2+aM\epsilon_n$; for a lower scale alternative, it is at most $\sigma_0^2-aM\epsilon_n+\Delta^2\le\sigma_0^2-aM\epsilon_n/2$ once $M\epsilon_n\le2a$. Define $\phi_+=\mathbf1\{Q_n\ge\sigma_0^2+aM\epsilon_n/4\}$ and $\phi_-=\mathbf1\{Q_n\le\sigma_0^2-aM\epsilon_n/4\}$. Under the truth and on this scale-alternative region, the relevant deviations from the respective means are at least $aM\epsilon_n/4$. [given, algebra]

2.1 If $\|w-w_0\|_n>M\epsilon_n/2$, choose a cover center $v_j$ within $3\epsilon_n$ of $w$. For $M\ge12$, $\rho_j\ge(M/2-3)\epsilon_n\ge M\epsilon_n/4$; for $M\ge24$, $\rho_j\ge6\epsilon_n$. Under $(w,\sigma)$, $E U_j=\langle v_j-w_0,w-w_0\rangle_n\ge\rho_j^2-3\epsilon_n\rho_j\ge\rho_j^2/2$. The threshold is therefore at least $\rho_j^2/4$ below the mean, and [F1] gives $P_{w,\sigma}^n(\phi_j=0)\le\exp[-n\rho_j^2/(32b^2)]\le\exp[-M^2n\epsilon_n^2/(512b^2)]$. [F1, step 1.1, given, algebra]

3.1 For sufficiently large n, $\Delta\le1$ and $aM\epsilon_n/4\le b^2+2$, so [F1] bounds each null tail and each uniform scale-alternative error by $2\exp[-na^2M^2\epsilon_n^2/(64V_b)]$. Let $J_n=\{j:\rho_j\ge M\epsilon_n/4\}$ be the finite set of centers retained in step 1.1, and set $\phi_n=\phi_+\vee\phi_-\vee\max_{j\in J_n}\phi_j$, defining the last maximum to be $0$ when $J_n=\varnothing$. By step 2.1 every mean-separated alternative has a center in $J_n$; all other alternatives are covered by the scale tests from step 1.2. The null error is at most $e^{6Cn\epsilon_n^2}e^{-M^2n\epsilon_n^2/(512b^2)}+4e^{-na^2M^2\epsilon_n^2/(64V_b)}$. Choose fixed $M$ large enough that both bounds are at most $e^{-Tn\epsilon_n^2}$ for all sufficiently large n. [F1, step 1.1, step 2.1, step 1.2, given, choose] ∎

## Source notes

The 2008 GP article states the fixed-design theorem but gives only a sketch of its testing step. The non-IID article supplies the average-Hellinger product setting. The explicit mean-score and residual-energy tests above provide the complete local argument for the claimed Gaussian model.
