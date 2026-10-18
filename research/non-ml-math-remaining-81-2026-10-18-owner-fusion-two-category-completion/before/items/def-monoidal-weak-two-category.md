---
id: def-monoidal-weak-two-category
kind: definition
title: Weak monoidal 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-weak-linear-two-category
  - def-functor-and-contravariant-functor
  - def-natural-transformation
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §2.1.1
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
---

## Definition

A **weak monoidal 2-category** is a weak 2-category $\mathcal B$ together with the following data.

1. A bilinear tensor pseudofunctor $\otimes:\mathcal B\times\mathcal B\to\mathcal B$. On 1- and 2-morphisms it has invertible comparison 2-morphisms for composition and identities, natural in each variable and satisfying the pseudofunctor composition and unit equations.
2. A unit object $I$.
3. Pseudonatural equivalences $a_{A,B,C}:(A\otimes B)\otimes C\to A\otimes(B\otimes C)$ and $\ell_A:I\otimes A\to A$, $r_A:A\otimes I\to A$. A pseudonatural transformation has a 1-morphism component at every object and an invertible naturality 2-morphism for every 1-morphism; the naturality squares for composites and identities commute. A modification between pseudonatural transformations has a 2-morphism component at every object, and its naturality square for each 1-morphism commutes. “Equivalence” means that an inverse pseudonatural transformation and invertible unit and counit modifications are supplied.
4. An invertible **pentagonator modification** $\Pi_{A,B,C,D}$ from the composite
$$a_{A,B,C\otimes D}\circ a_{A\otimes B,C,D}$$
to
$$ (1_A\otimes a_{B,C,D})\circ a_{A,B\otimes C,D}\circ(a_{A,B,C}\otimes1_D).$$
There are three invertible unit modifications, with sources and targets
$$\lambda_{A,B}: \ell_{A\otimes B}\circ a_{I,A,B}\Longrightarrow \ell_A\otimes1_B,$$
$$\rho_{A,B}: r_{A\otimes B}\Longrightarrow(1_A\otimes r_B)\circ a_{A,B,I},$$
$$\tau_{A,B}: (1_A\otimes\ell_B)\circ a_{A,I,B}\Longrightarrow r_A\otimes1_B.$$

All pseudofunctor comparison maps, transformations, and modifications are natural in their object, 1-morphism, and 2-morphism inputs. Their equations are part of the structure: the pentagonator obeys the five-object coherence equation (the two pastings between the endpoints of the 4-dimensional associahedron agree); the three unit modifications obey the triangle and double-unit equations; and inserting a unit in the five-object equation agrees with those unit equations. The tensor pseudofunctor comparisons satisfy their composition, unit, and naturality equations. These are equalities of parallel 2-morphisms; they are not consequences of object-level associativity.

The ordinary associator pentagon is represented schematically below. In a weak monoidal 2-category its two boundary composites are compared by $\Pi$, rather than required to be literally equal.

```tikzcd
& (A\otimes B)\otimes(C\otimes D) \arrow[rr,"a_{A,B,C\otimes D}"] & & A\otimes(B\otimes(C\otimes D)) \\
((A\otimes B)\otimes C)\otimes D \arrow[ur,"a_{A\otimes B,C,D}"] \arrow[dr,"a_{A,B,C}\otimes 1_D"'] & & & \\
& (A\otimes(B\otimes C))\otimes D \arrow[r,"a_{A,B\otimes C,D}"'] & A\otimes((B\otimes C)\otimes D) \arrow[ur,"1_A\otimes a_{B,C,D}"'] &
```

This definition uses the weak presentation directly. It invokes no global strictification theorem.
