---
id: thm-gts-hms-for-log-cy-surfaces-with-maximal-boundary
kind: theorem
title: HMS for log CY surfaces with maximal boundary
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 13
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-landauginzburg-pair-and-distinct-categories
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
  - def-gts-log-hms-surface-data
  - def-gts-weinstein-lefschetz-fibration-interface
  - def-gts-directed-and-wrapped-fukaya-interface
  - lem-gts-fully-faithful-split-generator-implies-equivalence
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-landauginzburg-pair-and-distinct-categories: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
  def-gts-log-hms-surface-data: mathematical-premise
  def-gts-weinstein-lefschetz-fibration-interface: mathematical-premise
  def-gts-directed-and-wrapped-fukaya-interface: mathematical-premise
  lem-gts-fully-faithful-split-generator-implies-equivalence: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Hacking and Ailsa Keating, Homological Mirror Symmetry for Log Calabi–Yau Surfaces
      url: https://arxiv.org/pdf/2005.05010v3
      locator: Theorem 1.1 (Theorems 4.7 and 4.9), Definition 2.1, §§2.2–4
    - title: Denis Auroux, Mirror Symmetry, Lecture 18
      url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
      locator: complete lecture notes, A-infinity and derived Fukaya category conventions; background only
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Let $(Y,D)$ be a log HMS surface datum: $Y$ is a smooth rational projective surface over $\mathbb C$, $D\in|-K_Y|$ is a maximal nodal boundary, and the distinguished complex structure and toric model are fixed. Hacking–Keating’s Theorem 1.1 (Theorems 4.7 and 4.9) constructs a Weinstein four-manifold $M$ and a Lefschetz fibration $w:M\to\mathbb C$ and gives the source’s directed and wrapped category comparisons

$$D^b\mathcal F_{\to}(w)\simeq D^b\operatorname{Coh}(Y),\qquad D^b\mathcal W(M)\simeq D^b\operatorname{Coh}(Y\setminus D).$$

The statement is for this smooth rational surface setup and is not a theorem for arbitrary log pairs, compact Calabi–Yau pairs or higher dimensions.

## Facts & Assumptions

**Given:** Fix a surface datum, its chosen toric model and the source’s categorical and coefficient conventions.

[F1] The log-pair supplier defines the projective log-Calabi–Yau condition $K_Y(D)\cong\mathcal O_Y$ and treats degeneration/scattering data as additional inputs ([[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]).

[F2] The distinguished complex structure and chosen toric model are additional data ([[def-gts-log-hms-surface-data]]).

[F3] A Landau–Ginzburg pair does not itself construct its Fukaya–Seidel category ([[def-gts-landauginzburg-pair-and-distinct-categories]]).

[F4] The dg supplier treats category enhancements and perfect modules as specified data ([[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]).

[F5] The general multi-object compact Fukaya construction remains incomplete in its carrier ([[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]).

[F6] A Weinstein Lefschetz datum separates the abstract fibre/cycles from the geometric realization ([[def-gts-weinstein-lefschetz-fibration-interface]]).

[F7] Directed and wrapped categories require separate operation, completion and analytic data ([[def-gts-directed-and-wrapped-fukaya-interface]]).

[F8] The split-generation lemma reduces exact fully faithful comparisons with thickly generating images to equivalences ([[lem-gts-fully-faithful-split-generator-implies-equivalence]]).

[A1] The source construction supplies a geometric realization $(M,\lambda,w)$ for the chosen log surface, with the asserted Weinstein and Lefschetz properties.

[A2] The directed source category and comparison functor are constructed with coherent operations and satisfy exact full faithfulness and thick generation of $D^b\operatorname{Coh}(Y)$.

[A3] The wrapped category and comparison functor are constructed with the required completion, continuation and localization data and satisfy exact full faithfulness and thick generation of $D^b\operatorname{Coh}(Y\setminus D)$.

## Proof

1.1 The surface and distinguished-structure hypotheses are exactly [F1, F2]. [F3, F4, F5, F6, F7] fix the intended category interfaces but do not construct the source-specific fibration or either comparison; those constructions remain unproved locally. [given, F1, F2, F3, F4, F5, F6, F7]

1.2 Under [A1]–[A2], the directed comparison is an exact fully faithful functor with thickly generating image between the stated split-complete categories. By [F8] it is an equivalence with $D^b\operatorname{Coh}(Y)$. [A1, A2, F8]

2.1 Under [A1] and [A3], the wrapped comparison has the same formal hypotheses, now with target $D^b\operatorname{Coh}(Y\setminus D)$. A second application of [F8] gives the wrapped equivalence. [A1, A3, F8] ∎

## Unresolved proof status

The source proof depends on the punctured-elliptic-fibre equivalence, Lefschetz/Fukaya constructions and wrapped localization; those arguments are not reconstructed here. [A1]–[A3] remain unproved and the multi-object input [F5] is escalated.

