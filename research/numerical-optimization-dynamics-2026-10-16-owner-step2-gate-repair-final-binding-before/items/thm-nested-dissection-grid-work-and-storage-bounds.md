---
id: thm-nested-dissection-grid-work-and-storage-bounds
kind: theorem
title: Nested dissection gives the stated work and factor-storage bounds on regular grids
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-nested-dissection-ordering-on-regular-grids
  - lem-filled-edge-path-characterisation
  - lem-nested-dissection-fronts-are-boundary-limited
  - thm-multifrontal-elimination-equivalence-and-sparse-costs
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 8, §8.4"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "David Bindel, CS 5220, Lecture 16: Sparse Direct Solvers, slides 13–14"
      url: "https://www.cs.cornell.edu/~bindel/class/cs5220-s10/slides/lec16.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §§8 and 11"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Let $d\in\{2,3\}$, $k\ge2$, and $n=k^d$. Identify the coordinate grid $\{0,\ldots,k-1\}^d$ with the zero-based matrix indices by the lexicographic bijection in [[alg-nested-dissection-ordering-on-regular-grids]]. Let $A\in\mathbb R^{n\times n}$ be symmetric positive definite, with structural graph a subgraph of the $d$-dimensional nearest-neighbor grid. Under the coordinate nested-dissection ordering, exact scalar multifrontal Cholesky has
$$\begin{array}{c|c|c} d&\text{arithmetic work}&\text{symbolic factor storage}\\ 2&O(n^{3/2})&O(n\log n)\\ 3&O(n^2)&O(n^{4/3}). \end{array}$$
The storage is the number of allocated factor entries, including structural zeros, and excludes temporary contribution arrays. The bounds use the stated grid geometry; they assert no general-graph bound. For $k=1$, there is one pivot and both work and factor storage are $O(1)$.

## Facts & Assumptions


**Given:** A real symmetric positive-definite matrix with a grid-subgraph pattern, the recursive ordering, and exact scalar multifrontal Cholesky.

[F1] [[alg-nested-dissection-ordering-on-regular-grids]]: Every box is separated by the union of its selected median coordinate hyperplanes; child boxes are ordered before that separator.

[F2] [[lem-nested-dissection-fronts-are-boundary-limited]]: For the full grid and a vertex in the separator of a box of side at most $s$, its factor-column size $d_v=\ell_v+1$ is at most $3d s^{d-1}$.

[F3] [[lem-filled-edge-path-characterisation]]: A filled edge at the elimination of a vertex is equivalent to an original-graph walk between its endpoints whose internal vertices were eliminated earlier.

[F4] [[thm-multifrontal-elimination-equivalence-and-sparse-costs]]: Exact factorization work is $O(\sum_v d_v^2)$ and symbolic factor storage is exactly $\sum_v d_v$.

## Proof


1.1 If a box side has length $m\ge2$, the median rule leaves each child side with length at most $\lceil m/2\rceil$; a side of length $1$ stays $1$. Iterating gives side lengths at depth $r$ at most $s_r=\lceil k/2^r\rceil$. There are at most $2^{dr}$ boxes at that depth because each box has at most $2^d$ children. By depth $R=\lceil\log_2 k\rceil$, every side has length $1$, so all remaining boxes are terminal. For $0\le r\le R$, $k/2^r\ge1/2$, hence $s_r\le2k/2^r$. [F1, induction, algebra]

1.2 If $k=1$, the grid and its ordering contain one terminal pivot and its factor column contains only the diagonal. Hence $d_v=1$ for its unique vertex, and [F3] gives $O(1)$ work and exactly one stored factor entry. [given, F1, F3, algebra]

1.3 Let $G'$ be the structural graph of $A$ and let $G$ be the full nearest-neighbor grid on the same vertices. They use the same coordinate ordering. If a pair is an edge in a filled graph of $G'$, [F3] supplies a witness walk in $G'$ with internal vertices eliminated earlier; since $G'$ is a subgraph of $G$, the same walk witnesses that edge in the corresponding filled graph of $G$. Thus every later filled neighbor in $G'$ is also one in $G$, and each subgraph column size is at most the full-grid column size. Fix a box at depth $r$. Its separator has at most $d s_r^{d-1}$ vertices by the union bound over its at most $d$ median hyperplanes; the terminal singleton satisfies the same bound. By [F2], each such pivot has full-grid column size at most $3d s_r^{d-1}$, so the same bound holds for $A$. [given, F1, F2, F3, algebra]

2.1 The factorization work contributed by one depth-$r$ box is therefore at most a constant depending only on $d$ times $s_r^{d-1}s_r^{2(d-1)}=s_r^{3(d-1)}$, using [F4]. Summing over at most $2^{dr}$ boxes at each depth and using $s_r\le2k/2^r$ gives [step 1.3, F4, algebra] $$ O\!\left(k^{3(d-1)}\sum_{r=0}^{R}2^{-r(2d-3)}\right). $$ For $d=2$, the geometric ratio is $2^{-1}$, so this is $O(k^3)$. For $d=3$, the ratio is $2^{-3}$, so it is $O(k^6)$. [step 1.3, F3, algebra]

2.2 The storage contributed by one depth-$r$ box is at most a constant times $s_r^{d-1}s_r^{d-1}=s_r^{2(d-1)}$, again by [F2] and [F4]. Summing over boxes and using $s_r\le2k/2^r$ gives [step 1.3, F2, F4, algebra] $$ O\!\left(k^{2(d-1)}\sum_{r=0}^{R}2^{-r(d-2)}\right). $$ For $d=2$, there are $O(\log k)$ equal-order terms, giving $O(k^2\log k)$. For $d=3$, the series is bounded by $\sum_{r\ge0}2^{-r}=2$, giving $O(k^4)$. [step 1.3, F2, F3, algebra]

3.1 When $d=2$, $n=k^2$ gives $k^3=n^{3/2}$ and $k^2\log k=O(n\log n)$ for $k\ge2$. When $d=3$, $n=k^3$ gives $k^6=n^2$ and $k^4=n^{4/3}$. Thus steps 1.2, 2.1 and 2.2 give the displayed rates and the $k=1$ case. The proof used the coordinate-box and grid-boundary counts in [F1]–[F2] together with the fill containment proved in step 1.3, so it does not imply a bound for arbitrary graphs. [step 1.2, step 2.1, step 2.2, F1, F2, F3, F4, algebra] ∎

