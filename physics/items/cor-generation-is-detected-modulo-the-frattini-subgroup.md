---
id: cor-generation-is-detected-modulo-the-frattini-subgroup
kind: corollary
title: "Generation of a finite group is detected modulo its Frattini subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-frattini-subgroup-is-characteristic, def-frattini-subgroup-of-a-finite-group, lem-frattini-subgroup-nongenerator-characterization, thm-correspondence-theorem-groups]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 2.18"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "K. Conrad, Generating Sets, Theorem 6.12"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Statement

A subset $S$ of a finite group $G$ generates $G$ if and only if its image generates $G/\Phi(G)$ ([[def-frattini-subgroup-of-a-finite-group]]).

## Facts & Assumptions

**Given:** A finite group $G$, its normal subgroup $\Phi(G)$ from [[lem-frattini-subgroup-is-characteristic]], the quotient map $\pi:G\to G/\Phi(G)$, and a subset $S\subseteq G$.

[L1] For a finite group $G$, an element $x$ lies in $\Phi(G)$ if and only if, for every subset $T\subseteq G$, $\langle T,x\rangle=G$ implies $\langle T\rangle=G$ ([[lem-frattini-subgroup-nongenerator-characterization]]).

[L2] For $N\trianglelefteq G$, subgroups of $G/N$ correspond inclusion-preservingly to subgroups of $G$ containing $N$ ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 If $\langle S\rangle=G$, then applying the quotient map gives $\langle\pi(S)\rangle=G/\Phi(G)$. [given, L2]

1.2 Conversely, suppose $\pi(S)$ generates the quotient. Then $\langle S,\Phi(G)\rangle=G$. The subgroup $\Phi(G)$ is finite, so list its elements and remove them one at a time from this generating set: [L1] says each is a nongenerator. After all have been removed, $\langle S\rangle=G$. [given, L1, algebra]

2.1 Steps 1.1 and 1.2 prove both implications. When $G=1$, both the empty subset and its empty quotient image generate, so the boundary case also agrees. [step 1.1, step 1.2, L2] ∎
