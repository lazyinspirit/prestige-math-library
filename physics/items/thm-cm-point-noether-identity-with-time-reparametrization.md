---
id: thm-cm-point-noether-identity-with-time-reparametrization
kind: theorem
title: "Noether identity for point transformations with time reparametrisation: the conserved charge $p\\cdot\\xi-E\\tau-B$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-time-dependent-lagrangian-and-action, def-cm-infinitesimal-point-symmetry, thm-cm-point-symmetry-charge-is-conserved, thm-cm-stationarity-iff-euler-lagrange, prop-cm-hamiltonian-branch-identities, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval, def-abs-value]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  thm-cm-point-symmetry-charge-is-conserved: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 7.3 (Invariant Transformations and Noether's Theorem)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.4.1 (Noether's theorem for continuous symmetries; the time-translation case uses L_t = 0), printed pages 24-26"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$
([[def-cm-time-dependent-lagrangian-and-action]]). Let $A\subseteq\mathbb R\times\mathbb R^n$ be open and contain the time-configuration projection of $O$. Let
$\tau,\xi:A\to\mathbb R,\mathbb R^n$ and
$B:A\to\mathbb R$ be of class $C^2$, and for a $C^1$ function
$\varphi(t,q)$ with scalar values write $D_t\varphi(t,q,v):=\varphi_t(t,q)+\varphi_q(t,q)\cdot v$; for vector-valued $\xi$ set $D_t\xi:=\xi_t+D_q\xi\,v$, equivalently $(D_t\xi)_j=D_t(\xi_j)$. Assume the
**Noether identity**

$$\mathcal L_t\,\tau+\mathcal L_q\cdot\xi+\mathcal L_v\cdot\bigl(D_t\xi-v\,D_t\tau\bigr) +\mathcal L\,D_t\tau=D_tB$$

on $O$, where all arguments of $\mathcal L$ and its derivatives are $(t,q,v)$. Write $p:=\mathcal L_v$ for the momentum and put

$$E(t,q,v):=\mathcal L_v(t,q,v)\cdot v-\mathcal L(t,q,v),\qquad C(t,q,v):=\mathcal L_v(t,q,v)\cdot\xi(t,q)-E(t,q,v)\tau(t,q)-B(t,q).$$

Then for every $C^2$ curve $q:I\to U$ on an open interval $I\supseteq[a,b]$ with
$(t,q(t),q'(t))\in O$ that solves the Euler–Lagrange equation
$E_{\mathcal L}(q)(t)=0$, the function $t\mapsto C(t,q(t),q'(t))$ is constant on $I$.
Moreover:

1. at $\tau=0$ and with $\xi$ independent of $t$ the Noether identity is exactly the infinitesimal point symmetry identity of
   [[def-cm-infinitesimal-point-symmetry]] for the pair $(\xi,B)$, and the charge reduces to
   $C=\mathcal L_v\cdot\xi-B$, so the present theorem specialises to
   [[thm-cm-point-symmetry-charge-is-conserved]];
2. at $\xi=0$, $\tau=1$, $B=0$ the Noether identity holds if and only if $\mathcal L_t=0$ on $O$,
   and the charge is $C=-E$; thus the theorem contains the conservation of the energy in the
   time-independent case, in agreement with clause 3 of
   [[prop-cm-hamiltonian-branch-identities]].

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$, the $C^2$ data $\tau,\xi,B$, the Noether identity, the functions $E$ and $C$, and a $C^2$ Euler–Lagrange solution $q:I\to U$.

[F1] Euler–Lagrange equation along $q$: $\frac{d}{dt}\mathcal L_v(t,q,q')=\mathcal L_q(t,q,q')$; this is the content of $E_{\mathcal L}(q)=0$, which is equivalent to stationarity ([[def-cm-time-dependent-lagrangian-and-action]], [[thm-cm-stationarity-iff-euler-lagrange]]).

[F2] Chain rule along the curve ([[thm-chain-rule-for-total-derivatives]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]]): for the $C^1$ composite
$t\mapsto\varphi(t,q(t))$ the derivative is $D_t\varphi(t,q(t),q'(t))$; in particular
$$\frac{d}{dt}\xi(t,q(t))=D_t\xi,\qquad\frac{d}{dt}\tau(t,q(t))=D_t\tau,\qquad \frac{d}{dt}B(t,q(t))=D_tB$$
along the curve, with the right-hand sides evaluated at $(t,q(t),q'(t))$.

[F3] Algebra of derivatives ([[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-abs-value]]): sums, products and scalar multiples of differentiable functions on $I$ are differentiable with the usual rules, and a differentiable function on an interval with vanishing derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct; differentiate the charge along the solution and substitute the Euler–Lagrange equation and the Noether identity.

1.1 Along the solution, the energy satisfies $E'=-\mathcal L_t$: by [F2] and the product rule [F3], $$E'=\Bigl(\frac{d}{dt}\mathcal L_v\Bigr)\cdot q'+\mathcal L_v\cdot q''-\mathcal L_t-\mathcal L_q\cdot q'-\mathcal L_v\cdot q'' =\mathcal L_q\cdot q'-\mathcal L_t-\mathcal L_q\cdot q'=-\mathcal L_t,$$ where [F1] was used in the second equality. [F1, F2, F3, algebra]

1.2 Clause 1: at $\tau=0$ and $\xi(t,q)=\xi_0(q)$ one has $D_t\tau=0$, so the Noether identity becomes $\mathcal L_q\cdot\xi+\mathcal L_v\cdot D_t\xi=D_tB$, with $D_t\xi=D_q\xi\,v$, which is the identity of [[def-cm-infinitesimal-point-symmetry]]; the charge is $C=\mathcal L_v\cdot\xi-B$, and the conclusion is the one of [[thm-cm-point-symmetry-charge-is-conserved]]. [given, algebra]

2.1 The charge is differentiable along the curve, and by [F2], [F3] and step 1.1, $$C'=\Bigl(\frac{d}{dt}\mathcal L_v\Bigr)\cdot\xi+\mathcal L_v\cdot D_t\xi-E'\tau-E\,D_t\tau-D_tB =\mathcal L_q\cdot\xi+\mathcal L_v\cdot D_t\xi+\mathcal L_t\,\tau-E\,D_t\tau-D_tB .$$ [F1, F2, F3, step 1.1, algebra]

3.1 The Noether identity, evaluated at $(t,q(t),q'(t))$, says $$D_tB=\mathcal L_t\,\tau+\mathcal L_q\cdot\xi+\mathcal L_v\cdot D_t\xi-\mathcal L_v\cdot q'\,D_t\tau+\mathcal L\,D_t\tau =\mathcal L_t\,\tau+\mathcal L_q\cdot\xi+\mathcal L_v\cdot D_t\xi-E\,D_t\tau,$$ because $E=\mathcal L_v\cdot q'-\mathcal L$ and $v=q'$. Substituting this expression for $D_tB$ into step 2.1 gives $C'=0$ at every $t\in I$. [given, step 2.1, algebra]

4.1 By [F3] the function $C$ is constant on $I$. This proves the conservation statement. [F3, step 3.1]

5.1 Clause 2: at $\xi=0$, $\tau=1$, $B=0$ one has $D_t\xi=0$ and $D_t\tau=0$, so the Noether identity reads $\mathcal L_t\cdot1=\mathcal L_t=D_tB=0$, i.e. it holds exactly when $\mathcal L_t=0$ on $O$; the charge is $C=\mathcal L_v\cdot0-E\cdot1-0=-E$, so $E$ is conserved. This is the energy statement of [[prop-cm-hamiltonian-branch-identities]] clause 3 in the autonomous case. [given, step 4.1, algebra] ∎

## Remarks

- **Dimensions of the generators.** If a one-parameter family of transformations is parametrised by a parameter $s$ of physical dimension $[s]$, then $\tau$ has dimension time$/[s]$, $\xi$ has dimension $[q]/[s]$, $B$ has dimension action$/[s]$, and the charge $C=p\cdot\xi-E\tau-B$ has dimension action$/[s]$. Rescaling the generator by a constant rescales the charge by the same constant. These dimensional remarks are bookkeeping for applications; the theorem itself is the unconditional statement proved above, and no physical interpretation of the dimensions is asserted.

- **Orientation.** The local transformations are meant to act on the same oriented path space, which for an infinitesimal family with time change requires $\mathrm dt_{\text{new}}/\mathrm dt>0$; the present theorem only uses the infinitesimal identity and the charge, and the global interpretation of the family is not needed for the conservation statement.

- **Scope.** The identity is a hypothesis on the chart data. It does not follow from the existence of a kinematic transformation of the configuration space; a chosen potential may break it. The concrete charges and the failure of the symmetry for a quadratic potential are recorded in [[cor-cm-noether-charges-for-translations-rotations-and-boosts]] and [[rem-cm-scope-of-point-symmetry]].
