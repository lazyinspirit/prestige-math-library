---
id: cor-dihedral-groups-as-semidirect-products
kind: corollary
title: ' $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ with inversion action has order $2n$ and the dihedral relations'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-generalized-dihedral-group, prop-canonical-subgroups-of-an-external-semidirect-product, lem-group-power-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

For $n\ge1$, the generalized dihedral group of the cyclic group $C_n$ is the semidirect product

$$\operatorname{Dih}(C_n)=C_n\rtimes C_2,$$

where the nonidentity element of $C_2$ acts on $C_n$ by inversion. It has order $2n$, and if $C_n=\langle r\rangle$ and $C_2=\langle s\rangle$, then

$$r^n=s^2=1,\qquad srs^{-1}=r^{-1},$$

and every element has a unique form $r^i$ or $r^is$ with $0\le i<n$.

This group is written $D_n$ here and called the dihedral group of order $2n$; the notation is fixed by this Statement rather than assumed. At the two degenerate values the group is abelian: $\operatorname{Dih}(C_1)\cong C_2$, and inversion on $C_2$ is the identity, so $\operatorname{Dih}(C_2)\cong C_2\times C_2$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, $C_n=\langle r\rangle$, and $C_2=\langle s\rangle$.

[L1] The generalized dihedral group is the semidirect product by the inversion action ([[def-generalized-dihedral-group]]).

[L2] In an external semidirect product, every element has a unique factorisation from the two canonical subgroups, and conjugation induces the defining action ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L3] Integer powers in a group satisfy the usual addition and inverse laws ([[lem-group-power-laws]]).


## Proof

**Proof technique:** direct.

1.1 Specialising [L1] to $C_n$ gives $C_n\rtimes C_2$. The factor relations $r^n=1$ and $s^2=1$ hold in the canonical subgroups. [L1, L2]

1.2 The conjugation formula in [L2] gives $srs^{-1}=r^{-1}$. By [L3], it follows that $sr^i=r^{-i}s$ for every integer $i$. [L2, L3]

2.1 Unique factorisation from [L2] says every pair is represented uniquely by $r^is^j$ with $0\le i<n$ and $j\in\{0,1\}$. Hence $\operatorname{Dih}(C_n)$ has $2n$ elements, in the two asserted forms, with the standard dihedral multiplication, and $r,s$ generate it. [L2, step 1.2]

3.1 At $n=1$ the group $C_1$ is trivial, so $\operatorname{Dih}(C_1)=C_1\rtimes C_2\cong C_2$; at $n=2$ every element of $C_2$ is its own inverse, so the inversion action is the identity and the semidirect product is direct, giving $\operatorname{Dih}(C_2)\cong C_2\times C_2$. Both are consistent with the order and normal-form claims of step 2.1. [step 2.1, L1, L2] ∎
