---
id: def-alphabet-homomorphism-and-induced-word-map
kind: definition
title: "Alphabet maps into $\\Delta^*$ and their induced maps on words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-function
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Definition

Let $\Sigma$ and $\Delta$ be alphabets. An **alphabet map** is a function
$h:\Sigma\to\Delta^*$ in the sense of [[def-function]].

Its **induced word map** is the function
$$ \widehat h:\Sigma^*\to\Delta^* $$
defined as follows. For the empty word, $\widehat h(\varepsilon)=\varepsilon$.
For a nonempty word $w=a_0a_1\cdots a_{n-1}$ over $\Sigma$,
$$ \widehat h(w):=h(a_0)h(a_1)\cdots h(a_{n-1}), $$
that is, the concatenation of the image words of its letters.

## Remarks

- When every $h(a)$ has length $1$, the induced map simply replaces each letter
  $a$ by a single letter $h(a)$.

- The point of the definition is that the whole map on $\Sigma^*$ is determined
  by the values on the letters of $\Sigma$.
