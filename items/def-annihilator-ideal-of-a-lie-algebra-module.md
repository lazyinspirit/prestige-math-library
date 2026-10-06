---
id: def-annihilator-ideal-of-a-lie-algebra-module
kind: definition
title: "The annihilator of a module over an enveloping algebra"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-universal-enveloping-algebra-as-a-tensor-quotient, prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra, def-left-right-and-two-sided-ideal, thm-ring-homomorphism-kernel-is-an-ideal, def-left-and-right-modules]
provenance:
  statement: literature-derived
  proof: not-applicable
justified_by: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, printed pp.123-124 (Definition 25.2 and the surrounding discussion of annihilators)"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Definition

Let $\mathfrak g$ be a complex Lie algebra and let $M$ be a nonzero left
$U(\mathfrak g)$-module with action
$\rho_M\colon U(\mathfrak g)\to\operatorname{End}_{\mathbb C}(M)$, the unital
extension of the $\mathfrak g$-action supplied by
[[prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra]].
The **annihilator** of $M$ is

$$\operatorname{Ann}_{U(\mathfrak g)}(M)=\{u\in U(\mathfrak g): um=0\text{ for every }m\in M\}=\ker\rho_M,$$

and for $m\in M$ one writes $\operatorname{Ann}(m)=\{u\in U(\mathfrak g): um=0\}$.
Then $\operatorname{Ann}_{U(\mathfrak g)}(M)$ is a two-sided ideal of
$U(\mathfrak g)$ ([[def-left-right-and-two-sided-ideal]]), equal to the
intersection of the left ideals $\operatorname{Ann}(m)$, $m\in M$; the action
descends to a faithful action of the quotient algebra
$U(\mathfrak g)/\operatorname{Ann}_{U(\mathfrak g)}(M)$ on $M$.

## Remarks

- **The annihilator is the kernel of the action.** $\rho_M$ is a
  $\mathbb C$-algebra homomorphism, so its kernel is a two-sided ideal by
  [[thm-ring-homomorphism-kernel-is-an-ideal]]; unwinding definitions, this
  kernel is exactly the set of $u$ annihilating every $m\in M$.
- **Pointwise annihilators are left ideals.** For fixed $m$, the map
  $u\mapsto um$ is $\mathbb C$-linear, so $\operatorname{Ann}(m)$ is an
  additive subgroup; and $u\in\operatorname{Ann}(m)$ implies $vu\in
  \operatorname{Ann}(m)$ for every $v\in U(\mathfrak g)$ because
  $(vu)m=v(um)=0$. Thus each $\operatorname{Ann}(m)$ is a left ideal, and
  $\operatorname{Ann}_{U(\mathfrak g)}(M)=\bigcap_{m\in M}\operatorname{Ann}(m)$
  because a $u$ annihilating every $m$ is exactly one lying in every
  pointwise annihilator.
- **Faithfulness of the quotient action.** If $u+\operatorname{Ann}M$ acts as
  zero on $M$, then $um=0$ for all $m\in M$, so
  $u\in\operatorname{Ann}M$ and the class is zero. The quotient therefore acts
  faithfully, and $M$ is a left module over it by the same formula
  ([[def-left-and-right-modules]]).
