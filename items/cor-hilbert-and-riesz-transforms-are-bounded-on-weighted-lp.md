---
id: cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp
kind: corollary
title: Hilbert and Riesz transforms are bounded on weighted L-p
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [thm-calderon-zygmund-operators-are-bounded-on-weighted-lp, cor-principal-value-truncations-converge-almost-everywhere, cor-hilbert-transform-is-bounded-on-lp, cor-riesz-transforms-are-bounded-on-lp, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds, lem-hilbert-transform-has-signum-fourier-multiplier, lem-riesz-transform-principal-value-kernel-formula, def-truncated-hilbert-transform-and-principal-value, def-riesz-transforms-on-euclidean-space, def-muckenhoupt-a-p-and-a-one-weights, def-weight-and-weighted-lp-space, thm-c-c-is-dense-in-l-p-for-radon-measures, def-dependent-choice, lem-dependent-choice-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 7.4.3, the closing comment that the weighted estimates hold for operators pointwise controlled by the maximal truncations, with the Hilbert and Riesz transforms as examples, printed p. 543"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "The A_p weighted strong type for the maximal operator, printed pp. 81-85"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]); this supplies
Countable Choice ([[lem-dependent-choice-implies-countable-choice]]) for the
truncation definitions. Let $1<p<\infty$ and $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]). Then the Hilbert transform $H$ on
$\mathbb R$ ([[def-truncated-hilbert-transform-and-principal-value]]) and each
Riesz transform $R_j$ on $\mathbb R^n$
([[def-riesz-transforms-on-euclidean-space]]) extend boundedly to $L^p(w)$
([[def-weight-and-weighted-lp-space]]), with norms bounded by
$C(n,p,[w]_{A_p})(A_1+A_2'+A_3+B)$, where the kernel constants are those
recorded for the kernels $1/(\pi x)$ and $c_nx_j/|x|^{n+1}$: for the Hilbert
kernel $A_1=1/\pi$, $A_2'=2/\pi$, $A_3=0$ and $B=1$, and for each Riesz kernel
$A_1=c_n$, $A_2'=c_n2^{n+1}(3n+4)$, $A_3=0$ and $B=1$. The maximal truncations
of these transforms obey the same bound, and for $w\in A_1$ they satisfy the
weighted weak $(1,1)$ estimate with the same structure of constants.

## Facts & Assumptions

**Given:** Dependent Choice; $1<p<\infty$; $w\in A_p$, and in the endpoint discussion $w\in A_1$; the Hilbert transform $H$ on $\mathbb R$ and the Riesz transforms $R_j$, $1\le j\le n$, on $\mathbb R^n$.

[F1] The Hilbert kernel $k(x)=1/(\pi x)$ satisfies $|k(x)|=1/(\pi|x|)$ for $x\ne0$ and $|k(x-y)-k(x)|\le(2/\pi)|y|\,|x|^{-2}$ whenever $|x|\ge2|y|>0$, is odd, and is recorded as a standard $1$-Hölder Calderón–Zygmund kernel with these constants; $H$ is the $L^2$-bounded convolution operator with norm one for the principal-value distribution $W=\mathrm{pv}\,1/(\pi x)$, and the truncations $H_\varepsilon g$ converge at every point of every Schwartz input to the corresponding value of the $L^2$ class ([[cor-hilbert-transform-is-bounded-on-lp]], [[lem-hilbert-transform-has-signum-fourier-multiplier]], [[def-truncated-hilbert-transform-and-principal-value]]).

[F2] Each Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ satisfies $|K_j(x)|\le c_n|x|^{-n}$, $|K_j(x-h)-K_j(x)|\le C_n|h|\,|x|^{-(n+1)}$ with $C_n=c_n2^{n+1}(3n+4)$ whenever $|h|\le|x|/2$, and $\int_{S^{n-1}}K_j(r\omega)\,d\sigma(\omega)=0$ for every $r>0$; $R_j$ is the $L^2$-bounded Fourier multiplier with symbol $-i\xi_j/|\xi|$ and operator norm at most one, and its truncations converge at every point of every Schwartz input to the corresponding value of the $L^2$ class ([[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]], [[cor-riesz-transforms-are-bounded-on-lp]], [[lem-riesz-transform-principal-value-kernel-formula]], [[def-riesz-transforms-on-euclidean-space]]).

[F3] Weighted Calderón–Zygmund theorem: under the standing Dependent Choice hypothesis, for $1<p<\infty$, $w\in A_p$, and any kernel data $A_1,A_2',A_3,B$ as in that theorem, every $f\in L^p(w)$ has $\|T^{**}f\|_{L^p(w)}\le C(n,p,\delta,[w]_{A_p})(A_1+A_2'+A_3+B)\|f\|_{L^p(w)}$ with the same bound for $T^*$; if $w\in A_1$ the weak $(1,1)$ bound $w(\{T^{**}f>\lambda\})\le C(n,\delta,[w]_{A_1})(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_{L^1(w)}$ holds; and if the truncations converge almost everywhere to a measurable limit on a dense subspace of $L^p(w)$, then the limit exists almost everywhere for every $f\in L^p(w)$ and satisfies the same $L^p(w)$ bound ([[thm-calderon-zygmund-operators-are-bounded-on-weighted-lp]]).

[F4] $w\,d\lambda$ is a Radon measure and $C_c^\infty(\mathbb R^n)$ is dense in $L^p(w\,d\lambda)$ for $1\le p<\infty$ under Dependent Choice ([[def-weight-and-weighted-lp-space]], [[thm-calderon-zygmund-operators-are-bounded-on-weighted-lp]], Facts [F5], which combines Radon $C_c$ density with uniform compact-support smoothing).

[F5] The principal-value truncations of the Hilbert and Riesz transforms converge almost everywhere on the dense class $\mathcal S(\mathbb R^n)$ of Schwartz functions; indeed the published convergence theorem applies to these kernels with that dense class ([[cor-principal-value-truncations-converge-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Kernel data in normalized form. For the Hilbert kernel, $|k(x)|=\pi^{-1}|x|^{-1}$ gives the pointwise size constant $A_1=1/\pi$, the difference estimate of [F1] is the standard $1$-Hölder condition with $A_2'=2/\pi$, and oddness gives $\int_{r<|x|<R}k(x)\,dx=0$ for all $0<r<R$, so the cancellation constant is $A_3=0$; the $L^2$ norm bound is $B=1$, and $H$ is the convolution operator with the principal-value distribution of [F1] satisfying the off-support representation with kernel $k$. For each Riesz kernel, [F2] gives the size constant $A_1=c_n$, the standard $1$-Hölder constant $A_2'=C_n=c_n2^{n+1}(3n+4)$, vanishing annulus integrals and hence $A_3=0$, and $B=1$, together with the principal value on Schwartz functions. Hence both families meet the hypotheses of the weighted theorem [F3] with the constants displayed in the statement. [F1, F2, given, algebra]

1.2 Weighted bounds for the maximal truncations. By [F3] applied to the Hilbert kernel and to each Riesz kernel: for $f\in L^p(w)$ one has $\|H^{**}f\|_{L^p(w)}\le C(n,p,[w]_{A_p})(1/\pi+2/\pi+0+1)\|f\|_{L^p(w)}$ and $\|R_j^{**}f\|_{L^p(w)}\le C(n,p,[w]_{A_p})(c_n+C_n+0+1)\|f\|_{L^p(w)}$, with the same bounds for $H^*$ and $R_j^*$ since $T^*\le T^{**}\le2T^*$; for $w\in A_1$ the theorem gives the weighted weak $(1,1)$ bounds for the maximal truncations with the corresponding constants. [F1, F2, F3, given, algebra]

2.1 Almost-everywhere convergence and the bounded extension. Let $1<p<\infty$ and $w\in A_p$. The subspace $C_c^\infty(\mathbb R^n)$ is dense in $L^p(w)$ by [F4], and for every $g\in C_c^\infty(\mathbb R^n)$ — a Schwartz function — the truncations converge almost everywhere by [F5]. The final clause of [F3] applied to the Hilbert kernel and to each Riesz kernel therefore gives, for every $f\in L^p(w)$, an almost-everywhere limit $Hf$ or $R_jf$ satisfying the displayed $L^p(w)$ bounds; these limits define the stated bounded extensions. For $w\in A_1$ and $f\in L^1(w)$ the same closure argument applies with the weak $(1,1)$ bound in place of the strong bound: for $g\in C_c^\infty(\mathbb R^n)$, $\limsup_{\varepsilon,\varepsilon'\downarrow0}|T_\varepsilon f-T_{\varepsilon'}f|\le2T^*(f-g)$ off the null set where the truncations of $g$ converge, and $w(\{T^*(f-g)>\eta\})\le C(n,\delta,[w]_{A_1})(A_1+A_2'+A_3+B)\eta^{-1}\|f-g\|_{L^1(w)}$ tends to zero by density [F4], so the truncations converge $w$-almost everywhere and the limit obeys $|Tf|\le T^*f$. [F3, F4, F5, step 1.2, given, algebra] ∎
