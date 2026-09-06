---
id: ex-ring-of-integers-of-q-sqrt-five
kind: example
title: "The integral basis and discriminant of Q(sqrt 5)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ring-of-integers-of-a-quadratic-field, cor-discriminant-of-a-quadratic-field, cor-order-index-discriminant-formula]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Example 2.11"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Example

Put $K=\mathbb Q(\sqrt5)$ and $\omega=(1+\sqrt5)/2$. Then
$\mathcal O_K=\mathbb Z[\omega]$, $(1,\omega)$ is an integral basis, and
$\operatorname{disc}(K)=5$. The suborder $\mathbb Z[\sqrt5]$ has basis
$(1,\sqrt5)$, index $2$, and discriminant $20$.

## Facts & Assumptions

**Given:** $K=\mathbb Q(\sqrt5)$ and $\omega=(1+\sqrt5)/2$.

[F1] For squarefree $d\ne1$, the quadratic integral-basis formula applies ([[thm-ring-of-integers-of-a-quadratic-field]]).

[F2] The corresponding quadratic-field discriminant is $d$ when $d\equiv1\pmod4$ ([[cor-discriminant-of-a-quadratic-field]]).

[F3] An order $A\subseteq\mathcal O_K$ satisfies $\operatorname{disc}(A)=[\mathcal O_K:A]^2\operatorname{disc}(K)$ ([[cor-order-index-discriminant-formula]]).

## Verification

**Proof technique:** direct.

1.1 Since $5\equiv1\pmod4$, [F1] gives $\mathcal O_K=\mathbb Z[\omega]$; [F2] gives $\operatorname{disc}(K)=5$. [F1, F2, given]

2.1 In the basis $(1,\omega)$, one has $\sqrt5=2\omega-1$, so the change matrix to $(1,\sqrt5)$ has determinant $2$. Thus $[\mathcal O_K:\mathbb Z[\sqrt5]]=2$, and [F3] gives $\operatorname{disc}(\mathbb Z[\sqrt5])=2^2\cdot5=20$. [F3, step 1.1, algebra] ∎
