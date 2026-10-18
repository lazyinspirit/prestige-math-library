---
id: lem-monotone-fv-local-compactness-and-trace
kind: lemma
title: Local compactness and initial trace for BV finite-volume states
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps: [def-bounded-bv-data-on-line, def-monotone-finite-volume-entropy-scheme, def-piecewise-linear-fv-time-interpolant, lem-monotone-fv-update-preserves-range-and-tvd, thm-bolzano-weierstrass, lem-q-and-irrationals-dense-r, thm-rationals-countable, thm-monotone-convergence-for-the-integral, cor-finite-nonnegative-integral-implies-finite-almost-everywhere, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "Propositions 2.3.1 and 2.3.3, §2.3.1, PDF pp. 19–21: spatial BV and discrete time-increment estimates."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf"
      locator: "Theorems 4.18–4.19, §4.6, PDF pp. 55–57: Helly compactness and the affine-in-time interpolant. The rational-point proof and nonintegrable-data trace argument are supplied locally."
---

## Statement

Let $u_0\in\mathrm{BV}_b(\mathbb R)$ with $V=\operatorname{TV}(u_0)$ and
$I=[a_-,a_+]$. Let $(h_m,\tau_m)$ satisfy $h_m,\tau_m\to0$ and the full
invariant-interval CFL bound for the scheme of
[[def-monotone-finite-volume-entropy-scheme]]. Let $W_m$ and $\mathcal U_m$ be
the piecewise-linear and piecewise-constant reconstructions of
[[def-piecewise-linear-fv-time-interpolant]]. Then every subsequence has a
further subsequence for which $W_m$ converges uniformly in time in
$L^1(K)$ on every bounded interval $K\subset\mathbb R$ to a map
$t\mapsto u(t)\in L^1_{\mathrm{loc}}(\mathbb R)$, continuous in local $L^1$,
with $u(0)=u_0$ and $a_-\le u(t)\le a_+$ almost everywhere. On that subsequence
the piecewise-constant reconstructions converge strongly to the same $u$ in
$L^1_{\mathrm{loc}}(\mathbb R\times(0,T))$.

## Facts & Assumptions

**Given:** $u_0\in\mathrm{BV}_b(\mathbb R)$, the monotone flux scheme, meshes $h_m,\tau_m\to0$ satisfying its full CFL bound, the time interpolants $W_m$, and a finite time interval $[0,T]$.

[F1] The initial translation variation bound is $\|u_0(\cdot+h)-u_0\|_{L^1(\mathbb R)}\le hV$ for $h>0$ ([[def-bounded-bv-data-on-line]]).

[F2] The update has range $I$, spatial discrete variation at most $V$, and $\frac h\tau\sum_j|U_j^{n+1}-U_j^n|\le (L_1+L_2)V$ ([[lem-monotone-fv-update-preserves-range-and-tvd]]).

[F3] On a time slab, $W_m=(1-\theta)U^n+\theta U^{n+1}$ on each spatial cell, while $\mathcal U_m=U^n$ on that slab ([[def-piecewise-linear-fv-time-interpolant]]).

[F4] The rationals are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[F5] There is a bijection from $\mathbb N$ onto $\mathbb Q$, so fix an enumeration of the rationals without repetitions ([[thm-rationals-countable]]).

[F6] Every bounded real sequence has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[F7] Almost-everywhere convergence under an integrable majorant on a finite interval implies $L^1$ convergence ([[thm-dominated-convergence]]).

[F8] For a nondecreasing sequence of nonnegative measurable functions, the integral of its pointwise limit is the limit of the integrals; finite nonnegative integral implies finiteness almost everywhere ([[thm-monotone-convergence-for-the-integral]], [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]).

[F9] Fubini's theorem applies to every integrable space-time function: its time sections are locally $L^1$ for almost every time, and its space-time integral equals the integral of the section integrals. In particular, an integrable nonnegative sum of space-time differences has finite spatial integral on almost every time section ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 For every $t$, $W_m(\cdot,t)$ is piecewise constant with values in $I$ and spatial variation at most $V$: on each time slab it is a convex combination of two states whose variations are at most $V$ by [F2]. Here the variation of a piecewise-constant section on an interval is the sum of the absolute jump sizes inside that interval. Fix an integer $R\ge1$ and consider any sequence $v_m$ of such sections on $[-R,R]$. At each rational point in $[-R,R]$, the values lie in the compact interval $I$. The bounded-value subsequence at one rational point exists by [F6]; explicitly, partition $I$ into finitely many closed intervals of length at most $2^{-1}$, take the first interval containing infinitely many values, and repeat inside it with successive meshes $2^{-2},2^{-3},\ldots$, always selecting the first subinterval with infinitely many retained indices. The nested intervals have diameters tending to zero, so the least increasing indices in the nested sets give a convergent subsequence. Use the enumeration fixed by [F5], and repeat this deterministic extraction successively on the current subsequence at each enumerated rational that lies in $[-R,R]$, skipping the others. The nested subsequences yield a diagonal subsequence converging at every rational point; each interval and index is selected by a least-index rule, so this uses no choice axiom. Given $\delta>0$, choose a finite rational partition of $[-R,R]$ with mesh at most $\delta$, possible by [F4]. For each subinterval $J=[r_i,r_{i+1}]$ and any two selected functions $v_p,v_q$, variation gives $|v_p(x)-v_q(x)|\le|v_p(r_i)-v_q(r_i)|+\operatorname{Var}_J(v_p)+\operatorname{Var}_J(v_q)$ for almost every $x\in J$. Integrating and summing yields $\|v_p-v_q\|_{L^1([-R,R])}\le 2\delta V+2R\max_i|v_p(r_i)-v_q(r_i)|.$ For the fixed partition the maximum tends to zero as $p,q\to\infty$; then taking $\delta\downarrow0$ proves the selected sections are Cauchy in local $L^1$. [F2, F4, F6, given, choose]

2.1 On each slab, $\partial_tW_m=(U_j^{n+1}-U_j^n)/\tau_m$ on cell $I_j$. By [F2], its $L^1(\mathbb R)$ norm is at most $C:=(L_1+L_2)V$. Integrating over any time interval gives $\|W_m(\cdot,t)-W_m(\cdot,s)\|_{L^1(\mathbb R)}\le C|t-s|.$ Use the enumeration fixed by [F5] and process its indices together with integers $R\ge1$ in order of increasing sum. For each pair $(\ell,R)$, if $q_\ell\in[0,T]$, apply step 1.1 at time $q_\ell$ on $[-R,R]$; otherwise skip that pair. The resulting diagonal extraction covers every rational time in $[0,T]$ and every integer interval. The subsequence converges in $L^1([-R,R])$ at every rational time for every integer $R$; this recursive construction uses no choice axiom. [F2, F5, step 1.1, algebra]

3.1 Fix $R$ and $\varepsilon>0$, and put $\delta:=\varepsilon/(4(C+1))$. Choose a finite set of rational times in $[0,T]$ that is a $\delta$-net: include $0$, choose $q\in\mathbb Q\cap[0,T]$ with $T-q<\delta$ (using $q=0$ if $T<\delta$), and subdivide $[0,q]$ by rational points with gaps below $\delta$, possible by [F4]. At those finitely many times the subsequence in step 2.1 is Cauchy in $L^1([-R,R])$. For any $t\in[0,T]$, choose a net time $s$ within the gap bound; the triangle inequality and the uniform time estimate in step 2.1 give $\|W_p(\cdot,t)-W_q(\cdot,t)\|_{L^1([-R,R])}\le 2C|t-s|+\|W_p(\cdot,s)-W_q(\cdot,s)\|_{L^1([-R,R])}.$ Thus the subsequence is uniformly Cauchy in time in local $L^1$. For fixed $t,R$, its bounded measurable sections have an $L^1([-R,R])$ limit: for each $j$, let $N_j$ be the least integer such that all $p,q\ge N_j$ have $L^1([-R,R])$ difference below $2^{-j}$, which exists by Cauchyness. Put $\widehat N_j:=\max_{1\le r\le j}N_r$ and recursively choose the least increasing indices $n_j\ge\widehat N_j$. Then both $n_j,n_{j+1}\ge N_j$, so successive differences have norms below $2^{-j}$. By [F8] their pointwise absolute sum is finite almost everywhere, and dominated convergence [F7] gives the $L^1$ limit. Uniqueness makes these limits consistent as $R$ increases, and the uniform Cauchy estimate makes $t\mapsto u(t)$ continuous in each local $L^1$ norm. The subsequence is also Cauchy in $L^1([-R,R]\times(0,T))$ for every integer $R$, by integrating its uniform-in-time Cauchy bound. For each $j$, let $M_j$ be the least integer such that all $p,q\ge M_j$ have difference below $2^{-j}$ on every cylinder with integer $R\le j$; this exists because there are finitely many such cylinders and the sequence is Cauchy on each. Put $\widehat M_j:=\max_{1\le r\le j}M_r$ and recursively choose the least increasing indices $m_j\ge\widehat M_j$. For every fixed integer $R$ and every $j\ge R$, both $m_j,m_{j+1}\ge M_j$, so their successive differences have norm below $2^{-j}$ on that cylinder. [F8] then gives a finite pointwise sum of differences almost everywhere on each cylinder, and [F7] yields a measurable space-time limit $v$ with strong local $L^1$ convergence. For each integer $R$, the sum of the $L^1([-R,R]\times(0,T))$ norms of these successive differences is finite. By [F9], for almost every $t$ their spatial absolute sum is integrable on $[-R,R]$; hence $W_{m_j}(\cdot,t)$ converges almost everywhere in $x$ there to $v(\cdot,t)$. Since all these sections and their limit take values in the bounded interval $I$, dominated convergence [F7] gives convergence to $v(\cdot,t)$ in $L^1([-R,R])$. But this is a subsequence of the sequence that converges in $L^1([-R,R])$ to $u(t)$ for every $t$, so uniqueness of the $L^1$ limit gives $v(\cdot,t)=u(t)$ for almost every $t$. Intersecting these full-measure time sets over integer $R$ shows that the space-time limit and the continuous local-$L^1$ map are the same limit on all bounded intervals. [F4, F7, F8, F9, step 2.1, algebra, choose]

4.1 Every $W_m$ takes values in $I$, so its local $L^1$ limit also takes values in $I$ almost everywhere: if, for example, $u(t)>a_+$ on a set of positive measure, then some set where $u(t)\ge a_++1/r$ has positive measure, contradicting $L^1$ convergence from functions bounded by $a_+$. The same argument applies to the lower bound. [F2, step 3.1, algebra]

4.2 For $r<0$, translation invariance of Lebesgue measure gives the same bound as for $-r$, so $\|u_0(\cdot+r)-u_0\|_{L^1(\mathbb R)}\le |r|V$ for every $r\in\mathbb R$. On each cell, the initial cell-average error is controlled by translations: $\sum_j\int_{I_j}|u_0(x)-U_j^0|\,dx\le\frac1h\int_{-h}^{h}\int_{\mathbb R}|u_0(x+r)-u_0(x)|\,dx\,dr\le hV.$ The first inequality follows by writing each cell average as an integral over that same cell, applying the triangle inequality, and changing variables to $r=y-x$; the restriction that $x$ and $x+r$ lie in the same cell can only decrease the integral. Since $W_m(\cdot,0)=U^0$, step 3.1 gives $u(0)=u_0$ in local $L^1$. [F1, F3, step 3.1, algebra]

5.1 On each slab, $|W_m-U_j^n|=\theta|U_j^{n+1}-U_j^n|$. Integrating in time contributes the factor $\tau_m/2$; the time-increment bound in [F2] gives, on $[0,T]$, $\|W_m-\mathcal U_m\|_{L^1(\mathbb R\times(0,T))}\le\frac{(T+\tau_m)\tau_m}{2}(L_1+L_2)V\longrightarrow0.$ Consequently $\mathcal U_m$ converges strongly in local space-time $L^1$ to the same limit as $W_m$. [F2, F3, step 3.1, algebra] ∎
