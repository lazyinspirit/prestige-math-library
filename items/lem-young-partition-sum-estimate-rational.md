---
id: lem-young-partition-sum-estimate-rational
kind: lemma
title: "Young's partition estimate for rational Hölder exponents"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lipschitz-holder-contraction, def-rational-power,
       lem-rational-power-laws, lem-rational-power-monotone,
       thm-geometric-series, def-partition-and-refinement,
       def-finite-sum, lem-finite-sum-laws, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Nourdin, Nualart, and Peccati, The Breuer–Major theorem in total variation: improved rates under minimal regularity, Section 2.2"
      url: "https://alea.math.cnrs.fr/articles/v16/16-23.pdf"
pipeline_run: null
---

## Statement

Let $p,q\in\mathbb Q\cap(0,1]$ satisfy $p+q>1$. Suppose
$|f(y)-f(x)|\le K_f|y-x|^p$ and
$|g(y)-g(x)|\le K_g|y-x|^q$ on $[a,b]$. If $D_m$ is the partition into $2^m$ equal intervals and $L_m$ is its left-endpoint Stieltjes sum, then

$$|L_{m+1}-L_m|\le K_fK_g(b-a)^{p+q}2^{-m(p+q-1)}.$$

Put $r=p+q$ and
$$C_r:=\frac{2^r}{1-2^{1-r}}.$$
If $R$ refines an arbitrary partition $P$, then their left-endpoint sums satisfy
$$|L(R)-L(P)|\le C_rK_fK_g(b-a)\lVert P\rVert^{r-1}.$$

## Facts & Assumptions

**Given:** Rational Hölder exponents $p,q$ with $p+q>1$, Hölder constants $K_f,K_g$, and the stated partitions.

[L1] Rational powers are monotone and satisfy the exponent laws ([[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L2] A geometric series with ratio in $(0,1)$ converges and its tails tend to zero ([[thm-geometric-series]]).

[L3] Finite sums obey the triangle inequality and may be regrouped ([[lem-finite-sum-laws]], [[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Insert a point $v$ between adjacent points $u<w$. The change from the old left-endpoint term to the two new terms is [given]
$(f(v)-f(u))(g(w)-g(v))$ up to sign. Its absolute value is at most $K_fK_g(v-u)^p(w-v)^q$, hence at most $K_fK_g(w-u)^{p+q}$ by [L1].

2.1 Passing from $D_m$ to $D_{m+1}$ inserts one midpoint in each of $2^m$ intervals of length $(b-a)2^{-m}$. Summing step 1.1 gives the first displayed bound. More generally, if a partition of an interval $I$ has $k\ge2$ subintervals, some interior point has two adjacent lengths whose sum is at most $2|I|/(k-1)$: the sum of all such two-interval lengths is at most $2|I|$. Removing that point therefore changes the left sum by at most $K_fK_g(2|I|/(k-1))^r$. [step 1.1, L1, L3]

3.1 Remove the extra points of $R$ inside a fixed interval $I$ of $P$, one at a time, always using step 2.1. The total error is at most $2^rK_fK_g|I|^r\sum_{j\ge1}j^{-r}$. Grouping the positive integers into $[2^m,2^{m+1})$ bounds this series by $\sum_{m\ge0}2^{-m(r-1)}=(1-2^{1-r})^{-1}$ via [L2]. Thus the error on $I$ is at most $C_rK_fK_g|I|^r$. Summing over $I\in P$ and using $|I|^r\le\lVert P\rVert^{r-1}|I|$ proves the refinement estimate. If $K_fK_g=0$ or $a=b$, every error is zero. [step 2.1, L1, L2, L3] ∎
