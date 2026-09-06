---
id: thm-power-basis-discriminant-is-polynomial-discriminant
kind: theorem
title: "Power-basis and polynomial discriminants"
status: draft
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-discriminant-as-an-embedding-determinant, cor-algebraic-integer-minimal-polynomial-criterion]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Remark 2.28"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Let $K=\mathbb Q(\alpha)$. If $f$ is the degree-$n$ monic minimal polynomial of $\alpha$, then
$$\operatorname{disc}(1,\alpha,\ldots,\alpha^{n-1})=(-1)^{n(n-1)/2}N_{K/\mathbb Q}(f'(\alpha))=\operatorname{disc}(f).$$

## Facts & Assumptions

**Given:** $K=\mathbb Q(\alpha)$ and $\deg f=n$.

[F1] The basis discriminant is the square of its embedding determinant ([[thm-discriminant-as-an-embedding-determinant]]).

## Proof

**Proof technique:** direct.

1.1 Fact [F1] makes the determinant the Vandermonde product of the conjugates of $\alpha$. [F1, given]

2.1 Squaring it and regrouping the root differences is the polynomial discriminant, equivalently the displayed derivative norm. [step 1.1, algebra] ∎
