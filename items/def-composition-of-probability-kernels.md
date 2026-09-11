---
id: "def-composition-of-probability-kernels"
kind: "definition"
title: "Composition of probability kernels"
deps: ["def-measure-kernel-and-probability-kernel", "thm-measurability-of-integration-against-a-kernel"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
justified_by: ["lem-kernel-composition-is-well-defined-and-associative"]
status: "draft"
origin: "pipeline"
---

## Definition

For probability kernels $K:(S,\Sigma)\to(T,\Tau)$ and $L:(T,\Tau)\to(U,\Upsilon)$, their **composition**, in the order K then L, is
$$(KL)(s,A)=\int_T L(t,A)\,K(s,dt),\qquad s\in S,\quad A\in\Upsilon.$$

The kernel convention is [[def-measure-kernel-and-probability-kernel]]. The integrand is measurable in t and lies in $[0,1]$, so the displayed number exists in $[0,1]$. As a function of s it is measurable by [[thm-measurability-of-integration-against-a-kernel]], applied to the product-measurable function $(s,t)\mapsto L(t,A)$: its threshold preimages are rectangles $S\times\{t:L(t,A)>a\}$. The probability-kernel assertion and associativity are justified by [[lem-kernel-composition-is-well-defined-and-associative]].

Composition refers to specified pointwise kernels. Almost-everywhere classes alone do not define this formula until representatives and the relevant measures are specified. For an empty source the candidate is the empty map. No choice of versions or assumption of AC enters this definition.
