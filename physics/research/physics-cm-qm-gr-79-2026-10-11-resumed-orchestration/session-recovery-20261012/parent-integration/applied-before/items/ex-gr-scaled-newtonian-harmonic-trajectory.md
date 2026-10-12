---
id: ex-gr-scaled-newtonian-harmonic-trajectory
kind: example
title: "The scaled Newtonian comparison system for the quadratic potential: explicit harmonic solutions, a compact convex range and the hypotheses of the scaled trajectory theorem"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-weak-field-scaled-trajectory-limit, def-gr-stationary-weak-field-data, def-euclidean-spheres-and-closed-balls, cor-euclidean-closed-balls-and-spheres-are-compact, def-convex-subset-of-euclidean-space, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, thm-algebra-of-derivatives, def-derivative, def-interval, cor-triangle-inequality-for-inner-product-norm]
dependency_roles:
  thm-gr-weak-field-scaled-trajectory-limit: mathematical-premise
  def-gr-stationary-weak-field-data: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit, the motion of test particles in the weak-field potential and the equation d^2x/dt^2 = -grad Phi, printed pp. 109-112 (PDF pp. 116-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.1.1: the Newtonian limit and the force law for slow particles in the weak field, printed pp. 205-208 (PDF pp. 212-215)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

Work on the flat model with inertial chart $x$, take $\Omega$ the open unit
ball, $K\subseteq\Omega$ the closed ball of radius $1/2$, $L>0$,
$C:=1+L^2$, $\varepsilon_0:=\tfrac12$, $r\equiv0$ and

$$\varphi(x):=\tfrac12\bigl((x^1)^2+(x^2)^2+(x^3)^2\bigr),\qquad \Phi=\varepsilon c^2\varphi .$$

Then $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ is stationary weak-field data
([[def-gr-stationary-weak-field-data]]), the scaled potential is

$$\psi(X)=\varphi(LX)=\tfrac{L^2}{2}|X|^2,\qquad \nabla\psi(X)=L^2X,\qquad D^2\psi=L^2 I_3,\qquad K_2:=L^2,$$

and for every $S_*>0$ and every initial data $X_0,W_0\in\mathbb R^3$ the
Newtonian comparison system of [[thm-gr-weak-field-scaled-trajectory-limit]]

$$X_*'(S)=W_*(S),\qquad W_*'(S)=-\nabla\psi\bigl(X_*(S)\bigr)=-L^2X_*(S)$$

has the explicit solution

$$X_*(S)=\cos(LS)\,X_0+\frac{\sin(LS)}{L}\,W_0,\qquad W_*(S)=-L\sin(LS)\,X_0+\cos(LS)\,W_0 ,$$

whose range lies in the closed ball $\overline B_2(0,R)$ of radius
$R:=|X_0|+|W_0|/L$. That ball is compact and convex; hence hypotheses (H2)
and (H3) of the theorem hold with $K'=\overline B_2(0,R)$ and $K_2=L^2$, and
its conclusion (ii) applies whenever (H1) holds with matched scaled initial
data: the gravitational scaled trajectory follows the harmonic oscillator to
order $\varepsilon$ on $[0,S_*]$.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, the data tuple of the statement, the scaled coordinates $X=x/L$, the scaled potential $\psi(X)=\varphi(LX)$, real vectors $X_0,W_0\in\mathbb R^3$, and the number $S_*>0$.

[L1] The tuple is stationary weak-field data: the component fields $g_{ab}(\varepsilon,p)=\eta_{ab}+\varepsilon(-2\varphi)(\delta_{a0}\delta_{b0}+\delta_{ab})$ are smooth, stationary and Lorentzian of signature $(-,+,+,+)$ for $0<\varepsilon\le\varepsilon_0$, and the derivative bounds hold with $C=1+L^2$, $L$ and $K$: $|\varphi|<1/2$, $|\partial_i\varphi|\le1/2$, $|\partial_i\partial_j\varphi|=\delta_{ij}$ on $\Omega$, and $r\equiv0$ satisfies the $r$-bounds ([[def-gr-stationary-weak-field-data]] clause (a)).

[L2] Chain rule ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]]): for the linear map $X\mapsto LX$, $D(\varphi\circ L)=L\,(D\varphi)(L\,\cdot)$, so $\partial_i\psi(X)=L\,\partial_i\varphi(LX)$ and the second derivatives scale by $L^2$. For $\varphi=\frac12|\cdot|^2$: $\nabla\varphi(y)=y$ and $D^2\varphi=I_3$.

[L3] Sine and cosine derivatives ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]]): $\frac{d}{dS}\sin(LS)=L\cos(LS)$ and $\frac{d}{dS}\cos(LS)=-L\sin(LS)$; $|\sin|\le1$ and $|\cos|\le1$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]); $|(1-t)u+tv|\le(1-t)|u|+t|v|$ for $t\in[0,1]$ ([[cor-triangle-inequality-for-inner-product-norm]], [[def-interval]]).

[L4] Euclidean closed balls and convexity ([[def-euclidean-spheres-and-closed-balls]], [[def-convex-subset-of-euclidean-space]]): $\overline B_2(0,R)=\{X:|X|\le R\}$ is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]) and convex, since $|(1-t)u+tv|\le(1-t)|u|+t|v|\le R$ for $u,v\in\overline B_2(0,R)$, $t\in[0,1]$.

[L5] Scaled trajectory theorem ([[thm-gr-weak-field-scaled-trajectory-limit]]): under (H1), and with $K'\subseteq\mathbb R^3$ compact convex containing the range of $X_\varepsilon=X_*$ on $[0,S_*]$, a $C^1$ solution $(X_*,W_*)$ of the Newtonian system with range in $K'$, and $|D^2\psi|\le K_2$ on $K'$ (H3), the comparison bound $D(S)\le(D(0)+C_3\varepsilon S_*)e^{(1+K_2)S_*}$ holds, and with $D(0)=0$ one gets $\sup_{[0,S_*]}D\le C_3\varepsilon S_*e^{(1+K_2)S_*} = O(\varepsilon)$; the coordinate-time horizon is $T_\varepsilon=LS_*/(\sqrt\varepsilon c)$.

## Verification

**Proof technique:** direct; check the data clauses with the explicit constants, differentiate the explicit solution of the linear comparison system, and bound its range to produce the compact convex set required by the theorem.

1.1 (Data and scaled potential.) All components are polynomial and stationary; and for $0<\varepsilon\le\varepsilon_0=1/2$ one has $|2\varepsilon\varphi|<1$ on $\Omega$, so the metric has signature $(-,+,+,+)$ by diagonal sign; the bounds $|\varphi|\le1/8\le C$, $|\partial_i\varphi|\le1/2\le C/L$, $|\partial_i\partial_j\varphi|=\delta_{ij}\le1\le C/L^2$ hold on $K$ because $C=1+L^2\ge1\ge L/2$ and $C\ge L^2$; $r\equiv0$ satisfies the $r$-bounds. Hence the tuple is stationary weak-field data. By [L2], $\psi(X)=\varphi(LX)=\frac12|LX|^2=\frac12L^2|X|^2$, $\partial_i\psi(X)=L(LX)^i=L^2X^i$ and $\partial_i\partial_j\psi=L^2\delta_{ij}$, so $\nabla\psi(X)=L^2X$ and $|D^2\psi|\le L^2$ on all of $\mathbb R^3$. [L1, L2, algebra]

2.1 (The explicit solution.) Define $X_*,W_*$ by the displayed formulas. By [L3] and linearity of the derivative, $X_*'(S)=-L\sin(LS)X_0+\cos(LS)W_0=W_*(S)$ and $W_*'(S)=-L^2\cos(LS)X_0-L\sin(LS)W_0=-L^2X_*(S)=-\nabla\psi(X_*(S))$ by step 1.1. So $(X_*,W_*)$ solves the comparison system on $[0,S_*]$ (indeed on $\mathbb R$), and it is $C^1$. [step 1.1, L3, algebra]

3.1 (Compact convex range and hypotheses.) By [L3] and step 2.1, $|X_*(S)|\le|\cos(LS)|\,|X_0|+\frac{|\sin(LS)|}{L}|W_0|\le|X_0|+|W_0|/L=R$ for every $S$, so the range of $X_*$ on $[0,S_*]$ is contained in $\overline B_2(0,R)$; by [L4] that closed ball is compact and convex. Therefore (H2) and (H3) of [L5] hold for these data with $K'=\overline B_2(0,R)$ and $K_2=L^2$, and $X_*,W_*$ are $C^1$ on $[0,S_*]$ with range in $K'$. [step 2.1, L3, L4, algebra]

4.1 (Conclusion.) If in addition a family of geodesics satisfies (H1) of [L5] on $[0,T_\varepsilon]$ with scaled initial data matching $(X_0,W_0)$ at $S=0$, so that $D(0)=0$, then [L5] gives $\sup_{0\le S\le S_*}D(S)\le C_3\varepsilon S_*e^{(1+L^2)S_*}=O(\varepsilon)$: the scaled gravitational trajectory tracks the harmonic oscillator $X_*$ with amplitude $R$ and period $2\pi/L$ to order $\varepsilon$ on the fixed scaled interval, corresponding to coordinate times $T_\varepsilon=LS_*/(\sqrt\varepsilon c)$ by clause (iii) of [L5]. This exhibits a case in which every hypothesis of the theorem except (H1) is verified explicitly; (H1) remains a hypothesis on the geodesic family. [step 3.1, L4, L5, algebra] ∎

## Remarks

- **Scope.** The example verifies the Newtonian side of the correspondence and the existence of the required compact convex region; it asserts no existence of geodesics satisfying (H1) and no physical orbit. The potential $\varphi=\frac12|\cdot|^2$ is the internal potential of a uniform density ball in the Newtonian reading; that reading belongs to the physical interpretation and is not used here.
