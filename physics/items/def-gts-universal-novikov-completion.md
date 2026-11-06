---
id: def-gts-universal-novikov-completion
kind: definition
title: Universal Novikov completion and energy filtration
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
justified_by:
  - lem-gts-novikov-completion-is-filtered-ring
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 16–17, universal Novikov rings and the energy filtration
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $k$ be a field, let $\Gamma$ be an additive abelian group, let $\nu:\Gamma\to\mathbb R$ be a group homomorphism, and optionally let $d:\Gamma\to\mathbb Z$ be a grading homomorphism. The universal Novikov completion for these data is the set of formal sums
$$\Lambda_{\nu,k}=\left\{\sum_{\gamma\in\Gamma}a_\gamma q^\gamma:\ a_\gamma\in k,\quad \#\{\gamma:a_\gamma\ne0,\ \nu(\gamma)<C\}<\infty\ \text{for every }C\in\mathbb R\right\}.$$
For a sum set $v(\sum a_\gamma q^\gamma)=\inf\{\nu(\gamma):a_\gamma\ne0\}$, with $v(0)=+\infty$; the following local result proves that this infimum is finite and attained for every nonzero sum. The energy filtration is $F^c\Lambda_{\nu,k}=\{a:v(a)\ge c\}$. The monomial $q^\gamma$ has degree $d(\gamma)$ when a grading is declared. Formal addition is coefficientwise, the proposed monomial multiplication is $q^\gamma q^\eta=q^{\gamma+\eta}$, and a local lemma verifies that convolution makes this set a filtered ring.

The positive-energy subring is $\Lambda_{\nu,k}^{0}$, the subset supported on $\{\gamma:\nu(\gamma)\ge0\}$. The FOOO energy-only convention is the case $\Gamma=\mathbb R$, $\nu(\lambda)=\lambda$, $d=0$, with coefficient field $\mathbb Q$; its $\nu\ge0$ subring has the source's completed energy filtration.

For the Hamiltonian Floer specialization, fix a smooth symplectic manifold $(M,\omega)$, a basepoint $m_0\in M$, and a chosen smooth compatible almost-complex structure $J$: $J^2=-\mathrm{id}$ and $\omega(\cdot,J\cdot)$ is a symmetric positive-definite metric. Regard $(TM,J)$ as a complex vector bundle, with multiplication by $\mathrm i$ given by $J$. The abelian group $\pi_2(M,m_0)$ consists of based homotopy classes of spheres in $M$, with addition by the pinch map. Its spherical period homomorphisms are $\omega:\pi_2(M,m_0)\to\mathbb R$, $\omega([u])=\int_{S^2}u^*\omega$, and $c_1:\pi_2(M,m_0)\to\mathbb Z$, the first Chern number of $u^*(TM,J)$, using smooth representatives $u$ and the standard orientation of $S^2$. Explicitly, choose complex frames $e_N,e_S$ over the northern and southern hemispheres, write $e_S=e_Ng$ on the equator oriented as the northern boundary, and set $c_1([u])=\operatorname{wind}(\det g)$, where $\operatorname{wind}(f)$ is the degree of $f/|f|:S^1\to S^1$; the determinant is $1$ in rank zero. Changes of hemisphere frames have zero boundary winding. Homotopies preserve both periods, by closedness of $\omega$ and homotopy invariance of winding, and the pinch sum adds them. With the capped-generator convention used here, take $\Gamma=\pi_2(M,m_0)/(\ker\omega\cap\ker c_1)$, $\nu([A])=\omega(A)$, $d([A])=-2c_1(A)$, and $k=\mathbb F_2$. These maps descend because both periods vanish on the subgroup being quotiented out. The sign of $d$ is a chosen coefficient convention, not a recapping-index theorem.

The finiteness condition is part of the definition; no operation count, differential, or Floer homology group is asserted here.

## Definition references

[[def-symplectic-form-and-symplectic-manifold]]
