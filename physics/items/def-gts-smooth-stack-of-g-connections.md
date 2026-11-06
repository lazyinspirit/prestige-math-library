---
id: def-gts-smooth-stack-of-g-connections
kind: definition
title: Smooth moduli stack of G-connections and its forms
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps:
  - def-lie-group
  - def-smooth-manifold
  - def-derivation-at-a-point-and-tangent-space
  - def-smooth-differential-k-form
justified_by: []
dependency_roles:
  def-lie-group: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Daniel Grady, On the differential K-theory of moduli stacks
      url: https://arxiv.org/pdf/2501.03108v2
      locator: Definitions 2.1 and 3.1–3.4; the nerve model for B-nabla-G and totalized de Rham forms.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For a smooth manifold $N$ and $x\in N$, use the tangent space $T_xN$ of derivations of the algebra of smooth function germs at $x$: its elements are real-linear maps $D:C_x^\infty(N)\to\mathbb R$ satisfying $D(fg)=f(x)D(g)+g(x)D(f)$. For a smooth map $F:N\to P$, define $dF_x(D)(h)=D(h\circ F)$. Let $G$ be a finite-dimensional real Lie group, let $e$ be its identity, and set $\mathfrak g:=T_eG$. Let $\mathrm{Cart}$ be the site whose objects are open subsets of finite-dimensional Euclidean spaces diffeomorphic to $\mathbb R^m$, whose maps are smooth, and whose covers are good open covers, meaning that every finite nonempty intersection of cover members is diffeomorphic to a Euclidean space. For a test object $U$, write $\Omega^1(U;\mathfrak g)=\Gamma^\infty(U,T^*U\otimes_{\mathbb R}\mathfrak g)$; objects of the action groupoid are forms $\mathcal A\in\Omega^1(U;\mathfrak g)$ and arrows are smooth maps $g:U\to G$ from $\mathcal A$ to $\mathcal A\cdot g$, with identity the constant map $1$ and composition pointwise group multiplication. Fix the right-action convention

$$\mathcal A\cdot g:=\operatorname{Ad}_{g^{-1}}\mathcal A+g^*\theta^L,$$

where $\operatorname{Ad}_{g^{-1}}$ is the derivative at $e$ of conjugation by $g^{-1}$ and $\theta^L_h:=d(L_{h^{-1}})_h:T_hG\to T_eG$ is the left Maurer–Cartan form. For smooth maps $g,h:U\to G$, the Maurer–Cartan pullback identity $(gh)^*\theta^L=\operatorname{Ad}_{h^{-1}}(g^*\theta^L)+h^*\theta^L$ follows from $d\mu_{(g,h)}(v,w)=d(R_h)_g(v)+d(L_g)_h(w)$ for the group multiplication $\mu$. Substitution gives $(\mathcal A\cdot g)\cdot h=\mathcal A\cdot(gh)$. The convention is equivalent by $g\mapsto g^{-1}$ to the usual left gauge-action convention. The simplicial presheaf nerve, with descent imposed for the good-cover topology, is the smooth stack $\mathbf B_{\nabla}G$. For each $p\geq0$, let $S_p(U)=\Omega^1(U;\mathfrak g)\times C^\infty(U,G)^p$ be the set of $p$-simplices and let $C_p(U)=\mathbb Z[S_p(U)]$ be the free abelian group on that set. The face maps induce homomorphisms on these groups; with $\partial_p=\sum_{i=0}^p(-1)^i(d_i)_\#$ they form a chain complex of presheaves $C_\bullet(\mathbf B_{\nabla}G)$, with $\partial_0=0$. For scalar forms in the following complexes, set $\Omega^q(U):=\Gamma^\infty(U,\bigwedge^qT^*U)\otimes_{\mathbb R}\mathbb C$, the complexification of real smooth forms, with complex-linear exterior differential and wedge product. This scalar convention does not change the real $\mathfrak g$-valued connection forms above. For a finite-type graded complex algebra $A$, place $\Omega^q(U)\otimes_\mathbb C A^j$ in chain degree $j-q$ and give $\Omega^*(-;A)$ the differential induced by $d_{\mathrm{dR}}$ with the graded tensor signs. Define the complex of forms by the enriched internal Hom in chain complexes of presheaves

$$\Omega^*(\mathbf B_{\nabla}G;A):=\operatorname{Hom}_{\mathrm{Ch}}(C(\mathbf B_{\nabla}G),\Omega^*(-;A)),$$

where $\Omega^*(-;A)=\Omega^*(-)\otimes_\mathbb C A$ is the de Rham form presheaf with the graded tensor-product sign convention. Write $\Omega_r(U;A)=\bigoplus_{j-q=r}\Omega^q(U)\otimes_\mathbb C A^j$ for the chain-degree-$r$ component. Explicitly, an internal-Hom element of chain degree $n$ is a family of natural homomorphisms $f_p:C_p\to\Omega_{p+n}(-;A)$, and its differential is $Df=d_{\Omega}f-(-1)^n f\partial$. Thus simplicial levels are linearized before the Hom is formed, rather than treated as chain groups merely because they are sets. Put $\mathfrak g^\vee:=\operatorname{Hom}_{\mathbb R}(\mathfrak g,\mathbb C)\cong\operatorname{Hom}_{\mathbb R}(\mathfrak g,\mathbb R)\otimes_{\mathbb R}\mathbb C$, with action $(g\cdot\ell)(v)=\ell(\operatorname{Ad}_{g^{-1}}v)$. Invariant polynomials are defined as the complex algebra $I^*(\mathfrak g^\vee)=\operatorname{Sym}_{\mathbb C}^*(\mathfrak g^\vee)^G$, graded by twice polynomial degree; no Chern–Weil isomorphism for arbitrary $G$ is part of this definition.

## Definition references

[[def-lie-group]]

[[def-smooth-manifold]]

[[def-derivation-at-a-point-and-tangent-space]]

[[def-smooth-differential-k-form]]

## Remarks

The form complex is the total Hom complex of the resulting simplicial presheaf and the de Rham form sheaf.

The simplicial model and grading follow Grady’s conventions. The source proves the relevant invariant-form identifications under its stated hypotheses; they are not inferred here from the existence of the stack.
