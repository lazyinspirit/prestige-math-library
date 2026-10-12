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
physical_scope: "The stability predicates attached to the model vocabulary of the page: Lyapunov stability and asymptotic stability of an equilibrium state with their exact quantifiers over maximal solutions, orbital stability of a compact invariant set, linear stability of an equilibrium through bounded solutions of the variational equation, linear stability of a periodic orbit through bounded iterates of the derivative of a return map, and hyperbolicity of an equilibrium of the model's field and of a fixed point of a C1 map (spectra off the imaginary axis or the unit circle). The item records the distinctions between these notions and asserts no stability, instability or attraction of any particular model."
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

This item attaches stability predicates to the model vocabulary of
[[def-cm16-flow-equilibria-and-invariant-sets]]. Throughout, an autonomous
stability model is fixed with state domain $S_0$, field $G$, local flow
$\Phi:\Omega\to S_0$ and maximal solutions $z(\,\cdot\,;z_0)$
([[def-cm16-flow-equilibria-and-invariant-sets]] clauses (i)-(ii)); all
predicates are applied to model objects and quantify over the model's maximal
solutions.

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
nonempty compact invariant set ([[def-cm16-flow-equilibria-and-invariant-sets]]
clause (iv)). Then $S$ is **orbitally stable** when for every open set
$U\supseteq S$ there is an open set $V$ with $S\subseteq V\subseteq U$ such
that every maximal solution $z$ with $z(0)\in V$ is defined for all $t\ge0$
and satisfies $z(t)\in U$ for all $t\ge0$. The distance used implicitly is
the orbital distance $d(z,S)$ of clause (iv) of the cited definition. Orbital
stability is a statement about the set, not about one motion, and it does not
assert attraction.

**(iii) Linear stability of an equilibrium.** Suppose $F$ is of class $C^1$
in the state, so that $\Phi$ is $C^1$ ([[def-cm16-flow-equilibria-and-invariant-sets]]
clause (ii)) and $DG(z_*)$ exists. The equilibrium $z_*$ is **linearly
stable** when for every $u\in\mathbb R^{6N}$ the maximal solution
$Y:\mathbb R\supseteq J\to M_{6N}(\mathbb R)$ of the variational equation
$$Y'(t)=DG(z_*)Y(t),\qquad Y(0)=u$$
([[def-variational-equation-along-an-ode-solution]], with the constant
solution $z(t)=z_*$ as the reference motion) is defined for all $t\ge0$ and
$\sup_{t\ge0}\lVert Y(t)\rVert_2<\infty$. Linear stability is a statement
about the linear variational equation; it is neither necessary nor sufficient
for Lyapunov stability in general, and no implication between the two is
asserted here. If the variational equation has a solution with
$\lVert Y(t)\rVert_2$ unbounded as $t\to\infty$, the equilibrium is **linearly
unstable**.

**(iv) Hyperbolicity of an equilibrium.** Let $z_*$ be an equilibrium state
of an autonomous model whose force map is $C^1$ in the state, and let
$DG(z_*)$ be the derivative of the associated field at $z_*$. Then $z_*$ is
**hyperbolic** when no complex eigenvalue of $DG(z_*)$
([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) has real part $0$;
the eigenvalues are those of the matrix of $DG(z_*)$ in the state chart. The
harmonic oscillator equilibrium of a one-dimensional model with a positive
stiffness has the purely imaginary eigenvalues $\pm i\omega$ and is therefore
not hyperbolic; the saddle of a repulsive linear model has the real
eigenvalues $\pm\mu$, $\mu>0$, and is hyperbolic.

**(v) Linear stability and hyperbolicity of a map.** Let $X\subseteq\mathbb R^m$
be open and let $\Psi:X\to X$ be of class $C^1$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). A **fixed point** of $\Psi$
is a point $a\in X$ with $\Psi(a)=a$. The fixed point is **linearly stable**
when $\sup_{n\ge0}\lVert D\Psi(a)^nu\rVert_2<\infty$ for every
$u\in\mathbb R^m$, and **hyperbolic** when no complex eigenvalue of
$D\Psi(a)$ has modulus $1$. They concern the derivative of the map, not
the nonlinear map.

**(vi) Distinctions.** (a) The five predicates of clauses (i)-(v) are
distinct: a Lyapunov stable equilibrium need not attract; a linearly stable
equilibrium need not be Lyapunov stable and conversely; orbital stability of a
set neither implies nor is implied by stability of any one of its points; a
hyperbolic equilibrium is never linearly stable in the sense of clause (iii)
because the dichotomy of
[[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]] produces an
exponentially growing solution, but hyperbolicity is not required for
instability. (b) The eigenvalues of $DG(z_*)$ are chart-dependent: they are
unchanged by a linear change of state coordinates with fixed scale factors,
but not by a general chart transition
([[def-cm16-flow-equilibria-and-invariant-sets]] clause (vi)(b)). (c) For the
mechanical chart data $(M,U)$ of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]], at a mechanical
equilibrium $(q_0,0)$ the derivative of the field is
$DG(q_0,0)(\delta q,\delta v)=(\delta v,-M(q_0)^{-1}D^2U(q_0)\delta q)$; the
stability consequences of that computation are proved later on the page.

## Remarks

- **Where the map predicates are used.** Clauses (iv) and (v) are stated for
  the model's equilibria and for $C^1$ self-maps of open subsets of a
  Euclidean state chart; their application to the stroboscopic and return maps
  of the page is through the definitions of those maps, and the predicates
  concern the derivative, not the nonlinear map.

