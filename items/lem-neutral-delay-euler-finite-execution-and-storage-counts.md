---
id: lem-neutral-delay-euler-finite-execution-and-storage-counts
kind: lemma
title: "Finite execution and storage counts for compatible neutral Euler"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [alg-neutral-delay-euler-compatible-grid, def-scalar-neutral-delay-equation-and-segment-shift]
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

For [[alg-neutral-delay-euler-compatible-grid]], set $N=Km$ and $h=\tau/m$. With no budget let $M=N$; with a budget $B\in\mathbb N_0$ let $M=\min\{B,N\}$. Assuming each prescribed history, derivative-history and field evaluation returns, the procedure terminates after exactly $M$ calls to $f$, returning `completed` exactly when $M=N$ and `budget-exhausted` otherwise. Every requested index and evaluation is admitted. If $M\ge1$, compatibility gives $V_0=\phi'(0)$.

With the initialized history retained, the state and derivative arrays contain $2m+2M+1$ scalar values. In particular completion uses $N$ field calls and $O(N+m)$ retained scalar state and derivative values, with no memory bound constant uniformly in $N+m$. Counts exclude the internal costs of evaluating $\phi$, $\phi'$ and $f$.

## Facts & Assumptions

**Given:** The admitted compatible scalar neutral problem and evaluation convention in the Statement.

[F1] [[alg-neutral-delay-euler-compatible-grid]] stores $Y_j,V_j$ for $-m\le j<0$ and $Y_0$, then at each accepted index $n$ forms $D_n=\phi'(t_n-\tau)$ for $n<m$ or $V_{n-m}$ otherwise, computes $V_n=aD_n+f(t_n,Y_n,Y_{n-m})$, and appends $Y_{n+1}$.

[F2] Compatibility is $\phi'(0)=a\phi'(-\tau)+f(0,\phi(0),\phi(-\tau))$ ([[def-scalar-neutral-delay-equation-and-segment-shift]]).

## Proof

1.1 At accepted index $n$, induction gives states with indices $-m,\ldots,n$ and derivative values $-m,\ldots,n-1$. The state index $n-m$ is in range. For $n<m$, $t_n-\tau\in[-\tau,0)$, so the history derivative is defined; for $n\ge m$, $0\le n-m\le n-1$, so the computed derivative is available. Since $n<N$ and $Nh=K\tau=T$, $t_n<T$, and the field accepts all scalar states at that time. Thus each accepted update is defined. At $n=0$, substituting the initialized states and $D_0=\phi'(-\tau)$ into the recurrence gives $V_0=\phi'(0)$ by [F2]. This assertion requires an accepted first update. [given, F1, F2, algebra]

2.1 There are finitely many loop indices $0,\ldots,N-1$, each with one field call if accepted. The budget test rejects the first index $B$ when $B<N$, while no index is rejected when there is no budget or $B\ge N$. Thus exactly $M$ updates occur and the status is as asserted; all prescribed evaluations return, so the procedure terminates. Initialization stores $2m+1$ scalar values; each accepted update adds $V_n$ and $Y_{n+1}$, for a total $2m+2M+1$. At completion this is $O(N+m)$ and grows with the retained array lengths, yielding the claimed memory conclusion. [given, F1, step 1.1, algebra] ∎
