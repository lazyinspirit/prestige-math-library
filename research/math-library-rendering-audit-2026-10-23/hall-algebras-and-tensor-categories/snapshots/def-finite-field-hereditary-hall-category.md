---
id: def-finite-field-hereditary-hall-category
kind: definition
title: "Finite-field hereditary Hall categories"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-hall-finitary-abelian-category
  - def-abelian-category
  - def-n-fold-yoneda-extension
  - def-equivalence-of-n-fold-extensions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.2 and §1.5, PDF pp. 6–12: finite-field Euler forms and the hereditary hypothesis for Green’s theorem."
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2"
      url: "https://arxiv.org/pdf/1810.08238v2"
      locator: "§2.1, PDF pp. 7–8: finitary abelian-category hypotheses and Yoneda Ext¹ convention."
verification:
  precheck: n/a
---

## Definition

A **finite-field hereditary Hall category** is a supplied small
$\mathbb F_q$-linear abelian category $\mathcal A$ with the following
properties:

1. For every pair $M,N$, $\operatorname{Hom}_{\mathcal A}(M,N)$ is a
   finite-dimensional $\mathbb F_q$-vector space and the Yoneda extension
   group $\operatorname{YExt}^1(M,N)$ is finite-dimensional over
   $\mathbb F_q$. Its addition is Baer sum; scalar multiplication by
   $\lambda\in\mathbb F_q$ is pushout along $\lambda\operatorname{id}_N$.
2. For every $M,N$, $\operatorname{YExt}^2(M,N)=0$, where a two-fold
   extension is an exact sequence $0\to N\to E_1\to E_0\to M\to0$
   modulo endpoint-fixed chain-map equivalence
   ([[def-n-fold-yoneda-extension]],
   [[def-equivalence-of-n-fold-extensions]]).
3. Smallness and the finiteness conditions of the Hall definition hold
   ([[def-hall-finitary-abelian-category]]).

Here $\mathbb F_q$-linear means that every Hom set is a vector space and
composition is bilinear. “Hereditary” in this page means exactly the stated
vanishing of Yoneda $\operatorname{Ext}^2$; no projective or injective
resolutions, derived-Ext identification, or choice principle is built into
the definition. Under these conditions the Euler form used below is
$$ \langle[M],[N]\rangle=\dim_{\mathbb F_q}\operatorname{Hom}(M,N) -\dim_{\mathbb F_q}\operatorname{YExt}^1(M,N). $$
