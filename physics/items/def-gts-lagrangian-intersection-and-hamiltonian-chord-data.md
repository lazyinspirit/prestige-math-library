---
id: def-gts-lagrangian-intersection-and-hamiltonian-chord-data
kind: definition
title: Lagrangian intersection and Hamiltonian chord data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
  - def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, printed pp. 19–20, transverse Lagrangian pairs and intersection-point generators
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.1, printed p. 3, Hamiltonian vector-field convention and local evolution
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(M,\omega)$ be a smooth symplectic manifold and let $i_j:L_j\hookrightarrow M$ for $j=0,1$ be compact smooth embedded Lagrangian submanifolds. The pair $(L_0,L_1)$ is transverse if
$$T_pL_0+T_pL_1=T_pM$$
for every $p\in L_0\cap L_1$. In the unperturbed intersection model, the candidate morphism generators are the points of $L_0\cap L_1$.

Let $H:[0,1]\times M\to\mathbb R$ be smooth, write $H_t(p)=H(t,p)$, and define $X_{H_t}$ by $\iota_{X_{H_t}}\omega=-d_MH_t$. A Hamiltonian chord from $L_0$ to $L_1$ is a smooth map $\gamma:[0,1]\to M$ satisfying $\dot\gamma(t)=X_{H_t}(\gamma(t))$, $\gamma(0)\in L_0$, and $\gamma(1)\in L_1$. It is nondegenerate when the time-one local evolution $\Phi_H^1$ is defined near $\gamma(0)$ and
$$D\Phi_H^1(\gamma(0))(T_{\gamma(0)}L_0)+T_{\gamma(1)}L_1=T_{\gamma(1)}M.$$
In the Hamiltonian-chord model, these chords are the candidate morphism generators. This is a definition of generator data only; it proves no finiteness, compactness, transversality theorem, differential identity, or Floer homology statement.

## Definition references

[[def-symplectic-form-and-symplectic-manifold]]

[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]]
