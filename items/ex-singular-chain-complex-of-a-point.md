---
id: ex-singular-chain-complex-of-a-point
kind: example
title: "The singular chain complex of a point"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-zero-simplex-augmentation-and-reduced-singular-homology, def-singular-boundary-operator]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Example

Let $\ast$ be a one-point space. For each $n\geq 0$ there is exactly one
singular $n$-simplex $c_n:\Delta^n\to\ast$, so
$$C_n(\ast;\mathbb Z)\cong\mathbb Z[c_n].$$
Moreover $\partial_0(c_0)=0$, and for $n\geq 1$
$$\partial_n(c_n)=\left(\sum_{i=0}^n(-1)^i\right)c_{n-1}= \begin{cases} 0,& n\text{ odd},\\ c_{n-1},& n\text{ even}. \end{cases}$$

Hence $H_0^{\mathrm{sing}}(\ast;\mathbb Z)\cong\mathbb Z$, all higher singular
homology groups vanish, and the reduced singular homology groups are zero in
every degree.

## Facts & Assumptions

**Given:** The one-point space $\ast$.

[L1] Reduced singular homology is defined from the augmentation kernel in degree $0$ ([[def-zero-simplex-augmentation-and-reduced-singular-homology]]).

[L2] The singular boundary is the alternating sum of the face restrictions ([[def-singular-boundary-operator]]).

## Verification

**Proof technique:** direct.

1.1 Every map $\Delta^n\to\ast$ is the same constant map $c_n$, so each chain group is free of rank one on $c_n$. By [L2], $\partial_0=0$, and for $n\geq 1$ one has $$\partial_n(c_n)=\sum_{i=0}^n(-1)^ic_{n-1},$$ which is $0$ for odd $n$ and $c_{n-1}$ for even $n$. [L2, given, algebra]

2.1 Therefore $\ker\partial_n=0$ for even $n\geq 2$ and $\ker\partial_n=\mathbb Z[c_n]=\operatorname{im}\partial_{n+1}$ for odd $n\geq 1$, so $H_n^{\mathrm{sing}}(\ast;\mathbb Z)=0$ for all $n>0$. Also $H_0^{\mathrm{sing}}(\ast;\mathbb Z)\cong\mathbb Z[c_0]\cong\mathbb Z$. Since the augmentation of [L1] sends $c_0$ to $1$, its kernel is $0$, so the reduced degree-zero group also vanishes. [L1, step 1.1] ∎
