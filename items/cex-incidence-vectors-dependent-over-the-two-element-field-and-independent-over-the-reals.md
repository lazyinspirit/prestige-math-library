---
id: cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals
kind: counterexample
title: "A set family whose incidence vectors are dependent over $\\mathbb{F}_2$ and independent over $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [def-incidence-vector-of-a-subset, def-set-family-and-its-incidence-matrix, def-linear-independence, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 3"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement refuted

Changing the field can change linear independence. Take

$$A_1=\{0,1\},\qquad A_2=\{1,2\},\qquad A_3=\{0,2\}\subseteq[3].$$

## Facts & Assumptions

**Given:** the three subsets above.

[F1] Their incidence vectors are $(1,1,0)$, $(0,1,1)$ and $(1,0,1)$ ([[def-incidence-vector-of-a-subset]]).

## Counterexample

**Proof technique:** direct.

1.1 Over $\mathbb{F}_2$, the three incidence vectors sum to $(0,0,0)$, so they are linearly dependent. [F1, algebra]

2.1 Over $\mathbb{R}$, suppose $a(1,1,0)+b(0,1,1)+c(1,0,1)=0$. The three coordinates give $a+c=0$, $a+b=0$, and $b+c=0$. Hence $b=c=-a$ and the last equation gives $-2a=0$, so $a=b=c=0$. Thus the vectors are linearly independent over $\mathbb R$. [F1, algebra] ∎
