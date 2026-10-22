---
id: ex-gr-fx12-2
kind: example
title: Closed bulk current with nonzero boundary flux
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps:
  - def-gr-fx-covariant-presymplectic-current
  - prop-gr-fx-on-shell-current-closure
  - prop-gr-fx-potential-ambiguity
  - def-gr-fx-admissible-phase-reduction
  - def-wedge-product-of-differential-forms
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-local-coordinate-formula-for-the-exterior-derivative
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  prop-gr-fx-on-shell-current-closure: mathematical-premise
  prop-gr-fx-potential-ambiguity: mathematical-premise
  def-gr-fx-admissible-phase-reduction: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $M=\mathbb R^4$ with coordinates $(X^1,X^2,X^3,X^4)=(t,x,y,z)$,
orientation $dt\wedge dx\wedge dy\wedge dz$, and flat metric
$-dt^2+dx^2+dy^2+dz^2$. For one-forms use
$$*dt=-dx\wedge dy\wedge dz,\qquad *dx=-dt\wedge dy\wedge dz,\qquad *dy=dt\wedge dx\wedge dz,\qquad *dz=-dt\wedge dx\wedge dy.$$
Here the massless wave equation means
$(-\partial_t^2+\partial_x^2+\partial_y^2+\partial_z^2)u=0$. Let
$u_1:=t^2+x^2$ and $u_2:=t$, and define the smooth field family
$\psi_{a,b}:=a u_1+b u_2$ on $P=\mathbb R^2$. Both $u_1,u_2$ solve the
massless wave equation, so $\psi=0$ at $(a,b)=(0,0)$ is a solution and
$\delta_1\psi:=\partial_a\psi_{a,b}=u_1$,
$\delta_2\psi:=\partial_b\psi_{a,b}=u_2$ are commuting variations solving
that same equation.
Use the massless scalar Lagrangian
$\mathcal L=-\tfrac12d\psi\wedge*d\psi$, with selected potential
$\theta(\psi;\delta\psi)=-\delta\psi*d\psi$ and current
$\omega(\delta_1,\delta_2)
=\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi$.
For $0<t_1<t_2$ and $L>0$, put
$a_0=(t_1,0,0,0)$ and
$(\ell_1,\ell_2,\ell_3,\ell_4)=(t_2-t_1,L,1,1)$. Let
$$T_4:=\{r\in\mathbb R^4:r_j\ge0,\ \textstyle\sum_{j=1}^4r_j\le1\}$$
with orientation $dr_1\wedge dr_2\wedge dr_3\wedge dr_4$. For each
permutation $\rho\in S_4$, define vertices
$$v_0^\rho:=a_0,\qquad v_j^\rho:=a_0+\sum_{k=1}^j\ell_{\rho(k)}e_{\rho(k)}\quad(1\le j\le4),$$
where $e_1,e_2,e_3,e_4$ is the standard basis in the ordered coordinates
$(t,x,y,z)$. Define the 24 affine simplex maps and their oriented sum by
$$\sigma_\rho(r):=v_0^\rho+\sum_{j=1}^4r_j(v_j^\rho-v_0^\rho),\qquad C:=\sum_{\rho\in S_4}\operatorname{sgn}(\rho)\,\sigma_\rho.$$
Each map has domain orientation $dr_1\wedge dr_2\wedge dr_3\wedge dr_4$;
the coefficient $\operatorname{sgn}(\rho)$ orients it relative to
$dt\wedge dx\wedge dy\wedge dz$.

For $t\in\{t_1,t_2\}$, let $b_t=(t,0,0,0)$ and
$(m_1,m_2,m_3)=(L,1,1)$. With
$$T_3:=\{r\in\mathbb R^3:r_j\ge0,\ \textstyle\sum_{j=1}^3r_j\le1\}$$
oriented by $dr_1\wedge dr_2\wedge dr_3$, define, for $\rho\in S_3$,
$$w_0^{t,\rho}:=b_t,\qquad w_j^{t,\rho}:=b_t+\sum_{k=1}^jm_{\rho(k)}\widehat e_{\rho(k)}\quad(1\le j\le3),$$
where $\widehat e_1=e_2$, $\widehat e_2=e_3$, and $\widehat e_3=e_4$, and put
$$\sigma_{t,\rho}(r):=w_0^{t,\rho}+\sum_{j=1}^3r_j(w_j^{t,\rho}-w_0^{t,\rho}),\qquad \Sigma_t:=\sum_{\rho\in S_3}\operatorname{sgn}(\rho)\,\sigma_{t,\rho}.$$
Each $\Sigma_t$ is oriented by $dx\wedge dy\wedge dz$. Define the side chain
by $B:=\partial C-\Sigma_{t_2}+\Sigma_{t_1}$, with the signed simplex-face
multiplicities inherited from the boundary of $C$. The coordinate-order
boundary calculation shows that $B$ is supported on the six side faces of the
box, each with outward-normal-first orientation from
$dt\wedge dx\wedge dy\wedge dz$; their
oriented volume forms are $+dt\wedge dy\wedge dz$ at $x=0$,
$-dt\wedge dy\wedge dz$ at $x=L$,
$-dt\wedge dx\wedge dz$ at $y=0$,
$+dt\wedge dx\wedge dz$ at $y=1$,
$+dt\wedge dx\wedge dy$ at $z=0$, and
$-dt\wedge dx\wedge dy$ at $z=1$. Then the bulk current is
closed on the box, and by definition of $B$,
$\partial C=\Sigma_{t_2}-\Sigma_{t_1}+B$, but
$$\Omega_{\Sigma_{t_2}}-\Omega_{\Sigma_{t_1}} =-L(t_2^2-t_1^2)\ne0.$$
The oriented side flux is $L(t_2^2-t_1^2)$, so the finite-region balance is
$\Omega_{\Sigma_{t_2}}-\Omega_{\Sigma_{t_1}}=-\int_B\omega$. The box is
compact; the example uses no asymptotic region or falloff premise.

## Example references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §§2.2–2.4](https://arxiv.org/pdf/1906.08616)

## Diagram conventions

The following is the $t$–$x$ projection of the four-dimensional box; the
$y,z$ directions are suppressed. It shows the two constant-time cuts and the
faces $x=0$ and $x=L$. Boundary orientations are induced from
$dt\wedge dx\wedge dy\wedge dz$ by the outward-normal-first convention.

```tikz
\begin{tikzpicture}[scale=1.05]
  \draw[thick] (0,0) rectangle (4,2);
  \draw[thick,blue] (0,0) -- (4,0);
  \draw[thick,blue] (0,2) -- (4,2);
  \draw[thick,red] (0,0) -- (0,2);
  \draw[thick,red] (4,0) -- (4,2);
  \draw[->] (2,1) -- (2,1.65) node[above] {$t$};
  \draw[->] (2,1) -- (2.7,1) node[right] {$x$};
  \node[below] at (2,0) {$\Sigma_{t_1}$};
  \node[above] at (2,2) {$\Sigma_{t_2}$};
  \node[left] at (0,1) {$x=0$};
  \node[right] at (4,1) {$x=L$};
  \node at (2,0.5) {$C$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The flat oriented spacetime, the massless scalar Lagrangian, the smooth two-parameter family $\psi_{a,b}$, the box simplex maps $\sigma_\rho$, the cut chains $\Sigma_t$, and the oriented side chain $B$ defined in the Example.

[A1] $\delta_1\psi=t^2+x^2$ and $\delta_2\psi=t$ each solve $-\partial_t^2\delta\psi+\partial_x^2\delta\psi+ \partial_y^2\delta\psi+\partial_z^2\delta\psi=0$.

[F1] The current has Iyer–Wald ordering and $\Omega_\Sigma=\int_\Sigma\omega$. [[def-gr-fx-covariant-presymplectic-current]]

[F2] On a solution with linearized variations, $d_M\omega=0$ and $\Omega_{\Sigma_2}-\Omega_{\Sigma_1}=-\int_B\omega$ for a finite chain $C$ with $\partial C=\Sigma_2-\Sigma_1+B$. [[prop-gr-fx-on-shell-current-closure]]

[F3] A change in $\theta$ changes the integrated current by its exact corner term on $\partial\Sigma$. [[prop-gr-fx-potential-ambiguity]]

[F4] A reduced symplectic space requires a supplied smooth quotient of the null distribution with a descended closed nondegenerate form. [[def-gr-fx-admissible-phase-reduction]]

[F5] The exterior derivative obeys the degree-one graded product rule. [[thm-the-exterior-derivative-is-a-graded-derivation]]

[F6] In coordinates, $d(\sum_I f_I\,dx^I)=\sum_I df_I\wedge dx^I$. [[thm-local-coordinate-formula-for-the-exterior-derivative]]

[F7] The wedge product of forms is the pointwise wedge of their alternating covariant tensors. [[def-wedge-product-of-differential-forms]]

## Verification

**Given:** As in [A1] and [F1]–[F4], with the box simplex maps, cut chains, and side chain defined in the Example.

1.1 The scalar-current formula from the chosen decomposition is $\omega=\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi$. Substitution of the displayed variations and Hodge map gives $$\omega=(x^2-t^2)\,dx\wedge dy\wedge dz -2tx\,dt\wedge dy\wedge dz.$$ By [F6], differentiating the first term gives $-2t\,dt\wedge dx\wedge dy\wedge dz$; differentiating the second gives $+2t\,dt\wedge dx\wedge dy\wedge dz$. The graded product rule [F5] justifies the coefficient differentiations. Thus $d_M\omega=0$, agreeing with [F2]. [A1, F1, F2, F5, F6, F7, algebra]

1.2 Set $s_i=(X^i-(a_0)_i)/\ell_i$ for $1\le i\le4$. In these coordinates, the affine simplex $\sigma_\rho$ has ordered vertices $0,e_{\rho(1)},e_{\rho(1)}+e_{\rho(2)},\ldots,e_{\rho(1)}+\cdots+e_{\rho(4)}$. Its determinant is $\operatorname{sgn}(\rho)\ell_1\ell_2\ell_3\ell_4$, so the coefficient $\operatorname{sgn}(\rho)$ gives the box orientation. Its image is $1\ge s_{\rho(1)}\ge\cdots\ge s_{\rho(4)}\ge0$; these 24 sectors cover the box with disjoint interiors. Two sectors adjacent by swapping entries $\rho(k),\rho(k+1)$ share a face obtained by deleting their different intermediate vertices; the ordered face maps agree while their permutation coefficients are opposite, so every internal boundary term cancels. On $s_1=1$, time is first in the permutation, and the remaining boundary simplices are exactly $\Sigma_{t_2}$ with positive coefficient. On $s_1=0$, time is last; the permutation sign is reversed relative to the spatial order, so the boundary chain is $-\Sigma_{t_1}$. The other exterior facets are the six side faces and form $B$. Outward-normal-first contraction of the volume form with their coordinate normals gives the six orientations listed in the Example. Hence $\partial C=\Sigma_{t_2}-\Sigma_{t_1}+B$. [given, construct, algebra]

2.1 On a cut with orientation $dx\wedge dy\wedge dz$, $$\Omega_{\Sigma_t}=\int_0^L\int_0^1\int_0^1(x^2-t^2)\,dy\,dz\,dx =\frac{L^3}{3}-Lt^2.$$ Therefore $\Omega_{\Sigma_{t_2}}-\Omega_{\Sigma_{t_1}} =-L(t_2^2-t_1^2)$. [A1, F1, algebra, step 1.1]

3.1 At $x=L$, the outward-normal-first boundary orientation is $-dt\wedge dy\wedge dz$, while $\omega|_{x=L}=-2tL\,dt\wedge dy\wedge dz$; the oriented flux is $L(t_2^2-t_1^2)$. At $x=0$ the pullback is zero because the coefficient $2tx$ vanishes. The $y$ and $z$ faces have zero pullback because each term in $\omega$ contains respectively $dy$ or $dz$. Hence the total oriented side flux is $\int_B\omega=L(t_2^2-t_1^2)$, verifying [F2]. [A1, F1, F2, step 1.2, step 2.1]

4.1 For each cut, [F3] identifies any potential-induced change with an integral over its boundary; the explicit calculation is for the fixed potential in the Statement and makes no claim that a boundary counterterm vanishes on these cuts. [F3, step 3.1]

5.1 The nonzero difference in step 2.1 shows that this bulk-closed current does not define a cut-independent integrated form without a boundary-flux condition. The example supplies no quotient or descended symplectic form beyond the hypotheses in [F4]. [F4, step 2.1, step 3.1] ∎
