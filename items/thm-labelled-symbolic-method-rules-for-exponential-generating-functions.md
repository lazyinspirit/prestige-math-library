---
id: thm-labelled-symbolic-method-rules-for-exponential-generating-functions
kind: theorem
title: "The labelled constructions translate into the usual exponential-generating-function rules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exponential-generating-function-over-a-q-algebra, def-labelled-classes-and-basic-labelled-constructions, thm-formal-composition-laws, thm-formal-exponential-logarithm-identities, thm-summable-families-and-rearrangement]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §2.3 and ch. 3"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ and $\mathcal{B}$ be labelled classes with exponential
generating functions $A(x)$ and $B(x)$ over a commutative $\mathbb{Q}$-algebra.
Then:

$$\operatorname{EGF}(\mathcal{A}\star\mathcal{B})=A(x)B(x).$$

If $A(0)=0$, then

$$\operatorname{EGF}(\operatorname{SEQ}(\mathcal{A}))=\frac{1}{1-A(x)},$$

$$\operatorname{EGF}(\operatorname{SET}(\mathcal{A}))=\exp(A(x)),$$

$$\operatorname{EGF}(\operatorname{CYC}(\mathcal{A}))=\log\frac{1}{1-A(x)}.$$

For the boxed product,

$$\frac{d}{dx}\operatorname{EGF}(\mathcal{A}^{\square}\star\mathcal{B})=A'(x)B(x),$$

and the constant term is $0$, so

$$\operatorname{EGF}(\mathcal{A}^{\square}\star\mathcal{B})=\int_{0}^{x}A'(t)B(t)\,dt.$$

## Facts & Assumptions

**Given:** The labelled constructions of
[[def-labelled-classes-and-basic-labelled-constructions]] and the formal
identities in [[thm-formal-exponential-logarithm-identities]].

## Proof

**Proof technique:** direct.

1.1 In the labelled product on an $n$-label set, choosing the $k$ labels sent to the $\mathcal{A}$-part contributes $\binom{n}{k}$ possibilities, and then one chooses an $\mathcal{A}$-object on those labels and a $\mathcal{B}$-object on the complement. Thus the size-$n$ coefficient is $\sum_{k=0}^{n}\binom{n}{k}a_kb_{n-k}$, which is exactly the coefficient rule for the product of exponential generating functions. [given]

2.1 For $\operatorname{SEQ}(\mathcal{A})$, a sequence of length $r$ is an $r$-fold labelled product of $\mathcal{A}$ with itself, so its EGF is $A(x)^r$. Summing over all $r\geq0$ gives $\sum_{r\geq0}A(x)^r$, and because $A(0)=0$ this formal geometric series equals $1/(1-A(x))$. [step 1.1, given]

2.2 A labelled set of exactly $r$ $\mathcal{A}$-objects is the same data as an ordered $r$-tuple of pairwise disjoint $\mathcal{A}$-objects modulo permutation of the $r$ components. Therefore its EGF is $A(x)^r/r!$, and summing over $r\geq0$ gives $\exp(A(x))$ by [[thm-formal-exponential-logarithm-identities]]. [step 1.1, given]

2.3 A labelled cycle of exactly $r\geq1$ $\mathcal{A}$-objects has $r$ linear representatives, so its EGF is $A(x)^r/r$. Summing over $r\geq1$ gives $\sum_{r\geq1}A(x)^r/r=\log(1/(1-A(x)))$ by [[thm-formal-exponential-logarithm-identities]]. [step 1.1, given]

2.4 In a boxed product, the smallest label lies in the $\mathcal{A}$-part. On size-$n$ labels this is equivalent to choosing a pointed $\mathcal{A}$-object on some $k\geq1$ labels, with the distinguished label forced to be the smallest, and then a $\mathcal{B}$-object on the remaining labels. Pointing contributes the derivative $A'(x)$, so the derivative of the boxed-product EGF is $A'(x)B(x)$. Since no boxed product has size $0$, the constant term is $0$, and integrating from $0$ to $x$ gives the displayed formula. [step 1.1, given]

3.1 Steps 1.1-3.1 are exactly the labelled symbolic-method rules claimed in the statement. [step 1.1, step 2.1, step 2.2, step 2.3, step 2.4] ∎
