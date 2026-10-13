---
id: def-em-field-action-definition
kind: definition
title: "Smooth finite-region Maxwell action, compact variations and the fixed-endpoint particle functional"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 14
deps: [def-em-electromagnetic-tensor,
       def-em-lab-geometry,
       def-em-si-conventions,
       def-em-sources,
       def-em-relativistic-worldlines-frames,
       lem-em-compact-field-variation,
       lem-em-particle-curve-variation,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-integral-over-a-measurable-set,
       def-directional-and-partial-derivatives,
       def-test-function-space-d-of-an-open-set,
       def-countable-choice]
dependency_roles:
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  lem-em-compact-field-variation: mathematical-premise
  lem-em-particle-curve-variation: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of two real functionals of the smooth finite-region model: the field action on a bounded chart region with a smooth prescribed four-current and compactly supported smooth field variations, and the fixed-endpoint particle functional on C2 future timelike massive worldlines with a prescribed C2 external four-potential. Excluded: existence or minimality of stationary configurations, boundary conditions, unbounded regions, singular sources, and any coupled particle-field action."
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.3 'The Maxwell Action'"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed pp. 125-126, eqs. (5.42)-(5.43) and the expansion on p. 125 to $\\int(\\varepsilon_0E^2/2-B^2/(2\\mu_0))dtd^3x$"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§16 printed pp. 44-46, eqs. (16.1), (16.4); §27 printed pp. 67-69, eqs. (27.1)-(27.7) (Gaussian units converted to the SI dictionary)"
    - title: "James Binney, Classical Fields (University of Oxford lecture course 2006-2007, complete 95-page notes)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf"
      locator: "§3.1 printed pp. 23-25, eqs. (3.2)-(3.6); §3.2 printed pp. 25-27, eqs. (3.10)-(3.16); §3.6 printed pp. 29-31, eqs. (3.29)-(3.36)"
---

## Definition

The laboratory region, its restricted inertial chart $x$ with coordinates
$x=(x^0,x^1,x^2,x^3)$, $x^0=ct$, the spatial slices and the fixed-time
laboratory fields are those of [[def-em-lab-geometry]]; the field components,
the Minkowski form $\eta=\operatorname{diag}(-1,1,1,1)$, the potential
dictionary and the index conventions are those of
[[def-em-electromagnetic-tensor]]; the source fields, the charge parameter and
the four-current convention $j=(c\rho,J)$ are those of [[def-em-sources]];
the units and the constants $c>0$, $\mu_0>0$,
$\varepsilon_0:=(\mu_0c^2)^{-1}$ are those of [[def-em-si-conventions]]; and
worldlines, four-velocities and proper times are those of
[[def-em-relativistic-worldlines-frames]]. For the field sector (a)-(b) assume
the Axiom of Countable Choice ($\mathrm{AC}_\omega$,
[[def-countable-choice]]) exactly as inherited from
[[lem-em-compact-field-variation]], whose functional and finiteness statement
this item instantiates; the definition uses no further choice. The
finite-interval Riemann particle sector (c) uses the choice-free curve lemma
and does not require that field-sector measure convention.

(a) [Field action] Let
$U\subseteq x(\text{laboratory region})=cI\times\Omega\subseteq\mathbb R^4$
be a nonempty bounded open set whose closure is a
compact subset of that chart image, let $N\subseteq\mathbb R^4$ be an open
neighbourhood of $\overline U$, and let $A:N\to\mathbb R^4$,
$x\mapsto(A^0,A^1,A^2,A^3)$, and $j:N\to\mathbb R^4$ be smooth
([[def-ck-euclidean-maps-and-diffeomorphisms]]); $A$ is a four-potential in
the sense of clause (c) of [[def-em-electromagnetic-tensor]] and $j=(c\rho,J)$
is the four-current of [[def-em-sources]]. Write $A_\nu:=\eta_{\nu\mu}A^\mu$,
$F_{\mu\nu}:=\partial_\mu A_\nu-\partial_\nu A_\mu$,
$F^{\mu\nu}:=\eta^{\mu\alpha}\eta^{\nu\beta}F_{\alpha\beta}$ and $j^\nu A_\nu$
for the indicated contraction, with $\partial_\mu$ the coordinate partial
derivatives of [[def-directional-and-partial-derivatives]], and define the
**field action** by

$$S[A]:=c^{-1}\int_U\Bigl[-\frac{1}{4\mu_0}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu\Bigr]d\lambda,$$

$d\lambda$ the four-dimensional Lebesgue measure in the chart coordinates, the
integral being that of [[def-integral-over-a-measurable-set]]. Then $S[A]$ is
a finite real number, in units of $\mathrm{J\,s}$: the density
$-(4\mu_0)^{-1}F_{\mu\nu}F^{\mu\nu}+j^\nu A_\nu$ carries
$\mathrm{J\,m^{-3}}$, $d\lambda$ carries $\mathrm{m^4}$ and $c^{-1}$ carries
$\mathrm{s\,m^{-1}}$ ([[def-em-si-conventions]]). With $\kappa:=\mu_0$,
$J:=j$ and the same bounded open $U$, one has $S[A]=c^{-1}S_{\rm math}[A]$,
where $S_{\rm math}$ is the real functional of
[[lem-em-compact-field-variation]]; the first variation of $S$ is $c^{-1}$
times that of $S_{\rm math}$, and since $c^{-1}>0$ their stationarity
predicates are equivalent.

(b) [Admissible field variations] The field variations are the real maps
$h\in C_c^\infty(U;\mathbb R^4)$, the real subspace of the test space of
[[def-test-function-space-d-of-an-open-set]], extended by zero to $N$; for
every real $s$ the field $A+sh$ is smooth on $N$, and $s\mapsto S[A+sh]$ is
the quadratic polynomial of clause (a) of
[[lem-em-compact-field-variation]] with both coefficients multiplied by
$c^{-1}$. The field $A$ is **stationary** for $S$ if
$\frac{d}{ds}\big|_{s=0}S[A+sh]=0$ for every such $h$.

(c) [Particle functional] Let $m>0$ and $q\in\mathbb R$ ([[def-em-sources]]
(a)), let $[a,b]$ be a nondegenerate compact interval, let $X:[a,b]\to A$ be a
$C^2$ future timelike massive worldline ([[def-em-relativistic-worldlines-frames]]
(a)), and let $A_\mu$ be a $C^2$ covector field on a neighbourhood of the
image of $X$. The **particle functional** is the one of
[[lem-em-particle-curve-variation]],

$$S_{\rm pt}[X]:=-mc\int_a^b\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int_a^bA_\mu(X)\dot X^\mu\,ds,$$

with admissible variations the fixed-endpoint $C^2$ variations
$h:[a,b]\to V$, $h(a)=h(b)=0$, of that lemma; $m$ is the external rest-mass
parameter and $q$ the charge parameter of the framework, and $S_{\rm pt}$ is a
finite real number on the declared class, both summands being finite-interval
Riemann integrals of continuous functions on the compact $[a,b]$: the
radicand $-\eta(\dot X,\dot X)$ is continuous and strictly positive, and
$s\mapsto A_\mu(X(s))\dot X^\mu(s)$ is continuous because $X$ and $A_\mu$ are
$C^2$.

(d) [Scope] This item defines only the two functionals, their variation
classes and the stationarity predicate; it asserts no stationarity of any
configuration, no existence or uniqueness of stationary fields or curves, no
boundary conditions, no convergence statement for unbounded regions, no
coupled particle-field action and no dynamics of singular sources. Smooth $A$
and $j$ on a neighbourhood of $\overline U$ are required, and point or sheet
sources are excluded ([[def-em-sources]] (b)). The physical adoption of
stationarity is the postulate recorded later on this page
([[post-em-stationary-action-model]]).

## Source notes

The action density $-(1/4)F_{\mu\nu}F^{\mu\nu}$ with the source coupling
$j^\nu A_\nu$ and the expansion to
$\varepsilon_0|E|^2/2-|B|^2/(2\mu_0)$ follow Tong §5.5.3 and Binney §§3.2, 3.6,
in each case converted to the framework's $(-,+,+,+)$ dictionary, SI constants
and $j=(c\rho,J)$; the particle functional $-mc\int\sqrt{-\eta(\dot X,\dot X)}
\,ds+q\int A_\mu(X)\dot X^\mu\,ds$ follows Tong §5.5.1–§5.5.2, Landau–Lifshitz
§16 and Binney §3.1 with the Gaussian-unit forms re-expressed in the same
dictionary. Binney §3.2, printed pp. 26-27, removes the boundary term using
variations vanishing on the initial and final hypersurfaces and at spatial
infinity. The bounded open $U$ and compact-support variation class here are
a local specialization proved by the mathematical field-variation lemma;
they are not the spatial domain of Binney's calculation. Binney eq. (3.13)
and Tong eqs. (5.42)-(5.43) supply the normalization $c^{-1}$; the units
$\mathrm{J\,s}$ follow from the framework's SI bookkeeping, and the
well-definedness statements are those of the two cited mathematical suppliers.
