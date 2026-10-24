---
id: "ex-cusp-local-ring-not-regular"
kind: "example"
title: "cusp local ring not regular"
deps: ["thm-dimension-at-most-embedding-dimension", "def-embedding-dimension-and-regular-local-ring", "def-axiom-of-choice"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

Assuming the Axiom of Choice, for every field $k$, the cusp local ring $R=(k[x,y]/(y^2-x^3))_{(x,y)}$ has dimension one and embedding dimension two, hence is not regular.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $T$ satisfies $\dim T\le\operatorname{edim}T<\infty$.

[F2] [[def-embedding-dimension-and-regular-local-ring]]: The embedding dimension is the dimension of the cotangent space $\mathfrak m/\mathfrak m^2$, and a Noetherian local ring is regular exactly when its dimension equals that embedding dimension.

## Verification

1.1 The quotient $A=k[x,y]/(y^2-x^3)$ has unique representatives $a(x)+yb(x)$ by division by the monic polynomial in $y$. Under $x\mapsto t^2$, $y\mapsto t^3$, the two summands have even and odd powers of $t$, respectively; their vanishing forces both to be zero. Hence $A$ embeds in $k[t]$ and is a domain in every characteristic. The origin ideal remains a proper nonzero maximal ideal after localization. [given, algebra]

1.2 The ambient local domain $S=k[x,y]_{(x,y)}$ has cotangent basis $x,y$: modulo $(x,y)^2$, every localized polynomial has a unique constant and linear part because its denominator has nonzero constant term. Hence $\operatorname{edim}S=2$. The chain $(0)\subsetneq(x)S\subsetneq(x,y)S$ gives $\dim S\ge2$, while [F1] gives $\dim S\le2$. [F1, F2, algebra]

2.1 The kernel $(f)S$ of $S\to R$ is a nonzero prime by step 1.1. Since $R$ is a nonfield local domain, $(0)\subsetneq(x,y)R$ gives $\dim R\ge1$. A chain of length two in $R$ would lift to a chain of primes $(0)\subsetneq(f)S\subsetneq\mathfrak p\subsetneq(x,y)S$ of length three in $S$, contradicting step 1.2. Thus $\dim R=1$. As $f\in(x,y)^2S$, the quotient introduces no relation in the cotangent space, so $\operatorname{edim}R=2$. By [F2], $R$ is not regular. The argument works in every characteristic. [F2, step 1.1, step 1.2, algebra] ∎
