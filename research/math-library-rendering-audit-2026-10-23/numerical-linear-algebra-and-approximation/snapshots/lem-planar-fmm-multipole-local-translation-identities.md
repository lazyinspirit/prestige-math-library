---
id: lem-planar-fmm-multipole-local-translation-identities
kind: lemma
title: Planar Laplace multipole and local translation identities
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-finite-planar-quadtree-fmm-pair-lists, alg-planar-laplace-fmm-fixed-order]
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
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: "https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Statement

For the P2M, M2M, M2L, L2L and L2P formulas of [[alg-planar-laplace-fmm-fixed-order]], P2M gives the source moments about a leaf center, M2M gives exactly the same moments about a parent center, and the finite M2L coefficients are the degree-$0$ through degree-$p$ Taylor coefficients of the order-$p$ source multipole polynomial about the target center. L2L is exact re-centering of the resulting degree-$p$ polynomial, and L2P evaluates it exactly. For every $n\ge0$ define $M_n(C)=\sum_{j\in I_C}q_j(z_j-c_C)^n$; the algorithm stores only $n\le p$. For a far pair $(C,D)$ and $z$ in the target cell, the fixed-branch source potential also has the absolutely convergent outer expansion $M_0(C)L_{CD}(z-c_C)-\sum_{n=1}^{\infty}M_n(C)/(n(z-c_C)^n)$.

## Facts & Assumptions

**Given:** A far source/target cell pair, its fixed analytic logarithm, finite source moments, and the order-$p$ translation formulas.

[F1] [[def-finite-planar-quadtree-fmm-pair-lists]]: for a far pair with centers $c_C,c_D$, radii $a_C,a_D$, and $R=|c_D-c_C|$, one has $a_C+a_D<R$ and one analytic logarithm is fixed on a disk containing all pair differences.

[F2] [[alg-planar-laplace-fmm-fixed-order]]: P2M stores $M_n=\sum_jq_j(z_j-c_C)^n$; M2M uses the binomial shift over nonempty children (empty children have zero moments); M2L uses the displayed finite local coefficients; L2L uses the binomial re-centering formula over nonempty-cell edges; L2P evaluates the local polynomial and its derivative.

## Proof

1.1 For $|w|<1$, the geometric series $1/(1+t)=\sum_{r=0}^{\infty}(-t)^r$ converges uniformly on each closed disk $|t|\le r_0<1$. Integrating it from $0$ to $w$ gives the analytic branch identity $\log(1+w)=\sum_{m=1}^{\infty}(-1)^{m+1}w^m/m$. [given, F1, algebra]

1.2 For a nonempty child cell $E$ of $C$, write $z_j-c_C=(z_j-c_E)+(c_E-c_C)$ and apply the finite binomial theorem to its $n$th power. Summing over the sources in each nonempty child and then over the nonempty children gives $M_n(C)=\sum_E\sum_{r=0}^n\binom nr(c_E-c_C)^{n-r}M_r(E)$ for every $n\le p$; empty children contribute zero. This is exactly the M2M pass. [F2, algebra]

1.3 If a parent local polynomial is $\sum_{k=0}^pL_k(z-c_D)^k$, put $z-c_D=(z-c_E)+(c_E-c_D)$ and expand each power. The coefficient of $(z-c_E)^j$ is $\sum_{k=j}^p\binom kjL_k(c_E-c_D)^{k-j}$; hence L2L exactly re-centers the polynomial without adding truncation error. [F2, algebra]

2.1 For a far pair $(C,D)$, put $z-c_C=D_0+x$ with $D_0=c_D-c_C$ and $|x|\le a_D$. Then $|D_0+x|\ge R-a_D>a_C$. Substituting $w=-(z_j-c_C)/(z-c_C)$ into the branch-normalized series from step 1.1 and summing the finite source set gives $M_0(C)L_{CD}(z-c_C)-\sum_{n\ge1}M_n(C)/[n(z-c_C)^n]$. The branch is $L_{CD}$ because both $z-c_C$ and $z-z_j$ lie in its disk and the difference of their logarithms is the series that vanishes at $z_j=c_C$. The convergence is absolute because $|z_j-c_C|/|z-c_C|<1$. [F1, step 1.1, algebra]

2.2 For a far pair put $D=c_D-c_C$, $x=z-c_D$ and $y=z_j-c_C$. By [F1], $|x-y|\le|x|+|y|<R=|D|$. The branch-normalized logarithm therefore has expansion $L_{CD}(D+x-y)=L_{CD}(D)+\sum_{m\ge1}(-1)^{m+1}(x-y)^m/(mD^m)$. [F1, step 1.1, algebra]

3.1 Expand $(x-y)^m$ by the binomial theorem and set $m=n+k$. For $n\ge1,k\ge0$, the coefficient of $x^ky^n$ is $(-1)^{k+1}\binom{n+k-1}{k}/(nD^{n+k})$, since $\binom{n+k}{k}/(n+k)=\binom{n+k-1}{k}/n$. The terms with $n=0$ are $M_0L_{CD}(D)$ for $k=0$ and $(-1)^{k+1}M_0/(kD^k)$ for $k\ge1$; the terms with $k=0,n\ge1$ are $-M_n/(nD^n)$. Summing $y^n$ over sources replaces it by $M_n$, and retaining $0\le n,k\le p$ yields precisely the M2L formulas in [F2]. [F2, step 2.2, algebra]

4.1 Substitution of a target point into the re-centered degree-$p$ polynomial is exactly L2P, and termwise differentiation gives its derivative formula. These are finite polynomial identities and require no additional convergence assumption. [F2, step 1.3, algebra] ∎
