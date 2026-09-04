---
id: def-index-set-and-extensional-machine-property
kind: definition
title: "Index sets and extensional properties of Turing-machine languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-effective-encoding-of-turing-machines, def-language-recognized-and-decided]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "H. G. Rice, Classes of Recursively Enumerable Sets and Their Decision Problems"
      url: "https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6"
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Definition

Let $\mathcal P$ be a class of recognizable languages over finite alphabets.
Its **index set** is
$$ I_{\mathcal P}:=\{\ulcorner M\urcorner : L(M)\in\mathcal P\}, $$
where $\ulcorner M\urcorner$ is the chosen code of a Turing machine and
$L(M)$ is the language recognized by $M$.

The class $\mathcal P$ is an **extensional machine property** when
$$ L(M)=L(N)\implies \bigl(L(M)\in\mathcal P\iff L(N)\in\mathcal P\bigr). $$
Thus membership depends only on the recognized language, not on the particular
machine code.

The property is **nontrivial** when some recognizable language belongs to
$\mathcal P$ and some recognizable language does not.

