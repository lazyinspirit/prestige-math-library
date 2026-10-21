---
id: lem-ip-robust-nsp-block-tail-estimate
kind: lemma
title: "A block-tail estimate for the largest coordinates"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
axiom_base: "No additional axiom; finite coordinate ordering and real arithmetic only."
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - def-canonical-natural
  - lem-of-naturals-positive
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-finite-sum-laws
  - lem-of-square-monotone
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3 proof of Theorem 4.25"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
---

## Statement

Let $n,s\in\mathbb N$ with $n\ge1$ and $1\le s\le n$, and let $h\in\mathbb R^n$ use one-based coordinate labels $[n]=\{1,\ldots,n\}$, with label $j$ corresponding to library coordinate $j-1$. In real scalar expressions, a natural number denotes its canonical real image. Order the coordinates by decreasing $|h_j|$, breaking ties by increasing $j$. Let $S$ consist of the first $s$ indices, and partition $S^c$ in this same order into consecutive nonempty blocks $T_1,\ldots,T_q$ of size $s$, with only the last block possibly smaller; if $S^c=\varnothing$, take $q=0$. Then
$$\|h_{S^c}\|_2\le \|h_S\|_2+\frac{\|h_{S^c}\|_1}{\sqrt{s}}.$$

## Statement references

[[def-ip-nullspace-property|One-based finite coordinate restrictions]]

[[def-p-norms-on-rn|Finite-dimensional one- and two-norms]]

[[def-canonical-natural|Canonical real image of the natural scalar $s$]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Triangle inequality for the finite-dimensional two-norm]]

[[lem-of-naturals-positive|Positivity and strict increase of canonical natural scalars]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3, proof of Theorem 4.25, printed pp. 89–90](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1, Theorem 2.2, printed p. 5](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Facts & Assumptions

**Given:** Integers $n\ge1$, $1\le s\le n$, a vector $h\in\mathbb R^n$, the deterministic ordered coordinate list $j_1,\ldots,j_n$, its first-$s$ set $S=\{j_1,\ldots,j_s\}$, and the finite successive tail blocks $T_1,\ldots,T_q$.

[F1] [[def-ip-nullspace-property]]: $h_S$ agrees with $h$ on $S$ and is zero on $S^c$; the coordinate labels are one-based with label $j$ identified with library coordinate $j-1$.

[F2] [[def-p-norms-on-rn]]: $\|v\|_1=\sum_j|v_j|$ and $\|v\|_2=(\sum_j|v_j|^2)^{1/2}$ on finite-dimensional real coordinate spaces.

[F3] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: $\|\cdot\|_2$ is a norm and obeys the triangle inequality.

[F4] [[lem-finite-sum-laws]]: finite sums preserve termwise inequalities and a sum of nonnegative terms is nonnegative.

[F5] [[lem-of-square-monotone]]: for nonnegative $a,b$, $a^2\le b^2$ implies $a\le b$.

[F6] [[def-canonical-natural]]: a natural number used as a real scalar denotes its canonical real image.

[F7] [[lem-of-naturals-positive]]: the canonical real image of $s$ is positive for $s\ge1$; if $k_r\le s$ as natural numbers, then their canonical real images satisfy $k_r\le s$.

## Proof
1.1 If $q=0$, then $S^c=\varnothing$ and the conclusion is $0\le\|h_S\|_2$. If $q\ge1$, write $r=|T_1|\le s$. The order gives $T_1=\{j_{s+1},\ldots,j_{s+r}\}$ and $S=\{j_1,\ldots,j_s\}$, with $|h_{j_{s+k}}|\le|h_{j_k}|$ for every $1\le k\le r$. Termwise squaring and finite-sum monotonicity therefore give $\|h_{T_1}\|_2^2=\sum_{k=1}^r|h_{j_{s+k}}|^2\le\sum_{k=1}^r|h_{j_k}|^2\le\sum_{k=1}^s|h_{j_k}|^2=\|h_S\|_2^2.$ Both norms are nonnegative, so [F5] gives $\|h_{T_1}\|_2\le\|h_S\|_2$. [given, F1, F2, F4, F5, algebra]

2.1 For each $2\le r\le q$, the preceding block $T_{r-1}$ has size $s$. Its last ordered coordinate has magnitude no greater than any earlier entry, hence no greater than the average magnitude on $T_{r-1}$. Every entry of $T_r$ is no greater than that last entry. Put $c=\|h_{T_{r-1}}\|_1/s$. Then each entry of $T_r$ has magnitude at most $c$. If $k_r=|T_r|$, termwise comparison gives $$\|h_{T_r}\|_2^2=\sum_{j\in T_r}|h_j|^2\le k_r c^2\le s c^2=\frac{\|h_{T_{r-1}}\|_1^2}{s},$$ using $k_r\le s$ as natural numbers: padding the sum of $k_r$ copies of the nonnegative number $c^2$ by the remaining nonnegative copies gives the sum of $s$ copies, by [F4]; [F6,F7] interpret these counts as real scalars. Since both sides are nonnegative, [F5] gives $\|h_{T_r}\|_2\le\frac{\|h_{T_{r-1}}\|_1}{\sqrt{s}}.$ The blocks are disjoint and finite. By [F6], [F7], the triangle inequality, step 1.1, and this block bound, $\|h_{S^c}\|_2=\Big\|\sum_{r=1}^q h_{T_r}\Big\|_2\le\sum_{r=1}^q\|h_{T_r}\|_2\le\|h_S\|_2+\frac1{\sqrt{s}}\sum_{r=1}^{q-1}\|h_{T_r}\|_1\le\|h_S\|_2+\frac{\|h_{S^c}\|_1}{\sqrt{s}}.$ This proves the claimed estimate, including a final block smaller than $s$. [given, F2, F3, F4, F5, F6, F7, step 1.1, algebra] ∎

## Remarks

The tie-breaking rule makes the block partition deterministic. The proof uses only finite coordinate comparisons and the Euclidean triangle inequality; no choice axiom is used.
