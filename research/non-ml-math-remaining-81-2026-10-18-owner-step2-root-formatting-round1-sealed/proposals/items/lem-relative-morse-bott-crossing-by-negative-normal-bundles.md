---
id: lem-relative-morse-bott-crossing-by-negative-normal-bundles
kind: lemma
title: Relative Morse–Bott crossing by negative normal disk bundles
status: draft
dependency_level: 6
origin: pipeline
deps:
- def-axiom-of-choice
- thm-whitney-approximation-for-manifold-valued-maps
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

[F5] The proof of [[thm-whitney-approximation-for-manifold-valued-maps]] gives a smooth approximation with any prescribed positive pointwise error and the homotopy obtained by retracting the straight ambient segments. On a compact region this keeps the approximation homotopy inside any chosen open Morse chart and outside the obstruction whenever the error is chosen below the corresponding positive margins. The current AC assumption supplies the required countable choice.



**Proof technique:** direct construction.

**Given:** The data and hypotheses in the Statement.

## Proof

**Proof technique:** direct construction.

1.1 Let $C$ be one critical component at level $a$. In a tubular chart write $f-a=q+R$, where $q$ is the fiber Hessian quadratic form and $R$ has order at least three in the normal variable $z$. Set $f_s=q+sR$. Its vertical differential has the form $A_s(x,z)z$, where $A_s$ is the smooth symmetric operator obtained by integrating the vertical Hessian along $tz$, $0\le t\le1$. Since the normal Hessian is invertible, $A_s$ is uniformly invertible on a small tube over compact $C$. Write $R=\sum_i z_i R_i$ with $R_i(x,z)=\int_0^1\partial_iR(x,tz)\,dt$, and set $W_s=-A_s^{-1}(R_i)_i$. Then $df_s(W_s)=-R$. Radial integration and metric duality make this construction intrinsic on the normal bundle. [A1, F1, F2, construct]

2.1 The flow of $\partial_s+W_s$ fixes the zero section and exists for $0\le s\le1$ on a uniformly smaller tube, because $W_s$ is of order at least two and $C$ is compact. Along it $d(f_s)/ds=0$, giving a bundle normal form. Split the normal Hessian into negative and positive spectral subbundles and rescale by its positive square roots, obtaining $f=a-|u|^2+|v|^2$ on $\nu^-\oplus\nu^+$. The spectral projections are smooth locally: choose disjoint contours separating the positive and negative spectra and integrate the matrix resolvent. The positive square root is smooth by the inverse theorem applied to $T\mapsto T^2$, whose derivative $H\mapsto TH+HT$ is invertible for positive definite $T$. These local descriptions agree by uniqueness. [F2, step 1.1, algebra]

3.1 Let a test cell be a disk $D^q$ with $q<k:=\operatorname{rank}\nu^-$. Its boundary collar already misses the negative-normal zero section over the positive-normal disk. Choose nested closed disk-bundle tubes around the critical component inside the Morse chart, with the largest tube still contained in the chart, and let $\Sigma$ be the negative-normal zero section over the closed positive disk in the smallest tube. This obstruction is compact because the critical component is compact. For the original continuous cell map $g$, put $K_0=g^{-1}(\Sigma)$. If $K_0=\varnothing$, no perturbation is needed. Otherwise choose compact neighborhoods $K_0\subset\operatorname{int}U_0\subset U_0\subset\operatorname{int}U_1$ in the cell, with $U_1$ disjoint from the fixed collar, $g(U_1)$ contained in the largest tube, and $g(U_1\setminus\operatorname{int}U_0)$ disjoint from $\Sigma$. Compactness and continuity give positive margins from the collar, chart boundary, and obstruction. Extend $g$ continuously from $D^q$ to $\mathbb R^q$ by composing with the radial retraction onto $D^q$, apply [F5] to this extension with a positive constant pointwise error smaller than those margins, and restrict back to $D^q$. This gives a smooth approximation $g_1$ and a homotopy $H$ from $g$ to $g_1$ whose retracted straight segments stay inside the largest Morse tube on $U_1$ and avoid $\Sigma$ on the transition annulus. Choose a continuous cutoff $\lambda$ equal to one on $U_0$ and zero outside $U_1$, and replace $g$ by $g'(x)=H(x,\lambda(x))$. The homotopy $H(x,t\lambda(x))$ is fixed on the collar; $g'=g_1$ near $K_0$, $g'=g$ outside $U_1$, and the error bound prevents an intersection with $\Sigma$ in the transition annulus. Thus $g'$ is smooth near every possible intersection with the obstruction, unchanged on the collar, and stays inside the largest Morse chart. Its intersection $K=(g')^{-1}(\Sigma)$ is compact and lies in the interior of the cell. Choose an open neighborhood $O$ of $K$ whose closure is in the cell interior and maps into the largest Morse tube. On $O$ the map has smooth Morse coordinates $(b,u,v)$, where $b$ is the base point in the critical component, $u$ is its negative-normal coordinate and $v$ its positive-normal coordinate. Thus $u$ is a smooth section of the pullback of $\nu^-$ by $b$. Choose finitely many source balls $O_i$ covering $K$, with closures inside $O$ and away from the collar. On each ball choose a frame $e_{i1},\ldots,e_{ik}$ for that pullback bundle and a smooth bump function $\chi_i$ supported in $O_i$ and positive on a smaller ball, with those smaller balls still covering $K$. Extending by zero gives finitely many smooth sections $s_{i\alpha}=\chi_i e_{i\alpha}$. They span the fiber at every point of the open set $U=\bigcup_i\{\chi_i>0\}$, which contains $K$. For $a=(a_{i\alpha})\in\mathbb R^N$ set $u_a=u+\sum_{i,\alpha}a_{i\alpha}s_{i\alpha}$. The derivative in the parameter directions is onto the fiber of $\nu^-$ at every point of $U$, so the incidence set $\mathcal I=\{(x,a)\in U\times B_\epsilon:u_a(x)=0\}$ is a smooth submanifold of dimension $q+N-k<N$, for any sufficiently small open parameter ball $B_\epsilon$. Sard applied to the projection $\mathcal I\to B_\epsilon$ shows that its image has measure zero; choose $a\in B_\epsilon$ outside that image. On the compact part of the perturbation supports outside $U$ that lies over the closed positive-normal disk, $u$ is nonzero because $K\subset U$; it is therefore bounded away from zero, so choose $\epsilon$ small enough that no new zero occurs on the obstruction there. No perturbation is made outside the supports, where the map already misses the obstruction. Hence the perturbed map avoids the entire obstruction. The supports are away from the collar, and making $\epsilon$ smaller if necessary keeps the negative coordinate inside the largest Morse tube throughout the straight-line homotopy $u_{ta}$, $0\le t\le1$; this homotopy is fixed on the collar and remains in the local Morse chart. The inverse image of $u=0$ over the positive-normal disk is therefore empty, as required. [F1, F3, construct, step 2.1]

3.2 In this tube use the descending field $(2u,-2v)$, whose flow is $(u,v)\mapsto(e^{2t}u,e^{-2t}v)$. Off the tube patch it to $-\operatorname{grad}f$ by a partition of unity; every regular point still has strictly negative $df$. On the compact regular complement normalize by $-df$ to cross a prescribed regular band in bounded time. In the tube the only obstruction to reaching the lower level is $u=0$. Contracting $v$ and stopping the outward $u$ flow on the regular lower face gives the negative disk bundle attachment along its sphere bundle, with the positive disk thickening. These fiber formulas use bundle norms, so patch globally; rounding the regular faces gives the same relative pair. At a minimum $\nu^-=0$ and the local formula $a+|v|^2$ retracts the small sublevel by $v\mapsto(1-t)v$. [F2, step 2.1, construct]

4.1 Perform this on characteristic disks in cell order, extending boundary homotopies by the CW homotopy extension property. The perturbed compact family misses the closed obstruction by a positive distance in each handle, so the explicit flow of step 3.2 crosses in a uniformly bounded finite time. Apply this at the finitely many critical levels. If each nonminimum negative rank is at least $d+1$, every family of dimension at most $d$ reaches the minimum neighborhood relatively, and the final normal contraction reaches the minimum locus. Only finite compact bands and finite flow times are used. [F4, step 3.2, step 3.1, construct] ∎

