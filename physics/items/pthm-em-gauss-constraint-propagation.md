---
id: pthm-em-gauss-constraint-propagation
kind: physics-theorem
title: "Propagation of the Gauss constraints, persistent defects and the full-Maxwell corollary"
domain: physics
status: draft
origin: pipeline
dependency_level: 17
deps: [post-em-vacuum-maxwell,
       post-em-distributional-vacuum-maxwell,
       pthm-em-charge-continuity,
       def-em-weak-sources,
       def-em-fields,
       def-em-sources,
       def-em-si-conventions,
       def-em-lab-geometry,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-directional-and-partial-derivatives,
       thm-the-divergence-of-a-curl-vanishes,
       thm-clairaut-schwarz-mixed-partials,
       thm-algebra-of-derivatives,
       thm-distributional-differentiation-is-continuous-and-commutes,
       def-distribution,
       def-distributional-derivative,
       def-regular-distribution-from-a-locally-integrable-function,
       thm-locally-integrable-functions-embed-in-distributions,
       def-test-function-space-d-of-an-open-set,
       cor-mean-value-theorem,
       def-interval,
       thm-extreme-value-metric,
       prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
       thm-dominated-convergence,
       thm-borel-products-of-euclidean-spaces-are-euclidean-borel,
       thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets,
       thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
       lem-riemann-lebesgue-comparison-for-distribution-test-integrands,
       thm-ftc-first-part,
       lem-euclidean-balls-have-positive-finite-lebesgue-measure,
       lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound,
       thm-monotonicity-of-the-integral,
       prop-order-and-scalar-rules-for-the-nonnegative-integral,
       cor-continuous-functions-are-borel-measurable,
       def-integral-over-a-measurable-set,
       def-countable-choice]
dependency_roles:
  post-em-vacuum-maxwell: physical-assumption
  post-em-distributional-vacuum-maxwell: physical-assumption
  pthm-em-charge-continuity: physical-result
  def-em-weak-sources: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-interval: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The propagation statement for the Gauss defects of a vacuum Maxwell evolution system in the named inertial laboratory model: from the two evolution equations and independently assumed source continuity, the defects div B and div E - rho/eps0 are constant in time (pointwise in the smooth branch, distributionally in general), so zero initial constraints persist and nonzero defects persist; full-Maxwell solutions have zero defects, and adding zero defects to the evolution pair recovers all four equations. The statement is conditional on the stated equations and regularity, asserts no existence and no empirical fact, and confines Countable Choice to the continuous-representative localization interface."
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.1 printed pp. 321-323 (the divergence of Faraday's law vanishes by the divergence-of-curl identity) and Section 7.3.2-7.3.3 printed pp. 323-328 (continuity from the amended Ampere law, and the role of the two Gauss laws as constraints); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 1.2.1 printed p. 6 (the four Maxwell equations) and Section 4.2.1 printed p. 81 (charge continuity from the divergence of the amended Ampere law and Gauss law). The propagation deduction is supplied locally, rather than attributed to the static Ampere or Faraday discussions."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 30 printed pp. 73-75 (the field equations and their differential compatibility); read in the stamped full text."
proof_strategy: direct
---


## Statement

Let $U\cong I\times\Omega$ be the laboratory region of
[[def-em-lab-geometry]], with nonempty open time interval $I$
([[def-interval]]), positive constants of [[def-em-si-conventions]] and
$\varepsilon_0=(\mu_0c^2)^{-1}$. Define the **Gauss defects**

$$D_B:=\operatorname{div}B,\qquad D_E:=\operatorname{div}E-\rho/\varepsilon_0.$$

(a) [Smooth evolution branch] Let $E,B$ be jointly $C^2$ fields and $\rho,J$
$C^1$ source fields of [[def-em-fields]] and [[def-em-sources]]. Assume only
the two evolution equations

$$\partial_tB=-\operatorname{curl}E,\qquad\partial_tE=c^2\operatorname{curl}B-c^2\mu_0J,$$

and, separately, source continuity $\partial_t\rho+\operatorname{div}J=0$. No
Gauss constraint is assumed. Then $\partial_tD_B=\partial_tD_E=0$ pointwise.
For each fixed $x$, both defects are constant on $I$. Initial zero constraints
at any $t_0\in I$ persist at every time; a nonzero defect at a point persists
with the same value. Thus evolution and continuity cannot repair a nonzero
initial Gauss defect.

(b) [Distributional evolution branch] The same derivative conclusion holds for
arbitrary scalar and vector distributions $E,B,\rho,J$ on $U$ satisfying the
two evolution identities and, independently, continuity in
$\mathcal D'(U)$ ([[def-distribution]], [[def-distributional-derivative]]).
This includes the original locally integrable field and source branch
identified with regular distributions and the declared singular-source class
when its equations hold. Thus $\partial_tD_B=\partial_tD_E=0$
distributionally. If a defect has a continuous representative $h$ on $U$,
assume Countable Choice for the indicated Lebesgue integral and localization
interface ([[def-countable-choice]]); then $h(x,t)$ is independent of $t$. In
this continuous-representative case its zero or nonzero value at a time
persists. No restriction of an arbitrary distribution to a time slice is
assumed.

(c) [Full-Maxwell corollaries] Solutions with the regularity of (a) of
[[post-em-vacuum-maxwell]] satisfy the evolution and source-continuity
hypotheses by [[pthm-em-charge-continuity]](a), and their Gauss defects are
identically zero by the two Gauss equations. Its original locally integrable
weak branch has the same distributional conclusion. For admitted point and
stationary-sheet models under [[post-em-distributional-vacuum-maxwell]],
[[pthm-em-charge-continuity]](b) supplies compatibility and the four
identities again give zero defects. Conversely, in (a), or in (b) when both
defects have continuous representatives, evolution plus continuity and zero
Gauss defects at one time give all four Maxwell identities on $U$, pointwise
in (a) and distributionally in (b).

This theorem is conditional on the stated equations and regularity. It proves
no existence, matter dynamics, observation or empirical fact. The derivative
algebra is choice-free; Countable Choice is confined to the
continuous-representative localization and the inherited declared
singular-source formulation.

## Facts & Assumptions

**Given:** The laboratory region and its time interval, the fields and sources with the stated regularity, the two evolution equations and source continuity (or their distributional versions), and $\varepsilon_0=(\mu_0c^2)^{-1}$, $c^2\mu_0=\varepsilon_0^{-1}$.

[F1] The operators are the divergence, curl and partial derivatives of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-directional-and-partial-derivatives]], and are linear in the fields ([[thm-algebra-of-derivatives]]); the smooth fields and sources have the regularity of the Statement ([[def-em-fields]], [[def-em-sources]], [[def-em-lab-geometry]], [[def-em-si-conventions]]).

[F2] In the smooth branch of [[post-em-vacuum-maxwell]] the four equations hold with the Gauss constraints among them; the two evolution equations used here are $\partial_tB=-\operatorname{curl}E$ and $\partial_tE=c^2\operatorname{curl}B-c^2\mu_0J$ ([[post-em-vacuum-maxwell]]). The distributional adoption [[post-em-distributional-vacuum-maxwell]] asserts the four identities in $\mathcal D'(U)$ for the declared singular-source models ([[def-em-weak-sources]]).

[F3] The divergence of a curl vanishes for $C^2$ fields, and mixed partial derivatives commute ([[thm-the-divergence-of-a-curl-vanishes]], [[thm-clairaut-schwarz-mixed-partials]]); a differentiable function on an open interval with identically zero derivative is constant ([[cor-mean-value-theorem]], [[def-interval]]).

[F4] Distributional derivatives are linear, commute with one another, and are computed by the adjoint action on tests ([[def-distribution]], [[def-distributional-derivative]], [[def-test-function-space-d-of-an-open-set]], [[thm-distributional-differentiation-is-continuous-and-commutes]]); locally integrable fields and sources embed as regular distributions ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F5] The charge-continuity theorem supplies, in both branches, the compatibility identity used in (c) ([[pthm-em-charge-continuity]]). Its Proof 1.2 defines $\varepsilon_{ijk}$ for $i,j,k\in\{1,2,3\}$ as $+1$ for cyclic permutations, $-1$ for the other permutations and $0$ for repeated indices.

[F6] Continuous-representative machinery: a continuous function on a compact set is bounded ([[thm-extreme-value-metric]]), bounded sets have finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]), dominated convergence passes limits through integrals ([[thm-dominated-convergence]]), the Euclidean Borel structure and product measure identify multiple integrals with iterated ones ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]), Riemann and Lebesgue integrals of continuous compactly supported integrands agree ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]), the FTC gives primitives with the stated derivative ([[thm-ftc-first-part]]), balls have positive finite measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), bumps exist ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]), and monotonicity and the simple-integral value evaluate the pairing against a bump ([[thm-monotonicity-of-the-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-continuous-functions-are-borel-measurable]], [[def-integral-over-a-measurable-set]]).

## Proof

1.1 In the smooth branch, mixed partials commute and the divergence of a curl vanishes, so $\partial_tD_B=\operatorname{div}(\partial_tB)=-\operatorname{div}(\operatorname{curl}E)=0$ pointwise, and $\partial_tD_E=\operatorname{div}(\partial_tE)-\varepsilon_0^{-1}\partial_t\rho=c^2\operatorname{div}(\operatorname{curl}B)-c^2\mu_0\operatorname{div}J-\varepsilon_0^{-1}\partial_t\rho=-\varepsilon_0^{-1}(\operatorname{div}J+\partial_t\rho)=0$ pointwise, using $c^2\mu_0=\varepsilon_0^{-1}$ and the separately assumed continuity in the last equality. For each fixed $x$ the two functions $t\mapsto D_B(x,t)$ and $t\mapsto D_E(x,t)$ are differentiable on the interval $I$ with zero derivative, hence constant; therefore zero constraints at any $t_0$ persist at every time and a nonzero value at a point persists unchanged. [F1, F3, given, algebra]

1.2 In the distributional branch the identical componentwise cancellation holds: for every test, the distributional divergence of the distributional curl of $B$ pairs to $\sum_{i,j,k}\varepsilon_{ijk}\langle\partial_i\partial_jB_k,\psi\rangle$, with the three-index coefficients defined in [[pthm-em-charge-continuity]], Proof 1.2, which the commuting derivatives and the antisymmetry of $\varepsilon_{ijk}$ present as its own negative, hence zero; applying the two evolution identities and the independent continuity identity, all derivatives being distributional, gives $\partial_tD_B=\partial_tD_E=0$ in $\mathcal D'(U)$, without forming any product of distributions, since $D_B,D_E$ themselves are distributions only through their derivatives acting on tests. [F2, F4, F5, given, algebra]

1.3 For the continuous-representative statement assume $\partial_th=0$ in $\mathcal D'(U)$ for a continuous $h$, and let $\varphi\in C_c^\infty(\Omega)$. The function $F(t):=\int_\Omega h(x,t)\varphi(x)\,d\lambda_3(x)$ is continuous on $I$: on a compact time interval the integrands have the fixed compact spatial support of $\varphi$ and a uniform bound coming from continuity of $h$ on the compact set $\operatorname{supp}\varphi\times$ that interval, so dominated convergence applies. For $\eta\in C_c^\infty(I)$ with $\int_I\eta=0$, extend $\eta$ by zero and put $H(t):=\int_{-\infty}^t\eta(v)\,dv$; the FTC makes $H$ smooth with $H'=\eta$, and, choosing $a<b$ in $I$ with $\operatorname{supp}\eta\subset(a,b)$, $H$ vanishes outside $[a,b]$: it is zero before $a$ and equals the zero total integral after $b$. Thus $\operatorname{supp}H\subseteq[a,b]\subset I$, so $\Psi(x,t):=\varphi(x)H(t)$ is a compact smooth test with $\partial_t\Psi=\varphi\eta$; applying the derivative equation to this primitive test gives $0=\langle\partial_th,\Psi\rangle=-\langle h,\partial_t\Psi\rangle=-\int_IF(t)\eta(t)\,dt$, the multiple integral being identified with the iterated one by the Borel product structure and Fubini and its Riemann-Lebesgue value by the comparison lemma. Choosing a nonnegative compact bump $\beta$ of integral one and writing an arbitrary temporal test as $\eta=\eta_0+(\int_I\eta)\beta$ with $\int_I\eta_0=0$ gives $\int_I(F-C)\eta_0=0$ for all $\eta_0$ with zero integral and $C:=\int_IF\beta$; since also $\int_I(F-C)\beta=\int_IF\beta-C\int_I\beta=0$, every $\eta\in C_c^\infty(I)$ satisfies $\int_I(F-C)\eta=0$, and the sign-and-bump argument (a nonzero value of the continuous $F-C$ at a point persists with one sign on a subinterval of positive measure, and a nonnegative bump equal to one on a smaller subinterval has strictly nonzero pairing by monotonicity and the positive finite measure of that subinterval) then forces $F-C=0$, that is, $F=C$ constant on $I$. For complex-valued functions this sign-and-bump argument is applied separately to their real and imaginary parts with real tests; it also applies componentwise to the spatial difference below. Since $\varphi$ is arbitrary, $h(\cdot,t_1)-h(\cdot,t_2)$ is a continuous function on $\Omega$ whose pairing against every spatial test vanishes, so the same sign-and-bump argument in $\mathbb R^3$ gives $h(\cdot,t_1)=h(\cdot,t_2)$; hence $h$ is independent of $t$. [F4, F6, given, algebra]

2.1 In clause (c), a solution of the full postulate with the regularity of (a) satisfies the two evolution equations and, by the smooth branch of [[pthm-em-charge-continuity]], source continuity; its Gauss defects vanish identically by the two Gauss equations, and step 1.1 applies to its evolution and continuity hypotheses with the conclusion that the already vanishing defects persist. The original locally integrable weak branch has the four identities in $\mathcal D'$, hence zero defects and the statement of step 1.2. For the admitted point and stationary-sheet models, the separate adoption supplies the four identities and the distributional branch of [[pthm-em-charge-continuity]] supplies the compatibility identity, so the defects vanish and step 1.2 applies. Conversely, if in (a) or in the continuous-representative case of (b) the defects vanish at one time, then by constancy they vanish at all times, which is exactly the pair of Gauss equations; adding them to the two evolution equations and the independently assumed continuity yields all four Maxwell identities on $U$, pointwise in (a) and distributionally in (b). [F2, F5, step 1.1, step 1.2, given, algebra]

3.1 Steps 1.1-2.1 prove the smooth and distributional propagation statements, the persistence and nonzero-persistence readings for the smooth branch, the time independence of a continuous representative of a defect under Countable Choice, and the full-Maxwell corollaries and their converse; the nonzero-defect persistence is exactly the statement that evolution plus continuity cannot repair an initial Gauss defect, and no existence, matter dynamics or empirical claim enters the argument. [step 1.1, step 1.2, step 1.3, step 2.1, given] ∎

## Source notes



The constraint structure of the Maxwell system is the standard content of the cited treatments: the two evolution equations propagate the two Gauss constraints, and source continuity is required for the electric constraint. The textbooks motivate the statement; the deductions use the imported divergence-of-curl, mean-value, distributional-calculus, Fubini and integration interfaces, and the singular-source class enters only through the separate adoption.
