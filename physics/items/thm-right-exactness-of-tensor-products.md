---
id: thm-right-exactness-of-tensor-products
kind: theorem
title: "Tensoring is right exact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-and-short-exact-sequences-of-modules, def-tensor-product-of-modules-by-generators-and-relations, thm-universal-property-of-module-tensor-products, prop-functoriality-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced, def-quotient-module, thm-quotient-module-universal-property, thm-commutative-ring-module-structure-on-a-tensor-product]
aliases: []
landmark: true
short: "Tensoring is right exact"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
    - title: "C. Dennis, Week 4 on tensor products and flatness"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let

$$A\xrightarrow{f}B\xrightarrow{g}C\longrightarrow0$$

be an exact sequence of $R$-modules, and let $N$ be an $R$-module. Then

$$A\otimes_RN\xrightarrow{f\otimes1}B\otimes_RN\xrightarrow{g\otimes1}C\otimes_RN\longrightarrow0$$

is exact. Thus tensoring preserves cokernels and surjections, but no injectivity at the left is asserted.

## Facts & Assumptions

**Given:** An exact sequence $A\xrightarrow fB\xrightarrow gC\to0$ and an $R$-module $N$ over a commutative ring $R$.

[L1] Exactness means that $g$ is surjective and $\operatorname{im}f=\ker g$ ([[def-exact-and-short-exact-sequences-of-modules]]).

[L2] Module homomorphisms induce tensor homomorphisms with $(f\otimes1)(a\otimes n)=f(a)\otimes n$ and functorial composition ([[prop-functoriality-of-module-tensor-products]]).

[L3] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L4] An elementary-tensor formula descends exactly when the corresponding pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

[L5] For a submodule $K\le X$, the quotient module $X/K$ has cosets $x+K$ and its induced scalar action ([[def-quotient-module]]).

[L6] A module homomorphism that kills $K$ factors uniquely through $X/K$ ([[thm-quotient-module-universal-property]]).

[L7] Tensor products over $R$ carry the scalar action $r(x\otimes n)=(rx)\otimes n$ ([[thm-commutative-ring-module-structure-on-a-tensor-product]]).

[L8] Every tensor is a finite sum of elementary tensors ([[def-tensor-product-of-modules-by-generators-and-relations]]).

## Proof

**Proof technique:** direct.

1.1 The map $g\otimes1$ is surjective: by [L8], every tensor is a finite sum of elementary tensors $c\otimes n$, and [L1] supplies $b\in B$ with $g(b)=c$, so $c\otimes n=(g\otimes1)(b\otimes n)$. [given, L1, L2, L8, choose]

1.2 Functoriality gives $(g\otimes1)(f\otimes1)=(g f)\otimes1=0$, so $\operatorname{im}(f\otimes1)\subseteq\ker(g\otimes1)$. [L1, L2]

2.1 Let $Q=(B\otimes_RN)/\operatorname{im}(f\otimes1)$. The image is a submodule because [L2] and [L7] make $f\otimes1$ $R$-linear. Since $g\otimes1$ kills it, [L6] gives $\overline g:Q\to C\otimes_RN$. [step 1.2, L2, L5, L6, L7]

3.1 For $c\in C$ and $n\in N$, choose any $b\in B$ with $g(b)=c$ and set $q(c,n)=[b\otimes n]\in Q$. If $b'$ is another lift, then $b-b'\in\ker g=\operatorname{im}f$ by [L1], so $[b\otimes n]=[b'\otimes n]$; hence $q$ is well defined. [L1, step 2.1, choose]

4.1 The function $q:C\times N\to Q$ is bilinear: lifts of sums may be taken as sums of lifts, scalar multiples as scalar multiples, and the tensor relations give the required equalities. By [L3] and [L4] it induces $h:C\otimes_RN\to Q$. [step 3.1, L3, L4, L7]

5.1 For $b\otimes n$, one has $h\overline g([b\otimes n])=h(g(b)\otimes n)=[b\otimes n]$, while for $c\otimes n$ and a lift $b$ one has $\overline gh(c\otimes n)=\overline g([b\otimes n])=c\otimes n$; generators and uniqueness make $h$ and $\overline g$ inverse. [step 2.1, step 3.1, step 4.1, L3]

6.1 Since $\overline g$ is an isomorphism, the kernel of $g\otimes1$ is exactly the submodule quotiented out in step 2.1, namely $\operatorname{im}(f\otimes1)$. Together with step 1.1, this is right exactness. [step 1.1, step 2.1, step 5.1] ∎
