---
id: "prop-suspension-preserves-sphere-map-degree"
kind: "proposition"
title: "Suspension preserves sphere map degree"
deps: ["def-degree-of-a-self-map-of-an-oriented-sphere", "cor-suspension-isomorphism-in-reduced-singular-homology"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Proposition 2.33, p.137"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Proposition 2.33, p.137"
status: "draft"
origin: "pipeline"
proof_strategy: "Use the natural suspension square. Specify the unreduced two-cone suspension already used by the library, whose sphere is S^(n+1)."
---

## Statement

For $n\ge1$ and $f:S^n\to S^n$, let $\Sigma f$ be its two-cone (unreduced) suspension. Orient $\Sigma S^n\cong S^{n+1}$ by the natural suspension isomorphism. Then $\deg(\Sigma f)=\deg(f)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $n\ge1$. Choose a generator $[S^n]$ of $H_n(S^n;\mathbb Z)\cong\mathbb Z$, using cor-homology-of-spheres. For a continuous self-map $f:S^n\to S^n$, its **degree** is the unique integer satisfying $$f_*[S^n]=\deg(f)[S^n].$$ The induced map is furnished by prop-relative-homology-is-functorial-for-maps-of-pairs with empty subspaces. Replacing the same generator in source and target by its negative does not change the integer. For a map between separately oriented copies of $S^n$, use their separately specified generators; reversing just one orientation changes the sign. The unreduced definition here is restricted to $n\ge1$. ([[def-degree-of-a-self-map-of-an-oriented-sphere]])

[F2] Let $G$ be an abelian group. For a based well-pointed space $X$—meaning that the basepoint inclusion $\{x_0\}\hookrightarrow X$ is a cofibration—reduced singular homology has natural isomorphisms $\widetilde H_{n+1}(\Sigma X;G)\cong\widetilde H_n(X;G)$ for all integers $n$. Here $\Sigma X$ is the suspension with two distinct apices, as in def-adjunction-cone-suspension. ([[cor-suspension-isomorphism-in-reduced-singular-homology]])

## Proof

1.1 Choose a source basepoint $x_0$ and the target basepoint $f(x_0)$. Each sphere is well-pointed at its chosen point: rotate a CW structure with a vertex to that point and use the vertex cofibration. Thus $f$ is a based map between these choices; the underlying two-cone suspension is unchanged. Thus F2 gives a natural isomorphism $s:\widetilde H_{n+1}(\Sigma S^n;\mathbb Z)\to\widetilde H_n(S^n;\mathbb Z)$. Choose the upstairs generator mapping to the downstairs generator. [F2]

2.1 Naturality gives $s(\Sigma f)_*=f_*s$. Applied to the upstairs generator, the right side is $\deg(f)$ times the downstairs generator. Since $s$ is injective, the upstairs multiple is also $\deg(f)$. For $n\ge1$ these reduced groups equal the top unreduced groups defining degree. [F1, step 1.1, algebra] ∎
