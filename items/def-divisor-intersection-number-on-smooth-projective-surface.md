---
id: def-divisor-intersection-number-on-smooth-projective-surface
kind: definition
title: "Intersection numbers of Cartier divisors on a smooth projective surface"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-coherent-module-scheme
  - def-dimension-noetherian-topological-space
  - def-embedding-dimension-and-regular-local-ring
  - def-euler-characteristic-coherent-sheaf
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-noetherian-and-noetherian-scheme
  - def-picard-group-scheme
  - def-projective-morphism-pre-proj
  - def-sheaf-tensor-product
  - def-smooth-morphism-to-field-classical
  - lem-cartier-divisor-addition-tensor
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-projective-morphism-proper
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Definition

Assume the Axiom of Choice, inherited from the Euler-characteristic supplier
below ([[def-axiom-of-choice]]). Let $k$ be a field and let $X$ be an integral
([[def-integral-scheme]]), regular
([[def-embedding-dimension-and-regular-local-ring]]), projective
([[def-projective-morphism-pre-proj]]) $k$-scheme of pure dimension two
([[def-dimension-noetherian-topological-space]]). A **smooth projective
surface over $k$** is an instance: for a finite-type $k$-scheme, smoothness
over $k$ makes every local ring regular
([[def-smooth-morphism-to-field-classical]]), and a smooth projective surface
is integral by hypothesis here.

The scheme $X$ is proper over $k$ ([[thm-projective-morphism-proper]]),
integral, and of finite type over the field $k$, hence locally Noetherian
([[def-locally-noetherian-and-noetherian-scheme]]); the structure sheaf, its
dual, all invertible sheaves ([[def-invertible-sheaf]]) and all their tensor
products and duals are coherent $\mathcal O_X$-modules
([[def-coherent-module-scheme]],
[[lem-invertible-sheaf-dual-tensor-inverse]]), so the Euler characteristic
$\chi(X,-)$ of [[def-euler-characteristic-coherent-sheaf]] is defined on all
sheaves appearing below and takes values in $\mathbb Z$.

**The pairing on line bundles.** For invertible $\mathcal O_X$-modules
$\mathcal L$ and $\mathcal M$ define
$$\mathcal L\cdot\mathcal M:=\chi(X,\mathcal O_X)-\chi(X,\mathcal L^{\vee})-\chi(X,\mathcal M^{\vee})+\chi(X,\mathcal L^{\vee}\otimes_{\mathcal O_X}\mathcal M^{\vee})\in\mathbb Z,$$
the tensor product being that of [[def-sheaf-tensor-product]].

**The pairing on Cartier divisors.** For Cartier divisors $C$ and $D$ on $X$
([[def-cartier-divisor]]) with associated invertible sheaves $\mathcal O_X(C)$
and $\mathcal O_X(D)$ ([[def-invertible-sheaf-of-cartier-divisor]]) define
$$C\cdot D:=\mathcal O_X(C)\cdot\mathcal O_X(D)\in\mathbb Z.$$

**Basic properties.**

1. *Isomorphism invariance.* The value depends only on the isomorphism
   classes of $\mathcal L$ and $\mathcal M$: duals and tensor products are
   functorial under isomorphism ([[lem-invertible-sheaf-dual-tensor-inverse]],
   [[def-sheaf-tensor-product]]) and the Euler characteristic is an invariant
   of isomorphism classes ([[def-euler-characteristic-coherent-sheaf]]).
   Hence the pairing is a well-defined map
   $\operatorname{Pic}(X)\times\operatorname{Pic}(X)\to\mathbb Z$ with
   $\operatorname{Pic}(X)$ the Picard group of [[def-picard-group-scheme]].
2. *Symmetry and the structure sheaf.* The defining expression is symmetric
   in $\mathcal L$ and $\mathcal M$, so
   $\mathcal L\cdot\mathcal M=\mathcal M\cdot\mathcal L$. Substituting
   $\mathcal M=\mathcal O_X$ gives
   $\mathcal L\cdot\mathcal O_X
   =\chi(X,\mathcal O_X)-\chi(X,\mathcal L^{\vee})-\chi(X,\mathcal O_X)
   +\chi(X,\mathcal L^{\vee})=0$, and equally
   $\mathcal O_X\cdot\mathcal L=0$.
3. *Linear equivalence.* If $C'$ is linearly equivalent to $C$ and $D'$ to
   $D$, then $\mathcal O_X(C')\cong\mathcal O_X(C)$ and
   $\mathcal O_X(D')\cong\mathcal O_X(D)$: linear equivalence of Cartier
   divisors is vanishing of the class in
   $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)$, and for the integral
   $X$ the rule $D\mapsto[\mathcal O_X(D)]$ induces an isomorphism
   $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\xrightarrow{\sim}\operatorname{Pic}(X)$
   ([[thm-cartier-divisors-mod-principal-to-picard]]), with addition of
   divisors corresponding to tensor product
   ([[lem-cartier-divisor-addition-tensor]]). By part 1 the value $C\cdot D$
   depends only on these isomorphism classes, so $C'\cdot D'=C\cdot D$.

The pairing is studied in
[[thm-surface-intersection-product-bilinear-and-symmetric]], where it is
proved to be a symmetric $\mathbb Z$-bilinear form on
$\operatorname{Pic}(X)$; for an effective Cartier divisor $C\subseteq X$ the
restriction-degree identity of
[[thm-intersection-with-curve-as-degree-of-restriction]] identifies the value
with the degree of a restricted line bundle, and
[[lem-blowup-intersection-matrix-at-smooth-point]] computes it on a point
blowup.
