---
id: ex-splicing-two-short-exact-sequences
kind: example
title: "Splicing two short exact sequences"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-yoneda-splice-product, prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Concatenate two displayed short exact sequences with common middle endpoint and identify the resulting two-fold extension and its derived Ext product.

## Facts & Assumptions

**Given:** Short exact sequences $0\to N\to E\xrightarrow{u}L\to0$ and $0\to L\xrightarrow{v}F\to M\to0$.

## Verification

**Proof technique:** direct.

1.1 Concatenating the maps gives $0\to N\to E\xrightarrow{vu}F\to M\to0$. Its exactness at $E$ follows from $v$ monic and $\ker u=N$. At $F$, $\operatorname{im}(vu)=v(\operatorname{im}u)=v(L)$, which is exactly the kernel of $F\to M$. [given, construct]

2.1 This exact five-term sequence is the two-fold Yoneda extension obtained by splicing. Under the comparison with derived Ext, its class is the composition of the classes of the two displayed short exact sequences in $\operatorname{Ext}^2(M,N)$. [step 1.1, algebra] ∎
