---
id: def-decidable-and-recognizable-language
kind: definition
title: "Decidable and recognizable languages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-recognized-and-decided, def-computable-and-partial-computable-function]
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Definition

Let $L\subseteq\Sigma^*$ be a language.

- $L$ is **recognizable** when some deterministic Turing machine recognizes $L$
  in the sense of [[def-language-recognized-and-decided]].
- $L$ is **decidable** when some deterministic Turing machine decides $L$ in
  the sense of [[def-language-recognized-and-decided]].

After fixing any effective binary encoding of the finite alphabet $\Sigma$
(and hence of $\Sigma^*$) and the evident encoding of $\{0,1\}$, equivalently
$L$ is decidable exactly when its characteristic function
$\chi_L:\Sigma^*\to\{0,1\}$ is computable with respect to those encodings.
Recognizability only asks for effective halting on the positive instances and
forbids acceptance on the negative instances.
