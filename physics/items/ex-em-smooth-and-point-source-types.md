---
id: ex-em-smooth-and-point-source-types
kind: example
title: "Smooth and point-source constructions: distinct for nonzero charge, both zero at zero charge"
status: draft
origin: session
domain: physics
deps: [def-countable-choice, def-dirac-delta-and-its-derivatives, def-distribution, def-em-fields, def-em-sources, def-measure-null-set-and-almost-everywhere, def-regular-distribution-from-a-locally-integrable-function, def-riemann-integral-over-a-jordan-set, def-test-function-space-d-of-an-open-set, lem-em-point-current-continuity, lem-test-function-cutoffs-and-euclidean-localization, post-em-vacuum-maxwell, prop-countable-subsets-of-rn-are-lebesgue-null, thm-finite-and-countable-subadditivity-of-measures, thm-locally-integrable-functions-embed-in-distributions, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-riemann-lebesgue-comparison-for-distribution-test-integrands]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  def-distribution: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A comparison of two source classes of the classical framework in a named laboratory region: a compactly supported continuous (indeed smooth) charge density and the distributional point charge on a prescribed trajectory, which for nonzero charge is shown not to be represented by any locally integrable density; for zero charge both constructions give the zero distributions. The example is conditional on the stated definitions and on Countable Choice for the published embedding theorem's injectivity; it contains no measurement, no empirical claim and no assertion about fields at the singularity."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.1 printed pp. 2-3: smooth charge densities against the point density q delta^3(x - r(t)) and the current density q v delta^3(x - r(t)) of a single particle, which is the two-source-class contrast of this example; read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§1.5 printed pp. 45-52 (the delta function as a distribution defined by evaluation, with the explicit remark that it is not a function) and §2.1.4 printed p. 68 (superposition for smooth densities), read in the stamped scanned full text"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§28 printed pp. 69-71 (the charge-current of a point charge as a curve integral) and §29 printed pp. 71-73 (continuity), read in the stamped 387-page full text; the non-representation statement itself is assembled locally from the published distribution and measure suppliers named in the proof strategy"
---

## Example

This example is conditional on the definitions [[def-em-sources]],
[[def-em-fields]] and the smooth branch of [[post-em-vacuum-maxwell]], and
assumes Countable Choice $\mathrm{AC}_\omega$ both for the Lebesgue-volume
source branch and for the injectivity of the regular-distribution embedding
used below ([[def-countable-choice]]).

(a) [Smooth source] Let $f\in C_c^\infty(\mathbb R^3)$ be nonnegative with
Lebesgue normalization $\int_{\mathbb R^3}f\,d\lambda_3=1$ (the Riemann
integral over any compact box containing $\operatorname{supp}f$ has the same
value by [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]])
(for instance any nonzero nonnegative smooth compactly supported bump divided
by its finite nonzero integral), let $q\in\mathbb R$, and let
$\Omega\subseteq\mathbb R^3$ be a nonempty open set containing
$\operatorname{supp}f$. Then $\rho:=qf$ and $J:=0$ is a smooth source field of
[[def-em-sources]]: $\rho$ is compactly supported and of class $C^\infty$,
hence continuous, and for every bounded Lebesgue-measurable $V$ with compact
closure inside $\Omega$ and containing $\operatorname{supp}f$, the charge is
$Q(V,t)=q\int f=q$; the same value holds for the retained compact
Jordan/Riemann branch at every time $t$, so the smooth branch of
[[post-em-vacuum-maxwell]] applies to this source.

(b) [Point source] Let $I\subseteq\mathbb R$ be an open interval and
$z:I\to\mathbb R^3$ a $C^1$ trajectory whose graph map
$t\mapsto(z(t),t)$ is proper into $\Omega\times I$
([[lem-em-point-current-continuity]]; properness is automatic when
$\Omega\times I$ is the whole ambient domain or when $I=\mathbb R$). For
the same charge $q$ as in (a), the pairings
$\langle\rho,\psi\rangle:=q\int_I\psi(z(t),t)\,dt$ and
$\langle J,\psi\rangle:=q\int_Iz'(t)\psi(z(t),t)\,dt$, for
$\psi\in C_c^\infty(\Omega\times I)$, are the point-source distributions of
[[lem-em-point-current-continuity]]: they are distributions
([[def-distribution]], [[def-test-function-space-d-of-an-open-set]])
satisfying $\partial_t\rho+\operatorname{div}J=0$ in the distributional sense.
At each fixed time $t$ this model assigns the charge
$q\cdot\mathbf 1_{z(t)\in V}$ to a Jordan-measurable $V\subseteq\Omega$, and its
instantaneous spatial density is the evaluation functional $q\delta_{z(t)}$
([[def-dirac-delta-and-its-derivatives]]),
$\varphi\mapsto q\,\varphi(z(t))$; a source field of the smooth branch instead
gives the integrals $\varphi\mapsto\int_\Omega\rho(y,t)\varphi(y)\,dy$ of its
continuous density.

(c) [The two classes differ] Fix $t\in I$, put $z_0:=z(t)\in\Omega$ and
suppose $q\ne0$. Retain Countable Choice for the regular-distribution
embedding and the Lebesgue-null singleton result cited below
([[def-countable-choice]]). Then no locally integrable
$\rho\in L^1_{\mathrm{loc}}(\Omega)$ represents the point charge: there is no
such $\rho$ whose regular distribution
([[def-regular-distribution-from-a-locally-integrable-function]]) satisfies
$\langle\rho,\varphi\rangle=q\,\varphi(z_0)$ for every
$\varphi\in C_c^\infty(\Omega)$. Indeed, if $\rho$ did, then on the open set
$\Omega\setminus\{z_0\}$ every test vanishes at $z_0$, so the regular
distribution of the restriction of $\rho$ is zero, and injectivity gives
$\rho=0$ almost everywhere there
([[def-measure-null-set-and-almost-everywhere]]); since $\{z_0\}$ is
Lebesgue-null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]) and a union
of two null sets is null
([[thm-finite-and-countable-subadditivity-of-measures]]), $\rho=0$ almost
everywhere on $\Omega$. The regular distribution depends only on the
almost-everywhere class, so $\langle\rho,\varphi_0\rangle=0$ for a cutoff
$\varphi_0\in C_c^\infty(\Omega)$ with $\varphi_0=1$ near $z_0$
([[lem-test-function-cutoffs-and-euclidean-localization]]), while the assumed
identity gives $\langle\rho,\varphi_0\rangle=q\varphi_0(z_0)=q\ne0$: a
contradiction. Hence the point source is not a source field of the smooth
branch of [[def-em-sources]] (whose densities are continuous functions), and
the smooth-branch equations are not applied to it pointwise; the point source
enters the framework only through its distributional pairings.

(d) [Conclusion] The two source classes carry the same parameter $q$ and the
same total charge $q$ (the smooth density integrates to $q$; the point model
assigns charge $q$ to regions containing the particle). For $q\ne0$ their
spatial distributions are distinct and the point source has no locally
integrable representative. For $q=0$ both constructions give the zero charge
and zero current distributions, represented by the smooth zero functions.
The nonzero point source is used only through its pairings; neither branch of
[[post-em-vacuum-maxwell]] supplies a singular-source Maxwell adoption.
This example asserts no field value at $z(t)$ and
contains no measurement or empirical claim.

## Facts & Assumptions

**Given:** a nonnegative $f\in C_c^\infty(\mathbb R^3)$ with $\int_{\mathbb R^3}f\,d\lambda_3=1$; $q\in\mathbb R$; a nonempty open $\Omega\subseteq\mathbb R^3$ with $\operatorname{supp}f\subseteq\Omega$; an open interval $I\subseteq\mathbb R$ and a $C^1$ trajectory $z:I\to\mathbb R^3$ whose graph map is proper into $\Omega\times I$; a time $t\in I$ with $z_0:=z(t)$; and Countable Choice where the cited measure and embedding suppliers carry it.

[F1] A smooth source field is a pair $(\rho,J)$, continuous and $C^1$ wherever differentiated, with frame charge $Q(V,t)=\int_V\rho(y,t)\,d\lambda_3$ for bounded Lebesgue-measurable $V$ with compact closure in $\Omega$, and compact Jordan charge $Q_R(V,t)=\int_V\rho(y,t)\,dy$; the empty region has charge zero. ([[def-em-sources]])

[F2] The smooth Maxwell branch refers to jointly $C^1$ fields and continuous sources; the weak branch admits locally integrable fields and sources. Point or sheet sources that lack locally integrable representatives are excluded from both branches. ([[post-em-vacuum-maxwell]])

[F3] The point-source pairings $\langle\rho,\psi\rangle=q\int_I\psi(z(t),t)\,dt$, $\langle J,\psi\rangle=q\int_Iz'(t)\psi(z(t),t)\,dt$ over an open interval $I$ with proper graph map define distributions satisfying $\partial_t\rho+\operatorname{div}J=0$. ([[lem-em-point-current-continuity]])

[F4] The Dirac distribution at $a$ is the evaluation functional $\delta_a(\varphi)=\varphi(a)$ on the test space. ([[def-dirac-delta-and-its-derivatives]])

[F5] The regular functional $u_f(\varphi)=\int_\Omega f\varphi$ is complex-linear in $f$ and depends only on the almost-everywhere class of $f$. ([[def-regular-distribution-from-a-locally-integrable-function]])

[F6] Under Countable Choice, the map $f\mapsto u_f$ from $L^1_{\mathrm{loc}}(\Omega)$ modulo almost-everywhere equality into distributions is injective. ([[thm-locally-integrable-functions-embed-in-distributions]])

[F7] Under Countable Choice, every at most countable subset of $\mathbb R^n$ is Lebesgue-null; in particular singletons are null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]])

[F8] A union of finitely many ($\mu$-null) measurable sets is null, and almost-everywhere statements refer to a measurable null exceptional set. ([[thm-finite-and-countable-subadditivity-of-measures]], [[def-measure-null-set-and-almost-everywhere]])

[F9] For compact $K\subseteq\Omega$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighborhood of $K$. ([[lem-test-function-cutoffs-and-euclidean-localization]])

[F10] On a compact Jordan region the bounded Borel zero extension of a continuous function is Riemann integrable and its Riemann and Lebesgue integrals agree; the Riemann integral over a Jordan set is defined by that zero extension. ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[def-riemann-integral-over-a-jordan-set]])

[F11] The Lebesgue integral is linear on $L^1$; in particular $\int_Vqg\,d\lambda_3=q\int_Vg\,d\lambda_3$ for a real constant $q$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]])

## Verification

**Proof technique:** direct computations for the two source classes and a short contradiction for their difference.

1.1 For the smooth source $\rho=qf$, $J=0$: $\rho$ is $C^\infty$ with compact support and $J=0$ is smooth, so $(\rho,J)$ is a smooth source field in the sense of [F1]; for every bounded Lebesgue-measurable $V$ with compact closure in $\Omega$ containing $\operatorname{supp}f$ one has $f\mathbf 1_V=f$ pointwise, hence $Q(V,t)=\int_Vqf\,d\lambda_3=q\int_{\mathbb R^3}f\,d\lambda_3=q$ by [F11], and the same pair is therefore a source to which the smooth branch [F2] refers. [F1, F2, F11]

1.2 For the same $V$ required to be compact and Jordan measurable, the zero extension of $qf$ to a bounding rectangle is the bounded zero extension of a continuous function on a compact Jordan region, so it is Riemann integrable with $Q_R(V,t)=\int_Vqf=q$ by [F10]; thus both charge branches of [F1] give the same value $q$ on this source, as the definition of $\rho=qf$ predicts. [F10, F1]

1.3 For the point source, the pairings of [F3] applied to the given proper trajectory define distributions on $\Omega\times I$ satisfying $\partial_t\rho+\operatorname{div}J=0$; its fixed-time reading is the evaluation functional $q\delta_{z(t)}$ of [F4], in contrast with the fixed-time reading $\varphi\mapsto\int_\Omega\rho(y,t)\varphi(y)\,dy$ of a smooth-branch density. [F3, F4]

1.4 If $q=0$, then $qf=0$, the smooth current is zero, and both point-source pairings in [F3] vanish; likewise $q\delta_{z(t)}=0$ by [F4]. Hence both constructions give zero distributions represented by the smooth zero functions. [F1, F3, F4, F5]

2.1 Assume $q\ne0$ and suppose a locally integrable $\rho\in L^1_{\mathrm{loc}}(\Omega)$ satisfied $\langle\rho,\varphi\rangle=q\varphi(z_0)$ for every $\varphi\in C_c^\infty(\Omega)$. Every test supported in the open set $\Omega\setminus\{z_0\}$ vanishes at $z_0$, so the regular distribution of $\rho|_{\Omega\setminus\{z_0\}}$ is zero; by injectivity [F6] this gives $\rho=0$ almost everywhere on $\Omega\setminus\{z_0\}$. The singleton $\{z_0\}$ is null by [F7], so their union is null by [F8] and $\rho=0$ almost everywhere on $\Omega$; since the regular distribution depends only on the almost-everywhere class [F5], $\langle\rho,\varphi_0\rangle=0$ for the cutoff $\varphi_0$ of [F9] with $\varphi_0=1$ on a neighborhood of the compact $\{z_0\}\subseteq\Omega$. But the assumed identity gives $\langle\rho,\varphi_0\rangle=q\varphi_0(z_0)=q\ne0$, a contradiction. [step 1.3, F5, F6, F7, F8, F9]

3.1 Both constructions carry total charge $q$ by steps 1.1-1.3. For $q\ne0$, step 2.1 proves that the point charge has no locally integrable representative, so it differs from the smooth density and is covered by neither Maxwell branch of [F2]'s postulate. For $q=0$, step 1.4 gives the common zero distributions. Only the point-source pairings and their continuity identity have been established, with no singular-source Maxwell adoption, field value at $z(t)$ or measurement. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, F1, F2] ∎
