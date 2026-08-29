---
id: def-frobenius-matrix-norm
kind: definition
title: "The Frobenius norm $\\lVert A\\rVert_F=(\\sum_{i,j}|a_{ij}|^2)^{1/2}$ on real or complex matrices"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-abs-value, def-complex-conjugate-real-imaginary-part-and-modulus, prop-standard-coordinate-inner-products, def-inner-product-norm, lem-complex-conjugation-and-modulus-laws]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
---

## Definition

Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let $m,n\in\mathbb{N}$ and let
$A=(a_{ij})\in M_{m\times n}(\mathbb F)$. The **Frobenius norm** of $A$ is

$$\lVert A\rVert_F\;:=\;\Bigl(\,\sum_{i<m}\sum_{j<n}|a_{ij}|^{2}\Bigr)^{1/2},$$

where $|\cdot|$ is the absolute value on $\mathbb R$
([[def-abs-value]]) for $\mathbb F=\mathbb R$ and the modulus on $\mathbb C$
([[def-complex-conjugate-real-imaginary-part-and-modulus]]) for
$\mathbb F=\mathbb C$, and the outer power is the nonnegative real square root.

**The displayed quantity is a norm.** Regard $A$ as the element of the
coordinate space $\mathbb F^{mn}$ whose $j+in$-th entry is $a_{ij}$. The
standard coordinate inner product of [[prop-standard-coordinate-inner-products]]
satisfies $\langle A,A\rangle=\sum_{i,j}a_{ij}\overline{a_{ij}}$, which equals
$\sum_{i,j}|a_{ij}|^{2}$ because $z\overline z=|z|^{2}$
([[lem-complex-conjugation-and-modulus-laws]]). Thus $\lVert A\rVert_F$ is
exactly the inner-product norm of [[def-inner-product-norm]] evaluated at $A$,
and the three norm axioms hold for $\lVert\cdot\rVert_F$ because they hold for
every inner-product norm. For real matrices the same sum is
$\sum_{i,j}a_{ij}^{2}$, since $|x|^{2}=x^{2}$ for real $x$ by the two cases of
[[def-abs-value]].

The Frobenius norm is the Euclidean norm of the full entry list, not the
largest factor by which the matrix stretches a single vector. It can coincide
with an induced $2$-norm in one-row or one-column cases, but in general it is a
different matrix norm from the induced operator norms used on this page. Its
relation to the spectral norm, its unitary invariance and its singular-value
formula are
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]].

## Remarks

- **The name records the entry-sum definition.** Different sources write
  $\lVert A\rVert_F$, $\lVert A\rVert_{\mathrm{F}}$, or
  $\lVert A\rVert_{2,\mathrm{HS}}$; this library uses $\lVert\cdot\rVert_F$
  exclusively and does not fold it into the induced $p$-norm notation.

- **Zero-sized shapes are included.** At $m=0$ or $n=0$ the double sum is the
  empty sum $0$, so the unique empty matrix has Frobenius norm $0$; this is the
  value of the inner-product norm of the zero space.
