---
id: op-gts-gamma-bmt-inequality-beyond-named-cy3-families
kind: open-problem
title: Gamma-BMT Brill–Noether inequality beyond named CY3 families
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-bridgeland-stability-condition-with-support-property
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-gamma-bmt-and-brill-noether-data
dependency_roles:
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-gamma-bmt-and-brill-noether-data: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Soheyla Feyzbakhsh, Naoki Koseki, Zhiyu Liu, and Nick Rekuski, Stability conditions on Calabi-Yau threefolds via Brill-Noether theory of curves
      url: https://arxiv.org/pdf/2509.24990v2
      locator: Conjecture 5.9 and Theorem 1.3; §2.4 for the source Gamma-BMT convention
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Open problem

For every smooth projective threefold $(X,H)$ with $K_X\cong\mathcal O_X$, $H^1(X,\mathcal O_X)=0$, $H$ very ample, and $\operatorname{Pic}(X)=\mathbb ZH$, determine whether there are a smooth surface $S\in|H|$ and a smooth curve $C\in|H|_S|$ such that
$
\operatorname{BN}_C<\chi(\mathcal O_X(H)),
$
where $\operatorname{BN}_C$ and $\chi$ have the source definitions fixed on this page. The source Theorem 1.3 proves that this inequality suffices for $\Gamma$-BMT with some $\Gamma\cdot H\ge0$. The open question is whether the inequality holds for every such $(X,H)$.

## Open problem references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-bridgeland-stability-condition-with-support-property]]

[[def-gts-gamma-bmt-and-brill-noether-data]]

## Status

The cited 2025 source states the inequality as Conjecture 5.9 and proves the sufficiency implication in Theorem 1.3. Its Theorem 1.4 establishes $\Gamma$-BMT only for the listed weighted-projective complete intersections, Fano-fourfold divisors, and cyclic-cover families. A bounded targeted search on 2026-10-26 found no later primary source resolving Conjecture 5.9; this is not an exhaustive literature search. The conjectural inequality is not a logical premise or supplier.
