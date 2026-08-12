---
id: thm-integration-by-parts-with-interior-derivatives
kind: theorem
title: "Integration by parts for continuous factors with Riemann-integrable extensions of their interior derivatives"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-newton-leibniz-with-interior-derivative, thm-algebra-of-derivatives, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Theorem 12.10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch12.pdf"
pipeline_run: null
---

## Statement

Let $a<b$. Let $F,G:[a,b]\to\mathbb R$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Suppose $f,g:[a,b]\to\mathbb R$ are Riemann integrable and agree on $(a,b)$ with $F'$ and $G'$, respectively. Then $Fg$ and $fG$ are Riemann integrable and

$$\int_a^b F(x)g(x)\,dx+\int_a^b f(x)G(x)\,dx=F(b)G(b)-F(a)G(a).$$

Equivalently,

$$\int_a^b Fg=[FG]_a^b-\int_a^b fG.$$

No endpoint derivative of either factor is assumed.

## Facts & Assumptions

**Given:** The functions in the statement.

[L1] The product rule gives $(FG)'=F'G+FG'$ wherever both derivatives exist ([[thm-algebra-of-derivatives]]).

[L2] Products of Riemann-integrable functions are Riemann integrable, and continuous functions on a compact interval are Riemann integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L3] The integral is linear on Riemann-integrable functions ([[thm-linearity-of-the-integral]]).

[L4] A continuous function with an interior derivative admitting an integrable extension satisfies Newton--Leibniz ([[thm-newton-leibniz-with-interior-derivative]]).

## Proof

**Proof technique:** direct.

1.1 The functions $F$ and $G$ are integrable, so [L2] makes $fG$ and $Fg$ integrable; their sum $h:=fG+Fg$ is integrable as well. [given, L2, L3]

1.2 The product $FG$ is continuous on $[a,b]$, differentiable on $(a,b)$, and [L1] gives $(FG)'=fG+Fg=h$ throughout the interior. [given, L1]

2.1 Apply [L4] to $FG$ and its integrable derivative extension $h$ to obtain $\int_a^b h=F(b)G(b)-F(a)G(a)$. [step 1.1, step 1.2, L4]

3.1 Expanding the left side by [L3] gives the first displayed identity, and subtraction gives the equivalent form. [step 2.1, L3, algebra] ∎
