---
id: thm-local-boundedness-of-brascamp-lieb-constant
kind: theorem
title: Local Boundedness of the Brascamp–Lieb Constant
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- lem-uniform-brascamp-lieb-flag-minors
- thm-brascamp-lieb-gaussian-exhaustion-and-finiteness
- def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jonathan Bennett, Neal Bez, Taryn C. Flock, and Sanghyuk Lee, Stability
      of the Brascamp–Lieb constant and applications
    url: https://arxiv.org/pdf/1508.07502
    locator: The local boundedness theorem for the general Brascamp–Lieb constant;
      cited in BDG §6, proof of Proposition 6.4.
proof_strategy: direct
axiom_use: Countable Choice is inherited from the Euclidean Lebesgue/Fourier and approximation
  suppliers; no full Axiom of Choice is used.
---

## Statement

Assume Countable Choice. Fix dimensions $n,m,d_1,\ldots,d_m$ and exponents $0<p_j\le1$. For a tuple $\mathbf B=(B_1,\ldots,B_m)$ of surjective linear maps $B_j:\mathbb R^n\to\mathbb R^{d_j}$, let $\mathrm{BL}(\mathbf B,\mathbf p)$ be the least $C\in[0,\infty]$ for which
$$\int_{\mathbb R^n}\prod_{j=1}^m f_j(B_jx)^{p_j}\,dx\le C\prod_{j=1}^m\left(\int_{\mathbb R^{d_j}}f_j(y)\,dy\right)^{p_j}$$
holds for all nonnegative integrable functions $f_j$. If $\mathrm{BL}(\mathbf B_0,\mathbf p)<\infty$, then there are a neighborhood $U$ of $\mathbf B_0$ in the space of tuples of linear maps and a constant $C_U<\infty$ such that $\mathrm{BL}(\mathbf B,\mathbf p)\le C_U$ for every $\mathbf B\in U$ consisting of surjective maps.

## Statement references

[Bennett–Bez–Flock–Lee, local boundedness theorem](https://arxiv.org/pdf/1508.07502)

[BDG, Proposition 6.4](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)




## Facts & Assumptions

**Given:** All hypotheses of the Statement.

[F1] The uniform flag-minor lemma and the general Gaussian exhaustion/finiteness theorem are [[lem-uniform-brascamp-lieb-flag-minors]] and [[thm-brascamp-lieb-gaussian-exhaustion-and-finiteness]].

## Proof

1.1 Finiteness at $B^0$ gives scaling $\sum p_jd_j=n$ and all dimension inequalities by the general theorem. Subtracting dimensions makes these equivalent to the codimension inequalities of the flag-minor lemma. That lemma provides a neighborhood and fixed $c>0$ for every ordered source orthonormal basis. [given, F1, construct, algebra]

2.1 For any nearby $B$ and any $W$ of dimension $n-l$, choose a basis whose last $n-l$ vectors span $W$. The selected columns with indices greater than $l$ are independent images in $B_jW$. Hence $\sum_jp_j\dim B_jW\ge\sum_jp_j|I_j\cap\{l+1,\ldots,n\}|\ge n-l$. Thus dimension feasibility persists; it is not assumed from continuity of ranks for a fixed subspace. [given, F1, construct, algebra]

3.1 For positive matrices $A_j$ diagonalize $M=\sum p_jB_j^*A_jB_j$ with eigenvalues $\mu_1\ge\cdots\ge\mu_n>0$. The selected minors and Hadamard give $\det A_j\,c^2\le p_j^{-d_j}\prod_{i\in I_j}\mu_i$. With $b_l=l-\sum_jp_j|I_j\cap\{1,\ldots,l\}|\ge0$, multiplication and scaling yield
$$ \frac{\prod_j(\det A_j)^{p_j}}{\det M}\le c^{-2\sum p_j}\prod_jp_j^{-p_jd_j}\prod_{l<n}(\mu_{l+1}/\mu_l)^{b_l}\le c^{-2\sum p_j}\prod_jp_j^{-p_jd_j}. $$
The positive matrix $M$ exists because the preceding dimension inequalities exclude a common kernel. Gaussian exhaustion, now applicable to every nearby surjective datum, identifies its BL constant with the supremum of the square root of this quotient. The displayed bound is uniform, proving the exact general local-boundedness assertion even at critical data. [given, F1, construct, algebra] ∎

