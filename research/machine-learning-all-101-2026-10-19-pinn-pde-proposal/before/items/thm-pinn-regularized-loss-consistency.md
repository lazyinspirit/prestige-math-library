---
id: thm-pinn-regularized-loss-consistency
kind: theorem
title: "Regularized PINN minimizers have vanishing residuals under sample refinement"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-physics-informed-neural-network-loss
  - alg-empirical-pinn-objective
  - lem-pinn-residual-loss-from-fill-distance
  - lem-pinn-random-samples-are-space-filling
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
  - thm-arzela-ascoli-for-real-ck
  - thm-first-borel-cantelli
  - def-countable-choice
  - def-dependent-choice
  - lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumptions 3.1–3.2, Theorem 3.2, equations (3.1)–(3.3), Appendices B–C"
---

## Statement

Let $d\ge2$, $0<\alpha\le1$, $U\subset\mathbb R^d$ be a bounded Lipschitz domain, and $\Gamma\subseteq\partial U$ be closed. Let $\mu_r$ and $\mu_b$ be probability measures with densities relative to $d$-dimensional Lebesgue measure and $(d-1)$-dimensional Hausdorff measure. Assume each density is supported on the respective set and has a positive infimum. Assume that for every $\varepsilon>0$ there are partitions of $U$ and $\Gamma$ into cells contained in cubes of side $\varepsilon$, with cell masses at least $c_r\varepsilon^d$ and $c_b\varepsilon^{d-1}$, and that ball masses are at most $C_r\varepsilon^d$ and $C_b\varepsilon^{d-1}$, respectively. Let the residual and boundary samples be iid from these measures, with counts satisfying $m_r=O(m_b^{d/(d-1)})$ and $m_r,m_b\to\infty$ along nested iid sample sequences.

For each sample-count pair, let $H_m$ be a class of trial functions in $C^{k,\alpha}(U)\cap C^{0,\alpha}(\bar U)$, where $k$ is the highest derivative order in $L$. Assume $L[h]\in C^{0,\alpha}(U)$ and $B[h]\in C^{0,\alpha}(\Gamma)$ for every $h\in H_m$. Suppose $H_m$ contains a witness $u_m^*$ with zero empirical PINN loss and with $[L[u_m^*]]_{\alpha;U}$ and $[B[u_m^*]]_{\alpha;\Gamma}$ uniformly bounded in $m$. Let $\lambda_r,\lambda_b>0$ be fixed and let $\lambda_m^R$ satisfy the exact thresholds and scaling condition in the PINN objective algorithm. If $h_m\in H_m$ is a global minimizer of the Hölder-regularized empirical objective, then the source claims that, with probability at least
$$\left(1-\sqrt{m_r}\left(1-\frac{c_r}{\sqrt{m_r}}\right)^{m_r}\right)\left(1-\sqrt{m_b}\left(1-\frac{c_b}{\sqrt{m_b}}\right)^{m_b}\right),$$
the population PINN loss is $O(m_r^{-\alpha/d})$, and that with probability one $L[h_m]\to f$ in $C^0(U)$ and $B[h_m]\to g$ in $C^0(\Gamma)$. These are global-minimizer conclusions and do not assert convergence of an optimizer.

## Statement references
[Shin et al., Theorem 3.2 and Assumptions 3.1–3.2: regularized-minimizer consistency statement](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The sample measures, fill partitions, network classes, regularization thresholds, exact-zero empirical-loss witnesses, and global minimizers in the Statement.

[F1] The deterministic fill-distance inequality bounds population loss by the regularized empirical loss with the exact coefficient $C_m$ and data-Hölder error terms ([[lem-pinn-residual-loss-from-fill-distance]]).

[F2] The iid sample events give the fill radii $\sqrt d\,c_r^{-1/d}m_r^{-1/(2d)}$ and $\sqrt d\,c_b^{-1/(d-1)}m_b^{-1/(2(d-1))}$ with the displayed probability ([[lem-pinn-random-samples-are-space-filling]]).

[F3] The real-valued Arzelà–Ascoli supplier gives compact-uniform subsequences for equicontinuous, pointwise bounded families on compact metric spaces, under Countable Choice and Dependent Choice ([[thm-arzela-ascoli-for-real-ck]], [[def-countable-choice]], [[def-dependent-choice]]).

[F4] The displayed sample-count relation does not make the two threshold coordinates comparable; equal counts already give an unbounded threshold ratio ([[cex-pinn-regularization-thresholds-need-balanced-sample-counts]]).

[F5] The empirical objective is the empirical PINN loss plus the prescribed Hölder seminorm penalties, with the exact threshold formula and scaling condition ([[alg-empirical-pinn-objective]]).

[F6] If $\sum_m\mathbb P(E_m)<\infty$, then $\mathbb P(\limsup_m E_m)=0$ ([[thm-first-borel-cantelli]]).

[F7] The source's literal cell-mass assumption, requiring $\mu(E)\ge c\varepsilon^d$ for a cell at every $\varepsilon>0$, is impossible for a probability measure ([[lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent]]).

[F8] The local random-fill lemma gives probability $1-\sqrt m(1-1/\sqrt m)^m$; this implies the Statement's $c$-dependent lower bound when $0<c\le1$, but not for unrestricted $c>1$ ([[lem-pinn-random-samples-are-space-filling]]).

## Proof

**Proof strategy:** use sample filling, the fill-distance inequality, global minimization, and compactness of the residual families.

1.1 Put $R_m^*=[L[u_m^*]]_{\alpha;U}^2+[B[u_m^*]]_{\alpha;\Gamma}^2$. Global minimality and the zero empirical loss of $u_m^*$ imply
$$\operatorname{Loss}_{m}(h_m;\lambda,\lambda_m^R)\le\operatorname{Loss}_{m}(u_m^*;\lambda,\lambda_m^R)\le\|\lambda_m^R\|_\infty R_m^*.$$
The right side is $O(\|\widehat\lambda_m^R\|_\infty)$ because the witness seminorms are uniformly bounded and the source scaling condition holds. [given, F5, algebra]

1.2 On the fill event in [F2], substitute the two fill radii into [F1]. The definitions of $C_m$ and $\widehat\lambda_m^R$ make the seminorm coefficients exactly the regularization thresholds in the empirical objective. Using step 1.1 and $m_r=O(m_b^{d/(d-1)})$ gives the stated $O(m_r^{-\alpha/d})$ population-loss bound on that event. [step 1.1, F1, F2, F5, algebra]

2.1 For all sufficiently large $m$, $(1-1/\sqrt m)^m\le e^{-\sqrt m}$ by $1-x\le e^{-x}$. The series $\sum_m\sqrt m e^{-\sqrt m}$ converges: grouping $m$ with $k^2\le m<(k+1)^2$ bounds each block by $(2k+1)(k+1)e^{-k}$, and the resulting polynomial-times-geometric series converges. Thus both failure-probability series supplied by [F2] are summable. Applying [F6] to the missed-fill events for the nested iid sample sequences shows that both fill events hold eventually almost surely. Step 1.2 then yields population-loss convergence to zero almost surely. [given, F2, F6, step 1.2, algebra]

2.2 The regularized minimizer bound controls the residual seminorm by a constant multiple of $\|\lambda_m^R\|_\infty/\lambda^R_{r,m}$ and the boundary seminorm by a constant multiple of $\|\lambda_m^R\|_\infty/\lambda^R_{b,m}$. The hypotheses and the threshold-ratio counterexample [F4] do not provide a uniform bound for the latter ratio. Thus the equicontinuity hypothesis needed to apply [F3] to the boundary residual family has not been established from the stated sample-count condition. In addition, [F8] shows that the $c$-dependent probability lower bound in the Statement is not implied by [F2] unless the lower cell-mass constants are at most $1$; no such normalization is stated. The source's almost-sure uniform boundary-residual conclusion and its exact probability bound remain unresolved under these hypotheses. [step 1.1, F2, F3, F4, F8, algebra]

2.3 Independently, [F7] refutes the literal sampling precondition in the Statement: for any $c_r>0$, the lower bound $c_r\varepsilon^d$ exceeds total probability for sufficiently large $\varepsilon$. Therefore the source sampling assumptions admit no probability measures as written, and the retained consistency statement has no instances until that condition is corrected. [F7, contradiction]

## Unresolved proof obligation

The expected population-loss rate follows from the local fill-distance inequality on a fill event. The claimed almost-sure uniform convergence of the boundary residuals does not follow from the source's written compactness argument: Appendix C infers a bounded max/min ratio of regularization coordinates, but [F4] refutes that inference under the stated count condition. The source probability lower bound also requires an unstated normalization, and Assumption 3.1's literal all-$\varepsilon$ cell-mass bound is inconsistent for a probability measure by [F7]. The source theorem is retained and escalated; owner reconciliation needs a nonvacuous small-scale partition hypothesis, a matching probability bound, and a proof or corrected premise for the boundary-residual compactness step.
