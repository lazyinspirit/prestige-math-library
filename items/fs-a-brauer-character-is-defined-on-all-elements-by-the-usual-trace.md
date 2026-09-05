---
id: fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace
kind: false-statement
title: "FALSE: a Brauer character is defined on all elements by the usual trace"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-brauer-character-of-a-finite-dimensional-kg-module]
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

A Brauer character is defined on every element of $G$ and equals the ordinary
matrix trace there.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p$ and the $2$-dimensional $kC_p$
module on which a generator $u$ acts by the unipotent matrix
$\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$.

[F1] A Brauer character is defined only on the $p$-regular elements of $G$
([[def-brauer-character-of-a-finite-dimensional-kg-module]]).

## Refutation

**Proof technique:** direct.

1.1 The element $u$ has order $p$, so it is $p$-singular. The displayed matrix still has an ordinary trace, namely $2$ in $k$. [given, algebra]

2.1 But [F1] defines the Brauer character only on $G^0$, and $u\notin G^0$. So the trace value at $u$ is not a Brauer-character value. [F1, step 1.1]

3.1 Therefore the statement is false. [step 2.1] ∎
