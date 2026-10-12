---
id: def-nrqm-interference-two-path-preparation-and-detection-model
aliases: [nrqm-interference-two-path-preparation-and-detection-model]
kind: definition
domain: physics
title: "The declared two-path preparation model and its ideal detection bins"
status: draft
origin: session
dependency_level: 9
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-real-and-complex-inner-product-space, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-self-adjoint-positive-unitary-and-normal-operator, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-bounded-linear-operator, thm-cauchy-schwarz-in-an-inner-product-space, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, def-unbounded-integral-against-a-pvm, thm-bounded-borel-pvm-integral, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-regular-borel-measure-on-an-lch-space, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, lem-finite-measure-uniqueness-on-a-pi-system, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-second-countable-lch-locally-finite-borel-measures-are-regular: mathematical-premise
  def-regular-borel-measure-on-an-lch-space: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  lem-finite-measure-uniqueness-on-a-pi-system: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A declared preparation and detection model for a two-path interference arrangement in the massive spin-s model of the framework: two declared nonzero path-component classes of the model state space, the coherent preparations of a declared relative phase, the declared incoherent (which-path) preparations with declared weights, and the ideal detection-bin reading of the model's joint position observable. The model is a declaration of the apparatus and preparation assignment in the sense of the preparation and apparatus postulate P7; it asserts no derivation of the path decomposition from the framework, no claim that any particle took a definite path, no detector response or sampling model, no experiment and no empirical result. Spatial bins are regions of R^3; a lower-dimensional material screen and any marginal or flux reduction of a state to it are separate models, not claimed here."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.2 printed pages 5-6 and Section 1.4 printed page 15 (PDF page 23): amplitudes for alternative paths, the superposition of path amplitudes and ideal measurements"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.3, printed pages 3-18 (PDF pages 6-21): the wave function, the Born probability law and the two-slit interference probability density"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data and state convention.** Adopt the state and composition
postulate P1, the observable and probability postulate P2, the kinematics and
one-particle model postulate P5, the identical-particle and spin postulate P6,
and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]). Fix a spin label
$s\in\{0,\tfrac12,1,\tfrac32,\dots\}$, put $r:=2s+1$, and fix a mass parameter
$m>0$. P5 assigns the one-particle state space
$$H_s:=L^2(\mathbb R^3;\mathbb C^r)$$
with almost-everywhere equivalence classes and pairing
$$\langle f,g\rangle:=\int_{\mathbb R^3}\sum_{l=1}^r f_l(x)\overline{g_l(x)}\,dx,$$
linear in the first argument ([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-real-and-complex-inner-product-space]]). P1 identifies a pure
preparation with the ray $[\psi]:=\{z\psi:z\in\mathbb C\setminus\{0\}\}$ of a
unit vector $\psi$ and a general preparation with a density operator, meaning a
bounded self-adjoint positive trace-class operator $\rho$ with
$\operatorname{tr}\rho=1$ ([[post-nrqm-framework-state-and-composition]],
[[def-trace-class-operator]],
[[def-self-adjoint-positive-unitary-and-normal-operator]]). Write
$$D(H_s):=\{\rho:\rho\text{ is a bounded self-adjoint positive trace-class operator on }H_s\text{ and }\operatorname{tr}\rho=1\}$$
for the set of general preparations.

For a unit vector $u$, define $P_uf:=\langle f,u\rangle u$. By Cauchy--Schwarz
([[thm-cauchy-schwarz-in-an-inner-product-space]]),
$\|P_uf\|=|\langle f,u\rangle|\le\|f\|$, so $P_u$ is bounded. Then
$P_u^2=P_u$ and $P_u$ is self-adjoint because for $f,g\in H_s$,
$\langle P_uf,g\rangle=\langle f,u\rangle\langle u,g\rangle
=\langle f,P_ug\rangle$. Moreover
$\langle P_uf,f\rangle=|\langle f,u\rangle|^2\ge0$ by the inner-product
identities and $\langle u,u\rangle=1$. Its range is $\mathbb C u$, so it has
finite rank and is trace class by [[def-trace-class-operator]]. The one-term
nuclear representation $P_uf=\langle f,u\rangle u$ gives
$\operatorname{tr}P_u=\langle u,u\rangle=1$ by
[[thm-trace-is-absolutely-convergent-and-basis-independent]]. Thus $P_u$ is a
density operator. For $\psi\ne0$ define
$$\widehat\rho(\psi):=P_{\psi/\|\psi\|},\qquad \widehat\rho(\psi)f=\frac{\langle f,\psi\rangle\psi}{\|\psi\|^2}.$$
For every nonzero scalar $z$, conjugate-linearity in the second argument and
$\|z\psi\|^2=|z|^2\|\psi\|^2$ give
$$\widehat\rho(z\psi)f=\frac{\langle f,z\psi\rangle z\psi}{\|z\psi\|^2}=\frac{|z|^2\langle f,\psi\rangle\psi}{|z|^2\|\psi\|^2}=\widehat\rho(\psi)f,$$
so the pure density operator depends only on the ray.

**Position PVM and Born-density calculation.** P5 assigns the componentwise
position operators $Q_jf=x_jf$ on
$$D(Q_j):=\{f\in H_s:x_jf\in H_s\},\qquad j=1,2,3.$$
Each $Q_j$ is self-adjoint on this domain. To see density, for $f\in H_s$ put
$f_n=\mathbf 1_{\{|x_j|\le n\}}f$; then $f_n\in D(Q_j)$ and $f_n\to f$ in
$H_s$ by dominated convergence. If $f,g\in D(Q_j)$, then
$\langle Q_jf,g\rangle=\langle f,Q_jg\rangle$ because $x_j$ is real-valued
and both products are integrable by Cauchy--Schwarz. If $g\in D(Q_j^*)$ with
$Q_j^*g=h$, let $E_n=\{x:|x_j|\le n\}$. For every $q\in H_s$ supported in
$E_n$, one has $q\in D(Q_j)$ and
$\langle q,(x_jg-h)\mathbf 1_{E_n}\rangle=0$ by the defining adjoint
identity. The vector $(x_jg-h)\mathbf 1_{E_n}$ lies in $H_s$ because $x_j$
is bounded on $E_n$; taking it for $q$ shows $x_jg=h$ almost everywhere on
$E_n$. Since $E_n\uparrow\mathbb R^3$, $x_jg=h\in H_s$ almost everywhere,
so $g\in D(Q_j)$ and $Q_j^*g=Q_jg$. Symmetry gives the reverse domain
inclusion; hence $Q_j=Q_j^*$ by
[[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

For Borel $C\subseteq\mathbb R$, define
$$E_j(C):=M_{\mathbf 1_{\{x:x_j\in C\}}}.$$
Each value is a bounded orthogonal projection since
$\|\mathbf 1_{\{x:x_j\in C\}}f\|\le\|f\|$, and
$E_j(\varnothing)=0$,
$E_j(\mathbb R)=I$, and $E_j(C\cap D)=E_j(C)E_j(D)$. For a disjoint sequence
$(C_n)$ with union $C$, the squared norm of
$E_j(C)f-\sum_{n\le N}E_j(C_n)f$ equals
$$\int_{\{x:x_j\in C\setminus\cup_{n\le N}C_n\}}\|f(x)\|^2dx,$$
which tends to zero by dominated convergence; hence $E_j$ is strongly
countably additive. Its scalar measures are finite Borel measures
$$\langle E_j(C)f,f\rangle=\int_{\{x:x_j\in C\}}\|f(x)\|^2dx,$$
and are regular on $\mathbb R$ by
[[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]. The
push-forward integral identity
$$\int_{\mathbb R}g(\lambda)d\langle E_j(\lambda)f,f\rangle =\int_{\mathbb R^3}g(x_j)\|f(x)\|^2dx$$
holds first for indicators and nonnegative simple functions and then for
nonnegative measurable $g$ by monotone convergence. In particular the domain
of $\int\lambda\,dE_j(\lambda)$ is exactly $D(Q_j)$ by the same identity
with $g(\lambda)=\lambda^2$. For bounded Borel $g$, the bounded PVM calculus
equals multiplication by $g(x_j)$: this holds for indicators by the
definition of $E_j$, for finite simple functions by linearity, and for bounded
Borel functions by uniform simple approximation and the norm bound of the
bounded calculus ([[thm-bounded-borel-pvm-integral]]). Therefore the
truncations of the unbounded integral are multiplication by
$x_j\mathbf 1_{\{|x_j|\le n\}}$. For $f\in D(Q_j)$ these converge in $H_s$
to $x_jf$, since the squared tail norm is
$\int_{\{|x_j|>n\}}x_j^2\|f(x)\|^2dx\to0$ by dominated convergence. Thus
$\int\lambda\,dE_j(\lambda)=Q_j$ on exactly $D(Q_j)$, and the regular spectral
theorem identifies $E_j$ as the spectral PVM of $Q_j$
([[def-unbounded-integral-against-a-pvm]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

Define the joint position PVM by
$$G(B):=M_{\mathbf 1_B}\qquad(B\subseteq\mathbb R^3\text{ Borel}).$$
For each $f$, $\|G(B)f\|\le\|f\|$, so its values are bounded; indicator
multiplication gives its projection, identity, and intersection laws. Strong
countable additivity follows from dominated convergence applied to $\|f\|^2$.
Its scalar measures are $B\mapsto\int_B\|f(x)\|^2dx$, finite
regular Borel measures on $\mathbb R^3$. On coordinate rectangles,
$$G(C_1\times C_2\times C_3)=E_1(C_1)E_2(C_2)E_3(C_3).$$
The rectangles generate $\mathcal B(\mathbb R^3)$; the published Borel-product
and finite-measure uniqueness theorems show that these rectangle values
uniquely determine the joint PVM ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]],
[[lem-finite-measure-uniqueness-on-a-pi-system]],
[[lem-scalar-and-complex-measures-from-a-pvm]]): for any two candidate PVMs,
their finite scalar measures agree on the generating rectangles and on the
whole space, so they agree on every Borel set; the polarization identity in
the last lemma then gives equality of the operator values. By P2, for
every unit vector $u$ and Borel $B\subseteq\mathbb R^3$ the sharp position law is
$$\mu^G_{[u]}(B)=\|G(B)u\|^2=\int_B\|u(x)\|_{\mathbb C^r}^2dx,$$
and for a density operator $\rho$ it is
$\mu^G_\rho(B)=\operatorname{tr}(\rho G(B))$
([[post-nrqm-framework-observable-and-probability]]).

Assume the Axiom of Countable Choice and the Axiom of Choice as required by
the cited trace and spectral suppliers ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(b) Declared two-path assignment.** A **declared two-path preparation model**
of the apparatus is the assignment of two nonzero classes
$\psi_{1},\psi_{2}\in H_{s}$, called the **path components** of the model with
respect to the declared pair of alternative path conditions of the apparatus,
together with a declared **relative phase** $\varphi\in\mathbb R$ and a declared
**weight** $w\in[0,1]$. The assignment of $\psi_{1},\psi_{2}$, $\varphi$ and
$w$ is part of the preparation model in the sense of clause (i) of P7
([[post-nrqm-framework-preparation-and-apparatus]]): it is declared, not
computed from the framework, and no item of this page asserts that a particle
described by the model "took" one of the two paths.

**(c) Coherent preparation.** The declared two-path model is **admissible at
phase $\varphi$** when $\psi_{1}+e^{i\varphi}\psi_{2}\ne0$ in $H_{s}$. When it
is admissible, the **coherent preparation** of relative phase $\varphi$ is the
pure preparation
$$\rho_{\mathrm{coh}}(\varphi):=\widehat\rho\bigl(\psi_{1}+e^{i\varphi}\psi_{2}\bigr),$$
the normalized rank-one density operator defined in clause (a). The relative
phase $\varphi$ is read in radians (dimensionless). Multiplying both path
components by one common nonzero scalar leaves their associated pure density
operator unchanged, while the declared relative phase remains part of the
preparation assignment.

**(d) Incoherent preparation.** For a declared weight $w\in[0,1]$ the
**incoherent preparation**, or **which-path preparation**, of the model is
$$\rho_{\mathrm{mix}}(w):=w\,\widehat\rho(\psi_{1})+(1-w)\,\widehat\rho(\psi_{2}).$$
It is a density operator: both summands are positive trace-class operators of
trace one; trace-class operators form a vector space, nonnegative real
combinations preserve positivity and self-adjointness, and the trace is linear,
so $\operatorname{tr}\rho_{\mathrm{mix}}(w)=w+(1-w)=1$
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]). The weight $w$
is a declared preparation weight, not an outcome probability.

**(e) Ideal detection bins.** A **declared ideal detector** of the model is a
finite family $\mathcal B=(B_{a})_{a=1}^{m}$ of pairwise disjoint Borel subsets
of $\mathbb R^{3}$ with $\bigcup_{a}B_{a}=\mathbb R^{3}$; the **ideal bin
probabilities** of a preparation $\rho\in D(H_{s})$ are the numbers
$$p_{a}(\rho):=\mu^{G}_{\rho}(B_{a})=\operatorname{tr}\bigl(\rho\,G(B_{a})\bigr)\qquad(a=1,\dots,m),$$
the reading of clause (ii) of P2 for the joint position assignment
([[post-nrqm-framework-observable-and-probability]],
[[def-projection-valued-measure]]). By clause (ii) of P2 these numbers are
nonnegative, are at most one, and satisfy
$\sum_{a}p_{a}(\rho)=1$. A single **declared bin** $B$ is the two-element ideal
detector $(B,\mathbb R^{3}\setminus B)$; its probability is $\mu^{G}_{\rho}(B)$.

For the **ideal support**, choose a Lebesgue-measurable representative $f$ of
the unit $L^2$ class and form $S_f:=\{x:\|f(x)\|_{\mathbb C^r}>0\}$. The
ideal support is the class of $S_f$ under equality up to a Lebesgue-null
symmetric difference. This class is independent of the representative, and
it is not asserted to be a Borel detector bin.

**(f) Status and scope.** Clauses (a)-(e) fix the model data of the pair:
the framework reading, the declared path components and preparations, and the
ideal bin reading of the position observable. They adopt no assumption beyond
P1, P2, P5, P6, P7 and the cited mathematics; the declaration of
$\psi_{1},\psi_{2},\varphi,w$ and of the bins is an apparatus-model input, and
the claim that a concrete two-slit apparatus realizes a particular such
declaration is a tested identification with uncertainty under P7(iii). The
declared bins are subsets of $\mathbb R^{3}$; the model does not claim that a
physical screen of lower dimension is literally a spatial region, and a
marginal, coarse-graining or flux reduction of a state to a screen coordinate
or surface is a separate detection model, not supplied here. No dynamics, no
recorded-event response, no sampling model and no empirical result is
asserted; the recorded-event and sampling models are declared separately on
this page.

## Remarks

- **Classes, not functions.** The path components are almost-everywhere
  classes; pointwise values such as $\psi_{j}(x)$ are read only through the
  measurable representatives, densities and pairings defined above, and the
  interference identities of the page hold up to null sets.
- **"Path" is a declared decomposition.** The phrase "path component" names an
  element of the declared decomposition of the preparation model. The pair
  proves laws of the declared coherent and incoherent preparations; it does not
  assert which-path ontology, does not assign a trajectory to the particle, and
  does not assume that the two components are orthogonal or have disjoint ideal
  supports. Whether a preparation model with an orthogonal or disjoint-support
  decomposition describes a given apparatus is a physical identification under
  P7.
- **Units.** The outcome sets are sets of position with unit metre, the
  probability numbers are dimensionless, and the phase is read in radians
  ([[def-nrqm-framework-quantities-and-units]]).
