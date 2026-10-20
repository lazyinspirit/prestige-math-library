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
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-c1-dependence-of-solutions-on-initial-data.json
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

1.1 Write $x_*(t):=\Phi(t,x_0)$. Its graph $G:=\{(t,x_*(t)):t\in I\}$ is compact and lies in the open ODE domain $D$. Hence it has a positive interior margin: there is $r>0$ such that the compact tube $K:=\{(t,x):t\in I,\ \|x-x_*(t)\|_2\le r\}$ lies in $D$. Indeed, a finite cover of $G$ by open balls whose doubled balls lie in $D$ gives a positive uniform distance from $G$ to the complement of $D$; choose $r$ smaller than that distance. The tube is closed and bounded because $x_*$ is continuous. On $K$, the continuous state Jacobian is bounded by $M:=\sup_K\|D_xF\|<\infty$ and uniformly continuous. Each time slice of $K$ is a convex state ball, so integrating $D_xF$ on its state segments gives the state-Lipschitz bound $M$ on that slice. [given, construct, algebra]

2.1 Shrink the given initial-state neighbourhood to an open ball $U_0$ about $x_0$ with $e^{Mh}\|y-x_0\|_2<r/2$ for every $y\in U_0$. Every given solution through $y\in U_0$ stays within distance $r/2$ of $x_*$ on all of $I$: up to a hypothetical first time when its distance from $x_*$ reaches $r/2$, both paths and their connecting state segment lie in $K$. Subtracting their Volterra equations and applying the norm inequality and Gronwall gives $\|\Phi(t,y)-x_*(t)\|_2\le e^{M|t-t_0|}\|y-x_0\|_2<r/2$, contradicting that first time. The reflected estimate gives the identical contradiction backward from $t_0$. Thus any two such paths and every same-time state segment joining them lie in $K$. Subtraction and the same estimate now give $\sup_{t\in I}\|\Phi(t,y')-\Phi(t,y)\|_2\le e^{Mh}\|y'-y\|_2$ for $y,y'\in U_0$. This proves uniform-in-time continuous dependence on the entire given interval, without assuming that a single product cylinder covers the base graph. [F2, L3, L4, step 1.1, choose, algebra]

3.1 Fix $y\in U_0$ and set $C_y(t):=D_xF(t,\Phi(t,y))$. This is continuous on $I$ with $\|C_y(t)\|\le M$. By [L2] the variational equation $A_y'(t)=C_y(t)A_y(t)$, $A_y(t_0)=I_n$, has a unique solution on $I$. For each unit vector $v$, apply the vector norm inequality and Gronwall to the integral equation of $A_y(t)v$, whose initial norm is $1$; taking the supremum over $v$ gives $\sup_{t\in I}\|A_y(t)\|\le e^{Mh}$ in the Euclidean operator norm. [F1, F2, L2, L3, L4, step 1.1, step 2.1, algebra]

3.2 Let $u\in\mathbb R^n$ with $y+u\in U_0$ and put $z_u(t):=\Phi(t,y+u)-\Phi(t,y)$. By [F2], $z_u(t)=u+\int_{t_0}^t B_u(s)z_u(s)\,ds$, where $B_u(s):=\int_0^1D_xF(s,\Phi(s,y)+\theta z_u(s))\,d\theta$. This state-variable fundamental-theorem-of-calculus formula is legitimate because step 2.1 puts every displayed secant point in $K\subseteq D$. In particular $\|B_u(s)\|\le M$. Also step 2.1 gives $\sup_I\|z_u\|_2\le e^{Mh}\|u\|_2\to0$, so uniform continuity of $D_xF$ on $K$ gives $\varepsilon_y(u):=\sup_{s\in I}\|B_u(s)-C_y(s)\|\to0$ as $u\to0$. [F2, L3, step 1.1, step 2.1, algebra]

4.1 Put $\rho_u(t):=z_u(t)-A_y(t)u$. Subtracting the integral equations gives $\rho_u(t)=\int_{t_0}^t B_u(s)\rho_u(s)\,ds+\int_{t_0}^t(B_u(s)-C_y(s))A_y(s)u\,ds$. On either oriented half of $I$, the norm inequality and Gronwall, with forcing bounded by $h e^{Mh}\varepsilon_y(u)\|u\|_2$, yield $\sup_{t\in I}\|\rho_u(t)\|_2\le h e^{2Mh}\varepsilon_y(u)\|u\|_2$. Dividing by $\|u\|_2$ for $u\ne0$ and using step 3.2 shows that the remainder tends to zero uniformly in $t$. Hence $D_y\Phi(t,y)=A_y(t)$ for every $t\in I$. [L3, L4, step 3.1, step 3.2, algebra]

4.2 For $y,y'\in U_0$, set $E(t):=A_{y'}(t)-A_y(t)$. Subtracting the variational integral equations gives $E(t)=\int_{t_0}^t C_{y'}(s)E(s)\,ds+\int_{t_0}^t(C_{y'}(s)-C_y(s))A_y(s)\,ds$. Steps 1.1 and 2.1 imply $\delta(y',y):=\sup_{s\in I}\|C_{y'}(s)-C_y(s)\|\to0$ as $y'\to y$. The same two-sided Gronwall estimate gives $\sup_{t\in I}\|E(t)\|\le h e^{2Mh}\delta(y',y)\to0$. Thus $y\mapsto A_y$ is continuous in the uniform norm; continuity of each $A_y$ in time also makes $(t,y)\mapsto A_y(t)$ jointly continuous. [L3, L4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 prove that $\Phi$ is $C^1$ in the initial-state variable and that its derivative is the unique solution of the variational equation along each trajectory. [step 3.1, step 4.1, step 4.2] ∎
