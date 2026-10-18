---
id: thm-planar-fmm-global-potential-force-error
kind: theorem
title: Global planar FMM potential and derivative error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-finite-planar-quadtree-fmm-pair-lists, alg-planar-laplace-fmm-fixed-order, lem-planar-fmm-pair-lists-partition-off-diagonal-pairs, lem-planar-fmm-multipole-local-translation-identities]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leslie Greengard and Vladimir Rokhlin, A Fast Algorithm for Particle Simulations, Journal of Computational Physics 73 (1987), 325–348"
      url: "https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Statement

Assume the collision-free exact-arithmetic branch of [[alg-planar-laplace-fmm-fixed-order]] with order $p\ge1$. For each target $i$ in leaf $D_i$, let $\mathcal F_i=\{(C,D)\in\mathcal F:i\in I_D\}$ be its far cell interactions. For $(C,D)\in\mathcal F_i$ put $R_{CD}=|c_D-c_C|$, $\rho_{CD}=(a_C+a_D)/R_{CD}<1$, and $Q_C=\sum_{j\in I_C}|q_j|$. If $u_i$ is the exact fixed-branch logarithmic potential and $\widetilde u_i$ the algorithm output, then
$$|u_i-\widetilde u_i|\le\sum_{(C,D)\in\mathcal F_i}\frac{Q_C\rho_{CD}^{p+1}}{(p+1)(1-\rho_{CD})}.$$
If $g_i=\sum_{j\ne i}q_j/(z_i-z_j)$ and $\widetilde g_i$ is the algorithm's complex derivative output, then
$$|g_i-\widetilde g_i|\le\sum_{(C,D)\in\mathcal F_i}\frac{Q_C}{R_{CD}}\frac{\rho_{CD}^{p}}{1-\rho_{CD}}.$$
Near interactions are exact. The second estimate is branch-independent; no floating-point rounding error is included.

## Facts & Assumptions

**Given:** Collision-free finite sources, a finite quadtree, order $p\ge1$, and the exact-arithmetic local expansions in [[alg-planar-laplace-fmm-fixed-order]].

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: each far pair has $R_{CD}>a_C+a_D$ and one analytic logarithm on a disk containing every source-target difference in that pair.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: P2M/M2M moments are computed through order $p$, M2L retains source moment indices $n\le p$ and local degrees $k\le p$, L2L re-centers finite polynomials exactly, and direct near pairs are evaluated exactly.

[F3] [[lem-planar-fmm-multipole-local-translation-identities]]: these finite formulas are the corresponding source and target truncations of the absolutely convergent logarithmic series.

[F4] [[lem-planar-fmm-pair-lists-partition-off-diagonal-pairs]]: the far cell products and exact near pairs partition all ordered off-diagonal source-target pairs.

## Proof

1.1 Fix a far interaction $(C,D)$ contributing to target $i$, and write $D_0=c_D-c_C$, $x=z_i-c_D$, $y_j=z_j-c_C$, and $R=|D_0|$. Then $|x|\le a_D$, $|y_j|\le a_C$, and $\rho=(a_C+a_D)/R<1$ by [F1]. The series in [F3] for each source is the double binomial expansion of $L_{CD}(D_0+x-y_j)$. The algorithm retains all terms with source index $n\le p$ and target degree $k\le p$; every omitted term has total degree $m=n+k\ge p+1$. [given, F1, F2, F3, algebra]

2.1 For total degree $m$, the sum of absolute values of the potential terms for one source is at most $|q_j|\sum_{k=0}^m\binom mk |x|^k|y_j|^{m-k}/(mR^m)=|q_j|(|x|+|y_j|)^m/(mR^m)\le |q_j|\rho^m/m$. Summing sources and omitted degrees gives an interaction error at most $Q_C\sum_{m=p+1}^{\infty}\rho^m/m\le Q_C\rho^{p+1}/((p+1)(1-\rho))$, since $1/m\le1/(p+1)$ for $m\ge p+1$. [given, step 1.1, algebra]

2.2 For each total degree $m\ge1$, the sum of absolute differentiated monomials for one source, before multiplying by $q_j$, is $$\sum_{k=1}^m\frac{k}{m}\binom mk\frac{|x|^{k-1}|y_j|^{m-k}}{R^m}=\frac{(|x|+|y_j|)^{m-1}}{R^m}\le\frac{\rho^{m-1}}R.$$ Here a zeroth power is $1$, including at zero. Every subset of these monomials, in particular the omitted subset from the rectangular truncation $n,k\le p$, has absolute sum bounded by the same nonnegative full sum. The series and its differentiated monomials converge absolutely and uniformly on $|x|\le a_D$ because $\rho<1$, so termwise differentiation is valid. By step 1.1, omitted terms have $m\ge p+1$; multiplying by $|q_j|$ and summing sources and degrees bounds the interaction derivative error by $Q_C R^{-1}\sum_{m=p+1}^{\infty}\rho^{m-1}=Q_C R^{-1}\rho^p/(1-\rho)$. The derivative of any additive branch constant is zero. [given, F1, step 1.1, algebra]

3.1 By [F4], each off-diagonal particle pair is either one exact direct near interaction or belongs to exactly one far cell product. M2M and L2L introduce no additional truncation error by [F2]–[F3], and L2P evaluates the stored polynomial exactly. Therefore the total potential and derivative errors for target $i$ are bounded by the sums of the finite per-interaction bounds from steps 2.1 and 2.2; all near terms contribute zero error. [given, F2, F3, F4, step 2.1, step 2.2, algebra] ∎
