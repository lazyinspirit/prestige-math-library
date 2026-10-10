---
id: pthm-em-fixed-vacuum-jumps
kind: physics-theorem
title: "Stationary vacuum interface jumps and the absence of magnetic sheet sources"
domain: physics
status: draft
origin: pipeline
dependency_level: 16
deps: [post-em-distributional-vacuum-maxwell,
       post-em-vacuum-maxwell,
       def-em-weak-sources,
       def-em-surface-distribution,
       def-surface-integral-on-a-compact-c-one-hypersurface,
       def-em-lab-geometry,
       def-em-si-conventions,
       def-em-fields,
       def-em-sources,
       lem-em-interface-derivatives,
       lem-em-surface-density-localization,
       lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound,
       lem-test-function-cutoffs-and-euclidean-localization,
       lem-finite-ambient-partitions-for-euclidean-boundary-integration,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       lem-q-and-irrationals-dense-r,
       thm-integration-by-parts,
       thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
       thm-finite-and-countable-subadditivity-of-measures,
       thm-lebesgue-measure-is-a-complete-measure,
       thm-lebesgue-measure-of-a-box-of-every-kind,
       prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       def-integral-of-a-nonnegative-simple-function,
       prop-the-nonnegative-integral-agrees-with-the-simple-integral,
       def-integral-over-a-measurable-set,
       cor-continuous-functions-are-borel-measurable,
       cor-integral-over-a-null-set-vanishes,
       def-cross-product-in-r3,
       def-distribution,
       def-distributional-derivative,
       def-test-function-space-d-of-an-open-set,
       def-regular-distribution-from-a-locally-integrable-function,
       thm-locally-integrable-functions-embed-in-distributions,
       def-countable-choice]
dependency_roles:
  post-em-distributional-vacuum-maxwell: physical-assumption
  post-em-vacuum-maxwell: physical-assumption
  def-em-weak-sources: formulation-prerequisite
  def-em-surface-distribution: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  lem-em-interface-derivatives: mathematical-premise
  lem-em-surface-density-localization: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-finite-ambient-partitions-for-euclidean-boundary-integration: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-finite-and-countable-subadditivity-of-measures: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The vacuum interface identities at a stationary compact C2 hypersurface with a tangential surface current and a surface charge density, under the separate singular-source adoption and explicit one-sided joint C1 (or weak-trace) hypotheses: n.[E]=sigma/eps0, n.[B]=0, n x [E]=0, n x [B]=mu0 K. The statement covers only stationary interfaces without normal sheet current and without magnetic sheet sources; moving interfaces, normal sheet currents, line currents and magnetic charges are outside it, and the conclusion is conditional on the adopted postulate."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.6 printed pp. 331-333 (boundary conditions (7.59)-(7.63) derived by pillbox and loop limits: the normal component of D, the continuity of the normal component of B and of the tangential components of E, and the tangential jump of H proportional to the surface current); read in the stamped scanned full text."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Sections 4.3-4.3.4 printed pp. 43-48 (surface charge and current sheets, singularity matching of the four Maxwell operators and the resulting boundary conditions); read in the stamped full text."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Sections 27-30 printed pp. 67-75 (field discontinuities at a surface, surface charge and current densities, and the field equations), read in Gaussian units and re-expressed in the framework's SI conventions; read in the stamped full text."
proof_strategy: direct
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, the convention of
the interface and surface-measure definitions cited below
([[def-countable-choice]]). Let $U\cong I\times\Omega$ be the laboratory
region of [[def-em-lab-geometry]] with the constants of
[[def-em-si-conventions]] and the fields of [[def-em-fields]] and source
fields of [[def-em-sources]].

Let $S\subset\Omega$ be a fixed compact embedded $C^2$ hypersurface with a
chosen unit normal $n$ pointing from the side $\Omega_-$ to the side
$\Omega_+$ ([[def-em-surface-distribution]]), and let
$\sigma:S\times I\to\mathbb R$ and $K:S\times I\to\mathbb R^3$ be continuous
with $K(x,t)\cdot n(x)=0$ for all $(x,t)$ (a tangential surface current
density). Let $E,B$ be locally integrable on $\Omega\times I$ and $C^1$ on
$(\Omega\setminus S)\times I$ with the following explicit joint one-sided
regularity: around every $(x_0,t_0)\in S\times I$, each side is the restriction
of a $C^1$ function on an open spacetime neighbourhood of the corresponding
closed side of a smaller stationary graph cylinder. Thus the fields and their
first space and time derivatives extend continuously to that side of
$S\times I$, locally uniformly on compact cylinders, and let $\rho_v,J_v$ be
continuous on $(\Omega\setminus S)\times I$ and locally integrable on
$\Omega\times I$. Write $[F]=F_+-F_-$ for the jump of the one-sided traces of
such a field $F$.

Under the separate singular-source physical adoption
[[post-em-distributional-vacuum-maxwell]], suppose that $E,B$ satisfy the weak
Maxwell equations with the source pair

$$\rho=\rho_v+\rho_S,\qquad J=J_v+J_S,$$

where $(\rho_S,J_S)$ is the stationary-sheet source of
[[def-em-weak-sources]](c) with densities $\sigma,K$ and the pairings there, in
the sense of [[def-em-weak-sources]](e), and where the volume parts
$\rho_v,J_v$ are identified with their regular distributions
([[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]]). Then, pointwise
on $S\times I$,

$$n\cdot[E]=\frac{\sigma}{\varepsilon_0},\qquad n\times[B]=\mu_0K,\qquad n\cdot[B]=0,\qquad n\times[E]=0,$$

with the ordinary Euclidean inner and cross products of the one-sided traces
([[def-cross-product-in-r3]]). Equivalently, the surface current density is
$K=(\mu_0)^{-1}\,n\times[B]$ and the surface charge density is
$\sigma=\varepsilon_0\,n\cdot[E]$.

The theorem assumes a stationary interface: the hypersurface $S$ and its
normal do not depend on $t$, so the one-sided $C^1$ traces also make
$\partial_tE$ and $\partial_tB$ locally bounded near $S$ and hence locally
integrable, contributing no delta terms. No magnetic surface charge or
magnetic surface current is present in the sources, and correspondingly the
last two identities assert the absence of magnetic sheet delta terms. A moving
interface, a normal sheet current, or a sheet whose support changes with time
is outside this statement and would require additional terms.

[General weak-trace branch] The weak Maxwell framework continues to allow the
full locally integrable field and source class, without asserting undefined
classical trace values. If instead of the joint extension condition the fields
have the original one-sided spatial $C^1$ extensions at each time, assume in
addition that their piecewise first spatial and temporal derivatives are in
$L^1_{\mathrm{loc}}(\Omega\times I)$ and that their one-sided field traces are
measurable and locally integrable on $S\times I$ with respect to $dS\,dt$.
The one-sided traces are then locally integrable densities on the sheet, so
the four pairings
$$\int_I\int_S\bigl(n\cdot[E]-\sigma/\varepsilon_0\bigr)\psi\,dS\,dt,\quad\int_I\int_S(n\cdot[B])\psi\,dS\,dt,\quad\int_I\int_S(n\times[E])\cdot\psi\,dS\,dt,\quad\int_I\int_S\bigl(n\times[B]-\mu_0K\bigr)\cdot\psi\,dS\,dt$$
against every $\psi\in C_c^\infty(U)$ are well defined by the ordinary
surface-and-time integrals, with no product of distributions formed; these
vanishing pairings are the precise weak form of the four jump identities, and
they do vanish. The identities then hold for $dS\,dt$-almost every $(x,t)$;
since the traces are spatially continuous at each fixed time, they hold for
every $x\in S$ for almost every $t\in I$. They hold at every $(x,t)$ whenever
the jump densities are additionally jointly continuous. Merely having
one-sided spatial $C^1$ traces separately at every time does not justify this
last upgrade.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The laboratory region, the stationary
interface $S$ with normal $n$ from $\Omega_-$ to $\Omega_+$, the fields and
sources with the stated regularity (joint one-sided in the main branch),
continuous $\sigma$ and tangential continuous $K$, and the weak Maxwell
equations for the source pair $(\rho_v+\rho_S,J_v+J_S)$ under the separate
adoption.

[F1] The interface conventions: $\delta_S(\psi)=\int_S\psi\,dS$ defines a
finite Borel measure ([[def-em-surface-distribution]]), the jump is
$[F]=F_+-F_-$ with $n$ from $\Omega_-$ to $\Omega_+$, and the surface measures
and chart formulas are those of
[[def-surface-integral-on-a-compact-c-one-hypersurface]]; the cross and inner
products are those of [[def-cross-product-in-r3]] and the Euclidean structure
of the frame ([[def-em-lab-geometry]]).

[F2] The separately adopted postulate requires the four identities in
$\mathcal D'(U)$ for the declared singular-source models, with the source
pairings of [[def-em-weak-sources]](b)-(e)
([[post-em-distributional-vacuum-maxwell]], [[def-em-weak-sources]],
[[post-em-vacuum-maxwell]]).

[F3] The interface-derivative lemma: for a $C^1$ field off a two-sided compact
embedded $C^2$ interface with one-sided $C^1$ traces,
$\operatorname{div}F=\{\operatorname{div}F\}+n\cdot[F]\delta_S$ and
$\operatorname{curl}F=\{\operatorname{curl}F\}+n\times[F]\delta_S$ in the
distributional sense, the bracket terms being the locally integrable
piecewise classical fields ([[lem-em-interface-derivatives]]).

[F4] The surface-density localization lemma: a continuous density on $S$
whose surface integral against every ambient compact smooth test vanishes is
identically zero ([[lem-em-surface-density-localization]]).

[F5] Partition and cutoff machinery: compact supports admit finite ambient
partitions of unity subordinate to a cover
([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]),
cutoffs equal to one near a compact set exist inside an open set
([[lem-test-function-cutoffs-and-euclidean-localization]]), and for every
$0<r<R$ there are smooth bumps equal to one on $\overline B_r$ and supported
inside $B_R$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F6] Integration tools: the Fubini theorem for $L^1$ functions on sigma-finite
product spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]),
integration by parts on a compact interval
([[thm-integration-by-parts]]), and the Riemann-Lebesgue comparison
([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]).

[F7] Nullity and its calculus: $S$ is a Lebesgue-null subset of $\mathbb R^3$
(its slice charts give singleton sections; [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]]), $\lambda_3$ is complete
([[thm-lebesgue-measure-is-a-complete-measure]]), a locally integrable
function vanishing off a null set represents the zero distribution
([[cor-integral-over-a-null-set-vanishes]]), and countable unions of null sets
are null ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F8] Integral comparisons used by the sign-and-bump argument: the nonnegative
integral is monotone and homogeneous
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]), agrees with
the simple integral, and the integral of an indicator is the measure
([[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[def-integral-over-a-measurable-set]]); continuous functions are Borel
measurable ([[cor-continuous-functions-are-borel-measurable]]); the rationals
are dense ([[lem-q-and-irrationals-dense-r]]); and the distributions and their
derivatives are those of [[def-distribution]],
[[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]],
[[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]].

## Proof

1.1 Under the joint one-sided regularity, each side of $S\times I$ carries a $C^1$ extension to a closed side of a smaller stationary graph cylinder; on each compact closed half-cylinder the extensions and their first spatial and temporal derivatives are bounded, so the piecewise first derivatives of $E,B$ and the volume sources are locally bounded and locally integrable on $U$, their one-sided traces and jumps are jointly continuous, and the jump densities are bounded on compact subsets of $S\times I$. [F1, F2, given]

1.2 The interface $S$ is Lebesgue-null in $\mathbb R^3$: in the finite graph charts of [F1] every normal section of the graph over the parameter plane is a singleton, so Fubini and the nullity of singletons give $\lambda_3(S)=0$, and the finitely many charts cover $S$; hence $S\times I$ has four-dimensional measure zero locally and every locally integrable function vanishing off $S\times I$ represents the zero distribution. [F7, given]

1.3 Spacetime interface formula for a component: for each fixed $t$ the spatial restriction of the hypothesis satisfies the interface-derivative lemma on the spatial slice, so for a compactly supported spacetime test $\psi$ the identity $\partial_iF_j=\{\partial_iF_j\}+n_i[F_j]\,\delta_S$ may be applied slicewise and integrated in $t$; a time-independent finite partition of unity subordinate to stationary graph neighbourhoods of the spatial support of $\psi$, with cutoffs as in [F5], makes the terms $F_j\partial_i\psi$, $(\partial_iF_j)\psi$ and $n_i[F_j]\psi$ absolutely integrable on the compact support, because the piecewise derivatives and the continuous jumps are bounded there and the surface measure of the compact sheet is finite by [F1]; Fubini [F6] then justifies integrating the slicewise identity, giving $\partial_iF_j=\{\partial_iF_j\}+n_i[F_j]\otimes\delta_{S\times I}$ for the spacetime distribution, where the sheet term acts as $\int_I\int_Sn_i[F_j]\psi\,dS\,dt$. For the time derivative, on each spatial side the field is $C^1$, and compact-support integration by parts on a compact interval containing the time support of each spatially localized piece, followed by the Riemann-Lebesgue comparison and Fubini, gives $-\int F_j\partial_t\psi=\int(\partial_tF_j)\psi$ with no endpoint contribution, so $\partial_tF_j=\{\partial_tF_j\}$ carries no sheet term: the interface is stationary. [F1, F3, F5, F6, given, algebra]

2.1 Apply the formula of step 1.3 to each of the four weak Maxwell identities. Off the sheet the fields and sources are $C^1$ and continuous, so the classical residuals $h_1=\operatorname{div}E-\rho_v/\varepsilon_0$, $h_2=\operatorname{div}B$, $h_3=\operatorname{curl}E+\partial_tB$, $h_4=\operatorname{curl}B-\mu_0J_v-c^{-2}\partial_tE$ are continuous on the open set $U\setminus(S\times I)$; against every test supported in that open set the four weak identities reduce to $\int h_\ell\psi=0$, and the sign-and-bump argument of [F8] (a positive value of a continuous $h_\ell$ at a point persists with a fixed sign on a small axis-parallel cube of positive measure, on which a bump equal to one on a smaller cube, supplied by [F5], makes $\int h_\ell\psi$ strictly nonzero) forces $h_\ell=0$ on $U\setminus(S\times I)$. Each residual is locally integrable on $U$ and vanishes off the null set $S\times I$ by step 1.2, hence represents the zero regular distribution; subtracting the off-sheet parts from the four identities leaves four sheet identities whose densities are $n\cdot[E]-\sigma/\varepsilon_0$, $n\cdot[B]$, $n\times[E]$ and $n\times[B]-\mu_0K$, each multiplied by the sheet distribution $\delta_{S\times I}$. [F1, F2, F4, F5, F6, F7, F8, step 1.2, step 1.3, given, algebra]

3.1 Write $a_1=n\cdot[E]-\sigma/\varepsilon_0$, $a_2=n\cdot[B]$, $a_3\in\mathbb R^3$ with components of $n\times[E]$, and $a_4=n\times[B]-\mu_0K$ for the continuous sheet densities of step 2.1. For a fixed spatial test $\varphi\in\mathcal D(\Omega)$ and each component density $a$ of these four, the function $H_\varphi(t):=\int_Sa(x,t)\varphi(x)\,dS$ is continuous on $I$: on a compact time interval the joint continuity of $a$ on the compact sheet gives uniform convergence as $t\to t_0$, and $|H_\varphi(t)-H_\varphi(t_0)|\le S(S)\|\varphi\|_\infty\sup_{x\in S}|a(x,t)-a(x,t_0)|$ tends to $0$. Testing the sheet identity with $\varphi(x)\eta(t)$ for $\eta\in C_c^\infty(I)$ gives $\int_IH_\varphi(t)\eta(t)\,dt=0$ for every such $\eta$; the one-dimensional sign-and-bump argument of [F8] then gives $H_\varphi(t)=0$ for every $t\in I$. Since $\varphi$ was an arbitrary ambient test, the surface-density localization lemma [F4] applied at each fixed $t$ to the continuous density $a(\cdot,t)$ gives $a(\cdot,t)=0$ on $S$; hence all four pointwise jump identities $n\cdot[E]=\sigma/\varepsilon_0$, $n\cdot[B]=0$, $n\times[E]=0$, $n\times[B]=\mu_0K$ hold on $S\times I$, and the equivalent solved forms for $\sigma$ and $K$ follow by dividing by $\varepsilon_0>0$ and $\mu_0>0$. [F1, F4, F5, F8, step 2.1, given, algebra]

4.1 For the general weak-trace branch the same interface formula of step 1.3 is available with the weaker justification: the one-sided spatial $C^1$ extensions give the slicewise lemma at every time, the additional local $L^1$ hypotheses on the piecewise first derivatives make the localized terms of step 1.3 integrable, the measurable locally integrable traces make the sheet pairings $\int_I\int_Sa\psi\,dS\,dt$ well defined by the ordinary integrals for every test $\psi$, and Fubini still applies; the temporal identity holds because each fixed off-sheet point has a $C^1$ dependence in $t$ and integration by parts against a compactly supported test is justified by the integrable derivative. Consequently each of the four sheet pairings of the Statement vanishes for every test; no product of distributions is formed, only the pairing of a locally integrable sheet density with a compact smooth test. For the almost-everywhere conclusion, use the countable family of ambient bumps with rational centres and rational radii $0<r<R$ with $\overline B_R(q)\subseteq\Omega$, each fixed by the scaled-bump construction of [F5] rather than chosen per instance; by the preceding paragraph each such test gives a null set of exceptional times, and the countable union of these null sets is null by [F7]. At each remaining time $t$, if some continuous-in-$x$ density $a(\cdot,t)$ were nonzero at a point $x_0\in S$, its fixed sign would persist on a small graph neighbourhood of $x_0$; density of the rationals [F8] provides one of the rational balls inside that neighbourhood whose inner ball contains $x_0$, and a positive-area graph cell inside that inner ball, as in [F4], makes the pairing nonzero against the corresponding bump, a contradiction. Hence all four identities hold at every $x\in S$ for almost every $t\in I$; if the jump densities are additionally jointly continuous, the same positive-area-cell argument applied on nondegenerate time intervals upgrades the identities to all $(x,t)$. [F1, F3, F4, F5, F6, F7, F8, step 1.3, step 3.1, given, algebra]

5.1 Steps 1.1-3.1 prove the four pointwise jump identities under the joint one-sided regularity, and step 4.1 proves the weak-trace branch with its almost-everywhere and continuity upgrades; the sources used are exactly the stationary tangential sheet and volume parts, so no normal sheet current, magnetic sheet source, moving interface or product of distributions enters, and the normal $n$ points from $\Omega_-$ to $\Omega_+$ with $[F]=F_+-F_-$ throughout. The separate adoption [F2] is what makes the starting identities physical for the singular-source model; no empirical claim or measurement enters the deduction. [F2, step 2.1, step 3.1, step 4.1, given] ∎

## Source notes

The jump identities are the standard pillbox and loop boundary conditions of
the cited treatments, here derived distributionally from the adopted weak
identities with the library's interface convention. The treatments motivate the
identities but do not supply the distributional deduction; that deduction uses
the imported interface-derivative, Fubini, integration-by-parts and
localization interfaces, and the separate singular-source adoption.
