---
id: rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure
kind: remark
title: "How the Lebesgue change-of-variables formula relates to the published formula for Jordan content"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-linear-change-of-variables-for-lebesgue-measure, thm-linear-images-scale-jordan-content-by-absolute-determinant, thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content, def-jordan-inner-and-outer-content, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

Two determinant formulas are now in force, for two different set functions, and
this remark says how they meet.

**The published one is about Jordan content.**
[[thm-linear-images-scale-jordan-content-by-absolute-determinant]] states that a
linear endomorphism $T$ of $\mathbb{R}^n$ with standard matrix $A$ sends every
bounded Jordan set $E$ to a bounded Jordan set with
$\operatorname{cont}(T(E)) = |\det A|\operatorname{cont}(E)$, and that a singular
linear image has content zero
([[def-jordan-inner-and-outer-content]]).

**This page's is about Lebesgue measure.** Assuming the Axiom of Countable Choice,
[[thm-linear-change-of-variables-for-lebesgue-measure]] states the same identity
with $\operatorname{cont}$ replaced by $\lambda_n$, for **every** Lebesgue
measurable $E$, bounded or not, and with the singular case stated as nullity of
$T[E]$ rather than as a product.

**Where the two agree, and why that is not an accident.** On a bounded Jordan
set the two set functions take the same value, by
[[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]], so on
that class the two formulas are the same equation read twice. Neither implies
the other: the published formula says nothing about a Lebesgue measurable set
that is not Jordan measurable, and this page's formula says nothing about
Jordan measurability of an image, which the published one asserts.

**What the extension costs, and where it is spent.** Passing from bounded Jordan
sets to arbitrary Lebesgue measurable sets is not a matter of taking limits: the
Lebesgue proof runs through the uniqueness of a normalised translation-invariant
Borel measure, the factorisation of an invertible matrix into elementary
matrices, and the fact that a Lipschitz image of a null set is null. The last of
these is what carries the argument across the gap between Borel sets and the
larger Lebesgue class, and it is why the change of variables holds on all of
$\mathcal{L}(\mathbb{R}^n)$ and not merely on the Borel sets.
