---
id: fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language
kind: false-statement
title: "FALSE: an ambiguous CFG always generates an inherently ambiguous language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ambiguity-and-inherent-ambiguity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Statement

**False claim:** if a context-free grammar is ambiguous, then the language it
generates is inherently ambiguous.

## Facts & Assumptions

**Given:** The grammar
$$ E\to E+E\mid E*E\mid(E)\mid a\mid b. $$

[A1] The statement refuted is: every ambiguous context-free grammar generates an
inherently ambiguous language.

[L1] A context-free language is inherently ambiguous when every context-free
grammar generating it is ambiguous, by
[[def-ambiguity-and-inherent-ambiguity]].

## Refutation

**Proof technique:** direct.

1.1 The displayed grammar is ambiguous: the word $a+a*a$ has one parse corresponding to $a+(a*a)$ and another corresponding to $(a+a)*a$. So the grammar is an ambiguous CFG. [given]

1.2 The standard precedence grammar $$ E\to E+T\mid T,\qquad T\to T*F\mid F,\qquad F\to(E)\mid a\mid b $$ generates the same terminal strings. One inclusion follows by simultaneous induction on its $E$-, $T$-, and $F$-derivations, since every displayed production can be simulated by the first grammar. For the reverse inclusion, scan a generated word at parenthesis depth zero: if there is a `+`, split at the rightmost such `+`; otherwise, if there is a `*`, split at the rightmost such `*`; the remaining factor is either $a$, $b$, or a parenthesized expression. Induction on the word length gives a derivation in the precedence grammar. These rightmost top-level splits are forced by its left-recursive $E$- and $T$-rules, while the $F$-case is forced by the outer symbols, so the resulting parse is unique. In particular, $a+a*a$ has only the parse $a+(a*a)$. Thus the language has an unambiguous grammar. [given, induction]

2.1 By [L1], a language with an unambiguous grammar is not inherently ambiguous. So the ambiguous grammar from step 1.1 does not force its language to be inherently ambiguous, and [A1] is false. [A1, L1, step 1.1, step 1.2] ∎
