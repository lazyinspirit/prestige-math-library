---
id: lem-gr-weak-field-geodesic-acceleration
kind: lemma
title: "Coordinate-time acceleration of weak-field geodesics: the Newtonian leading term with uniform error"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, lem-gr-weak-field-admissibility-and-inverse-bounds, lem-gr-weak-field-christoffel-bounds, prop-coordinate-geodesic-equation, def-geodesic-of-an-affine-connection, def-christoffel-symbols-of-an-affine-connection, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-minkowski-model-and-inertial-chart, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-stationary-weak-field-data: mathematical-premise
  lem-gr-weak-field-admissibility-and-inverse-bounds: mathematical-premise
  lem-gr-weak-field-christoffel-bounds: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the time-parametrized geodesic equation and the Newtonian acceleration -grad Phi from Gamma^i_{00}, printed pp. 105-106 (PDF pp. 112-113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1: the geodesic equation in the weak-field limit and d^2x/dt^2 = -grad Phi, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian module: the slow-motion geodesic equation, the Christoffel calculation Gamma^i_{00}=partial_i Phi and the acceleration law"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ be stationary weak-field data
with potential $\Phi=\varepsilon c^2\varphi$
([[def-gr-stationary-weak-field-data]]), let $c>0$, let
$\varepsilon_*$ and $C_2$ be the threshold and constant of
[[lem-gr-weak-field-christoffel-bounds]], let
$0<\varepsilon\le\varepsilon_*$, and let $\Gamma^a{}_{bc}$ be the
Christoffel symbols of $g(\varepsilon)$ in the inertial chart.

**(a) Reparametrization identity.** Let $\gamma$ be a geodesic of
$g(\varepsilon)$ in an affine parameter $s$ on an interval $S$
([[def-geodesic-of-an-affine-connection]]), suppose that
$t(s):=x^0(\gamma(s))/c$ is $C^2$ with $dt/ds\ne0$ on $S$ and has image an
interval $I$, and write $x(t)$ for the spatial components of
$\gamma$ as a function of $t$, so that $u^a:=dx^a/dt$ is $(c,\dot x)$ and the
geodesic equation holds in the chart
([[prop-coordinate-geodesic-equation]]). Then for every $t\in I$,

$$\frac{d^2x^i}{dt^2} =-\Gamma^i{}_{bc}u^bu^c+\frac{u^i}{c}\,\Gamma^0{}_{bc}u^bu^c .$$

**(b) Newtonian leading term.** Suppose in addition that $x(t)\in K$ and
$|\dot x(t)|\le C\sqrt\varepsilon\,c$ for every $t\in I$. Then there is
$C_3<\infty$, depending only on $C$, $L$ and the dimension, such that for
every $t\in I$ and $i=1,2,3$,

$$\Bigl|\frac{d^2x^i}{dt^2}+\partial_i\Phi\bigl(x(t)\bigr)\Bigr|\le\frac{C_3\,c^2\varepsilon^2}{L} .$$

## Facts & Assumptions

**Given:** Stationary weak-field data, $0<\varepsilon\le\varepsilon_*'$, a geodesic $\gamma$ reparametrized by the coordinate time $t=x^0/c$ with $\dot x$ bounded by $C\sqrt\varepsilon c$ in $K$.

[L1] The Christoffel symbols of $g(\varepsilon)$ satisfy, on $K$ and for the given $\varepsilon$, $|\Gamma^i{}_{00}-\partial_i\Phi/c^2|\le C_2\varepsilon^2/L$, $|\Gamma^i{}_{0j}|\le C_2\varepsilon^{3/2}/L$, $|\Gamma^i{}_{jk}|\le C_2\varepsilon/L$, $|\Gamma^0{}_{00}|\le C_2\varepsilon^{5/2}/L$, $|\Gamma^0{}_{0j}|\le C_2\varepsilon/L$ and $|\Gamma^0{}_{jk}|\le C_2\varepsilon^{3/2}/L$ ([[lem-gr-weak-field-christoffel-bounds]], with supplies [[def-gr-stationary-weak-field-data]], [[lem-gr-weak-field-admissibility-and-inverse-bounds]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] and [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] In a chart, a curve is a geodesic in an affine parameter $s$ if and only if $\frac{d^2z^a}{ds^2}+\sum_{b,c}\Gamma^a{}_{bc}(z)\frac{dz^b}{ds}\frac{dz^c}{ds}=0$, where $z=x\circ\gamma$; the chain rule and the quotient rule for $C^2$ curves apply to the change of parameter ([[prop-coordinate-geodesic-equation]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-gr-minkowski-model-and-inertial-chart]]).

## Proof

**Proof technique:** direct; reparametrize the chart geodesic equation by the coordinate time, then insert the uniform Christoffel bounds.

1.1 (Reparametrization identity.) Write $v^a:=dz^a/ds$ for the affine velocity of the geodesic and $u^a:=dx^a/dt$ for its coordinate-time velocity, so that $v^0=c\,dt/ds\ne0$ and $u^a=c v^a/v^0$; in particular $u^0=c$, so $u=(c,\dot x)$. The geodesic equation of [L2] reads $dv^a/ds=-\Gamma^a{}_{bc}v^bv^c$. Since $v^a=(v^0/c)u^a$, substituting $v^bv^c=(v^0/c)^2u^bu^c$ and using the chain rule $\frac{d}{dt}=\frac{c}{v^0}\frac{d}{ds}$ gives $$\frac{d^2x^i}{dt^2}=\frac{c}{v^0}\frac{d}{ds}\Bigl(\frac{cv^i}{v^0}\Bigr)=\frac{c^2}{(v^0)^2}\frac{dv^i}{ds}-\frac{c^2v^i}{(v^0)^3}\frac{dv^0}{ds}=-\Gamma^i{}_{bc}u^bu^c+\frac{u^i}{c}\Gamma^0{}_{bc}u^bu^c,$$ which is (a). [L2, given, algebra]

1.2 (Uniform smallness of the velocity data.) The hypothesis $|\dot x|\le C\sqrt\varepsilon c$ and $u^0=c$ give $|u^a|\le\max(c,C\sqrt\varepsilon c)\le C_4c$ for a constant $C_4$ depending only on $C$, since $\varepsilon\le\varepsilon_*'\le1$ may be assumed after shrinking the threshold. [given, algebra]

2.1 (Insertion of the bounds.) Insert the components of the identity of step 1.1 and the estimates of [L1], using step 1.2 to bound the velocity factors: $$-c^2\Gamma^i{}_{00}=-\partial_i\Phi+O(c^2\varepsilon^2/L),\qquad |2c\,\Gamma^i{}_{0j}\dot x^j|\le 2c\cdot\frac{C_2\varepsilon^{3/2}}{L}\cdot C\sqrt\varepsilon c=\frac{C'c^2\varepsilon^2}{L},$$ $$|\Gamma^i{}_{jk}\dot x^j\dot x^k|\le\frac{C_2\varepsilon}{L}\cdot C^2\varepsilon c^2=\frac{C''c^2\varepsilon^2}{L},$$ and each of the three terms containing the factor $\dot x^i/c$ is bounded by $C'''c^2\varepsilon^2/L$: for the $\Gamma^0{}_{00}$ term, $|\dot x^i| c\,|\Gamma^0{}_{00}|\le C\sqrt\varepsilon c\cdot c\cdot C_2\varepsilon^{5/2}/L=C'''c^2\varepsilon^3/L\le C'''c^2\varepsilon^2/L$; for the $\Gamma^0{}_{0j}$ term, $|2\dot x^i\Gamma^0{}_{0j}\dot x^j|\le2C\sqrt\varepsilon c\cdot C_2\varepsilon/L\cdot C\sqrt\varepsilon c$; and for the $\Gamma^0{}_{jk}$ term, $|\dot x^i\Gamma^0{}_{jk}\dot x^j\dot x^k|/c\le C\sqrt\varepsilon\cdot C_2\varepsilon^{3/2}/L\cdot C^2\varepsilon c^2$. Collecting all terms and renaming the constants gives (b). [step 1.1, step 1.2, L1, algebra]

3.1 (Conclusion.) Step 1.1 proves (a) and step 2.1 proves (b), with constants depending only on $C$, $L$ and the dimension. [step 1.1, step 2.1, given] ∎

## Remarks

- **Coordinate time, not proper time.** The parameter $t=x^0/c$ is the chart time; the conversion from proper time to $t$ along the worldline is part of the reparametrization of step 1.1 and uses only $dt/ds\ne0$. No synchronization of distant clocks and no global time function is asserted.
- **Uniform in the family.** The error term is uniform on $K$ and for the whole family, with constant depending only on $(C,L)$; this uniformity is what the trajectory-limit theorem on this page uses.
- **Scope.** The estimate concerns the model's geodesics only: no claim is made that any physical body follows these geodesics, and the slow-motion and small-field conditions are hypotheses, not consequences.
