---
id: def-anyonic-local-channel-projector
kind: definition
title: "Local anyonic channel projector"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-anyonic-fusion-path-space, def-monoidal-category, lem-anyonic-general-split-tree-recoupling, thm-anyonic-path-space-is-hilbert-under-unitarity]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§3.5, PDF pp. 14–16: orthonormal F-moves between fusion trees."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35, equation (3.68): local recoupling and channel projection."
---

## Definition

Fix a fusion-path space with repeated simple site charge $a$, a position $i$ with two adjacent $a$-labels, and a simple output $s$ of $a\otimes a$, chosen from the fixed internal representative set of [[def-anyonic-fusion-path-space]]. In the tree basis where this adjacent pair is fused first, let $\Pi_s$ be the projection onto the direct summand with pair output $s$, acting as the identity on every multiplicity index inside that channel and as zero on all other pair outputs. Let $A_i:T_{\mathrm{fixed}}\to T_{\mathrm{pair}}$ be a typed composite of associators and their inverses carrying the fixed path tree to this pair-first tree, without permuting the ordered inputs (including the boundary charge). In the split-tree bases of $\operatorname{Hom}(c,T)$, let $F_i$ be the matrix of $h\mapsto A_i\circ h$, with target coordinates as rows and source coordinates as columns. These bases and the invertibility of this general algebraic recoupling map are proved in [[lem-anyonic-general-split-tree-recoupling]]. Define the **local channel projector** in the fixed path basis by

$$P_{i,s}:=F_i^{-1}\Pi_sF_i.$$

This is an idempotent for any fusion category because $F_i$ is invertible. In a unitary fusion category with orthonormal tree bases, $F_i$ is unitary and $P_{i,s}$ is an orthogonal projection. The channel projection includes every multiplicity coordinate; the definition has no multiplicity-free restriction. The split Hom convention here is $\operatorname{Hom}(c,T)$, as in [[def-anyonic-fusion-path-space]]. In the unitary case with adjoint vertex bases, each local left-to-right split recoupling matrix is the entrywise conjugate of the QC25 inverse-precomposition F matrix, as proved in [[lem-anyonic-general-split-tree-recoupling]]; they agree for the displayed real Fibonacci and Ising blocks.

The coordinate convention is illustrated below: vectors move from the fixed tree to the pair-first tree by $F_i$, the channel projection acts there, and $F_i^{-1}$ returns to the fixed tree. The curved arrow denotes the defined composite, not an additional morphism.

```tikzcd
\mathcal H_{\mathrm{fixed}} \arrow[r,"F_i"] \arrow[rrr,bend right=35,"P_{i,s}"'] & \mathcal H_{\mathrm{pair}} \arrow[r,"\Pi_s"] & \mathcal H_{\mathrm{pair}} \arrow[r,"F_i^{-1}"] & \mathcal H_{\mathrm{fixed}}
```
