---
id: ex-cfg-to-pda-construction
kind: example
title: "Building a PDA for $\\{a^n b^n : n \\ge 0\\}$ from the standard grammar"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cfg-to-pda-construction]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Start with the grammar
$$ S\to aSb\mid\varepsilon. $$

The standard grammar-to-PDA construction produces a one-state PDA whose initial
stack symbol is $S$, with $\varepsilon$-moves replacing $S$ by $aSb$ or
$\varepsilon$, and with input-reading moves that match $a$ or $b$ against the
top terminal on the stack.

## Facts & Assumptions

**Given:** The grammar $S\to aSb\mid\varepsilon$ for $\{a^n b^n:n\ge 0\}$.

[L1] By [[thm-cfg-to-pda-construction]], the standard pop/expand construction turns a CFG into an equivalent PDA that accepts by empty stack.

## Verification

**Proof technique:** direct.

1.1 On input $aabb$, the unread-input/stack pairs may evolve as $$ (aabb,S)\to(aabb,aSb)\to(abb,Sb)\to(abb,aSbb)\to(bb,Sbb)\to(bb,bb)\to(b,b)\to(\varepsilon,\varepsilon). $$ The four input-consuming moves pop the displayed top terminal, while the three other moves expand $S$ by $aSb$, expand it once more, and finally replace it by $\varepsilon$. [given]

2.1 The same pattern works for every word $a^n b^n$: repeat $S\to aSb$ and immediately read and pop the new top $a$, exactly $n$ times; then use $S\to\varepsilon$ and read and pop the remaining $n$ symbols $b$. Therefore the constructed PDA recognizes $\{a^n b^n:n\ge 0\}$. [L1, step 1.1]

3.1 This is the standard grammar-to-PDA construction from [L1] on a concrete language. [L1, step 2.1] ∎
