---
id: cor-finite-speed-of-dependence-for-lipschitz-hamiltonians
kind: corollary
title: Finite speed of dependence for Hamiltonians Lipschitz in momentum
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- thm-comparison-for-first-order-hamilton-jacobi-equations
- def-viscosity-subsolution-and-supersolution
- def-semicontinuity-on-euclidean-subsets
- thm-heine-borel-rn
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- thm-euclidean-semicontinuous-extreme-value-theorem
- def-directional-and-partial-derivatives
- lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 10, Lemmas 1.36--1.37 and Theorem 1.35, printed pp. 40--42
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 5.1, Theorem 5.2, printed pp. 19--22 (whole-space Lipschitz comparison background); the finite-speed reduction and cone barrier are proved here.
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 5.B, estimates from comparison, printed pp. 30--31 (comparison background); the finite-speed cone is proved here following Tran Chapter 1 Section 10.
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $T>0$, and let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous. Suppose
there are constants $C>0$ and $L>0$ such that, for all $x,y,p,q\in\mathbb R^n$
and $t,s\in[0,T]$,
$$|H(x,t,p)-H(y,s,p)|\le C(1+|p|)(|x-y|+|t-s|),\qquad |H(x,t,p)-H(x,t,q)|\le L|p-q|.$$
Let $u,v:\mathbb R^n\times[0,T)\to\mathbb R$ be bounded, with $u$ upper
semicontinuous and $v$ lower semicontinuous; assume that $u$ is a viscosity
subsolution and $v$ a viscosity supersolution of $u_t+H(x,t,Du)=0$ on
$\mathbb R^n\times(0,T)$. Fix $x_0\in\mathbb R^n$ and $R>0$. If
$u(x,0)\le v(x,0)$ for every $x\in B(x_0,R)$, then
$$u(x,t)\le v(x,t)\qquad\text{for }0\le t<\min\{T,R/L\}\text{ and }|x-x_0|<R-Lt.$$
In particular, if $u$ and $v$ are bounded viscosity solutions with the same
initial values on $B(x_0,R)$ and are also respectively lower and upper
semicontinuous on $\mathbb R^n\times[0,T)$ (so both are continuous there),
then $u(x,t)=v(x,t)$ on this open backward cone.
The cone is stated with strict spatial inequality because $B(x_0,R)$ is open
and no continuity of the initial traces is assumed. No choice principle is
used.

## Facts & Assumptions

**Given:** Continuous $H$ with the two Lipschitz conditions, bounded $u,v$ on $\mathbb R^n\times[0,T)$ with $u$ upper semicontinuous and $v$ lower semicontinuous, $u$ a subsolution and $v$ a supersolution on $\mathbb R^n\times(0,T)$, and $u(x,0)\le v(x,0)$ for $|x-x_0|<R$.

[F1] At every $C^1$ local maximum of $u-\phi$: $\phi_t+H(x,t,D\phi)\le0$; at every $C^1$ local minimum of $v-\phi$: $\phi_t+H(x,t,D\phi)\ge0$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] The difference $u-v$ is upper semicontinuous, since $u$ is upper semicontinuous and $-v$ is upper semicontinuous; adding continuous penalty terms preserves upper semicontinuity ([[def-semicontinuity-on-euclidean-subsets]]).

[F3] Closed bounded subsets of finite-dimensional Euclidean space are compact, upper semicontinuous real-valued functions attain their maxima on nonempty compact sets, and continuous functions attain their minima there ([[thm-heine-borel-rn]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-euclidean-semicontinuous-extreme-value-theorem]]). In particular, two disjoint compact sets in Euclidean space have positive distance.

[F4] Comparison case (a) applies to the Hamiltonian $G(x,t,p)=-L|p|$, which has $|G(x,t,p)-G(y,s,p)|=0$ and $|G(x,t,p)-G(x,t,q)|\le L|p-q|$: a bounded upper semicontinuous subsolution and a bounded lower semicontinuous supersolution on the closed slab with ordered initial traces satisfy the comparison inequality ([[thm-comparison-for-first-order-hamilton-jacobi-equations]]).

## Proof

**Proof technique:** reduce the difference by a localised two-time doubling argument, then compare with a smooth radial cone barrier.

1.1 Reduction. Put $w:=u-v$, which is bounded and upper semicontinuous. Let $\phi\in C^1$ and suppose $w-\phi$ has a strict local maximum at $z_*=(x_*,t_*)\in Z$. Choose $T_*$ with $t_*<T_*<T$ and a compact cylinder $Q\Subset\mathbb R^n\times(0,T_*)$ around $z_*$ on which the maximum is strict. Write $z=(x,t)$ and $z'=(y,s)$. For fixed $\rho>0$ set $G_\rho(z,z'):=u(x,t)-v(y,s)-\phi(x,t)-\rho(|x-x_*|^2+|y-x_*|^2)$ and $F_\alpha(z,z'):=G_\rho(z,z')-\frac\alpha2|z-z'|^2$. By [F2]--[F3], $F_\alpha$ attains a finite maximum $M_\alpha$ on $Q\times Q$, and $M_\alpha\ge m_*:=(w-\phi)(z_*)$ by evaluation at $(z_*,z_*)$. The values $M_\alpha$ decrease with $\alpha$ and are bounded below by $m_*$, so they converge. For every maximiser $(z,z')$, comparison with $F_{\alpha/2}$ at that same point gives $\alpha|z-z'|^2\le4(M_{\alpha/2}-M_\alpha)\to0$, uniformly over the maximiser sets; in particular $|z-z'|\to0$ uniformly. Fix any sufficiently small open neighbourhood $V$ of $z_*$ with closure in the interior of $Q$, and put $A:=Q\setminus V$. Strictness and [F2]--[F3] give $m_A:=\max_{z\in A}(w-\phi)(z)<m_*$. Let $\gamma:=(m_*-m_A)/2>0$ and $\Delta_A:=\{(z,z):z\in A\}$. On $\Delta_A$, $G_\rho(z,z)\le m_A=m_*-2\gamma$. The compact superlevel set $C:=\{(z,z')\in A\times Q:G_\rho(z,z')\ge m_*-\gamma\}$ is disjoint from $\Delta_A$. If $C$ is nonempty, [F3] gives a positive distance $d_*>0$ between these compact sets; if it is empty, choose any $d_*>0$. Thus $G_\rho(z,z')<m_*-\gamma$ whenever $z\in A$ and $|z-z'|<d_*$. For all sufficiently large $\alpha$, every maximiser has $|z-z'|<d_*$, so its first slot cannot lie in $A$, since its value is at least $m_*$. As $V$ was arbitrary, all first slots converge uniformly to $z_*$; the second slots do also by the diagonal estimate. At each maximiser, fixing one slot gives $C^1$ upper and lower contacts for $u$ and $v$ with spatial gradients $p_\alpha:=D\phi(z)+\alpha(x-y)+2\rho(x-x_*)$ and $q_\alpha:=\alpha(x-y)-2\rho(y-x_*)$, and time derivatives $\phi_t(z)+\alpha(t-s)$ and $\alpha(t-s)$. By [F1] and the two Lipschitz bounds, $\phi_t(z)\le H(y,s,q_\alpha)-H(x,t,p_\alpha)\le L|q_\alpha-p_\alpha|+2C(1+|p_\alpha|)|z-z'|$. Since $|z-z'|\to0$, $\alpha|z-z'|^2\to0$, and $D\phi$ is bounded on $Q$, the last error tends to zero uniformly over maximisers. Also $q_\alpha-p_\alpha=-D\phi(z)-2\rho((x-x_*)+(y-x_*))\to-D\phi(z_*)$ uniformly for fixed $\rho$. Passing to these uniform limits gives $\phi_t(z_*)-L|D\phi(z_*)|\le0$. The non-strict case follows by [[lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation]]; hence $w$ is a viscosity subsolution of $w_t-L|Dw|=0$ in $Z$. [F1, F2, F3, algebra]

1.2 The cone barrier. Let $M:=\max\{0,\sup_{\mathbb R^n\times[0,T)}w\}$, and let $h:\mathbb R\to\mathbb R$ be the explicit nondecreasing $C^1$ cutoff with $h=0$ on $(-\infty,0]$, $h(s)=3s^2-2s^3$ for $s\in[0,1]$ and $h=1$ on $[1,\infty)$. For $0<\varepsilon<R$ and $\delta>0$ put $\xi_\varepsilon(r):=Mh((r-(R-\varepsilon))/\varepsilon)$ and $\psi_{\varepsilon,\delta}(x,t):=\xi_\varepsilon\bigl(\sqrt{|x-x_0|^2+\delta^2}+Lt\bigr)$. Then $\psi_{\varepsilon,\delta}$ is $C^1$, bounded and nonnegative, and it is a classical supersolution of $\psi_t-L|D\psi|=0$ on $\mathbb R^n\times(0,T)$: indeed $|D\psi|=\xi'_\varepsilon\cdot|x-x_0|/\sqrt{|x-x_0|^2+\delta^2}$ and $\psi_t=L\xi'_\varepsilon$, so $\psi_t-L|D\psi|=L\xi'_\varepsilon\bigl(1-|x-x_0|/\sqrt{|x-x_0|^2+\delta^2}\bigr)\ge0$ because $\xi'_\varepsilon\ge0$. At $t=0$ we have $w(x,0)\le\psi_{\varepsilon,\delta}(x,0)$ for every $x$: for $|x-x_0|<R$ this uses $w(x,0)\le0\le\psi_{\varepsilon,\delta}(x,0)$, and for $|x-x_0|\ge R$ it uses $\psi_{\varepsilon,\delta}(x,0)=M\ge w(x,0)$ (the cutoff argument at $t=0$ is $\bigl(\sqrt{|x-x_0|^2+\delta^2}-(R-\varepsilon)\bigr)/\varepsilon\ge1$). [F3, algebra]

2.1 Comparison with the barrier and conclusion. By step 1.1 the difference $w$ is a bounded upper semicontinuous subsolution of $w_t+G(x,t,Dw)=0$ and by step 1.2 the barrier is a bounded continuous supersolution of the same equation with ordered initial traces; comparison [F4] gives $w\le\psi_{\varepsilon,\delta}$ on $\mathbb R^n\times(0,T)$. At $t=0$ the desired inequality is the assumed initial order. Now fix $0<t<\min\{T,R/L\}$ and $|x-x_0|<R-Lt$. Choose $\varepsilon>0$ with $|x-x_0|+Lt<R-\varepsilon$ and then $\delta>0$ with $\sqrt{|x-x_0|^2+\delta^2}+Lt\le R-\varepsilon$; for these parameters the cutoff argument is at most $0$, so $\psi_{\varepsilon,\delta}(x,t)=0$ and comparison gives $w(x,t)\le0$, that is $u(x,t)\le v(x,t)$. Under the additional semicontinuity assumptions in the equality clause, $v$ is an upper semicontinuous subsolution and $u$ a lower semicontinuous supersolution on the same half-closed slab. Applying the same conclusion to $(v,u)$ with the initial agreement then gives the reverse inequality and hence equality on the cone. [step 1.1, step 1.2, F3, F4] ∎

## Remarks

- **Why the strict cone.** The initial agreement is assumed only on the open ball and the initial traces need not be continuous; the barrier is built with $R-\varepsilon$ and the limiting argument therefore produces the strict inequality $|x-x_0|<R-Lt$.
- **The reduction is not the comparison theorem for $u-v$ directly.** The reduction uses the two-sided doubling contacts and the momentum-Lipschitz bound, so the difference satisfies the Hamilton--Jacobi equation with the Hamiltonian $-L|p|$, to which comparison case (a) applies.
