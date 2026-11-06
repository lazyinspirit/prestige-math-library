---
id: lem-gts-relative-disk-area-invariant
kind: lemma
title: Relative disk area is invariant under relative homotopy
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-stable-j-holomorphic-disks-with-boundary-markings
  - def-gts-relatively-spin-lagrangian-data
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
  def-gts-relatively-spin-lagrangian-data: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 18–19, the relative disk class and energy weight
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Let $(M,\omega)$ be symplectic and fix a stable nodal disk domain with boundary arcs labeled by compact Lagrangians $L_0,\ldots,L_k$. If two smooth componentwise maps $u_0,u_1$ are related by a smooth componentwise homotopy that preserves the markings, node matching, boundary labels, and fixed combinatorial domain, then their total symplectic areas agree. Here such a homotopy is a collection of smooth maps $U_C:C\times[0,1]\to M$, one for each normalized component $C$, with endpoints $u_{0,C},u_{1,C}$, whose boundary segments remain in their fixed Lagrangian labels and whose values match at both branches of every node for every parameter. Thus for every componentwise relative-homotopy class $\beta$ on this fixed nodal domain, $E_\omega(\beta)=\sum_C\int_Cu_C^*\omega$ is well-defined. No identification of classes across different combinatorial domains is asserted by this lemma.

## Statement references

[[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[[def-gts-relatively-spin-lagrangian-data]]

## Facts & Assumptions

**Given:** The stable-disk data and a componentwise relative homotopy as in the statement.

[F1] [[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]: a fixed domain has finitely many normalized disk and sphere components; each disk boundary arc has a fixed Lagrangian label, sphere components are closed, and node branches match under evaluation.

[F2] [[def-gts-relatively-spin-lagrangian-data]]: each boundary label is Lagrangian, so its inclusion $i$ satisfies $i^*\omega=0$.

[F3] [[def-gts-symplectic-and-almost-complex-curve-data]]: the symplectic form is closed, $d\omega=0$.

## Proof

1.1 For one normalized component $C$, write $U_{C,t}=U_C(\cdot,t)$, $\beta_t=U_{C,t}^*\omega$, and define $\alpha_t\in\Omega^1(C)$ by $\alpha_t(v)=\omega(dU_C(\partial_t),dU_C(v))$. The pullback $U_C^*\omega$ is closed by [F3]; writing it as $\beta_t+dt\wedge\alpha_t$ gives $\partial_t\beta_t=d_C\alpha_t$ in local coordinates. To integrate $d_C\alpha_t$, use the following local compact-surface calculation. Cover compact oriented $C$ by finitely many oriented interior charts and, when $\partial C\ne\varnothing$, boundary charts to the half-plane $y\ge0$. Euclidean bump functions supported in these charts, normalized by their finite positive sum, give a finite smooth partition of unity. For each compactly supported chart form $\eta=P\,dx+Q\,dy$, the interior formula $\int_{\mathbb R^2}d\eta=0$ follows by integrating $\partial_xQ-\partial_yP$ and using compact support; in a boundary chart, with outward-normal-first boundary orientation, $\int_{y\ge0}d\eta=\int_{y=0}P(x,0)\,dx$ by the same one-variable fundamental theorem of calculus. Summing the localized identities proves $\int_Cd\alpha=\int_{\partial C}\alpha$ for disk components and $\int_Cd\alpha=0$ for closed sphere components. Differentiation under the integral on compact $C$ now gives $\int_Cu_{1,C}^*\omega-\int_Cu_{0,C}^*\omega=\int_0^1\int_{\partial C}\alpha_t\,dt$. This finite-chart proof uses no countable-choice assumption and applies to the full components, without deleting node markings. [given, F1, F3, algebra, construct]

2.1 On each boundary segment of a disk component, $U_C$ maps the swept segment into its fixed Lagrangian $L_i$. Both $dU_C(\partial_t)$ and $dU_C(v)$ for a boundary tangent $v$ therefore lie in $TL_i$, so $\alpha_t(v)=0$ by [F2]. Finitely many segment endpoints contribute no boundary integral, and closed sphere components have no boundary. The area change in step 1.1 is consequently zero on every normalized component; summing over the finite normalization from [F1] proves equality of total areas. Node matching keeps the homotopy a homotopy of the specified nodal maps, but no node-boundary cancellation is needed. [F1, F2, step 1.1, algebra] ∎
