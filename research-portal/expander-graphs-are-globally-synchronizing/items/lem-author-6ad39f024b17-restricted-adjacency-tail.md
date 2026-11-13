---
id: lem-author-6ad39f024b17-restricted-adjacency-tail
title: The restricted spectral estimate needed above the connectivity threshold
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-6ad39f024b17-centered-normalization
  - lem-author-6ad39f024b17-maximum-degree-mgf
  - lem-author-6ad39f024b17-nonbacktracking-norm-transfer
  - lem-author-6ad39f024b17-nonbacktracking-tail-application
  - math:thm-finite-union-bound
dependency_roles:
  lem-author-6ad39f024b17-centered-normalization: mathematical-premise
  lem-author-6ad39f024b17-maximum-degree-mgf: mathematical-premise
  lem-author-6ad39f024b17-nonbacktracking-norm-transfer: mathematical-premise
  lem-author-6ad39f024b17-nonbacktracking-tail-application: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
formulation_deps:
  - lem-author-6ad39f024b17-centered-normalization
  - lem-author-6ad39f024b17-maximum-degree-mgf
  - lem-author-6ad39f024b17-nonbacktracking-norm-transfer
argument_deps:
  - lem-author-6ad39f024b17-centered-normalization
  - lem-author-6ad39f024b17-maximum-degree-mgf
  - lem-author-6ad39f024b17-nonbacktracking-norm-transfer
  - lem-author-6ad39f024b17-nonbacktracking-tail-application
  - math:thm-finite-union-bound
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
---

## Statement

For every fixed $\gamma>1$ and all sufficiently large integers $n$, put $p=\gamma\log n/n$ and let $A$ be the adjacency matrix of the loop-free simple graph $G(n,p)$ on $[n]=\{1,\ldots,n\}$, whose distinct possible edges occur independently with probability $p$. Write $J$ for the $n\times n$ all-ones matrix. For a matrix $M$ on $\mathbb C^n$, use the Euclidean operator norm $\|M\|=\max_{\|x\|_2=1}\|Mx\|_2$, where $\|x\|_2=(\sum_{i=1}^n|x_i|^2)^{1/2}$. All probabilities below use this graph law. Then
$$\mathbb P(\|A-pJ\|\ge8\sqrt{\gamma\log n})\le2n^{-\gamma}.$$
The cutoff may depend on $\gamma$. This restricted result does not assert the refuted bound for every positive $\gamma$.

## Facts & Assumptions

[F1] Put $\mu=np=\gamma\log n$, let $I$ be the $n\times n$ identity matrix, and set $H=(A-p(J-I))/\sqrt\mu$. Then $\mathbb EA=p(J-I)$, and $H$ has the independent mean-zero upper-triangular entries and variance and entry bounds supplied by the normalization lemma; also $\mu\to\infty$ and eventually $0<p<1$ ([[lem-author-6ad39f024b17-centered-normalization]]).

[F2] Write $d_{\max}=\max_{i\in[n]}\sum_{j\in[n]}A_{ij}$ for the maximum vertex degree. The event $d_{\max}\ge8\mu$ has probability at most $n^{-\gamma}$ ([[lem-author-6ad39f024b17-maximum-degree-mgf]]).

[F3] For the matrix $H$ in [F1], let $B$ be its nonbacktracking matrix indexed by all ordered vertex pairs in $[n]^2$, with $B_{(i,j),(k,l)}=H_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}$, where each indicator is $1$ when its subscript condition holds and $0$ otherwise. Write $\rho(B)=\max\{|z|:z\text{ is an eigenvalue of }B\}$. When $d_{\max}<8\mu$, $\rho(B)<2$, and $\mu>16$, we have $\|A-pJ\|<8\sqrt\mu$ ([[lem-author-6ad39f024b17-nonbacktracking-norm-transfer]]).

[F4] For the same $H$ and $B$ as in [F1] and [F3], the event $\rho(B)\ge2$ has probability at most $n^{-\gamma}$ eventually ([[lem-author-6ad39f024b17-nonbacktracking-tail-application]]).

[F5] For two events $E_1,E_2$ in the same probability space, $\mathbb P(E_1\cup E_2)\le\mathbb P(E_1)+\mathbb P(E_2)$ ([[math:thm-finite-union-bound]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove its conclusions.

1.1 Increase the $n$ cutoff so that all four suppliers apply and $\mu>16$. On the complement of the two exceptional events in [F2] and [F4], [F3] makes the event in the Statement impossible. [F1, F2, F3, F4, given]

2.1 Therefore that event is contained in their union. By [F5], summing the two probability bounds proves the claimed $2n^{-\gamma}$ estimate. Its proof uses the independently imported nonbacktracking inequalities, not the refuted all-$\gamma$ Corollary 6.6. [F2, F4, F5, step 1.1, algebra] ∎
