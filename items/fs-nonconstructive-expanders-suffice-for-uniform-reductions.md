---
id: fs-nonconstructive-expanders-suffice-for-uniform-reductions
kind: false-statement
title: "Nonconstructive expanders suffice for uniform reductions"
status: draft
origin: pipeline
deps: [def-spectral-edge-and-vertex-expansion, cor-explicit-polynomial-time-constant-degree-expanders-exist]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §2.1 Definition2.3, p19; Dinur §2.1 Lemma2.1 explicitly requires constructibility."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

**False statement:** every choice of one bounded-degree expander on each positive vertex count automatically supplies a polynomial-time uniform adjacency generator for the chosen family.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For the regular multigraph and spectral conventions in the stated convention, put $\alpha=\|M|_{\mathbf1^\perp}\|$. For $n\ge2$ order the eigenvalues $1=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$, counting multiplicity, and put $\gamma=1-\mu_2$. Thus $\alpha=\max_{j\ge2}|\mu_j|$, which also controls negative eigenvalues. Write $\operatorname{cut}(S)=\sum_{u\in S,v\notin S}A_{uv}$ and $\partial_VS=\{v\notin S:A_{uv}>0\text{ for some }u\in S\}$. Normalized edge expansion and external vertex expansion are $$h=\min_{0<|S|\le n/2}\frac{\operatorname{cut}(S)}{d|S|},\qquad h_V=\min_{0<|S|\le n/2}\frac{|\partial_VS|}{|S|}.$$ For $n=1$, put $\alpha=0$ and leave $\mu_2,\gamma,h,h_V$ undefined; cut-expansion assertions are vacuous. A bounded-degree family is an expander family when its normalized edge expansion has a positive uniform lower bound for $n\ge2$. Polynomial-time constructibility means a uniform algorithm outputs the adjacency list in time polynomial in $n$; neighbor computation in time polynomial in $\log n$ is a stronger requirement. ([[def-spectral-edge-and-vertex-expansion]]).

[F2] There is a uniform polynomial-time algorithm producing, for each positive vertex count $N$, a degree-$128$ expander $H_N$ with absolute nontrivial norm at most $1-49/1638400$. The output has $128N$ adjacency slots; its bit-time cost is polynomial in $N$. ([[cor-explicit-polynomial-time-constant-degree-expanders-exist]]).


## Refutation

1.1 Let $H_N$ be the explicit degree-$128$ family with nontrivial norm at most $\rho_0<1$. For $N\ge2$, let $P_N$ be the permutation matrix interchanging vertices one and two and fixing the others. The two matrices $C_N^0=A(H_N)+128I$ and $C_N^1=A(H_N)+128P_N$ are symmetric degree-$256$ adjacency matrices. They differ in entry $(1,2)$. On mean-zero vectors their normalized operator norms are at most $\eta=(\rho_0+1)/2<1$, since both $I$ and $P_N$ have norm one and preserve constants. [F2, algebra]

2.1 Both families are expanders in the cut sense too: for any $S$ of size at most half, the centered indicator has energy at least $(1-\eta)\|\mathbf1_S-(|S|/N)\mathbf1\|^2$, so its normalized cut ratio is at least $(1-\eta)(1-|S|/N)\ge(1-\eta)/2$. This calculation applies to either choice at each size. [F1, step 1.1]

3.1 Enumerate all graph-output programs with explicit polynomial-in-$N$ clocks. At stage $i\ge0$ use size $N=i+2$ and run the corresponding clocked program there. If its output, parsed as an adjacency matrix, equals $C_N^0$, choose $C_N^1$; otherwise choose $C_N^0$. Fix the singleton output arbitrarily to degree $256$ loops. Every selected graph expands with the same constants, yet every polynomial-time generator differs from the chosen graph at its assigned size, even if it uses a different ordering of adjacency slots. Thus the chosen family has no polynomial-time uniform generator. [step 1.1, step 2.1, algebra] ∎
