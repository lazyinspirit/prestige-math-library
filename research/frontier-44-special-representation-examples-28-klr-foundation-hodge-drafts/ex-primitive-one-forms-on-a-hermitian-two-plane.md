---
id: "ex-primitive-one-forms-on-a-hermitian-two-plane"
kind: "example"
title: "Primitive one-forms and the Weil star sign"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions", "lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Example

On the oriented Euclidean two-plane with $\omega=e\wedge f$, the type-$(1,0)$ form $u=e+if$ is primitive and satisfies $*u=-iu$. Its positive norm density is $u\wedge *\bar u=2e\wedge f$.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Verification

1.1 Contraction by $\Lambda$ lowers degree by two and therefore kills $u$. The complementary-basis formula gives $*e=f$ and $*f=-e$, hence $*u=f-ie=-iu$, agreeing with the primitive-star formula with $n=k=1$. [given, algebra]

2.1 Since $\bar u=e-if$, one has $*\bar u=i\bar u$ and $u\wedge\bar u=-2i e\wedge f$. Therefore $u\wedge *\bar u=2e\wedge f$, positive for the prescribed orientation. [step 1.1, given, algebra] ∎
