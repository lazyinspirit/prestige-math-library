---
id: def-conditional-independence-given-a-sigma-algebra
kind: definition
title: "Conditional independence given a sigma-algebra"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-conditional-expectation-given-a-sigma-algebra, def-conditional-expectation-as-an-ae-class]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Aldous-Chewi probability notes, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
      locator: "Definition 9.1, printed pp. 35-36"
---

## Definition

Assume the axiom of choice so that the library's conditional-expectation
classes are available. Let $Y$ and $Z$ be random elements and let
$\mathcal G\subseteq\mathcal F$ be a sigma-algebra. We say that $Y$ and $Z$ are
**conditionally independent given $\mathcal G$**, and write
$Y\perp\!\!\!\perp Z\mid\mathcal G$, if for every pair of bounded measurable
real functions $f,g$,
$$ \mathbb E[f(Y)g(Z)\mid\mathcal G] =\mathbb E[f(Y)\mid\mathcal G]\, \mathbb E[g(Z)\mid\mathcal G]\quad\text{a.s.} $$
This is an equality of almost-everywhere classes and hence does not depend on
representatives.

For sigma-algebras $\mathcal H_1,\mathcal H_2\subseteq\mathcal F$, the notation
$\mathcal H_1\perp\!\!\!\perp\mathcal H_2\mid\mathcal G$ means the same identity
for every bounded $\mathcal H_1$-measurable $U$ and bounded
$\mathcal H_2$-measurable $V$.

The definition is symmetric. If $\mathcal G=\{\varnothing,\Omega\}$ modulo
null sets, it reduces to ordinary independence. If one side is
$\mathcal G$-measurable, conditional independence is automatic because that
factor is already known when conditioning. The choices of the zero function or
the constant-one function cause no exceptional case.

