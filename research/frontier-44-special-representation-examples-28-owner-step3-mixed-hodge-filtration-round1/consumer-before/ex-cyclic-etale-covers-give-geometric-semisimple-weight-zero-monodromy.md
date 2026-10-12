---
id: ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy
kind: example
title: "A cyclic geometric weight-zero monodromy system"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 19
deps: [thm-smooth-projective-gauss-manin-local-systems-are-semisimple,
       def-geometric-polarizable-hodge-variation,
       def-local-system-of-r-modules-and-its-pullback,
       def-semisimple-module,
       def-roots-of-unity-in-a-field,
       thm-jacobian-criterion-smooth-morphism,
       def-etale-morphism-schemes,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
unity and their orders [[def-roots-of-unity-in-a-field]], and AC.

1.1 Geometric structure and the local system. The graph $\{(t,[u:v])\in\mathbb C^\times\times\mathbb P^1:u^r=tv^r\}$ is closed, and $z\mapsto(z^r,[z:1])$ identifies $\mathbb C^\times$ with it over $\mathbb C^\times$, so $f$ is projective and proper and its fibres are the $r$ distinct $r$-th roots of the base point. On coordinate rings $f$ is module-finite, the source ring being generated over the target ring by $1,z,\dots,z^{r-1}$; and it is smooth of relative dimension zero because the derivative $rz^{r-1}$ is a unit on $\mathbb C^\times$, so the Jacobian criterion [[thm-jacobian-criterion-smooth-morphism]] applies and the relative dimension is $1-1=0$, which is exactly étaleness by the definition [[def-etale-morphism-schemes]]. Thus $f$ is finite étale. Therefore $R^0f_*\mathbb Q$ is a finite-rank local system of rank $r$ in the sense of [[def-local-system-of-r-modules-and-its-pullback]]: over each base point the fibre is $H^0$ of $r$ reduced points, with the sheet-indicator functions as a rational basis, and these bases are transported by the deck identifications of the fibres. Every indicator function is locally constant of Hodge type $(0,0)$, so the local system is pure of weight zero. The standard positive definite dot product in the indicator basis is rational, flat because transport permutes the basis vectors and hence preserves the form, and positive on every fibre; it is therefore the polarization required for a geometric polarizable weight-zero variation, whose algebraic realization is $f$ itself on the open $U=\mathbb C^\times$. [given, construct, algebra]

2.1 Monodromy and semisimplicity. A positively oriented generator of $\pi_1(\mathbb C^\times)$ is represented by the loop $t\mapsto e^{2\pi it}t_0$; transporting the base point $t_0$ along it replaces a chosen $r$-th root $z_0$ by $\zeta z_0$ with $\zeta=e^{2\pi i/r}$, a primitive $r$-th root of unity ([[def-roots-of-unity-in-a-field]]), and hence cyclically permutes the $r$ sheet indicators. In the complexified fibre the vectors $v_j=\sum_{a=0}^{r-1}\zeta^{ja}e_a$, $j=0,\dots,r-1$, satisfy $\sigma v_j=\zeta^{-j}v_j$ for the cyclic permutation $\sigma$, and the eigenvalues $\zeta^{-j}$ are pairwise distinct because $\zeta$ has order $r$; the Vandermonde matrix $(\zeta^{ja})_{j,a}$ is therefore invertible, so the complexification is the direct sum of $r$ distinct one-dimensional characters and is semisimple ([[def-semisimple-module]]). Finally [[thm-smooth-projective-gauss-manin-local-systems-are-semisimple]], which applies because $f$ is smooth projective over the connected smooth quasiprojective base $\mathbb C^\times$, gives the same semisimplicity over every characteristic-zero coefficient field, including fields that do not contain all $r$-th roots. [step 1.1, given, algebra] ∎
