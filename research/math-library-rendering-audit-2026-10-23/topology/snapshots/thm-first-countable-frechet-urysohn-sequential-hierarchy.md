---
id: thm-first-countable-frechet-urysohn-sequential-hierarchy
kind: theorem
title: "Assuming countable choice, every first countable space is Fréchet–Urysohn; in ZF every Fréchet–Urysohn space is sequential"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-frechet-urysohn-and-sequential-spaces, thm-first-countable-sequences-suffice, def-countable-choice, lem-sequential-closure-inside-closure]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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
    - title: "Fréchet–Urysohn space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space"
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
pipeline_run: null
---

## Statement

**Assume countable choice.** Every first countable space is Fréchet–Urysohn. In ZF, every Fréchet–Urysohn space is sequential.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] Under countable choice, first countability gives $\operatorname{seqcl}(A)=\overline A$ for every $A\subseteq X$ ([[thm-first-countable-sequences-suffice]], [[def-countable-choice]]).

[L2] $A\subseteq\operatorname{seqcl}(A)\subseteq\overline A$ for every $A$ ([[lem-sequential-closure-inside-closure]]).

[A1] A space is Fréchet--Urysohn when $\operatorname{seqcl}(A)=\overline A$ for every subset $A$, and it is sequential when every sequentially closed subset is closed ([[def-frechet-urysohn-and-sequential-spaces]]).


## Proof

**Proof technique:** direct.

1.1 Under countable choice, [L1] is exactly the defining equality for a first countable space to be Fréchet–Urysohn. [L1, A1]

1.2 Now suppose $X$ is Fréchet–Urysohn and $C$ is sequentially closed. Then $\operatorname{seqcl}(C)=C$, because the constant sequence gives $C\subseteq\operatorname{seqcl}(C)$ and sequential closedness gives the reverse inclusion. [L2]

2.1 Fréchet–Urysohnness gives $\overline C=\operatorname{seqcl}(C)=C$, so $C$ is closed. Therefore $X$ is sequential. [step 1.2, A1] ∎
