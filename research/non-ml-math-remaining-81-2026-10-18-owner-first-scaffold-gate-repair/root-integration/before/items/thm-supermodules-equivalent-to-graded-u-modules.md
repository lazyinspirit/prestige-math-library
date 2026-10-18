---
id: thm-supermodules-equivalent-to-graded-u-modules
kind: theorem
title: Lie supermodules are graded enveloping-superalgebra modules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-lie-supermodule
  - def-universal-enveloping-superalgebra
  - thm-universal-property-of-the-enveloping-superalgebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sigiswald Barbier, A minimal representation for the orthosymplectic Lie-superalgebra, Proposition 2.6.3"
      url: https://backoffice.biblio.ugent.be/download/8560881/8560883
      locator: "Printed p. 37: representations of g and U(g) are equivalent."
    - title: "Vera Serganova, Kac–Moody Superalgebras and Integrability, §10"
      url: https://math.berkeley.edu/~serganov/papers/superk.pdf
      locator: "Printed §§10.1–10.2: weight modules and representations of contragredient Lie superalgebras; only the general module interface is reused."
---

## Statement

Let $\mathfrak g$ be a complex Lie superalgebra. Restriction along $\iota:\mathfrak g\to U(\mathfrak g)$ and extension by the universal property give mutually inverse correspondences between left $\mathfrak g$-supermodules and unital graded left $U(\mathfrak g)$-modules. The correspondences preserve parity-preserving homomorphisms.

## Facts & Assumptions

**Given:** A complex Lie superalgebra $\mathfrak g$, a graded vector space $V$, and either of the two module structures in the Statement.

[F1] [[def-lie-supermodule]]: a supermodule action satisfies $[x,y]v=x(yv)-(-1)^{|x||y|}y(xv)$, and its homomorphisms preserve parity and the action.

[F2] [[def-universal-enveloping-superalgebra]]: $U(\mathfrak g)$ is the tensor quotient imposing $xy-(-1)^{|x||y|}yx=[x,y]$.

[F3] [[thm-universal-property-of-the-enveloping-superalgebra]]: every parity-preserving Lie map into an associative superalgebra with its supercommutator extends uniquely to a unital associative-superalgebra map from $U(\mathfrak g)$.

## Proof




1.1 Given a $\mathfrak g$-supermodule, regard each homogeneous $x$ as the parity-$|x|$ endomorphism $v\mapsto x\cdot v$. The module identity in [F1] says exactly that this map preserves the Lie bracket into the endomorphism supercommutator, so [F3] extends it uniquely to a unital graded algebra action of $U(\mathfrak g)$. [given, F1, F3, construct]


1.2 Conversely, restrict a unital graded left $U(\mathfrak g)$-module action along $\iota$. Applying the quotient relation [F2] to $v$ gives $[x,y]v=x(yv)-(-1)^{|x||y|}y(xv)$; grading and bilinearity are inherited from the module action. Thus the restriction is a $\mathfrak g$-supermodule. [given, F2, algebra]


2.1 Starting from a supermodule, the extension in [F3] restricts to the original action by its defining property. Starting from a $U(\mathfrak g)$-module, the extension of its restriction agrees with the original action on every generator $\iota(x)$ and on the unit; these generate the quotient algebra by [F2], so the actions agree on all of $U(\mathfrak g)$. [F2, F3, step 1.1, step 1.2, algebra]


3.1 A parity-preserving linear map intertwines the $\mathfrak g$-actions exactly when it intertwines the restrictions of the $U(\mathfrak g)$-actions: one direction is restriction, and the other follows on products of generators and then on finite linear combinations. The correspondence is therefore mutually inverse on objects and morphisms. [F1, F2, step 2.1, algebra] ∎
