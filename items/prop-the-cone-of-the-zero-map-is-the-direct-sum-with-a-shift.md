---
id: prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift
kind: proposition
title: "The cone of the zero map is the direct sum with a shift"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-shift-of-a-chain-complex, prop-finite-biproducts-of-complexes-are-computed-degreewise]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

For chain complexes $C_\bullet$ and $D_\bullet$,
$$\operatorname{Cone}(0:C_\bullet\to D_\bullet)\cong D_\bullet\oplus C[1]_\bullet$$
as chain complexes.

## Facts & Assumptions

**Given:** Chain complexes $C_\bullet$ and $D_\bullet$.

[L1] The cone of a chain map has underlying graded object $D\oplus C[1]$ and
differential $(y,x)\mapsto(d^D(y)+f(x),-d^C(x))$
([[def-mapping-cone-of-a-chain-map]]).

[L2] Finite biproducts of complexes are computed degreewise
([[prop-finite-biproducts-of-complexes-are-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 For $f=0$, [L1] gives $$d_n^{\operatorname{Cone}(0)}(y,x)=(d_n^D(y),-d_{n-1}^C(x)),$$ which is exactly the block-sum differential on $D_n\oplus C[1]_n$. [L1, given, algebra]

2.1 Therefore the identity on the graded object $D\oplus C[1]$ is a chain isomorphism from $\operatorname{Cone}(0)$ to the direct-sum complex furnished by [L2]. [L2, step 1.1, algebra] ∎
