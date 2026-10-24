---
id: def-cg-finite-reflection-arrangement-and-spherical-chambers
kind: definition
title: "The finite reflection arrangement, its chambers, the spherical chamber complex, and the coset face poset"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [cor-inner-product-induces-a-norm, def-connected-component-and-quasicomponent, def-connected-space, def-coset, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-dual-chambers-and-reflection-hyperplanes, def-cg-real-coxeter-form-and-reflection, def-dual-family-associated-to-a-basis, def-euclidean-spheres-and-closed-balls, def-generated-subgroup, def-hh-coxeter-matrix-word-group-and-length, def-linear-basis, def-linear-isomorphism-and-invertible-linear-map, def-metric-space, def-metric-topology, def-real-and-complex-inner-product-space, def-subspace-topology-top, lem-cg-diagram-products-and-invariant-form-comparison, lem-cg-dual-action-and-chamber-faces-exist, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-finite-type-positive-definite-criterion, thm-dual-family-is-a-basis-in-finite-dimension]
justified_by: [thm-cg-finite-chamber-tiling-and-coset-face-identification]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008, first-edition author manuscript PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 5, Example 5.2.7 and section 5.3 (printed pp. 66-68: the Coxeter complex U(W,Delta) and its sectors); Chapter 6, section 6.12 (printed pp. 115-120: Theorem 6.12.9); Appendix D.1-D.2 (printed pp. 439-447: Tits' Theorem D.1.1, Lemmas D.2.2-D.2.5, Theorems D.2.6-D.2.7)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014, author-hosted PDF)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5 (Lemma 5.1, Proposition 5.4 with the chamber bijection, printed pp. 6-9)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, $n:=\lvert S\rvert$, and length
function $\ell$; thus $W$ is a finite group
([[def-cg-coxeter-diagram-components-and-finite-type]], clause (4),
[[def-hh-coxeter-matrix-word-group-and-length]]). On $V:=\mathbb R^S$ let $B$ be the Coxeter
form, let $r_a$ be the reflection with normal $a$ (defined when $B(a,a)\ne0$), and let
$\rho:W\to\mathrm{GL}(V)$ be the canonical reflection homomorphism with root system
$$\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}\subset V$$
and reflection set $T=\{wsw^{-1}:w\in W,\ s\in S\}\subset W$
([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]).
Let $V^*$ be the algebraic dual with its dual action, its closed chamber $C$, its interior
$C^\circ$ and its root hyperplanes $H_\alpha$
([[def-cg-dual-chambers-and-reflection-hyperplanes]],
[[lem-cg-dual-action-and-chamber-faces-exist]]).

Since $W$ is finite, $B$ is positive definite
([[thm-cg-finite-type-positive-definite-criterion]], clause (1),
[[lem-cg-diagram-products-and-invariant-form-comparison]], clause (4)); hence
$b:V\to V^*$, $b(v):=B(v,\cdot)$, is a linear isomorphism with
$b(\rho(w)v)=w\cdot b(v)$ for all $w\in W$ and $v\in V$, because $B$ is $\rho$-invariant
([[lem-cg-reflection-representation-descends-and-root-norms]],
[[def-linear-isomorphism-and-invertible-linear-map]]). **Identify $V$ with $V^*$ by $b$ only
now**, and transfer $C$, $C^\circ$ and the $H_\alpha$ along $b^{-1}$; with the same letters

$$C=\{v\in V:B(v,e_s)\ge0\text{ for every }s\in S\},\qquad C^\circ=\{v\in V:B(v,e_s)>0\text{ for every }s\in S\},\qquad H_\alpha=\{v\in V:B(v,\alpha)=0\}.$$

Give $V$ the metric topology of the inner product $B$
([[def-real-and-complex-inner-product-space]], [[def-metric-space]],
[[def-metric-topology]]); it is canonical because $B$ is determined by $(W,S)$, and $b$ is an
isometry for $B$ and its transferred form, so topological notions may be moved across the
identification.

**(1) The finite reflection arrangement.** Put
$$\mathcal A:=\{H_\alpha:\alpha\in\Phi\}.$$
Each $\alpha\in\Phi$ satisfies $B(\alpha,\alpha)=1\ne0$
([[lem-cg-reflection-representation-descends-and-root-norms]], clause (3)), so $H_\alpha$ is
the kernel of the nonzero linear functional $B(\cdot,\alpha)$ and in particular contains $0$;
$\mathcal A$ is finite because $\Phi$ is the image of the finite set $W\times S$ under
$(w,s)\mapsto\rho(w)e_s$; and $\mathcal A$ is permuted by $\rho(W)$, since
$\rho(w)H_\alpha=H_{\rho(w)\alpha}$ for all $w\in W$, $\alpha\in\Phi$ (the form $B$ is
$\rho$-invariant). A **chamber** of $\mathcal A$ is a connected component of
$V\setminus\bigcup_{\alpha\in\Phi}H_\alpha$, and a **closed chamber** is the closure of a
chamber ([[def-connected-space]], [[def-connected-component-and-quasicomponent]],
[[def-metric-topology]]). For $I\subseteq S$ put
$$\overline{C_I}:=\{v\in C:B(v,e_s)=0\text{ for }s\in I\},\qquad C_I:=\{v\in C:B(v,e_s)=0\text{ for }s\in I\text{ and }B(v,e_s)>0\text{ for }s\notin I\},$$
the **closed face** and the **open face** of $C$ of type $I$; for $w\in W$ put
$wC:=\rho(w)C$, $w\overline{C_I}:=\rho(w)\overline{C_I}$ and $wC_I:=\rho(w)C_I$.

**(2) The spherical chamber complex.** The form $B$ is an inner product on $V$; let
$\lVert v\rVert_B:=B(v,v)^{1/2}$ and let
$$S^{n-1}:=\{v\in V:\lVert v\rVert_B=1\}$$
be the **unit sphere**, with the subspace topology
([[cor-inner-product-induces-a-norm]], [[def-subspace-topology-top]],
[[def-euclidean-spheres-and-closed-balls]]); the exponent is notation for the unit sphere of
the $n$-dimensional inner-product space $(V,B)$, and no dimension theory of spheres is claimed
here. The **spherical chamber** belonging to $w\in W$ is $wC\cap S^{n-1}$, and its **spherical
faces** are the sets $w\overline{C_I}\cap S^{n-1}$.

**(3) The coset face poset.** For $I\subseteq S$ put $W_I:=\langle s:s\in I\rangle\le W$
([[def-generated-subgroup]]) and let $wW_I:=\{wu:u\in W_I\}$ be a left coset
([[def-coset]]). The **coset face poset** is the set
$$\{wW_I:w\in W,\ I\subsetneq S\}$$
of cosets of proper standard parabolics, ordered by **reverse inclusion** as subsets of $W$:
$\sigma\preceq\tau$ if and only if $\sigma\supseteq\tau$.

**(4) Abstentions.** This definition asserts neither that the sets $wC^\circ$ are the connected
components of $V\setminus\bigcup_\alpha H_\alpha$ nor that they cover it, neither that the
cosets $wW_I$ index the faces $w\overline{C_I}$ nor that the spherical faces triangulate
$S^{n-1}$; those assertions are proved in
[[thm-cg-finite-chamber-tiling-and-coset-face-identification]], the recorded justifier of this
definition. Separately, the $B$-dual family of the basis $(e_s)$ is provided by
[[def-dual-family-associated-to-a-basis]], [[def-linear-basis]] and
[[thm-dual-family-is-a-basis-in-finite-dimension]], and no Choice is used: $S$ and $W$ are
finite and all objects here are finite-dimensional or set-theoretic.
