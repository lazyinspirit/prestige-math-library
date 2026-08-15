---
id: prop-relative-algebraic-closure-is-relatively-algebraically-closed
kind: proposition
title: "The relative algebraic closure of $F$ in $K$ has no further algebraic elements inside $K$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-algebraic-closure, cor-element-algebraic-iff-simple-extension-finite, thm-finite-field-extensions-are-algebraic, thm-transitivity-of-algebraicity]
justified_by: []
aliases: []
landmark: false
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

Let $A=\operatorname{acl}_K(F)$. If $b\in K$ is algebraic over $A$, then $b\in A$. Equivalently, $A$ is relatively algebraically closed in $K$.

## Facts & Assumptions

**Given:** A field extension $K/F$, its relative algebraic closure $A$, and an element $b\in K$ algebraic over $A$.

[L1] The field $A$ consists exactly of the elements of $K$ algebraic over $F$ ([[def-relative-algebraic-closure]]).

[L2] Algebraicity is transitive in towers of field extensions ([[thm-transitivity-of-algebraicity]]).

[L3] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L4] Every finite extension is algebraic ([[thm-finite-field-extensions-are-algebraic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every element of $A$ is algebraic over $F$, so $A/F$ is algebraic. [L1]

2.1 The element $b$ is algebraic over $A$ by hypothesis, so [L3] makes $A(b)/A$ finite and [L4] makes it algebraic. Applying [L2] to $F\subseteq A\subseteq A(b)$ shows that $b$ is algebraic over $F$. [given, step 1.1, L2, L3, L4]

3.1 By [L1], an element of $K$ algebraic over $F$ belongs to $A$, hence $b\in A$. [step 2.1, L1] ∎
