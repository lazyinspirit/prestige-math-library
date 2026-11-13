---
title: A nonbacktracking tail smaller than the required polynomial
status: published
research_item: lem-author-6ad39f024b17-nonbacktracking-tail-application
dependency_level: 4
sources:
  references:
    - title: Benaych-Georges, Bordenave and Knowles, Spectral radii of sparse random
        matrices (19 September 2019)
      url: https://www.unige.ch/~knowles/SP.pdf
      locator: PDF p. 3, Definition 2.1; p. 4, Assumption 2.4 and Theorem 2.5
      statement: Under independent mean-zero Hermitian upper entries with row variance
        sum at most 1, entry variance at most $\kappa/n$, and entry bound $1/q$,
        Theorem 2.5 gives universal $C,c>0$ with $\mathbb P(\rho(B)\ge1+t)\le
        Cn^{3-cq\log(1+t)}$ for $1\vee q\le n^{1/10}\kappa^{-1/9}$ and $t\ge0$.
      hypotheses: Hermitian H with independent mean-zero upper entries; q>0, kappa>=1
        and all three bounds in Assumption 2.4; 1 vee q<=n^(1/10) kappa^(-1/9).
      reading_limits: Checked the extracted PDF text on pp. 3–4, including Definition
        2.1, Theorem 2.2, Assumption 2.4 and Theorem 2.5. The theorem is
        imported, not locally reconstructed; its proof and the remaining paper
        were not reviewed for this application.
---

## Prerequisites

- [lem-author-6ad39f024b17-centered-normalization](item-lem-author-6ad39f024b17-centered-normalization)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [` Benaych-Georges, Bordenave and Knowles, Spectral radii of sparse random matrices (19 September 2019) · PDF p. 3, Definition 2.1; p. 4, Assumption 2.4 and Theorem 2.5 `](https://www.unige.ch/~knowles/SP.pdf)


## Statement

Fix $\gamma>1$. With $H$ and $B$ as in the normalization and ordered-pair definitions, for every sufficiently large $n$,
$$\mathbb P(\rho(B)\ge2)\le n^{-\gamma}.$$
The size cutoff may depend on $\gamma$ and on the universal constants in the external theorem.

## Facts & Assumptions

[F1] The normalized matrix $H$ is real symmetric, hence Hermitian, with independent mean-zero upper-triangular entries. It has row variance at most 1, entry variance at most $1/n$, entry bound $1/q$, and eventually $1\le q=\sqrt{\gamma\log n}\le n^{1/10}$ ([lem-author-6ad39f024b17-centered-normalization](item-lem-author-6ad39f024b17-centered-normalization)).

[F2] Under independent mean-zero Hermitian upper entries with row variance sum at most 1, entry variance at most $\kappa/n$, and entry bound $1/q$, Theorem 2.5 gives universal $C,c>0$ with $\mathbb P(\rho(B)\ge1+t)\le Cn^{3-cq\log(1+t)}$ for $1\vee q\le n^{1/10}\kappa^{-1/9}$ and $t\ge0$..

[F3] The natural logarithm is strictly increasing on $(0,\infty)$, is onto $\mathbb R$, and satisfies $\log1=0$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F4] The logarithm is inverse to the exponential ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)).

## External input

For a matrix $H$, its nonbacktracking matrix $B$ is indexed by ordered vertex pairs and has $B_{(i,j),(k,l)}=H_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}$. Write $\rho(B)=\max\{|z|:z\text{ is an eigenvalue of }B\}$. Under independent mean-zero Hermitian upper entries with row variance sum at most 1, entry variance at most $\kappa/n$, and entry bound $1/q$, Theorem 2.5 gives universal $C,c>0$ with $\mathbb P(\rho(B)\ge1+t)\le Cn^{3-cq\log(1+t)}$ for $1\vee q\le n^{1/10}\kappa^{-1/9}$ and $t\ge0$.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Apply [F2] to [F1] with $\kappa=1$ and $t=1$. This gives $\mathbb P(\rho(B)\ge2)\le Cn^{3-c\sqrt{\gamma\log n}\log2}$. All normalization and independence hypotheses are precisely those in [F1]. [F1, F2, given]

2.1 By [F3], $\log2>\log1=0$. For each real $M$, surjectivity gives $x>0$ with $\log x>M$, and monotonicity gives $\log n\ge\log x>M$ for every integer $n\ge x$. Hence $\log n\to\infty$. Since $c>0$ and $\gamma>1$ are fixed, eventually $c\sqrt{\gamma\log n}\log2\ge\gamma+4$ and $n\ge\max\{2,C\}$. Then the right side in step 1.1 is at most $Cn^{-\gamma-1}\le n^{-\gamma}$. [F3, step 1.1, algebra] ∎
