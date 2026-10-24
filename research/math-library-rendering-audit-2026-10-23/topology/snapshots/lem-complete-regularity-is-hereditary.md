---
id: lem-complete-regularity-is-hereditary
kind: lemma
title: "Complete regularity is hereditary, without a hidden $T_1$ hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completely-regular-and-tychonoff-spaces, def-subspace-topology-top, thm-continuity-characterisations-top, def-hereditary-property]
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
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

Complete regularity, with no $T_1$ condition built into its name, is hereditary.

## Facts & Assumptions

**Given:** A completely regular space $X$, a subspace $S\subseteq X$, a closed set $F$ of $S$, and $x\in S\setminus F$.

[F1] A closed subset of $S$ has the form $C\cap S$ for a closed $C\subseteq X$ ([[def-subspace-topology-top]]).

[F2] Complete regularity supplies a continuous $f:X\to[0,1]$ with $f(x)=1$ and $f[C]=\{0\}$ when $C$ is closed and misses $x$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L1] A restriction of a continuous map to a subspace is continuous ([[def-subspace-topology-top]], [[thm-continuity-characterisations-top]]).

## Proof

**Proof technique:** direct.

1.1 Choose closed $C\subseteq X$ with $F=C\cap S$; since $x\in S\setminus F$, one has $x\notin C$. [F1]

1.2 Choose $f:X\to[0,1]$ continuous with $f(x)=1$ and $f[C]=\{0\}$. [F2]

2.1 The restriction $f|_S:S\to[0,1]$ is continuous, takes $x$ to $1$, and vanishes on $F\subseteq C$. [L1, step 1.2]

3.1 Thus $S$ is completely regular, and the arbitrariness of $S$ proves heredity. [F2, step 2.1] ∎
