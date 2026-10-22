---
id: def-emx-angular-momentum-split
kind: definition
title: Coulomb-gauge canonical and kinetic integrals
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emx-transverse-fourier-field
  - def-em-vacuum-stress-momentum
  - def-em-si-conventions
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-darboux-integral
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-multidimensional-integral-properties
  - def-complete-ordered-field
dependency_roles:
  def-emx-transverse-fourier-field: formulation-prerequisite
  def-em-vacuum-stress-momentum: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-complete-ordered-field: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical vacuum electromagnetism in the fixed SI laboratory chart,
  restricted to the real Schwartz Fourier-packet fields and the particular
  Coulomb-gauge potential constructed on the preceding A page. The item defines
  global angular-momentum functionals relative to the fixed spatial origin. It
  does not assert that the separate terms are local, gauge-independent,
  universally measurable, or defined for non-decaying plane waves.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 1, PDF pp. 3–4: the source distinguishes polarization/helicity contributions from spatial orbital contributions. The exact Coulomb-gauge integral identity here is derived locally."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§8.2, equations (8.15) and (8.18), and §8.3 'Drehimpuls, Schwerpunkt', equations (8.19)–(8.20): the SI momentum density, stress tensor and total origin-relative field angular momentum integral. The potential-dependent split is proved locally."
verification:
  precheck: pending
---

## Definition

Let $A,E,B:\mathbb R^3\to\mathbb R^3$ be any fixed-time fields from the
compactly supported transverse Fourier construction: $A,E,B$ are real Schwartz
fields, $\operatorname{div}A=0$, $B=\operatorname{curl}A$, and
$\operatorname{div}E=0$. Use the positively oriented laboratory coordinates
$x=(x^1,x^2,x^3)$ and the fixed origin $0$. Every $\mathbb R^3$-valued
integrand below is integrated componentwise: on $Q_R=[-R,R]^3$, integrate each
of its three real components by the ordinary real Riemann integral. Its
whole-space integral is the finite componentwise cube-exhaustion limit specified
in the preceding Fourier-field Definition; the estimates in the Verification
establish absolute integrability in that definition's sense.
For each scalar component $A_i$, define
$(x\times\nabla)A_i$ to have components
$\sum_{m,j=1}^3\epsilon_{\ell m j}x_m\partial_jA_i$, where
$\epsilon_{\ell m j}$ is the right-handed Levi-Civita symbol in this chart.
Define the total kinetic angular-momentum functional and its Coulomb-gauge
canonical orbital and spin functionals by

$$J_{\mathrm{kin}}:=\varepsilon_0\int_{\mathbb R^3}x\times(E\times B)\,d^3x,\qquad L_{\mathrm{can}}:=\varepsilon_0\sum_{i=1}^3\int_{\mathbb R^3}E_i(x\times\nabla)A_i\,d^3x,\qquad S_{\mathrm{can}}:=\varepsilon_0\int_{\mathbb R^3}E\times A\,d^3x.$$

Each is a finite vector with SI units $\mathrm{J\,s}$. The words “kinetic,”
“canonical orbital,” and “spin” are names for these functionals on this fixed
potential class; they do not identify three separately gauge-invariant local
densities. A generic gauge transform is outside this definition's domain.

## Definition references

[[def-emx-transverse-fourier-field]]

[[def-em-vacuum-stress-momentum]]

[[def-em-si-conventions]]

[[def-multidimensional-rectangle-and-volume]]

[[def-multidimensional-darboux-integral]]

[[thm-continuous-on-a-rectangle-is-riemann-integrable]]

[[thm-riemann-fubini-on-product-rectangles]]

[[thm-ftc-second-part]]

[[thm-multidimensional-integral-properties]]

[[def-complete-ordered-field]]

## Facts & Assumptions

**Given:** The real Schwartz fields $A,E,B$ in the Definition, the fixed
laboratory origin and orientation, and the SI vacuum constants.

[F1] The Fourier-packet construction gives $A,E,B\in\mathcal S(\mathbb R^3)$,
$\operatorname{div}E=\operatorname{div}A=0$, and $B=\operatorname{curl}A$.
Its componentwise cube-exhaustion convention proves that a finite limit of the
absolute component-sum integrals implies finite signed component-integral
limits: integer-radius Cauchy convergence and the uniform absolute-tail
estimate also control all real radii.
([[def-emx-transverse-fourier-field]])

[F2] The momentum density and orbital angular-momentum density are
$g=\varepsilon_0E\times B$ and $\ell=x\times g$, relative to the fixed
laboratory origin. ([[def-em-vacuum-stress-momentum]])

[F3] $\varepsilon_0=(\mu_0c^2)^{-1}>0$,
$[\varepsilon_0]=\mathrm{F\,m^{-1}}$, $[E]=\mathrm{V\,m^{-1}}$, and
$[A]=\mathrm{T\,m}=\mathrm{V\,s\,m^{-1}}$.
([[def-em-si-conventions]])

[F4] Continuous real functions on closed nondegenerate rectangles have Riemann
integrals, and iterated integrals on product rectangles equal the multiple
integral. ([[def-multidimensional-rectangle-and-volume]],
[[def-multidimensional-darboux-integral]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-riemann-fubini-on-product-rectangles]])

[F5] The one-dimensional Riemann integral of a continuous derivative on a
closed interval is the endpoint increment. ([[thm-ftc-second-part]])

[F6] Riemann integrals are additive under finite coordinate cuts, monotone for
nonnegative integrands, and satisfy the absolute-value estimate.
([[thm-multidimensional-integral-properties]])

[F7] Every nonempty bounded-above subset of the Cauchy-sequence real field
has a real least upper bound, as established by
[[cor-cauchy-reals-lub-complete]]. This is the real field used here;
[[def-complete-ordered-field]] supplies the terminology rather than proving
that property for $\mathbb R$.

## Verification

1.1 For every Schwartz component $f$ and every integer $N$, the finite expansion of $\prod_{j=1}^3(1+|x_j|)^N$ is controlled term-by-term by the seminorms in [F1], so $|f(x)|\le C_N\prod_j(1+|x_j|)^{-N}$; the same holds for its derivatives. Choose $N=4$. Each component of each vector integrand defining $J_{\mathrm{kin}}$, $L_{\mathrm{can}}$, and $S_{\mathrm{can}}$ is a sum of products of two Schwartz components, with at most one coordinate factor. Therefore, for each such vector integrand $V$, $\sum_{j=1}^3|V_j(x)|\le C_VG(x)$ for some $C_V\ge0$, where $G(x):=\prod_{j=1}^3(1+|x_j|)^{-7}$. By [F5], for $R>0$ the one-dimensional factor satisfies $\int_{-R}^{R}(1+|s|)^{-7}\,ds=\frac13(1-(1+R)^{-6})\le\frac13$ and tends to $1/3$. Riemann-Fubini [F4] gives $\int_{Q_R}G\,d^3x=\left(\frac13(1-(1+R)^{-6})\right)^3\le1/27$. Thus the nonnegative cube integrals $A_R(V):=\int_{Q_R}\sum_{j=1}^3|V_j(x)|\,d^3x$ are bounded above by $C_V/27$ and are nondecreasing in $R$ by finite-slice additivity and monotonicity [F6]. The set $\{A_R(V):R>0\}$ is nonempty (take $R=1$) and bounded above, so its finite real supremum $A(V)$ exists by [F7]. For every $\varepsilon>0$, choose $R_0$ with $A_{R_0}(V)>A(V)-\varepsilon$; then $A(V)-\varepsilon<A_R(V)\le A(V)$ for all $R\ge R_0$, proving that $A_R(V)$ has a finite limit. Hence each $V$ is absolutely integrable in the preceding Definition's sense, and its signed component integrals have finite cube-exhaustion limits by the proved absolute-tail implication in [F1]. This proves that all three functionals are well-defined finite vectors. [given, F1, F4, F5, F6, F7, algebra]

2.1 The integrand of $J_{\mathrm{kin}}$ is $x$ (metres) crossed with the momentum density $g$ of [F2]. Since $g$ has units $\mathrm{kg\,m^{-2}\,s^{-1}}$, its integral after multiplication by $x$ has units $\mathrm{kg\,m^2\,s^{-1}}=\mathrm{J\,s}$. For each canonical term, $\varepsilon_0EA$ has units $\varepsilon_0E^2\,\mathrm{s}$ because $A$ has the units of $E$ times time by [F3]. From $[\varepsilon_0]=\mathrm{F\,m^{-1}}=\mathrm{C\,V^{-1}\,m^{-1}}$ and $1\,\mathrm{C\,V}=1\,\mathrm J$, $\varepsilon_0E^2$ has units $\mathrm{J\,m^{-3}}$; integration over volume again gives $\mathrm{J\,s}$. These are the units asserted in the Definition. [F2, F3, algebra] ∎

