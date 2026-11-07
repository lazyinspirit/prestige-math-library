---
id: lem-initial-cofinite-eisenstein-cusp-asymptotics
kind: lemma
title: Initial cofinite Eisenstein convergence and cusp asymptotics
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
- thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
- lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings
- lem-upper-half-plane-metric-and-polygon-area-calculus
- thm-fourier-basis-and-parseval-on-the-n-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: one-cusp initial Eisenstein construction and constant-mode asymptotics; the finite-cusp unitary-character convergence proof is local.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 3.1–3.4 and 4.1–4.4, printed pp. 13–24: initial Eisenstein series, Fourier expansions and one-cusp continuation; finite-cusp and unitary-character estimates are local.'
dependency_level: 7
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Statement

For the finite-cusp data of the preceding definition, the initial cusp Poincaré sums $E_j(s)$ converge absolutely and locally in all smooth derivatives for $\operatorname{Re}s>1$. They are $\chi$-automorphic eigenfunctions of eigenvalue $s(1-s)$. At each open cusp $k$, the constant coefficient of column $j$ is $\delta_{kj}y^s+\Phi_{kj}(s)y^{1-s}$; at every cusp the other Fourier coefficients are the decaying solutions of the separated eigen-equation. After removal of these constant terms, the series and their first normal derivatives decay exponentially in each cusp, locally uniformly in $s$ in the initial half-plane. No meromorphic continuation is asserted.

## Statement references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Statement.

[F1] The finite-cusp normalizations, Poincaré sums and PUBLIC AC convention ([[def-finite-cusp-pseudo-laplacian-data]]).

[F2] Disjoint precisely invariant normalized horoballs and compact cusp cores ([[thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations]]).

[F3] The unit-circle Fourier characters form a complete orthonormal basis and satisfy Parseval under Countable Choice, supplied by the public AC; multiplication by exp(2πiαx) gives the shifted-frequency version. ([[thm-fourier-basis-and-parseval-on-the-n-torus]]).

## Proof

1.1 Fix a normalized cusp horoball of heightb>1. Its distinct Δ-translates are disjoint. For any fixedz, a left cusp coset γ has height h_γ=Im(N_j γz). Unlessz lies in its translated horoball (at most one such horoball), the distance to that horoball is log(b/h_γ). For h_γ≥τ choose its nearest boundary point and move a fixed distancer>0 inside along the normal geodesic. The radiusr ball there lies in that horoball. These balls are disjoint and their centers lie within distance log(b/τ)+r ofz. Hyperbolic ball area2π(coshR−1) therefore bounds the number of such cosets by C_z/τ for 0<τ≤b. The same argument uniformly forz in compact sets bounds Σh_γ^σ by the convergent dyadic seriesC Σ_n2^n2^(−n σ) when σ>1. [given, F1, F2]

2.1 The logarithmic height log Im(gz) has uniformly bounded covariant derivatives of each fixed order, because g acts isometrically and logy has that property. Thus each fixed derivative of h_γ^s is bounded on a compact set of z,s by a constant times h_γ^Re(s). The preceding dyadic bound gives locally uniform absolute convergence in every derivative and holomorphy in s. Each summand solves Δ_Hu=s(1−s)u; reindexing gives χ-automorphy. [given, F1, F2, step 1.1]

3.1 For two open cusps expand the left-coset sum into double cosets by the right cusp translation. A double-coset matrix with lower row(c,d), c≠0, contributes Σ_n χ(γ)^−1 y^s/|c(z+n)+d|^(2s). Integrate x over[0,1]: the translation intervals partitionR, giving χ(γ)^−1|c|^(−2s)y^(1−s)I(s), where I(s)=∫_R(1+t²)^(-s)dt. The coefficient sum is absolutely convergent: apply the same identity to the positive trivial-character Poincaré sum at a fixedy, whose integral is finite by the preceding absolute convergence. The c=0 coset exists precisely when the cusps agree and gives the unique incoming termy^s. This proves exactly the asserted constant term, without an arithmetic-integrality assumption on(c,d). [given, F1, F2, step 2.1]

4.1 The same positive double-coset sum bounds the absolute value at every cusp by O_s(y^σ+y^(1−σ)), uniformly in x, for σ=Re s>1 andy≥1. Indeed each translated row sum is at mostC_σ |c|^(−2σ)y^(1−σ), by comparison of the uniformly spaced sum with its integral; its coefficient sum was just shown finite. For a closed cusp the character only inserts phases; the positive majorant still applies. Fourier separation then givesu_n''−[(2π(n+α_k))²−s(1−s)/y²]u_n=0. Polynomial growth excludes the exponentially growing solution whenever n+α_k≠0. The decaying solution and all derivatives follow from its Volterra equation against exp(±2π|n+α_k|y), whose tail norm isO(|s(1−s)|/(|n+α_k|R)). For large|n| it contracts already at a fixedR; smooth data there decrease faster than any power of|n|, so summing the modes and their derivatives proves locally uniform exponential tail decay. A closed cusp has no zero frequency, while an open cusp has precisely the constant terms already computed. [given, F1, F2, step 3.1, F3] ∎


## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
