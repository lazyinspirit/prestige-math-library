---
id: def-fi-category-and-fi-module
kind: definition
title: "The category FI and FI-modules over a commutative ring"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-category,
       def-functor-and-contravariant-functor,
       def-finite-symmetric-group-and-permutation-notation,
       def-left-and-right-modules,
       def-commutative-ring,
       def-group-ring,
       def-submodule,
       def-quotient-module,
       def-abelian-category,
       thm-modules-over-a-ring-form-an-abelian-category,
       thm-group-actions-and-group-ring-modules-correspond]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Definition 1.1, printed p. 2; Definitions 2.1.1, 2.1.2 (abelian structure) and 2.1.4, printed pp. 11–12; Definition 2.2.1 and the following paragraph on FB-modules (“no additional data such as maps between them”), printed p. 12"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "§2.1, printed pp. 9–10: FI-Mod = [FI, R-Mod] is abelian with kernels and cokernels computed pointwise, and sub-FI-modules are the pointwise submodules preserved by all transition maps"
---

## Definition

Let $FI$ be the category ([[def-category]]) whose objects are the finite sets and
whose morphisms are the injections; composition is composition of functions and
identities are identity functions. Every finite set $S$ is in bijection with
exactly one of the sets $[n]:=\{0,1,\dots,n-1\}$, $n\ge0$, and injections
between these representatives form a full skeletal subcategory: its inclusion
is fully faithful, and every object of $FI$ is isomorphic to one of its
objects. This skeletal description requires no simultaneous selection of
bijections or quasi-inverse on the class of all finite sets;
under the realization $S_n=\operatorname{Sym}(\{0,\dots,n-1\})$ of
[[def-finite-symmetric-group-and-permutation-notation]] this gives
$\operatorname{End}_{FI}([n])=S_n$ for every $n\ge0$, and between different
objects there are no endomorphisms.

An **FI-module over a commutative ring $k$** ([[def-commutative-ring]]) is a
covariant functor $V\colon FI\to k\text{-}\mathrm{Mod}$
([[def-functor-and-contravariant-functor]],
[[def-left-and-right-modules]]). Write $V_S:=V(S)$, $V_n:=V([n])$ and
$f_*:=V(f)\colon V_S\to V_T$ for a morphism $f\colon S\to T$; functoriality
means $(g\circ f)_*=g_*\circ f_*$ and $(\mathrm{id}_S)_*=\mathrm{id}_{V_S}$.
Since $\operatorname{End}_{FI}([n])=S_n$, the maps $V_n\to V_n$ induced by
permutations make $V_n$ a left $kS_n$-module via the group ring
([[def-group-ring]], [[thm-group-actions-and-group-ring-modules-correspond]]):
functoriality gives $\sigma_*\tau_*=(\sigma\tau)_*$ and
${(\mathrm{id})}_*=\mathrm{id}$, and the group-ring axioms follow.

For an injection $f\colon[m]\to[n]$ define
$\Phi_f\colon S_m\to S_n$ by $\Phi_f(\sigma)(y):=f(\sigma(f^{-1}(y)))$ for
$y\in f([m])$ and $\Phi_f(\sigma)(y):=y$ for $y\notin f([m])$; then $\Phi_f$ is
a group homomorphism, because $f^{-1}(y)$ is defined on $f([m])$, the two
factors of a product commute through $f$, and both sides fix the complement
pointwise. Since $f\circ\sigma=\Phi_f(\sigma)\circ f$, functoriality gives
$f_*\circ\sigma_*=(\Phi_f(\sigma))_*\circ f_*$ for all $\sigma\in S_m$: each
$f_*\colon V_m\to V_n$ is equivariant for the conjugation homomorphism
$\Phi_f$ determined by $f$.

A **sub-FI-module** of $V$ is a subfunctor $W\subseteq V$
([[def-submodule]]): submodules $W_S\le V_S$ with $f_*(W_S)\subseteq W_T$ for
all injections $f\colon S\to T$. A **map of FI-modules** $V\to W$ is a natural
transformation, and kernels, images and cokernels of such maps are computed
pointwise, so that e.g. $\ker(F)_S=\ker(F_S\colon V_S\to W_S)$ with the
restrictions of the transition maps
([[def-quotient-module]], [[def-abelian-category]]). With these pointwise
operations the category of FI-modules over $k$ inherits its additive structure
and its abelian-category structure from $k\text{-}\mathrm{Mod}$
([[thm-modules-over-a-ring-form-an-abelian-category]]): finite direct sums,
kernels, cokernels and the compatibility axioms are checked objectwise, and a
pointwise surjective map is an epimorphism and a pointwise injective map is a
monomorphism.

An **FB-module over $k$** is a functor from the groupoid $FB$ of finite sets
and bijections to $k\text{-}\mathrm{Mod}$, with natural transformations as
maps. Since all morphisms of $FB$ are isomorphisms and every finite set is
isomorphic to exactly one $[n]$, an FB-module is determined up to isomorphism
by the $kS_n$-modules $W_n$ alone and carries no transition maps between
different $n$. No choice principle is used beyond the definable-class
conventions of [[def-category]].
