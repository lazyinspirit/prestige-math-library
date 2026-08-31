---
id: def-lambda-term-beta-reduction-and-represented-function
kind: definition
title: "Lambda terms, beta reduction, and the partial functions they represent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-natural-numbers]
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
    - title: "Jeremy Avigad and Richard Zach, Lambda Definability"
      url: "https://builds.openlogicproject.org/content/lambda-calculus/lambda-definability/lambda-definability.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://studylib.net/doc/28158899/turing-paper-1936"
---

## Definition

The **lambda terms** are the finite expressions built from variables by the
rules
$$ x,\qquad (MN),\qquad (\lambda x.M). $$
Because they are finite strings over a fixed finite syntax, they admit
effective coding.

A **beta reduction** is one application of the rewrite rule
$$ (\lambda x.M)N\to_\beta M[x:=N], $$
where $M[x:=N]$ denotes **capture-avoiding substitution**: before substituting,
bound variables of $M$ are alpha-renamed when necessary so that no free
variable of $N$ becomes bound. Terms that differ only by such a consistent
renaming of bound variables are identified up to alpha-equivalence.
The relation $\to_\beta^*$ denotes the reflexive transitive closure of beta
reduction modulo alpha-equivalence.

For each $n\in\mathbb N$, let $\overline n$ be the Church numeral for $n$. A
lambda term $F$ **represents** a partial function
$f:\mathbb N^k\rightharpoonup\mathbb N$ when:

- for every $(n_1,\dots,n_k)$ in the domain of $f$,
  $$ F\,\overline{n_1}\cdots\overline{n_k}\to_\beta^* \overline{f(n_1,\dots,n_k)}, $$
- and for every input tuple outside the domain, the term
  $F\,\overline{n_1}\cdots\overline{n_k}$ never reaches a Church numeral by
  beta reduction.

Such a function is called **lambda-definable**.

## Remarks

- The represented object is a partial function on natural numbers, not the
  term itself.

- The chosen convention is extensional: different lambda terms may represent
  the same partial function.
