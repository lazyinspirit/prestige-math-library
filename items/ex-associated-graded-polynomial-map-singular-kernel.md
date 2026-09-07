---
id: "ex-associated-graded-polynomial-map-singular-kernel"
kind: "example"
title: "associated graded polynomial map singular kernel"
deps: ["lem-associated-graded-polynomial-surjection", "thm-associated-graded-ring-of-a-regular-local-ring"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 25, Proposition 25.6 and its graded-map proof, p.67"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: "draft"
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

For the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ with maximal ideal $\mathfrak m$, the associated graded ring is $k[X,Y]/(Y^2)$. Thus the polynomial map defined by the cotangent classes has kernel exactly $(Y^2)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-associated-graded-polynomial-surjection]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

## Verification

1.1 In the ambient coordinate local ring $S=k[x,y]_{(x,y)}$, the associated graded ring is $k[X,Y]$: a rational function with denominator of nonzero constant term has initial form equal to its numerator initial form divided by that constant. This identifies each graded piece and respects products. Therefore orders add on products of nonzero elements of $S$. In particular for $f=y^2-x^3$, $\operatorname{in}(f)=Y^2$, and $\operatorname{in}(hf)=\operatorname{in}(h)Y^2$ for every nonzero $h\in S$. [given, algebra]

2.1 The degree-$n$ kernel of $\operatorname{gr}S\to\operatorname{gr}(S/(f))$ consists of classes of $a\in\mathfrak n^n$ with $a\in(f)+\mathfrak n^{n+1}$. Write $a=hf+b$ with $b\in\mathfrak n^{n+1}$. If its degree-$n$ class is nonzero, it is exactly the initial form of $hf$, hence a multiple of $Y^2$. Conversely every homogeneous multiple of $Y^2$ is the initial form of a polynomial multiple of $f$. Thus the graded kernel is exactly $(Y^2)$ and the surjective polynomial map of the cotangent-basis lemma has the stated quotient. [F1, step 1.1, algebra] ∎
