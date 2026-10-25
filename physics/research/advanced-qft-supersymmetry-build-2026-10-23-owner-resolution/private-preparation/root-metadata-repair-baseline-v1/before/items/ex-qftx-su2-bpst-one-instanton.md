---
id: ex-qftx-su2-bpst-one-instanton
kind: example
title: Charge-one BPST instanton on the round four-sphere
status: draft
origin: session
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: ZF + full AC, inherited from the gauge datum and instanton-number definition.
deps:
- prop-qftx-su2-bpst-explicit-connection-on-s4
dependency_roles:
  prop-qftx-su2-bpst-explicit-connection-on-s4: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang–Mills Equations
    url: https://strings.itp.ac.ru/Papers/belavin1975.pdf
    locator: 'Printed pp. 85–87, equations (3)–(18): charge, self-dual bound, regular finite-action SU(2) charge-one field, and its gauge form.'
  - title: 'David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
    locator: 'Lecture 1, §§1.1–1.1.2, printed pp. 6–10, equations (1.1)–(1.11): action and charge conventions, Bianchi consequence, and the charge-one SU(2) connection with ''t Hooft symbols.'
verification:
  precheck: pass
---

## Example

Assume full Axiom of Choice. Let $S^4=\{z\in\mathbb R^5:|z|=1\}$ have its unit round metric $g_X$. Denote by $p_\infty$ the point omitted by the north stereographic chart and by $p_0$ the point with north-chart coordinates $x=0$. Orient $S^4$ so that north-chart coordinates $x=(x^1,x^2,x^3,x^4)$ satisfy $dx^1\wedge dx^2\wedge dx^3\wedge dx^4>0$. Set $r^2=\sum_{\mu=1}^4(x^\mu)^2$. The metric in the north chart is $4(1+r^2)^{-2}\sum_{\mu=1}^4(dx^\mu)^2$. Let $U_N=S^4\setminus\{p_\infty\}$ carry coordinate $x$, and $U_S=S^4\setminus\{p_0\}$ carry coordinate $y=x/r^2$; the metric in the south chart is $4(1+|y|^2)^{-2}\sum_{\mu=1}^4(dy^\mu)^2$.

Define $SU(2)=\{U\in M_2(\mathbb C):U^*U=I,\det U=1\}$. Write $\epsilon_{123}=1$ and let

$$ \sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad T_a=-\frac{i}{2}\sigma_a. $$

The $T_a$ are traceless anti-Hermitian generators. Set $B(X,Y)=-\operatorname{tr}_2(XY)$. Define antisymmetric symbols by $\eta_{aij}=\epsilon_{aij}$, $\eta_{ai4}=\delta_{ai}$, $\bar\eta_{aij}=-\epsilon_{aij}$, and $\bar\eta_{ai4}=\delta_{ai}$ for spatial indices $i,j\in\{1,2,3\}$, where $\delta_{ai}$ is the Kronecker delta; extend them antisymmetrically in the last two indices. For a scale parameter $\rho>0$, define $u(x)=(x^4I-i x^j\sigma_j)/r\in SU(2)$ on $U_N\cap U_S$. Form the quotient of the two trivial right $SU(2)$-bundles by identifying $(x,h)_S\sim(x,u(x)^{-1}h)_N$ for each $x\in U_N\cap U_S$ and $h\in SU(2)$, so its local sections satisfy $s_S=s_Nu^{-1}$. Take the set of admitted bundle sectors to be the singleton containing the isomorphism class of this glued bundle, and take the representation family to be the singleton defining representation on $\mathbb C^2$. Define the local connection potentials by

$$ A_N=\frac{2\eta_{a\mu\nu}x^\nu}{r^2+\rho^2}T_a\,dx^\mu,\qquad A_S=-\frac{2\rho^2\bar\eta_{a\mu\nu}y^\nu}{1+\rho^2|y|^2}T_a\,dy^\mu. $$

On the overlap these obey $A_S=\operatorname{Ad}_u A_N+u\,d(u^{-1})$, so they define a smooth principal connection on the glued bundle. Let $F$ be its global curvature, with chart representatives $F_N$ and $F_S$. In the north chart its curvature, written $F_N=\tfrac12F^N_{\mu\nu}dx^\mu\wedge dx^\nu$, has components

$$ F^N_{\mu\nu}=-\frac{4\rho^2}{(r^2+\rho^2)^2}\eta_{a\mu\nu}T_a. $$

Let $*_{g_X}$ be the Hodge star characterized on two-forms by $\alpha\wedge *_{g_X}\beta=\langle\alpha,\beta\rangle_{g_X}\,d\operatorname{vol}_X$, acting componentwise on the Lie-algebra coefficients. This curvature is self-dual, meaning $F_N=*_{g_X}F_N$. With $B$ as fixed above, define the charge by $q_B=(8\pi^2)^{-1}\int_{S^4}B(F\wedge F)$ and, for any real $g>0$, define the action by $S_B(g)=g^{-2}\int_{S^4}B(F\wedge *_{g_X}F)$. Then $q_B=1$, $S_B(g)=8\pi^2/g^2<\infty$, and the action saturates the self-dual bound. This is one explicit Belavin–Polyakov–Schwartz–Tyupkin (BPST) charge-one connection; no uniqueness or moduli classification is asserted.

## Example references

[[prop-qftx-su2-bpst-explicit-connection-on-s4]]

## Facts & Assumptions

**Given:** All the data and conventions in the Example.

[F1] The explicit BPST proposition establishes precisely the displayed connection, smoothness, curvature, self-duality, charge and action for every $\rho>0$ and $g>0$. [[prop-qftx-su2-bpst-explicit-connection-on-s4]]

## Verification

1.1 Apply [F1] with the given $\rho>0$ and $g>0$, round metric, north-chart orientation, Pauli matrices, transition $u^{-1}$ and trace form $B=-\operatorname{tr}_2$. These are exactly the hypotheses and explicit formulas of the proposition, so it applies to the displayed local data. [given, F1]

2.1 Its conclusions give every asserted property, including the global smooth connection, displayed curvature, self-duality, $q_B=1$ and $S_B(g)=8\pi^2/g^2$. No classification follows. [F1, step 1.1] ∎
