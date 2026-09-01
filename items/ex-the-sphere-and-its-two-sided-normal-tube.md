---
id: ex-the-sphere-and-its-two-sided-normal-tube
kind: example
title: "The sphere and its two-sided normal tube"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euclidean-tubular-neighbourhood-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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
$$
E(p,t)=(1+t)p.
$$
For $|t|<1/2$, its image is the spherical shell
$$
\{x\in\mathbb R^{n+1}:1/2<\|x\|<3/2\}.
$$

## Facts & Assumptions

**Given:** The unit sphere $S^n\subseteq\mathbb R^{n+1}$ with the Euclidean
metric.

## Verification
**Proof technique:** direct.

1.1 Since $T_pS^n=\{v\in\mathbb R^{n+1}:\langle v,p\rangle=0\}$, the orthogonal complement is the one-dimensional span of $p$. Thus $N^\perp S^n\cong S^n\times\mathbb R$. [given, algebra]

2.1 Under that identification, normal addition is $E(p,t)=p+tp=(1+t)p$. The same computation as for the circle shows that the image for $|t|<1/2$ is exactly the shell $1/2<\|x\|<3/2$. This is the Euclidean tubular neighbourhood in the sense of [[thm-euclidean-tubular-neighbourhood-theorem]]. [step 1.1] ∎
