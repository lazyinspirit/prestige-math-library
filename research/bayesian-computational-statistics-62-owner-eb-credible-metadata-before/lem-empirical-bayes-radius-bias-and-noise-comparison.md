---
id: lem-empirical-bayes-radius-bias-and-noise-comparison
kind: lemma
title: "Posterior radius, bias and noise comparisons for empirical Bayes"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-polished-tail-class-for-gaussian-sequence
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - cor-chebyshev-inequality-for-random-variables
  - def-axiom-of-choice
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is inherited from the product Gaussian model; the inequalities add no choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Szabó, van der Vaart and van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets (2015), Section 5"
      url: "https://arxiv.org/pdf/1310.4489v5"
---

## Statement

In the defined inverse Gaussian procedure write $q=1+2\alpha+2p$, $N=N_{n,\alpha}=n^{1/q}$, $R=N^{-2\alpha}=N^{1+2p}/n$, $B_i(\alpha)=-i^{1+2\alpha}\theta_i/(i^{1+2\alpha}+n\kappa_i^2)$, and $W_i(\alpha)=\sqrt n\kappa_i Z_i/(i^{1+2\alpha}+n\kappa_i^2)$. Let $0\le a\le b\le A_n$, with $N_{n,A_n}\to\infty$ and $A_n/N_{n,A_n}\to0$. Constants below depend only on $p,C,L_0,\rho,\gamma$. For all sufficiently large $n$, (i) $r_{n,\gamma}(b)^2\ge d R_b$ for $b>0$; (ii) if $\theta_1=0$, $\theta\in\Theta_{pt}(L_0,N_0,\rho)$ and $h_n(b;\theta)\le8C^8$, then $\sup_{a\le\alpha\le b}\|B(\alpha)\|^2\le K(1+L_0\rho^{2q_b})R_b$; (iii) with probability at least $1-K/N_a$, $\sup_{a\le\alpha\le b}\|W(\alpha)\|^2\le K R_a$. Part (iii) also holds at $a=0$. At $b=0$ the procedure gives the whole parameter space whenever the selector lies in $[a,b]$.

## Facts & Assumptions

**Given:** AC and the hypotheses of the Statement, with independent standard normal errors $Z_i$.

[F1] The procedure and posterior formula give the independent Gaussian coordinates and the displayed posterior mean and variances. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]] [[lem-gaussian-sequence-empirical-bayes-posterior-formula]]

[F2] A square-integrable real variable $Y$ satisfies $P(|Y-EY|\ge u)\le\operatorname{Var}(Y)/u^2$. [[cor-chebyshev-inequality-for-random-variables]]

[F3] Nonnegative coordinate sums are integrated termwise by Tonelli on the probability space times the counting-measure space. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

1.1 The posterior coordinate variances satisfy $C^{-4}i^{2p}/(i^q+n)\le v_i\le C^4 i^{2p}/(i^q+n)$, and the noise weights satisfy $t_i=n\kappa_i^{-2}/(i^{1+2\alpha}\kappa_i^{-2}+n)^2\le C^6 n i^{2p}/(i^q+n)^2$. Split at $N$. For $i\le N$, $t_i\le C^6 i^{2p}/n$ and $\sum_{i\le N} i^{2p}\le2N^{1+2p}$ for $N\ge2$. For $i>N$, $t_i\le C^6 n i^{-2-4\alpha-2p}$; the decreasing-function integral comparison bounds its sum by $2C^6nN^{-1-4\alpha-2p}\le2C^6R$. Thus $\sum_i t_i\le4C^6R$ and $\sup_i t_i\le C^6R/N$. Standard normal moments give $E Z_i^2=1$, $\operatorname{Var}(Z_i^2)=2$, so the variance of $\sum t_iZ_i^2$ is at most $8C^{12}R^2/N$. For completeness, the fourth-moment identity follows by twice integrating $\phi'(x)=-x\phi(x)$ by parts: $\int x^4\phi(x)dx=3\int x^2\phi(x)dx=3$, with boundary terms zero. Finite sums pass to the nonnegative infinite sum by monotone convergence; the centered sums are Cauchy in $L^2$ since $\sum t_i^2<\infty$. [F1, F3, given, algebra]

1.2 All $t_i(\alpha)$ decrease in $\alpha$. Thus the same $Z_i$ couple the process and $\sup_{a\le\alpha\le b}\|W(\alpha)\|^2=\sum_i t_i(a)Z_i^2$. Chebyshev at threshold $R_a$ above its mean yields $P\{\sup\|W\|^2>(4C^6+1)R_a\}\le8C^{12}/N_a$, proving (iii). [F2, step 1.1, algebra]

2.1 For the posterior-radius lower bound, retain only integer indices $N/2\le i\le N$. For $N\ge6$ there are at least $N/3$ such indices, and each has $v_i\ge C^{-4}2^{-2p-1}N^{2p}/n$. The retained quadratic sum $U_*$ therefore has mean at least $d_0R$, where $d_0=C^{-4}2^{-2p-1}/3$. Each retained variance weight is at most $C^4N^{2p}/n=C^4R/N$, so $\operatorname{Var}U_*\le2(C^4R/N)E U_*$. Also $E U_*\le C^4R$, hence $P\{U_*<d_0R/2\}\le8C^8/(d_0^2N)$. Since the full posterior squared norm dominates $U_*$, for sufficiently large $N$ its $1-\gamma$ quantile is at least $d_0R/2$. This proves (i), with $d=d_0/2$, independently of $A_n$. The full norm is finite a.s. when $\alpha>0$ because $\sum v_i\le\sum i^{-1-2\alpha}<\infty$. At zero use only the defined whole-space branch. [F1, F2, step 1.1, algebra]

3.1 Each squared bias coefficient increases with $\alpha$, so it suffices to consider $b$. Set $q=q_b$, $N=N_b$. By the bounds on $\kappa_i$, $\|B(b)\|^2\le C^8\sum_i i^{2+4b+4p}\theta_i^2/(i^q+n)^2$. For $2\le i\le N$ and $N\ge4$, $i^{q+2p}/\log i\le N^{q+2p}/\log N$. Indeed $x^r/\log x$ for $r\ge1$ has its maximum on $[2,N]$ at an endpoint, and its value at $N\ge4$ exceeds its value at $2$. The contribution of these indices is consequently at most $C^8R h_n(b;\theta)$. The index $1$ is zero by hypothesis. [F1, F3, given, algebra]

3.2 Put $m=\lfloor N\rfloor$. For large $n$, $m\ge N_0$ and uniformly for $b\le A_n$, $m^{1+2b}\ge N^{1+2b}/2$ and $\log m\ge\log N/2$, because $(1+2A_n)/N_{A_n}\to0$. On the block $m\le i\le\lfloor\rho m\rfloor$, $i^q+n\le(\rho^q+1)n\le2\rho^q n$. Therefore $h_n(b;\theta)\ge N^{2b}\rho^{-2q}\sum_{i=m}^{\lfloor\rho m\rfloor}\theta_i^2/16$. The polished-tail inequality bounds $\sum_{i>N}\theta_i^2$ by $16L_0\rho^{2q}R h_n(b;\theta)$. Each actual bias coefficient has magnitude at most one, so this bounds the remaining squared bias. Together with step 3.1 and $h_n(b)\le8C^8$, this proves (ii). [F1, step 3.1, algebra] ∎
