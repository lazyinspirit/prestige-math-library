---
id: lem-gl2-pairing-divided-by-archimedean-gamma-factor-is-holomorphic
kind: lemma
title: "Removal of the Apparent GL2 Poles at Zeros of the Archimedean Factor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-global-gl2-intertwining-pairing-transfer
  - lem-meromorphic-gl2-local-trilinear-intertwining-identity
  - lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
  - lem-gamma-functional-equation-meromorphic-extension
  - cor-gamma-function-has-no-zeros
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, (4.40) and the uncompleted-L holomorphy obligation on printed p.25; the proof here supplies a local transverse-residue argument rather than importing the cited Jacquet lemma."
---

## Statement

Let $\tau_1,\tau_2$ be full-level GL2 automorphic distributions of
parameters $(\lambda_j,\delta_j)$, with at least one cuspidal, and write
$P_\nu=P_\nu(\tau_1,\tau_2,E_\nu)$. Set
$\eta\equiv\delta_1+\delta_2\pmod2$,
$w=(\nu+1-\lambda_1-\lambda_2)/2$, and
$G_0(w)=2(2\pi)^{-w}\Gamma(w)\cos(\pi w/2)$,
$G_1(w)=2i(2\pi)^{-w}\Gamma(w)\sin(\pi w/2)$.
The meromorphic quotient $P_\nu/G_\eta(w)$ is holomorphic on
$\mathbb C\setminus\{1\}$ and has at most a simple pole at $\nu=1$.
In particular every apparent additional pole from a zero of $G_\eta$ is
removable. This assertion concerns the quotient; identifying it with a
Dirichlet series still requires an unfolding identity. No choice principle
is assumed.

## Statement references

[[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic|the meromorphic global pairing]]

[[lem-meromorphic-gl2-local-trilinear-intertwining-identity|the local trilinear kernel and its regularization]]

## Facts & Assumptions

**Given:** The parameters and meromorphic quotient in the Statement.

[F1] [[lem-global-gl2-intertwining-pairing-transfer]], proof steps 1.1 and 2.1, identifies the classical smooth-vector period $A_\nu(v_1,v_2,v_3)$ with $c_H P_\nu K_{-\lambda_1,-\lambda_2,-\nu}(v_1,v_2,v_3)$, where $c_H\ne0$ is independent of $\nu$, away from discrete exceptional parameters, and hence meromorphically for holomorphically varying compact-model test vectors.

[F2] [[lem-meromorphic-gl2-local-trilinear-intertwining-identity]] supplies the explicit kernel and its Taylor-subtraction regularization at a double diagonal.

[F3] [[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic]] proves common finite-order bounds and locally uniform cusp estimates for the regularized Eisenstein family. The same proof applies to products of three separate smooth-vector matrix coefficients, so $A_\nu$ has at most a simple pole at $\nu=1$.

[F4] [[lem-gamma-functional-equation-meromorphic-extension]] and [[cor-gamma-function-has-no-zeros]] give the simple Gamma poles at the nonpositive integers and absence of Gamma zeros.

## Proof

**Given:** The data in the Statement, including arbitrary fixed $\lambda_1,\lambda_2$.

1.1 By [F4] and the sine and cosine zeros, the zeros of $G_0(w)$ are precisely $w=1,3,5,\ldots$, all simple, and those of $G_1(w)$ are precisely $w=2,4,6,\ldots$, all simple. At nonpositive integers a zero of the trigonometric factor cancels a simple Gamma pole with nonzero limit; it creates no zero. Away from those integers [F4] rules out further zeros. Thus the only possible extra poles of the quotient arise at $w=m\ge1$ with $m-1\equiv\eta\pmod2$. [F4, algebra]

1.2 Fix one such point $\nu_0$ and take $v_1,v_2$ supported near one finite projective point and $v_3$ supported near a distinct finite point. These supports avoid every collision except the double diagonal of the first two coordinates. In the local kernel from [F2], put $u=x-y$ and retain $y,z$ as the other variables. Its singular factor is exactly $\operatorname{sgn}(u)^\eta|u|^{-w}$ times a smooth nonvanishing factor $b_\nu(u,y,z)$. The remaining sign factors are constant on sufficiently small chosen supports. The factor $b_\nu$ and its derivatives depend holomorphically on $\nu$. [F2, construct, algebra]

2.1 Taylor subtraction in the transverse variable gives, at $w=m$, residue $-2\,\partial_u^{m-1}f(0)/(m-1)!$ for the distribution $\operatorname{sgn}(u)^\eta|u|^{-w}$ paired with $f(u)$, since $m-1$ has parity $\eta$. This follows directly from the monomial integral $2\int_0^\epsilon u^{m-1-w}\,du=2\epsilon^{m-w}/(m-w)$. As $dw/d\nu=1/2$, the residue in $\nu$ is twice that value. In particular it is not the zero distribution. For test products $v_1(y+u)v_2(y)v_3(z)b_\nu(u,y,z)$ it can be made nonzero: at a point $(y_0,z_0)$ with $y_0\ne z_0$, prescribe the jet of $v_1$ so its derivatives below $m-1$ vanish and its $(m-1)$st derivative is one. Then the transverse derivative at that point is the nonzero value $b_{\nu_0}(0,y_0,z_0)$. Choose $v_2,v_3$ as nonnegative bumps with sufficiently small supports around $y_0,z_0$; continuity keeps this derivative in an open complex half-plane and makes its integral nonzero. All supports avoid the triple diagonal, so no other singularity occurs and the resulting scalar local kernel has a simple pole with nonzero residue at $\nu_0$. [step 1.2, F2, construct, algebra]

3.1 For these test vectors, [F1] gives $A_\nu=c_H P_\nu K_\nu$ meromorphically, with a fixed nonzero constant $c_H$. If $\nu_0\ne1$, [F3] makes $A_\nu$ holomorphic there, while step 2.1 gives $K_\nu$ a simple pole with nonzero residue. Therefore $P_\nu$ has a zero of at least first order at $\nu_0$. This cancels the simple zero of $G_\eta(w)$ in step 1.1. If $\nu_0=1$, [F3] allows at most a simple pole of $A_\nu$; its factor $K_\nu$ already has a simple pole, so $P_\nu$ is holomorphic at that point. Dividing by the simple zero of $G_\eta(w)$ then gives at most a simple pole. [step 1.1, step 2.1, F1, F3, algebra]

4.1 Where $G_\eta$ has no zero, its reciprocal is holomorphic, including at its poles where the reciprocal vanishes. The original pairing has no pole except a possible simple pole at $\nu=1$ by [F3]. Combine this fact with step 3.1 at every zero to obtain the stated pole restriction everywhere. The local tests used for one candidate pole were finite explicit bump and jet constructions; no simultaneous selection over the countable pole set is asserted or needed. [step 3.1, F3, algebra] ∎
