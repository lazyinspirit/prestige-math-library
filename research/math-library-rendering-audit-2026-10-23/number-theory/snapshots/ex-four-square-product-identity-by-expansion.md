---
id: ex-four-square-product-identity-by-expansion
kind: example
title: "$7\\cdot 15=105$ through all four bilinear coordinates"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-euler-four-square-product-identity, def-sum-of-four-squares-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Lemma 6.2"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Example

Take the representations $7=2^2+1^2+1^2+1^2$ and $15=3^2+2^2+1^2+1^2$, so
$x=(2,1,1,1)$ and $y=(3,2,1,1)$. The four bilinear forms of
[[lem-euler-four-square-product-identity]] evaluate to

$$z_1=10,\qquad z_2=1,\qquad z_3=-2,\qquad z_4=0,$$

and $10^2+1^2+(-2)^2+0^2=100+1+4+0=105=7\cdot 15$. Every coordinate is computed
below, the vanishing one included: $z_4=0$ is a value the formula returns and not
a coordinate that has been left out.

## Facts & Assumptions

**Given:** The quadruples $x=(2,1,1,1)$ and $y=(3,2,1,1)$.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[L1] For all integers $x_1,\dots,x_4,y_1,\dots,y_4$, setting $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$, $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$ and $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$ gives $(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$ ([[lem-euler-four-square-product-identity]]).

## Verification

**Proof technique:** direct.

1.1 The two data are representations: $2^2+1^2+1^2+1^2=4+1+1+1=7$ and $3^2+2^2+1^2+1^2=9+4+1+1=15$. [given, F1, algebra]

2.1 Substituting $x=(2,1,1,1)$ and $y=(3,2,1,1)$ into the formulas of [L1] gives $z_1=2\cdot 3+1\cdot 2+1\cdot 1+1\cdot 1=6+2+1+1=10$, $z_2=2\cdot 2-1\cdot 3-1\cdot 1+1\cdot 1=4-3-1+1=1$, $z_3=2\cdot 1+1\cdot 1-1\cdot 3-1\cdot 2=2+1-3-2=-2$ and $z_4=2\cdot 1-1\cdot 1+1\cdot 2-1\cdot 3=2-1+2-3=0$. [step 1.1, L1, algebra]

3.1 Their squares sum to $100+1+4+0=105$, and $7\cdot 15=105$, so $(10,1,-2,0)$ is a representation of $105$ in the sense of [F1] and the identity is confirmed on this pair. [step 2.1, F1, algebra] ∎

## Remarks

**A negative coordinate is not a defect.** The third coordinate is $-2$, and only its square enters the sum, so $(10,1,-2,0)$ represents the same integer as $(10,1,2,0)$ and the two representations are equivalent up to signs. They are distinct ordered quadruples. The formulas are not arranged to produce nonnegative outputs, and no step of the identity or of the descent needs them to be.
