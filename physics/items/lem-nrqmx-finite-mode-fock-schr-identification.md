---
id: lem-nrqmx-finite-mode-fock-schr-identification
kind: lemma
domain: mathematics
title: Finite-mode Fock to Schrödinger identification
status: published
origin: pipeline
dependency_level: 0
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-creation-contraction-bounds, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-nrqm-oscillator-hermite-recurrence, lem-nrqm-oscillator-closed-ladder-domains, def-countable-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-creation-contraction-bounds: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Phan Thành Nam, Mathematical Quantum Mechanics II, Chapter 5 §§5.1–5.2, pp. 114–124"
      url: "https://www.math.lmu.de/~nam/LectureNotesMQM2020.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, §8.3, pp. 177–179"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume Countable Choice. Let $r\ge1$, fix a positive real action-scale parameter
$\hbar>0$, and let $H=\mathbb C^r$ with orthonormal basis
$e_1,\ldots,e_r$, and let $\mathcal F_s(H)=\bigoplus_{n\ge0}H^{\otimes_s n}$
be the bosonic Fock space with vacuum $\Omega$ and creation and annihilation
operators $a_j^*,a_j$ from
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] and
[[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]. For
$N=(n_1,\ldots,n_r)\in\mathbb N_0^r$, set
$$|N\rangle:=\prod_{j=1}^r\frac{(a_j^*)^{n_j}}{\sqrt{n_j!}}\Omega.$$
Let $g_N(x)=\prod_{j=1}^r g_{n_j}(x_j)$ be the normalized product Hermite
function from [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]].
Then $(|N\rangle)_N$ and $(g_N)_N$ are complete orthonormal families, and the
map $\mathcal U|N\rangle=g_N$ extends uniquely to a unitary
$$\mathcal U:\mathcal F_s(\mathbb C^r)\longrightarrow L^2(\mathbb R^r).$$
On the algebraic finite-particle span, $\mathcal U a_j\mathcal U^{-1}$ and
$\mathcal U a_j^*\mathcal U^{-1}$ are respectively
$(x_j+\partial_{x_j})/\sqrt2$ and $(x_j-\partial_{x_j})/\sqrt2$ on product
Hermite functions. In particular the quadratures
$$Q_j=\sqrt{\hbar/2}(a_j+a_j^*),\qquad P_j=-i\sqrt{\hbar/2}(a_j-a_j^*)$$
act there as multiplication by $\sqrt\hbar x_j$ and as
$-i\sqrt\hbar\,\partial_{x_j}$, respectively. These are core identities;
they do not assert that a finite number cutoff preserves the canonical
commutation relations.

## Facts & Assumptions

**Given:** Countable Choice, an integer $r\ge1$, a positive real action-scale
parameter $\hbar>0$, $H=\mathbb C^r$, its specified orthonormal basis, and the
Fock and product Hermite constructions above.

[A1] Countable Choice is the explicit set-theoretic hypothesis used for the
countable Hilbert direct sum and completeness arguments
([[def-countable-choice]]).

[F1] The Fock direct sum is a Hilbert space, its finite-particle subspace is
dense, and its $n$th sector is the completed symmetric tensor power
([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F2] On finite-particle vectors, creation and annihilation satisfy the
canonical commutation relations and the adjoint identity; in a fixed
orthonormal basis, $a_j|N\rangle=\sqrt{n_j}|N-e_j\rangle$ and
$a_j^*|N\rangle=\sqrt{n_j+1}|N+e_j\rangle$, with a zero term when $n_j=0$
([[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

[F3] The product Hermite functions $g_N$ form a complete orthonormal family in
$L^2(\mathbb R^r)$, and the one-coordinate Hermite recurrence is
$xg_n=(\sqrt{n+1}g_{n+1}+\sqrt n g_{n-1})/\sqrt2$ and
$g_n'=(\sqrt n g_{n-1}-\sqrt{n+1}g_{n+1})/\sqrt2$
([[thm-nrqm-oscillator-multidimensional-oscillator-completeness]],
[[thm-nrqm-oscillator-hermite-recurrence]]).

[F4] A linear combination of the normalized symmetrizations of the elementary
tensors in $e_1,\ldots,e_r$ is dense in every symmetric tensor sector; the
orthogonal symmetrizations with occupation multiplicities $N$,
$\sum_jn_j=n$, have squared norm $\prod_j n_j!/n!$
([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]],
[[lem-nrqm-fock-and-equilibrium-creation-contraction-bounds]]).

## Proof

1.1 For fixed $n$, the symmetric tensors are the range of the averaging
projection on $(\mathbb C^r)^{\otimes n}$. The elementary tensors in the basis
$e_1,\ldots,e_r$ span the tensor power, so their averages span that range.
Two such averages with different occupation vectors are orthogonal, because
at least one tensor slot has orthogonal basis vectors in every paired term.
For occupation vector $N$ the squared norm of the averaged tensor is
$\prod_jn_j!/n!$ by counting the $\prod_jn_j!$ permutations that preserve the
ordered occupation word among $n!$ permutations. Multiplying by
$\sqrt{n!/\prod_jn_j!}$ normalizes it. The CCR in [F2], applied successively
to the vacuum, show that this normalized vector is exactly $|N\rangle$;
therefore the vectors $|N\rangle$ are an orthonormal basis of each sector.
The sector direct sum in [F1] makes their union a complete orthonormal family
of Fock space. [given, A1, F1, F2, F4, algebra]

2.1 The target family $(g_N)$ is complete orthonormal by [F3]. Hence the
linear map $|N\rangle\mapsto g_N$ preserves norms on finite linear
combinations, extends by completion to an isometry on Fock space, and is
surjective because its range contains the complete family $(g_N)$ and is
closed. Uniqueness follows from density of the finite span. [F1, F3, step 1.1,
algebra]

3.1 On a basis vector $|N\rangle$, the ladder formulas [F2] and Hermite
recurrences [F3] give
$$\mathcal U a_j\mathcal U^{-1}g_N=\sqrt{n_j}g_{N-e_j} =\frac{x_j+\partial_{x_j}}{\sqrt2}g_N,$$
and
$$\mathcal U a_j^*\mathcal U^{-1}g_N=\sqrt{n_j+1}g_{N+e_j} =\frac{x_j-\partial_{x_j}}{\sqrt2}g_N.$$
Linearity proves these identities on the finite span. Adding and subtracting
the two identities gives the displayed $Q_j,P_j$ formulas there. The formulas
are only asserted on this core, where all terms are defined. [F2, F3,
step 2.1, algebra] ∎
