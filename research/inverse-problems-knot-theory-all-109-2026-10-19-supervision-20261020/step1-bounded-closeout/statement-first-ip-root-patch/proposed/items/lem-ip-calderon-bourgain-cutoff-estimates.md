---
id: lem-ip-calderon-bourgain-cutoff-estimates
kind: lemma
title: Uniform cutoff estimates at the CGO characteristic sphere
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-plancherel
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Haberman and Tataru, Uniqueness in Calderón's problem with Lipschitz conductivities"
      url: "https://arxiv.org/pdf/1108.6068"
      locator: "Section 2, Lemmas 2.1–2.2 and complete proofs, printed pp. 4–7."
dependency_level: 0
---

## Statement

Assume Countable Choice. Let $d\ge3$, $s\ge1$, and let $e_1,e_2\in\mathbb R^d$ be orthonormal. Put $\zeta=s(e_1-ie_2)$ and
$$p_\zeta(\xi)=-|\xi|^2+2i\zeta\cdot\xi.$$
Use the unitary angular-frequency Fourier transform $\widehat u(\xi)=(2\pi)^{-d/2}\int e^{-ix\cdot\xi}u(x)\,dx$, and set
$$\|u\|_{\dot X_\zeta^b}^2=\int_{\mathbb R^d}|p_\zeta(\xi)|^{2b}|\widehat u(\xi)|^2\,d\xi,\qquad \|u\|_{X_\zeta^b}^2=\int_{\mathbb R^d}(s+|p_\zeta(\xi)|)^{2b}|\widehat u(\xi)|^2\,d\xi.$$
For every fixed Schwartz function $\phi$, a constant $C=C(d,\phi)$ independent of $s,e_1,e_2$ satisfies, for all Schwartz $u$,
$$\|\phi u\|_{\dot X_\zeta^{-1/2}}\le C\|u\|_{X_\zeta^{-1/2}},\qquad \|\phi u\|_{X_\zeta^{1/2}}\le C\|u\|_{\dot X_\zeta^{1/2}}.$$
Consequently
$$\|\phi u\|_2\le Cs^{-1/2}\|u\|_{\dot X_\zeta^{1/2}},\qquad \|\nabla(\phi u)\|_2\le Cs^{1/2}\|u\|_{\dot X_\zeta^{1/2}}.$$
The norms are finite on Schwartz space; the values of the weights on the measure-zero characteristic sphere do not affect them. All four maps extend continuously to the completions in the respective input norms.

## Statement references

[[thm-plancherel|Plancherel, after the frequency rescaling from the library's $2\pi$ convention.]]

[[thm-fourier-transform-maps-schwartz-space-continuously-to-itself|Rapid decay of the cutoff transform and the differentiation formula.]]

## Facts & Assumptions

**Given:** Countable Choice and the parameters and Fourier norms in the statement.

[F1] Fourier transformation is unitary on $L^2$; the unitary angular convention is obtained from the library convention by $\widehat u(\xi)=(2\pi)^{-d/2}(\mathcal F_2u)(\xi/(2\pi))$. The Schwartz transform is Schwartz and transforms derivatives to $i\xi_j\widehat u$. ([[thm-plancherel]], [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]])

[F2] Fourier transformation of a product of Schwartz functions is $(2\pi)^{-d/2}$ times convolution of their transforms. ([[thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis]])

[F3] Nonnegative iterated integrals can be interchanged, polar integration is available in Euclidean subspaces, and the integral Cauchy–Schwarz inequality holds. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-holder-inequality-for-integrals]])

[A1] Countable Choice is assumed at the Fourier and integral interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Rotate coordinates so the two given vectors are the first coordinate vectors. Write $\xi=(a,se_2'+r\omega)$ with $a\in\mathbb R$, $r\ge0$, and $\omega\in S^{d-2}$ in the remaining coordinates. Then $p_\zeta(\xi)=s^2-a^2-r^2+2isa$, and its zero set is $\Sigma=\{a=0,r=s\}$. The exact distance to this sphere is $D(\xi)=\sqrt{a^2+(r-s)^2}$. For each fixed $K$, on $|\xi|\le Ks$ one has $|p_\zeta(\xi)|\asymp_K sD(\xi)$. To check the lower bound, if $|a|\ge D/4$, use the imaginary part. Otherwise $|r-s|>D/2$ and $|a|\le|r-s|/2$; since $|r-s|\le r+s$, $|s^2-r^2-a^2|\ge(s+r)|s-r|-a^2\ge(3/4)(s+r)|s-r|\ge(3/8)sD$. The upper bound follows by expanding $s^2-a^2-r^2$ and using $|a|+r+s\le C_Ks$. Also, if $|\xi|\ge8s$, the triangle inequality gives $|p_\zeta(\xi)|\asymp|\xi|^2$. Therefore $s/|p_\zeta(\xi)|\le C(1+D(\xi)^{-1})$ everywhere away from $\Sigma$. [given, algebra]

2.1 For $N>d+3$, the integral $\int\langle\xi-\eta\rangle^{-N}D(\xi)^{-1}\,d\xi$ is bounded uniformly in $s\ge1$ and $\eta\in\mathbb R^d$, where $\langle x\rangle=(1+|x|^2)^{1/2}$. Off $D<1/4$ this follows from $D^{-1}\le4$ and integrability of the bracket power. On $D<1/4$, write $\eta=(b,se_2'+t\nu)$ with $t\ge0$ and any unit $\nu$ if $t=0$. The inequality $|r\omega-t\nu|\ge(r/2)|\omega-\nu|$ follows from $(r-t)^2+rt|\omega-\nu|^2$ by minimizing in $t\ge0$. Hence the angular integral of $\langle\xi-\eta\rangle^{-N}$ is at most $C r^{-(d-2)}$ for $r\ge3/4$. Indeed, in polar angle $\theta$ from $\nu$, split at $\theta=1/r$ and use $|\omega-\nu|=2\sin(\theta/2)\ge2\theta/\pi$ and the spherical measure bound $C\theta^{d-3}d\theta$; the two integrals are bounded by $Cr^{-(d-2)}$. This cancels the radial Jacobian $r^{d-2}$. The remaining integral over $|a|,|r-s|<1/4$ of $(a^2+(r-s)^2)^{-1/2}$ is finite with an absolute bound by planar polar integration. This proves the uniform assertion, including all centers $\eta$. [F3, A1, step 1.1, algebra]

3.1 Put $h=\xi-\eta$. The identity $p_\zeta(\eta)-p_\zeta(\xi)=|\xi|^2-|\eta|^2-2i\zeta\cdot h$ and the bound $|\xi|\le C(s+\sqrt{|p_\zeta(\xi)|})$ imply $$s+|p_\zeta(\eta)|\le C(s+|p_\zeta(\xi)|)\langle h\rangle^2.$$ For the auxiliary bound, use $|\xi|^2\le|p_\zeta(\xi)|+2\sqrt2s|\xi|$ and solve this quadratic inequality. In the difference identity, the terms $s|h|$, $\sqrt{|p_\zeta(\xi)|}|h|$, and $|h|^2$ are absorbed by the displayed right side using $s\ge1$ and $2ab\le a^2+b^2$. Since $\widehat\phi$ is rapidly decreasing, steps 1.1–2.1 now give $$\sup_\eta\int |\widehat\phi(\xi-\eta)|\frac{s+|p_\zeta(\eta)|}{|p_\zeta(\xi)|}\,d\xi\le C_\phi.$$ Indeed the integrand is bounded by $C_\phi\langle\xi-\eta\rangle^{-N}(1+D(\xi)^{-1})$ after choosing sufficiently many Schwartz powers. [F1, step 1.1, step 2.1, algebra]

4.1 For nonnegative weights $v,w$ positive almost everywhere and an integrable kernel $K$, Cauchy–Schwarz and Tonelli yield $$\int w(\xi)|(K*f)(\xi)|^2d\xi\le\|K\|_1\left(\sup_\eta\int |K(\xi-\eta)|\frac{w(\xi)}{v(\eta)}d\xi\right)\int v(\eta)|f(\eta)|^2d\eta.$$ To see this directly, bound $|K*f|^2$ by $\|K\|_1\int|K(\xi-\eta)||f(\eta)|^2d\eta$, multiply by $w$, and interchange nonnegative integrals. Apply this with $K=(2\pi)^{-d/2}\widehat\phi$, $v=(s+|p_\zeta|)^{-1}$ and $w=|p_\zeta|^{-1}$. Step 3.1 and [F2] prove the negative-half cutoff bound. The locally integrable singularity proved in step 2.1 and the quadratic large-frequency growth show that every Schwartz function has finite negative-half norm. [F1, F2, F3, step 2.1, step 3.1, algebra]

5.1 The positive-half estimate is the dual of step 4.1. More explicitly, use the same negative-half bound for the cutoff $\overline\phi$ and the Fourier $L^2$ pairing. Cauchy–Schwarz with reciprocal weights gives $|(\phi u,v)_{L^2}|=|(u,\overline\phi v)_{L^2}|\le\|u\|_{\dot X^{1/2}_\zeta}\|\overline\phi v\|_{\dot X^{-1/2}_\zeta}\le C\|u\|_{\dot X^{1/2}_\zeta}\|v\|_{X^{-1/2}_\zeta}$. The supremum over Schwartz $v$ of the left side divided by its negative-half norm equals $\|\phi u\|_{X^{1/2}_\zeta}$. For this equality, truncate the weighted dual extremizer to a ball and away from $\Sigma$, approximate it by smooth compactly supported frequency functions there, and use ordinary $L^2$ density where the weights are bounded above and below; monotone truncation recovers the full weighted integral. Thus the claimed supremum uses no unattained extremizer. [F1, F3, step 4.1, algebra]

6.1 The positive-half weight is at least $s$, so step 5.1 immediately gives $\|\phi u\|_2\le Cs^{-1/2}\|u\|_{\dot X^{1/2}_\zeta}$. Split the gradient Fourier integral into $|\xi|\le8s$ and its complement. The first part has norm at most $8s\|\phi u\|_2$, hence at most $Cs^{1/2}\|u\|_{\dot X^{1/2}_\zeta}$. On the complement $|\xi|^2\le C|p_\zeta(\xi)|$, so its norm is at most $C\|\phi u\|_{X^{1/2}_\zeta}\le C\|u\|_{\dot X^{1/2}_\zeta}$. Since $s\ge1$, their sum gives the gradient bound. A bounded map sends norm-Cauchy sequences to norm-Cauchy sequences, with the same bound; passing to equivalence classes therefore extends each map uniquely to the stated completions. [F1, step 1.1, step 5.1, algebra] ∎