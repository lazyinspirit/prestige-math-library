---
id: prop-functoriality-of-module-tensor-products
kind: proposition
title: "Module homomorphisms induce tensor-product homomorphisms functorially"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Miller, Lectures on Algebraic Topology I, Sections 20-21"
      url: "https://math.mit.edu/~hrm/papers/905-notes-aug19.pdf"
pipeline_run: null
---

## Statement

Let $f:M\to M'$ be a homomorphism of right $R$-modules and $g:N\to N'$ a homomorphism of left $R$-modules. There is a unique group homomorphism

$$f\otimes g:M\otimes_RN\longrightarrow M'\otimes_RN'$$

such that $(f\otimes g)(m\otimes n)=f(m)\otimes g(n)$. These maps satisfy

$$\operatorname{id}_M\otimes\operatorname{id}_N=\operatorname{id}_{M\otimes_RN}$$

and

$$(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g).$$

## Facts & Assumptions

**Given:** Homomorphisms $f:M\to M'$ of right $R$-modules and $g:N\to N'$ of left $R$-modules.

[L1] A balanced map $M\times N\to A$ into an abelian group extends uniquely to a group homomorphism $M\otimes_RN\to A$ ([[thm-universal-property-of-module-tensor-products]]).

[L2] A module homomorphism preserves addition and the relevant scalar action ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 The pairing $(m,n)\mapsto f(m)\otimes g(n)$ is additive in both variables by [L2], and $(f(mr))\otimes g(n)=(f(m)r)\otimes g(n)=f(m)\otimes(rg(n))=f(m)\otimes g(rn)$, so it is balanced. [given, L2, algebra]

2.1 By [L1] the pairing of step 1.1 induces a unique homomorphism $f\otimes g$ with the stated formula. [step 1.1, L1]

3.1 The maps $\operatorname{id}_M\otimes\operatorname{id}_N$ and $\operatorname{id}_{M\otimes_RN}$ agree on every elementary tensor, so uniqueness in [L1] makes them equal. [step 2.1, L1]

3.2 The two sides of the composition formula both send $m\otimes n$ to $f'(f(m))\otimes g'(g(n))$, so uniqueness in [L1] makes them equal. [step 2.1, L1]

4.1 Steps 2.1, 3.1 and 3.2 prove existence, uniqueness, identity preservation, and composition preservation. [step 2.1, step 3.1, step 3.2] ∎
