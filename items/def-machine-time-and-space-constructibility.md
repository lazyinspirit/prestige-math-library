---
id: "def-machine-time-and-space-constructibility"
kind: "definition"
title: "Machine time and space constructibility"
status: published
origin: "pipeline"
deps: ["def-uniform-asymptotic-time-space-comparison"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Arora–Barak Chapter 3 constructibility conventions, adapted contract; complete source reading pending"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
---

## Definition

Use [[def-uniform-asymptotic-time-space-comparison]] and fix a nondecreasing integer-valued function $t:\mathbb N\to\mathbb N$ with $t(n)\ge n+1$. The canonical binary numeral of zero is the one-letter word $0$; every positive numeral starts with $1$, with no leading zeros. Unary input for $n$ is $1^n$, including the empty word when $n=0$.

The bound $t$ is **time constructible** in this interface if a fixed deterministic multitape transducer reads that unary input completely, writes $\operatorname{bin}(t(n))$ on its output tape, and halts in at most $C t(n)$ transitions for one fixed $C$ and all $n$. We count output cells in its space. Its actual visited workspace, including its tapes under the preceding convention, is denoted $W_t(n)$; an application must specify a bound on this quantity if it needs one.

For nondecreasing $s:\mathbb N\to\mathbb N$ with $s(n)\ge n+1$, **space constructible** means that a fixed halting transducer reads $1^n$ completely and outputs $\operatorname{bin}(s(n))$ using at most $Cs(n)$ visited cells. There is no time bound in this definition.

**Exact-clock constructibility** means the separately specified existence of a machine whose run on $1^n$ halts after exactly $t(n)$ transitions. Its initial state is nonhalting and its last transition enters a halting state; in particular a value zero would be incompatible with that convention. The guard excludes it here. This item asserts no equivalence between exact clocks, output constructors, or versions using read-only input space.

An external clock supplied as $\operatorname{bin}(b)$ is an input, not a call to a constructor. If an application instead sets $b=t(n)$ by the stated constructor, it adds the constructor's time and workspace to the subsequent algorithm's resource accounting. The $n+1$ guard includes the complete-input scan and the empty-input case. Finite exceptional lengths can be treated by finitely many literal branches, but such branches must be exhibited in any proof that uses them; no bound on an arbitrary computable function follows from this definition.
