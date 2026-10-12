---
id: lem-cm13-poincare-cartan-annihilation-characterization
kind: lemma
title: "A curve solves Hamilton's equations if and only if its velocity annihilates $d(p\\cdot dq-H\\,dt)$, with the three coordinate components computed"
status: draft
origin: session
domain: mathematics
dependency_level: 0
deps: [def-smooth-differential-k-form, thm-local-coordinate-formula-for-the-exterior-derivative, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, def-first-order-ode-initial-value-problem-and-solution]
dependency_roles:
  def-smooth-differential-k-form: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.5, printed pages 87-88 (PDF pages 93-94): the phase-space action $\\int(p_i\\dot q_i-H)\\,dt$ with independent variations of $q_i$ and $p_i$, whose vanishing gives Hamilton's equations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2: Hamilton's equations in phase space and the differential of the phase-space action integrand"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Let $J\subseteq\mathbb R$ be a nonempty open interval, let
$W\subseteq\mathbb R^{2n}$ be open and nonempty with coordinates
$z=(q,p)=(q^{1},\dots,q^{n},p_{1},\dots,p_{n})$, and let
$H:J\times W\to\mathbb R$ be of class $C^{1}$
([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-directional-and-partial-derivatives]]). On the open set
$J\times W\subseteq\mathbb R\times\mathbb R^{2n}$ consider the two-form

$$\sigma:=d\Bigl(\sum_{i=1}^{n}p_{i}\,dq^{i}-H\,dt\Bigr)=\sum_{i=1}^{n}dp_{i}\wedge dq^{i}-dH\wedge dt$$

([[def-smooth-differential-k-form]],
[[thm-local-coordinate-formula-for-the-exterior-derivative]]). Let
$J'\subseteq J$ be a nonempty open interval and let $z:J'\to W$ be a $C^{1}$
curve. Then the following are equivalent:

1. $z$ satisfies Hamilton's equations on $J'$:
   $\dot q^{i}(t)=H_{p_{i}}\bigl(t,z(t)\bigr)$ and
   $\dot p_{i}(t)=-H_{q^{i}}\bigl(t,z(t)\bigr)$ for $i=1,\dots,n$ and every
   $t\in J'$;
2. for every $t\in J'$ the covector
   $\iota_{(1,\dot z(t))}\sigma$ vanishes, that is
   $\sigma_{(t,z(t))}\bigl((1,\dot z(t)),w\bigr)=0$ for every
   $w\in\mathbb R\times\mathbb R^{2n}$.

## Facts & Assumptions

**Given:** The open sets $J\subseteq\mathbb R$ and $W\subseteq\mathbb R^{2n}$,
the $C^{1}$ function $H$, the two-form $\sigma$, and a $C^{1}$ curve
$z:J'\to W$.

[F1] Coordinates and forms ([[def-smooth-differential-k-form]], [[thm-local-coordinate-formula-for-the-exterior-derivative]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): on the coordinate domain, $d(\sum_{i}p_{i}dq^{i})=\sum_{i}dp_{i}\wedge dq^{i}$ and $d(H\,dt)=dH\wedge dt$ by the coordinate formula for the exterior derivative, with $dH=H_{t}\,dt+\sum_{i}(H_{q^{i}}dq^{i}+H_{p_{i}}dp_{i})$; the standard basis of the tangent space at a point is $\partial_{t},\partial_{q^{1}},\dots,\partial_{q^{n}},\partial_{p_{1}},\dots,\partial_{p_{n}}$.

[F2] Curves ([[def-first-order-ode-initial-value-problem-and-solution]], [[def-interval]], [[def-jacobian-matrix-and-gradient]]): $z$ is differentiable on the interval $J'$ with derivative $\dot z$; the tangent vector $(1,\dot z(t))$ of the graph curve $t\mapsto(t,z(t))$ has components $(1,\dot q^{1},\dots,\dot q^{n},\dot p_{1},\dots,\dot p_{n})$.

## Proof

**Proof technique:** direct. Compute the two-form in coordinates, evaluate its contraction with the graph velocity on the standard basis vectors, and read off Hamilton's equations.

1.1 By [F1] the exterior derivative of the one-form $\sum_{i}p_{i}dq^{i}-H\,dt$ is $\sigma=\sum_{i}dp_{i}\wedge dq^{i}-dH\wedge dt=\sum_{i}dp_{i}\wedge dq^{i}-H_{t}\,dt\wedge dt-\sum_{i}H_{q^{i}}dq^{i}\wedge dt-\sum_{i}H_{p_{i}}dp_{i}\wedge dt$; since $dt\wedge dt=0$ and $dq^{i}\wedge dt=-dt\wedge dq^{i}$, $dp_{i}\wedge dt=-dt\wedge dp_{i}$, this is $\sigma=\sum_{i}dp_{i}\wedge dq^{i}+\sum_{i}H_{q^{i}}dt\wedge dq^{i}+\sum_{i}H_{p_{i}}dt\wedge dp_{i}$. [F1, algebra]

2.1 Write $v:=(1,\dot z(t))$. Evaluating the three types of basis vectors with the coordinate expression of step 1.1: $\sigma(v,\partial_{q^{i}})=dp_{i}(v)\,dq^{i}(\partial_{q^{i}})-dH\wedge dt(v,\partial_{q^{i}})=\dot p_{i}+H_{q^{i}}$, because $dp_{i}(v)=\dot p_{i}$, $dq^{i}(\partial_{q^{i}})=1$ and $(dH\wedge dt)(v,\partial_{q^{i}})=dH(v)\cdot0-1\cdot H_{q^{i}}$; $\sigma(v,\partial_{p_{i}})=dp_{i}(v)dq^{i}(\partial_{p_{i}})-(dH\wedge dt)(v,\partial_{p_{i}})=0-\dot q^{i}\cdot1+H_{p_{i}}=H_{p_{i}}-\dot q^{i}$; and $\sigma(v,\partial_{t})=\sum_{j}dp_{j}(v)dq^{j}(\partial_{t})-\sum_{j}dq^{j}(v)dp_{j}(\partial_{t})-(dH\wedge dt)(v,\partial_{t})=-(H_{q^{i}}\dot q^{i}+H_{p_{i}}\dot p_{i})$ summed over $i$, the $dq,dp$ terms vanishing because $\partial_{t}$ is annihilated by $dq^{j},dp_{j}$. [F1, F2, algebra]

3.1 Equivalence: if $z$ satisfies Hamilton's equations, then step 2.1 gives $\sigma(v,\partial_{q^{i}})=0$, $\sigma(v,\partial_{p_{i}})=0$ and $\sigma(v,\partial_{t})=0$, so the covector vanishes on the whole basis and (2) holds; conversely if (2) holds, then $\sigma(v,\partial_{q^{i}})=0$ and $\sigma(v,\partial_{p_{i}})=0$ give $\dot p_{i}=-H_{q^{i}}$ and $\dot q^{i}=H_{p_{i}}$ for every $i$ and $t$, which is (1). [step 2.1, algebra]

4.1 Collecting step 1.1, step 2.1 and step 3.1 proves the two-form identity, the component computations and the equivalence. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Sign conventions.** The two-form is
  $\sigma=\sum_{i}dp_{i}\wedge dq_{i}-dH\wedge dt$, the exterior derivative of
  the Poincare-Cartan one-form $\sum_{i}p_{i}dq^{i}-H\,dt$; the component
  signs above match the convention in which the one-form is the phase-space
  action integrand, as in the cited treatments. No symplectic form $\omega$
  is used in the statement or the proof, so this lemma is independent of the
  sign convention $\iota_{X}\omega=dH$.
