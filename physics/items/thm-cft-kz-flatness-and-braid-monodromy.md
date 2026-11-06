---
id: thm-cft-kz-flatness-and-braid-monodromy
kind: theorem
title: Flatness and braid monodromy of the WZW KZ connection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: mathematics
deps:
  - thm-cft-wzw-knizhnik-zamolodchikov-equations
  - def-cft-wzw-insertion-data
  - lem-cft-pairwise-casimirs-satisfy-infinitesimal-braid-relations
  - def-cft-wzw-unordered-label-fiber
  - def-braid-group-from-unordered-configurations
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent
  - thm-a-flat-connection-admits-local-parallel-frames
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
  - def-axiom-of-choice
dependency_roles:
  thm-cft-wzw-knizhnik-zamolodchikov-equations: mathematical-premise
  def-cft-wzw-insertion-data: mathematical-premise
  lem-cft-pairwise-casimirs-satisfy-infinitesimal-braid-relations: mathematical-premise
  def-cft-wzw-unordered-label-fiber: mathematical-premise
  def-braid-group-from-unordered-configurations: mathematical-premise
  thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk: mathematical-premise
  lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Etingof, Frenkel, and Kirillov, Lectures on Representation Theory and KZ Equations
      url: https://djvu.online/file/elCdJNnaapAuA
      locator: Lecture 3, §3.5, KZ flatness; Lecture 8, §8.1, local-system monodromy and label reordering.
    - title: Tsuchiya, Ueno, and Yamada, Conformal Field Theory on Universal Family of Stable Curves with Gauge Symmetries
      url: https://archive.mpim-bonn.mpg.de/id/eprint/2838/1/preprint_1989_18.pdf
      locator: §5, flat WZW connection; monodromy discussion near printed p. 96.
---

## Statement

Assume full AC. Let $V_i^*$ be the finite-dimensional contragredient top modules of def-cft-wzw-insertion-data, $\kappa=k+h^\vee$, and
$$\eta_{ij}=d\log(z_i-z_j)=\frac{dz_i-dz_j}{z_i-z_j},\qquad A=\kappa^{-1}\sum_{i<j}\Omega_{ij}^{\vee}\eta_{ij}.$$
On each ordered-label summand of def-cft-wzw-unordered-label-fiber, the connection $\nabla=d-A$ on $F_n(\mathbb C)$ is flat. Its permutation-equivariant direct sum descends to the unordered-label bundle over $C_n(\mathbb C)$, and its horizontal local system has monodromy at every base configuration $q\in C_n(\mathbb C)$ on the corresponding fiber. With the first-loop-then-second convention, parallel transport gives a right action; its inverse is the associated left representation. For identical labels this is the usual KZ monodromy on $(V_\lambda^*)^{\otimes n}$. For nonidentical labels the action is on the direct sum over label assignments, not on one fixed ordered tensor product.

Let $Q_n$ be the base configuration fixed in thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk, and let $h:\mathbb C\to\operatorname{int}D^2$ be $h(z)=z/(1+|z|)$. The induced homeomorphism $\bar h:C_n(\mathbb C)\to C_n(\operatorname{int}D^2)$ determines the base configuration $q_0:=\bar h^{-1}([Q_n])$. At $q_0$, the induced based isomorphism from $\bar h$, the open-to-closed configuration-space isomorphism of lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, and thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk identify the braid group with $\operatorname{Mod}(D^2,Q_n;\partial D^2)$. For any other base configuration $q$, such an identification requires a chosen path from $q$ to $q_0$ and is determined only up to the resulting basepoint conjugacy; no path is fixed here.

More precisely, assume a specified family $\mathcal B$ of actual sphere conformal-block fibers and an $S_n$-compatible, connection-preserving fiberwise isomorphism $\iota:\mathcal B\to\mathcal W_{\mathrm{KZ}}$ to the descended KZ bundle. Under this explicit interface, the braid action on $\mathcal W_{\mathrm{KZ}}$ transports by $\iota^{-1}(\cdot)\iota$ to a braid action on each conformal-block fiber. Establishing $\mathcal B$, $\iota$, or its local freeness is not supplied by the generic coinvariant definition.


## Statement references

[[def-cft-wzw-insertion-data]]

[[def-cft-wzw-unordered-label-fiber]]

[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]

[[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]

## Facts & Assumptions

[A1] Full AC is used through [[def-cft-wzw-insertion-data]] for the top modules and through [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]] for the based mapping-class identification.

**Given:** $n\ge2$, WZW labels at common nonnegative integer level, a configuration of distinct finite points, and the normalized KZ connection above.

[F1] [[lem-cft-pairwise-casimirs-satisfy-infinitesimal-braid-relations]]: disjoint pair operators commute and $[\Omega_{ij},\Omega_{ik}+\Omega_{jk}]=0$.

[F2] [[def-cft-wzw-unordered-label-fiber]]: the ordered-label summands and symmetric-group permutation maps define the finite bundle to be descended.

[F3] [[thm-a-flat-connection-admits-local-parallel-frames]]: a flat finite-rank connection has local parallel frames.

[F4] [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]: on a sufficiently small coordinate ball, transport depends only on endpoints.

[F5] [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]: inclusion of interior disk configurations into closed disk configurations induces a fundamental-group isomorphism.

[F6] [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]: unordered disk configuration loops identify with boundary-fixed punctured-disk mapping classes, with the stated braid convention.

[F7] [[thm-cft-wzw-knizhnik-zamolodchikov-equations]] fixes $\kappa=k+h^\vee$, the pairwise Casimir coefficient, and the KZ sign convention.

[F8] [[thm-cft-wzw-knizhnik-zamolodchikov-equations]] proves the finite top-space KZ equation conditionally and separates it from identification with the generic affine block sheaf.

[F9] [[def-braid-group-from-unordered-configurations]] fixes a configuration basepoint; its basepoint-change isomorphisms arise from chosen paths and are not canonical.

[A2] For the final conformal-block-fiber clause, assume the stated $S_n$-compatible connection-preserving isomorphism $\iota$. Its construction is an unresolved prerequisite, not a consequence of [F8].

## Proof

1.1 Each $\eta_{ij}$ is closed on $F_n(\mathbb C)$, since it is $d\log(z_i-z_j)$ away from $z_i=z_j$. Write $A=\kappa^{-1}\sum_p\Omega_p^\vee\eta_p$, with $p$ ranging over unordered pairs. Then $dA=0$ and the curvature of $d-A$ is $A\wedge A$. Terms for disjoint pairs vanish by [F1]. For each triple $i<j<k$, put $a=\eta_{ij}$, $b=\eta_{jk}$, $c=\eta_{ik}$, $P=\Omega_{ij}^\vee$, $Q=\Omega_{jk}^\vee$, $R=\Omega_{ik}^\vee$. The contribution is
$
\kappa^{-2}\bigl([P,Q]\,a\wedge b+[P,R]\,a\wedge c+[R,Q]\,c\wedge b\bigr).
$
By [F1], $[P,R]=-[P,Q]$ and $[R,Q]=-[P,Q]$. Also, with $u=z_i-z_j$, $v=z_j-z_k$, direct differentiation gives
$
a\wedge b-a\wedge c+b\wedge c
=\frac{du\wedge dv}{uv}-\frac{du\wedge dv}{u(u+v)}-\frac{du\wedge dv}{v(u+v)}=0.
$
Thus every triple contribution is zero and the curvature vanishes. [F1, F7, given, algebra]

2.1 The flat connection on the ordered cover is permutation-equivariant: a permutation reorders the tensor factors and sends each pair $(i,j)$ and form $\eta_{ij}$ to the corresponding relabeled pair and form. Hence the action in [F2] preserves $A$ and $\nabla$, and the connection descends to the quotient bundle. [F2, step 1.1, algebra]

3.1 By [F3] the horizontal sections form a local system. Parallel transport along a path is defined by solving the finite-dimensional linear ODE in local trivializations. To see its homotopy invariance, subdivide a compact path homotopy into small rectangles lying in coordinate balls from [F4]; transport around each rectangle is the identity by endpoint dependence, and transports along shared interior edges cancel in inverse pairs. Thus based-loop transport depends only on the loop class, giving the right monodromy action; with the first-loop-then-second convention, its inverse is the associated left representation. [F3, F4, step 2.1]

4.1 Put $h(z)=z/(1+|z|)$ and $q_0=\bar h^{-1}([Q_n])$, with $Q_n$ as in [F6]. The induced map $\bar h$ gives a based homeomorphism from $C_n(\mathbb C)$ at $q_0$ to $C_n(\operatorname{int}D^2)$ at $[Q_n]$. By [F5], inclusion into $C_n(D^2)$ induces a fundamental-group isomorphism at that same base configuration; [F6] then identifies this group with the boundary-fixed mapping-class group based at $Q_n$. Thus the local-system monodromy at $q_0$ is a braid-group action with exactly the basepoint used by the mapping-class theorem. At a different base configuration $q$, choose a path to $q_0$; [F9] gives the resulting basepoint isomorphism, and parallel transport identifies the fibers, so the actions are conjugate. The identification depends on the chosen path, and no path-independent isomorphism is asserted. The direct sum in [F2] retains the label-reordering rule: identical labels give one summand, while a general label list requires all assignments. [A1, F2, F5, F6, F9, step 3.1]

5.1 Under [A2], parallel transport is intertwined by $\iota$, so a loop $\gamma$ acts on the block fiber by $\iota^{-1}M_\gamma\iota$, where $M_\gamma$ is its KZ holonomy from step 4.1. Conjugating the KZ monodromy law by the same fiberwise isomorphism preserves the group law; hence the resulting braid action is well-defined on $\mathcal B$. The missing construction of [A2] remains an explicit prerequisite. [A1, A2, F8, step 4.1, algebra] ∎


