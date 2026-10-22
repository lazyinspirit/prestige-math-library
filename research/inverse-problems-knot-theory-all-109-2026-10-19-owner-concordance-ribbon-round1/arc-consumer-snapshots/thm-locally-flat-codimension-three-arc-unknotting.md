---
id: thm-locally-flat-codimension-three-arc-unknotting
kind: theorem
title: "Locally flat arcs in the four-dimensional product are unknotted"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - thm-higher-dimensional-spheres-are-simply-connected
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "J. L. Bryant, Piecewise Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/pltop.pdf"
      locator: "§7, Theorem 7.8 and Corollary 7.9; §8, Theorems 8.1 and 8.3, pp.30–32"
---

## Statement

Let $M=S^3\times[0,1]$. Let $\alpha:[0,1]\to M$ be a locally flat proper embedding with endpoints $(p,0)$ and $(p,1)$ and with product collars at those endpoints. Then there is a continuous family of homeomorphisms $H_t:M\to M$, $t\in[0,1]$, such that $H_0$ is the identity, every $H_t$ preserves the two boundary levels and is the identity near them, and $H_1(\alpha([0,1]))=\{p\}\times[0,1]$. If in addition $\alpha(s)=(p,s)$ on neighborhoods of $0$ and $1$, the family can be chosen so that $H_1(\alpha(s))=(p,s)$ for every $s$.

## Statement references

[[def-locally-flat-proper-surface-and-concordance-collars|The locally flat pair charts and proper endpoint collars]]

## Facts & Assumptions

**Given:** A locally flat proper arc $\alpha$ with the endpoint and collar data in the Statement.

[F1] $S^3$ is simply connected, so $S^3\times[0,1]$ is simply connected. ([[thm-higher-dimensional-spheres-are-simply-connected]])

[F2] Local flatness gives neighborhoods of each point of the arc modeled by a straight interval in a four-dimensional chart; at endpoints the pair chart is a half-space chart. ([[def-locally-flat-proper-surface-and-concordance-collars]])

[L1] The missing ingredient is the relative codimension-three topological unknotting/isotopy theorem for locally flat arcs: a homotopy rel endpoint collars can be replaced by an isotopy through locally flat embeddings, and that isotopy extends to a level-preserving ambient isotopy. No such supplier body or complete proof has been verified in the inspected library or source material.

## Proof

**Given:** $\alpha$ and its specified endpoint collars.

1.1 The product collars identify the image of $\alpha$ near each end with the vertical arc, but do not require its source parameter to equal the ambient height. Choose an increasing homeomorphism $\varphi:[0,1]\to[0,1]$ agreeing with that height parameter on the two endpoint collars and interpolate monotonically between them. Then $\beta(s)=(p,\varphi(s))$ agrees with $\alpha$ on those collars. Since $M$ is simply connected by [F1], the loop formed by traversing $\alpha$ and then $\beta$ backwards is null-homotopic, so the two arcs are homotopic relative to their common endpoint collars. In the additional parametrized case take $\varphi(s)=s$. [F1, given, construct]

2.1 To conclude the theorem, this homotopy must be upgraded to an isotopy through locally flat embedded arcs and extended to an ambient family of homeomorphisms preserving the boundary levels. That upgrade is exactly [L1]; it is not supplied by the smooth isotopy-extension theorem, which applies to smooth embeddings and diffeomorphisms. The claim is therefore escalated pending a complete topological codimension-three proof or an exact verified supplier. [F2, L1, step 1.1]

## Sources

[[def-locally-flat-proper-surface-and-concordance-collars]]

[[thm-higher-dimensional-spheres-are-simply-connected]]

## Parametrization convention

The general conclusion concerns the image of an arc. A boundary-fixed ambient isotopy cannot change a nonstandard source parametrization in its fixed endpoint neighborhood. For example, $\alpha(s)=(p,\varphi(s))$ for an increasing homeomorphism $\varphi$ not equal to the identity near an endpoint already has the required straight image, but cannot satisfy $H_1(\alpha(s))=(p,s)$ there if $H_1$ fixes that neighborhood. The extra endpoint parametrization hypothesis in the second clause is therefore necessary. The locally flat ambient-unknotting assertion remains a separate unresolved proof obligation above.

Once image straightening has been established, the extra parametrized conclusion requires no further unknotting theorem. Write the straightened arc as $(p,\psi(s))$, where $\psi$ is an increasing homeomorphism equal to the identity near the ends. In an explicit product ball $D^3\times I$ about the vertical arc, take a continuous cutoff $\chi:D^3\to[0,1]$ equal to $1$ near $p$ and $0$ near the ball boundary. The maps $(x,t)\mapsto(x,(1-u\chi(x))t+u\chi(x)\psi^{-1}(t))$, $0\le u\le1$, are homeomorphisms: for each $x$ the second coordinate is a strictly increasing interval homeomorphism. They glue to the identity outside the ball, are fixed near the end levels, and at $u=1$ correct the arc parameter. This observation does not supply the still-missing image-straightening proof.
