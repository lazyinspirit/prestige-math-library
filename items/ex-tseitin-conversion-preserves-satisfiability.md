---
id: "ex-tseitin-conversion-preserves-satisfiability"
kind: "example"
title: "A Tseitin conversion preserves satisfiability"
status: published
origin: "pipeline"
deps: ["lem-tableau-to-cnf-map-has-polynomial-size-and-time"]
justified_by: []
landmark: false
provenance:
  statement: "ai-generated"
  proof: "ai-generated"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, \u00a72.3"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
generation:
  role: "example"
proof_strategy: "direct"
---

## Example

For $F=(x\wedge\neg y)\vee z$, introduce $u=\neg y$, $v=x\wedge u$, and $w=v\vee z$. The CNF is the conjunction of the following nine clauses:
$$u\vee y,\quad\neg u\vee\neg y,\quad\neg v\vee x,\quad\neg v\vee u,\quad v\vee\neg x\vee\neg u,\quad w\vee\neg v,\quad w\vee\neg z,\quad\neg w\vee v\vee z,\quad w.$$
It preserves satisfiability while imposing constraints on the fresh variables.

## Facts & Assumptions

**Given:** The displayed formula and nine clauses.

[F1] The gate clauses enforce each gate equation, and satisfying extensions restrict to satisfying original assignments ([[lem-tableau-to-cnf-map-has-polynomial-size-and-time]]).

## Verification

1.1 Set $(x,y,z)=(1,0,0)$. Then $F=(1\cdot1)\vee0=1$. Its computed extension is $(u,v,w)=(1,1,1)$. The nine clause values in order are $1,1,1,1,1,1,1,1,1$. More generally, for any original assignment with $F=1$, setting $u=1-y$, $v=xu$, $w=\max(v,z)=1$ satisfies the gate clauses and final unit. [F1, given]

1.2 Conversely the first two clauses force $u=1-y$. The next three force $v=xu$, and the following three force $w=\max(v,z)$. The last clause forces $w=1$, whence $F=1$. For example $(x,y,z)=(0,1,0)$ has forced gate values $(0,0,0)$, so the last clause fails and there is no satisfying extension. [F1]

2.1 The satisfying original assignment from step 1.1 with the inconsistent extension $(u,v,w)=(0,0,0)$ still makes $F$ true, since $F$ does not mention fresh variables, but makes both $u\vee y$ and the unit $w$ false. Thus the enlarged formula is not equivalent to $F$ on arbitrary assignments to all six variables. Its existential projection onto the original variables is exactly $F$, by the two preceding arguments. No choice is required: the valid extension is computed uniquely. [step 1.1, step 1.2] ∎
