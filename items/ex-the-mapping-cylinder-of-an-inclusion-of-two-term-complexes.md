---
id: ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes
kind: example
title: "The mapping cylinder of an inclusion of two-term complexes"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cylinder-of-a-chain-map, thm-the-mapping-cylinder-factors-a-chain-map, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Example

Let $C_\bullet=\mathbb Z[0]$ and let $D_\bullet$ be the two-term complex
$$0\to \mathbb Z\xrightarrow{1}\mathbb Z\to0,$$
with the right copy in degree $0$. The inclusion $f:C_\bullet\to D_\bullet$
into degree $0$ has mapping cylinder
$$\operatorname{Cyl}(f)_1\cong \mathbb Z\oplus\mathbb Z,\qquad \operatorname{Cyl}(f)_0\cong \mathbb Z\oplus\mathbb Z,$$
with differentials read directly from the cylinder formula, and the projection
$p:\operatorname{Cyl}(f)\to D$ is a homotopy equivalence.

## Facts & Assumptions

**Given:** The inclusion $f:\mathbb Z[0]\to(0\to\mathbb Z\xrightarrow{1}\mathbb Z\to0)$.

[L1] The mapping-cylinder terms and differential are given explicitly by
[[def-mapping-cylinder-of-a-chain-map]].

[L2] The mapping cylinder factors a chain map through a homotopy equivalence
([[thm-the-mapping-cylinder-factors-a-chain-map]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] degreewise leaves the displayed two copies of $\mathbb Z^2$ in degrees $1$ and $0$; all other terms vanish. [L1, given, algebra]

2.1 The same construction comes with maps $i$ and $p$, and [L2] identifies $p$ as a chain-homotopy equivalence. So this example is an explicit two-term instance of the general factorization theorem. [L2, step 1.1, algebra] ∎
