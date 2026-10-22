---
id: lem-qftx-photon-rotation-test-core
kind: lemma
title: The smooth transverse domain is a core for photon rotation generators
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-qftx-photon-helicity-bundle
  - thm-qftx-photon-rotations-helicity
  - thm-stone-one-parameter-unitary-groups
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-dominated-convergence
  - thm-fatou-lemma
  - def-the-standard-smooth-step-function
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Juha Kinnunen, Sobolev Spaces
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Full 168-page notes inspected at §1.8, Remark 1.22(4), PDF pp. 20–21, for density of compactly supported smooth functions in Lp; the graph-core claim is proved here.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and $\hbar>0$. Let $\mathcal H_T^\nu$, $\mathcal D$, $U(R)$, and the self-adjoint rotation generators $J_{\mathbf a}$ be as defined in [[def-qftx-photon-helicity-bundle]] and [[thm-qftx-photon-rotations-helicity]]. For every unit axis $\mathbf a\in S^2$, $\mathcal D$ is a core for $J_{\mathbf a}$: it is contained in $D(J_{\mathbf a})$ and is dense in that domain for the graph norm
$$
\|f\|_{J_{\mathbf a}}=\bigl(\|f\|_{\mathcal H_T^\nu}^2+\|J_{\mathbf a}f\|_{\mathcal H_T^\nu}^2\bigr)^{1/2}.
$$
In particular, $\mathcal D$ is a common core for the three Cartesian rotation generators.

## Statement references

[[def-qftx-photon-helicity-bundle]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the punctured momentum space $M$, the mass-shell measure $d\nu=d^3\mathbf k/(2|\mathbf k|)$, the transverse Hilbert space, and the unitary rotation action.

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] Choice implies Countable Choice, so the Hilbert, density, and Fourier suppliers' Countable Choice hypotheses are available. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F2] The transverse space is the closed subspace of $L^2(M,d\nu;\mathbb C^3)$ satisfying $\mathbf k\cdot f(\mathbf k)=0$ almost everywhere, and $\mathcal D$ consists of smooth compactly supported transverse fields on $M$. [[def-qftx-photon-helicity-bundle]]

[F3] The action is $U(R)f(\mathbf k)=Rf(R^{-1}\mathbf k)$, and $t\mapsto U(R_{\mathbf a}(t))$ is a strongly continuous unitary group with Stone generator $J_{\mathbf a}$ under the convention $U(R_{\mathbf a}(t))=e^{-itJ_{\mathbf a}/\hbar}$. Its differential expression on $\mathcal D$ is $J_{\mathbf a}=L_{\mathbf a}+\hbar S_{\mathbf a}$. [[thm-qftx-photon-rotations-helicity]]

[F4] Put $\Omega=(0,\infty)\times\mathbb R$, with coordinates $(\rho,z)$, and $\mathbb T=\mathbb R/(2\pi\mathbb Z)$ with normalized angular measure $d\phi/(2\pi)$. Use the angular chart $0<\phi<2\pi$. The omitted $z$-axis and positive-$x$ branch-cut half-plane are contained in coordinate hyperplanes and are $\nu$-null by [F8]. On the remaining open set the cylindrical map $(\rho,\phi,z)\mapsto(\rho\cos\phi,\rho\sin\phi,z)$ is a $C^1$ diffeomorphism with Jacobian $\rho$. The Euclidean Borel change-of-variables lemma gives $d\nu=(\rho/(2\sqrt{\rho^2+z^2}))\,d\rho\,d\phi\,dz$ for every nonnegative Borel integrand. Fubini reorders this as $d\mu_\Omega\,d\phi/(2\pi)$, where $d\mu_\Omega=(\pi\rho/\sqrt{\rho^2+z^2})\,d\rho\,dz$. [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] The functions $e^{im\phi}$, $m\in\mathbb Z$, form an orthonormal basis of $L^2(\mathbb T,d\phi/(2\pi))$ and obey Parseval's identity. Componentwise use and Fubini give the same Fourier isometry for $\mathbb C^3$-valued functions on $\Omega\times\mathbb T$. [[thm-fourier-basis-and-parseval-on-the-n-torus]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] $C_c^\infty(\mathbb R^2;\mathbb C)$ is dense in $L^2(\mathbb R^2)$; on each compact subset of $\Omega$, the weight $w(\rho,z)=\pi\rho/\sqrt{\rho^2+z^2}$ is smooth and bounded above and below by positive constants. [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]

[F7] The standard smooth step $\sigma_0$ is smooth, takes values in $[0,1]$, vanishes on $(-\infty,0]$, and equals $1$ on $[1,\infty)$. It supplies the cutoffs $\chi_n(\rho,z)=\sigma_0(n\rho-1)\sigma_0(n-\rho)\sigma_0(n-z)\sigma_0(n+z)$ used below. [[def-the-standard-smooth-step-function]]

[F8] The $z$-axis is contained in the coordinate hyperplane $\{k_x=0\}$, and the positive-$x$ branch cut $\{k_y=0,\ k_x\ge0\}$ is contained in $\{k_y=0\}$; both hyperplanes are Lebesgue null under Countable Choice. On each annulus $1/m\le|\mathbf k|\le m$, the density $1/(2|\mathbf k|)$ is bounded, so the punctured axis and branch cut are also $\nu$-null. [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]] [[def-qftx-photon-helicity-bundle]]

[F9] Dominated convergence applies to the $L^2$ tails after cutoff, and Fatou applies to the squared Fourier difference quotients. [[thm-dominated-convergence]] [[thm-fatou-lemma]]

[F10] The Stone generator domain is exactly the vectors for which the group difference quotient converges in norm, and its derivative at zero is $-iJ_{\mathbf a}/\hbar$. [[thm-stone-one-parameter-unitary-groups]]

[F11] Under Countable Choice, every Lebesgue measurable subset of $\mathbb R^3$ differs from a Borel set by a subset of a Borel null set; equivalently, Lebesgue measure is the completion of its Borel restriction. [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]

## Proof

**Given:** [A1], [F1]–[F11], the space $\mathcal H_T^\nu$, the domain $\mathcal D$, and the generators in the Statement.

1.1 It suffices first to consider the axis $e_3$. The $z$-axis and the positive-$x$ branch cut, with the origin removed, are $\nu$-null by [F8]: on each annulus $1/m\le|\mathbf k|\le m$, the mass-shell density is bounded and both sets lie in Lebesgue-null coordinate hyperplanes. To apply the Borel change-of-variables formula [F4] to an arbitrary $f\in\mathcal H_T^\nu$, take a finite-valued representative and apply [F11] to the Lebesgue-measurable sublevel sets of each of its six real components at rational levels. Countable Choice lets us select the corresponding Borel sets; their symmetric differences lie in a countable union of Borel null sets. Outside that union, each component equals the infimum of the rational levels whose selected Borel sets contain $\mathbf k$; defining each infimum to be $0$ on the union gives Borel real-valued representatives, hence a Borel vector representative $f_0=f$ almost everywhere. Since $d\nu=(2|\mathbf k|)^{-1}d\lambda_3$ has strictly positive finite density on $M$, Lebesgue-null and $\nu$-null sets there coincide. Thus $f_0$ represents the same Hilbert-space class, and [F4] applies to its coordinate pullback; the same formula shows the pullback is independent of the representative. Use the cylindrical coordinates of [F4], put $r=\sqrt{\rho^2+z^2}$ and $\mathbf n_0(\rho,z)=(\rho,0,z)/r$, and define $g(\rho,z,\phi)=R_{e_3}(-\phi)f_0(\rho\cos\phi,\rho\sin\phi,z)$. The rotation matrices preserve the Hermitian norm, so the measure identity and its inverse coordinate map $f_0(\mathbf k)=R_{e_3}(\phi)g(\rho,z,\phi)$ make this a unitary identification with the subspace of $L^2(\Omega\times\mathbb T,w\,d\rho\,dz\,d\phi/(2\pi);\mathbb C^3)$ satisfying $\mathbf n_0(\rho,z)\cdot g(\rho,z,\phi)=0$. Direct substitution gives $U(R_{e_3}(t))g(\rho,z,\phi)=g(\rho,z,\phi-t)$. [A1, F1, F2, F3, F4, F8, F11, given, construct]

2.1 Write $g_m(\rho,z)=\int_{\mathbb T}g(\rho,z,\phi)e^{-im\phi}\,d\phi/(2\pi)$. By [F5], Parseval identifies the squared norm with $\sum_m\|g_m\|_{L^2(\Omega,w)}^2$, and the rotation difference quotient has Fourier coefficients $(e^{-imt}-1)g_m/t$. If $\sum_m m^2\|g_m\|^2<\infty$, then $|(e^{-imt}-1)/t|\le|m|$ and dominated convergence in the square-summable coefficient space gives convergence to $(-im g_m)_m$. Conversely, if the difference quotients converge in norm, their $m$th coefficients converge to $-im g_m$; Fatou applied to finite partial sums and then their increasing limit gives $\sum_m m^2\|g_m\|^2<\infty$. By [F10], this is exactly $D(J_{e_3})$; the generator acts as $J_{e_3}=-i\hbar\partial_\phi$ in the rotating coordinates, and the squared graph norm is $\sum_{m\in\mathbb Z}(1+\hbar^2m^2)\|g_m\|_{L^2(\Omega,w)}^2$. [F3, F5, F9, F10, step 1.1, given, algebra]

3.1 Let $g$ represent any vector in $D(J_{e_3})$. For $n\ge2$ use the explicit cutoffs $\chi_n$ from [F7]. They lie in $C_c^\infty(\Omega)$, satisfy $0\le\chi_n\le1$, and converge pointwise to $1$. Since $\chi_n$ depends only on $(\rho,z)$, it commutes with the $\phi$-derivative. Dominated convergence [F9] therefore gives $\chi_ng\to g$ in the graph norm of [F3]. Its Fourier truncations $g^{(N)}=\sum_{|m|\le N}\chi_ng_m e^{im\phi}$ converge in that graph norm by the weighted Parseval sum in step 2.1. [F3, F5, F7, F9, step 2.1, construct]

4.1 Fix $n,N$ and put $\eta_n=\chi_{2n}$; [F7] makes $\eta_n=1$ on the support of $\chi_n$ and gives compact support inside $\Omega$. Each of the finitely many coefficients $\chi_ng_m$ is supported in $\operatorname{supp}\chi_n$ and lies in $\mathbf n_0^\perp$. Extend it by zero to $\mathbb R^2$. On the compact support of $\eta_n$, the weight in [F4] is bounded above and below by positive constants, so [F6] gives a smooth compactly supported approximation $a_m^0$ in the weighted norm. Replace it by $a_m=\eta_nP(\mathbf n_0)a_m^0$. Because $P(\mathbf n_0)\chi_ng_m=\chi_ng_m$ and $\|P\|\le1$, this is transverse and does not increase the approximation error. Choose the finitely many coefficient errors so that $\sum_{|m|\le N}(1+\hbar^2m^2)\|a_m-\chi_ng_m\|^2$ is arbitrarily small. Then $\sum_{|m|\le N}a_m(\rho,z)e^{im\phi}$ is smooth, transverse, and compactly supported away from $\rho=0$; after applying $R_{e_3}(\phi)$ and returning to $\mathbf k$ coordinates it is an element of $\mathcal D$, since both factors are $2\pi$-periodic and their derivatives match across the angular seam. Combining these finite coefficient approximations with the cutoff and Fourier truncation from step 3.1 gives graph convergence to $g$, so $\mathcal D$ is a core for $J_{e_3}$. [F2, F3, F4, F6, F7, step 3.1, construct]

5.1 For any unit $\mathbf a$, choose $R\in SO(3)$ with $Re_3=\mathbf a$. The rotation representation gives $U(R)U(R_{e_3}(t))U(R)^*=U(R_{\mathbf a}(t))$; Stone uniqueness then gives $J_{\mathbf a}=U(R)J_{e_3}U(R)^*$ with the conjugated domain. Also $U(R)\mathcal D=\mathcal D$, because rotations preserve smoothness, compact support away from zero, and transversality. Applying the unitary $U(R)$ to the graph-dense approximation in step 4.1 proves that $\mathcal D$ is a core for $J_{\mathbf a}$. [F3, step 4.1, given, algebra] ∎

## Remarks

The proof uses the rotating vector frame only to identify the one-parameter rotation generator with angular differentiation. The domain statement is then established by Fourier coefficients and a graph-norm approximation; it does not infer an operator core property from ordinary $L^2$ density alone.
