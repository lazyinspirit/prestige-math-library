---
id: lem-young-partition-sum-estimate-rational
kind: lemma
title: "Young's partition estimate for rational Hölder exponents"
status: draft
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
sources:
  scraped: []
  references:
    - title: "L. C. Young, An inequality of the Hölder type, connected with Stieltjes integration"
      url: "https://alea.math.cnrs.fr/articles/v16/16-23.pdf"
pipeline_run: null
---

## Statement

Let $p,q\in\mathbb Q\cap(0,1]$ satisfy $p+q>1$. Suppose
$|f(y)-f(x)|\le K_f|y-x|^p$ and
$|g(y)-g(x)|\le K_g|y-x|^q$ on $[a,b]$. If $D_m$ is the partition into $2^m$ equal intervals and $L_m$ is its left-endpoint Stieltjes sum, then

$$|L_{m+1}-L_m|\le K_fK_g(b-a)^{p+q}2^{-m(p+q-1)}.$$

Moreover, inserting or deleting finitely many partition points whose surrounding intervals have length at most $h$ changes the associated left-endpoint sum by at most $K_fK_g(b-a)h^{p+q-1}$, up to the harmless factor $2^{p+q}$ when both adjacent intervals are charged together.

## Facts & Assumptions

**Given:** Rational Hölder exponents $p,q$ with $p+q>1$, Hölder constants $K_f,K_g$, and the stated partitions.

[L1] Rational powers are monotone and satisfy the exponent laws ([[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L2] A geometric series with ratio in $(0,1)$ converges and its tails tend to zero ([[thm-geometric-series]]).

[L3] Finite sums obey the triangle inequality and may be regrouped ([[lem-finite-sum-laws]], [[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Insert a point $v$ between adjacent points $u<w$. The change from the old left-endpoint term to the two new terms is
$(f(v)-f(u))(g(w)-g(v))$ up to sign. Its absolute value is at most $K_fK_g(v-u)^p(w-v)^q$, hence at most $K_fK_g(w-u)^{p+q}$ by [L1].

1.2 Passing from $D_m$ to $D_{m+1}$ inserts one midpoint in each of $2^m$ intervals of length $(b-a)2^{-m}$. Summing the estimate of step 1.1 gives the first displayed bound. Since $2^{-(p+q-1)}\in(0,1)$, [L2] makes the successive-refinement errors summable. [step 1.1, L1, L2, L3]

2.1 For a general insertion or deletion, charge its error to the union of its two adjacent intervals. Grouping disjoint charges in alternating classes prevents double counting; [L1] gives $\ell^{p+q}\le h^{p+q-1}\ell$, and the charged lengths sum to at most a fixed factor times $b-a$. This proves the second estimate. If $K_fK_g=0$ or $a=b$, all errors vanish. [step 1.1, L1, L3] ∎
