---
id: def-blowup-scheme-along-ideal
kind: definition
title: "Blowup of a scheme along an ideal sheaf"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-rees-algebra-ideal-sheaf
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-quasi-coherent-ideal-sheaf
  - def-axiom-of-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.33.1 (tag 01OG) and Lemma 31.33.2 (tag 0804)"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Motivating example 19.1, pp. 379-381; explicit construction 19.3, pp. 383-387"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Definition

Assume the Axiom of Choice as inherited from the relative Proj construction
([[def-axiom-of-choice]]). Let $X$ be a scheme and let
$\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent ideal sheaf of finite
type ([[def-quasi-coherent-ideal-sheaf]]), with zero scheme
$Z=V(\mathcal I)$, the closed subscheme of $X$ cut out by $\mathcal I$. The
**blowup of $X$ along $\mathcal I$** (or **along $Z$**) is the $X$-scheme

$$\operatorname{Bl}_{\mathcal I}X:=\operatorname{Proj}_X\mathcal R(\mathcal I),$$

the relative Proj of [[def-relative-proj-quasi-coherent-graded-algebra]]
applied to the Rees algebra sheaf
$\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$ of
[[def-rees-algebra-ideal-sheaf]], equipped with its structural morphism

$$\pi\colon\operatorname{Bl}_{\mathcal I}X\longrightarrow X$$

and its relative twists $\mathcal O(n)$, $n\in\mathbb Z$, both as in
[[def-relative-proj-quasi-coherent-graded-algebra]]. The notation records the
ideal sheaf $\mathcal I$, not merely the closed subscheme $Z$; the finite type
hypothesis is part of the definition because the later structural results for
blowups (invertibility of the pullback of $\mathcal I$, the exceptional
divisor, and base change) are proved under it.

In the affine case $X=\operatorname{Spec}A$ with
$\mathcal I=\widetilde I$ for an ideal $I\subseteq A$, the Rees algebra sheaf
is $\mathcal R(\mathcal I)\cong\widetilde{\bigoplus_{n\ge0}I^n}$
([[def-rees-algebra-ideal-sheaf]]), and the absolute case of the relative Proj
construction identifies $\operatorname{Bl}_{\mathcal I}X$ with the absolute
Proj of the Rees algebra $R(I)=\bigoplus_{n\ge0}I^nt^n$
([[def-relative-proj-quasi-coherent-graded-algebra]]); the structural
morphism is then the Proj structural morphism to $\operatorname{Spec}A$.

The exceptional subscheme of the blowup is denoted $E$ and is introduced
separately; no property of $E$ is assumed here.

## Remarks

- The Axiom of Choice is inherited from the affine-local Proj construction
  used by [[def-relative-proj-quasi-coherent-graded-algebra]]; the blowup
  selects no further data beyond that interface.
- This item only sets up the construction. Projectivity of $\pi$, the
  universal property of the blowup, the invertibility of the pullback of
  $\mathcal I$, and flat base change are supplied by later items of this page
  and are not asserted here.
