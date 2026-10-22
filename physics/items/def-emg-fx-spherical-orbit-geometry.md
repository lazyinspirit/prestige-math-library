---
id: def-emg-fx-spherical-orbit-geometry
kind: definition
title: Spherical orbit geometry and rotational invariance
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-xs-rn-data
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 2, equation (1), PDF pp. 2–3: the local spherically symmetric warped metric and areal-radius variable; the source uses signature (+---)."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.1.1, printed pp. 234–236 (PDF pp. 241–243): the local spherical quotient metric, its areal-radius function, and the restrictions of the coordinate argument."
verification:
  precheck: n/a
---

## Definition

Let $U$ be a nonempty, connected, simply connected, second-countable smooth
two-manifold without boundary. Let $q$ be a smooth symmetric covariant
$2$-tensor field on $U$ such that $q_y$ is nondegenerate of signature $(-,+)$
for every $y\in U$. Choose a smooth vector field $N$ on $U$ with
$q(N,N)<0$ everywhere; the **time orientation** is the choice of the
connected component containing $N_y$ in each timelike cone
$\{v\in T_yU:q_y(v,v)<0\}$. Choose an orientation of $U$, and let
$\epsilon_2$ be its metric volume form, characterized by
$\epsilon_2(e_0,e_1)=1$ on every positively oriented $q$-orthonormal frame
with $q(e_0,e_0)=-1$ and $q(e_1,e_1)=1$. Let $r:U\to(0,\infty)$ be smooth.
Take $S^2=\{p\in\mathbb R^3:p\cdot p=1\}$ with the smooth structure and
induced round metric fixed by the earlier dyonic Reissner–Nordström data
definition cited below. Its tangent plane is
$T_pS^2=\{u\in\mathbb R^3:p\cdot u=0\}$, its metric is
$\gamma_{S^2,p}(u,v)=u\cdot v$, and its outward area form is
$(\omega_{S^2})_p(u,v)=\det(p,u,v)$. Write $\wedge$ for the exterior
product of alternating forms. In polar coordinates
$\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$. Put
$\mathcal M:=U\times S^2$ and define its projections by
$\pi_U(y,p):=y$ and $\pi_S(y,p):=p$. For a smooth map $F:X\to Y$ and a
smooth covariant $2$-tensor field $h$ on $Y$, define its pullback by
$$(F^*h)_x(v,w):=h_{F(x)}(dF_xv,dF_xw),$$
where $x\in X$, $v,w\in T_xX$, and $dF_x:T_xX\to T_{F(x)}Y$ is the
derivative. This formula also defines pullback of a covariant $2$-form.
Define
$$g:=\pi_U^*q+(r\circ\pi_U)^2\pi_S^*\gamma_{S^2}.$$
It has Lorentzian signature $(-,+,+,+)$.
The fibre over $y\in U$ is $S^2_y:=\pi_U^{-1}(\{y\})=\{y\}\times S^2$.
Its induced Riemannian metric is $r(y)^2\gamma_{S^2}$ and its area form is
$r(y)^2\omega_{S^2}$; in polar angles $0<\theta<\pi$ and
$0\le\phi<2\pi$, its area is
$\int_0^{2\pi}\int_0^\pi r(y)^2\sin\theta\,d\theta\,d\phi=4\pi r(y)^2$.
Thus $r(y)>0$ is the areal radius of this orbit sphere.
Choose the four-dimensional orientation so that its metric volume form is
$$\mathrm{vol}_g=-(r\circ\pi_U)^2\,\pi_U^*\epsilon_2\wedge\pi_S^*\omega_{S^2}.$$
In any chart $(x^0,r)$ for which $\epsilon_2=-dx^0\wedge dr$, this gives
$\mathrm{vol}_g=dx^0\wedge dr\wedge r^2\omega_{S^2}$.

Define
$$SO(3):=\{R\in\mathbb R^{3\times3}:R^{\mathsf T}R=I_3,\ \det R=1\}.$$
Each $R\in SO(3)$ acts on $S^2$ by $p\mapsto Rp$ and defines the smooth
diffeomorphism $\rho_R:\mathcal M\to\mathcal M$,
$\rho_R(y,p)=(y,Rp)$, whose inverse is $\rho_{R^{\mathsf T}}$.
For nonnegative integers $a,b$, a smooth tensor field of type $(a,b)$ on
$\mathcal M$ is a smooth section of
$$T^a_b\mathcal M:=(T\mathcal M)^{\otimes a}\otimes(T^*\mathcal M)^{\otimes b};$$
at each $x\in\mathcal M$ its value is multilinear on $a$ covectors in
$T_x^*\mathcal M$ and $b$ vectors in $T_x\mathcal M$, where
$T_x^*\mathcal M:=\operatorname{Hom}_{\mathbb R}(T_x\mathcal M,\mathbb R)$.
Smoothness means that the components of the section in every smooth product
chart are $C^\infty$. For such a field $T$, define its pullback by the
diffeomorphism $\rho_R$ by
$$(\rho_R^*T)_x(\alpha_1,\ldots,\alpha_a;v_1,\ldots,v_b)=T_{\rho_R(x)}(\alpha_1\circ(d\rho_R)_x^{-1},\ldots,\alpha_a\circ(d\rho_R)_x^{-1};(d\rho_R)_xv_1,\ldots,(d\rho_R)_xv_b)$$
where $\alpha_i\in T_x^*\mathcal M$, $v_j\in T_x\mathcal M$, and
$(d\rho_R)_x:T_x\mathcal M\to T_{\rho_R(x)}\mathcal M$ is the derivative
of $\rho_R$ at $x$.
A real two-form is a smooth alternating tensor field of type $(0,2)$.
The field $T$ is **rotationally invariant** if $\rho_R^*T=T$ for every
$R\in SO(3)$; a two-form $\mathcal F$ is rotationally invariant in exactly
this sense. This definition specifies a local warped-product model and a
group action. No embedding into a larger spacetime, global potential, maximal
extension, or field equation is assumed.

## Definition references

[[def-emg-xs-rn-data]]

## Diagram

The displayed projection is only a schematic: its circle stands for the
entire round two-sphere fibre. The proof of no result relies on the drawing.

~~~tikz
\begin{tikzpicture}[scale=1]
  \draw[rounded corners] (0,0) rectangle (2.6,1.7);
  \node at (1.3,1.32) {$U$};
  \fill (1.3,0.72) circle (1.5pt);
  \node[below] at (1.3,0.65) {$y$};
  \draw[rounded corners] (5.0,0) rectangle (9.2,1.7);
  \node at (7.1,1.35) {$\mathcal M=U\times S^2$};
  \draw (7.1,0.68) circle (0.43);
  \node at (7.1,0.68) {$S^2_y$};
  \draw[->] (5.0,0.55) -- (2.6,0.55)
    node[midway,above] {$\pi_U(y,p)=y$};
  \node[below] at (7.1,0.08) {$S^2_y=\pi_U^{-1}(\{y\})=\{y\}\times S^2$};
\end{tikzpicture}
~~~
