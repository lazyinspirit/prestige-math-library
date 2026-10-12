---
id: def-cm16-stability-and-hyperbolicity-concepts
kind: definition
title: "Stability vocabulary of the model: Lyapunov, asymptotic and orbital stability, linear stability of equilibria and periodic orbits, and hyperbolicity of equilibria and fixed points"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm16-flow-equilibria-and-invariant-sets,
       def-cm-equilibrium-and-lyapunov-stability,
       def-cm-local-flow-of-an-autonomous-system,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       def-metric-space,
       def-metric-ball,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-variational-equation-along-an-ode-solution,
       def-eigenvalue-eigenvector-eigenspace-and-spectrum,
       thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism,
       def-cm01-units]
dependency_roles:
  def-cm16-flow-equilibria-and-invariant-sets: formulation-prerequisite
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The stability predicates for two explicitly distinguished model classes used on the page: autonomous framework force models with state domain S0 in R^(6N), and mechanical chart models with state domain Omega x R^n and the C2 positive-definite kinetic metric and C2 potential of the mechanical-field definition. For either class the item defines Lyapunov and asymptotic stability, orbital stability, linear stability and hyperbolicity with their exact quantifiers and hypotheses; it also defines the corresponding linear stability and hyperbolicity predicates for C1 map branches at fixed points. The classes are not identified with one another, and no stability, instability or attraction of a particular model is asserted."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.2 on equilibrium types and Chapter 5 on small oscillations, whose informal stability wording is replaced here by the exact quantifiers"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), Chapter 5 pp. 60-103, perturbation theory and linearised stability"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3 on fixed points, stable and unstable sets and the warning that calling these sets manifolds needs a theorem"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

This item attaches stability predicates to two explicitly stated model
classes. **(a) Framework force models:** an autonomous model of
[[def-cm16-flow-equilibria-and-invariant-sets]] clauses (i)-(ii), with open
state domain $S_0\subseteq\mathbb R^{6N}$, associated field
$G:S_0\to\mathbb R^{6N}$ and its maximal-solution local flow
$\Phi:\Omega\to S_0$ ([[def-cm-local-flow-of-an-autonomous-system]]).
**(b) Mechanical chart models:** the data $(\Omega,M,U)$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]], where
$\Omega\subseteq\mathbb R^n$ is open, $M$ is a $C^2$ positive-definite
matrix field, and $U$ is $C^2$; here the state domain is
$S_0:=\Omega\times\mathbb R^n$, the state dimension is $m:=2n$, and the
associated mechanical field is $G:S_0\to\mathbb R^m$. It is $C^1$, hence
continuous and locally Lipschitz, and has the local flow and maximal solutions
of [[def-cm-local-flow-of-an-autonomous-system]]. For class (a) only the
standing continuous, state-locally-Lipschitz regularity is required for
clauses (i)-(ii); clauses (iii)-(iv) add $C^1$ regularity explicitly. In each
application the predicates concern the declared model objects and quantify
over its maximal solutions; the two model classes are not being identified.

**(i) Lyapunov and asymptotic stability.** Let $z_*\in S_0$ be an equilibrium
state. The state $z_*$ is **Lyapunov stable** when for every Euclidean ball
$B_\varepsilon(z_*)$ with $\overline{B_\varepsilon(z_*)}\subseteq S_0$
([[def-metric-ball]]) there is $\delta\in(0,\varepsilon]$ such that every
maximal solution $z$ with $\lVert z(0)-z_*\rVert_2<\delta$ is defined for all
$t\ge0$ and satisfies $\lVert z(t)-z_*\rVert_2<\varepsilon$ for all $t\ge0$.
It is **asymptotically stable** when it is Lyapunov stable and there is
$\delta_0>0$ such that every maximal solution with
$\lVert z(0)-z_*\rVert_2<\delta_0$ is defined for all $t\ge0$ and converges to
$z_*$ as $t\to\infty$. This is the definition of
[[def-cm-equilibrium-and-lyapunov-stability]] clauses 1-2, applied to the
autonomous field $G$ on $S_0$; it is recorded here to fix the exact
quantifier order and the requirement that the solutions are defined for all
$t\ge0$. A state that is not Lyapunov stable is **unstable**.

**(ii) Orbital stability of an invariant set.** Let $S\subseteq S_0$ be a
nonempty compact set invariant under the selected model's local flow $\Phi$;
that is, $(t,z)\in\Omega$ for every $z\in S$ and $t\in\mathbb R$, and
$\Phi_t(S)=S$ for every $t\in\mathbb R$. For the framework force-model
class this is clause (iv) of
[[def-cm16-flow-equilibria-and-invariant-sets]]. The Euclidean orbital
distance is $d(z,S):=\inf_{s\in S}\lVert z-s\rVert_2$. Then $S$ is
**orbitally stable** when for every open set
$U\supseteq S$ there is an open set $V$ with $S\subseteq V\subseteq U$ such
that every maximal solution $z$ with $z(0)\in V$ is defined for all $t\ge0$
and satisfies $z(t)\in U$ for all $t\ge0$. Orbital stability is a statement
about the set, not about one motion, and it does not assert attraction.

**(iii) Linear stability of an equilibrium.** Suppose the field $G$ of the
chosen model is of class $C^1$ on its state domain $S_0$, so that its local
flow is $C^1$ and $DG(z_*)$ exists. Write $m:=\dim S_0$. For each initial
deviation $u\in\mathbb R^m$, let $\eta_u:[0,\infty)\to\mathbb R^m$ be the unique
solution of the constant-coefficient variational equation
$$\eta_u'(t)=DG(z_*)\eta_u(t),\qquad \eta_u(0)=u$$
([[def-variational-equation-along-an-ode-solution]], with the constant
solution $z(t)=z_*$ as the reference motion). The equilibrium $z_*$ is
**linearly stable** when
$\sup_{t\ge0}\lVert\eta_u(t)\rVert_2<\infty$ for every $u$; it is
**linearly unstable** if this norm is unbounded as $t\to\infty$ for some
$u$. This is a statement about the linear variational equation and is distinct
from the nonlinear Lyapunov and asymptotic predicates in clause (i).

**(iv) Hyperbolicity of an equilibrium.** Let $z_*$ be an equilibrium state
of the chosen autonomous model whose associated field $G$ is $C^1$ on $S_0$,
and let $DG(z_*)$ be its derivative. Then $z_*$ is
**hyperbolic** when no complex eigenvalue of $DG(z_*)$
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) has real part $0$;
the eigenvalues are those of the matrix of $DG(z_*)$ in the state chart. The
harmonic oscillator equilibrium of a one-dimensional model with a positive
stiffness has the purely imaginary eigenvalues $\pm i\omega$ and is therefore
not hyperbolic; the saddle of a repulsive linear model has the real
eigenvalues $\pm\mu$, $\mu>0$, and is hyperbolic.

**(v) Linear stability and hyperbolicity of a map.** Let $X,Y\subseteq\mathbb R^m$
be open and let $\Psi:X\to Y$ be of class $C^1$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). A **fixed point** of this
local map is a point $a\in X$ with $\Psi(a)=a\in Y$. The fixed point is
**linearly stable** when $\sup_{n\ge0}\lVert D\Psi(a)^nu\rVert_2<\infty$ for
every $u\in\mathbb R^m$, and **hyperbolic** when no complex eigenvalue of
$D\Psi(a)$ has modulus $1$. These predicates require only the local map near
the fixed point; they concern its derivative, not its nonlinear iterates on
everywhere-defined state domains.

**(vi) Distinctions.** (a) The predicates in clauses (i)-(v) have different
definitions and are not interchangeable. In particular, Lyapunov stability
does not by definition include attraction, and orbital stability is a
property of a set rather than of one of its points. Hyperbolicity alone does
not imply linear instability: if all eigenvalues of $DG(z_*)$ have negative
real part, the stable estimate of
[[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]] makes every
solution of the variational equation decay and hence remain bounded. If a
hyperbolic equilibrium has an eigenvalue with positive real part, the same
dichotomy supplies an unbounded forward solution and the equilibrium is
linearly unstable. (b) At
an equilibrium the spectrum of $DG(z_*)$ is invariant under a $C^2$ chart
transition, by the similarity formula in
[[def-cm16-flow-equilibria-and-invariant-sets]] clause (vi)(b); norms and
finite-time growth bounds can depend on the chart. (c) For the
mechanical chart data $(M,U)$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]], at a mechanical
equilibrium $(q_0,0)$ the derivative of the field is
$DG(q_0,0)(\delta q,\delta v)=(\delta v,-M(q_0)^{-1}D^2U(q_0)\delta q)$; the
stability consequences of that computation are proved later on the page.

## Remarks

- **Where the map predicates are used.** Clause (v) applies to the model's
  $C^1$ stroboscopic branch and to the local return-map branch expressed in
  the section charts supplied by the return-map result. Each is a local map
  between open chart neighborhoods near its fixed point. The predicates
  concern the derivative there, not nonlinear behavior on an
  everywhere-defined state space.

