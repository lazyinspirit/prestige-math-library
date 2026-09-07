---
id: def-term-denotation-in-a-set-structure
kind: definition
title: "Term denotation"
status: draft
origin: pipeline
deps: ["def-set-structures-and-variable-assignments", "thm-structural-recursion-on-set-coded-syntax"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1C.7, p.11."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

For an $L$-structure $\mathcal M$ and assignment $s\in M^\omega$, define $\llbracket v_i\rrbracket_s=s(i)$, $\llbracket c\rrbracket_s=c^{\mathcal M}$ and

$$\llbracket f(t_1,\ldots,t_n)\rrbracket_s=f^{\mathcal M}(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s).$$

This is a simultaneous definition for all assignments: recurse on terms into the set $M^{(M^\omega)}$ of functions from assignments to $M$. Variable leaves are projections, constant leaves are constant maps, and each function operation acts pointwise. Structural recursion gives a unique evaluation. The operations are total because the interpreted functions are total. Superscripts $\mathcal M$ on brackets will distinguish structures when needed.

Conventions and prerequisites: [[def-set-structures-and-variable-assignments]], [[thm-structural-recursion-on-set-coded-syntax]].
