---
id: def-catalan-number
kind: definition
title: "The Catalan number $C_n:=\\lvert\\mathcal{D}_n\\rvert$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dyck-path-and-semilength, lem-dyck-paths-of-a-given-semilength-form-a-finite-set, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5 Catalan Numbers"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Definition

For $n\in\mathbb{N}$ the **Catalan number** $C_n$ is the number of Dyck paths of
semilength $n$:

$$C_n := \lvert\mathcal{D}_n\rvert \in \mathbb{N}$$

([[def-dyck-path-and-semilength]], [[def-finite-cardinality]]). This is a natural
number because $\mathcal{D}_n$ is finite
([[lem-dyck-paths-of-a-given-semilength-form-a-finite-set]]), and the cardinality
notation is defined for finite sets only.

**$C_0=1$ and $C_1=1$**, both read off the definition rather than stipulated:
$\mathcal{D}_0$ is the one-element set containing the empty path, and
$\mathcal{D}_1$ is the one-element set whose member has step word $UD$
([[def-dyck-path-and-semilength]]).

**$C_n\ge1$ for every $n$**, since $\mathcal{D}_n$ is nonempty
([[lem-dyck-paths-of-a-given-semilength-form-a-finite-set]]).

## Remarks

- **The Catalan number is defined as a count, and every formula for it is a
  theorem.** Defining $C_n$ by a closed expression would make $C_0=1$ a
  convention about an empty product or an empty binomial coefficient, and would
  make the statement that the expression is a natural number something to be
  arranged rather than proved. Here integrality is free and the closed formula has
  content.

- **The indexing convention.** $C_n$ counts the Dyck paths of semilength $n$,
  equivalently the ballot words of length $2n$, so $C_0=1$ and the path has $2n$
  steps. This is the indexing of Krattenthaler §10.3 and of Guichard §3.5, and
  every source consulted for this page agrees on it; a source indexing by the
  number of steps would call the same number $C_{2n}$, and no statement here is
  stated that way.
