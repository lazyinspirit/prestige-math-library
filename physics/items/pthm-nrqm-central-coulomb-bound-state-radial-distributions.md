---
id: pthm-nrqm-central-coulomb-bound-state-radial-distributions
aliases: [nrqm-central-coulomb-bound-state-radial-distributions]
kind: physics-theorem
domain: physics
title: "The one-centre Coulomb model: position and radial distributions of the bound states, with the ground-state density and its scales"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-energy-observable-and-flow, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-kinematics-spin-s-outcome-laws, def-nrqm-state-geometry-framework-state-space, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-ground-radial-probability-and-units, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-polar-surface-measure-on-the-unit-sphere, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-ground-radial-probability-and-units: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the declared one-centre Coulomb model: the position outcome law of any normalised bound state, its disintegration into the radial density |u_nl|^2/||u_nl||^2 times the angular spherical-harmonic weight, and the explicit ground-state density, its mean radius 3 a_kappa/2, its mode a_kappa, the positivity of the probability in every ball around the origin and the absence of an atomic probability at the origin. The scales a_kappa and the density are model data; the item asserts no measured radius, no orbit, no trajectory, no formation or decay process, and does not identify a_kappa with any measured length."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.2, printed pages 116-117 (the hydrogen wavefunctions r^l f_(n,l)(r) e^(-beta r/2n) Y_lm with generalised Laguerre polynomials, the ground state psi = (1/sqrt(pi r_B^3)) e^(-r/r_B) and its nodes)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1.2, printed pages 187-190 (the radial eigenfunctions u_n^l, the ground-state radial function, the r-expectation values and the probability outside classically allowed radii)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.4, printed pages 229-235 (the explicit normalised bound states and the lowest eigenvalue, with the ground-state formula)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates P1, P2 and P5, the readings of the declared
one-centre Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with
parameters $\hbar>0$, $m>0$, $\kappa>0$ and length scale
$a_{\kappa}=\hbar^{2}/(m\kappa)$, the energy-observable reading of
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]], the bound-state data
of [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]], and the
spin-zero position law
[[pthm-nrqm-kinematics-spin-s-outcome-laws]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Assume the
Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). For each label let $\psi_{nlm}$ and
$\Psi_{nlm}=\psi_{nlm}/\|\psi_{nlm}\|$ be the bound vectors of the cited
theorem, and write $u_{nl}$ for the reduced regular solution with
$\psi_{nlm}(x)=u_{nl}(r)Y_{lm}(\Omega)/r$. Then:

(a) for every label and every Borel $B\subseteq\mathbb R^{3}$ the position
outcome law in the unit preparation $[\Psi_{nlm}]$ is
$$\mu^{G}_{\Psi_{nlm}}(B)=\|\psi_{nlm}\|^{-2}\int_{0}^{\infty}|u_{nl}(r)|^{2}\Bigl(\int_{S^{2}}\mathbf 1_{B}(r\Omega)\,|Y_{lm}(\Omega)|^{2}\,d\sigma(\Omega)\Bigr)dr;$$
in particular, for a **radial** set $B=\{x:a<|x|<b\}$ with
$0\le a<b\le+\infty$ one has
$$\mu^{G}_{\Psi_{nlm}}(B)=\frac{1}{\|u_{nl}\|_{2}^{2}}\int_{a}^{b}|u_{nl}(r)|^{2}\,dr,$$
so the **radial density** $p_{nl}(r):=|u_{nl}(r)|^{2}/\|u_{nl}\|_{2}^{2}$ is a
probability density on $(0,\infty)$: $p_{nl}\ge0$ and
$\int_{0}^{\infty}p_{nl}(r)\,dr=1$;

(b) for $n=1,l=m=0$ one has
$$\Psi_{100}(x)=(\pi a_{\kappa}^{3})^{-1/2}e^{-r/a_{\kappa}},\qquad p_{10}(r)=4r^{2}a_{\kappa}^{-3}e^{-2r/a_{\kappa}},$$
the mean of $p_{10}$ is $\int_{0}^{\infty}r\,p_{10}(r)\,dr=3a_{\kappa}/2$, the
unique maximum of $p_{10}$ is at $r=a_{\kappa}$, the spatial density
$|\Psi_{100}|^{2}$ is strictly decreasing in $r$ and maximal at the origin,
and for every $\varepsilon>0$
$$\mu^{G}_{\Psi_{100}}\bigl(\{|x|<\varepsilon\}\bigr)=\frac{1}{6}\Bigl(\frac{2\varepsilon}{a_{\kappa}}\Bigr)^{3}+O\Bigl(\bigl(\frac{\varepsilon}{a_{\kappa}}\bigr)^{4}\Bigr)>0,$$
which tends to $0$ as $\varepsilon\downarrow0$: the density maximum at the
origin is not an atom of probability at any point;

(c) for every label the reduced solution has the polynomial-exponential form
$$u_{nl}(r)=c_{nl}\,r^{l+1}e^{-r/(na_{\kappa})}L_{n-l-1}^{(2l+1)}\bigl(2r/(na_{\kappa})\bigr)\qquad(c_{nl}\ne0),$$
with $L_{j}^{(a)}$ the Laguerre polynomial of integer order, so the radial
density of the level $(n,l)$ is a polynomial times $r^{2l+2}$ times a
decreasing exponential, and its normalisation constant is fixed by
$\int_{0}^{\infty}|u_{nl}|^{2}dr=\|\psi_{nlm}\|^{2}$;

(d) *Reading and scope.* The statements are conditional on P1, P2, P5, the
declared Coulomb model and the cited mathematics. The radial density is the
reading of the model's position observable on radial sets; it is not a
trajectory, an orbit or a definite distance, and the model assigns positive
probability to every open ball around the origin and to arbitrarily large
radii. No measured radius, no measured density and no identification of
$a_{\kappa}$ with a laboratory length is asserted; numerical comparison
requires the measured constants as qualified empirical inputs and is deferred.

## Facts & Assumptions

**Given:** The declared one-centre Coulomb model with $\hbar,m,\kappa>0$, $a_{\kappa}=\hbar^{2}/(m\kappa)$, $\gamma=2m\kappa/\hbar^{2}$ and bound vectors $\psi_{nlm}$, $\Psi_{nlm}$; the polar unitary and spherical harmonics of the angular-radial theory; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Bound vectors as reduced solutions.** For every $n\ge1$, $0\le l\le n-1$, $-l\le m\le l$ one has $\psi_{nlm}(x)=u_{nl}(r)Y_{lm}(\Omega)/r$ with $u_{nl}$ the regular solution of the radial equation at $k=\gamma/(2n)$, the functions $\psi_{nlm}$ lie in $D(H_{\kappa})$ with $H_{\kappa}\psi_{nlm}=E_{n}\psi_{nlm}$, and the normalised family $(\Psi_{nlm})$ is orthonormal ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] clauses (a), (b), [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clause (a)).

[F2] **Regular solutions.** The regular solution has the closed form $u_{\mathrm{reg}}(r)=c\,r^{l+1}e^{-kr}L_{j}^{(2l+1)}(2kr)$ with $j=\gamma/(2k)-l-1\in\mathbb N_{0}$ and $c\ne0$, where $L_{j}^{(a)}(x)=\sum_{i=0}^{j}(-1)^{i}\binom{j+a}{j-i}x^{i}/i!$ is the $j$-th Laguerre polynomial of order $a$; it is $C^{\infty}$ on $(0,\infty)$ and square integrable exactly in this terminating case ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] clauses (c), (d)).

[F3] **Ground-state data and dimensionless ball bound.** With $a_{0}:=2/\gamma$ one has $\psi_{100}(x)=(\gamma^{3}/8\pi)^{1/2}e^{-r/a_{0}}$, $\|\psi_{100}\|=1$, $C_{\gamma}\psi_{100}=-\frac{\gamma^{2}}{4}\psi_{100}$; the radial density $p(r)=\frac{\gamma^{3}}{2}r^{2}e^{-2r/a_{0}}=4r^{2}a_{0}^{-3}e^{-2r/a_{0}}$ is a probability density with mean $3a_{0}/2$ and unique mode $a_{0}$; the spatial density is strictly decreasing in $r$ and maximal at the origin. With $t:=2\varepsilon/a_{0}$, the ball probability is exactly $1-e^{-t}(1+t+t^{2}/2)$, and the proof of clause (d) of [[thm-nrqm-coulomb-ground-radial-probability-and-units]] gives $\left|\int_{|x|<\varepsilon}|\psi_{100}|^{2}dx-\frac{t^{3}}6\right|\le t^{4}/8$. Also $a_{0}=\hbar^{2}/(m\kappa)=a_{\kappa}$ under $\gamma=2m\kappa/\hbar^{2}$ ([[thm-nrqm-coulomb-ground-radial-probability-and-units]] proof 3.2 and clauses (a)-(e), [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b)).

[F4] **Polar disintegration.** For $\psi(x)=u(r)Y_{lm}(\Omega)/r$ with $u$ square integrable and $Y_{lm}$ normalised in $L^{2}(S^{2},\sigma)$, and for every Borel $B$, one has $\int_{B}|\psi(x)|^{2}dx=\int_{0}^{\infty}|u(r)|^{2}\bigl(\int_{S^{2}}\mathbf 1_{B}(r\Omega)|Y_{lm}(\Omega)|^{2}d\sigma(\Omega)\bigr)dr$; this is the polar-coordinates formula for the Lebesgue integral with the surface measure $\sigma$ and Tonelli's theorem, together with $\int_{S^{2}}|Y_{lm}|^{2}d\sigma=1$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-polar-surface-measure-on-the-unit-sphere]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F5] **Position law.** In a unit vector $\psi$ the model's Born position law is $\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$ for every Borel $B$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b), [[def-nrqm-observables-framework-observable-and-outcome-law]]).

## Proof

**Proof technique:** direct; insert the reduced-solution representation of the bound vectors into the spin-zero position law, disintegrate the resulting integral in polar coordinates, and transport the cited ground-state computation into the model's parametrisation.

**Given:** The data of the statement and [F1]-[F5].

1.1 [General radial law] Fix a label. By [F1], $\psi_{nlm}(x)=u_{nl}(r)Y_{lm}(\Omega)/r$ and $u_{nl}$ is a regular solution of [F2]; the unit preparation is $[\Psi_{nlm}]$ with $\Psi_{nlm}=\psi_{nlm}/\|\psi_{nlm}\|$. By [F5] its position law is $\mu^{G}_{\Psi_{nlm}}(B)=\int_{B}|\Psi_{nlm}|^{2}dx$, and since the normalisation constant is a scalar, [F4] applied to $\Psi_{nlm}$ gives the displayed formula for every Borel $B$. For a radial set $B=\{a<|x|<b\}$ the indicator $\mathbf 1_{B}(r\Omega)$ does not depend on $\Omega$ and equals $\mathbf 1_{(a,b)}(r)$, so the inner integral is $\int_{S^{2}}|Y_{lm}|^{2}d\sigma=1$ by [F4] and $\mu^{G}_{\Psi_{nlm}}(B)=\|u_{nl}\|_{2}^{-2}\int_{a}^{b}|u_{nl}(r)|^{2}dr$; the density $p_{nl}$ is nonnegative and integrates to one over $(0,\infty)$ by choosing $a=0$, $b=\infty$. This proves (a). [given, F1, F2, F4, F5, algebra]

2.1 [Ground state] Take $n=1$, $l=m=0$; then [F3] gives $\psi_{100}(x)=(\gamma^{3}/8\pi)^{1/2}e^{-r/a_{0}}$ with $\|\psi_{100}\|=1$, so $\Psi_{100}=\psi_{100}$ and the radial density of (a) is $p_{10}(r)=|u_{10}(r)|^{2}$. By [F2] with $l=j=0$ one has $u_{10}(r)=c\,r e^{-kr}L_{0}^{(1)}(2kr)$ and $L_{0}^{(1)}=1$, so $u_{10}(r)=c\,r e^{-r/a_{\kappa}}$ with $k=\gamma/2=1/a_{\kappa}$; inserting this into $|\psi_{100}|^{2}$ and polar disintegration [F4] identifies $c^{2}=4a_{\kappa}^{-3}$, that is $p_{10}(r)=4r^{2}a_{\kappa}^{-3}e^{-2r/a_{\kappa}}$. The mean, the unique mode $a_{\kappa}$ and the strict decrease of the spatial density are [F3] rewritten with $a_{0}=a_{\kappa}$. Put $t:=2\varepsilon/a_{\kappa}$; [F3] gives $$\left|\mu^{G}_{\Psi_{100}}(\{|x|<\varepsilon\})-\frac16\Bigl(\frac{2\varepsilon}{a_{\kappa}}\Bigr)^3\right|\le\frac{t^4}{8}=2\Bigl(\frac{\varepsilon}{a_{\kappa}}\Bigr)^4,$$ which proves the dimensionless remainder in (b). Positivity for every $\varepsilon>0$ and convergence to zero as $\varepsilon\downarrow0$ follow because the exact probability formula in [F3] is strictly positive for $t>0$ and tends to $0$ as $t\downarrow0$. This proves (b). [step 1.1, F2, F3, F4, algebra]

2.2 [Polynomial-exponential form] For a general label, [F2] with $j=n-l-1$ and $k=\gamma/(2n)=1/(na_{\kappa})$ gives $u_{nl}(r)=c_{nl}r^{l+1}e^{-r/(na_{\kappa})}L_{n-l-1}^{(2l+1)}(2r/(na_{\kappa}))$ with $c_{nl}\ne0$; the normalisation $\int_{0}^{\infty}|u_{nl}|^{2}dr=\|\psi_{nlm}\|^{2}$ is the case $a=0$, $b=\infty$ of step 1.1. This is (c). [step 1.1, F1, F2]

3.1 [Assembly and scope] Step 1.1 gives (a), step 2.1 gives (b) and step 2.2 gives (c); only the declared model, P1, P2, P5 and the cited mathematics were used, so the reading is conditional as recorded in (d), no orbit, trajectory, measured radius or empirical identification is asserted, and the model assigns positive probability to every ball around the origin and to arbitrarily large radii. [step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **The radial density is not a radial observable.** The quantity $p_{nl}$ is
  the disintegration of the position law on radial Borel sets, a reading of
  the declared position observable; the model does not assign the radius as an
  independent sharp observable, and no commutation or measurement claim about
  a radius operator is made.
- **Scales.** The two length scales $a_{\kappa}$ and the energy scale
  $\hbar^{2}/(2ma_{\kappa}^{2})$ are model data fixed by $\hbar,m,\kappa$; the
  identification of $a_{\kappa}$ with a physical Bohr radius of a hydrogen
  atom is the tested identification of
  [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (e) and
  carries its uncertainty.
