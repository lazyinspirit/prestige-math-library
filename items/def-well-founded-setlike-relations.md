---
id: def-well-founded-setlike-relations
kind: definition
title: "Well-founded and setlike relations"
status: draft
origin: pipeline
deps: ["def-ordinal"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.1 and 6.3 p.30."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Definition

Let $X$ be a definable class and $R$ a definable binary relation on $X$, with fixed set parameters. Write $\operatorname{pred}_R(x)=\{y\in X:yRx\}$. The relation is setlike if this predecessor collection is a set for every $x\in X$. It is well-founded if every nonempty set $A\subseteq X$ has an $R$-minimal member $x$, meaning $\operatorname{pred}_R(x)\cap A=\varnothing$.

These are schemes in first-order set theory: a class is notation for a defining formula. No transitivity or totality of $R$ is required. Every relation on a set is setlike. An ordinal carries a well-founded membership relation by its definition; ambient Foundation does not make every arbitrary relation well-founded. All results concerning a supplied well-founded setlike relation are valid in ZF without Foundation unless stated otherwise.

Conventions and prerequisites: [[def-ordinal]].
