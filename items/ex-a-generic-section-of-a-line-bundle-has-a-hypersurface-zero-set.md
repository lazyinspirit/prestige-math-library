---
id: ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set
kind: example
title: "A transverse section of a line bundle has a hypersurface zero set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section]
justified_by: []
aliases: []
landmark: false
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Transversality"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

For the trivial line bundle $\mathbb R^2\times\mathbb R\to\mathbb R^2$, the
transverse section
$$ s(x,y)=x $$
is transverse to the zero section. Its zero set is the line $\{x=0\}$, a
codimension-one submanifold.

## Facts & Assumptions

**Given:** The section $s(x,y)=x$ of the trivial line bundle
$\mathbb R^2\times\mathbb R\to\mathbb R^2$.

## Verification
**Proof technique:** direct.

1.1 The derivative of the scalar function $s(x,y)=x$ is $ds_{(x,y)}(u,v)=u$. At every zero $(0,y)$ this is surjective onto the fibre $\mathbb R$, so $s$ is transverse to the zero section. [given, algebra]

2.1 Therefore the conclusion of [[cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section]] holds in this concrete case, and the zero locus is the hypersurface $\{x=0\}$. [step 1.1] ∎
