---
id: def-gts-hamiltonian-orbit-cappings-and-recap-group
kind: definition
title: Capped Hamiltonian orbits and recapping data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - lem-gts-hamiltonian-evolution-preserves-symplectic-form
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  lem-gts-hamiltonian-evolution-preserves-symplectic-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §1.1, printed p. 3, Hamiltonian sign; §1.4, printed p. 10, symplectic action; §2.4, printed pp. 20–21, Conley–Zehnder index and loop convention
    - title: Joel Robbin and Dietmar Salamon, The Maslov index for paths
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robbsala2.pdf
      locator: §4, definition of the symplectic-path Maslov index; §5, Remark 5.4, graph/diagonal definition of the Conley–Zehnder index and positive-rotation normalization
    - title: Yong-Geun Oh, Symplectic Topology and Floer Homology
      url: https://cgp.ibs.re.kr/~yongoh/all.pdf
      locator: §18.4.4, Proposition 18.4.4(2); §18.4.6, Theorem 18.4.6, Eq. (18.4.25); §18.4.7, Remark 18.4.7, printed pp. 479–483
verification:
  precheck: n/a
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

Let $(M,\omega,J_*)$ be a smooth symplectic manifold with a chosen smooth compatible almost-complex structure. Write $S^1=\mathbb R/\mathbb Z$. In this item, a smooth loop $x:S^1\to M$ is contractible when it extends to a smooth map $w:D^2\to M$; a specified such extension is a cap. Require $w(e^{2\pi it})=x(t)$, and orient the boundary positively using the standard orientation on $D^2$. The capped loop is denoted $[x,w]$. Two caps of the same loop differ by a recapping sphere $A\in\pi_2(M,x(0))$, represented by gluing one disk to the orientation-reversed other disk. Use the gluing orientation for which $w\#A$ satisfies $\int_{D^2}(w\#A)^*\omega=\int_{D^2}w^*\omega+\omega(A)$. A recapping is trivial when its class is zero.

For a smooth time-periodic Hamiltonian $H:\mathbb R/\mathbb Z\times M\to\mathbb R$, define its vector field by $\iota_{X_{H_t}}\omega=-dH_t$. A one-periodic Hamiltonian orbit is a smooth loop satisfying $\dot x=X_{H_t}(x)$. Let $\Phi_{t,s}$ be the local evolution of this vector field as in [[lem-gts-hamiltonian-evolution-preserves-symplectic-form]], with $\partial_t\Phi_{t,s}=X_{H_t}\circ\Phi_{t,s}$ and $\Phi_{s,s}=\operatorname{id}$; write $\Phi_H^1=\Phi_{1,0}$. The orbit is nondegenerate if $D\Phi_H^1(x(0))-I$ is invertible. Salamon uses the opposite convention $\iota_{X_h}\omega=dh$; the action formula below is his convention with $h=-H$. Its capped-orbit action is
$$\mathcal A_H([x,w])=\int_0^1H_t(x(t))\,dt-\int_{D^2}w^*\omega.$$
Set $\omega(A)=\int_{S^2}a^*\omega$ for a sphere representative $a$ of $A$. The first Chern number is $c_1(A)=\langle c_1(a^*TM,a^*J_*),[S^2]\rangle$. For the transition-loop convention specified below, $c_1(A)=-\operatorname{wind}(\det_{\mathbb C}g_A)$. These numbers depend only on $A$ because $d\omega=0$ and characteristic classes are homotopy invariant.

For a nondegenerate contractible one-periodic orbit, the derivative of its local Hamiltonian evolution is a symplectic path by [[lem-gts-hamiltonian-evolution-preserves-symplectic-form]]. Here $\operatorname{Sp}(2n)$ is the group of linear automorphisms of $(\mathbb R^{2n},\omega_0)$ preserving $\omega_0=\sum_{j=1}^n dq_j\wedge dp_j$. Put $g_{J_*}(v,w)=\omega(v,J_*w)$, the positive Hermitian metric supplied by the compatible structure. A cap-induced unitary frame along $x$ is the boundary restriction of a chosen smooth unitary trivialization of the complex bundle $(w^*TM,w^*J_*)$ over the cap disk; pointwise it is a complex-linear isometry from $(\mathbb C^n,\langle\cdot,\cdot\rangle)$ to $(T_{x(t)}M,J_*,g_{J_*})$, and hence is also symplectic. Write $\Phi_{t,0}$ for the local Hamiltonian evolution and define the linearized path in this frame by $\Phi_w(t)=\tau_w(t)^{-1}\circ D\Phi_{t,0}(x(0))\circ\tau_w(0)$. Then $\Phi_w(0)=I$ and $1$ is not an eigenvalue of $\Phi_w(1)$.

Write $\operatorname{Gr}(\Phi_w(t))=\{(v,\Phi_w(t)v):v\in\mathbb R^{2n}\}$ and $\Delta=\{(v,v):v\in\mathbb R^{2n}\}$. Both are Lagrangian in $(\mathbb R^{2n}\oplus\mathbb R^{2n},-\omega_0\oplus\omega_0)$. Define the Conley–Zehnder index by $\mu_{\mathrm{CZ}}(\Phi_w)=\mu_{\mathrm{RS}}(\operatorname{Gr}\Phi_w,\Delta)$, using the Robbin–Salamon Maslov path index. For a crossing time $t_0$, its crossing form on $\operatorname{Gr}\Phi_w(t_0)\cap\Delta$ is $v\mapsto(-\omega_0\oplus\omega_0)(v,\dot v(t_0))$ for a smooth local section $v(t)\in\operatorname{Gr}\Phi_w(t)$ through $v$; a crossing is regular when this form is nondegenerate. For paths with regular crossings, the index is the sum of crossing-form signatures at interior crossings with half-signatures at endpoint crossings. For arbitrary paths it is the fixed-endpoint homotopy-invariant extension of this rule. The normalization is that a sufficiently short positive rotation in a symplectic two-plane has index $+1$.

For a based unitary loop $g:S^1\to U(n)$, define its Maslov degree to be $\operatorname{wind}(\det_{\mathbb C}g)$, the topological degree of its determinant map. In this convention the loop-shift law is $\mu_{\mathrm{CZ}}(g\Phi_w)-\mu_{\mathrm{CZ}}(\Phi_w)=2\operatorname{wind}(\det_{\mathbb C}g)$. If $\tau_w(t)$ and $\tau_{w\#A}(t)$ are unitary cap-induced frames of $T_{x(t)}M$ for $w$ and $w\#A$, choose them to agree at $t=0$ and define $g_A(t)=\tau_{w\#A}(t)^{-1}\tau_w(t)$ along the positively oriented gluing circle. Then $g_A$ is a based loop in $U(n)$, the linearized paths satisfy $\Phi_{w\#A}(t)=g_A(t)\Phi_w(t)$, and the clutching convention is $c_1(A)=-\operatorname{wind}(\det_{\mathbb C}g_A)$. Thus the loop shift is $2\operatorname{wind}(\det_{\mathbb C}g_A)=-2c_1(A)$. No differential or Floer homology is defined here.

The index does not depend on the chosen unitary trivialization of a fixed cap. After a constant unitary change makes two such frames $\tau_w,\tau'_w$ agree at $t=0$, their boundary transition $g(t)=\tau'_w(t)^{-1}\tau_w(t)$ is a based loop that extends over the disk, so its determinant has winding zero. The corresponding paths satisfy $\Phi'_w(t)=g(t)\Phi_w(t)$, and the loop-shift law above gives the same index.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[lem-gts-hamiltonian-evolution-preserves-symplectic-form]]
