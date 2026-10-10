---
id: def-em-electric-moments
kind: definition
domain: physics
dependency_level: 16
title: "Total charge, dipole moment, Cartesian moments and traceless quadrupole of a static charge distribution"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Source moments (total charge, dipole moment, Cartesian moments, traceless quadrupole) of a prescribed static charge distribution read at fixed time in one named inertial frame: an absolutely continuous compactly supported $L^1$ density, a locally integrable density with a finite absolute moment of the stated order, or a finite system of stationary point charges. These are kinematic source characteristics: no field, force, dynamics, self-energy, stability or empirical content is asserted, and the static regime is an adopted idealisation. In the noncompact locally integrable branch a finite weighted absolute moment may have any real exponent $L\\ge0$ and supplies every integer Cartesian degree $\\le L$ by the local unit-ball and outer weighted estimate; $L^1$ is a conclusion, not an added hypothesis. Finite moment-sum algebra is choice-free."
deps: [def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-em-electrostatic-regime, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, def-measure-null-set-and-almost-everywhere, def-metric-ball, def-euclidean-inner-product, def-finite-sum, lem-finite-sum-laws, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-electrostatic-regime: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.2 printed pp. 149-151 (Eq. (3.98) p. 149, the dipole moment as the integral of r' rho; Eq. (3.100), the dipole moment of a collection of point charges; Eq. (3.101), p = qd for the physical dipole). Read in the stamped scanned full text, OCR cross-checked."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.3 printed pp. 20-22 (Q = integral rho, p = integral r' rho, and the symmetric traceless quadrupole Q_ij = integral rho (3 r'_i r'_j - delta_ij r'^2)). Read in the stamped full text."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Sections 40-41 printed pp. 95-100 (dipole moment d = sum e_a r_a, Eq. (40.3) p. 95, and quadrupole moment D_ab = sum e (3 x_a x_b - r^2 delta_ab), Eq. (41.3) p. 98; Gaussian units re-expressed in SI). Read in the stamped full text."
verification:
  precheck: pass
---

## Definition

For the Lebesgue branches (a) and (b) assume Countable Choice ($\mathrm{AC}_\omega$), inherited from the exact measure interface ([[def-countable-choice]]); the finite sums in branch (c) are defined and computed without Choice. Let the laboratory region, its chart, its spatial Euclidean structure and its units be those of [[def-em-lab-geometry]] and [[def-em-si-conventions]], and let $\delta_{ij}$ be the Kronecker symbol in the $\delta$-orthonormal basis $(e_1,e_2,e_3)$ of the frame, with $|y|$ the Euclidean norm of [[def-euclidean-inner-product]]. This definition assigns **source moments** to a static charge distribution in the fixed-time reading of [[def-em-electrostatic-regime]] (d) and (e). Three branches are declared.

(a) [Absolutely continuous branch] Let $a>0$ and let $\rho\in L^1(\mathbb R^3)$ be real ([[def-l-one-of-a-measure]]) and vanish $\lambda_3$-almost everywhere outside the closed ball $\overline B_a(0)=\{y:|y|\le a\}$ ([[def-metric-ball]], [[def-measure-null-set-and-almost-everywhere]]). The **total charge** $Q$, the **dipole moment** $p$, the **degree-$l$ Cartesian moments** $M_{i_1\dots i_l}$ and the **traceless quadrupole** $Q_{ij}$ are

$$Q:=\int_{\mathbb R^3}\rho\,d\lambda_3,\qquad p_i:=\int_{\mathbb R^3}y_i\,\rho(y)\,d\lambda_3(y),\qquad M_{i_1\dots i_l}:=\int_{\mathbb R^3}y_{i_1}\cdots y_{i_l}\,\rho(y)\,d\lambda_3(y)\ (l\ge1),$$

$$M^{(0)}:=Q,\qquad M_i:=p_i,\qquad Q_{ij}:=\int_{\mathbb R^3}\bigl(3y_iy_j-|y|^2\delta_{ij}\bigr)\rho(y)\,d\lambda_3(y),$$

with $l\ge1$ and indices in $\{1,2,3\}$; units are C for $Q$, C m for $p$, C m$^l$ for the degree-$l$ Cartesian moment and C m$^2$ for $Q_{ij}$, and all integrals are in the sense of [[def-integral-over-a-measurable-set]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]. Each integral is absolutely convergent: since $\rho=0$ $\lambda_3$-a.e. off $\overline B_a(0)$, and the maps $y\mapsto y_{i_1}\cdots y_{i_l}$ and $y\mapsto 3y_iy_j-|y|^2\delta_{ij}$ are bounded $\lambda_3$-a.e. on that ball by $a^l$ and by $4a^2$ respectively, the integrands are dominated $\lambda_3$-a.e. by $a^l|\rho|$ and $4a^2|\rho|$, which lie in $L^1$ ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). The traceless quadrupole is traceless,

$$\sum_{i=1}^3Q_{ii}=0,$$

because $\sum_{i=1}^3(3y_i^2-|y|^2)=0$ pointwise, and summing the three integrable functions $3y_i^2\rho-|y|^2\rho$ and applying finite linearity of the integral on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]) evaluates the sum as the integral of the pointwise-zero function; replacing $\rho$ by an equal $\lambda_3$-a.e. density changes no moment ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

(b) [General locally integrable branch] If instead $\rho\in L^1_{\mathrm{loc}}(\mathbb R^3)$ is real and $\int_{\mathbb R^3}|y|^l|\rho(y)|\,d\lambda_3(y)<\infty$ for a given integer $l\ge0$, then the degree-$l$ Cartesian moments of the same formula are absolutely convergent and defined; if the absolute weighted moment $\int_{\mathbb R^3}|y|^L|\rho(y)|\,d\lambda_3(y)$ is finite for some real $L\ge0$, then every integer Cartesian degree $0\le l\le L$ is defined, and in particular $Q=\int\rho\,d\lambda_3$ is absolutely convergent, so that $\rho\in L^1(\mathbb R^3)$ is a conclusion of this branch and not an added hypothesis. Here $\rho$ is restricted to the closed unit ball, where it is integrable by local integrability, and outside it $|y|^l\le|y|^L$; splitting the nonnegative integral over these two measurable sets and applying monotonicity and additivity of the integral gives $\int|y|^l|\rho|\le\int_{\overline B_1(0)}|\rho|+\int_{\{|y|>1\}}|y|^L|\rho|<\infty$ ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-metric-ball]]). The convention $|y|^0=1$ includes the origin, no compact support and no $L^1$-membership is assumed in this branch, and Cartesian monomials of degree $l$ have modulus at most $|y|^l$, so all lower moments, including $Q$, exist together with the degree-$l$ moment.

(c) [Finite system of stationary point charges] Let $N\ge0$, let $x_1,\dots,x_N\in\mathbb R^3$ and let $q_1,\dots,q_N\in\mathbb R$ be charge parameters ([[def-em-sources]] (a)), read as the stationary point charges $q_k\delta_{x_k}$ in the fixed-time reading of [[def-em-electrostatic-regime]] (e); for $N=0$ the lists are empty and every sum below is the empty sum $0$. Define

$$Q:=\sum_{k=1}^Nq_k,\qquad p:=\sum_{k=1}^Nq_kx_k,\qquad M_{i_1\dots i_l}:=\sum_{k=1}^Nq_k\,x_{k,i_1}\cdots x_{k,i_l}\ (l\ge1),\qquad M^{(0)}:=Q,$$

$$Q_{ij}:=\sum_{k=1}^Nq_k\bigl(3x_{k,i}x_{k,j}-|x_k|^2\delta_{ij}\bigr),$$

finite sums in the sense of [[def-finite-sum]] ([[lem-finite-sum-laws]]); again

$$\sum_{i=1}^3Q_{ii}=0,$$

by finite distributivity. The points need not be distinct; charges at a common point add in every sum.

(d) [Reference point and scope] Every moment of (a)-(c) is computed about the chart origin of [[def-em-lab-geometry]]; this origin is part of the definition. These are source moments of a prescribed static distribution, not momenta, rest masses, intrinsic spins, self-energies or dynamical quantities, and no field, force, equation of motion, equilibrium or empirical claim is made here; the static regime in which the source is read is the adopted idealisation of [[def-em-electrostatic-regime]] (f). Every Cartesian degree $l$ in this definition is a nonnegative integer (the number of Cartesian indices); only the absolute weighted exponent $L$ in (b) may be any nonnegative real number.
