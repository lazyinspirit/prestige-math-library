---
id: prop-qftx-three-dimensional-gravity-bf
kind: proposition
title: "Invertible triads identify zero-cosmological-constant three-dimensional BF gravity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; a conditional classical field-equation correspondence, with no empirical or quantum-gravity claim."
dependency_level: 2
deps:
  - def-countable-choice
  - def-qftx-cs-bf-actions
  - lem-qftx-three-dimensional-curvature-determined-by-ricci
  - prop-qftx-cs-bf-variation
justified_by: []
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-cs-bf-actions: mathematical-premise
  lem-qftx-three-dimensional-curvature-determined-by-ricci: mathematical-premise
  prop-qftx-cs-bf-variation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Steven Carlip, Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe"
      url: "https://arxiv.org/pdf/gr-qc/0409039"
      locator: "§2.1, equation (2.1.1), and §2.3, equations (2.3.1)–(2.3.14): the 3D curvature identity, first-order equations, and ISO(2,1) Chern–Simons interface."
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§2, pp. 4–6: the classical BF equations and the nondegenerate-triad restriction for Lorentzian three-dimensional gravity."
    - title: "Boris Khesin and Robert Wendt, The Geometry of Infinite-Dimensional Groups"
      url: "https://www.math.utoronto.ca/khesin/papers/Lecture_notes.pdf"
      locator: "§3.2, printed pp. 184–186: flat-connection equations and the Chern–Simons classical solution space."
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact oriented smooth three-manifold with smooth boundary and let $U\subseteq\operatorname{int}M$ be open. Let $V=\mathbb R^{2,1}$ carry $\eta=\operatorname{diag}(-1,1,1)$ and a fixed orientation, and let $e\in\Omega^1(M;V)$ and $\omega\in\Omega^1(M;\mathfrak{so}(V,\eta))$ be smooth. The $V$-valued one-form $e$ is a coframe on $U$ when each map $e_x:T_xU\to V$ is a linear isomorphism. Use the volume-form-induced isomorphism $J:V\to\mathfrak{so}(V,\eta)$, $(J(v))^a{}_b=\epsilon^a{}_{cb}v^c$, and the invariant pairing induced by $\eta$ to regard $e$ as the BF field. For a section $v$ of $U\times V$, define $D_X^\omega v=X(v)+\omega(X)v$. Define $F_\omega=d\omega+\tfrac12[\omega,\omega]$, $D_\omega e(X,Y)=D_X^\omega(eY)-D_Y^\omega(eX)-e[X,Y]$, and $g_e(X,Y)=\eta(eX,eY)$. Zero cosmological constant means that the action contains no term proportional to $\epsilon_{abc}e^a\wedge e^b\wedge e^c$. The BF action is $\int_M\langle Je\wedge F_\omega\rangle$, varied with smooth field variations compactly supported in $\operatorname{int}M$.

Its Euler equations are $F_\omega=0$ and $D_\omega e=0$. On every region where $e$ is a coframe, these equations are equivalent to the vacuum Einstein equation $G(g_e)=0$ for the induced Lorentz metric, where $G=\operatorname{Ric}-\tfrac12\operatorname{Scal}\,g_e$. The associated Levi-Civita curvature tensor vanishes there. The equations and the BF configuration space also allow degenerate coframes; the statement makes no four-dimensional, quantum, or path-integral claim.

## Statement references

[[def-qftx-cs-bf-actions]]

[[prop-qftx-cs-bf-variation]]

[[lem-qftx-three-dimensional-curvature-determined-by-ricci]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, smooth $V$-valued coframe field $e$, smooth $\mathfrak{so}(2,1)$ connection one-form $\omega$, and zero cosmological constant on the open set $U$.

[A1] [[def-countable-choice]]: the assumed choice principle is countable choice, not full AC.

[F1] [[def-qftx-cs-bf-actions]]: with the fixed trivialization and invariant pairing, $\operatorname{BF}(B,A)=\int_M\langle B\wedge F_A\rangle$ and $F_A=dA+\tfrac12[A,A]$.

[F2] [[prop-qftx-cs-bf-variation]]: under $\mathrm{AC}_\omega$, compactly supported interior variations of the three-dimensional BF action give $F_\omega=0$ and $D_\omega e=0$; the boundary term is retained in the unrestricted variation.

[F3] [[lem-qftx-three-dimensional-curvature-determined-by-ricci]]: in Lorentzian dimension three, $\operatorname{Ric}=0$ if and only if the full algebraic Riemann tensor vanishes.

## Proof

1.1 Apply [F2] to the stated BF action and interior-compact variations. The Euler equations on $U$ are $F_\omega=0$ and $D_\omega e=0$. This conclusion uses no invertibility assumption on $e$. [A1, F1, F2, given]

2.1 On a region where $e$ is a coframe, define a connection on $TU$ by $\nabla_XY=e^{-1}(D_X^\omega(eY))$. The Leibniz rule for $D^\omega$ gives $\nabla_X(fY)=X(f)Y+f\nabla_XY$. Since $\omega(X)$ is $\eta$-skew, $Xg_e(Y,Z)=g_e(\nabla_XY,Z)+g_e(Y,\nabla_XZ)$, so $\nabla$ is metric-compatible. The equation $D_\omega e=0$ gives $e(\nabla_XY-\nabla_YX-[X,Y])=0$; injectivity of $e$ makes the torsion zero. [given, F1, step 1.1, algebra]

3.1 Metric compatibility and zero torsion imply the Koszul identity
$$2g_e(\nabla_XY,Z)=Xg_e(Y,Z)+Yg_e(Z,X)-Zg_e(X,Y)-g_e(X,[Y,Z])+g_e(Y,[Z,X])+g_e(Z,[X,Y]).$$
It follows by adding the metric-compatibility identities for $(X,Y,Z)$ and $(Y,X,Z)$, subtracting the one for $(Z,X,Y)$, and replacing each antisymmetric difference $\nabla_XY-\nabla_YX$ by $[X,Y]$. Nondegeneracy of $g_e$ makes this formula determine $\nabla_XY$ uniquely for every $Z$, so $\nabla$ is the Levi-Civita connection of $g_e$. [step 2.1, algebra]

4.1 By the definition of curvature, $e(R^\nabla(X,Y)Z)=(D_X^\omega D_Y^\omega-D_Y^\omega D_X^\omega-D_{[X,Y]}^\omega)(eZ)=F_\omega(X,Y)eZ$. Since $e_x$ is an isomorphism, $F_\omega=0$ exactly when $R^\nabla=0$. [F1, step 2.1, step 3.1, algebra]

5.1 The vacuum Einstein equation in dimension three is $G=0$. Taking its metric trace gives $-\tfrac12\operatorname{Scal}=0$, hence $\operatorname{Scal}=0$ and $\operatorname{Ric}=0$. By [F3], this is equivalent to $R^\nabla=0$, and therefore by step 4.1 to $F_\omega=0$. Conversely $F_\omega=0$ gives $R^\nabla=0$, then $\operatorname{Ric}=0$ and $G=0$. The torsion equation already makes $\omega$ the Levi-Civita spin connection in the coframe. Thus the invertible-triad BF equations and the zero-cosmological-constant vacuum Einstein equation agree on this sector; no equation here excludes degenerate BF fields. [F2, F3, step 1.1, step 3.1, step 4.1, algebra] ∎
