---
id: ex-hh-group-like-elements-in-finite-set-coalgebra
kind: example
title: "Group-like elements in a finite set coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-group-like-and-primitive-elements, def-hh-scalar-and-tensor-conventions, thm-tensor-product-basis-from-bases, thm-universal-property-of-free-modules, def-field]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Example 3.2(1), printed p. 12."
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2.4, definition of group-like elements, printed pp. 4–5."
---

## Example

Let $G$ be any finite set and let $C_G$ be the vector space with basis $(e_g)_{g\in G}$. Define $\Delta(e_g)=e_g\otimes e_g$ and $\varepsilon(e_g)=1$ on this basis. This is the finite set coalgebra. Its group-like elements, in the normalization of [[def-hh-group-like-and-primitive-elements]], are exactly the basis vectors $e_g$. If $G=\varnothing$, then $C_G=0$ and it has no group-like elements.

## Facts & Assumptions

**Given:** A field $k$, a finite set $G$, and the vector space $C_G$ with basis $(e_g)_{g\in G}$.

[F1] A coalgebra is a vector space with coassociative $\Delta$ and two-sided counit $\varepsilon$ ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] A vector $x$ is group-like when $\Delta(x)=x\otimes x$ and $\varepsilon(x)=1$ ([[def-hh-group-like-and-primitive-elements]]).

[F3] The elementary tensors from bases of two vector spaces form a basis of their tensor product ([[thm-tensor-product-basis-from-bases]]).

[F4] A map prescribed on a free basis extends uniquely to a linear map ([[thm-universal-property-of-free-modules]]).

[F5] Every nonzero field element has a multiplicative inverse ([[def-field]]).

## Verification

1.1 The assignments extend linearly by [F4]. For each basis vector, $\alpha(\Delta\otimes\mathrm{id})\Delta(e_g)=e_g\otimes(e_g\otimes e_g)=(\mathrm{id}\otimes\Delta)\Delta(e_g)$, and both counit maps send $\Delta(e_g)=e_g\otimes e_g$ to $e_g$. Since the maps are linear and the $e_g$ span $C_G$, [F1] holds; if $G$ is empty, all maps are the unique zero maps and the coalgebra identities hold on the zero space. [given, F1, F4, algebra]

2.1 Write any $x\in C_G$ uniquely as $x=\sum_{g\in G}a_g e_g$. If $x$ is group-like, then $\sum_g a_g e_g\otimes e_g=\Delta(x)=x\otimes x=\sum_{g,h}a_ga_h e_g\otimes e_h$. By [F3], coefficient comparison gives $a_g=a_g^2$ for each $g$ and $a_ga_h=0$ for distinct $g,h$. From $a_g(a_g-1)=0$, either $a_g=0$, or $a_g\ne0$ and multiplying by its inverse from [F5] gives $a_g=1$. The counit equation $\sum_g a_g=\varepsilon(x)=1$ forces at least one coefficient to be $1$, while the off-diagonal equations force at most one. Thus $x=e_g$ for one $g\in G$; conversely every $e_g$ satisfies [F2]. For $G=\varnothing$, $x=0$ and $\varepsilon(x)=0$, so none is group-like. [given, F2, F3, F5, algebra] ∎

