---
id: lem-type-s-posterior-preliminary-contraction
kind: lemma
title: Type-S posterior contracts in quotient log-density coordinates without a tail restriction on a log-Lipschitz prior
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-type-s-and-h-multiscale-density-priors
  - lem-compact-wavelet-projection-kernel-and-commutator
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Castillo, On Bayesian supremum norm contraction rates, §3.2.1 and §4.3; preliminary contraction here obtained by a finite-dimensional likelihood argument
      url: https://arxiv.org/pdf/1304.1761
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §3.2
      url: https://arxiv.org/pdf/1310.2484
---

## Statement

Assume AC for the imported measure and Gaussian interfaces. Use Type-S priors and either cutoff of [[def-type-s-and-h-multiscale-density-priors]] with the compact multiresolution basis of [[lem-compact-wavelet-projection-kernel-and-commutator]], regular enough for the truth's Hölder approximation. Suppose $0<\rho_0\le f_0\le D_0$, $g_0=\log f_0\in C^\alpha$, and $\alpha>1/2$. In S1 take $\sigma_l=2^{-l(\alpha+1/2)}$ and any probability density whose logarithm is Lipschitz on all of $\mathbb R$. In S2 take Gaussian coefficients with $\sigma_l=2^{-l(r+1/2)}$ and $0<r<\alpha-1/4$.

Write $d=\dim V_{L_n}\asymp2^{L_n}$, $E_{L_n}=V_{L_n}\cap\{h:\int h=0\}$, $\theta=T-\int T$, $\theta_*=P_{L_n}g_0-\int g_0$, and $e_n=\sqrt{d/n}+d^{-\alpha}$. Under IID data of density $f_0$, the posterior distributions of $\|\theta-\theta_*\|_2/e_n$ are tight in probability. Equivalently, for every deterministic $b_n\to\infty$,
$$\Pi(\|\theta-\theta_*\|_2>b_ne_n\mid X^n)\to0$$
in $P_0^n$-probability. The normalizer defining the posterior is positive and finite $P_0^n$-almost surely. The quotient prior has a positive continuous Lebesgue density $q_L$ on $E_L$. In S1 it obeys
$$|\log q_L(\theta+u)-\log q_L(\theta)|\le B_L\|u\|_2,\qquad B_L^2\le C\sum_{l\le L}2^l\sigma_l^{-2},$$
and a shift in a single high wavelet coordinate obeys the sharper bound $C|u_{lk}|/\sigma_l$. The low scaling block has a fixed finite collection of analogous weighted bounds. In S2 the quotient prior is centered Gaussian, with precision $Q_L$ diagonal on high wavelets with entries $\sigma_l^{-2}$ and a fixed positive definite low scaling block. Its log-density increment is $-\langle Q_L\theta,u\rangle-\langle Q_Lu,u\rangle/2$.

## Facts & Assumptions

**Given:** AC and the density, basis, cutoff, coefficient, and regularity hypotheses of the Statement.

[F1] [[lem-compact-wavelet-projection-kernel-and-commutator]] gives $\|P_Lg_0-g_0\|_\infty\le Cd^{-\alpha}$ and $\|u\|_\infty\le C\sqrt d\|u\|_2$ on $V_L$.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] permits integration of nonnegative likelihoods in either order.

[F3] [[cor-markov-inequality-for-random-variables]] bounds a nonnegative variable's upper tail by its expectation divided by the threshold.

## Proof

1.1 Quotient out constants before using likelihood curvature. Constants belong to the fixed low scaling space. An orthogonal change within that finite space separates $T=\theta+c1$; integrate $c$ out of the prior and write $q_L$ for the resulting Lebesgue density on $E_L$. The likelihood depends only on $\theta$. In S1 its product density before integration obeys $p(\theta+u,c)/p(\theta,c)\in[e^{-B_L\|u\|_2},e^{B_L\|u\|_2}]$, where $B_L^2\le C\sum_{l\le L}2^l\sigma_l^{-2}\le Cd^{2\alpha+2}$. Integrating preserves both inequalities for $q_L$; it is positive, finite almost everywhere, and the log-Lipschitz inequality supplies its positive continuous finite version everywhere. In S2 the marginal is a nondegenerate Gaussian on $E_L$, with precision $Q_L$ equal to $\sigma_l^{-2}$ on high wavelets and a fixed positive definite low block; hence $\|Q_L\|\le Cd^{2r+1}$. [given, F2, algebra]

1.2 Let $f_*=e^{\theta_*}/\int e^{\theta_*}$. [F1] gives $\|f_*-f_0\|_\infty\le Cd^{-\alpha}$. For $\ell(\theta)=n(P_n\theta-\log\int e^\theta)$, the centered score at $\theta_*$ has expected squared Euclidean norm at most $Cnd$: sum the coordinate variances, each bounded by $D_0$ by orthonormality. The score's deterministic mean is the coefficient vector of $n(f_0-f_*)$, with norm at most $Cnd^{-\alpha}$. Consequently [F3] gives $\|\nabla\ell(\theta_*)\|_2=O_P(ne_n)$. On every ball $\|u\|_2\le Re_n$ with fixed $R$, [F1] and $\sqrt d e_n\to0$ make $f_{\theta_*+u}$ bounded uniformly above and away from zero. For $v\in E_L$, $\operatorname{Var}_f(v)=\inf_a\int(v-a)^2f$ lies between $c\|v\|_2^2$ and $C\|v\|_2^2$, using $\int v=0$. Thus $-\nabla^2\ell$ is between $cnI$ and $CnI$ on these balls. Convexity of $-\ell$ holds globally. [F1, F3, given, algebra]

1.3 In S1, $B_L\le Cne_n$ by either cutoff. In S2 the Hölder coefficient bound gives $G_L^2:=\|Q_L\theta_*\|_2^2\le C[1+\sum_{l\le L}2^{l(4r+2-2\alpha)}]$, so $G_L\le Cne_n$, and $\|Q_L\|/n\to0$ because $r<\alpha$. The Gaussian log-density increment is exactly $-\langle Q_L\theta_*,u\rangle-\langle Q_Lu,u\rangle/2$. In particular its radial upper slope is at most $G_L$, and on the $e_n$ ball it is bounded below by $-G_Le_n-\|Q_L\|e_n^2/2$. [given, step 1.1, algebra]

2.1 Fix a score event $\|\nabla\ell(\theta_*)\|_2\le Ane_n$. Put $r_0=Re_n$, with $R$ a large fixed constant. Taylor's formula on the $r_0$ ball bounds $\ell(\theta_*+r_0\omega)-\ell(\theta_*)$ above by $Ane_nr_0-cnr_0^2/2$ and its radial derivative above by $Ane_n-cnr_0$. Global convexity of $-\ell$ extends this derivative bound to every $r\ge r_0$. Add the prior bound $B_Lr$ in S1, or $G_Lr$ with its nonpositive quadratic term in S2. For $R$ large enough the log unnormalized posterior ratio $H(r\omega)$ relative to $\theta_*$ is at most $-c'nr_0r$ for all $r\ge r_0$. On $r\le e_n$, the lower Taylor bound and the prior lower bounds instead give $H\ge-C_Ane_n^2$. [step 1.1, step 1.2, step 1.3, algebra]

2.2 Polar integration in dimension $m=d-1$ bounds the tail/normalizer ratio by $e^{C_Ane_n^2}m\int_R^\infty t^{m-1}e^{-c'nRe_n^2t}dt$. Here $ne_n^2\ge d>m$. Choose $R$ so large that $\log t\le c'Rt/4$ for $t\ge R$ and $C_A\le c'R^2/4$. The integral is then at most $[m/(c''nRe_n^2)]e^{-c''nR^2e_n^2}$ after decreasing $c''>0$, and tends to zero. The denominator used here is the integral on the $e_n$ ball, at least its volume times $e^{-C_Ane_n^2}$ times the positive unnormalized value at $\theta_*$. First increase $A$ to make its score event arbitrarily probable, then increase $R$. This proves tightness. For any $b_n\to\infty$, eventual containment of every fixed $Re_n$ ball in the $b_ne_n$ ball yields the stated equivalent formulation. [F3, step 1.2, step 2.1, algebra]

3.1 Every modeled density is everywhere positive. Its prior predictive product density is positive and integrates to one by [F2], so it is finite Lebesgue-almost everywhere on the sample cube. The law $P_0^n$ has a bounded Lebesgue density, hence the same exceptional set is $P_0^n$-null. This proves finite positive evidence on the asserted fibers independently of the score event. [F2, given, algebra] ∎
