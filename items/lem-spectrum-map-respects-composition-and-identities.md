---
id: lem-spectrum-map-respects-composition-and-identities
kind: lemma
title: "The spectrum map respects composition and identities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime-spectrum-and-vanishing-sets, def-ring-homomorphism, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R\xrightarrow{\varphi} A \xrightarrow{\psi} B$ be ring homomorphisms of commutative rings. For a prime ideal $\mathfrak q\in\operatorname{Spec}(A)$ define $\operatorname{Spec}(\varphi)(\mathfrak q)=\varphi^{-1}(\mathfrak q)$. Then this gives a well-defined map $\operatorname{Spec}(A)\to\operatorname{Spec}(R)$, and one has $\operatorname{Spec}(\mathrm{id}_R)=\mathrm{id}_{\operatorname{Spec}(R)}$ and $\operatorname{Spec}(\psi\circ\varphi)=\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi)$.

## Facts & Assumptions

**Given:** Commutative rings $R,A,B$ and ring homomorphisms $\varphi:R\to A$ and $\psi:A\to B$.

[L1] Prime ideals are proper ideals that absorb factors of a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak q\in\operatorname{Spec}(A)$, then $\varphi^{-1}(\mathfrak q)$ is a proper ideal of $R$: otherwise $1\in\varphi^{-1}(\mathfrak q)$, so $1=\varphi(1)\in\mathfrak q$, contradicting the properness in [L1]. If $ab\in\varphi^{-1}(\mathfrak q)$, then $\varphi(a)\varphi(b)=\varphi(ab)\in\mathfrak q$, so [L1] gives $a\in\varphi^{-1}(\mathfrak q)$ or $b\in\varphi^{-1}(\mathfrak q)$. Therefore $\varphi^{-1}(\mathfrak q)$ is prime. [L1, given, algebra]

2.1 For $\mathfrak p\in\operatorname{Spec}(R)$, one has $\mathrm{id}_R^{-1}(\mathfrak p)=\mathfrak p$. For $\mathfrak r\in\operatorname{Spec}(B)$, one has $(\psi\circ\varphi)^{-1}(\mathfrak r)=\varphi^{-1}(\psi^{-1}(\mathfrak r))$, so contraction along the composite is the composite of the contractions. [step 1.1, given, algebra]

3.1 The inverse-image construction is therefore well-defined on prime spectra and respects identities and composition. [step 1.1, step 2.1] ∎
