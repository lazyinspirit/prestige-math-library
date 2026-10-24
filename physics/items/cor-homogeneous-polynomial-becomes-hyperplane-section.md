---
id: cor-homogeneous-polynomial-becomes-hyperplane-section
kind: corollary
title: A degree-d homogeneous equation becomes a hyperplane section under Veronese
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-veronese-map-well-defined-closed-immersion, def-degree-projective-hypersurface]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.24
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $n\ge1$ and $F$ is a nonzero homogeneous polynomial of degree $d\ge1$
on $\mathbf P^n$, then there is a hyperplane $H\subseteq\mathbf P^N$ such
that $V_+(F)=\nu_{n,d}^{-1}(H)$.

## Proof

**Given:** $F=\sum_\alpha c_\alpha x^\alpha$ of degree $d$.

1.1 In the ordered Veronese coordinates $Z_\alpha$, define the linear form $L=\sum_\alpha c_\alpha Z_\alpha$ and its hyperplane $H=V_+(L)$. [given]

2.1 Substitution in the definition of $\nu_{n,d}$ gives $L(\nu_{n,d}([x]))=\sum c_\alpha x^\alpha=F(x)$. [step 1.1, algebra]

3.1 Therefore a point belongs to the pullback hyperplane exactly when it belongs to $V_+(F)$, proving the equality. [step 2.1] ∎
