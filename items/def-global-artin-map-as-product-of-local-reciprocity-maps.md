---
id: def-global-artin-map-as-product-of-local-reciprocity-maps
kind: definition
title: "Global Artin map as a product of local reciprocity maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-idele-group-of-a-global-field
  - thm-archimedean-local-reciprocity
  - def-absolute-galois-group-of-a-global-field
  - def-local-artin-reciprocity-map
  - thm-local-artin-unramified-frobenius-normalization
  - lem-unramified-local-unit-norms-and-cohomology
  - lem-number-field-decomposition-group-order-is-local-degree
  - thm-local-artin-reciprocity-and-norm-index
  - cor-only-finitely-many-primes-ramify
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. V. Sutherland, MIT 18.785 Lecture 28"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes28.pdf"
      locator: "§28.2, Definition 28.2 and complete construction, lecture pp. 2–3"
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §5 definition and compatibility; VII §8 reciprocity proof"
verification: {}
---

## Definition
Assume the Axiom of Choice (AC) and Dependent Choice (DC). 
Let $K$ be a number field, fix a separable closure $K_s$, and set $K^{\mathrm{ab}}=\bigcup_L L$, where $L$ ranges over the finite abelian extensions of $K$ contained in $K_s$. For a finite abelian extension $L/K$, write $G=\operatorname{Gal}(L/K)$. At each finite place $v$, compose the local Artin map of $K_v$ with restriction to a completion $L_w/K_v$ and the natural inclusion of its decomposition group into $G$. At real places use the archimedean reciprocity map; at complex places the component is trivial. For an idele $x=(x_v)_v$, define

$$\operatorname{Art}_{L/K}(x)=\prod_v \operatorname{Art}_{v,L/K}(x_v)\in G.$$

The product has only finitely many nonidentity factors. The maps are compatible as $L$ varies over finite abelian extensions, so they define the continuous idele homomorphism

$$\operatorname{Art}_K:\mathbb A_K^\times\longrightarrow\operatorname{Gal}(K^{\mathrm{ab}}/K),\qquad x\longmapsto(\operatorname{Art}_{L/K}(x))_L.$$

This definition is on the idele group. It does not assert that the map is trivial on the diagonal subgroup $K^\times$.

## Definition references

[[def-idele-group-of-a-global-field]]

[[def-local-artin-reciprocity-map]]

[[thm-local-artin-unramified-frobenius-normalization]]

[[thm-archimedean-local-reciprocity]]

[Sutherland, MIT 18.785 Lecture 28, §28.2](https://math.mit.edu/classes/18.785/2021fa/LectureNotes28.pdf)

[Milne, *Class Field Theory*, VII §§5, 8](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice (AC) and Dependent Choice (DC); a number field $K$, its idele group, a separable closure, and a finite abelian extension $L/K$.

[F1] An idele has unit components at all but finitely many finite places. [[def-idele-group-of-a-global-field]]

[F2] In a finite unramified local extension, units are local norms; local reciprocity kills those norms and sends a uniformizer to arithmetic Frobenius. [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]

[F3] The local reciprocity maps are compatible with finite abelian quotients and the archimedean component is the stated sign/conjugation map. [[def-local-artin-reciprocity-map]] [[thm-archimedean-local-reciprocity]]

[F4] A number field has only finitely many ramified rational primes, hence a finite extension of number fields has only finitely many ramified finite places. [[cor-only-finitely-many-primes-ramify]]

[F5] The absolute Galois group is $G_K=\operatorname{Gal}(K_s/K)$ for a fixed separable closure, with inverse-limit topology. [[def-absolute-galois-group-of-a-global-field]]

[F6] For each finite prime, restriction identifies the decomposition subgroup with the Galois group of the corresponding completion. [[lem-number-field-decomposition-group-order-is-local-degree]]


[A1] AC and DC are explicit hypotheses of the local reciprocity inputs [F2] and [F3], used in steps 1.1–2.1. [[def-axiom-of-choice]] [[def-dependent-choice]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]
## Proof

**Given:** The data above.

1.1 Outside a finite set, [F1] gives $x_v\in\mathcal O_v^\times$ and [F4] says $L/K$ is unramified at $v$. By [F2], the local factor at every such place is the identity. Thus the product in the definition is finite. The Statement defines $K^{\mathrm{ab}}$ as the union of finite abelian subextensions, and [F5] fixes the absolute Galois group notation. [F6] identifies each local decomposition group with the Galois group of the completion. If a different $w\mid v$ is chosen, the local maps are conjugate; because $G$ is abelian, the resulting element of $G$ is unchanged. [F1, F2, F4, F5, F6, given, algebra, A1]

2.1 Each local component is a homomorphism, so the finite product is a homomorphism. For fixed $L/K$, choose a finite set $S$ containing its ramified places and all nonunit components of a given idele. The local kernels at $S$ are open, while $\prod_{v\notin S}\mathcal O_v^\times$ maps trivially. Hence the kernel of $\operatorname{Art}_{L/K}$ is open and that map is continuous. Compatibility of local maps in finite abelian quotients [F3] makes the family compatible in $L$; the inverse-limit topology then gives continuity of $\operatorname{Art}_K$. No assertion about $K^\times$ is used. [F3, step 1.1, given, algebra, A1] ∎
