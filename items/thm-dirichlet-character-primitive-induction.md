---
id: thm-dirichlet-character-primitive-induction
kind: theorem
title: "Unique primitive ancestor of a Dirichlet character"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-induced-dirichlet-character, def-primitive-dirichlet-character-and-conductor, thm-chinese-remainder-theorem]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorem 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

Every Dirichlet character modulo $q$ is induced by a unique primitive character
of a conductor dividing $q$.

## Facts & Assumptions

**Given:** A character $\chi$ modulo $q$.

[F1] Reduction modulo a divisor gives the stated zero-extended induction ([[def-induced-dirichlet-character]]).

[F2] CRT identifies residues modulo a product of pairwise coprime moduli with their local residues ([[thm-chinese-remainder-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Write $q=\prod p^{e_p}$. For each $p$, choose the least $c_p\le e_p$ for which the local unit character factors through reduction modulo $p^{c_p}$; the finite set of possible exponents has such a least element. [given, construct]

2.1 CRT combines the resulting local characters into a character $\chi^*$ modulo $d=\prod p^{c_p}$, and [F1] shows that its induction has the same values as $\chi$, including zero precisely on the nonunits modulo $q$. [F1, F2, step 1.1]

3.1 If a primitive character modulo $d'$ induces $\chi$, each of its local exponents must be at least $c_p$; minimality gives $d\mid d'$. If $d'>d$, its local character factors through a proper divisor, contradicting primitivity. Hence $d'=d$ and CRT gives $\chi^*=\chi^{*\prime}$. [F2, step 1.1] ∎
