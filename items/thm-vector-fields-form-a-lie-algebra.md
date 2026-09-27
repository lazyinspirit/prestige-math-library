---
id: thm-vector-fields-form-a-lie-algebra
kind: theorem
title: "Smooth vector fields form a Lie algebra under the Lie bracket"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (thm-vector-fields-form-a-lie-algebra). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

The space $\mathfrak X(M)$ of smooth vector fields on $M$, together with the Lie
bracket, is a Lie algebra over $\mathbb R$.

## Facts & Assumptions

**Given:** Smooth vector fields $X,Y,Z$ on $M$.

[L1] In each chart, the commutator bracket has smooth coefficients and defines a smooth vector field ([[prop-coordinate-formula-for-the-lie-bracket]]).

[L2] The bracket is the operator commutator on smooth functions ([[def-lie-bracket-of-smooth-vector-fields]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the commutator $[X,Y]$ is locally a smooth vector field. Its local expressions agree on chart overlaps because they act as the same operator [L2] on smooth test functions, hence glue uniquely to a global smooth vector field. Thus the bracket closes on $\mathfrak X(M)$; no simultaneous choice of charts is needed. [L1, L2, given]

1.2 Bilinearity and antisymmetry follow from the corresponding identities for commutators of $\mathbb R$-linear endomorphisms of $C^\infty(M)$: $$ [aX+bY,Z]=a[X,Z]+b[Y,Z], \qquad [X,Y]=-[Y,X]. $$ [given, algebra]

1.3 The operator commutator satisfies the Jacobi identity $$ [X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0 $$ on $C^\infty(M)$, again by direct expansion in the endomorphism algebra. [given, algebra]

2.1 Steps 1.1-1.3 are exactly the Lie-algebra axioms, so smooth vector fields form a Lie algebra under the Lie bracket. [step 1.1, step 1.2, step 1.3] ∎
