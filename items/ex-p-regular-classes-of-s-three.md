---
id: ex-p-regular-classes-of-s-three
kind: example
title: "The p-regular classes of S3"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-regular-and-p-singular-elements, prop-brauer-characters-are-class-functions-on-p-regular-elements]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Example

For $S_3$, the $2$-regular conjugacy classes are the identity class and the
class of $3$-cycles, while the $3$-regular conjugacy classes are the identity
class and the class of transpositions.

## Facts & Assumptions

**Given:** The symmetric group $S_3$.

[F1] An element is $p$-regular exactly when $p$ does not divide its order
([[def-p-regular-and-p-singular-elements]]).

[L1] Brauer characters are constant on $p$-regular conjugacy classes
([[prop-brauer-characters-are-class-functions-on-p-regular-elements]]).

## Verification

**Proof technique:** direct.

1.1 In $S_3$, the conjugacy classes are represented by $1$, a transposition $(12)$ of order $2$, and a $3$-cycle $(123)$ of order $3$. [given, algebra]

2.1 By [F1], the $2$-regular elements are those of order $1$ or $3$, so they form the classes of $1$ and $(123)$. Likewise the $3$-regular elements are those of order $1$ or $2$, so they form the classes of $1$ and $(12)$. [F1, step 1.1]

3.1 Hence a Brauer character of $S_3$ in characteristic $2$ or $3$ is determined by the two values on the corresponding classes, in agreement with [L1]. [L1, step 2.1] ∎
