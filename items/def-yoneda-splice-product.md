---
id: def-yoneda-splice-product
kind: definition
title: "The Yoneda splice product"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-n-fold-yoneda-extension]
verification:
  precheck: n/a
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
## Definition

If $\xi$ is a $p$-fold extension of $L$ by $N$ and $\eta$ is a $q$-fold extension of $M$ by $L$, concatenate their exact sequences at $L$. This produces a $(p+q)$-fold extension of $M$ by $N$. Its class is the **Yoneda splice product**
$$[\xi]\smile[\eta]\in\operatorname{YExt}^{p+q}(M,N).$$
The displayed endpoint order fixes the order of the product.
