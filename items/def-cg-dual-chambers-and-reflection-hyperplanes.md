---
id: def-cg-dual-chambers-and-reflection-hyperplanes
kind: definition
title: "The dual action, chambers, faces, and root hyperplanes"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 5
deps: [def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-hh-coxeter-matrix-word-group-and-length, def-algebraic-dual-and-linear-functional, def-kernel-and-image-of-a-linear-map, def-linear-map, def-linear-subspace]
justified_by: [lem-cg-dual-action-and-chamber-faces-exist]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press; author's full institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 439\u2013440: the dual (geometric) representation $\\rho^*$, its reflection formula (D.1), the cone $C$ and its interior $\\mathring C$; Example D.2.1(i)"
    - title: "Anders Bj\u00f6rner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "\u00a74.2, printed p. 94: the contragredient pair $\\sigma,\\sigma^*$ and Proposition 4.2.3, $\\langle w(p)\\mid\\beta\\rangle=\\langle p\\mid w^{-1}(\\beta)\\rangle$; \u00a74.9, printed p. 123: the hyperplanes $H_\\beta=\\{p:\\langle p\\mid\\beta\\rangle=0\\}$ and the cone $C=\\bigcap_s H^+_{\\alpha_s}$"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $S$, $m$, $V$, $B$, $W$, $\rho$, $\Phi$ be as in [[def-cg-canonical-reflection-homomorphism]], and let $V^*$ be the algebraic dual of $V$ ([[def-algebraic-dual-and-linear-functional]]).

**(1) The dual action.** For $w\in W$ and $f\in V^*$ define $w\cdot f\in V^*$ by $$(w\cdot f)(v):=f(\rho(w)^{-1}v).$$ This is the dual (contragredient) action of $\rho$; that it really is a left action by linear maps is proved in [[lem-cg-dual-action-and-chamber-faces-exist]]. **The dual action is used even when $B$ is degenerate**: no identification of $V$ with $V^*$ through $B$ is made or assumed.

**(2) Chambers, faces, root hyperplanes.** The **closed chamber** is $C:=\{f\in V^*:f(e_s)\ge0\text{ for all }s\in S\}$, its **interior** is $C^\circ:=\{f\in V^*:f(e_s)>0\text{ for all }s\in S\}$, and for $I\subseteq S$ the **face** $C_I$ is $$C_I:=\{f\in V^*:f(e_s)=0\text{ for }s\in I\text{ and }f(e_s)>0\text{ for }s\notin I\},$$ the set of functionals of $C$ vanishing exactly on $I$. For a root $\alpha\in\Phi$ the **root hyperplane** is $H_\alpha:=\{f\in V^*:f(\alpha)=0\}=\ker(\mathrm{ev}_\alpha)$, the kernel of the evaluation functional $f\mapsto f(\alpha)$ ([[def-kernel-and-image-of-a-linear-map]]).

Neither the nonemptiness of the $C_I$ nor any orbit or tiling property is asserted here; existence of the faces and the exact rank-two chamber structure are proved in [[lem-cg-dual-action-and-chamber-faces-exist]].
