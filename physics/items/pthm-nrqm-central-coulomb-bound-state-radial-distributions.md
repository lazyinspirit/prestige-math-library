---
id: pthm-nrqm-central-coulomb-bound-state-radial-distributions
aliases: [nrqm-central-coulomb-bound-state-radial-distributions]
kind: physics-theorem
domain: physics
title: "The one-centre Coulomb model: position and radial distributions of the bound states, with the ground-state density and its scales"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-energy-observable-and-flow, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-kinematics-spin-s-outcome-laws, def-nrqm-state-geometry-framework-state-space, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-ground-radial-probability-and-units, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-polar-surface-measure-on-the-unit-sphere, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
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
physical_scope: "A conditional consequence of P1, P2, P4, P5 and the declared one-centre Coulomb model: the position outcome law of any normalised bound eigenvector, the radial density |u_nl|^2/||u_nl||^2 times the angular spherical-harmonic weight for each labelled separated vector, the finite-superposition law and radial mixture for a general bound eigenvector, and the explicit ground-state density, its mean radius 3 a_kappa/2, its mode a_kappa, the positivity of the probability in every ball around the origin and the absence of an atomic probability at the origin. The scales a_kappa and the density are model data; the item asserts no measured radius, no orbit, no trajectory, no formation or decay process, and does not identify a_kappa with any measured length."
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

Adopt the framework postulates P1, P2, P4 and P5, the readings of the declared
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
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Assume the
Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). For the integer labels $n\ge1$, $0\le l\le n-1$, $-l\le\bar m\le l$
with magnetic label $\bar m$ distinct from mass $m$, let $\psi_{nl\bar m}$ and
$\Psi_{nl\bar m}=\psi_{nl\bar m}/\|\psi_{nl\bar m}\|$ be the bound vectors of the cited
theorem, and write $u_{nl}$ for the reduced regular solution with
$\psi_{nl\bar m}(x)=u_{nl}(r)Y_{l\bar m}(\Omega)/r$. Then:

(a) for every label and every Borel $B\subseteq\mathbb R^{3}$ the position
outcome law in the unit preparation $[\Psi_{nl\bar m}]$ is
$$\mu^{G}_{\Psi_{nl\bar m}}(B)=\|\psi_{nl\bar m}\|^{-2}\int_{0}^{\infty}|u_{nl}(r)|^{2}\Bigl(\int_{S^{2}}\mathbf 1_{B}(r\Omega)\,|Y_{l\bar m}(\Omega)|^{2}\,d\sigma(\Omega)\Bigr)dr;$$
in particular, for a **radial** set $B=\{x:a<|x|<b\}$ with
$0\le a<b\le+\infty$ one has
$$\mu^{G}_{\Psi_{nl\bar m}}(B)=\frac{1}{\|u_{nl}\|_{2}^{2}}\int_{a}^{b}|u_{nl}(r)|^{2}\,dr,$$
so the **radial density** $p_{nl}(r):=|u_{nl}(r)|^{2}/\|u_{nl}\|_{2}^{2}$ is a
probability density on $(0,\infty)$: $p_{nl}\ge0$ and
$\int_{0}^{\infty}p_{nl}(r)\,dr=1$;

For a general unit **bound eigenvector** $\chi$ with $H_\kappa\chi=E_n\chi$, write
$\chi=\sum_{l=0}^{n-1}\sum_{\bar m=-l}^{l}b_{l\bar m}\Psi_{nl\bar m}$,
where $\sum_{l,\bar m}|b_{l\bar m}|^2=1$, and set
$\widehat u_{nl}:=u_{nl}/\|u_{nl}\|_2$. Then
$$\mu^G_\chi(B)=\int_0^\infty\int_{S^2}\mathbf1_B(r\Omega)\left|\sum_{l=0}^{n-1}\sum_{\bar m=-l}^{l}b_{l\bar m}\widehat u_{nl}(r)Y_{l\bar m}(\Omega)\right|^2d\sigma(\Omega)\,dr,$$
and its radial marginal has density
$$p_\chi(r)=\sum_{l=0}^{n-1}\sum_{\bar m=-l}^{l}|b_{l\bar m}|^2p_{nl}(r).$$
The general position density includes interference terms and need not factor
as a single $p_{nl}$ times one spherical-harmonic weight.

(b) for $n=1,l=\bar m=0$ the normalized vector $\Psi_{100}$ has a representative
of the form
$$\Psi_{100}(x)=\zeta_{100}(\pi a_{\kappa}^{3})^{-1/2}e^{-r/a_{\kappa}},\qquad |\zeta_{100}|=1,$$
and its radial density is
$$p_{10}(r)=4r^{2}a_{\kappa}^{-3}e^{-2r/a_{\kappa}};$$
the mean of $p_{10}$ is $\int_{0}^{\infty}r\,p_{10}(r)\,dr=3a_{\kappa}/2$, the
unique maximum of $p_{10}$ is at $r=a_{\kappa}$, the spatial density
of this representative is $|\Psi_{100}|^{2}=\frac{1}{\pi a_{\kappa}^{3}}e^{-2r/a_{\kappa}}$,
strictly decreasing in $r$ and maximal at the origin,
and for every $\varepsilon>0$
$$\mu^{G}_{\Psi_{100}}\bigl(\{|x|<\varepsilon\}\bigr)=\frac{1}{6}\Bigl(\frac{2\varepsilon}{a_{\kappa}}\Bigr)^{3}+O\Bigl(\bigl(\frac{\varepsilon}{a_{\kappa}}\bigr)^{4}\Bigr)>0,$$
which tends to $0$ as $\varepsilon\downarrow0$: the density maximum at the
origin is not an atom of probability at any point;

(c) for every label the reduced solution has the polynomial-exponential form
$$u_{nl}(r)=c_{nl}\,r^{l+1}e^{-r/(na_{\kappa})}L_{n-l-1}^{(2l+1)}\bigl(2r/(na_{\kappa})\bigr)\qquad(c_{nl}\ne0),$$
with $L_{j}^{(a)}$ the Laguerre polynomial of integer order, so the radial
density of the level $(n,l)$ is a polynomial times $r^{2l+2}$ times a
decreasing exponential, and its normalisation constant is fixed by
$\int_{0}^{\infty}|u_{nl}|^{2}dr=\|\psi_{nl\bar m}\|^{2}$;

(d) *Reading and scope.* The statements are conditional on P1, P2, P4, P5, the
declared Coulomb model and the cited mathematics. The radial density is the
reading of the model's position observable on radial sets; it is not a
trajectory, an orbit or a definite distance, and the model assigns positive
probability to every open ball around the origin and to arbitrarily large
radii. No measured radius, no measured density and no identification of
$a_{\kappa}$ with a laboratory length is asserted; numerical comparison
requires the measured constants as qualified empirical inputs and is deferred.

## Facts & Assumptions

**Given:** The declared one-centre Coulomb model with $\hbar,m,\kappa>0$, $a_{\kappa}=\hbar^{2}/(m\kappa)$, $\gamma=2m\kappa/\hbar^{2}$ and bound vectors $\psi_{nl\bar m}$, $\Psi_{nl\bar m}$; the polar unitary and spherical harmonics of the angular-radial theory; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Bound vectors as reduced solutions.** For every $n\ge1$, $0\le l\le n-1$, $-l\le\bar m\le l$ one has $\psi_{nl\bar m}(x)=u_{nl}(r)Y_{l\bar m}(\Omega)/r$ with $u_{nl}$ the regular solution of the radial equation at $k=\gamma/(2n)$, the functions $\psi_{nl\bar m}$ lie in $D(H_{\kappa})$ with $H_{\kappa}\psi_{nl\bar m}=E_{n}\psi_{nl\bar m}$, and the normalised family $(\Psi_{nl\bar m})$ is orthonormal ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] clauses (a), (b), [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a), (b)). Every unit bound eigenvector at $E_n$ has a finite expansion in the orthonormal vectors $\Psi_{nl\bar m}$ with $0\le l\le n-1$, $-l\le\bar m\le l$, with squared coefficient moduli summing to one (clause (b) of the latter theorem).

[F2] **Regular solutions.** The regular solution has the closed form $u_{\mathrm{reg}}(r)=c\,r^{l+1}e^{-kr}L_{j}^{(2l+1)}(2kr)$ with $j=\gamma/(2k)-l-1\in\mathbb N_{0}$ and $c\ne0$, where $L_{j}^{(a)}(x)=\sum_{i=0}^{j}(-1)^{i}\binom{j+a}{j-i}x^{i}/i!$ is the $j$-th Laguerre polynomial of order $a$; it is $C^{\infty}$ on $(0,\infty)$ and square integrable in this terminating case ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] clauses (c), (d)); the nonterminating regular solution is not square integrable by [[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]] clause (a).

[F3] **Ground-state data and dimensionless ball bound.** Write $a_{0}:=2/\gamma$. The normalized ground eigenvector supplied by [[thm-nrqm-coulomb-ground-radial-probability-and-units]] has a representative $\phi_{100}(x)=(\gamma^{3}/8\pi)^{1/2}e^{-r/a_{0}}$, lies in $D(C_{\gamma})$, and satisfies $C_{\gamma}\phi_{100}=-\frac{\gamma^{2}}{4}\phi_{100}$. Its radial density $p(r)=\frac{\gamma^{3}}{2}r^{2}e^{-2r/a_{0}}=4r^{2}a_{0}^{-3}e^{-2r/a_{0}}$ is a probability density with mean $3a_{0}/2$ and unique mode $a_{0}$; its spatial density is strictly decreasing in $r$ and maximal at the origin. With $t:=2\varepsilon/a_{0}$, the ball probability is exactly $1-e^{-t}(1+t+t^{2}/2)$, and the proof of clause (d) of the cited item gives $\left|\int_{|x|<\varepsilon}|\phi_{100}|^{2}dx-\frac{t^{3}}6\right|\le t^{4}/8$. Also $a_{0}=\hbar^{2}/(m\kappa)=a_{\kappa}$ under $\gamma=2m\kappa/\hbar^{2}$ ([[thm-nrqm-coulomb-ground-radial-probability-and-units]] proof 3.2 and clauses (a)-(e), [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (b)).

[F4] **Polar disintegration.** For $\psi(x)=u(r)Y_{l\bar m}(\Omega)/r$ with $u$ square integrable and $Y_{l\bar m}$ normalised in $L^{2}(S^{2},\sigma)$, and for every Borel $B$, one has $\int_{B}|\psi(x)|^{2}dx=\int_{0}^{\infty}|u(r)|^{2}\bigl(\int_{S^{2}}\mathbf 1_{B}(r\Omega)|Y_{l\bar m}(\Omega)|^{2}d\sigma(\Omega)\bigr)dr$; this is the polar-coordinates formula for the Lebesgue integral with the surface measure $\sigma$ and Tonelli's theorem, together with $\int_{S^{2}}|Y_{l\bar m}|^{2}d\sigma=1$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-polar-surface-measure-on-the-unit-sphere]], [[thm-nrqm-orbital-and-spin-sphere-onb]]). In particular $\int_{S^2}Y_{l\bar m}\overline{Y_{l'\bar m'}}\,d\sigma=\delta_{ll'}\delta_{\bar m\bar m'}$, and $\|\psi_{nl\bar m}\|_2=\|u_{nl}\|_2$.

[F5] **Position law.** In a unit vector $\psi$ the model's Born position law is $\mu^{G}_{\psi}(B)=\int_{B}|\psi|^{2}dx$ for every Borel $B$ ([[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b), [[def-nrqm-observables-framework-observable-and-outcome-law]]).

## Proof

**Proof technique:** direct; insert the reduced-solution representation of the bound vectors into the spin-zero position law, disintegrate the resulting integral in polar coordinates, and transport the cited ground-state computation into the model's parametrisation.

**Given:** The data of the statement and [F1]-[F5].

1.1 [General radial law] Fix a label. By [F1], $\psi_{nl\bar m}(x)=u_{nl}(r)Y_{l\bar m}(\Omega)/r$ and $u_{nl}$ is a regular solution of [F2]; the unit preparation is $[\Psi_{nl\bar m}]$ with $\Psi_{nl\bar m}=\psi_{nl\bar m}/\|\psi_{nl\bar m}\|$. By [F5] its position law is $\mu^{G}_{\Psi_{nl\bar m}}(B)=\int_{B}|\Psi_{nl\bar m}|^{2}dx$, and since the normalisation constant is a scalar, [F4] applied to $\Psi_{nl\bar m}$ gives the displayed formula for every Borel $B$. For a radial set $B=\{a<|x|<b\}$ the indicator $\mathbf 1_{B}(r\Omega)$ does not depend on $\Omega$ and equals $\mathbf 1_{(a,b)}(r)$, so the inner integral is $\int_{S^{2}}|Y_{l\bar m}|^{2}d\sigma=1$ by [F4] and $\mu^{G}_{\Psi_{nl\bar m}}(B)=\|u_{nl}\|_{2}^{-2}\int_{a}^{b}|u_{nl}(r)|^{2}dr$; the density $p_{nl}$ is nonnegative and integrates to one over $(0,\infty)$ by choosing $a=0$, $b=\infty$. This proves (a). [given, F1, F2, F4, F5, algebra]

2.1 [General bound eigenvectors] By [F1], every unit bound eigenvector $\chi$ lies at one $E_n$ and has the stated finite expansion with $\sum_{l,\bar m}|b_{l\bar m}|^2=1$. By [F4], $\Psi_{nl\bar m}(r\Omega)=\widehat u_{nl}(r)Y_{l\bar m}(\Omega)/r$. Inserting the finite sum into [F5] and applying polar coordinates gives the displayed law: the Jacobian $r^2$ cancels $1/r^2$. For a radial event the angular integral of the squared sum has no cross terms, since the spherical harmonics are orthonormal by [F4]; thus its radial density is $\sum_{l,\bar m}|b_{l\bar m}|^2|\widehat u_{nl}|^2=\sum_{l,\bar m}|b_{l\bar m}|^2p_{nl}$. This density integrates to one by step 1.1. General position events retain cross terms, so the separated product formula is asserted only for the labelled vectors. This completes the general bound-eigenvector part of (a). [step 1.1, F1, F4, F5, algebra]

2.2 [Ground state] Take $n=1$, $l=\bar m=0$. By [F2] with $j=0$ one has $L_{0}^{(1)}=1$ and the regular reduced solution is $u_{10}(r)=c_{10}r e^{-kr}$, where $k=\gamma/2=1/a_{\kappa}$ and $c_{10}\ne0$. With $Y_{00}=1/\sqrt{4\pi}$ from [F4], the corresponding representative is $\psi_{100}(x)=c_{10}e^{-r/a_{\kappa}}/\sqrt{4\pi}$. Polar integration gives $\|\psi_{100}\|=\|u_{10}\|_{2}=|c_{10}|a_{\kappa}^{3/2}/2$, so the normalized representative is $\Psi_{100}(x)=\zeta_{100}(\pi a_{\kappa}^{3})^{-1/2}e^{-r/a_{\kappa}}$ with $\zeta_{100}:=c_{10}/|c_{10}|$ and $|\zeta_{100}|=1$. It follows that $p_{10}(r)=|u_{10}(r)|^{2}/\|u_{10}\|_{2}^{2}=4r^{2}a_{\kappa}^{-3}e^{-2r/a_{\kappa}}$ and $|\Psi_{100}|^{2}=|\phi_{100}|^{2}$ for the normalized ground representative $\phi_{100}$ of [F3]. Thus [F3] supplies the mean, unique mode, strict decrease of the spatial density and exact ball probability. Put $t:=2\varepsilon/a_{\kappa}$; [F3] gives $$\left|\mu^{G}_{\Psi_{100}}(\{|x|<\varepsilon\})-\frac16\Bigl(\frac{2\varepsilon}{a_{\kappa}}\Bigr)^3\right|\le\frac{t^4}{8}=2\Bigl(\frac{\varepsilon}{a_{\kappa}}\Bigr)^4,$$ which proves the dimensionless remainder in (b). Positivity for every $\varepsilon>0$ and convergence to zero as $\varepsilon\downarrow0$ follow because the exact probability formula in [F3] is strictly positive for $t>0$ and tends to $0$ as $t\downarrow0$. This proves (b). [step 1.1, F2, F3, F4, algebra]

2.3 [Polynomial-exponential form] For a general label, [F2] with $j=n-l-1$ and $k=\gamma/(2n)=1/(na_{\kappa})$ gives $u_{nl}(r)=c_{nl}r^{l+1}e^{-r/(na_{\kappa})}L_{n-l-1}^{(2l+1)}(2r/(na_{\kappa}))$ with $c_{nl}\ne0$; the normalisation $\int_{0}^{\infty}|u_{nl}|^{2}dr=\|\psi_{nl\bar m}\|^{2}$ is the case $a=0$, $b=\infty$ of step 1.1. This is (c). [step 1.1, F1, F2]

3.1 [Assembly and scope] Steps 1.1 and 2.1 give (a), step 2.2 gives (b) and step 2.3 gives (c); only the declared model, P1, P2, P4, P5 and the cited mathematics were used, so the reading is conditional as recorded in (d), no orbit, trajectory, measured radius or empirical identification is asserted, and each labelled radial density is positive except at finitely many roots of its nonzero polynomial factor in step 2.3. Its integral on every nonempty radial interval is therefore positive; hence every ball around the origin and every tail $r>R$ ($R>0$) has positive probability. The same holds for the radial mixtures in step 2.1, since some coefficient has positive squared modulus. [step 1.1, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The radial density is not a radial observable.** The quantity $p_{nl}$ is the disintegration of the position law on radial Borel sets, a reading of the declared position observable; the model does not assign the radius as an independent sharp observable, and no commutation or measurement claim about a radius operator is made.
- **Scales.** The two length scales $a_{\kappa}$ and the energy scale $\hbar^{2}/(2ma_{\kappa}^{2})$ are model data fixed by $\hbar,m,\kappa$; the identification of $a_{\kappa}$ with a physical Bohr radius of a hydrogen atom is the tested identification of [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (e) and carries its uncertainty.
