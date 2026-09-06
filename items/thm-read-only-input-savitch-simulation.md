---
id: thm-read-only-input-savitch-simulation
kind: theorem
title: "Savitch simulation into read-only-input deterministic work space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-logspace-machine, def-read-only-input-workspace-classes, lem-logspace-machines-have-polynomially-many-configurations]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.12"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

Every language decided by a fixed nondeterministic read-only-input machine
using $O(\log(n+2))$ work cells is decided by a deterministic read-only-input
machine using $O(\log^2(n+2))$ work cells.

## Facts & Assumptions

**Given:** a fixed nondeterministic read-only-input logspace decider $M$.

[L1] The local work-space convention charges work cells but not read-only input cells ([[def-read-only-input-workspace-classes]]).

[L2] The number of configurations reachable from the start configuration is
polynomial in $n$ ([[lem-logspace-machines-have-polynomially-many-configurations]]).

## Proof

**Proof technique:** midpoint reachability recursion.

1.1 On input $x$, encode a configuration by its state, input-head position,
work contents, and work-head positions. There are only polynomially many
syntactically possible encodings, by the same finite product count used in
[L2]. Choose $r=O(\log(n+2))$ with $2^r$ at least that number. [L2,
construct]

2.1 Define $R(C,D,0)$ to test whether $C=D$ or $C\to D$ is one legal transition, and define $R(C,D,j+1)$ by enumerating every configuration $E$ and accepting exactly if both $R(C,E,j)$ and $R(E,D,j)$ hold. Induction on $j$ shows that it decides reachability by a path of length at most $2^j$. [step 1.1, induction]

3.1 A recursion frame stores $C,D,E$ and $j$, each using $O(\log(n+2))$ work bits; there are $r+1=O(\log(n+2))$ frames. Adjacency is recomputed from $M$ and the read-only input, never stored as a graph. [L1, step 2.1, algebra]

4.1 Enumerate accepting configurations $D$ and run $R(C_{\rm start},D,r)$. By step 2.1 this accepts exactly when $M$ has an accepting branch, and by step 3.1 it uses $O(\log^2(n+2))$ charged work space. [step 2.1, step 3.1] ∎
