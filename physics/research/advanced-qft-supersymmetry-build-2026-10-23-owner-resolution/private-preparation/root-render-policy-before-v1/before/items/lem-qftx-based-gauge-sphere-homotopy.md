---
id: lem-qftx-based-gauge-sphere-homotopy
kind: lemma
title: "Based gauge-group homotopy via hemisphere clutching"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-parametric-gauge-smoothing
  - lem-qftx-sphere-gauge-evaluation-fibration
  - prop-loop-suspension-adjunction-on-based-homotopy-classes
  - cor-higher-homotopy-groups-are-iterated-loop-components
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - def-axiom-of-choice
dependency_roles:
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-parametric-gauge-smoothing: mathematical-premise
  lem-qftx-sphere-gauge-evaluation-fibration: mathematical-premise
  prop-loop-suspension-adjunction-on-based-homotopy-classes: mathematical-premise
  cor-higher-homotopy-groups-are-iterated-loop-components: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; fibration and homotopy sequence framework."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; sphere maps, clutching and homotopy background."
verification:
  precheck: pending
---
## Statement

Let $P\to S^r$ be any smooth principal $SU(N)$ bundle, where $r=3$ or $4$ and $N\ge2$. Fix a frame over a point $m$ and write $\mathcal G_{\infty,m}(P)=\{u\in\mathcal G_\infty(P):u(p_m)=e\}$ for the based subgroup of the smooth gauge group defined by finite-atlas $C^\infty$ derivative seminorms; for brevity put $\mathcal G_m(P):=\mathcal G_{\infty,m}(P)$. For every $j\ge1$ there is a group isomorphism
$$\pi_j(\mathcal G_m(P),e)\cong\pi_{j+r}(SU(N),e),$$
and there is a bijection of pointed component sets $\pi_0(\mathcal G_m(P),e)\cong\pi_r(SU(N),e)$. These identifications are independent of the clutching class of $P$; the unbased evaluation fibration may still depend on that class.

## Statement references

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** A smooth bundle over $S^r$, its chosen clutching function, its smooth based gauge group, and the finite-dimensional parameter groups in the Statement. The actual configuration carrier has a current hash-bound Step 1 `ready` record; this is authoring readiness only.

[F1] The actual configuration definition fixes the compact connected oriented boundaryless Riemannian base, $d\in\{3,4\}$, $P$, the frame $p_m$, the adjoint group bundle, the smooth gauge group $\mathcal G_\infty$ with finite-atlas $C^\infty$ section topology, and the based condition $u(p_m)=e$; it also defines the Sobolev group $\mathcal G_{k+1,m}$ and quotient topologies. The carrier exists and its full Definition was inspected, but the current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] Smooth based gauge sections and continuous based sections have the same finite sphere/disk parameter homotopy classes by relative parametric smoothing. [[lem-qftx-parametric-gauge-smoothing]]

[F3] The based smooth gauge group is the fiber of evaluation at $m$ with its subspace topology. [[lem-qftx-sphere-gauge-evaluation-fibration]]

[F4] Loop-suspension adjunction identifies $\pi_j\operatorname{Map}_*(S^r,G)$ with $\pi_{j+r}(G)$, and the iterated-loop description uses the constant map as basepoint. [[prop-loop-suspension-adjunction-on-based-homotopy-classes]], [[cor-higher-homotopy-groups-are-iterated-loop-components]]

[F6] Parallel transport along a smoothly parametrized compact family of radial paths depends smoothly on the endpoint and frame, by the smooth parameter ODE theorem applied on finitely many common intervals. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F5] The homotopy LES applies to the restriction fibration used below. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[A1] Choose a clutching function $\psi:S^{r-1}\to SU(N)$ and hemisphere trivializations with transition convention $f_+(q)=\psi(q)f_-(q)\psi(q)^{-1}$ on the equator. Put $m$ at the center of the upper disk. Write $\mathcal G_{\infty,m}$ for the smooth subgroup from [F1].

## Proof

1.1 By [F1], the gauge group under consideration consists of smooth sections with value $e$ at $p_m$, and [F3] identifies this subgroup with the evaluation fiber and its subspace topology. First calculate its continuous-section model, which is related by [F2]. Hemisphere trivializations exist directly from the supplied smooth reference connection: choose a frame at the center of each closed disk and transport it along its radial segments. The ODE statement [F6] gives a smooth section up to the equator, including the disk center, and the two sections give the smooth transition $\psi$ in [A1]. In that model a based section is a pair of maps $f_+:D_+^r\to SU(N)$ and $f_-:D_-^r\to SU(N)$ satisfying [A1] and $f_+(m)=e$. Let $J=\operatorname{Map}_*((D_+^r,m),(SU(N),e))$. For $f\in J$ define a map on the lower disk by
$$\sigma_f(\rho q)=\psi(q)^{-1}f(\rho q)\psi(q),\quad 0<\rho\le1,\qquad \sigma_f(0)=e,$$
where $q\in S^{r-1}$ is the radial direction and the upper-disk center $m$ is identified with $0$. At $\rho=1$ this has boundary value $\psi^{-1}f(q)\psi$, and as $\rho\to0$ it tends uniformly to $e$ because $f(0)=e$ and $S^{r-1}$ is compact; hence it is continuous on $D_-^r$. [A1, F1, F2, F3, F6, construct]

2.1 For each compatible pair $(f_+,f_-)$, the product $v=\sigma_{f_+}^{-1}f_-$ is the identity on $\partial D_-^r$, so it descends continuously to a based map $D_-^r/\partial D_-^r\cong S^r\to SU(N)$. Conversely, given $f\in J$ and such a based map $v$, the pair $(f,\sigma_f v)$ satisfies the clutching condition. Both assignments are continuous for compact-open topologies (they are restrictions, finite pastings on closed hemispheres, and multiplication of continuous matrix-valued families), and are inverse. Thus the continuous based section space is homeomorphic to $J\times\operatorname{Map}_*(S^r,SU(N))$. [A1, step 1.1, construct, given]

3.1 The space $J$ is contractible by $f_t(x)=f((1-t)x)$, which keeps the center value $e$. Hence projection of the product in step 2.1 onto $\operatorname{Map}_*(S^r,SU(N))$ induces a bijection on components and isomorphisms on all homotopy groups. Equivalently, the restriction to the upper disk is a trivial fibration with contractible base $J$; [F5] gives the same conclusion from its exact sequence. [step 2.1, F5, construct]

4.1 By [F4], the homotopy groups of $\operatorname{Map}_*(S^r,SU(N))$ are $\pi_{j+r}(SU(N))$ for $j\ge1$, and its pointed components are based homotopy classes $[S^r,SU(N)]_*=\pi_r(SU(N))$. Finally [F2] transfers these continuous-section identifications to the smooth based gauge group. [F2, F4, step 3.1, given] ∎

