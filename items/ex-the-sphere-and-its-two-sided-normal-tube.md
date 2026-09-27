---
id: ex-the-sphere-and-its-two-sided-normal-tube
kind: example
title: "The sphere and its two-sided normal tube"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

For the unit sphere $S^n\subseteq\mathbb R^{n+1}$, the outward unit normal at
$p$ is again $p$. Hence the normal bundle is the trivial line bundle
$S^n\times\mathbb R$, and the normal addition map is
$$ E(p,t)=(1+t)p. $$
For $|t|<1/2$, its image is the spherical shell
$$ \{x\in\mathbb R^{n+1}:1/2<\|x\|<3/2\}. $$

## Facts & Assumptions

**Given:** The unit sphere $S^n\subseteq\mathbb R^{n+1}$ with the Euclidean metric.

## Verification
**Proof technique:** direct.

1.1 Since $T_pS^n=\{v\in\mathbb R^{n+1}:\langle v,p\rangle=0\}$, the orthogonal complement is the one-dimensional span of $p$. Thus $N^\perp S^n\cong S^n\times\mathbb R$. [given, algebra]

2.1 Under that identification, normal addition is $E(p,t)=p+tp=(1+t)p$. Since $1+t>0$ for $|t|<1/2$, its image is exactly the shell $1/2<\|x\|<3/2$: the inverse is $x\mapsto(x/\|x\|,\|x\|-1)$, which is smooth there. Thus this is an explicit two-sided tubular neighbourhood. [step 1.1, algebra] ∎
