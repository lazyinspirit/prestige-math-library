---
id: thm-fundamental-theorem-of-finite-galois-theory
kind: theorem
title: "The fundamental theorem of finite Galois theory"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-galois-extension-and-galois-group, thm-artin-fixed-field-degree-theorem, thm-finite-galois-extension-characterizations, cor-finite-galois-over-every-intermediate-field, thm-tower-law-for-finite-field-extensions, thm-lagrange]
aliases: []
landmark: true
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.17"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be finite Galois and let $G=\operatorname{Gal}(K/F)$. The assignments $H\mapsto K^H$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing bijections between subgroups $H\le G$ and intermediate fields $F\subseteq E\subseteq K$. Moreover,

$$[K:K^H]=|H|\quad\text{and}\quad [K^H:F]=[G:H].$$

## Facts & Assumptions

**Given:** A finite Galois extension $K/F$, its finite group $G$, the fact that $K/E$ is finite Galois for every intermediate field $E$ ([[cor-finite-galois-over-every-intermediate-field]]), the tower law ([[thm-tower-law-for-finite-field-extensions]]), and the finite-group formula $|G|=|H|[G:H]$ ([[thm-lagrange]]).

[L1] If $H$ is a finite group of automorphisms of $K$, then $[K:K^H]=|H|$ and $\operatorname{Aut}(K/K^H)=H$ ([[thm-artin-fixed-field-degree-theorem]]).

[L2] For a finite extension $L/E$ with $G=\operatorname{Aut}(L/E)$, being Galois, being the splitting field of a separable polynomial, $|G|=[L:E]$, and $L^G=E$ are equivalent ([[thm-finite-galois-extension-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 For the subgroup-to-field-to-subgroup direction, Artin applied to $H$ gives $\operatorname{Gal}(K/K^H)=\operatorname{Aut}(K/K^H)=H$. This includes $H=\{1\}$, whose fixed field is $K$, and $H=G$. [L1]

1.2 For the field-to-subgroup-to-field direction, put $H=\operatorname{Gal}(K/E)$. Since $K/E$ is finite Galois, [L2] gives $|H|=[K:E]$. Artin gives $[K:K^H]=|H|=[K:E]$, while $E\subseteq K^H$; the tower law forces $E=K^H$. This includes $E=K$ and $E=F$. [L1, L2, given]

2.1 If $H_1\subseteq H_2$, then every element fixed by $H_2$ is fixed by $H_1$, so $K^{H_2}\subseteq K^{H_1}$; the reverse map is likewise inclusion-reversing. Artin gives $[K:K^H]=|H|$, while [L2] applied to $K/F$ gives $[K:F]=|G|$, so the tower and Lagrange formulas give $[K^H:F]=|G|/|H|=[G:H]$. Together with steps 1.1 and 1.2 these statements prove the claimed bijections and degree formulas. [step 1.1, step 1.2, L1, L2, given] ∎
