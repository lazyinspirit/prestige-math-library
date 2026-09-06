---
id: prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product
kind: proposition
title: "The Yoneda product agrees with derived Ext composition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-yoneda-product-is-associative-and-unital, thm-higher-yoneda-ext-agrees-with-derived-ext]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Under the higher-Yoneda/derived-Ext identification, the splice of $\alpha\in\operatorname{YExt}^p(L,N)$ and $\gamma\in\operatorname{YExt}^q(M,L)$ corresponds to the derived Ext composition $\alpha\circ\gamma\in\operatorname{Ext}^{p+q}(M,N)$.

## Facts & Assumptions

**Given:** Composable Yoneda extension classes satisfying the hypotheses for the higher comparison.

## Proof

**Proof technique:** direct.

1.1 Use the projective-resolution comparison in [[thm-higher-yoneda-ext-agrees-with-derived-ext]]. A $p$-extension and a $q$-extension are represented by their lifted cocycles on the corresponding projective syzygies. Splicing the extensions concatenates their exact tails; lifting through that concatenated tail is the composite of the two lifted comparison maps. [given, construct]

2.1 Therefore the cocycle assigned to the splice is the chain-level composite representing the derived Ext composition. Passing to cohomology identifies the splice with $\alpha\circ\gamma$. Degree zero agrees as well because both products use ordinary morphism composition, with the units fixed in [[thm-yoneda-product-is-associative-and-unital]]. [step 1.1, algebra] ∎
