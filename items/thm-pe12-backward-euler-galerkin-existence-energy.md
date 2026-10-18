---
id: thm-pe12-backward-euler-galerkin-existence-energy
kind: theorem
title: Nonlinear backward Euler Galerkin existence and energy bounds
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe12-monotone-diffusion-flux, def-pe12-stable-conforming-fem-family, lem-pe12-outward-zero-brouwer, lem-parabolic-discrete-energy-identity, thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, def-axiom-of-choice, thm-pe12-l2-projector-w1p-stability, thm-dominated-convergence]
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 12 §§12.1–12.2, implicit Euler and discrete energy, PDF pp. 102–108
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS 2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: Theorem 2.1, Galerkin/Brouwer existence proof, and §9, evolution time stepping
---

## Statement

Assume the Axiom of Choice.

Assume the hypotheses in [[def-pe12-monotone-diffusion-flux]] and an
admissible stable conforming FEM sequence
$(V_k,\Pi_k,\mathcal P_k)$ from
[[def-pe12-stable-conforming-fem-family]]. Let
$f\in L^{p'}(0,T;V^*)$, $u_0\in H$, and on each partition
$\mathcal P_k=(I_k^n)_{n=1}^{N_k}$ put
$f_k^n=|I_k^n|^{-1}\int_{I_k^n}f(t)\,dt$ and
$U_k^0=\Pi_ku_0$. Then for each $k$ there exist
$U_k^n\in V_k$, $1\le n\le N_k$, satisfying
$$\left(\frac{U_k^n-U_k^{n-1}}{\tau_k^n},v_k\right)_H +\langle A(U_k^n),v_k\rangle =\langle f_k^n,v_k\rangle\qquad(v_k\in V_k).$$
Every such solution obeys a bound, independent of $k$ and the time steps,
on
$$\max_n\|U_k^n\|_H^2+ \sum_n\|U_k^n-U_k^{n-1}\|_H^2+ \sum_n\tau_k^n\|U_k^n\|_V^p+ \|D_k\|_{L^{p'}(0,T;V^*)}^{p'},$$
where $D_k=(U_k^n-U_k^{n-1})/\tau_k^n$ on $I_k^n$. The bound depends only
on the flux constants, $p$, $T$, the family stability constant
$C_\Pi$, $\|u_0\|_H$, $\|f\|_{L^{p'}(V^*)}$,
$\|g\|_{L^{p'}(\Omega)}$, and $\|h\|_{L^1(\Omega)}$.

In particular, the same existence and energy conclusion holds on the
fixed-degree uniform interval meshes of $(0,1)$ in $d=1$ and uniform
Kuhn/Freudenthal simplex meshes of $(0,1)^d$ for $d\ge2$, paired with any
time partitions whose maximum step tends to zero independently of the
spatial mesh.

## Facts & Assumptions

**Given:** The Axiom of Choice, the stated flux and FEM hypotheses,
$f\in L^{p'}(0,T;V^*)$,
$u_0\in H$, and the time partitions.

[F1] The flux is Carathéodory with the stated growth and coercivity conditions. Its induced map satisfies
$\|A(v)\|_{V^*}\le C_1(\|g\|_{L^{p'}}+\|v\|_V^{p-1})$, and obeys
$\langle A(v),v\rangle\ge\alpha\|v\|_V^p-\|h\|_{L^1}$
([[def-pe12-monotone-diffusion-flux]]).

[F2] The projections are $H$-orthogonal, map $V$ into $V$, and satisfy
$\sup_k\|\Pi_k\|_{V\to V}\le C_\Pi$
([[def-pe12-stable-conforming-fem-family]]).

[F3] A continuous finite-dimensional map whose pairing with $x$ is positive
on a sphere has a zero inside that sphere
([[lem-pe12-outward-zero-brouwer]]).

[F4] In a real Hilbert space,
$2(x-y,x)=\|x\|^2-\|y\|^2+\|x-y\|^2$
([[lem-parabolic-discrete-energy-identity]]).

[F5] Hölder bounds the cell averages of $f$, and Young's inequality for
conjugate $p,p'$ gives, for $a,b\ge0$,
$$ab\le\frac{\alpha}{2}a^p+ \frac1{p'}\left(\frac2\alpha\right)^{1/(p-1)}b^{p'}.$$
([[thm-holder-inequality-for-integrals]],
[[thm-young-inequality-real-exponents]]).

[F6] The explicit interval and cube projector families satisfy the abstract
uniform $V$-stability and strong approximation clauses, and can be paired
with arbitrary independent time partitions tending to zero
([[thm-pe12-l2-projector-w1p-stability]]).

[F7] Dominated convergence passes pointwise limits through an integral under a fixed integrable majorant ([[thm-dominated-convergence]]).

[A1] The hypotheses are stated on the Axiom-of-Choice branch inherited from the flux definition; for fixed $k$ the grid is finite, so the proof selects only finitely many roots and does not use Countable Choice ([[def-axiom-of-choice]]).

## Proof

1.1 Fix $k$. If $V_k=\{0\}$, then $U_k^0=\Pi_ku_0=0$, and setting $U_k^n=0$ for every $n$ satisfies every equation (the only test vector is zero). Assume $V_k\ne\{0\}$. For a time cell $I_k^n$, the Bochner average $f_k^n\in V^*$ exists. Define $F_n:V_k\to V_k^*$ by $$\langle F_n(z),w_k\rangle =\tau_k^{-1}(z-U_k^{n-1},w_k)_H +\langle A(z)-f_k^n,w_k\rangle.$$ Choose a fixed $H$-orthonormal basis $\psi_1,\ldots,\psi_N$ of $V_k$ and identify $V_k^*$ with $\mathbb R^N$ by its values on that basis. To prove continuity, let $z_m=\sum_j c_{mj}\psi_j$ with $c_{mj}\to c_j$, and put $z=\sum_jc_j\psi_j$. The coefficients are bounded by some $M$, so $|\nabla z_m|\le M\sum_j|\nabla\psi_j|=:B\in L^p(\Omega)$ and the gradients converge pointwise outside one null set. For each test basis vector $\psi_i$, Carathéodory continuity gives pointwise convergence of $a(x,\nabla z_m)\cdot\nabla\psi_i$, while growth bounds its absolute value by $C(g+B^{p-1})|\nabla\psi_i|\in L^1$ by Hölder [F5]. Thus [F7] proves convergence of every flux test coordinate. The mass and load coordinates are continuous and affine, so $F_n$ is a continuous finite-dimensional map, without a global operator-continuity assumption. Finite dimensionality gives constants $c_k,C_k>0$ with $c_k\|z\|_H\le\|z\|_V\le C_k\|z\|_H$ on $V_k$. Coercivity [F1] therefore gives, with $r=\|z\|_H$, $$\langle F_n(z),z\rangle \ge \tau_k^{-1}r^2+\alpha c_k^p r^p -\bigl(\tau_k^{-1}\|U_k^{n-1}\|_H+ C_k\|f_k^n\|_{V^*}\bigr)r-\|h\|_{L^1}.$$ Since $p>1$, the right side is positive for all sufficiently large $r$. [A1, F1, F5, F7, given, construct, algebra]

2.1 Apply [F3] on such a sphere in the chosen coordinates to obtain $F_n(U_k^n)=0$. Starting with $U_k^0=\Pi_ku_0$, repeat this finite step for $n=1,\ldots,N_k$; this constructs the discrete solution on the partition. [A1, F3, step 1.1, given, choose]

3.1 Test the equation with $v_k=U_k^n$. By [F4], $$\frac12\bigl(\|U_k^n\|_H^2-\|U_k^{n-1}\|_H^2+ \|U_k^n-U_k^{n-1}\|_H^2\bigr) +\tau_k^n\alpha\|U_k^n\|_V^p \le\tau_k^n\|f_k^n\|_{V^*}\|U_k^n\|_V+ \tau_k^n\|h\|_{L^1}.$$ Use [F5] to absorb half the coercive term and sum over $n$. Hölder on each cell gives $\sum_n\tau_k^n\|f_k^n\|_{V^*}^{p'}\le\|f\|_{L^{p'}(V^*)}^{p'}$. Consequently $$\frac12\|U_k^m\|_H^2+ \frac12\sum_{n\le m}\|U_k^n-U_k^{n-1}\|_H^2+ \frac\alpha2\sum_{n\le m}\tau_k^n\|U_k^n\|_V^p \le\frac12\|U_k^0\|_H^2+ T\|h\|_{L^1}+C_{\alpha,p}\|f\|_{L^{p'}(V^*)}^{p'},$$ for every $m$. Orthogonality gives $\|U_k^0\|_H\le\|u_0\|_H$; taking the maximum over $m$ bounds the first three quantities uniformly in $k$. [F1, F2, F4, F5, step 2.1, given, algebra]

4.1 For $v\in V$, orthogonality and $D_k|_{I_k^n}\in V_k$ give $$\langle D_k,v\rangle =(D_k,iv)_H=(D_k,\Pi_kv)_H =\langle f_k^n-A(U_k^n),\Pi_kv\rangle.$$ Thus [F2] yields $\|D_k(t)\|_{V^*}\le C_\Pi(\|f_k^n\|_{V^*}+\|A(U_k^n)\|_{V^*})$. The flux growth bound [F1] and the inequality $(a+b)^{p'}\le2^{p'-1}(a^{p'}+b^{p'})$ give $$\|D_k\|_{L^{p'}(V^*)}^{p'}\le C_{p,C_1}C_\Pi^{p'}\left(\|f\|_{L^{p'}(V^*)}^{p'}+T\|g\|_{L^{p'}(\Omega)}^{p'}+\sum_n\tau_k^n\|U_k^n\|_V^p\right).$$ Here $(p-1)p'=p$, and $g$ is constant in time. Step 3.1 bounds the last sum, proving the derivative estimate with precisely the stated family and data dependencies. [F1, F2, step 3.1, given, algebra]

5.1 For the fixed-degree interval and cube sequences in the Statement, [F6] verifies the abstract FEM projector hypotheses, including the independent time partitions. The preceding construction and energy estimates therefore apply to these concrete nonempty meshes. [F6, step 2.1, step 3.1, step 4.1, given] ∎
