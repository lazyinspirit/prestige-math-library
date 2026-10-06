---
id: cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy
kind: corollary
title: "Compatible tubular neighbourhoods agree near compact sets up to ambient isotopy"
status: draft
origin: session
dependency_level: 10
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-isotopy-extension,
       thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary,
       prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section,
       thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold,
       def-tubular-neighbourhood-of-an-embedded-submanifold,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-countable-choice,
       def-compact-space,
       def-smooth-embedding,
       lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010), complete 14-page document: statement and applications of the isotopy extension theorem, uniqueness of tubular and collar neighbourhoods, and the knotted-line counterexample to ambient extension"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $N$ be a smooth manifold without boundary, let $S\subseteq N$ be a closed embedded submanifold, let $\nu(S)$ be its normal bundle ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]), and let $\Phi_1,\Phi_2:\Omega\to N$ be two tubular neighbourhood embeddings of the same open disc bundle $\Omega=D(\nu(S))$ whose restrictions to the zero section are the inclusion of $S$ ([[def-tubular-neighbourhood-of-an-embedded-submanifold]]). Assume that $d\Phi_1$ and $d\Phi_2$ induce the same isomorphism from each vertical fibre $\nu(S)_p$ to the ambient normal quotient $T_pN/T_pS$. (The usual normalization makes both induced maps the identity; merely fixing the zero section is insufficient.) Then, after shrinking $\Omega$ around the zero section, the two embeddings are isotopic through tubular neighbourhood embeddings fixing $S$ pointwise. Consequently, for every compact $A\subseteq S$ there is an ambient isotopy $H_t$ of $N$ with $H_0=\mathrm{id}_N$, compact support, $H_t\circ\Phi_1=\Phi_t$ on a neighbourhood of $A$ for every $t$ (in particular $H_1\circ\Phi_1=\Phi_2$ there), and $H_t$ fixing a neighbourhood of $A$ in $S$ pointwise; when $S$ is compact one may take $A=S$ and obtain the agreement on a neighbourhood of all of $S$, with support in any prescribed neighbourhood of $\Phi_1(\Omega)\cup\Phi_2(\Omega)$.

## Facts & Assumptions

**Given:** Countable choice, a boundaryless $N$, a closed embedded submanifold $S\subseteq N$ with normal bundle $\nu(S)$, and two tubular neighbourhood embeddings $\Phi_1,\Phi_2$ of the same open disc bundle, both restricting to the inclusion on the zero section and inducing the same vertical-fibre identification with the ambient normal quotient.

[F1] A tubular neighbourhood consists of an open neighbourhood $\Omega$ of the zero section and a smooth embedding $\Phi:\Omega\to N$ that is a diffeomorphism onto an open neighbourhood of $S$ and restricts to the inclusion on the zero section ([[def-tubular-neighbourhood-of-an-embedded-submanifold]], [[def-smooth-embedding]]).

[L1] Two tubular neighbourhoods of the same closed embedded submanifold built on the same normal bundle agree after shrinking: there is a diffeomorphism $\Psi:\Omega_1'\to\Omega_2'$ between neighbourhoods of the zero section with $\Phi_2\circ\Psi=\Phi_1$, and $\Psi$ restricts to the identity on the zero section ([[prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section]]).

[L2] Under $\mathrm{AC}_\omega$ the relative form of the isotopy extension theorem applies to an isotopy of an open subset of a boundaryless manifold whose track image is open: for every compact set there is a compactly supported ambient isotopy agreeing with the isotopy on a neighbourhood of that compact set ([[thm-isotopy-extension]], clause 2). [F1]

[L3] The normal bundle is a smooth vector bundle. Its fibre dilations $\delta_t(p,v)=(p,tv)$ are smooth and are diffeomorphisms for $t>0$; in a local bundle chart, smoothness of the total-space maps is ordinary smoothness of their coordinate functions ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[L5] Under $\mathrm{AC}_\omega$ a smooth partition of unity subordinate to an open cover exists; it permits a positive smooth radius subordinate to locally valid shrinking bounds ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[A1] Countable choice is inherited from the extension theorem and the tubular-neighbourhood theorem; the local shrinking bounds are patched with smooth partitions of unity ([[def-countable-choice]], [[def-compact-space]]).

[L4] A compact subset $A$ of the manifold $S$ is a closed subset of $N$; a closed set inside an open set admits a smooth cutoff equal to $1$ near the closed set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after restricting their domains near the zero section the two tubular maps have a transition diffeomorphism $\Psi=\Phi_2^{-1}\circ\Phi_1$ fixing that section, with $\Phi_2\circ\Psi=\Phi_1$. Its differential is the identity on the zero-section tangent space and induces the identity on the vertical normal quotient: the latter follows by composing the equal normal identifications of $d\Phi_1$ and $d\Phi_2$. There is no claim that $\Psi$ maps a chosen disc bundle onto itself. [F1, L1, given]

1.2 For $t>0$ define $\Psi_t=\delta_{1/t}\circ\Psi\circ\delta_t$ wherever defined. In a bundle chart write $\Psi(x,v)=(b(x,v),w(x,v))$, where the second coordinate is in the fibre over $b(x,v)$. Fixing the zero section gives $b(x,0)=x$ and $w(x,0)=0$, and the normal derivative condition gives $D_vw(x,0)=I$. In these charts the conjugation is $(b(x,tv),w(x,tv)/t)$. The identity
$$\frac{w(x,tv)}t=\int_0^1 D_vw(x,utv)v\,du$$
extends smoothly to $t=0$, with value $v$; the base component extends to $x$. Thus $\Psi_0=\mathrm{id}$ and the family is smooth up to $t=0$. Applying the same calculation to $\Psi^{-1}$ gives a smooth inverse family near the zero section. These extensions agree on overlaps, since the positive-time formulas are intrinsic and equality extends to zero by continuity. Every $\Psi_t$ fixes the zero section. [L3, step 1.1, construct, algebra]

2.1 Shrink to a common open disc neighbourhood $\Omega'$ on which these families are defined and $\Psi_t(\Omega')$ lies in the domain of $\Phi_2$ for all $0\le t\le1$. Such a neighbourhood exists locally over every point of $S$: the maps and inverse maps in step 1.2 are defined on open neighbourhoods of the zero section times the compact parameter interval, so finitely many parameter neighbourhoods give one local fibre-radius bound. Refine the resulting base cover and use [L5] to take a positive smooth radius below the local bounds, shrinking the original disc radii as well. For each positive $t$, $\Psi_t$ is injective on its domain since it is a conjugate of a diffeomorphism; at $t=0$ it is the identity. Its smooth inverse in step 1.2 makes each restriction an open embedding. Put $\Phi_s=\Phi_2\circ\Psi_{1-s}$ on $\Omega'$. Then $\Phi_0=\Phi_1$, $\Phi_1=\Phi_2$, and each $\Phi_s$ is a tubular neighbourhood embedding fixing $S$ pointwise. The level-preserving track map is an open embedding: its slice differential is invertible, its time component is the identity, and the inverse is smooth by the inverse family. [F1, L3, L5, A1, step 1.1, step 1.2, construct]

3.1 Let $U=\Phi_1(\Omega')\subseteq N$ and define $J_s=\Phi_s\circ\Phi_1^{-1}:U\to N$. This is a smooth isotopy of the ambient open set $U$ with open track image, and $J_0$ is the inclusion. For a compact $A\subseteq S\subseteq U$, apply [L2] to obtain a compactly supported ambient isotopy $H$ agreeing with $J_s$ on a neighbourhood of $A$. Hence $H_s\circ\Phi_1=\Phi_s$ near $A$ in the normal bundle, and $H_1\circ\Phi_1=\Phi_2$ there. Since every $\Phi_s$ fixes the zero section, $H_s$ fixes a neighbourhood of $A$ in $S$ pointwise. [F1, L2, step 2.1, construct]

4.1 When $S$ is compact, take $A=S$. Its zero-section track is $S\times I$, which is compact; no compactness of the entire open tubular domain is needed. Every point of this compact track lies in any prescribed open neighbourhood $W$ of $\Phi_1(\Omega)\cup\Phi_2(\Omega)$ times $I$. By [L4] choose the relatively compact cutoff for the open-track velocity construction of [L2] inside $W\times I$. The resulting flow is supported in a compact subset of $W$ and has the same agreement near all of $S$. This proves all conclusions with the stated normal-identification hypothesis. [L2, L4, step 3.1, construct] ∎
