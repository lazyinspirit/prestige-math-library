---
id: thm-closed-projective-embedding-by-homogeneous-generators
kind: theorem
title: "Closed projective embedding from a radical homogeneous ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-algebraic-set, def-homogeneous-coordinate-ring, lem-projective-irreducibility-homogeneous-prime]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. If $J$ is homogeneous radical and
$V_+(J)\ne\varnothing$, then $I_+(V_+(J))=J$; its inclusion in
$\mathbf P_k^n$ is a closed projective embedding and its homogeneous
coordinate ring is $k[x_0,\ldots,x_n]/J$.

## Proof

**Given:** The Axiom of Choice and a homogeneous radical ideal $J$ with
nonempty $V_+(J)$.

1.1 The projective radical-ideal correspondence gives $I_+(V_+(J))=J$. [given]

2.1 $V_+(J)$ is closed by definition, so its inclusion is a closed embedding in the classical coordinate sense. [step 1.1]

3.1 Substitution in the coordinate-ring definition gives the displayed quotient. [step 1.1, algebra] ∎
