---
id: lem-pe18-spherical-harmonic-structure-and-density
kind: lemma
title: Spherical harmonic modes are orthogonal, complete for continuous data, and have polynomial evaluation bounds
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-three-dimensional-spherical-harmonic-space, lem-three-dimensional-laplace-spherical-harmonic-addition-theorem, thm-real-stone-weierstrass-for-compact-metric-spaces, cor-euclidean-closed-balls-and-spheres-are-compact]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used. Each degree uses a finite-dimensional orthogonal projection; density is obtained from Stone–Weierstrass and a finite polynomial decomposition."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, graduate lecture notes"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
    - title: "NIST Digital Library of Mathematical Functions, Chapter 14: Legendre and Spherical Functions"
      url: "https://dlmf.nist.gov/14"
---

## Statement

Let $\mathcal H_\ell$ be the degree-$\ell$ spaces on $\mathbb S^2$ from [[def-three-dimensional-spherical-harmonic-space]], with surface measure of total mass $4\pi$, and let $P_\ell$ be orthogonal projection in $L^2(\mathbb S^2)$. Define $\Delta_{\mathbb S^2}$ by the polar-coordinate identity $\Delta=\partial_{rr}+2r^{-1}\partial_r+r^{-2}\Delta_{\mathbb S^2}$. Then $\Delta_{\mathbb S^2}g=-\ell(\ell+1)g$ for $g\in\mathcal H_\ell$; for all smooth $v,w$ on the sphere, $\langle v,\Delta_{\mathbb S^2}w\rangle=\langle\Delta_{\mathbb S^2}v,w\rangle$; the spaces are mutually orthogonal and their algebraic sum is uniformly dense in $C(\mathbb S^2;\mathbb C)$. For smooth $f$, for every integer $m\ge1$ there is a constant $C_m(f)$ such that $\|P_\ell f\|_2\le C_m(f)(1+\ell)^{-m}$. For $g\in\mathcal H_\ell$,
$$\|g\|_\infty\le\sqrt{\frac{2\ell+1}{4\pi}}\,\|g\|_2.$$
For each integer $p\ge0$ there is $C_p$ independent of $\ell,g$ such that $\|g\|_{C^p(\mathbb S^2)}\le C_p(1+\ell)^{p+1/2}\|g\|_2$.
The angular Dirichlet form satisfies $-\langle\Delta_{\mathbb S^2}g,g\rangle=\ell(\ell+1)\|g\|_2^2$ for $g\in\mathcal H_\ell$.
For every continuous $f$, the ordered partial sums $\sum_{\ell=0}^N P_\ell f$ converge to $f$ in $L^2(\mathbb S^2)$.

## Facts & Assumptions

**Given:** The unit sphere and the spaces $\mathcal H_\ell$ with the inner product and normalization in [[def-three-dimensional-spherical-harmonic-space]].

[F1] [[def-three-dimensional-spherical-harmonic-space]]: $\mathcal H_\ell$ is the restriction of homogeneous degree-$\ell$ harmonic polynomials, with $L^2$ inner product from surface measure $dS$ of total mass $4\pi$.

[F2] [[lem-three-dimensional-laplace-spherical-harmonic-addition-theorem]]: $\dim\mathcal H_\ell=2\ell+1$ and for any finite orthonormal basis $Y_{\ell m}$, $\sum_m|Y_{\ell m}(\omega)|^2=(2\ell+1)/(4\pi)$.

[F3] [[thm-real-stone-weierstrass-for-compact-metric-spaces]] and [[cor-euclidean-closed-balls-and-spheres-are-compact]]: on the compact sphere, a real polynomial algebra containing constants and separating points is uniformly dense in real continuous functions.

## Proof

**Given:** The objects and normalizations in [F1]–[F3].

1.1 For a homogeneous polynomial $Q_n$ of degree $n$, direct differentiation and Euler's identity give $\Delta(|x|^{2j}Q_n)=2j(2n+2j+1)|x|^{2j-2}Q_n+|x|^{2j}\Delta Q_n$. For homogeneous $P$ of degree $n$, set $H=P+\sum_{j=1}^{\lfloor n/2\rfloor}a_j|x|^{2j}\Delta^jP$, where $a_0=1$ and $a_{j+1}=-a_j/[2(j+1)(2n-2j-1)]$. Substitution into the displayed identity makes the coefficient of each $|x|^{2j}\Delta^{j+1}P$ equal to $a_j+2(j+1)(2n-2j-1)a_{j+1}=0$; the last Laplacian power vanishes by degree. Thus $H$ is homogeneous harmonic and $P-H$ is divisible by $|x|^2$. Induction on degree shows that restrictions of polynomials are finite sums of elements of the spaces $\mathcal H_j$. [F1, algebra]

1.2 The polar-coordinate identity $\Delta=\partial_{rr}+2r^{-1}\partial_r+r^{-2}\Delta_{\mathbb S^2}$ applied to $r^\ell Y(\omega)$, whose extension is harmonic by [F1], gives $\Delta_{\mathbb S^2}Y=-\ell(\ell+1)Y$. On the sphere, integration by parts gives $\langle v,\Delta_{\mathbb S^2}w\rangle=\langle\Delta_{\mathbb S^2}v,w\rangle$: in $(\theta,\phi)$ coordinates integrate the $\phi$ derivative over its period and the $\theta$ term with weight $\sin\theta$; the pole boundary terms vanish because smooth functions and their spherical gradients are bounded while $\sin\theta\to0$. Distinct degrees have distinct eigenvalues, so their spaces are orthogonal. [F1, algebra]

1.3 Choose a finite orthonormal basis from [F2] and write $g=\sum_m c_mY_{\ell m}$. Cauchy–Schwarz gives $|g(\omega)|^2\le(\sum_m|c_m|^2)(\sum_m|Y_{\ell m}(\omega)|^2)$. Orthonormality identifies the first sum with $\|g\|_2^2$, and [F2] gives the second as $(2\ell+1)/(4\pi)$. Taking the supremum proves the evaluation bound. [F2, algebra]

2.1 Real polynomial restrictions contain constants and separate distinct points of $\mathbb S^2$ by a coordinate function. Compactness and [F3] make them dense in real $C(\mathbb S^2)$; applying this separately to real and imaginary parts gives density in complex $C(\mathbb S^2)$. By step 1.1 this is density of the algebraic sum of the $\mathcal H_j$. For continuous $f$ and $\varepsilon>0$, choose a finite sum $q$ of harmonic modes with $\|f-q\|_\infty<\varepsilon$. Put $P_{\le N}f=\sum_{\ell=0}^N P_\ell f$ and $V_N=\bigoplus_{\ell=0}^N\mathcal H_\ell$. Orthogonality from step 1.2 makes $f-P_{\le N}f$ orthogonal to $V_N$, so Pythagoras shows $P_{\le N}f$ is a best $L^2$ approximation in $V_N$. For $N$ at least the largest degree in $q$, $\|f-P_{\le N}f\|_2\le\|f-q\|_2\le\sqrt{4\pi}\varepsilon$. Since $\varepsilon$ is arbitrary, the ordered partial sums converge in $L^2$. [F3, step 1.1, step 1.2, choose, algebra]

2.2 For smooth $f$ and $\ell\ge1$, self-adjointness just proved gives $P_\ell(\Delta_{\mathbb S^2}^m f)=(-\ell(\ell+1))^mP_\ell f$. The finite-dimensional projection is a contraction in $L^2$, hence $\|P_\ell f\|_2\le[\ell(\ell+1)]^{-m}\|\Delta_{\mathbb S^2}^m f\|_2$. Taking $m$ arbitrarily large proves the asserted decay (and degree zero is absorbed into $C_m(f)$). [step 1.2, algebra]

3.1 Let $X_1,X_2,X_3$ be the infinitesimal rotation fields on the sphere about the coordinate axes. Rotations preserve $\mathcal H_\ell$ and surface measure, so $X_j$ preserves $\mathcal H_\ell$ and is skew-adjoint. Expanding these three fields in spherical coordinates gives $X_1^2+X_2^2+X_3^2=\Delta_{\mathbb S^2}$. Thus $\sum_j\|X_jg\|_2^2=-\langle\Delta_{\mathbb S^2}g,g\rangle=\ell(\ell+1)\|g\|_2^2$, so each $X_j$ has operator norm at most $\sqrt{\ell(\ell+1)}$ on $\mathcal H_\ell$. Iteration and step 1.3 bound every word of $q$ rotation derivatives pointwise by $\sqrt{(2\ell+1)/(4\pi)}[\ell(\ell+1)]^{q/2}\|g\|_2$. A finite smooth coordinate cover of the compact sphere expresses each coordinate derivative through order $p$ as bounded smooth combinations of words in the $X_j$ of order at most $p$; compactness supplies a finite cover by [F3], and absorbing its chart bounds gives the stated $C_p(1+\ell)^{p+1/2}$ estimate. [F1, F2, F3, step 1.3, algebra] ∎
