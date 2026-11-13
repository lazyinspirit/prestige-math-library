---
id: thm-spherical-deligne-topology-artin-tits-normalisers
kind: theorem
title: Spherical relative arrangements and Deligne topology
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - def-garside-interface-artin-tits-prerequisites
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-coordinate-faces
  - thm-deligne-simplicial-input-artin-tits-prerequisites
  - def-real-coxeter-interface-artin-tits-prerequisites
  - math:def-fundamental-groupoid-of-a-space
  - lem-author-d3116e202611-gallery-cover
dependency_roles:
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  def-arrangement-groupoids-artin-tits-normalisers: mathematical-premise
  def-garside-interface-artin-tits-prerequisites: mathematical-premise
  thm-relative-chamber-labelling-input-artin-tits-prerequisites: mathematical-premise
  lem-author-9b7c42e8f103-coordinate-faces: mathematical-premise
  thm-deligne-simplicial-input-artin-tits-prerequisites: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
  lem-author-d3116e202611-gallery-cover: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 14, §3.5, first and final construction paragraphs
      statement: For spherical type the relative arrangement is finite and simplicial,
        and its Deligne groupoid is equivalent to the fundamental groupoid of
        the relative complexified complement. The introductory discussion
        attributes the Garside and topological properties to the finite
        simplicial setting.
      hypotheses: A finite Coxeter diagram, its Coxeter group and relative
        arrangement, with spherical type for the asserted application.
      reading_limits: This downstream pass read the frozen extracted text of §3.5 for
        attribution and the current declared supplier statements and the
        gallery-cover proof. The original article is not a proof premise; no new
        reading of Deligne’s paper or visual PDF inspection is claimed.
formulation_deps:
  - def-real-coxeter-interface-artin-tits-prerequisites
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - def-garside-interface-artin-tits-prerequisites
  - math:def-fundamental-groupoid-of-a-space
argument_deps:
  - def-relative-cone-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - def-garside-interface-artin-tits-prerequisites
  - thm-relative-chamber-labelling-input-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-coordinate-faces
  - thm-deligne-simplicial-input-artin-tits-prerequisites
  - def-real-coxeter-interface-artin-tits-prerequisites
  - math:def-fundamental-groupoid-of-a-space
  - lem-author-d3116e202611-gallery-cover
dependency_level: 18
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system, let $J\subseteq S$, and use its relative space $\Theta_J$, relative cone $\mathrm{Cone}(J)$, relative hyperplanes $\mathcal H^J$, positive arrangement category $\mathcal D^+(J)$ and groupoid completion $\mathcal D(J)$. Suppose $W$ is finite, also called spherical type. Then $\mathrm{Cone}(J)^\circ=\Theta_J$, and $(\Theta_J,\mathcal H^J)$ is a finite central simplicial arrangement: its hyperplanes are finite in number, pass through the origin, and each chamber is a linear image of an open positive orthant in $\Theta_J$.

The category $\mathcal D^+(J)$ has a finite-type atomic categorical Garside structure. Thus its completion $\mathcal D(J)$ is a Garside groupoid in the sense of being the groupoid completion of that Garside category. It is equivalent to the fundamental groupoid $\pi_1(\mathcal X_J^{\mathbb C})$ of the relative complexified complement. These deductions use the finite simplicial hypotheses; no extension to a general nonsimplicial or infinite arrangement is asserted.

## Statement references

[[def-relative-cone-artin-tits-normalisers]]

[[def-relative-complement-artin-tits-normalisers]]

[[def-arrangement-groupoids-artin-tits-normalisers]]

[[def-garside-interface-artin-tits-prerequisites]]

[[thm-relative-chamber-labelling-input-artin-tits-prerequisites]]

[[lem-author-9b7c42e8f103-coordinate-faces]]

[[thm-deligne-simplicial-input-artin-tits-prerequisites]]

[[def-real-coxeter-interface-artin-tits-prerequisites]]

[[math:def-fundamental-groupoid-of-a-space]]

## Facts & Assumptions

[F1] The relative hyperplanes are the distinct nontrivial traces of root hyperplanes on $\Theta_J$. In finite type the relative cone interior is $\Theta_J$, and $\mathcal X_J^{\mathbb C}$ is the complexified complement of these linear hyperplanes. [[def-relative-cone-artin-tits-normalisers]] [[def-relative-complement-artin-tits-normalisers]]

[F2] Each chamber of the relative arrangement has the form $xC_I$, where $x\in W$, $I\subseteq S$, and $C_I$ consists of dual functionals with zero simple-root coordinates on $I$ and strictly positive coordinates on $S\setminus I$. [[thm-relative-chamber-labelling-input-artin-tits-prerequisites]]

[F3] The set $C_I$ spans the coordinate subspace $E_I$ on which the coordinates indexed by $I$ vanish; it is an open positive orthant in that subspace. The action of $x$ is a linear automorphism. [[lem-author-9b7c42e8f103-coordinate-faces]] [[def-real-coxeter-interface-artin-tits-prerequisites]]

[F4] For a finite central real arrangement with open simplicial chambers, the positive gallery category has a finite-type atomic categorical Garside structure, and its groupoid completion is equivalent to the fundamental groupoid on chamber basepoints of the complexified complement. [[thm-deligne-simplicial-input-artin-tits-prerequisites]] [[def-garside-interface-artin-tits-prerequisites]]

[F5] The positive arrangement category is the category of directed chamber paths modulo identification of geodesics with common endpoints, and $\mathcal D(J)$ is its groupoid completion. [[def-arrangement-groupoids-artin-tits-normalisers]]

[F6] The roots are $\Phi=\{w\alpha_s:w\in W,\ s\in S\}$, and $H_\alpha=\{f\in\Theta:f(\alpha)=0\}$ is a linear hyperplane. The contragredient action of each $w\in W$ is a linear automorphism of $\Theta$. [[def-real-coxeter-interface-artin-tits-prerequisites]]

[F7] For a topological space $X$, its fundamental groupoid has all points of $X$ as objects and endpoint-fixed path-homotopy classes as morphisms. Composition traverses consecutive paths in order, identities are constant path classes, and inverses are reversed path classes. [[math:def-fundamental-groupoid-of-a-space]]

[F8] For the same finite central simplicial arrangement, the gallery-cover lemma gives an equivalence from the gallery completion to the all-points fundamental groupoid. Its proof constructs the quasi-inverse using a finite ordering of the chambers and explicit paths in chamber charts, without an arbitrary indexed selection of paths. [[lem-author-d3116e202611-gallery-cover]]

## Proof

**Given:** The finite-rank Coxeter system, subset $J$, and finite group $W$ in the Statement.

**Proof technique:** direct.

**Goal:** Establish the finite simplicial arrangement and the stated categorical and topological consequences.

1.1 By [F6], the root set is the image of the finite set $W\times S$ under $(w,s)\mapsto w\alpha_s$, so it is finite. Thus the distinct nontrivial traces of its root hyperplanes form a finite collection of linear hyperplanes in $\Theta_J$, all containing zero. By [F1], the relative cone interior is $\Theta_J$, so this is the entire relative arrangement. Let $C$ be one of its chambers. By [F2], $C=xC_I$. As a chamber of the complement of finitely many hyperplanes in $\Theta_J$, $C$ is a nonempty open subset of $\Theta_J$, so its linear span is $\Theta_J$. By [F3], its span is also $xE_I$. Hence $xE_I=\Theta_J$, and the restriction of $x$ maps the open positive orthant $C_I\subseteq E_I$ linearly and bijectively onto $C$. This includes the zero-dimensional case, where the orthant is the singleton $\{0\}$. Thus every chamber is simplicial. [F1, F2, F3, F6]

2.1 Apply [F4] to the finite central simplicial arrangement established in step 1.1. By [F5], its positive gallery category and completion are precisely $\mathcal D^+(J)$ and $\mathcal D(J)$, while [F1] identifies its complexified complement with $\mathcal X_J^{\mathbb C}$. This gives the finite-type atomic categorical Garside structure and the isomorphism with the fundamental groupoid on chamber basepoints. For the same arrangement, [F8] additionally supplies the equivalence with the all-points fundamental groupoid of [F7], including explicit quasi-inverse data. Thus the topological conclusion concerns all points, without inferring a quasi-inverse merely from essential surjectivity or choosing an arbitrary family of paths. The zero-dimensional arrangement is included: it has one chamber and its complement is a point. All asserted conclusions follow. [F1, F4, F5, F7, F8, step 1.1] ∎

## Source notes

The article reference attributes the retained claim. The proof uses the listed independent prerequisite results and the displayed local deductions.
