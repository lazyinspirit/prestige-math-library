---
id: def-cg-tits-cone-and-fundamental-chamber
kind: definition
title: "The Tits cone, its interior, and the negative-root set of a functional"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps: [def-hh-coxeter-matrix-word-group-and-length, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, def-cg-dual-chambers-and-reflection-hyperplanes, lem-cg-dual-action-and-chamber-faces-exist, thm-cg-root-sign-and-simple-reflection-positivity, def-cg-geometric-inversion-set, def-algebraic-dual-and-linear-functional, def-dual-family-associated-to-a-basis, thm-dual-family-is-a-basis-in-finite-dimension, def-linear-basis, lem-metrics-on-rn, def-metric-space, def-metric-topology, def-metric-interior-closure-boundary, def-metric-compactness, thm-all-norms-on-rn-are-equivalent]
justified_by: [thm-cg-tits-cone-finite-negativity-and-convexity]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 440-441 (Lemma D.1.5 and its Case 1, the infinite dihedral picture); Appendix D.2, printed pp. 442-445 (Examples D.2.1, Lemmas D.2.2-D.2.5, Theorems D.2.6-D.2.7); Chapter 6, printed pp. 90-91 (Lemma 6.6.8, whose proof is reused by Lemma D.2.5)"
    - title: "Nicolas Perrin, Introduction to Kac-Moody groups and Lie algebras (lecture notes, November 9, 2015)"
      url: "https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf"
      locator: "Chapter 6, Section 6.5 'Dominant chambers and Tits cone', printed pp. 55-56 (Definition 6.5.1 and Theorem 6.5.2 (i)-(vi) with proof)"
verification:
  precheck: n/a
---

## Definition

Let $S$ be a finite set, $m$ a Coxeter matrix on $S$, $W$ the presented group with length function $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), $V=\mathbb R^S$ with Coxeter form $B$ and reflections $r_a$ ([[def-cg-real-coxeter-form-and-reflection]]), $\rho:W\to\mathrm{GL}(V)$ the canonical reflection homomorphism with root system $\Phi$ and positive cone $V_+$ ([[def-cg-canonical-reflection-homomorphism]]), and let $V^*$ be the algebraic dual with its dual action, closed chamber $C$, faces $C_I$ and root hyperplanes $H_\alpha$ in the notation of [[def-cg-dual-chambers-and-reflection-hyperplanes]]. Let $\Phi=\Phi_+\sqcup\Phi_-$ be the signed root system and $C^\circ=\bigcap_{s\in S}\{f\in V^*:f(e_s)>0\}$ the open chamber ([[thm-cg-root-sign-and-simple-reflection-positivity]]).

**(1) The chamber system.** For $w\in W$ put $wC:=\{w\cdot f:f\in C\}$. The sets $wC$ are the **chambers** of $(W,S)$ and $C$ is the **fundamental chamber**; for $w\in W$ and $s\in S$ the hyperplane $wH_{e_s}$ is a **wall** of the chamber $wC$.

**(2) The Tits cone.** The **Tits cone** is
$$U:=\bigcup_{w\in W}wC\subseteq V^*.$$
This definition asserts no convexity or closedness of $U$, face-intersection properties, or local finiteness. Convexity is proved in [[thm-cg-tits-cone-finite-negativity-and-convexity]], chamber intersections in [[thm-cg-dual-chamber-intersections-and-point-stabilizers]], and local finiteness of chambers and walls only at points of $U^\circ$ in [[thm-cg-tits-cone-interior-and-local-finiteness]] (3). Immediate from the definition, the group law and the left-action property of the dual action ([[lem-cg-dual-action-and-chamber-faces-exist]] (1)): $C\subseteq U$, $0\in U$ (because $0\in C$), and $w'U=U$ for every $w'\in W$.

**(3) The finite-dimensional topology and the interior.** Since $S$ is finite, $f\mapsto(f(e_s))_{s\in S}$ is a linear bijection $V^*\to\mathbb R^S$ ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]], [[def-linear-basis]]). If $S\ne\emptyset$, pulling back the metric $d_\infty$ of [[lem-metrics-on-rn]] along this bijection gives the metric
$$d(f,g):=\max_{s\in S}|f(e_s)-g(e_s)|$$
on $V^*$ ([[def-metric-space]], [[def-metric-topology]]); if $S=\emptyset$ then $V^*=\{0\}$ is a singleton and $d$ is its unique metric, $d(0,0)=0$.

A second basis enters only when $S\ne\emptyset$. If $(e'_t)$ is a second basis with $e'_t=\sum_{s\in S}a_{ts}e_s$, then $\max_t|f(e'_t)|\le C\max_s|f(e_s)|$ and $\max_s|f(e_s)|\le C'\max_t|f(e'_t)|$ with $C=\max_t\sum_s|a_{ts}|$ and $C'$ the analogous constant of the inverse matrix, whose entries are finite because $S$ is finite; so a second coordinate system gives an equivalent norm, hence the same open sets and the same interior ([[thm-all-norms-on-rn-are-equivalent]]). The **interior of the Tits cone** is
$$U^\circ:=\operatorname{int}U,$$
the interior of $U$ for this ordinary finite-dimensional topology ([[def-metric-interior-closure-boundary]]). Thus a **neighborhood** of $f$ is a set containing some ball $\{g:d(f,g)<\varepsilon\}$, $\varepsilon>0$, and **compact** means compact for this topology ([[def-metric-compactness]]).

**(4) The negative-root set of a functional.** For $f\in V^*$ put
$$\operatorname{Neg}(f):=\{\alpha\in\Phi_+:f(\alpha)<0\}\subseteq\Phi_+.$$
This attaches a set of positive roots to a functional; it is not the inversion set $N(w)$ attached to a group element ([[def-cg-geometric-inversion-set]]). No finiteness of $\operatorname{Neg}(f)$ is asserted by this definition: the equivalence "$f\in U$ if and only if $\operatorname{Neg}(f)$ is finite" is the theorem [[thm-cg-tits-cone-finite-negativity-and-convexity]].
