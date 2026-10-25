---
id: cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six
kind: corollary
title: "A Steiner triple system can exist only when $v\\equiv1$ or $3\\pmod6$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-steiner-systems-and-steiner-triple-systems,
       cor-divisibility-conditions-for-a-two-design,
       def-congruence-modulo-an-integer]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jonathan Davidson, Steiner Triple Systems"
      url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
---

## Statement

If a Steiner triple system of order $v$ exists, then $v\equiv1$ or $3\pmod6$.

## Facts & Assumptions

**Given:** A Steiner triple system of order $v$.

[L1] A Steiner triple system is a $2$-$(v,3,1)$ design ([[def-steiner-systems-and-steiner-triple-systems]]).

[L2] For a $2$-design, the numbers $r=\lambda(v-1)/(k-1)$ and $b=v\lambda(v-1)/(k(k-1))$ are integers ([[cor-divisibility-conditions-for-a-two-design]]).

## Proof

**Proof technique:** direct.

1.1 Substituting $k=3$ and $\lambda=1$ into [L2] gives $r=(v-1)/2\in\mathbb N$, so $v$ is odd. [L1, L2, algebra]

1.2 The same substitution gives $b=v(v-1)/6\in\mathbb N$, so $3$ divides $v(v-1)/2$. [L1, L2, algebra]

2.1 Among the odd residue classes modulo $6$, only $1$ and $3$ make $v(v-1)/2$ divisible by $3$. Hence $v\equiv1$ or $3\pmod6$. [step 1.1, step 1.2, algebra] ∎
