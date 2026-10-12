---
id: thm-cm-point-symmetry-charge-is-conserved
kind: theorem
title: "The charge of an infinitesimal point symmetry is constant along Euler-Lagrange solutions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-infinitesimal-point-symmetry, def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 7.3 (Invariant Transformations and Noether's Theorem)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.4.1 (the proof of Noether's theorem and the conserved quantity), printed pages 24-26"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$, let $(\xi,B)$ be an
infinitesimal point symmetry of $\mathcal L$ with charge $C(t,q,v)=\mathcal L_v(t,q,v)\cdot\xi(q)-B(t,q)$
([[def-cm-infinitesimal-point-symmetry]]), and let $q:I\to U$ be a $C^2$ curve on an open interval
$I\supseteq[a,b]$ with $(t,q(t),q'(t))\in O$ for all $t\in I$ that solves the Euler–Lagrange
equation

$$E_{\mathcal L}(q)(t)=0\qquad(t\in I),$$

i.e. $\frac{d}{dt}\mathcal L_v(t,q,q')=\mathcal L_q(t,q,q')$
([[def-cm-time-dependent-lagrangian-and-action]], [[thm-cm-stationarity-iff-euler-lagrange]]).
Then the function

$$t\longmapsto C\bigl(t,q(t),q'(t)\bigr)=\mathcal L_v(t,q(t),q'(t))\cdot\xi(q(t))-B(t,q(t))$$

is constant on $I$.

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$, an infinitesimal point symmetry $(\xi,B)$, and a
$C^2$ Euler–Lagrange solution $q:I\to U$.

[F1] The symmetry identity of [[def-cm-infinitesimal-point-symmetry]]:
$\mathcal L_q(t,q,v)\cdot\xi(q)+\mathcal L_v(t,q,v)\cdot D\xi(q)v=B_t(t,q)+B_q(t,q)\cdot v$
for all $(t,q,v)\in O$, and the Euler–Lagrange equation
$\frac{d}{dt}\mathcal L_v(t,q,q')=\mathcal L_q(t,q,q')$ along $q$.

[F2] Chain rule and algebra of differentiable curves
([[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]],
[[def-interval]]): the curve $t\mapsto\xi(q(t))$ is $C^1$ with derivative $D\xi(q(t))q'(t)$, and
the curve $t\mapsto B(t,q(t))$ is $C^1$ with derivative $B_t(t,q(t))+B_q(t,q(t))\cdot q'(t)$.

[F3] A continuous real function on an interval whose derivative vanishes at every interior point
is constant there ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct; differentiate the charge along the solution and substitute the
symmetry identity.

1.1 The charge $C(t)=C(t,q(t),q'(t))$ is differentiable on $I$, because $\mathcal L_v$, $\xi$, $B$ and $q$ are $C^1$. By [F2], $$C'(t)=\Bigl(\frac{d}{dt}\mathcal L_v(t,q,q')\Bigr)\cdot\xi(q(t)) +\mathcal L_v(t,q,q')\cdot D\xi(q(t))q'(t) -B_t(t,q(t))-B_q(t,q(t))\cdot q'(t).$$ [F1, F2, given]

2.1 Substituting the Euler–Lagrange equation of [F1] in the first term and the symmetry identity with $(t,q,v)=(t,q(t),q'(t))$ in the remaining three terms gives $C'(t)=0$ for every $t\in I$. [F1, step 1.1, algebra]

3.1 Since $C$ is differentiable with $C'=0$, [F3] makes $C$ constant on $I$. [F3, step 2.1] ∎

## Remarks

- The theorem is a deduction inside the chart model: conservation holds for solutions of the
  Euler–Lagrange equation whenever the identity of [[def-cm-infinitesimal-point-symmetry]] holds.
  It does not assert that any particular Lagrangian occurring in a physical model possesses such a
  symmetry, and it makes no empirical claim.

- The analogous statement with time reparametrisation, the compensating term $E\,\tau$ in the
  charge, and the reduction to the present theorem at $\tau=0$ with time-independent $\xi$ is
  [[thm-cm-point-noether-identity-with-time-reparametrization]].
