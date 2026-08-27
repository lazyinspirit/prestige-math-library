---
id: def-lebesgue-stieltjes-interval-set-function
kind: definition
title: "The interval set function attached to a nondecreasing right-continuous function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-half-open-interval-algebra-on-r, rem-lebesgue-stieltjes-convention-ledger]
justified_by: [prop-stieltjes-interval-set-function-is-finitely-additive]
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $F : \mathbb{R} \to \mathbb{R}$ be nondecreasing and right-continuous, and
adopt the $(a,b]$ convention of [[rem-lebesgue-stieltjes-convention-ledger]].

For a single h-interval $I$, define

$$\mu_{0,F}((a,b]) := F(b) - F(a),$$

$$\mu_{0,F}((a,\infty)) := \sup_{t>a}\big(F(t) - F(a)\big),$$

$$\mu_{0,F}((-\infty,b]) := \sup_{t<b}\big(F(b) - F(t)\big),$$

$$\mu_{0,F}(\mathbb{R}) := \sup_{a<b}\big(F(b) - F(a)\big).$$

For a set $E \in \mathcal{H}$ presented as a finite disjoint union
$E = \bigcup_{i=1}^m I_i$ of h-intervals, define

$$\mu_{0,F}(E) := \sum_{i=1}^m \mu_{0,F}(I_i),$$

with $\mu_{0,F}(\varnothing) := 0$ for the empty union.

The same set can have more than one disjoint h-interval presentation, so the
value needs a well-definedness proof. That is exactly the content of
[[prop-stieltjes-interval-set-function-is-finitely-additive]], recorded here in
`justified_by`.
