---
id: def-first-order-syntactic-consistency
kind: definition
title: "Consistency and syntactic completeness"
status: draft
origin: pipeline
deps: [def-set-coded-formal-derivation]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic, Definition 1H.11, printed p38; fixed-bottom convention adapted."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
---

## Definition

Fix a set signature $L$ and sentence theory $T$, with derivability as in [[def-set-coded-formal-derivation]]. Fix the sentence $\bot:=\exists v_0\neg(v_0=v_0)$.

The theory $T$ is **consistent** when $T\nvdash\bot$. It is **syntactically complete** when for every $L$-sentence $\sigma$, $T\vdash\sigma$ or $T\vdash\neg\sigma$. Deductive closure of a sentence theory means closure under its sentence consequences; it does not include open formulas as members.

If $L\subseteq L'$ and $T\subseteq U$ are sentence theories in their respective signatures, $U$ is **conservative over $T$** when every $L$-sentence provable from $U$ is provable from $T$. The reverse preservation follows by retaining the same derivation in the expansion. These are syntactic definitions, including when $T$ is empty; no model existence is asserted.
