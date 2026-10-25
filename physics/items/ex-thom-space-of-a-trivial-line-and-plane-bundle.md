---
id: ex-thom-space-of-a-trivial-line-and-plane-bundle
kind: example
title: Thom spaces of trivial line and plane bundles
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [prop-thom-space-of-zero-and-trivial-bundles, thm-thom-isomorphism-for-a-trivial-oriented-bundle]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "trivial Thom spaces, printed pp.194–195"
---

## Example

For the standard oriented trivial real bundles,
$$\operatorname{Th}(\varepsilon_B^1)=\Sigma B_+;\quad \operatorname{Th}(\varepsilon_B^2)=\Sigma^2B_+.$$
Their Thom classes are the once- and twice-suspended units, and their Thom
isomorphisms are the corresponding relative suspension isomorphisms.

## Facts & Assumptions

**Given:** A space $B$, a commutative ring $R$, and the standard ordered orientations of $\mathbb R$ and $\mathbb R^2$.

[F1] [[prop-thom-space-of-zero-and-trivial-bundles]] calculates the Thom space of a trivial rank-$n$ bundle as $\Sigma^nB_+$.

[F2] [[thm-thom-isomorphism-for-a-trivial-oriented-bundle]] constructs its normalized class by the ordered relative suspension and proves cup by it is an isomorphism over arbitrary $R$ without AC.

## Verification

**Proof technique:** substitute ranks one and two.

1.1 Put $n=1$ in [F1].  The pair is $(B\times[-1,1],B\times\{-1,1\})$, its quotient is $\Sigma B_+$, and [F2]'s fiber generator is the connector of $(0,1)$ on the two boundary endpoints.  Thus its pullback to the product is the suspended unit and cup by it is the one-fold relative suspension isomorphism. [F1, F2]

1.2 Put $n=2$.  The quotient is $\Sigma^2B_+$, the ordered generator is the second connector applied to the rank-one generator, and [F2] gives the twice-iterated suspension isomorphism.  This fixes the orientation sign rather than choosing an unspecified generator. [F1, F2]

2.1 For empty $B$ the spaces are the one-point based space and cohomology maps are zero; for a point base the spaces are $S^1$ and $S^2$.  The zero ring, zero/unit classes, both interval endpoints, the two coordinate orders and both suspension endpoints are explicit in steps 1.1–1.2.  All connectors are finite and formulaic, so no AC is used. [F1, F2, step 1.1, step 1.2] ∎
