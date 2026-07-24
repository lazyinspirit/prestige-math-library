---
id: lem-pasted-squares-commute
kind: lemma
title: "Horizontally pasted commutative squares commute"
status: draft
origin: session
deps: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Ch. 1"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: null
---

## Statement

Given two commutative squares sharing the edge $h$, pasted horizontally,

```tikzcd
A \arrow[r, "f"] \arrow[d, "g"'] & B \arrow[r, "f'"] \arrow[d, "h"] & C \arrow[d, "h'"] \\
A' \arrow[r, "k"'] & B' \arrow[r, "k'"'] & C'
```

the outer rectangle commutes: $h' \circ (f' \circ f) = (k' \circ k) \circ g$.

## Facts & Assumptions

**Given:** Objects and morphisms of the two squares above.

**Diagram:** $f\colon A \to B$, $f'\colon B \to C$, $g\colon A \to A'$, $h\colon B \to B'$, $h'\colon C \to C'$, $k\colon A' \to B'$, $k'\colon B' \to C'$.

[C1] $h \circ f = k \circ g$ (given: the left square commutes).

[C2] $h' \circ f' = k' \circ h$ (given: the right square commutes).

[A1] Composition of morphisms in a category is associative.

## Proof

**Proof technique:** direct.

1.1 $h' \circ (f' \circ f) = (h' \circ f') \circ f = (k' \circ h) \circ f$, applying associativity and the right square $h' \circ f' = k' \circ h$. [A1, C2]

2.1 $(k' \circ h) \circ f = k' \circ (h \circ f) = k' \circ (k \circ g)$, applying associativity and the left square $h \circ f = k \circ g$. [A1, C1, step 1.1]

3.1 $k' \circ (k \circ g) = (k' \circ k) \circ g$ by associativity, so $h' \circ (f' \circ f) = (k' \circ k) \circ g$: the outer rectangle commutes. [A1, step 1.1, step 2.1] ∎
