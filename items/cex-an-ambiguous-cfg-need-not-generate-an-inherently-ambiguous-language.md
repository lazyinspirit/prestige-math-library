---
id: cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language
kind: counterexample
title: "An ambiguous expression grammar with an unambiguous grammar for the same language"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-ambiguity-and-inherent-ambiguity, fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Statement refuted

The statement "an ambiguous CFG always generates an inherently ambiguous
language" is false.

## Facts & Assumptions

**Given:** The ambiguous expression grammar
$$ E\to E+E\mid E*E\mid(E)\mid a\mid b, $$
and the precedence grammar
$$ E\to E+T\mid T,\qquad T\to T*F\mid F,\qquad F\to(E)\mid a\mid b. $$

[A1] The statement refuted is: every ambiguous CFG generates an inherently
ambiguous language.

[L1] A context-free language is inherently ambiguous exactly when every
context-free grammar generating it is ambiguous, by
[[def-ambiguity-and-inherent-ambiguity]].

## Counterexample

**Proof technique:** direct.

1.1 The first grammar is ambiguous because the word $a+a*a$ has both the parse $a+(a*a)$ and the parse $(a+a)*a$. [given]

1.2 The second grammar generates the same terminal strings as the first. One inclusion follows by simultaneous induction on its $E$-, $T$-, and $F$-derivations, since every displayed production can be simulated by the first grammar. For the reverse inclusion, scan a generated word at parenthesis depth zero: split at its rightmost top-level `+` if one exists, otherwise at its rightmost top-level `*` if one exists, and otherwise recognize the forced factor $a$, $b$, or $(E)$. Induction on word length gives a derivation in the second grammar. The same decomposition is unique: the $E$-rule forces the rightmost top-level `+`, the $T$-rule forces the rightmost top-level `*`, and the outer symbols force the $F$-rule. Hence the second grammar is unambiguous and, in particular, $a+a*a$ has only the parse $a+(a*a)$. [given, induction]

2.1 By [L1], a language with an unambiguous grammar is not inherently ambiguous. Therefore the first grammar is a counterexample to [A1]. [A1, L1, step 1.1, step 1.2] ∎
