---
id: lem-fehmm-micro-tensor-approximation-error
kind: lemma
title: Energy identity for FE-HMM micro tensor error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - alg-fehmm-periodic-cell-micro-macro
  - lem-fehmm-micro-cell-solves-wellposedness
  - def-periodic-cell-correctors-and-effective-tensor
  - thm-periodic-effective-tensor-symmetric-elliptic
  - lem-periodic-cell-corrector-wellposedness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§§2–3: cell sampling and the FE-HMM macro/micro error split."
verification:
  precheck: n/a
---
## Statement

For a fixed macro sample $K$ in [[alg-fehmm-periodic-cell-micro-macro]], let $b_K$ be its sampled coefficient, $w_{K,p}\in V_\#$ the full periodic cell solution, and $w^h_{K,p}\in W_{\mathcal M}$ its micro P1 solution from [[lem-fehmm-micro-cell-solves-wellposedness]]. Set $\|\nabla v\|_{b_K}^2=\int_Yb_K|\nabla v|^2$. Then
$$p\cdot(A_K^h-A_K^{\rm ex})p=\|\nabla(w^h_{K,p}-w_{K,p})\|_{b_K}^2\ge0,$$
and for any $z_h\in W_{\mathcal M}$,
$$\|\nabla(w^h_{K,p}-w_{K,p})\|_{b_K}\le\|\nabla(z_h-w_{K,p})\|_{b_K}.$$
In particular $\|A_K^h-A_K^{\rm ex}\|_{op}\le\eta_K^2$, where $\eta_K=\sup_{|p|=1}\inf_{z_h\in W_{\mathcal M}}\|\nabla(z_h-w_{K,p})\|_{b_K}$ and $\|M\|_{op}=\sup_{|p|=1}|Mp|$.

## Facts & Assumptions

**Given:** The full and finite periodic cell equations use the same scalar coefficient $b_K$, the micro space is a subspace of $V_\#$, and both solutions are unique.

[F1] [[alg-fehmm-periodic-cell-micro-macro]]: $W_{\mathcal M}\subset V_\#$ and the full/discrete sampled equations use the same $b_K$.

[F2] [[lem-fehmm-micro-cell-solves-wellposedness]]: both cell solutions exist uniquely and their tensor energy representation is symmetric.

[F3] [[lem-periodic-cell-corrector-wellposedness]]: the cell variational equation holds for every test in $V_\#$.

## Proof



1.1 Write $e_p=w^h_{K,p}-w_{K,p}$. Subtracting the two variational equations gives $\int_Yb_K\nabla e_p\cdot\nabla z_h=0$ for every $z_h\in W_{\mathcal M}$. Thus $e_p$ is orthogonal in the $b_K$ gradient inner product to the whole micro space. For any $z_h$, $\|\nabla(w_{K,p}-z_h)\|_{b_K}^2=\|\nabla e_p\|_{b_K}^2+\|\nabla(w^h_{K,p}-z_h)\|_{b_K}^2,$ which proves the best-approximation inequality. [F1, F2, F3, algebra]

2.1 For $p,q\in\mathbb R^2$, the symmetric energy representation in [F2] and the full/discrete equations imply $p\cdot(A_K^h-A_K^{\rm ex})q=\int_Yb_K\nabla e_p\cdot\nabla e_q.$ Indeed, expanding the two energy bilinear forms leaves this term; each cross term vanishes by testing the full equation with the difference in $V_\#$ or the discrete equation with a micro function in $W_{\mathcal M}$. Taking $q=p$ proves the identity. For unit $p,q$, Cauchy--Schwarz bounds the right side by $\|\nabla e_p\|_{b_K}\|\nabla e_q\|_{b_K}\le\eta_K^2$ by step 1.1. The supremum over unit vectors is the operator norm, giving the final bound. [F2, step 1.1, F1, algebra] ∎
