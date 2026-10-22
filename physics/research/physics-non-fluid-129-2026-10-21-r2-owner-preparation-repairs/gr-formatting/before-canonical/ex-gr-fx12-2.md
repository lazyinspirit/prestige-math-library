---
id: ex-gr-fx12-2
kind: example
title: Closed bulk current with nonzero boundary flux
status: draft
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
  precheck: pending
---

## Example

Let $M=\mathbb R^4$ with coordinates $(t,x,y,z)$, orientation
$dt\wedge dx\wedge dy\wedge dz$, and flat metric
$-dt^2+dx^2+dy^2+dz^2$. For one-forms use
$$*dt=-dx\wedge dy\wedge dz,\qquad *dx=-dt\wedge dy\wedge dz,\qquad *dy=dt\wedge dx\wedge dz,\qquad *dz=-dt\wedge dx\wedge dy.$$
Let $\psi=0$ be the background of the massless scalar Lagrangian
$\mathcal L=-\tfrac12d\psi\wedge*d\psi$, with selected potential
$\theta(\psi;\delta\psi)=-\delta\psi*d\psi$ and current
$\omega(\delta_1,\delta_2)
=\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi$.
Take linearized solutions $\delta_1\psi=t^2+x^2$ and $\delta_2\psi=t$.
For $0<t_1<t_2$ and $L>0$,
let $C=[t_1,t_2]\times[0,L]\times[0,1]\times[0,1]$, with its oriented
finite smooth singular chain given by the standard coordinate-order
triangulation into $24$ four-simplices. Let $\Sigma_t$ be its lower or upper
spatial cut, as appropriate. Then the bulk current is closed, but
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
$y,z$ directions are suppressed. It shows the two Cauchy cuts and the two
timelike $x$-faces. Boundary orientations are induced from
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

**Given:** The flat oriented spacetime, the massless scalar Lagrangian, the
zero solution, the two displayed linearized variations, and the finite
triangulated box chain $C$.

[A1] $\delta_1\psi=t^2+x^2$ and $\delta_2\psi=t$ each solve
$-\partial_t^2\delta\psi+\partial_x^2\delta\psi+
\partial_y^2\delta\psi+\partial_z^2\delta\psi=0$.

[F1] The current has Iyer–Wald ordering and
$\Omega_\Sigma=\int_\Sigma\omega$.
[[def-gr-fx-covariant-presymplectic-current]]

[F2] On a solution with linearized variations, $d_M\omega=0$ and
$\Omega_{\Sigma_2}-\Omega_{\Sigma_1}=-\int_B\omega$ for a finite chain
$C$ with $\partial C=\Sigma_2-\Sigma_1+B$.
[[prop-gr-fx-on-shell-current-closure]]

[F3] A change in $\theta$ changes the integrated current by its exact corner
term on $\partial\Sigma$. [[prop-gr-fx-potential-ambiguity]]

[F4] A reduced symplectic space requires a supplied smooth quotient of the
null distribution with a descended closed nondegenerate form.
[[def-gr-fx-admissible-phase-reduction]]

[F5] The exterior derivative obeys the degree-one graded product rule.
[[thm-the-exterior-derivative-is-a-graded-derivation]]

[F6] In coordinates, $d(\sum_I f_I\,dx^I)=\sum_I df_I\wedge dx^I$.
[[thm-local-coordinate-formula-for-the-exterior-derivative]]

[F7] The wedge product of forms is the pointwise wedge of their alternating
covariant tensors. [[def-wedge-product-of-differential-forms]]

## Verification

**Given:** As in [A1] and [F1]–[F4]. The coordinate-order triangulation
subdivides the rescaled box by the $24$ regions
$0\le y_{\pi(1)}\le y_{\pi(2)}\le y_{\pi(3)}\le y_{\pi(4)}\le1$ over
permutations $\pi$ of four coordinates. Shared interior facets occur twice
with opposite induced orientations, leaving exactly the oriented six outer
faces.

1.1 The scalar-current formula from the chosen decomposition is $\omega=\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi$. Substitution of the displayed variations and Hodge map gives $$\omega=(x^2-t^2)\,dx\wedge dy\wedge dz -2tx\,dt\wedge dy\wedge dz.$$ By [F6], differentiating the first term gives $-2t\,dt\wedge dx\wedge dy\wedge dz$; differentiating the second gives $+2t\,dt\wedge dx\wedge dy\wedge dz$. The graded product rule [F5] justifies the coefficient differentiations. Thus $d_M\omega=0$, agreeing with [F2]. [A1, F1, F2, F5, F6, F7, algebra]

2.1 On a cut with orientation $dx\wedge dy\wedge dz$, $$\Omega_{\Sigma_t}=\int_0^L\int_0^1\int_0^1(x^2-t^2)\,dy\,dz\,dx =\frac{L^3}{3}-Lt^2.$$ Therefore $\Omega_{\Sigma_{t_2}}-\Omega_{\Sigma_{t_1}} =-L(t_2^2-t_1^2)$. [A1, F1, algebra, step 1.1]

2.2 At $x=L$, the outward-normal-first boundary orientation is $-dt\wedge dy\wedge dz$, while $\omega|_{x=L}=-2tL\,dt\wedge dy\wedge dz$; the oriented flux is $L(t_2^2-t_1^2)$. At $x=0$ the pullback is zero because the coefficient $2tx$ vanishes. The $y$ and $z$ faces have zero pullback because each term in $\omega$ contains respectively $dy$ or $dz$. Hence the total oriented side flux is $\int_B\omega=L(t_2^2-t_1^2)$, verifying [F2]. [A1, F1, F2, step 2.1]

3.1 For each cut, [F3] identifies any potential-induced change with an integral over its boundary; the explicit calculation is for the fixed potential in the Statement and makes no claim that a boundary counterterm vanishes on these cuts. [F3, step 2.2]

3.2 The nonzero difference in step 2.1 shows that this bulk-closed current does not define a cut-independent integrated form without a boundary-flux condition. The example supplies no quotient or descended symplectic form beyond the hypotheses in [F4]. [F4, step 2.1, step 2.2] ∎ 