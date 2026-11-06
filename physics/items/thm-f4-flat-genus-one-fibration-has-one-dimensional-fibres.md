---
id: thm-f4-flat-genus-one-fibration-has-one-dimensional-fibres
kind: theorem
title: "Proper flat genus-one fibrations have one-dimensional fibres"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC, inherited from the published local-constancy theorem."
deps:
  - def-f4-genus-one-fibration
  - def-axiom-of-choice
  - thm-flat-families-fibre-dimension-locally-constant
dependency_roles:
  def-f4-genus-one-fibration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-flat-families-fibre-dimension-locally-constant: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.30"
      url: "https://stacks.math.columbia.edu/tag/05F6"
      locator: "Proper flat finitely presented families and locally constant fibre dimension."
    - title: "Timo Weigand, TASI lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§3.1, pp. 14–17; flat fibrations and curve fibers."
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
---

## Statement
Assume full AC. Let $B$ be a connected integral base and let $\pi:Y\to B$ be a proper, flat, finitely presented morphism whose geometric generic fiber is a smooth geometrically integral genus-one curve. For $b\in B$, write $Y_b=Y\times_B\operatorname{Spec}\kappa(b)$ for the scheme-theoretic fiber. Then every $Y_b$ has Krull dimension one.

## Statement references

[[def-f4-genus-one-fibration]]

[[thm-flat-families-fibre-dimension-locally-constant]]

## Facts & Assumptions

**Given:** Full AC, connected $B$, and a proper flat finitely presented morphism $\pi:Y\to B$ with geometric generic fiber a smooth geometrically integral genus-one curve.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]; the local-constancy supplier below assumes it.

[F1] For a proper flat finitely presented morphism, the function $b\mapsto\dim Y_b$ is locally constant, with empty fibers assigned dimension $-\infty$ ([[thm-flat-families-fibre-dimension-locally-constant]]).

[F2] The generic fiber and genus-one condition have the meanings fixed in [[def-f4-genus-one-fibration]]: after algebraic closure of $K(B)$ it is a smooth proper geometrically integral curve with $\dim H^1(Y_{\bar\eta},\mathcal O)=1$.

## Proof

**Proof technique:** reduce to the locally constant fiber-dimension function.

1.1 By [F2], the geometric generic fiber is a curve, hence has Krull dimension one. In particular the fiber-dimension function of [F1] takes value one at the generic point $\eta\in B$. [A1, F1, F2, given]

2.1 By [F1], the fiber-dimension function is locally constant on $B$. A locally constant function on a connected topological space is constant: the inverse image of each value is open, and its complement is the union of the other open level sets, hence also open; a nonempty level set is therefore all of $B$. Since the value at $\eta$ is one by step 1.1, every fiber has dimension one, including that no fiber is empty. [F1, step 1.1, given] ∎
