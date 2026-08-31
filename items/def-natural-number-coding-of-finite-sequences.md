---
id: def-natural-number-coding-of-finite-sequences
kind: definition
title: "A natural-number coding of finite sequences"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-effective-binary-encoding-and-decoder, lem-finite-tuples-admit-effective-prefix-free-encodings]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Coding Functions"
      url: "https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf"
---

## Definition

Write $\operatorname{bin}(n)$ for the canonical binary numeral of $n$, with
$\operatorname{bin}(0)=0$. For a binary word $w$, let
$$ c(w):=1^{|w|}0w. $$

For a finite sequence of natural numbers
$$ a=(a_0,\dots,a_{k-1}), $$
define its **sequence word**
$$ W(a):=1\,1^k0\,c(\operatorname{bin}(a_0))\cdots c(\operatorname{bin}(a_{k-1})). $$
The leading $1$ keeps the whole word a canonical positive binary numeral even
when $k=0$.

The **natural-number code** of $a$ is the unique natural number
$$ \ulcorner a\urcorner_{\mathrm{seq}} $$
whose binary numeral is $W(a)$. In particular, the empty sequence has code
$\ulcorner()\urcorner_{\mathrm{seq}}=2$, because $W(())=10$.

By [[lem-finite-tuples-admit-effective-prefix-free-encodings]], the tuple of
binary numerals inside $W(a)$ is effectively and uniquely decodable, so this
construction gives an injective coding of finite sequences of natural numbers
by natural numbers.

## Remarks

- Later items write $\operatorname{len}(s)$ for the decoded length of the
  sequence coded by $s$, and $(s)_i$ for its $i$th decoded entry when
  $i<\operatorname{len}(s)$.

- The coding is chosen so that the length header and every coordinate block can
  be recovered by bounded scans through the binary numeral of the code.
