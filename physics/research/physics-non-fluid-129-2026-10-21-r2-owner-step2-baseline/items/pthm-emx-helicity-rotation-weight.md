---
id: pthm-emx-helicity-rotation-weight
kind: physics-theorem
title: SO(2) helicity character and geometric phase
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-emx-helicity-line-bundle
  - pthm-emx-helicity-projection
  - pthm-emx-helicity-berry-curvature
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emx-helicity-line-bundle: formulation-prerequisite
  pthm-emx-helicity-projection: physical-result
  pthm-emx-helicity-berry-curvature: physical-result
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical Maxwell-Lorentz vacuum model in the smooth source-free
  nonzero-Fourier-mode regime stated by the supplier, with no extra approximation.
  Rotations are proper active spatial rotations and parallel transport is that
  of the direction-sphere connection. This is the SO(2) helicity character, not
  a spin/orbital angular-momentum decomposition or a photon position operator;
  no dynamical time evolution, measured phase, material medium, quantization, or
  empirical claim is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 2, PDF pp. 3–4: helicity phase under rotation and direction-sphere geometric phase; the active-rotation sign is derived here from the stated frame."
    - title: "David Tong, The Quantum Hall Effect, TIFR Infosys Lecture Notes (2016)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qhe/qhe.pdf"
      locator: "§1.5.1, printed pp. 28–31: parallel transport, local Berry connection, gauge transformation and surface-curvature phase. The classical connection convention here is recalculated explicitly."
verification:
  precheck: pending
---

## Statement

Fix $n\in S^2$ and $\sigma\in\{+1,-1\}$. Put $U(1):=\{z\in\mathbb C:|z|=1\}$. For the dimensionless angle $\alpha\in\mathbb R/(2\pi\mathbb Z)$, define the proper active rotation fixing $n$ by $R_{n,\alpha}z=(n\cdot z)n+\cos\alpha\,(z-(n\cdot z)n)+\sin\alpha\,(n\times z)$ on $\mathbb C^3$, and set $SO(2)_n:=\{R_{n,\alpha}:\alpha\in\mathbb R/(2\pi\mathbb Z)\}$. It acts on the whole helicity fibre $L_\sigma(n)$ by $R_{n,\alpha}z=e^{-i\sigma\alpha}z$, so the fibre carries the character $\rho_\sigma(R_{n,\alpha})=e^{-i\sigma\alpha}$. For a piecewise $C^1$ closed direction path $\gamma:[0,1]\to S^2$ with a finite subdivision $0=t_0<\cdots<t_m=1$ and local unit frames $v_j$ on the subpaths, define parallel transport by $\nabla s=P_\sigma ds=0$. If $v_{j+1}(\gamma(t_j))=g_jv_j(\gamma(t_j))$ at each internal join and $v_m(\gamma(1))=g_mv_1(\gamma(0))$, where $g_j,g_m\in U(1)$, then its holonomy, the scalar multiplying an initial fibre vector after transport around $\gamma$, is $\mathrm{Hol}_\gamma=\bigl(\prod_{j=1}^m\exp(i\int_{\gamma|[t_{j-1},t_j]}A_j)\bigr)\bigl(\prod_{j=1}^{m-1}g_j^{-1}\bigr)g_m$. In a single periodic frame this reduces to $\exp(i\oint_\gamma A)$. If a finite oriented smooth singular $2$-chain $\Sigma$ lies in one frame patch and $\partial\Sigma=\gamma$, then $\mathrm{Hol}_\gamma=\exp(i\int_\Sigma F_\sigma)$.

## Statement references

[[def-emx-helicity-line-bundle]]

[[pthm-emx-helicity-projection]]

[[pthm-emx-helicity-berry-curvature]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The fixed direction $n$, helicity $\sigma$, the active rotation and the line-bundle connection convention in the Statement.

[F1] [[def-emx-helicity-line-bundle]] defines $v_\sigma=(e_\theta+i\sigma e_\phi)/\sqrt2$, $\nabla s=P_\sigma ds$, and $A=i v^\dagger d v$ with $A'=A-d\chi$ under $v'=e^{i\chi}v$.

[F2] [[pthm-emx-helicity-projection]] defines the transverse fibre $T_n=\{z\in\mathbb C^3:n\cdot z=0\}$ and the projector $P_\sigma$; its range lies in $T_n$ and satisfies $C_nz=\sigma z$.

[F3] [[pthm-emx-helicity-berry-curvature]] proves the global curvature $F_\sigma=-\sigma\omega_{S^2}$ for $\omega_{S^2,n}(X,Y)=n\cdot(X\times Y)$.

[F4] [[thm-stokes-theorem-for-smooth-singular-chains]] states $\int_c d\alpha=\int_{\partial c}\alpha$ for finite smooth singular chains and smooth forms of the matching degree.

## Proof

**Given:** $n\in S^2$, $\sigma\in\{+1,-1\}$, an active angle $\alpha$, and a path and subdivision as in the Statement.

1.1 For $z\in L_\sigma(n)$, [F2] gives $n\cdot z=0$ and $n\times z=-i\sigma z$. The defining formula therefore reduces to $R_{n,\alpha}z=(\cos\alpha-i\sigma\sin\alpha)z=e^{-i\sigma\alpha}z$. Orthogonality on $n^\perp$ and fixation of $n$ show $R_{n,\alpha}$ is a proper rotation. The phase is unchanged when $\alpha$ is increased by $2\pi$ because $\sigma$ is an integer, and addition of angles multiplies phases, proving it is the stated character. [F2, algebra]

2.1 Write a section on one chart as $s=a v_j$. By [F1], $\nabla s=(da-iA_j a)v_j$, so $\nabla_{\dot\gamma}s=0$ is the scalar ODE $\dot a=iA_j(\dot\gamma)a$, whose solution across that subpath multiplies $a$ by $\exp(i\int A_j)$. At an internal join, equality of the section on both frames gives $a_{j+1}v_{j+1}=a_jv_j$, hence $a_{j+1}=g_j^{-1}a_j$. At the end, $v_m(\gamma(1))=g_mv_1(\gamma(0))$ converts the final coefficient to $g_ma_m$ in the starting frame. Multiplying these scalar factors gives the formula in the Statement. [F1, step 1.1, construct, algebra]

3.1 If a frame on subpath $j$ is changed to $v'_j=h_jv_j$ with $h_j$ smooth and $U(1)$-valued, the local connection changes by $A'_j=A_j+i h_j^{-1}dh_j$ (locally $h_j=e^{i\chi_j}$ this is $A_j-d\chi_j$). The segment exponential acquires the endpoint ratio $h_j(t_j)^{-1}h_j(t_{j-1})$; the adjacent transition factors change by the inverse endpoint ratios. These factors cancel at every internal join and at the identified loop endpoint. Thus the product formula is independent of the chosen local frames; no single global $A$ is assumed. [F1, step 2.1, algebra]

4.1 When one frame is defined on the whole spanning chain $\Sigma$, the loop has no internal transitions and the endpoint frame agrees with itself, so [F3] and [F4] give $\mathrm{Hol}_\gamma=\exp(i\oint_\gamma A)=\exp(i\int_\Sigma dA)=\exp(i\int_\Sigma F_\sigma)$. For paths or surfaces requiring more than one patch, the transition factors in step 2.1 are part of the holonomy; a bare integral of a nonexistent global one-form is not asserted. [F3, F4, step 2.1, algebra] ∎
