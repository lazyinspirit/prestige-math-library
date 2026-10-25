---
id: cex-commuting-endomorphisms-need-not-be-diagonalisable
kind: counterexample
title: "Commuting alone does not imply simultaneous diagonalisability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Remark 5.3'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement refuted

Pairwise commutation alone forces a family of endomorphisms to be simultaneously diagonalisable.

## Facts & Assumptions

**Given:** Over any field, $J=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and the family $\{I_2,J\}$.

[L1] A family of diagonalisable endomorphisms is simultaneously diagonalisable exactly when it is pairwise commuting ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L2] A repeated linear factor in the minimal polynomial prevents diagonalisability ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity commutes with $J$, so the family is pairwise commuting. [algebra]

2.1 Since $(J-I)^2=0$ but $J-I\ne0$, the minimal polynomial of $J$ is $(x-1)^2$. Thus [L2] says $J$ is not diagonalisable, so the family cannot be simultaneously diagonalisable. The missing hypothesis in [L1] is diagonalisability of every member. [L1, L2, algebra] ∎
