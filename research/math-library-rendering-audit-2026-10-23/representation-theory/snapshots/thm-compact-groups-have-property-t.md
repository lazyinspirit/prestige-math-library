---
status: published
id: thm-compact-groups-have-property-t
kind: theorem
title: Compact groups have property (T) by Haar averaging
deps:
  - cor-inner-product-induces-a-norm
  - cor-normalized-haar-probability-on-a-compact-group
  - def-almost-invariant-vectors-for-a-unitary-representation
  - def-axiom-of-choice
  - def-banach-valued-simple-function-and-integral
  - def-bochner-integrable-function
  - def-borel-sigma-algebra
  - def-bounded-linear-operator
  - def-compact-space
  - def-continuous-map-top
  - def-hausdorff-space
  - def-hilbert-space
  - def-integral-of-a-nonnegative-simple-function
  - def-kazhdan-pair-and-kazhdan-constant
  - def-kazhdans-property-t
  - def-measure
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-strongly-continuous-unitary-representation
  - def-strongly-measurable-banach-valued-function
  - def-topological-group
  - lem-banach-valued-simple-integral-is-well-defined
  - lem-finite-choice
  - lem-topological-group-translations-and-inversion
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-bochner-integrability-criterion
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-compactness-under-continuous-maps
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It is used for the normalized Haar probability and to choose, for each n, a finite subcover together with sample points, forming a sequence of Bochner simple approximants. Compactness gives each finite subcover and finite choice supplies its sample points. The averaging and invariance arguments make no further choice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, Proposition 1.1.5 and complete proof, printed pp. 34–35/PDF pp. 40–41. The source proves the stronger (G,√2) pair by a minimal-norm vector in a closed convex hull; this item proves the compact-group Haar-average bound locally."
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Lecture 2, §II, third bullet after Definition 0.5, printed p. 4/PDF p. 11: finite-group averaging; supplementary context, not a proof of the compact-group Haar-average statement."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-compact-space]], [[def-hausdorff-space]],
[[def-topological-group]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). Then $(K,\varepsilon)$
is a Kazhdan pair for every $0<\varepsilon\le1$
([[def-kazhdan-pair-and-kazhdan-constant]]); in particular, $K$ is a Kazhdan
set and has property (T) ([[def-kazhdans-property-t]]).

Explicitly, if $(\pi,H)$ is a strongly continuous unitary representation and
$\xi\in H$ is a unit vector with
$$\sup_{x\in K}\lVert\pi(x)\xi-\xi\rVert<1,$$
then the Bochner average
$$\eta:=\int_K\pi(x)\xi\,d\mu(x)$$
([[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]])
is a nonzero $K$-invariant vector and
$$\lVert\eta-\xi\rVert\le\sup_{x\in K}\lVert\pi(x)\xi-\xi\rVert.$$

## Facts & Assumptions

**Given:** AC; a compact Hausdorff topological group $K$; its normalized left Haar probability measure $\mu$; a strongly continuous unitary representation $\pi$ on a Hilbert space $H$; and, for the explicit estimate, a unit vector $\xi\in H$.

[F1] The measure $\mu$ is left invariant and has $\mu(K)=1$; its existence and normalization for compact Hausdorff groups are supplied under AC. ([[cor-normalized-haar-probability-on-a-compact-group]], [[def-axiom-of-choice]], [[def-measure]])

[F2] The orbit map $f(x)=\pi(x)\xi$ is continuous, and each $\pi(h)$ is a bounded linear isometry. ([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]], [[def-bounded-linear-operator]])

[F3] A compact space has a finite subcover for each open cover; a continuous real-valued function on a compact nonempty space attains its maximum; the Hilbert norm is continuous. ([[def-compact-space]], [[thm-compactness-under-continuous-maps]], [[def-continuous-map-top]], [[cor-inner-product-induces-a-norm]])

[F4] Finite Borel partitions define measurable Banach-valued simple functions. The nonnegative integral of the constant simple function $1$ on $K$ equals $\mu(K)$, since the nonnegative integral agrees with the simple integral. A strongly measurable function with integrable norm is Bochner integrable, and its integral is the norm limit of the integrals of any defining simple approximants. ([[def-borel-sigma-algebra]], [[def-banach-valued-simple-function-and-integral]], [[def-strongly-measurable-banach-valued-function]], [[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[def-nonnegative-lebesgue-integral]], [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F5] A Bochner integral is the norm limit of integrals of its defining simple approximants; the simple integral is the corresponding finite sum, and bounded linear maps commute with Bochner integration. ([[def-bochner-integrable-function]], [[lem-banach-valued-simple-integral-is-well-defined]], [[thm-bounded-linear-maps-commute-with-bochner-integration]])

[F6] Left translations in $K$ are homeomorphisms, so they carry Borel sets to Borel sets; the left Haar probability satisfies $\mu(h^{-1}E)=\mu(E)$ for every Borel $E\subseteq K$. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[cor-normalized-haar-probability-on-a-compact-group]])

[F7] A pair $(K,\varepsilon)$ is Kazhdan when every strongly continuous unitary representation with a $(K,\varepsilon)$-invariant unit vector has a nonzero invariant vector; property (T) tests all representations with almost invariant vectors. ([[def-kazhdan-pair-and-kazhdan-constant]], [[def-kazhdans-property-t]], [[def-almost-invariant-vectors-for-a-unitary-representation]])

[F8] AC is the principle that every set-indexed family of nonempty sets has a choice function; it supplies the Haar probability in [F1] and the sequence of finite-cover/sample-point tuples below. Finite choice itself is available in ZF. ([[def-axiom-of-choice]], [[lem-finite-choice]])

## Proof

**Proof technique:** Approximate the continuous orbit map uniformly by finite-valued Borel maps, integrate it in the Bochner sense, and use left invariance of Haar measure.

1.1 Fix a strongly continuous unitary representation $\pi$ and a unit vector $\xi$, and put $f(x)=\pi(x)\xi$. For each integer $n\ge1$, let $\mathcal U_n$ be the set of open subsets $U\subseteq K$ on which $\lVert f(y)-f(z)\rVert<1/n$ for all $y,z\in U$. Continuity makes $\mathcal U_n$ an open cover. Compactness gives a finite subcover; discard empty members, and finite choice supplies one sample point $x_j$ in each remaining member $U_j$. AC chooses such a finite subcover and its sample points for every $n$. Set $E_1=U_1$ and $E_j=U_j\setminus\bigcup_{r<j}U_r$; these are a finite Borel partition of $K$. The simple function $s_n=\sum_j f(x_j)\mathbf1_{E_j}$ satisfies $\sup_{x\in K}\lVert f(x)-s_n(x)\rVert\le1/n$. Thus $f$ is strongly measurable; since $\lVert f(x)\rVert=1$ and $\mu(K)=1$, [F4] makes it Bochner integrable. [F1, F2, F3, F4, F8, construct, choose]

2.1 Define $\eta=\int_K f\,d\mu$. The displacement $d(x)=\lVert f(x)-\xi\rVert$ is continuous, so [F3] gives a maximum $M=\sup_{x\in K}d(x)$. For each simple approximant $s_n=\sum_j f(x_j)\mathbf1_{E_j}$ from step 1.1, [F5] and $\mu(K)=1$ give $\lVert\int_Ks_n\,d\mu-\xi\rVert=\lVert\sum_j\mu(E_j)(f(x_j)-\xi)\rVert\le\sum_j\mu(E_j)d(x_j)\le M\sum_j\mu(E_j)=M$. Passing to the Bochner-integral limit yields $\lVert\eta-\xi\rVert\le M$. If $\xi$ is $(K,\varepsilon)$-invariant, then $d(x)<\varepsilon$ for every $x$; since the maximum is attained, $M<\varepsilon$. If instead the explicit hypothesis $\sup_Kd<1$ holds, the same bound gives $\lVert\eta-\xi\rVert<1$, hence $\eta\ne0$. [F1, F3, F5, step 1.1, algebra]

2.2 For each $h\in K$, bounded linearity of $\pi(h)$ and [F5] give $\pi(h)\eta=\int_K\pi(h)f(x)\,d\mu(x)=\int_Kf(hx)\,d\mu(x)$. To see the last integral equals $\eta$, use the simple approximants from step 1.1: if $s_n=\sum_jv_j\mathbf1_{E_j}$, then $s_n(hx)=\sum_jv_j\mathbf1_{h^{-1}E_j}(x)$, and [F5]–[F6] give $\int_Ks_n(hx)\,d\mu=\sum_j\mu(h^{-1}E_j)v_j=\sum_j\mu(E_j)v_j=\int_Ks_n(x)\,d\mu$. The functions $s_n(h\cdot)$ are simple and converge uniformly to $f(h\cdot)$, whose norm is constantly one, so [F4] makes $f(h\cdot)$ Bochner integrable and [F5] makes these integrals converge to $\int_K f(hx)\,d\mu(x)$. The original simple integrals converge to $\eta$. Therefore $\pi(h)\eta=\eta$ for every $h\in K$. [F1, F4, F5, F6, step 1.1]

3.1 If $0<\varepsilon\le1$ and $\xi$ is a $(K,\varepsilon)$-invariant unit vector, step 2.1 gives $\lVert\eta-\xi\rVert\le M<\varepsilon\le1$, so $\eta\ne0$; step 2.2 makes it invariant. Thus $(K,\varepsilon)$ is a Kazhdan pair for every such $\varepsilon$. A representation on the zero Hilbert space has no unit vector and satisfies the pair implication vacuously. [F7, step 2.1, step 2.2]

4.1 Taking $\varepsilon=1$ shows that the compact set $K$ is a Kazhdan set. If a strongly continuous representation of $K$ has almost invariant vectors, its almost invariance supplies a $(K,1)$-invariant unit vector; step 3.1 gives a nonzero invariant vector. Hence $K$ has property (T), and the explicit average estimate and invariance were proved in steps 2.1–2.2. AC is used for the normalized Haar probability and the sequence of finite simple approximants; no further Choice use occurs. [F1, F7, F8, step 2.1, step 2.2, step 3.1] ∎
