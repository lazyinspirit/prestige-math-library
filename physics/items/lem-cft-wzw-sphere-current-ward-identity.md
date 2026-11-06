---
id: lem-cft-wzw-sphere-current-ward-identity
kind: lemma
title: Current Ward identity for WZW sphere coinvariants
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-cft-wzw-sphere-current-coinvariants
  - def-cft-wzw-insertion-data
  - def-universal-affine-vacuum-module
  - def-axiom-of-choice
dependency_roles:
  def-cft-wzw-sphere-current-coinvariants: mathematical-premise
  def-cft-wzw-insertion-data: mathematical-premise
  def-universal-affine-vacuum-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 3, §§3.2–3.5, current Ward identities and KZ derivation.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §§1–5, global current-algebra action and local expansions.
---

## Statement

Let $F_{\mathbf z}$ be a linear functional in the dual of the fixed-coordinate coinvariant quotient in def-cft-wzw-sphere-current-coinvariants, with the infinity factor equal to the vacuum. For top vectors $v_j\in V_{\lambda_j}$, $x\in\mathfrak g$, and each $i\le n$,
$
F_{\mathbf z}(v_1\otimes\cdots\otimes x_{-1}v_i\otimes\cdots\otimes v_n\otimes\mathbf1)
=\sum_{j\ne i}\frac{F_{\mathbf z}(v_1\otimes\cdots\otimes x_0v_j\otimes\cdots\otimes v_n\otimes\mathbf1)}{z_i-z_j}.
$
Here $x_{-1}$ at the $i$th slot and $x_0$ at the $j$th slot are the local affine current modes in the fixed coordinates.

## Statement references

[[def-cft-wzw-sphere-current-coinvariants]]

## Facts & Assumptions

[A1] Full AC is assumed in [[def-cft-wzw-insertion-data]] for existence of each supplied insertion module and its top. The identity is conditional on those modules.

**Given:** Distinct $z_1,\ldots,z_n$, top vectors $v_j$, a common level $k$, and $F_{\mathbf z}$ as in the Statement.

[F1] [[def-cft-wzw-sphere-current-coinvariants]]: a block functional annihilates the summed action of every rational current section.

[F2] [[def-cft-wzw-insertion-data]]: positive current modes kill each top vector, and the horizontal zero modes give the $\mathfrak g$-action.

[F3] [[def-universal-affine-vacuum-module]]: $x_m\mathbf1=0$ for $m\ge0$ at infinity.

## Proof

1.1 Apply [F1] to the rational current $x/(z-z_i)$. At $z_i$, its Laurent expansion is $x t_i^{-1}$, whose local action on the slot is $x_{-1}$. At $z_j\ne z_i$, its Taylor expansion is
$
\frac{x}{z-z_i}=\sum_{m\ge0}(-1)^m(z_j-z_i)^{-m-1}x\,t_j^m.
$
The residue-mode convention sends $x\,t_j^m$ to $x_m$. On the top vector only the $m=0$ term survives, by [F2]. At infinity,
$
\frac{x}{z-z_i}=\frac{x\,t_\infty}{1-z_i t_\infty}
=\sum_{m\ge0}z_i^m x\,t_\infty^{m+1},
$
whose modes all have positive index and kill the vacuum by [F3]. [A1, F1, F2, F3, given]

2.1 The annihilation equation from step 1.1 is the left side of the Statement plus
$\sum_{j\ne i}(z_j-z_i)^{-1}F_{\mathbf z}(\ldots,x_0v_j,\ldots)$, equal to zero. Since $(z_j-z_i)^{-1}=-(z_i-z_j)^{-1}$, moving that sum to the other side gives exactly the displayed identity. [step 1.1, algebra] ∎
