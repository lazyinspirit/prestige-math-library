---
id: def-trace-form-of-a-finite-dimensional-representation
kind: definition
title: Trace form of a representation
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-representation-of-a-lie-algebra, def-trace-of-an-endomorphism]
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
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §6.1"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§6.1, trace-form definition preceding Lemma 6.1, printed p. 105"
---

## Definition

Let $\rho:\mathfrak g\to\mathfrak{gl}(V)$ be a representation for which
$V$ is finite-dimensional. Its **trace form** is the scalar-valued function

$$B_\rho(x,y)=\operatorname{tr}\bigl(\rho(x)\rho(y)\bigr)\qquad(x,y\in\mathfrak g).$$

The trace is the basis-independent trace from
[[def-trace-of-an-endomorphism]], so the definition does not depend on a basis
of $V$. The acting algebra $\mathfrak g$ need not be finite-dimensional. The
finite-dimensionality of $V$ is essential here because it is the standing
hypothesis under which the cited trace has been defined. No nondegeneracy,
faithfulness, or symmetry is asserted in the definition.
