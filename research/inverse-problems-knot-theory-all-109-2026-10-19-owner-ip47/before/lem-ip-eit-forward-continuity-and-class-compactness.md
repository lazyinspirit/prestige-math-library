---
id: lem-ip-eit-forward-continuity-and-class-compactness
kind: lemma
title: EIT forward continuity and compactness of conductivity classes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Corollary 4.3, Lemma 4.5 and Corollary 4.6 with complete proofs, printed pp. 18–20."
    - title: "Luca Rondi, On the regularization of the inverse conductivity problem with discontinuous conductivities"
      url: "https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397"
      locator: "Theorem 4.2 and Remark 4.5, forward DN continuity in an $L^q$ coefficient norm via Meyers higher integrability, printed p. 406."
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

[Rondi, Theorem 4.2 and Remark 4.5: forward DN continuity and Meyers estimate](https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397)

## Facts & Assumptions

**Given:** the domain, parameters, conductivity class and kernel convention in the statement.

[F1] In $d=2$, the zero-extended conductivities have uniform $L^1$ translation bounds, compact support and a uniform $L^p$ translation modulus for every finite $p$ above the stated threshold. ([[lem-ip-bv-translation-modulus-for-conductivity]])

[F2] A bounded-support family with bounded $L^p$ norms and uniform translation continuity is relatively compact in $L^p(\mathbb R^d)$. ([[thm-frechet-kolmogorov-compactness-criterion-in-lp]], [[lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic]])

[F3] A uniformly bounded and equicontinuous family on a compact metric domain has compact closure in the uniform topology; its limit preserves a common Hölder bound. ([[cor-real-and-euclidean-vector-valued-ascoli-arzela]])

[F4] The weak conductivity solutions and DN maps are well-defined on the trace quotient, and the mean-zero NtD observation is defined by the weak Neumann problem. ([[lem-ip-calderon-rough-dn-map-wellposedness]], [[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]])

[F5] For $u\in BV(\Omega)$, $TV(u;\Omega)=\sup\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\varphi\in C_c^\infty(\Omega;\mathbb R^d),\ |\varphi(x)|\le1\}$; symmetry under $\varphi\mapsto-\varphi$ gives the absolute-pairing form. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[F6] Assuming Countable Choice, for real-valued $u\in L^1(\Omega)$ the displayed test-field supremum is finite if and only if $u\in BV(\Omega)$, and then it equals $TV(u;\Omega)$. ([[lem-ip-bv-test-field-characterization-and-lsc]])

[A1] The required dimension-two forward estimate uses a uniform interior Meyers exponent $p>2$ for weak conductivity solutions on a neighborhood of $\overline{\Omega'}$; no such local proof supplier is currently available in this batch.

[A2] To transfer the DN operator difference to the $L^2$ kernel difference, the complete NTD boundary regularity and inverse-norm estimates in the smoothing lemma must be proved.

[A3] Countable Choice is assumed in the statement and is used only for the arbitrary-$L^1$ test-field characterization in [F6]. ([[def-countable-choice]])

[A4] The Axiom of Choice is assumed in the statement and supplies the Ascoli–Arzelà compactness step in dimension $d\ge3$. ([[def-axiom-of-choice]])

## Proof

**Given:** the data in the statement.

1.1 In dimension two, apply [F1] with $p=1$ and bounded support. The Fréchet–Kolmogorov criterion [F2] gives relative compactness of $X_2(R)$ in $L^1(\Omega)$. If $\gamma_j\to\gamma$ in $L^1$, pass to an almost-everywhere convergent subsequence; the ellipticity bounds and background-collar equality pass to the limit almost everywhere. For each admissible smooth test field $\varphi$, its divergence is bounded, so the pairing with $\gamma_j$ converges to the pairing with $\gamma$. By [F5], the absolute value of each approximating pairing is at most $TV(\gamma_j;\Omega)$; taking the supremum over $\varphi$ yields $V(\gamma)\le\liminf_jTV(\gamma_j;\Omega)$. Assumption [A3] lets [F6] infer $\gamma\in BV(\Omega)$ and $TV(\gamma;\Omega)=V(\gamma)\le R$. Thus the class is closed and compact in $L^1$. [A3, F1, F2, F5, F6, given, algebra]

1.2 For $d\ge3$, the uniform $C^{1,\alpha}$ bound gives uniform bounds and equicontinuity for both the functions and their first derivatives. Apply [F3] with [A4] to the finite vector $(\gamma_j,D\gamma_j)$ to extract a subsequence converging in $C^1(\overline\Omega)$. The limit derivatives retain the same $\alpha$-Hölder bound by passing to the limit in $|D\gamma_j(x)-D\gamma_j(y)|\le R|x-y|^\alpha$; the ellipticity and collar conditions are closed under uniform convergence. Hence $X_d(R)$ is compact in $C^1$. [A4, F3, given, choose, algebra]

2.1 For $d\ge3$, subtraction of the two weak Neumann equations and testing by the difference of their solutions gives the energy estimate $\|\mathscr R_\gamma-\mathscr R_{\gamma_0}\|_{\dot{\mathcal D}^{*}\to\dot{\mathcal D}}\le C\|\gamma-\gamma_0\|_{L^\infty(\Omega)}$: the right-hand side is bounded by $\|\gamma-\gamma_0\|_\infty\|\nabla u_{\gamma_0}\|_2\|\nabla w\|_2$, the lower ellipticity bound controls $\|\nabla w\|_2^2$, and the Neumann energy estimate controls $\|\nabla u_{\gamma_0}\|_2$ by the flux norm. To obtain the stated Hilbert–Schmidt kernel continuity from this operator estimate one still needs [A2], which is not established by the current source body. [F4, A2, given, algebra]

2.2 For $d=2$, [F1] supplies compactness in every finite $L^q$ and the source's forward stability route is the Alessandrini energy identity followed by Hölder with $1/q+2/p=1$, where $p>2$ is a Meyers exponent. The needed local estimate is $\|\nabla u_\gamma^f\|_{L^p(\Omega')}\le C\|f\|_{H^{-1/2}(\partial\Omega)}$ uniformly in $\gamma\in X_2(R)$. No complete proof of this higher-integrability estimate or of its boundary-to-kernel transfer is supplied here; those are the unresolved parts [A1]–[A2]. [F1, F4, A1, A2, given]

## Proof status

Step 1 proves compactness and closedness of the conductivity classes. Steps 2.1–2.2 do not establish the asserted kernel continuity: the dimension-two branch needs a local Meyers higher-integrability proof, and both branches need the complete boundary regularity and inverse-kernel estimate identified in [A2]. The item is escalated until those local inputs are supplied.
