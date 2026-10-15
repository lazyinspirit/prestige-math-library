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
  - def-gr-observer-and-rest-space
  - def-gr-smooth-lorentzian-objects
  - lem-gr-observer-projection-decomposition
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-picard-lindelof-local-existence-and-uniqueness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
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

Assume Countable Choice for the canonical tangent-bundle smooth structure supplied by the GR items below. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold with its metric-compatible connection $\nabla$, let $c>0$, and let $I\subseteq\mathbb R$ be a nonempty open interval of proper-time values. Let $z:I\to M$ be a $C^2$ future timelike curve and set $U:=dz/d\tau$, with $g(U,U)=-c^2$. For a $C^1$ vector field $V$ along $z$, define its covariant derivative by the pullback connection $D_\tau V:=(z^*\nabla)_{\partial/\partial\tau}V$; in a chart this means $(D_\tau V)^a=dV^a/d\tau+\Gamma^a{}_{bc}(z(\tau))U^bV^c$. Let $F_\tau$ be a continuous alternating two-form along $z$. Define $F^\sharp_\tau$ by
$$g(F^\sharp_\tau(v),w)=F_\tau(w,v).$$
Then $F^\sharp_\tau$ is skew-adjoint with respect to $g$.

For constants $\alpha,a,b\in\mathbb R$, consider a $C^1$ vector field $s$ along $z$ satisfying the restricted linear transport equations
$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left(aF^\sharp(s)+\frac{b}{c^2}U\,\kappa\right),\qquad \kappa:=g(s,F^\sharp(U)).$$
For every $\tau_0\in I$ and initial value $s(\tau_0)$ there is a unique solution on each compact subinterval of $I$ containing $\tau_0$. Along any such solution,
$$\frac{d}{d\tau}g(U,s)=\alpha(1-a-b)\kappa.$$
Consequently, the orthogonality constraint $g(U,s)=0$ is preserved when $a+b=1$, and on that constraint $g(s,s)$ is constant. For the coefficient comparison, fix a parameter value $\tau$ and put $n:=U(\tau)/c$. Then $n$ is an observer at $z(\tau)$ and its rest space is the three-dimensional positive-definite subspace $E_\tau:=n^\perp=U(\tau)^\perp$ (the observer and projection conventions are those of [[def-gr-observer-and-rest-space]] and [[lem-gr-observer-projection-decomposition]]). Choose an orientation of $E_\tau$ and a positively oriented orthonormal basis $(e_1,e_2,e_3)$; set $e_0:=n$. For $v\in E_\tau$, write $\mathbf v=(g(v,e_1),g(v,e_2),g(v,e_3))$, use $(\mathbf u\times\mathbf v)_i=\epsilon_{ijk}u_jv_k$, and define $\mathbf B$ by $F_{ij}:=F(e_i,e_j)=\epsilon_{ijk}B_k$. Let $P_U(v):=v+g(U,v)U/c^2$, the projection onto $E_\tau$, and fix a target coefficient $G\in\mathbb R$. The rest-space matching condition means the pointwise equality
$$\bigl(P_U(D_\tau s)\bigr)^i=\alpha G\,(\mathbf s\times\mathbf B)_i\qquad(i=1,2,3)$$
for every $\mathbf s,\mathbf B\in\mathbb R^3$, when $s(\tau)\in E_\tau$. Thus it compares spatial components of the covariant derivative at the event, not the derivative of components in an unspecified moving tetrad. For $\alpha\ne0$, if the coefficients both preserve $g(U,s)=0$ for every initially orthogonal datum and every allowed alternating field and satisfy this matching condition, then $a=G$ and $b=1-G$. Conversely, these coefficients satisfy both requirements. This uniqueness is only within the displayed two-term ansatz; no uniqueness among all covariant spin-transport laws is asserted. If $\alpha=0$, the rest-space matching condition does not identify $a$ or $b$.

## Facts & Assumptions

**Given:** The stated Lorentzian manifold, its metric-compatible connection, $c>0$, a $C^2$ future timelike proper-time curve, a continuous alternating two-form along that curve, real coefficients $\alpha,a,b$, and an initial vector $s(\tau_0)$.

[A1] Countable Choice, inherited from the GR smooth-structure supplier [[def-countable-choice]], is the only choice assumption used by the GR connection interface.

[A2] The restricted transport equations, real coefficients, continuous alternating two-form, proper-time normalization, and initial spin vector are exactly the data in the Statement.

[F1] The metric-selected connection is metric-compatible: along a curve, the covariant derivative differentiates the metric pairing by the Leibniz rule and the metric derivative vanishes. [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[F2] A continuous locally Lipschitz vector field on an open Euclidean domain has a unique local solution through each initial point, and solutions with the same initial data agree on common intervals. [[thm-picard-lindelof-local-existence-and-uniqueness]]

[F3] At a point of the curve, $U/c$ is an observer; its orthogonal complement is a three-dimensional positive-definite rest space with projection $h_{U/c}$, as specified in [[def-gr-observer-and-rest-space]] and proved in [[lem-gr-observer-projection-decomposition]]. The coordinate cross product in a chosen positively oriented orthonormal basis is $(u\times v)_i=\epsilon_{ijk}u_jv_k$. [[def-cross-product-in-r3]]

[F4] The coefficient comparison uses the pointwise projected rest-space matching condition in the Statement for every $\mathbf s,\mathbf B$; it is a matching condition, not a claim about measured magnetic moments.

## Proof

**Proof technique:** direct.

1.1 Alternation gives $g(F^\sharp v,w)=F(w,v)=-F(v,w)=-g(v,F^\sharp w)$, so $F^\sharp$ is $g$-skew. By [F1] and the product rule, $$\frac{d}{d\tau}g(U,s)=g(D_\tau U,s)+g(U,D_\tau s)=\alpha\kappa+\alpha\left(a\,g(U,F^\sharp s)+b\,\frac{g(U,U)}{c^2}\kappa\right).$$ Skew-adjointness gives $g(U,F^\sharp s)=-\kappa$, and $g(U,U)=-c^2$; therefore the derivative equals $\alpha(1-a-b)\kappa$. [given, A1, F1, algebra]

1.2 In any chart along a compact subinterval, the spin equation is a linear system $\dot s=A(\tau)s$ with continuous coefficients: the connection coefficients, $U$, $F$, and $g$ are continuous on the compact curve image. Its right-hand side is locally Lipschitz in $s$, so [F2] gives local existence and uniqueness. The coefficient norm is bounded on each compact chart subinterval, say by $C$; iterating the integral equation gives $\|s(\tau)\|\le \|s(\tau_0)\|\sum_{n\ge0}(C|\tau-\tau_0|)^n/n!=\|s(\tau_0)\|e^{C|\tau-\tau_0|}$. Hence no finite endpoint blow-up occurs there, and finitely many chart subintervals cover any compact part of $I$; uniqueness patches the solutions across chart overlaps. [given, F2, algebra]

2.1 If $a+b=1$, step 1.1 makes $g(U,s)$ constant, so its zero initial value remains zero. On this constraint, $$\frac12\frac{d}{d\tau}g(s,s)=g(s,D_\tau s)=\alpha\left(a\,g(s,F^\sharp s)+\frac{b}{c^2}g(s,U)\kappa\right)=0,$$ since $F^\sharp$ is skew and $g(s,U)=0$. [given, F1, step 1.1, algebra]

3.1 At the fixed event, $e_0=U/c$ and $g(U,s)=0$ give $s=\sum_js^je_j$. The projection $P_U$ kills the term proportional to $U$, while for every spatial index $i$, $g(F^\sharp(s),e_i)=F(e_i,s)=F_{ij}s^j=\epsilon_{ijk}B_k s^j=(\mathbf s\times\mathbf B)_i$ by [F3]. Thus the projected equation is $\bigl(P_U(D_\tau s)\bigr)^i=\alpha a(\mathbf s\times\mathbf B)_i$. For $\alpha\ne0$, matching [F4] for all $\mathbf s,\mathbf B$ forces $a=G$ (choose a nonzero cross product). Independently, requiring preservation for every initially orthogonal datum and every alternating $F$ forces $a+b=1$ by step 1.1: nonzero $\kappa$ is attainable, for example by taking $s=e_1$ and an alternating $F$ with $F(e_1,e_0)\ne0$. Hence $b=1-G$. The equations do not identify $a,b$ when $\alpha=0$. [given, A2, F3, F4, step 1.1, algebra] ∎

## Remarks

The proof is a conditional calculation for an already specified smooth connection and transport equation. The Countable Choice requirement is inherited through the supplied GR tangent-bundle and connection construction; no choice is used in the coefficient algebra.
