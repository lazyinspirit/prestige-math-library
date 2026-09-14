---
id: lem-banach-valued-simple-integral-is-well-defined
kind: lemma
title: "The Banach-valued simple integral is well defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-banach-valued-simple-function-and-integral, def-measure, def-integral-of-a-nonnegative-simple-function]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Lemmas 11.28--11.29, printed pp. 332--333"
pipeline_run: phase-2-next-18
---

## Statement

The integral of an integrable Banach-valued simple function is independent of
its disjoint measurable representation. It is linear, is unchanged when the
integrand is changed on a null set, and satisfies

$$\left\|\int_Es\,d\mu\right\|\leq\int_E\|s\|\,d\mu$$

for every measurable $E$.

## Facts & Assumptions

[L1] An integrable $X$-valued simple function and its proposed integral are as
in [[def-banach-valued-simple-function-and-integral]].

[L2] A measure is countably, hence finitely, additive on disjoint measurable
families and assigns measure zero to the empty set ([[def-measure]]).

[L3] The nonnegative simple integral is the coefficient--measure sum, with
$0\cdot\infty=0$ ([[def-integral-of-a-nonnegative-simple-function]]).

## Proof

**Proof technique:** direct.

**Given:** Integrable simple functions on a measure space with values in a
Banach space, as in the Statement.

1.1 Form a finite common refinement. [given, L1] Suppose $s=\sum_{j=1}^mx_j\mathbf1_{A_j} =\sum_{k=1}^ny_k\mathbf1_{B_k}$ are two representations from [L1]. Because every displayed coefficient is nonzero, both unions $\bigcup_jA_j$ and $\bigcup_kB_k$ are the same set $\{\omega:s(\omega)\ne0\}$. Hence the cells $C_{jk}=A_j\cap B_k$ with $1\le j\le m$ and $1\le k\le n$ partition every $A_j$ and every $B_k$. On every nonempty $C_{jk}$, pointwise equality gives $x_j=y_k$. [given, L1, algebra]

2.1 Compare the two integral sums. By finite additivity in [L2], step 1.1 gives [L1, L2, step 1.1]

$$\sum_j\mu(A_j)x_j=\sum_{j,k}\mu(C_{jk})x_j=\sum_{j,k}\mu(C_{jk})y_k=\sum_k\mu(B_k)y_k.$$

Every $C_{jk}$ lies in the finite-measure cells $A_j$ and $B_k$, so every
scalar-vector product in this display is defined. No complement cell and no
$0\cdot\infty$ convention is used. This proves representation independence.

3.1 Prove linearity. [L1, step 2.1] For integrable $s,t$ and scalars $a,b$, refine their finite level partitions. On each refined cell $as+bt$ has coefficient $ax_j+by_k$. Every cell on which this coefficient is nonzero lies in the union of the finite-measure supports of $s$ and $t$, so $as+bt$ is integrable. Applying step 2.1 and distributing the finite vector sum yields $\int_E(as+bt)=a\int_Es+b\int_Et$. [L1, step 2.1, algebra]

4.1 Prove null-insensitivity. [L2, step 3.1] If integrable simple functions $s,t$ agree off a null set $N$, refine their level partitions as above. A refined cell on which their coefficients differ is contained in $N$, hence has measure zero by [L2]. Its contribution to $\int_E(s-t)$ is zero, and linearity from step 3.1 gives $\int_Es=\int_Et$. [L2, step 3.1, algebra]

5.1 Prove the norm inequality and conclude. [L1, L3, step 4.1] Write $s=\sum_jx_j\mathbf1_{A_j}$ in its nonzero disjoint-level form. The triangle inequality in $X$, [L3], and the finite-measure support rule give [L1, L3]

$$\left\|\int_Es\,d\mu\right\|=\left\|\sum_j\mu(E\cap A_j)x_j\right\|\leq\sum_j\mu(E\cap A_j)\|x_j\|=\int_E\|s\|\,d\mu.$$

This also covers the empty representation and $E=\varnothing$: both sides are
zero. ∎
