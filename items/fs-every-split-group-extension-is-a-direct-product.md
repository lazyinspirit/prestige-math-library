---
id: fs-every-split-group-extension-is-a-direct-product
kind: false-statement
title: "FALSE: every split group extension is a direct product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products, prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel]
proof_strategy: direct
verification:
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

## Statement

Every split group extension is an internal direct product.

## Facts & Assumptions

**Given:** The extension $1\to C_4\to D_4\to C_2\to1$ coming from the
rotation subgroup and a reflection complement, in the convention that $D_n$
has order $2n$.

[L1] A split extension is direct exactly when the complement centralizes the
kernel ([[prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel]]).

[L2] A group extension splits if and only if its kernel has a complement
([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

## Refutation

**Proof technique:** direct.

1.1 In $D_4=\langle r,s\mid r^4=s^2=1,\ srs^{-1}=r^{-1}\rangle$, the subgroup $\langle r\rangle\cong C_4$ is normal and $\langle s\rangle\cong C_2$ is a complement, so the reverse implication of [L2] makes the extension split. [given, L2]

2.1 But $srs^{-1}=r^{-1}\neq r$, so the complement does not centralize the kernel. By [L1], the decomposition is not a direct product. Hence the claim is false. [L1, step 1.1] ∎
