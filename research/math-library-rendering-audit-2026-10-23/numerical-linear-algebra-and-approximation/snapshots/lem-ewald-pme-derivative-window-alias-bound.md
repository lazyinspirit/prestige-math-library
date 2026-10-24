---
id: lem-ewald-pme-derivative-window-alias-bound
kind: lemma
title: "Derivative-window alias bounds including the P=2 knot branch"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-ewald-three-dimensional-periodic-source-data,
    def-ewald-pme-cardinal-assignment-model,
    lem-ewald-pme-spline-alias-and-dft-normalization,
    thm-p-series-real-exponents,
    thm-uniform-derivative-limit-on-a-closed-interval
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A
        theoretical and numerical comparison of various particle mesh routines
        (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§3, equations (37)–(39): Fourier differentiation, analytic
        assignment-window differentiation, and mesh differentiation are distinct
        choices."
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach
        to the electrostatic particle-mesh problem (full-text article, 2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
      locator: "§2.1, particle-to-mesh assignment and force interpolation; the local
        bound includes derivative-window aliases explicitly."
verification:
  precheck: pass
---

## Statement

Use the data and aliases of
[[lem-ewald-pme-spline-alias-and-dft-normalization]]. Write
$h_r(0)=1$ and, for $u_r=k_r/M_r\ne0$,
$h_r(n)=|u_r/(u_r+n)|^P$ for $n\ne0$; when $u_r=0$, set $h_r(n)=0$ for
$n\ne0$. Put
$$a_r=\sum_{n\ne0}h_r(n).$$
For $P\ge3$, define
$$v_r=\sum_{n\ne0}|k_r+nM_r|h_r(n),\qquad J_{k,r}=(|k_r|+v_r)\prod_{s\ne r}(1+a_s)-|k_r|,$$
and
$$B_k=2\pi\|A^{-T}\|_2\left(\sum_{r=1}^3J_{k,r}^2\right)^{1/2}.$$
For $P\ge3$ the physical derivative alias error satisfies
$$\|\nabla_xb_k(t)-\nabla_xa_k(t)\|_2\le B_k.$$
Each series has a finite p-series controller: for $0<|u_r|<1/2$,
$$a_r\le2\frac{|u_r|^P}{(1-|u_r|)^P}\zeta(P),\qquad v_r\le2M_r\frac{|u_r|^P}{(1-|u_r|)^{P-1}}\zeta(P-1),$$
where $\zeta(s)=\sum_{m\ge1}m^{-s}$ for $s>1$. For $J_0\ge1$, after summing exactly over
$1\le|n|\le J_0$, the respective omitted tails are at most
$$2\frac{|u_r|^P}{(1-|u_r|)^P}\frac{\lfloor J_0\rfloor^{1-P}}{P-1},\qquad 2M_r\frac{|u_r|^P}{(1-|u_r|)^{P-1}}\frac{\lfloor J_0\rfloor^{2-P}}{P-2}.$$

For the approved $P=2$ case, the absolute derivative p-series above diverges
when $u_r\ne0$. Instead use the finite derivative of the local piecewise
window sum. At every open mesh box and each one-sided knot limit, put
$$C_{k,r}=\frac{2M_r}{|D(k)|}+2\pi|k_r|,\qquad B_k=\|A^{-T}\|_2\left(\sum_{r=1}^3C_{k,r}^2\right)^{1/2}.$$
This is a computable finite bound for the same physical derivative error. At a
grid knot, use the declared $\mathfrak d_k(t)$ branch from
[[def-ewald-pme-cardinal-assignment-model]]: it is a selected one-sided value
or their average and obeys the bound, but is not asserted to be a classical
derivative there. Thus for the full $P\ge2$ range the bound is on
$\mathfrak d_k(t)-\nabla_xa_k(t)$, with $\mathfrak d_k=\nabla_xb_k$ wherever
the classical derivative exists.

## Facts & Assumptions

**Given:** A cell matrix $A$, integers $M_r\ge1$, spline order $P\ge2$,
signed mode $k$ with $|k_r|<M_r/2$ and $D(k)\ne0$, a fractional point
$t\in[0,1)^3$, and the assignment factors $a_k,b_k$ of the periodic mesh
definition.

[F1] The exact signed alias expansion of $b_k$ has coefficients $r_{k,n}$ with $|r_{k,n}|=\prod_rh_r(n_r)$, and $W_P$ is the causal $P$-fold cardinal window ([[lem-ewald-pme-spline-alias-and-dft-normalization]], [[def-ewald-pme-cardinal-assignment-model]]).

[F2] The physical gradient is $\nabla_x=A^{-T}\nabla_t$, and $\nabla_xa_k=-2\pi i A^{-T}k\,a_k$ ([[def-ewald-three-dimensional-periodic-source-data]]).

[F3] For $s>1$, $\zeta(s)=\sum_{m\ge1}m^{-s}$ converges ([[thm-p-series-real-exponents]]).

[F4] Uniform convergence of a series and its derivative series on a closed interval permits termwise differentiation, with real and imaginary parts treated separately ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $P\ge3$ and first take $u_r\ne0$. For $n\ne0$, $h_r(n)\le\frac{|u_r|^P}{(1-|u_r|)^P|n|^P},\quad |k_r+nM_r|h_r(n)\le M_r\frac{|u_r|^P}{(1-|u_r|)^{P-1}|n|^{P-1}},$ because $|u_r+n|\ge(1-|u_r|)|n|$. Since $P>1$ and $P-1>1$, [F3] proves absolute convergence and the stated $a_r,v_r$ bounds. To prove the remainders locally, put $L=\lfloor J_0\rfloor\ge1$. For $s>1$ and each integer $m>L$, monotonicity gives $m^{-s}\le\int_{m-1}^m x^{-s}dx$. Summing and taking the limit yields $\sum_{m>J_0}m^{-s}\le\int_L^\infty x^{-s}dx=L^{1-s}/(s-1)$. Apply this with $s=P$ and $s=P-1$ to the two majorants above. If $u_r=0$, all shifted factors and both series vanish. [given, F3, algebra]

1.2 Now let $P=2$. The convolution $W_2(u)=\int_0^1\mathbf1_{[0,1]}(u-s)ds$ is the length of $[0,1]\cap[u-1,u]$, hence is $u$ on $[0,1]$, $2-u$ on $[1,2]$, and $0$ outside $[0,2]$. Its derivative is $1$ on $(0,1)$, $-1$ on $(1,2)$, and $0$ outside, with the indicated one-sided values at $0,1,2$. On every open mesh box, only finitely many window translates are nonzero, so direct differentiation gives $\partial_{t_r}b_k(t)=\frac{M_r}{\overline{D(k)}}\sum_{\ell\in\mathbb Z^3} W_2'(M_rt_r-\ell_r)\prod_{s\ne r}W_2(M_st_s-\ell_s) e^{-2\pi i\sum_sk_s\ell_s/M_s}.$ The periodic residue version is identical because $k_s$ are integers and the phase is unchanged when $\ell_s$ is shifted by $M_s$. For every non-knot $y$, one translate lies in $(0,1)$ and one in $(1,2)$, so $\sum_{\ell_r}|W_2'(y-\ell_r)|=2$; at a knot the same sum of absolute one-sided values is at most $2$. Also $W_2\ge0$ and $\sum_\ell W_2(y-\ell)=1$ by the partition identity proved in [F1]. Therefore $|\partial_{t_r}b_k|\le2M_r/|D(k)|$. Since $|\partial_{t_r}a_k|=2\pi|k_r|$, the fractional derivative error is at most $C_{k,r}$. [F1, F2, algebra]

2.1 For $P\ge3$, [F1] gives $b_k(t)=\sum_{n\in\mathbb Z^3}r_{k,n}e^{-2\pi i(k+n\odot M)\cdot t}.$ The absolute derivative sum in coordinate $r$ is finite by step 1.1 and the product bounds $\sum_n\prod_sh_s(n_s)=\prod_s(1+a_s)<\infty$. Apply [F4] to finite partial sums on each coordinate interval; their values converge at one point by the absolute series and their derivative series converge uniformly by this bound. Thus the displayed series differentiates termwise. Subtracting the $n=0$ term gives $|\partial_{t_r}b_k-\partial_{t_r}a_k| \le2\pi\sum_{n\ne0}|k_r+n_rM_r|\prod_sh_s(n_s) =2\pi J_{k,r}.$ The last equality follows by summing the $n_r=0$ term separately: the sum including $n=0$ is $(|k_r|+v_r)\prod_{s\ne r}(1+a_s)$, from which the base $|k_r|$ is removed. [F1, F4, step 1.1, algebra]

3.1 The physical gradient is $A^{-T}$ times the three fractional derivative components. Hence [F2] and step 2.1 give $\|\nabla_xb_k-\nabla_xa_k\|_2 \le\|A^{-T}\|_2\left(\sum_r(2\pi J_{k,r})^2\right)^{1/2}=B_k.$ This proves the $P\ge3$ branch. [F2, step 2.1, algebra]

4.1 Applying $A^{-T}$ to the three component bounds as in step 3.1 gives $\|\nabla_xb_k-\nabla_xa_k\|_2\le\|A^{-T}\|_2(\sum_rC_{k,r}^2)^{1/2}=B_k$. At a knot each one-sided limit satisfies the same coordinate bounds, and an average lies in their convex hull, so the declared branch value also satisfies them. No classical differentiability at a $P=2$ knot is used. [F2, step 1.2, algebra] ∎

## Remarks

- For $P=2$ the absolute Fourier derivative majorant diverges at nonzero
  $u_r$. The finite piecewise window derivative avoids that invalid rearrangement.
- A tighter certified enclosure may subdivide the closed mesh boxes and bound
  the finite piecewise expression on each box. The explicit $C_{k,r}$ above is
  a valid initial enclosure and does not require a supremum oracle.
