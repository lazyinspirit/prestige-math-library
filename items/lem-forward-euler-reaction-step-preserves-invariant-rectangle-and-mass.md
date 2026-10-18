---
id: lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass
kind: lemma
title: A bounded forward-Euler reaction step preserves an inward rectangle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-reaction-vector-field-and-quasipositivity
  - def-reaction-invariant-rectangle
  - def-stoichiometric-mass-invariant
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof is coordinatewise algebra.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§6, printed pp. 39–40: forward-Euler positivity under an explicit reaction Lipschitz step bound; the local proof gives the rectangle and mass version."
verification:
  precheck: pass
---

## Statement

Let $R=\prod_{i=1}^m[a_i,b_i]$ be reaction-inward for $F$ from [[def-reaction-vector-field-and-quasipositivity]]. Assume for each $i$ there is a coordinate Lipschitz constant $L_i\ge0$ such that $|F_i(z)-F_i(w)|\le L_i|z_i-w_i|$ whenever $z,w\in R$ differ only in coordinate $i$. Define
$$
\tau_R=\min_{i:L_i>0}L_i^{-1},
$$
with $\tau_R=+\infty$ if every $L_i=0$. For $z\in R$ and $0\le\tau\le\tau_R$, the forward-Euler reaction step $z^+=z+\tau F(z)$ lies in $R$. For every conservation vector $c$ on $R$, $c^Tz^+=c^Tz$; for every dissipation vector, $c^Tz^+\le c^Tz$.

## Facts & Assumptions

**Given:** An inward rectangle $R$, coordinate Lipschitz constants $L_i$, a state $z\in R$, a step $0\le\tau\le\tau_R$, and a stoichiometric vector $c$.

[F1] [[def-reaction-invariant-rectangle]]: $F_i\ge0$ on the lower face and $F_i\le0$ on the upper face of $R$.

[F2] [[def-stoichiometric-mass-invariant]]: $c^TF(z)=0$ or $c^TF(z)\le0$ throughout $R$.

[A1] The coordinate Lipschitz inequalities with constants $L_i$ in the Statement hold on $R$.

## Proof

1.1 Fix coordinate $i$ and keep the other coordinates of $z$ fixed. Let $z^-$ replace $z_i$ by $a_i$. By [F1], $F_i(z^-)\ge0$; hence [A1] gives $F_i(z)\ge-L_i(z_i-a_i)$. Similarly, let $z^+$ replace $z_i$ by $b_i$. Then [F1] and [A1] give $F_i(z)\le L_i(b_i-z_i)$. [A1, F1, given, construct]

2.1 If $L_i>0$, the lower estimate yields $z_i+\tau F_i(z)-a_i\ge(1-\tau L_i)(z_i-a_i)\ge0$, and the upper estimate yields $b_i-z_i-\tau F_i(z)\ge(1-\tau L_i)(b_i-z_i)\ge0$. If $L_i=0$, [A1] makes $F_i$ independent of $z_i$ on the coordinate interval; its lower and upper face signs force $F_i(z)=0$. Thus every coordinate of $z^+$ lies in its interval. [A1, F1, step 1.1, algebra]

3.1 The Euler formula gives $c^Tz^+=c^Tz+\tau c^TF(z)$. Apply [F2] to get equality for a conservation vector and the claimed inequality for a dissipation vector. [F2, given, algebra] ∎
