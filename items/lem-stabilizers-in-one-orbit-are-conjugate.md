---
id: lem-stabilizers-in-one-orbit-are-conjugate
kind: lemma
title: 'If $y=g\cdot x$, then $G_y=gG_xg^{-1}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orbit-and-stabilizer, def-group-action, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

Let $G$ act on $X$. If $y=g\cdot x$, then

$$G_y=gG_xg^{-1}.$$

In particular, stabilizers of points in the same orbit are conjugate and hence
isomorphic.

## Facts & Assumptions

**Given:** A left action of $G$ on $X$, points $x,y\in X$, and $g\in G$ with $y=g\cdot x$.

[L1] The stabilizer is $G_x=\{h\in G:h\cdot x=x\}$ ([[def-orbit-and-stabilizer]]).

[L2] A left action satisfies $(ab)\cdot z=a\cdot(b\cdot z)$ and $e\cdot z=z$ ([[def-group-action]]).

[L3] Conjugation $h\mapsto ghg^{-1}$ is an automorphism of $G$ ([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 For $h\in G$, one has $h\in G_y$ exactly when $h\cdot(g\cdot x)=g\cdot x$, which by [L2] is equivalent, after applying $g^{-1}$, to $(g^{-1}hg)\cdot x=x$, that is, to $g^{-1}hg\in G_x$. [L1, L2, L3]

2.1 The last condition is equivalent to $h\in gG_xg^{-1}$, so $G_y=gG_xg^{-1}$; [L3] also makes conjugation an isomorphism from $G_x$ onto $G_y$. [step 1.1, L3, algebra] ∎
