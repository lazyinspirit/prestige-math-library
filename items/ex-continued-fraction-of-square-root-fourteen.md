---
id: ex-continued-fraction-of-square-root-fourteen
kind: example
title: "The continued fraction [3; overline 1,2,1,6] for sqrt(14)"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-continued-fraction-complete-quotients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Example

The complete quotients of $\sqrt{14}$ cycle through the states
$$\frac{\sqrt{14}+3}{5},\qquad \frac{\sqrt{14}+2}{2},\qquad \frac{\sqrt{14}+2}{5},\qquad \sqrt{14}+3,$$
so
$$\sqrt{14}=[3;\overline{1,2,1,6}].$$

## Facts & Assumptions

**Given:** The real number $\sqrt{14}$.

[F1] The continued-fraction algorithm is deterministic: each complete quotient $\alpha_n$ determines the digit $a_n$ and, when $\alpha_n\ne a_n$, the next complete quotient $\alpha_{n+1}$ ([[def-continued-fraction-complete-quotients]]).

## Verification

**Proof technique:** direct.

1.1 Since $3<\sqrt{14}<4$, the first digit is $a_0=3$. Then [given, algebra] $$\alpha_1=\frac1{\sqrt{14}-3}=\frac{\sqrt{14}+3}{5},\qquad \alpha_2=\frac1{\alpha_1-1}=\frac{\sqrt{14}+2}{2},$$ $$\alpha_3=\frac1{\alpha_2-2}=\frac{\sqrt{14}+2}{5},\qquad \alpha_4=\frac1{\alpha_3-1}=\sqrt{14}+3,$$ and finally $$\alpha_5=\frac1{\alpha_4-6}=\frac1{\sqrt{14}-3}=\alpha_1.$$ So the digits from $\alpha_1$ onward are $1,2,1,6$ and then repeat. [given, algebra]

2.1 Step 1.1 shows that $\alpha_5=\alpha_1$. By the determinism in [F1], the same four digits $1,2,1,6$ therefore repeat from $\alpha_1$ onward. Hence $$\sqrt{14}=[3;\overline{1,2,1,6}].$$ [F1, step 1.1] ∎
