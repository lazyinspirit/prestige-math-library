---
id: ex-the-cone-of-multiplication-by-m-on-the-integers
kind: example
title: "The cone of multiplication by m on the integers"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-abelian-groups-form-an-abelian-category]
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

Fix a nonzero integer $m$ and let $f:\mathbb Z[0]\to\mathbb Z[0]$ be
multiplication by $m$. Then
$$\operatorname{Cone}(f)\cong \bigl(0\to \mathbb Z\xrightarrow{m}\mathbb Z\to0\bigr),$$
with the left copy of $\mathbb Z$ in degree $1$ and the right copy in degree $0$.
Hence
$$H_1(\operatorname{Cone}(f))=0,\qquad H_0(\operatorname{Cone}(f))\cong \mathbb Z/m\mathbb Z.$$

## Facts & Assumptions

**Given:** A nonzero integer $m$ and the chain map $f=\times m:\mathbb Z[0]\to\mathbb Z[0]$.

[L1] The cone of a chain map has terms $D_n\oplus C_{n-1}$ and differential
$(y,x)\mapsto(d(y)+f(x),-d(x))$ ([[def-mapping-cone-of-a-chain-map]]).

[L2] A chain map is a quasi-isomorphism exactly when its cone is acyclic
([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

## Verification

**Proof technique:** direct.

1.1 Since the source and target are stalk complexes in degree $0$, [L1] leaves only one nonzero differential, namely $$d_1:\mathbb Z\to\mathbb Z,\qquad d_1(x)=mx.$$ [L1, given, algebra]

2.1 Because $m\neq0$, $\ker(d_1)=0$ and $\operatorname{coker}(d_1)=\mathbb Z/m\mathbb Z$. Therefore the homology groups are exactly as displayed, and [L2] shows that the cone is acyclic precisely when $m=\pm1$. [L2, step 1.1, algebra] ∎
