---
id: ex-the-klein-four-extension-of-c-two-by-c-two-is-direct
kind: example
title: "The split extension C_2 × C_2 of C_2 by C_2 is direct"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, thm-classification-of-cyclic-groups]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Example

The Klein four group $C_2\times C_2$ gives a split extension of $C_2$ by $C_2$
that is already a direct product.

## Facts & Assumptions

**Given:** The external direct product $V=C_2\times C_2$.

[L1] The direct-product criterion says a split extension is direct exactly when
the complement centralizes the kernel
([[prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel]]).

[L2] The external direct product has coordinatewise multiplication
([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Let $N=C_2\times\{1\}$ and $H=\{1\}\times C_2$. By [L2], these are subgroups of $V$ with trivial intersection and product $V$, so they define a split extension of $C_2$ by $C_2$. [given, L2]

2.1 Again by [L2], elements of $N$ and $H$ commute coordinatewise. Therefore the complement $H$ centralizes the kernel $N$, and [L1] makes the extension direct. [L1, L2, step 1.1] ∎
