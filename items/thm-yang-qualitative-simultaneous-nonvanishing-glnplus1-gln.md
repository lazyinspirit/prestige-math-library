---
dependency_level: 10
id: thm-yang-qualitative-simultaneous-nonvanishing-glnplus1-gln
kind: theorem
title: "Yang Simultaneous Nonvanishing for GL(n+1) × GL(n)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-supplied
deps:
  - lem-gln-last-row-congruence-subgroup-index
  - thm-yang-relative-trace-formula-glnplus1-gln
  - thm-yang-level-aspect-second-moment-glnplus1-gln
  - def-simple-supercuspidal-representation-of-gln
  - thm-generic-local-gln-representation-has-congruence-newvectors
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula and L-functions for GL(n+1) × GL(n), Theorem C and Theorems 9.8–9.9, §§9.2.1–9.2.4"
      url: "https://arxiv.org/pdf/2303.02225v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Use Yang’s central-character normalization: all specified central characters are trivial on the positive real split center.

Let $F$ be a number field, $n\geq2$, $G=\mathrm{GL}_{n+1}$, and $G'=\mathrm{GL}_{n}$. Fix a unitary Hecke character $\omega$ of $F$, and let $\mathcal A_0([G],\omega)$ be the set of isomorphism classes of unitary cuspidal automorphic representations of $G(\mathbb A_F)$ with central character $\omega$. For a finite place $v$, let $\mathcal O_v$ be its ring of integers, $\mathfrak p_v$ its maximal ideal, and $e_v(\mathfrak a)$ the exponent of $\mathfrak p_v$ in a nonzero integral ideal $\mathfrak a$. Set $K_1(\mathfrak p_v^0)=\mathrm{GL}_{n}(\mathcal O_v)$; for $e\geq1$, let $K_1(\mathfrak p_v^e)$ consist of matrices in $\mathrm{GL}_{n}(\mathcal O_v)$ whose bottom row is congruent to $(0,\ldots,0,1)$ modulo $\mathfrak p_v^e$. For a generic local component $\pi'_v$, let $a_v(\pi'_v)$ be the least $e\geq0$ for which $(\pi'_v)^{K_1(\mathfrak p_v^e)}\ne0$; the local congruence-newvector theorem guarantees this exponent exists. Its arithmetic conductor is $\prod_{v<\infty}\mathfrak p_v^{a_v(\pi'_v)}$.

Let $\mathfrak N'_1,\mathfrak N'_2\subsetneq\mathcal O_F$ be nontrivial coprime integral ideals, and let $\pi'_j$ be unitary cuspidal generic automorphic representations of $G'(\mathbb A_F)$ with arithmetic conductor $\mathfrak N'_j$, for $j=1,2$. Fix a finite place $v_*$ of residue degree one over $\mathbb Q$, not dividing $\mathfrak N'_1\mathfrak N'_2$, and suppose that $(\pi'_1)_{v_*}\simeq(\pi'_2)_{v_*}$. Let $\sigma_{v_*}$ be an irreducible supercuspidal candidate of the affine-generic cyclic-normalizer construction in the preceding simple-supercuspidal definition, with central character exactly $\omega_{v_*}$.

For a finite ideal $\mathfrak a$, define $K_0(\mathfrak a)\subset\mathrm{GL}_{n+1}(\mathbb A_{F,\mathrm{fin}})$ by requiring at every finite place $v$ that $g_v\in\mathrm{GL}_{n+1}(\mathcal O_v)$, and, when $e_v(\mathfrak a)>0$, that its bottom-row entries in columns $1,\ldots,n$ lie in $\mathfrak p_v^{e_v(\mathfrak a)}$. Define $I(\mathfrak b)\subset\mathrm{GL}_{n+1}(\mathbb A_{F,\mathrm{fin}})$ by requiring $g_v\in\mathrm{GL}_{n+1}(\mathcal O_v)$ and, when $e_v(\mathfrak b)>0$, that all entries below the diagonal lie in $\mathfrak p_v^{e_v(\mathfrak b)}$. For $\mathfrak N\subsetneq\mathcal O_F$ and $\epsilon>0$, define $d_v=\max(e_v(\mathfrak N\mathfrak N'_1\mathfrak p_{v_*}^{n+2}),e_v(\mathfrak N'_2))$ and assume that the finite conductor exponent of $\omega_v$ is at most $d_v$ at every finite place. On the following compact subgroup $K^\dagger$, put $\kappa_v^\dagger(k)=\omega_v(k_{n+1,n+1})$ where $d_v>0$, and $\kappa_v^\dagger=1$ elsewhere; set $\kappa^\dagger=\prod_v\kappa_v^\dagger$. The bottom-row congruences and conductor bound make these characters well-defined. Put

$$K^\dagger=K_0(\mathfrak N\mathfrak N'_1\mathfrak p_{v_*}^{\,n+2})\cap I(\mathfrak N'_2),\qquad \mathcal A_0(\mathfrak N;\mathfrak N'_1,\mathfrak N'_2,\sigma_{v_*},\omega,\epsilon) =\left\{\pi\in\mathcal A_0([G],\omega): \pi^{K^\dagger,\kappa^\dagger}\ne0,\ \pi_{v_*}\simeq\sigma_{v_*},\ \|\lambda_{\pi_\infty}\|\leq|\mathfrak N|^\epsilon\right\},$$

where $\lambda_{\pi_\infty}\in\mathbb C^{n+1}$ is the archimedean Langlands parameter and $\|\cdot\|$ is the Euclidean norm. Then both central values are nonzero simultaneously for infinitely many $\pi\in\mathcal A_0([G],\omega)$:

$$L(1/2,\pi\times\pi'_1)L(1/2,\pi\times\pi'_2)\ne0.$$

If in addition $(\pi'_1)_\infty\simeq(\pi'_2)_\infty$, then for sufficiently large $|\mathfrak N|$ in Yang's level-aspect setup, depending on the fixed data and $\epsilon$, there exists a $\pi\in\mathcal A_0(\mathfrak N;\mathfrak N'_1,\mathfrak N'_2,\sigma_{v_*},\omega,\epsilon)$ for which the same product is nonzero.

## Statement references

[Liyang Yang, *Relative Trace Formula and L-functions for GL(n+1) × GL(n)*, Theorem C and Theorems 9.8–9.9, §§9.2.1–9.2.4](https://arxiv.org/pdf/2303.02225v1)

[[thm-generic-local-gln-representation-has-congruence-newvectors|Generic local GL(n) congruence-newvector theorem]]

## Current proof boundary

The full relative-trace and nonvanishing claims remain locally unproved. A nonzero local Hom space supplies some nonzero period vectors; it does not by itself establish positivity for the particular prescribed Whittaker newvector used in the test function. The source proof's lower-bound-minus-error and spectral-tail estimates supply the finite-family assertion only in the sufficiently large level range. Exact simple-supercuspidal source equivalence, newvector test identities and the local Plancherel formula remain held.

Here the superscript $(K^\dagger,\kappa^\dagger)$ denotes vectors transforming by that character. The exact matching of this typed level space to Yang’s local test functions, beyond the elementary character calculation, is still held. Literal invariance would force an unramified central character at every finite place.
