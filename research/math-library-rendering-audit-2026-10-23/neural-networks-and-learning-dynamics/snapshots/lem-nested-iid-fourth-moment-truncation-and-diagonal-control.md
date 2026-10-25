---
id: lem-nested-iid-fourth-moment-truncation-and-diagonal-control
kind: lemma
title: "Nested iid fourth-moment truncation and uniform diagonal control"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - lem-uniform-row-partial-sums-of-nested-finite-variance-array
  - cor-first-borel-cantelli-lemma-for-events
  - thm-kolmogorov-iid-l1-strong-law
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, second edition, Chapters 3 and 5 (source context for the local reconstruction)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid real array with $E\xi_{11}=0$, $E\xi_{11}^2=1$ and $E|\xi_{11}|^4<\infty$. Consider any deterministic rectangular sequence $R_n\times C_n$ with both $R_n/n$ and $C_n/n$ bounded above and bounded away from zero. Write $X_n=(\xi_{ij})_{i\le R_n,j\le C_n}$ and $N_n=\max(R_n,C_n)$. There is a deterministic sequence $\delta_n\to0$, which may be chosen to decrease more slowly than any specified finite list of rates tending to zero and to satisfy $\delta_n\ge1/\log(n+2)$, such that, almost surely, $X_n$ equals its entrywise truncation at $\delta_n\sqrt{N_n}$ eventually. Set
$$\widehat\xi_{ij}^{(n)}=\xi_{ij}\mathbf1_{\{|\xi_{ij}|\le\delta_n\sqrt{N_n}\}},\quad\mu_n=E\widehat\xi_{11}^{(n)},\quad x_{ij}^{(n)}=\widehat\xi_{ij}^{(n)}-\mu_n.$$
Then $\sqrt{R_nC_n/N_n}|\mu_n|\to0$, $E|x_{11}^{(n)}|^2\le1$ tends to $1$, $|x_{ij}^{(n)}|\le2\delta_n\sqrt{N_n}$ eventually, and $E|x_{11}^{(n)}|^q\le K(2\delta_n\sqrt{N_n})^{q-3}$ for every integer $q\ge3$, with $K$ independent of $n,q$. Almost surely the following controls hold for the original entries and for the centered truncated entries:
$$\max_{i\le R_n}\left|N_n^{-1}\sum_{j\le C_n}|x_{ij}^{(n)}|^2-C_n/N_n\right|\to0,\qquad\max_{j\le C_n}\left|N_n^{-1}\sum_{i\le R_n}|x_{ij}^{(n)}|^2-R_n/N_n\right|\to0,$$
$$\max_{i\le R_n,j\le C_n}|x_{ij}^{(n)}|/\sqrt{N_n}\to0,\qquad N_n^{-2}\sum_{i\le R_n,j\le C_n}|x_{ij}^{(n)}|^4=O(1).$$
For every fixed $q>2$, the rectangular matrix with entry $N_n^{-q/2}|x_{ij}^{(n)}|^q$ has Frobenius norm tending to zero; the assertion also holds with a sign attached to each entry.

## Statement references

Bai and Silverstein, Chapters 3 and 5 ([complete book](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)); the argument below supplies its own counting and probability estimates.

## Facts & Assumptions

[F1] First Borel–Cantelli is [[cor-first-borel-cantelli-lemma-for-events]].

[F2] [[lem-uniform-row-partial-sums-of-nested-finite-variance-array]] applies because $E(\xi_{11}^2-1)^2<\infty$.

[F3] The integrable iid strong law is [[thm-kolmogorov-iid-l1-strong-law]], and dominated convergence is [[thm-dominated-convergence]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix a finite $D$ with $R_n,C_n\le Dn$ and $N_n\ge n/D$ eventually. For every $\varepsilon>0$, the union bound on a square of side $D2^{\ell+1}$ gives a constant times $2^{2\ell}P(|\xi_{11}|>\varepsilon2^{\ell/2})$ as a bound for the probability of any such large entry in that square. Its series over $\ell$ is finite: for every $t\ge0$ the geometric sum $\sum_{\ell:\,\varepsilon2^{\ell/2}<t}2^{2\ell}$ is at most a constant times $\varepsilon^{-4}t^4$, so expectation proves the assertion. F1 on dyadic blocks, followed by intersection over rational $\varepsilon>0$, proves $\max_{i\le R_n,j\le C_n}|\xi_{ij}|/\sqrt{N_n}\to0$ almost surely. [given, F1, algebra]

2.1 The dyadic probability series in step 1.1 converges separately for every threshold $\varepsilon=1/a$. Choose deterministic integers $L_a$ increasing so that its tail from $L_a$ onward is at most $2^{-a}$; impose also $L_a\ge a$, and every prescribed slow-rate constraint by increasing $L_a$ further. On the blocks $L_a\le\ell<L_{a+1}$ choose the truncation threshold as a suitable fixed multiple of $2^{\ell/2}/a$, large enough to cover the comparable dimensions and the adjacent dyadic interval. The sum of the resulting block probabilities is at most $\sum_a2^{-a}$. First Borel–Cantelli proves eventual equality to these truncations. A stepwise deterministic enlargement gives $\delta_n\to0$ as slowly as required, with $\delta_n\ge1/\log(n+2)$; enlarging a threshold preserves eventual equality. One may absorb every fixed dimensional comparison constant into $\delta_n$. Since $\delta_n\sqrt{N_n}\to\infty$, enlarge finitely many initial values further so that $\delta_n\sqrt{N_n}\ge\max(1,E|\xi_{11}|)$ for every $n$; this preserves all asymptotic and eventual-equality conclusions. [F1, step 1.1, choose]

3.1 Since $E\xi=0$, $|\mu_n|\le E[|\xi|\mathbf1_{|\xi|>\delta_n\sqrt{N_n}}]\le E|\xi|^4/(\delta_n^3N_n^{3/2})$. Therefore $\sqrt{R_nC_n/N_n}|\mu_n|\le K\delta_n^{-3}/N_n\to0$, by the selected slow rate. Dominated convergence gives $E|x_{11}^{(n)}|^2=E[\xi^2\mathbf1_{|\xi|\le\delta_n\sqrt{N_n}}]-\mu_n^2\to1$, and this variance is at most $1$. Moreover $|\mu_n|\le E|\xi|\le\delta_n\sqrt{N_n}$ for every $n$, so $|x_{ij}^{(n)}|\le L_n:=2\delta_n\sqrt{N_n}$ for every $n$. The third absolute moments are bounded by $4(E|\xi|^3+|\mu_n|^3)\le4(E|\xi|^3+(E|\xi|)^3)$, uniformly in $n$. Thus for $q\ge3$, $E|x|^q\le L_n^{q-3}E|x|^3\le KL_n^{q-3}$. [F3, step 2.1, algebra]

4.1 Apply F2 to the infinite centered finite-variance array $Z_{ij}=\xi_{ij}^2-1$. Using a fixed enlargement of the row bound and of the maximal partial-sum index covers every $R_n,C_n\le Dn$; division by $N_n\ge n/D$ proves the stated uniform row and column second-moment laws for the original entries. On the probability-one event of eventual truncation equality, $x_{ij}^{(n)}=\xi_{ij}-\mu_n$ throughout the rectangle. The difference of a normalized row squared sum from the original one is bounded by $2|\mu_n|\sqrt{(C_n/N_n)(N_n^{-1}\sum_j\xi_{ij}^2)}+(C_n/N_n)\mu_n^2$, by Cauchy–Schwarz; its maximum tends to zero because the original row laws bound these sums and $\mu_n\to0$. The column calculation is identical. This proves both centered-truncation diagonal laws explicitly. [F2, step 2.1, step 3.1, algebra]

5.1 Enumerate the cells of the infinite quadrant by successive square shells $\max(i,j)=k$, in fixed lexicographic order on each finite shell. The resulting sequence of $|\xi_{ij}|^4$ is iid and integrable; F3 at the square cardinalities $k^2$ gives $k^{-2}\sum_{i,j\le k}|\xi_{ij}|^4\to E|\xi|^4$. Enclosing each rectangle in a square of side $\lceil Dn\rceil$ gives $N_n^{-2}\sum_{i\le R_n,j\le C_n}|\xi_{ij}|^4=O(1)$. The maximum-entry conclusion for the centered entries follows from step 1.1 and $|\mu_n|/\sqrt{N_n}\to0$. Also $|\xi-\mu_n|^4\le8(|\xi|^4+|\mu_n|^4)$, so eventual equality to the truncations and $R_nC_n/N_n^2=O(1)$ give the fourth-power bound for the centered entries. [F3, step 1.1, step 2.1, step 3.1, algebra, step 4.1]

6.1 For every fixed $q>2$, the square of the Frobenius norm of the indicated power matrix is bounded by $(\max|x_{ij}^{(n)}|/\sqrt{N_n})^{2q-4}N_n^{-2}\sum|x_{ij}^{(n)}|^4$, which tends to zero by step 5.1. Multiplying its entries by signs does not change the Frobenius norm. The original-entry assertion follows from the same calculation. All conclusions hold on the intersection of the countably many probability-one events already specified. [step 5.1, algebra] ∎
