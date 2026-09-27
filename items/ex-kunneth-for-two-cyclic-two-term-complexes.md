---
id: ex-kunneth-for-two-cyclic-two-term-complexes
title: "Kunneth for two cyclic two-term complexes"
kind: example
status: published
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-tor-by-resolving-the-right-module"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $C=D$ be the chain complex $0\to\mathbb Z\xrightarrow2\mathbb Z\to0$ in degrees $1,0$. Then $H_1(C\otimes_{\mathbb Z}D)\cong\mathbb Z/2$. For the specified free resolution $Q=(\mathbb Z\xrightarrow2\mathbb Z)\to\mathbb Z/2$, the fixed-resolution group $\operatorname{Tor}^{\mathbb Z,Q}_1(\mathbb Z/2,\mathbb Z/2)$ is also $\mathbb Z/2$. Thus the degree-one Kunneth calculation for this pair has a nonzero Tor term, without requiring a choice axiom.

## Verification

**Given:** The displayed complexes $C,D$ and the specified two-term free resolution $Q$ of $\mathbb Z/2$.

1.1 The tensor total complex has groups $\mathbb Z$ in degree $2$, $\mathbb Z^2$ in degree $1$, and $\mathbb Z$ in degree $0$. In the basis $(e_1\otimes f_0,e_0\otimes f_1)$, its differentials are $d_2(k)=(-2k,2k)$ and $d_1(a,b)=2a+2b$ by the tensor differential sign rule ([[def-tensor-product-total-complex-of-chain-complexes]]). Hence $\ker d_1=\{(k,-k):k\in\mathbb Z\}$ and $\operatorname{im}d_2=\{(2k,-2k):k\in\mathbb Z\}$, so $H_1(C\otimes D)\cong\mathbb Z/2$. [given, algebra]

2.1 Tensoring the specified free resolution $Q$ with $\mathbb Z/2$ makes its differential multiplication by $2$ on $\mathbb Z/2$, hence zero. By the fixed-resolution definition ([[def-tor-by-resolving-the-right-module]]), $\operatorname{Tor}^{\mathbb Z,Q}_1(\mathbb Z/2,\mathbb Z/2)=\ker(2:\mathbb Z/2\to\mathbb Z/2)\cong\mathbb Z/2$. The map $[(k,-k)]\mapsto[k]_2$ identifies this group with the degree-one homology from step 1.1. This is the claimed nonzero term for these fixed complexes; neither calculation selects or compares resolutions. [step 1.1, given, algebra] ∎
