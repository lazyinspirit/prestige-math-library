---
id: lem-uniformizable-spaces-are-regular
kind: lemma
title: "Every uniformizable space is regular"
status: published
origin: session
deps: [def-uniformizable-space, def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-regular-and-t3-spaces, lem-symmetric-entourages-form-a-base, def-interior-closure-boundary-top]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every uniformizable topological space is regular, in ZF.

## Facts & Assumptions

**Given:** A topology induced by a uniformity, a closed $C$, and $x\notin C$.

[L1] Entourage balls form neighbourhood bases and entourages have iterated square roots ([[thm-uniformity-induces-a-topology]], [[def-uniform-space-by-entourages]]).

[L2] Regularity separates a point from a closed set by disjoint open sets ([[def-regular-and-t3-spaces]]).

[L3] Symmetric entourages have square roots, and a point is outside the closure of a set when it has a neighbourhood disjoint from that set ([[lem-symmetric-entourages-form-a-base]], [[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 Since $X\setminus C$ is an open neighbourhood of $x$, choose an entourage $E$ with $E[x]\subseteq X\setminus C$, then choose a symmetric $D$ with $D^{\circ2}\subseteq E$. [L1, L3, choose]

1.2 Let $O$ be the union of all open subsets of $D[x]$ containing $x$. Then $O$ is open and $x\in O\subseteq D[x]$ because $D[x]$ is a neighbourhood. [L1, construct]

2.1 One has $\overline O\subseteq E[x]$. Indeed, if $y\notin E[x]$, then the neighbourhood $D[y]$ is disjoint from $O$: a point $z\in D[y]\cap O\subseteq D[y]\cap D[x]$ would give $(x,y)\in D^{\circ2}\subseteq E$ by symmetry. Hence $y\notin\overline O$ by [L3]. [step 1.1, step 1.2, L1, L3]

3.1 Since $E[x]\cap C=\varnothing$, step 2.1 gives $C\subseteq X\setminus\overline O$. The two open sets $O$ and $X\setminus\overline O$ are disjoint neighbourhoods of $x$ and $C$, so the space is regular by [L2]. [step 1.1, step 2.1, L2] ∎
