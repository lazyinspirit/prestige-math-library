---
id: lem-restricted-matern-native-space-is-sobolev
kind: lemma
title: "The restricted Matérn native space is the Sobolev quotient space"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-native-space-fourier-identity-and-positive-definiteness
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 18–25
        and 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §§2.1–2.2"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume full AC conservatively for the declared Hilbert projection dependency. Fix the Matérn kernel of [[def-normalized-matern-spectral-kernel]] on a nonempty domain $\Omega$ of [[def-rbf-kernels-sites-and-augmented-interpolation]]. Let $\mathcal N_\Omega=\{U\in\mathcal H_k(\mathbb R^d):U|_\Omega=0\}$. The restricted native space is the quotient $\mathcal H_k(\mathbb R^d)/\mathcal N_\Omega$ with infimal extension norm, and it is the reproducing-kernel Hilbert space of $k|_{\Omega\times\Omega}$. Its norm is equivalent to the restriction-quotient norm of $H^s(\Omega)$: for constants $c,C>0$ depending only on $d,\nu,a$,
$$c\|u\|_{H^s(\Omega)}\le\|u\|_{\mathcal H_k(\Omega)}\le C\|u\|_{H^s(\Omega)}.$$
No extension theorem or intrinsic fractional-domain norm is asserted.

## Facts & Assumptions

**Given:** Full AC, fixed Matérn parameters, a nonempty domain $\Omega$, and the quotient definitions above.

[F1] The whole-space Matérn native space and $H^s(\mathbb R^d)$ have the same representatives and equivalent norms with constants $c_0,C_0>0$. ([[lem-matern-native-space-fourier-identity-and-positive-definiteness]])

[F2] Point evaluations are continuous in the whole-space native norm; each section $k(\cdot-y)$ reproduces evaluation and the sections centered in $\mathbb R^d$ span densely. ([[lem-matern-native-space-fourier-identity-and-positive-definiteness]])

[F3] A closed subspace of a Hilbert space has a closed orthogonal complement, each vector has a unique orthogonal projection, and the quotient by the subspace is isometric to that complement. ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]])

[A1] Full AC is included to match the conservative dependency branch of [F3] and the published $L^2$ completeness supplier; no family of extensions is selected. ([[def-axiom-of-choice]], [[def-countable-choice]])




## Proof

**Proof technique:** direct.

**Given:** The hypotheses and notation of the Statement.

1.1 The set $\mathcal N_\Omega$ is a linear subspace. If $U_n\in\mathcal N_\Omega$ converges to $U$ in native norm, then for each $x\in\Omega$, [F2] gives $|U_n(x)-U(x)|\le C_x\|U_n-U\|_k\to0$; hence $U(x)=0$ and $U\in\mathcal N_\Omega$. Thus $\mathcal N_\Omega$ is closed. [F2, algebra]

2.1 By [F3], each equivalence class modulo $\mathcal N_\Omega$ has a unique representative in $\mathcal N_\Omega^\perp$, namely its orthogonal projection onto that complement; its norm is the infimum of the norms of all extensions because adding an element of $\mathcal N_\Omega$ changes only the nullspace component. Therefore the restriction quotient is a Hilbert space isometric to $\mathcal N_\Omega^\perp$. [F3, A1, step 1.1]

3.1 For $y\in\Omega$, the section $k_y=k(\cdot-y)$ lies in $\mathcal N_\Omega^\perp$: for every $N\in\mathcal N_\Omega$, $\langle N,k_y\rangle_k=N(y)=0$ by reproduction [F2]. Its induced quotient element therefore represents the restricted kernel section, and it reproduces evaluation of each restricted function at $y$. [F2, step 2.1]

4.1 If $U\in\mathcal N_\Omega^\perp$ is orthogonal to every $k_y$ with $y\in\Omega$, then [F2] gives $U(y)=0$ for all $y\in\Omega$, so $U\in\mathcal N_\Omega$. Thus $U\in\mathcal N_\Omega\cap\mathcal N_\Omega^\perp=\{0\}$. The restricted kernel sections span densely in $\mathcal N_\Omega^\perp$, which proves that the quotient is exactly the RKHS of the restricted kernel. [F2, step 1.1, step 3.1]

5.1 Every extension $U$ of $u$ satisfies $c_0\|U\|_{H^s(\mathbb R^d)}\le\|U\|_k\le C_0\|U\|_{H^s(\mathbb R^d)}$ by [F1]. Taking the infimum over the same set of extensions on both sides gives $c_0\|u\|_{H^s(\Omega)}\le\|u\|_{\mathcal H_k(\Omega)}\le C_0\|u\|_{H^s(\Omega)}$. [F1, step 2.1, algebra] ∎