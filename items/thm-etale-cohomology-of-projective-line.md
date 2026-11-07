---
id: thm-etale-cohomology-of-projective-line
kind: theorem
title: "Étale Cohomology of the Projective Line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-compactly-supported-etale-cohomology
  - def-derived-direct-image-with-proper-supports
  - def-l-adic-sheaf-as-compatible-system
  - def-tate-twist-of-an-l-adic-sheaf
  - thm-proper-base-change-for-compact-support
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "The Stacks Project, *Étale Cohomology*, Tag 03N8"
      url: "https://stacks.math.columbia.edu/download/etale-cohomology.pdf"
      locator: "Chapter 6, printed pp. 5–6; full finite-coefficient computation for $\\mathbb P^1_{\\mathbb C}$ from two affine charts"
verification:
  precheck: pending
---

## Statement

Let $p$ be prime, let $\ell\ne p$, and let $\overline{\mathbb F}_p$ be an algebraic closure. For $X=\mathbb P^1_{\overline{\mathbb F}_p}$, the constant $\overline{\mathbb Q}_\ell$-sheaf has
$$H^0_{\acute et}(X,\overline{\mathbb Q}_\ell)=\overline{\mathbb Q}_\ell,\qquad H^1_{\acute et}(X,\overline{\mathbb Q}_\ell)=0,\qquad H^2_{\acute et}(X,\overline{\mathbb Q}_\ell)=\overline{\mathbb Q}_\ell(-1),$$
and $H^i_{\acute et}(X,\overline{\mathbb Q}_\ell)=0$ for every $i>2$. Under the descent to $\mathbb F_p$, geometric Frobenius acts as $1$ on $H^0$ and as multiplication by $p$ on $H^2=\overline{\mathbb Q}_\ell(-1)$.

## Statement references

[[def-compactly-supported-etale-cohomology|Compactly supported étale cohomology]]

[[def-tate-twist-of-an-l-adic-sheaf|Tate twist]]

[[thm-proper-base-change-for-compact-support|Proper base change for compact-support direct image]]

[The Stacks Project, *Étale Cohomology*, Tag 03N8](https://stacks.math.columbia.edu/download/etale-cohomology.pdf)

## Facts & Assumptions

**Given:** A prime $p$, a prime $\ell\ne p$, and the constant $\overline{\mathbb Q}_\ell$-sheaf on $\mathbb P^1_{\overline{\mathbb F}_p}$.

## Proof status

No complete characteristic-$p$ proof is supplied here. Stacks Tag 03N8 computes finite-coefficient cohomology of $\mathbb P^1_{\mathbb C}$ by the two standard affine charts and their $\mathbb G_m$ intersection. Transferring this calculation to characteristic $p$ requires the proper-base-change theorem for the projective-line family together with passage from finite coefficients to the compatible $\ell$-adic system. The current proper-base-change suppliers are proof:not-supplied, and the local l-adic limit argument has not been established in this batch. The claim is therefore retained and escalated.
