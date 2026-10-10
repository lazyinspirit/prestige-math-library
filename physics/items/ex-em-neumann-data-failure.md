---
id: ex-em-neumann-data-failure
kind: example
title: "Incompatible total flux forbids a solution"
status: draft
origin: session
dependency_level: 19
domain: physics
deps: [cor-volume-of-the-unit-n-ball, def-classical-normal-derivative, def-countable-choice, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-euclidean-inner-product, def-fractional-sobolev-space-on-a-compact-c-one-boundary, def-laplacian-of-a-c2-function, def-metric-ball, lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains, lem-em-weak-neumann-and-transmission-existence, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, lem-neumann-compatibility-from-the-divergence-theorem, pthm-em-electrostatic-bvp-existence, pthm-em-electrostatic-bvp-uniqueness, def-axiom-of-choice, thm-lp-trace-operator-on-a-bounded-c-one-domain, cor-cauchy-schwarz-inequality-for-l-two, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi]
dependency_roles:
  pthm-em-electrostatic-bvp-uniqueness: physical-result
  lem-neumann-compatibility-from-the-divergence-theorem: mathematical-premise
  lem-em-weak-neumann-and-transmission-existence: mathematical-premise
  lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-classical-normal-derivative: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-fractional-sobolev-space-on-a-compact-c-one-boundary: mathematical-premise
  thm-real-gamma-functional-equation: mathematical-premise
  cor-real-gamma-one-half-is-root-pi: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-countable-choice: mathematical-premise
  pthm-em-electrostatic-bvp-existence: physical-result
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.5 Theorem 2.24 and the Green identities printed p. 32 (the Neumann flux compatibility and uniqueness); §1.12 Theorem 1.46 printed pp. 17-18 (divergence formula)."
    - title: David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.2 printed pp. 33-35: the Dirichlet/Neumann boundary value problem and the uniqueness theorem (the constant Neumann freedom and the Green-identity uniqueness argument)."
    - title: David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Sections 3.1.5-3.1.6 printed pp. 116-121: uniqueness theorems for Laplace's equation (and Problem 3.4 on mixed boundary data), which presuppose the flux budget that the displayed datum violates."
physical_scope: "An incompatibility example for the ideal electrostatic Neumann problem in a named inertial frame: on the unit ball with zero volume source, the unit outward normal-derivative datum violates the necessary boundary flux budget (surface area 4 pi), so no classical or weak solution exists. The item is an impossibility statement about the ideal boundary value problem and asserts no measurement, no apparatus, no material property and no conclusion beyond the displayed data."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice for the cited Sobolev trace/weak-solvability interfaces and Countable Choice for the surface-measure interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $B:=B_1(0)=\{x\in\mathbb R^3:|x|<1\}$ be the open unit ball, a bounded $C^\infty$ (in particular $C^1$) domain with $\partial B=S^2$ and outward normal $\nu(x)=x$ ([[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]], [[def-metric-ball]], [[def-euclidean-inner-product]]), and consider the pure electrostatic Neumann problem on $B$ (regime [[def-em-electrostatic-regime]], fields [[def-em-fields]], constants [[def-em-si-conventions]]) with **zero volume source and unit outward normal derivative**:
$$-\Delta\varphi=0\ \text{ in }B,\qquad \partial_\nu\varphi=1\ \text{ on }\partial B .$$
All displayed coordinates and potentials are numerical SI readings: the ball has radius $1\,\mathrm m$, $\varphi$ is read in volts, and $\partial_\nu\varphi=1$ denotes $1\,\mathrm{V\,m^{-1}}$. Thus the corresponding outward electric field is $E\cdot\nu=-1\,\mathrm{V\,m^{-1}}$, and $4\pi$ in the derivative-flux integral carries $\mathrm{V\,m}$. The companion datum $f=1$ denotes $1\,\mathrm{V\,m^{-2}}$ in $-\Delta\varphi=f$; it is not a claim of unit physical charge density.

Then:
(a) [No classical solution] there is no real $\varphi\in C^2(\overline B)$ satisfying these equations: if such a $\varphi$ existed, [[lem-neumann-compatibility-from-the-divergence-theorem]] with $f=-\Delta\varphi=0$ and $g=\partial_\nu\varphi\equiv1$ would give
$$0=\int_B f\,d\lambda_3=-\int_{\partial B}g\,dS=-|S^2|=-4\pi,$$
because the surface area of the unit sphere is $|S^2|=4\pi$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]]); the contradiction is the failure of the necessary flux compatibility of [[pthm-em-electrostatic-bvp-uniqueness]](b).
(b) [No weak solution] more generally there is no $u\in H^1(B)$ with $\int_B\nabla v\cdot\nabla u\,d\lambda_3=\langle g,Tv\rangle$ for all $v\in H^1(B)$ with $g\equiv1$ read as an element of the dual trace space ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]): testing $v\equiv1$ would force $\ell(1)=\int_{\partial B}1\,dS=4\pi=0$, and the weak Neumann existence lemma states existence exactly when $\ell(1)=0$ ([[lem-em-weak-neumann-and-transmission-existence]]); equivalently the unit ball's boundary flux budget fails already in the weak formulation.
(c) [Physics reading and scope] in the pure electrostatic regime the datum $\partial_\nu\varphi\equiv1$ on the whole boundary of the unit ball is inadmissible: no electrostatic potential with zero volume source satisfies it, and the obstruction is the strictly positive total boundary flux $4\pi$, not a smoothness or compactness artefact. Every solvable zero-source Neumann problem must satisfy $\int_{\partial B}g\,dS=0$ for an integrable derivative datum $g$; this necessary flux budget alone does not state the regularity hypotheses of an existence theorem (sufficiency at the smooth level is the separate content of [[pthm-em-electrostatic-bvp-existence]](b) under its hypotheses). The item is a mathematical impossibility statement about the ideal boundary value problem: it reports no measurement, no apparatus and no material property, and the companion failure with unit source and zero boundary field is the same flux obstruction, obtained by evaluating that lemma with $f\equiv1$ and $g\equiv0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice as declared in the statement; the open unit ball $B=B_1(0)$, its boundary $S^2=\partial B$, the outward normal $\nu(x)=x$ on $S^2$, the pure electrostatic regime with zero volume source, and the displayed boundary value problem $-\Delta\varphi=0$ in $B$, $\partial_\nu\varphi=1$ on $\partial B$.

[F1] Classical Neumann compatibility: for a bounded $C^1$ domain $\Omega$, a real $u\in C^2(\overline\Omega)$, $f:=-\Delta u$ and $g:=\partial_\nu u$, one has $\int_\Omega f\,d\lambda_3=-\int_{\partial\Omega}g\,dS$ ([[lem-neumann-compatibility-from-the-divergence-theorem]], [[def-laplacian-of-a-c2-function]], [[def-classical-normal-derivative]]).

[F2] The unit ball is a bounded $C^\infty$ domain (in particular a bounded $C^1$ domain) with $\partial B=S^2$, outward normal $\nu(x)=x$ on $S^2$, a compact embedded $C^\infty$ hypersurface carrying its finite surface measure; moreover $|S^{n-1}|=n|B_1|$, and with $V_3(1)=\pi^{3/2}/\Gamma(5/2)$, $\Gamma(5/2)=\frac32\cdot\frac12\,\Gamma(1/2)=\frac{3\sqrt\pi}{4}$ and $\Gamma(1/2)=\sqrt\pi$, one computes $V_3(1)=4\pi/3$ and $|S^2|=3\cdot4\pi/3=4\pi$ ([[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]], [[cor-real-gamma-one-half-is-root-pi]], [[def-metric-ball]], [[def-euclidean-inner-product]]).

[F3] Boundary trace space: with the Axiom of Choice there is a unique bounded linear trace operator $T:W^{1,2}(B)\to L^2(S^2)$ with $Tu=u|_{S^2}$ for every $u\in C(\overline B)\cap W^{1,2}(B)$; the boundary fractional space $H^{1/2}(S^2)=W^{1/2,2}(S^2)$ is defined by the finite graph atlas and partition norm whose localised terms are Slobodeckij norms, each dominating the corresponding localised $L^2$ term, and the smooth graph densities are bounded on the compact supports of the partition, so there is a constant $C$ with $\|h\|_{L^2(S^2)}\le C\|h\|_{H^{1/2}(S^2)}$ for every $h\in H^{1/2}(S^2)$ ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]).

[F4] The weak Neumann solvability interface: for a bounded connected $C^1$ domain $\Omega\subset\mathbb R^3$, $\varepsilon$ measurable symmetric uniformly elliptic, $\rho\in L^2(\Omega)$, $g\in H^{-1/2}(\partial\Omega)$ and $\ell(v)=\int_\Omega\rho v\,d\lambda_3+\langle g,Tv\rangle$ on $H^1(\Omega)$, a weak Neumann solution $u\in H^1(\Omega)$ with $\int_\Omega\nabla v\cdot\varepsilon\nabla u\,d\lambda_3=\ell(v)$ for every $v\in H^1(\Omega)$ exists if and only if $\ell(1)=0$; in particular for $\varepsilon=I$, $\rho=0$ and $g\in H^{-1/2}(\partial\Omega)$ the solvability criterion is $\langle g,T1\rangle=0$ ([[lem-em-weak-neumann-and-transmission-existence]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).

[F5] Cauchy-Schwarz for $L^2$: $\int|fg|\,d\mu\le\|f\|_2\|g\|_2$ for $f,g\in\mathcal L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F6] The constant function $1\in C^\infty(\overline B)$ satisfies $T1=1$ in $L^2(S^2)$, the trace of the restriction, by the agreement of $T$ with restriction on $C(\overline B)\cap W^{1,2}(B)$ in [F3]; and $1\in L^2(S^2)$ with $\|1\|_{L^2(S^2)}=|S^2|^{1/2}=2\sqrt\pi$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [F2]).

[F7] Regime and reading: in the pure electrostatic regime with $J=0$, $B=0$ and volume density $\rho=0$, the compatibility identity of [[pthm-em-electrostatic-bvp-uniqueness]](b) is the necessary flux budget for the smooth Neumann problem, and the sufficiency statement in the smooth class is [[pthm-em-electrostatic-bvp-existence]](b) under its hypotheses; the constants, fields and units are those of the framework ([[def-em-electrostatic-regime]], [[def-em-fields]], [[def-em-si-conventions]], [[pthm-em-electrostatic-bvp-uniqueness]], [[pthm-em-electrostatic-bvp-existence]]).

## Verification

**Proof technique:** direct.

1.1 Geometry and area of the unit ball: $B$ is a bounded $C^\infty$ domain with $\partial B=S^2$ and outward normal $\nu(x)=x$; it is connected and nonempty. The area is $|S^2|=4\pi$: by $|S^{n-1}|=n|B_1|$ and $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$, the functional equation gives $\Gamma(5/2)=\frac32\Gamma(3/2)=\frac32\cdot\frac12\Gamma(1/2)=\frac{3\sqrt\pi}{4}$ with $\Gamma(1/2)=\sqrt\pi$, so $V_3(1)=\pi^{3/2}/(3\sqrt\pi/4)=4\pi/3$ and $|S^2|=3V_3(1)=4\pi$. [F2, F6]

2.1 Classical exclusion (a): suppose a real $\varphi\in C^2(\overline B)$ satisfies $-\Delta\varphi=0$ in $B$ and $\partial_\nu\varphi=1$ on $\partial B$; put $f:=-\Delta\varphi=0$ and $g:=\partial_\nu\varphi\equiv1$. By [F1] applied on the bounded $C^1$ domain $B$ with the outward normal $\nu$, $0=\int_B f\,d\lambda_3=-\int_{\partial B}g\,dS=-|S^2|=-4\pi$ by [step 1.1], a contradiction since $4\pi\ne0$; hence no such $\varphi$ exists. This is (a), and it exhibits the failure of the necessary compatibility of [[pthm-em-electrostatic-bvp-uniqueness]](b). [F1, F7, given, step 1.1]

2.2 The datum $g\equiv1$ as an element of the dual trace space: $1\in L^2(S^2)$ by [F6], so for $h\in H^{1/2}(S^2)$ the integral $\int_{S^2}h\,dS$ is absolutely convergent, and Cauchy-Schwarz together with the inclusion bound of [F3] gives $|\int_{S^2}h\,dS|\le|S^2|^{1/2}\|h\|_{L^2(S^2)}\le C|S^2|^{1/2}\|h\|_{H^{1/2}(S^2)}$; hence $g\equiv1$ defines a bounded linear functional $\langle g,\cdot\rangle$ on $H^{1/2}(S^2)$, i.e. an element of $H^{-1/2}(\partial B)$, with $\langle g,h\rangle=\int_{S^2}h\,dS$. [F3, F5, F6, step 1.1]

2.3 Companion failure with unit source and zero boundary field: for $f\equiv1$ on $B$ and $g\equiv0$ on $\partial B$, any hypothetical $\varphi\in C^2(\overline B)$ with $-\Delta\varphi=f$ and $\partial_\nu\varphi=g$ would satisfy, by [F1], $\int_B f\,d\lambda_3=|B_1|=V_3(1)=4\pi/3\ne0=-\int_{\partial B}0\,dS$, a contradiction; thus the same flux budget excludes the unit-source datum, and in the weak formulation the corresponding functional $\ell'(v)=\int_B v\,d\lambda_3$ has $\ell'(1)=4\pi/3\ne0$, excluding weak solutions by [F4] as well. [F1, F2, F4, step 1.1]

3.1 The functional $\ell(v):=\langle g,Tv\rangle=\int_{S^2}Tv\,dS$ on $H^1(B)$: it is well defined because $Tv\in L^2(S^2)$ by [F3] and $L^2(S^2)\subset L^1(S^2)$ with $\int_{S^2}|Tv|\,dS\le|S^2|^{1/2}\|Tv\|_{L^2(S^2)}$ by Cauchy-Schwarz and $|S^2|<\infty$ [F5, F6]; it is linear and bounded, $|\ell(v)|\le|S^2|^{1/2}\|Tv\|_{L^2(S^2)}\le C'\|v\|_{H^1(B)}$, by the trace bound [F3]. At the constant function $v\equiv1$ one has $\ell(1)=\int_{S^2}T1\,dS=\int_{S^2}1\,dS=|S^2|=4\pi\ne0$ by [F6] and [step 1.1]. [F3, F5, step 1.1, step 2.2]

4.1 Weak exclusion (b): with $\Omega=B$ (bounded, connected, $C^1$), $\varepsilon=I$ (symmetric, uniformly elliptic), $\rho=0\in L^2(B)$ and $g\equiv1\in H^{-1/2}(\partial B)$ from [step 2.2], the data functional of the weak Neumann problem is exactly $\ell$ of [step 3.1]; by the criterion [F4], a weak solution $u\in H^1(B)$ with $\int_B\nabla v\cdot\nabla u\,d\lambda_3=\ell(v)=\langle g,Tv\rangle$ for all $v\in H^1(B)$ exists if and only if $\ell(1)=0$, but $\ell(1)=4\pi\ne0$ by [step 3.1]; hence no such $u$ exists. The obstruction is already visible by testing $v\equiv1$: the left side vanishes and the right side is $4\pi$. This is (b). [F4, given, step 3.1]

5.1 Reading and scope (c): on the unit ball with zero volume source the unit outward normal-derivative datum is inadmissible in both the classical $C^2(\overline B)$ class and the weak $H^1(B)$ class; the obstruction is the strictly positive total boundary flux $|S^2|=4\pi$, not smoothness or compactness, and the necessary compatibility $\int_{\partial B}g\,dS=0$ for the zero-source problem is a flux budget whereas sufficiency in the smooth class is the separate content of [[pthm-em-electrostatic-bvp-existence]](b) under its hypotheses [F7]. No step uses the ball's symmetry beyond the area computation of [step 1.1]; no measurement, apparatus or material property is asserted, and the companion failure of [step 2.3] is the same flux obstruction evaluated at $f\equiv1$, $g\equiv0$. This is (c). [F7, given, step 2.1, step 4.1, step 2.3] ∎
