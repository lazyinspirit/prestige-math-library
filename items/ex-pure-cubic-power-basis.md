---
id: ex-pure-cubic-power-basis
kind: example
title: "A pure cubic power basis: why the squarefree-discriminant certificate does not apply"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-power-basis-discriminant-is-polynomial-discriminant, cor-squarefree-power-basis-discriminant-gives-ring-of-integers]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "William Stein, Algebraic Number Theory, Proposition 2.4.4"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Example

Let $\alpha=\sqrt[3]{2}$ and $K=\mathbb Q(\alpha)$. The power basis
$(1,\alpha,\alpha^2)$ has discriminant $-108$. Consequently the squarefree
power-basis criterion does **not** certify that $\mathbb Z[\alpha]$ is the
full ring of integers. This example records the boundary of that criterion;
it makes no claim here about the actual index of $\mathbb Z[\alpha]$.

## Facts & Assumptions

**Given:** $\alpha=\sqrt[3]{2}$ and its polynomial $f(X)=X^3-2$.

[F1] The discriminant of a power basis is the polynomial discriminant of the minimal polynomial ([[thm-power-basis-discriminant-is-polynomial-discriminant]]).

[F2] The squarefree criterion concludes maximality only when the power-basis discriminant is squarefree ([[cor-squarefree-power-basis-discriminant-gives-ring-of-integers]]).

## Verification

**Proof technique:** direct.

1.1 Eisenstein's criterion at $2$ makes $f$ irreducible over $\mathbb Q$; thus it is the monic minimal polynomial of the integral element $\alpha$ and $(1,\alpha,\alpha^2)$ is a $\mathbb Q$-basis of $K$. [given]

2.1 The cubic discriminant formula gives $\operatorname{disc}(f)=-27(-2)^2=-108$. By [F1] this is the discriminant of the displayed power basis. [F1, step 1.1, algebra]

3.1 Since $-108$ is divisible by $2^2$ and $3^3$, it is not squarefree. Therefore the hypothesis of [F2] fails, so that criterion supplies no maximality conclusion in this example. [F2, step 2.1] ∎
