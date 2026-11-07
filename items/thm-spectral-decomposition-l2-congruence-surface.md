---
id: thm-spectral-decomposition-l2-congruence-surface
kind: theorem
title: Cuspidal and Eisenstein Spectral Decomposition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-weight-zero-maass-form-on-gamma0n
- def-congruence-subgroup-of-sl2-z
- thm-standard-fundamental-domain-for-the-modular-group
- lem-friedrichs-realization-of-hyperbolic-laplacian
- def-eisenstein-series-for-congruence-subgroups
- def-finite-cusp-pseudo-laplacian-data
- thm-finite-cusp-eisenstein-transform-completeness
- thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
  - title: Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)
    url: https://www.math.columbia.edu/~aghosh/ALNotes12.pdf
    locator: '§3.16: the SL2(Z) Selberg spectral decomposition and its dt/(4π) integral.'
  - title: A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1
    url: https://arxiv.org/pdf/1202.0189v1
    locator: '§6.1, Theorem 6.2 and its proof: cuspidal, residual, and Eisenstein Plancherel formula in the adelic setting.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: '§§5.3–5.6: one-cusp spectral decomposition and the extension discussion for finite-cusp surfaces.'
proof_strategy: direct
axiom_use: The Axiom of Choice is an explicit hypothesis of the unchanged public Statement; it supplies the analytic Countable Choice interfaces.
---

## Statement

Assume the Axiom of Choice. Let $N\ge1$, let $\chi:(\mathbb Z/N\mathbb Z)^\times\to S^1$ be a group homomorphism with $\chi(-1)=1$, and let $\mathcal H=L^2(\Gamma_0(N)\backslash\mathbb H,\chi)$ with inner product linear in its first argument. Let $\mathcal D$ be the smooth $\chi$-automorphic functions with compact quotient support, choose a measurable fundamental region $\mathcal F_N$, put $q(u,v)=\int_{\mathcal F_N}(u_x\overline{v_x}+u_y\overline{v_y})dx\,dy$ on $\mathcal D$, and let $\mathcal V$ be its completion in the norm $(\|u\|_{\mathcal H}^2+q(u,u))^{1/2}$. Let $\bar q$ be the closed form on $\mathcal V$ and define $A_{N,\chi}$ by $D(A_{N,\chi})=\{u\in\mathcal V:\exists h\in\mathcal H,\ \bar q(u,v)=\langle h,v\rangle\text{ for every }v\in\mathcal V\}$ and $A_{N,\chi}u=h$. Let $\mathcal H_{\mathrm{cusp}}$ be the closed span of the $L^2$ Maass cusp eigenfunctions of $A_{N,\chi}$. For every singular cusp $\mathfrak a$, let $E_{\mathfrak a}(z,s)$ denote the meromorphic continuation of the Eisenstein series initially defined for $\operatorname{Re}s>1$, and let $\mathcal H_{\mathrm{res}}$ be the closed span of its square-integrable residue eigenfunctions. Let $\mathcal B_{\mathrm{disc}}$ be an orthonormal basis of $\mathcal H_{\mathrm{cusp}}\oplus\mathcal H_{\mathrm{res}}$. For a smooth compactly supported automorphic function $f$, define
$$\mathcal F_{\mathfrak a}f(t)=\int_{\Gamma_0(N)\backslash\mathbb H} f(z)\overline{E_{\mathfrak a}(z,\tfrac12+it)}\,d\mu(z),\qquad t\in\mathbb R.$$
Then for each singular cusp and real $t$, the continued family satisfies $\Delta_{\mathbb H}E_{\mathfrak a}(z,\tfrac12+it)=(\tfrac14+t^2)E_{\mathfrak a}(z,\tfrac12+it)$. Its members are nonzero generalized eigenfunctions for almost every real $t$; exceptional zero members are allowed and satisfy the same eigen-equation. For smooth compactly supported automorphic functions $f,g$ the Plancherel identity is
$$\langle f,g\rangle=\sum_{u_j\in\mathcal B_{\mathrm{disc}}}\langle f,u_j\rangle\overline{\langle g,u_j\rangle}+\frac1{4\pi}\sum_{\mathfrak a\text{ singular}}\frac1{w_{\mathfrak a}}\int_{-\infty}^{\infty}\mathcal F_{\mathfrak a}f(t)\overline{\mathcal F_{\mathfrak a}g(t)}\,dt.$$
Here $w_{\mathfrak a}$ is the width of the integral scaling matrix in the Eisenstein definition. The transform extends by density to the full $L^2$ space and the identity gives its discrete and continuous orthogonal decomposition. No lower bound $\lambda\ge\tfrac14$ for the cuspidal or residual eigenvalues is asserted.

## Statement references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-maass-spectral-parameter]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[lem-friedrichs-realization-of-hyperbolic-laplacian]]

[[thm-choice-implies-dependent-implies-countable-choice]]

## Facts & Assumptions

**Given:** The complete objects and explicit Axiom of Choice in the Statement.

[F1] [[def-congruence-subgroup-of-sl2-z]] proves that $\Gamma_0(N)$ has finite index in $SL_2(\mathbb Z)$ and that the lower-right residue defines its character homomorphism.

[F2] [[thm-standard-fundamental-domain-for-the-modular-group]] supplies the standard modular fundamental region and its finite side pairings.

[F3] [[lem-friedrichs-realization-of-hyperbolic-laplacian]] proves that the exact energy-form completion and operator in the Statement are a nonzero Hilbert-space realization and a nonnegative self-adjoint Laplacian.

[F4] [[def-eisenstein-series-for-congruence-subgroups]] gives the initial cusp Poincaré series with integral scaling and cusp width, its automorphy and absolute convergence.

[F5] [[def-finite-cusp-pseudo-laplacian-data]] gives the PUBLIC AC unit-period finite-cusp energy-space and Eisenstein conventions.

[F6] [[thm-finite-cusp-eisenstein-transform-completeness]] gives the complete discrete/continuous orthogonal decomposition for every cofinite unitary-character group under PUBLIC AC, identifies all point spectral spaces with cusp-plus-residual spaces, supplies the critical-line eigen-equation and nonvanishing for $t\ne0$, and gives exactly $1/(4\pi w_{\mathfrak a})$ in integral cusp coordinates.

[F7] [[def-weight-zero-maass-form-on-gamma0n]] defines singular cusp constants and the cuspidal eigenfunctions used in the Statement.

[F8] [[thm-choice-implies-dependent-implies-countable-choice]] supplies the Countable Choice required by [F3] from the public AC hypothesis.

[F9] [[thm-finite-area-fuchsian-quotients-have-compact-cusp-truncations]] proves existence of normalized disjoint cusp cylinders and compact complement for every discrete cofinite Fuchsian group.

## Proof

1.1 By [F1], the effective image of $\Gamma_0(N)$ has finite index in $PSL_2(\mathbb Z)$. Its integer matrices make it discrete, and a finite union of translates of the modular region in [F2] has finite area: the modular area is $\int_{-1/2}^{1/2}(1-x^2)^{-1/2}dx=\pi/3$. Thus it is cofinite. The character descends through $\{\pm I\}$ because $\chi(-1)=1$. The normalized full cusp stabilizers, disjoint standard cusp cylinders and compact complement exist by [F9], providing exactly the geometric data required in [F5]. Hence the entire finite-cusp PUBLIC AC context of [F6] applies, with [F8] supplying every stated Countable Choice use. [given, F1, F2, F5, F8, F9]

2.1 The Hilbert space, smooth compactly supported domain, energy pairing and form completion in [F5] coincide with the objects in the Statement. Hyperbolic cusp coordinate changes preserve area and Dirichlet energy, so choosing unit-period coordinates changes none of them. A representing vector for the closed form is unique on the dense form domain, hence the form operator in [F6] is exactly $A_{N,\chi}$ of [F3], not a different self-adjoint extension. The initial Eisenstein series in [F4] and [F5] are the same Poincaré coset sums after cusp rescaling; if the integral width is $w_{\mathfrak a}$, then $E_{\mathfrak a}^{(1)}(s)=w_{\mathfrak a}^{-s}E_{\mathfrak a}(s)$. Their continuations agree by uniqueness on the initial half-plane. [given, F3, F4, F5, F6, step 1.1]

3.1 The cusp point spectrum in [F6] is exactly [F7]: for an eigenfunction a singular-cusp constant solves the Euler differential equation at every positive height, so vanishing on its tail is equivalent to vanishing identically. All other point spectral vectors are the square-integrable Eisenstein residue vectors by [F6]. Thus its discrete space and any chosen orthonormal basis are precisely $\mathcal H_{\mathrm{cusp}}\oplus\mathcal H_{\mathrm{res}}$ and $\mathcal B_{\mathrm{disc}}$ in the Statement. Critical-line regularity and the eigen-equation in [F6] hold for every real $t$, with nonzero incoming coefficient for $t\ne0$; any exceptional zero at $t=0$ obeys the same equation. [given, F6, F7, step 2.1]

4.1 Apply the full Plancherel and density conclusions of [F6] to $f,g$. Under the rescaling in step 2.1, $\mathcal F_{\mathfrak a}^{(1)}f(t)=w_{\mathfrak a}^{-1/2+it}\mathcal F_{\mathfrak a}f(t)$; multiplying by the conjugate transform of $g$ cancels the phase and contributes exactly $w_{\mathfrak a}^{-1}$. Its whole-real-line coefficient $1/(4\pi)$ therefore gives the exact displayed identity in the Statement. The norm identity extends the transform by density, and [F6] identifies the closed continuous range as the full absolutely continuous orthogonal summand. Its residual and cusp atoms may lie below $1/4$, as explicitly retained in the Statement. [given, F6, step 2.1, step 3.1] ∎

## Source notes

The missing analytic block is reconstructed locally in the finite-cusp supplier: disjoint-horoball convergence, compact pseudo-Laplacian resolvent, finite-matrix continuation, the outgoing resolvent jump and the unbounded PVM scalar-kernel argument. The original full Statement is unchanged. The current proof invokes no source-only continuation/completeness theorem and no general trace formula. Full AC was already public; no foundation hypothesis has been added.
