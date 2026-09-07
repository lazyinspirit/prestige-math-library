---
id: def-set-structures-and-variable-assignments
kind: definition
title: "Structures and variable assignments"
status: draft
origin: pipeline
deps: ["def-set-signature-and-finite-syntax-strings"]
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
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 1C.1\u20131C.5, 1C.11, pp.9\u201314."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

An $L$-structure $\mathcal M$ has a nonempty set carrier $M$, values $c^{\mathcal M}\in M$, total functions $f^{\mathcal M}:M^{a(f)}\to M$, and relations $R^{\mathcal M}\subseteq M^{a(R)}$, supplied as set-indexed interpretation data. Logical equality is literal equality on $M$. An assignment is a function $s:\omega\to M$, also written $s(v_i)=s(i)$. The update $s[x:=b]$ changes only the value at variable $x$ to $b\in M$.

For structures in the same signature a homomorphism $h:M\to N$ preserves constants and function values and takes related tuples to related tuples. It is strong if it also reflects every nonlogical relation. An embedding is an injective strong homomorphism; an isomorphism is a surjective embedding. A substructure has a nonempty subcarrier containing all constants, closed under all functions, with functions and relations restricted from the larger structure. A reduct keeps the carrier and only the interpretations for a smaller signature; an expansion is the reverse relationship. All finite powers and the assignment set $M^\omega$ are sets.

Conventions and prerequisites: [[def-set-signature-and-finite-syntax-strings]].
