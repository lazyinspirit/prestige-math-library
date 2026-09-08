---
id: lem-projective-variety-cone-irreducible
kind: lemma
title: "projective variety cone irreducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-cone-projective-set, lem-projective-irreducibility-homogeneous-prime]
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
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite and proof repair; not independent judging or whole-closure certification."
    delegated_by: "Owner-requested UC-73 audit"
---

## Statement

The affine cone over a classical projective variety is irreducible.

## Proof

**Given:** A classical projective variety $X$.

1.1 By the irreducibility clause of [[lem-projective-irreducibility-homogeneous-prime]], $I_+(X)$ is prime. This clause and its cone-ideal argument require no AC. Homogeneous defining equations show that $C(X)$ consists exactly of zero and the nonzero representatives of points of $X$. Decomposing a polynomial vanishing on this cone into homogeneous components and evaluating on all scalar multiples shows, over the infinite field $k$, that each component vanishes on $X$. Hence $I(C(X))=I_+(X)$. [given, algebra]

2.1 Suppose $C(X)=A\cup B$ for two proper relatively closed subsets. Choose a point of $C(X)\setminus A$ and a polynomial $f$ from defining equations of $A$ that is nonzero there. Likewise choose a polynomial $g$ vanishing on $B$ but not on all of $C(X)$. Then $fg$ vanishes on the cone, so $fg\in I(C(X))=I_+(X)$, although neither factor belongs to that prime ideal. This is impossible. [step 1.1, algebra]

3.1 The cone is nonempty since it contains zero, and step 2.1 excludes a union of two proper closed subsets. Thus it is irreducible. [step 2.1, given] ∎
