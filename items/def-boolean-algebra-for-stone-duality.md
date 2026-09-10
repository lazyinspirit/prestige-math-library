---
id: def-boolean-algebra-for-stone-duality
kind: definition
title: Boolean algebras and their order
status: draft
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, Definitions 2.1.1 and 2.3.1, pp. 3 and 8"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Definition

In ZF, a **Boolean algebra** is a set $B$ with binary operations $\wedge,\vee$, a unary operation $\neg$, and elements $0,1$, satisfying the bounded distributive lattice laws and

$$a\wedge\neg a=0,\qquad a\vee\neg a=1\quad(a\in B).$$

Explicitly, both binary operations are associative, commutative and idempotent; they satisfy absorption and both distributive laws; $a\wedge1=a$, $a\vee0=a$, $a\wedge0=0$ and $a\vee1=1$. Its order is $a\le b$ if $a\wedge b=a$, equivalently $a\vee b=b$.

The algebra is nonempty because its bounds are elements. We allow $0=1$, in which case every $a$ equals $a\wedge1=a\wedge0=0$. This one-element algebra is called **trivial**. Otherwise the algebra is **nontrivial**. The empty join is $0$ and the empty meet is $1$.

All Boolean homomorphisms in this development preserve both bounds, as well as the operations.
