---
id: lem-relative-morse-bott-crossing-by-negative-normal-bundles
kind: lemma
title: Relative Morse–Bott crossing by negative normal disk bundles
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- thm-euclidean-inverse-function-theorem
- thm-fundamental-theorem-on-flows
- thm-morse-sard-for-smooth-manifolds
- prop-relative-cw-inclusions-are-cofibrations
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory
      (2021), expanded local argument
    url: https://arxiv.org/pdf/2011.14368v3
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
---

## Statement

Assume AC. Let a smooth function have a compact band whose critical locus is a finite union of compact embedded critical manifolds, with Hessian kernel exactly the tangent space of each. Crossing one component attaches its negative normal disk bundle, with its positive normal disk thickening. If every nonminimum negative normal rank exceeds $d$, finite-CW parameter maps of dimension at most $d$ can be moved relatively past those components. A sufficiently small neighborhood of a clean minimum retracts onto that minimum manifold.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] A closed embedded critical manifold has a tubular neighborhood, under countable choice. ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F2] Invertible derivatives admit local inverses, and smooth vector fields have unique local flows with smooth dependence on initial conditions. ([[thm-euclidean-inverse-function-theorem]], [[thm-fundamental-theorem-on-flows]]).

[F3] The critical values of a smooth finite-dimensional manifold map form a null set; this supplies transverse parameters for the finite perturbations below. ([[thm-morse-sard-for-smooth-manifolds]]).

[F4] Relative CW inclusions have the homotopy extension property. ([[prop-relative-cw-inclusions-are-cofibrations]]).



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Let $C$ be one critical component at level $a$. In a tubular chart write $f-a=q+R$, where $q$ is the fiber Hessian quadratic form and $R$ has order at least three in the normal variable $z$. Set $f_s=q+sR$. Its vertical differential has the form $A_s(x,z)z$, where $A_s$ is the smooth symmetric operator obtained by integrating the vertical Hessian along $tz$, $0\le t\le1$. Since the normal Hessian is invertible, $A_s$ is uniformly invertible on a small tube over compact $C$. Write $R=\sum_i z_i R_i$ with $R_i(x,z)=\int_0^1\partial_iR(x,tz)\,dt$, and set $W_s=-A_s^{-1}(R_i)_i$. Then $df_s(W_s)=-R$. Radial integration and metric duality make this construction intrinsic on the normal bundle. [A1, F1, F2, construct]


1.2 Let a test cell have dimension $q<\operatorname{rank}\nu^-$. The part already below the band misses the compact obstruction $u=0$, so fix a collar of its boundary with that property. Smoothly approximate the map on its remaining compact interior in finitely many coordinate balls, keeping the collar fixed: in a chart approximate the coordinate functions by convolution after a cutoff, and compose with a tubular retraction on overlapping target charts. Add bump-supported small coordinate translations. Their evaluation map is a submersion, so Sard applied to projection of the transverse incidence manifold gives a parameter for which the test map is transverse to $u=0$. Use finitely many balls, choosing later perturbations small enough to preserve previously achieved transversality on compact subsets. The inverse image then has dimension $q-\operatorname{rank}\nu^-<0$ and is empty. The small translations give the relative homotopy. [F1, F3, construct]


2.1 The flow of $\partial_s+W_s$ fixes the zero section and exists for $0\le s\le1$ on a uniformly smaller tube, because $W_s$ is of order at least two and $C$ is compact. Along it $d(f_s)/ds=0$, giving a bundle normal form. Split the normal Hessian into negative and positive spectral subbundles and rescale by its positive square roots, obtaining $f=a-|u|^2+|v|^2$ on $\nu^-\oplus\nu^+$. The spectral projections are smooth locally: choose disjoint contours separating the positive and negative spectra and integrate the matrix resolvent. The positive square root is smooth by the inverse theorem applied to $T\mapsto T^2$, whose derivative $H\mapsto TH+HT$ is invertible for positive definite $T$. These local descriptions agree by uniqueness. [F2, step 1.1, algebra]


3.1 In this tube use the descending field $(2u,-2v)$, whose flow is $(u,v)\mapsto(e^{2t}u,e^{-2t}v)$. Off the tube patch it to $-\operatorname{grad}f$ by a partition of unity; every regular point still has strictly negative $df$. On the compact regular complement normalize by $-df$ to cross a prescribed regular band in bounded time. In the tube the only obstruction to reaching the lower level is $u=0$. Contracting $v$ and stopping the outward $u$ flow on the regular lower face gives the negative disk bundle attachment along its sphere bundle, with the positive disk thickening. These fiber formulas use bundle norms, so patch globally; rounding the regular faces gives the same relative pair. At a minimum $\nu^-=0$ and the local formula $a+|v|^2$ retracts the small sublevel by $v\mapsto(1-t)v$. [F2, step 2.1, construct]


4.1 Perform this on characteristic disks in cell order, extending boundary homotopies by the CW homotopy extension property. The perturbed compact family misses the closed obstruction by a positive distance in each handle, so the explicit flow of step 3.1 crosses in a uniformly bounded finite time. Apply this at the finitely many critical levels. If each nonminimum negative rank is at least $d+1$, every family of dimension at most $d$ reaches the minimum neighborhood relatively, and the final normal contraction reaches the minimum locus. Only finite compact bands and finite flow times are used. [F4, step 3.1, step 1.2, construct] ∎
