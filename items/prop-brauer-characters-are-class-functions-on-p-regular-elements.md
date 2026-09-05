---
id: prop-brauer-characters-are-class-functions-on-p-regular-elements
kind: proposition
title: "Brauer characters are class functions on p-regular elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-brauer-character-of-a-finite-dimensional-kg-module, lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation]
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

## Statement

If $V$ is a finite-dimensional $kG$-module, then its Brauer character
$\varphi_V$ is constant on $p$-regular conjugacy classes.

## Facts & Assumptions

**Given:** A finite-dimensional $kG$-module $V$ and $p$-regular elements
$x,y\in G$ with $y=gxg^{-1}$.

[F1] The Brauer character at a $p$-regular element is computed from the
eigenvalues of the action matrix
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

[L1] That value is independent of the chosen basis
([[lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation]]).

## Proof

**Proof technique:** direct.

1.1 In any basis of $V$, the matrices representing $x$ and $y=gxg^{-1}$ are similar, because the representation map sends conjugation in $G$ to conjugation in $\operatorname{GL}(V)$. So they have the same eigenvalues with the same multiplicities. [given, algebra]

2.1 By [F1], the Brauer character is the sum of the Teichmuller lifts of those eigenvalues, and [L1] shows that the value does not depend on which basis was used to see the similarity. Hence $\varphi_V(x)=\varphi_V(y)$. [F1, L1, step 1.1]

3.1 Therefore $\varphi_V$ is a class function on $G^0$. [step 2.1] ∎
