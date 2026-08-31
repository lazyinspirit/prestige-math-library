---
id: thm-sequence-length-and-coordinate-functions-are-primitive-recursive
kind: theorem
title: "The sequence-length and coordinate-reading functions are primitive recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-recursive-function, prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive, def-natural-number-coding-of-finite-sequences]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Coding Functions"
      url: "https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf"
---

## Statement

For the coding from [[def-natural-number-coding-of-finite-sequences]], the
following total functions are primitive recursive:

- the decoded length function $\operatorname{len}(s)$ defined by
  $$ \operatorname{len}(s)=k \text{ if } s=\ulcorner(a_0,\dots,a_{k-1})\urcorner_{\mathrm{seq}}, $$
  and $\operatorname{len}(s)=0$ otherwise, and
- the coordinate-reading function $\operatorname{entry}(s,i)$ defined by
  $$ \operatorname{entry}(s,i)=a_i \text{ if } s=\ulcorner(a_0,\dots,a_{k-1})\urcorner_{\mathrm{seq}} \text{ and } i<k, $$
  and $\operatorname{entry}(s,i)=0$ otherwise.

## Facts & Assumptions

**Given:** The sequence coding from [[def-natural-number-coding-of-finite-sequences]].

[L1] Primitive recursive functions are closed under the basic arithmetic, characteristic, and bounded-quantification constructions from [[prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive]].

[L2] A coded finite sequence has binary numeral $1\,1^k0\,c(\operatorname{bin}(a_0))\cdots c(\operatorname{bin}(a_{k-1}))$, with each block $c(w)=1^{|w|}0w$, by [[def-natural-number-coding-of-finite-sequences]].

## Proof

**Proof technique:** direct.

1.1 By bounded search on quotients and remainders, one can primitive-recursively
recover the binary length of a positive integer and each individual bit of its
canonical binary numeral. Using [L2], a bounded scan first reads the sentinel
and unary header, obtaining a candidate $k$. It then parses exactly $k$
self-delimiting blocks, checks that each payload is a canonical binary numeral,
and verifies that the final block ends at the end of the numeral. Only if all
these checks succeed does it return $k$; otherwise it returns $0$. All scan
bounds are at most the binary length of $s$, so this full validity test and the
total function $\operatorname{len}$ are primitive recursive by [L1]. [L1, L2, given, construct]

2.1 Once $\operatorname{len}(s)=k$ is known, the start and end of the $i$th block $c(\operatorname{bin}(a_i))$ are found by another bounded scan through the same binary numeral: each block begins with a run of $1$'s whose length is the bit-length of $a_i$, followed by one delimiter $0$, followed by exactly that many payload bits. The integer represented by that payload is then recovered by a bounded primitive-recursive evaluation of binary place values. [L1, L2, step 1.1, construct]

3.1 If the bounded scan shows that $i\ge\operatorname{len}(s)$ or that the numeral of $s$ is not of the required form, define the output to be $0$. Otherwise return the value decoded in step 2.1. Because every search range is bounded by the bit-length of $s$, the total function $\operatorname{entry}(s,i)$ is primitive recursive by [L1]. [L1, step 2.1, construct]

4.1 Steps 1.1 and 3.1 prove that both the length function and the total coordinate-reading function are primitive recursive. [step 1.1, step 3.1] ∎
