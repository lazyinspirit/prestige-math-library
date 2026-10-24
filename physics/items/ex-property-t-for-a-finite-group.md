---
id: ex-property-t-for-a-finite-group
kind: example
title: Property (T) for finite groups via normalized counting measure
status: published
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - cor-normalized-haar-probability-on-a-compact-group
  - def-axiom-of-choice
  - def-borel-sigma-algebra
  - def-compact-space
  - def-continuous-map-top
  - def-countable
  - def-countable-choice
  - def-counting-measure
  - def-group
  - def-hausdorff-space
  - def-hilbert-orthogonal-projection
  - def-hilbert-space
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-left-haar-integral-and-left-haar-measure
  - def-linear-subspace
  - def-locally-compact-space
  - def-measure
  - def-metric-ball
  - def-metric-space
  - def-metric-topology
  - def-orthogonality-and-orthogonal-complement
  - def-product-topology
  - def-radon-measure-on-an-lch-space
  - def-real-and-complex-inner-product-space
  - def-standard-topologies
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - def-topological-space
  - lem-finite-sum-reindexing-and-fubini
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - lem-reverse-triangle-inequality-in-a-normed-space
  - prop-counting-measure-is-a-measure
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-compact-groups-have-property-t
  - thm-complex-numbers-form-a-field
  - thm-jordan-von-neumann-polarization
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-reals-ordered-field
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It supplies normalized Haar probability and the compact-group Kazhdan-pair theorem; AC also implies Countable Choice for the Hilbert projection interface. The finite counting-measure and finite-sum computations themselves use no choice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T), Cambridge University Press 2008; author-hosted complete text"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Proposition 1.1.5 and complete proof, printed pp. 34–35/PDF pp. 40–41: compact groups have property (T); the proof uses a closed-convex-hull argument, while the finite average is verified locally here."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, third bullet after Definition 0.5, printed p. 4/PDF p. 11: finite groups have property (T) by averaging an almost-invariant unit vector; the counting measure and projection computations are supplied locally."
---

## Example

Assume the Axiom of Choice. Let $\Gamma$ be a finite group
([[def-group]]) with the discrete topology ([[def-standard-topologies]]) and let
$m:=|\Gamma|$. Its normalized counting measure $\mu(A):=|A|/m$
([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]) is its Haar
probability measure ([[cor-normalized-haar-probability-on-a-compact-group]]).
Every $(\Gamma,\varepsilon)$ is a Kazhdan pair
([[def-kazhdan-pair-and-kazhdan-constant]]) for $0<\varepsilon\le1$, so
$\Gamma$ has property (T) ([[def-kazhdans-property-t]]). For every strongly
continuous unitary representation ([[def-strongly-continuous-unitary-representation]])
$\pi$ on a Hilbert space $H$ ([[def-hilbert-space]]), the finite average
$$P\xi:=\frac1m\sum_{g\in\Gamma}\pi(g)\xi$$
is the orthogonal projection ([[def-hilbert-orthogonal-projection]]) onto the
closed linear subspace ([[def-linear-subspace]])
$$H^\Gamma:=\{\zeta\in H:\pi(g)\zeta=\zeta\text{ for every }g\in\Gamma\},$$
and in particular $\|P\xi\|\le\|\xi\|$.

## Verification

**Given:** AC, a finite group $\Gamma$ with its discrete topology, and a strongly
continuous unitary representation $\pi$ on a complex Hilbert space $H$.

[F1] A finite discrete group is a compact Hausdorff locally compact topological
group. ([[def-group]], [[def-standard-topologies]],
[[def-topological-space]], [[def-product-topology]], [[def-topological-group]],
[[def-compact-space]], [[def-hausdorff-space]], [[def-locally-compact-space]])

[F11] Every subset of the discrete group is Borel, and its identity shows that
it is nonempty and $m=|\Gamma|\ge1$. ([[def-borel-sigma-algebra]],
[[def-countable]])

[F2] Counting measure is a measure on the full power set. Every subset of the
finite discrete space is open and compact, and left translation is a bijection;
these facts verify the regularity and invariance conditions in the definitions
of Radon and left Haar measure. ([[def-counting-measure]],
[[prop-counting-measure-is-a-measure]], [[def-measure]],
[[def-radon-measure-on-an-lch-space]],
[[def-left-haar-integral-and-left-haar-measure]])

[F3] Under AC, a compact Hausdorff group has a unique normalized Haar
probability. ([[def-axiom-of-choice]],
[[cor-normalized-haar-probability-on-a-compact-group]])

[F4] Under AC, a compact Hausdorff group with normalized Haar probability has
every $(K,\varepsilon)$ as a Kazhdan pair for $0<\varepsilon\le1$ and has
property (T). ([[thm-compact-groups-have-property-t]],
[[def-kazhdan-pair-and-kazhdan-constant]], [[def-kazhdans-property-t]])

[F5] Each $\pi(g)$ is complex-linear and isometric, and the fixed vectors form
a linear subspace. ([[def-strongly-continuous-unitary-representation]],
[[def-hilbert-space]], [[def-linear-subspace]])

[F6] The Hilbert inner product is linear in its first argument and
conjugate-linear in its second. The complex inner product is recovered from
the norm by the polarization
identity, so every complex-linear norm isometry preserves inner products.
([[def-real-and-complex-inner-product-space]],
[[thm-jordan-von-neumann-polarization]])

[F7] A continuous map has closed preimages of closed sets. The singleton
$\{0\}$ is closed in the norm metric: for $\xi\ne0$, the ball of radius
$\|\xi\|/2$ around $\xi$ misses $0$ by the reverse triangle inequality.
([[def-continuous-map-top]], [[def-metric-space]], [[def-metric-ball]],
[[def-metric-topology]], [[cor-inner-product-induces-a-norm]],
[[lem-reverse-triangle-inequality-in-a-normed-space]], [[def-hilbert-space]])

[F8] Since $m$ is a positive natural, $1/m$ is a well-defined positive real
and complex scalar. ([[thm-reals-ordered-field]],
[[thm-complex-numbers-form-a-field]])

[F9] Under Countable Choice, the orthogonal projection onto a closed linear
subspace of a Hilbert space is characterized by its component in that subspace
and its orthogonal residual, and it is contractive. AC implies Countable Choice.
([[def-countable-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-linear-subspace]], [[def-orthogonality-and-orthogonal-complement]],
[[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[def-hilbert-orthogonal-projection]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]])

[F10] Finite vector sums are unchanged under bijective reindexing; the maps
$g\mapsto hg$ and $g\mapsto g^{-1}$ are bijections of the group.
([[lem-finite-sum-reindexing-and-fubini]], [[def-group]])

**Proof technique:** Identify the normalized counting measure with Haar
probability, apply the compact-group theorem, and compute the invariant-space
projection by reindexing the finite sum.

1.1 The finite discrete space has a finite subcover for every open cover, since a choice of one covering set for each of its finitely many points gives a finite subcover; distinct points are separated by open singletons, and the compact whole group is a neighbourhood of each point. Singleton rectangles make the product topology on $\Gamma\times\Gamma$ discrete, so multiplication and inversion are continuous; hence $\Gamma$ is a compact Hausdorff locally compact topological group by [F1]. Since $m\ge1$, define $\mu(A):=|A|/m$ for $A\subseteq\Gamma$. By [F2] and positive rescaling it is a Borel measure on the discrete topology. Every subset is open and compact. If $E$ is Borel and $V$ is open with $E\subseteq V$, finite additivity gives $\mu(V)=\mu(E)+\mu(V\setminus E)\ge\mu(E)$, and the open set $V=E$ attains this lower bound; if $U$ is open and $K$ is compact with $K\subseteq U$, then $\mu(U)=\mu(K)+\mu(U\setminus K)\ge\mu(K)$, and $K=U$ attains this upper bound. Every compact set has finite measure. For each $h\in\Gamma$, left translation $g\mapsto hg$ bijects $\Gamma$ and preserves cardinality, hence $\mu(hA)=\mu(A)$, while $\mu(\Gamma)=m/m=1$. Thus $\mu$ is a normalized left Haar probability; by uniqueness it is the normalized Haar probability of [F3]. [F1, F2, F3, F8, F11, algebra]

1.2 Applying the compact-group theorem [F4] to $\Gamma$ and this $\mu$ proves that every $(\Gamma,\varepsilon)$ with $0<\varepsilon\le1$ is a Kazhdan pair and that $\Gamma$ has property (T). [F1, F4]

1.3 Let $M:=H^\Gamma$. It is a linear subspace because each $\pi(g)$ is linear. For each $g$, the map $T_g(\xi):=\pi(g)\xi-\xi$ is continuous, since $\|T_g(\xi)-T_g(\eta)\|\le2\|\xi-\eta\|$; [F7] makes $\ker T_g=T_g^{-1}(\{0\})$ closed. Therefore $M=\bigcap_{g\in\Gamma}\ker T_g$ is closed. [F5, F7, algebra]

2.1 Define $P\xi:=m^{-1}\sum_{g\in\Gamma}\pi(g)\xi$. For $h\in\Gamma$, $\pi(h)P\xi=m^{-1}\sum_g\pi(hg)\xi=P\xi$ by the bijective reindexing $g\mapsto hg$, so $P\xi\in M$. If $\zeta\in M$, then every summand in $P\zeta$ equals $\zeta$, whence $P\zeta=\zeta$. [F5, F8, F10, step 1.3, algebra]

3.1 For $\xi\in H$ and $\zeta\in M$, inner-product preservation gives $\langle\pi(g)\xi,\zeta\rangle=\langle\xi,\pi(g^{-1})\zeta\rangle=\langle\xi,\zeta\rangle$ because $\pi(g^{-1})\zeta=\zeta$. Summing yields $\langle P\xi,\zeta\rangle=\langle\xi,\zeta\rangle$, so $\xi-P\xi\in M^\perp$. Since $M$ is a closed linear subspace, [F9] identifies $P\xi$ with its Hilbert orthogonal projection component; [F9] also gives $\|P\xi\|\le\|\xi\|$. [F5, F6, F8, F9, F10, step 1.3, step 2.1, algebra] ∎

The finite counting-measure verification and finite-sum projection computation
are local. The external sources state the compact-group and finite-group
property-(T) results but do not replace these calculations.
