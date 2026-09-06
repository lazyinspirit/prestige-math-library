---
id: thm-deterministic-space-hierarchy
kind: theorem
title: "The deterministic space hierarchy theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-space-bounded-universal-simulation, lem-space-diagonal-machine-halts, def-dtime-ntime-dspace-and-nspace, def-asymptotic-resource-comparison]
proof_strategy: contradiction
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For all-tapes space-constructible $f,g$ with $n=O(f(n))$ and $f=o(g)$,
$$ \mathrm{DSPACE}(f(n))\subsetneq\mathrm{DSPACE}(g(n)). $$

## Facts & Assumptions

**Given:** constructible $f,g$ with $n=O(f(n))$ and $f=o(g)$.

[L1] A fixed universal simulator uses $O(n+s(n))$ all-tapes space when its coded input has length $n$ and the simulated computation uses $s(n)$ space. [[lem-space-bounded-universal-simulation]]

## Proof

**Proof technique:** contradiction.

1.1 Define a total diagonalizer $D$ on inputs of the self-delimiting form $x=\langle M,1^k\rangle$. On such an input of length $n$, universally simulate $M(x)$ inside a fixed reserved fraction of the constructible $g(n)$-space budget, and reverse its answer; reject malformed inputs and use the forced-halting configuration cutoff if the simulation does not halt within that cap. The parser, retained input, simulated configuration, and cutoff counter together use $O(n+g(n))=O(g(n))$ space. [given, L1, construct]

2.1 Suppose that a machine $M$ decides $D$ in at most $c f(n)$ space for all sufficiently large $n$. Since $n=O(f(n))$ and $f=o(g)$, sufficiently long paddings $x=\langle M,1^k\rangle$ make the simulator's $O(n+c f(n))$ space fit strictly inside the reserved $g(n)$ cap. On any such $x$, the cutoff does not fire and $D(x)$ is the opposite of $M(x)$, a contradiction. Hence $D\notin\mathrm{DSPACE}(f)$, while step 1.1 puts $D\in\mathrm{DSPACE}(g)$. The reverse class inclusion is immediate from $f=o(g)$. [step 1.1, L1, assume-contra, discharge-contradiction] ∎
