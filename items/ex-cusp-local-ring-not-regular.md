---
id: "ex-cusp-local-ring-not-regular"
kind: "example"
title: "cusp local ring not regular"
deps: ["thm-quotient-and-lifting-regularity-across-a-regular-element", "lem-associated-graded-polynomial-surjection", "thm-dimension-at-most-embedding-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lecture 25, Propositions 25.6–25.8, pp.67–68"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

For every field $k$, the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ has dimension one and embedding dimension two, hence is not regular.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: Let $(R,\mathfrak m)$ be nonzero Noetherian local. If $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular and $x\notin\mathfrak m^2$. For every nonzerodivisor $x\in\mathfrak m$, $\dim(R/(x))=\dim R-1$. If $R$ is regular and $0\ne x\in\mathfrak m$, then $R/(x)$ is regular if and only if $x\notin\mathfrak m^2$.

[F2] [[lem-associated-graded-polynomial-surjection]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and let $x_1,\ldots,x_e$ lift a basis of $\mathfrak m/\mathfrak m^2$. There is a surjective graded $k$-algebra map $\phi:k[X_1,\ldots,X_e]\to\operatorname{gr}_{\mathfrak m}R$, determined by $X_i\mapsto x_i+\mathfrak m^2$, with every variable of degree one.

[F3] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

## Verification

1.1 The quotient $A=k[x,y]/(y^2-x^3)$ has unique representatives $a(x)+yb(x)$ by division by the monic polynomial in $y$. Under $x\mapsto t^2$, $y\mapsto t^3$, the two summands have even and odd powers of $t$, respectively; their vanishing forces both to be zero. Hence $A$ embeds in $k[t]$ and is a domain in every characteristic. The origin ideal remains a proper nonzero maximal ideal after localization. [given, algebra]

2.1 The ambient local ring $S=k[x,y]_{(x,y)}$ has dimension two and cotangent basis $x,y$: the coordinate chain gives dimension at least two, and its two maximal-ideal generators give the reverse bound. The nonzero $f=y^2-x^3$ is a nonzerodivisor in this polynomial domain; the dimension-drop argument of the regular-element quotient theorem gives $\dim S/(f)=1$. Since $f\in(x,y)^2$, quotienting adds no linear cotangent relation, so the embedding dimension stays two. This proves the claim over any field, including characteristics two and three. [F1, F2, F3, step 1.1, algebra] ∎
