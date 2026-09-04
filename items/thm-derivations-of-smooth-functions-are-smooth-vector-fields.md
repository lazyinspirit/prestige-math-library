---
id: thm-derivations-of-smooth-functions-are-smooth-vector-fields
kind: theorem
title: "Derivations of smooth functions are exactly smooth vector fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-action-of-a-vector-field-on-smooth-functions, prop-a-vector-field-acts-as-a-derivation-of-smooth-functions, def-derivation-at-a-point-and-tangent-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

The assignment sending a smooth vector field $X$ to the operator
$f\mapsto Xf$ defines a bijection between smooth vector fields on $M$ and
$\mathbb R$-linear derivations $D:C^\infty(M)\to C^\infty(M)$.

## Facts & Assumptions

**Given:** An $\mathbb R$-linear derivation $D:C^\infty(M)\to C^\infty(M)$.

[L1] Every smooth vector field acts as a derivation of $C^\infty(M)$ ([[prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]]).

[L2] A derivation at a point is exactly a tangent vector at that point ([[def-derivation-at-a-point-and-tangent-space]]).

[L3] In a chart, the coordinate derivations form a basis of the tangent space ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L4] A vector field is smooth exactly when its coordinate components are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L5] For a point inside an open set there is a smooth bump function equal to $1$ on a neighbourhood of that point and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 The forward map is well defined by [L1]: every smooth vector field $X$ yields an $\mathbb R$-linear derivation $f\mapsto Xf$. [L1]

1.2 Fix $p\in M$. If global smooth functions $f$ and $g$ agree on a neighbourhood of $p$, choose an open set $W$ on which $f=g$ and use [L5] to choose $\chi:M\to [0,1]$ that is $1$ on a neighbourhood of $p$ and has support contained in $W$. Then $\chi(f-g)=0$, so evaluating the Leibniz rule for $D$ at $p$ gives $$0=D(\chi(f-g))(p)=\chi(p)D(f-g)(p)+(f-g)(p)D(\chi)(p)=D(f)(p)-D(g)(p).$$ Thus $f\mapsto D(f)(p)$ depends only on the germ of $f$ at $p$, and it defines a derivation $D_p:C_p^\infty(M)\to\mathbb R$. By [L2], there is a unique tangent vector $X_p\in T_pM$ with $X_p([f])=D_p([f])$. [L2, L5, given]

2.1 Let $p\in M$, choose a chart $(U,x^1,\dots,x^n)$ around $p$, and use [L5] again to choose $\chi:M\to [0,1]$ that is $1$ on a neighbourhood $V$ of $p$ and has support contained in $U$. For each $i$, let $\widetilde x^i$ be the global smooth function that equals $\chi x^i$ on $U$ and $0$ outside $U$. Then for every $q\in V$, the germs of $\widetilde x^i$ and $x^i$ agree at $q$, so [L3] writes $$X_q=\sum_i D(\widetilde x^i)(q)\,\frac{\partial}{\partial x^i}\Big|_q.$$ Each coefficient function $D(\widetilde x^i)|_V$ is smooth, because $D(\widetilde x^i)$ is a global smooth function. Hence [L4] makes $X$ smooth on $V$. [L3, L4, L5, step 1.2, given]

3.1 Since every point has a neighbourhood $V$ on which step 2.1 makes $X$ smooth, the pointwise-defined tangent vectors $X_p$ form a global smooth vector field $X$ on $M$. [step 1.2, step 2.1]

4.1 By construction, $Xf=D(f)$ for every smooth function $f$, so the map from smooth vector fields to derivations is surjective. If two smooth vector fields induce the same derivation, then their values at each point agree on every smooth function, hence are equal by [L2]; thus the map is injective. [L2, step 1.2, step 3.1]

5.1 Therefore smooth vector fields and $\mathbb R$-linear derivations of $C^\infty(M)$ are in bijection. [step 1.1, step 4.1] ∎
