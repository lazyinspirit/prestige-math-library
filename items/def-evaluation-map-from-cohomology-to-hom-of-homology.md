---
id: def-evaluation-map-from-cohomology-to-hom-of-homology
title: "The evaluation map from cohomology to Hom of homology"
kind: definition
status: published
origin: pipeline
deps: ["def-cochain-complex-hom-from-a-chain-complex", "def-homology-object-of-a-chain-complex"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
---

## Definition

Let $C$ be a chain complex of $R$-modules and let $G$ be an $R$-module. For
every $n\in\mathbb Z$, define the evaluation map
$$\operatorname{ev}_n:H^n\operatorname{Hom}_R(C,G)\longrightarrow \operatorname{Hom}_R(H_nC,G),\qquad \operatorname{ev}_n([f])([z])=f(z).$$
A cocycle $f:C_n\to G$ vanishes on $B_nC$, so its value depends only on
$[z]$; changing $f$ by a coboundary does not change its value on cycles. Thus
the displayed formula is well defined.
