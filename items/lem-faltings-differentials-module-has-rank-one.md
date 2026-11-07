---
id: lem-faltings-differentials-module-has-rank-one
kind: lemma
title: "Invariant differentials on a Néron model form a rank-one projective module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
  - def-neron-model-and-mapping-property
  - def-number-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–356, construction of the invariant differential module."
verification:
  precheck: pending
---

## Statement

Let $K$ be a number field, $R=\mathcal O_K$, $A/K$ an abelian variety, and let $\mathcal N/R$ be a Néron model of $A$ of relative dimension $g$. Let $e:\operatorname{Spec}R\to\mathcal N$ be the identity section. Then
$$\omega_{\mathcal N/R}:=e^*\!\left(\bigwedge^g\Omega^1_{\mathcal N/R}\right)$$
is a finitely generated projective $R$-module of rank one.

## Statement references

[[def-number-field]]

[[def-neron-model-and-mapping-property]]

[Faltings 1983, §2, printed pp. 355–356](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

## Facts & Assumptions

**Given:** $K$, $R=\mathcal O_K$, an abelian variety $A/K$, its Néron model $\mathcal N/R$ of relative dimension $g$, and its identity section.

[F1] [[def-neron-model-and-mapping-property]]: a Néron model is smooth over the base, and its generic fiber is the given abelian variety.

[F2] [[def-number-field]]: $R$ is a Dedekind domain.

## Proof

**Proof technique:** pull back the cotangent bundle and take its determinant.

**Given:** [F1]–[F2].

1.1 Since $\mathcal N/R$ is smooth of relative dimension $g$, its relative cotangent sheaf $\Omega^1_{\mathcal N/R}$ is locally free of rank $g$. Pullback along the identity section preserves local freeness, so $e^*\Omega^1_{\mathcal N/R}$ is locally free of rank $g$ over $R$. [given, F1]

1.2 The top exterior power $\bigwedge^g e^*\Omega^1_{\mathcal N/R}$ is locally free of rank one. Pullback commutes with exterior powers, so it is $\omega_{\mathcal N/R}$. [step 1.1, algebra]

2.1 A locally free rank-one module over the Dedekind domain $R$ is a finitely generated projective module of rank one. Thus $\omega_{\mathcal N/R}$ has the asserted property. [F2, step 1.2, algebra] ∎
