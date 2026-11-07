---
id: ex-global-artin-map-local-components
kind: example
title: "The global Artin map from its local components"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - thm-global-artin-reciprocity-and-norm-index
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-local-artin-unramified-frobenius-normalization
  - def-axiom-of-choice
  - def-countable-choice
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
      locator: "§28.2, construction and local component diagram, pp. 2–3"
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §§5 and 8, global Artin and reciprocity law"
verification: {}
---

## Example
Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). 
Let $L/K$ be a finite abelian extension of number fields, let $G=\operatorname{Gal}(L/K)$, and let $v$ be a place of $K$. For an idele $x$ supported only at $v$, with component $a\in K_v^\times$, its global Artin image is the image in $G$ of the local reciprocity element $\operatorname{rec}_v(a)$. For a general idele, the global image is the product of these local images; all but finitely many local Artin factors are the identity. In particular, if $v$ is unramified and $a$ is a unit, the local component is trivial; if $a$ is a uniformizer, it maps to arithmetic Frobenius. For a principal idele, the product over all places is the identity.

## Example references

[[def-global-artin-map-as-product-of-local-reciprocity-maps]]

[[thm-global-artin-reciprocity-and-norm-index]]

[[thm-local-artin-unramified-frobenius-normalization]]

[Sutherland, MIT 18.785 Lecture 28, §28.2](https://math.mit.edu/classes/18.785/2021fa/LectureNotes28.pdf)

[Milne, *Class Field Theory*, VII §§5, 8](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Diagram

Let $D_v\le G$ be the decomposition subgroup at $v$, and let $\iota_v:K_v^\times\to\mathbb A_K^\times$ insert a local element at $v$ and $1$ elsewhere. The square records the definition of the global map on a single local factor; commutativity follows by evaluating the finite product on an idele supported at $v$. The proof below uses the definition in words and does not rely on the drawing.

```tikzcd
K_v^\times \arrow[r,"\operatorname{rec}_v"] \arrow[d,"\iota_v"'] & D_v \arrow[d,hook] \
\mathbb A_K^\times \arrow[r,"\operatorname{Art}_{L/K}"'] & G
```

## Facts & Assumptions

**Given:** the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC); a finite abelian extension $L/K$, a place $v$, and an idele as in the Example.

[F1] By definition, the global Artin map is the product of the local reciprocity maps, with finite support and compatible finite quotients. [[def-global-artin-map-as-product-of-local-reciprocity-maps]]

[F2] The local reciprocity map on an unramified extension kills units and sends a uniformizer to arithmetic Frobenius. [[thm-local-artin-unramified-frobenius-normalization]]

[F3] The global product is trivial on principal ideles and factors through the norm quotient. The current proof depends on the global Brauer–Hasse–Noether and local class-formation inputs. [[thm-global-artin-reciprocity-and-norm-index]]


[A1] The global reciprocity and local Frobenius inputs [F2]–[F3] carry AC, Countable Choice, and DC; they are used in steps 2.1–3.1. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]]
## Proof
**Given:** The data above.

1.1 By [F1], if the idele is supported only at $v$ then the product defining $\operatorname{Art}_{L/K}$ has exactly its $v$-factor, embedded from $D_v$ into $G$. Thus its image is the local Artin element shown in the diagram. [F1, given, algebra]

2.1 For a general idele, all but finitely many finite components are units and are unramified in $L/K$. By [F2] those local factors are the identity, so the global image is the finite product of the remaining local factors. If the idele is principal, [F3] makes that product the identity. [F1, F2, F3, step 1.1, algebra, A1]

3.1 In the finite check $K=\mathbb Q$, $L=\mathbb Q(\zeta_5)$, the idele with component $2\in\mathbb Q_2^\times$ at the prime $2$ and $1$ elsewhere maps to $\sigma_2$ because $2$ is unramified and its local uniformizer is $2$. The principal idele $2$ has local components at every place and its product is $1$ by [F3]. [F2, F3, step 2.1, algebra, A1] ∎
