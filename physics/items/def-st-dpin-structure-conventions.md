---
id: def-st-dpin-structure-conventions
kind: definition
title: "DPin structure convention"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 0
domain: mathematics
physical_scope: null
deps:
  - def-singular-cohomology-ring
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-axiom-of-choice
dependency_roles:
  def-singular-cohomology-ring: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1"
      url: "https://arxiv.org/pdf/2608.30774v1"
      locator: "§4.1–4.2 and Appendix A.2: DPin structure, closed Type I anomaly decomposition, and explicit exclusion of open strings."
verification:
  precheck: n/a
---

## Definition

Adopt the DPin group convention of Kawahira–Kawanago–Saito–Wada. For $n\ge1$, let $DPin(n)$ be the group extension
$$1\longrightarrow\mathbb Z_2^L\times\mathbb Z_2^R\longrightarrow DPin(n)\longrightarrow O(n)\longrightarrow1,$$
where an orientation-reversing element of $O(n)$ exchanges the two fermion-number factors. After quotienting by the diagonal subgroup $\mathbb Z_2^{\rm diag}$, fix one of the source identifications $DPin(n)/\mathbb Z_2^{\rm diag}\cong O(n)\times\mathbb Z_2^{\rm rel}$. With this identification, a DPin structure on a real rank-$n$ bundle $E\to M$ is a lift through the resulting central extension, equivalently the source convention of a class $a\in H^1(M;\mathbb F_2)$ specifying the relative $\mathbb Z_2$ bundle and a trivialization of
$$w_2(E)+w_1(E)^2+w_1(E)\smile a\in H^2(M;\mathbb F_2).$$
The two possible identifications differ by replacing $a$ with $a+w_1(E)$. For the tangent bundle, write $DPin$ structure on $M$ and set $E=TM$. This is a convention for the tangential structure; the extension-class computation is adopted from the cited source.

## Definition references

[[def-singular-cohomology-ring]]

[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]

[[def-axiom-of-choice]]

[Kawahira et al., §4.1](https://arxiv.org/pdf/2608.30774v1)

## Remarks

When $w_1(E)=0$, the obstruction reduces to $w_2(E)=0$ and the extra class $a$ is unconstrained, giving the source’s $\operatorname{Spin}\times\mathbb Z_2$ restriction. This definition adopts the source’s extension convention and proves no bordism or anomaly computation.
