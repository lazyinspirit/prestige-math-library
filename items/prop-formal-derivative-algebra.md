---
id: prop-formal-derivative-algebra
kind: proposition
title: "Formal differentiation is linear and satisfies product, power, quotient, chain, and coefficient-recovery laws"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-formal-power-series-derivative, thm-formal-power-series-unit-criterion, thm-formal-composition-laws, thm-summable-families-and-rearrangement, prop-coefficient-extraction-linearity-and-extensionality, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Herbert S. Wilf, generatingfunctionology"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Statement

For formal series over a commutative ring,

$$D(f+g)=Df+Dg,\quad D(rf)=rDf,\quad D(fg)=(Df)g+fDg,$$

and, for $m\in\mathbb N$,

$$D(f^m)=mf^{m-1}Df$$

when $m\ge1$, while $D(f^0)=D(1)=0$. If $f$ is a unit, then

$$D(f^{-1})=-f^{-2}Df.$$

Consequently, if $g$ is a unit, then

$$D(f/g)=\frac{(Df)g-fDg}{g^2}.$$

Whenever $f\circ g$ is admissible and the resulting termwise differentiated family is summable,

$$D(f\circ g)=(Df\circ g)Dg.$$

If $R$ is a commutative $\mathbb Q$-algebra, then $[x^n]f=(D^nf)(0)/n!$. Over any commutative ring the Hasse derivative

$$D^{[n]}f:=\sum_{m\ge n}\binom mn[x^m]f\,x^{m-n}$$

satisfies $(D^{[n]}f)(0)=[x^n]f$. Finally, if $f(0)=g(0)=0$ and $g'(0)$ is a unit, then $f/g$ is a well-defined formal series and

$$[x^0](f/g)=f'(0)g'(0)^{-1}.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] The formal derivative of $\sum_{n\ge0}a_nx^n$ is $\sum_{n\ge1}na_nx^{n-1}$ ([[def-formal-power-series-derivative]]).

[F2] For every natural number $n$, $\binom nn=1$ ([[def-binomial-coefficient]]).

[F3] Multiplication by $x^k$ shifts coefficients: $[x^n](x^kf)=[x^{n-k}]f$ for $k\le n$ and is $0$ for $k>n$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F4] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[F5] A summable family may be bijectively reindexed or partitioned and regrouped without changing its sum ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** coefficient comparison.

1.1 Linearity is immediate coefficientwise. In degree $n-1$, $D(fg)$ has coefficient $n\sum_{i+j=n}a_ib_j$, while $(Df)g+fDg$ has $\sum_{i+j=n}(i+j)a_ib_j$; these are equal. Induction on $m$ gives the power rule, including the separately stated $m=0$ case. [given, F1]

1.2 Iterating the derivative gives $(D^nf)(0)=n![x^n]f$; in a $\mathbb Q$-algebra $n!$ is invertible, proving ordinary recovery. The constant coefficient of $D^{[n]}f$ is the $m=n$ term $\binom nn[x^n]f=[x^n]f$, so Hasse recovery needs no division and works in every characteristic. [given, F1, F2]

1.3 Write $f=xF$ and $g=xG$ using the shift formula. Then $G(0)=g'(0)$ is a unit, so $g=xG$ and $f=xF$ give $f/g=FG^{-1}$. Its constant coefficient is $F(0)G(0)^{-1}=f'(0)g'(0)^{-1}$. [given, F3, F4]

2.1 Differentiating $ff^{-1}=1$ and using the product rule gives $(Df)f^{-1}+fD(f^{-1})=0$; multiplying by $f^{-1}$ gives the inverse rule. Applying the product rule to $f/g=fg^{-1}$ and then the inverse rule gives $D(f/g)=((Df)g-fDg)g^{-2}$. [step 1.1, given]

2.2 The chain rule holds for an outer monomial by the power rule. Linearity and locally finite rearrangement extend it to every admissible composition for which the differentiated family is summable. [step 1.1, given, F5]

3.1 Steps 1.1-2.2 prove every displayed law and its stated hypotheses. [step 1.1, step 2.1, step 2.2, step 1.2, step 1.3] ∎
