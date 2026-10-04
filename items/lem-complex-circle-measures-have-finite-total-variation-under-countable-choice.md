---
id: lem-complex-circle-measures-have-finite-total-variation-under-countable-choice
kind: lemma
title: "Complex circle measures have finite regular total variation under countable choice"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-complex-measure, def-total-variation-of-a-signed-or-complex-measure, lem-finite-choice, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-the-one-dimensional-torus-and-normalized-haar-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Chapter9A, Theorems9.11 and9.17, printedpp261-263; complete proofs read, with the optimizing recursion replaced by independent CC partitions"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Assume countable choice. Every finite-valued countably additive complex Borel measure $\nu$ on $\mathbb T$ has $|\nu|(\mathbb T)<\infty$, and $|\nu|$ is a finite regular positive Borel measure. The zero complex measure is allowed. No Hahn or Jordan decomposition is required.

## Facts & Assumptions

**Given:** Countable choice and a complex Borel measure $\nu:\mathcal B(\mathbb T)\to\mathbb C$.

[F1] A complex measure is finite-valued and countably additive on every given disjoint sequence. Its total variation is the supremum of sums $\sum_j|\nu(E_j)|$ over countable Borel partitions of a set. ([[def-complex-measure]], [[def-total-variation-of-a-signed-or-complex-measure]], [[def-countable-choice]])

[F2] A finite family of nonempty sets has a choice function without a choice axiom. ([[lem-finite-choice]])

[F3] Under CC, Borel measures finite on compact sets on a second-countable LCH space are regular. The circle is compact and metrizable. ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

## Proof

1.1 For every supplied disjoint Borel sequence $(D_j)$, $\sum_j|\nu(D_j)|$ is finite. To see this directly from [F1], split the real parts into their nonnegative and negative index groups. On each group, replace other cells by the empty set; [F1] says the complex series converges to the finite measure of that group's union. Its real part therefore has a finite sum of terms of one sign. Thus $\sum_j|\operatorname{Re}\nu(D_j)|<\infty$. The two imaginary sign groups give $\sum_j|\operatorname{Im}\nu(D_j)|<\infty$ as well. Since $|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$, the asserted absolute sum is finite. Empty groups cause zero sums. [F1, given, construct, algebra]

2.1 Suppose $|\nu|(\mathbb T)=\infty$. For each $n\ge0$ there is a finite ordered Borel partition $\mathcal P_n$ with sum of absolute measures greater than $2^n$: take a finite initial portion of a countable partition whose sum exceeds that threshold, and append its complement. CC supplies the sequence $(\mathcal P_n)$. Let $\mathcal Q_n$ be the finite common refinement of $\mathcal P_0,\ldots,\mathcal P_n$, ordered lexicographically by their cell indices; empty cells may be retained. For Borel E put $$S_n(E)=\sum_{C\in\mathcal Q_n}|\nu(E\cap C)|,\qquad V(E)=\sup_n S_n(E).$$ Refinement and the triangle inequality make $S_n(E)$ nondecreasing, and $V(\mathbb T)=\infty$. For any fixed m, refinement gives $S_n(E)=\sum_{C\in\mathcal Q_m}S_n(E\cap C)$ for $n\ge m$; passing to the limit in this finite sum gives $$V(E)=\sum_{C\in\mathcal Q_m}V(E\cap C).$$ [F1, step 1.1, given, construct, algebra]

3.1 Define a nested sequence deterministically, starting with $E_0=\mathbb T$ and index $m_0=-1$. Given $V(E_k)=\infty$, take the least $n>m_k$ for which $S_n(E_k)>|\nu(E_k)|+2$. Among the finitely many cells of $\mathcal Q_n$ contained in $E_k$, choose the first C with $V(C)=\infty$, possible by the finite-sum identity in step 2.1. Set $E_{k+1}=C$, $m_{k+1}=n$, and retain all other cells of the refinement inside $E_k$ as side cells $D_{k,j}$. Here $E_k$ is a cell of the previous refinement for $k>0$, so the new cells partition it. Write $s_k=\sum_j|\nu(D_{k,j})|$. Finite additivity gives $|\nu(C)|\le|\nu(E_k)|+s_k$, while $S_n(E_k)=|\nu(C)|+s_k$, hence $$s_k\ge\frac{S_n(E_k)-|\nu(E_k)|}{2}>1.$$ Side cells from different stages are disjoint, since later parents lie in the retained nested child. Concatenating the prescribed finite ordered side lists is a disjoint countable Borel sequence with total absolute sum $\sum_k s_k=\infty$, contradicting step 1.1. The recursion uses least natural numbers and first indices in supplied finite lists; it spends no dependent choice. Therefore $|\nu|(\mathbb T)<\infty$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 We also prove that variation is a measure directly. It has value zero on the empty set. Let $E=\bigsqcup_j E_j$ be a supplied disjoint Borel union. Every piece has finite variation by step 3.1, since its partitions extend to partitions of the circle by appending the complement. For fixed N and epsilon, choose partitions of the first $N+1$ pieces within $\varepsilon/(N+1)$ of their variation suprema; [F2] supplies these finitely many choices. Concatenate their cells and append the remainder of E. The resulting partition gives $|\nu|(E)\ge\sum_{j=0}^N|\nu|(E_j)-\varepsilon$. Let epsilon decrease to zero and then N increase to infinity. Conversely, for every partition $(B_l)$ of E, countable additivity gives $|\nu(B_l)|\le\sum_j|\nu(B_l\cap E_j)|$. Summing and interchanging the two nonnegative series yields $\sum_l|\nu(B_l)|\le\sum_j|\nu|(E_j)$. Taking the supremum over partitions proves the reverse bound. Thus $|\nu|$ is a finite positive Borel measure. [F1, F2, step 3.1, construct, algebra]

5.1 Step 4.1 and the finiteness from step 3.1 meet [F3], which gives regularity on the circle. For nu zero all sums are zero. CC was used only for the independent partition sequence in step 2.1 and the regularity theorem; the recursive refinement is deterministic and the measure proof uses only finite choice. [F3, step 3.1, step 4.1, algebra] ∎
