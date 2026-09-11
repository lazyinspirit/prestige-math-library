---
id: "ex-smn-specializes-a-two-argument-index"
kind: "example"
title: "Smn specializes a two argument index"
status: published
origin: "pipeline"
deps: ["thm-smn-for-the-fixed-acceptable-numbering", "lem-fixed-coding-primitive-recursive-arithmetic-and-sequences"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier Theorem 3.1; local worked specialization"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
generation:
  role: example
proof_strategy: "direct"
---

## Example

Take the addition derivation $A(a,0)=a$, $A(a,y+1)=S(A(a,y))$ and apply the finite syntax compiler from the normal-form construction (available through specialization). Let w be its emitted machine word and let $e=2^{|w|}-1+\operatorname{val}(w)$ be its length-lex index. This specifies an actual compiled index, without pretending it has a particular short decimal value. Concretely its routine parses two numeral blocks, stores the first in an accumulator and the second in a counter, increments the accumulator and decrements the counter until the latter is zero, then writes the accumulator as output. Each binary decrement changes trailing zeros to ones and the preceding one to zero and removes a newly redundant leading zero, retaining the single word 0 for zero.

Set $q=s_1^1(e,3)$. Then q computes $y\mapsto3+y$; in particular $\varphi_q(0)=3$ and $\varphi_q(4)=7$.

## Facts & Assumptions

**Given:** The explicitly specified addition routine, compiled with the literal finite-state routine convention of the preceding normal-form and specialization constructions. A fixed ordering of the emitted states is part of that compiler, not a claim that all compilers give the same e.

[F1] Specialization prepends stored parameters and preserves partial-function values and domains ([[thm-smn-for-the-fixed-acceptable-numbering]]).

[F2] Addition is given by primitive recursion and canonical numeral operations are PR ([[lem-fixed-coding-primitive-recursive-arithmetic-and-sequences]]).

## Verification

1.1 After j loop iterations, the accumulator is $a+j$ and the counter is $y-j$, for $0\le j\le y$: initially this is the parsed input, and one increment/decrement preserves the formula. The counter reaches zero after exactly y iterations, giving output $a+y$. At y=0 the loop is skipped. These are the addition recursion and its finite numeral routines in F2, so the compiled index e has the advertised total binary function. [F2, given]

2.1 Specialization F1 writes the stored numeral $\operatorname{bin}(3)=11$ before the input numeral and sends the two-entry tuple to e. For y=0 the arity header is 110, the block for 11 is 11011 and the block for 0 is 100, so the exact grouped encoding is $110\,11011\,100$. For y=4 it is $110\,11011\,1110100$, since the block for 100 is $1110\,100$. The first calculation leaves accumulator 3 unchanged and outputs 11; the second has accumulator values $3,4,5,6,7$ and counter values $4,3,2,1,0$, outputting 111. Thus canonical input numerals 0 and 100 produce 11 and 111 respectively, and F1 gives the asserted equality for every y. [step 1.1, F1] ∎
