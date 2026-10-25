---
id: lem-bounded-reachability-recursion-is-correct
kind: lemma
title: "The bounded reachability recursion is correct"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-reachability-recursion]
proof_strategy: induction
verification:
  audited: 2026-09-12
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

Let $G=(V,A)$ be a finite digraph, let $u,v\in V$, and let $i\in\mathbb N$. Then $\operatorname{Reach}_i^G(u,v)$ holds if and only if $G$ contains a directed path from $u$ to $v$ of length at most $2^i$.

## Facts & Assumptions

**Given:** a finite digraph $G=(V,A)$, vertices $u,v\in V$, and a natural number $i$.

[L1] The definition of $\operatorname{Reach}_0^G(u,v)$ says exactly that $u=v$ or $(u,v)\in A$, and the definition of $\operatorname{Reach}_i^G$ for $i\ge 1$ says that some midpoint $z$ makes both $\operatorname{Reach}_{i-1}^G(u,z)$ and $\operatorname{Reach}_{i-1}^G(z,v)$ hold ([[def-bounded-reachability-recursion]]).

## Proof

**Proof technique:** induction.

1.1 For $i=0$, [L1] says $\operatorname{Reach}_0^G(u,v)$ holds exactly when $u=v$ or there is an arc $u\to v$. These are precisely the directed paths from $u$ to $v$ of lengths $0$ and $1$, hence of length at most $2^0$. [L1, base]

1.2 Assume the claim for $i-1$ with $i\ge 1$. If $\operatorname{Reach}_i^G(u,v)$ holds, [L1] gives a midpoint $z$ with $\operatorname{Reach}_{i-1}^G(u,z)$ and $\operatorname{Reach}_{i-1}^G(z,v)$. By the induction hypothesis there are directed paths from $u$ to $z$ and from $z$ to $v$, each of length at most $2^{i-1}$, and concatenating them gives a path from $u$ to $v$ of length at most $2^i$. [L1, ih, construct]

1.3 Conversely, suppose there is a directed path $u=v_0\to v_1\to\cdots\to v_\ell=v$ with $\ell\le 2^i$. Put $m:=\min(2^{i-1},\ell)$ and choose $z:=v_m$. Then the initial segment from $u$ to $z$ has length at most $2^{i-1}$, and the remaining segment from $z$ to $v$ has length $\ell-m\le 2^{i-1}$. The induction hypothesis gives $\operatorname{Reach}_{i-1}^G(u,z)$ and $\operatorname{Reach}_{i-1}^G(z,v)$, so [L1] yields $\operatorname{Reach}_i^G(u,v)$. [L1, ih, choose, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove the equivalence for every $i$. [step 1.1, step 1.2, step 1.3, discharge-induction] ∎


## Remarks

For $i\ge 1$, the split in step 1.3 can be pictured as follows, with $m=\min(2^{i-1},\ell)$. Each arrow represents an entire directed subpath, possibly of length zero, rather than a single arc.

```tikz
\begin{tikzpicture}
\node (u) at (0,0) {$u=v_0$};
\node (z) at (4,0) {$z=v_m$};
\node (v) at (8,0) {$v=v_\ell$};
\draw[->] (u) -- node[above] {$m\le 2^{i-1}$} (z);
\draw[->] (z) -- node[above] {$\ell-m\le 2^{i-1}$} (v);
\node at (2,-0.7) {$\mathrm{Reach}_{i-1}^G(u,z)$};
\node at (6,-0.7) {$\mathrm{Reach}_{i-1}^G(z,v)$};
\end{tikzpicture}
```

The labels below the subpaths follow from the induction hypothesis. If $\ell\le 2^{i-1}$, then $m=\ell$ and $z=v$, so the second subpath has length zero. Conversely, the two bounds give a total length at most $2^{i-1}+2^{i-1}=2^i$, as in step 1.2. The proof above is independent of this illustration.
