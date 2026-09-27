---
id: thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one
kind: theorem
title: "$\\mathcal{L}^p$ and $L^\\infty$ are vector spaces for $p \\ge 1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-essential-supremum-is-attained-as-the-least-essential-bound, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-vector-space, thm-finite-and-countable-subadditivity-of-measures]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 7.5 and Section 7.1"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space.

1. For each $1\le p<\infty$, the class $\mathcal L^p(\mu)$ is a real vector
   space under pointwise addition and scalar multiplication.
2. The class $L^\infty(\mu)$ is a real vector space under the same operations.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$.

[L1] $\mathcal L^p(\mu)$ and $L^\infty(\mu)$ are the classes defined in [[def-calligraphic-l-p-on-a-measure-space]] and [[def-l-infinity-on-a-measure-space]].

[L2] Sums, scalar multiples, and absolute values of measurable real-valued functions are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L3] The nonnegative integral is monotone, additive, and homogeneous for positive finite scalars; the zero function has integral zero ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L4] A finite essential supremum is an attained essential bound ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L5] Countable unions of measurable null sets are measurable and null ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L6] A vector space over $\mathbb R$ means the structure defined in [[def-vector-space]].

## Proof

**Proof technique:** direct.

1.1 Fix $1\le p<\infty$ and let $f,g\in\mathcal L^p(\mu)$ and $a\in\mathbb R$. Measurability of $f+g$ and $af$ follows from [L2]. Pointwise, $$|f+g|^p\le (2\max\{|f|,|g|\})^p\le 2^p(|f|^p+|g|^p).$$ By [L3], $$\int|f+g|^p\,d\mu\le2^p\left(\int|f|^p\,d\mu+\int|g|^p\,d\mu\right)<\infty.$$ If $a\ne0$, positive homogeneity in [L3] gives $\int|af|^p\,d\mu=|a|^p\int|f|^p\,d\mu<\infty$; if $a=0$, the integral is zero without forming $0\cdot\infty$. Thus $f+g,af\in\mathcal L^p(\mu)$. The zero function belongs to the class, and additive inverses use $a=-1$. [L1, L2, L3, given, algebra]

1.2 Let $f,g\in L^\infty(\mu)$ with $M:=\|f\|_\infty$ and $N:=\|g\|_\infty$. There are measurable null sets $E_f,E_g$ such that $|f|\le M$ on $X\setminus E_f$ and $|g|\le N$ on $X\setminus E_g$. With $E:=E_f\cup E_g$, $E$ is measurable and null, and on $X\setminus E$ one has [L1, L2, L4, L5, given]
$$|f+g|\le |f|+|g|\le M+N,\qquad |af|=|a||f|\le |a|M.$$ Thus $f+g$ and $af$ are essentially bounded; measurability again comes from [L2].

2.1 The pointwise addition and scalar-multiplication identities are inherited from real-valued functions. Hence [L6] makes $\mathcal L^p(\mu)$ a real vector space for every $1\le p<\infty$. [step 1.1, L6]

3.1 The pointwise identities are again inherited from real-valued functions, so [L6] makes $L^\infty(\mu)$ a real vector space. [step 1.2, L6] ∎
