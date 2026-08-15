---
id: fs-tensoring-preserves-injections
kind: false-statement
title: "False: tensoring preserves injections"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-isomorphisms-for-module-tensor-products, thm-right-exactness-of-tensor-products, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, thm-int-comm-ring, lem-int-cancellation]
aliases: []
landmark: false
short: "Tensoring need not preserve injections"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "Christopher Dennis, Week 4"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Statement

**False claim:** tensoring an injective module homomorphism with a fixed module always gives an injective homomorphism.

The injection $\mathbb Z\xrightarrow{\cdot2}\mathbb Z$ becomes the zero map after tensoring with $\mathbb Z/2$ over $\mathbb Z$.

## Facts & Assumptions

**Given:** The regular $\mathbb Z$-module and the quotient module $\mathbb Z/2$.

[L1] $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]), and multiplication by a nonzero integer can be cancelled ([[lem-int-cancellation]]).

[L2] In $\mathbb Z/2$, modular multiplication by $2$ is zero ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).

[L3] The tensor-unit isomorphism $\mathbb Z\otimes_{\mathbb Z}N\cong N$ sends $a\otimes n$ to $an$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L4] Tensor products preserve right-exact sequences, but this statement does not assert preservation of injections ([[thm-right-exactness-of-tensor-products]]).

## Refutation

**Proof technique:** direct.

1.1 The map $u:\mathbb Z\to\mathbb Z$, $u(a)=2a$, is injective: if $2a=2b$, cancellation in [L1] gives $a=b$. [given, L1]

1.2 Under the unit identifications [L3], the map $u\otimes1_{\mathbb Z/2}$ is multiplication by $2$ on $\mathbb Z/2$, hence is zero by [L2]. [given, L2, L3]

2.1 The zero map on $\mathbb Z/2$ is not injective because $\overline1\ne\overline0$ by [L2]. Thus step 1.1 is an injection whose tensor map is not injective, refuting the claim. This is consistent with [L4], which guarantees right exactness only. [step 1.1, step 1.2, L2, L4] ∎
