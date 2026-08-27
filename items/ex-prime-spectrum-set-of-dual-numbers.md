---
id: ex-prime-spectrum-set-of-dual-numbers
kind: example
title: "Dual numbers and their reduced quotient have the same prime set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-prime-spectrum-insensitive-to-nilpotents, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Example

Let $k$ be a field and let $A=k[\varepsilon]/(\varepsilon^2)$. Then $\operatorname{Spec}(A)$ consists of the single prime ideal $(\overline\varepsilon)$, and the reduced quotient $A/(\overline\varepsilon)\cong k$ has the same prime spectrum.

## Facts & Assumptions

**Given:** A field $k$ and the dual-number ring $A=k[\varepsilon]/(\varepsilon^2)$.

[L1] Prime ideals of a quotient ring correspond to prime ideals of the original ring containing the kernel ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] Passing to the reduced quotient does not change the prime spectrum ([[cor-prime-spectrum-insensitive-to-nilpotents]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], prime ideals of $A$ correspond to prime ideals of $k[\varepsilon]$ containing $(\varepsilon^2)$. Any such prime contains $\varepsilon$ because $\varepsilon^2$ lies in it. The ideal $(\varepsilon)$ itself is prime since $k[\varepsilon]/(\varepsilon)\cong k$ is a field. Therefore $\operatorname{Spec}(A)=\{(\overline\varepsilon)\}$. [L1, given, algebra]

2.1 The element $\overline\varepsilon\in A$ is nilpotent, so the reduced quotient of $A$ is exactly $A/(\overline\varepsilon)\cong k$. By [L2], this quotient has the same prime spectrum as $A$, which is the singleton from step 1.1. [L2, step 1.1]

3.1 Hence the dual numbers and their reduced quotient have the same prime set. [step 1.1, step 2.1] ∎
