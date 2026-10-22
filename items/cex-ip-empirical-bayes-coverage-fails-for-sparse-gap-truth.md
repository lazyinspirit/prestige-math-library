---
id: cex-ip-empirical-bayes-coverage-fails-for-sparse-gap-truth
kind: counterexample
title: Sparse-gap truths defeat uniform coverage over a hyperrectangle
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-credible-set-and-frequency-coverage
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-gaussian-sequence-hyperrectangle-class
  - def-polished-tail-class-for-gaussian-sequence
  - def-axiom-of-choice
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
  - cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: The model inherits AC through the Gaussian product prior; no stronger choice principle is asserted.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Botond Szabó, A. W. van der Vaart, and J. H. van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "Theorem 3.1 and complete proof in §9; Theorem 3.6 and complete proof in §5 (arXiv:1310.4489v5)."
---

## Statement refuted

Assume AC. Fix $p\ge0$, $C\ge1$, $\beta>0$, finite $A>\beta$, $0<M\le(1984C^8)^{-1}$, and $0<\gamma<1$. For $n\ge3$, observe $X_i=\kappa_i\theta_i+n^{-1/2}Z_i$ in the Gaussian sequence experiment, where $\theta\in\ell^2(\mathbb N_+,\mathbb R)$ is fixed, $C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$, and the $Z_i$ are independent $N(0,1)$. Define $\Theta_\beta(M)=\{\theta\in\ell^2:\sup_{i\ge1}i^{1+2\beta}\theta_i^2\le M\}$. For $0<\alpha\le A$, use the product prior $\Pi_\alpha=\bigotimes_{i\ge1}N(0,i^{-1-2\alpha})$ and its product Gaussian posterior with coordinate mean $\widehat\theta_{n,\alpha,i}(x)=n\kappa_ix_i/(i^{1+2\alpha}+n\kappa_i^2)$ and variance $(i^{1+2\alpha}+n\kappa_i^2)^{-1}$. Select $\widehat\alpha_n$ as a Borel global maximizer over $[0,A]$ of
$$\ell_n(\alpha;x)=-\frac12\sum_{i\ge1}\left[\log\left(1+\frac{n\kappa_i^2}{i^{1+2\alpha}}\right)-\frac{n^2\kappa_i^2x_i^2}{i^{1+2\alpha}+n\kappa_i^2}\right],$$
Assume the score series is finite on a Borel full-measure data domain for the truths considered and is upper semicontinuous in $\alpha$ there. For $\widehat\alpha_n>0$, let $r_{n,\gamma}(\widehat\alpha_n)$ be the $1-\gamma$ posterior quantile of $\|\theta-\widehat\theta_{n,\widehat\alpha_n}(X)\|_2$, and let $\widehat C_n(L)$ be the ball centered at $\widehat\theta_{n,\widehat\alpha_n}(X)$ with radius $Lr_{n,\gamma}(\widehat\alpha_n)$. Set $\widehat C_n(L)=\ell^2$ if $\widehat\alpha_n=0$. There exists a finite fixed $L\ge1$ for which
$$\liminf_{n\to\infty}\inf_{\theta\in\Theta_\beta(M)}P_\theta^{(n)}\{\theta\in\widehat C_n(L)\}\ge1-\gamma$$

## Statement references

[[def-adaptive-empirical-bayes-gaussian-sequence-procedure|The mildly ill-posed sequence model, Gaussian prior family, selector domain, posterior ball, and zero-selector convention.]]

[[def-gaussian-sequence-hyperrectangle-class|The hyperrectangle is defined by the coordinatewise bound $\sup_i i^{1+2\beta}\theta_i^2\le M$.]]

[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage|An explicit sparse-gap truth gives coverage tending to zero along a subsequence under a stated inflation bound.]]

## Facts & Assumptions

**Given:** AC and the model, prior, selector, $p,C,\beta,A,M,\gamma$ in the Statement refuted.

[A1] AC supplies the countable Gaussian product construction used by the empirical-Bayes procedure. [[def-axiom-of-choice]]

[F1] $\Theta_\beta(M)=\{\theta\in\ell^2:\sup_{i\ge1}i^{1+2\beta}\theta_i^2\le M\}$. [[def-gaussian-sequence-hyperrectangle-class]]

[F2] $\theta\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ only if $\sum_{i=N}^{\infty}\theta_i^2\le L_0\sum_{i=N}^{\lfloor\rho N\rfloor}\theta_i^2$ for every integer $N\ge N_0$. [[def-polished-tail-class-for-gaussian-sequence]]

[F3] For the sparse-gap construction below, every deterministic nonnegative inflation sequence satisfying $L_{n_j}\le K_L\sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)}$ eventually, for some finite $K_L>0$, has $P_{\theta_0}^{(n_j)}\{\theta_0\in\widehat C_{n_j}(L_{n_j})\}\to0$. [[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage]]

[F4] For each fixed $A,L_0,N_0,\rho$, there is a finite inflation constant $L$ for which coverage tends to one uniformly over $\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ with $\theta_1=0$. [[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails]]

[F5] For $\widehat\alpha_n>0$, the procedure uses the posterior-mean-centered $\ell^2$ ball with radius $L$ times the $1-\gamma$ posterior quantile; its zero-selector branch is the whole space. [[def-adaptive-empirical-bayes-gaussian-sequence-procedure]]

[F6] At a fixed truth, frequentist coverage is the sampling probability of the membership event $\{\theta\in C_n(Y)\}$. [[def-ip-credible-set-and-frequency-coverage]]

## Counterexample

Put $s=1+2\beta+2p$, $\rho_j=2^j$, $n_1=2$, and $n_{j+1}=\left\lceil(2\rho_{j+1}^2)^s n_j\right\rceil$. Set $N_j=n_j^{1/s}$ and define the fixed truth by
$$\theta_{0,i}^2=\begin{cases}0,&N_j/\rho_j<i\le N_j\text{ for some }j,\\0,&2N_j<i\le\rho_jN_j\text{ for some }j,\\Mi^{-1-2\beta},&\text{otherwise.}\end{cases}$$
For every fixed $L\ge1$, this truth belongs to $\Theta_\beta(M)$, has $\theta_{0,1}=0$, is outside every fixed polished-tail class, and has subsequence coverage tending to zero.

**Given:** The hypotheses in the Statement refuted and the construction above.

1.1 Every squared coordinate is either zero or $Mi^{-1-2\beta}$, so $\sup_i i^{1+2\beta}\theta_{0,i}^2\le M$ and $\sum_i\theta_{0,i}^2\le M\sum_i i^{-1-2\beta}<\infty$. Also $N_1=2^{1/s}\in(1,2)$ and $\rho_1=2$, hence $N_1/\rho_1<1\le N_1$ and the first zero gap contains $i=1$. Thus $\theta_0\in\Theta_\beta(M)$ and $\theta_{0,1}=0$. [F1, given, algebra]

2.1 Fix any polished-tail parameters $L_0\ge1$, integer $N_0\ge1$, and $\rho_*\ge2$. The recursion gives $N_j/\rho_j\ge2\rho_jN_{j-1}>\rho_{j-1}N_{j-1}$, so every earlier gap ends below $N_j/\rho_j$. Also $N'_j=\lfloor2N_j\rfloor+1\le2N_j+1$; because $N_j\to\infty$ and $\rho_j\to\infty$, for all sufficiently large $j$ we have $N'_j\ge N_0$ and $\rho_*(2N_j+1)\le\rho_jN_j$, whence $\lfloor\rho_*N'_j\rfloor\le\rho_jN_j$. Since $N'_j>2N_j$, the block $[N'_j,\lfloor\rho_*N'_j\rfloor]$ lies in the current zero gap $(2N_j,\rho_jN_j]$. For all sufficiently large $j$, $i_j=\lfloor\rho_jN_j\rfloor+1\le\rho_jN_j+1<4\rho_jN_j\le N_{j+1}/\rho_{j+1}$, so $i_j$ is before the next first gap; applying the same separation at later indices puts all still later gaps farther right. Since $\rho_jN_j>2N_j+1\ge N'_j$ eventually, $i_j>N'_j$; earlier gaps end below $N_j/\rho_j<i_j$. Hence $i_j$ lies outside every zero gap and is in the tail from $N'_j$, with $\theta_{0,i_j}^2=Mi_j^{-1-2\beta}>0$. The block sum is zero while that tail is positive, violating [F2]. Thus $\theta_0$ is outside every fixed polished-tail class. [F2, given, step 1.1, algebra]

2.2 For a fixed $L\ge1$, take $L_{n_j}=L$ and $K_L=L/\sqrt M$. Since $(1+2p)/(8+8\beta+8p)>0$ and $\rho_j\ge1$, we have $L_{n_j}=L\le K_L\sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)}$ for every $j$. Applying [F3] gives $P_{\theta_0}^{(n_j)}\{\theta_0\in\widehat C_{n_j}(L)\}\to0$. By [F6] this is the frequentist coverage at the fixed truth; because $\theta_0\in\Theta_\beta(M)$ by step 1.1, the infimum coverage over that hyperrectangle cannot have lower limit at least $1-\gamma$. [A1, F3, F5, F6, given, step 1.1, algebra]

3.1 The positive coverage statement [F4] has the additional polished-tail hypothesis, which fails for $\theta_0$ by step 2.1. Thus the sparse-gap undercoverage does not contradict the polished-tail theorem; it refutes only the broader fixed-inflation claim over the full hyperrectangle. [F2, F4, step 2.1, step 2.2, algebra] ∎
