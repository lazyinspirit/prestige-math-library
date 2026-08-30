---
id: fs-cnf-preserves-epsilon-without-an-exception
kind: false-statement
title: "FALSE: converting to Chomsky normal form preserves epsilon without a special start-symbol exception"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chomsky-normal-form, thm-chomsky-normal-form]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Statement

**False claim:** converting a context-free grammar to Chomsky normal form
preserves $\varepsilon$ without any special exception.

## Facts & Assumptions

**Given:** The grammar with one variable and one production,
$$ S\to\varepsilon. $$

[A1] The statement refuted is: CNF conversion preserves $\varepsilon$ without a
special start-symbol exception.

[L1] Chomsky normal form allows an $\varepsilon$-production only in the special
case $S\to\varepsilon$ with $S$ absent from every right-hand side, by
[[def-chomsky-normal-form]].

[L2] Every context-free grammar is equivalent to one in Chomsky normal form, by
[[thm-chomsky-normal-form]].

## Refutation

**Proof technique:** direct.

1.1 The given grammar generates exactly the language $\{\varepsilon\}$. So any equivalent CNF grammar must still generate $\varepsilon$. [given, L2]

1.2 Without the exception described in [L1], every CNF production would have the form $A\to BC$ or $A\to a$. Such rules can produce only nonempty terminal words, because every terminal step contributes one symbol and no rule deletes all remaining symbols. Therefore a grammar with only those two rule types cannot generate $\varepsilon$. [L1]

2.1 Step 1.2 contradicts the requirement from step 1.1, so the special start-symbol exception is genuinely necessary. The claim [A1] is false. [A1, step 1.1, step 1.2] ∎
