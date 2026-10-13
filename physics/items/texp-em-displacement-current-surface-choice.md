---
id: texp-em-displacement-current-surface-choice
kind: thought-experiment
title: "Total current flux is surface independent; the conduction-only flux need not be"
domain: physics
status: published
origin: pipeline
dependency_level: 17
deps: [pthm-em-integral-maxwell,
       pthm-em-charge-continuity,
       def-em-fixed-test-geometry,
       def-em-lab-geometry,
       post-em-vacuum-maxwell,
       def-em-fields,
       def-em-sources,
       def-em-si-conventions,
       thm-divergence-theorem-for-bounded-piecewise-c-one-domains,
       thm-clairaut-schwarz-mixed-partials,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives,
       def-cross-product-in-r3,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-the-induced-boundary-chain-of-a-c2-surface-patch,
       def-oriented-unit-normal-and-flux-of-a-surface-patch,
       def-type-i-type-ii-and-elementary-green-regions,
       def-scalar-and-vector-line-integrals-along-piecewise-c1-paths,
       def-the-standard-smooth-step-function,
       def-bounded-piecewise-c-one-euclidean-domain,
       lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       lem-euclidean-balls-have-positive-finite-lebesgue-measure,
       thm-multidimensional-integral-properties,
       thm-algebra-of-derivatives,
       def-countable-choice]
dependency_roles:
  pthm-em-integral-maxwell: physical-result
  pthm-em-charge-continuity: physical-result
  def-em-fixed-test-geometry: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-the-induced-boundary-chain-of-a-c2-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional thought experiment inside the smooth branch of the framework's vacuum Maxwell model: for two patch test geometries spanning the same loop and bounding a region between them, the total current flux J + eps0 partial_t E is surface independent and equals the circulation of B divided by mu0, while the conduction-only fluxes need not be equal; an explicit declared smooth slab model realises different conduction fluxes with equal total fluxes. The capacitor reading is explanatory; no thin-wire source, no measurement, no material response and no empirical claim is introduced."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.2-7.3.3 printed pp. 323-328 (the charging capacitor and the surface choice in Ampere's law, with the displacement current completing the conduction current); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 4.2-4.2.1 printed pp. 79-82 (the displacement-current modification, surface independence of the total current and the charging-capacitor argument); read in the stamped full text."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Section 1.2 printed pp. 7-8 (integral Ampere law including the displacement term), with Section 2.2 printed pp. 22-26 for the Stokes operator conventions. The explicit smooth witness is proved locally."
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention of
the test-geometry and divergence-theorem items cited below
([[def-countable-choice]]). Let $U\cong I\times\Omega$ be the laboratory
region of [[def-em-lab-geometry]] with the constants of
[[def-em-si-conventions]], and let $E,B$ be jointly of class $C^2$ fields of
[[def-em-fields]] and $\rho,J$ of class $C^1$ source fields of
[[def-em-sources]] satisfying the smooth branch of
[[post-em-vacuum-maxwell]] on a neighbourhood of the data below.

Suppose given two patch test geometries $(D,r_1)$, $(D,r_2)$ of
[[def-em-fixed-test-geometry]] over the same finite elementary Green region
$D$ whose induced boundary chains coincide as oriented paths (so both patches
span the same closed loop $\gamma$), and suppose there is a bounded open
region $V\subseteq\Omega$ with a specified finite piecewise $C^1$ presentation
whose boundary faces are exactly the two images $r_1[D]$, $r_2[D]$ with
outward normals $-n_1$ and $+n_2$ respectively, where $n_i$ is the normal
induced by $r_i$ (that is, $V$ is the region enclosed between the two patches;
this is a hypothesis on the pair, part of its data). Then, for every $t\in I$:

(a) [Total current flux is surface independent]

$$\int_{S_1}\bigl(J+\varepsilon_0\partial_tE\bigr)(\cdot,t)\cdot n_1\,dS=\int_{S_2}\bigl(J+\varepsilon_0\partial_tE\bigr)(\cdot,t)\cdot n_2\,dS=\frac{1}{\mu_0}\oint_\gamma B(\cdot,t)\cdot d\mathbf r,$$

where $S_i=r_i[D]$ and the flux is that of
[[def-oriented-unit-normal-and-flux-of-a-surface-patch]].

(b) [Conduction-only flux need not be] For every $t\in I$ the difference of
the conduction fluxes equals the negative of the difference of the
displacement fluxes:

$$\int_{S_1}J(\cdot,t)\cdot n_1\,dS-\int_{S_2}J(\cdot,t)\cdot n_2\,dS=-\varepsilon_0\left(\int_{S_1}\partial_tE(\cdot,t)\cdot n_1\,dS-\int_{S_2}\partial_tE(\cdot,t)\cdot n_2\,dS\right).$$

Hence the conduction-only fluxes are equal exactly when the displacement
fluxes are equal, and neither conclusion is forced by the Maxwell equations
alone.

(c) [Explicit realisation] In this clause all displayed variables and constants are numerical values in the SI units of [[def-em-si-conventions]]: spatial coordinates in metres, $t$ in seconds, $E$ in V m$^{-1}$, $B$ in T, $\rho$ in C m$^{-3}$ and $J$ in A m$^{-2}$. Thus the profile argument $z$ means physical height divided by $1\,\mathrm m$, the implicit current-density scale is $1\,\mathrm{A\,m^{-2}}$, and the geometric length scale is $1\,\mathrm m$. The following declared smooth data satisfies all
the hypotheses above and has different conduction fluxes through the two
surfaces. On $\Omega=\mathbb R^3$, $I=\mathbb R$, fix $\chi\in C^\infty(\mathbb
R)$ with $0\le\chi\le1$, $\chi(z)=1$ for $z\le-1$ and $\chi(z)=0$ for
$z\ge0$, and set

$$E(x,t):=\frac{t}{\varepsilon_0}\chi(z)\,e_z,\qquad B:=0,\qquad \rho(x,t):=t\,\chi'(z),\qquad J(x,t):=-\chi(z)\,e_z.$$

Then $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=0=-\partial_tB$,
$\operatorname{curl}B=0=\mu_0J+c^{-2}\partial_tE$ (the last identity because
$c^{-2}\varepsilon_0^{-1}=\mu_0$), and $\partial_t\rho+\operatorname{div}J=0$.
Take $D=[-1,1]^2$ and its interior $D^\circ=(-1,1)^2$. Let $\sigma$ be the
standard smooth step of [[def-the-standard-smooth-step-function]] and define
$h(s):=\sigma(2(1-s^2))$, $\eta(u,v):=h(u)h(v)$. Then
$\eta\in C_c^\infty(\mathbb R^2)$, $0\le\eta\le1$, $\eta=1$ in a
neighbourhood of the origin, $\eta>0$ at every point of $D^\circ$, and $\eta=0$
on $\partial D$ and outside $D$. Take the graphs

$$r_1(u,v):=(u,v,-2\eta(u,v)),\qquad r_2(u,v):=(u,v,0).$$

Both induced boundary chains are the square
$\{(u,v,0):(u,v)\in\partial D\}$, the region
$V=\{(u,v,w):(u,v)\in D^\circ,\ -2\eta(u,v)<w<0\}$ is enclosed between the
patches, and

$$\int_{S_1}J\cdot n_1\,dS=-\int_D\chi(-2\eta(u,v))\,dudv<0,\qquad \int_{S_2}J\cdot n_2\,dS=-\int_D\chi(0)\,dudv=0,$$

the first inequality because $\eta=1$ in a neighbourhood of the origin, so
$\chi(-2\eta)=1$ on a nonempty open subset of $D$, whose area is positive,
while both total current fluxes in (a) vanish, consistently with the loop
integral $\oint_\gamma B\cdot d\mathbf r=0$. In the standard
charging-capacitor discussion the two spanning surfaces cut the conduction
current in different ways and the difference is carried by the displacement
term; the realisation above exhibits exactly this phenomenon in a
self-contained smooth model. An idealised thin-wire current is not a source
type of this framework and the capacitor interpretation is explanatory, not
an additional empirical claim.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The fields $E,B$ jointly of class $C^2$ and sources $\rho,J$ of class $C^1$ satisfying the smooth branch of [[post-em-vacuum-maxwell]] on a neighbourhood of the data; two patch test geometries $(D,r_1),(D,r_2)$ with coincident induced boundary chains, and a bounded open region $V$ of the stated finite piecewise $C^1$ presentation with faces $S_1,S_2$ and outward normals $-n_1,+n_2$.

[F1] The smooth branch gives $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with $\varepsilon_0=(\mu_0c^2)^{-1}$ ([[post-em-vacuum-maxwell]], [[def-em-si-conventions]]), and the smooth branch of [[pthm-em-charge-continuity]] gives $\partial_t\rho+\operatorname{div}J=0$; the operators are those of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-directional-and-partial-derivatives]], with mixed partials commuting ([[thm-clairaut-schwarz-mixed-partials]]) and derivatives acting termwise ([[thm-algebra-of-derivatives]]).

[F2] For the declared finite piecewise $C^1$ presentation of $V$ and a $C^1$ field $G$ on a neighbourhood of $\overline V$, the divergence theorem gives $\int_V\operatorname{div}G=\sum_j\int_{S_j}G\cdot\nu_j\,dS$ with the actual outward normals ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[def-bounded-piecewise-c-one-euclidean-domain]]).

[F3] The integral Maxwell identities of [[pthm-em-integral-maxwell]](a) hold for the smooth branch: for every patch test geometry with induced boundary chain $\gamma$ and induced normal $n$, $\oint_\gamma B(\cdot,t)\cdot d\mathbf r=\mu_0\int_SJ(\cdot,t)\cdot n\,dS+c^{-2}\frac{d}{dt}\int_SE(\cdot,t)\cdot n\,dS$, the flux being that of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]] and the circulation that of [[def-the-induced-boundary-chain-of-a-c2-surface-patch]] and [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]].

[F4] Patch test geometries are regular $C^2$ patches over finite elementary Green regions with induced orientation, and affine and graph patches over axis-parallel squares are instances ([[def-em-fixed-test-geometry]], [[def-type-i-type-ii-and-elementary-green-regions]], [[def-cross-product-in-r3]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] The standard smooth step is smooth, vanishes for arguments at most zero, equals one from one onward and is strictly positive on $(0,1)$ ([[def-the-standard-smooth-step-function]]); scaled bumps and their positive area cells supply the strict-positivity argument ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-multidimensional-integral-properties]]), with monotonicity and coordinate-slice additivity on nondegenerate rectangles.

[F6] The laboratory region, fields, sources and constants are those of [[def-em-lab-geometry]], [[def-em-fields]], [[def-em-sources]] and [[def-em-si-conventions]].

## Proof

1.1 Put $G:=J+\varepsilon_0\partial_tE$, a $C^1$ field on a neighbourhood of $\overline V$ by the regularity of the data. The Gauss law, commutation of mixed partials and the smooth continuity identity give $\operatorname{div}G=\operatorname{div}J+\varepsilon_0\partial_t\operatorname{div}E=\operatorname{div}J+\partial_t\rho=0$ there; applying the divergence theorem to $G$ on the specified presentation of $V$, whose faces are $S_1,S_2$ with outward normals $-n_1,+n_2$, gives $0=\int_V\operatorname{div}G=\int_{S_2}G\cdot n_2\,dS-\int_{S_1}G\cdot n_1\,dS$, which is the first asserted equality of (a). For the second equality, the integral Ampere identity applies to either patch; since both induced boundary chains are the same oriented loop $\gamma$ and $\frac{d}{dt}\int_SE\cdot n\,dS=\int_S\partial_tE\cdot n\,dS$ on a fixed patch, the identity reads $\oint_\gamma B\cdot d\mathbf r=\mu_0\int_{S_i}(J+\varepsilon_0\partial_tE)\cdot n_i\,dS$ for $i=1,2$, because $c^{-2}/\mu_0=\varepsilon_0$; dividing by $\mu_0>0$ gives the stated value. [F1, F2, F3, given, algebra]

1.2 For (c), verify the smooth equations by direct substitution: $\operatorname{div}E=(t/\varepsilon_0)\chi'(z)$ and $\operatorname{div}B=0$; $\operatorname{curl}(E_z(z,t)e_z)=0$ because $E_z$ is independent of the first two coordinates, so $\operatorname{curl}E=0=-\partial_tB$; $\operatorname{curl}B=0$ and $\mu_0J+c^{-2}\partial_tE=-\mu_0\chi(z)e_z+c^{-2}\varepsilon_0^{-1}\chi(z)e_z=0$ because $c^{-2}\varepsilon_0^{-1}=\mu_0$; and $\partial_t\rho+\operatorname{div}J=\chi'(z)-\chi'(z)=0$. For the standard smooth step the function $h(s)=\sigma(2(1-s^2))$ is smooth, equals one for $|s|\le1/\sqrt2$, is strictly positive for $|s|<1$ and vanishes for $|s|\ge1$; hence $\eta(u,v)=h(u)h(v)$ is a smooth compactly supported function with values in $[0,1]$, equal to one near the origin, strictly positive on the open square $D^\circ=(-1,1)^2$ and zero on and outside $\partial D$. [F1, F4, F5, given, algebra]

2.1 Splitting $G=J+\varepsilon_0\partial_tE$ in the equality of step 1.1 and using linearity of the surface integrals in the integrand gives $\int_{S_1}J\cdot n_1-\int_{S_2}J\cdot n_2=-\varepsilon_0(\int_{S_1}\partial_tE\cdot n_1-\int_{S_2}\partial_tE\cdot n_2)$, which is (b); in particular the two conduction fluxes are equal exactly when the two displacement fluxes are, and the Maxwell equations alone force neither equality. [F3, step 1.1, given, algebra]

2.2 For (c), the graphs $r_1(u,v)=(u,v,-2\eta(u,v))$ and $r_2(u,v)=(u,v,0)$ have parameter derivatives with cross products $r_{1,u}\times r_{1,v}=(2\eta_u,2\eta_v,1)$ and $r_{2,u}\times r_{2,v}=e_z$, both nonzero on the interior of $D$; the boundary chains take values $(u,v,0)$ on $\partial D$ for both, so they coincide, and the region $V=\{(u,v,w):(u,v)\in D^\circ,-2\eta(u,v)<w<0\}$ is bounded, open, nonempty, and has exactly the two graph faces with outward normals $-n_1$ and $+n_2$ off the square seam, which is a finite union of line segments of surface measure zero; thus the presentation hypotheses of [F2] are met. The oriented flux formula gives $\int_{S_1}J\cdot n_1\,dS=\int_D(J\circ r_1)\cdot(r_{1,u}\times r_{1,v})\,dudv=-\int_D\chi(-2\eta(u,v))\,dudv$ and $\int_{S_2}J\cdot n_2\,dS=-\int_D\chi(0)\,dudv=0$. On $Q_0=[-1/2,1/2]^2$ we have $\eta=1$ and $\chi(-2\eta)=1$. The integrand is nonnegative on $D$; cutting $D$ along the four sides of $Q_0$, coordinate-slice additivity and monotonicity [F5] give $\int_D\chi(-2\eta)\ge\int_{Q_0}1=1$, where the constant integral is its constant Darboux-sum value. Hence the first flux is strictly negative, while the second vanishes; the total fluxes vanish because $G=J+\varepsilon_0\partial_tE=-\chi(z)e_z+\chi(z)e_z=0$, consistently with $\oint_\gamma B\cdot d\mathbf r=0$. [F4, F5, F6, step 1.2, given, algebra]

3.1 Steps 1.1 and 2.1 prove (a) and (b) under the stated hypotheses, and steps 1.2 and 2.2 verify that the declared smooth slab data satisfy every hypothesis of (a) and (b) with $\int_{S_1}J\cdot n_1\,dS<0=\int_{S_2}J\cdot n_2\,dS$, so the conduction-only flux genuinely depends on the spanning surface while the total current flux does not; the construction is a conditional model computation, the capacitor reading is explanatory, and no measurement or thin-wire source is claimed. [step 1.1, step 1.2, step 2.1, step 2.2, given] ∎

## Source notes

The surface-choice phenomenon in the integral Ampere law is the standard motivation of the displacement current in the cited treatments; the realisation is the framework's own smooth slab model, chosen because idealised thin-wire currents are not among the declared source types. The mathematical content uses the imported divergence theorem, patch flux and step-function interfaces, not textbook authority.
