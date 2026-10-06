---
id: lem-arith-prime-to-characteristic-multiplication-etale
kind: lemma
title: "Prime to characteristic multiplication is etale"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-etale-residue-extensions-finite-separable
  - thm-ag-standard-smooth-base-change-composition
  - thm-etale-equivalent-flat-unramified-fp
  - thm-jacobian-criterion-smooth-morphism
  - lem-arith-strict-henselian-etale-sections
  - def-group-scheme-over-a-scheme
  - def-smooth-morphism-schemes
  - thm-differentials-smooth-locally-free
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 7.3/2(b) (multiplication by n prime to the residue characteristic)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $S$ be a locally Noetherian scheme, let $G\to S$ be a smooth, separated, commutative group scheme of finite type over $S$ ([[def-group-scheme-over-a-scheme]], [[def-smooth-morphism-schemes]]), and let $n\ge1$ be invertible on $S$ (that is, a unit of $\mathcal O_S$ locally). Then the multiplication-by-$n$ endomorphism $[n]:G\to G$ and the kernel $G[n]\to S$ are etale. If moreover $S=\operatorname{Spec}R$ for a discrete valuation ring with strict henselization $R^{\mathrm{sh}}$ and separably closed residue field $k^s$ and $k^s$ has characteristic not dividing $n$, then reduction gives a bijection $G[n](R^{\mathrm{sh}})\to G[n](k^s)$.

## Facts & Assumptions

**Given:** AC and DC, a locally Noetherian base $S$, a smooth separated commutative finite-type $S$-group scheme $G$, an integer $n$ invertible on $S$, and, for the last clause, a DVR $R$ with strict henselization $R^{\mathrm{sh}}$ and separably closed residue field $k^s$.

[F1] On a smooth group scheme the tangent space at every point is identified with the translation of the tangent space at the identity, and the differential of a group homomorphism is translation-equivariant; the differential of $[n]$ at the identity is $n$ times the identity because $[n]$ is the sum of $n$ copies of the identity morphism in the group law ([[def-group-scheme-over-a-scheme]], [[def-smooth-morphism-schemes]]).

[F2] On smooth schemes of equal relative dimension the relative Jacobian criterion makes a morphism etale exactly where its differential determinant is invertible; standard smooth presentations and base change give the same over each affine open of the base ([[thm-jacobian-criterion-smooth-morphism]], [[thm-ag-standard-smooth-base-change-composition]], [[thm-differentials-smooth-locally-free]], [[thm-etale-equivalent-flat-unramified-fp]]).

[F3] Over a strictly henselian local ring with separably closed residue field, reduction is a bijection on points of a separated etale finite-type scheme ([[lem-arith-strict-henselian-etale-sections]], [[lem-etale-residue-extensions-finite-separable]]).

## Proof

**Proof technique:** direct: compute the differential of multiplication by $n$, apply the Jacobian criterion, and specialise.

1.1 At the identity the differential $\mathrm d[n]_e$ is multiplication by $n$ on the tangent space, because $[n]$ is the composite of the $n$-fold group law and the differential of the group law at the identity is addition; translation identifies the tangent space at every other point with the tangent space at the identity and conjugates $\mathrm d[n]$ at that point with the corresponding tangent map, so the differential of $[n]$ is everywhere multiplication by the unit $n$ on the locally free tangent sheaf. [F1, given, algebra]

2.1 Since $G$ is smooth over $S$ of constant relative dimension on each connected component and $[n]$ is a morphism between smooth schemes of the same relative dimension, the relative Jacobian criterion in [F2] applies: $[n]$ is etale exactly where the determinant of its differential is a unit, which by step 1.1 holds everywhere since $n$ is invertible on $S$. Hence $[n]$ is etale. The scheme $G[n]$ is the pullback of $[n]$ along the identity section, so it is etale over $S$ as a base change of an etale morphism; it is separated and of finite type because $G$ is. [F2, step 1.1, algebra]

3.1 Negative $n$ is handled by composing with the inversion, which is an isomorphism of $G$ over $S$. The graph-Jacobian computation of step 2.1 works over each affine open of $S$, so it does not need $S$ to be a DVR or Noetherian beyond the local Noetherian hypothesis. [F2, step 2.1, algebra]

4.1 In the DVR case, $G[n]\to\operatorname{Spec}R$ is separated etale of finite type, and after the base change to the strictly henselian ring $R^{\mathrm{sh}}$ with separably closed residue field $k^s$ the general section result [F3] gives that reduction $G[n](R^{\mathrm{sh}})\to G[n](k^s)$ is bijective. This specialization statement is asserted only in this DVR/strictly henselian setting. [F3, step 3.1, algebra] ∎ 