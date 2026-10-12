---
id: cex-cm14-free-particle-noncompact-fibre
kind: counterexample
title: "A free label: a nonempty regular common level set of a completely integrable datum that is noncompact and has no period lattice"
status: draft
origin: pipeline
domain: physics
dependency_level: 27
deps: [def-cm14-complete-integrability, def-cm14-involution, pthm-cm14-regular-tori, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm12-cotangent-momentum, def-cm13-hamiltonian-field, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, thm-extreme-value-metric, def-compact-space, def-continuity-real, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-linear-independence, def-differential-rank-and-constant-rank, def-metric-topology, def-interval, pthm-cm14-action-angle]
dependency_roles:
  pthm-cm14-action-angle: physical-result
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
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the zero-force potential presentation of the framework's force branch: the one-label free datum $(H)$ with $H=|p|^2/(2m)$ on the Cartesian phase domain is a completely integrable datum, and its positive-energy common level set is a nonempty regular level set that is unbounded, hence noncompact, and on which the Hamiltonian flow is free with trivial stabilizer, so no nonzero period and no full period lattice exist. The item asserts no measured value and no claim about any apparatus; it shows that compactness cannot be dropped from the torus and period-lattice conclusions."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January 2006), Lecture 18, Theorem 18.12, pp. 110-111: the torus and period-lattice conclusions for compact connected regular fibres"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry (University of Toronto lecture notes), Chapter 6, Propositions 6.10-6.11, pp. 68-69: the full-lattice stabilizer conclusion and its compactness hypothesis"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 3-4 (PDF pages 9-10): the statement that in an inertial frame a free particle travels in a straight line $r=r_0+vt$, and the conservation of momentum when the force vanishes"
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
[[def-cm14-involution]], [[def-cm13-hamiltonian-field]]): $H$ is
$C^{\infty}$, its differential is $dH=\bigl(0,\,p/m\bigr)$ in the
coordinates $(x,p)$, which is nonzero exactly for $p\neq0$; the single
function $F_{1}=H$ on $W_{0}=W$ therefore defines a completely integrable
datum of the presentation with integral map $H$ and regular locus
$\{p\neq0\}$. Since
$\iota_{X_{H}}\omega=dH$, the field is
$X_{H}(x,p)=\bigl(p/m,\,0\bigr)$
([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]).

[L2] Regular level sets ([[def-cm14-complete-integrability]] clause (c),
[[def-differential-rank-and-constant-rank]]): for a regular value
$E>0$ the common level set is
$H^{-1}(E)=\{(x,p):\lvert p\rvert=\rho\}$ with
$\rho:=\sqrt{2mE}>0$, a nonempty regular level set of the datum.

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

1.1 By [L1] and [L2], for every regular value $E>0$ the level set $N:=H^{-1}(E)=\{(x,p):\lvert p\rvert=\rho\}=\mathbb R^{3}\times S^{2}_{\rho}$ is a nonempty regular common level set of a completely integrable datum of the presentation. [L1, L2, given]

2.1 Noncompactness: the continuous function $f(x,p):=x_{1}$ restricted to $N$ takes the value $c$ at $\bigl((c,0,0),(\rho,0,0)\bigr)\in N$ for every $c\in\mathbb R$, so it is unbounded on $N$. If $N$ were compact, then by [L3] the continuous function $f|_{N}$ would attain a maximum and in particular be bounded; it is not. Hence $N$ is not compact, and the compactness clause of the refuted statement fails at a regular level set of a completely integrable datum. [L3, step 1.1, algebra]

2.2 No periods and no lattice: by [L1] the field is $X_{H}(x,p)=(p/m,0)$, so its flow is $\Phi^{t}(x,p)=\bigl(x+(p/m)t,\,p\bigr)$; along $N$ one has $p\neq0$, hence $(p/m)t\neq0$ for every $t\neq0$ and $\Phi^{t}(x,p)\neq(x,p)$. The flow therefore has no nonzero period on $N$, its stabilizer is trivial at every point, and $N$ carries no nonzero period lattice, let alone a full one; the periodicity clause of the refuted statement fails. [L1, step 1.1, algebra]

3.1 Consistency with the qualified theorem: [L4] requires a compact connected regular fibre; $N$ is regular but noncompact, so the theorem's hypotheses fail and no contradiction arises. The example exhibits exactly the compactness hypothesis as the indispensable one: the free label's motion is uniform translation, its action $\lvert p\rvert^{2}/(2m)$ is conserved but does not quantize the motion into circles. [L4, step 2.1, step 2.2]

4.1 Collecting: $N$ is a nonempty regular common level set of a completely integrable datum that is noncompact and carries no period, so the refuted statement is false; the qualified conclusions of [[pthm-cm14-regular-tori]] and [[pthm-cm14-action-angle]] are unaffected because their compactness hypothesis fails here. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **What is refuted.** Only the version of the fibre claims without the
  compactness hypothesis. The qualified theorem
  [[pthm-cm14-regular-tori]] keeps that hypothesis, and its conclusion
  that compact connected regular fibres are tori remains untouched.

- **The model reading.** The free presentation is a legitimate model of
  the force branch with zero force; the counterexample is a statement
  about that declared model and carries no measured value and no claim
  about any apparatus.
