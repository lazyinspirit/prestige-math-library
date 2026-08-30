---
id: def-subspace-iteration-and-the-dominant-invariant-subspace
kind: definition
title: "Subspace iteration and the dominant invariant subspace of a matrix"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-full-reduced-and-column-pivoted-computational-qr-factorisations,
       def-invariant-subspace-and-induced-quotient-operator]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Definition

Let $A\in M_n(\mathbb F)$, let $p\in\{1,\dots,n\}$, and let $Q_0\in M_{n\times p}$
have orthonormal columns. The **subspace iteration** is defined by the reduced
QR recurrences

$$ Z_k:=AQ_k, \qquad Z_k=Q_{k+1}R_{k+1}, $$

where $Q_{k+1}$ has orthonormal columns and $R_{k+1}$ is upper triangular.

If $p<n$ and $A$ is diagonalisable with eigenvalues ordered so that
$|\lambda_1|\ge\cdots\ge|\lambda_n|$ and $|\lambda_p|>|\lambda_{p+1}|$, the
span of the first $p$ eigenvectors is the **dominant invariant subspace of
dimension $p$**. For $p=n$, the dominant invariant subspace is the whole space
$\mathbb F^n$ and no spectral-gap condition is needed.
