---
id: def-p-primary-selmer-groups-for-an-elliptic-curve
kind: definition
title: "Finite and Infinite p-Primary Selmer Groups of an Elliptic Curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - cor-global-kummer-exact-sequence-for-abelian-variety
  - def-axiom-of-choice
  - def-dependent-choice
  - def-n-selmer-group-of-abelian-variety
  - def-number-field
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC and DC are carried by the supplied global Kummer and n-Selmer conventions;
  the filtered direct limit itself uses no additional choice.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves"
      url: "https://www.jmilne.org/math/Books/EC2.pdf"
      locator: "Chapter IV §2, printed pp. 118–121: p^n-Selmer and p-primary Selmer groups."
verification: {}
---

## Definition

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a number field and let $E/K$ be an elliptic curve, meaning a smooth proper geometrically connected genus-one curve with a specified $K$-rational point. For $m\ge1$, let $E[p^m]$ be the kernel group scheme of multiplication by $p^m$, and let $\operatorname{Sel}_{p^m}(E/K)$ be the $p^m$-Selmer group defined by the fppf Kummer local images. The inclusions $E[p^m]\hookrightarrow E[p^{m+1}]$ induce transition maps on these Selmer groups, and the **$p$-primary Selmer group** is
$$\operatorname{Sel}_{p^\infty}(E/K):=\varinjlim_{m\ge1}\operatorname{Sel}_{p^m}(E/K).$$
The **$p$-adic Tate module** is $T_p(E):=\varprojlim_m E[p^m](\overline K)$ with transition maps multiplication by $p$, and $E[p^\infty](\overline K):=\varinjlim_mE[p^m](\overline K)$ with transition maps the inclusions.

## Definition references

[[def-n-selmer-group-of-abelian-variety]]

[[cor-global-kummer-exact-sequence-for-abelian-variety]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Milne, *Elliptic Curves*, Chapter IV §2](https://www.jmilne.org/math/Books/EC2.pdf)

## Facts & Assumptions

**Given:** AC and DC; a number field $K$; an elliptic curve $E/K$; a prime $p$; and its finite Kummer Selmer groups.

[F1] [[def-n-selmer-group-of-abelian-variety]]: the finite Selmer group is the subgroup of global fppf Kummer cohomology classes whose restriction at each place lies in the local Kummer image.

[F2] [[cor-global-kummer-exact-sequence-for-abelian-variety]]: the Kummer connecting maps are natural for the maps of multiplication sequences defining the inclusions $E[p^m]\hookrightarrow E[p^{m+1}]$.

## Verification

1.1 The multiplication sequences for $p^m$ and $p^{m+1}$ form a commutative diagram with identity on the middle copy of $E$ and multiplication by $p$ on the right copy. Naturality in [F2] therefore sends each local Kummer image at level $m$ into the local Kummer image at level $m+1$. [given, F2, construct]

2.1 Hence the transition maps restrict to homomorphisms of the finite Selmer groups [F1]. Their filtered direct limit is a well-defined abelian group with the induced Galois action, which is the stated $p$-primary Selmer group. [given, F1, step 1.1, algebra] ∎
