---
id: def-cft-wzw-insertion-data
kind: definition
title: Integrable WZW insertions on a punctured sphere
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-untwisted-affine-central-extension
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-positive-energy-affine-module
  - def-dual-coxeter-number-for-normalized-form
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - def-axiom-of-choice
  - lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy
dependency_roles:
  def-untwisted-affine-central-extension: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  def-positive-energy-affine-module: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  thm-highest-weight-classification-of-finite-dimensional-irreducible-representations: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
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
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §§1.3 and 5; positive-integral level and integrable affine insertions.
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 2, §2.8, positive integral affine highest weights.
---

## Definition

Fix a finite-dimensional complex simple $\mathfrak g$, its invariant form $B$ with long roots of square $2$, dual Coxeter number $h^\vee$, and highest root $\theta$. At level $k\in\mathbb Z_{\ge0}$, an **integrable WZW insertion of label $\lambda$** at a marked point is the affine module $L_k(\lambda)$ of lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy, where $\lambda$ is dominant integral and $\langle\lambda,\theta^\vee\rangle\le k$. The affine bracket is the one in def-untwisted-affine-central-extension, with central generator acting by $k$, and $[d,x_m]=m x_m$. The highest vector has $d$-weight zero. The horizontal top is the degree-zero space $V_\lambda$, with its finite-dimensional $\mathfrak g$-action. A finite collection of such insertions uses one common level $k$ and the same normalized form.

The Sugawara denominator is $k+h^\vee$, which is nonzero under these hypotheses. The grading asserted here is the lower-bounded affine degree $-d$; restrictedness has the exact meaning in def-positive-energy-affine-module. It does not assert an integral Sugawara $L_0$-spectrum, unitarity, a finite-rank conformal-block bundle, or a full left-right CFT.

## Definition references


[[def-positive-energy-affine-module]]

[[lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy]]

[[def-untwisted-affine-central-extension]]

## Facts & Assumptions

**Given:** The normalized affine convention and the level, dominant-weight, and integrability hypotheses above.

[A1] Full AC is assumed through [[def-axiom-of-choice]], as required by the finite-dimensional highest-weight classification.

[F1] [[lem-cft-wzw-integrable-affine-highest-weight-modules-exist-positive-energy]] proves existence, integrability, finite-dimensional horizontal top, degree grading, and restrictedness.

[F2] [[def-untwisted-affine-central-extension]] fixes the central term and normalized form used by the Sugawara denominator.

[F3] [[def-positive-energy-affine-module]] calls a module restricted when every vector is killed by all sufficiently high positive current modes; this definition alone supplies no degree grading.

[F4] [[def-dual-coxeter-number-for-normalized-form]] defines the dual Coxeter number $h^\vee$ for the normalized form; it is positive for a finite-dimensional simple $\mathfrak g$.

[F5] [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]] classifies the finite-dimensional simple horizontal top by its dominant integral highest weight.

## Proof

1.1 The lemma [F1] applies to every allowed $\lambda$, so the module named in the Definition exists, is simple and integrable, and has the specified finite-dimensional top. The classification in [F5] fixes that top as $V_\lambda$. Its current action is at level $k$ with the bracket [F2]. This makes the label data a well-defined collection of affine insertions. [A1, F1, F2, F5, given]

2.1 Since $k\ge0$ and $h^\vee>0$ by [F4], $k+h^\vee\ne0$. The degree and restrictedness assertions are precisely those proved in [F1] using the actual meaning [F3]; no integer $L_0$-spectrum is inferred. [F1, F3, F4, given] ∎
