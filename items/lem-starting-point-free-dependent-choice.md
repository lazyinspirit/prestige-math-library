---
id: lem-starting-point-free-dependent-choice
kind: lemma
title: "Recovering a prescribed starting point in DC"
status: published
origin: pipeline
deps: ["def-dependent-choice", "lem-finite-choice", "thm-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4, pp.22–23"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "alg-d, On dependent choice, Proposition 3, PDF p.2; Proposition 7, pp.4–5"
      url: https://alg-d.com/math/ac/dc.pdf
---

## Statement

In ZF, the following implies DC with prescribed initial point: every serial relation on a nonempty set has an omega path, without specification of its first term. Thus the two versions of DC are equivalent.

## Facts & Assumptions

[F1] [[def-dependent-choice]]: The library version requires $x_0=a$ for every $a\in X$.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Assume the version without a starting point. Fix a serial $R$ on $X\ne\varnothing$ and $a\in X$. Let $T$ consist of nonempty finite $R$-paths starting at $a$. It contains $(a)$. The relation of extending by exactly one term is serial, since the last point has a successor. Obtain a path $(t_n)$ in $T$ under this relation. [given]

2.1 The $t_n$ are nested and have lengths $\operatorname{len}(t_0)+n$. Their union has domain omega, starts at $a$, and satisfies $x_nRx_{n+1}$ at each index, since some finite path contains both coordinates. This is the prescribed-start version. [F1, step 1.1]

3.1 Conversely, on a nonempty $X$ fix one $a\in X$ and apply prescribed-start DC, then forget the value of its first term. This one existential selection does not invoke AC. [F1] ∎
