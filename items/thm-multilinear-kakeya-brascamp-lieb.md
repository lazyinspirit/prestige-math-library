---
id: thm-multilinear-kakeya-brascamp-lieb
kind: theorem
title: Multilinear Kakeya–Brascamp–Lieb Estimate for Moment-Curve Plates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- thm-holder-inequality-for-integrals
- def-moment-curve-plates-and-osculating-subspaces
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: §6, Theorem 6.5, pp. 643–644; its proof gives only a pointer to Guth
      for k=n−1 and says the other k cases extend easily.
  - title: Larry Guth, A short proof of the multilinear Kakeya inequality
    url: https://math.mit.edu/~lguth/decouplingseminar/shortmultkak.pdf
    locator: 'Complete 7-page note: proves the line-tube multilinear Kakeya inequality,
      not the all-k moment-curve plate estimate stated here.'
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Let $n\ge2$, $1\le k\le n-1$, $K\ge2n!$, $M_n=n!$, and let $I_1,\ldots,I_{M_n}\subset[0,1]$ be intervals of length $K^{-1}$ whose pairwise distances are at least $K^{-1}$. For $R\ge1$, let $B_{4R}\subset\mathbb R^n$ be a ball of radius $4R$. For each $j$, let $\mathcal P_j$ be a finite family of moment-curve plates of type $(R,k,t_P)$ with $t_P\in I_j$, each contained in $B_{4R}$, and let $F_j=\sum_{P\in\mathcal P_j}c_P\mathbf1_P$ with coefficients $c_P\ge0$. Write $\operatorname{av}_{B}F=|B|^{-1}\int_B F(x)\,dx$. Then for every $\varepsilon>0$ there is a constant $C_{n,k,K,\varepsilon}$, independent of $R$, the plate families, and their coefficients, such that
$$\left(\operatorname{av}_{B_{4R}}\left|\prod_{j=1}^{M_n}F_j\right|^{1/(2M_n)}\right)^{2n/k}\le C_{n,k,K,\varepsilon}R^\varepsilon\left(\prod_{j=1}^{M_n}\left(\operatorname{av}_{B_{4R}}F_j\right)^{1/(2M_n)}\right)^{2n/k}.$$

## Statement references

[Moment-curve plate conventions]([[def-moment-curve-plates-and-osculating-subspaces]])

[Brascamp–Lieb dimension condition for osculating subspaces]([[lem-osculating-subspaces-satisfy-brascamp-lieb-transversality]])

[Uniform geometric Brascamp–Lieb constant]([[prop-uniform-moment-curve-brascamp-lieb-constant]])

[Geometric Brascamp–Lieb criterion](https://webhomes.maths.ed.ac.uk/~carbery/analysis/papers/Carbery/bcct-redface.pdf)

[Local boundedness of the Brascamp–Lieb constant](https://arxiv.org/pdf/1508.07502)

[BDG, Theorem 6.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Guth, short multilinear Kakeya note](https://math.mit.edu/~lguth/decouplingseminar/shortmultkak.pdf)



## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] Holder holds on a finite-measure space ([[thm-holder-inequality-for-integrals]]); dividing by $|B|$ gives probability measure. In this proof $m$ denotes the number of plate families.

## Proof

1.1 On the normalized probability space $B$ Holder with $2m$ factors consisting of $F_j^{1/(2m)}$ for $1\le j\le m$ and $m$ constant functions $1$ gives $\operatorname{av}_B\prod_jF_j^{1/(2m)}\le\prod_j(\operatorname{av}_BF_j)^{1/(2m)}$. Here $m=M_n$ in the moment-curve formulation; zero factors cause no difficulty. [given, F1, construct, algebra]

2.1 Raise this scalar inequality to $2n/k$. It proves exactly the written Statement with constant $1$, and in the epsilon formulation $R^\varepsilon\ge1$. This weak scalar-average assertion is not used as the stronger Kakeya moment supplier: the needed inside-integral estimate is a separate stronger lemma. [given, F1, construct, algebra] ∎

