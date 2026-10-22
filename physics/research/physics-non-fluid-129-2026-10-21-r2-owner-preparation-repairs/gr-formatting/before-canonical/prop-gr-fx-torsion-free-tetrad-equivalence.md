---
id: prop-gr-fx-torsion-free-tetrad-equivalence
kind: proposition
title: Torsion-free tetrad equivalence to Levi-Civita
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-tetrad-spin-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.131)–(3.144), especially the torsion structure equation (3.137) and its equivalence to tangent-bundle torsion (3.139), printed pp. 91–94."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.4.2 Connection 1-forms and Curvature 2-forms"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.4.2, HTML lines 1133–1243; torsion, curvature, and Cartan structure equations."
verification:
  precheck: pass
physical_scope: null
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g,N)$ be a smooth time-oriented
Lorentzian four-manifold, let $U\subseteq M$ be open, and let
$e=(e^0,e^1,e^2,e^3)^{\mathsf T}$ be the dual coframe of a smooth
future-directed tetrad on $U$. Let $\omega^I{}_J$ be a smooth matrix-valued
one-form with $\omega_{IJ}:=\eta_{IK}\omega^K{}_J=-\omega_{JI}$, and let
$\nabla$ be its induced affine connection as in
[[def-gr-fx-tetrad-spin-connection]]. Then

$$de^I+\omega^I{}_J\wedge e^J=0\quad\text{for every }I$$

if and only if $\nabla$ is torsion-free. There is exactly one such
$\eta$-skew connection: the Levi-Civita connection of $g$. Under a smooth
change $e'=\Lambda e$, $\Lambda:U\to SO^+(1,3)$, the torsion and curvature
forms obey

$$T'=\Lambda T,\qquad F'=\Lambda F\Lambda^{-1}.$$

## Statement references

[[def-gr-fx-tetrad-spin-connection]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The manifold, metric, future-directed tetrad, coframe, and
$\eta$-skew connection specified in the Statement.

[A1] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[def-gr-fx-tetrad-spin-connection]]: $T^I=de^I+\omega^I{}_J\wedge e^J$ and $\omega_{IJ}=-\omega_{JI}$ is the local metric-compatibility condition.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: every smooth nondegenerate metric has a unique torsion-free metric-compatible affine connection.

## Proof

1.1 For smooth vector fields $X,Y$ on $U$, evaluating exterior derivative and the wedge product gives $T^I(X,Y)=X(e^I(Y))-Y(e^I(X))-e^I([X,Y])+\omega^I{}_J(X)e^J(Y)-\omega^I{}_J(Y)e^J(X)$. Since $Y=e^J(Y)E_J$, the connection definition gives $e^I(\nabla_XY)=X(e^I(Y))+\omega^I{}_J(X)e^J(Y)$; the corresponding formula with $X,Y$ exchanged shows $T^I(X,Y)=e^I(\nabla_XY-\nabla_YX-[X,Y])$. Thus all coframe torsion forms vanish exactly when the induced affine-connection torsion vanishes. [given, F1, algebra]

2.1 Restrict the unique Levi-Civita connection supplied by [F2] to $U$. Its connection coefficients in $E$ are smooth; metric compatibility and the constant frame metric $\eta_{IJ}$ give $\omega_{IJ}=-\omega_{JI}$. Its tangent torsion is zero, so step 1.1 makes every $T^I$ zero. This proves existence of an $\eta$-skew solution. [given, A1, F1, F2, step 1.1]

3.1 Conversely, an $\eta$-skew $\omega$ induces a metric-compatible connection. For $V=V^IE_I$ and $W=W^JE_J$, the connection terms in $g(\nabla_XV,W)+g(V,\nabla_XW)$ are $\omega_{KJ}V^JW^K+\omega_{IJ}V^IW^J=0$ after interchanging the summed indices in the first term and using $\omega_{IJ}=-\omega_{JI}$; the remaining terms equal $X(g(V,W))$. If also $T^I=0$, step 1.1 gives zero tangent torsion. By uniqueness in [F2], this connection is the Levi-Civita connection. Hence the solution from step 2.1 is unique, and the displayed torsion equation is equivalent to torsion-freeness. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Write $\alpha:=d\Lambda\,\Lambda^{-1}$ and $\bar\omega:=\Lambda\omega\Lambda^{-1}$, so $\omega'=\bar\omega-\alpha$. The product rule gives $d\alpha=\alpha\wedge\alpha$ and $d\bar\omega=\alpha\wedge\bar\omega+\Lambda(d\omega)\Lambda^{-1}+\bar\omega\wedge\alpha$. Expanding $d\omega'+\omega'\wedge\omega'$ cancels the $\alpha$ terms and leaves $\Lambda(d\omega+\omega\wedge\omega)\Lambda^{-1}$, hence $F'=\Lambda F\Lambda^{-1}$. Also $de'=d\Lambda\wedge e+\Lambda de$ and $\omega'\wedge e'=\Lambda\omega\wedge e-d\Lambda\wedge e$, hence $T'=\Lambda T$. [given, F1, algebra]

5.1 Steps 1.1–3.1 establish the torsion equivalence and unique Levi-Civita identification; step 4.1 establishes both transformation laws. [step 1.1, step 2.1, step 3.1, step 4.1] ∎ 