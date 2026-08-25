---
id: rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure
kind: remark
title: "The published refutations separating nullity from nowhere density hold verbatim for Lebesgue measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure, fs-measure-zero-implies-nowhere-dense, fs-nowhere-dense-implies-measure-zero, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, prop-countable-subsets-of-rn-are-lebesgue-null, def-measure-zero-and-content-zero, def-countable-choice]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

Assume the Axiom of Countable Choice. Two notions of smallness for subsets of $\mathbb{R}$ are now in play: being
$\lambda_1$-null, and being nowhere dense
([[def-nowhere-dense-meager]]). Neither implies the other, and the two published
refutations transfer to Lebesgue measure without a new argument, because
[[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]] identifies
$\lambda_1^*(A)=0$ with the covering condition of
[[def-measure-zero-and-content-zero]] that those items are stated in.

**Null does not imply nowhere dense.** [[fs-measure-zero-implies-nowhere-dense]]
records the false claim and its witness. Read through the agreement theorem, the
witness is a $\lambda_1$-null set whose closure is all of $\mathbb{R}$; the
rationals of the line are one, and their nullity is also the case $n=1$ of
[[prop-countable-subsets-of-rn-are-lebesgue-null]].

**Nowhere dense does not imply null.**
[[fs-nowhere-dense-implies-measure-zero]] records that false claim, and
[[thm-fat-cantor-set-has-positive-measure]] proves of the Smith–Volterra–Cantor
set $S$ that it is compact, perfect and nowhere dense while no cover of it by
intervals has total length below $2^{-1}$. The equality of the closed-interval
cover infimum with Lebesgue outer measure in
[[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]] therefore
gives $\lambda_1^*(S) \ge 2^{-1}$, so $S$ is nowhere dense and not
$\lambda_1$-null. The exact value $\lambda_1(S) = 1/2$ is computed on the
companion page.

**Why the transfer needs saying at all.** The published items were written before
any outer measure existed here, so they are stated as assertions about interval
covers and cannot mention $\lambda_1$. Without the agreement theorem, a reader
meeting both vocabularies would have two apparently unrelated notions of "measure
zero" on the line; with it there is one notion, and the earlier refutations keep
their force in the new vocabulary.
