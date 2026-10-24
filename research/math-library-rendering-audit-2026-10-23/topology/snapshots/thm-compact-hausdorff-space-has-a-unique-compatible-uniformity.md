---
id: thm-compact-hausdorff-space-has-a-unique-compatible-uniformity
kind: theorem
title: "A nonempty compact Hausdorff space carries exactly one compatible uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-hausdorff-open-cover-uniformity, lem-entourage-and-uniform-cover-dictionary, def-uniform-space-by-entourages, lem-finite-star-refinement-for-compact-hausdorff-spaces, lem-symmetric-entourages-form-a-base, thm-uniformity-induces-a-topology, def-compact-space, def-uniformizable-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

A nonempty compact Hausdorff topology carries exactly one compatible uniformity.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff topology on $X$.

[L1] Its open covers form a compatible uniform-cover structure ([[thm-compact-hausdorff-open-cover-uniformity]]).

[L2] Uniform-cover and entourage structures determine each other ([[lem-entourage-and-uniform-cover-dictionary]]).

[L3] A compatible uniformity is one whose induced topology is the given topology ([[def-uniformizable-space]]).

[L4] Entourage balls form neighbourhood bases, symmetric entourages have square roots, and compactness supplies finite subcovers ([[thm-uniformity-induces-a-topology]], [[lem-symmetric-entourages-form-a-base]], [[def-compact-space]]).

[L5] Every open cover of a compact Hausdorff space has a finite open star-refinement ([[lem-finite-star-refinement-for-compact-hausdorff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the cover structure of [L1] to obtain one compatible entourage uniformity. [L1, L2]

1.2 Let $\mathcal U$ be any compatible uniformity. Each entourage-ball cover admits an open refinement because every ball is a neighbourhood in the induced topology, so every cover uniform for $\mathcal U$ admits an open refinement. [L2, L3, L4]

1.3 Conversely, let $\mathcal O$ be an open cover and take a finite open star-refinement $\mathcal W$ by [L5]. Form the family of all open sets $N$ for which there are $x\in N$, $W\in\mathcal W$, and a symmetric entourage $D$ satisfying $N\subseteq D[x]$ and $D^{\circ2}[x]\subseteq W$. This family covers $X$: given $x$, first take $W\in\mathcal W$ containing it, then use compatibility and a symmetric square root to obtain such $D$ and an open neighbourhood $N\subseteq D[x]$. Compactness gives finitely many witnesses $(N_i,x_i,W_i,D_i)$ covering $X$. Put $D=\bigcap_iD_i$. If $y\in N_i$ and $z\in D[y]$, then symmetry gives $x_iD_i yD_i z$, so $z\in D_i^{\circ2}[x_i]\subseteq W_i$. Hence the $D$-ball cover refines $\mathcal W$, and therefore refines $\mathcal O$. Thus every open cover is uniform for $\mathcal U$. [L3, L4, L5, choose]

2.1 By steps 1.2 and 1.3, the cover structure associated to $\mathcal U$ consists exactly of the covers admitting an open refinement, which is the structure in [L1]. [L1, step 1.2, step 1.3]

3.1 The dictionary [L2] then recovers the same entourage uniformity from either structure, proving uniqueness. [step 1.1, step 2.1, L2] ∎
