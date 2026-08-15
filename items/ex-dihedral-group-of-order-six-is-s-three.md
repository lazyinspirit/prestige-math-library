---
id: ex-dihedral-group-of-order-six-is-s-three
kind: example
title: ' $S_3\cong C_3\rtimes C_2$ via inversion'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-internal-external-semidirect-product-equivalence, cor-dihedral-groups-as-semidirect-products, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Example

The symmetric group on three letters satisfies

$$S_3\cong C_3\rtimes C_2,$$

where the nonidentity element of $C_2$ acts on $C_3$ by inversion.

## Facts & Assumptions

**Given:** In $S_3$, let $r=(123)$ and $s=(12)$.

[L1] Normal subgroups $N,H$ satisfying $G=NH$ and $N\cap H=1$ realise the corresponding external semidirect product ([[thm-internal-external-semidirect-product-equivalence]]).

[L2] For $n\ge1$ the dihedral group $D_n$ is $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ with inversion action, of order $2n$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L3] $S_3$ is the group of permutations of a three-element set ([[def-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $N=\langle r\rangle=\{1,(123),(132)\}$ has index two in the six-element group $S_3$, and direct conjugation by every permutation preserves the set of the two $3$-cycles. Hence $N\trianglelefteq S_3$. [L3, algebra]

1.2 The subgroup $H=\langle s\rangle$ has order two, intersects $N$ trivially, and the six products $r^is^j$ are distinct. Thus $S_3=NH$. [L3, algebra]

2.1 Since $srs^{-1}=(132)=r^{-1}$, [L1] gives the asserted semidirect product, which is the order-six case of [L2]. [step 1.1, step 1.2, L1, L2, algebra] ∎
