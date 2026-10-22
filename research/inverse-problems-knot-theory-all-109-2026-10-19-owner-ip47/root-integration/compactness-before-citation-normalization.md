---
id: lem-ip-eit-forward-continuity-and-class-compactness
kind: lemma
title: EIT forward continuity and compactness of conductivity classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-test-field-characterization-and-lsc
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-bv-translation-modulus-for-conductivity
  - lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
  - thm-frechet-kolmogorov-compactness-criterion-in-lp
  - lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
  - lem-ip-interior-neumann-modes-and-kernel-forward-continuity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H.
        Nelsen, Extension and neural operator approximation of the electrical
        impedance tomography inverse map
      url: https://arxiv.org/pdf/2511.20361
      locator: Corollary 4.3, PDF p.24; Lemma 4.4, PDF pp.25–26; Lemma 4.5 and
        Corollary 4.6 with their proofs, PDF pp.26–27, in the actual 80-page
        version.
    - title: Luca Rondi, On the regularization of the inverse conductivity problem
        with discontinuous conductivities
      url: https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397
      locator: Theorem 4.2 and Remark 4.5, contextual forward NtD continuity in an
        $L^q$ coefficient norm via Meyers higher integrability, printed
        pp.405–406 (PDF pp.9–10); this paper denotes the NtD map by Lambda.
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, let $\Omega'\Subset\Omega$, and fix $m>0$, $M\ge\max\{1,m\}$, $R>0$ and $0<\alpha<1$. Let $X_d(R)$ be the BV conductivity class for $d=2$ and the bounded $C^{1,\alpha}$ class for $d\ge3$, with the same ellipticity and background collar in both cases. Then $X_2(R)$ is compact in $L^1(\Omega)$ and each $X_d(R)$ for $d\ge3$ is compact in $C^1(\overline\Omega)$. In dimension two there is an exponent $q>2$ and a constant $C$ such that
$$\|\kappa_\gamma-\kappa_{\gamma_0}\|_{L^2(\partial\Omega\times\partial\Omega)}\le C\|\gamma-\gamma_0\|_{L^q(\Omega)}\qquad(\gamma,\gamma_0\in X_2(R));$$
for $d\ge3$ the same kernel map is continuous in the $C^1(\overline\Omega)$ topology. Consequently the exact kernel image $\{\kappa_\gamma:\gamma\in X_d(R)\}$ is compact in $L^2(\partial\Omega\times\partial\Omega)$.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The exact BV and C1,alpha conductivity classes.]]

[[def-axiom-of-choice|The Axiom of Choice used in the d≥3 compactness argument.]]

[[def-countable-choice|The Countable Choice axiom used in the dimension-two BV closure argument.]]

[[lem-ip-bv-translation-modulus-for-conductivity|The uniform BV translation modulus.]]

[[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound|The continuum kernel observation and its Hilbert-space norm.]]

[de Hoop et al., Corollary 4.3, Lemma 4.5 and Corollary 4.6](https://arxiv.org/pdf/2511.20361)

[Rondi, Theorem 4.2 and Remark 4.5: forward NtD continuity and Meyers estimate](https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397)

## Facts & Assumptions

**Given:** the domain, parameters, conductivity class and kernel convention in the statement.

[F1] In $d=2$, the background extensions $\gamma_e=1+\operatorname{zeroextend}(\gamma-1)$ have uniform $L^1$ translation-difference bounds and the stated finite-$L^p$ translation moduli. Therefore $h_\gamma=\operatorname{zeroextend}(\gamma-1)$, supported in $\overline{\Omega'}$, has those SAME translation differences and a uniform $L^1$ bound. ([[lem-ip-bv-translation-modulus-for-conductivity]])

[F2] A bounded-support family with bounded $L^p$ norms and uniform translation continuity is relatively compact in $L^p(\mathbb R^d)$. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]], [[lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic]])

[F3] A uniformly bounded and equicontinuous family on a compact metric domain has compact closure in the uniform topology; its limit preserves a common Hölder bound. ([[cor-real-and-euclidean-vector-valued-ascoli-arzela]])

[F4] The weak conductivity solutions and DN maps are well-defined on the trace quotient, and the mean-zero NtD observation is defined by the weak Neumann problem. ([[lem-ip-calderon-rough-dn-map-wellposedness]], [[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]])

[F5] For $u\in BV(\Omega)$, $TV(u;\Omega)=\sup\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\varphi\in C_c^\infty(\Omega;\mathbb R^d),\ |\varphi(x)|\le1\}$; symmetry under $\varphi\mapsto-\varphi$ gives the absolute-pairing form. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F6] Assuming Countable Choice, for real-valued $u\in L^1(\Omega)$ the displayed test-field supremum is finite if and only if $u\in BV(\Omega)$, and then it equals $TV(u;\Omega)$. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F7] For some $p\in(2,4)$ and $q=p/(p-2)>2$, the fixed-collar NtD kernel difference is bounded by $C\|\gamma-\gamma_0\|_{L^q}$; in every dimension it is also bounded by $C\|\gamma-\gamma_0\|_\infty$. This is proved by uniform interior Meyers estimates, rapid boundary-mode decay and the weak energy identity. ([[lem-ip-interior-neumann-modes-and-kernel-forward-continuity]])

[A3] Countable Choice is assumed in the statement and is used at the arbitrary-$L^1$ test-field characterization in [F6] and the upstream spectral and higher-integrability interfaces. ([[def-countable-choice]])

[A4] The Axiom of Choice is assumed in the statement and supplies the Ascoli–Arzelà compactness step in dimension $d\ge3$. ([[def-axiom-of-choice]])

## Proof

**Given:** the data in the statement.

1.1 In dimension two, set $h_\gamma=\operatorname{zeroextend}(\gamma-1)$. It is supported in $\overline{\Omega'}$, has $\|h_\gamma\|_1\le(M+1)|\Omega|$, and satisfies $\|\tau_yh_\gamma-h_\gamma\|_1=\|\tau_y\gamma_e-\gamma_e\|_1\le C|y|$ by [F1]. Apply the Fréchet–Kolmogorov criterion [F2] to the bounded-support family $\{h_\gamma\}$ in $L^1(\mathbb R^2)$; restriction to $\Omega$ followed by addition of one gives relative compactness of $X_2(R)$ in $L^1(\Omega)$. If $\gamma_j\to\gamma$ in $L^1$, pass to an almost-everywhere convergent subsequence; the ellipticity bounds and background-collar equality pass to the limit almost everywhere. For each admissible smooth test field $\varphi$, its divergence is bounded, so the pairing with $\gamma_j$ converges to the pairing with $\gamma$. By [F5], the absolute value of each approximating pairing is at most $TV(\gamma_j;\Omega)$; taking the supremum over $\varphi$ yields $V(\gamma)\le\liminf_jTV(\gamma_j;\Omega)$. Assumption [A3] lets [F6] infer $\gamma\in BV(\Omega)$ and $TV(\gamma;\Omega)=V(\gamma)\le R$. Thus the class is closed and compact in $L^1$. [A3, F1, F2, F5, F6, given, algebra]

1.2 For $d\ge3$, the uniform $C^{1,\alpha}$ bound gives uniform bounds and equicontinuity for both the functions and their first derivatives. Apply [F3] with [A4] to the finite vector $(\gamma_j,D\gamma_j)$ to extract a subsequence converging in $C^1(\overline\Omega)$. The limit derivatives retain the same $\alpha$-Hölder bound by passing to the limit in $|D\gamma_j(x)-D\gamma_j(y)|\le R|x-y|^\alpha$; the ellipticity and collar conditions are closed under uniform convergence. Hence $X_d(R)$ is compact in $C^1$. [A4, F3, given, choose, algebra]

1.3 Apply [F7] with the actual fixed smoothing exponent $r_d$. The Hilbert–Schmidt difference there has, by the kernel isometry in the smoothing lemma, exactly the norm $\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$. In dimension two this gives the stated $L^q$ Lipschitz estimate with $q>2$. In dimensions at least three its supremum-norm estimate gives continuity in $C^1(\overline\Omega)$, since convergence in that topology implies uniform convergence of the coefficients. Thus the asserted kernel continuity is established in both branches. [F7, given, algebra]

2.1 To use step 1.1's $L^1$ compactness in dimension two, note that all conductivities have the same uniform $L^\infty$ bound. Hence $\|\gamma-\gamma_0\|_q^q\le(2M)^{q-1}\|\gamma-\gamma_0\|_1$. The estimate in step 1.3 therefore makes the kernel map continuous also for the $L^1$ topology on this class. Its image is compact as the continuous image of the compact class from step 1.1. For $d\ge3$, use the $C^1$ compactness in step 1.2 and the continuity in step 1.3. This proves the final assertion without a finite-dimensional measurement restriction. [step 1.1, step 1.2, step 1.3, algebra] ∎
