---
id: "ex-associated-graded-polynomial-map-singular-kernel"
kind: "example"
title: "associated graded polynomial map singular kernel"
deps: ["def-associated-graded-ring-and-module"]
proof_strategy: "Explicit algebraic derivation"
sources:
  references:
    - title: "Lecture 25, Proposition 25.6 and its graded-map proof, p.67"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

For the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ with maximal ideal $\mathfrak m$, the associated graded ring is $k[X,Y]/(Y^2)$. Thus the polynomial map defined by the cotangent classes has kernel exactly $(Y^2)$.

## Facts & Assumptions

**Given:** A field $k$, the coordinate local ring $S=k[x,y]_{(x,y)}$ with maximal ideal $\mathfrak n$, and its quotient $R=S/(y^2-x^3)$ with maximal ideal $\mathfrak m$.

[F1] The associated graded ring is the direct sum of the successive ideal-power quotients, with multiplication induced by the ring ([[def-associated-graded-ring-and-module]]).

## Verification

1.1 In the ambient coordinate local ring $S=k[x,y]_{(x,y)}$, the associated graded ring is $k[X,Y]$: a rational function with denominator of nonzero constant term has initial form equal to its numerator initial form divided by that constant. This identifies each graded piece and respects products. Therefore orders add on products of nonzero elements of $S$. In particular for $f=y^2-x^3$, $\operatorname{in}(f)=Y^2$, and $\operatorname{in}(hf)=\operatorname{in}(h)Y^2$ for every nonzero $h\in S$. [given, algebra]

2.1 The quotient map $S\to R$ sends $\mathfrak n^n$ onto $\mathfrak m^n$ for each $n$, so by [F1] it induces a surjection $\operatorname{gr}_{\mathfrak n}S\twoheadrightarrow\operatorname{gr}_{\mathfrak m}R$. Its degree-$n$ kernel consists of classes of $a\in\mathfrak n^n$ with $a\in(f)+\mathfrak n^{n+1}$. Write $a=hf+b$ with $b\in\mathfrak n^{n+1}$. If its degree-$n$ class is nonzero, it is exactly the initial form of $hf$, hence a multiple of $Y^2$. Conversely every homogeneous multiple of $Y^2$ is the initial form of a polynomial multiple of $f$. Thus the graded kernel is exactly $(Y^2)$, proving the displayed quotient directly. Since $f\in\mathfrak n^2$, the cotangent classes of $x,y$ form its degree-one basis, and the induced map is the claimed polynomial map. [F1, step 1.1, algebra] ∎
