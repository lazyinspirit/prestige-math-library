---
dependency_level: 2
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
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-mean-and-variance
  - lem-uniform-empirical-bayes-marginal-score-bound
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

In the defined inverse Gaussian procedure, let $\theta=(\theta_i)\in\ell^2(\mathbb N,\mathbb R)$ be the true sequence. For $n\ge3$ and $\alpha\in[0,A_n]$ write $q_\alpha=1+2\alpha+2p$, $N_{n,\alpha}=n^{1/q_\alpha}$, $R_{n,\alpha}=N_{n,\alpha}^{-2\alpha}=N_{n,\alpha}^{1+2p}/n$, and
$$ h_n(\alpha;\theta):=\frac{q_\alpha}{N_{n,\alpha}\log n}\sum_{i=1}^{\infty}\frac{n^2i^{1+2\alpha}(\log i)\theta_i^2}{(i^{q_\alpha}+n)^2}. $$
Thus $h_n(\alpha;\theta)$ is exactly the score normalization $S_\alpha/(N_{n,\alpha}\log N_{n,\alpha})$ in [[lem-uniform-empirical-bayes-marginal-score-bound]], since $\log N_{n,\alpha}=(\log n)/q_\alpha$. Put
$$ B_i(\alpha)=-\frac{i^{1+2\alpha}\theta_i}{i^{1+2\alpha}+n\kappa_i^2},\qquad W_i(\alpha)=\frac{\sqrt n\kappa_i Z_i}{i^{1+2\alpha}+n\kappa_i^2}. $$
When $\alpha$ is fixed in the proof, abbreviate $q=q_\alpha$, $N=N_{n,\alpha}$, and $R=R_{n,\alpha}$; endpoint subscripts such as $q_b$, $N_a$, and $R_b$ denote the corresponding values.
Let $0\le a\le b\le A_n$, with $N_{n,A_n}\to\infty$ and $A_n/N_{n,A_n}\to0$. Constants below depend only on $p,C,L_0,\rho,\gamma$. For all sufficiently large $n$, (i) $r_{n,\gamma}(b)^2\ge d R_{n,b}$ for $b>0$; (ii) if $\theta_1=0$, $\theta\in\Theta_{pt}(L_0,N_0,\rho)$ and $h_n(b;\theta)\le8C^8$, then $\sup_{a\le\alpha\le b}\|B(\alpha)\|^2\le K(1+L_0\rho^{2q_b})R_{n,b}$; (iii) with probability at least $1-K/N_{n,a}$, $\sup_{a\le\alpha\le b}\|W(\alpha)\|^2\le K R_{n,a}$. Part (iii) also holds at $a=0$. At $b=0$ the procedure gives the whole parameter space whenever the selector lies in $[a,b]$.

## Facts & Assumptions

**Given:** AC and the hypotheses of the Statement, with independent standard normal errors $Z_i$.

[F1] The procedure and posterior formula give the independent Gaussian coordinates and the displayed posterior mean and variances. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]] [[lem-gaussian-sequence-empirical-bayes-posterior-formula]]

[F2] A square-integrable real variable $Y$ satisfies $P(|Y-EY|\ge u)\le\operatorname{Var}(Y)/u^2$. [[cor-chebyshev-inequality-for-random-variables]]

[F3] Nonnegative coordinate sums are integrated termwise by Tonelli on the probability space times the counting-measure space. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] Each noise coordinate has law $N(0,1)$ with density $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ and therefore $E Z_i^2=1$. [[def-standard-normal-and-normal-laws]] [[lem-normal-location-scale-mean-and-variance]]

## Proof

1.1 The posterior coordinate variances satisfy $C^{-4}i^{2p}/(i^q+n)\le v_i\le C^4 i^{2p}/(i^q+n)$, and the noise weights satisfy $t_i=n\kappa_i^{-2}/(i^{1+2\alpha}\kappa_i^{-2}+n)^2\le C^6 n i^{2p}/(i^q+n)^2$. Split at $N$. For $i\le N$, $t_i\le C^6 i^{2p}/n$ and $\sum_{i\le N} i^{2p}\le2N^{1+2p}$ for $N\ge2$. For $i>N$, $t_i\le C^6 n i^{-2-4\alpha-2p}$; the decreasing-function integral comparison bounds its sum by $2C^6nN^{-1-4\alpha-2p}\le2C^6R$. Thus $\sum_i t_i\le4C^6R$ and $\sup_i t_i\le C^6R/N$. By [F4], $E Z_i^2=1$. Two integrations by parts using $\phi'(x)=-x\phi(x)$ give $E Z_i^4=3$ (all boundary terms vanish), so $\operatorname{Var}(Z_i^2)=2$. Independence then bounds the variance of $\sum_i t_iZ_i^2$ by $8C^{12}R^2/N$. Finite sums pass to the nonnegative infinite sum by monotone convergence; the centered sums are Cauchy in $L^2$ since $\sum_i t_i^2<\infty$. [F1, F3, F4, given, algebra]

1.2 All $t_i(\alpha)$ decrease in $\alpha$. Thus the same $Z_i$ couple the process and $\sup_{a\le\alpha\le b}\|W(\alpha)\|^2=\sum_i t_i(a)Z_i^2$. Chebyshev at threshold $R_a$ above its mean yields $P\{\sup\|W\|^2>(4C^6+1)R_a\}\le8C^{12}/N_a$, proving (iii). [F2, step 1.1, algebra]

2.1 For the posterior-radius lower bound, retain only integer indices $N/2\le i\le N$. For $N\ge6$ there are at least $N/3$ such indices, and each has $v_i\ge C^{-4}2^{-2p-1}N^{2p}/n$. The retained quadratic sum $U_*$ therefore has mean at least $d_0R$, where $d_0=C^{-4}2^{-2p-1}/3$. Each retained variance weight is at most $C^4N^{2p}/n=C^4R/N$, so $\operatorname{Var}U_*\le2(C^4R/N)E U_*$. Also $E U_*\le C^4R$, hence $P\{U_*<d_0R/2\}\le8C^8/(d_0^2N)$. Since the full posterior squared norm dominates $U_*$, for sufficiently large $N$ its $1-\gamma$ quantile is at least $d_0R/2$. This proves (i), with $d=d_0/2$, independently of $A_n$. The full norm is finite a.s. when $\alpha>0$ because $\sum v_i\le\sum i^{-1-2\alpha}<\infty$. At zero use only the defined whole-space branch. [F1, F2, step 1.1, algebra]

3.1 Each squared bias coefficient increases with $\alpha$, so it suffices to consider $b$. Set $q=q_b$, $N=N_b$. By the bounds on $\kappa_i$, $\|B(b)\|^2\le C^8\sum_i i^{2+4b+4p}\theta_i^2/(i^q+n)^2$. For $2\le i\le N$ and $N\ge4$, $i^{q+2p}/\log i\le N^{q+2p}/\log N$. Indeed $x^r/\log x$ for $r\ge1$ has its maximum on $[2,N]$ at an endpoint, and its value at $N\ge4$ exceeds its value at $2$. The contribution of these indices is consequently at most $C^8R h_n(b;\theta)$. The index $1$ is zero by hypothesis. [F1, F3, given, algebra]

3.2 Put $m=\lfloor N\rfloor$. For large $n$, $m\ge N_0$ and uniformly for $b\le A_n$, $m^{1+2b}\ge N^{1+2b}/2$ and $\log m\ge\log N/2$, because $(1+2A_n)/N_{A_n}\to0$. On the block $m\le i\le\lfloor\rho m\rfloor$, $i^q+n\le(\rho^q+1)n\le2\rho^q n$. Therefore $h_n(b;\theta)\ge N^{2b}\rho^{-2q}\sum_{i=m}^{\lfloor\rho m\rfloor}\theta_i^2/16$. The polished-tail inequality bounds $\sum_{i>N}\theta_i^2$ by $16L_0\rho^{2q}R h_n(b;\theta)$. Each actual bias coefficient has magnitude at most one, so this bounds the remaining squared bias. Together with step 3.1 and $h_n(b)\le8C^8$, this proves (ii). [F1, step 3.1, algebra] ∎
