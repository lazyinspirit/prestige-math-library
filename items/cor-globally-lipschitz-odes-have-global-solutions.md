---
id: cor-globally-lipschitz-odes-have-global-solutions
kind: corollary
title: "A globally state-Lipschitz vector field on $\\mathbb R\\times\\mathbb R^n$ has global solutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-finite-maximal-time-forces-escape-from-every-compact-set, thm-gronwall-integral-inequality, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-extreme-value-metric, thm-heine-borel-rn]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
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

Let $F:\mathbb R\times\mathbb R^n\to\mathbb R^n$ be continuous and suppose one $L\ge0$ satisfies $\|F(t,x)-F(t,y)\|_2\le L\|x-y\|_2$ for all $t,x,y$. Then every IVP for $x'=F(t,x)$ has a unique global solution.

## Facts & Assumptions

**Given:** The globally state-Lipschitz field and its maximal solution.

[L1] Gronwall bounds a nonnegative function by its forcing and a linear integral term ([[thm-gronwall-integral-inequality]]).

[L2] At a finite maximal endpoint the solution leaves every compact subset of the ODE domain ([[cor-finite-maximal-time-forces-escape-from-every-compact-set]]).

[L3] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

[L4] A solution satisfies its associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L5] Closed bounded subsets of $\mathbb R^n$ are compact ([[thm-heine-borel-rn]]).

[L6] Every Picard–Lindelöf IVP has a unique maximal solution, and every other solution through the same data is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $x$ be the unique maximal solution supplied by [L6], and suppose, for contradiction, that one of its maximal endpoints is finite. On a finite time slab reaching toward it, [L3] bounds $\|F(t,0)\|_2$ by $M$ and global Lipschitz continuity gives $\|F(t,x)\|_2\le M+L\|x\|_2$; [L4] and [L1] therefore bound $\|x(t)\|_2$ throughout the slab. [given, L1, L3, L4, L6, assume-contra]

2.1 By [L5], step 1.1 places the graph near that endpoint in a compact time-state box, contradicting [L2]; hence both endpoints are infinite and the solution is global. [step 1.1, L2, L5, discharge-contradiction] ∎
