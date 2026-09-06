---
id: lem-logspace-reductions-compose
kind: lemma
title: "Logspace reductions compose"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-l-and-nl, def-logspace-many-one-reduction]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Lemma 3.15"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

If $A\leq_{\log}B$ and $B\leq_{\log}C$, then $A\leq_{\log}C$. In particular,
L and NL are closed under inverse logspace many-one reductions: if
$A\leq_{\log}B$ and $B$ is in the indicated class, then $A$ is too.

## Facts & Assumptions

**Given:** logspace reductions $f:A\to B$ and $g:B\to C$.

[L1] A logspace reduction has polynomial output length and permits bitwise recomputation of its write-only output ([[def-logspace-many-one-reduction]]).

## Proof

**Proof technique:** virtual-tape simulation.

1.1 Simulate the transducer for $g$ on a virtual input tape containing $f(x)$, retaining its work tape and its virtual input-head index $j$. [given, construct]

2.1 Whenever the simulation reads virtual cell $j$, rerun the transducer for $f$ on $(x,j)$ and supply its $j$th output bit; [L1] makes this a logarithmic-work-space subroutine. [L1, step 1.1, construct]

3.1 Since $|f(x)|$ is polynomial in $|x|$, both $j$ and the simulated work tape use $O(\log|x|)$ space. The streamed output is $g(f(x))$, so $x\in A$ iff it lies in $C$. [L1, step 2.1, algebra]

4.1 To decide $A$ from a deterministic or nondeterministic decider for $B$, run that decider on the same virtual input $f(x)$ rather than the transducer for $g$. The virtual-input access above preserves its deterministic or nondeterministic choice and its logarithmic work bound, proving the stated L or NL closure. [step 2.1, step 3.1, cases] ∎
