---
id: pthm-em-vacuum-wave-equation
kind: physics-theorem
title: "Source-free vacuum Maxwell fields satisfy the wave equation"
status: draft
origin: pipeline
domain: physics
dependency_level: 14
deps: [post-em-vacuum-maxwell,
       def-em-fields,
       def-em-sources,
       def-em-lab-geometry,
       def-em-si-conventions,
       cor-the-curl-of-a-curl-of-a-c2-field,
       def-divergence-and-curl-of-a-c1-vector-field,
       def-laplacian-of-a-c2-function,
       def-directional-and-partial-derivatives,
       thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  post-em-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about source-free regions of the smooth branch of the adopted vacuum Maxwell postulate, for jointly $C^2$ fields on a named inertial chart with SI constants. Excluded: the weak branch, singular sources, regions with surface sources, any converse from wave equations to Maxwell, and any decay or finite-energy hypothesis. No empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§4.3 pp. 82-84 (derivation of $\\partial_t^2E=c^2\\nabla^2E$ from the two curl equations with the curl-curl identity and $\\nabla\\cdot E=0$; $c=1/\\sqrt{\\mu_0\\epsilon_0}$)"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§9.2.1 printed pp. 375-376 (decoupling Maxwell in source-free regions to the two vector wave equations with speed $v=1/\\sqrt{\\mu_0\\epsilon_0}=c$)"
proof_strategy: direct
---

## Statement

Assume the smooth branch of the vacuum Maxwell postulate
[[post-em-vacuum-maxwell]] on the laboratory region $U\cong I\times\Omega$ of
[[def-em-lab-geometry]], with the constants of [[def-em-si-conventions]] and
$\varepsilon_0=(\mu_0c^2)^{-1}$, the divergence and curl of
[[def-divergence-and-curl-of-a-c1-vector-field]], the partial derivatives of
[[def-directional-and-partial-derivatives]] and the Laplacian $\Delta$ of
[[def-laplacian-of-a-c2-function]]. Let $E,B:\Omega\times I\to\mathbb R^3$ be
jointly $C^2$ fields of [[def-em-fields]], let $(\rho,J)$ be the source fields
of [[def-em-sources]], and let $W\subseteq\Omega\times I$ be open with
$\rho=0$ and $J=0$ on $W$ (a source-free region). Then on $W$, componentwise,

$$\Delta E=c^{-2}\partial_t^2E,\qquad \Delta B=c^{-2}\partial_t^2B;$$

equivalently each of the six Cartesian components of $E$ and of $B$ satisfies
the scalar wave equation $c^{-2}\partial_t^2v=\Delta v$ of speed $c$ on $W$.

(a) [Hypotheses actually used] The derivation differentiates the Faraday and
Ampère equations in time, commutes the time derivative with
$\operatorname{curl}$ (Clairaut's theorem, available for jointly $C^2$ fields),
uses the curl-curl identity of [[cor-the-curl-of-a-curl-of-a-c2-field]], and
uses the two Gauss equations $\operatorname{div}E=0$,
$\operatorname{div}B=0$ on $W$. The two evolution equations alone are not
sufficient for the conclusion without the constraint equations.

(b) [One-directional] No converse is asserted. The two vector wave equations do
not imply the four source-free Maxwell equations: the constraints
$\operatorname{div}E=\operatorname{div}B=0$ and the two curl relations are not
recovered, and solutions of the six uncoupled scalar wave equations need not
lie in a source-free smooth Maxwell branch. The correctly constrained
initial-value problem is a separate result on this page.

(c) [Scope] Only the smooth branch is covered. No decay, boundedness, compact
support, finite-energy or boundary hypothesis is imposed or needed; the
conclusion is local on $W$, asserts no value of any field or derivative at a
point of singular source support, and does not cover the weak branch of
[[post-em-vacuum-maxwell]]. The result is conditional on the adopted postulates
and makes no empirical claim.

## Facts & Assumptions

**Given:** The laboratory region $U\cong I\times\Omega$ and its frame, the open set $W\subseteq\Omega\times I$ on which $\rho=0$ and $J=0$, the jointly $C^2$ fields $E,B$ and continuous sources $\rho,J$, the four smooth-branch equations of the postulate on $U$, and the constants with $\varepsilon_0=(\mu_0c^2)^{-1}$.

[F1] The fields are jointly $C^2$ on $\Omega\times I$ in the class sense of [[def-em-fields]], so at every fixed $t\in I$ the maps $E(\cdot,t),B(\cdot,t):\Omega\to\mathbb R^3$ are $C^2$ spatial vector fields read in the frame basis $(e_1,e_2,e_3)$ of [[def-em-lab-geometry]], and all second partial derivatives including the mixed time-space ones exist and are continuous.

[F2] On $U$ the smooth branch of the postulate holds: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with $\rho,J$ the fields of [[def-em-sources]] and $\partial_t$ taken at fixed position ([[post-em-vacuum-maxwell]], [[def-directional-and-partial-derivatives]]); on the open subset $W$ one has $\rho=0$ and $J=0$, so there $\operatorname{div}E=0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$ and $\operatorname{curl}B=c^{-2}\partial_tE$.

[F3] The operators are those of [[def-divergence-and-curl-of-a-c1-vector-field]] and the Laplacian is that of [[def-laplacian-of-a-c2-function]]; for a $C^2$ field $F$ on an open subset of $\mathbb R^3$ the curl-curl identity $\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F$ holds, with $\Delta F$ componentwise ([[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F4] For a jointly $C^2$ field the mixed partial derivatives commute: $\partial_t\partial_iF_j=\partial_i\partial_tF_j$ for every spatial index $i$ and component $j$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F5] The constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$ and hence $c^2=(\varepsilon_0\mu_0)^{-1}$ ([[def-em-si-conventions]]).

## Proof

1.1 On $W$ the source terms vanish, so the Faraday and Ampère equations become $\partial_tB=-\operatorname{curl}E$ and $\partial_tE=c^2\operatorname{curl}B$, the second obtained from $\operatorname{curl}B=c^{-2}\partial_tE$ by multiplying by $c^2$; both displays hold pointwise on $W$, and each side is a continuous combination of first partial derivatives of $E,B$, and is therefore $C^1$ because $E,B$ are jointly $C^2$ there. [F1, F2, F5, given]

1.2 The conclusion is local on the open set $W$ and uses only the smooth branch: no decay, boundedness, compact-support, finite-energy or boundary hypothesis was imposed or needed, the weak branch and singular source support are excluded, and no empirical or existence claim is made. [F2, given]

2.1 Differentiating the two displays of step 1.1 in time gives $\partial_t^2E=c^2\partial_t(\operatorname{curl}B)$ and $\partial_t^2B=-\partial_t(\operatorname{curl}E)$ on $W$; by step 1.1's differentiability and [F4] the time derivative commutes with every spatial partial derivative, so $\partial_t(\operatorname{curl}B)=\operatorname{curl}(\partial_tB)$ and $\partial_t(\operatorname{curl}E)=\operatorname{curl}(\partial_tE)$; substituting the displays of step 1.1 yields $\partial_t^2E=c^2\operatorname{curl}(\partial_tB)=-c^2\operatorname{curl}\operatorname{curl}E$ and $\partial_t^2B=-\operatorname{curl}(\partial_tE)=-c^2\operatorname{curl}\operatorname{curl}B$ on $W$. [step 1.1, F1, F4, algebra]

3.1 Fix $(x,t)\in W$; by [F1] the spatial field $E(\cdot,t)$ is $C^2$ on the open set $\Omega$, so [F3] gives $\operatorname{curl}\operatorname{curl}E=\nabla\operatorname{div}E-\Delta E$ at $(x,t)$, and the Gauss equation $\operatorname{div}E=0$ of [F2] on $W$ turns this into $\operatorname{curl}\operatorname{curl}E=-\Delta E$; the identical computation with $B$ gives $\operatorname{curl}\operatorname{curl}B=-\Delta B$. Substituting these into step 2.1 gives $\partial_t^2E=c^2\Delta E$ and $\partial_t^2B=c^2\Delta B$ on $W$, that is $\Delta E=c^{-2}\partial_t^2E$ and $\Delta B=c^{-2}\partial_t^2B$ componentwise: each component $v$ of $E$ or of $B$ satisfies $c^{-2}\partial_t^2v=\Delta v$ on $W$. [step 2.1, F1, F2, F3, algebra]

4.1 The derivation used both Gauss constraints through step 3.1; without $\operatorname{div}E=\operatorname{div}B=0$ one obtains only the curl-curl forms of step 2.1. No converse holds: on $W=\mathbb R^3\times\mathbb R$ the time-independent field $E(x)=(x_1,0,0)$, $B=0$ is $C^\infty$, is affine in $x_1$ so that $\Delta E=0$ and $\partial_t^2E=0$, and therefore satisfies both vector wave equations, while $\operatorname{div}E=1$ violates the constraint $\operatorname{div}E=\rho/\varepsilon_0$ with $\rho=0$; hence it lies in no source-free smooth Maxwell branch and the wave equations do not imply the four Maxwell equations. [step 3.1, F1, F2, F3, given, algebra]

5.1 Steps 1.1, 2.1, 3.1 and 4.1 derive the two displayed vector wave equations on $W$ from the four smooth-branch equations with vanishing sources, record the hypotheses actually used (time differentiation, Clairaut commutation, the curl-curl identity and the two Gauss constraints), and exhibit a witness showing that the implication is one-directional; step 1.2 records the scope. [step 3.1, step 4.1, step 1.2, given] ∎

## Source notes

The cited treatments derive the source-free vacuum wave equation by exactly this route: differentiate the two evolution equations, commute derivatives, apply the curl-curl identity and use $\operatorname{div}E=\operatorname{div}B=0$ in the source-free region. The textbook statements are the motivation for the claim; the deduction above uses only the imported divergence, curl, Laplacian, Clairaut and curl-curl interfaces together with the adopted smooth-branch postulate. The one-directional warning is the standard observation that solutions of the wave equation need not satisfy the constraints.
