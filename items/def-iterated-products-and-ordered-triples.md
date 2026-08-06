---
id: def-iterated-products-and-ordered-triples
kind: definition
title: "The ordered triple $(a,b,c) := ((a,b),c)$ and the iterated products $A \\times B \\times C := (A \\times B) \\times C$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ordered-pair, def-cartesian-product, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: [def-ordered-triple]
landmark: false
short: "ordered triples, iterated products"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Tuple (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tuple"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

For sets $a$, $b$, $c$ the **ordered triple** is

$$(a,b,c) := ((a,b),c),$$

an ordered pair ([[def-ordered-pair]]) whose first coordinate is itself an
ordered pair, and for sets $A$, $B$, $C$ the **iterated product** is

$$A \times B \times C := (A \times B) \times C,$$

a Cartesian product ([[def-cartesian-product]]) of the same shape. Both
conventions associate to the left, and the elements of $A \times B \times C$ are
exactly the triples $(a,b,c)$ with $a \in A$, $b \in B$ and $c \in C$.

Applying [[thm-the-characterising-property-of-ordered-pairs]] twice gives the
characterising property of triples: $(a,b,c) = (a',b',c')$ holds if and only if
$a = a'$, $b = b'$ and $c = c'$.

## Remarks

- **The bracketing convention is not a formality.** $(A \times B) \times C$ and
  $A \times (B \times C)$ are in general different sets, so a convention has to
  be fixed and adhered to; the left-associated one is fixed here.

- **No $n$-tuples.** A general $n$-tuple is a function on a natural number, and
  the natural numbers are not available at this point in the reading order, so
  only triples and finitely iterated binary products are introduced here. The
  general construction is the product of an indexed family, once functions and
  index sets are available.
