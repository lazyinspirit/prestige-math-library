---
id: thm-poincare-hopf-with-outward-pointing-boundary
kind: theorem
title: "Poincare-Hopf with outward-pointing boundary"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-for-closed-manifolds, lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold, lem-local-index-is-additive-under-a-transverse-perturbation, prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions, def-isolated-zero-and-local-index-of-a-vector-field, thm-index-of-a-nondegenerate-vector-field-zero, def-nondegenerate-zero-of-a-vector-field, def-euler-characteristic-of-a-compact-manifold, def-inward-outward-and-boundary-tangent-vectors, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-attaching-a-smooth-handle-with-corner-rounding, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, Step 3 of the proof of Theorem 1, printed pp. 40-41 (boundary case, with the outward-field convention)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Theorem 2.3.1, printed p. 33 (boundary form of Poincare-Hopf with an outward-pointing field)"
dependency_level: 8
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a compact
smooth $n$-manifold, $n\ge1$, and let $X$ be a smooth vector field with only
isolated zeros that is nonzero and strictly outward along $\partial M$
([[def-inward-outward-and-boundary-tangent-vectors]]; the boundary clause is
vacuous when $\partial M=\varnothing$). Then
$$\sum_{p:X(p)=0}\operatorname{ind}_pX=\chi(M).$$

## Facts & Assumptions

**Given:** A compact smooth $n$-manifold $M$, $n\ge1$, and a smooth field $X$ with only isolated zeros, strictly outward along $\partial M$.

[F1] If $\partial M=\varnothing$, the statement is [[thm-poincare-hopf-for-closed-manifolds]]; if $n$ is even and $\partial M\ne\varnothing$, it is [[lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold]].

[F2] Products of a boundary chart of $M$ with an endpoint half-interval give normal quadrant charts; on boundaryless interiors the ordinary product theorem applies. For odd $n$, the product $W:=M\times[0,1]$, with its two codimension-two corner strata $\partial M\times\{0\}$ and $\partial M\times\{1\}$ rounded by the standard corner-rounding convention, is a compact smooth $(n+1)$-manifold with boundary (an even-dimensional one); its boundary is the rounded version of $\partial M\times[0,1]\cup M\times\{0\}\cup M\times\{1\}$, and the rounding changes only a collar of the corner strata, so $W$ is homotopy equivalent to $M$ (the rounded product is a deformation retract of the original product: in each inward normal quadrant, slide $(r,s)$ along $(1,1)$ to the first point of the retained rounded region. The required nonnegative displacement is continuous because the rounding profile is monotone and transverse to $(1,1)$, and is zero on the retained region. Multiplying that displacement by a homotopy parameter gives a deformation fixing the rounded region, supported in the corner collar. The normal formulas agree along the corner stratum. Thus the rounded product is homotopy equivalent to $M$, so homology is unchanged and $\chi(W)=\chi(M)$) ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-attaching-a-smooth-handle-with-corner-rounding]], [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]], [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]], [[def-euler-characteristic-of-a-compact-manifold]]).

[F3] A product-type zero is nondegenerate with the product index: if $X$ has a nondegenerate zero at $p$ and $\psi(t)=t-\tfrac12$ has its simple zero at $t_0=\tfrac12$, then $Z(x,t):=\bigl(X(x),\psi(t)\partial_t\bigr)$ has a nondegenerate zero at $(p,t_0)$ with $\operatorname{ind}_{(p,t_0)}Z=\operatorname{ind}_pX\cdot\operatorname{sign}\psi'(t_0)=\operatorname{ind}_pX$; the linearization is block diagonal with blocks $DX_p$ and $\psi'(t_0)$ ([[thm-index-of-a-nondegenerate-vector-field-zero]], [[def-nondegenerate-zero-of-a-vector-field]]).

[F4] The field $Z$ is strictly outward along $\partial W$: on $\partial M\times[0,1]$ the outward normal of $W$ is the outward normal of $\partial M$ in $M$ and the inward boundary defining coordinate $r$ satisfies $dr(Z)=dr(X)<0$; on $M\times\{0\}$ the outward normal is $-\partial_t$ and $\langle Z,-\partial_t\rangle=-\psi(0)=\tfrac12>0$; on $M\times\{1\}$ the outward normal is $+\partial_t$ and $\langle Z,\partial_t\rangle=\psi(1)=\tfrac12>0$ ([[def-inward-outward-and-boundary-tangent-vectors]]). Near a lower corner use inward coordinates $r\ge0$, $s=t\ge0$; near an upper corner use $r\ge0$, $s=1-t\ge0$. In a sufficiently small uniform corner neighbourhood, both $dr(Z)<0$ and $ds(Z)<0$. Choose the standard monotone rounding whose outward conormal is $-a\,dr-b\,ds$, where $a,b\ge0$ and $a+b>0$. Its evaluation on $Z$ is strictly positive, so $Z$ stays strictly outward on every rounded face as well. The rounding is supported away from all zeros and from $t=1/2$.

[F5] Reduction to nondegenerate zeros of $X$ by [[lem-local-index-is-additive-under-a-transverse-perturbation]] can be performed inside the interior of $M$, leaving a neighbourhood of $\partial M$ fixed, hence preserving strict outwardness.

## Proof

1.1 If $\partial M=\varnothing$ or $n$ is even the statement is [F1]; assume therefore that $n$ is odd and $\partial M\ne\varnothing$. Apply [F5] to replace $X$ by a field $X_0$ with only nondegenerate zeros, the same index sum and still strictly outward, and put $W:=M\times[0,1]$ and $Z(x,t):=(X_0(x),\,(t-\tfrac12)\partial_t)$. [F2, F5, algebra]

2.1 The zeros of $Z$ are exactly the points $(p,\tfrac12)$ with $X_0(p)=0$, all interior, and by [F3] each is nondegenerate with $\operatorname{ind}_{(p,1/2)}Z=\operatorname{ind}_pX_0$; the field $Z$ is strictly outward along $\partial W$ by [F4]. Since $\dim W=n+1$ is even, the even-dimensional boundary lemma [F1] applies to $(W,Z)$ and gives $\sum_{p}\operatorname{ind}_pX_0=\sum_{(p,1/2)}\operatorname{ind}_{(p,1/2)}Z=\chi(W)=\chi(M)$ by [F2]. [F1, F2, F3, F4, step 1.1, algebra]

3.1 By step 1.1 the index sum of $X_0$ equals that of $X$, so $\sum_p\operatorname{ind}_pX=\chi(M)$; the remaining cases were handled in step 1.1, completing the proof. [F1, step 1.1, step 2.1, algebra] ∎
