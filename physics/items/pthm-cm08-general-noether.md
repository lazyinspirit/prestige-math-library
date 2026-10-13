---
id: pthm-cm08-general-noether
kind: physics-theorem
title: "The general Noether theorem of the model: point transformations with time reparametrisation, the charge $p\\cdot\\xi-E\\tau-B$, its residual-force rate and its potential gauge"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm08-symmetry-of-the-mechanical-lagrangian, thm-cm-point-noether-identity-with-time-reparametrization, def-cm-time-dependent-lagrangian-and-action, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, pthm-cm03-energy-balance, pthm-cm07-euler-lagrange-equations, pthm-cm07-newton-equivalence, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  thm-cm-point-noether-identity-with-time-reparametrization: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  pthm-cm07-newton-equivalence: physical-result
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The general point Noether theorem of the force model with a declared potential presentation in one inertial frame: for a symmetry datum with time reparametrisation, the charge M x' . xi - (K+U) tau - B is constant along every motion of the global potential branch; the charge has derivative equal to the residual force paired with xi - x' tau for an arbitrary presentation; the tau=0 and xi=0, tau=1 specialisations reduce to the strict point-symmetry charge and to minus the mechanical energy; and replacing the potential representative U by U+c(t) with the boundary function B-c tau preserves the identity and leaves the charge unchanged. The theorem is conditional on the adopted force branch, the declared presentation and the symmetry identity; it asserts no symmetry of any particular force law, no converse from conservation to symmetry, and carries no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 2.4 and 2.4.1, printed pages 23-26 (PDF pages 29-32): constants of motion, the time-translation case H = sum qdot_j p_j - L, and the Noether proof with the generator paired with the conjugate momentum"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.8.5: Noether's theorem for parametric coordinate transformations and the Noether integral, with the total-time-derivative gauge of Section 5.4.5 shifting momenta and Hamiltonians"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-10 (PDF pages 25-28): the Hamiltonian function as the energy-type charge and its conservation when the Lagrangian has no explicit time dependence"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]], and let $(\tau,\xi,B)$ be a
symmetry datum of the model's mechanical Lagrangian
([[def-cm08-symmetry-of-the-mechanical-lagrangian]] clause (a)), with charge

$$C(t,x,v):=\bigl(\mathsf M v\bigr)\cdot\xi(t,x)-\bigl(K(v)+U(t,x)\bigr)\tau(t,x)-B(t,x)\qquad\bigl((t,x,v)\in O\bigr).$$

Then:

1. **(conservation in the global potential model).** If $d\equiv0$, then for
   every motion $x:J\to Q$ of the model on an interval $J$ with nonempty
   interior ([[def-cm02-newtonian-flow]]), the function
   $t\mapsto C\bigl(t,x(t),x'(t)\bigr)$ is constant on $J$.

2. **(specialisations).** At $\tau\equiv0$ the model identity is the strict
   identity of clause (b) of [[def-cm08-symmetry-of-the-mechanical-lagrangian]]
   and the charge reduces to $(\mathsf M v)\cdot\xi-B$; at $\xi\equiv0$,
   $\tau\equiv1$, $B\equiv0$ the model identity holds on $O$ if and only if
   $\partial_{t}U\equiv0$ on $I_{0}\times Q$, and the charge is $-E$, where
   $E=K+U$ is the model's mechanical energy function.

3. **(residual-force rate).** For an arbitrary presentation $(U,d)$, along
   every motion $x:J\to Q$ the function $t\mapsto C(t,x(t),x'(t))$ is of class
   $C^{1}$ on $J$ and

$$C'(t)=\Bigl\langle d\bigl(t,x(t),x'(t)\bigr),\,\xi\bigl(t,x(t)\bigr)-x'(t)\,\tau\bigl(t,x(t)\bigr)\Bigr\rangle\qquad(t\in J);$$

   consequently $C$ is constant on $J$ if and only if this pairing vanishes
   for every $t\in J$.

4. **(potential gauge).** Let $c:I_{0}\to\mathbb R$ be of class $C^{2}$ and let
   $U':=U+c$ be the representative of
   [[def-cm03-potential-and-mechanical-energy]] clause (c), with Lagrangian
   $L'=K-U'$; put $B':=B-c\tau$. Then $(\tau,\xi,B')$ is a symmetry datum of
   the model's mechanical Lagrangian for the representative $U'$ if and only
   if $(\tau,\xi,B)$ is one for $U$, and its charge is the same function $C$.
   In particular the conserved quantity of clause 1 does not depend on the
   choice of potential representative, although the mechanical energy
   $E=K+U$ does.

All clauses are conditional deductions from the adopted force branch, the
declared presentation and the stated symmetry identity; no clause asserts that
a given model admits a symmetry datum, and no clause carries empirical content.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the symmetry datum $(\tau,\xi,B)$, the motion $x:J\to Q$ and, in clause 4, the function $c$.

[F1] Model data and chart ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm-time-dependent-lagrangian-and-action]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm01-configuration]]): $O=I_{0}\times Q\times\mathbb R^{3N}$ is open and $(O,L)$ is a time-dependent Lagrangian chart whenever $Q\ne\varnothing$ and $a<b$ with $[a,b]\subseteq I_{0}$, over $[a,b]\times Q$; $L=K-U$ with $K(v)=\frac12v\cdot\mathsf M v$, $L_{v}=\mathsf M v$, $L_{x}=-\nabla_{x}U$, $L_{t}=-U_{t}$; the force map is $F_{i}=-\nabla_{x_{i}}U+d_{i}$; and $U'=U+c$ presents the same force map with the same residual forces, with $L'=L-c$.

[F2] Symmetry datum and charge ([[def-cm08-symmetry-of-the-mechanical-lagrangian]]): the maps $\tau,\xi,B$ are of class $C^{2}$ and satisfy the model Noether identity $L_{t}\tau+L_{x}\cdot\xi+L_{v}\cdot(D_{t}\xi-vD_{t}\tau)+L\,D_{t}\tau=D_{t}B$ on $O$, and the charge is the displayed function; at $\tau\equiv0$ the identity is the strict one and the charge is $(\mathsf M v)\cdot\xi-B$.

[F3] The mathematical general Noether theorem ([[thm-cm-point-noether-identity-with-time-reparametrization]]): for a time-dependent Lagrangian chart, $C^{2}$ maps $\tau,\xi,B$ satisfying the same identity on the chart domain, and a $C^{2}$ curve that solves the Euler-Lagrange equation, the function $t\mapsto\mathcal L_{v}\cdot\xi-E_{\mathcal L}\tau-B$ is constant along the curve, where $E_{\mathcal L}=\mathcal L_{v}\cdot v-\mathcal L$; its clause 1 identifies the case $\tau=0$ with the infinitesimal point symmetry identity and charge when $\xi$ is independent of time; for time-dependent $\xi$, $\tau=0$ still gives the model's strict identity, and the general conservation conclusion still applies, and its clause 2 states that at $\xi=0$, $\tau=1$, $B=0$ the identity holds if and only if $\mathcal L_{t}=0$ on the chart domain, with charge $-\mathcal L_{v}\cdot v+\mathcal L$.

[F4] Motions and the Euler-Lagrange equivalence ([[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]], [[pthm-cm07-euler-lagrange-equations]], [[pthm-cm07-newton-equivalence]]): a motion $x:J\to Q$ is a $C^{2}$ curve on an interval with nonempty interior, endpoints understood with one-sided derivatives, satisfying $\mathsf M x''=-\nabla_{x}U+d$ on $J$; only when $d\equiv0$ does every restriction to a closed subinterval $[a,b]\subseteq J$ with $a<b$ satisfy $E_{L}(x)=0$ and stationarity for the action of $L$. For arbitrary residual forces, no stationarity or Euler-Lagrange equation for $L=K-U$ is asserted.

[F5] Energy balance ([[pthm-cm03-energy-balance]] clause 1): along a motion $x:J\to Q$ of the presentation $(U,d)$, the mechanical energy satisfies $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle d_{i}(t,x(t),x'(t)),x_{i}'(t)\rangle$ for every $t\in J$, the evaluated residuals being those of the statement.

[F6] Calculus along the motion ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-interval]], [[cor-zero-derivative-implies-constant]]): composites $t\mapsto\varphi(t,x(t))$ of $C^{1}$ maps with the motion are $C^{1}$ with derivative $D_{t}\varphi$; sums, products and pairings differentiate by the usual rules; a $C^{1}$ real function on an interval is constant if and only if its derivative vanishes everywhere.

[F7] Regularity and dimensions ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-cm01-units]]): all maps occurring in the proof are of the stated differentiability class, and $\langle\cdot,\cdot\rangle$ is the Euclidean inner product of $\mathbb R^{3N}$.

## Proof

**Proof technique:** direct; obtain clause 1 from the mathematical general Noether theorem applied to the Euler-Lagrange description of a motion, clauses 2 and 4 by evaluating the model identity under the stated substitutions, and clause 3 by differentiating the charge along the motion.

1.1 Clause 1, motion as an Euler-Lagrange solution: let $x:J\to Q$ be a motion with $d\equiv0$. Its interior $J^{\circ}$ is a nonempty open interval. For any $t_{0}\in J^{\circ}$ choose $a<b$ with $t_{0}\in(a,b)$ and $[a,b]\subseteq J^{\circ}$; by [F4] the restriction $x|_{[a,b]}$ is stationary for the action of $L$ and satisfies $E_{L}(x)=0$ on $[a,b]$. Hence $E_{L}(x)=0$ throughout $J^{\circ}$. [F1, F4, given]

1.2 Clause 3, differentiation: along a motion $x:J\to Q$, the curve $t\mapsto C(t,x(t),x'(t))$ is $C^{1}$ by [F6] and [F7], and differentiating $C=(\mathsf M x')\cdot\xi-E\tau-B$ gives $$C'=\bigl(\mathsf M x''\bigr)\cdot\xi+\bigl(\mathsf M x'\bigr)\cdot D_{t}\xi-E'\tau-E\,D_{t}\tau-D_{t}B.$$ Substituting $E'=\partial_{t}U+\langle d,x'\rangle$ from [F5], the model identity of [F2] evaluated at the graph point, $$D_{t}B=-U_{t}\tau-\nabla_{x}U\cdot\xi+\bigl(\mathsf M x'\bigr)\cdot\bigl(D_{t}\xi-x'D_{t}\tau\bigr)+\bigl(K-U\bigr)D_{t}\tau,$$ and $\mathsf M x''=-\nabla_{x}U+d$ from [F4], the terms $(\mathsf M x')\cdot D_{t}\xi$, $U_{t}\tau$ and $E\,D_{t}\tau$ cancel against the corresponding terms of the identity, and the identity $\langle\mathsf M x',x'\rangle=2K$ together with $E=K+U$ leaves $$C'=\bigl(\mathsf M x''+\nabla_{x}U\bigr)\cdot\xi-\bigl\langle d,x'\bigr\rangle\tau=\bigl\langle d,\xi-x'\tau\bigr\rangle.$$ [F1, F2, F4, F5, F6, F7, algebra]

1.3 Clause 4, preservation of the identity: write $\varphi:=c\tau$ and compare the two sides of the model identity for the replaced data $(U',B')$ with those for $(U,B)$ at a point of $O$: since $L'=L-c$ by [F1], the left-hand side changes by $-c_{t}\tau-c\,D_{t}\tau=-D_{t}\varphi$, because the identity is linear in $L$ and its first derivatives and $c$ is independent of $x$ and $v$; the right-hand side is $D_{t}B-D_{t}\varphi$; hence the replaced identity holds on $O$ if and only if the original one does. [F1, F2, F7, algebra]

1.4 Clause 2, specialisations: setting $\tau\equiv0$ in [F2] gives $D_t\tau=0$, so directly the model identity becomes $L_x\cdot\xi+L_v\cdot D_t\xi=D_tB$, the strict identity of clause (b) of the symmetry definition, and its charge reduces to $(\mathsf M v)\cdot\xi-B$; by clause 2 of [F3] and $L_{t}=-U_{t}$ from [F1], the datum $\xi\equiv0$, $\tau\equiv1$, $B\equiv0$ satisfies the identity on $O$ if and only if $\partial_{t}U\equiv0$ on $I_{0}\times Q$, and its charge is $-\bigl((\mathsf M v)\cdot v-L\bigr)=-\bigl(K+U\bigr)=-E$. [F1, F2, F3, algebra]

2.1 Clause 1, conservation: by [F2] the datum $(\tau,\xi,B)$ satisfies the model identity on $O$, which is the identity of [F3]. Step 1.1 shows that the motion restricted to the open interval $J^{\circ}$ has graph in $O$ and solves $E_{L}=0$, so [F3] applies with $I:=J^{\circ}$ and gives that $t\mapsto(\mathsf M x'(t))\cdot\xi(t,x(t))-E_{\mathcal L}(t,x,x')\tau(t,x(t))-B(t,x(t))$ is constant on $J^{\circ}$, where $E_{\mathcal L}=L_{v}\cdot v-L=K+U$ by [F1]; this is exactly $t\mapsto C(t,x(t),x'(t))$. The charge is continuous on $J$ by [F7]; each included endpoint is a limit of points of $J^{\circ}$, so the same value holds there. Thus the charge is constant on $J$. [F1, F2, F3, F7, step 1.1]

2.2 Clause 4, the charge: for the replaced data the charge is $(\mathsf M v)\cdot\xi-(K+U+c)\tau-(B-c\tau)=(\mathsf M v)\cdot\xi-(K+U)\tau-B=C$, because the two terms containing $c$ cancel; combined with step 1.3, this proves clause 4. [F1, F2, step 1.3, algebra]

3.1 Clause 2 is step 1.4; clause 3 is step 1.2 together with the elementary equivalence, for a $C^{1}$ function on the interval $J$, between constancy and vanishing derivative; clauses 1 and 4 are steps 2.1 and 2.2; all clauses are conditional deductions from the stated hypotheses, and no converse from conservation to symmetry, no existence of a symmetry datum and no empirical statement is asserted. [step 1.2, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **The three charges of the framework.** Clause 2 records that the general identity contains the strict point-symmetry charge $(\mathsf M v)\cdot\xi-B$ of [[pthm-cm08-point-noether]] and the energy charge $-E$ of [[pthm-cm08-time-energy]] as special cases; the framework's time-translation instance uses a parameter measured in seconds, so $\tau\equiv1$ is dimensionless and $-E$ is action per second. The conservation laws are therefore instances of one identity rather than independent postulates. The Lorentz-type generator with both $\tau$ and $\xi$ nonzero — for which the charge mixes position, time and momentum — is treated as scope, not as a force law, and no such model is asserted here.

- **Sign convention.** The convention is the one fixed by [[def-cm08-symmetry-of-the-mechanical-lagrangian]]: $\xi$ generates the configuration change $x\mapsto x+s\xi$ at fixed $t$ up to the time shift $s\tau$. Reversing the family parameter negates the generator, boundary function and charge together, preserving the identity and conservation statement. The printed rotation derivative in SICM Section 1.8.5 has the sign inconsistency identified in the symmetry definition; it is not used here.

- **Conditional conservation and empirical status.** Clause 3 is the exact bookkeeping for a presentation with residual forces: the residual force acts against the total generator $\xi-x'\tau$, so a symmetry of the potential part produces a conserved charge only when the residual force pairs to zero with that generator along the motion. The identity of clause (a) of [[def-cm08-symmetry-of-the-mechanical-lagrangian]] must be verified for the actual declared $U$ and masses; the conservation statements are deductions inside the model, not empirical laws, and no converse is asserted.
