---
id: thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six
kind: theorem
title: "A Steiner triple system exists exactly for orders $v>3$ with $v\\equiv1$ or $3\\pmod6$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six,
       thm-bose-construction-produces-a-steiner-triple-system,
       rem-skolem-construction-produces-a-steiner-triple-system,
       def-steiner-systems-and-steiner-triple-systems,
       def-two-design,
       def-congruence-modulo-an-integer]
landmark: true
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

A Steiner triple system of order $v$ exists if and only if $v>3$ and
$v\equiv1$ or $3\pmod6$.

## Facts & Assumptions

**Given:** A natural number $v$.

[L1] If a Steiner triple system of order $v$ exists, then $v\equiv1$ or $3\pmod6$ ([[cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six]]).

[L2] For every natural number $m\ge1$, Bose's construction yields a Steiner triple system of order $6m+3$ ([[thm-bose-construction-produces-a-steiner-triple-system]]).

[L3] For every integer $m\ge1$, Skolem's construction yields a Steiner triple system of order $6m+1$ ([[rem-skolem-construction-produces-a-steiner-triple-system]]).

[L4] A Steiner triple system of order $v$ is a $2$-$(v,3,1)$ design, and a $2$-design requires $2\le3<v$ ([[def-steiner-systems-and-steiner-triple-systems]], [[def-two-design]]).

## Proof

**Proof technique:** direct.

1.1 If a Steiner triple system of order $v$ exists, then [L4] gives $v>3$, and [L1] gives $v\equiv1$ or $3\pmod6$. [L1, L4]

1.2 Conversely, suppose $v>3$ and $v\equiv3\pmod6$. Then $v=6m+3$ for some natural number $m$, and $v>3$ forces $m\ge1$. So [L2] gives a Steiner triple system of order $v$. [L2, algebra]

1.3 Suppose instead that $v>3$ and $v\equiv1\pmod6$. Then $v=6m+1$ for some integer $m\ge1$, because $v\equiv1\pmod6$ and $v>3$ force $v\ge7$. Now [L3] gives a Steiner triple system of order $v$. [L3, algebra]

2.1 The two congruence classes $1$ and $3$ modulo $6$ exhaust the converse assumption, so steps 1.2 and 1.3 prove that direction. Together with step 1.1, this proves the theorem. [step 1.1, step 1.2, step 1.3] ∎
