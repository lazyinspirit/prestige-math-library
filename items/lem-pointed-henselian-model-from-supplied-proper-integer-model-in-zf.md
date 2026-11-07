---
id: lem-pointed-henselian-model-from-supplied-proper-integer-model-in-zf
kind: lemma
title: Pointed henselian finite models from a supplied proper integer model in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-henselian-pair-and-henselian-local-ring
  - def-locally-finite-presentation-morphism
  - def-proper-morphism
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
  - lem-projective-properness-and-finite-type-surjectivity-without-choice
proof_strategy: direct
axiom_use: No choice is assumed. The proper finite-type integer model and the finite algebraic fibre witnesses are explicitly supplied.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Limits of Schemes, Proposition 32.9.6
      url: https://stacks.math.columbia.edu/tag/01ZJ
      locator: The A5 authoring read the finite-presentation context; the conditional pointed model and finite field-witness argument are supplied locally.
---

## Statement

In ZF, let $(A,\mathfrak m,k)$ be a henselian local ring and $X/A$ a proper finitely presented scheme. Suppose a finitely generated $\mathbb Z$-algebra $B_0$, a map $B_0\to A$, and a **proper finitely presented** $B_0$-scheme $X_0$ with a specified isomorphism $X_0\times_{B_0}A\cong X$ are already supplied. Then there are a finitely generated integer algebra $B$, a prime $\mathfrak p\subset B$, its ordinary local henselization $H=(B_\mathfrak p)^h$, a local map $H\to A$, and a proper finitely presented $H$-model of $X$.

Any specified finite collection of finitely presented closed-fibre schemes, maps, finite étale algebras and their finite equality, inverse, group-action and covering witnesses can be included after adjoining finitely many chosen coefficient lifts. The original proper integer model and the finite algebraic witnesses are explicit additional data; this statement does not assert their existence for an arbitrary proper $X/A$.

## Statement references

[[def-henselian-pair-and-henselian-local-ring]]

[[def-locally-finite-presentation-morphism]]

[[def-proper-morphism]]

## Facts & Assumptions

**Given:** The henselian local ring, the one supplied proper integer model, and the specified finite family of fibre data and witnesses.

[F1] Properness and finite presentation are stable under the specified base changes. [[def-proper-morphism]] [[def-locally-finite-presentation-morphism]] [[lem-projective-properness-and-finite-type-surjectivity-without-choice]]

[F2] Étale morphisms are open and admit finite standard charts in ZF. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

## Proof

**Proof technique:** adjoin the finite coefficient list and use the universal property of ordinary henselization.

1.1 Adjoin to the image of $B_0$ in $A$ finitely many chosen representatives of the finitely many coefficients occurring in the specified closed-fibre equations and inverse, multiplication, unit, perfect-trace and group-action matrices. This gives a finitely generated integer subalgebra $B\subseteq A$. Base change the *supplied* proper $X_0$ to $B$; [F1] keeps it proper and finitely presented, and its base change to $A$ remains the given $X$. [F1, given, construct, algebra]

2.1 Let $\mathfrak p=B\cap\mathfrak m$ and $R=B_\mathfrak p$. The ordinary henselization $H=R^h$ is constructed as the colimit of finite towers of monic simple-root extensions with specified residue roots; finite towers admit a common refinement, and uniqueness of simple-root lifts makes the comparison maps compatible. Since $A$ is henselian, each specified root has a unique image in $A$, giving a local map $H\to A$. Base change the proper model from $B$ to $H$ by [F1]. The field $\kappa(\mathfrak p)$ injects into $k$, as it is the residue field of a local subring of $A$. [F1, step 1.1, given, construct, algebra]

3.1 All the specified fibre coefficient matrices and equations now lie over $\kappa(\mathfrak p)$. Since that field injects into $k$, an equality between these finitely many coefficients that holds in $k$ already holds over $\kappa(\mathfrak p)$. This includes inverses, actions, perfect-trace conditions and finite presentation equations. A specified finite family of étale maps that covers after extending to $k$ also covers before extension: by [F2] its omitted locus is closed in a finite-type scheme over $\kappa(\mathfrak p)$. If nonempty, finite Noether normalization and the determinant trick produce a point with finite residue field extension; tensoring that nonzero finite field algebra with $k$ remains nonzero, and a maximal ideal exists by finite-dimensional linear algebra, contradicting coverage after extension. The same argument applies to each of the finitely many overlap covers. [F2, step 2.1, given, construct, algebra] ∎
