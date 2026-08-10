---
id: cex-a-family-of-components-need-not-be-natural
kind: counterexample
title: "A componentwise family between functors need not be a natural transformation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-natural-transformation, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Choosing one morphism between each pair of object values of two functors does
not automatically give a natural transformation.

## Facts & Assumptions

**Given:** The walking-arrow category $C=(0\xrightarrow{a}1)$ and the category $\mathbf{Set}$.

[L1] Naturality requires $G(a)\eta_0=\eta_1F(a)$ for the arrow $a$ ([[def-natural-transformation]]).

[L2] Sets and functions form $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $F:C\to\mathbf{Set}$ be constant at the singleton $\{*\}$ and let $G:C\to\mathbf{Set}$ be constant at $\{0,1\}$, with both functors sending $a$ to the relevant identity function. [L2]

2.1 Define components by $\eta_0(*)=0$ and $\eta_1(*)=1$. Each is a valid function $F(i)\to G(i)$. [step 1.1, L2]

3.1 At $a$, the left side of the naturality equation sends $*$ to $0$, whereas the right side sends $*$ to $1$. Thus $G(a)\eta_0\ne\eta_1F(a)$. [step 1.1, step 2.1, L1]

4.1 The family $(\eta_0,\eta_1)$ has a component of the correct type at every object but fails naturality. [step 3.1, L1] ∎
