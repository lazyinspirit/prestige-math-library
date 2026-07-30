---
id: def-frechet-urysohn-and-sequential-spaces
kind: definition
title: "Fréchet–Urysohn spaces and sequential spaces"
status: published
origin: session
deps: [def-sequence-convergence-top, lem-sequential-closure-inside-closure, thm-closure-characterisation-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Definition

A topological space $X$ is **Fréchet–Urysohn** if, whenever $p\in\overline A$, there is a sequence in $A$ converging to $p$. Equivalently, $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$, since sequential closure is always contained in closure ([[lem-sequential-closure-inside-closure]]).

A subset $C\subseteq X$ is **sequentially closed** if every sequence in $C$ that converges in $X$ has its limit in $C$. The space is **sequential** if every sequentially closed subset is closed. Equivalently, $\operatorname{seqcl}(A)=A$ implies $\overline A=A$ for every $A\subseteq X$.
