---
id: pthm-cm04-conservative-motion-and-energy
kind: physics-theorem
title: "Existence, uniqueness and conservation of energy for a one-dimensional conservative model: phase curves lie in energy level sets and the velocity is determined by the position and energy up to sign"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [def-cm04-one-dimensional-models-and-equilibria, def-cm04-phase-plane-and-energy-level-sets, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-units, def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, def-locally-lipschitz-in-the-state-variable, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets, thm-algebra-of-derivatives, thm-chain-rule, cor-zero-derivative-implies-constant, thm-of-square-roots, def-derivative, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm04-phase-plane-and-energy-level-sets: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-derivative: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The basic dynamical content of a conservative one-dimensional model: every datum has exactly one maximal motion; the mechanical energy m x-dot^2/2 + U(x) is constant along every motion; a motion of initial energy E_0 keeps its position in the sublevel set {U <= E_0}, and where U is strictly below E_0 its velocity is one of the two square-root values determined by the position and E_0; every non-turning phase point of the motion lies on the energy level set of E_0; and the constant motions are exactly the rest motions at equilibria. The result is a conditional deduction from the declared potential presentation; it asserts no periodicity, no boundedness of the motion, no asymptotic behaviour and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2.4, Example 1, printed page 5 (PDF page 11): the simple harmonic oscillator has F(x) = -k x from the potential V = k x^2/2 and its energy E = m xdot^2/2 + k x^2/2 is conserved"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.3, Eqs. (3.24)-(3.29), chapter pages 5-7 (PDF pages 37-39): the one-dimensional motion has the energy as a first integral, the energy diagram determines turning points, and the velocity is obtained from the energy by quadrature"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt a **conservative one-dimensional model**: the class of clause (a) of
[[def-cm04-one-dimensional-models-and-equilibria]] with a **time- and
velocity-independent** force law presented through a potential, that is
$$F(x)=-U'(x)\qquad(x\in Q)$$
for a function $U:Q\to\mathbb R$ of class $C^{2}$ (so the residual force of
clause (d) of that definition vanishes identically and the model is a global
potential model). Write
$$E(x,v)=\tfrac12 m v^{2}+U(x)$$
for the energy function of [[def-cm04-phase-plane-and-energy-level-sets]]
clause (b). Then:

1. **Existence and uniqueness.** Every datum $(t_{0},x_{0},v_{0})$ with
   $t_{0}\in I_{0}$, $x_{0}\in Q$, $v_{0}\in\mathbb R$ has exactly one
   **maximal motion**: a motion $x:J_{\max}\to Q$ with $x(t_{0})=x_{0}$ and
   $x'(t_{0})=v_{0}$ that has no extension to a motion on a strictly larger
   interval. Its interval $J_{\max}$ is open, contains $t_{0}$ and is
   contained in $I_{0}$, and every motion of the model with the same datum is
   the restriction of $x$ to a subinterval.
2. **Energy conservation.** For every motion $x:J\to Q$ the function
   $t\mapsto E(x(t),x'(t))$ is constant on $J$.
3. **Level-set containment and velocity determination.** Let $x:J\to Q$ be
   a motion with datum $(t_{0},x_{0},v_{0})$ and let $E_{0}:=E(x_{0},v_{0})$.
   Then $U(x(t))\le E_{0}$ for every $t\in J$; if $U(x(t))<E_{0}$ then
   $$x'(t)=\pm\sqrt{\frac{2\bigl(E_{0}-U(x(t))\bigr)}{m}},$$
   the two signs giving the only two possible values; and $x'(t)=0$ holds
   exactly when $U(x(t))=E_{0}$. In particular the phase curve of $x$ is
   contained in the energy level set $\Sigma_{E_{0}}$ of clause (b) of
   [[def-cm04-phase-plane-and-energy-level-sets]].
4. **Rest motions.** A point $x_{*}\in Q$ is an equilibrium of the model if
   and only if $U'(x_{*})=0$; in that case the constant curve
   $x\equiv x_{*}$ is the maximal motion with datum $(t_{0},x_{*},0)$, and
   conversely the maximal motion with datum $(t_{0},x_{*},0)$ is constant
   exactly when $U'(x_{*})=0$.

The statement is conditional on the declared potential $U$: replacing $U$ by
$U+c$ with a constant $c$ changes $E$ on the whole phase plane by $c$ and
leaves clauses 1, 3 and 4 unchanged. No claim of periodicity, boundedness of
the position or of the velocity, or approach to an equilibrium is made.

## Facts & Assumptions

**Given:** The conservative one-dimensional model $(m,I_{0},Q,F)$ with
$F=-U'$, its phase system $G_{F}(x,v)=(v,-U'(x)/m)$, its energy $E$, and a
datum $(t_{0},x_{0},v_{0})$.

[L1] Model vocabulary ([[def-cm04-one-dimensional-models-and-equilibria]]
clauses (a)-(e)): $Q$ is nonempty open, $F$ is continuous and locally
Lipschitz in the state variable; motions are the $C^{2}$ curves
$x:J\to Q$ with $m x''=F(x)$ on an interval $J\subseteq I_{0}$ with nonempty
interior; $x$ is a motion if and only if $t\mapsto(x(t),x'(t))$ is a solution
of $z'=G_{F}(z)$; and $x_{*}$ is an equilibrium if and only if
$F(x_{*})=0$, equivalently $U'(x_{*})=0$ because $U$ is $C^{1}$ and
$F=-U'$.

[L2] Phase-field regularity: $G_{F}(x,v)=(v,-U'(x)/m)$ is continuous on the
open set $Q\times\mathbb R$, and it is locally Lipschitz in the state
variable: the first component is linear, and $U'$ is of class $C^{1}$ because
$U$ is $C^{2}$, hence locally Lipschitz on the compact coordinate subsets of
the open set $Q$ by
[[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]] with the
identity charts; a locally Lipschitz map is locally Lipschitz in the sense of
[[def-locally-lipschitz-in-the-state-variable]].

[L3] Maximal solutions ([[thm-picard-lindelof-local-existence-and-uniqueness]],
[[def-maximal-ode-solution]],
[[thm-existence-and-uniqueness-of-a-maximal-ode-solution]],
[[def-first-order-ode-initial-value-problem-and-solution]]): for a
continuous field on an open domain that is locally Lipschitz in the state
variable, every initial datum has exactly one maximal solution; its maximal
interval is open; and every solution with the same datum is a restriction of
it.

[L4] Differentiation rules ([[thm-algebra-of-derivatives]],
[[thm-chain-rule]], [[def-derivative]]): a sum of differentiable real
functions is differentiable with the sum of the derivatives; a constant
multiple of a differentiable function is differentiated by the same factor;
the product $x'\,x'$ has derivative $2x'x''$; and the composite $U\circ x$
of a $C^{1}$ function $U$ with a differentiable curve $x$ is differentiable
with derivative $U'(x(t))\,x'(t)$.

[L5] A continuous real function on an interval that is differentiable with
zero derivative at every interior point is constant
([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[L6] Square roots: for $a\ge0$ all solutions of $y^{2}=a$ are
$y=\pm\sqrt a$, and those two values are distinct exactly when $a>0$ ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct; apply the maximal-solution theorem to the
phase system, differentiate the energy along a motion, and read the
consequences off the conservation identity.

1.1 The phase field $G_{F}$ satisfies the hypotheses of [L3] on the open time-state domain $I_0\times Q\times\mathbb R$ by [L2]. Hence every initial state $(x_{0},v_{0})$ has exactly one maximal solution $z:J_{\max}\to Q\times\mathbb R$ of $z'=G_{F}(z)$ with $z(t_{0})=(x_{0},v_{0})$, with $J_{\max}$ open and containing $t_{0}$, and every solution of the phase system with the same initial state is a restriction of $z$; the maximal interval is contained in the time projection $I_0$ of this domain. By the biconditional of [L1] the first component $x$ of $z$ is a motion and the second is $x'$; and if $y$ is any motion with the same datum, then $t\mapsto(y(t),y'(t))$ is a solution of the phase system with the same initial state and hence a restriction of $z$, so $y$ is a restriction of $x$. This is clause 1. [given, L1, L2, L3]

1.2 Let $x:J\to Q$ be a motion and put $e(t):=E(x(t),x'(t))=\tfrac12 m\,x'(t)^{2}+U(x(t))$ for $t\in J$. At every interior point $t$ of $J$, $x'$ is differentiable with derivative $x''$ and $x$ is differentiable, so by [L4] the function $e$ is differentiable there with $$e'(t)=m\,x'(t)x''(t)+U'\bigl(x(t)\bigr)x'(t)=x'(t)\bigl(m\,x''(t)+U'(x(t))\bigr)=x'(t)\bigl(F(x(t))+U'(x(t))\bigr)=0,$$ where the equation of motion $m\,x''(t)=F(x(t))$ and $F=-U'$ were used. The curve $e$ is continuous on the interval $J$, so [L5] gives that $e$ is constant on $J$. This is clause 2. [given, L1, L4, L5, algebra]

2.1 Let $x:J\to Q$ be a motion with datum $(t_{0},x_{0},v_{0})$ and $E_{0}=E(x_{0},v_{0})$. By step 1.2, $E(x(t),x'(t))=E_{0}$ for every $t\in J$; subtracting $U(x(t))$ gives $\tfrac12 m\,x'(t)^{2}=E_{0}-U(x(t))$. The left side is nonnegative, so $U(x(t))\le E_{0}$; and $x'(t)^{2}=2(E_{0}-U(x(t)))/m$. If $U(x(t))<E_{0}$ then the right side is strictly positive, and [L6] applied to $a=2(E_{0}-U(x(t)))/m>0$ gives $x'(t)=\pm\sqrt{a}$; while $x'(t)=0$ holds exactly when $U(x(t))=E_{0}$. Finally $(x(t),x'(t))\in\Sigma_{E_{0}}$ for every $t\in J$ because $E(x(t),x'(t))=E_{0}$, by the definition of the level set. This is clause 3. [given, step 1.2, L6, algebra]

3.1 Clause 4: by [L1], $x_{*}$ is an equilibrium exactly when $F(x_{*})=0$, that is $U'(x_{*})=0$. If so, the constant curve $x\equiv x_{*}$ has $x''\equiv0$ and $m\cdot0=F(x_{*})=0$, so it is a motion with datum $(t_{0},x_{*},0)$; by the uniqueness clause of step 1.1 it is the maximal motion with that datum. Conversely, if the maximal motion with datum $(t_{0},x_{*},0)$ is the constant curve $x\equiv x_{*}$, then substituting into the equation of motion gives $0=m\cdot0=F(x_{*})$, so $U'(x_{*})=0$. This is clause 4. [given, step 1.1, L1] ∎

## Remarks

- **What conservation does and does not give.** Clause 3 confines the motion
  to the sublevel set $\{U\le E_{0}\}$ and fixes the speed at each position
  where the level is crossed, up to sign; it does not by itself show that the
  motion oscillates between turning positions, that a period exists, or that
  the motion stays bounded for all forward times. Those require additional
  hypotheses on $U$ and are not claimed here.

- **The sample-independent sign.** On an interval on which the velocity does
  not vanish, its sign is constant, because a continuous function with no
  zero has constant sign; this is why the phase curve travels along one
  branch of the level set between consecutive turning points. No turning
  points are asserted to exist for a general $U$.

- **Normalization.** Adding a constant to $U$ shifts $E$ by that constant on
  the whole phase plane; $\Sigma_{E_{0}}$ moves to $\Sigma_{E_{0}+c}$ and the
  velocity formula of clause 3 is unchanged, as it must be, since the force
  is unchanged. The energy conservation statement is a statement about the
  declared representative $U$.

