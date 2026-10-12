---
id: pthm-cm17-stress-matrix-and-symmetry
kind: physics-theorem
title: "Existence, uniqueness and symmetry of the stress matrix from the adopted balance principles"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm17-momentum-balance, post-cm17-contact-force-model, post-cm17-continuum-kinematic-model, def-cm17-traction-and-stress, def-cm17-density-and-mass, def-cm17-continuum-body-and-units, thm-cm-traction-is-given-by-a-stress-matrix, thm-cm-stress-matrix-is-symmetric, def-cm-euclidean-spatial-calculus, def-bounded-piecewise-c-one-euclidean-domain, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-cm-continuum-motion, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice]
dependency_roles:
  post-cm17-momentum-balance: physical-assumption
  post-cm17-contact-force-model: physical-assumption
  post-cm17-continuum-kinematic-model: physical-assumption
  def-cm17-traction-and-stress: formulation-prerequisite
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm17-continuum-body-and-units: formulation-prerequisite
  thm-cm-traction-is-given-by-a-stress-matrix: mathematical-premise
  thm-cm-stress-matrix-is-symmetric: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-bounded-piecewise-c-one-euclidean-domain: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted force model and balance principles: on every bounded spatial region inside the current configuration the continuous traction field is represented by a unique continuous stress matrix, the reversed-normal identity t(-n) = -t(n) holds, and the couple-free torque balance forces the stress matrix to be symmetric. The result is a conditional deduction from the adopted balance principles and the cited mathematical Cauchy-tetrahedron and angular-balance theorems; it asserts no positivity, no constitutive relation and no measured stress."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 4.3-4.5 (Cauchy's tetrahedron, existence of the stress tensor and symmetry from angular momentum)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (the stress tensor, its symmetry from the torque balance, Eq. (7.25))"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), as used by the surface and divergence machinery of
the cited theorems. Let the model and its fields be as in
[[post-cm17-momentum-balance]]: a motion $\chi$ with current regions
$\Omega_s$, a continuous density field $\rho$, spatial velocity $u$ and
material acceleration $a=D_tu$, a continuous body-force field $b$ and a
continuous traction field $t$, with the balance principles (F) and (T) of
that postulate holding for every admissible region at every time $s$.

Then for every time $s$ and every bounded open set $W\subseteq\Omega_s$ with
$\overline W$ contained in the open domain of the fields at time $s$ there is
a unique continuous matrix field

$$\sigma(s,\cdot):W\longrightarrow M_3(\mathbb R)$$

such that

$$t(s,y,n)=\sigma(s,y)\,n\qquad\text{for every }(y,n)\in W\times S^2 ,$$

and necessarily

$$t(s,y,-n)=-t(s,y,n)\qquad\bigl((y,n)\in W\times S^2\bigr),\qquad \sigma(s,y)^{\mathsf T}=\sigma(s,y)\qquad(y\in W).$$

The stress matrix is continuous and unique per time; positivity of its
isotropic part, a constitutive relation and any measured stress are **not**
asserted.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; the model fields of [[post-cm17-momentum-balance]]; the balance principles (F) and (T).

[F1] Field regularity and force description ([[post-cm17-momentum-balance]], [[post-cm17-contact-force-model]], [[def-cm17-density-and-mass]], [[def-cm17-traction-and-stress]], [[def-cm-euclidean-spatial-calculus]]): $\rho$, $u$ and $a=D_tu$ are continuous and $b$ is continuous on the swept region domain; the traction field $t$ is of class $C^1$, so each $y\mapsto t(s,y,e_j)$ is $C^1$; and $t(s,y,n)$ is force per unit area depending on the surface at $(s,y)$ only through $n$.

[F2] Balance principles ([[post-cm17-momentum-balance]] clauses (iii)-(iv)): for every admissible region $D$ at time $s$, $\int_{\partial D}t(s,y,\nu_D)\,dS+\int_D(\rho b-\rho a)(s,y)\,dy=0$ and the same with integrands crossed with $y-x_0$ for every fixed origin $x_0$.

[F3] Cauchy tetrahedron ([[thm-cm-traction-is-given-by-a-stress-matrix]]): if $O$ is open, $t:O\times S^2\to\mathbb R^3$ is continuous, $g:O\to\mathbb R^3$ is continuous and bounded with $C_g<\infty$, and $\int_{\partial D}t(y,\nu_D)\,dS+\int_Dg\,dy=0$ for every bounded piecewise $C^1$ Euclidean domain with a specified finite presentation whose closure and pieces lie in $O$ ([[def-bounded-piecewise-c-one-euclidean-domain]]), then there is a unique continuous $\sigma:O\to M_3(\mathbb R)$ with $t(y,n)=\sigma(y)n$, and $t(y,-n)=-t(y,n)$.

[F4] Couple-free symmetry ([[thm-cm-stress-matrix-is-symmetric]]): if in addition $\sigma$ is $C^1$, $b_0:O\to\mathbb R^3$ is continuous and for every bounded $C^1$ domain $D$ with $\overline D\subseteq O$ ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]) one has $\int_{\partial D}\sigma\nu\,dS+\int_Db_0\,dy=0$ and $\int_{\partial D}y\times(\sigma\nu)\,dS+\int_Dy\times b_0\,dy=0$, then $\sigma(y)^{\mathsf T}=\sigma(y)$ for every $y\in O$.

## Proof

**Proof technique:** direct; fix a time and a bounded spatial region, apply the Cauchy-tetrahedron theorem to the force balance with the inertial term moved into the volume force, then apply the angular-momentum symmetry theorem to the torque balance.

1.1 Fix a time $s$ in the window and a bounded open $W\subseteq\Omega_s$ with $\overline W$ in the field domain. Define $g:W\to\mathbb R^3$ by $g(y):=\rho(s,y)b(s,y)-\rho(s,y)a(s,y)$; by [F1] the fields $\rho,b,a$ are continuous, hence $g$ is continuous, and since $W$ is bounded with closure in the field domain, $g$ is bounded on $W$. For every bounded piecewise $C^1$ domain $D$ with a specified finite presentation, closure in $W$ and pieces in $W$, the region $D$ is an admissible region at time $s$, so the force balance (F) of [F2] reads $\int_{\partial D}t(s,y,\nu_D)\,dS(y)+\int_Dg(y)\,dy=0$. [given, F1, F2, construct]

2.1 Existence, uniqueness and the reversed-normal identity: step 1.1 provides exactly the hypotheses of [F3] with $O:=W$ and the continuous traction field $y\mapsto t(s,y,\cdot)$; hence there is a unique continuous $\sigma(s,\cdot):W\to M_3(\mathbb R)$ with $t(s,y,n)=\sigma(s,y)n$ on $W\times S^2$, and $t(s,y,-n)=-t(s,y,n)$ holds there. [step 1.1, F3]

3.1 Symmetry: let $D$ be any bounded $C^1$ domain with $\overline D\subseteq W$. Then $D$ is admissible, and the force balance $\int_{\partial D}\sigma\nu\,dS+\int_Dg\,dy=0$ holds by steps 1.1 and 2.1; the torque balance (T) of [F2] with the same volume density $g$ reads $\int_{\partial D}y\times(\sigma\nu)\,dS+\int_Dy\times g\,dy=0$. These are the two hypotheses of [F4] with $b_0:=g$, provided $\sigma(s,\cdot)$ is of class $C^1$ on $W$: by step 2.1 the columns of $\sigma(s,y)$ are $\sigma(s,y)e_j=t(s,y,e_j)$, and by [F1] $y\mapsto t(s,y,e_j)$ is of class $C^1$ for $j=1,2,3$, so $\sigma(s,\cdot)$ is of class $C^1$. Applying [F4] gives $\sigma(s,y)^{\mathsf T}=\sigma(s,y)$ for every $y\in W$. [step 1.1, step 2.1, F1, F2, F4, algebra]

4.1 Conclusion: steps 2.1 and 3.1 give the existence, uniqueness, reversed-normal identity and symmetry of the stress matrix on every bounded open $W$ with closure in the field domain at every time $s$; no positivity, constitutive relation, boundary condition or measured value is asserted. [step 2.1, step 3.1] ∎

## Remarks

- **Where symmetry comes from.** Symmetry is a consequence of the couple-free
  torque balance with the same volume force density as the force balance, not
  of the definition of traction; a model with couple stresses has a
  non-symmetric stress matrix and is excluded by
  [[post-cm17-momentum-balance]]. The constitutive items below produce
  symmetric matrices by construction, which is consistent with the present
  conclusion.

- **Uniqueness is per admissible region.** The matrix is unique on each $W$
  because the columns $\sigma(y)e_j$ are exactly $t(y,e_j)$; different
  bounded regions give consistent restrictions because both represent the
  same traction field.
