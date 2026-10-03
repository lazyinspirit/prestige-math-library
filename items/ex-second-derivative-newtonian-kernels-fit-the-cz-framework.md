---
id: ex-second-derivative-newtonian-kernels-fit-the-cz-framework
kind: example
title: "Newtonian Hessian kernels fit the Calderón–Zygmund framework"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-riesz-transforms-are-ltwo-bounded, def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-newtonian-potential, def-riesz-transforms-on-euclidean-space, def-standard-holder-calderon-zygmund-kernel, lem-ltwo-fourier-multiplier-bound, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-polar-coordinates-formula-for-lebesgue-measure, thm-distributions-supported-at-one-point, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, thm-fourier-transform-converts-allowed-tempered-convolutions-to-products, def-hilbert-space-adjoint, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations, revised 18 June 2014"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7.1, Theorem 2.26 and its proof (second derivatives of the Newtonian potential), printed pp. 37–38"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.2, homogeneous kernels with zero spherical mean, printed pp. 333–353"
---



## Example

Assume Countable Choice. Let $n\ge3$ and let $\Gamma$ be the Newtonian
potential normalised by $-\Delta\Gamma=\delta_0$, and write $\sigma_{n-1}:=|S^{n-1}|$. The distributional Hessian
satisfies $\partial_{ij}\Gamma=\mathrm{p.v.}\,\partial_{ij}\Gamma-(\delta_{ij}/n)\delta_0$,
where the singular part is the principal value of the function
$k_{ij}(x)=\partial_{ij}\Gamma(x)=\sigma_{n-1}^{-1}(nx_ix_j|x|^{-n-2}-\delta_{ij}|x|^{-n})$
on $\mathbb R^n\setminus\{0\}$, which is smooth and homogeneous of degree $-n$
with $|k_{ij}(x)|\le(1+n)\sigma_{n-1}^{-1}|x|^{-n}$, first differences at most
$2^{n+1}C_n|y||x|^{-n-1}$ on $|x|\ge2|y|>0$, and zero spherical mean. Hence the
singular part of the second derivatives of the Newtonian potential is a standard
Calderón–Zygmund kernel after the local delta term is removed, and its
principal-value operator is $L^2$-bounded with symbol
$-\xi_i\xi_j/|\xi|^2+\delta_{ij}/n$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge3$; the Newtonian potential $\Gamma(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ with $\omega_{n-1}=|S^{n-1}|$, satisfying $-\Delta\Gamma=\delta_0$ distributionally; indices $1\le i,j\le n$.

[F1] For $n\ge3$ the locally integrable Newtonian kernel is $\Gamma(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ off zero, where $\omega_{n-1}=|S^{n-1}|$. The distributional fundamental-solution and Hessian identities are derived below; they are not consequences of the definition alone. ([[def-newtonian-potential]], [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]])

[F2] Fourier differentiation satisfies $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$. Polar integration uses the surface measure $\sigma$; it is orthogonally invariant and agrees with chart surface measure, with the radius-$r$ sphere measure scaled by $r^{n-1}$. The divergence theorem holds on bounded $C^1$ domains, with the outward normal on each boundary component. ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]])

[F3] A measurable symbol $M$ with $\|M\|_\infty<\infty$ defines a bounded $L^2$ Fourier multiplier $\mathcal F_2^{-1}M\mathcal F_2$ of norm $\|M\|_\infty$; the Riesz transforms are the multipliers with symbols $-i\xi_j/|\xi|$, so $R_iR_j$ is the multiplier with symbol $-\xi_i\xi_j/|\xi|^2$ and $\|R_iR_j\|\le1$ ([[lem-ltwo-fourier-multiplier-bound]], [[def-riesz-transforms-on-euclidean-space]], [[cor-riesz-transforms-are-ltwo-bounded]]).

[F4] A Calderón–Zygmund kernel has finite annular and Hörmander integral constants; a base kernel is standard $\delta$-Hölder when it also satisfies the stated pointwise first-difference bound. A size bound $|k|\le c|\cdot|^{-n}$ gives the annular constant $c|S^{n-1}|\log2$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[def-standard-holder-calderon-zygmund-kernel]]). Polar coordinates give $\int_{|x|\ge a}|x|^{-n-1}dx=|S^{n-1}|/a$ for $a>0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).



[F5] A distribution supported at zero is a finite sum of Dirac derivatives, whose coefficients are unique. Fourier transformation converts convolution of a tempered distribution with a Schwartz function into the product of their Fourier transforms. The Hilbert adjoint uses the first-variable-linear pairing; Fubini holds for integrable complex product kernels, and locally integrable distribution pairings determine the class. ([[thm-distributions-supported-at-one-point]], [[thm-fourier-transform-converts-allowed-tempered-convolutions-to-products]], [[def-hilbert-space-adjoint]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]])

## Verification

**Proof technique:** direct.

1.1 Differentiating $\Gamma(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ twice off the origin gives $k_{ij}(x)=\partial_{ij}\Gamma(x)=\omega_{n-1}^{-1}(nx_ix_j|x|^{-n-2}-\delta_{ij}|x|^{-n})$ for $x\ne0$: the first derivative is $(2-n)(n-2)^{-1}\omega_{n-1}^{-1}x_i|x|^{-n}=-\omega_{n-1}^{-1}x_i|x|^{-n}$, and differentiating once more with $\partial_j(x_i|x|^{-n})=\delta_{ij}|x|^{-n}-nx_ix_j|x|^{-n-2}$ gives the displayed expression. This function is smooth on $\mathbb R^n\setminus\{0\}$ and homogeneous of degree $-n$. [F1, given, algebra]

2.1 Size and gradient bounds: $|k_{ij}(x)|\le\omega_{n-1}^{-1}(n|x_ix_j||x|^{-n-2}+|x|^{-n})\le(1+n)\omega_{n-1}^{-1}|x|^{-n}$ by $|x_ix_j|\le|x|^2$; and since $k_{ij}$ is $C^\infty$ off the origin and homogeneous of degree $-n$, each partial derivative is homogeneous of degree $-n-1$, continuous on the compact unit sphere, and therefore satisfies $|\nabla k_{ij}(x)|\le C_n|x|^{-n-1}$ for all $x\ne0$ with $C_n:=n\sup_{|z|=1}|\nabla k_{ij}(z)|<\infty$. [step 1.1, given, algebra]

2.2 The spherical mean vanishes: for $r>0$, substituting $x=r\omega$ and using the homogeneity, $\int_{S^{n-1}}k_{ij}(r\omega)\,d\sigma_{n-1}(\omega)=r^{-n}\omega_{n-1}^{-1}\int_{S^{n-1}}(n\omega_i\omega_j-\delta_{ij})\,d\sigma_{n-1}(\omega)$. The surface measure is invariant under coordinate permutations and under the sign change $\omega_i\mapsto-\omega_i$, so $\int_{S^{n-1}}\omega_i\omega_j\,d\sigma=0$ for $i\ne j$ and all $n$ integrals $\int\omega_i^2\,d\sigma$ are equal to $\omega_{n-1}/n$ since their sum is $\int|\omega|^2d\sigma=\omega_{n-1}$; hence $\int(n\omega_i\omega_j-\delta_{ij})d\sigma=n\delta_{ij}\omega_{n-1}/n-\delta_{ij}\omega_{n-1}=0$, and the spherical mean of $k_{ij}$ vanishes. [F2, step 1.1, algebra]

3.1 Principal value and the local delta term. By step 2.2, $\int_{\varepsilon<|x|<1}k_{ij}(x)\,dx=0$. Thus for every Schwartz test $\varphi$, the limit $\langle V_{ij},\varphi\rangle=\lim_{\varepsilon\downarrow0}\int_{|x|>\varepsilon}k_{ij}(x)\varphi(x)\,dx$ exists: near zero subtract $\varphi(0)$, giving a majorant $C|x|^{1-n}\sup_{|z|\le1}|\nabla\varphi(z)|$, and the tail is integrable by Schwartz decay. These bounds also prove $V_{ij}\in\mathcal S'$. Integration by parts on $\{\varepsilon<|x|<R\}$ using [F2] first shows $\partial_i\Gamma$ is the regular distribution of $-\omega_{n-1}^{-1}x_i|x|^{-n}$: the inner boundary term from $\Gamma$ is $O(\varepsilon)$, and outer terms vanish as $R\to\infty$. Applying integration by parts once more gives $\langle\partial_{ij}\Gamma,\varphi\rangle=\lim_{\varepsilon\downarrow0}[\int_{|x|>\varepsilon}k_{ij}\varphi-\omega_{n-1}^{-1}\int_{S^{n-1}}\omega_i\omega_j\varphi(\varepsilon\omega)\,d\sigma]$. The inward normal of the exterior region at radius $\varepsilon$ is $-\omega$, which fixes the minus sign. Step 2.2 evaluates the boundary limit as $\delta_{ij}\varphi(0)/n$. Hence $\partial_{ij}\Gamma=V_{ij}-(\delta_{ij}/n)\delta_0$; summing the diagonal identities, whose off-origin kernels have zero trace, proves $-\Delta\Gamma=\delta_0$. [F1, F2, step 1.1, step 2.1, step 2.2, algebra]

3.2 For $|x|\ge2|y|>0$, the segment from $x-y$ to $x$ stays in $\{|z|\ge|x|/2\}$. The mean value theorem and step 2.1 give $|k_{ij}(x-y)-k_{ij}(x)|\le2^{n+1}C_n|y||x|^{-n-1}$. For every $y\ne0$, [F4] therefore gives $\int_{|x|\ge2|y|}|k_{ij}(x-y)-k_{ij}(x)|dx\le2^{n+1}C_n|y|\,\omega_{n-1}/(2|y|)=2^nC_n\omega_{n-1}$. The size bound gives annular constant $(1+n)\log2$, and step 1.1 supplies smoothness off zero. Thus $k_{ij}$ is a base Calderón–Zygmund kernel; its first-difference bound then makes it standard $1$-Hölder with constant $A_2'=2^{n+1}C_n$. [F4, step 1.1, step 2.1, algebra]

4.1 There is no frequency-zero ambiguity. The locally integrable kernel $\Gamma$, bounded at infinity, defines a tempered distribution. From step 3.1, $4\pi^2|\xi|^2\mathcal F\Gamma=1$, so $\mathcal F\Gamma$ agrees off zero with $a(\xi)=(4\pi^2|\xi|^2)^{-1}$. Since $n\ge3$, $a$ is locally integrable even at zero and tempered. Set $U=\mathcal F\Gamma-u_a$; multiplication by $|\xi|^2$ annihilates $U$, so it is supported at zero. Homogeneity of $\Gamma$ and change of variables in its pairing give $\langle\mathcal F\Gamma,\varphi(\cdot/\lambda)\rangle=\lambda^{n-2}\langle\mathcal F\Gamma,\varphi\rangle$ for $\lambda>0$: the Fourier transform of $\varphi(\cdot/\lambda)$ is $\lambda^n\widehat\varphi(\lambda\cdot)$. The same scaling holds for $u_a$ and hence $U$. By [F5], $U=\sum c_\alpha\partial^\alpha\delta_0$, while each summand pairs with $\varphi(\cdot/\lambda)$ as $\lambda^{-|\alpha|}\partial^\alpha\delta_0(\varphi)$. Uniqueness of the coefficients gives $c_\alpha(\lambda^{-|\alpha|}-\lambda^{n-2})=0$ for every $\lambda>0$. Taking $\lambda=2$ and $n\ge3$ forces all coefficients to vanish, so $\mathcal F\Gamma=u_a$. [F2, F5, step 3.1, algebra]

5.1 By [F2] and step 4.1, $\mathcal F(\partial_{ij}\Gamma)=u_{-\xi_i\xi_j/|\xi|^2}$. Step 3.1 therefore gives $\mathcal FV_{ij}=u_{-\xi_i\xi_j/|\xi|^2+\delta_{ij}/n}$. This bounded real symbol is that of $R_iR_j+(\delta_{ij}/n)I$, so [F3,F5] identify $V_{ij}*f$ on Schwartz functions with an $L^2$ multiplier of norm at most $1+1/n$. [F2, F3, F5, step 3.1, step 4.1, algebra]

6.1 The multiplier $T=R_iR_j+(\delta_{ij}/n)I$ is a Calderón–Zygmund operator with this kernel. Its symbol is real, so Plancherel's pairing gives $T^*=T$. For compactly supported $f\in L^2$ and a smooth compactly supported test $\varphi$ supported away from $\operatorname{supp}f$, [F5] and step 5.1 give $\langle Tf,\varphi\rangle=\langle f,T\varphi\rangle$. On the support of $f$, $T\varphi=V_{ij}*\varphi$ is the ordinary off-support kernel integral. The kernel is real and even, so Fubini yields $\langle Tf,\varphi\rangle=\int[\int k_{ij}(x-y)f(y)\,dy]\overline{\varphi(x)}\,dx$. Positive separation and the size bound make this double integral absolutely convergent. The kernel integral is locally integrable off the support, so injectivity of the distribution pairing proves the required almost-everywhere off-support representation. [F3, F5, step 2.1, step 3.1, step 5.1, algebra]

7.1 The preceding steps prove the kernel estimates, principal-value distribution, local delta correction, Fourier symbol, boundedness and off-support operator representation. This proves the example. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, step 3.2, step 6.1] ∎
