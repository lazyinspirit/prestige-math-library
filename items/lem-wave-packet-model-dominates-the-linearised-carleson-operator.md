---
id: "lem-wave-packet-model-dominates-the-linearised-carleson-operator"
kind: "lemma"
title: "Wave packet model dominates the linearised carleson operator"
deps: ["def-carleson-operator-and-measurable-linearisation", "def-carleson-tiles-wave-packets-and-tile-order", "cor-schwartz-convolution-and-product-transform-laws", "thm-fourier-inversion-on-schwartz-space", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-dominated-convergence", "thm-monotone-convergence-for-the-integral", "thm-complex-holder-minkowski-and-the-quotient-norm", "thm-layer-cake-formula-for-l-p-powers", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Proposition 2.12 through Lemma 2.18
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC and let $1<p<\infty$. If every finite linearised tile model has strong type (p,p) bound B, uniformly in its finite family and measurable selector, then for Schwartz input
$$\|C_{\mathbb R}f\|_p\le\kappa^{-1}B\|f\|_p.$$
If instead these finite models have a uniform weak type (p,p) bound B, then
$$m\{C_{\mathbb R}f>\lambda\}\le\bigl(p'\kappa^{-1}B\|f\|_p/\lambda\bigr)^p\qquad(\lambda>0),\quad p'=p/(p-1).$$
The same conclusions hold when the hypothesis is formulated for all translated and reciprocally dilated grids. Such grid bounds already follow from the original-grid bounds by conjugating translations, modulations and dilations. The fixed reconstruction constant is
$$\kappa=\frac1{\log2}\int_0^\infty H(t)\,\frac{dt}{t}>0,\qquad H(t)=\int_{1/4}^{3/4}\psi(u-t)^2du,$$
where psi is the exact fixed packet transform. This transfers in particular weak L2 and every strong Lp bound needed for the real-line Carleson theorem. No pointwise bound by one unaveraged model is asserted.

## Facts & Assumptions

[F1] One-sided Schwartz Fourier cutoffs are absolutely defined, continuous in the cutoff parameter, and finite rational maxima have measurable least-index linearising selectors [[def-carleson-operator-and-measurable-linearisation]].

[F2] The exact packets, grid order, finite models, nonnegative even transform psi, plateau a=1/9 and support b=1/8 have the stated conventions [[def-carleson-tiles-wave-packets-and-tile-order]].

[F3] Schwartz convolution has transform equal to the product of the transforms [[cor-schwartz-convolution-and-product-transform-laws]].

[F4] Schwartz Fourier inversion holds everywhere [[thm-fourier-inversion-on-schwartz-space]].

[F5] Tonelli applies to nonnegative product-measurable functions on sigma-finite products [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F6] Fubini applies to absolutely integrable functions on sigma-finite products [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F7] Dominated convergence passes integrals to almost-everywhere limits under one integrable majorant [[thm-dominated-convergence]].

[F8] Monotone convergence passes increasing nonnegative integrands to their integral limit [[thm-monotone-convergence-for-the-integral]].

[F9] Complex Hölder and Minkowski hold [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F10] Layer cake computes integrals from distribution functions [[thm-layer-cake-formula-for-l-p-powers]].

[F11] Assume AC [[def-axiom-of-choice]], supplying the countable-choice Fourier and measure interfaces.

## Proof

**Given:** The stated uniform finite-model bound, a Schwartz input f, and an arbitrary measurable real selector N. All averages below use probability measures, and all product spaces are Euclidean Lebesgue spaces, finite parameter intervals or countable counting spaces, hence sigma-finite.

1.1 A transformed grid has spatial intervals $y+rI$ and frequency intervals $\eta+r^{-1}\omega$ for r>0 and fixed y,eta. Use the same packet formula at their actual centers and lengths. Let $Uf(x)=r^{-1/2}e^{2\pi i\eta x}f((x-y)/r)$. Substitution in the packet formula shows that U sends each original packet to its transformed packet times a unimodular constant; that constant cancels in its coefficient times packet. Thus the transformed model is $U C_{S,N'}U^{-1}$, where $N'(z)=r(N(y+rz)-\eta)$. This selector is measurable. The $L^p$ norm of U is the scalar factor $r^{1/p-1/2}$, and that of its inverse is reciprocal, so the strong norm B is preserved. The distribution change of variables gives the same assertion for the weak norm. Therefore the hypothesis covers every transformed grid used below. [F1, F2, F9, given]

1.2 A weak bound $m\{|v|>t\}\le(K/t)^p$ implies $\int_E|v|\le p'K m(E)^{1-1/p}$ for each finite-measure E: by F10 with exponent one, its left side is at most $\int_0^\infty\min(m(E),(K/t)^p)dt$, which equals the stated expression after splitting at $K m(E)^{-1/p}$. The zero cases give zero directly. Consequently the weak model hypothesis implies the testing bound $|\langle C f,g\rangle|\le p'B\|f\|_p m(E)^{1-1/p}$ for $|g|\le\mathbf1_E$. The strong hypothesis implies $|\langle C f,g\rangle|\le B\|f\|_p\|g\|_{p'}$ by F9. We will preserve these two testing inequalities through probability averages, first for bounded g supported in a bounded interval. [F9, F10, given]

2.1 Fix an integer K>=0 and r in [1,2]. Retain only spatial scales $l=r2^k$, -K<=k<=K. Average transformed grids over $0\le y<Y=r2^K$ and $0\le\eta<W=2^K/r$, with normalized measures dy/Y and deta/W. At each fixed scale retain initially only spatial indices i and frequency indices j with |i|,|j|<=M, so the operator is a finite model covered by steps 1.1 and 1.2. Let M increase. For each x and each scale, the upper-half selector condition activates at most one frequency index. Every coefficient has magnitude at most $\|f\|_2\|\phi\|_2$ by F9, and the sum of the packet absolute values over its spatial lattice is at most $Cl^{-1/2}$ by Schwartz decay. Thus all truncated outputs and their pointwise limits are bounded by $C_K\|f\|_2$, uniformly in x,y,eta,r. The spatial series is absolutely convergent, and the unique active frequency index is eventually retained, so the limits exist for every x and parameter. Coefficients are continuous in the packet parameters, by domination on each compact parameter set; the selector indicators are measurable in x and the parameters. Hence all the functions being averaged are product-measurable. For bounded compactly supported g, F7 and this uniform bound pass both testing inequalities through M to the full-index, finite-scale average. [F2, F7, F9, step 1.1, step 1.2]

3.1 We compute its spatial average exactly. Fix l and a frequency interval with lower center nu. Write $p_{l,c,\nu}(x)=l^{-1/2}e^{2\pi i\nu x}\phi((x-c)/l)$. The spatial centers are $c=y+l(i+1/2)$. Since Y/l is an integer, averaging their lattice over y gives density dc/l on the line. Therefore the averaged rank-one sum has kernel $$\frac1l e^{2\pi i\nu(x-z)}R((x-z)/l),\qquad R(v)=\int\phi(v+u)\overline{\phi(u)}du.$$ Indeed insert the coefficient integral and replace the averaged sum over c by l^(-1) times its integral; then substitute c=z-lu. These exchanges are absolute: at fixed x, the integral over z,c of the absolute integrand after averaging is at most $l^{-1}\|f\|_1\|\phi\|_\infty\|\phi\|_1$. F5 establishes absolute product integrability and F6 exchanges the integrals and the counting sum. Since psi is real and even, its inverse phi is real and even by the cosine integral, so R=phi*phi and F3 gives $\widehat R=\psi^2$. F3 and F4 now identify the averaged output as $$\int\widehat f(\xi)e^{2\pi ix\xi}\psi(l(\xi-\nu))^2d\xi.$$ All these are Schwartz convolution identities at a fixed frequency. [F2, F3, F4, F5, F6, step 2.1]

4.1 Average next over eta. For a fixed x let a=N(x). At spatial length l, the frequency intervals have length1/l. The interval containing a is active exactly when the fractional position $v=l(a-\eta)-j$ lies in [1/2,1). Its lower center is $\nu=\eta+(j+1/4)/l$, so $l(\xi-\nu)=l(\xi-a)+v-1/4$. Because W is an integer multiple of1/l, the eta average makes v uniform on [0,1]. It follows that the frequency-averaged multiplier at scale l is $$\int_{1/2}^{1}\psi(l(\xi-a)+v-1/4)^2dv=H(l(a-\xi)).$$ The half-open endpoints make a unique interval convention; their eta measure is zero and they do not alter the integral. Since $0\le\psi\le1$ and $\widehat f\in L^1$, the Fourier integral and finite eta average interchange absolutely by F6. Crucially, this calculation holds at every fixed x for its actual value N(x); N is not frozen to a constant across the spatial variable. [F1, F2, F6, step 3.1]

5.1 Finally average r over [1,2] with probability measure $dr/(r\log2)$. The resulting finite-scale average $A_{K,N}f$ has the exact representation $$A_{K,N}f(x)=\int\widehat f(\xi)e^{2\pi ix\xi}m_K(N(x)-\xi)d\xi,\qquad m_K(d)=\frac1{\log2}\int_{2^{-K}}^{2^{K+1}}H(td)\,\frac{dt}{t}.$$ This follows by changing variables t=r2^k in the finite scale sum: the intervals [2^k,2^(k+1)] partition the displayed integration range. The measure in r and the normalized measures in y,eta form a probability measure; they can equivalently be parameterized by y/Y,eta/W in [0,1]. Thus step 2.1 passes the testing bounds to $A_{K,N}f$. All integrations here are on compact parameter ranges with the stated uniform majorant. [F6, step 2.1, step 4.1]

6.1 The function H is nonnegative, bounded by1/2, and supported in [1/8,7/8]. Moreover $H(t)\ge2/9$ for $3/8\le t\le5/8$: the interval $[t-1/9,t+1/9]$ lies inside [1/4,3/4] and its integrand is one. Consequently $$0<\frac{2\log(5/3)}{9\log2}\le\kappa\le\frac{\log7}{2\log2}<\infty.$$ For d<=0, m_K(d)=0. For d>0, the substitution u=td and expansion of the integration range give $m_K(d)\uparrow\kappa$. Thus $0\le m_K\le\kappa$ for every K. Since $\widehat f\in L^1$, F7 gives, pointwise for every finite N(x), $$A_{K,N}f(x)\longrightarrow\kappa\int_{-\infty}^{N(x)}\widehat f(\xi)e^{2\pi ix\xi}d\xi=\kappa T_{N(x)}f(x).$$ The isolated frequency xi=N(x) has zero Lebesgue measure, so the endpoint does not change this identity. This proves both convergence and a strictly positive reconstruction constant without classifying translation-invariant operators or invoking distributions. [F1, F2, F7, step 5.1]

7.1 Since $|A_{K,N}f|\le\kappa\|\widehat f\|_1$, F7 passes its testing inequalities to the limit against any bounded compactly supported g. Under the strong hypothesis this yields $|\langle T_Nf,g\rangle|\le\kappa^{-1}B\|f\|_p\|g\|_{p'}$ for every such g. To recover the norm, use the following bounded truncations: put $g_{n,R}=\mathbf1_{[-R,R]}\mathbf1_{\{|T_Nf|>1/n\}}|T_Nf|^{p-2}T_Nf$ for integers $n,R\ge1$, defined as zero where $T_Nf$ vanishes. Each $g_{n,R}$ is bounded and compactly supported, so the testing inequality applies to it. Indeed its magnitude is at most $|T_Nf|^{p-1}\le\|\widehat f\|_1^{p-1}$, since $p>1$, with value zero at zeros of $T_Nf$. The same bound also holds without the lower level cutoff; the cutoff is a permissible convenience, not a remedy for a singularity. Writing $J_{n,R}=\int_{[-R,R]\cap\{|T_Nf|>1/n\}}|T_Nf|^p$, the definition gives both $\langle T_Nf,g_{n,R}\rangle=J_{n,R}$ and $\|g_{n,R}\|_{p'}=J_{n,R}^{1/p'}$, because $(p-1)p'=p$. Hence $J_{n,R}\le\kappa^{-1}B\|f\|_p J_{n,R}^{1/p'}$ and $J_{n,R}^{1/p}\le\kappa^{-1}B\|f\|_p$. If $J_{n,R}=0$ the second inequality holds trivially; otherwise divide. The level sets increase with n and R, so F8 gives $\|T_Nf\|_p\le\kappa^{-1}B\|f\|_p$. Under the weak hypothesis, take g to be the phase of T_Nf on $E=\{|T_Nf|>\lambda\}\cap[-R,R]$, a bounded compactly supported function. The limiting testing inequality gives $\lambda m(E)\le p'\kappa^{-1}B\|f\|_p m(E)^{1-1/p}$ and hence the stated weak bound for T_Nf after increasing R, also when m(E)=0. These bounds are uniform in the arbitrary measurable selector. [F1, F7, F8, step 1.2, step 5.1, step 6.1]

8.1 Enumerate the rational cutoffs and apply F1's least-index selector to each finite maximum. Step 7.1 gives the same strong or weak bound for every finite maximum. These maxima increase to $C_{\mathbb R}f$ because the cutoff is continuous in its parameter. F8 gives the strong norm estimate; continuity from below of their level sets gives the weak estimate, equivalently another use of F8 on their indicators. This proves the Statement. The finite-to-infinite index limits, parameter averages and cutoff limits were justified separately with explicit majorants. AC is inherited through F11; there is no selector for an unattained infinite supremum and no new arbitrary-index choice. [F1, F8, F11, step 7.1] ∎
