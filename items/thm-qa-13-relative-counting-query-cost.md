---
id: thm-qa-13-relative-counting-query-cost
kind: theorem
title: "Relative approximate counting query complexity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-13-relative-approximate-counting
  - lem-qa-13-counting-zero-outcome-kernel
  - def-qa-13-amplitude-estimation-task
  - def-qa-quantum-query-complexity
  - thm-qa-phase-estimation-access-cost
  - def-nat-power
  - thm-induction-principle
  - thm-of-archimedean
  - lem-qa-13-grover-eigenphase-relation
  - thm-qa-phase-estimation-exact-grid
  - alg-qa-13-counting-from-amplitude-estimation
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For an integer $n\ge0$, $N=2^n$, a predicate with $0\le t\le N$ marked addresses, and rational $0<\epsilon\le1$, in the repeated controlled-$Q$ access mode the dyadic relative-counting procedure uses expected $O(\epsilon^{-1}\sqrt{N/t})$ controlled-$Q$ calls when $t>0$, and exactly one controlled membership-reflection call per such controlled Grover call. Each controlled $Q$ additionally uses its declared controlled $A$, controlled $A^*$, controlled $S_0$, and control phase. For $t=0$, this implementation uses $O(\sqrt N/\epsilon)$ controlled-$Q$ calls: the rough loop reaches its $L^2\ge4N$ cutoff, and the final estimator still uses $M=\Theta(L/\epsilon)$. State preparation, gates, and certified classical rounding are separate.

## Facts & Assumptions

**Given:** The relative-counting algorithm with $N=2^n$, an integer $n\ge0$, $0\le t\le N$, rational $0<\epsilon\le1$, and repeated controlled-$Q$ access.

[F1] The loop uses dyadic rough scales and a final size $M=\Theta(L/\epsilon)$ ([[alg-qa-13-relative-approximate-counting]]).

[F2] For $0<t<N$, the continuation probability at rough scale $L$ is $P_0(L)=\sin^2(L\theta)/(L^2\sin^2\theta)$; for $t=0$, the zero label is certain ([[lem-qa-13-counting-zero-outcome-kernel]]).

[F3] One controlled Grover call includes the controlled good reflection as a separate supplied access ([[def-qa-13-amplitude-estimation-task]]).

[F4] The declared query model counts each controlled call separately from gates and bit operations ([[def-qa-quantum-query-complexity]]).

[F5] In repeated controlled-unitary access, Count at any phase-register size $L=2^\ell\ge2$ uses exactly $L-1$ controlled-$Q$ calls ([[thm-qa-phase-estimation-access-cost]]).

[F6] For every real $X>0$, some dyadic scale $2^\ell$ exceeds $X$: choose a natural $q>X$ by the Archimedean property, prove $2^q\ge q+1$ by induction using the recursion for natural powers, and take $\ell=q$ ([[thm-of-archimedean]], [[def-nat-power]], [[thm-induction-principle]]).

[F7] At $t=N$, the prepared state is a Grover eigenvector with phase $1/2$ ([[lem-qa-13-grover-eigenphase-relation]]).

[F8] An exact-grid phase is returned at its exact QPE label with probability one ([[thm-qa-phase-estimation-exact-grid]]).

[F9] Count at scale $L$ runs QPE on the counting Grover iterate with $L$ phase labels, including the one-qubit circuit when $L=2$ ([[alg-qa-13-counting-from-amplitude-estimation]]).

## Proof

1.1 If $t=N$, [F7] gives phase $1/2$; at the first rough scale $L=2$, [F9] and [F8] give label $y=1\ne0$, so the loop stops at $L=2$. For $0<t<N$, $\sin^2\theta=t/N$, and [F2] gives $P_0(L)\le1/(L^2\sin^2\theta)=N/(tL^2)$. Once $L\ge18\pi\sqrt{N/t}$, this is at most $1/(324\pi^2)<1/4$. [given, F2, F7, F8, F9, algebra]

2.1 Suppose $0<t<N$ and put $X=18\pi\sqrt{N/t}$. Choose a natural $q>X$ by [F6]. Induction using the natural-power recursion gives $2^q\ge q+1$, so a dyadic scale exceeds $X$; scanning the rough scales in order reaches a first $L_*\ge X$. Its preceding scale is smaller than $X$, hence $L_*<2X=36\pi\sqrt{N/t}$. By [F5], a rough Count at scale $L$ costs $L-1\le L$ controlled-$Q$ calls. The rough query costs below $L_*$ sum to less than $2L_*$. If the loop reaches $L_*$, each later zero outcome has conditional probability at most $1/4$ by step 1.1; reaching the $j$th later scale costs at most $2^jL_*$ and has probability at most $4^{-j}$. Hence the expected tail is bounded by $L_*\sum_{j\ge0}(1/2)^j=2L_*$. If the cutoff occurs before $L_*$, it only removes terms from these upper bounds. Thus the expected rough cost is $O(\sqrt{N/t})$. If $L$ is the actual stopping scale, its final rough Count costs $L-1\ge L/2$ calls since $L\ge2$, so $\mathbb E L$ is at most twice the expected rough query cost and is also $O(\sqrt{N/t})$. [given, F5, F6, step 1.1, algebra]

3.1 The final dyadic $M$ is less than twice its threshold, so $M=O(L/\epsilon)$. By [F5], the final Count uses $M-1$ calls; for $0<t<N$, the bound on $\mathbb E L$ in step 2.1 therefore gives $O(\epsilon^{-1}\sqrt{N/t})$ expected final controlled-$Q$ calls, while the rough term is absorbed because $\epsilon\le1$. If $t=N$, step 1.1 gives $L=2$, so the rough cost is one call and the final size is $M=O(1/\epsilon)$, matching $O(\epsilon^{-1}\sqrt{N/t})$. If $t=0$, the cutoff scale lies in $[2\sqrt N,4\sqrt N)$, the geometric rough-call sum is $O(\sqrt N)$, and the final schedule uses $M=O(\sqrt N/\epsilon)$ calls by [F5]. Thus the stated zero-case cost retains the $\epsilon$ factor. [F1, F5, step 1.1, step 2.1, algebra]

4.1 Each repeated controlled-$Q$ call contains exactly one controlled $S_{\rm good}$ factor by [F3]; [F4] keeps that query count separate from controlled $A/A^*$ and other gates. Thus the stated membership-reflection and resource counts follow. [given, F3, F4, step 3.1] ∎

