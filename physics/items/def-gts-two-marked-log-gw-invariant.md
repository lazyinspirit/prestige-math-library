---
id: def-gts-two-marked-log-gw-invariant
kind: definition
title: Two-marked logarithmic Gromov-Witten invariant of a surface pair
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: physics
category: string-theory
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
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
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §§3.1-3.2, relative and two-marked logarithmic Gromov-Witten invariants
---

## Definition

Let $X$ be a smooth projective surface over $\mathbb C$, let $D\subset X$ be a smooth anticanonical divisor, and let $\beta\in\operatorname{NE}(X)$ be an effective curve class with $d=\beta\cdot D\ge2$. For positive integers $p,q$ with $p+q=d$, suppose the source's proper moduli stack of basic genus-zero stable logarithmic maps to the divisorial log pair $(X,D)$, with two marked points of contact orders $p$ and $q$, is equipped with its source virtual class. Write it as $\mathcal M_{0,(p,q)}((X,D),\beta)$ and write $\operatorname{ev}_1$ for evaluation at the first marked point, whose image lies in $D$.

For a point class $[x]\in H^2(D;\mathbb Q)$, the source's two-marked logarithmic Gromov-Witten invariant is
$$R_{0,(p,q)}((X,D),\beta)=\int_{[\mathcal M_{0,(p,q)}((X,D),\beta)]^{\mathrm{vir}}}\operatorname{ev}_1^*[x].$$
The source convention fixes the first contact to $p$ at the constrained point and the second contact to $q$ at an unconstrained marked point. The invariant is a rational virtual degree, not an enumerative count unless a separate transversality and multiplicity argument proves that interpretation.

For disconnected $D=\coprod_a D_a$, the two boundary markings carry component indices as discrete data. A component-assigned stack records contact $p$ on $D_a$ and $q$ on $D_b$; the stack without indices is the disjoint union of all compatible assignments, with virtual class their sum. The point class $[x]$ means an actual chosen point $x\in D_a$ on a specified component: its evaluation insertion kills assignments of the first marking to another component. Write $R^{a,b}_{0,(p,q)}$ for the assigned invariant. For this chosen $x\in D_a$, the index-free invariant sums over compatible $b$; changing $a$ can change the value. A sum of point classes over components instead sums these invariants and is a different insertion. For connected $D$ this reduces to the original convention.

This is a conditional definition: the source's proper logarithmic moduli construction and its virtual class are part of the input. The ordinary stable-map and Behrend-Fantechi definitions cited below do not by themselves construct that logarithmic moduli stack or its logarithmic obstruction theory.

## Definition references

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

[[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]
