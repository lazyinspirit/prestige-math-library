---
id: ex-strictification-of-a-cartesian-monoidal-category-computed
kind: example
title: "Strictification of a cartesian monoidal category computed"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-a-category-with-finite-products-is-monoidal, thm-mac-lane-strictification]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Example

Let $\mathcal C$ be a category with finite products, so that $\mathcal C$ is
monoidal under $\times$ by [[thm-a-category-with-finite-products-is-monoidal]].
Its strictification sends an object $X$ to the endofunctor $X\times-$.

## Facts & Assumptions

**Given:** A category $\mathcal C$ with finite products.

[L1] Finite products make $\mathcal C$ into a monoidal category with tensor $\times$ ([[thm-a-category-with-finite-products-is-monoidal]]).

[L2] Strictification sends $X$ to the right-module endofunctor $X\otimes-$ and is monoidally equivalent to a strict monoidal category ([[thm-mac-lane-strictification]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the tensor product is $\times$, so the strictification formula from [L2] becomes $L(X)(Y)=X\times Y$. Its right-module structure map at $(Y,Z)$ is the cartesian associator $(X\times Y)\times Z\to X\times(Y\times Z)$. [L1, L2]

2.1 The binary comparison $L(X)\otimes L(Y)\Rightarrow L(X\times Y)$ therefore has component the inverse reassociation $X\times(Y\times Z)\to(X\times Y)\times Z$, and the unit comparison is $Z\to1\times Z$. [step 1.1, L2]

3.1 So in the cartesian case the abstract strictification is completely explicit: it packages ordinary reassociation maps of products into a strict monoidal category of endofunctors. [step 2.1] ∎
