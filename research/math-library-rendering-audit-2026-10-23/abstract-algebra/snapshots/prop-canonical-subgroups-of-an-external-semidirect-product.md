---
id: prop-canonical-subgroups-of-an-external-semidirect-product
kind: proposition
title: "The canonical copy of $N$ is normal, the canonical copy of $H$ is a complement, and conjugation induces the action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-semidirect-product-is-a-group, def-normal-subgroup, def-subgroup]
justified_by: []
aliases: []
landmark: true
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
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

In $N\rtimes_\alpha H$, the sets

$$\bar N=\{(n,1):n\in N\},\qquad \bar H=\{(1,h):h\in H\}$$

are subgroups, $\bar N$ is normal, $\bar N\cap\bar H=\{(1,1)\}$, and every element has a unique factorisation $(n,1)(1,h)$. Moreover,

$$(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1).$$

## Facts & Assumptions

**Given:** An external semidirect product $N\rtimes_\alpha H$.

[L1] The semidirect-product law defines a group and gives its inverse formula ([[thm-external-semidirect-product-is-a-group]]).

[L2] A subgroup is a subset closed under the group operations and normality means invariance under conjugation ([[def-subgroup]], [[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The multiplication and inverse formulas in [L1] show that both displayed sets contain the identity and are closed under products and inverses. Hence both are subgroups by [L2]. [L1, L2]

1.2 Direct multiplication gives $(n,1)(1,h)=(n,h)$, while equality $(n,1)=(1,h)$ forces $n=1$ and $h=1$. This proves existence and uniqueness of the factorisation and the trivial intersection. [L1]

2.1 Using the inverse formula gives $(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1)$. Conjugation by an element of $\bar N$ also preserves $\bar N$ because it is a subgroup. By step 1.2 every group element is a product of an element of $\bar N$ and one of $\bar H$, so its conjugation preserves $\bar N$; applying the same argument to its inverse gives equality. Thus $\bar N$ is normal by [L2], and the displayed calculation identifies the induced action with $\alpha$. [step 1.1, step 1.2, L1, L2, algebra] ∎
