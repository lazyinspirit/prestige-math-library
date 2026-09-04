---
id: thm-savitchs-theorem
kind: theorem
title: "Savitch's theorem: NSPACE(s(n)) is contained in DSPACE(s(n)^2)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dtime-ntime-dspace-and-nspace, lem-space-bounded-machines-have-exponentially-many-configurations, def-bounded-reachability-recursion, lem-bounded-reachability-recursion-is-correct, lem-bounded-reachability-uses-logarithmic-recursion-depth]
landmark: true
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
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

For every function $s:\mathbb N\to\mathbb N$, every language in $\mathrm{NSPACE}(s(n))$ also lies in $\mathrm{DSPACE}(s(n)^2)$.

## Facts & Assumptions

**Given:** a language $L\in\mathrm{NSPACE}(s(n))$.

[L1] By definition, $L\in\mathrm{NSPACE}(s(n))$ means that some fixed nondeterministic multitape machine decides $L$ while every branch uses $O(s(n))$ space ([[def-dtime-ntime-dspace-and-nspace]]).

[L2] Such a machine has at most exponentially many configurations in its space bound ([[lem-space-bounded-machines-have-exponentially-many-configurations]]).

[L3] The bounded reachability recursion is correct for paths of length at most $2^i$ ([[lem-bounded-reachability-recursion-is-correct]]).

[L4] When a digraph has $N$ vertices, the recursion needs only $O(\log^2 N)$ space, hence $O(s(n)^2)$ space when $N\le 2^{O(s(n))}$ ([[lem-bounded-reachability-uses-logarithmic-recursion-depth]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be the machine from [L1], and fix an input $x$ of length $n$. Form the directed configuration graph $G_x$: its vertices are the configurations of $M$ on $x$, and there is an arc $C\to C'$ exactly when one legal transition of $M$ moves from $C$ to $C'$. Let $C_{\mathrm{start}}(x)$ be the start configuration. Then $x\in L$ if and only if some accepting configuration is reachable from $C_{\mathrm{start}}(x)$ in $G_x$. [L1, construct]

2.1 By [L2], $G_x$ has at most $N_x\le 2^{c s(n)}$ vertices for some constant $c$ depending only on $M$. Any directed path with repeated vertices can be shortened by deleting directed cycles, so $x\in L$ if and only if $C_{\mathrm{start}}(x)$ reaches some accepting configuration by a path of length at most $N_x-1$. [L2, step 1.1, algebra]

3.1 A deterministic simulator can enumerate candidate accepting configurations $C$ one at a time and run the bounded reachability procedure on the triple $(G_x,C_{\mathrm{start}}(x),C)$ with an index large enough to cover $N_x-1$. By [L3], that test answers the reachability question correctly for each candidate $C$. [L3, step 2.1, construct]

4.1 By [L4], each such reachability test uses $O(s(n)^2)$ space. The simulator never stores the whole graph: it keeps only the current input, one or two configurations, the midpoint candidate, and the recursion stack; adjacency in $G_x$ is recomputed from the transition function of $M$ when needed. The outer loop over candidate accepting configurations adds only $O(s(n))$ more space. Hence the overall deterministic decider uses $O(s(n)^2)$ space. [L4, step 3.1, algebra]

5.1 Since the input $x$ was arbitrary, $L\in\mathrm{DSPACE}(s(n)^2)$. This proves $\mathrm{NSPACE}(s(n))\subseteq\mathrm{DSPACE}(s(n)^2)$. [step 4.1] ∎
