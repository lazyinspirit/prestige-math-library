---
id: thm-c1-dependence-of-solutions-on-initial-data
kind: theorem
title: "$C^1$ dependence of solutions on initial data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-variational-equation-along-an-ode-solution,
       lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval,
       thm-continuous-dependence-of-odes-on-initial-data-and-parameters,
       prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation,
       thm-norm-inequality-for-the-vector-valued-integral,
       thm-gronwall-integral-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Lemma 10.6"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $F:D\subseteq\mathbb R\times\mathbb R^n\to\mathbb R^n$ be continuous and
$C^1$ in the state variable. Fix data $(t_0,x_0)\in D$ and a compact time
interval $I=[t_0-h,t_0+h]$ on which the corresponding solutions through nearby
initial states all exist. Then the solution map

$$\Phi:I\times U_0\to\mathbb R^n,\qquad \Phi(t,y)=x(t;y),$$

is $C^1$ in the initial-state variable $y$ on some neighbourhood $U_0$ of
$x_0$. For each $y\in U_0$, the derivative matrix
$D_y\Phi(t,y)$ is the solution of the variational equation along $t\mapsto x(t;y)$.

## Facts & Assumptions

**Given:** The field $F$, the compact interval $I$, and the common local family $\Phi(t,y)=x(t;y)$ of solutions through nearby initial states.

[F1] The variational equation along a solution is $A'(t)=D_xF(t,x(t))A(t)$ with initial condition $A(t_0)=I_n$ ([[def-variational-equation-along-an-ode-solution]]).

[F2] Solutions satisfy the corresponding Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L1] Nearby initial data and parameters give uniformly close solutions on one common compact time interval ([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]]).

[L2] Linear matrix ODEs on a compact interval have unique solutions ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L3] The norm of a vector-valued integral is at most the integral of the norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L4] Gronwall's integral inequality controls difference equations of Volterra type ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after shrinking $U_0$ if needed, every solution graph $(t,\Phi(t,y))$ with $y\in U_0$ lies in one compact cylinder $K\subseteq D$. Fix $y\in U_0$, and let $A_y:I\to M_n(\mathbb R)$ be the unique solution of the variational equation below. [F1, L1, L2]

$$A_y'(t)=D_xF(t,\Phi(t,y))A_y(t),\qquad A_y(t_0)=I_n,$$

whose existence on $I$ is given by [L2]. Because $D_xF$ is continuous on the compact set $K$, it is bounded and uniformly continuous there.

2.1 Fix $y\in U_0$ and an increment $u\in\mathbb R^n$ with $y+u\in U_0$. By [F2], the difference $z_u(t):=\Phi(t,y+u)-\Phi(t,y)$ satisfies the Volterra equation below, and the state-variable mean-value formula gives the matrix field $B_u$. [F2, L1, step 1.1, algebra]

$$z_u(t)=u+\int_{t_0}^{t}\bigl(F(s,\Phi(s,y+u))-F(s,\Phi(s,y))\bigr)\,ds.$$

For each $s\in I$, the one-variable mean-value formula in the state variable gives

$$F(s,\Phi(s,y+u))-F(s,\Phi(s,y))=B_u(s)\,z_u(s),$$

where

$$B_u(s):=\int_0^1 D_xF\bigl(s,\Phi(s,y)+\theta z_u(s)\bigr)\,d\theta.$$

By [L1], $z_u\to0$ uniformly on $I$ as $u\to0$, so the uniform continuity of $D_xF$ on $K$ gives

$$\varepsilon(u):=\sup_{s\in I}\|B_u(s)-D_xF(s,\Phi(s,y))\|\longrightarrow 0.$$

3.1 Put $\rho_u(t):=z_u(t)-A_y(t)u$. Subtracting the Volterra equations for $z_u$ and $A_yu$ gives the identity below. [L3, L4, step 1.1, step 2.1, algebra]

$$\rho_u(t)=\int_{t_0}^{t}B_u(s)\rho_u(s)\,ds+\int_{t_0}^{t}\bigl(B_u(s)-D_xF(s,\Phi(s,y))\bigr)A_y(s)u\,ds.$$

Let $M:=\sup_K\|D_xF\|$ and $C_y:=\sup_{s\in I}\|A_y(s)\|$. Then $\|B_u(s)\|\le M$, and [L3] gives, for $t\ge t_0$,

$$\|\rho_u(t)\|_2\le M\int_{t_0}^{t}\|\rho_u(s)\|_2\,ds + C_y\varepsilon(u)\|u\|(t-t_0).$$

Applying [L4] on $[t_0,t]$ and its time-reflected form on $[t,t_0]$ yields a constant $C'_y$ independent of $u$ such that $\sup_{t\in I}\|\rho_u(t)\|_2\le C'_y\varepsilon(u)\|u\|$. Since $\varepsilon(u)\to0$, this proves

$$\sup_{t\in I}\frac{\|\Phi(t,y+u)-\Phi(t,y)-A_y(t)u\|_2}{\|u\|}\longrightarrow 0.$$

Therefore $A_y(t)=D_y\Phi(t,y)$ for every $t\in I$.

4.1 For $y,y'\in U_0$, write $E(t):=A_{y'}(t)-A_y(t)$ and $C_y(t):=D_xF(t,\Phi(t,y))$. Then the continuity estimate below, together with the same Gronwall argument as in step 3.1, proves continuity of the derivative matrix. [L1, L3, L4, step 1.1, step 3.1, algebra]

$$E(t)=\int_{t_0}^{t}C_{y'}(s)E(s)\,ds+\int_{t_0}^{t}\bigl(C_{y'}(s)-C_y(s)\bigr)A_y(s)\,ds.$$

By [L1], $\Phi(\,\cdot\,,y')\to\Phi(\,\cdot\,,y)$ uniformly on $I$ as $y'\to y$, so the uniform continuity of $D_xF$ on $K$ gives $\sup_{s\in I}\|C_{y'}(s)-C_y(s)\|\to0$. Applying [L3] and [L4] exactly as in step 3.1 shows $\sup_{t\in I}\|E(t)\|_2\to0$. Hence $y\mapsto D_y\Phi(t,y)=A_y(t)$ is continuous for each $t$, and the derivative matrix is exactly the variational-equation solution.

5.1 Steps 3.1 and 4.1 prove that $\Phi$ is $C^1$ in the initial-state variable and that its derivative matrix is the solution of the variational equation. [step 3.1, step 4.1] ∎
