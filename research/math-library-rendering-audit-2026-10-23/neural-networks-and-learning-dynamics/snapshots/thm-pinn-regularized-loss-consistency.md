---
id: thm-pinn-regularized-loss-consistency
kind: theorem
title: "Regularized PINN minimizers have vanishing residuals under sample refinement"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-physics-informed-neural-network-loss
  - alg-empirical-pinn-objective
  - lem-pinn-residual-loss-from-fill-distance
  - lem-pinn-random-samples-are-space-filling
  - cex-pinn-regularization-thresholds-need-balanced-sample-counts
  - thm-first-borel-cantelli
  - lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent
  - lem-pinn-cell-occupancy-controls-uniform-residual
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumptions 3.1–3.2, Theorem 3.2, equations (3.1)–(3.3), Appendices B–C"
---

## Statement

Let $D\ge2$, $0<\alpha\le1$, and let the residual and boundary sets $U,\Gamma\subset\mathbb R^D$ carry probability measures $\mu_r,\mu_b$. Put $s_r=D$ and $s_b=D-1$. For $i=r,b$, fix $c_i,C_i,\ell_{0,i},\rho_{0,i}>0$ and a specified family of finite measurable partitions of the corresponding set at every $0<\ell\le\ell_{0,i}$. Each cell is contained in an ambient cube of side $\ell$ and has mass at least $c_i\ell^{s_i}$. Assume $\mu_i(\overline B_\rho(x))\le C_i\rho^{s_i}$ for centers in that set and $0<\rho\le\rho_{0,i}$. These are small-scale conditions. The usual Lipschitz-domain and positive-density hypotheses may be retained, but the explicit partition and ball bounds are the properties used below.

Take nested iid sample sequences of respective laws $\mu_r,\mu_b$ and counts $m_r,m_b\to\infty$. For sufficiently large counts put
$$\ell_i=(c_i\sqrt{m_i})^{-1/s_i},\qquad \delta_i=\sqrt D\ell_i,\qquad A_i=m_i^{-\alpha/s_i},$$
$$C_m=3\max_{i=r,b}\{(C_i/c_i)D^{s_i/2}\sqrt{m_i}\},\qquad \widehat\lambda^R_{i,m}=3\lambda_i\delta_i^{2\alpha}/C_m,$$
where $\lambda_r,\lambda_b>0$ are fixed. The count threshold is explicitly $m_i\ge\max\{1,c_i^{-2}\ell_{0,i}^{-2s_i},c_i^{-2}D^{s_i}\rho_{0,i}^{-2s_i}\}$; thus both partition and ball bounds apply. Choose weights $\lambda^R_{i,m}\ge\widehat\lambda^R_{i,m}$ and $\|\lambda_m^R\|_\infty=O(\|\widehat\lambda_m^R\|_\infty)$, with the same constants throughout the formulas.

Let $f,g$ have finite $\alpha$-Hölder seminorms on their respective sets. Let $H_m$ be trial classes for which $L[h]$ and $B[h]$ have finite such seminorms; in the PDE application retain $H_m\subset C^{k,\alpha}(U)\cap C^{0,\alpha}(\bar U)$. On these sets define the population and empirical PINN losses by the weighted-square integral and sample-mean formulas in the fill-distance lemma, and define the regularized objective explicitly by
$$J_m(h)=\frac{\lambda_r}{m_r}\sum_{j=1}^{m_r}|L[h](x_j^r)-f(x_j^r)|^2+\frac{\lambda_b}{m_b}\sum_{j=1}^{m_b}|B[h](x_j^b)-g(x_j^b)|^2+\lambda^R_{r,m}[L[h]]_{\alpha;U}^2+\lambda^R_{b,m}[B[h]]_{\alpha;\Gamma}^2.$$
Suppose there are witnesses $u_m^*\in H_m$ with zero empirical PINN loss and $[L[u_m^*]]_{\alpha;U}^2+[B[u_m^*]]_{\alpha;\Gamma}^2\le M<\infty$, uniformly in $m$. Every global minimizer $h_m$ of $J_m$ satisfies the following, uniformly for every such minimizer on the same sampling events.

On the hit-cell event, with probability at least $1-q(m_r)-q(m_b)$ (clipped at zero),
$$\operatorname{Loss}^{\mathrm{PINN}}(h_m;\lambda)=O(A_r+A_b),\qquad q(n)=\sqrt n(1-1/\sqrt n)^n.$$
If the residual and boundary sample streams are independent, the lower bound improves to $(1-q(m_r))(1-q(m_b))$, exactly the Appendix B probability. If the chosen $c_r,c_b\le1$, this also implies the weaker later printed bound with $1-c_i/\sqrt{m_i}$ in place of $1-1/\sqrt{m_i}$. No normalization is implicit.

On the occupancy event, with probability at least $1-Q(m_r)-Q(m_b)$ (clipped at zero),
$$\|L[h_m]-f\|_{\infty;U}^2+\|B[h_m]-g\|_{\infty;\Gamma}^2=O(A_r+A_b),\qquad Q(n)=\sqrt n e^{-\sqrt n/8}.$$
For independent streams one may instead use $\max\{0,1-Q(m_r)\}\max\{0,1-Q(m_b)\}$. Almost surely the two uniform errors tend to zero along any count pairs tending to infinity. If $m_r=O(m_b^{D/(D-1)})$, both displayed right sides are $O(m_r^{-\alpha/D})$. No comparability of the regularization coordinates is required. Constants in these bounds depend on $M$, the fixed data, and the constant in the weight upper bound. If the witness bound is almost surely finite rather than deterministic, the eventual almost-sure assertions hold with that random finite constant. These are statements about global minimizers, not a training algorithm.

## Statement references

[[alg-empirical-pinn-objective]]

[[lem-pinn-cell-occupancy-controls-uniform-residual]]

[Shin et al., Theorems 3.1–3.2 and Appendices B–C](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The data, partitions, samples, exact thresholds, witnesses, and global minimizers in the Statement.

[F1] The objective $J_m$ is explicitly defined in the Statement. It extends the weighted-square and seminorm conventions of [[def-physics-informed-neural-network-loss]] and [[alg-empirical-pinn-objective]] to the measurable-set setting of [[lem-pinn-residual-loss-from-fill-distance]]; no Lipschitz boundary or differential interpretation is required for these functionals.

[F2] A hit in every cell gives the fill radii $\delta_i$ and failure bounds $q(m_i)$ ([[lem-pinn-random-samples-are-space-filling]]).

[F3] The deterministic population-loss bound uses $C_m$ and penalties $3\lambda_i\delta_i^{2\alpha}/C_m$ ([[lem-pinn-residual-loss-from-fill-distance]]).

[F4] The occupancy event and its deterministic uniform inequality have failure bound $Q(m_i)$ ([[lem-pinn-cell-occupancy-controls-uniform-residual]]).

[F5] Summable failure probabilities imply only finitely many failures almost surely ([[thm-first-borel-cantelli]]).

[F6] The original all-positive-scale lower mass assumption is impossible, and the original count condition does not imply threshold comparability ([[lem-shin-pinn-all-scale-cell-mass-assumption-inconsistent]], [[cex-pinn-regularization-thresholds-need-balanced-sample-counts]]).

## Proof

1.1 Write $J_m$ for the regularized objective at $h_m$ and $a_i=D^\alpha c_i^{-2\alpha/s_i}$, so $\delta_i^{2\alpha}=a_iA_i$. Minimality against $u_m^*$ and [F1] give $0\le J_m\le M\|\lambda_m^R\|_\infty\le K\max\{A_r,A_b\}/C_m$, for a fixed $K$. In particular, the $i$th empirical mean squared error is at most $J_m/\lambda_i$ and the squared operator seminorm is at most $J_m/\lambda^R_{i,m}$. No max-to-min ratio is used. [given, F1, algebra]

2.1 On both hit-cell events, [F2] and [F3] give $\operatorname{Loss}^{\mathrm{PINN}}(h_m;\lambda)\le C_mJ_m+3\sum_i\lambda_i a_iA_i[\mathrm{data}_i]_{\alpha}^2=O(A_r+A_b)$ by step 1.1. The union bound gives the stated joint probability without an independence premise; independence of the streams gives the product. If $0<c_i\le1$, then $0\le1-1/\sqrt{m_i}\le1-c_i/\sqrt{m_i}$, which proves the stated normalized comparison of probabilities. [F2, F3, step 1.1, algebra]

2.2 On the two occupancy events apply [F4] with $(v,g)=(L[h_m],f)$ and $(B[h_m],g)$ respectively. For each $i$, step 1.1 yields $$\|\mathrm{error}_i\|_\infty^2\le\frac{6\sqrt{m_i}}{\lambda_i}J_m+3a_iA_i\frac{J_m}{\lambda^R_{i,m}}+3a_iA_i[\mathrm{data}_i]_{\alpha}^2\le\left(\frac{6\sqrt{m_i}}{\lambda_i}+\frac{C_m}{\lambda_i}\right)J_m+3a_iA_i[\mathrm{data}_i]_{\alpha}^2.$$ Here $\lambda^R_{i,m}\ge3\lambda_i a_iA_i/C_m$ gives the second inequality. Since $C_m\ge3(C_i/c_i)D^{s_i/2}\sqrt{m_i}$ for each component, step 1.1 makes the last expression $O(A_r+A_b)$. This proves the uniform bound and its event probability. It remains valid for all sample-dependent minimizers because [F4] is simultaneous for every function. [F4, step 1.1, algebra]

3.1 For every integer $n$, $Q(n)=\sqrt n e^{-\sqrt n/8}$. Grouping $k^2\le n<(k+1)^2$ bounds its sum by $\sum_{k\ge1}(2k+1)(k+1)e^{-k/8}<\infty$; convergence follows, for example, since the ratio of successive summands tends to $e^{-1/8}<1$. Apply [F5] separately to the occupancy failure events at every integer sample count in each fixed nested stream. Almost surely, beyond two finite count thresholds every occupancy event holds, so step 2.2 applies along every count pair tending to infinity, including arbitrarily slowly growing or repeated count pairs. Thus both uniform errors tend to zero. Finally $m_r\le C m_b^{D/(D-1)}$ implies $A_b\le C^{\alpha/D}A_r$, proving the rate specialization. The conclusion has been proved using the corrected small-scale events and without the invalid all-scale premise or weight-comparability inference recorded in [F6]. [F5, F6, step 2.2, algebra] ∎

## Remarks

The original literal Assumption 3.1 quantifies its lower mass bound over every $\varepsilon>0$; [F6] refutes it. The corrected Statement explicitly restricts the range and does not claim the literal source hypotheses have instances. The original source uses the exact regularizers above and asserts uniform convergence, but Appendix C's bounded max-to-min inference is false by [F6]. The populated-cell proof above establishes that convergence with the same regularizers under the corrected nonvacuous sampling condition. Its occupancy probability is different from the Appendix B hit probability and is not attributed to the source. Appendix B's probability uses $1-1/\sqrt m$; the later printed $1-c/\sqrt m$ requires the explicitly stated normalization for this comparison. The complete pre-repair carrier, including its exact original statement, is preserved in the proposal's immutable before snapshot.
