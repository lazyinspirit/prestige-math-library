---
id: ex-biquadratic-galois-correspondence-lattice
kind: example
title: "The complete Galois correspondence for $\\mathbb Q(\\sqrt2,\\sqrt3)/\\mathbb Q$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory, thm-finite-galois-extension-characterizations, thm-tower-law-for-finite-field-extensions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, biquadratic examples"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

$\mathbb Q(\sqrt2,\sqrt3)/\mathbb Q$ is Galois with group $V_4$. Its correspondence is

| Subgroup | Fixed field |
|---|---|
| $\{1\}$ | $\mathbb Q(\sqrt2,\sqrt3)$ |
| $\langle\sigma_2\rangle$ | $\mathbb Q(\sqrt3)$ |
| $\langle\sigma_3\rangle$ | $\mathbb Q(\sqrt2)$ |
| $\langle\sigma_6\rangle$ | $\mathbb Q(\sqrt6)$ |
| $V_4$ | $\mathbb Q$ |

Here $\sigma_2$ changes the sign of $\sqrt2$, $\sigma_3$ changes the sign of $\sqrt3$, and $\sigma_6=\sigma_2\sigma_3$. The trivial subgroup fixes the whole biquadratic extension, while each order-two subgroup fixes a quadratic field.

## Facts & Assumptions

**Given:** Positive square roots $\sqrt2,\sqrt3$ and the tower law ([[thm-tower-law-for-finite-field-extensions]]).

[L1] In the finite Galois correspondence, $[K:K^H]=|H|$ and $[K^H:F]=[G:H]$, and the subgroup and intermediate-field assignments are mutually inverse bijections ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[L2] For a finite extension $L/E$ with $G=\operatorname{Aut}(L/E)$, being Galois, being the splitting field of a separable polynomial, $|G|=[L:E]$, and $L^G=E$ are equivalent ([[thm-finite-galois-extension-characterizations]]).

## Verification

**Proof technique:** direct.

1.1 The field $\mathbb Q(\sqrt2)$ has degree two, and $\sqrt3\notin\mathbb Q(\sqrt2)$: squaring an equation $\sqrt3=a+b\sqrt2$ forces $2ab=0$, and either case contradicts rationality. Thus $1,\sqrt2,\sqrt3,\sqrt6$ is a basis and the extension has degree four. Independent sign changes of the two square roots give four automorphisms. The field is the splitting field over $\mathbb Q$ of $(x^2-2)(x^2-3)$, whose four roots $\pm\sqrt2,\pm\sqrt3$ are distinct, so [L2] makes the extension finite Galois with $|G|=4$; the four sign changes therefore exhaust $G$, which has exponent two and is thus $V_4$. [given, L2, algebra]

2.1 For $x=a+b\sqrt2+c\sqrt3+d\sqrt6$, invariance under $\sigma_2$, $\sigma_3$, or $\sigma_6$ respectively forces $(b,d)=(0,0)$, $(c,d)=(0,0)$, or $(b,c)=(0,0)$. Their fixed fields are therefore $\mathbb Q(\sqrt3)$, $\mathbb Q(\sqrt2)$, and $\mathbb Q(\sqrt6)$, which are distinct quadratic fields. [step 1.1, algebra]

3.1 The degrees in step 2.1 equal the subgroup indices prescribed by [L1], and [L1] is a bijection, so the table includes every subgroup and every intermediate field, including both endpoints. [step 2.1, L1] ∎
