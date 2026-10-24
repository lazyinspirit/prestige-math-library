---
id: ex-method-of-continuity-for-a-constant-coefficient-path
kind: example
title: The method of continuity on a constant-coefficient one-dimensional path
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 10
deps: [thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators, thm-global-schauder-estimate-and-classical-dirichlet-solvability, def-holder-spaces-c-k-alpha-and-their-scaled-norms, thm-uniform-derivative-limit-on-a-closed-interval, def-countable-choice, def-distributional-derivative, thm-locally-integrable-functions-embed-in-distributions, thm-distributional-differentiation-is-continuous-and-commutes, thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant, thm-dini-pointwise-convergence-criterion-for-fourier-series, thm-l-two-fourier-series-converges-in-mean-square]
sources:
  references:
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "§2.6, the continuity-method template reduced to the model operator $-\\Delta$, printed pp. 65-68 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9, the family $L_t=tL+(1-t)\\Delta$ and the eigenvalue obstruction, printed pp. 153-155 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the one-dimensional Dirichlet model and the role of the kernel, printed pp. 136-137 (read in full)"
---

## Example

Assume Countable Choice and fix $0<\alpha<1$. Let $\Omega=(0,\pi)$, $X:=\{u\in C^{2,\alpha}([0,\pi]):u(0)=u(\pi)=0\}$, $Y:=C^{0,\alpha}([0,\pi])$ and, for $c>0$ and $t\in[0,1]$, $L_tu:=-u''-tc\,u$. Then every $L_t$ is a bounded operator $X\to Y$, $L_0=-d^2/dx^2$ is bijective, and the bijectivity set is $I=\{t\in[0,1]:tc\notin\{k^2:k\ge1\}\}$: for $tc<1$ the eigenfunction expansion
$$u(x)=\sum_{k\ge1}\frac{f_k}{k^2-tc}\sin(kx),\qquad f_k=\frac2\pi\int_0^\pi f(x)\sin(kx)\,dx,$$
converges absolutely and uniformly together with its first derivative, defines an element of $X$ with $L_tu=f$ and obeys the uniform bound $\|u\|_{C^{2,\alpha}}\le C(1-tc)^{-1}\|f\|_{C^{0,\alpha}}$, while at $tc=k_0^2$ the kernel is spanned by $\sin(k_0x)$ and the range is the proper closed subspace $\{f:\int_0^\pi f(x)\sin(k_0x)\,dx=0\}$. In this model one computes directly that $I$ is open in $[0,1]$, that $I$ is relatively closed on every subinterval on which all the operators are injective, and that the uniform estimate fails on every interval that meets the spectrum.

## Facts & Assumptions

**Given:** Countable Choice, $0<\alpha<1$, $c>0$, $t\in[0,1]$, the spaces $X=\{u\in C^{2,\alpha}([0,\pi]):u(0)=u(\pi)=0\}$ and $Y=C^{0,\alpha}([0,\pi])$, and $L_tu=-u''-tcu$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; all series and subsequences below are countable and no further selection is made. ([[def-countable-choice]])

[F1] The norms on $X$ and $Y$ are the usual ones: $\|u\|_{C^{2,\alpha}}=\sup|u|+\sup|u'|+\sup|u''|+[u'']_{0,\alpha}$ and $\|f\|_{C^{0,\alpha}}=\sup|f|+[f]_{0,\alpha}$ with $[g]_{0,\alpha}=\sup_{x\ne y}|g(x)-g(y)|/|x-y|^\alpha$. ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]])

[F2] The functions $e_k(x):=\sin(kx)$, $k\ge1$, satisfy $e_k(0)=e_k(\pi)=0$, $-e_k''=k^2e_k$, and $\int_0^\pi e_j(x)e_k(x)\,dx=\frac\pi2\delta_{jk}$; these are the classical eigenpairs of $-d^2/dx^2$ with Dirichlet conditions on $(0,\pi)$. For the odd $2\pi$-periodic extension $F$, translation by $h$ gives $\|F(\cdot+h)-F\|_{L^1(-\pi,\pi)}\le C([f]_\alpha h^\alpha+\|f\|_\infty h)$: away from endpoint jumps use Hölder continuity, and the jump-crossing strips have length $O(h)$. With $h=\pi/k$, the exponential Fourier coefficient identity $|e^{ikh}-1|\,|\widehat F(k)|\le(2\pi)^{-1}\|F(\cdot+h)-F\|_1$ gives $|\widehat F(k)|\le C_\alpha\|f\|_{C^{0,\alpha}}k^{-\alpha}$. The sine coefficients $f_k=\frac2\pi\int_0^\pi f(x)\sin(kx)\,dx$ of an $f\in C^{0,\alpha}([0,\pi])$ satisfy $|f_k|\le C_\alpha\|f\|_{C^{0,\alpha}}k^{-\alpha}$, and [[thm-dini-pointwise-convergence-criterion-for-fourier-series]], after rescaling to period one, gives $\sum_{k\ge1}f_k\sin(kx)=f(x)$ for every $x\in(0,\pi)$ (the local Dini integral is bounded by $C[f]_\alpha\int_0^\delta s^{\alpha-1}ds$). The $L^2$ convergence follows separately from [[thm-l-two-fourier-series-converges-in-mean-square]] applied to the odd extension. ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]])

[F3] If $g\in C^0([0,\pi])$ then $Sg(x):=-\int_0^x(x-s)g(s)\,ds+\frac x\pi\int_0^\pi(\pi-s)g(s)\,ds$ lies in $C^2([0,\pi])$, vanishes at $0$ and $\pi$, satisfies $(Sg)''=-g$, and obeys $\|Sg\|_{C^2}\le C_0\|g\|_{C^0}$ with $[Sg'']_{0,\alpha}=[g]_{0,\alpha}$ for $g\in Y$; this is the explicit Dirichlet solution of the one-dimensional Poisson problem, obtained by differentiating twice under the integral sign.

[F4] Uniform derivative limits: if $u_N:[0,\pi]\to\mathbb R$ is $C^1$ for every $N$, $u_N$ converges at one point, and $u_N'\to v$ uniformly, then $u_N\to u$ uniformly for a differentiable $u$ with $u'=v$; applied twice it gives: if $u_N\to u$ uniformly, $u_N'\to u'$ uniformly and $u_N''\to u''$ uniformly, then $u\in C^2([0,\pi])$ with those derivatives. ([[thm-uniform-derivative-limit-on-a-closed-interval]])

[F5] The abstract method-of-continuity theorem assumes a uniform a priori estimate and Countable Choice ([[thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators]]).

[F6] The global Schauder solvability theorem is the PDE-level version of the continuity argument ([[thm-global-schauder-estimate-and-classical-dirichlet-solvability]]).

[F7] Classical derivatives agree with distributional derivatives under the assumed Countable Choice; distributional differentiation is continuous in the distribution topology ([[def-distributional-derivative]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F8] On the bounded interval, $L^2$ convergence implies local $L^1$ convergence by Cauchy--Schwarz, and locally $L^1$ convergence gives convergence of the associated regular distributions ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F9] A distribution on the connected interval $(0,\pi)$ whose derivative vanishes is a constant regular distribution; this result uses Countable Choice for the regular-distribution convention ([[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]]).

## Verification

**Proof technique:** direct.

1.1 The operators and the base point. For $u\in X$ one has $\|L_tu\|_{C^{0,\alpha}}\le\|u''\|_{C^{0,\alpha}}+tc\|u\|_{C^{0,\alpha}}\le C(\alpha,\pi)(1+c)\|u\|_{C^{2,\alpha}}$, so $L_t$ maps $X$ boundedly into $Y$ for every $t$. For $t=0$, $L_0=-d^2/dx^2$: if $-u''=0$ with $u(0)=u(\pi)=0$ then $u$ is affine and vanishes at both endpoints, so $u=0$ (injectivity); and for every $f\in Y$ the explicit function $Sf$ of [F3] satisfies $-Sf''=f$, vanishes at the endpoints, and obeys $\|Sf\|_{C^{2,\alpha}}\le C\|f\|_{C^{0,\alpha}}$, so $L_0Sf=f$ (surjectivity). Hence $L_0$ is bijective. [F1, F3, given, algebra, A1]

1.2 The eigenvalue picture. By [F2], $L_te_k=(k^2-tc)e_k$. For any $u\in X$, two integrations by parts, using $u=e_k=0$ at both endpoints, give $\int_0^\pi (L_tu)e_k=(k^2-tc)\int_0^\pi ue_k$. If $L_tu=0$, all sine coefficients of $u$ vanish when $tc$ is not a square; if $tc=k_0^2$, all except the $k_0$th vanish. Since $u\in C^{0,\alpha}$, the Fourier identity in [F2] then gives $u=0$ in the first case and $u\in\operatorname{span}\{e_{k_0}\}$ in the second. Thus $L_t$ is injective exactly off the displayed spectrum, and its kernel at a spectral parameter is exactly $\operatorname{span}\{e_{k_0}\}$. [F2, given, algebra]

1.3 The Fourier solution away from resonance, including the coercive range. Fix $f\in Y$. If $tc=k_0^2$, assume $f_{k_0}=0$ and set $c_{k_0}=0$; for every $k\in J:=\{k\ge1:k^2\ne tc\}$ set $c_k=f_k/(k^2-tc)$. In the non-resonant case this defines every $c_k$. In either case $m:=\inf_{k\in J}|k^2-tc|/k^2>0$, because the ratios tend to $1$ and none of the finitely many remaining ratios is zero. Put $u_N=\sum_{k\le N}c_k\sin(kx)$. The coefficient bound in [F2] gives $|c_k|\le C_\alpha m^{-1}\|f\|_{C^{0,\alpha}}k^{-2-\alpha}$ and $k|c_k|\le C_\alpha m^{-1}\|f\|_{C^{0,\alpha}}k^{-1-\alpha}$. Thus only the series for $u_N$ and $u_N'$ are asserted to converge absolutely and uniformly; [F4] gives a limit $u\in C^1([0,\pi])$ with zero endpoint values. For $tc<1$ one has $m\ge1-tc$, giving the stated coercive-range bound. To see $u\in C^{0,\alpha}$, write $d=|x-y|$. For $0<d<1$, split $\sum_k|c_k|\min(2,kd)$ at $k\le d^{-1}$: the low-frequency part is at most $C m^{-1}\|f\|d\sum_{k\le d^{-1}}k^{-1-\alpha}\le C m^{-1}\|f\|d$, and the high-frequency part is at most $C m^{-1}\|f\|\sum_{k>d^{-1}}k^{-2-\alpha}\le C m^{-1}\|f\|d^{1+\alpha}$. For $1\le d\le\pi$, the supremum bound gives the same $C m^{-1}\|f\|d^\alpha$ control. Hence $[u]_{0,\alpha}\le C m^{-1}\|f\|_{C^{0,\alpha}}$. [F2, F4, given, algebra]

2.1 Identify the equation and upgrade regularity. Put $f_N=\sum_{k\le N}f_k\sin(kx)$. At a resonance the omitted coefficient is zero by hypothesis, so for every sufficiently large $N$ the partial-sum identity is still $u_N''=-f_N-tcu_N$. By [F2], $f_N\to f$ in $L^2(0,\pi)$, while $u_N\to u$ uniformly; hence $u_N''\to g:=-f-tcu$ in $L^2$. Since also $u_N\to u$ in $L^2$, continuity of distributional differentiation and the regular-function embedding in [F7--F8] show $u''=g$ distributionally on $(0,\pi)$. The function $g$ is continuous. Set $G(x)=\int_0^xg(s)\,ds$; then the distributional derivative of the continuous function $u'-G$ is zero. By [F9], $u'-G$ is a constant distribution, hence equals that constant pointwise; therefore $u\in C^2([0,\pi])$ (with one-sided endpoint derivatives) and $u''=g$. Since $u\in C^{0,\alpha}$ by step 1.3 and $f\in C^{0,\alpha}$, $g=-f-tcu\in C^{0,\alpha}$, so $u\in X$ and $L_tu=f$. [step 1.3, F2, F7, F8, F9, given, algebra]

3.1 The range at a spectral parameter. If $tc=k_0^2$, integration by parts as in step 1.2 gives $\int_0^\pi (L_tu)e_{k_0}=0$ for every $u\in X$, so the range lies in the proper closed hyperplane $\{f\in Y:f_{k_0}=0\}$. Conversely, for any $f$ in that hyperplane, steps 1.3 and 2.1 construct $u\in X$ with $L_tu=f$; thus this hyperplane is exactly the range. Moreover, the inverse norm of $L_t$ on its bijective parameters blows up near $t_0:=k_0^2/c$: for $t\ne t_0$, testing on $e_{k_0}$ gives $\|L_te_{k_0}\|_{C^{0,\alpha}}=|k_0^2-tc|\,\|e_{k_0}\|_{C^{0,\alpha}}$ and hence $\|L_t^{-1}\|\ge \|e_{k_0}\|_X/(|k_0^2-tc|\,\|e_{k_0}\|_Y)\to\infty$ as $t\to t_0$. [step 1.2, step 1.3, step 2.1, given, algebra]

3.2 Estimate in the coercive range. For $tc<1$, $m\ge1-tc$ in step 1.3, so the sup and Hölder bounds there control $\|u\|_{C^{0,\alpha}}$ and $\|u'\|_\infty$ by $C(1-tc)^{-1}\|f\|_{C^{0,\alpha}}$. From step 2.1, $u''=-f-tcu$, hence $\|u''\|_{C^{0,\alpha}}\le C(1-tc)^{-1}\|f\|_{C^{0,\alpha}}$. Thus $\|u\|_{C^{2,\alpha}}\le C(1-tc)^{-1}\|f\|_{C^{0,\alpha}}$. Uniqueness follows from step 1.2; in particular $L_t$ is bijective for every non-spectral parameter, while this is the stated quantitative estimate on the coercive range. [step 1.2, step 1.3, step 2.1, F1, given, algebra]

4.1 The two continuity properties of the bijectivity set. By steps 1.2 and 2.1, $I=[0,1]\setminus\{k^2/c:k^2\le c\}$ is exactly the bijectivity set. Its complement is finite, so $I$ is open in $[0,1]$. Every subinterval $J\subseteq[0,1]$ on which all $L_t$ are injective contains no spectral parameter by step 1.2, hence $I\cap J=J$ is relatively closed in $J$. These are the two properties inspected in the abstract method of continuity [F5]. At a spectral parameter the inverse norms on neighboring bijective parameters blow up as in step 3.1, so no a priori estimate uniform across that parameter can hold. [step 1.2, step 2.1, step 3.1, F5, given, algebra]

5.1 Conclusion. The model family $L_tu=-u''-tcu$ on $(0,\pi)$ is bounded $X\to Y$ for every $t$, has the bijective base point $L_0=-d^2/dx^2$, and has bijectivity set $I=\{t:tc\notin\{k^2:k\ge1\}\}$. For $tc<1$ the eigenfunction expansion gives the inverse bound $C(1-tc)^{-1}$; at $tc=k_0^2$ the kernel is $\operatorname{span}\{\sin(k_0x)\}$ and the range is the closed hyperplane orthogonal to it. Openness and the relative-closedness property hold by direct inspection of the finite exceptional set. This one-dimensional example illustrates the abstract method of continuity [F5] and its PDE-level application [F6]. [step 1.2, step 2.1, step 3.1, step 3.2, step 4.1, F5, F6] ∎


## Remarks

- The example isolates the two ingredients of the method of continuity: a uniform inverse bound holds on compact parameter sets a positive distance from the spectrum; an open interval can avoid resonance while approaching it, in which case the inverse norm still diverges, and the base point $t=0$ is bijective. The exceptional parameters are the zeros of $k^2-tc$, where the inverse norm blows up like $1/|k^2-tc|$.
- The coefficient decay $|f_k|\le C\|f\|_{C^{0,\alpha}}k^{-\alpha}$ is the only analytic input; it is exactly what makes $\sum k^{-1-\alpha}$ and the splitting estimate for the H\"older seminorm of $u$ converge, and this absolute-summability argument does not apply at $\alpha=0$. For continuous forcing off resonance, direct integration of the ODE is an alternative route.
