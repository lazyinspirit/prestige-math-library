---
id: lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined
kind: lemma
title: "Consistent finite-dimensional laws define a well-defined finitely additive cylinder law"
status: draft
origin: pipeline
deps: [def-consistent-family-of-finite-dimensional-distributions, lem-finite-coordinate-cylinder-sets-form-an-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Lemma 2.6"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

Suppose the product $E=\prod_{i\in I}E_i$ is nonempty. For a consistent family
$(\mu_F)$, the formula $\mu_0(\pi_F^{-1}(A)):=\mu_F(A)$ is well-defined on
$\mathcal A_I$ and is finitely additive.

## Facts & Assumptions

**Given:** A nonempty product $E$, a consistent family $(\mu_F)$, and a finite disjoint cylinder decomposition.

[F1] If $F\subseteq H$, consistency says $(p_{H,F})_\#\mu_H=\mu_F$.

[F2] Finite-coordinate cylinders form an algebra. ([[lem-finite-coordinate-cylinder-sets-form-an-algebra]])

## Proof

1.1 Fix $x^*\in E$. If $\pi_F^{-1}(A)=\pi_G^{-1}(B)$, pull both sets to $H=F\cup G$. Their lifted bases are equal: otherwise a point of their symmetric difference, combined with the coordinates of $x^*$ outside $H$, would distinguish the cylinders. Hence consistency gives $\mu_F(A)=\mu_H(p_{H,F}^{-1}A)=\mu_H(p_{H,G}^{-1}B)=\mu_G(B)$. [F1]

2.1 For disjoint cylinders $C_r=\pi_{F_r}^{-1}(A_r)$ with $r<m$, pull all bases to $H=\bigcup_{r<m}F_r$. They are disjoint measurable sets, so finite additivity of $\mu_H$ yields $\mu_0(\bigcup_rC_r)=\sum_r\mu_0(C_r)$. The union is in the cylinder algebra by [F2]. [F1, F2] ∎
