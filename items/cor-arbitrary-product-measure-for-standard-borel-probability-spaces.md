---
id: cor-arbitrary-product-measure-for-standard-borel-probability-spaces
kind: corollary
title: "Arbitrary products of standard Borel probability spaces"
status: published
origin: pipeline
deps: [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, def-consistent-family-of-finite-dimensional-distributions, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shalizi, Building Processes, Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

## Statement

Assume AC. For standard-Borel probability spaces $(E_i,\mathcal E_i,\mu_i)_{i\in I}$ there is a unique probability measure on $\mathcal C_I$ whose finite-coordinate marginals are the finite product measures $\bigotimes_{i\in F}\mu_i$.

## Facts & Assumptions

**Given:** AC and a family of standard-Borel probability spaces.

[F1] Finite product measures have the rectangle formula and are probability measures. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

[F2] Kolmogorov extension applies to every consistent finite-dimensional family on standard-Borel coordinates. ([[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]])

## Proof

1.1 For finite $F$, define $\nu_F=\bigotimes_{i\in F}\mu_i$. The rectangle formula shows that projecting $\nu_G$ to $F\subseteq G$ gives $\nu_F$, so the family is consistent. [F1]

2.1 Apply [F2] to $(\nu_F)$. Its conclusion is exactly the stated measure and its cylinder-sigma uniqueness; it does not assert a measure on $\mathcal P(\prod_iE_i)$. [F2] ∎
