---
id: thm-rasmussen-s-bounds-smooth-four-ball-genus
kind: theorem
title: "Rasmussen's s-invariant bounds smooth four-ball genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-lee-cobordism-filtration-genus-bound
  - def-smooth-and-topological-slice-genus
  - def-rasmussen-s-invariant
  - def-countable-choice
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is used only through the existence of the smooth slice-genus minimum and the finite movie decomposition."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1"
      url: https://arxiv.org/pdf/math/0402131v1
      locator: "§4.4, printed pp. 11–12"
    - title: "Curtis T. McMullen, 4-Manifolds, Stanford lecture notes"
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: "§5.7, printed pp. 99–102"
---

## Statement

Assume the Axiom of Countable Choice. For every smooth oriented knot $K$ in the standard oriented three-sphere,
$$
|s(K)|\le 2g_4^{\mathrm{sm}}(K),
$$
where $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a connected compact orientable smooth properly embedded surface in the standard four-ball with oriented boundary $K$.

## Statement references

[[def-smooth-and-topological-slice-genus|Smooth four-ball genus]]

[[lem-lee-cobordism-filtration-genus-bound|Filtered Lee maps for connected smooth cobordisms]]

[[def-rasmussen-s-invariant|Rasmussen's s convention]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §4.4](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.7](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a knot $K$, and its smooth slice genus.

[F1] The smooth slice genus is the minimum genus of a connected smooth orientable proper surface bounded by $K$ ([[def-smooth-and-topological-slice-genus]]).

[F2] Rasmussen's convention is $s(K)=s_{\max}(K)-1$ ([[def-rasmussen-s-invariant]]).

[A1] $\mathrm{AC}_\omega$ is used by the smooth slice-genus minimum and finite movie branches ([[def-countable-choice]]).

[L1] The connected-cobordism isomorphism needed below remains conditional on the uncompleted Reidemeister III orientation-class transport in [[lem-lee-cobordism-filtration-genus-bound]].

## Proof

**Given:** The hypotheses of the Statement.

1.1 For the standard crossingless unknot diagram, the Lee complex is the one-term vector space $A_L=\mathbb Q[X]/(X^2-1)$ with basis $1,X$ in quantum degrees $1,-1$ and zero differential. Its induced filtration levels are therefore $s_{\max}(U)=1$ and $s_{\min}(U)=-1$, so [F2] gives $s(U)=0$. [F2, algebra]

1.2 Let $F\subset B^4$ be any connected smooth orientable proper surface of genus $g$ with boundary $K$. Remove the interior of a small smooth disk in the interior of $F$; the punctured surface is a connected cobordism from $K$ to the standard unknot, after identifying the punctured four-ball with $S^3\times[0,1]$. It has genus $g$ and Euler characteristic $-2g$. The product collar of $F$ at $K$ and the standard collar of the removed disk give the two boundary collars. [F1, given, construct]

2.1 Apply the Lee cobordism construction to this surface and to its reverse. If the isomorphism assertion of [L1] is supplied, each map is a filtered isomorphism of degree $-2g$. Choose a nonzero class of maximal level in $V_K$; its image is nonzero in $V_U$ and has level at least $s_{\max}(K)-2g$, which is at most $s_{\max}(U)=1$. Hence $s_{\max}(K)\le1+2g$ and $s(K)\le2g$. Apply the reverse map to a nonzero class of maximal level in $V_U$: its nonzero image in $V_K$ has level at least $1-2g$, so $s_{\max}(K)\ge1-2g$ and $s(K)\ge-2g$. [F2, L1, step 1.1, step 1.2, algebra]

3.1 Under [A1], [F1] supplies a nonempty set of smooth spanning-surface genera with a least element. Minimize $g$ over $F$ in step 1.2. Step 2.1 then gives the asserted inequality. This derivation is valid conditional on [L1]; because that local isomorphism proof is unfinished, the theorem is escalated and not marked ready. [A1, F1, L1, step 1.2, step 2.1, algebra] ∎
