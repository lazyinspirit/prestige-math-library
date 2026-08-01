---
id: ex-chinese-remainder-map-modulo-twelve
kind: example
title: "The Chinese remainder bijection $\\mathbb{Z}/12\\to\\mathbb{Z}/3\\times\\mathbb{Z}/4$ computed on all standard representatives"
status: published
origin: session
deps: [thm-chinese-remainder-theorem, thm-standard-representatives-modulo-n, def-addition-and-multiplication-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
pipeline_run: null
---

## Example

For standard representatives, the Chinese remainder map is

| $a$ | $([a]_3,[a]_4)$ | $a$ | $([a]_3,[a]_4)$ |
|---:|:---|---:|:---|
| $0$ | $([0]_3,[0]_4)$ | $6$ | $([0]_3,[2]_4)$ |
| $1$ | $([1]_3,[1]_4)$ | $7$ | $([1]_3,[3]_4)$ |
| $2$ | $([2]_3,[2]_4)$ | $8$ | $([2]_3,[0]_4)$ |
| $3$ | $([0]_3,[3]_4)$ | $9$ | $([0]_3,[1]_4)$ |
| $4$ | $([1]_3,[0]_4)$ | $10$ | $([1]_3,[2]_4)$ |
| $5$ | $([2]_3,[1]_4)$ | $11$ | $([2]_3,[3]_4)$ |

## Facts & Assumptions

**Given:** The map $\Phi([a]_{12}):=([a]_3,[a]_4)$.

[L1] Every class modulo a positive integer has one standard representative ([[thm-standard-representatives-modulo-n]]).

[L2] Since $3,4$ are coprime, $\Phi$ is a bijection and preserves addition and multiplication componentwise ([[thm-chinese-remainder-theorem]]).

[L3] Modular addition and multiplication are computed by adding and multiplying representatives ([[def-addition-and-multiplication-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 Reducing each integer $0,\ldots,11$ modulo $3$ and modulo $4$ gives the displayed table. Its entries are all distinct, and [L1] shows that they exhaust the domain and codomain standard pairs, in agreement with [L2]. [L1, L2]

1.2 For a nontrivial addition check, $[7]_{12}+[8]_{12}=[3]_{12}$, and the table gives $([1]_3,[3]_4)+([2]_3,[0]_4)=([0]_3,[3]_4)$. [L3]

1.3 For a nontrivial multiplication check, $[5]_{12}[7]_{12}=[11]_{12}$, and the table gives $([2]_3,[1]_4)([1]_3,[3]_4)=([2]_3,[3]_4)$. [L3]

2.1 The table computes the whole bijection, while steps 1.2 and 1.3 instantiate its componentwise arithmetic preservation. [step 1.1, step 1.2, step 1.3, L2] ∎
