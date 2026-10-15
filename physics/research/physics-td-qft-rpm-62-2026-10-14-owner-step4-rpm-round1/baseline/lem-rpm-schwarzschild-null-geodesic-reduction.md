---
id: lem-rpm-schwarzschild-null-geodesic-reduction
kind: lemma
title: "Null geodesic radial first integral in the Schwarzschild exterior"
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-gr-schwarzschild-exterior-model
  - lem-gr-schwarzschild-metric-properties
  - def-gr-killing-field
  - def-lie-derivative-of-a-tensor-field
  - thm-gr-killing-and-on-shell-matter-identities
  - def-geodesic-of-an-affine-connection
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-derivative
  - thm-chain-rule
  - thm-algebra-of-derivatives
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 176–179"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification: {}
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with $s>0$ and $f(r)=1-s/r$ on $r>s$. Let $\gamma(\lambda)$ be an affinely parametrized null geodesic of its metric-selected connection whose image lies in the equatorial plane $\vartheta=\pi/2$, and choose the orientation so that

$$E:=f(r)\frac{dx^0}{d\lambda}>0,\qquad L:=r^2\frac{d\varphi}{d\lambda}\ge0.$$

Both quantities are constant along $\gamma$. With impact parameter $b:=L/E\ge0$ and $H(r):=f(r)/r^2$, its radial equation is

$$\left(\frac{dr}{d\lambda}\right)^2=E^2\bigl(1-b^2H(r)\bigr).$$

Moreover, $H'(r)=(3s-2r)/r^4$, so $H$ has its unique exterior maximum at $r_{\rm ph}=3s/2$, with $H(r_{\rm ph})=4/(27s^2)$. Thus the critical impact parameter for a radial turning point is $b_{\rm c}=3\sqrt3\,s/2$.

## Facts & Assumptions

**Given:** The smooth Schwarzschild exterior metric with $r>s$, its metric-selected connection, an affine null geodesic in the equatorial plane, and the displayed orientation $E>0$, $L\ge0$.

[F1] In spherical-polar product charts the Schwarzschild metric is diagonal with $g_{00}=-f$, $g_{rr}=f^{-1}$, $g_{\vartheta\vartheta}=r^2$, and $g_{\varphi\varphi}=r^2\sin^2\vartheta$, where $f=1-s/r$; the smooth exterior is Lorentzian and its metric-selected connection exists ([[def-gr-schwarzschild-exterior-model]], [[lem-gr-schwarzschild-metric-properties]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F2] A Killing field $\xi$ contracted with the tangent of an affinely parametrized geodesic has constant scalar product $g(\xi,\gamma')$ ([[thm-gr-killing-and-on-shell-matter-identities]] clause (b)); a Killing field is defined by $\mathcal L_\xi g=0$ ([[def-gr-killing-field]]), with the Lie derivative given by its flow pullback derivative ([[def-lie-derivative-of-a-tensor-field]]).

[F3] An affine geodesic satisfies $D_\lambda\gamma'=0$ and its tangent has constant squared norm ([[def-geodesic-of-an-affine-connection]]).

## Proof

**Proof technique:** use the time-translation and axial-rotation symmetries for first integrals, then impose the null condition in the diagonal metric.


1.1 In each equatorial spherical chart the components in [F1] are independent of $x^0$ and $\varphi$, and the coordinate components of $\partial_0$ and the axial generator $\partial_\varphi$ are constant. The flow pullback derivative in [F2] therefore gives $\mathcal L_{\partial_0}g=\mathcal L_{\partial_\varphi}g=0$, so both fields are locally Killing. By the conservation part of [F2] and the affine geodesic equation [F3], $-g(\partial_0,\gamma')=f\,dx^0/d\lambda=E$ and $g(\partial_\varphi,\gamma')=r^2d\varphi/d\lambda=L$ are constant on each chart interval; longitude charts differ by additive constants, so these values agree on overlaps and are constant along $\gamma$. [given, F1, F2, F3, algebra]

2.1 At $\vartheta=\pi/2$, the null condition and [F1] give $0=-f\left(\frac{dx^0}{d\lambda}\right)^2+f^{-1}\left(\frac{dr}{d\lambda}\right)^2+r^2\left(\frac{d\varphi}{d\lambda}\right)^2.$ Substitute $dx^0/d\lambda=E/f$ and $d\varphi/d\lambda=L/r^2$, then multiply by $f>0$. The result is $(dr/d\lambda)^2=E^2[1-(L/E)^2f/r^2]$, the asserted radial first integral. [step 1.1, F1, algebra]

3.1 Differentiating $H(r)=r^{-2}-sr^{-3}$ yields $H'(r)=-2r^{-3}+3sr^{-4}=(3s-2r)/r^4$. Since $r^4>0$, this derivative is positive on $(s,3s/2)$ and negative on $(3s/2,\infty)$; hence the unique maximum is at $3s/2$. Substitution gives $H(3s/2)=4/(27s^2)$, and solving $b^2H(3s/2)=1$ gives $b_{\rm c}=3\sqrt3s/2$. [step 2.1, algebra, algebra]

4.1 The right side of the radial first integral vanishes at a radius precisely when $b^2H(r)=1$. Since $H$ is positive on $r>s$, tends to zero at both ends, and has the maximum computed in the preceding step, the threshold for the existence of an exterior root is exactly $b_{\rm c}$. This is a first-integral statement only; it asserts no global scattering continuation. [step 2.1, step 3.1, given, algebra] ∎
