---
id: lem-gts-hamiltonian-evolution-preserves-symplectic-form
kind: lemma
title: Local Hamiltonian evolution preserves the symplectic form
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.1, printed p. 3, Hamiltonian vector fields and their symplectic flows (used after replacing the source Hamiltonian h by -H)
verification:
  precheck: pass
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
proof_strategy: direct
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval, let $(M,\omega)$ be a smooth symplectic manifold, and let $H:I\times M\to\mathbb R$ be smooth. Write $H_t(p)=H(t,p)$ and define $X_{H_t}$ by $\iota_{X_{H_t}}\omega=-d_MH_t$, where $d_M$ differentiates only in the $M$ variable. If $\Phi_{t,s}$ is the smooth local evolution satisfying $\partial_t\Phi_{t,s}(p)=X_{H_t}(\Phi_{t,s}(p))$ and $\Phi_{s,s}(p)=p$ on its domain, then $\Phi_{t,s}^*\omega=\omega$ wherever that evolution is defined. This is local and asserts no global completeness.

## Statement references

[[def-symplectic-form-and-symplectic-manifold]]

## Facts & Assumptions

**Given:** A smooth symplectic manifold, smooth $H_t$, the field $X_{H_t}$ determined by contraction with $\omega$, and a smooth local evolution of that field.

[F1] [[def-symplectic-form-and-symplectic-manifold]]: $d\omega=0$ and $\omega^\flat$ is pointwise invertible.

## Proof

1.1 In local coordinates write $\omega=\frac12\omega_{ab}dx^a\wedge dx^b$, $X=X^c\partial_c$, and $\Phi_t=\Phi_{t,s}$. Differentiating $(\Phi_t^*\omega)_{ij}=\omega_{ab}(\Phi_t)\partial_i\Phi_t^a\partial_j\Phi_t^b$ and using $\partial_t\Phi_t^a=X^a(\Phi_t)$ and $\partial_t\partial_i\Phi_t^a=(\partial_cX^a)(\Phi_t)\partial_i\Phi_t^c$ gives
$$\partial_t(\Phi_t^*\omega)_{ij}=\left(X^c\partial_c\omega_{ab}+\omega_{cb}\partial_aX^c+\omega_{ac}\partial_bX^c\right)(\Phi_t)\partial_i\Phi_t^a\partial_j\Phi_t^b.$$
The bracket is the coordinate expression for the Lie derivative $\mathcal L_X\omega$. [given, construct, algebra]

2.1 In the same coordinates,
$$
(d(\iota_X\omega))_{ij}= (\partial_iX^k)\omega_{kj}+X^k\partial_i\omega_{kj}-(\partial_jX^k)\omega_{ki}-X^k\partial_j\omega_{ki},
$$
and
$$
(\iota_Xd\omega)_{ij}=X^k(\partial_k\omega_{ij}+\partial_i\omega_{jk}+\partial_j\omega_{ki}).
$$
Adding them cancels $-X^k\partial_j\omega_{ki}$ with $X^k\partial_j\omega_{ki}$ and cancels $X^k\partial_i\omega_{kj}$ with $X^k\partial_i\omega_{jk}$ because $\omega_{kj}=-\omega_{jk}$. The remaining terms are $X^k\partial_k\omega_{ij}+(\partial_iX^k)\omega_{kj}+(\partial_jX^k)\omega_{ik}$, exactly the coordinate expression in step 1.1. Hence $\mathcal L_X\omega=d(\iota_X\omega)+\iota_Xd\omega$. Since $\iota_X\omega=-dH_t$ and $d\omega=0$ by [F1], both terms vanish and $\mathcal L_X\omega=0$. [given, F1, step 1.1, algebra]

3.1 Step 1.1 now gives $\partial_t\Phi_{t,s}^*\omega=0$ on the local evolution domain. At $t=s$, $\Phi_{s,s}$ is the identity, so the pullback is $\omega$ throughout that domain. [given, step 1.1, step 2.1, algebra] ∎
