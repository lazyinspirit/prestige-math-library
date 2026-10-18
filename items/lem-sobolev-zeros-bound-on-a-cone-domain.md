---
id: lem-sobolev-zeros-bound-on-a-cone-domain
kind: lemma
title: "A Sobolev function vanishing on scattered sites has an h^ν bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-bessel-potential-space-and-restriction-quotient
  - lem-matern-weighted-fourier-space-is-hilbert-and-injective
  - lem-cone-sites-admit-stable-polynomial-norming-stencils
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-reals-ordered-field
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-dominated-convergence
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), §§2.1–2.2"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 23–25"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume full AC conservatively for the declared weighted-$L^2$ Hilbert dependency. Let $\Omega$ be an admitted domain with its uniform cone constants, fix $d\ge1$, $\nu>0$, $s=\nu+d/2$, and choose an integer $m>\nu$. There exist $C,h_0>0$, depending only on $d,s,m$ and the cone constants, such that for every finite nonempty $X\subset\Omega$ of fill distance $h=h_X\le h_0$ and every $u\in H^s(\Omega)$ with $u|_X=0$,
$$\|u\|_{L^\infty(\Omega)}\le C h^\nu\|u\|_{H^s(\Omega)}.$$
The estimate has no separation or mesh-ratio hypothesis.

## Facts & Assumptions

**Given:** The hypotheses above, a site set $X$, and $u\in H^s(\Omega)$ vanishing on $X$.

[F1] Every $u\in H^s(\Omega)$ is the restriction of a whole-space inverse Fourier representative $U_g$ with weighted norm; point evaluations are well defined and continuous. ([[def-bessel-potential-space-and-restriction-quotient]], [[lem-matern-weighted-fourier-space-is-hilbert-and-injective]])

[F2] For every $x\in\overline\Omega$ there are distinct nodes $y_j\in X$ and weights with $|y_j-x|\le Rh$, $\sum_j|\lambda_j|\le B$, and $p(x)=\sum_j\lambda_jp(y_j)$ for all polynomials of degree below $m$, once $h\le h_0$. ([[lem-cone-sites-admit-stable-polynomial-norming-stencils]])

[F3] Polar coordinates evaluate nonnegative radial integrals; multivariable Taylor's theorem bounds the degree-$(m-1)$ remainder by a dimension- and-order-dependent constant times $|y-x|^m$ times the supremum of order-$m$ derivatives along the segment. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-multivariable-taylor-formula-with-lagrange-remainder]])

[F4] Differentiation under the bounded-frequency inverse Fourier integral is justified by dominated convergence, using the derivative formula for the complex exponential. ([[thm-dominated-convergence]], [[thm-complex-exponential-is-entire-with-derivative-itself]])

[F5] Cauchy--Schwarz holds for the $L^2$ integral pairing. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F6] The reals are an ordered field, so for $d\ge1$ every nonempty open ball in $\mathbb R^d$ contains infinitely many points along a coordinate line. ([[thm-reals-ordered-field]])

[A1] Full AC covers the conservative weighted-$L^2$ completeness/injectivity dependency used to define the Fourier representatives. The stencil proof makes only a finite choice for each fixed $x$, with uniform constants before taking suprema. ([[def-axiom-of-choice]], [[def-countable-choice]])



**Proof technique:** direct Fourier split and polynomial cancellation.

## Proof

**Proof technique:** direct Fourier split and polynomial cancellation.

**Given:** The hypotheses above. Decrease $h_0$ if necessary so $h_0\le1$.

1.1 Since $\Omega$ is a nonempty open domain, it contains a ball $B(z,r)$. For $d\ge1$ this ball contains the infinitely many distinct points $z+\frac{r}{2n}e_1$, $n\ge1$, by [F6]. The finite set $X$ omits one such point $x$, so $\min_{y\in X}|x-y|>0$ and therefore $h_X\ge\min_{y\in X}|x-y|>0$. In particular $h^{-1}$ is defined. Fix any whole-space extension $U=U_g$ of $u$, and split $g=g_{\rm lo}+g_{\rm hi}$ with $g_{\rm lo}=g\mathbf1_{\{|\xi|\le h^{-1}\}}$. Let $V=U_{g_{\rm lo}}$ and $W=U_{g_{\rm hi}}$. By Cauchy--Schwarz [F5], polar integration [F3], and $s=\nu+d/2$, $$\|W\|_\infty\le\left(\int_{|\xi|>h^{-1}}(1+|\xi|^2)^{-s}d\xi\right)^{1/2}\|U\|_{H^s}\le C h^\nu\|U\|_{H^s}.$$ Indeed, for $r\ge h^{-1}\ge1$ the radial tail is at most $C\int_{h^{-1}}^\infty r^{-2\nu-1}dr=C'h^{2\nu}$. [F1, F3, F5, F6, A1, algebra]

2.1 For each multi-index $\alpha$ with $|\alpha|=m$, the bounded frequency support makes $D^\alpha V$ well defined and continuous by differentiation under an absolutely integrable Fourier integral. Cauchy--Schwarz [F5] and polar coordinates give $$\|D^\alpha V\|_\infty\le C\left(\int_{|\xi|\le h^{-1}}|\xi|^{2m}(1+|\xi|^2)^{-s}d\xi\right)^{1/2}\|U\|_{H^s}\le C h^{\nu-m}\|U\|_{H^s}.$$ For the last estimate, the radial integral on $r\le1$ is finite and on $1\le r\le h^{-1}$ is bounded by $C\int_1^{h^{-1}}r^{2m-2\nu-1}dr\le C'h^{-2(m-\nu)}$, using $m>\nu$. [F1, F3, F4, F5, step 1.1, algebra]

3.1 Fix $x\in\Omega$ and choose the stencil from [F2]. Taylor-expand the globally defined smooth $V$ at $x$ to degree $m-1$. The segment from $x$ to each $y_j$ lies in $\mathbb R^d$, where $V$ is smooth, so [F3] bounds each remainder by $C|y_j-x|^m\max_{|\alpha|=m}\|D^\alpha V\|_\infty$. The polynomial part cancels under the stencil's reproduction identities. Therefore $$\left|V(x)-\sum_j\lambda_jV(y_j)\right|\le C B(Rh)^m h^{\nu-m}\|U\|_{H^s}\le C' h^\nu\|U\|_{H^s}.$$ [F2, F3, step 2.1, choose, algebra]

4.1 Since $U(y_j)=u(y_j)=0$, we have $V(y_j)=-W(y_j)$. Thus $$U(x)=\left(V(x)-\sum_j\lambda_jV(y_j)\right)+W(x)-\sum_j\lambda_jW(y_j).$$ Use step 3.1, step 1.1 and $\sum_j|\lambda_j|\le B$ to obtain $|u(x)|=|U(x)|\le C''h^\nu\|U\|_{H^s}$. The constants do not depend on $x$ or the chosen extension. Taking the supremum over $x\in\Omega$, then the infimum over all extensions $U$, gives the claimed quotient-norm estimate. [F1, F2, step 1.1, step 3.1, algebra] ∎
