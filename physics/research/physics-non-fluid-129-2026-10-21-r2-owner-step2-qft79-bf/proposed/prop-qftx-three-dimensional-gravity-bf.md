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

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact oriented smooth three-manifold with smooth boundary and let $U\subseteq\operatorname{int}M$ be open. Let $V=\mathbb R^{2,1}$ carry $\eta=\operatorname{diag}(-1,1,1)$ and a fixed orientation, and let $e\in\Omega^1(M;V)$ and $\omega\in\Omega^1(M;\mathfrak{so}(V,\eta))$ be smooth. The $V$-valued one-form $e$ is a coframe on $U$ when each map $e_x:T_xU\to V$ is a linear isomorphism. Use the volume-form-induced isomorphism $J:V\to\mathfrak{so}(V,\eta)$, $(J(v))^a{}_b=\epsilon^a{}_{cb}v^c$, where $\epsilon_{012}=1$ in a positively oriented $\eta$-orthonormal basis and the first index is raised with $\eta^{ab}$, and the invariant pairing induced by $\eta$ to regard $e$ as the BF field. For a section $v$ of $U\times V$, define $D_X^\omega v=X(v)+\omega(X)v$. Define $F_\omega=d\omega+\tfrac12[\omega,\omega]$, $D_\omega e(X,Y)=D_X^\omega(eY)-D_Y^\omega(eX)-e[X,Y]$, and $g_e(X,Y)=\eta(eX,eY)$. Zero cosmological constant means that the action contains no term proportional to $\epsilon_{abc}e^a\wedge e^b\wedge e^c$. The BF action is $\int_M\langle Je\wedge F_\omega\rangle$, varied with smooth field variations compactly supported in $\operatorname{int}M$.

On a coframe region use the following curvature conventions. The Levi-Civita connection is the unique torsion-free metric-compatible connection $\nabla$ of $g_e$, and

$$R^\nabla(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z.$$

For a local tangent frame $(E_a)_{a=0}^2$, set $g_{ab}=g_e(E_a,E_b)$, let $(g^{ab})$ be its inverse matrix, and put

$$R_{abcd}=g_e\bigl(E_a,R^\nabla(E_c,E_d)E_b\bigr),\qquad \operatorname{Ric}_{bd}=\sum_{a,c=0}^2g^{ac}R_{abcd},\qquad \operatorname{Scal}=\sum_{b,d=0}^2g^{bd}\operatorname{Ric}_{bd},\qquad G_{bd}=\operatorname{Ric}_{bd}-\tfrac12\operatorname{Scal}\,g_{bd}.$$

The Levi-Civita spin connection in $e$ is the unique $\mathfrak{so}(V,\eta)$-valued connection form whose vector covariant derivative satisfies $D_X^\omega(eY)=e(\nabla_XY)$. The BF action's Euler equations are $F_\omega=0$ and $D_\omega e=0$. On every region where $e$ is a coframe, these equations are equivalent to requiring that $\omega$ be this Levi-Civita spin connection and that $G(g_e)=0$. The associated Levi-Civita curvature tensor vanishes there. The equations and the BF configuration space also allow degenerate coframes; the statement makes no four-dimensional, quantum, or path-integral claim.

## Statement references

[[def-qftx-cs-bf-actions]]

[[prop-qftx-cs-bf-variation]]

[[lem-qftx-three-dimensional-curvature-determined-by-ricci]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, smooth $V$-valued one-form $e$ (not assumed invertible), smooth $\mathfrak{so}(2,1)$ connection one-form $\omega$, and zero cosmological constant on the open set $U$.

[A1] [[def-countable-choice]]: the assumed choice principle is countable choice, not full AC.

[F1] [[def-qftx-cs-bf-actions]]: with the fixed trivialization and invariant pairing, $\operatorname{BF}(B,A)=\int_M\langle B\wedge F_A\rangle$ and $F_A=dA+\tfrac12[A,A]$.

[F2] [[prop-qftx-cs-bf-variation]]: under $\mathrm{AC}_\omega$, independent compactly supported interior variations of the BF fields $B,A$ give $F_A=0$ and $D_AB=0$; the boundary term is retained in the unrestricted variation. For the present action the BF field is $B=Je$; its conversion to the vector torsion equation is proved below.

[F3] [[lem-qftx-three-dimensional-curvature-determined-by-ricci]]: in Lorentzian dimension three, $\operatorname{Ric}=0$ if and only if the full algebraic Riemann tensor vanishes.

## Proof

1.1 Let $\mathrm{vol}$ be the oriented volume form of $(V,\eta)$. The displayed $J$ satisfies $\eta(J(v)w,z)=\mathrm{vol}(v,w,z)$, so it takes values in $\mathfrak{so}(V,\eta)$ and has zero kernel. Both vector spaces have dimension three: $\eta A$ is an antisymmetric $3\times3$ matrix for $A\in\mathfrak{so}(V,\eta)$, giving three independent entries. Thus $J$ is an isomorphism. For such $A$, $\operatorname{tr}A=0$ and the alternating-form identity
$$\mathrm{vol}(Av,w,z)+\mathrm{vol}(v,Aw,z)+\mathrm{vol}(v,w,Az)=(\operatorname{tr}A)\mathrm{vol}(v,w,z)=0$$
follows by expanding on an oriented basis. Hence
$$\eta([A,J(v)]w,z)=-\mathrm{vol}(v,w,Az)-\mathrm{vol}(v,Aw,z)=\mathrm{vol}(Av,w,z)=\eta(J(Av)w,z),$$
which proves $J(Av)=[A,J(v)]$ by nondegeneracy of $\eta$. This also makes the pairing $\langle J(v),J(w)\rangle=\eta(v,w)$ invariant and nondegenerate. Since $J$ is constant, the identity gives $D_\omega(Je)=J(D_\omega e)$ as two-forms, by evaluating on each pair of tangent vectors. Every smooth interior-compact adjoint-valued BF variation $\beta$ equals $J(\delta e)$ for the smooth interior-compact variation $\delta e=J^{-1}\beta$; conversely each $\delta e$ gives such a $\beta$. Thus applying [F2] to $B=Je$ is a variation over the full BF-field space, and gives $F_\omega=0$ and $D_\omega(Je)=0$. Injectivity of $J$ converts the latter equation to $D_\omega e=0$. No invertibility assumption on the coframe field $e$ was used. [A1, F1, F2, given, algebra]

2.1 On a region where $e$ is a coframe, define a connection on $TU$ by $\nabla_XY=e^{-1}(D_X^\omega(eY))$. The Leibniz rule for $D^\omega$ gives $\nabla_X(fY)=X(f)Y+f\nabla_XY$. Since $\omega(X)$ is $\eta$-skew, $Xg_e(Y,Z)=g_e(\nabla_XY,Z)+g_e(Y,\nabla_XZ)$, so $\nabla$ is metric-compatible. The equation $D_\omega e=0$ gives $e(\nabla_XY-\nabla_YX-[X,Y])=0$; injectivity of $e$ makes the torsion zero. [given, F1, step 1.1, algebra]

3.1 Metric compatibility and zero torsion imply the Koszul identity
$$2g_e(\nabla_XY,Z)=Xg_e(Y,Z)+Yg_e(Z,X)-Zg_e(X,Y)-g_e(X,[Y,Z])+g_e(Y,[Z,X])+g_e(Z,[X,Y]).$$
It follows by adding the metric-compatibility identities for $(X,Y,Z)$ and $(Y,X,Z)$, subtracting the one for $(Z,X,Y)$, and replacing each antisymmetric difference $\nabla_XY-\nabla_YX$ by $[X,Y]$. Nondegeneracy of $g_e$ makes this formula determine $\nabla_XY$ uniquely for every $Z$, so $\nabla$ is the Levi-Civita connection of $g_e$. [step 2.1, algebra]

4.1 Using the curvature operator defined in the Statement and expanding the vector covariant derivative gives
$$e(R^\nabla(X,Y)Z)=(D_X^\omega D_Y^\omega-D_Y^\omega D_X^\omega-D_{[X,Y]}^\omega)(eZ)=F_\omega(X,Y)eZ.$$
The derivative terms in $eZ$ cancel; the remaining coefficient is $d\omega(X,Y)+[\omega(X),\omega(Y)]=F_\omega(X,Y)$. Thus $F_\omega=0$ exactly when $R^\nabla=0$ on a coframe region. For the precise tensor interface in [F3], metric compatibility, applied twice to $g_e(Z,W)$ and subtracting the commutator derivative, gives $g_e(R(X,Y)Z,W)=-g_e(Z,R(X,Y)W)$. Torsion-freeness and the Jacobi identity give $R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0$. Together with antisymmetry in $X,Y$, these identities give pair-exchange symmetry by rearranging the cyclic identity. Therefore $R_{abcd}=g_e(E_a,R(E_c,E_d)E_b)$ is antisymmetric in $a,b$ and in $c,d$, symmetric under pair exchange, and obeys $R_{abcd}+R_{acdb}+R_{adbc}=0$. Its first/third contraction is exactly the $\operatorname{Ric}_{bd}$ in the Statement, so [F3] applies with the same convention. [F1, F3, step 2.1, step 3.1, given, algebra]

5.1 The metric trace of $G=0$ in dimension three is $-\tfrac12\operatorname{Scal}=0$, hence $\operatorname{Scal}=0$ and $\operatorname{Ric}=0$. By [F3], this is equivalent to $R^\nabla=0$. A BF solution on the coframe sector has the Levi-Civita connection by step 3.1; step 4.1 then gives $R^\nabla=0$, hence $G=0$. Conversely, for an invertible $e$ with $G(g_e)=0$, take its Levi-Civita spin connection: for a $V$-valued section $v$ it is determined by $D_X^\omega v=e(\nabla_X(e^{-1}v))$. This is a connection in the fixed trivialization, and metric compatibility makes its coefficient matrix $\eta$-skew. Torsion-freeness gives $D_\omega e=0$; the trace calculation and [F3] give $R^\nabla=0$, and step 4.1 then gives $F_\omega=0$. Thus the equivalence includes the necessary spin-connection identification; the Einstein equation alone would not constrain an independently chosen $\omega$. None of these conclusions excludes degenerate BF fields, for which $e^{-1}$ and the induced Lorentz-metric description are unavailable. [F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, given, algebra] ∎
