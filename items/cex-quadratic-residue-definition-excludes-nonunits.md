---
id: cex-quadratic-residue-definition-excludes-nonunits
kind: counterexample
title: "A soluble square congruence need not define a quadratic residue"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quadratic-residue-modulo-n, def-legendre-symbol, cor-number-of-solutions-to-quadratic-congruence-modulo-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement refuted

Solubility of $x^2\equiv a\pmod p$ does not by itself make $a$ a quadratic residue. For every odd prime $p$, the target $a=0$ gives a soluble congruence but belongs to neither the residue nor the nonresidue class.

## Facts & Assumptions

**Given:** An odd prime $p$ and the target $a=0$.

[L1] For every integer $a$ and odd prime $p$, $x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes ([[cor-number-of-solutions-to-quadratic-congruence-modulo-prime]]).

[L2] The terms quadratic residue and quadratic nonresidue modulo $n$ are defined only for integers coprime to $n$ ([[def-quadratic-residue-modulo-n]]).

[L3] The Legendre symbol has value $0$ when its numerator is divisible by the odd prime denominator ([[def-legendre-symbol]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $(0/p)=0$ by [L3], fact [L1] gives exactly one solution class to $x^2\equiv0\pmod p$; it is visibly the zero class. [L1, L3, given]

2.1 Yet $\gcd(0,p)=p\ne1$, so [L2] puts zero outside the quadratic residue and nonresidue dichotomy, and [L3] assigns it the separate Legendre value zero. Thus the congruence is soluble without making its target a quadratic residue. [L2, L3, step 1.1] ∎
