---
id: def-algebra-over-a-commutative-ring
kind: definition
title: "Algebras over a commutative ring, central structure maps, and algebra homomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-commutative-ring, def-ring-homomorphism]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring ([[def-commutative-ring]]). An **$R$-algebra** is a unital ring $A$ together with a unital ring homomorphism

$$\eta_A:R\longrightarrow A$$

([[def-ring-homomorphism]]) whose image is central: $\eta_A(r)a=a\eta_A(r)$ for every $r\in R$ and $a\in A$. The induced scalar action is $ra:=\eta_A(r)a$, making $A$ an $R$-module and multiplication $A\times A\to A$ bilinear.

An **$R$-algebra homomorphism** $f:A\to B$ is a unital ring homomorphism satisfying $f\circ\eta_A=\eta_B$. Such a map is automatically $R$-linear. An $R$-algebra is **commutative** when its underlying ring is commutative.
