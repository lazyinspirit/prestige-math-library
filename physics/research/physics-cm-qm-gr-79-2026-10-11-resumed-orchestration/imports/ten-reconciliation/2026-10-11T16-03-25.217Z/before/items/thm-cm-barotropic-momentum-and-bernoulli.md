---
id: thm-cm-barotropic-momentum-and-bernoulli
kind: theorem
title: "Barotropic inviscid momentum in gradient form, Bernoulli along streamlines and the irrotational constant"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-fluid-constitutive-models, def-cm-euclidean-spatial-calculus, thm-cm-local-momentum-balance, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, cor-zero-total-derivative-on-a-convex-open-set-is-constant, def-metric-ball, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-trace-of-a-square-matrix, thm-ftc-second-part, def-oriented-integral, def-derivative, def-interval]
dependency_roles:
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-local-momentum-balance: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
  def-metric-ball: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 12.1 and Problems 12.12 and 12.17 (Bernoulli's theorem for incompressible and compressible inviscid flow)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.4 (ideal fluids and the Bernoulli equation, Eq. (8.27))"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval and $O\subseteq\mathbb R^3$ open. Let $u:I\times O\to\mathbb R^3$ and $\rho:I\times O\to(0,\infty)$ be $C^1$, let $p:(0,\infty)\to\mathbb R$ be $C^1$ with enthalpy $h(\rho_0)=\int_1^{\rho_0}p'(s)/s\,ds$, and let $V:I\times O\to\mathbb R$ be $C^1$ ([[def-cm-fluid-constitutive-models]]). Write $\sigma:=-p(\rho)I_3$ and suppose that, on $I\times O$,

$$\partial_t\rho+\operatorname{div}(\rho u)=0 \qquad\text{and}\qquad \rho\,D_tu=\rho\,(-\nabla V)+g,\qquad g_i:=\sum_j\partial_j\sigma_{ij} . \tag{M}$$

(The local equation (M) is the conclusion of [[thm-cm-local-momentum-balance]] under its integral balance and continuity hypotheses; here it is the adopted local form of the barotropic inviscid model.)

**(i)** On $I\times O$,

$$D_tu=-\nabla\bigl(h(\rho)+V\bigr).$$

**(ii)** Suppose in addition that the flow is **steady**: $\partial_tu=0$, $\partial_t\rho=0$ and $\partial_tV=0$ on $I\times O$. If $\gamma:J\to O$ is a $C^1$ curve on a nonempty open interval $J\subseteq I$ with $\gamma'=u(\gamma)$, then

$$\frac{d}{dt}\Bigl(h(\rho)+V+\tfrac12|u|_2^2\Bigr)\bigl(t,\gamma(t)\bigr)=0 ,$$

equivalently $u\cdot\nabla\bigl(h(\rho)+V+\tfrac12|u|_2^2\bigr)=0$ on $I\times O$: the quantity is constant along every streamline.

**(iii)** If in addition the velocity gradient $Du(t,x)$ is symmetric at every $(t,x)$ (irrotational branch in the standard coordinates), then

$$\nabla\Bigl(h(\rho)+V+\tfrac12|u|_2^2\Bigr)=0\qquad\text{on }I\times O,$$

so the quantity is constant on every Euclidean ball contained in $I\times O$ (and hence on each connected component when the domain is connected).

## Facts & Assumptions

**Given:** The fields $u,\rho,p,V$; equation (M); in (ii) steadiness; in (iii) symmetry of $Du$.

[F1] The divergence of $\sigma=-p(\rho)I_3$ is $g_i=-\partial_ip(\rho)$: since $\sigma_{ij}=-p(\rho)\delta_{ij}$, $\sum_j\partial_j\sigma_{ij}=-\partial_ip(\rho)$ ([[def-cm-fluid-constitutive-models]], [[def-matrix-product-and-identity-matrix]]).

[F2] Chain rule for the composition $h\circ\rho$ and product rule identities: $\nabla(h(\rho))=h'(\rho)\nabla\rho=(p'(\rho)/\rho)\nabla\rho$, and $u\cdot(Du\,u)=\tfrac12u\cdot\nabla(|u|_2^2)$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-euclidean-inner-product]]).

[F3] If $Du$ is symmetric, then $Du\,u=\nabla\bigl(\tfrac12|u|_2^2\bigr)$: $(Du\,u)_i=\sum_j\partial_ju_i\,u_j=\sum_j\partial_iu_j\,u_j=\partial_i\tfrac12\sum_ju_j^2$ ([[def-cm-euclidean-spatial-calculus]], [[def-euclidean-inner-product]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[F4] A $C^1$ curve with $\gamma'=u(\gamma)$ differentiates a $C^1$ scalar field $\varphi$ by $\frac{d}{dt}\varphi(t,\gamma(t))=\partial_t\varphi(t,\gamma(t))+\nabla\varphi(t,\gamma(t))\cdot\gamma'(t)$ ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-derivative]]).

## Proof

**Proof technique:** direct; divide the momentum equation by the positive density, recognize the enthalpy gradient, and project along streamlines.

1.1 By [F1], (M) reads componentwise $\rho(D_tu)_i=-\rho\partial_iV-\partial_ip(\rho)$. Dividing by $\rho>0$ and using [F2], $$(D_tu)_i=-\partial_iV-\frac{p'(\rho)}{\rho}\partial_i\rho=-\partial_iV-\partial_i\bigl(h(\rho)\bigr),$$ because $h'(\rho)=p'(\rho)/\rho$. This is (i). [given, F1, F2, algebra]

2.1 By (i) and [F2], $u\cdot\nabla(h(\rho)+V)=-u\cdot D_tu=-u\cdot\partial_tu-\tfrac12u\cdot\nabla(|u|_2^2)$. Under steadiness $\partial_tu=0$, so $$u\cdot\nabla\Bigl(h(\rho)+V+\tfrac12|u|_2^2\Bigr)=0 .$$ [step 1.1, F2, given, algebra]

3.1 For the streamline $\gamma$, [F4] gives $\frac{d}{dt}Q(t,\gamma(t))=\partial_tQ+u\cdot\nabla Q$ with $Q:=h(\rho)+V+\tfrac12|u|_2^2$; by [F2] and steadiness, $\partial_tQ=h'(\rho)\partial_t\rho+\partial_tV+u\cdot\partial_tu=0$. Step 2.1 makes the spatial term vanish, so the derivative is $0$. This is (ii). [step 2.1, F2, F4, given, algebra]

4.1 Under the symmetry hypothesis, [F3] gives $D_tu=\partial_tu+\nabla(\tfrac12|u|_2^2)$; with $\partial_tu=0$ and (i), $$\nabla\Bigl(h(\rho)+V+\tfrac12|u|_2^2\Bigr)=\nabla(h(\rho)+V)+\nabla\bigl(\tfrac12|u|_2^2\bigr)=-D_tu+D_tu=0 .$$ A function with zero total derivative on a convex open set is constant ([[cor-zero-total-derivative-on-a-convex-open-set-is-constant]]); every Euclidean ball in $\mathbb R\times\mathbb R^3$ is convex ([[def-metric-ball]], [[def-euclidean-inner-product]]), so the quantity is constant on every ball contained in $I\times O$. This is (iii). [step 1.1, F3, given, algebra] ∎

## Remarks

- The hypotheses of (ii) and (iii) are part of the statement: a time-dependent, sheared barotropic flow need not satisfy Bernoulli along streamlines, and $Du$ symmetric is a genuine restriction equivalent, in these coordinates, to the vanishing of the curl of $u$ (a term not otherwise defined in this collection). No global constant is asserted in (ii): different streamlines may carry different constants.

- Only the stated smoothness and the local equation (M) are used. The physical reading — an inviscid barotropic fluid with conservative body force — is the model branch of [[def-cm-fluid-constitutive-models]]; the theorem itself is a conditional consequence of (M).
