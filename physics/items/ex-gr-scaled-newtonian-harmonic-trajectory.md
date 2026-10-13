---
id: ex-gr-scaled-newtonian-harmonic-trajectory
kind: example
title: "The scaled Newtonian comparison system for the quadratic potential: explicit harmonic solutions, a compact convex containing ball and the hypotheses of the scaled trajectory theorem"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-weak-field-scaled-trajectory-limit, def-gr-stationary-weak-field-data, def-euclidean-spheres-and-closed-balls, cor-euclidean-closed-balls-and-spheres-are-compact, def-convex-subset-of-euclidean-space, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, thm-algebra-of-derivatives, def-derivative, def-interval, cor-triangle-inequality-for-inner-product-norm, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, thm-total-derivative-computes-directional-and-partial-derivatives]
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
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
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

Work on the flat model with inertial chart $x$, let $L>0$ be a length,
$\Omega=\mathbb R\times B_{2L}(0)$ with spatial base $U=B_{2L}(0)$, and
$K=\overline B_{L/2}(0)\subset U$. Set $C:=1$, $\varepsilon_0:=1/16$,
$r\equiv0$ and

$$\varphi(\mathbf x):=\frac{|\mathbf x|^2}{2L^2},\qquad \Phi=\varepsilon c^2\varphi.$$

Every unmarked norm $|\cdot|$ of a vector in $\mathbb R^3$ below means
$\|\cdot\|_2$ from the Euclidean inner product
([[def-euclidean-inner-product]]). The gradient is the coordinate vector of
partial derivatives ([[def-jacobian-matrix-and-gradient]]), and the Hessian
bound below uses the induced operator norm $\|D^2\psi\|_{\mathrm{op}}$ of
[[thm-gr-weak-field-scaled-trajectory-limit]].

These are stationary weak-field data
([[def-gr-stationary-weak-field-data]]). The scaled spatial base is
$U_L=B_2(0)$ and the scaled potential is

$$\psi(X)=\varphi(LX)=\tfrac12|X|^2,\qquad \nabla\psi(X)=X,\qquad D^2\psi=I_3.$$

For any $S_*>0$ and initial vectors $X_0,W_0\in\mathbb R^3$ satisfying
$R_0:=|X_0|+|W_0|<2$, the Newtonian comparison system of
[[thm-gr-weak-field-scaled-trajectory-limit]]

$$X_*'(S)=W_*(S),\qquad W_*'(S)=-\nabla\psi(X_*(S))=-X_*(S)$$

has the solution

$$X_*(S)=\cos S\,X_0+\sin S\,W_0,\qquad W_*(S)=-\sin S\,X_0+\cos S\,W_0.$$

Its spatial range is contained in $\overline B_{R_0}(0):=\{X:\|X\|_2\le R_0\}$,
with $\overline B_0(0)=\{0\}$. Set
$R':=\max\{1/2,R_0\}<2$ and $K':=\overline B_{R'}(0)$. This is a compact
convex subset of $U_L$ containing the comparison trajectory. For the
trajectory estimate take $0<\varepsilon\le\varepsilon_*$ from
[[thm-gr-weak-field-scaled-trajectory-limit]]. If (H1) holds,
then $X_\varepsilon(S)\in\overline B_{1/2}(0)\subseteq K'$ as well, so (H2)
and (H3) hold with $K_2=1$. With matched scaled initial data, the conclusion
(ii) of the scaled trajectory theorem gives
$\sup_{[0,S_*]}D(S)\le C_3\varepsilon S_*e^{2S_*}=O(\varepsilon)$.

## Facts & Assumptions

**Given:** The flat model with inertial chart $x$, $L>0$, $\Omega=\mathbb R\times B_{2L}(0)$, $U=B_{2L}(0)$, $K=\overline B_{L/2}(0)$, $C=1$, $\varepsilon_0=1/16$, the functions $\varphi$ and $r\equiv0$ above, and $c>0$.

[L1] The metric coefficients factor through $U$ and are Lorentzian for $0<\varepsilon\le1/16$: on $U$, $0\le\varphi<2$, so $1-2\varepsilon\varphi>3/4>0$ and $1+2\varepsilon\varphi>0$. On $K$, $|\varphi|\le1/8$, $|\partial_i\varphi|\le1/(2L)$ and $|\partial_i\partial_j\varphi|\le1/L^2$; $r=0$ satisfies the remainder bounds ([[def-gr-stationary-weak-field-data]] clause (a)).

[L2] Under $X\mapsto LX$, the chain rule gives $\partial_i\psi(X)=L\,\partial_i\varphi(LX)$ and $D^2\psi(X)=L^2D^2\varphi(LX)$; for the stated potential, $\nabla\psi(X)=X$ and $D^2\psi=I_3$ ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[L3] Sine and cosine derivatives and bounds: $(\cos S)'=-\sin S$, $(\sin S)'=\cos S$, and $|\cos S|,|\sin S|\le1$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L4] Closed Euclidean balls are compact and convex; for $v,w$ in the closed ball of radius $R'$, $|(1-t)v+tw|\le(1-t)|v|+t|w|\le R'$ for $0\le t\le1$ ([[def-euclidean-spheres-and-closed-balls]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[def-convex-subset-of-euclidean-space]], [[cor-triangle-inequality-for-inner-product-norm]]).

[L5] The scaled trajectory theorem requires $K'\subseteq U_L$ to be compact and convex, to contain every $X_\varepsilon(S)$ and the range of a $C^1$ comparison solution, and to satisfy $\|D^2\psi\|_{\mathrm{op}}\le K_2$ on $K'$; under (H1) and matched initial data it yields the stated $O(\varepsilon)$ bound ([[thm-gr-weak-field-scaled-trajectory-limit]]).

[L6] The norm $\|\cdot\|_2$ is induced by the Euclidean inner product, the gradient is the coordinate vector of first partial derivatives, and for a totally differentiable map the total derivative has those partials as its coordinate entries ([[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Verification

**Proof technique:** verify the metric and derivative bounds on the stated spatial domain, solve the harmonic comparison system explicitly, and construct a compact convex subset of the scaled spatial domain containing both paths when (H1) holds.

1.1 (Data and scaled potential.) For every $\mathbf x\in U$, the metric is diagonal with entries $-(1+2\varepsilon\varphi)$ and $(1-2\varepsilon\varphi)\delta_{ij}$; by [L1] it is Lorentzian on $\Omega$ for $0<\varepsilon\le\varepsilon_0$. The spatial derivative bounds on $K$ follow from [L1], so the tuple is stationary weak-field data. By [L2], $\psi(X)=|X|^2/2$, $\nabla\psi(X)=X$ and $D^2\psi=I_3$ on $U_L=B_2(0)$. [L1, L2, L6, algebra]

1.2 (The comparison solution.) Define $X_*,W_*$ by the displayed formulas. Differentiating with [L3] gives $X_*'=-\sin S\,X_0+\cos S\,W_0=W_*$ and $W_*'=-\cos S\,X_0-\sin S\,W_0=-X_*=-\nabla\psi(X_*)$ by [L2]. Since $\cos0=1$ and $\sin0=0$, the initial values are $X_*(0)=X_0$ and $W_*(0)=W_0$. These formulas are smooth on $\mathbb R$; the range check below verifies that the position range stays in $U_L$, where the comparison equation is defined. [L2, L3, algebra]

1.3 (Compact convex containing ball.) By [L3], $|X_*(S)|\le|X_0|+|W_0|=R_0$ for every $S$. Thus its range lies in $\overline B_{R'}(0)$; by [L4] this is compact and convex. As $R'<2$, $K'\subset U_L$. If (H1) holds, then $|X_\varepsilon(S)|\le1/2$ because $x_\varepsilon(t)\in K=\overline B_{L/2}(0)$, so $X_\varepsilon(S)\in K'$. Moreover $\|D^2\psi\|_{\mathrm{op}}=1$ on $K'$ by [L2]. Hence (H2)-(H3) hold with $K_2=1$ under (H1). [L2, L3, L4, L5, L6, algebra]

2.1 (Conclusion and limitation.) For $0<\varepsilon\le\varepsilon_*$, if (H1) holds for the geodesic family with scaled initial data matching $(X_0,W_0)$, then $D(0)=0$. The scaled theorem's conclusion (ii) gives $\sup_{0\le S\le S_*}D(S)\le C_3\varepsilon S_*e^{2S_*}=O(\varepsilon)$. The example verifies the Newtonian trajectory and the domain hypotheses conditional on (H1); it asserts neither existence of such geodesics nor a physical orbit. [step 1.2, step 1.3, L5, algebra] ∎

