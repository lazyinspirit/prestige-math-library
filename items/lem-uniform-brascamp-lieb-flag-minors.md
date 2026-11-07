---
dependency_level: 0
id: lem-uniform-brascamp-lieb-flag-minors
kind: lemma
title: Uniform flag minors for Brascamp–Lieb data
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-heine-borel-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bennett–Carbery–Christ–Tao, Brascamp–Lieb inequalities: finiteness, structure
      and extremals'
    url: https://arxiv.org/pdf/math/0505065
  - title: Bennett–Bez–Flock–Lee, Stability of the Brascamp–Lieb constant, Lemma2.2
    url: https://arxiv.org/pdf/1508.07502
---

## Statement

Let $B_j^0:\mathbb R^n\to\mathbb R^{d_j}$ be surjective, $p_j>0$, and suppose $\sum_jp_j\operatorname{codim}(B_j^0W)\le\operatorname{codim}W$ for every subspace $W$. There exist $c,\tau>0$ such that for every ordered orthonormal basis $e_1,\ldots,e_n$ and every tuple $\|B_j-B_j^0\|<\tau$, there are subsets $I_j\subset\{1,\ldots,n\}$ with $|I_j|=d_j$ satisfying
$$ \sum_jp_j|I_j\cap\{1,\ldots,l\}|\le l\quad(0\le l\le n),\qquad |\det(B_je_i:i\in I_j)|\ge c. $$
If additionally $\sum_jp_jd_j=n$ and every nonzero proper subspace has strict dimension inequality $\dim W<\sum_jp_j\dim B_j^0W$, the subsets may be chosen with a fixed positive margin $l-\sum_jp_j|I_j\cap\{1,\ldots,l\}|\ge\eta>0$ for $1\le l<n$.

## Statement references

[Source proof development](https://arxiv.org/pdf/math/0505065)

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] Closed bounded subsets of finite-dimensional Euclidean space are compact ([[thm-heine-borel-rn]]). Determinants are polynomials in the matrix entries; ranks count the size of a maximal independent column set.

## Proof

1.1 If $n=0$, all targets are zero dimensional by surjectivity, all selected subsets are empty, and their determinants are $1$; the assertion is immediate. Assume $n>0$. At the fixed datum choose $I_j$ greedily backwards: include $i$ precisely when $B_j^0e_i$ is not spanned by the images with larger indices. Surjectivity gives $|I_j|=d_j$. For $W_l=\operatorname{span}(e_{l+1},\ldots,e_n)$, the selected tail has cardinality $\dim B_j^0W_l$. Consequently the assumed codimension inequality says exactly $\sum_jp_j|I_j\cap\{1,\ldots,l\}|\le l$. Every selected determinant is nonzero. [given, F1, construct, algebra]

2.1 There are finitely many tuples of subsets with the required cardinalities. Call a tuple admissible if its prefix counts satisfy the displayed inequalities, a condition independent of $B$ and of the basis. Define $h(B,e)$ as the maximum over these tuples of the minimum of their absolute selected determinants. The admissible set is nonempty by the preceding argument, and $h$ is continuous as a finite maximum of finite minima of continuous functions. The orthonormal basis matrices form the closed bounded set $O(n)$. At $B^0$, $h(B^0,e)>0$ for every $e$, so its minimum there is positive. Uniform continuity on a compact matrix ball times $O(n)$ gives one neighborhood and a positive common lower bound. An admissible tuple attaining the finite maximum proves the first assertion. [given, F1, construct, algebra]

3.1 Under the additional hypotheses, codimension subtraction makes each greedy prefix inequality strict for $1\le l<n$. There are only finitely many possible numbers $l-\sum_jp_ja_j$ with integers $0\le a_j\le d_j$. Their positive values therefore have a positive minimum $\eta$. Restrict admissible tuples to those with every proper prefix gap at least $\eta$ and repeat the same finite-maximum and compactness argument. When $n=1$ the strict-prefix conditions are empty. All selections are finite witnesses for a fixed basis or matrix; no simultaneous choice of eigenbases or flags is required. [given, F1, construct, algebra] ∎

