---
id: fs-kernel-and-quotient-determine-a-group-extension
kind: false-statement
title: "False: the kernel and quotient determine a group extension up to isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-extension-of-groups, cor-dihedral-groups-as-semidirect-products, thm-classification-of-cyclic-groups]
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

## Statement

**False claim:** the isomorphism types of the kernel and quotient determine the middle group of a group extension up to isomorphism.

## Facts & Assumptions

**Given:** An odd prime $p$.

[A1] The false claim says that any two extensions of $C_2$ by $C_p$ have isomorphic middle groups.

[L1] An extension of $H$ by $N$ is a short exact sequence $1\to N\to G\to H\to1$ ([[def-split-extension-of-groups]]).

[L2] For $n\ge1$ the dihedral group $D_n$ is $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ with inversion action; taking $n=p$ gives $D_p$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L3] Finite cyclic groups are classified by their order ([[thm-classification-of-cyclic-groups]]).

## Refutation

**Proof technique:** direct.

1.1 The cyclic group $C_{2p}$ contains its index-two subgroup $C_p$, and quotienting by it gives $C_2$. Thus it is the middle group of an extension of $C_2$ by $C_p$ in the sense of [L1]. [L1, L3, algebra]

1.2 By [L2], the rotation subgroup $C_p$ is normal in $D_p$ and the complementary reflection subgroup maps isomorphically to the quotient $C_2$. Hence $D_p$ is another middle group for the same kernel and quotient. [L1, L2]

2.1 The group $C_{2p}$ is abelian, while $D_p$ is not: inversion on $C_p$ is nontrivial because $p$ is odd. Therefore they are not isomorphic, refuting [A1]. [step 1.1, step 1.2, A1, L2] ∎
