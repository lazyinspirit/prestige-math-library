---
id: def-gts-capped-weighted-label-changing-corner-data
kind: definition
title: Spectral-cut cappings and weighted label-changing corners
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: gts-symplectic-compactness-floer-fukaya
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
- def-axiom-of-choice
- def-sobolev-space-wkp-and-its-norm
- def-gts-stable-j-holomorphic-disks-with-boundary-markings
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
justified_by:
- lem-gts-spectral-cut-corner-fredholm-and-weighted-configuration
sources:
  references:
  - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry
    url: https://arxiv.org/pdf/1011.1690v2
    locator: 'Section 3.4, Exercise 3.26 and discussion, printed pp.116–117: smooth totally real disk boundary and
      Maslov/Fredholm convention only. No label-changing corner, nonunitary spectral capping, weighted configuration
      or graph-topology equivalence is attributed to this reference; those are specified here and proved in the
      justifying local lemma.'
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Choice (full AC), as in the justifying weighted Fredholm and configuration lemma.

A spectral-cut corner datum on a compact bordered Riemann surface $S$ consists of finitely many distinct boundary marks $b_j$, a coordinate $z=e^{-s-it}$ on a deleted lower half-disk at each mark, with $s\ge0$ and $0\le t\le\pi$, and ordered adjacent boundary conditions. The lower-half coordinate can be obtained from an upper-half boundary coordinate by the holomorphic change $z\mapsto-z$; the order of its two edges is recorded. All marks and collar coordinates persist in the specified local family; they are not smoothing nodes.

For linear data let $E\to S\setminus\{b_j\}$ have complex rank $m$, and let $F$ be a smooth totally real boundary condition on the open arcs. At each end choose a complex trivialization, a pair of real totally real planes $F_0,F_1\subset\mathbb C^m$, and an identification taking $F$ to these constant edge planes, with the identification and operator coefficients converging exponentially to their limits with all required cylindrical derivatives. A real plane is totally real when $F\oplus iF=\mathbb C^m$. Fix the first frame so $F_0=\mathbb R^m$. The conjugation $\tau_j$ associated with $F_j$ is $v+iw\mapsto v-iw$ for $v,w\in F_j$; it is an antilinear involution. Put $M=\tau_1\tau_0$. A weight $0<\delta<1$ is admissible if no eigenvalue of $M$ lies on the ray $e^{-2\pi i\delta}\mathbb R_{>0}$. Use the logarithm branch on the complement of this ray that defines
$$
A=-\frac{1}{2\pi i}\log M,\qquad \delta<\operatorname{Re}\operatorname{spec}A<\delta+1.
$$
The corresponding real matrix $A$, including its nilpotent parts, is part of the specified capping convention. Its existence for every totally real pair and every admissible cut is proved in the justifying lemma; diagonalizability, compatibility of $J$ with a symplectic form, unit-circle spectrum, and clean intersection of the labels are not assumptions for this linear datum.

The fixed-asymptote section space $\mathcal X^k_\delta$ has the usual finite-chart $H^k$ norm on a fixed core and the norm
$$
\|\xi\|^2_{k,\delta}=\sum_{a+b\le k}\int_0^\infty\!\int_0^\pi e^{2\delta s}|\partial_s^a\partial_t^b\xi|^2\,dt\,ds
$$
on each end, with trace in $F_0,F_1$ at its two edges. For $k\ge2$ its continuous representative tends to zero at each corner, by the uniform unit-patch Sobolev estimate and its weighted tail norm. For $k=1$ this space consists of Sobolev equivalence classes with the stated weak edge traces; no pointwise limit or point evaluation is imposed. The target $\mathcal Y^{k-1}_\delta$ uses the same weighted norm through order $k-1$ for cylindrical $(0,1)$ coefficients, with no boundary trace condition. Coordinates on a finite family are required to have uniform coefficient bounds and an admissible spectral cut separated from the spectra; the weight is fixed while those bounds hold.

To cap, replace the deleted half-disk by a filled half-disk carrying a new complex frame, and on its punctured overlap identify a new section $v$ with the old section
$$
\xi=G(z)v,\qquad G(z)=z^A=\exp(A\log z).
$$
The new real boundary frame has trace $\mathbb R^m$ on both edges and at their common marked point. Gluing with the given core frames defines the smooth capped pair $(\widehat E_\delta,\widehat F_\delta)$ on $S$. Define the cut-dependent capped Maslov integer $\mu_\delta$ to be the first Chern degree of its conjugate double. This is the Maslov integer of the capped pair; it is not the degree of an undefined continuous bundle formed by identifying two unequal old trace planes at a mark.

For nonlinear data, the adjacent labels are smooth embedded totally real submanifolds of an almost-complex target. Each asymptote is either fixed at a specified point $p_j\in L_0\cap L_1$, with no clean-intersection requirement, or is allowed to vary in an explicitly prescribed smooth local clean intersection $C_j=L_0\cap L_1$, where $T_pC_j=T_pL_0\cap T_pL_1$ and the dimension is constant. A chosen smooth parameter submanifold of the intersection may instead be imposed as an explicit restriction of the moduli problem; it must not be called the full moving-intersection problem. For integer $k\ge3$, weighted configuration maps are continuous at the corner and locally $H^k$ away from it, have these edge labels, and in the edge-dependent charts of the justifying lemma have remainder in $\mathcal X^k_\delta$ after subtracting the fixed or moving asymptote. The moving branch includes its finite-dimensional $C_j$ coordinate. When an end operator coefficient decays only as $O(e^{-\epsilon s})$, a constant asymptote augmentation requires $\delta<\epsilon$ (or the explicitly checked condition that its image belongs to the weighted target). Smooth ordinary forcing at a marked point has cylindrical order $O(e^{-s})$, consistent with $\delta<1$. At nodes, retain the original equality-of-values matching, with the same label on both sides of a boundary node.

The corner topology is the weighted Sobolev topology of these remainders and the ordinary topology of the asymptote parameters, combined with the domain-family coordinates. At nodes one uses the ordinary gluing topology with these persistent corner norms. For the branch with no genuine label jumps and no imposed corner vanishing condition, use the original smooth-boundary finite-chart spaces and graph topology. The weighted corner moduli problem is an explicit extension with different regularity/topology; it does not assert that every finite-energy map or every graph-near map belongs to a chosen positive exponential weight, nor that ordinary smooth-up-to-the-marking maps form its entire solution set.

## Definition references

[[def-axiom-of-choice]]

[[def-sobolev-space-wkp-and-its-norm]]

[[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[[lem-gts-spectral-cut-corner-fredholm-and-weighted-configuration]]
