---
id: ex-the-swap-braiding-on-sets
kind: example
title: "The swap map on sets is the cartesian braiding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-cartesian-swap-braiding-is-a-symmetry]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

In $\mathbf{Set}$ with cartesian product, the braiding on $X\times Y$ is the
swap map

$$\tau_{X,Y}(x,y)=(y,x).$$

## Facts & Assumptions

**Given:** The category of sets with cartesian product.

[L1] The cartesian swap braiding is a symmetry in every category with finite products ([[thm-the-cartesian-swap-braiding-is-a-symmetry]]).

## Verification

**Proof technique:** direct.

1.1 The category $\mathbf{Set}$ has finite products, namely cartesian products of sets. [given, algebra]

2.1 Therefore [L1] applies with $\mathcal C=\mathbf{Set}$, and the resulting braiding is exactly the swap map $(x,y)\mapsto(y,x)$. [L1, step 1.1] ∎
