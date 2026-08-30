---
id: thm-chomsky-normal-form
kind: theorem
title: "Every context-free language has an equivalent grammar in Chomsky normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-elimination-of-useless-symbols, thm-elimination-of-epsilon-productions, thm-elimination-of-unit-productions, def-chomsky-normal-form]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Every context-free grammar has an equivalent context-free grammar in Chomsky
normal form.

## Facts & Assumptions

**Given:** A context-free grammar $G$.

[L1] Useless symbols can be eliminated without changing the language, by
[[thm-elimination-of-useless-symbols]].

[L2] Epsilon-productions can be eliminated except for the special start-symbol
exception, by [[thm-elimination-of-epsilon-productions]].

[L3] Unit productions can be eliminated without changing the language, by
[[thm-elimination-of-unit-productions]].

[L4] Chomsky normal form allows only productions of the shapes listed in
[[def-chomsky-normal-form]].

## Proof

**Proof technique:** direct.

1.1 Apply [L1], [L2], and [L3] in order to obtain an equivalent grammar $G_1$ in which every remaining production is nonunit and every $\varepsilon$-production is removed except possibly a start-symbol rule. [L1, L2, L3, construct]

2.1 For each terminal $a$ that appears in a right-hand side of length at least $2$, introduce a fresh variable $T_a$ with production $T_a\to a$, and replace that occurrence of $a$ by $T_a$. This changes no generated word, because each use of $T_a$ can immediately be expanded to the terminal $a$. After this step, every right-hand side is either a single terminal or a word of variables only. [construct, step 1.1]

3.1 For each production $A\to B_1B_2\cdots B_k$ with $k\ge 3$, introduce fresh variables $C_1,\ldots,C_{k-2}$ and replace the production by $$ A\to B_1C_1,\qquad C_i\to B_{i+1}C_{i+1}\ \ (1\le i\le k-3),\qquad C_{k-2}\to B_{k-1}B_k. $$ The middle family is empty when $k=3$, so that case is the two-rule chain $A\to B_1C_1$ and $C_1\to B_2B_3$. One use of the original long rule is equivalent to this forced chain of binary rules, and conversely the binary chain produces exactly the same string of variables. [construct, step 2.1]

4.1 After steps 2.1 and 3.1, every production is either $A\to BC$, $A\to a$, or the exceptional start-symbol rule $S\to\varepsilon$. Therefore [L4] says the resulting grammar is in Chomsky normal form, and the preceding steps preserved the language. [L4, step 2.1, step 3.1] ∎
