---
id: ex-polynomial-injection-killed-by-tensoring
kind: example
title: "Tensoring the injection $k[x]\\xrightarrow{\\cdot x}k[x]$ with $k[x]/(x)$ gives the zero map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-tensor-product-with-a-quotient-ring, thm-unit-isomorphisms-for-module-tensor-products, cor-polynomial-ring-over-a-domain-is-a-domain, def-polynomial-ring-over-a-commutative-ring]
aliases: []
landmark: false
short: "A polynomial injection killed by tensoring"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Dennis, Week 4"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field and set $A:=k[x]$. Multiplication by $x$ is an injection $\mu_x:A\to A$, but after tensoring with $A/(x)$ the induced map

$$\mu_x\otimes1:A\otimes_AA/(x)\longrightarrow A\otimes_AA/(x)$$

is the zero map between nonzero modules.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $A=k[x]$, and the principal ideal $(x)$.

[L1] Polynomials are finitely supported coefficient families; in particular $x$ is nonzero and $1\notin(x)$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] A polynomial ring over an integral domain is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

[L3] The tensor-unit isomorphism sends $a\otimes\overline b$ to $a\overline b$, and $A\otimes_AA/(x)\cong A/(x)$ ([[thm-unit-isomorphisms-for-module-tensor-products]], [[cor-tensor-product-with-a-quotient-ring]]).

## Verification

**Proof technique:** direct.

1.1 A field is an integral domain, so [L2] makes $A$ an integral domain. Since $x\ne0$ by [L1], $xa=xb$ implies $x(a-b)=0$ and hence $a=b$; therefore $\mu_x$ is injective. [given, L1, L2, algebra]

1.2 Under [L3], the tensor map sends the class $\overline a$ to $\overline{xa}=0$ because $x\in(x)$. Thus $\mu_x\otimes1$ is the zero map. [given, L3]

2.1 The module $A/(x)$ is nonzero because $1\notin(x)$ by [L1]. Hence step 1.2 is a zero map on a nonzero module and is not injective, despite step 1.1. [step 1.1, step 1.2, L1] ∎
