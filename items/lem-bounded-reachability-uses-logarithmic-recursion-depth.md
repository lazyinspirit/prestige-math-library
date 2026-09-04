---
id: lem-bounded-reachability-uses-logarithmic-recursion-depth
kind: lemma
title: "The bounded reachability recursion uses logarithmic recursion depth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-reachability-recursion, lem-space-bounded-machines-have-exponentially-many-configurations]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $G$ be a finite digraph with $N\ge 1$ vertices, numbered by $\{0,\dots,N-1\}$. To decide whether a directed path exists from $u$ to $v$, it is enough to evaluate $\operatorname{Reach}_i^G(u,v)$ with $i=0$ when $N=1$ and $i=\lceil\log_2(N-1)\rceil$ when $N\ge 2$. This recursion has depth at most $i+1=O(\log N)$, each stack frame stores $O(\log N)$ bits, and the whole deterministic search therefore uses $O(\log^2 N)$ space. In particular, if $N\le 2^{c s(n)}$ for some constant $c$, then the search uses $O(s(n)^2)$ space.

## Facts & Assumptions

**Given:** a finite digraph $G$ with $N\ge 1$ numbered vertices.

[L1] $\operatorname{Reach}_i^G(u,v)$ is intended to decide existence of a path of length at most $2^i$, and its recursive definition decreases $i$ by one at each call ([[def-bounded-reachability-recursion]]).

[L2] A space-$s(n)$ machine has at most $2^{O(s(n))}$ configurations ([[lem-space-bounded-machines-have-exponentially-many-configurations]]).

## Proof

**Proof technique:** direct.

1.1 If $N=1$, the only possible path question is settled by $\operatorname{Reach}_0^G$. Suppose now that $N\ge 2$. Any directed path with repeated vertices can be shortened by deleting a directed cycle, so if $u$ reaches $v$ at all then $u$ reaches $v$ by a simple directed path. A simple directed path in an $N$-vertex digraph has length at most $N-1$, and $2^{\lceil\log_2(N-1)\rceil}\ge N-1$. [L1, given, algebra]

2.1 By [L1], every recursive call decreases the index $i$ by one, so starting from that initial $i$ yields recursion depth at most $i+1=O(\log N)$. [L1, step 1.1]

3.1 One stack frame stores the current vertices $u$, $v$, a midpoint candidate $z$, and the current index $i$. Each of these numbers is below $\max(N,i+1)$, so one frame uses $O(\log N)$ bits. Multiplying by the depth from step 2.1 gives total space $O(\log^2 N)$. [step 2.1, algebra]

4.1 If $N\le 2^{c s(n)}$, then $\log N\le c s(n)$, and step 3.1 becomes $O(s(n)^2)$. The last sentence follows; [L2] records exactly the configuration bound that supplies such an $N$ in Savitch's theorem. [L2, step 3.1, algebra] ∎
