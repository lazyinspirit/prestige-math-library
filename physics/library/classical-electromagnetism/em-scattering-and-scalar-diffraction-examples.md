---
page: em-scattering-and-scalar-diffraction-examples
title: "Vector PEC scattering, dipole limits and controlled scalar diffraction — Examples"
status: draft
items: []
examples: [ex-em-rectangular-aperture]
---

**Objective.** The companion collects the single leaf example of the pair: the
uniform rectangular aperture evaluated exactly inside the adopted scalar
diffraction model, followed by the sinc-squared Fraunhofer pattern with its
zeros and its central maximum, all up to the inherited Fraunhofer error.

**Uniform rectangular aperture.** For the rectangle
$R=[-a,a]\times[-b,b]$ embedded in the plane $y_3=0$ and a constant complex
amplitude $A_0\ne0$, the example takes the plane-embedding pushforward
$\alpha(E)=A_0\lambda_2(R\cap\jmath^{-1}(E))$ as the aperture distribution and
verifies that it is a finite complex measure of total variation
$4ab|A_0|$, with the pairing identity
$\int f\,d\alpha=A_0\int_Rf\circ\jmath\,d\lambda_2$ for bounded Borel $f$
([[ex-em-rectangular-aperture]]). The Fraunhofer amplitude factor is exactly
$4abA_0\operatorname{sinc}(ka\,n_1)\operatorname{sinc}(kb\,n_2)$ for every
direction $n\in S^2$, so the model intensity in the Fraunhofer regime with
aperture radius $a'=\sqrt{a^2+b^2}$ is
$I_{\rm F}=\frac{a^2b^2|A_0|^2}{2\pi^2r^2}\operatorname{sinc}^2(ka\,n_1)
\operatorname{sinc}^2(kb\,n_2)$, up to the Fraunhofer absolute error of the
parent theorem transferred to $I$ by its intensity clause.

**Pattern structure.** The example proves the exact zero set
$ka\,n_1\in\pi\mathbb Z\setminus\{0\}$ or
$kb\,n_2\in\pi\mathbb Z\setminus\{0\}$ and, using
$|\sin x|\le|x|$ with equality only at $x=0$, that the mathematical pattern
on all of $S^2$ attains its global maximum exactly at the two poles
$n=(0,0,\pm1)$. The model field is defined for $x_3>0$, so its observable
central direction is the single pole $n=(0,0,1)$; the zeros and the lower
pole belong to the ideal Fraunhofer factor, not to any measured record.

**Scope.** The computation is exact inside the adopted ideal scalar model. It
inherits the Fraunhofer and Fresnel error bounds rather than re-estimating
them, and it asserts no absolute radiometric calibration, polarization
content, screen interaction, apparatus model, sampling law or empirical
comparison.
