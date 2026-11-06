---
id: lem-gts-hamiltonian-action-and-conley-zehnder-recap-shifts
kind: lemma
title: Hamiltonian action and grading shifts under recapping
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-gts-hamiltonian-orbit-cappings-and-recap-group
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-hamiltonian-orbit-cappings-and-recap-group: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.4, printed p. 10, action functional; §2.4, printed pp. 20–21, Conley–Zehnder loop convention
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

Let $(M,\omega,J_*)$ be symplectic data with a chosen compatible structure, let $H_t$ be smooth and periodic, and let $x$ be a nondegenerate contractible one-periodic orbit with cap $w$. For every recapping sphere $A$,
$$\mathcal A_H([x,w\#A])-\mathcal A_H([x,w])=-\omega(A),\qquad \mu_{\mathrm{CZ}}(x,w\#A)-\mu_{\mathrm{CZ}}(x,w)=-2c_1(A).$$
Hence, if $\omega|_{\pi_2(M)}=0$ and $c_1(TM,J_*)|_{\pi_2(M)}=0$, both action and integer grading are independent of the capping.

## Statement references

[[def-gts-hamiltonian-orbit-cappings-and-recap-group]]

## Facts & Assumptions

**Given:** The action, cap, recapping, Chern-number, and Conley–Zehnder conventions of the preceding definition.

[F1] [[def-gts-hamiltonian-orbit-cappings-and-recap-group]]: $\mathcal A_H([x,w])=\int H_t(x(t))\,dt-\int_w\omega$, the vector-field convention is $\iota_{X_{H_t}}\omega=-dH_t$, and the chosen index convention assigns a recapping loop with determinant winding $r$ the shift $2r$.

[F2] [[def-gts-symplectic-and-almost-complex-curve-data]]: $d\omega=0$, so the symplectic period is invariant under homotopy of a sphere representative.

[A1] The spherical period maps $A\mapsto\omega(A)$ and $A\mapsto c_1(A)$ vanish on $\pi_2(M)$.

## Proof

1.1 The cap $w\#A$ is obtained by gluing a representative sphere into $w$, so additivity of integration gives $\int_{w\#A}\omega=\int_w\omega+\omega(A)$. The Hamiltonian term is unchanged; substitution in the definition of $\mathcal A_H$ gives the action shift $-\omega(A)$. Closedness in [F2] makes $\omega(A)$ depend only on the sphere class. [given, F1, F2, algebra]

1.2 Normalize the two cap-induced frames to agree at $t=0$. In the stated transition convention, the frame from $w\#A$ has coordinate change $g_A(t)$ relative to the frame from $w$, so the linearized paths are related by $\Phi_{w\#A}(t)=g_A(t)\Phi_w(t)$ and $g_A(0)=g_A(1)=I$. The loop-shift law gives $\mu_{\mathrm{CZ}}(g_A\Phi_w)-\mu_{\mathrm{CZ}}(\Phi_w)=2\operatorname{wind}(\det_{\mathbb C}g_A)=-2c_1(A)$. [F1, given, algebra]

2.1 Under [A1], both displayed shifts vanish for every recapping sphere. Therefore the action and integer grading are capping-independent. [A1, step 1.1, step 1.2] ∎
