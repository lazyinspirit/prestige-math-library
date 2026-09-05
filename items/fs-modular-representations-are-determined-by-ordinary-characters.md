---
id: fs-modular-representations-are-determined-by-ordinary-characters
kind: false-statement
title: "FALSE: modular representations are determined by ordinary characters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-brauer-nesbitt-module-determination]
proof_strategy: direct
verification:
  audited: 2026-09-05
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

Two finite-dimensional modular representations with the same ordinary-style
character data must be isomorphic.

## Facts & Assumptions

**Given:** The cyclic group $C_p$ over a field $k$ of characteristic $p$.

[L1] Equality of Brauer characters determines only the semisimplification
([[thm-brauer-nesbitt-module-determination]]).

## Refutation

**Proof technique:** direct.

1.1 Let $V$ be the indecomposable $2$-dimensional $kC_p$-module with generator acting by $\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$, and let $W=k\oplus k$ be the direct sum of two trivial modules. These modules are not isomorphic because $V$ is indecomposable while $W$ is semisimple. [given, algebra]

2.1 Their only composition factors are two copies of the trivial module, so they have the same semisimplification. By [L1], they therefore have the same Brauer character. [L1, step 1.1]

3.1 Thus the character data do not recover the full modular representation, only its semisimplification. The statement is false. [step 1.1, step 2.1] ∎
