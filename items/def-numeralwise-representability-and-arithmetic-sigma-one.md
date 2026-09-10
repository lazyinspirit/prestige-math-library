---
id: def-numeralwise-representability-and-arithmetic-sigma-one
kind: definition
title: "Numeralwise representation and arithmetic complexity"
status: published
origin: pipeline
deps: [def-robinson-q-and-peano-arithmetic]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Definition 4B.1 pp145–146 and §4C.11 p154"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Definition

A formula $F(\bar x,y)$ numeralwise represents a total function $f$ in Q if, for every external tuple $\bar n$, Q proves $\forall y(F(\overline{\bar n},y)\leftrightarrow y=\overline{f(\bar n)})$. A formula expresses a relation numeralwise if Q proves each true numeral instance and its negation for each false numeral instance.

An arithmetic formula is bounded when its quantifiers are bounded by arithmetic terms using the order convention of [[def-robinson-q-and-peano-arithmetic]]. A syntactic $\Sigma_1$ formula is a finite existential closure of a bounded formula. A PA-$\Sigma_1$ formula is one PA proves equivalent to a syntactic one. The base theory is part of any such equivalence assertion.

Numeralwise unique values do not assert $\mathrm{PA}\vdash\forall\bar x\exists!yF(\bar x,y)$; when needed that is a separate conclusion. In particular PA equivalence to a syntactic $\Sigma_1$ formula must not be used as Q equivalence. This arithmetic notion is not the set-theoretic Lévy hierarchy.
