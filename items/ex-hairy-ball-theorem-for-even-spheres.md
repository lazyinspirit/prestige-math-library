---
id: ex-hairy-ball-theorem-for-even-spheres
kind: example
title: "The hairy-ball theorem for even spheres"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-nowhere-zero-vector-field-forces-zero-euler-characteristic, def-euler-characteristic-of-a-compact-manifold, def-smooth-vector-field-as-a-tangent-bundle-section, cor-homology-of-spheres, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed p. 134 (the even-dimensional sphere as the standard application)"
    - title: "Allen Hatcher, Algebraic Topology, Section 2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Example 2.42 and the Euler characteristic of spheres, printed p. 141"
dependency_level: 7
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the applications of Poincare-Hopf below.

Let $m\ge1$ and $M=S^{2m}\subseteq\mathbb R^{2m+1}$. Then
$$\chi(S^{2m})=1+1=2$$
([[def-euler-characteristic-of-a-compact-manifold]]), so by
[[cor-nowhere-zero-vector-field-forces-zero-euler-characteristic]] no smooth
vector field on $S^{2m}$ can be nowhere zero
([[def-smooth-vector-field-as-a-tangent-bundle-section]]): every smooth field
on an even-dimensional sphere has at least one zero. This recovers the
classical hairy-ball theorem by the Euler-characteristic route rather than by
the degree of the antipodal map.

## Facts & Assumptions

**Given:** The even-dimensional sphere $S^{2m}\subseteq\mathbb R^{2m+1}$, $m\ge1$.

[F1] $H_0(S^{2m};\mathbb Q)\cong\mathbb Q$, $H_{2m}(S^{2m};\mathbb Q)\cong \mathbb Q$ and all other rational homology groups vanish ([[cor-homology-of-spheres]]).

[F2] A closed manifold admitting a nowhere-zero smooth vector field has $\chi=0$ ([[cor-nowhere-zero-vector-field-forces-zero-euler-characteristic]], [[def-euler-characteristic-of-a-compact-manifold]]).

## Verification

1.1 By [F1] the only nonzero rational Betti numbers of $S^{2m}$ are in degrees $0$ and $2m$, both equal to $1$, so the alternating sum of the definition gives $\chi(S^{2m})=(-1)^0\cdot1+(-1)^{2m}\cdot1=2\ne0$. [F1, algebra]

2.1 If a smooth field on $S^{2m}$ were nowhere zero, [F2] would force $\chi(S^{2m})=0$, contradicting step 1.1; hence every smooth vector field on an even-dimensional sphere has at least one zero. [F2, step 1.1, algebra] ∎
