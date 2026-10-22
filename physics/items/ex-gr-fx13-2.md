---
id: ex-gr-fx13-2
kind: example
title: Tetrads, Lorentz connections and spin interfaces — model 2
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-tetrad-spin-connection
  - prop-gr-fx-torsion-free-tetrad-equivalence
  - def-gr-fx-lorentz-spin-lift
  - prop-gr-fx-spin-double-cover
  - prop-gr-fx-lorentz-clifford-compatibility
  - def-countable-choice
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  prop-gr-fx-torsion-free-tetrad-equivalence: mathematical-premise
  def-gr-fx-lorentz-spin-lift: mathematical-premise
  prop-gr-fx-spin-double-cover: mathematical-premise
  prop-gr-fx-lorentz-clifford-compatibility: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920 (2015)"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§2.3.2–§2.3.3, PDF pp. 25–27, the SL(2,C) Lorentzian cover and explicit boost matrices."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4.5.6 Spinors"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "§4.5.6, Lorentzian spinor and Clifford conventions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
physical_scope: null
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M=\mathbb R^4$ with standard coordinates $(x^0,x^1,x^2,x^3)$, metric $g=\eta_{IJ}dx^I\otimes dx^J$ for $\eta=\operatorname{diag}(-1,1,1,1)$, time orientation $N=\partial/\partial x^0$, and the standard orientation. The Cartesian tetrad on all of $M$ is $E_I=\partial/\partial x^I$, with dual coframe $e^I=dx^I$. Connections below are smooth affine connections on $TM$. Define the positive-definite form $\delta=I_4$ and its orientation-preserving orthogonal group
$SO(4):=\{R\in GL(4,\mathbb R):R^{\mathsf T}\delta R=\delta,\ \det R=1\}$.
Let $r\in\mathbb R\setminus\{0\}$ and consider the constant Lorentz boost

$$B(r)=\begin{pmatrix} \cosh r&\sinh r&0&0\\ \sinh r&\cosh r&0&0\\ 0&0&1&0\\ 0&0&0&1 \end{pmatrix}.$$

It belongs to $SO^+(1,3)$ but not to $SO(4)$. Consequently, for any set $S$ and map $q:S\to SO(4)$, no $a\in S$ satisfies $q(a)=B(r)$ as matrices. With $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, the Lorentzian covering sends
$A(r)=\exp(r\sigma_1/2)\in SL(2,\mathbb C)$ to $B(r)$ in the Hermitian
matrix model. In the Cartesian tetrad, zero is the connection matrix
of the unique torsion-free metric-compatible affine connection, and the Clifford interface uses the
Lorentzian matrix $\eta$, not $\delta$.

## Statement references

[[prop-gr-fx-spin-double-cover]]

[[def-gr-fx-tetrad-spin-connection]]

[[prop-gr-fx-torsion-free-tetrad-equivalence]]

[[prop-gr-fx-lorentz-clifford-compatibility]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The explicitly specified Minkowski manifold, coordinates, tetrad,
quadratic forms, comparison group, and nonzero real boost parameter from the
Statement. All coframes and connections are defined on $M=\mathbb R^4$.

[A1] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]); maps with codomain $SO(4)$ are comparison data only.

[F1] [[def-gr-fx-tetrad-spin-connection]]: Lorentz coframes use $\eta=\operatorname{diag}(-1,1,1,1)$, with $T=de+\omega\wedge e$ and $F=d\omega+\omega\wedge\omega$.

[F2] [[prop-gr-fx-torsion-free-tetrad-equivalence]]: zero torsion and $\eta$-skewness give the unique metric-selected Levi-Civita connection.

[F3] [[def-gr-fx-lorentz-spin-lift]]: the Lorentzian spin group is $SL(2,\mathbb C)$ and its structure map targets the oriented time-oriented frame bundle through $SO^+(1,3)$.

[F4] [[prop-gr-fx-spin-double-cover]]: the action on Hermitian matrices preserves $-\det X$ and covers $SO^+(1,3)$.

[F5] [[prop-gr-fx-lorentz-clifford-compatibility]]: under its stated local matrix hypotheses, the Clifford identity uses $\eta$ and $\omega_{IJ}=-\omega_{JI}$; it does not assert compatibility with a separately supplied group representation.

## Verification

1.1 Put $c=\cosh r$ and $s=\sinh r$. Multiplying the upper-left $2\times2$ block gives
$B(r)^{\mathsf T}\eta B(r)=\eta$, because $c^2-s^2=1$ and the off-diagonal time-space terms cancel. The determinant of that block is $1$, the remaining block is identity, and $B(r)e_0=(c,s,0,0)$ is future timelike since $c>|s|$. Hence $B(r)\in SO^+(1,3)$. For the Euclidean form, however,
$\delta(B(r)e_0,B(r)e_0)=c^2+s^2>1=\delta(e_0,e_0)$ for $r\ne0$, so $B(r)\notin SO(4)$. Thus $B(r)$ is not in the image of any map with codomain $SO(4)$. [given, A1, F3, algebra]

2.1 Write $A(r)=\cosh(r/2)I+\sinh(r/2)\sigma_1$. Its eigenvalues are $e^{r/2}$ and $e^{-r/2}$, so $\det A(r)=1$. Pauli multiplication gives
$AIA^\dagger=\cosh r\,I+\sinh r\,\sigma_1$,
$A\sigma_1A^\dagger=\sinh r\,I+\cosh r\,\sigma_1$, and
$A\sigma_jA^\dagger=\sigma_j$ for $j=2,3$; thus its Hermitian action is exactly $B(r)$. By [F4] it is the Lorentzian spin lift, consistent with the target group in [F3]. [F3, F4, step 1.1, algebra]

3.1 On the Cartesian tetrad $e^I=dx^I$, $de^I=0$, so $\omega=0$ gives zero torsion and is $\eta$-skew. By [F2] it induces the unique Levi-Civita connection. The boost $B(r)$ is constant on spacetime, so $e' =B(r)e$ also has $de' =0$ and its transformed connection is $\omega'=0$ by [F1]; the torsion remains zero. The local matrix identity from [F5] uses the same $\eta$; it does not identify this operator as one induced by a group representation. Thus the Euclidean orthogonal comparison group does not supply this Lorentzian interface. [F1, F2, F5, step 1.1, step 2.1, algebra] ∎
