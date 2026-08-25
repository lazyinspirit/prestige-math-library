---
id: ex-four-square-representation-from-prime-factorisation
kind: example
title: "Building a representation of $105$ from its prime factors"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-four-squares-closed-under-products, lem-euler-four-square-product-identity, def-sum-of-four-squares-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Factor $105=3\cdot 5\cdot 7$ and take the prime representations

$$3=1^2+1^2+1^2+0^2,\qquad 5=2^2+1^2+0^2+0^2,\qquad 7=2^2+1^2+1^2+1^2.$$

Multiplying the first two with the identity of
[[lem-euler-four-square-product-identity]], applied to $(1,1,1,0)$ and
$(2,1,0,0)$, gives $(3,-1,-2,1)$ and

$$15=3^2+(-1)^2+(-2)^2+1^2.$$

Multiplying that result by the third, applied to $(3,-1,-2,1)$ and $(2,1,1,1)$,
gives $(4,8,5,0)$ and

$$105=4^2+8^2+5^2+0^2.$$

This is the route the proof of [[thm-lagrange-four-square-theorem]] takes: prime
factors first, then closure under products.

## Facts & Assumptions

**Given:** The factorisation $105=3\cdot 5\cdot 7$ and the three displayed prime representations.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[L1] Let $m$ and $n$ be nonnegative integers; if each of $m$ and $n$ is a sum of four integer squares, then $mn$ is a sum of four integer squares ([[cor-four-squares-closed-under-products]]).

[L2] For all integers $x_1,\dots,x_4,y_1,\dots,y_4$, setting $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$, $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$ and $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$ gives $(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$ ([[lem-euler-four-square-product-identity]]).

## Verification

**Proof technique:** direct.

1.1 The three displays are representations: $1+1+1+0=3$, $4+1+0+0=5$ and $4+1+1+1=7$; also $3\cdot 5=15$ and $15\cdot 7=105$, so $3\cdot 5\cdot 7=105$. [given, F1, algebra]

2.1 Applying [L2] to $x=(1,1,1,0)$ and $y=(2,1,0,0)$ gives $z_1=1\cdot 2+1\cdot 1+1\cdot 0+0\cdot 0=3$, $z_2=1\cdot 1-1\cdot 2-1\cdot 0+0\cdot 0=-1$, $z_3=1\cdot 0+1\cdot 0-1\cdot 2-0\cdot 1=-2$ and $z_4=1\cdot 0-1\cdot 0+1\cdot 1-0\cdot 2=1$, whose squares sum to $9+1+4+1=15=3\cdot 5$. [step 1.1, L2, algebra]

3.1 Applying [L2] to $x=(3,-1,-2,1)$ and $y=(2,1,1,1)$ gives $z_1=3\cdot 2+(-1)\cdot 1+(-2)\cdot 1+1\cdot 1=4$, $z_2=3\cdot 1-(-1)\cdot 2-(-2)\cdot 1+1\cdot 1=8$, $z_3=3\cdot 1+(-1)\cdot 1-(-2)\cdot 2-1\cdot 1=5$ and $z_4=3\cdot 1-(-1)\cdot 1+(-2)\cdot 1-1\cdot 2=0$, whose squares sum to $16+64+25+0=105=15\cdot 7$. [step 2.1, L2, algebra]

4.1 So $(4,8,5,0)$ is a representation of $105$ in the sense of [F1]; the two multiplications are the two instances of [L1] that the factorisation calls for, and the identity has supplied an explicit quadruple at each. [step 1.1, step 2.1, step 3.1, L1, F1] ∎

## Remarks

**Negative intermediate coordinates are harmless.** The quadruple produced at the first multiplication has two negative entries, and they are carried into the second multiplication unchanged. Only squares are read off at the end, and the identity of [[lem-euler-four-square-product-identity]] holds for negative inputs as it does for positive ones.

**The order of multiplication is a choice.** Multiplying $5$ and $7$ first, or $3$ and $7$ first, produces different quadruples for the same $105$; the construction is not canonical, and [[cor-four-squares-closed-under-products]] claims existence rather than a preferred witness.
