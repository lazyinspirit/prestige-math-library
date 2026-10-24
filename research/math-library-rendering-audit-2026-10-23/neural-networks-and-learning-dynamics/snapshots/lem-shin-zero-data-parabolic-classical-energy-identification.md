---
id: lem-shin-zero-data-parabolic-classical-energy-identification
kind: lemma
title: "Zero-data bounded classical parabolic errors are weak energy solutions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - def-wkp-zero-as-a-sobolev-closure
  - lem-shin-bounded-open-set-hilbert-evolution-triple
  - lem-shin-parabolic-classical-approximation-and-boundary-attainment
  - lem-parabolic-energy-pairing-and-trace
  - lem-parabolic-weak-compactness-separable-bochner-hilbert
  - thm-l-one-approximate-identities-converge-in-l-p
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendices F–G: classical error and energy context; weak identification supplied locally"
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $U\subset\mathbb R^d$ be bounded and open with an exterior tangent ball at every boundary point, and let $T>0$. Consider the intended divergence operator
$$L_tu=\sum_{i,j}D_i(a_{ij}D_ju)+\sum_iD_i(b_iu)+\sum_i c_iD_iu+du.$$
Assume $a=a^T\ge\lambda_0I$, $\lambda_0>0$, and $a,b,c,d$ bounded; the spatial derivatives of $a,b$ agree with distributional derivatives locally, and the expansion
$$\beta_j=\sum_iD_ia_{ij}+b_j+c_j,\qquad q=\sum_iD_ib_i+d$$
is locally valid with bounded $a,\beta,q$, locally parabolic $\alpha$-Hölder up to the final face, $0<\alpha<1$, and $q\le0$. Let $r$ be bounded and locally parabolic $\alpha$-Hölder up to that face. If $e$ is locally classical, bounded, continuous on the closed cylinder, zero on the initial and lateral faces, and satisfies $-e_t+L_te=r$, then
$$e\in L^2(0,T;H^1_0(U)),\qquad e_t\in L^2(0,T;H^{-1}(U)),\qquad e(0)=0\text{ in }L^2(U).$$
It is the unique zero-initial variational solution of that equation, and for a finite $C_E$ depending only on $T,\lambda_0$ and the divergence coefficient bounds,
$$\sup_{0\le t\le T}\|e(t)\|_2^2+\int_0^T\|De(t)\|_2^2dt\le C_E\|r\|_{L^2(U\times(0,T))}^2.$$
Consequently a sequence of such errors with $\|e_m\|_\infty\to0$ and $\|r_m\|_\infty\to0$ converges strongly to zero in $L^2(0,T;H^1(U))$. No closed-cylinder derivative regularity is assumed.

## Statement references

[Shin et al., Appendices F–G: parabolic consistency and energy estimates](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The choice assumptions, domain, coefficients, distributionally compatible expansion, source and classical zero-data error in the Statement.

[A1] Countable Choice and the Axiom of Choice are retained from the approximation, truncation and Sobolev suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

[F1] The bounded-open-set Sobolev triple is separable; $H^1_0(U)$ is the $H^1$-closure of compactly supported smooth functions ([[lem-shin-bounded-open-set-hilbert-evolution-triple]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Smooth weak approximants on exhausting polyhedral domains have uniform compact-interior classical estimates and converge to the unique bounded classical solution with the prescribed continuous data; compatible divergence-coefficient convolutions are permitted ([[lem-shin-parabolic-classical-approximation-and-boundary-attainment]]).

[F3] Evolution-space solutions have continuous $L^2$ traces and satisfy the time energy-pairing identity ([[lem-parabolic-energy-pairing-and-trace]]).

[F4] A bounded sequence in a separable Hilbert space has a weakly convergent subsequence, and the corresponding Bochner spaces are separable Hilbert spaces ([[lem-parabolic-weak-compactness-separable-bochner-hilbert]]).

[F5] Every $L^1$ approximate identity converges strongly to the identity in finite $L^p$, in particular $p=2$; the kernel may be anisotropic provided its mass, uniformly bounded $L^1$ norm and shrinking-tail conditions hold ([[thm-l-one-approximate-identities-converge-in-l-p]]).

## Proof

1.1 Use the domains $U_n$ and divergence-compatible smooth convolution approximants from [F2], with zero initial and lateral data and source $r_n$. Their spatial mollifier support stays inside $U$ at every point of $U_n$; their temporal mollifier is supported at positive past lags, sampling $t-s$ with $s>0$. Thus $a_n$ retains ellipticity and its bound, $b_n,c_n,d_n$ retain their separate bounds, and the expanded $\beta_n,q_n$ are the convolutions of the bounded original expanded coefficients, retaining their bounds and $q_n\le0$. No endpoint limit of the original $b,c,d$ at $T$ is used. Each fixed smooth approximant may be extended locally past $T$ for its construction; compactness is used only at times below $T$. The resulting weak solutions $e_n$ are smooth in the interior, uniformly bounded, and have a locally classical subsequential limit with zero continuous initial/lateral data at every time below $T$ by [F2]. Classical comparison on cylinders ending below $T$ identifies the limit with $e$. [A1, F2, given, construct]

2.1 Test the weak equation $e_{n,t}-L_ne_n=-r_n$ with $e_n$. The divergence terms have no boundary contribution because $e_n\in H^1_0(U_n)$ in time-integrated sense. In particular the lower-order spatial form is $$\int_{U_n}a_nDe_n\cdot De_n+\int_{U_n}(b_n-c_n)\cdot De_n\,e_n-\int_{U_n}d_ne_n^2.$$ The cross term is $b_n-c_n$, since the $b$ term is integrated by parts and the $c$ term is not. Write $B=\|b\|_\infty+\|c\|_\infty$ and $D=\|d\|_\infty$. With $y_n=\|e_n\|_2^2$, [F3], ellipticity and Young's inequality give $$\frac12y_n'+\frac{\lambda_0}{2}\|De_n\|_2^2\le\left(\frac{B^2}{2\lambda_0}+D+\frac12\right)y_n+\frac12\|r_n\|_2^2.$$ The constants are uniform in $n$; derivatives of the smoothed coefficients do not occur. [F1, F3, step 1.1, algebra]

3.1 Put $C_0=B^2/\lambda_0+2D+1$. The previous inequality gives $y_n'+\lambda_0\|De_n\|_2^2\le C_0y_n+\|r_n\|_2^2$. Multiply by $e^{-C_0t}$ and integrate, using $y_n(0)=0$. Then $\sup_ty_n\le e^{C_0T}\|r_n\|_{L^2}^2$. Integrating the same differential inequality without the factor bounds $\lambda_0\int\|De_n\|_2^2$ by $C_0T\sup y_n+\|r_n\|_{L^2}^2$. The boundedness of $r$ and the finite cylinder give a uniform right side. [step 2.1, algebra]

4.1 Extend each $e_n$ by zero from $U_n$ to $U$. For almost every time this lies in $H^1_0(U)$: extend its compactly supported smooth $H^1(U_n)$ approximants by zero, which preserves their norms, and use the closure definition in [F1]. The bounds in step 3.1 therefore give a bounded sequence in $L^2(0,T;H^1_0(U))$. Apply [F4] and pass to a weakly convergent subsequence. The local uniform convergence from step 1.1 identifies this weak limit with $e$ almost everywhere, by testing on compact interior cylinders. Such cylinders exhaust $U\times(0,T)$; a locally zero $L^2$ function is zero almost everywhere on their union. Hence $e\in L^2(0,T;H^1_0(U))$. [A1, F1, F4, step 1.1, step 3.1, construct]

5.1 Fix a compact positive-time cylinder $K\Subset U\times(0,T)$ and a smooth spacetime cutoff $\chi$ equal to one near $K$. Extend each of $\chi b,\chi c,\chi d$ by zero to $\mathbb R^{d+1}$; these bounded compactly supported functions belong to $L^2$. The nonnegative product convolution kernels used in step 1.1 have mass one, $L^1$ norm one, and support shrinking to zero in both space and time (with positive past time lag). Thus they satisfy the approximate-identity conditions, although the spatial and temporal scales differ. Apply [F5] with $p=2$ to these extensions. For large $n$ their convolutions agree on $K$ with $b_n,c_n,d_n$, respectively, so $b_n\to b$, $c_n\to c$ and $d_n\to d$ strongly in $L^2(K)$, with their common uniform supremum bounds. Only $a_n,\beta_n,q_n,r_n$ are asserted to converge uniformly on such compact cylinders, by their local Hölder regularity. For a smooth test $\phi$ supported in $K$, the $a_nDe_n\cdot D\phi$ term passes by uniform coefficient convergence and weak $L^2$ gradient convergence. In the term $c_n\cdot De_n\,\phi$, the test vector $c_n\phi$ converges strongly in $L^2(K)$, so its pairing with the bounded weakly convergent gradients tends to $\int c\cdot De\,\phi$. In the $b_n e_n\cdot D\phi$ and $d_ne_n\phi$ terms, strong local coefficient convergence and local uniform convergence of $e_n$ imply strong $L^2$ convergence of the products. The source and time-test terms pass by local uniform convergence. These arguments prove the limiting weak identity on every compact positive-time cylinder without extra spatial $C^1$ assumptions on $b,c,d$. [F1, F5, step 1.1, step 3.1, step 4.1, algebra]

6.1 For a smooth spacetime test with compact spatial support in $U$ but not necessarily vanishing at initial time, first perform the passage above on $[\delta,T]$, taking its support strictly below $T$ when necessary. The common bounded coefficient and source norms, supremum bounds and energy bounds control the omitted interval $(0,\delta)$ uniformly: terms linear in gradients are at most a fixed constant times $\sqrt\delta\|De_n\|_{L^2}$ by Cauchy–Schwarz, and the zeroth-order, source and time-test terms are at most a constant times $\delta$. The same bounds hold for the limit by step 4.1. Letting $\delta\downarrow0$ therefore gives the identity with zero initial boundary term, inherited from the approximants. Density of spatial compact-smooth functions in $H^1_0(U)$ extends the positive-time identity to all variational tests, since the divergence coefficients are bounded and the limit has the membership established in step 4.1. It follows that $e_t=L_te-r\in L^2(0,T;H^{-1}(U))$. [F1, step 3.1, step 4.1, step 5.1, algebra]

7.1 By [F3], this evolution-space function has a continuous $L^2$ trace. Its integration-by-parts identity compared with the weak identity in step 6.1, for tests $\eta(t)\phi(x)$ with $\eta(0)\ne0$ and $\phi\in C_c^\infty(U)$, gives $(e(0),\phi)_{L^2}=0$. Density in $L^2(U)$ gives $e(0)=0$. Thus $e$ is a zero-initial variational solution as claimed. If two such weak solutions exist, their difference has zero source and zero initial value. The same test and integrating-factor argument as steps 2.1–3.1 on $U$ gives zero $L^2$ norm at every time, proving weak uniqueness. [F1, F3, step 2.1, step 3.1, step 6.1, algebra]

8.1 Apply [F3] to the now identified weak solution $e$, repeating step 2.1 on $U$ with its actual source $r$. The integrating-factor and integrated gradient arguments in step 3.1 yield the stated estimate with, for example, $C_E=e^{C_0T}+\lambda_0^{-1}(C_0Te^{C_0T}+1)$. The exact value is immaterial, but its dependence is only on the declared quantities, not on boundary derivatives of $e$. [F3, step 2.1, step 3.1, step 7.1, algebra]

9.1 For the final convergence assertion, $\|r_m\|_{L^2}^2\le T|U|\|r_m\|_\infty^2\to0$. The estimate in step 8.1 gives $\int\|De_m\|_2^2\to0$, and either that estimate or $\int\|e_m\|_2^2\le T|U|\|e_m\|_\infty^2$ gives the zeroth-order term. Their sum is the squared $L^2(0,T;H^1(U))$ norm. This proves strong convergence and completes the result. [step 8.1, algebra] ∎

## Remarks

The expansion assumption is deliberately distributional as well as pointwise. Local $C^1$ spatial coefficients imply it. The source's word “differentiable” should not be used to conceal an unproved weak integration-by-parts identity for pathological pointwise derivatives. This helper imposes no extra boundary smoothness and no $C^{2,1}$ regularity on the closed cylinder.

The intended operator has a separately indexed $\sum_iD_i(b_iu)$ term. The source's printed $\sum_{i,j}D_i(a_{ij}D_ju+b_iu)$ repeats that term $d$ times and is incompatible with its own expanded drift and potential; it is not the operator used in this helper.
