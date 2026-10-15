---
id: lem-rpm-bmt-transport-algebra
kind: lemma
title: BMT transport constraint and restricted-ansatz algebra
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-cross-product-in-r3
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-picard-lindelof-local-existence-and-uniqueness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: "Section “Relativistic Spin Precession: the BMT Equation”, four-spin construction and coefficient determination; the local statement below is proved independently."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the canonical tangent-bundle smooth structure supplied by the GR items below. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold with its metric-compatible connection $\nabla$, let $c>0$, and let $z:I\to M$ be a $C^2$ future timelike curve parametrized by proper time $\tau$, with $U=D_\tau z$ and $g(U,U)=-c^2$. Let $F_\tau$ be a continuous alternating two-form along $z$. Define $F^\sharp_\tau$ by
$$g(F^\sharp_\tau(v),w)=F_\tau(w,v).$$
Then $F^\sharp_\tau$ is skew-adjoint with respect to $g$.

For constants $\alpha,a,b\in\mathbb R$, consider the restricted linear transport equations
$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left(aF^\sharp(s)+\frac{b}{c^2}U\,\kappa\right),\qquad \kappa:=g(s,F^\sharp(U)).$$
For every initial $s(\tau_0)$ there is a unique solution on each compact subinterval of $I$. Along any such solution,
$$\frac{d}{d\tau}g(U,s)=\alpha(1-a-b)\kappa.$$
Consequently, the orthogonality constraint $g(U,s)=0$ is preserved when $a+b=1$, and on that constraint $g(s,s)$ is constant. For $\alpha\ne0$, matching the rest-frame spatial law
$$\frac{d\mathbf s}{d\tau}=\alpha G\,(\mathbf s\times\mathbf B)$$
for all spatial $\mathbf s,\mathbf B$, with $F_{ij}=\epsilon_{ijk}B_k$, forces $a=G$ and $b=1-G$. This uniqueness is only within the displayed two-term ansatz; no uniqueness among all covariant spin-transport laws is asserted. If $\alpha=0$, the rest-frame equation does not identify $a$ or $b$.

## Facts & Assumptions

**Given:** The stated Lorentzian manifold, its metric-compatible connection, $c>0$, a $C^2$ future timelike proper-time curve, a continuous alternating two-form along that curve, real coefficients $\alpha,a,b$, and an initial vector $s(\tau_0)$.

[A1] Countable Choice, inherited from the GR smooth-structure supplier [[def-countable-choice]], is the only choice assumption used by the GR connection interface.

[A2] The restricted transport equations, real coefficients, continuous alternating two-form, proper-time normalization, and initial spin vector are exactly the data in the Statement.

[F1] The metric-selected connection is metric-compatible: along a curve, the covariant derivative differentiates the metric pairing by the Leibniz rule and the metric derivative vanishes. [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[F2] A continuous locally Lipschitz vector field on an open Euclidean domain has a unique local solution through each initial point, and solutions with the same initial data agree on common intervals. [[thm-picard-lindelof-local-existence-and-uniqueness]]

[F3] In an oriented orthonormal spatial basis, $(u\times v)_i=\epsilon_{ijk}u_jv_k$. [[def-cross-product-in-r3]]

[F4] The coefficient comparison uses the stipulated rest-frame target law $d\mathbf s/d\tau=\alpha G(\mathbf s\times\mathbf B)$ for every $\mathbf s,\mathbf B$; it is a matching condition, not a claim about measured magnetic moments.

## Proof

**Proof technique:** direct.

1.1 Alternation gives $g(F^\sharp v,w)=F(w,v)=-F(v,w)=-g(v,F^\sharp w)$, so $F^\sharp$ is $g$-skew. By [F1] and the product rule, $$\frac{d}{d\tau}g(U,s)=g(D_\tau U,s)+g(U,D_\tau s)=\alpha\kappa+\alpha\left(a\,g(U,F^\sharp s)+b\,\frac{g(U,U)}{c^2}\kappa\right).$$ Skew-adjointness gives $g(U,F^\sharp s)=-\kappa$, and $g(U,U)=-c^2$; therefore the derivative equals $\alpha(1-a-b)\kappa$. [given, A1, F1, algebra]

1.2 In any chart along a compact subinterval, the spin equation is a linear system $\dot s=A(\tau)s$ with continuous coefficients: the connection coefficients, $U$, $F$, and $g$ are continuous on the compact curve image. Its right-hand side is locally Lipschitz in $s$, so [F2] gives local existence and uniqueness. The coefficient norm is bounded on each compact chart subinterval, say by $C$; iterating the integral equation gives $\|s(\tau)\|\le \|s(\tau_0)\|\sum_{n\ge0}(C|\tau-\tau_0|)^n/n!=\|s(\tau_0)\|e^{C|\tau-\tau_0|}$. Hence no finite endpoint blow-up occurs there, and finitely many chart subintervals cover any compact part of $I$; uniqueness patches the solutions across chart overlaps. [given, F2, algebra]

2.1 If $a+b=1$, step 1.1 makes $g(U,s)$ constant, so its zero initial value remains zero. On this constraint, $$\frac12\frac{d}{d\tau}g(s,s)=g(s,D_\tau s)=\alpha\left(a\,g(s,F^\sharp s)+\frac{b}{c^2}g(s,U)\kappa\right)=0,$$ since $F^\sharp$ is skew and $g(s,U)=0$. [given, F1, step 1.1, algebra]

3.1 In a rest frame $U=(c,\mathbf 0)$ and $g(U,s)=0$ gives $s=(0,\mathbf s)$. The term proportional to $U$ in the spin equation has zero spatial part, while $F^\sharp(s)^i=F_{ij}s^j=\epsilon_{ijk}B_k s_j=(\mathbf s\times\mathbf B)_i$ by [F3]. Thus the spatial equation is $\dot{\mathbf s}=\alpha a(\mathbf s\times\mathbf B)$. When $\alpha\ne0$, equality with [F4] for all $\mathbf s,\mathbf B$ forces $a=G$ (choose nonparallel $\mathbf s,\mathbf B$); preservation for all $\kappa$ then forces $a+b=1$ by step 1.1, hence $b=1-G$. The equations do not identify $a,b$ when $\alpha=0$. [given, A2, F3, F4, step 1.1, algebra] ∎

## Remarks

The proof is a conditional calculation for an already specified smooth connection and transport equation. The Countable Choice requirement is inherited through the supplied GR tangent-bundle and connection construction; no choice is used in the coefficient algebra.
