---
id: thm-square-ica-identifiability-at-most-one-gaussian
kind: theorem
title: "Square ICA is identifiable up to signs and permutation with at most one Gaussian source"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-square-ica-model, lem-ica-whitening-reduces-mixing-to-orthogonal]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.2, printed pp. 560–561; identifiability statement, proof not supplied"
    - title: "Aapo Hyvärinen, Juha Karhunen, and Erkki Oja, Independent Component Analysis"
      url: "https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf"
      locator: "§7.2.2, printed pp. 153–154; the authors explicitly defer the proof"
---

## Statement

Let a probability law on $\mathbb R^p$ admit two square independent-component representations $X\overset d=AS$ and $X\overset d=A'S'$, with invertible $A,A'\in\mathbb R^{p\times p}$. Suppose that the components of $S$ and $S'$ are mutually independent, centered, and have unit variance, and that at most one component of $S$ is Gaussian. Then there is a signed-permutation matrix $Q$—a matrix with exactly one nonzero entry, equal to $1$ or $-1$, in each row and each column—such that $A'=AQ$ and $S'=Q^TS$ in distribution.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.7.2](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Hyvärinen, Karhunen, and Oja, §7.2.2](https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf)

## Proof obligation

The standard proof reduces the uniqueness claim to the scalar Darmois–Skitovich theorem on independent linear forms. A complete proof of that theorem has not been supplied in the local library and was not recovered from the searched full-text sources in this batch. This established theorem remains a draft authoring obligation and is escalated; it is not used as a logical supplier.

## Remarks

Proposed local prerequisite: a fully proved `lem-darmois-skitovich` on this A page, with the complete statement and proof for arbitrary real coefficients. The missing proof affects this theorem and any later claim that depends on ICA uniqueness. The B-page sign/permutation example verifies only that these ambiguities preserve a model; it does not use or establish uniqueness.
