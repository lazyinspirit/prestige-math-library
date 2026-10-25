---
id: rem-whitehead-group-construction-remains-at-owned
kind: remark
title: "The Whitehead group construction remains AT-owned"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-stable-general-linear-group-and-elementary-subgroup-of-a-ring, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, def-finite-based-free-chain-complex-and-its-contraction-torsion]
dependency_level: 0
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 2 §2.1, printed pp. 24--27"
---
## Remark

This page proves only the handle-geometric interpretation of torsion and the
presentation-relative s-cobordism theorem. The construction of $K_1(R)$, of the
elementary subgroup, of the Whitehead group $\operatorname{Wh}(\pi)$, and of
contraction torsion for finite based free complexes is owned by AT-22 and is
consumed here without redefinition: the stable groups and the basis ambiguity
$[\pm g]$ are those of
[[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]], the
normality of the elementary subgroup is
[[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]],
the quotient defining $K_1(R)$ and $\operatorname{Wh}(\pi)$ and its
functoriality are those of
[[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], and the
contraction torsion of a bounded contractible finite based free complex is
[[def-finite-based-free-chain-complex-and-its-contraction-torsion]].

In particular this page does not compute $\operatorname{Wh}(\pi)$ for any new
class of groups and does not introduce a competing sign or module convention:
the right-module and group-ring conventions used for handle chains are fixed by
AT-22 and AT-23, and the page consumes the published nonzero class
$[1-t^2-t^3]\in\operatorname{Wh}(C_5)$ instead of recomputing it.
