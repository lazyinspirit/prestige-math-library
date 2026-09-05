---
id: cex-ordinary-trace-on-a-p-singular-unipotent-element
kind: counterexample
title: "Ordinary trace on a p-singular unipotent element is not a Brauer-character value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace, def-brauer-character-of-a-finite-dimensional-kg-module]
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

## Statement refuted

For every element of a modular representation, the ordinary matrix trace is the
Brauer-character value.

## Facts & Assumptions

**Given:** The cyclic group $C_p=\langle u\rangle$ over a field $k$ of
characteristic $p$, with $u$ acting on $k^2$ by
$\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$.

[L1] The false statement above is the claim to be refuted
([[fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace]]).

[F1] Brauer characters are defined only on $p$-regular elements
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

## Counterexample

**Proof technique:** direct.

1.1 The element $u$ has order $p$, so it is $p$-singular. Its action matrix still has ordinary trace $2$. [given, algebra]

2.1 By [F1], the Brauer character of this module is not defined at $u$, because $u\notin C_p^0$. So the trace from step 1.1 cannot be a Brauer-character value. [F1, step 1.1]

3.1 This directly refutes the statement [L1]. [L1, step 2.1] ∎
