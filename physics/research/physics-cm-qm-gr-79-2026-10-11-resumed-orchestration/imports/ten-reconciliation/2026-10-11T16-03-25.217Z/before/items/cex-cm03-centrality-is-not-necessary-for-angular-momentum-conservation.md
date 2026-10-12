---
id: cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation
kind: counterexample
title: "Non-central antisymmetric pair forces with vanishing internal torque sum: the centrality clause is not necessary for angular-momentum conservation"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm03-centre-of-mass-and-momenta, pthm-cm03-angular-momentum-balance, pthm-cm03-momentum-balance, post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, lem-finite-sum-laws, def-interval, def-cm01-units, def-cm01-velocity-acceleration]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-angular-momentum-balance: physical-result
  pthm-cm03-momentum-balance: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-interval: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the force branch: a three-label model with constant antisymmetric pair forces has non-central pair forces and yet its internal torque sum vanishes identically, so its total angular momentum about a fixed origin is constant along every motion even though the centrality hypothesis of the balance theorem fails. The item refutes only the claim that centrality is necessary for the internal-torque conclusion; it asserts no measured value and no conservation for general non-central models."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.1, Eq. (1.19) and the surrounding discussion, printed pages 6-7 (PDF pages 12-13): the internal-torque sum as a sum over pairs, whose vanishing is discussed through the parallelism of each pair, with the bookkeeping by pairs of forces"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eq. (1.37) and the pair cancellation argument, chapter pages 9-10 (PDF pages 13-14): the double sum of internal torques grouped into pairs and reduced by the central-force assumption"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the force branch of [[post-cm02-force-superposition]] with the
external-plus-pair presentation and the antisymmetry clause (ii)1 of
[[post-cm02-interactions]], **if the internal torque sum
$\sum_{i<j}(x_{i}-x_{j})\times F_{ij}$ vanishes identically, then every pair
force $F_{ij}$ is central** (parallel to $x_{i}-x_{j}$).

Equivalently: centrality of the pair forces is necessary for the
internal-torque conclusion used by
[[pthm-cm03-angular-momentum-balance]].

## Facts & Assumptions

**Given:** The force branch, one inertial frame, and the notation of [[def-cm03-centre-of-mass-and-momenta]] and of [[pthm-cm03-angular-momentum-balance]]: evaluated pair forces $F_{ij}$ along a motion, the internal torque sum $I=\sum_{i<j}(x_{i}-x_{j})\times F_{ij}$, the angular momentum $J_{o}=\sum_{i}(x_{i}-o)\times p_{i}$ and the torque decomposition $T_{o}=T_{o}^{\mathrm{ext}}+I$ of clause 1 of that theorem.

[L1] Model notions ([[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]]): a motion satisfies $m_{i}\ddot x_{i}=F_{i}(t,x,\dot x)$; the pair presentation writes $F_{i}=F_{i}^{\mathrm{ext}}+\sum_{j\ne i}F_{ij}$ with $F_{ji}=-F_{ij}$; the dimension conventions are [[def-cm01-units]] and the coordinate curves are those of [[def-cm01-velocity-acceleration]].

[L2] Angular balance ([[pthm-cm03-angular-momentum-balance]] clauses 1-4): $T_{o}=T_{o}^{\mathrm{ext}}+I$, and $J_{o}'=T_{o}^{\mathrm{ext}}+I-o'\times P$; for a constant reference point with $T_{o}\equiv0$ the angular momentum $J_{o}$ is constant; the centrality clause is sufficient for $I\equiv0$.

[L3] Momentum balance ([[pthm-cm03-momentum-balance]] clause 2): if the evaluated total external force vanishes, the total momentum is constant.

[L4] Cross-product algebra ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]): bilinearity, $u\times u=0$, $u\times v=-(v\times u)$; for the standard basis, $e_{1}\times e_{2}=e_{3}$, $e_{2}\times e_{3}=e_{1}$, $e_{3}\times e_{1}=e_{2}$. The Euclidean inner product is [[def-euclidean-inner-product]], finite sums are linear ([[lem-finite-sum-laws]]), and $\mathbb R$ is an interval with nonempty interior ([[def-interval]]).

## Counterexample

**Proof technique:** direct; define the model and a motion, verify the model hypotheses, and exhibit the non-central pair forces with identically vanishing internal torque.

1.1 The model. Take $N=3$, masses $m_{1}=m_{2}=m_{3}:=1\,\mathrm{kg}$, time window $\mathbb R$, configuration domain $Q:=\mathbb R^{9}$ (no exclusion is needed), no external forces, and the constant pair force maps $$F_{12}\equiv w,\qquad F_{13}\equiv-w,\qquad F_{23}\equiv w,\qquad w:=1\,\mathrm N\,e_{3},$$ with $F_{ji}:=-F_{ij}$ for every ordered pair. Constant maps are continuous and state-Lipschitz with constant $0$, the antisymmetry $F_{ji}=-F_{ij}$ holds by declaration, and the presentation is $F_{i}=0+\sum_{j\ne i}F_{ij}$; hence the model satisfies the hypotheses of the force branch and of [[post-cm02-interactions]] clause (i) with the antisymmetry clause (ii)1. [given, L1]

2.1 The motion. Define $$x_{1}(t):=t\,e_{2},\qquad x_{2}(t):=e_{1},\qquad x_{3}(t):=e_{2}+t\,e_{1}\qquad(t\in\mathbb R),$$ with $t$ in seconds and positions in metres. These curves are $C^{2}$ with $\ddot x_{i}=0$; the net force on each label vanishes, $$F_{1}=F_{12}+F_{13}=w-w=0,\qquad F_{2}=F_{21}+F_{23}=-w+w=0,\qquad F_{3}=F_{31}+F_{32}=w-w=0,$$ so $m_{i}\ddot x_{i}=0=F_{i}$ for all $t$: the curves form a motion of the model on $\mathbb R$. Moreover the positions are pairwise distinct for every $t$, since $x_{1}-x_{2}=te_{2}-e_{1}\neq0$, $x_{2}-x_{3}=(1-t)e_{1}-e_{2}\neq0$ and $x_{1}-x_{3}=-te_{1}+(t-1)e_{2}\neq0$ (their first or second components never vanish simultaneously). [step 1.1, L1, L4, algebra]

2.2 The internal torque sum vanishes identically. Using bilinearity and $u\times w=-(w\times u)$ [L4], $$I=\sum_{i<j}(x_{i}-x_{j})\times F_{ij}=(x_{1}-x_{2})\times w+(x_{1}-x_{3})\times(-w)+(x_{2}-x_{3})\times w=-w\times\bigl[(x_{1}-x_{2})-(x_{1}-x_{3})+(x_{2}-x_{3})\bigr],$$ and the bracket telescopes: $(x_{1}-x_{2})-(x_{1}-x_{3})+(x_{2}-x_{3})=x_{1}-x_{2}-x_{1}+x_{3}+x_{2}-x_{3}=0$. Hence $I\equiv0$ on the whole configuration domain, without any centrality. The individual pair torques are nevertheless nonzero: at $t=0$, $(x_{1}-x_{2})\times F_{12}=e_{2}$, $(x_{1}-x_{3})\times F_{13}=e_{1}$ and $(x_{2}-x_{3})\times F_{23}=-(e_{1}+e_{2})$, whose sum is zero; so the vanishing is by cancellation among the pairs. [step 1.1, L4, algebra]

3.1 The pair forces are not central. The pair force $F_{12}=w=e_{3}$ is parallel to $x_{1}-x_{2}$ only if $(x_{1}-x_{2})\times e_{3}=0$; but $$(x_{1}-x_{2})\times F_{12}=(te_{2}-e_{1})\times e_{3}=t\,(e_{2}\times e_{3})-(e_{1}\times e_{3})=t\,e_{1}+e_{2}\neq0$$ for every $t$, since the two components do not vanish simultaneously; the same computation at one time instant shows the failure for the constant model at generic configurations. Hence centrality fails along the whole motion (and $F_{12}$ fails it for every configuration with $(x_{1}-x_{2})\times e_{3}\neq0$). [step 2.1, L4, algebra]

3.2 Angular momentum is conserved. By clause 1 of [L2], $T_{o}=T_{o}^{\mathrm{ext}}+I$; with the origin as reference point and no external forces, $T_{o}^{\mathrm{ext}}=0$, so $T_{0}=0$ and clause 4 of [L2] applies even though the centrality hypothesis of clause 3 is not met: $J_{0}$ is constant along the motion. Directly, $$J_{0}=x_{1}\times m_{1}\dot x_{1}+x_{2}\times m_{2}\dot x_{2}+x_{3}\times m_{3}\dot x_{3}=(te_{2})\times e_{2}+e_{1}\times0+(e_{2}+te_{1})\times e_{1}=0+0+e_{2}\times e_{1}=-e_{3},$$ constant in $t$ and nonzero. [step 2.1, step 2.2, L2, L4, algebra]

3.3 Total momentum is also conserved: the total external force vanishes identically, so clause 2 of [L3] gives that $P=\dot x_{1}+\dot x_{2}+\dot x_{3}=e_{2}+e_{1}$ is constant, as it is directly. [step 2.1, L3, algebra]

4.1 Conclusion. The model satisfies the hypotheses of the balance theorems with antisymmetric, non-central pair forces; its internal torque sum vanishes identically and its angular momentum about the origin is constant along the motion. The refuted statement is therefore false: centrality is a sufficient but not necessary condition for the internal-torque conclusion of [[pthm-cm03-angular-momentum-balance]], the cancellation occurring among the pair torques. [step 3.1, step 2.2, step 3.2, L2] ∎

## Remarks

- **What is refuted, and what is not.** Only the converse direction is refuted: cancellation does not force centrality. The sufficient direction, centrality implies $I\equiv0$, is clause 3 of [[pthm-cm03-angular-momentum-balance]] and is unaffected. Nothing here claims that non-central models generally conserve angular momentum.

- **The cancellation is structural.** The telescoping identity of step 2.2 uses only the constancy of the declared pair forces and the assignment $F_{12}\equiv w$, $F_{13}\equiv-w$, $F_{23}\equiv w$; it holds for every configuration, not only along the exhibited motion. The motion is used to exhibit nonzero individual pair torques and a nonzero conserved angular momentum.
