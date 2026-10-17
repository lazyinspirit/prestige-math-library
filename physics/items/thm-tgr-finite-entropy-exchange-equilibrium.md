---
id: thm-tgr-finite-entropy-exchange-equilibrium
kind: theorem
title: Independent finite entropy-exchange equilibrium
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Statistical Physics lecture notes, chapter 1, §§1.2.2 and 1.4"
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: "David Schaich, Statistical Physics lecture notes, complete 171-page notes, Unit 6, pp. 80–90"
      url: https://davidschaich.net/teaching/2122S_StatPhys/lecture.pdf
---

## Statement

Let $r\ge1$ be finite. For each cell $i=1,\ldots,r$, let $U_i\subseteq\mathbb R^2$
be open and convex, with coordinates $(E_i,n_i)$, and let
$S_i\in C^1(U_i,\mathbb R)$ be concave. The coordinates may be assigned SI
dimensions $[E_i]=\mathrm J$, $[n_i]=1$, and $[S_i]=\mathrm{J\,K^{-1}}$; the
particle-number coordinate is a continuous thermodynamic variable. Fix
constants $N_i>0$ (dimensionless), $\Phi_i\in\mathbb R$ (volts), and a common
charge $q\in\mathbb R$ (coulombs). Define
$$\mathcal E(x):=\sum_{i=1}^r(N_iE_i+q\Phi_i n_i),\qquad \mathcal N(x):=\sum_{i=1}^r n_i,\qquad S_{\rm tot}(x):=\sum_{i=1}^rS_i(E_i,n_i).$$
For a supplied feasible interior point $x^*\in U:=\prod_iU_i$, let
$A:\mathbb R^{2r}\to\mathbb R^2$ be the linear map whose rows are the
coefficients of $(\mathcal E,\mathcal N)$. Call $x^*$ stationary under
independent exchange variations when
$DS_{\rm tot}(x^*)[h]=0$ for every $h\in\ker A$. Assume
$\partial_{E_i}S_i(x_i^*)>0$ and define
$$\frac1{T_i}:=\partial_{E_i}S_i(x_i^*),\qquad \frac{\mu_i}{T_i}:=-\partial_{n_i}S_i(x_i^*).$$
Then $x^*$ is stationary if and only if there are constants $T_K>0$ and
$\mu_K\in\mathbb R$ such that, for every cell,
$$N_iT_i=T_K,\qquad N_i\mu_i+q\Phi_i=\mu_K.$$
If each $S_i$ is concave, every such stationary point is a global maximizer of
$S_{\rm tot}$ on the feasible set in $U$. If each $S_i$ is strictly concave,
that maximizer is unique whenever it exists. No existence or boundary
attainment of a stationary point is asserted. These are finite-dimensional
conditional deductions; the coefficients $N_i,\Phi_i$ are inputs, not
predictions about a physical system.

## Facts & Assumptions

**Given:** The finite product domain, cell entropies, positive coefficients
$N_i$, fixed $q,\Phi_i$, the two affine constraints, and a feasible interior
point $x^*$.

[A1] $r\ge1$, every $U_i\subseteq\mathbb R^2$ is open and convex,
$S_i\in C^1(U_i,\mathbb R)$ is concave,
$N_i>0$, and $q,\Phi_i$ are fixed real constants.

[A2] The point $x^*\in U$ satisfies
$A x^*=(\mathcal E_0,\mathcal N_0)$ for fixed values
$(\mathcal E_0,\mathcal N_0)$, and
$\partial_{E_i}S_i(x_i^*)>0$ for every cell $i$.

[A3] For the forward implication and the concavity conclusion only, assume
$x^*$ is stationary under independent exchange variations, meaning
$DS_{\rm tot}(x^*)[h]=0$ for every $h\in\ker A$.

[A4] For the converse implication only, assume there are constants
$T_K>0$ and $\mu_K\in\mathbb R$ satisfying the two redshift equations in the
Statement.

## Proof



1.1 Order coordinates as $(E_1,n_1,\ldots,E_r,n_r)$. The first row of $A$ has $E_i$ coefficient $N_i>0$, while the second row has every $E_i$ coefficient zero and every $n_i$ coefficient one. Hence the two rows are linearly independent and $\operatorname{rank}A=2$. Therefore $\dim(\ker A)^\perp=2$. The range of $A^\mathsf T$ is contained in $(\ker A)^\perp$ because $A^\mathsf Ty\cdot h=y\cdot Ah=0$ whenever $h\in\ker A$; $A^\mathsf T$ is injective since $A$ has rank two. Its range also has dimension two, so $\operatorname{range}(A^\mathsf T)=(\ker A)^\perp$. [given, A1, algebra]

2.1 Under the forward hypothesis [A3], $\nabla S_{\rm tot}(x^*)$ is orthogonal to $\ker A$, hence lies in $\operatorname{range}(A^\mathsf T)$ by step 1.1. Thus there are unique multipliers $\lambda,\nu\in\mathbb R$ with, for each $i$,
$$\partial_{E_i}S_i(x_i^*)=\lambda N_i,\qquad \partial_{n_i}S_i(x_i^*)=\lambda q\Phi_i+\nu.$$
Since $\partial_{E_i}S_i(x_i^*)>0$ and $N_i>0$, $\lambda>0$. [given, A2, A3, step 1.1, algebra]

3.1 Under [A3], set $T_K:=1/\lambda>0$ and $\mu_K:=-\nu/\lambda$ using the multipliers of step 2.1. The first multiplier equation gives $1/T_i=\lambda N_i$, so $N_iT_i=T_K$. The second gives $-\mu_i/T_i=\lambda q\Phi_i+\nu$. Multiplying by $-N_iT_i$ and using $N_iT_i=1/\lambda$ yields $N_i\mu_i+q\Phi_i=-\nu/\lambda=\mu_K$. Conversely, assume [A4] and set $\lambda:=1/T_K$ and $\nu:=-\mu_K/T_K$. Then $\partial_{E_i}S_i(x_i^*)=1/T_i=N_i/T_K=\lambda N_i$, and $\partial_{n_i}S_i(x_i^*)=-\mu_i/T_i=-N_i\mu_i/T_K=(q\Phi_i-\mu_K)/T_K=\lambda q\Phi_i+\nu$. Thus $\nabla S_{\rm tot}(x^*)=A^\mathsf T(\lambda,\nu)$. For every $h\in\ker A$, $DS_{\rm tot}(x^*)[h]=(\lambda,\nu)\cdot Ah=0$; feasibility is [A2], so $x^*$ is stationary. This proves the reverse implication without using the forward stationarity hypothesis. [given, A1, A2, A3, A4, step 2.1, algebra]

4.1 For the concavity conclusion assume [A3]. For any other feasible $y\in U$, $A(y-x^*)=0$. By step 2.1, $\nabla S_{\rm tot}(x^*)=A^\mathsf T(\lambda,\nu)$, hence $DS_{\rm tot}(x^*)[y-x^*]=0$. Put $\varphi(t):=S_{\rm tot}(x^*+t(y-x^*))$ for $0\le t\le1$. For $0<s<t\le1$, concavity gives $\varphi(s)\ge(1-s/t)\varphi(0)+(s/t)\varphi(t)$, so $(\varphi(s)-\varphi(0))/s\ge(\varphi(t)-\varphi(0))/t$. Letting $s\downarrow0$ and using differentiability shows $\varphi(t)-\varphi(0)\le t\varphi'(0)=0$, so $S_{\rm tot}(y)\le S_{\rm tot}(x^*)$. If every $S_i$ is strictly concave and $y\ne x^*$, at least one cell coordinate differs; its entropy is strictly concave along the segment, while every other cell entropy is concave, so their sum $\varphi$ is strictly concave. If $y$ were also a maximizer, strict concavity would give $\varphi(t)>(1-t)\varphi(0)+t\varphi(1)=\varphi(0)$ for $0<t<1$, contradicting the tangent bound. Thus no distinct feasible $y$ is also a maximizer. This proves the conditional maximum and uniqueness claims without asserting that any stationary point exists. [given, A1, A2, A3, step 2.1, algebra] ∎
## Remarks

The proof uses only the finite affine constraint map and differentiable
concave functions. It does not import a statistical sampling rule, a Gibbs
state, an equation of state, or a gravitational field equation. In the neutral
case $q=0$, the particle relation reduces to $N_i\mu_i=\mu_K$ without division
by $q$.
