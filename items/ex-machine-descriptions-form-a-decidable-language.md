---
id: ex-machine-descriptions-form-a-decidable-language
kind: example
title: "Testing a few short binary strings for machine-code well-formedness"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-machine-descriptions-form-a-decidable-language, lem-machine-encoding-is-injective-and-decodable, def-effective-encoding-of-turing-machines]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Under the chosen code of [[def-effective-encoding-of-turing-machines]], compare
the short words
$$ 0,\qquad 10,\qquad 111111011011100101101100101. $$

## Facts & Assumptions

**Given:** The three displayed binary words.

[L1] By [[lem-machine-encoding-is-injective-and-decodable]], the decoder either reconstructs one coded machine or reports malformed input.

[L2] By [[prop-machine-descriptions-form-a-decidable-language]], this decoder test decides well-formed machine descriptions.

## Verification

**Proof technique:** direct.

1.1 The words `0` and `10` are malformed. The first never even begins the required positive-arity tuple code, and the second announces arity $1$ but provides no self-delimiting payload block. Therefore the decoder of [L1] rejects both. [L1, given]

1.2 The word `111111011011100101101100101` is the code of the tuple $(11,0,1,1,0,1)$, so it decodes to the normalized machine with $m=3$, $s=0$, $n=1$, and the unique transition $(0,0)\mapsto(1,0,1)$. In particular $0\le s<n$, and the tuple has the required $3+3(m-2)n=6$ entries. Thus [L1] accepts it as a well-formed machine description, and [L2] classifies the three sample words exactly as claimed. [L1, L2, given]

2.1 This makes the decidability test concrete: two malformed inputs are rejected and one genuine machine code is accepted. [step 1.1, step 1.2] ∎
