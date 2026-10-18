---
id: thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass
kind: theorem
title: Inward reaction fields preserve rectangles and stoichiometric mass
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-reaction-vector-field-and-quasipositivity
  - def-reaction-invariant-rectangle
  - def-stoichiometric-mass-invariant
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-gronwall-integral-inequality
  - thm-ftc-second-part
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the proof is finite-dimensional and uses scalar Gronwall.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§4, printed pp. 26–27: inward boundary signs for positive semidiscrete reaction ODEs; the local proof supplies the full rectangle argument."
verification:
  precheck: pass
---

## Statement

Let $R=\prod_{i=1}^m[a_i,b_i]$ be the reaction-inward rectangle of [[def-reaction-invariant-rectangle]]. Assume $F$ from [[def-reaction-vector-field-and-quasipositivity]] is continuously differentiable on an open neighborhood of $R$, and its derivative is bounded on some closed neighborhood of $R$. For any $z_0\in R$, the IVP $z'=F(z)$ has a unique solution for every $t\ge0$, and $z(t)\in R$. If $c$ is a conservation vector on $R$, then $c^Tz(t)=c^Tz_0$; if it is a dissipation vector, then $c^Tz(t)$ is nonincreasing. When every $a_i=0$, quasi-positivity implies the lower-face condition on $R$; upper-face inwardness remains a separate hypothesis.

## Facts & Assumptions

**Given:** A compact rectangle $R$, a $C^1$ reaction field on a neighborhood with bounded derivative there, inward signs on every lower and upper face, and a stoichiometric vector $c$ on $R$.

[F1] [[def-reaction-invariant-rectangle]]: the rectangle is reaction-inward exactly when the lower-face signs are $F_i\ge0$ and upper-face signs are $F_i\le0$.

[F2] [[def-stoichiometric-mass-invariant]]: $c^TF=0$ on $R$ for conservation, or $c^TF\le0$ on $R$ for dissipation.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous field locally Lipschitz in the state variable has a unique local solution through each point of its open domain.

[F4] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: a Picard–Lindelöf IVP has a unique maximal solution, and any other solution through the same data is its restriction.

[F5] [[thm-gronwall-integral-inequality]]: if a continuous nonnegative $V$ satisfies $V(t)\le C\int_0^tV(s)\,ds$, then $V(t)=0$.

[F6] [[thm-ftc-second-part]]: the integral of a continuous derivative on a compact interval is the endpoint difference.

[A1] Because $R$ is compact and $U$ is open, and $DF$ is bounded on some closed neighborhood of $R$, choose $\delta>0$ small enough that the closed convex neighborhood $R_\delta=R+\overline B_\delta$ is contained both in $U$ and in that bounded neighborhood. Then $DF$ is bounded on $R_\delta$, so $F$ is Lipschitz there with a constant $L$, and compactness gives $M_F=\sup_{R_\delta}\|F\|<\infty$.

## Proof

1.1 Let $z(t)$ be the unique local solution from [F3] and let $p(t)$ be the coordinatewise projection of $z(t)$ onto $R$. While $z(t)\in R_\delta$, define $V(t)=\sum_i((a_i-z_i(t))_+^2+(z_i(t)-b_i)_+^2)$, where $x_+=\max(x,0)$. The squared positive-part function is continuously differentiable. If $z_i<a_i$, then $p_i=a_i$ and [F1], [A1] give $F_i(z)\ge F_i(p)-L\|z-p\|\ge-L\|z-p\|$; if $z_i>b_i$, then $p_i=b_i$ and $F_i(z)\le F_i(p)+L\|z-p\|\le L\|z-p\|$. Differentiating the active terms of $V$ therefore yields $V'(t)\le C_m L V(t)$ for a finite constant $C_m$ depending only on $m$. [A1, F1, F3, given, algebra]

2.1 Since $V(0)=0$, integrating $V'(t)\le C_mLV(t)$ gives $0\le V(t)\le C_mL\int_0^tV(s)\,ds$ on any initial interval where $z$ remains in $R_\delta$. Apply Gronwall's inequality [F5] to obtain $V(t)=0$. Thus $z(t)$ cannot leave $R$ on its local interval of existence. [step 1.1, F5, given]

3.1 The field is bounded by $M_F$ on $R$ by [A1]. If a maximal solution interval had a finite right endpoint $T_*$, then $\|z(t)-z(s)\|\le M_F|t-s|$ for $s,t<T_*$, so $z(t)$ has a limit $z_*\in R$ as $t\uparrow T_*$. The open domain contains $z_*$, so [F3] gives a solution starting at $(T_*,z_*)$; local uniqueness in [F3] joins it to the original solution, contradicting maximality [F4]. Hence the solution exists for every $t\ge0$, and step 2.1 keeps it in $R$. [A1, F3, F4, F6, step 2.1, algebra]

4.1 Along the solution, $\frac d{dt}(c^Tz(t))=c^TF(z(t))$. By [F2] this derivative is zero in the conservation case and nonpositive in the dissipation case. Integrating over $[0,t]$ proves the corresponding mass conclusion. [F2, F6, given, algebra] ∎
