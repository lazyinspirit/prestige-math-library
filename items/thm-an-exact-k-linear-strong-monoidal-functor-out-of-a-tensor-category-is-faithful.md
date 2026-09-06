---
id: thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful
kind: theorem
title: "An exact k-linear strong monoidal functor to a nonzero multitensor category is faithful"
status: draft
origin: pipeline
deps: [thm-the-unit-object-of-a-tensor-category-is-simple, cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects, def-tensor-functor-between-tensor-categories]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Remark 4.3.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Every exact $k$-linear strong monoidal functor from a tensor category to a
multitensor category whose unit is nonzero is faithful.

## Facts & Assumptions

**Given:** An exact $k$-linear strong monoidal functor $F:\mathcal C\to\mathcal D$, where $\mathcal C$ is a tensor category, $\mathcal D$ is a multitensor category, and $\mathbf1_{\mathcal D}\ne0$.

[F2] For nonzero $X$, coevaluation $\mathbf1\to X\otimes X^\vee$ is monic ([[cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects]]).

## Proof

**Proof technique:** direct.

1.1 If $X\ne0$, [F2] and exactness imply that $F(\mathbf1)\to F(X\otimes X^\vee)$ is monic. Strong monoidality identifies its source with the nonzero unit of $\mathcal D$, so its target is nonzero. Since $F(X\otimes X^\vee)\cong F(X)\otimes F(X^\vee)$, this forces $F(X)\ne0$. [F2, given]

2.1 If $F(f)=0$, exactness gives $F(\operatorname{im}f)=0$. Step 1.1 therefore implies $\operatorname{im}f=0$, hence $f=0$ in the abelian source category. Thus $F$ is faithful. [step 1.1, given] ∎
