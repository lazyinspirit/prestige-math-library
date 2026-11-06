---
id: def-gts-relative-closed-shifted-symplectic-form
kind: definition
title: Relative closed shifted symplectic form
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-gts-derived-artin-stack-and-cotangent-complex
  - def-gts-closed-n-shifted-symplectic-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-derived-artin-stack-and-cotangent-complex: mathematical-premise
  def-gts-closed-n-shifted-symplectic-form: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Matthew Huynh, Degenerations of Shifted Symplectic Moduli Stacks of Sheaves
      url: https://arxiv.org/pdf/2609.36922
      locator: arXiv:2609.36922v1, §§3.1–3.3, PDF pp. 10–14.
    - title: Damien Calaque and Stefano Ronchi, Shifted Symplectic Geometry by Examples
      url: https://arxiv.org/pdf/2510.04625
      locator: §5.3, PDF pp. 43–44, for the distinct boundary-relative mapping-stack construction.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
aliases: []
---

## Definition

Assume the Axiom of Choice (AC): every set-indexed family of nonempty
sets has a choice function. This is the premise inherited from the
cotangent-complex suppliers for the relative cotangent, derived de Rham,
and dual tangent constructions below.

Let $R$ be a discrete commutative $\mathbb C$-algebra and let $M$ be a
derived Artin stack over $\operatorname{Spec}(R)$ with perfect relative
cotangent complex $L_{M/R}$. On a derived affine $\operatorname{Spec}(A)$ over
$R$, form
$$\mathrm{DR}(A/R)=\operatorname{Sym}^{\mathbf L}_A(L_{A/R}[1]).$$
Its weight-$p$ component is $\bigwedge^p_A L_{A/R}[p]$, with the internal
cochain differential and the relative mixed de Rham differential of degree
$-1$ and weight $+1$, as in
[[def-gts-closed-n-shifted-symplectic-form]]. Define $\mathrm{DR}(M/R)$ by
derived descent over affine maps to $M$. For a graded mixed complex $E$, use
the Hodge-completed weighted negative-cyclic complex
$$\mathrm{NC}^{w}(E)(p)^j=\prod_{r\ge0}E^{j-2r}(p+r),$$
with differential $(D m)_r=d m_r+\epsilon m_{r-1}$ and $m_{-1}=0$. Both
summands have cochain degree $j+1-2r$ and weight $p+r$, and the mixed-complex
identities give $D^2=0$. Thus
$$\mathcal A^{2,\mathrm{cl}}(M/R,n)=\left|\mathrm{NC}^{w}(\mathrm{DR}(M/R))(2)[n-2]\right|$$
is the space of closed relative two-forms of cohomological degree $n$; its
projection to the weight-two de Rham term is the underlying two-form. Since
$L_{M/R}$ is perfect, the underlying form has an adjoint
$$\Theta_\omega:T_{M/R}=R\operatorname{Hom}_{\mathcal O_M}(L_{M/R},\mathcal O_M)\longrightarrow L_{M/R}[n].$$
It is nondegenerate exactly when $\Theta_\omega$ is a quasi-isomorphism. A
relative $n$-shifted symplectic structure is a closed relative two-form of
degree $n$ that is nondegenerate.

This is the base-relative analogue of the graded-mixed convention for absolute shifted forms. It fixes the relative cotangent complex, degree, Hodge completion, and nondegeneracy map; it does not assert that an arbitrary relative pairing has a closed lift.

## Definition references

[[def-axiom-of-choice]]

[[def-gts-derived-artin-stack-and-cotangent-complex]]

[[def-gts-closed-n-shifted-symplectic-form]]

## Remarks

The boundary-relative mapping-stack construction in Calaque–Ronchi §5.3 is a different interface: it produces a Lagrangian map from an oriented manifold with boundary. It is not used as a supplier for the algebraic family theorem on this page.

