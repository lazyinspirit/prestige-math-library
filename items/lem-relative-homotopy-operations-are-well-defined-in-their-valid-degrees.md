---
id: lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees
kind: lemma
title: Relative homotopy operations are well defined in their valid degrees
deps: ["def-relative-homotopy-group", "lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes", "thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Relative $\pi_n(X,A,x_0)$ is a group for $n\ge2$ and abelian for $n\ge3$. Restriction to $F=I^{n-1}\times\{0\}$ defines a pointed map $\partial:\pi_n(X,A,x_0)\to\pi_{n-1}(A,x_0)$, a homomorphism for $n\ge2$; for n=1 it records the component of the initial endpoint. Maps and homotopies of based pairs act functorially. No group structure on relative $\pi_1$ is asserted.

## Facts & Assumptions

[F1] Relative representatives keep all faces except the last-coordinate-zero face constant. [[def-relative-homotopy-group]]

[F2] Closed pasting works in each coordinate whose opposite faces are fixed. [[lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes]]

[F3] Endpoint-fixed coordinate homotopies give group laws, and two coordinates give interchange. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 For n≥2, concatenate and reverse in coordinate 1. Its two faces are part of J; hence F2 makes the product and pasted representative homotopies continuous. The reparametrizations and reversal contractions in F3 act only on coordinate 1. Every J-face remains at x0, and the last-coordinate-zero face continues to map into A. Thus those same explicit homotopies prove associativity, unit and inverses in the relative set. [F1, F2, F3]

2.1 If n≥3, coordinates 1 and 2 are both available without changing the distinguished coordinate. The four-quarter identity and the two-unit calculation of F3 therefore apply to relative classes, proving commutativity. If n=2 only one coordinate is available, and if n=1 none is; the argument makes no stronger claim in those degrees. [F1, F2, F3, step 1.1]

2.2 Restriction to F sends a relative homotopy to a boundary-fixed homotopy in A, since $\partial F\subseteq J$. For n≥2 it commutes pointwise with coordinate-1 concatenation, so $\partial[a*b]=\partial[a]*\partial[b]$. For n=1 a relative homotopy moves the initial endpoint along a path in A, so its component is well-defined. Constant representatives map to the distinguished element in every degree. [F1, F2, step 1.1]

3.1 For a map of based pairs $\phi:(X,A,x_0)\to(Y,B,y_0)$, composing a representative or its homotopy with φ preserves all triple conditions. Composition and identity act pointwise, and composition commutes with products and with restriction to F. A based pair homotopy $\Phi$ gives the representative homotopy $(u,t)\mapsto\Phi(a(u),t)$; it sends F into B and J to y0. This proves all functoriality and homotopy assertions. [F1, F2, step 2.2] ∎
