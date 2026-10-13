---
id: ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy
kind: example
title: "A cyclic geometric weight-zero monodromy system"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [thm-smooth-projective-gauss-manin-local-systems-are-semisimple,
       def-geometric-polarizable-hodge-variation,
       def-local-system-of-r-modules-and-its-pullback,
       def-semisimple-module,
       def-roots-of-unity-in-a-field,
       thm-jacobian-criterion-smooth-morphism,
       def-etale-morphism-schemes,
       def-axiom-of-choice,
       thm-complex-nth-roots-and-roots-of-unity,
       cor-geometric-unit-circle-has-fundamental-group-z]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; SS4.2.1-4.2.6, printed pp. 43-46 (the weight-zero case of a finite etale family)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision); SS3.2, printed p. 38 (local systems of smooth projective families)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
---

## Example

Assume AC ([[def-axiom-of-choice]]). The finite étale morphism
$f:\mathbb C^\times\to\mathbb C^\times$, $z\mapsto z^r$, for $r\ge1$, gives a
rank-$r$ geometric pure weight-zero local system $R^0f_*\mathbb Q$
([[def-geometric-polarizable-hodge-variation]],
[[def-local-system-of-r-modules-and-its-pullback]]). Its monodromy cyclically
permutes the $r$ sheets and its complexification is a direct sum of
one-dimensional root-of-unity characters
([[def-roots-of-unity-in-a-field]]).

## Verification

**Given:** The displayed map $f$, the geometric category and its realization
clause [[def-geometric-polarizable-hodge-variation]], the rational
cohomology local systems of [[def-local-system-of-r-modules-and-its-pullback]],
the Jacobian criterion [[thm-jacobian-criterion-smooth-morphism]], roots of
unity and their orders [[def-roots-of-unity-in-a-field]], their explicit complex
values [[thm-complex-nth-roots-and-roots-of-unity]], the positive generator of
the geometric unit circle [[cor-geometric-unit-circle-has-fundamental-group-z]],
and AC.

1.1 Geometric structure and the local system. The graph $\{(t,[u:v])\in\mathbb C^\times\times\mathbb P^1:u^r=tv^r\}$ is closed, and $z\mapsto(z^r,[z:1])$ identifies $\mathbb C^\times$ with it over $\mathbb C^\times$, so $f$ is projective and proper and its fibres are the $r$ distinct $r$-th roots of the base point. On coordinate rings $f$ is module-finite, the source ring being generated over the target ring by $1,z,\dots,z^{r-1}$; and it is smooth of relative dimension zero because the derivative $rz^{r-1}$ is a unit on $\mathbb C^\times$, so the Jacobian criterion [[thm-jacobian-criterion-smooth-morphism]] applies and the relative dimension is $1-1=0$, which is exactly étaleness by the definition [[def-etale-morphism-schemes]]. Thus $f$ is finite étale. Therefore $R^0f_*\mathbb Q$ is a finite-rank local system of rank $r$ in the sense of [[def-local-system-of-r-modules-and-its-pullback]]: over each base point the fibre is $H^0$ of $r$ reduced points, with the sheet-indicator functions as a rational basis, and these bases are transported by the deck identifications of the fibres. Every indicator function is locally constant of Hodge type $(0,0)$, so the local system is pure of weight zero. The standard positive definite dot product in the indicator basis is rational, flat because transport permutes the basis vectors and hence preserves the form, and positive on every fibre; it is therefore the polarization required for a geometric polarizable weight-zero variation, whose algebraic realization is $f$ itself on the open $U=\mathbb C^\times$. [given, construct, algebra]

2.1 Monodromy and semisimplicity. The homotopy $z\mapsto((1-u)+u|t_0|/|z|)z$ gives a deformation retraction of $\mathbb C^\times$ to the circle of radius $|t_0|$, fixing $t_0$ throughout. Multiplication $w\mapsto t_0w$ identifies that circle, based at $t_0$, with the geometric unit circle, based at $1$. Hence [[cor-geometric-unit-circle-has-fundamental-group-z]] makes $\gamma(t)=e^{2\pi it}t_0$ a positive generator at $t_0$. Label the roots by $z_a=\zeta^az_0$ and their indicator functions by $e_a$, where $\zeta=e^{2\pi i/r}$ has order $r$ by [[thm-complex-nth-roots-and-roots-of-unity]]. The lifted loop $t\mapsto e^{2\pi it/r}z_a$ ends at $z_{a+1}$. Covariant cohomology transport is the inverse pullback, so $T_\gamma e_a=e_{a+1}$. The left monodromy convention of [[def-local-system-of-r-modules-and-its-pullback]] uses $\rho(\gamma)=T_{\bar\gamma}$, hence $\rho(\gamma)e_a=e_{a-1}$. Therefore $v_j=\sum_{a=0}^{r-1}\zeta^{ja}e_a$ satisfies $\rho(\gamma)v_j=\zeta^jv_j$. These vectors form a basis: the geometric-sum identity $\sum_{a=0}^{r-1}\zeta^{ka}=0$ for $r\nmid k$ and $r$ otherwise gives the inverse Fourier matrix $r^{-1}(\zeta^{-ja})$. Thus the complexification is a direct sum of the $r$ distinct one-dimensional characters, including the trivial character when $r=1$, and is semisimple. Finally [[thm-smooth-projective-gauss-manin-local-systems-are-semisimple]] applies to this smooth projective morphism and proves semisimplicity over every characteristic-zero coefficient field, including fields without the $r$-th roots of unity. [step 1.1, given, construct, algebra] ∎