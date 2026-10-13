---
id: cex-cm14-free-particle-noncompact-fibre
kind: counterexample
title: "A free label: a nonempty regular common level set of a completely
  integrable datum that is noncompact and has no period lattice"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps:
  [
    def-cm14-complete-integrability,
    def-cm14-involution,
    pthm-cm14-regular-tori,
    def-cm12-hamiltonian,
    pthm-cm12-mechanical-hyperregularity,
    def-cm12-cotangent-momentum,
    def-cm13-hamiltonian-field,
    pthm-cm13-hamiltonian-field-integrates-the-model-equations,
    def-cm07-action-and-mechanical-lagrangian,
    def-cm03-potential-and-mechanical-energy,
    post-cm02-force-superposition,
    def-cm02-newtonian-flow,
    def-cm01-configuration,
    def-cm01-units,
    thm-extreme-value-metric,
    def-compact-space,
    def-continuity-real,
    def-euclidean-inner-product,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-linear-independence,
    def-differential-rank-and-constant-rank,
    def-metric-topology,
    def-interval,
    pthm-cm14-action-angle
  ]
dependency_roles:
  def-cm14-complete-integrability: formulation-prerequisite
  def-cm14-involution: formulation-prerequisite
  pthm-cm14-regular-tori: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-extreme-value-metric: mathematical-premise
  def-compact-space: mathematical-premise
  def-continuity-real: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-linear-independence: mathematical-premise
  def-differential-rank-and-constant-rank: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
  pthm-cm14-action-angle: physical-result
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample in the autonomous zero-force one-label
  presentation on R6: the smooth three-integral datum F=(H,p1,p2) on p3>0 has
  connected regular fibres diffeomorphic to R3, hence noncompact. Its commuting
  R3 action has trivial stabilizer, so no full period lattice exists, and the
  physical Hamiltonian flow has no nonzero period. This is declared model data,
  with no measured value or apparatus claim."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January
        2006), Lecture 18, Theorem 18.12, pp. 110-111: the torus and
        period-lattice conclusions for compact connected regular fibres"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:\
        80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry (University of Toronto lecture
        notes), Chapter 6, Propositions 6.10-6.11, pp. 68-69: the full-lattice
        stabilizer conclusion and its compactness hypothesis"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.c\
        a/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 1.2, printed pages 3-4 (PDF pages 9-10): the
        statement that in an inertial frame a free particle travels in a
        straight line $r=r_0+vt$, and the conservation of momentum when the
        force vanishes"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---
## Statement refuted

In a completely integrable datum of a presentation of the framework's force
branch, **every nonempty regular common level set of the integral map is
compact, and along it the datum's Hamiltonian flow is periodic with a full
lattice of periods.**

## Facts & Assumptions

**Given:** The one-label model of [[post-cm02-force-superposition]] with the
zero force map, presented by the potential $U\equiv0$ and $d\equiv0$
([[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]): configuration domain
$Q=\mathbb R^{3}$, time window $\mathbb R$, mass $m>0$ and no interactions.
Its presentation is hyperregular with the Cartesian phase domain
$W=\mathbb R^{6}$ and branch Hamiltonian
$H(x,p)=\lvert p\rvert^{2}/(2m)$ ([[pthm-cm12-mechanical-hyperregularity]],
[[def-cm12-hamiltonian]], [[def-cm12-cotangent-momentum]],
[[def-euclidean-inner-product]]).

[L1] Datum and fields ([[def-cm14-complete-integrability]],
[[def-cm14-involution]], [[def-cm13-hamiltonian-field]]): on the open
phase domain $W_0=\{(x,p)\in\mathbb R^6:p_3>0\}$ take
$F=(H,p_1,p_2)$. All three functions are smooth and depend only on $p$,
so their pairwise brackets vanish. Their momentum derivatives are the
rows $p/m$, $(1,0,0)$ and $(0,1,0)$, with determinant $p_3/m>0$.
Thus the regular locus is all of $W_0$. The fields are
$X_H=(p/m,0)$, $X_{p_1}=(e_1,0)$ and $X_{p_2}=(e_2,0)$.

[L2] Regular fibres: for $c_1,c_2\in\mathbb R$ and
$E>(c_1^2+c_2^2)/(2m)$ set
$\rho=\sqrt{2mE-c_1^2-c_2^2}>0$ and $p_*=(c_1,c_2,\rho)$.
The common fibre of $F$ at $(E,c_1,c_2)$ is exactly
$N=\mathbb R^3\times\{p_*\}$. It is nonempty, connected and regular
at every point, and the projection to $x$ is a smooth diffeomorphism to
$\mathbb R^3$.

[L3] Compactness and continuity ([[def-compact-space]],
[[thm-extreme-value-metric]], [[def-continuity-real]],
[[def-metric-topology]]): a continuous real function on a compact metric
space attains its maximum; the coordinate function
$(x,p)\mapsto x_{1}$ on $W$ is continuous.

[L4] The torus and lattice conclusion ([[pthm-cm14-regular-tori]]
clauses 2 and 3): compactness of the fibre is a hypothesis there for the
completeness of the restricted fields, for the full period lattice and for
the torus identification; the item asserts no conclusion for a
noncompact level set.

## Counterexample

1.1 By [L1], $F=(H,p_1,p_2)$ is a completely integrable datum with $n=3$ on the six-dimensional domain $W_0$. By [L2], $N=F^{-1}(E,c_1,c_2)$ is a nonempty connected regular common fibre. [L1, L2, given]

1.2 Use fixed SI numerical coordinates for the physical quantities, as in [[def-cm01-units]]. Give the flow parameters the dimensions $[a]=\tau$ and $[b]=[c]=\ell$: $a$ is the Hamiltonian time parameter, while $b,c$ are position-translation parameters for the momentum integrals. With these units each summand in the displacement has length dimension. On $N$ the commuting fields have the globally defined joint action $\Psi^{(a,b,c)}(x,p_*)=(x+a p_*/m+b e_1+c e_2,p_*)$. In these fixed numerical units the translation matrix has determinant $\rho/m>0$, so it is transitive and its stabilizer is $\{0\}$ at every point. There is therefore no full rank-three period lattice. In particular the physical Hamiltonian flow $\Phi^t(x,p_*)=(x+t p_*/m,p_*)$ has no nonzero period since $p_*\ne0$. [L1, L2, algebra]

2.1 The continuous coordinate $x_1$ takes every real value on $N$, at points $((c,0,0),p_*)$. If $N$ were compact, [L3] would make this coordinate bounded. Thus $N$ is noncompact. [L3, step 1.1]

3.1 The compactness hypothesis in [L4] fails, while connectedness and regularity hold. Thus the qualified torus and action-angle conclusions remain consistent, and the refuted conclusion without compactness fails inside the declared free model. [L4, step 1.1, step 2.1, step 1.2] ∎

## Remarks

- **What is refuted.** Only the version of the fibre claims without the
  compactness hypothesis. The qualified theorem
  [[pthm-cm14-regular-tori]] keeps that hypothesis, and its conclusion
  that compact connected regular fibres are tori remains untouched.

- **The model reading.** The free presentation is a legitimate model of
  the force branch with zero force; the counterexample is a statement
  about that declared model and carries no measured value and no claim
  about any apparatus.
