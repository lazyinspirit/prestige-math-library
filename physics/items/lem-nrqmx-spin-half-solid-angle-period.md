---
id: lem-nrqmx-spin-half-solid-angle-period
kind: lemma
domain: mathematics
library: mathematics
title: Spin-half curvature and solid-angle filling period
status: published
origin: pipeline
dependency_level: 4
deps:
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - def-axiom-of-choice
  - def-countable-choice
  - def-wedge-product-of-differential-forms
  - thm-nrqmx-berry-projector-curvature
  - lem-nrqmx-c2-projector-chern-integrality
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
  lem-nrqmx-c2-projector-chern-integrality: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
---

## Statement

Assume full AC. Let $S^2=\{n\in\mathbb R^3:|n|=1\}$ have the metric induced from $\mathbb R^3$ and the outward orientation; its area form is $\omega_n(u,v)=n\cdot(u\times v)$ for $u,v\in T_nS^2$, so $\omega=\sin\theta\,d\theta\wedge d\phi$ in spherical coordinates. Let $D^2=\{x\in\mathbb R^2:|x|\leq1\}$ have orientation $dx\wedge dy$; $C^2$ maps on $D^2$ have derivatives through order two extending continuously to the boundary. Set
$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad P_+(n)=\frac{I+n_x\sigma_x+n_y\sigma_y+n_z\sigma_z}{2}.$$
For any two $C^2$ maps $f_0,f_1:D^2\to S^2$ from an oriented disk, with the same boundary map and its induced boundary orientation, the two oriented solid-angle integrals differ by a multiple of $4\pi$:
$$\int_{D^2}f_0^*\omega-\int_{D^2}f_1^*\omega\in4\pi\mathbb Z.$$

## Facts & Assumptions

**Given:** Full AC, the outward-oriented unit sphere, its area form, the Pauli matrices, and the two $C^2$ disk maps with equal boundary trace.

[A1] Full AC is [[def-axiom-of-choice]] and implies Countable Choice [[def-countable-choice]].

[F1] [[thm-nrqmx-berry-projector-curvature]]: a $C^2$ orthogonal projector has projected curvature $P(dP\wedge dP)P$, and in a local unit frame its connection form is $u^*du$.

[F2] [[lem-nrqmx-c2-projector-chern-integrality]]: under full AC, for every $C^2$ rank-one projector on a compact boundaryless oriented smooth surface, $\frac{i}{2\pi}\int\operatorname{tr}F$ is an integer.

[F3] [[def-c-r-and-smooth-maps-between-smooth-manifolds]] and [[def-smooth-manifold]]: in the interior, $C^2$ means that chart representatives have continuous derivatives through order two. On the closed disk, the same derivatives extend continuously to the boundary in its half-disk charts.

[F4] [[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]] and [[def-wedge-product-of-differential-forms]]: matrix-valued exterior derivatives are componentwise, and the wedge product is pointwise alternating multiplication; pullback commutes with these operations by the coordinate chain rule.

## Proof

1.1 Write $n=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$ and use
$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
Direct multiplication of the displayed matrices gives $\sigma_j^2=I$ and $\sigma_j\sigma_k+\sigma_k\sigma_j=0$ for $j\ne k$, while each $\sigma_j$ has trace zero. Hence $(n\cdot\sigma)^2=(n_x^2+n_y^2+n_z^2)I=I$ and $\operatorname{tr}(n\cdot\sigma)=0$, so $P_+$ is a rank-one orthogonal projector. On the northern chart, $u_N=(\cos(\theta/2),e^{i\phi}\sin(\theta/2))^T$ is a unit frame and $A_N=u_N^*du_N=i(1-\cos\theta)d\phi/2$, giving $dA_N=(i/2)\omega$. On the southern chart $u_S=e^{-i\phi}u_N$ is regular, and $A_S=A_N-i\,d\phi=-i(1+\cos\theta)d\phi/2$, so $dA_S=(i/2)\omega$ there as well. By [F1], these local calculations identify the global curvature trace as $\operatorname{tr}F_+=(i/2)\omega$. [given, F1, algebra]

1.2 Use orientation-preserving disk coordinates to identify each $D^2$ with $\{x\in\mathbb R^2:|x|\leq1\}$ oriented by $dx\wedge dy$. The explicit collar is $(q,t)\mapsto(1-t)q$, where $q=e^{i\theta}\in S^1$ and $t=1-r\geq0$ is inward radial distance. Since $dx\wedge dy=r\,d\theta\wedge dt$, the induced boundary orientation at $t=0$ is increasing $\theta$ (counterclockwise). Define $h(s)=e^{-1/s}$ for $s>0$ and $h(s)=0$ for $s\leq0$. For $0\leq t\leq\epsilon/2$ set $\chi_0(t)=h(t)/(h(t)+h(\epsilon/2-t))$, and for $t\geq\epsilon/2$ set $\chi_0(t)=1$. Every derivative of $h$ vanishes at $0$, so $\chi_0$ is smooth, flat at $0$, positive for $t>0$, at most $1$, and equal to $1$ near $\epsilon$; hence $\int_0^\epsilon\chi_0(t)\,dt<\epsilon$. Put $b(t)=h(t-\epsilon/4)h(3\epsilon/4-t)$, a nonnegative smooth function supported in $[\epsilon/4,3\epsilon/4]$ with positive integral, and define $\chi=\chi_0+c b$ where $c=(\epsilon-\int_0^\epsilon\chi_0)/\int_0^\epsilon b>0$. Then $\chi$ is positive for $t>0$, flat at $0$, equals $1$ near $\epsilon$, and has integral $\epsilon$. Set $\rho(t)=\int_0^t\chi(s)\,ds$. Thus $\rho(0)=\rho'(0)=\rho''(0)=0$, $\rho'(t)>0$ for $t>0$, and $\rho(t)=t$ near $\epsilon$. Replace $f_j(q,t)$ by $f_j(q,\rho(t))$ in each collar. This preserves area integral: the pullback coefficient is multiplied by $\rho'(t)$, and substitution $s=\rho(t)$ gives the original integral. Now form $X=D_0^2\cup_{S^1}(-D_1^2)$ by gluing the standard boundary circles with the identity; the first disk has orientation $dx\wedge dy$, the second has its negative, and their induced boundary orientations are opposite. Use the signed collar coordinates $s=t$ on the first disk and $s=-t$ on the second as seam charts; together with the two disk interiors they define the smooth structure on $X$. Both sides have orientation $d\theta\wedge ds$. The modified maps have the same boundary trace and all normal derivatives through order two vanish at the seam, while their tangential derivatives through order two agree there. They therefore glue to a $C^2$ map $g:X\to S^2$. The double is compact, smooth and boundaryless, and its chosen orientation gives $\int_Xg^*\omega=\int_{D^2}f_0^*\omega-\int_{D^2}f_1^*\omega$. [given, F3, construct, algebra]

2.1 The projector $P_+\circ g$ is $C^2$ and rank one. Its projected curvature is $g^*F_+$: applying [F1] to $P_+\circ g$, the chain rule and [F4] give $d(P_+\circ g)=g^*dP_+$ and preserve the ordered wedge product. Thus [F2] gives
$$-\frac1{4\pi}\left(\int_{D^2}f_0^*\omega-\int_{D^2}f_1^*\omega\right)=\frac{i}{2\pi}\int\operatorname{tr}F_{P_+\circ g}\in\mathbb Z,$$
where the coefficient is $-1/(4\pi)$ because $i\cdot i=-1$. Rearranging proves the stated $4\pi$ period. This is a topological ambiguity statement for the same boundary loop; no physical observation is involved. [A1, F1, F2, F4, step 1.1, step 1.2, algebra] ∎
