---
id: def-nilpotent-linear-transformation-and-nil-representation
kind: definition
title: Nilpotent transformations and nil representations
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilpotent-endomorphism, def-representation-of-a-lie-algebra]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §2, Engel's theorem"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Theorem 2.8 and Corollary 2.11, printed pp. 13–14"
---

## Definition

An endomorphism $T:V\to V$ is **nilpotent** when $T^m=0$ for some positive
integer $m$, as in [[def-nilpotent-endomorphism]].

Let $\rho:\mathfrak g\to\mathfrak{gl}(V)$ be a representation
([[def-representation-of-a-lie-algebra]]). The representation is **nil** if
$\rho(x)$ is a nilpotent endomorphism of $V$ for every $x\in\mathfrak g$.
The exponent may depend on $x$.

This condition concerns every operator in the represented Lie algebra; it is
not enough to check an arbitrarily chosen vector-space basis. It is also
distinct from saying that the abstract Lie algebra $\mathfrak g$, or merely
the image $\rho(\mathfrak g)$ under its bracket, is nilpotent. The zero action
on any $V$, and every action on the zero vector space, is nil.
