---
title: A parameter-uniform nonbacktracking spectral tail
status: published
research_item: lem-author-cc4f5d837ae1-uniform-nonbacktracking-tail
dependency_level: 4
sources:
  references:
    - title: Florent Benaych-Georges, Charles Bordenave and Antti Knowles, Spectral
        radii of sparse random matrices (19 September 2019)
      url: https://www.unige.ch/~knowles/SP.pdf
      reading_limits: Read the extracted PDF statement of Definition 2.1 on p. 3 and
        Assumption 2.4, Theorem 2.5 and Remark 2.6 on p. 4. The probability
        estimate is imported as stated; its proof is not reconstructed or
        independently audited. The normalization and uniform-limit application
        are local. No reading of the remaining paper is claimed.
      locator: Section 2, PDF p. 3 Definition 2.1; PDF p. 4 Assumption 2.4, Theorem
        2.5 and Remark 2.6
      statement: For an n by n Hermitian H with independent centered upper entries,
        row variance sum at most 1, entry variance at most kappa/n and entries
        bounded by 1/q, there are universal C,c>0 such that P(rho(B)>=1+t)<=C
        n^(3-c q log(1+t)) whenever 1 vee q<=n^(1/10) kappa^(-1/9), kappa>=1 and
        t>=0. Here B_(i,j),(k,l)=H_kl 1_(j=k) 1_(i!=l). Remark 2.6 explicitly
        permits replacing q by any smaller positive value.
      hypotheses: All Assumption 2.4 hypotheses just listed; finite n, q>0, kappa>=1;
        full upper triangular independence includes deterministic zero diagonal.
        No fixed entry distribution as n varies is imposed.
---

## Prerequisites

- [lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization)
- [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)
- [math:thm-integral-logarithm-derivative-and-normalisation](https://alphabetamath.cc/item/thm-integral-logarithm-derivative-and-normalisation)
- [math:lem-cauchy-reals-archimedean](https://alphabetamath.cc/item/lem-cauchy-reals-archimedean)
- [` Florent Benaych-Georges, Charles Bordenave and Antti Knowles, Spectral radii of sparse random matrices (19 September 2019) · Section 2, PDF p. 3 Definition 2.1; PDF p. 4 Assumption 2.4, Theorem 2.5 and Remark 2.6 `](https://www.unige.ch/~knowles/SP.pdf)


## Statement

For fixed $g>0$ and $t>0$, the normalized matrices and ordered-pair $B$ of [lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization) satisfy, for all sufficiently large $n$ and every $p$ with $g\log n\le np\le n$,
$$\mathbb P(\rho(B)\ge1+t)\le Cn^{3-c\sqrt{g\log n}\log(1+t)}.$$
Here $C,c>0$ are universal constants; the displayed deterministic bound tends to zero. This is uniform over the probability parameter, not a simultaneous coupling assertion for all graphs.

## Facts & Assumptions

[F1] The independent centered entries satisfy all three variance/entry bounds with $\kappa=1$ and $q=\min\{\sqrt{np},n^{1/10}\}\ge\sqrt{g\log n}$ eventually ([lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization)).

[F2] For every $x>0$, the integral logarithm satisfies $L(x)=\log x$, where $\log$ is the natural logarithm used in [F1] and the imported estimate ([math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)). Hence this same logarithm is unbounded above ([math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)), strictly increasing on $(0,\infty)$ ([math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)), and satisfies $\log 1=0$ ([math:thm-integral-logarithm-derivative-and-normalisation](https://alphabetamath.cc/item/thm-integral-logarithm-derivative-and-normalisation)).

[F3] The natural numbers are cofinal in the reals ([math:lem-cauchy-reals-archimedean](https://alphabetamath.cc/item/lem-cauchy-reals-archimedean)).

## External input

BBK Theorem 2.5 under Assumption 2.4 supplies universal $C,c>0$ and the finite-$n$ inequality $\mathbb P(\rho(B)\ge1+t)\le Cn^{3-cq\log(1+t)}$ for $t\ge0$, $\kappa\ge1$, $q>0$ and $1\vee q\le n^{1/10}\kappa^{-1/9}$. The assumptions are independent centered Hermitian upper entries, row variance at most $1$, entry variance at most $\kappa/n$, and entries bounded by $1/q$. Definition 2.1 is exactly the ordered-pair formula in [lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization). The logarithm in this estimate is the natural logarithm identified with $L$ in [F2]. Remark 2.6 permits decreasing $q$. This is the only imported probability estimate here.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 By the identification and properties in [F2], the natural logarithm in [F1] and the imported estimate satisfies $\log(1+t)=L(1+t)>L(1)=\log 1=0$. Apply the imported BBK Theorem 2.5 to [F1]. Its cutoff $1\vee q\le n^{1/10}\kappa^{-1/9}$ holds with $\kappa=1$. Remark 2.6 expressly permits the smaller capped $q$, even if $np$ is of order $n$. Thus the theorem bounds the tail by $Cn^{3-cq\log(1+t)}$, at most the bound stated above. Every parameter in the source inequality is finite-$n$ and its constants are universal. [F1, F2, given, algebra]

2.1 Set $M=25/(c^2g(\log(1+t))^2)>0$. Unboundedness in [F2] provides $b>0$ with $\log b>M$. By [F3] choose an integer $N>\max\{b,1\}$. For every integer $n\ge N$, monotonicity in [F2] gives $\log n>\log b>M$, so $c\sqrt{g\log n}\log(1+t)>5$. Thus the bound in step 1.1 is at most $Cn^{-2}$. For any $\varepsilon>0$, [F3] also gives an integer $N_\varepsilon>\sqrt{C/\varepsilon}$; then $Cn^{-2}<\varepsilon$ for $n\ge N_\varepsilon$. Combining these cutoffs with the one in [F1] proves convergence with cutoffs depending only on $g,t,C,c,\varepsilon$, uniformly in $p$, including the deterministic centered matrix at $p=1$. [F1, F2, F3, step 1.1, algebra, choose] ∎
