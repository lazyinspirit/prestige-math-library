---
id: ex-gr-fx13-1
kind: example
title: Tetrads, Lorentz connections and spin interfaces — model 1
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
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.125)–(3.144), local Lorentz rotations, connection forms, and torsion/curvature."
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920 (2015)"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§2.3.3, PDF pp. 26–27, explicit SL(2,C) matrices for a spatial rotation and a Lorentz boost."
verification:
  precheck: pass
physical_scope: null
---

## Statement

On $M=\mathbb R^4$ with coordinates $(x^0,x^1,x^2,x^3)$, metric
$g=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2$, and Cartesian coframe
$e=(dx^0,dx^1,dx^2,dx^3)^{\mathsf T}$, set
$\theta(x)=x^1$ and let

$$\Lambda(x)=\begin{pmatrix} 1&0&0&0\\ 0&\cos\theta&-\sin\theta&0\\ 0&\sin\theta&\cos\theta&0\\ 0&0&0&1 \end{pmatrix}.$$

The changed coframe $e'=\Lambda e$ has the same metric, and its connection
matrix
$\omega'=-d\Lambda\,\Lambda^{-1}=-Jd\theta$, where
$J^1{}_2=-1$, $J^2{}_1=1$ and all other entries vanish, is nonzero while
its curvature is zero. This is a pure-gauge local Lorentz connection. The
rotation has the local spin lift
$A(x)=\exp(-i\theta(x)\sigma_3/2)\in SL(2,\mathbb C)$.

## Facts & Assumptions

**Given:** The Minkowski metric, Cartesian coframe, smooth function $\theta$,
local Lorentz transformation convention, Lorentz spin covering, and Clifford
compatibility from the referenced A-page items. Assume $\mathrm{AC}_\omega$.

[A1] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[def-gr-fx-tetrad-spin-connection]]: $e'=\Lambda e$ and $\omega'=\Lambda\omega\Lambda^{-1}-d\Lambda\,\Lambda^{-1}$; torsion and curvature are $T=de+\omega\wedge e$ and $F=d\omega+\omega\wedge\omega$.

[F2] [[prop-gr-fx-torsion-free-tetrad-equivalence]]: an $\eta$-skew connection with zero coframe torsion induces the unique Levi-Civita connection, and $F'=\Lambda F\Lambda^{-1}$, $T'=\Lambda T$.

[F3] [[prop-gr-fx-spin-double-cover]]: $A\mapsto(X\mapsto AXA^\dagger)$ is the covering homomorphism $SL(2,\mathbb C)\to SO^+(1,3)$ with kernel $\{I,-I\}$.

[F4] [[def-gr-fx-lorentz-spin-lift]]: a supplied spin lift is a principal $SL(2,\mathbb C)$-bundle mapping equivariantly by this covering to the oriented time-oriented orthonormal frame bundle.

[F5] [[prop-gr-fx-lorentz-clifford-compatibility]]: for $\Gamma=\frac14\omega_{IJ}\gamma^I\gamma^J$, Clifford multiplication obeys $D(c(V)\psi)=c(\nabla V)\psi+c(V)D\psi$.

## Verification

1.1 Let $J$ be the stated generator, so $\Lambda=\exp(\theta J)$. Its spatial block is an ordinary rotation, hence $\Lambda^{\mathsf T}\eta\Lambda=\eta$, $\det\Lambda=1$, and $\Lambda^0{}_0=1$; thus $\Lambda(x)\in SO^+(1,3)$. Since $d\Lambda\,\Lambda^{-1}=Jd\theta$, [F1] with initial $\omega=0$ gives $\omega'=-Jd\theta$. Because $d\theta=dx^1\ne0$ and $J\ne0$, this connection matrix is nonzero. The metric is unchanged because $\Lambda^{\mathsf T}\eta\Lambda=\eta$. [given, A1, F1, algebra]

2.1 Initially $T=0$ and $F=0$. By [F2], $T'=\Lambda T=0$ and $F'=\Lambda F\Lambda^{-1}=0$. Directly, $d\omega'=-Jd^2\theta=0$ and
$\omega'\wedge\omega'=J^2(d\theta\wedge d\theta)=0$ because a scalar one-form wedges with itself to zero. The connection is $\eta$-skew since $J^{\mathsf T}\eta+\eta J=0$; the torsion calculation and [F2] therefore identify it as the Levi-Civita connection in the rotated tetrad. [F1, F2, step 1.1, algebra]

3.1 The matrix $A=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$ has determinant one. Conjugating $\sigma_1,\sigma_2$ by $A$ gives $A\sigma_1A^\dagger=\cos\theta\,\sigma_1+\sin\theta\,\sigma_2$ and $A\sigma_2A^\dagger=-\sin\theta\,\sigma_1+\cos\theta\,\sigma_2$, while $I$ and $\sigma_3$ are fixed. Thus [F3] sends $A(x)$ to $\Lambda(x)$, providing the claimed local spin lift under [F4]. The connection $\omega'$ acts on a selected Dirac spin representation by $D=d+\frac14\omega'_{IJ}\gamma^I\gamma^J$, and [F5] verifies that this derivative is compatible with vector Clifford multiplication. [F3, F4, F5, step 1.1, algebra] ∎
