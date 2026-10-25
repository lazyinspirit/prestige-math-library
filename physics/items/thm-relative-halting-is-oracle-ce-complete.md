---
id: thm-relative-halting-is-oracle-ce-complete
kind: theorem
title: "Relative halting is oracle-c.e.-complete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-turing-jump, def-oracle-ce-completeness]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Sebastiaan Terwijn, Computability Theory, §5.2"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Statement

For every oracle $A$, $A'$ is $A$-c.e.-complete under $\le_m^A$.

## Facts & Assumptions

**Given:** an oracle $A$ and an $A$-c.e. set $W$, recognized by program $e$.

## Proof

**Proof technique:** direct.

1.1 Dovetailing the computations $\Phi_i^A(i)$ enumerates exactly $A'$, so $A'$ is $A$-c.e. [given, construct]

1.2 Insert the numerals $e,n$ into the fixed oracle-program template which ignores its own input and simulates $\Phi_e^A(n)$. The hardwiring compiler of [[def-turing-jump]] gives its index $s(e,n)$ by a total computable map, uniformly in $e,n$ and independently of $A$. Therefore $$n\in W\iff \Phi_e^A(n)\downarrow \iff \Phi_{s(e,n)}^A(s(e,n))\downarrow \iff s(e,n)\in A'.$$ [given, construct]

2.1 Thus $n\mapsto s(e,n)$ is a total $A$-computable many-one reduction $W\le_m^A A'$. Since $W$ was arbitrary, the definition of completeness applies. [step 1.1, step 1.2] ∎
