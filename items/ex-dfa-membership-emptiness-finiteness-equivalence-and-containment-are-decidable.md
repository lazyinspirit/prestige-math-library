---
id: ex-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable
kind: example
title: "Running the basic regular-language decision procedures on small DFA's"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 15: Encodings; examples of decidable languages"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.15.pdf"
---

## Example

Let $D_{\mathrm{even}}$ be the two-state DFA over $\{0,1\}$ that accepts
exactly the words with an even number of $1$'s, and let $D_{\mathrm{end1}}$ be
the two-state DFA that accepts exactly the words ending in $1$.

## Facts & Assumptions

**Given:** The DFA's $D_{\mathrm{even}}$ and $D_{\mathrm{end1}}$ just
described.

[L1] By [[thm-dfa-membership-emptiness-finiteness-equivalence-and-containment-are-decidable]], DFA membership, emptiness, finiteness, equivalence, and containment each have a decision procedure.

## Verification

**Proof technique:** direct.

1.1 Membership on the concrete input $1010$ returns "yes" for $D_{\mathrm{even}}$, because the run sees two $1$'s and finishes in the even-parity state. [given]

1.2 The emptiness test returns "nonempty" for both machines, and the finiteness test returns "infinite" for both: $D_{\mathrm{even}}$ accepts $\varepsilon,00,11,0011,\ldots$, while $D_{\mathrm{end1}}$ accepts $1,01,001,\ldots$. [given]

2.1 The equivalence test returns "not equivalent" because $\varepsilon\in L(D_{\mathrm{even}})$ but $\varepsilon\notin L(D_{\mathrm{end1}})$. The containment tests also return "no" in both directions, because $1\in L(D_{\mathrm{end1}})\setminus L(D_{\mathrm{even}})$ and $00\in L(D_{\mathrm{even}})\setminus L(D_{\mathrm{end1}})$. [step 1.1, step 1.2]

3.1 These outcomes match the decision procedures promised by [L1] on an explicit pair of DFA's. [L1, step 2.1] ∎
