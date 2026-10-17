---
id: thm-finite-transient-hitting-and-mean-exit-residual-bound
kind: theorem
title: "Transient hitting, mean exit, and residual bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-finite-transient-block-geometric-escape
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; all states and matrix sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, Theorems 11.3–11.6, printed pp. 417–420; finite-step absorption, (I−T)^{-1}, mean absorption time, and absorption probabilities."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $K$ be a finite row-stochastic transition matrix on a finite state set, let $U$ be a nonempty subset, and put $T=K_{U,U}$. Suppose $T$ satisfies the escape hypothesis of [[lem-finite-transient-block-geometric-escape]] with constants $L\le |U|$ and $\varepsilon>0$. For each $i\in U$, give a finite first-exit path $(i=i_0,i_1,\ldots,i_k,j)$, with $i_0,\ldots,i_k\in U$ and $j\in U^c$, the weight $\prod_{r<k}K_{i_r i_{r+1}}\,K_{i_kj}$. The proof shows these countably many path weights sum to one, so they define a probability distribution on finite first-exit paths. Let $G\subseteq U^c$, set $b_i=\sum_{j\in G}K_{ij}$, and let $h_i$ be the probability that the path exits into $G$; let $t_i$ be the mean number of transitions to exit. Then $h=\sum_{k\ge0}T^kb$ and $t=\sum_{k\ge0}T^k\mathbf1$. The matrix $N=(I-T)^{-1}=\sum_{k=0}^{\infty}T^k$ exists, has nonnegative entries, and

$$\|N\|_\infty\le L/\varepsilon,\qquad \|h-\widehat h\|_\infty\le(L/\varepsilon)\|b-(I-T)\widehat h\|_\infty,$$

where $h_i$ is the probability that the first exit from $U$ lands in $G$ and $h=Nb$. The expected number $t_i$ of steps until the first exit from $U$ is finite and satisfies $t=N\mathbf 1$; for any $\widehat t$,

$$\|t-\widehat t\|_\infty\le(L/\varepsilon)\|\mathbf 1-(I-T)\widehat t\|_\infty.$$

Thus these hitting and mean-exit systems are certified only for a proved transient block; a row-substochastic matrix without the escape hypothesis receives no such conclusion here. The matrix norm is $\|A\|_\infty=\max_i\sum_j|A_{ij}|$ and the vector norm is $\|v\|_\infty=\max_i|v_i|$.

## Facts & Assumptions

**Given:** A finite row-stochastic transition matrix $K$, a nonempty transient set $U$, its block $T=K_{U,U}$, the escape constants $L,\varepsilon$, and a boundary target $G\subseteq U^c$.

[F1] [[def-transition-matrix-and-n-step-transition-probabilities]]: the entries of $K$ are nonnegative and each source row sums to one.

[F2] [[lem-finite-transient-block-geometric-escape]]: $T\ge0$, $T\mathbf 1\le\mathbf 1$, and $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$ for some $L\le |U|$ and $\varepsilon>0$; in particular $T^n\mathbf1\to0$.

[L1] The finite first-exit paths from $i$ have weights $\prod_{r<k}K_{i_r i_{r+1}}K_{i_kj}$; once their total weight is one, their event probabilities and the mean exit length are the corresponding nonnegative sums.

## Proof

**Given:** $K,U,T,G,L,\varepsilon$ and the finite first-exit path weights above.

**Proof technique:** group the Neumann series into blocks of length $L$, normalize the finite first-exit path weights, and use the tail-sum identity for an integer-valued exit length.

1.1 For $0\le r<L$, substochasticity gives $T^r\mathbf 1\le\mathbf 1$. Since $T^L\mathbf 1\le(1-\varepsilon)\mathbf 1$, induction gives $(T^L)^q\mathbf 1\le(1-\varepsilon)^q\mathbf 1$ for every $q\ge0$. Therefore every row sum of $T^{qL+r}$ is at most $(1-\varepsilon)^q$, and $\sum_{k\ge0}\|T^k\|_\infty\le L\sum_{q\ge0}(1-\varepsilon)^q=L/\varepsilon$. [given, F2, algebra, induction]

2.1 The series $N=\sum_{k\ge0}T^k$ converges in the maximum-row-sum norm and has nonnegative entries. The finite partial sums satisfy $(I-T)\sum_{k=0}^{m}T^k=I-T^{m+1}$ and $\sum_{k=0}^{m}T^k(I-T)=I-T^{m+1}$. Step 1.1 makes $T^{m+1}\to0$, so $N$ is a two-sided inverse of $I-T$ and $\|N\|_\infty\le L/\varepsilon$. [step 1.1, algebra]

2.2 Put $d=\mathbf1-T\mathbf1$, the vector of one-step exit weights from rows of $U$. For each $i$, the total weight of first-exit paths of length at most $N$ is $\sum_{k=0}^{N-1}(T^kd)_i=\sum_{k=0}^{N-1}(T^k\mathbf1-T^{k+1}\mathbf1)_i=1-(T^N\mathbf1)_i$. By [F2], this tends to one. The finite-exit path set is countable, so these nonnegative weights define a probability distribution. For paths exiting into $G$ after $k$ transitions within $U$, finite matrix multiplication gives weight $(T^kb)_i$; summing over $k$ yields $h_i=\sum_{k\ge0}(T^kb)_i=(Nb)_i$. [F1, F2, L1, step 1.1, algebra]

3.1 For a path with exit length $\tau$, the indicator identity $\tau=\sum_{k\ge0}\mathbf1_{\{\tau>k\}}$ holds. Summing against the countable path probability from step 2.2 gives $\mathbb E_i\tau=\sum_{k\ge0}\Pr_i(\tau>k)$, since both are the same nonnegative double sum indexed by pairs $0\le k<\tau$. The total weight of paths still in $U$ after $k$ transitions is $(T^k\mathbf1)_i$, so $t_i=\sum_{k\ge0}(T^k\mathbf1)_i=(N\mathbf1)_i$. Step 1.1 makes this finite, and multiplying by $I-T$ gives $(I-T)t=\mathbf1$. [F1, F2, L1, step 1.1, step 2.2, algebra]

4.1 From $h-\widehat h=N\bigl(b-(I-T)\widehat h\bigr)$, the operator norm bound in step 2.1 gives the stated hitting-probability residual bound. Applying the same identity to $t-\widehat t$ with right side $\mathbf 1$ gives the mean-exit residual bound. [step 2.1, step 2.2, step 3.1, algebra] ∎
