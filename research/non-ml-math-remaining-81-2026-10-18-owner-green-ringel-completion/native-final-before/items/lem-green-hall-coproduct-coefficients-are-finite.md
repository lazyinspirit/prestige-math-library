---
id: lem-green-hall-coproduct-coefficients-are-finite
kind: lemma
title: "Green coproduct coefficients are finite"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-green-hall-completion-and-coproduct
  - def-finite-field-hereditary-hall-category
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.4, PDF pp. 9–10: individual Green coefficients and their coefficientwise completion."
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2"
      url: "https://arxiv.org/pdf/1810.08238v2"
      locator: "§2.1, PDF pp. 7–8: finite Hom and Yoneda Ext¹ conditions."
verification:
  precheck: pending
---

## Statement

For fixed objects $R,M,N$ in a finite-field hereditary Hall category, the
endpoint-labelled count $P^R_{M,N}$ and hence the coefficient of
$[M]\otimes[N]$ in [[def-green-hall-completion-and-coproduct]] are finite.
This assertion does not claim finite support in $[M],[N]$ for a fixed $R$.

## Facts & Assumptions

**Given:** Fixed objects $R,M,N$ in the category.

[F1] Hom sets are finite in the stated category
([[def-finite-field-hereditary-hall-category]]).

[F2] The coefficient is the scalar
$\nu^{\chi_0(M,N)}P^R_{M,N}/a_R$
([[def-green-hall-completion-and-coproduct]]).

## Proof



**Proof technique:** direct.

1.1 An endpoint-labelled sequence $0\to N\xrightarrow{i}R\xrightarrow{p}M\to0$ is a pair $(i,p)$ in $\operatorname{Hom}(N,R)\times\operatorname{Hom}(R,M)$ satisfying exactness. This product is finite by [F1], so its exact-sequence subset and the count $P^R_{M,N}$ are finite. [F1, given]

2.1 The automorphism number $a_R$ is a positive finite integer, and $\nu^{\langle M,N\rangle}$ is a defined scalar in $\mathbb Q(\nu)$. Thus the coefficient in [F2] is well-defined. Since the argument fixed $M,N$, it proves no finite-support claim as those objects vary. [F2, step 1.1, algebra] ∎

