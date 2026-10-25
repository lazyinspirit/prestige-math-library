---
id: def-one-step-and-reflexive-transitive-derivation
kind: definition
title: "One-step derivation and finite derivation in a context-free grammar"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-context-free-grammar
  - def-relation-domain-range-and-field
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 7"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.07.pdf"
---

## Definition

Let $G=(V,\Sigma,P,S)$ be a context-free grammar. A word over $V\cup\Sigma$ is
a **sentential form**.

For sentential forms $\beta,\gamma$, write
$$ \beta\Rightarrow_G\gamma $$
when there exist words $x,y$ over $V\cup\Sigma$, a variable $A\in V$, and a
production $A\to\alpha$ in $P$ such that
$$ \beta=xAy,\qquad \gamma=x\alpha y. $$
This is the **one-step derivation relation** of $G$, a relation in the sense of
[[def-relation-domain-range-and-field]] on the set of sentential forms.

Write
$$ \beta\Rightarrow_G^*\gamma $$
when $\gamma$ is obtained from $\beta$ by finitely many one-step derivations,
possibly zero. This is the **reflexive transitive closure** of $\Rightarrow_G$,
and a chain
$$ \beta=\beta_0\Rightarrow_G\beta_1\Rightarrow_G\cdots\Rightarrow_G\beta_n=\gamma $$
is a **finite derivation** from $\beta$ to $\gamma$.
