---
id: def-se-local-negative-space
kind: definition
domain: mathematics
title: Local negative Sobolev space in the compactness argument
status: draft
deps:
  - def-se-control-cutoffs
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-distributional-equation
  - math:def-dual-space-of-a-normed-space
  - def-se-dirichlet-scale
  - math:def-axiom-of-choice
dependency_roles:
  def-se-control-cutoffs: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  math:def-dual-space-of-a-normed-space: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 7
---

## Definition

Assume Countable Choice. Let $\Omega'=\Omega\cap B_{R+3}(0)$ be the bounded open truncated exterior used for the localization. The complex Sobolev space $H^2(\Omega')$ consists of the $L^2$ classes with all weak derivatives through order two in $L^2$, with norm $\|v\|_{H^2}=(\sum_{|\alpha|\le2}\|D^\alpha v\|_{L^2}^2)^{1/2}$. Let $H^2_0(\Omega')$ be the closure of $C_c^\infty(\Omega';\mathbb C)$ in that norm.

In the localized compactness argument, write $H^{-2}(\Omega')=(H^2_0(\Omega'))'$ for the space of bounded conjugate-linear functionals $F:H^2_0(\Omega')\to\mathbb C$. Equip it with the norm $\|F\|_{H^{-2}}=\sup_{\|v\|_{H^2}\le1}|F(v)|$. Its evaluation pairing $\langle F,v\rangle=F(v)$ is linear in $F$ and conjugate-linear in $v$. Here the prime denotes this antidual; the continuous linear dual is identified with it by conjugating functional values.

## Definition references

[[def-se-control-cutoffs]]

[[def-se-foundation-integer-sobolev-notation]]

[[math:def-dual-space-of-a-normed-space]]

## Justification

The open set and localization notation are supplied by [[def-se-control-cutoffs]]. The Sobolev classes, norm, test functions and closure are defined in [[def-se-foundation-integer-sobolev-notation]] under Countable Choice; in particular, the closure definition does not assert a boundary trace characterization.

For each bounded conjugate-linear $F$, the functional $v\mapsto\overline{F(v)}$ is bounded and complex-linear, with the same supremum norm. Conversely, conjugating the values of a bounded complex-linear functional gives a bounded conjugate-linear functional. Thus this operation is an isometric conjugate-linear bijection with the continuous linear dual of [[math:def-dual-space-of-a-normed-space]], and the displayed norm and evaluation pairing are well-defined.

The interior distribution convention of [[def-se-foundation-distributional-equation]] uses a complex-linear test-function pairing without conjugation. It is a separate convention from the antidual evaluation above; the definition alone asserts no boundary trace or distributional equation.

## Remarks

For this comparison, additionally assume the Axiom of Choice as in [[math:def-axiom-of-choice]]. Under the exterior geometry fixed above, this local space is distinguished from the exterior Dirichlet spectral space $H_D^{-2}(\Omega)$ of [[def-se-dirichlet-scale]]. The notation here does not assert that the two spaces are equal or identify their elements. This additional assumption is used only to invoke that spectral-scale interface; the local antidual definition above retains its stated Countable Choice hypothesis.

## Source notes

The article introduces $H^{-2}(\Omega')=(H^2_0(\Omega'))'$ in the proof of Lemma 3.2(a). Its citation records attribution; the definition and pairing convention are justified by the independent suppliers above.
