---
id: lem-retarded-delay-euler-finite-execution-and-storage-counts
kind: lemma
title: "Finite execution and storage counts for stored-history retarded Euler"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-retarded-delay-euler-with-stored-history]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Guglielmi and Hairer, Solving Delay Differential Equations, Chapter 1 (underlying delay algorithms; finite counts proved here)"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

For [[alg-retarded-delay-euler-with-stored-history]], put $h=\tau/m$, $N=\lceil T/h\rceil$, and $T_h=Nh$. If there is no budget let $M=N$; with a budget $B\in\mathbb N_0$ let $M=\min\{B,N\}$. Assuming each prescribed history or vector-field evaluation returns, the method terminates after exactly $M$ calls to $f$. It returns `completed` exactly when $M=N$, and otherwise returns `budget-exhausted`. Every delayed index and field evaluation is in its admitted domain, and $0\le T_h-T<h$.

The retained history contains $m+M+1$ vectors, or $d(m+M+1)$ scalar entries. In particular a complete run uses $N$ field evaluations and $O(d(N+m))=O(d(T+\tau)/h)$ retained history entries. In a unit-cost scalar arithmetic and random-access array model, with constant-cost floor/index calculation, a stored-history query requires $O(d)$ arithmetic. These costs exclude the internal costs of evaluating $\phi$ and $f$. The mandated retained output grows with $N+m$; the procedure has no constant-memory bound uniform in the mesh size.

## Facts & Assumptions

**Given:** Admissible inputs and the cost and evaluation conventions in the Statement.

[F1] [[alg-retarded-delay-euler-with-stored-history]] initializes indices $-m$ through $0$, checks the budget before each field call, and appends $Y_{n+1}=Y_n+hf(t_n,Y_n,Y_{n-m})$ before proceeding to the next index. Its interpolant is affine between neighboring stored nodes.

## Proof

1.1 Initialization samples $m+1$ admitted history times. At the start of iteration $n$, induction gives stored indices $-m,\ldots,n$. Because $m\ge1$, the delayed index satisfies $-m\le n-m\le n$, so its value is available. The defining ceiling satisfies $N-1<T/h\le N$, giving $t_n<T$ for $n<N$ and $0\le Nh-T<h$. The field accepts every pair of finite-dimensional states at these times, so each required call is in its admitted domain; its returned vector makes the next state defined. [given, F1, algebra]

2.1 There are $N$ loop indices. Without a budget every index makes one field call and one update. With a budget, the first rejected index is $B$ if $B<N$; all earlier indices execute exactly one call, whereas $B\ge N$ rejects none. Thus exactly $M$ calls and updates occur, with the stated status. Initialization and the loop have finitely many operations and returning evaluations, so the procedure terminates. It retains precisely the initialized vectors and $M$ appended vectors, giving $m+M+1$. [given, F1, step 1.1, algebra]

3.1 For completion, $N\le T/h+1$ and $m=\tau/h\ge1$, so $N+m+1\le(T+\tau)/h+2\le3(T+\tau)/h$, proving both storage bounds. For a query $s\in[-\tau,Mh]$, if $s=Mh$ return the last vector; otherwise choose $j=\lfloor s/h\rfloor$ and $\alpha=(s-jh)/h\in[0,1)$, then return $(1-\alpha)Y_j+\alpha Y_{j+1}$. The indices are stored by step 2.1. This uses constant scalar work for the index and coefficient and a bounded number of operations per coordinate, hence $O(d)$ arithmetic. The retained node count itself grows with $m+M$, proving the stated absence of a uniform constant-memory bound. [given, F1, step 2.1, algebra] ∎
