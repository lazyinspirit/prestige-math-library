---
id: thm-lmnn-projected-subgradient-best-average-bound
kind: theorem
title: "Conditional best-iterate and weighted-average bound for LMNN training"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-lmnn-finite-budget-projected-subgradient
  - alg-projected-subgradient-method
  - thm-lmnn-fixed-target-objective-is-convex
  - lem-lmnn-explicit-subgradient-and-data-bound
  - thm-frobenius-projection-onto-psd-cone-is-spectral-clipping
  - lem-svec-transports-frobenius-subgradients
  - def-countable-choice
  - lem-symmetric-matrix-frobenius-isometry
  - lem-positive-semidefinite-cone-is-frobenius-closed
  - def-euclidean-inner-product
  - thm-euclidean-space-complete
  - def-hilbert-space
  - thm-projection-onto-a-nonempty-closed-convex-set
  - thm-projected-subgradient-best-and-average-bound
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, Foundations and Trends in Machine Learning 8(3–4) (2015)"
      url: "https://arxiv.org/pdf/1405.4980"
    - title: "Dimitri P. Bertsekas, Convex Analysis and Optimization, MIT 6.253 Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $d,n,C$ be positive integers, let $(x_i,y_i)_{i=1}^{n}$ be a finite sample with $x_i\in\mathbb R^d$ and $y_i\in\{1,\ldots,C\}$, let fixed target sets satisfy $N_i\subseteq\{j\ne i:y_j=y_i\}$, and let $\mu\in[0,1]$. For symmetric $M$ put $q_M(x,x')=(x-x')^TM(x-x')$ and

$$F_\mu(M)=(1-\mu)\sum_i\sum_{j\in N_i}q_M(x_i,x_j)+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}[1+q_M(x_i,x_j)-q_M(x_i,x_l)]_+,$$

where $[z]_+=\max\{z,0\}$, and minimize over $\mathbb S_+^d=\{M=M^T:v^TMv\ge0\text{ for every }v\in\mathbb R^d\}$. Let $T\ge1$ be an integer, choose $M_0\in\mathbb S_+^d$ and step sizes $\eta_0,\ldots,\eta_{T-1}>0$, and suppose a global minimizer $M^*\in\mathbb S_+^d$ of $F_\mu$ exists. For each $t<T$, put $C_{ij}=(x_i-x_j)(x_i-x_j)^T$, $h_{ijl}(M)=1+\langle M,C_{ij}-C_{il}\rangle_F$, and $\gamma_{ijl}(M)=1$ if $h_{ijl}(M)>0$ and $0$ if $h_{ijl}(M)\le0$. Form

$$G_t=(1-\mu)\sum_i\sum_{j\in N_i}C_{ij}+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}\gamma_{ijl}(M_t)(C_{ij}-C_{il}),\qquad M_t-\eta_tG_t=U_t\operatorname{diag}(\lambda_{t,1},\ldots,\lambda_{t,d})U_t^T,$$

where $U_t$ is orthogonal, and define

$$M_{t+1}=U_t\operatorname{diag}\bigl(\max\{\lambda_{t,1},0\},\ldots,\max\{\lambda_{t,d},0\}\bigr)U_t^T.$$

Set

$$A_T=\sum_{t=0}^{T-1}\eta_t,\qquad \overline M_T=\frac{1}{A_T}\sum_{t=0}^{T-1}\eta_tM_t,$$

let $M_{\rm best}$ be the least-index minimizer of $F_\mu(M_t)$ over $0\le t<T$, and define

$$B_{\rm data}=(1-\mu)\sum_i\sum_{j\in N_i}\|x_i-x_j\|_2^2+\mu\sum_i\sum_{j\in N_i}\sum_{l:y_l\ne y_i}\bigl(\|x_i-x_j\|_2^2+\|x_i-x_l\|_2^2\bigr),\qquad R=\|M_0-M^*\|_F,$$

where $\|z\|_2=(\sum_{r=1}^d z_r^2)^{1/2}$ and $\|\cdot\|_F$ is the entry-sum Frobenius norm.

Then $A_T>0$, $M_{\rm best},\overline M_T\in\mathbb S_+^d$, and

$$\max\{F_\mu(M_{\rm best})-F_\mu(M^*),\,F_\mu(\overline M_T)-F_\mu(M^*)\}\le\frac{R^2+B_{\rm data}^2\sum_{t=0}^{T-1}\eta_t^2}{2A_T}.$$

This conditional bound applies to the best observed iterate and weighted average; it does not assert the same bound for the final iterate $M_T$ or any test-error improvement.

## Statement references

[[alg-lmnn-finite-budget-projected-subgradient|Finite projected-subgradient procedure and kink convention]]

[[thm-lmnn-fixed-target-objective-is-convex|Convexity of the fixed-target objective]]

[[lem-lmnn-explicit-subgradient-and-data-bound|Subgradient formula and uniform data bound]]

[[lem-svec-transports-frobenius-subgradients|Euclidean coordinate reduction]]

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-euclidean-space-complete|Completeness of finite-dimensional Euclidean space]]

[[def-hilbert-space|Hilbert-space definition]]

[[thm-projection-onto-a-nonempty-closed-convex-set|Abstract Hilbert projection theorem]]

[[thm-projected-subgradient-best-and-average-bound|Published projected-subgradient best/average bound]]

[[thm-frobenius-projection-onto-psd-cone-is-spectral-clipping|Choice-free spectral-clipping projection formula]]

[Bubeck, §3.1, printed pp. 262–266](https://arxiv.org/pdf/1405.4980)

[Bertsekas, MIT 6.253 Lecture 15, printed pp. 200–205](https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf)

[Weinberger and Saul, §3.4 and Appendix A, printed pp. 220–221 and 238–241](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

## Facts & Assumptions

**Given:** The data and objective in the Statement, $\mathrm{AC}_\omega$, an attained minimizer $M^*$, the finite projected-subgradient procedure, and its positive step sizes.

[A1] Countable Choice selects one element from each member of a countable family of nonempty sets ([[def-countable-choice]]).

[F1] The finite target objective is convex on $\mathbb S_+^d$, and this cone is convex ([[thm-lmnn-fixed-target-objective-is-convex]]).

[F2] The real positive-semidefinite cone is closed in the Frobenius metric ([[lem-positive-semidefinite-cone-is-frobenius-closed]]).

[F3] Symmetric vectorization is a linear inner-product isometry to $\mathbb R^m$ and transports closed convex domains and subgradients ([[lem-symmetric-matrix-frobenius-isometry]], [[lem-svec-transports-frobenius-subgradients]]).

[F4] Euclidean space $\mathbb R^m$ is complete and hence a real Hilbert space under its Euclidean inner product ([[thm-euclidean-space-complete]], [[def-hilbert-space]], [[def-euclidean-inner-product]]).

[F5] Under Countable Choice, every point of a real Hilbert space has a unique nearest point in each nonempty closed convex set ([[thm-projection-onto-a-nonempty-closed-convex-set]]).

[F6] The local subgradient formula returns valid subgradients and satisfies $\|G(M_t)\|_F\le B_{\rm data}$ for every iterate ([[lem-lmnn-explicit-subgradient-and-data-bound]]).

[F7] The finite-budget projected-subgradient method updates $z_{t+1}=P_{C'}(z_t-\eta_tg_t)$ and records its finite status, final iterate, weighted average, and least-index best observed point ([[alg-projected-subgradient-method]]).

[F8] For a convex objective on a nonempty closed convex Euclidean domain, a finite projected-subgradient run with valid bounded subgradients, an attained minimizer, and an initial-distance bound satisfies the stated best-observed and weighted-average gap estimate ([[thm-projected-subgradient-best-and-average-bound]]).

[F9] The explicit eigenvalue-clipping update is the unique Frobenius projection onto $\mathbb S_+^d$ ([[thm-frobenius-projection-onto-psd-cone-is-spectral-clipping]]).

## Proof

1.1 Put $m=d(d+1)/2$ and $C'=\operatorname{svec}(\mathbb S_+^d)$. The cone contains $0$; [F1] makes it convex, [F2] makes it closed in Frobenius distance, and [F3] transfers both properties to $C'$. By [F4], $\mathbb R^m$ is a real Hilbert space; under [A1], [F5] gives a unique Euclidean projection onto $C'$, which is the projection used in [F7]. The explicit matrix update is that projection because [F9] identifies the unique Frobenius-nearest PSD matrix. [A1, F1, F2, F3, F4, F5, F7, F9, given]

1.2 For every $t<T$, the displayed data formula in [F6] computes $G(M_t)$ and its bound. The coordinate transport [F3] makes $\operatorname{svec}(G(M_t))$ a Euclidean subgradient of $f=F_\mu\circ\operatorname{svec}^{-1}$ with norm $\|\operatorname{svec}(G(M_t))\|_2=\|G(M_t)\|_F\le B_{\rm data}$. Thus all $T$ oracle calls in [F7] are valid. [F3, F6, F7, given]

1.3 The point $M^*$ maps to a global minimizer $z^*=\operatorname{svec}(M^*)$ of $f$ on $C'$, the initial point satisfies $\|z_0-z^*\|_2=R$, and the positive step sizes give $A_T>0$. Apply [F8] to the generic run with $N=T$, subgradient bound $B_{\rm data}$, and distance bound $R$. It yields the asserted upper bound for the least-index best observed objective gap and the weighted-average objective gap in Euclidean coordinates. [F3, F7, F8, given, algebra]

2.1 By linearity of $\operatorname{svec}^{-1}$, the Euclidean weighted average maps to $\overline M_T$ as defined in the Statement. Each iterate lies in $\mathbb S_+^d$, so convexity [F1] puts $\overline M_T$ there; bijectivity also preserves the finite-list minimum, so the Euclidean bound from step 1.3 is exactly the displayed matrix bound. [step 1.3, F1, F3, algebra] ∎
## Remarks

The explicit eigenvalue-clipping implementation and its finite local projection formula are choice-free. The proof above separately records the stronger abstract Hilbert-projection route required by the current interface; that branch uses only $\mathrm{AC}_\omega$, not the full Axiom of Choice. The hypothesis that $M^*$ exists is essential to this stated application and is not derived from convexity alone.
