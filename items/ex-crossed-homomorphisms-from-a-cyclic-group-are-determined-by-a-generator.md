---
id: ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator
kind: example
title: "Crossed homomorphisms from a cyclic group are determined by the value on a generator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crossed-homomorphism-for-a-g-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Example

Let $G=\langle t\rangle$ be cyclic and let $M$ be a $G$-group. A crossed
homomorphism $z:G\to M$ is determined by the single value $z(t)$.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle t\rangle$ acting on a group $M$, and a crossed homomorphism $z:G\to M$.

[L1] Crossed homomorphisms satisfy $z(gh)=z(g)(g\cdot z(h))$
([[def-crossed-homomorphism-for-a-g-group]]).

## Verification

**Proof technique:** direct.

1.1 Repeatedly applying [L1] gives $z(t^n)=z(t)\,(t\cdot z(t))\cdots(t^{n-1}\cdot z(t))$ for every integer $n\ge1$. So all positive powers of $t$ are determined by $z(t)$. [given, L1, algebra]

2.1 Since $1=z(1)=z(t^n t^{-n})=z(t^n)(t^n\cdot z(t^{-n}))$, the value on $t^{-n}$ is determined by the already known value on $t^n$. Therefore every value of $z$ is determined by $z(t)$. [L1, step 1.1, algebra] ∎
