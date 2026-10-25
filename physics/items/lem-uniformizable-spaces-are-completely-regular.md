---
id: lem-uniformizable-spaces-are-completely-regular
kind: lemma
title: "Assuming dependent choice, every uniformizable space is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniformizable-space, lem-normal-sequences-of-entourages, lem-pseudometric-from-a-normal-entourage-sequence, def-completely-regular-and-tychonoff-spaces, def-dependent-choice, thm-uniformity-induces-a-topology, thm-uniformly-continuous-maps-are-continuous, lem-metric-uniformity-dictionary]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** every uniformizable topological space is completely regular.

## Facts & Assumptions

**Given:** A topology induced by a uniformity, a closed $C$, a point $x\notin C$, and dependent choice.

[L1] A normal entourage sequence yields a uniformly continuous pseudometric with controlled balls ([[lem-pseudometric-from-a-normal-entourage-sequence]]).

[L2] Complete regularity requires a continuous $[0,1]$-valued function equal to $1$ at $x$ and $0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L3] Uniformly continuous maps are continuous for their induced topologies ([[thm-uniformly-continuous-maps-are-continuous]]), and the usual metric uniformity on $\mathbb R$ induces its usual topology ([[lem-metric-uniformity-dictionary]]).

[L4] Dependent choice produces the normal sequences used in the pseudometric construction ([[lem-normal-sequences-of-entourages]]).

[L5] Entourage balls form neighbourhood bases for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** constructive.

1.1 Choose an entourage $U$ with $U[x]\cap C=\varnothing$ by [L5]. Using dependent choice, take a normal sequence with $E_0=X\times X$ and $E_1\subseteq U$. [L4, L5, choose, construct]

2.1 Let $p$ be the controlled pseudometric from [L1]. Since $\{p\le1/4\}\subseteq E_1\subseteq U$, every $y\in C$ satisfies $p(x,y)>1/4$. [step 1.1, L1]

3.1 Put $g(y)=\min\{1,4p(x,y)\}$. The reverse triangle inequality for a pseudometric gives $$ |p(x,y)-p(x,z)|\le p(y,z), $$ and truncation at $1$ does not increase absolute differences. Hence, for every $\varepsilon>0$, the entourage $\{(y,z):p(y,z)<\varepsilon/4\}$ forces $|g(y)-g(z)|<\varepsilon$; $g$ is uniformly continuous. Also $g(x)=0$ and $g[C]=\{1\}$ by step 2.1, so $1-g$ has the orientation required in [L2]. [step 2.1, L1, construct]

4.1 By [L3], $1-g$ is continuous, so [L2] proves complete regularity. [step 3.1, L2, L3, discharge-construct] ∎
