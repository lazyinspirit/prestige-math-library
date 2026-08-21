---
id: lem-picard-operator-is-a-short-time-contraction
kind: lemma
title: "A state-Lipschitz vector field makes the Picard operator a contraction when $Lh<1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-lipschitz-in-the-state-variable, def-picard-operator-and-picard-iterates, lem-picard-operator-preserves-a-closed-curve-ball, thm-norm-inequality-for-the-vector-valued-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
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

On the invariant curve ball of [[lem-picard-operator-preserves-a-closed-curve-ball]], suppose $F$ has state-Lipschitz constant $L\ge0$. Then

$$d_\infty(\mathcal Tx,\mathcal Ty)\le Lh\,d_\infty(x,y).$$

In particular, if $Lh<1$, the Picard operator is a contraction.

## Facts & Assumptions

**Given:** Curves $x,y$ in the invariant ball and a state-Lipschitz constant $L$.

[L1] For an integrable vector-valued function on $[a,b]$ with $a\le b$, $\left\|\int_a^b f\right\|_2\le\int_a^b\|f\|_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L2] On every compact time-state cylinder the state-variable inequality holds with one finite constant $L$ ([[def-locally-lipschitz-in-the-state-variable]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the two Picard images and applying [L1] and [L2] gives $\|(\mathcal Tx)(t)-(\mathcal Ty)(t)\|_2\le L|t-t_0|d_\infty(x,y)$ for every $t$ in the cylinder. [given, L1, L2]

2.1 Taking the supremum and using $|t-t_0|\le h$ gives the displayed estimate; if $Lh<1$ this is a contraction, while $L=0$ gives contraction constant $0$. [step 1.1, algebra] ∎
