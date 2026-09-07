---
id: def-grothendieck-universe-closure-convention
kind: definition
title: "Grothendieck universe closure convention"
status: draft
origin: pipeline
deps: ["prop-transitive-closure-minimality"]
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
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 10 p.102; Shulman p.16."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Definition

A Grothendieck universe, in the closure convention used here, is a nonempty transitive set $U$ such that: if $x,y\in U$ then $\{x,y\}\in U$; if $x\in U$ then $\mathcal P(x)\in U$; and if $I\in U$ and $f$ is any set function on $I$ with $f(i)\in U$ for every $i\in I$, then $\bigcup_{i\in I}f(i)\in U$. The indexing function need not itself belong to $U$.

The additional condition $\omega\in U$ is imposed only when explicitly stated. This is a definition by closure conditions, not an assertion that a universe containing any prescribed set exists. Transitivity means that every member of a member of $U$ is itself a member of $U$.

Conventions and prerequisites: [[prop-transitive-closure-minimality]].
