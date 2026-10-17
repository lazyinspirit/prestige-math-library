---
id: def-conic-optimization-primal-dual-models
kind: definition
title: "Conic, LP, and convex QP primal-dual models"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-convex-program-duality-and-slater-condition
  - def-inequality-constrained-program-and-kkt-geometry
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 4 §§4.6 and 4.8, Chapter 5 §§5.2–5.9, and Chapter 11 §§11.6–11.7."
    - title: "Hamza Fawzi, Topics in Convex Optimisation, Lecture 16: Linear, second-order cone, and semidefinite programming"
      url: "https://www.damtp.cam.ac.uk/user/hf323/M19-OPT/lecture16.pdf"
      locator: "Full 4-page lecture, §§16.1–16.3."
---

## Definition

For a finite-dimensional real inner-product space $E$, a **cone** is a set closed under addition and multiplication by nonnegative scalars. A cone $K\subset E$ is **proper** when it is closed, convex, pointed ($K\cap(-K)=\{0\}$), and has nonempty interior. Its dual cone is
$$K^*=\{z\in E:\langle z,s\rangle\ge0\text{ for every }s\in K\}.$$

Let $A:\mathbb R^n\to\mathbb R^p$ and $G:\mathbb R^n\to E$ be linear, let $b\in\mathbb R^p$, $c\in\mathbb R^n$, and $h\in E$. A matrix $A$ has full row rank when its rows are linearly independent. The conic primal problem and its displayed dual pair are
$$\inf\{c^Tx:Ax=b,\ h-Gx\in K\},\qquad \sup\{b^Ty-\langle h,z\rangle:A^Ty-G^*z=c,\ z\in K^*\},$$
where $G^*$ is the adjoint, defined by $\langle Gx,z\rangle=x^TG^*z$. For any feasible pair, its gap is
$$c^Tx-b^Ty+\langle h,z\rangle=\langle z,h-Gx\rangle\ge0.$$
The special case $\inf\{c^Tx:Ax=b,\ x\in K\}$ has dual $\sup\{b^Ty:A^Ty+z=c,\ z\in K^*\}$ and gap $\langle z,x\rangle$.

For $K=\mathbb R_+^n$, the latter is the standard-form LP $\min c^Tx$ subject to $Ax=b$, $x\ge0$, with dual variables $y$ free and $s=c-A^Ty\ge0$. A convex QP in this convention has objective $f_0(x)=\tfrac12x^TQx+c^Tx$, with symmetric $Q\succeq0$, the same equality, and $x\ge0$. Its Lagrangian is $L(x,y,s)=f_0(x)+y^T(b-Ax)-s^Tx$; a feasible KKT tuple obeys $Qx+c-A^Ty-s=0$, and its dual function is $q(y,s)=\inf_{w\in\mathbb R^n}L(w,y,s)$. The dual value is $d^*=\sup_{y\in\mathbb R^p,\ s\ge0}q(y,s)$.

For a Lorentz cone $\mathcal L_{d+1}=\{(t,u)\in\mathbb R\times\mathbb R^d:t\ge\|u\|_2\}$, let $F_j\in\mathbb R^{d_j\times n}$, $f_j\in\mathbb R^{d_j}$, $g_j\in\mathbb R^n$, and $h_j\in\mathbb R$. Then $\|F_jx+f_j\|_2\le g_j^Tx+h_j$ is membership of $(g_j^Tx+h_j,F_jx+f_j)$ in $\mathcal L_{d_j+1}$. With no equality constraints, the SOCP $\min c^Tx$ under these constraints has dual
$$\max -\sum_j(f_j^Tu_j+h_j\tau_j)\quad\text{subject to }\sum_j(F_j^Tu_j+g_j\tau_j)=c,\quad(\tau_j,u_j)\in\mathcal L_{d_j+1}.$$
For symmetric matrices, $S\succeq0$ means $v^TSv\ge0$ for every $v$ and the pairing is $\langle X,S\rangle=X\bullet S:=\operatorname{tr}(XS)$. Thus $\min C\bullet X$ subject to $\mathcal A(X)=b$, $X\succeq0$ has dual $\max b^Ty$ subject to $\mathcal A^*y+S=C$, $S\succeq0$, with gap $X\bullet S$. The affine-matrix SDP $\min c^Tx$ subject to $F_0+\sum_i x_iF_i\succeq0$ has dual $\max -F_0\bullet Z$ subject to $F_i\bullet Z=c_i$ for every $i$ and $Z\succeq0$.

The smooth convex inequality convention is that of [[def-inequality-constrained-program-and-kkt-geometry]]: inequalities are written $g_i(x)\le0$ and their multipliers are nonnegative. The Lagrangian dual-value convention is that of [[def-convex-program-duality-and-slater-condition]].
