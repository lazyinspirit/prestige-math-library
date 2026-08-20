---
id: cor-uniform-picard-lindelof-for-nearby-initial-values
kind: corollary
title: "Nearby initial values share one Picard–Lindelöf time interval and one state cylinder"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-picard-lindelof-local-existence-and-uniqueness, thm-extreme-value-metric, thm-heine-borel-rn]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of Picard-Lindelof at $(t_0,x_0)$, there are $h,r,\eta>0$ such that every initial value $(s,y)$ with $|s-t_0|<\eta$ and $\|y-x_0\|_2<\eta$ has a unique solution on $[s-h,s+h]$, and all these solution graphs lie in one compact time-state cylinder.

## Facts & Assumptions

**Given:** A compact cylinder contained in the open ODE domain and a smaller cylinder with positive distance from its boundary.

[L1] On a cylinder with bound $M$, state-Lipschitz constant $L$, $hM\le r$, and $Lh<1$, Picard-Lindelöf gives exactly one solution on the full interval of half-length $h$ whose graph lies in that cylinder ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[L2] A continuous real-valued function on a nonempty compact metric space has bounded image and attains its extrema ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 On the larger compact cylinder, [L2] bounds $\|F\|_2$ by a common $M$, while local state-Lipschitz continuity and a finite compact cover give a common $L$; the smaller cylinder has a positive spatial and temporal boundary margin. [given, L2]

2.1 Choose one radius $r>0$ below the spatial margin and one $h>0$ below the temporal margin so that $hM\le r$ and $Lh<1$; then [L1] applies with these same data to every initial point in the smaller cylinder, giving the asserted common time and graph cylinder. [step 1.1, L1, algebra] ∎
