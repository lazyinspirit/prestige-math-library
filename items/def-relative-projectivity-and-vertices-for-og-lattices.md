---
id: def-relative-projectivity-and-vertices-for-og-lattices
kind: definition
title: Relative projectivity and vertices for integral group lattices
status: draft
origin: pipeline
deps: [def-og-lattice-and-reduction-modulo-the-maximal-ideal]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, sections 2.1–2.2, pp. 19–22"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, Definition 4.1 and Theorem 5.4 proof, pp. 264 and 276–277"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Definition

Fix a splitting $p$-modular system $(K,\mathcal O,k)$, let $H$ be finite,
let $Q\leq H$, and let $M$ be an $\mathcal O H$-lattice in the sense of
[[def-og-lattice-and-reduction-modulo-the-maximal-ideal]]. The lattice $M$ is
**relatively $Q$-projective** if it is an $\mathcal O H$-direct summand of

$$\operatorname{Ind}_Q^H\operatorname{Res}_Q^H M.$$

A **vertex** of a nonzero indecomposable $\mathcal O H$-lattice $M$ is a
$p$-subgroup $Q\leq H$ that is minimal under inclusion among the subgroups
for which $M$ is relatively $Q$-projective. Vertices exist. Indeed, if $P$ is
a Sylow $p$-subgroup of $H$, then $[H:P]$ is a unit of $\mathcal O$. For a
left transversal $T$ of $P$ in $H$, the induction counit
$\varepsilon(t\otimes m)=tm$ is split by the $H$-linear map

$$m\longmapsto [H:P]^{-1}\sum_{t\in T}t\otimes t^{-1}m.$$

Thus every $M$ is relatively $P$-projective, and the finite set of
$p$-subgroups with this property has a minimal member. All direct summands,
inductions, and restrictions here are taken in the category of finite-free
$\mathcal O$-lattices. The construction uses only finite sums and finite
minimization, not the Axiom of Choice.
