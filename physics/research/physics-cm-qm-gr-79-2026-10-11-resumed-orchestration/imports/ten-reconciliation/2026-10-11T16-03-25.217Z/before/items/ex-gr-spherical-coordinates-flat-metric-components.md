---
id: ex-gr-spherical-coordinates-flat-metric-components
kind: example
title: "Flat metric components in a spherical coordinate chart"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [ex-gr-minkowski-chart-as-a-lorentzian-manifold, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]
dependency_roles:
  ex-gr-minkowski-chart-as-a-lorentzian-manifold: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the metric in spherical coordinates, printed pp. 48-49 (PDF pp. 55-56)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), the round metric on S^2 in polar coordinates (2.7), printed p. 26 (PDF p. 27)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), the metric in polar coordinates, printed pp. 96-98 (PDF pp. 103-105)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Let $(M,A)$ be the flat Lorentzian four-manifold of
[[ex-gr-minkowski-chart-as-a-lorentzian-manifold]], with global identity chart
$x=(x^0,x^1,x^2,x^3)$. Let

$$W:=\mathbb R\times(0,\infty)\times(0,\pi)\times(0,2\pi)\subseteq\mathbb R^4,\qquad \Phi(u)=\bigl(u^0,\ u^1\sin u^2\cos u^3,\ u^1\sin u^2\sin u^3,\ u^1\cos u^2\bigr),$$

written $u=(t,r,\vartheta,\varphi)$. Then $\Phi:W\to\mathbb R^4$ is a smooth
injection with $\det D\Phi(u)=-r^2\sin\vartheta\neq0$ on $W$; its image
$\Phi(W)$ is open, and $y:=\Phi^{-1}:\Phi(W)\to W$ is a smooth chart on $M$
whose transition with the identity chart is $\Phi$. In this chart the
components of $A$ are

$$A'_{ab}=\operatorname{diag}\!\left(-1,\ 1,\ r^2,\ r^2\sin^2\vartheta\right)_{ab},$$

so $A'_{00}=-1$, $A'_{11}=1$, $A'_{22}=r^2$, $A'_{33}=r^2\sin^2\vartheta$ and the
off-diagonal components vanish. In particular the component functions are
smooth on $W$, $\det(A'_{ab})=-r^4\sin^2\vartheta<0$ on $W$, and the
diagonal signs exhibit inertia $(3,1,0)$; the metric is Lorentzian as read in
the spherical chart, and the components are non-constant although the same
metric has constant components in the identity chart.

## Facts & Assumptions

**Given:** The flat metric $A$ of [[ex-gr-minkowski-chart-as-a-lorentzian-manifold]], with components $A_{cd}=\operatorname{diag}(-1,1,1,1)_{cd}$ in the identity chart $x$ on $\mathbb R^4$, the domain $W$ and the map $\Phi$ displayed above.

[L1] The component functions of $A$ in two overlapping smooth charts are related by $A'_{ab}(u)=\sum_{c,d}\frac{\partial x^c}{\partial y^a}(u)\frac{\partial x^d}{\partial y^b}(u)A_{cd}(x(u))$, and a family of bilinear forms is a smooth covariant $2$-tensor field once its components are smooth in the charts of one atlas ([[lem-gr-covariant-two-tensor-transformation-law]], [[def-gr-smooth-covariant-two-tensor-field]]).

[L2] In ZF, if $f:U\to\mathbb R^n$ is smooth on an open set and $Df(a)$ is invertible, then $f$ restricts to a diffeomorphism from a neighbourhood of $a$ onto an open neighbourhood of $f(a)$; consequently a smooth injective map whose derivative is invertible everywhere has open image and a smooth inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[L3] $\mathbb R^4$ with the identity chart is a smooth four-manifold, and open subsets carry the standard restricted smooth structure ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]]); smooth charts of a smooth structure have smooth transition maps in both directions ([[def-gr-smooth-lorentzian-objects]]).

## Verification

**Proof technique:** direct.

1.1 $\Phi$ is smooth on the open set $W$ as a tuple of polynomials and trigonometric functions, and its differential has the matrix with rows obtained by differentiating the four coordinate functions; a direct computation of the $4\times4$ determinant gives $\det D\Phi(u)=-r^2\sin\vartheta$, which is nonzero on $W$ because $r>0$ and $0<\vartheta<\pi$. [given, algebra]

1.2 $\Phi$ is injective on $W$: if $\Phi(u)=\Phi(u')$, then $(u^1)^2=(\Phi(u)^1)^2+(\Phi(u)^2)^2+(\Phi(u)^3)^2=(u'^1)^2$, so $u^1=u'^1>0$; then $u^1\cos u^2=\Phi(u)^3=u^1\cos u'^2$ gives $\cos u^2=\cos u'^2$ with $u^2,u'^2\in(0,\pi)$, hence $u^2=u'^2$; then $\sin u^2>0$ and the pair of first two spatial components gives $(\cos u^3,\sin u^3)=(\cos u'^3,\sin u'^3)$ with $u^3,u'^3\in(0,2\pi)$, hence $u^3=u'^3$; finally $u^0=u'^0$ from the first component. [given, algebra]

2.1 By steps 1.1-1.2 and [L2], $\Phi(W)$ is open and $y=\Phi^{-1}$ is smooth; by [L3] the map $y$ is a smooth chart on $\mathbb R^4$ whose transition with the identity chart, in the direction $x\circ y^{-1}$, is $\Phi$. [step 1.1, step 1.2, L2, L3]

3.1 Apply the transformation law [L1] with the chart $y$ and $x(u):=\Phi(u)$, so that $\frac{\partial x^c}{\partial y^a}(u)=D\Phi(u)^c{}_a$. The first column of $D\Phi$ is $(1,0,0,0)$, so $A'_{a0}=A'_{0a}=-1$ for $a=0$ and $0$ for $a\neq0$. The remaining columns are the partial derivatives of $(r\sin\vartheta\cos\varphi,\ r\sin\vartheta\sin\varphi,\ r\cos\vartheta)$ with respect to $r,\vartheta,\varphi$, whose squared Euclidean norms are $1$, $r^2$ and $r^2\sin^2\vartheta$, and whose pairwise Euclidean inner products are $0$; since $A_{cd}=\operatorname{diag}(-1,1,1,1)$ and the spatial indices carry the positive signs, the transformation law gives $A'_{11}=1$, $A'_{22}=r^2$, $A'_{33}=r^2\sin^2\vartheta$ and $A'_{ab}=0$ for the remaining off-diagonal pairs. [step 2.1, L1, algebra]

4.1 The component functions of step 3.1 are smooth on $W$, so by [L1] the transformed family is a smooth covariant $2$-tensor field on $\Phi(W)$; its component matrix has determinant $-r^4\sin^2\vartheta\neq0$ on $W$ and diagonal entries of both signs, with exactly one negative entry, so the form has inertia $(3,1,0)$ and the chart expression defines a Lorentzian metric on this chart domain. This shows that a chart change without a change of the field produces non-constant components and that the Lorentzian character is preserved by the transformation law of [L1]. [step 3.1, L1, given] ∎
