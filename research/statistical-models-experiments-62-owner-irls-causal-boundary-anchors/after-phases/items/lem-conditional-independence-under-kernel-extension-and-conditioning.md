---
id: lem-conditional-independence-under-kernel-extension-and-conditioning
kind: lemma
title: "Conditional independence under kernel extension and conditioning"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - def-conditional-independence-given-a-sigma-algebra
  - def-conditional-expectation-given-a-sigma-algebra
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - thm-tower-property-of-conditional-expectation
  - thm-dynkin-pi-lambda
  - thm-monotone-convergence-for-the-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume AC for the conditional-expectation and conditional-independence interfaces. No regular conditional distribution is constructed."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Aldous\u2013Chewi, Probability Theory, Lecture 9, Definition 9.1 and Lemma 9.2, printed pp. 35\u201336"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
dependency_level: 0
---

## Statement

Assume AC. Let $L,R,C,V$ be random elements in arbitrary measurable spaces. Suppose $L\perp\!\!\!\perp R\mid\sigma(C)$ and that the joint law of $(L,R,C,V)$ is obtained from the law of $(L,R,C)$ by a probability kernel $K(l,c,dv)$ depending only on $(l,c)$. Then
$$(L,V)\perp\!\!\!\perp R\mid\sigma(C),\qquad L\perp\!\!\!\perp R\mid\sigma(C,V).$$
No regular conditional law on an unspecified measurable space is assumed: $K$ is supplied in the hypotheses.

## Facts & Assumptions

[F1] Conditional independence is the bounded-function conditional-product identity, and conditional expectation is determined by its event integrals. [[def-conditional-independence-given-a-sigma-algebra]], [[def-conditional-expectation-given-a-sigma-algebra]]

[F2] Integration of a bounded measurable function against a supplied probability kernel is measurable. [[def-measure-kernel-and-probability-kernel]], [[thm-measurability-of-integration-against-a-kernel]]

[F3] Dynkin's theorem, simple approximation and monotone convergence extend identities on generating rectangles to bounded measurable functions. [[thm-dynkin-pi-lambda]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]

[F4] Conditional expectations satisfy the tower property under AC. [[thm-tower-property-of-conditional-expectation]], [[def-axiom-of-choice]]

## Proof

**Proof technique:** test conditional expectations on rectangle events, then enlarge the conditioning sigma-algebra.

**Given:** The random elements, supplied kernel and conditional independence in the statement.

1.1 Fix bounded measurable $g(R)$ and set $r=E[g(R)\mid\sigma(C)]$. Conditional independence implies $E[h(L)b(C)g(R)]=E[h(L)b(C)r]$ for every bounded measurable $h,b$: test its conditional-product identity against $b(C)$ and then the defining conditional expectation of $h(L)$. Rectangle indicators generate $\sigma(L,C)$, so [F3] gives $E[Hg(R)]=E[Hr]$ for every bounded $\sigma(L,C)$-measurable $H$. Equivalently $E[g(R)\mid\sigma(L,C)]=r$. All extensions can be made for each fixed $g$: the class of testing events is a lambda-system by complements and disjoint countable unions; bounded versions and monotone convergence justify the sums. No common null set for all functions is needed. [given, F1, F3, construct]

2.1 For bounded measurable $h(l,v)$ define $H(l,c)=\int h(l,v)K(l,c,dv)$, bounded and measurable by [F2]. Kernel integration gives $E[b(C)h(L,V)g(R)]=E[b(C)H(L,C)g(R)]=E[b(C)H(L,C)r]=E[b(C)h(L,V)r]$, where the middle identity is step 1.1. Thus $E[h(L,V)g(R)\mid\sigma(C)]=E[h(L,V)\mid\sigma(C)]r$. In taking out bounded measurable conditioning factors here, the event-integral definition first proves the rule for simple factors and [F3] proves it for bounded factors. This proves the first claimed independence. Testing the same calculation with rectangle factors in $(L,V,C)$ and using [F3] also gives $E[g(R)\mid\sigma(L,V,C)]=r$. [F1, F2, F3, step 1.1, algebra]

3.1 Since $r$ is $\sigma(C)$-measurable, [F4] yields $E[g(R)\mid\sigma(C,V)]=r$. For bounded $f(L)$, conditioning first on $\sigma(L,V,C)$ in step 2.1 and then on $\sigma(C,V)$ gives $E[f(L)g(R)\mid\sigma(C,V)]=E[f(L)\mid\sigma(C,V)]r$. The bounded-factor rule justified in step 2.1 applies at both stages. This is the second claimed independence by [F1]. Singleton state spaces and constant kernels obey the same identities. [F1, F4, step 2.1, algebra] ∎

## Source notes

Aldous–Chewi Lecture 9, Definition 9.1 and the complete Splice Lemma 9.2 proof give the conditional-expectation testing method. Their Borel-space disintegration assertion is not imported: the present lemma assumes its kernel and proves the stated arbitrary-space extension locally.
