---
id: def-borel-subgroup-and-maximal-torus
kind: definition
title: Borel subgroups, maximal tori and Borel pairs
dependency_level: 1
deps:
  - def-affine-scheme
  - def-derived-subgroup-and-solvable-algebraic-group
  - def-group-of-multiplicative-type-and-torus
  - def-group-scheme-over-a-field
  - def-morphism-and-closed-subgroup-scheme
  - def-smooth-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Definition 17.6 and Definition 17.12 with the following paragraph, printed pp. 354-356
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 2.2 (Definitions 43 and Proposition 45), pp. 20-25, and Sections 5.1-5.2 (Definitions 115 and 120), pp. 48-50
    - title: Brian Conrad, Grothendieck’s theorem on tori
      url: https://math.stanford.edu/~conrad/252Page/handouts/grthm.pdf
      locator: Corollary 1.3, printed p. 1 (smooth connected affine groups)
---
## Definition

Let $k$ be a field and let $G$ be an affine algebraic group over $k$, that is, an affine group scheme of finite type over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]).

A **torus** of $G$ is a closed subgroup scheme $T\subseteq G$ ([[def-morphism-and-closed-subgroup-scheme]]) whose base extension to a separable closure of $k$ is isomorphic to $\mathbf G_m^r$ for some integer $r\ge0$; it is a **split torus** if that isomorphism is already defined over $k$ ([[def-group-of-multiplicative-type-and-torus]]). It is a **maximal torus** if it is maximal with respect to inclusion among the tori of $G$. Equivalently, $T$ is a closed subgroup that is geometrically a product of copies of $\mathbf G_m$, and no strictly larger torus of $G$ contains it; for smooth connected affine groups, maximality is preserved by every field extension (Conrad, *Grothendieck’s theorem on tori*, Corollary 1.3, printed p. 1).

A **Borel subgroup** of a smooth $G$ is a smooth connected solvable closed subgroup scheme $B\subseteq G$ whose base extension to an algebraic closure is maximal among smooth connected solvable closed subgroup schemes. Over an algebraically closed field this means exactly that $B$ is a maximal connected solvable subgroup variety, with its reduced smooth structure ([[def-derived-subgroup-and-solvable-algebraic-group]], [[def-smooth-morphism-schemes]]). Maximality here is among subgroup varieties, not arbitrary possibly infinitesimal subgroup schemes. A Borel subgroup need not be defined over a general field; existence and conjugacy are asserted below over an algebraically closed field.

A **Borel pair** is a pair $(B,T)$ consisting of a Borel subgroup $B$ and a maximal torus $T$ with $T\subseteq B$.

On this page Borel subgroups are used only for smooth $G$ ([[def-smooth-morphism-schemes]]); Borel subgroups are smooth by the subgroup-variety convention, and the existence and conjugacy theorems are proved later on this page. Maximal tori exist whenever $G$ has a torus, by maximizing dimension among tori, since a strict inclusion of tori increases dimension; the existence of a Borel subgroup containing a given torus is proved where it is used.
