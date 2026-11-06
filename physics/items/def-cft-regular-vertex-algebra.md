---
id: def-cft-regular-vertex-algebra
kind: definition
title: Regular conformal vertex algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-conformal-vertex-algebra
dependency_roles:
  def-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§3, Definition 3.1, printed p. 5."
---

## Definition

A conformal vertex algebra $V$ of CFT type is **regular** when every weak $V$-module is an algebraic direct sum of simple ordinary $V$-submodules. Here weak means lower-truncated vertex-algebra module, simple means nonzero with no proper nonzero submodule, and ordinary means grading-restricted with semisimple $L_0$. The zero module is the empty direct sum. Regularity concerns all weak modules; complete reducibility only for admissible modules is a separate, weaker property.

## Definition references

[[def-vertex-algebra-module]]

[[def-ordinary-vertex-module]]

[[def-conformal-vertex-algebra]]
