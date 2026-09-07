---
id: def-transitive-closure-of-a-set
kind: definition
title: "Transitive closure of a set"
status: published
origin: pipeline
deps: ["lem-finite-predecessor-closure-is-a-set"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.5 p.34; Weiss p.97."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Definition

For a set $a$, form $a_0=a$ and $a_{n+1}=a_n\cup\bigcup a_n$ by recursion on $\omega$. Set

$$\operatorname{TC}(a)=\bigcup_{n\in\omega}a_n.$$

This is a set by the same recursion, Replacement and Union construction as finite predecessor closure, now starting from $a$ rather than a singleton and using membership as the setlike relation. The convention is the least transitive **superset** of $a$; to include $a$ itself as an element, use $\operatorname{TC}(\{a\})$. This construction does not assume Foundation.

Conventions and prerequisites: [[lem-finite-predecessor-closure-is-a-set]].
