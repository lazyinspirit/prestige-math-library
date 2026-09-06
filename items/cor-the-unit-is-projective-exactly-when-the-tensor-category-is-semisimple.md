---
id: cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple
kind: corollary
title: "The unit is projective exactly when the tensor category is semisimple"
status: draft
origin: pipeline
deps: [thm-tensoring-with-a-dualizable-object-preserves-projectives, def-semisimple-object-and-semisimple-abelian-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Corollary 4.2.13"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

A tensor category is semisimple if and only if its unit object is projective.

## Facts & Assumptions

**Given:** A tensor category $\mathcal C$.

[F1] Tensoring a projective object with a dualizable object preserves projectivity ([[thm-tensoring-with-a-dualizable-object-preserves-projectives]]).

[F2] Semisimple means every object is a finite direct sum of simple objects ([[def-semisimple-object-and-semisimple-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathbf1$ is projective, every $X\cong\mathbf1\otimes X$ is projective by [F1]. In this finite-length abelian setting, all objects projective implies that all short exact sequences split, hence every object is a direct sum of its simple factors and is semisimple in the sense of [F2]. [F1, F2, given]

2.1 Conversely, in a semisimple abelian category every epimorphism splits after decomposing its codomain into simples; thus every object, in particular $\mathbf1$, is projective. [F2, given] ∎
