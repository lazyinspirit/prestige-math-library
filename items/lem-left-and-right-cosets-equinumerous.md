---
id: lem-left-and-right-cosets-equinumerous
kind: lemma
title: "Inversion induces a bijection $gH\\mapsto Hg^{-1}$ from left cosets to right cosets"
status: published
origin: session
deps: [def-coset, lem-coset-membership-and-equality, lem-group-inverse-laws, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

For $H\le G$, the rule

$$gH\longmapsto Hg^{-1}$$

is a well-defined bijection from the set of left cosets of $H$ to the set of
right cosets of $H$. Its inverse sends $Hg$ to $g^{-1}H$.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[L1] For left cosets, $gH=kH$ if and only if $g^{-1}k\in H$; for right cosets, $Hg=Hk$ if and only if $gk^{-1}\in H$ ([[lem-coset-membership-and-equality]]).

[L2] In a group, $(uv)^{-1}=v^{-1}u^{-1}$ and $(u^{-1})^{-1}=u$ ([[lem-group-inverse-laws]]).

[F1] A map with a two-sided inverse is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 If $gH=kH$, then $g^{-1}k\in H$ by [L1], so $(g^{-1}k)^{-1}=k^{-1}g\in H$. The right-coset criterion gives $Hg^{-1}=Hk^{-1}$, so the rule is well defined. [given, L1, L2]

1.2 Define the reverse rule by $Hg\mapsto g^{-1}H$. The same argument, with left and right interchanged, shows that it is well defined. [L1, L2]

2.1 The two composites send $gH$ to $(g^{-1})^{-1}H=gH$ and $Hg$ to $H(g^{-1})^{-1}=Hg$. Thus the rules are inverse bijections. [step 1.1, step 1.2, L2, F1] ∎
