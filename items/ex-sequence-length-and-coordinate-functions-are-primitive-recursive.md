---
id: ex-sequence-length-and-coordinate-functions-are-primitive-recursive
kind: example
title: "Reading the length and third coordinate of a coded finite sequence"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sequence-length-and-coordinate-functions-are-primitive-recursive]
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
    - title: "Klaus Sutner, Coding Functions"
      url: "https://www.cs.cmu.edu/~cdm/resources/02-coding.pdf"
---

## Example

Consider the sequence $(2,5,1)$. Its binary-entry blocks are
$$ \operatorname{bin}(2)=10,\qquad \operatorname{bin}(5)=101,\qquad \operatorname{bin}(1)=1, $$
so the code word from [[def-natural-number-coding-of-finite-sequences]] is
$$ 1\,1110\,11010\,1110101\,101. $$
Let $s$ be the natural number with that binary numeral. Then the decoded header
has length $3$, and the third coordinate block decodes to $1$. Hence
$$ \operatorname{len}(s)=3,\qquad \operatorname{entry}(s,2)=1. $$

## Facts & Assumptions

**Given:** The coded sequence $s$ described above.

[L1] The sequence-length and coordinate-reading functions for this coding are primitive recursive, by [[thm-sequence-length-and-coordinate-functions-are-primitive-recursive]].

## Verification

**Proof technique:** direct.

1.1 The block $1110$ immediately after the initial sentinel has three leading $1$'s before its first $0$, so the decoded sequence length is $3$. [given]

1.2 After the first two payload blocks $11010$ and $1110101$, the last block is $101$, which is the self-delimiting block for the binary numeral $1$. Therefore the third decoded coordinate is $1$. [given]

2.1 Steps 1.1 and 1.2 show exactly what the theorem [L1] predicts on this concrete input: the primitive-recursive decoders return $\operatorname{len}(s)=3$ and $\operatorname{entry}(s,2)=1$. [L1, step 1.1, step 1.2] ∎
