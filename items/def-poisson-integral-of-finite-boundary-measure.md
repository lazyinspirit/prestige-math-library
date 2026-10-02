---
id: def-poisson-integral-of-finite-boundary-measure
kind: definition
title: "The Poisson integral of a finite complex boundary measure"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [cor-second-countable-lch-locally-finite-borel-measures-are-regular, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, def-integration-against-a-signed-or-complex-measure, def-l-one-of-a-measure, def-poisson-integral-on-the-disc, def-poisson-kernel-on-the-disc, def-simple-integral-against-a-signed-or-complex-measure, def-regular-complex-borel-measure-on-an-lch-space, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Poisson Integrals of Measures, printed pp. 111-113 (PDF pp. 116-118): formulas (6.1)-(6.3), the extension of the Poisson integral to complex Borel measures and to L^1 densities."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§3.1.2, equation (3.3) and following, printed pp. 35-36: the disc Poisson kernel and its integrals against boundary data."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Identify the torus
$\mathbb T=\mathbb R/\mathbb Z$ with the Euclidean unit circle through
$\varphi([t])=e^{2\pi it}$ and write $m$ for the normalized Haar measure of
$\mathbb T$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).
For $z\in\mathbb D$ and $\zeta\in\mathbb T$ put
$$P(z,\zeta):=P\bigl(z,\varphi(\zeta)\bigr)=\frac{1-|z|^2}{|\varphi(\zeta)-z|^2},$$
where the second expression is the Poisson kernel
of [[def-poisson-kernel-on-the-disc]] evaluated at the boundary point
$\varphi(\zeta)$ of the unit circle. For each fixed $z\in\mathbb D$ the function
$\zeta\mapsto P(z,\zeta)$ is continuous and positive on the compact space
$\mathbb T$, because $\varphi$ is continuous and $|\varphi(\zeta)-z|\ge 1-|z|>0$.

**Integral against a finite complex measure.** Let $\mu$ be a finite regular
complex Borel measure on $\mathbb T$
([[def-regular-complex-borel-measure-on-an-lch-space]]). Define the **Poisson
integral of $\mu$** by
$$P[\mu](z):=\int_{\mathbb T}P(z,\zeta)\,d\mu(\zeta)\qquad(z\in\mathbb D),$$
the integral being the one against a signed or complex measure
([[def-integration-against-a-signed-or-complex-measure]]). This is well defined:
for fixed $z$ the integrand is continuous on the compact space $\mathbb T$,
hence bounded, so it belongs to $L^1(|\mu|)$, and by
[[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]]
$$|P[\mu](z)|\le\Bigl(\sup_{\zeta\in\mathbb T}P(z,\zeta)\Bigr)|\mu|(\mathbb T)<+\infty .$$
Linearity in $\mu$ is the linearity of the integral in the measure.

**Integral against an $L^1$ density.** For $f\in L^1(\mathbb T,m)$
([[def-l-one-of-a-measure]]) let $fm$ denote the finite complex measure
$$(fm)(E):=\int_E f\,dm\qquad(E\subseteq\mathbb T\ \text{Borel}),$$
which is a complex measure with $|fm|(E)=\int_E|f|\,dm$
([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]]).
Since $\mathbb T$ is compact Hausdorff and second-countable, the finite
positive Borel measure $|fm|$ is regular by
[[cor-second-countable-lch-locally-finite-borel-measures-are-regular]] under
the assumed countable choice. Thus $fm$ is a finite regular complex measure.
The displayed measurable-set formula supplies the density $f$ directly,
uniquely up to $m$-almost-everywhere equality by
[[thm-the-lebesgue-integral-respects-almost-everywhere-equality]].
For a simple measurable $g=\sum_{j=1}^k c_j\mathbf 1_{E_j}$ in canonical
disjoint form, each $f\mathbf 1_{E_j}$ is integrable since
$|f\mathbf 1_{E_j}|\le|f|$, and $|fm|(E_j)\le\|f\|_1<\infty$.
Thus [[def-simple-integral-against-a-signed-or-complex-measure]] and
[[thm-linearity-of-the-lebesgue-integral-on-l-one]] give
$$\int_{\mathbb T}g\,d(fm)=\sum_{j=1}^k c_j(fm)(E_j)=\sum_{j=1}^k c_j\int_{E_j}f\,dm=\int_{\mathbb T}gf\,dm.$$
For bounded measurable $g$, the same identity follows as follows. Set
$$s_n:=2^{-n}\bigl(\lfloor2^n\operatorname{Re}g\rfloor+i\lfloor2^n\operatorname{Im}g\rfloor\bigr).$$
Each $s_n$ is a measurable simple function with finite range, and
$|s_n-g|\le\sqrt2\,2^{-n}$. Hence
$$\int_{\mathbb T}|s_n-g|\,d|fm|\le\sqrt2\,2^{-n}\|f\|_1\longrightarrow0,$$
so the definition of integration against a complex measure gives
$\int s_n\,d(fm)\to\int g\,d(fm)$. Also, by
[[thm-linearity-of-the-lebesgue-integral-on-l-one]] and
[[thm-integral-triangle-inequality]],
$$\left|\int_{\mathbb T}s_nf\,dm-\int_{\mathbb T}gf\,dm\right|\le\sqrt2\,2^{-n}\|f\|_1\longrightarrow0.$$
Passing to the limit in the simple-function identity proves it for every
bounded measurable $g$. The density and approximants are supplied explicitly, so this argument
uses no Radon-Nikodym existence theorem or additional choice assumption.
In particular, for $z\in\mathbb D$ with $g=P(z,\cdot)$,
$$P[f](z):=P[fm](z)=\int_{\mathbb T}P(z,\zeta)f(\zeta)\,dm(\zeta).$$
If $f=f'$ $m$-almost everywhere, then $(fm)(E)=\int_Ef\,dm=\int_Ef'\,dm$
for every Borel $E$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]),
so $fm=f'm$ and $P[f]=P[f']$: the Poisson integral of an $L^1$ class is
independent of the chosen representative.

**Radial functions.** For $0\le r<1$ and $f\in L^1(\mathbb T,m)$ write
$$P_r*f:\mathbb T\to\mathbb C,\qquad (P_r*f)(\zeta):=\int_{\mathbb T}P(r\zeta,\eta)f(\eta)\,dm(\eta),$$
so that $(P_r*f)(\zeta)=P[f](r\zeta)$ by the preceding display. Equivalently,
writing $P_r(u):=(1-r^2)/(1-2r\cos(2\pi u)+r^2)$ for $u\in\mathbb T$, one has
$(P_r*f)(\zeta)=\int_{\mathbb T}P_r(\zeta-\eta)f(\eta)\,dm(\eta)$, the torus
convolution of $f$ with the kernel $P_r$, in agreement with the second display
of [[def-poisson-kernel-on-the-disc]] under the identification
$\zeta=e^{2\pi i\theta}$.

**Agreement with the published continuous-data integral.** Let
$\psi:\partial\mathbb D\to\mathbb R$ be continuous and let
$F:=\psi\circ\varphi:\mathbb T\to\mathbb R$, a continuous hence bounded function.
By the definition of the torus integral,
$$\int_{\mathbb T}P(z,\zeta)F(\zeta)\,dm(\zeta)=\int_{[0,1)}P\bigl(z,e^{2\pi it}\bigr)\psi\bigl(e^{2\pi it}\bigr)\,dt=\frac{1}{2\pi}\int_0^{2\pi}P\bigl(z,e^{is}\bigr)\psi\bigl(e^{is}\bigr)\,ds,$$
the last step by the linear change of variables $s=2\pi t$ on $(0,1)$
([[cor-c-one-change-of-variables-for-l-one-functions]]). The right-hand side
is exactly the Poisson integral of $\psi$ from
[[def-poisson-integral-on-the-disc]], so $P[\psi\circ\varphi]=P[\psi]$ on
$\mathbb D$. The definition above therefore extends, and does not conflict
with, the published real continuous-data definition.
