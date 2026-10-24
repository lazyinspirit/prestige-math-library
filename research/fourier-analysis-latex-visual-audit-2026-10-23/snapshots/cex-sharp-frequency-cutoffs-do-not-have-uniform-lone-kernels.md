---
id: cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels
kind: counterexample
title: "Sharp frequency cutoffs have kernels that are not in L1"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-inhomogeneous-dyadic-frequency-partition, lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds, def-fourier-transform-on-l-one-of-rn, thm-l-one-l-two-agreement-of-fourier-transform, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-l-two-fourier-inversion, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-complex-exponential, thm-eulers-formula, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-newton-leibniz-with-interior-derivative, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§6.1.3, Theorem 6.1.5 (the one-dimensional sharp-cutoff substitute) and the statement that the characteristic function of the unit disk is not an $L^p$ multiplier on $\\mathbb R^n$ for $n\\ge2$ unless $p=2$, printed pp. 426-428"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "the kernel bounds on $\\check\\psi_j$ in the proof of Proposition 5.3, printed p. 23"
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]).
The sharp frequency cutoffs
$$\chi_j(\xi):=1_{(1,2)}(2^{-j}\xi)\qquad(j\in\mathbb Z)$$
have uniformly bounded inverse Fourier transforms, $\sup_{j}\|\chi_j^\vee\|_{L^1}<\infty$.
Consequently the smoothness of the Littlewood-Paley partition is cosmetic: the
convolution bounds of
[[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]] would
hold verbatim for the sharp cutoffs $\chi_j$ in place of the smooth pieces
$\varphi_j$.

## Facts & Assumptions

**Given:** Countable Choice and the interval indicator $\chi:=1_{(1,2)}$ on $\mathbb R$ and its dyadic dilates $\chi_j(\xi)=\chi(2^{-j}\xi)$, with the negative-sign $2\pi$-normalized Fourier transform, $K_j:=\mathcal F^{-1}\chi_j$ and $K_0:=\mathcal F^{-1}\chi$.

[F1] $\chi=1_{(1,2)}\in L^1(\mathbb R)\cap L^2(\mathbb R)$, its integral transform is $\widehat\chi(x)=\int_1^2e^{-2\pi ix\xi}\,d\xi$, the integral transform of an $L^1$ function represents its distributional transform and its Plancherel transform almost everywhere, and $\mathcal F_2^{-1}=R\mathcal F_2$ with $Rf(x)=f(-x)$ ([[def-fourier-transform-on-l-one-of-rn]], [[thm-l-one-l-two-agreement-of-fourier-transform]], [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-l-two-fourier-inversion]]).

[F2] For $j\in\mathbb Z$, $\widehat{\chi(2^{-j}\cdot)}(x)=2^{j}\widehat\chi(2^jx)$: this is the one-dimensional case of the dilation law $\widehat{f\circ A}(\xi)=|\det A|^{-1}\widehat f(A^{-T}\xi)$ with $A=2^{-j}I$, and $\widehat{f(-\cdot)}=\widehat f(-\cdot)$ ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]). For every nonnegative measurable $H$ and $b>0$, $\int_{\mathbb R} bH(bx)\,dx=\int_{\mathbb R}H(u)\,du$, with infinite values allowed: apply [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] to the $C^1$ diffeomorphism $x\mapsto bx$.

[F3] Complex exponential and Euler: $\exp(i\theta)=\cos\theta+i\sin\theta$, $|\exp(i\theta)|=1$, and for $x\ne0$ the derivative of $\xi\mapsto e^{2\pi ix\xi}/(2\pi ix)$ is $e^{2\pi ix\xi}$, so Newton-Leibniz applies to the real and imaginary parts ([[def-complex-exponential]], [[thm-eulers-formula]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-newton-leibniz-with-interior-derivative]]).

[F4] The harmonic series diverges: each block $2^k\le m<2^{k+1}$ contributes at least $2^k/2^{k+1}=1/2$, so its partial sums are unbounded. For pairwise disjoint measurable sets $E_m$ and $a_m\ge0$, the nonnegative simple function $s_N:=\sum_{m=1}^N a_m\mathbf1_{E_m}$ has Lebesgue integral $\sum_{m=1}^N a_m\lambda(E_m)$ ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]). If $s_N\le f$, monotonicity gives $\int f\ge\int s_N$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). A closed interval has measure its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F5] The smooth partition of [[def-inhomogeneous-dyadic-frequency-partition]] has $\|K_j\|_1\le C$ uniformly in $j$ ([[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]]).

[F6] Cosine has period $2\pi$, vanishes at $\pi/2$ and $3\pi/2$, decreases from $\pi/2$ to $\pi$ and increases from $\pi$ to $3\pi/2$, so it is nonpositive on $[\pi/2,3\pi/2]$ and its $2\pi$ translates ([[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

## Counterexample

1.1 The inverse transform of the sharp cutoff. Since $\chi\in L^1\cap L^2$, [F1] gives $\mathcal F^{-1}\chi=R\mathcal F_2\chi$ as an $L^2$ class, and $\mathcal F_2\chi=\widehat\chi$ almost everywhere, so $K_0(x)=\widehat\chi(-x)=\int_1^2e^{2\pi ix\xi}\,d\xi$ for almost every $x$, the last function being continuous and hence the correct representative. For $x\ne0$, [F3] gives $\int_1^2e^{2\pi ix\xi}d\xi=\bigl(e^{4\pi ix}-e^{2\pi ix}\bigr)/(2\pi ix)=e^{3\pi ix}\bigl(e^{\pi ix}-e^{-\pi ix}\bigr)/(2\pi ix)=e^{3\pi ix}\sin(\pi x)/(\pi x)$, using $e^{\pi ix}-e^{-\pi ix}=2i\sin(\pi x)$ from Euler's formula, and $K_0(0)=\int_1^2d\xi=1$; consequently $|K_0(x)|=|\sin(\pi x)|/(\pi|x|)$ for $x\ne0$. [F1, F3, algebra]

2.1 The kernel is not in $L^1$. For $m\ge1$ let $I_m:=[m+\tfrac14,m+\tfrac34]$. On $I_m$ one has $2\pi x\in[2\pi m+\tfrac\pi2,2\pi m+\tfrac{3\pi}2]$, so $\cos(2\pi x)\le0$; since $|K_0(x)|^2=|e^{4\pi ix}-e^{2\pi ix}|^2/(4\pi^2x^2)=(2-2\cos(2\pi x))/(4\pi^2x^2)\ge1/(2\pi^2x^2)$ on $I_m$, and $|x|\le m+\tfrac34$, there holds $\int_{I_m}|K_0|\ge\frac1{\pi\sqrt2}\cdot\frac1{m+3/4}\cdot\frac12\ge\frac{c}{m+1}$ with $c:=1/(4\pi\sqrt2)$. The intervals $I_m$ are pairwise disjoint. For every $N\ge1$ set $a_m:=1/(\pi\sqrt2(m+3/4))$ and $s_N:=\sum_{m=1}^N a_m\mathbf1_{I_m}$. The pointwise bound just proved gives $s_N\le |K_0|\mathbf1_{[1,\infty)}$, and [F4] yields $\int_1^\infty|K_0|\ge\int s_N=\sum_{m=1}^N a_m/2\ge c\sum_{m=1}^N1/(m+1)$. These finite lower bounds are unbounded by the harmonic-series argument in [F4], so $\int_1^\infty|K_0|=+\infty$ and hence $\|K_0\|_{L^1}=+\infty$. [F4, F6, step 1.1, algebra]

3.1 No uniform bound and the failure of the sharp replacement. By [F2] and step 1.1, $\widehat{\chi_j}(x)=2^{j}\widehat\chi(2^jx)$ and hence $K_j(x)=\widehat{\chi_j}(-x)=2^{j}\widehat\chi(-2^jx)=2^{j}K_0(2^jx)$ for every $j\in\mathbb Z$; the nonnegative change of variables in [F2], with $b=2^j>0$, gives $\|K_j\|_{L^1}=\|K_0\|_{L^1}=+\infty$ for every $j$, so in particular $\sup_j\|\chi_j^\vee\|_{L^1}=\infty$. This contradicts the uniform bound $\|K_j\|_1\le C$ of the smooth partition [F5]: the sharp-cutoff family cannot replace the smooth annular cutoffs in the convolution estimates, and smoothness of the partition is used essentially, not cosmetically. [F2, F5, step 1.1, step 2.1, algebra] ∎

## Remarks

*Recorded orientation, not proved here.* Nonintegrability of these kernels does not rule out strict-range $L^p$ multiplier bounds. Grafakos, §6.1.3, Theorem 6.1.5 and the discussion preceding it (printed p. 427), proves that the one-dimensional sharp dyadic square function does characterise $L^p$ for $1<p<\infty$. The same discussion records that in $\mathbb R^n$, $n\ge2$, the sharp-annulus square function fails to characterise $L^p$ when $1<p<\infty$ and $p\ne2$, because the ball indicator is not an $L^p$ multiplier. These source records are not used in the kernel computation above.
