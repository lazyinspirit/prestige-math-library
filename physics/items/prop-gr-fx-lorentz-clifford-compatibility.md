---
id: prop-gr-fx-lorentz-clifford-compatibility
kind: proposition
title: Local spin-connection Clifford compatibility
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-tetrad-spin-connection
  - def-gr-fx-lorentz-spin-lift
  - def-countable-choice
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  def-gr-fx-lorentz-spin-lift: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.128)–(3.134), orthonormal-frame covariant derivatives and the local Lorentz connection transformation."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4.5.6 Spinors"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "§4.5.6, spinor covariant derivative and gamma-matrix Lorentz conventions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
physical_scope: null
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g,N)$ be a smooth time-oriented
Lorentzian four-manifold, let $U\subseteq M$ be a nonempty open set, and let
$E=(E_0,E_1,E_2,E_3)$ be a smooth future-directed tetrad on $U$. Let
$\nabla$ be a smooth affine Lorentz connection on $TM|_U$ with smooth
connection matrix $\omega^I{}_J$ in $E$, meaning
$\nabla_XE_J=\sum_I\omega^I{}_J(X)E_I$ as in
[[def-gr-fx-tetrad-spin-connection]]. Write
$\omega_{IJ}:=\eta_{IK}\omega^K{}_J=-\omega_{JI}$ for
$\eta=\operatorname{diag}(-1,1,1,1)$, so $\eta^{IJ}$ denotes the entries of
$\eta^{-1}=\eta$. Fix an integer $n\ge1$ and constant
matrices $\gamma^I\in M_n(\mathbb C)$ satisfying

$$\gamma^I\gamma^J+\gamma^J\gamma^I=2\eta^{IJ}I_n.$$

Let $V\in\Gamma^\infty(TM|_U)$ be a smooth vector field and let
$\psi\in C^\infty(U,\mathbb C^n)$ be smooth. With $V_I:=\eta_{IJ}V^J$,
define $c(V):=V_I\gamma^I$ and, on $\mathbb C^n$-valued fields and forms,

$$D\psi:=d\psi+\Gamma\psi,\qquad \Gamma:=\frac14\omega_{IJ}\gamma^I\gamma^J,$$

where $d$ acts componentwise. Then

$$D(c(V)\psi)=c(\nabla V)\psi+c(V)D\psi,$$

where $(\nabla V)_I:=dV_I-\omega^J{}_I V_J$ are the covector components
of the induced Lorentz connection and $c(\nabla V):=(\nabla V)_I\gamma^I$.
This is precisely a local matrix identity under the stated hypotheses; it
does not assert that the matrices $\gamma^I$ or the operator $D$ are
compatible with, or induced by, a separately supplied $SL(2,\mathbb C)$
representation or principal-connection lift. Such compatibility is an
additional condition when this identity is used to describe an associated
spinor bundle.

## Statement references

[[def-gr-fx-tetrad-spin-connection]]

[[def-gr-fx-lorentz-spin-lift]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the smooth tetrad and Lorentz connection on
$U$, constant matrices of the stated size satisfying the Clifford relation,
and the smooth fields $V$ and $\psi$.

[A1] Assume $\mathrm{AC}_\omega$ and the smooth tangent-bundle convention for the tetrad and fields ([[def-countable-choice]], [[def-gr-fx-tetrad-spin-connection]]).

[F1] [[def-gr-fx-tetrad-spin-connection]]: $\omega_{IJ}=-\omega_{JI}$, the local connection acts on frame components by $dV^I+\omega^I{}_J V^J$, and the local coframe has Minkowski metric $\eta$.

## Proof

1.1 From the Clifford relation, $\gamma^I\gamma^J\gamma^K=2\eta^{JK}\gamma^I-2\eta^{IK}\gamma^J+\gamma^K\gamma^I\gamma^J$. Subtracting $\gamma^K\gamma^I\gamma^J$ gives $[\gamma^I\gamma^J,\gamma^K]=2(\eta^{JK}\gamma^I-\eta^{IK}\gamma^J)$. This is an algebraic identity for every triple of indices, including repeated indices, and uses no group-representation covariance hypothesis. [given, A1, algebra]

2.1 Contract step 1.1 with $\frac14\omega_{IJ}$. Since $\omega_{IJ}\eta^{JK}=-\omega^K{}_I$ by antisymmetry and $\omega_{IJ}\eta^{IK}=\omega^K{}_J$, the two terms each contribute $-\frac12\omega^K{}_J\gamma^J$ after relabeling the summed index. Hence $[\Gamma,\gamma^K]=-\omega^K{}_J\gamma^J$. The contraction is valid because each $\omega_{IJ}$ is scalar-valued and the gamma matrices are constant in the chosen local frame. [A1, F1, step 1.1, algebra]

3.1 Write $c(V)=V_K\gamma^K$. Then step 2.1 gives $dc(V)+[\Gamma,c(V)]=dV_K\gamma^K-V_K\omega^K{}_J\gamma^J=(dV_J-\omega^K{}_J V_K)\gamma^J=c(\nabla V)$. For a spinor $\psi$, expand $D(c(V)\psi)=d(c(V)\psi)+\Gamma c(V)\psi$ and use
$\Gamma c(V)=c(V)\Gamma+[\Gamma,c(V)]$. The result is
$c(\nabla V)\psi+c(V)(d\psi+\Gamma\psi)=c(\nabla V)\psi+c(V)D\psi$, as asserted. [A1, F1, step 2.1, algebra] ∎
