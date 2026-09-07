---
id: def-families-of-finite-character
kind: definition
title: "Families of finite character"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.1, Maximal Principle II, pp.9–10"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Definition

A nonempty family $\mathcal F\subseteq\mathcal P(X)$ has **finite character** if, for every $Y\subseteq X$,

$$Y\in\mathcal F\quad\Longleftrightarrow\quad (\forall u\subseteq Y\text{ finite})\ u\in\mathcal F.$$

The test includes $u=\varnothing$. A member $M$ is inclusion-maximal if no strictly larger subset of $X$ belongs to $\mathcal F$. **Tukey's finite-character principle** asserts that every nonempty family of finite character has an inclusion-maximal member.
