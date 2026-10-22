---
id: pthm-emx-helicity-rotation-weight
kind: physics-theorem
title: SO(2) helicity character and geometric phase
status: published
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For $u,v\in\mathbb C^3$, the dot and cross products are the complex-bilinear extensions with coordinate formulas $u\cdot v=\sum_{j=1}^3u_jv_j$ and $u\times v=(u_2v_3-u_3v_2,u_3v_1-u_1v_3,u_1v_2-u_2v_1)$, as defined in the helicity line-bundle item.

Fix $n\in S^2$ and $\sigma\in\{+1,-1\}$. Put $U(1):=\{z\in\mathbb C:|z|=1\}$. For $n\in\mathbb R^3$ and $z\in\mathbb C^3$, the dot in the rotation formula is $n\cdot z=\sum_{j=1}^3n_jz_j$, the complex-bilinear dot product defined in the earlier helicity line-bundle definition. For the dimensionless angle $\alpha\in\mathbb R/(2\pi\mathbb Z)$, define the proper active rotation fixing $n$ by $R_{n,\alpha}z=(n\cdot z)n+\cos\alpha\,(z-(n\cdot z)n)+\sin\alpha\,(n\times z)$ on $\mathbb C^3$, with the complex-linear extension of the real rotation action, and set $SO(2)_n:=\{R_{n,\alpha}:\alpha\in\mathbb R/(2\pi\mathbb Z)\}$. It acts on the whole helicity fibre $L_\sigma(n)$ by $R_{n,\alpha}z=e^{-i\sigma\alpha}z$, so the fibre carries the character $\rho_\sigma(R_{n,\alpha})=e^{-i\sigma\alpha}$. For a piecewise $C^1$ closed direction path $\gamma:[0,1]\to S^2$, choose a finite subdivision $0=t_0<\cdots<t_m=1$ on whose closed subintervals $\gamma$ is $C^1$. For each segment choose an open set $U_j\subseteq S^2$ containing its image and a unit frame $v_j:U_j\to\mathbb C^3$ as defined in the helicity line-bundle definition; write $A_j:=i\sum_{\ell=1}^3\overline{(v_j)_\ell}\,d(v_j)_\ell$. For a one-form $A_j$ on $U_j$, define its oriented curve integral on this segment by
$$\int_{\gamma|[t_{j-1},t_j]}A_j:=\int_{t_{j-1}}^{t_j}(A_j)_{\gamma(t)}(\dot\gamma(t))\,dt,$$
the ordinary Riemann integral of the continuous integrand on that segment. For a $C^1$ section $s(t)\in L_\sigma(\gamma(t))$, define its projected derivative by $\nabla_{\dot\gamma}s(t):=P_\sigma(\gamma(t))\dot s(t)$, with the derivative taken componentwise in $\mathbb C^3$; parallel transport is the solution of $\nabla_{\dot\gamma}s=0$ on each segment. If $v_{j+1}(\gamma(t_j))=g_jv_j(\gamma(t_j))$ at each internal join and $v_m(\gamma(1))=g_mv_1(\gamma(0))$, where $g_j,g_m\in U(1)$, then its holonomy, the scalar multiplying an initial fibre vector after transport around $\gamma$, is $\mathrm{Hol}_\gamma=\bigl(\prod_{j=1}^m\exp(i\int_{\gamma|[t_{j-1},t_j]}A_j)\bigr)\bigl(\prod_{j=1}^{m-1}g_j^{-1}\bigr)g_m$. In one unit frame defined on a neighborhood of the whole loop, write $\oint_\gamma A:=\sum_{j=1}^m\int_{\gamma|[t_{j-1},t_j]}A$; then the formula reduces to $\mathrm{Hol}_\gamma=\exp(i\oint_\gamma A)$. If in addition $\gamma$ is piecewise smooth in the sense that each rescaled segment $\gamma_j(u):=\gamma(t_{j-1}+(t_j-t_{j-1})u)$, $0\le u\le1$, is a smooth singular $1$-simplex, define the finite smooth singular $1$-chain $c_\gamma:=\sum_{j=1}^m\gamma_j$ with its positive path orientation. If a finite oriented smooth singular $2$-chain $\Sigma$ has image in one open frame domain $U$ and $\partial\Sigma=c_\gamma$, then $\mathrm{Hol}_\gamma=\exp(i\int_\Sigma F_\sigma)$.

The piecewise $C^1$ subdivision is understood with one-sided derivatives continuous up to each subinterval endpoint. In the final clause, each rescaled path segment must extend to a smooth map from an open neighborhood of its affine interval into $S^2$; this is the neighborhood-extension condition for a smooth singular $1$-simplex. The open frame domain $U$ is an open subset of $S^2$ carrying one smooth unit frame on all of $U$, and the image of $\Sigma$ lies in $U$.

## Statement references

[[def-emx-helicity-line-bundle]]

[[pthm-emx-helicity-projection]]

[[pthm-emx-helicity-berry-curvature]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

## Facts & Assumptions

**Given:** The fixed direction $n$, helicity $\sigma$, the active rotation and the line-bundle connection convention in the Statement.

[F1] [[def-emx-helicity-line-bundle]] defines the bilinear dot product $u\cdot w=\sum_j u_jw_j$, its local unit frames $v_\sigma=(e_\theta+i\sigma e_\phi)/\sqrt2$, and the connection form $A=i\sum_j\overline{v_j}\,d v_j$ with $A'=A-d\chi$ under $v'=e^{i\chi}v$. The projected derivative along a path is defined in the Statement.

[F2] [[pthm-emx-helicity-projection]] defines the transverse fibre $T_n=\{z\in\mathbb C^3:n\cdot z=0\}$ and the projector $P_\sigma$; its range lies in $T_n$ and satisfies $C_nz=\sigma z$.

[F3] [[pthm-emx-helicity-berry-curvature]] proves the global curvature $F_\sigma=-\sigma\omega_{S^2}$ for $\omega_{S^2,n}(X,Y)=n\cdot(X\times Y)$.

[F4] [[thm-stokes-theorem-for-smooth-singular-chains]] states $\int_c d\alpha=\int_{\partial c}\alpha$ for finite smooth singular chains and smooth forms of the matching degree.

## Proof

**Given:** $n\in S^2$, $\sigma\in\{+1,-1\}$, an active angle $\alpha$, and a path and subdivision as in the Statement.

1.1 For $z\in L_\sigma(n)$, [F2] gives $n\cdot z=0$ and $n\times z=-i\sigma z$. The defining formula therefore reduces to $R_{n,\alpha}z=(\cos\alpha-i\sigma\sin\alpha)z=e^{-i\sigma\alpha}z$. The phase is unchanged when $\alpha$ is increased by $2\pi$ because $\sigma$ is an integer, and addition of angles multiplies phases, proving it is the stated character. [F2, algebra]

2.1 Choose a real unit vector $u\perp n$ and put $v=n\times u$. The real cross-product identities give $|v|=1$, $u\cdot v=0$, and $n\times v=-u$, so $(u,v,n)$ is a positively oriented orthonormal basis. In this basis the real rotation formula has matrix $\begin{pmatrix}\cos\alpha&-\sin\alpha&0\\ \sin\alpha&\cos\alpha&0\\0&0&1\end{pmatrix}$, which is orthogonal with determinant one. Thus $R_{n,\alpha}$ is proper. [F2, step 1.1, algebra]

2.2 Write a section on one chart as $s(t)=a(t)v_j(\gamma(t))$. Since $P_\sigma$ is the orthogonal projection onto the line spanned by the unit vector $v_j$, the projected derivative is $\nabla_{\dot\gamma}s=(\dot a+a\,v_j^\dagger\dot v_j)v_j=(\dot a-iA_j(\dot\gamma)a)v_j$. Thus $\nabla_{\dot\gamma}s=0$ is the scalar ODE $\dot a=iA_j(\dot\gamma)a$, whose solution across that subpath multiplies $a$ by $\exp(i\int A_j)$. At an internal join, equality of the section on both frames gives $a_{j+1}v_{j+1}=a_jv_j$, hence $a_{j+1}=g_j^{-1}a_j$. At the end, $v_m(\gamma(1))=g_mv_1(\gamma(0))$ converts the final coefficient to $g_ma_m$ in the starting frame. Multiplying these scalar factors gives the formula in the Statement. [F1, F2, step 1.1, construct, algebra]

3.1 If a frame on subpath $j$ is changed to $v'_j=h_jv_j$ with $h_j$ smooth and $U(1)$-valued, the local connection changes by $A'_j=A_j+i h_j^{-1}dh_j$ (locally $h_j=e^{i\chi_j}$ this is $A_j-d\chi_j$). The segment exponential acquires the endpoint ratio $h_j(t_j)^{-1}h_j(t_{j-1})$; the adjacent transition factors change by the inverse endpoint ratios. These factors cancel at every internal join and at the identified loop endpoint. Thus the product formula is independent of the chosen local frames; no single global $A$ is assumed. [F1, step 2.2, algebra]

4.1 For the Stokes clause, one frame is defined on the open set containing the image of $\Sigma$. By the line-integral definition and the affine reparametrizations in $c_\gamma$, $\int_{c_\gamma}A=\oint_\gamma A$. Since $\partial\Sigma=c_\gamma$, the cited Stokes theorem [F4] gives $\int_\Sigma dA=\int_{\partial\Sigma}A=\int_{c_\gamma}A$. The local curvature is $F_\sigma=dA$ by [F3], so exponentiation gives $\mathrm{Hol}_\gamma=\exp(i\int_\Sigma F_\sigma)$. For paths or surfaces requiring more than one patch, the transition factors in step 2.2 are part of the holonomy; a bare integral of a nonexistent global one-form is not asserted. [F3, F4, step 2.2, algebra] ∎

