---
id: thm-schensted-longest-increasing-and-decreasing-subsequence-theorem
kind: theorem
title: The Schensted theorem on longest increasing and decreasing subsequences
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-first-row-insertion-basic-subsequences, lem-robinson-schensted-recording-tableau-is-standard, lem-row-bumping-route-monotonicity, lem-word-reversal-transposes-the-insertion-tableau]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "pp. 183-184 and p. 188: Lemmas 4 and 5 and Theorem 1 (number of columns equals the longest increasing length), and Theorem 2 with Lemma 7 (number of rows equals the longest decreasing length); read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, printed p. 724: the remark that the number of rows of P(v_1,...,v_n) is the length of the longest strictly decreasing subsequence; read in the full text as an independent statement check."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, row-insertion and recording-tableau conventions preceding Example 9.10.2; used only for these conventions. The subsequence results are Schensted Theorems 1 and 2, not Martin Theorem 9.10.12."
---

## Statement

Let $w=(w_1,\dots,w_N)$ be a word of pairwise distinct real numbers and let
$P(w)$ be its insertion tableau, of shape $\lambda$
([[def-row-insertion-and-bumping-route]]). Call a subsequence
$w_{k_1},\dots,w_{k_r}$ (with $k_1<\dots<k_r$) increasing when
$w_{k_1}<\dots<w_{k_r}$ and decreasing when $w_{k_1}>\dots>w_{k_r}$. Then the
length of a longest increasing subsequence of $w$ equals the number
$\lambda_1$ of columns of $P(w)$, and the length of a longest decreasing
subsequence equals the number $\lambda'_1$ of rows of $P(w)$. For the empty
word both longest lengths and both numbers are $0$.

## Facts & Assumptions

**Given:** A word $w=(w_1,\dots,w_N)$ of pairwise distinct real numbers, its insertion tableaux $P_k=P(w_1,\dots,w_k)$ of shape $\lambda^{(k)}$, and the basic subsequences $S_1,S_2,\dots$ of $w$.

[L1] At each step $k$ the letter $w_k$ is placed in some position $j$ of the first row of $P_k$; each $S_j$ is the list, in insertion order, of the letters whose position at their own insertion is $j$, and the $S_j$ form a partition of the letters of $w$ into decreasing subsequences; moreover for every $x\in S_j$ with $j\ge2$ the entry $y$ occupying position $j-1$ of the first row at the moment $x$ is inserted belongs to $S_{j-1}$, was inserted earlier than $x$, and satisfies $y<x$ ([[lem-first-row-insertion-basic-subsequences]], [[def-row-insertion-and-bumping-route]]).

[L2] The first row of $P_k$ is strictly increasing and the shape $\lambda^{(k)}$ is a partition, so the occupied positions of the first row are exactly $1,\dots,\lambda^{(k)}_1$, and positions of the first row are filled and refilled from the left, a position receiving a letter only at a step when it already exists or is appended ([[lem-row-bumping-route-monotonicity]], [[def-young-tableau-standard-tableau-and-shape]]).

[L3] For the reversed word $w^{r}=(w_N,\dots,w_1)$ one has $P(w^r)=P(w)^{\mathrm t}$, so the first row of $P(w^r)$ is the first column of $P(w)$ and the number of columns of $P(w^r)$ equals the number of rows of $P(w)$ ([[lem-word-reversal-transposes-the-insertion-tableau]]).



## Proof

**Proof technique:** direct.

1.1 (Nonempty basic subsequences.) For each $j\in\{1,\dots,\lambda_1\}$ the final first row of $P(w)=P_N$ has an entry in position $j$, which was placed there at some step, and that step's letter lies in $S_j$; hence $S_j\ne\varnothing$. For $j>\lambda_1$ no step can place a letter in position $j$, because positions of the first row never exceed $\lambda_1$ at the end; hence $S_j=\varnothing$. So the nonempty basic subsequences are exactly $S_1,\dots,S_{\lambda_1}$. [L1, L2]

1.2 (Decreasing property and predecessor property.) Each $S_j$ is strictly decreasing in the order of insertion, and each element $x$ of $S_j$ with $j\ge2$ has an earlier inserted element $y\in S_{j-1}$ with $y<x$; these are the two assertions of the basic subsequence lemma. [L1, given]

2.1 (Upper bound for increasing subsequences.) Let $w_{k_1}<\dots<w_{k_r}$ with $k_1<\dots<k_r$ be an increasing subsequence. The letters of $w$ are partitioned by the sets $S_j$ (step 1.1), and within a fixed $S_j$ the letters occur in insertion order with strictly decreasing values (step 1.2); an increasing subsequence meets $S_j$ in at most one letter, since two letters of $S_j$ occur in the order of their positions in $w$ and their values decrease. Hence $r\le\#\{j:S_j\ne\varnothing\}=\lambda_1$, so the longest increasing length is at most $\lambda_1$. [step 1.1, step 1.2, algebra]

2.2 (Lower bound for increasing subsequences.) If $N\ge1$ set $\lambda_1\ge1$ and choose any element $x_{\lambda_1}\in S_{\lambda_1}$, which exists by step 1.1; recursively for $j=\lambda_1,\dots,2$ apply the predecessor property of step 1.2 to $x_j$ to choose $x_{j-1}\in S_{j-1}$ inserted earlier than $x_j$ with $x_{j-1}<x_j$. Reading the letters $x_1,\dots,x_{\lambda_1}$ in the order of the word $w$: by construction the insertion times strictly increase from $x_1$ to $x_{\lambda_1}$, so the positions in $w$ strictly increase, and the values strictly increase; hence they form an increasing subsequence of $w$ of length $\lambda_1$. [step 1.1, step 1.2, algebra]

3.1 (Increasing case.) For $N\ge1$ steps 2.1 and 2.2 give that the longest increasing subsequence length equals $\lambda_1$; for $N=0$ there is no first row, $\lambda_1=0$, and the empty word has no nonempty subsequence, so the longest increasing length is $0=\lambda_1$. [step 2.1, step 2.2, given]

4.1 (Decreasing case.) An increasing subsequence $w^r_{i_1}<\dots<w^r_{i_r}$ of the reversed word, with $i_1<\dots<i_r$, corresponds to the index sequence $N+1-i_r<\dots<N+1-i_1$ in $w$ with $w_{N+1-i_r}>\dots>w_{N+1-i_1}$, a decreasing subsequence of the same length; the correspondence is a bijection on subsequences, so the longest decreasing length of $w$ equals the longest increasing length of $w^r$, which by step 3.1 is the number of columns of $P(w^r)$. [step 3.1, algebra]

5.1 (Number of rows.) By [L3] the number of columns of $P(w^r)$ equals the number of rows of $P(w)$, namely $\lambda'_1$; combining with step 4.1, the longest decreasing subsequence length equals $\lambda'_1$. Together with step 3.1 this is the theorem; for $N=0$ both lengths and both $\lambda_1,\lambda'_1$ are $0$. [step 4.1, step 3.1, L3] ∎
