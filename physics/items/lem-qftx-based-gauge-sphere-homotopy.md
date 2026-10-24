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
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - lem-qftx-parametric-gauge-smoothing
  - lem-qftx-sphere-gauge-evaluation-fibration
  - prop-loop-suspension-adjunction-on-based-homotopy-classes
  - cor-higher-homotopy-groups-are-iterated-loop-components
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - def-axiom-of-choice
dependency_roles:
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
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

Let $P\to S^r$ be any smooth principal $SU(N)$ bundle, where $r=3$ or $4$ and $N\ge2$. Fix a point $m\in S^r$ and a frame $p_m\in P_m$. Write $\mathcal G_{\infty,m}(P)=\{u\in\mathcal G_\infty(P):u(p_m)=e\}$ for the based subgroup of the smooth gauge group defined by finite-atlas $C^\infty$ derivative seminorms; for brevity put $\mathcal G_m(P):=\mathcal G_{\infty,m}(P)$. For every $j\ge1$ there is a group isomorphism
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

[F7] The smooth principal bundle has equivariant product charts $P|_{U_i}\cong U_i\times SU(N)$ over an open cover. [[def-qftx-nonabelian-gauge-data]]

[F8] Under AC every such cover admits a smooth subordinate partition of unity, with supports contained in the corresponding open sets. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]

[F9] A smooth $\mathfrak{su}(N)$-valued one-form is a principal connection form when it reproduces fundamental vertical vectors and is right equivariant. [[def-qftx-principal-connection-form]]

[F5] The homotopy LES applies to the restriction fibration used below. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[A1] Choose hemisphere trivializations with transition function $\psi:S^{r-1}\to SU(N)$ and convention $f_+(q)=\psi(q)f_-(q)\psi(q)^{-1}$ on the equator. Put $m$ at the center of the upper disk. Write $\mathcal G_{\infty,m}$ for the smooth subgroup from [F1].

## Proof

1.1 By [F1], the gauge group under consideration consists of smooth sections with value $e$ at $p_m$, and [F3] identifies this subgroup with the evaluation fiber and its subspace topology. First calculate its continuous-section model, which is related by [F2]. Choose a finite trivializing cover $(U_i)$ of compact $S^r$. In each equivariant chart $P|_{U_i}\cong U_i\times SU(N)$, set $\omega_i(v,W)=g^{-1}W$ for a tangent vector $(v,W)$ at $(x,g)$. Direct calculation gives $\omega_i(X_P)=X$ and $R_h^*\omega_i=\operatorname{Ad}_{h^{-1}}\omega_i$. By [F8] choose a subordinate partition $(\rho_i)$ and extend $(\rho_i\circ\pi)\omega_i$ by zero outside $P|_{U_i}$. Their finite sum $A_0=\sum_i(\rho_i\circ\pi)\omega_i$ is smooth, right equivariant, and reproduces vertical vectors because $\sum_i\rho_i=1$; [F9] makes it a smooth principal connection. Choose hemisphere frames with the upper frame equal to $p_m$ and transport them radially using $A_0$. The ODE statement [F6] gives smooth sections up to the equator, including the disk centers, and hence the smooth transition $\psi$ in [A1]. In that model a based section is a pair of maps $f_+:D_+^r\to SU(N)$ and $f_-:D_-^r\to SU(N)$ satisfying [A1] and $f_+(m)=e$. Let $J=\operatorname{Map}_*((D_+^r,m),(SU(N),e))$. For $f\in J$ define a map on the lower disk by
$$\sigma_f(\rho q)=\psi(q)^{-1}f(\rho q)\psi(q),\quad 0<\rho\le1,\qquad \sigma_f(0)=e,$$
where $q\in S^{r-1}$ is the radial direction and the upper-disk center $m$ is identified with $0$. At $\rho=1$ this has boundary value $\psi^{-1}f(q)\psi$, and as $\rho\to0$ it tends uniformly to $e$ because $f(0)=e$ and $S^{r-1}$ is compact; hence it is continuous on $D_-^r$. [A1, F1, F2, F3, F6, F7, F8, F9, given, construct]

2.1 For each compatible pair $(f_+,f_-)$, the product $v=\sigma_{f_+}^{-1}f_-$ is the identity on $\partial D_-^r$, so it descends continuously to a based map $D_-^r/\partial D_-^r\cong S^r\to SU(N)$. Conversely, given $f\in J$ and such a based map $v$, the pair $(f,\sigma_f v)$ satisfies the clutching condition. On maps from a compact disk to the metric space $SU(N)$, the compact-open topology is the uniform topology. Unitary conjugation preserves the Hilbert--Schmidt metric, so $\|\sigma_f-\sigma_g\|_\infty\le\|f-g\|_\infty$ for $f,g\in J$; at the disk center both extensions equal $e$. Thus $f\mapsto\sigma_f$ is continuous. Restrictions, multiplication, inversion, and finite pasting are continuous in the same topologies, so both assignments are continuous and inverse. Hence the continuous based section space is homeomorphic to $J\times\operatorname{Map}_*(S^r,SU(N))$. [A1, step 1.1, construct, given]

3.1 The space $J$ is contractible by $f_t(x)=f((1-t)x)$, which keeps the center value $e$. Hence projection of the product in step 2.1 onto $\operatorname{Map}_*(S^r,SU(N))$ induces a bijection on components and isomorphisms on all homotopy groups. Equivalently, the restriction to the upper disk is a trivial fibration with contractible base $J$; [F5] gives the same conclusion from its exact sequence. [step 2.1, F5, construct]

4.1 By [F4], the homotopy groups of $\operatorname{Map}_*(S^r,SU(N))$ are $\pi_{j+r}(SU(N))$ for $j\ge1$, and its pointed components are based homotopy classes $[S^r,SU(N)]_*=\pi_r(SU(N))$. Finally [F2] transfers these continuous-section identifications to the smooth based gauge group. [F2, F4, step 3.1, given] ∎

