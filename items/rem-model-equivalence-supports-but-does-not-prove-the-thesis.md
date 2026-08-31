---
id: rem-model-equivalence-supports-but-does-not-prove-the-thesis
kind: remark
title: "Model-equivalence theorems support but do not prove the Church-Turing thesis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-church-turing-thesis, thm-one-way-and-two-way-tapes-are-equivalent, thm-nondeterministic-and-deterministic-recognizability-agree, thm-ram-register-and-turing-computability-agree, thm-existence-of-a-universal-turing-machine]
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Notes on Formal Languages, Automata, Computability, and Complexity"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Charles Brubaker and Lance Fortnow, Church-Turing Thesis lesson notes"
      url: "https://s3.amazonaws.com/content.udacity-data.com/courses/gt-cs6505/churchturing.html"
---

## Remark

The Church-Turing thesis from [[def-church-turing-thesis]] is supported by the
fact that many apparently different formal models turn out to have the same
computational power. The equivalence of one-way and two-way tapes
([[thm-one-way-and-two-way-tapes-are-equivalent]]), of nondeterministic and
deterministic recognizability
([[thm-nondeterministic-and-deterministic-recognizability-agree]]), and of
RAM/register programs with Turing machines
([[thm-ram-register-and-turing-computability-agree]]), together with the
existence of a universal interpreter
([[thm-existence-of-a-universal-turing-machine]]), shows that the Turing model
is robust under wide formal redesign.

What these theorems prove is agreement among formal notions. What they do not
prove is that the informal phrase "effectively calculable" from
[[def-church-turing-thesis]] has been exhausted by those formal notions. That
extra bridge is the content of the thesis itself, not a consequence of the
equivalence theorems alone.
