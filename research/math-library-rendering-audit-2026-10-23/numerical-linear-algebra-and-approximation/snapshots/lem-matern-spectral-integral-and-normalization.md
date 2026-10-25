---
id: lem-matern-spectral-integral-and-normalization
kind: lemma
title: "The Matérn spectral integral, normalization, and radial formula"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-normalized-matern-spectral-kernel
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
  - thm-gaussian-integral
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-mean-value-theorem
  - thm-dominated-convergence
  - lem-complex-integration-by-parts-on-intervals-and-decaying-lines
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter
        4, equations (4.5)–(4.15)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 24–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice, and fix $d\ge1$, $\nu>0$, $a>0$, $s=\nu+d/2$, and $A,w,k$ as in [[def-normalized-matern-spectral-kernel]]. Then $w>0$, $w\in L^1(\mathbb R^d)$, and
$$\int_{\mathbb R^d}w(\xi)\,d\xi=1.$$
The integral defining $k(z)$ is absolutely convergent for every $z$; $k$ is real, even, radial, and continuous, and $k(0)=1$. For every $z\in\mathbb R^d$,
$$k(z)=\frac{a^{2\nu}}{\Gamma(\nu)}\int_0^\infty t^{\nu-1}\exp\!\left(-a^2t-\frac{|z|^2}{4t}\right)dt.$$
For $z\ne0$ this is equivalently
$$k(z)=\frac{2^{1-\nu}}{\Gamma(\nu)}(a|z|)^\nu K_\nu(a|z|),$$
where $K_\nu$ has the integral normalization in [[def-normalized-matern-spectral-kernel]]. Under the stated Fourier convention, the $d$-dimensional Gaussian identity is, for $t>0$,
$$\int_{\mathbb R^d}e^{-4\pi^2t|\xi|^2}e^{2\pi i z\cdot\xi}\,d\xi=(4\pi t)^{-d/2}e^{-|z|^2/(4t)}.$$

## Facts & Assumptions

**Given:** Countable Choice, the normalized Matérn parameters and density in [[def-normalized-matern-spectral-kernel]], and the real Euler integral for $\Gamma$.

[F1] For $q>0$, $\Gamma(q)=\int_0^\infty t^{q-1}e^{-t}\,dt$; it converges and is positive. ([[def-real-gamma-function-by-the-euler-integral]], [[thm-real-gamma-euler-integral-convergence]])

[F2] $\int_{-\infty}^{\infty}e^{-x^2}dx=\sqrt\pi$. ([[thm-gaussian-integral]])

[F3] Tonelli/Fubini holds for nonnegative or absolutely integrable functions on completed Euclidean product measures under Countable Choice, and $\lambda_m\times\lambda_n$ agrees with $\lambda_{m+n}$ on Borel sets. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]])

[F4] Polar coordinates express a nonnegative radial Lebesgue integral as its radial integral against $r^{d-1}dr$ and finite sphere measure. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F5] The complex exponential has derivative itself, and a real differentiable function with zero derivative on an interval is constant by the mean value theorem. ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-mean-value-theorem]])

[F6] Pointwise convergence under an integrable majorant permits passage of limits through Lebesgue integrals. ([[thm-dominated-convergence]])

[F7] For $b>0$, $K_\nu(b)=\tfrac12(b/2)^\nu\int_0^\infty u^{-\nu-1}e^{-u-b^2/(4u)}du$. ([[def-normalized-matern-spectral-kernel]])

[F8] Under Countable Choice, complex $C^1$ factors obey Lebesgue integration by parts on finite intervals; on $\mathbb R$ the boundary-free identity holds if both derivative products are in $L^1$ and the product tends to zero at both ends. ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]])

[A1] Countable Choice is the precise choice principle used by [F3] and [F4]; no full Axiom of Choice is used in this spectral calculation. ([[def-countable-choice]])

## Proof

**Proof technique:** direct.

**Given:** The hypotheses of the statement. Write $\lambda_d$ for Lebesgue measure and use the negative-sign $2\pi$ Fourier convention from [[def-normalized-matern-spectral-kernel]].

1.1 Since $2s>d$, polar coordinates [F4] and comparison with $r^{d-1-2s}$ for $r\ge1$ show $\int_{\mathbb R^d}(a^2+4\pi^2|\xi|^2)^{-s}d\xi<\infty$; the integrand is bounded near $0$. Since $A>0$ by [F1] and the positive parameters, $w>0$ and $w\in L^1$. [F1, F4, A1, algebra]

1.2 For one dimension let $I_t(z)=\int_{\mathbb R}e^{-4\pi^2t\xi^2}e^{2\pi iz\xi}d\xi$. Differentiation under the integral is justified by [F6], since $2\pi|\xi|e^{-4\pi^2t\xi^2}$ is integrable. Apply [F8] with $u(\xi)=e^{-4\pi^2t\xi^2}$ and $v(\xi)=e^{2\pi iz\xi}$: both are $C^1$, $u'v$ and $uv'$ are integrable Gaussian multiples, and $uv\to0$ at both ends. Thus $-8\pi^2t\int\xi uv=-2\pi izI_t(z)$, which gives $I_t'(z)=-zI_t(z)/(2t)$. The initial value from [F2] and scaling is $I_t(0)=(4\pi t)^{-1/2}$. Set $J(z)=I_t(z)e^{z^2/(4t)}$; the differential equation gives $J'(z)=0$. The real and imaginary parts of $J$ are constant by the mean value theorem [F5], so $J(z)=J(0)=I_t(0)$ and $I_t(z)=(4\pi t)^{-1/2}e^{-z^2/(4t)}$. [F2, F5, F6, F8, A1, algebra]

2.1 For $B>0$, [F1] and the substitution $u=Bt$ give $B^{-s}=\Gamma(s)^{-1}\int_0^\infty t^{s-1}e^{-Bt}dt$. Apply this with $B=a^2+4\pi^2|\xi|^2$ and use Tonelli [F3]. The product Gaussian integral in [F2] is $(4\pi t)^{-d/2}$ by scaling and the Borel product identity in [F3]. A second substitution $u=a^2t$ gives $$\int w=\frac{A}{\Gamma(s)}(4\pi)^{-d/2}\int_0^\infty t^{\nu-1}e^{-a^2t}dt=\frac{A\Gamma(\nu)}{\Gamma(s)(4\pi)^{d/2}a^{2\nu}}=1.$$ [F1, F2, F3, A1, step 1.1, algebra]

2.2 The integrand in $d$ dimensions is a product of the one-dimensional integrands in step 1.2. Absolute integrability and [F3] therefore give the stated $d$-dimensional Gaussian Fourier identity. [F3, step 1.2]

3.1 Absolute Fubini is valid in the gamma representation of $w$ because its absolute double integral is the finite normalization integral in steps 1.1 and 2.1. Substitute that representation into $k(z)$ and apply step 2.2; the result is $$k(z)=\frac{A}{\Gamma(s)}(4\pi)^{-d/2}\int_0^\infty t^{s-d/2-1}e^{-a^2t-|z|^2/(4t)}dt=\frac{a^{2\nu}}{\Gamma(\nu)}\int_0^\infty t^{\nu-1}e^{-a^2t-|z|^2/(4t)}dt.$$ The same absolute bound proves convergence for every $z$. [F1, F3, A1, step 1.1, step 2.1, step 2.2, algebra]

4.1 From $w\in L^1$, dominated convergence [F6] makes $k$ continuous. The integral formula in step 3.1 is real and depends on $z$ only through $|z|$, so $k$ is real, even, and radial. Step 2.1 gives $k(0)=1$. [F6, step 2.1, step 3.1, algebra]

5.1 In step 3.1 substitute $u=a^2t$. For $b=a|z|>0$, then substitute $v=b^2/(4u)$ in the resulting integral; [F7] gives $\int_0^\infty u^{\nu-1}e^{-u-b^2/(4u)}du=2^{1-\nu}b^\nu K_\nu(b)$. Thus the displayed Bessel expression follows for $z\ne0$. [step 3.1, F7, algebra] ∎
