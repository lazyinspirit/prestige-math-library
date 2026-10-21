---
id: thm-cauchy-matvec-at-roots-of-unity-exact-cost
kind: theorem
title: Exact roots-of-unity Cauchy matvec has quasi-linear arithmetic cost
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [alg-cauchy-matvec-at-roots-of-unity, lem-roots-of-unity-fft-complexity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §3.3"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Statement

Let $n\ge1$, $M=2^q\ge1$, $\omega$ be a primitive $M$th root of unity, and let $\mu_1,\ldots,\mu_n\in\mathbb C$ and $a_1,\ldots,a_n\in\mathbb C$ satisfy $\mu_j\ne\omega^k$ for every $j$ and $0\le k<M$. Then the Cauchy matrix-vector product $y_k=\sum_{j=1}^{n}a_j/(\omega^k-\mu_j)$, $0\le k<M$, is computed exactly by the balanced product-tree procedure using $O((n+M)\log^2(2+n+M))$ complex arithmetic operations and $O(n+M)$ space. Repeated poles are allowed.

## Statement references

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §3.3](https://arxiv.org/pdf/1506.02285)

[[alg-cauchy-matvec-at-roots-of-unity]]

[[lem-roots-of-unity-fft-complexity]]

## Facts & Assumptions

**Given:** The finite data and noncollision hypothesis in the Statement.

[A1] For every $1\le j\le n$ and $0\le k<M$, $\omega^k-\mu_j\ne0$, so the target sums and all root-grid denominator evaluations are defined.

[F1] [[alg-cauchy-matvec-at-roots-of-unity]]: the product-tree leaves are $D_j(z)=z-\mu_j$, $P_j(z)=a_j$; internal nodes use $D_I=D_{I_1}D_{I_2}$ and $P_I=P_{I_1}D_{I_2}+D_{I_1}P_{I_2}$, then fold coefficients modulo $z^M-1$, evaluate on the standard radix-two root grid, reindex to the supplied primitive root, and divide the evaluated numerator by denominator.

[F2] [[lem-roots-of-unity-fft-complexity]]: polynomials of degree less than $s$ multiply exactly in $O(s\log(2+s))$ complex arithmetic operations and $O(s)$ space, and an $M$-point radix-two DFT costs $O(M\log(2+M))$ operations and $O(M)$ space.

## Proof

1.1 For a leaf containing index $j$, $P_j(z)/D_j(z)=a_j/(z-\mu_j)$ whenever $z\ne\mu_j$. If the identity $P_I/D_I=\sum_{j\in I}a_j/(z-\mu_j)$ holds for the two child sets, then the internal-node formulas in [F1] give $P_I/D_I=P_{I_1}/D_{I_1}+P_{I_2}/D_{I_2}$. Induction up the finite tree therefore gives $P_I(z)/D_I(z)=\sum_{j=1}^{n}a_j/(z-\mu_j)$ at the root wherever its denominator is nonzero. [A1, F1, construct, algebra]

2.1 The balanced tree has height at most $\lceil\log_2 n\rceil$. At a node whose index set has size $s$, its three polynomial products have operand degrees at most $s$; by [F2] they cost $O(s\log(2+s))$ operations. At a fixed height, the node index sets are disjoint and their sizes sum to at most $n$, so that height costs at most $O(n\log(2+n))$. Summing over the height gives $O(n\log^2(2+n))$ operations, including the coefficient additions. A depth-first evaluation stores at most one completed sibling subtree per level; their coefficient-array sizes form a geometric sum bounded by $O(n)$, so the product-tree workspace is $O(n)$. [F1, F2, step 1.1, algebra]

2.2 Write the root coefficients as $P_I(z)=\sum_j p_jz^j$ and $D_I(z)=\sum_j d_jz^j$. For each $0\le r<M$, fold them to $p'_r=\sum_{j\equiv r\pmod M}p_j$ and $d'_r=\sum_{j\equiv r\pmod M}d_j$. Since $\omega^{kM}=1$, evaluating the folded polynomials at $\omega^k$ gives exactly $P_I(\omega^k)$ and $D_I(\omega^k)$. The algorithm evaluates both folded arrays with two radix-two DFTs on the standard grid $\omega_0^j=e^{-2\pi i j/M}$; if $M>1$, the supplied primitive root is $\omega=\omega_0^s$ for a unique odd $s$, so reindexing the standard outputs at $sk\bmod M$ gives their values at $\omega^k$. For $M=1$ the grids coincide. By [F2] the two transforms cost $O(M\log(2+M))$ operations and $O(M)$ additional space; finding $s$ and reindexing cost $O(M)$ operations and space, within the same bounds. Folding costs $O(n)$ operations and $O(n+M)$ space. [A1, F1, F2, step 1.1, algebra]

3.1 The noncollision hypothesis makes $D_I(\omega^k)=\prod_j(\omega^k-\mu_j)\ne0$ for every $k$. Thus the divisions in [F1] are defined, and step 1.1 identifies each quotient with the required Cauchy sum. Adding the product-tree, folding, transform, and division costs gives $O((n+M)\log^2(2+n+M))$ operations and $O(n+M)$ space. [A1, F1, step 1.1, step 2.2, algebra] ∎
