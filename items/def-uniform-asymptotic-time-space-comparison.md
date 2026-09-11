---
id: "def-uniform-asymptotic-time-space-comparison"
kind: "definition"
title: "Uniform asymptotic time space comparison"
status: "draft"
origin: "pipeline"
deps: ["def-natural-numbers", "def-multitape-and-nondeterministic-machines"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora–Barak §§1.2–1.3; local explicit uniform-constant and small-input conventions"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

For $f,g:\mathbb N\to[0,\infty)$, write $f=O(g)$ if there are real $C>0$ and $N\in\mathbb N$ such that $f(n)\le Cg(n)$ for every $n\ge N$. Write $f=o(g)$ if for every real $\varepsilon>0$ there is $N\in\mathbb N$ such that $f(n)\le\varepsilon g(n)$ for every $n\ge N$. Neither notation divides by $g(n)$: zeros of $g$ require zeros of $f$ on the relevant tail. The naturals include zero as in [[def-natural-numbers]].

The resource conventions below apply to deterministic multitape machines. Such a machine has a fixed finite alphabet and a fixed positive finite number of right-infinite tapes as in [[def-multitape-and-nondeterministic-machines]]. For this resource interface, fix the following local run conventions: the initial state is $q_0$, every head starts at cell zero, the input word occupies the first tape starting at zero, and all other cells on all tapes are blank. On each tape a left move from cell $h$ goes to $\max\{h-1,0\}$ and a right move goes to $h+1$. Time is the number of executed transitions. For a finite run, space is the sum, over tapes, of the numbers of cells actually scanned, including each initial head cell. A head moves by at most one cell, so its scanned cells form an initial segment. Initialized but unscanned input is not part of this visited-cell count; an interpreter which stores the entire input pays a separate input-length term.

For a deterministic machine halting on every input, its worst-case time at length $n$ is the maximum of the finite run times on the finitely many words of that length; likewise for space. If there are no words of that length set the maximum to zero. If a run does not halt, no finite all-input time bound is asserted. A maximum over a nonempty finite list exists by taking the larger of the current maximum and the next entry; no selection principle is needed. No nondeterministic branch-cost convention is defined in this item.

In $O_M$, the constants $C,N$ may depend on the fixed finite description $M$, but not on the input word, its length, or an external clock value. For a two-parameter estimate $T_M(x,b)=O_M(G(n,b))$ meant to include short inputs and clocks, the convention is a single $C_M$ with $T_M(x,b)\le C_M G(n,b)$ for every valid $(x,b)$, including $b=0,1$. When a constructor or algorithm reads the whole input, resource bounds here have the explicit lower guard $n+1$. Space that excludes a read-only input tape must be labelled separately; it is not the default visited-cell convention.
