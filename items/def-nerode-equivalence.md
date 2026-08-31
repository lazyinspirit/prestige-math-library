---
id: def-nerode-equivalence
kind: definition
title: "Nerode equivalence of words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computation-alphabet-and-word-convention, def-language-over-an-alphabet]
verification:
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
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Definition

Let $L\subseteq\Sigma^*$ be a language over an alphabet $\Sigma$.

Two words $u,v\in\Sigma^*$ are **Nerode-equivalent for $L$** when every right
continuation tests membership in the same way:
$$ u\equiv_L v \quad\Longleftrightarrow\quad \forall x\in\Sigma^*,\ ux\in L \iff vx\in L. $$

The equivalence classes of $\equiv_L$ are the **Nerode classes** of $L$. Their
number, finite or infinite, is the **index** of $\equiv_L$.
