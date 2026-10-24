---
id: thm-transitivity-of-algebraicity
kind: theorem
title: "Algebraicity is transitive in towers of field extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finitely-generated-algebraic-extensions-are-finite, cor-element-algebraic-iff-simple-extension-finite, thm-tower-law-for-finite-field-extensions, thm-finite-field-extensions-are-algebraic, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $F\subseteq K\subseteq L$, the extension $K/F$ is algebraic, and $L/K$ is algebraic, then $L/F$ is algebraic.

## Facts & Assumptions

**Given:** A tower $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ algebraic, and an element $a\in L$.

[L1] Finitely many algebraic generators produce a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] Finite degrees multiply in a tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] Every finite extension is algebraic ([[thm-finite-field-extensions-are-algebraic]]).

[L5] Algebraicity means satisfying a nonzero polynomial over the base ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Since $a$ is algebraic over $K$, choose a nonzero polynomial $c_0+c_1t+\cdots+c_dt^d\in K[t]$ with value zero at $a$. [given, L5, choose]

2.1 Every coefficient $c_i$ is algebraic over $F$. Hence $M=F(c_0,\ldots,c_d)$ is finite over $F$ by [L1]. [given, step 1.1, L1]

3.1 The same polynomial lies in $M[t]$, so $a$ is algebraic over $M$ and [L2] makes $M(a)/M$ finite. The tower law [L3] makes $M(a)/F$ finite. [step 1.1, step 2.1, L2, L3]

4.1 By [L4], $a$ is algebraic over $F$. Since $a$ was arbitrary, $L/F$ is algebraic. [step 3.1, L4] ∎
