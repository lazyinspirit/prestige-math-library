---
id: def-measurable-beltrami-coefficient
kind: definition
title: "Measurable Beltrami coefficients and measurable conformal structures"
status: published
origin: pipeline
deps:
  - def-complex-domain
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-l-infinity-on-a-measure-space
  - def-biholomorphic-map
  - thm-chain-rule-for-total-derivatives
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - lem-complex-conjugation-and-modulus-laws
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - def-countable-choice
  - lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
  - rem-complex-plane-euclidean-dictionary
dependency_level: 0
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through the measurable-function,
  essential-supremum, and null-set coordinate-change interfaces cited here.
  The coefficient, ellipse, and pullback constructions make no selection and
  use no full Axiom of Choice.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes, 164 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 48–51: the linear-map ellipse, complex dilatation, its axis ratio and direction, and its coordinate transformation."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.6, printed p. 198: measurable Beltrami differentials with essential norm below one as conformal-structure data and their chart expressions."
aliases: []
---

## Definition

Assume Countable Choice and identify the complex plane with the Euclidean plane by $z=x+iy\leftrightarrow(x,y)$ ([[def-countable-choice]], [[rem-complex-plane-euclidean-dictionary]]). All planar domains carry two-dimensional Lebesgue area measure.

(a) **Plane domains.** Let $\Omega\subseteq\mathbb C$ be a complex domain ([[def-complex-domain]]). A **Beltrami coefficient** on $\Omega$ is an almost-everywhere class of Lebesgue-measurable functions $\mu:\Omega\to\mathbb C$ with finite essential supremum $\|\mu\|_\infty$ ([[def-borel-and-lebesgue-measurable-function-on-rn]], [[def-l-infinity-on-a-measure-space]]). Here $L^\infty(\Omega;\mathbb C)$ means this class with norm $\operatorname*{ess\,sup}_{z\in\Omega}|\mu(z)|$; equivalently, its real and imaginary coordinate functions belong to the real-valued $L^\infty(\Omega)$. The defining bound is strict:
$$\|\mu\|_\infty<1.$$
Thus $|\mu|<1$ almost everywhere, and representatives differing on a Lebesgue-null set determine the same coefficient. Its **dilatation** is
$$K(\mu):=\frac{1+\|\mu\|_\infty}{1-\|\mu\|_\infty}\in[1,\infty).$$
In particular, an essentially bounded measurable function with $\|\mu\|_\infty=1$ is not a Beltrami coefficient.

(b) **Ellipse-field reading.** Regard an ellipse as a shape, ignoring positive rescaling. A measurable field of ellipses of bounded eccentricity has, almost everywhere, measurable major and minor semiaxes $a(z)\ge b(z)>0$ and a measurable unoriented major-axis direction $\theta(z)\pmod\pi$, with $a(z)/b(z)\le C$ for some finite constant $C$. Such a field determines the coefficient
$$\mu(z)=\frac{a(z)-b(z)}{a(z)+b(z)}e^{2i\theta(z)}.$$
When $a(z)=b(z)$ the ellipse is a circle and this formula gives $\mu(z)=0$, with no distinguished direction. Conversely, at every Lebesgue point of a representative of $\mu$, its ellipse has major-to-minor semiaxis ratio $(1+|\mu(z)|)/(1-|\mu(z)|)$ and, when $\mu(z)\ne0$, major-axis direction $\tfrac12\arg\mu(z)\pmod\pi$. These formulas identify measurable coefficients with measurable conformal structures up to null sets, and
$$K(\mu)=\operatorname*{ess\,sup}_{z\in\Omega}\frac{1+|\mu(z)|}{1-|\mu(z)|}.$$

(c) **Biholomorphic change of coordinates.** If $\psi:\Omega'\to\Omega$ is biholomorphic ([[def-biholomorphic-map]]) and $\mu$ is a Beltrami coefficient on $\Omega$, define its **pullback** by
$$(\psi^*\mu)(\zeta):=\mu\bigl(\psi(\zeta)\bigr)\,\frac{\overline{\psi'(\zeta)}}{\psi'(\zeta)},\qquad \zeta\in\Omega'.$$
Since $\psi$ and $\psi^{-1}$ are holomorphic, they are $C^1$ in real coordinates ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]); together with their inverse identities this makes $\psi$ a $C^1$ diffeomorphism. The complex differentiability criterion identifies the real derivative $D\psi(\zeta)$ with multiplication by $\psi'(\zeta)$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]). The real chain rule applied to $\psi^{-1}\circ\psi=\operatorname{id}$ makes this derivative invertible, hence $\psi'(\zeta)\ne0$. Therefore the factor has modulus one ([[lem-complex-conjugation-and-modulus-laws]]). Both $\psi$ and $\psi^{-1}$ send Lebesgue-null sets to null sets, so composition preserves Lebesgue measurability and essential supremum ([[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]). Consequently $\psi^*\mu$ is a Beltrami coefficient, $\|\psi^*\mu\|_\infty=\|\mu\|_\infty$, and $K(\psi^*\mu)=K(\mu)$. The chain rule gives functoriality: for biholomorphisms $\chi:\Omega''\to\Omega'$ and $\psi:\Omega'\to\Omega$,
$$(\psi\circ\chi)^*\mu=\chi^*(\psi^*\mu).$$

(d) **The Riemann sphere.** Write $z$ for the finite chart and $w=1/z$ for the chart at infinity ([[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]). A Beltrami coefficient on $\widehat{\mathbb C}$ is an almost-everywhere class of measurable chart representatives related on their overlap by (c). The overlap transition is biholomorphic and preserves null sets by the cited $C^1$ null-set lemma, so the chartwise almost-everywhere notion is consistent; no common global scalar representative is intended. Equivalently, a coefficient on the sphere is determined by a coefficient $\mu_0$ on the finite chart $\mathbb C$ with $\|\mu_0\|_\infty<1$; its expression in the infinity chart is
$$\mu_\infty(w)=\mu_0(1/w)\frac{w^2}{\overline w^{\,2}},\qquad w\ne0,$$
and the value at $w=0$ is immaterial to the almost-everywhere class. This is the pullback law (c) for $\psi(w)=1/w$, since $\overline{\psi'(w)}/\psi'(w)=w^2/\overline w^{\,2}$; the single missing point is null. In particular, the condition $\|\mu\|_\infty<1$ and the dilatation $K(\mu)$ are independent of the chosen chart expression.
