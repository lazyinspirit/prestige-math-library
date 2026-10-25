---
id: thm-deterministic-space-hierarchy
kind: theorem
title: "The deterministic space hierarchy theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-space-bounded-universal-simulation, lem-space-diagonal-machine-halts, def-dtime-ntime-dspace-and-nspace]
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local fixed-encoded-cap diagonal proof and direct prerequisite repair; not independent review"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For all-tapes space-constructible $f,g$ with $n=O(f(n))$ and $f=o(g)$,
$$ \mathrm{DSPACE}(f(n))\subsetneq\mathrm{DSPACE}(g(n)). $$

## Facts & Assumptions

**Given:** functions $f,g:\mathbb N\to\mathbb N$ satisfying the stated bounds. Here a function $h$ is all-tapes space constructible when a fixed deterministic machine, on $1^n$, halts with the binary numeral of $h(n)$ using $O(h(n))$ visited cells. The notation $f=o(g)$ means that for every real $\varepsilon>0$, eventually $f(n)\le\varepsilon g(n)$; in this theorem $g(n)>0$ eventually. Big-O and the space classes have the meaning of [[def-dtime-ntime-dspace-and-nspace]]. Finitely many exceptional lengths can be handled by fixed finite control.

[L1] For every fixed simulated machine $M$, its computation using $S$ cells on an input of length $n$ has a universal simulation using $O_M(n+S)$ space. Capping the entire encoded simulation and scratch at $B$ gives a uniform $O(n+B+1)$ bound, and fixed-$M$ computations with $n+S=o(B)$ eventually fit. This is [[lem-space-bounded-universal-simulation]].

[L2] A fixed encoded-cap simulator can be timed out after its own finite configuration bound in $O(n+B+1)$ space, preserving every non-aborted halting answer, by the fixed-simulator counting argument of [[lem-space-diagonal-machine-halts]].

## Proof

**Proof technique:** contradiction.

1.1 Define a diagonal decider $D$ on strings $z=1^{|e|}0e01^k$, where $e$ is a valid finite machine description and $k\ge0$. Reject malformed strings. On a valid string of length $n$, compute $g(n)$ using its fixed constructor and simulate the described machine $M$ on the entire original string $z$, capping all encoded simulation and scratch at $B=\max\{1,g(n)\}$. The parser and any coded description/input copy cost $O(n)$ space. Use [L2] with the size of this fixed capped simulator's actual storage, which is $O(n+B)$, to force halting; on cap overflow or timeout reject, and on simulated halting return the opposite answer. The constructor costs $O(g(n))$, and $n=O(f(n))$ with $f=o(g)$ implies $n=O(g(n))$. Hence $D$ is a total $O(g(n))$-space decider. [given, L1, L2, construct]

2.1 Suppose a fixed machine $M$ decides the language of $D$ in at most $c f(n)$ cells for sufficiently large $n$. For its fixed description $e$, the strings in step 1.1 exist at every sufficiently large length. The space needed for faithful simulation is $O_M(n+c f(n))=o(g(n))$, so sufficiently long such strings do not trigger the encoded cap. Since $M$ halts, [L2] also guarantees that the timeout does not prevent its answer. On such a string $z$, $D(z)$ is therefore the opposite of $M(z)$, a contradiction. Thus the language of $D$ is outside $\mathrm{DSPACE}(f)$, while step 1.1 puts it in $\mathrm{DSPACE}(g)$. Finally $f=O(g)$ gives the ordinary class inclusion. [step 1.1, L1, L2, assume-contra, discharge-contradiction] ∎
