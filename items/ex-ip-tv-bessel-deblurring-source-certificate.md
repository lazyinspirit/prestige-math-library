---
id: ex-ip-tv-bessel-deblurring-source-certificate
kind: example
title: A smooth Bessel-blur truth with an explicit TV source certificate
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-countable-choice
  - def-ip-tv-dual-source-certificate
  - def-ip-tv-functional-on-l2-distributional-variation
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-fourier-transform-on-l-one-of-rn
  - lem-schwartz-space-is-dense-in-l-two
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-plancherel
  - def-real-and-complex-inner-product-space
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on
        convergence of solutions of total variation regularized linear inverse
        problems, §§5.1–5.2
      url: https://arxiv.org/pdf/1711.06495
      locator: §5.1, smooth mollified truth source condition; §5.2, deblurring context
---

## Example

Assume Countable Choice. Let $0<a<b$, let $\phi\in C_c^\infty((a,b))$ be nonnegative and not identically zero, define $U(r)=\int_r^b\phi(s)\,ds$ for $r\ge0$, and set $u^\dagger(x)=U(|x|)$ on $\mathbb R^2$. Choose $h\in C_c^\infty((a/2,2b))$ with $0\le h\le1$ and $h=1$ on $\operatorname{supp}\phi$, put $z(x)=h(|x|)x/|x|$ extended by zero at the origin, and let $q=\operatorname{div}z$. On real $L^2(\mathbb R^2)$ define the Bessel blur $A=\mathcal F_2^{-1}M_m\mathcal F_2$, where $\mathcal F_2$ is the unitary Fourier transform with phase $e^{-2\pi i x\cdot\xi}$ and $M_m$ multiplies by $m(\xi)=(1+4\pi^2|\xi|^2)^{-1/2}$. Let $f=Au^\dagger$ and define $p=\mathcal F_2^{-1}\bigl((1+4\pi^2|\xi|^2)^{1/2}\widehat q(\xi)\bigr)$. Then $A$ is bounded, self-adjoint, and injective, $p\in L^2(\mathbb R^2;\mathbb R)$, and $A^*p\in\partial TV_2(u^\dagger)$. Thus $u^\dagger$ is the unique minimum-TV exact solution satisfying the full-space source condition; for zero noise the parameter ratio $\|A^*\|\|w_n\|_2/\alpha_n$ is zero.

## Example references

[[def-ip-tv-dual-source-certificate|A certificate is an adjoint image in the TV subdifferential at an exact minimum-TV truth.]]

[[def-ip-tv-functional-on-l2-distributional-variation|The full-space regularizer is the extended distributional-TV functional on L².]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, §§5.1–5.2](https://arxiv.org/pdf/1711.06495)

[[thm-plancherel|Plancherel extends the unitary Fourier transform to L².]]

[[lem-smooth-bump-between-concentric-euclidean-balls|A smooth cutoff exists around the compact radial support of $\phi$.]]

## Facts & Assumptions

**Given:** The nonzero nonnegative radial profile $\phi$, the radial truth $u^\dagger$, the Fourier multiplier $m$, and full-space $TV_2$.

[A1] Countable Choice is assumed by the Plancherel supplier. ([[def-countable-choice]])

[F1] [[thm-plancherel]]: $\mathcal F_2$ is a unitary map on complex $L^2(\mathbb R^2)$ and preserves inner products.

[F2] [[def-fourier-transform-on-l-one-of-rn]]: for integrable $q$, $\widehat q(\xi)=\int q(x)e^{-2\pi i x\cdot\xi}\,dx$; integration by parts gives the displayed derivative transform.

[F3] [[lem-schwartz-space-is-dense-in-l-two]]: complex Schwartz functions are dense in complex $L^2$; taking real parts gives density of real Schwartz functions in real $L^2$.

[F4] [[def-ip-tv-functional-on-l2-distributional-variation]]: $TV_2(v)$ is the supremum of $\int v\operatorname{div}y$ over compactly supported smooth vector fields with $\|y\|_\infty\le1$.

[F5] [[def-ip-banach-convex-subgradient-and-dual-pairing]] and [[def-ip-tv-dual-source-certificate]]: $q\in\partial TV_2(u)$ when $TV_2(v)\ge TV_2(u)+\langle q,v-u\rangle$ for all $v\in L^2$, using the real Hilbert pairing.

[F6] [[lem-smooth-bump-between-concentric-euclidean-balls]]: a smooth cutoff can equal one on the compact radial support of $\phi$ and vanish near the origin.

[F7] [[def-real-and-complex-inner-product-space]]: on real-valued functions, the complex $L^2$ inner product equals the real Hilbert pairing.

## Verification

**Proof technique:** Fourier multiplier verification and a calibration field.

The real-valued subspace is closed in complex $L^2$: if $g_j$ are real-valued classes and $g_j\to g$ in complex $L^2$, then $\|\operatorname{Im}g\|_2=\|\operatorname{Im}(g-g_j)\|_2\le\|g-g_j\|_2\to0$, so $g$ is real-valued as an $L^2$ class.

1.1 The multiplier $m$ is real, even, and satisfies $0<m\le1$, so [F1] makes $A$ a contraction on complex $L^2$. For real Schwartz $g$, the integral formula [F2] gives $\widehat g(-\xi)=\overline{\widehat g(\xi)}$, and multiplication by $m$ preserves this symmetry. Approximate $m\widehat g$ in $L^2$ by Schwartz functions using [F3], then replace each approximant $s$ by $\tfrac12(s(\xi)+\overline{s(-\xi)})$. These symmetrized approximants remain Schwartz, converge to $m\widehat g$, and have real inverse Fourier transforms by [F2]; [F1] and the closedness observation above pass this property to $Ag$. Density of real Schwartz functions and boundedness of $A$ extend real-valuedness to real $L^2$. By [F7], the complex Plancherel pairing restricts to the real Hilbert pairing. Multiplication by the real function $m$ is self-adjoint, so $\langle Au,v\rangle=\langle u,Av\rangle$ for real $u,v$, and $A^*=A$. If $Au=0$, then $m\widehat u=0$ almost everywhere; strict positivity of $m$ and injectivity of the unitary Fourier transform give $u=0$. Thus $A$ is bounded, self-adjoint, and injective. [A1, F1, F2, F3, F7, given, algebra]

1.2 Because $\phi$ is supported away from zero and from $b$, $u^\dagger$ is constant near the origin, smooth across radii $a,b$, and zero for $|x|\ge b$; hence it is a compactly supported smooth real function. Its gradient is $\nabla u^\dagger(x)=-\phi(|x|)x/|x|$ wherever $\phi(|x|)\ne0$ and is zero elsewhere. The cutoff in the Statement exists by [F6] and gives $z\in C_c^\infty(\mathbb R^2;\mathbb R^2)$ with $\|z\|_\infty\le1$. Integration by parts gives $$\int_{\mathbb R^2}u^\dagger\operatorname{div}z\,dx=-\int_{\mathbb R^2}z\cdot\nabla u^\dagger\,dx=\int_{\mathbb R^2}\phi(|x|)\,dx=\int_{\mathbb R^2}|\nabla u^\dagger|\,dx.$$ For every admissible test field $y$, the same integration by parts gives $\int u^\dagger\operatorname{div}y\le\int|\nabla u^\dagger|$, while the field $z$ attains equality. Thus $TV_2(u^\dagger)=\int u^\dagger\operatorname{div}z$. Setting $q=\operatorname{div}z$, [F4] gives $TV_2(v)\ge\int vq=TV_2(u^\dagger)+\langle q,v-u^\dagger\rangle$ for every $v$, so $q\in\partial TV_2(u^\dagger)$. [F4, F5, F6, given, algebra]

2.1 The vector $q$ is smooth and compactly supported, so $q,\partial_1q,\partial_2q\in L^2$. Integration by parts using [F2] gives $\widehat{\partial_jq}=2\pi i\xi_j\widehat q$, and Plancherel [F1] yields $$\int_{\mathbb R^2}(1+4\pi^2|\xi|^2)|\widehat q(\xi)|^2\,d\xi=\|q\|_2^2+\|\nabla q\|_2^2<\infty.$$ Therefore $\widehat p(\xi):=(1+4\pi^2|\xi|^2)^{1/2}\widehat q(\xi)$ is in $L^2$, defining $p=\mathcal F_2^{-1}\widehat p\in L^2$. The integral formula [F2] gives Hermitian symmetry of $\widehat q$, and the real even multiplier preserves it. As in step 1.1, approximate $\widehat p$ by Schwartz functions, symmetrize them, apply inverse Fourier transformation, and use Plancherel continuity and closedness of the real subspace to conclude that $p$ is real. By construction $A^*p=Ap=q$, so [F5] gives the required source certificate. Injectivity from step 1.1 makes $u^\dagger$ the unique exact solution, hence the unique minimum-TV exact solution. [A1, F1, F2, F5, step 1.1, step 1.2, construct]

3.1 Step 2.1 provides a certificate at the unique minimum-TV exact truth. For every positive $\alpha_n$ and zero noise $w_n=0$, the parameter ratio is $\|A^*\|\|w_n\|_2/\alpha_n=0$. Thus this example verifies the source condition and the zero-noise parameter side of the full-space deblurring setup without asserting existence of a regularized minimizer. [step 1.1, step 2.1, given, algebra] ∎

