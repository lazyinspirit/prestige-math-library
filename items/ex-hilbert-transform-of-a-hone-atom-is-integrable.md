---
id: ex-hilbert-transform-of-a-hone-atom-is-integrable
kind: example
title: "The Hilbert transform of an $H^1$ atom is integrable"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [def-hp-atom-with-moment-order, def-calderon-zygmund-kernel-and-principal-value-operator, def-truncated-hilbert-transform-and-principal-value, def-riesz-transforms-on-euclidean-space, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds, def-multidimensional-rectangle-and-volume, lem-an-hp-atom-has-uniform-hp-quasinorm, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-riesz-transforms-are-ltwo-bounded, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, lem-hilbert-transform-has-signum-fourier-multiplier, lem-hilbert-transform-is-skew-adjoint-on-ltwo, lem-riesz-transform-principal-value-kernel-formula, thm-plancherel, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions, thm-polar-coordinates-formula-for-lebesgue-measure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.35 and its proof, printed pp. 40-41: atom membership in H1 and the near/far method for the square function; Section 3.1, printed p. 6: Hilbert and Riesz kernels"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Theorem 1.4(1), printed pp. 15-16: uniformly bounded atom images for regular singular integral operators"
verification:
  precheck: pass
---

## Example

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and let $a$ be a $(1,\infty,0)$-atom supported in a compact cube
$Q\subseteq\mathbb R^n$. Let $T$ be the Hilbert transform when $n=1$
([[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]) and the vector
$(R_1,\dots,R_n)$ of Riesz transforms when $n\ge2$
([[def-riesz-transforms-on-euclidean-space]]); each component is read as its $L^2$ operator, with norm $B\le1$
([[cor-riesz-transforms-are-ltwo-bounded]]), and has an odd kernel with a first-difference bound ($\delta=1$) whose constants depend only on $n$
([[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]]).
Then every component $Ta$ lies in $L^1(\mathbb R^n)$ and
$$\|Ta\|_{L^1}\le C_n(A_1+A_2'+A_3+B),$$
where $A_1,A_2',A_3,B$ are the kernel size, Holder, cancellation and $L^2$
constants of the component. Write $\ell=\ell(Q)$ and let $Q^\dagger$ be the
concentric cube of side length $2\sqrt n\,\ell$. The near/far split is
explicit:
$$\int_{Q^\dagger}|Ta|\le|Q^\dagger|^{1/2}\|Ta\|_{L^2}\le(2\sqrt n)^{n/2}B,\qquad \int_{(Q^\dagger)^c}|Ta|\le C_{n,\delta}A_2'\|a\|_{L^1}\le C_{n,\delta}A_2',$$
the far estimate using only the zeroth moment of $a$ and the Holder bound for
the kernel.

## Facts & Assumptions

**Given:** Countable Choice and $n\ge1$, a $(1,\infty,0)$-atom $a$ supported in a compact cube $Q$ with centre $c_Q$, and a component operator $T$ as in the example.

[L1] $a\in L^\infty_c$, $\|a\|_{L^\infty}\le|Q|^{-1}$, $\|a\|_{L^1}\le1$ and $\int a=0$ ([[def-hp-atom-with-moment-order]], [[def-multidimensional-rectangle-and-volume]]).

[F1] The Hilbert transform is an $L^2$ isometry and is skew-adjoint; its action on Schwartz functions is the principal-value integral with $k(x)=1/(\pi x)$ ([[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]], [[lem-hilbert-transform-is-skew-adjoint-on-ltwo]], [[lem-hilbert-transform-has-signum-fourier-multiplier]], [[def-truncated-hilbert-transform-and-principal-value]]). Each $R_j$ is an $L^2$ contraction with purely imaginary Fourier symbol $-i\xi_j/|\xi|$, and its Schwartz action is the principal-value integral with $k(x)=c_nx_j/|x|^{n+1}$ ([[cor-riesz-transforms-are-ltwo-bounded]], [[def-riesz-transforms-on-euclidean-space]], [[lem-riesz-transform-principal-value-kernel-formula]]). Plancherel preserves the inner product ([[thm-plancherel]]). The Riesz kernels obey the size, first-difference and spherical-cancellation bounds of [[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]]; the kernel constants use [[def-calderon-zygmund-kernel-and-principal-value-operator]].

[F2] The atom belongs to $H^1$ with finite norm by [[lem-an-hp-atom-has-uniform-hp-quasinorm]].

[F3] A cube of side length $\ell$ has measure $\ell^n$; its concentric cube of side length $2\sqrt n\,\ell$ has measure $(2\sqrt n)^n\ell^n$, and every point $y$ of the original cube satisfies $|y-c_Q|\le\sqrt n\,\ell/2$ ([[def-multidimensional-rectangle-and-volume]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).


[F4] Fubini applies to integrable functions, Tonelli to nonnegative functions, and polar coordinates give $\int_{|z|\ge R}|z|^{-n-1}dz=\sigma(S^{n-1})/R$ for $R>0$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-polar-coordinates-formula-for-lebesgue-measure]]). Equality of regular distributions implies equality almost everywhere for locally integrable functions on an open set ([[thm-locally-integrable-functions-embed-in-distributions]]).

## Verification

**Proof technique:** direct.

1.1 Kernel bounds. For the Hilbert kernel and $|h|\le|z|/2$, $|k(z-h)-k(z)|=|h|/(\pi|z||z-h|)\le(2/\pi)|h||z|^{-2}$. Its annular size constant is $A_1=2\log2/\pi$ and its cancellation constant is $A_3=0$ by oddness. For Riesz kernels [F1] gives $A_2'=c_n2^{n+1}(3n+4)$; polar coordinates give $A_1\le c_n\sigma(S^{n-1})\log2$, and spherical cancellation gives $A_3=0$. Thus in either case $|k(z-h)-k(z)|\le A_2'|h||z|^{-n-1}$ for $|h|\le|z|/2$, with constants depending only on $n$. [F1, F4, algebra]

1.2 Off-support representation. Each $T$ is skew-adjoint: this is [F1] for the Hilbert transform, and follows for Riesz transforms from Plancherel and $\overline{m_j}=-m_j$. Put $\Omega=\mathbb R^n\setminus Q$ and $g(x)=\int_Q k(x-y)a(y)dy$ on $\Omega$. For $\varphi\in C_c^\infty(\Omega)$ the supports of $a$ and $\varphi$ have positive distance, so $T\varphi(y)=\int k(y-x)\varphi(x)dx$ on $Q$ by the Schwartz principal-value formulas [F1], and the double integral is absolutely integrable. Skew-adjointness, Fubini and the real odd kernel give $\langle Ta,\varphi\rangle=-\langle a,T\varphi\rangle=\int_\Omega g(x)\overline{\varphi(x)}dx$. The function $g$ is locally bounded on $\Omega$, since the kernel is bounded on each compact set separated from $Q$ and $a\in L^1$; also $Ta\in L^2\subset L^1_{\mathrm{loc}}$. Therefore the injectivity of regular distributions gives $Ta(x)=g(x)$ almost everywhere on $\Omega$. [L1, F1, F4, algebra]

1.3 Near estimate. Write $\ell=\ell(Q)$ and let $Q^\dagger$ be the concentric cube of side length $2\sqrt n\,\ell$. By [F3], $|Q^\dagger|=(2\sqrt n)^n|Q|$. Since $a\in L^2$, Cauchy-Schwarz and the $L^2$ bound give $\int_{Q^\dagger}|Ta|\le|Q^\dagger|^{1/2}\|Ta\|_{L^2}\le|Q^\dagger|^{1/2}B\|a\|_{L^2}\le(2\sqrt n)^{n/2}B$, because $\|a\|_{L^2}\le\|a\|_\infty|Q|^{1/2}\le|Q|^{-1/2}$. [L1, F1, F3, algebra]

2.1 Far estimate. For $y\in Q$ one has $|y-c_Q|\le\sqrt n\,\ell/2$, while $x\notin Q^\dagger$ gives $|x-c_Q|\ge\sqrt n\,\ell$. By 1.2 and $\int a=0$, $Ta(x)=\int_Q[k(x-y)-k(x-c_Q)]a(y)dy$ almost everywhere there. For $h=y-c_Q\ne0$, step 1.1 and polar coordinates give $\int_{|z|\ge2|h|}|k(z-h)-k(z)|dz\le A_2'|h|\sigma(S^{n-1})/(2|h|)=\sigma(S^{n-1})A_2'/2$; for $h=0$ the difference is identically zero. Tonelli consequently gives $\int_{(Q^\dagger)^c}|Ta|\le\int_Q|a(y)|\int_{|z|\ge2|y-c_Q|}|k(z-(y-c_Q))-k(z)|dzdy\le\sigma(S^{n-1})A_2'\|a\|_1/2\le\sigma(S^{n-1})A_2'/2$. [step 1.1, step 1.2, L1, F3, F4, algebra]

3.1 Conclusion. Steps 1.3 and 2.1 give $\|Ta\|_1\le(2\sqrt n)^{n/2}B+\sigma(S^{n-1})A_2'/2\le C_n(A_1+A_2'+A_3+B)$ for every component. The atom is in $H^1$ by [F2], and these estimates prove directly that its $L^2$ transform is integrable, without requiring smoothness of the atom. [step 1.3, step 2.1, F2, algebra] ∎
