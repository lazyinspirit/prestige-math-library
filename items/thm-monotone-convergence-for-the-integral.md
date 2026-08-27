---
id: thm-monotone-convergence-for-the-integral
kind: theorem
title: "Monotone convergence for the integral"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, thm-simple-indefinite-integral-is-a-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-continuity-from-below-for-measures, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-basic-properties-of-the-nonnegative-simple-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 7.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Theorem 4.6"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.14"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $0\le f_1\le f_2\le\cdots$ be measurable and suppose $f_n(x)\uparrow f(x)$
for every $x$. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** A nondecreasing sequence $(f_n)$ of nonnegative measurable functions with pointwise limit $f$.

[L1] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] For a nonnegative simple function $s$, the set function $A\mapsto\int_A s\,d\mu$ is a measure ([[thm-simple-indefinite-integral-is-a-measure]]).

[L3] Measures are continuous from below on increasing measurable sets ([[thm-continuity-from-below-for-measures]]).

[L4] The nonnegative integral agrees with the simple integral on simple functions, and the latter is homogeneous on nonnegative simple functions ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[prop-basic-properties-of-the-nonnegative-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the numbers $\int f_n\,d\mu$ increase and satisfy[given, L1]
$$\int f_n\,d\mu\le\int f\,d\mu$$
for every $n$. So their supremum $L$ exists in $[0,+\infty]$ and $L\le\int f\,d\mu$.


1.2 Fix a nonnegative simple function $s\le f$ and a real $c$ with $0<c<1$.[given, L2, L3]
Put $A_n:=\{f_n\ge cs\}$. Then $A_n\uparrow X$: if $s(x)=0$ then $x\in A_n$ for
all $n$, while if $s(x)>0$ then $f_n(x)\uparrow f(x)\ge s(x)>cs(x)$, so
eventually $x\in A_n$. Since $A\mapsto\int_A s\,d\mu$ is a measure by [L2],
[L3] gives
$$\int_{A_n} s\,d\mu\uparrow\int_X s\,d\mu.$$


2.1 On $A_n$ one has $cs\le f_n$, hence $cs\chi_{A_n}\le f_n$. By [L1] and [L4],[step 1.2, L1, L4, algebra]
$$c\int_{A_n}s\,d\mu=\int cs\chi_{A_n}\,d\mu\le\int f_n\,d\mu\le L.$$
Letting $n\to\infty$ in step 1.2 yields
$$c\int s\,d\mu\le L.$$
Now choose $c_m=1-2^{-m}$ and let $m\to\infty$; then $\int s\,d\mu\le L$.


3.1 Step 2.1 holds for every simple minorant $s\le f$, so taking the supremum [step 1.1, step 2.1, given] ∎
over such $s$ gives $\int f\,d\mu\le L$ by the definition of the nonnegative
integral. Together with step 1.1, this proves $L=\int f\,d\mu$, so
$\int f_n\,d\mu\uparrow\int f\,d\mu$.
