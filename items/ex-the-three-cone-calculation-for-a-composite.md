---
id: ex-the-three-cone-calculation-for-a-composite
kind: example
title: "The three-cone calculation for a composite"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-the-three-cone-calculation-for-a-composite-chain-map, ex-the-cone-of-multiplication-by-m-on-the-integers, thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Example

Let $f=\times m$ and $g=\times n$ on the stalk complex $\mathbb Z[0]$, with
$m,n\neq0$. Then the map
$$\alpha:\operatorname{Cone}(m)\to\operatorname{Cone}(nm)$$
from the three-cone calculation has cone chain-isomorphic to
$$\operatorname{Cone}(n)\oplus \operatorname{Cone}(1_{\mathbb Z[1]}).$$
Since the second summand is contractible, $\operatorname{Cone}(\alpha)$ is
homotopy equivalent to $\operatorname{Cone}(n)$.

## Facts & Assumptions

**Given:** Nonzero integers $m$ and $n$.

[L1] The three-cone calculation identifies $\operatorname{Cone}(\alpha)$ with
$\operatorname{Cone}(g)\oplus\operatorname{Cone}(1_{C[1]})$
([[lem-the-three-cone-calculation-for-a-composite-chain-map]]).

[L2] The cone of multiplication by an integer on $\mathbb Z[0]$ is the two-term
complex with that multiplication as differential
([[ex-the-cone-of-multiplication-by-m-on-the-integers]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the composable pair $\times m,\times n$ on $\mathbb Z[0]$. [L1, given, algebra]

2.1 Using [L2], the first summand becomes the two-term complex $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to0$, while the second summand is contractible. This is exactly the displayed calculation. [L2, step 1.1, algebra] ∎
