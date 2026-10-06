---
id: thm-oleinik-one-sided-entropy-condition
kind: theorem
title: Oleinik's one-sided estimate characterizes bounded entropy solutions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-kruzhkov-entropy-solution, lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality, thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, def-heat-evolution-of-initial-data, lem-heat-kernel-normalisation-scaling-and-derivatives, lem-vanishing-viscosity-families-are-locally-precompact-in-lone, thm-existence-of-bounded-kruzhkov-entropy-solutions, thm-kruzhkov-local-l1-contraction, def-radial-mollifier-family-in-rn, prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-chain-rule, thm-algebra-of-derivatives, thm-dominated-convergence, cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-dependent-choice, lem-distributional-derivatives-commute-with-convolution-against-test-functions, thm-l-one-approximate-identities-converge-in-l-p, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.1, (5.4)–(5.7), pp. 31–33"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, (2.25)–(2.26), pp. 18–19 (shock chord criterion)"
    - title: "C. De Lellis, F. Otto and M. Westdickenberg, “Minimal entropy conditions for Burgers equation,” complete article"
      url: "http://www.instmath.rwth-aachen.de/~mwest/files/Burgers.pdf"
      locator: "Introduction, condition (2), printed p. 1, and the equivalence assertion, printed p. 2; the bounded-class converse is proved below by a mollification commutator"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice and Dependent Choice, as used by the mollification and
vanishing-viscosity compactness interfaces. Let $T>0$, $f\in C^2(\mathbb R)$,
and let $I\subset\mathbb R$ be a bounded closed interval with $f''\ge\kappa>0$
on $I$. Let $u_0\in L^\infty(\mathbb R)$ and let
$u\in L^\infty((0,T)\times\mathbb R)$ be a distributional weak solution of
$u_t+\partial_xf(u)=0$, with $u_0$ and the essential range of $u$ in $I$, and
with the strong local $L^1$ initial trace $u_0$ in
[[def-kruzhkov-entropy-solution]]. The following are equivalent: (i) $u$ is a
Kruzhkov entropy solution with that trace; (ii) for almost every
$t\in(0,T)$ and almost every pair $x<y$,
$$u(t,y)-u(t,x)\le\frac{y-x}{\kappa t};$$ (iii) for almost every
$t\in(0,T)$, $D_xu(t,\cdot)\le(\kappa t)^{-1}\mathcal L^1$ in distributional
order. The initial trace and weak equation are hypotheses of the equivalence;
the slope bound alone is not a definition of an entropy solution. For
piecewise $C^1$ solutions, the bound in particular excludes upward jumps, and
the convex chord criterion makes the remaining shocks entropy-admissible. The
state-slope constant $1/\kappa$ requires uniform convexity on the solution
range.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, $T>0$, $f\in C^2(\mathbb R)$, a bounded closed interval $I$ with $f''\ge\kappa>0$ on $I$, a bounded weak solution $u$ with datum $u_0\in L^\infty$, both taking values in $I$, and a nonnegative test function $\varphi$ in the arguments below.

[F1] The weak equation and the trace: $\int_{\Pi_T}(u\varphi_t+f(u)\varphi_x)=0$ for every $\varphi\in C_c^\infty(\Pi_T)$, and $u$ has the strong local $L^1$ trace $u_0$; a Kruzhkov entropy solution is a bounded weak solution satisfying $\partial_t|u-k|+\partial_xq_k(u)\le0$ for all $k$, $q_k(s)=\operatorname{sgn}(s-k)(f(s)-f(k))$ ([[def-kruzhkov-entropy-solution]]).

[F2] The viscous construction supplies bounded $C^{1,2}$ solutions for $C^2$ fluxes and smooth compactly supported data ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]]). Its heat-potential cancellation estimates apply on every positive-time strip ([[def-heat-evolution-of-initial-data]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]). For a smooth flux, these also make $p=v_x$ classical: $p$ satisfies the differentiated divergence equation with source $g'(v)p$, which is parabolically Hölder by the gradient estimate in the construction. Applying its second-kernel cancellation first gives Hölder $p_x$; then the source $-g'(v)p_x-g''(v)p^2$ is Hölder, and the nondifferentiated heat-potential estimate gives $p\in C^{1,2}$ locally. Chain and product rules are [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]. Smooth flux regularization is used before this differentiation.

[F3] Vanishing viscosity: for each smooth compactly supported datum the viscous solutions have a subsequence converging in $L^1_{\mathrm{loc}}(\Pi_T)$ and almost everywhere to the unique bounded Kruzhkov entropy solution of that datum, and the entropy inequalities pass to the limit ([[thm-existence-of-bounded-kruzhkov-entropy-solutions]], [[lem-vanishing-viscosity-families-are-locally-precompact-in-lone]]).

[F4] Local contraction: two bounded Kruzhkov entropy solutions with data in $L^1_{\mathrm{loc}}\cap L^\infty$ satisfy $\int_{B(x_0,R-L't)}|v-w|\le\int_{B(x_0,R)}|v_0-w_0|$ for almost every $t$ with $L't<R$, where $L'$ is a Lipschitz constant of the (shifted) flux on the common range ([[thm-kruzhkov-local-l1-contraction]]).

[F5] Mollification and distributional calculus: convolutions with radial mollifiers are smooth and converge in $L^1$ (or $L^1_{\mathrm{loc}}$) to the original function; derivatives may be taken inside the convolution; approximate identities converge in $L^p$; distributional derivatives commute with convolution against test functions; almost-everywhere convergence is available along subsequences of $L^1$-convergent sequences ([[def-radial-mollifier-family-in-rn]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[lem-distributional-derivatives-commute-with-convolution-against-test-functions]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence]], [[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F6] Piecewise $C^1$ interpretation: at a single shock satisfying the Rankine--Hugoniot condition, the entropy inequalities for all convex $C^2$ pairs hold iff the chord residual $F(z)=f(z)-f(u^-)-s(z-u^-)$ satisfies $F(z)(u^+-u^-)\ge0$ between the states; in particular only compressive jumps $u^->u^+$ are admissible ([[lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality]]).

## Proof

**Proof technique:** direct.

1.1 **Shifting and positive-strip gradient bounds.** Fix $c\in I$ and put $J:=I-c$, which contains $0$. Set $\widetilde f(s):=f(s)-f(0)$ and $$g(v):=\widetilde f(v+c)-\widetilde f(c)=f(v+c)-f(c).$$ Then $g(0)=0$ and $g''\ge\kappa$ on $J$. For a smooth compactly supported datum $v_0^{\mathrm s}$ with values in $J$, apply [F2] to flux $g$ and datum $v_0^{\mathrm s}$, obtaining $v^\varepsilon$ with values in $J$. The unshifted profile $U^\varepsilon:=v^\varepsilon+c$ has datum $v_0^{\mathrm s}+c$, equals $c$ outside a compact set, and solves the equation with normalized flux $\widetilde f$; thus the compact datum to which [F2] is applied is $v_0^{\mathrm s}$, not the generally noncompact function $v_0^{\mathrm s}+c$ or a nonzero-tail shift. The Oleinik slope is unchanged by adding $c$. Set $M_v:=\|v_0^{\mathrm s}\|_\infty$ and $G_0:=\sup_{v\in J}|g'(v)|<\infty$. By variation of constants, for $0<d<t$, $$v^\varepsilon(t)=H_{\varepsilon(t-d)}v^\varepsilon(d)-\int_d^t\partial_xH_{\varepsilon(t-s)}g(v^\varepsilon(s))\,ds.$$ Indeed, differentiating $H_{\varepsilon(t-s)}v^\varepsilon(s)$ for $d<s<t$ and using the viscous equation gives $-\partial_xH_{\varepsilon(t-s)}g(v^\varepsilon(s))$; the integral converges at $s=t$ because $\|\partial_x\Gamma_{\varepsilon r}\|_1\le C_\varepsilon r^{-1/2}$. The Gaussian derivative bounds [F2] also give $$\|\partial_x\Gamma_{\varepsilon r}(\cdot+h)-\partial_x\Gamma_{\varepsilon r}\|_1\le\min(C_\varepsilon r^{-1/2},C_\varepsilon|h|r^{-1}),\qquad \|\partial_r\partial_x\Gamma_{\varepsilon r}\|_1\le C_\varepsilon r^{-3/2}.$$ Splitting the spatial integral at $r=|h|^2$ and the time integral at $r=|t-t'|$ in the restarted identity shows that, for every $0<\alpha<1$ and every $\tau>0$, $$|v^\varepsilon(t,x+h)-v^\varepsilon(t,x)|\le C_{\tau,T}|h|^\alpha,\qquad |v^\varepsilon(t,x)-v^\varepsilon(t',x)|\le C_{\tau,T}|t-t'|^{1/2}$$ on $[\tau/2,T]\times\mathbb R$. Fix $\tau>0$, put $d=\tau/2$, and differentiate the restarted identity for $t\ge\tau$, first omitting its final $\eta$-length of integration and then letting $\eta\downarrow0$. Since $\int\partial_{xx}\Gamma_{\varepsilon r}=0$, cancellation gives $$p(t,x)=\partial_xH_{\varepsilon(t-d)}v^\varepsilon(d,x)-\int_0^{t-d}\int_{\mathbb R}\partial_{xx}\Gamma_{\varepsilon r}(z)\bigl(g(v^\varepsilon(t-r,x-z))-g(v^\varepsilon(t,x))\bigr)\,dz\,dr.$$ The range bound and the positive-strip estimates imply $|g(v^\varepsilon(t-r,x-z))-g(v^\varepsilon(t,x))|\le G_0C_{\tau,T}(|z|^\alpha+r^{1/2})$. By scaling, $$\int |\partial_{xx}\Gamma_{\varepsilon r}(z)|(|z|^\alpha+r^{1/2})\,dz\le C_{\varepsilon,\alpha}(r^{-1+\alpha/2}+r^{-1/2}),$$ which is integrable at $r=0$; the first term is bounded by $C_{\varepsilon,\tau}M_v$ because $t-d\ge\tau/2$. Thus $$\sup_{(t,x)\in[\tau,T]\times\mathbb R}|p(t,x)|<\infty.$$ This bound is global in space and holds on every positive-time strip. [F2]


1.2 **Equivalence of the pointwise and distributional forms.** Fix $t\in(0,T)$, assume first that (ii) holds at this $t$, and put $w(x)=u(t,x)-x/(\kappa t)$, so that $w(y)\le w(x)$ for almost every $x<y$. For $n\ge1$ set $a:=1/n$ and $w_n(x)=n\int_x^{x+a}w(z)\,dz$. If $x<x'$, put $d:=x'-x>0$. When $d\le a$, cancellation of the overlap gives $$w_n(x)-w_n(x')=n\left(\int_x^{x+d}w(z)\,dz-\int_{x+a}^{x+a+d}w(\zeta)\,d\zeta\right)\ge0,$$ because the two intervals have equal length $d$ and every interior pair $z\in[x,x+d]$, $\zeta\in[x+a,x+a+d]$ satisfies $z<\zeta$; explicitly, $d\left(\int_x^{x+d}w-\int_{x+a}^{x+a+d}w\right)=\int_{[x,x+d]\times[x+a,x+a+d]}(w(z)-w(\zeta))\,dz\,d\zeta\ge0$ by the assumed a.e. pair inequality. When $d\ge a$, the intervals $[x,x+a]$ and $[x',x'+a]$ are ordered and have equal length, so $$w_n(x)-w_n(x')=n\left(\int_x^{x+a}w(z)\,dz-\int_{x'}^{x'+a}w(\zeta)\,d\zeta\right)\ge0,$$ since $a\left(\int_x^{x+a}w-\int_{x'}^{x'+a}w\right)=\int_{[x,x+a]\times[x',x'+a]}(w(z)-w(\zeta))\,dz\,d\zeta\ge0$. Thus $w_n$ is nonincreasing and $D_xw_n\le0$ distributionally. Since $w_n\to w$ in $L^1_{\mathrm{loc}}$ as $n\to\infty$, distributional differentiation passes to the limit, so $D_xw\le0$, which is (iii) at this $t$. Conversely, assume (iii) at some $t$ and let $\rho_\delta$ be a nonnegative spatial mollifier; then $w_\delta=w*\rho_\delta$ is smooth with $D_xw_\delta=(D_xw)*\rho_\delta\le0$, so $w_\delta$ is nonincreasing and $w_\delta(y)\le w_\delta(x)$ for all $x<y$; since $w_\delta\to w$ in $L^1_{\mathrm{loc}}$, passing to an almost-everywhere convergent subsequence gives the two-point inequality of (ii) at this $t$ for almost every pair. Hence (ii) and (iii) hold for the same full-measure set of times, proving the equivalence. [F5]


1.3 **Mollification commutator.** Assume (iii). Fix a nonnegative test function $\varphi$ supported in $[a,b]\times[-R,R]$ with $0<a<b<T$, and let $\rho_\delta$ be a nonnegative unit-mass mollifier on $\mathbb R^2$ supported in the ball of radius $\delta<\tfrac12\min\{a,T-b\}$. Extend $u$ boundedly to all of $\mathbb R^2$ by a fixed value in $I$ outside $(0,T)\times\mathbb R$, and set $u_\delta=u*\rho_\delta$, $F_\delta=f(u)*\rho_\delta$, $r_\delta=f(u_\delta)-F_\delta$. By [F5], distributional derivatives commute with convolution, so on a neighbourhood of the support of $\varphi$ the identity $\partial_tu_\delta+\partial_xF_\delta=0$ holds; since the mollification averages only over times $\ge a-\delta>a/2$, the distributional bound (iii) gives $\partial_xu_\delta\le2/(\kappa a)$ there; and $u_\delta$ still takes values in $I$. The tangent inequality $f(s)\ge f(u_\delta)+f'(u_\delta)(s-u_\delta)$ for convex $f$, averaged against $\rho_\delta$, gives $r_\delta\le0$. Finally, localizing $u$ and $f(u)$ by a cutoff equal to $1$ on a slightly larger compact set and applying approximate-identity convergence in $L^1$ [F5] gives $u_\delta\to u$, $F_\delta\to f(u)$ and $r_\delta\to0$ in $L^1$ on the support of $\varphi$, the last two also using that $f$ is Lipschitz on the bounded interval $I$. [F5]


2.1 **A classical barrier after flux regularization.** Take smooth normalized $g_l$ converging to $g$ in $C^2$ on the compact state interval $J$, with $g_l(0)=0$ and $g_l''\ge\kappa_l:=\kappa-1/l>0$ there (mollify $g$ at sufficiently small scales). Choose $0<\varepsilon_l\le1$ tending to zero, and let $v^l$ have the fixed smooth datum of step 1.1 and flux $g_l$. Its range lies in $J$. By [F2], $p=v_x^l$ is classical at positive times, is bounded globally on positive strips by step 1.1, and satisfies $p_t+g_l'(v^l)p_x+g_l''(v^l)p^2=\varepsilon_l p_{xx}$. Fix $\tau>0$, put $q(t)=1/(\kappa_l(t-\tau))$, $b=g_l'(v^l)$ and $W=p-q$. Where $W>0$, $(\partial_t+b\partial_x-\varepsilon_l\partial_{xx})W<0$ since $p>q>0$. If $G_l=\sup_J|g_l'|$, choose $A>G_l+2\varepsilon_l$ and $\Phi=e^{A(t-\tau)}(1+x^2)$, so the same operator applied to $\Phi$ is strictly positive. For $\rho>0$, $Z=W-\rho\Phi$ is negative at some $t_0>\tau$ sufficiently close to $\tau$, by the positive-strip bound on $p$, and negative on the sides of a sufficiently large rectangle. A positive maximum on that rectangle would have $Z_t\ge0$, $Z_x=0$, $Z_{xx}\le0$, contradicting the strict operator inequality there. Thus $Z\le0$. Let $\rho\downarrow0$ and then $\tau\downarrow0$ to get $v_x^l\le1/(\kappa_l t)$; integrating in $x$ gives $v^l(t,y)-v^l(t,x)\le(y-x)/(\kappa_l t)$. This uses a classical maximum argument, with no Sobolev positive-part test. [F2, F5, step 1.1]


2.2 **The entropy production tends to a nonpositive limit.** For any convex $\eta\in C^2$ and $q'=\eta'f'$, the chain and product rules applied to $\partial_tu_\delta+\partial_x(f(u_\delta)-r_\delta)=0$ give $\partial_t\eta(u_\delta)+\partial_xq(u_\delta)=\partial_x\bigl(\eta'(u_\delta)r_\delta\bigr)-\eta''(u_\delta)(\partial_xu_\delta)r_\delta\le\partial_x\bigl(\eta'(u_\delta)r_\delta\bigr)+\frac{2\|\eta''\|_{L^\infty(I)}}{\kappa a}(-r_\delta)$, using $r_\delta\le0$ and $\partial_xu_\delta\le2/(\kappa a)$ from step 1.3. Tested against the nonnegative $\varphi$, the first term is bounded by $\|\eta'\|_{L^\infty(I)}\|\varphi_x\|_\infty\|r_\delta\|_{L^1(\operatorname{supp}\varphi)}$ after an integration by parts, and the second by $\frac{2\|\eta''\|_\infty}{\kappa a}\|\varphi\|_\infty\|r_\delta\|_{L^1(\operatorname{supp}\varphi)}$; both tend to $0$ as $\delta\downarrow0$. Since $\partial_t\eta(u_\delta)+\partial_xq(u_\delta)\to\partial_t\eta(u)+\partial_xq(u)$ distributionally by [F5] (local $L^1$ convergence of $u_\delta$ and continuity of $\eta,q$), the limit satisfies $\langle\partial_t\eta(u)+\partial_xq(u),\varphi\rangle\le0$ for every nonnegative test function supported in $(0,T)\times\mathbb R$. [F5, step 1.3]


3.1 **Passage to the smooth-datum entropy solution.** The varying-flux family $v^l$ of step 2.1 satisfies the common range and derivative bounds of the compactness lemma [F3]. Extract a locally $L^1$ and almost-everywhere convergent subsequence. The existence proof passes its weak and entropy identities to the limit because $g_l\to g$ in $C^1$ on the range; the uniform local time modulus supplies the initial trace. Uniqueness identifies the limit as the entropy solution $v$ for $g$ with this smooth datum. Fubini gives slicewise convergence at almost every time, and passage to the bound in step 2.1, with $\kappa_l\to\kappa$, gives $v(t,y)-v(t,x)\le(y-x)/(\kappa t)$ for almost every time and almost every pair $x<y$. [F3, F4, F5, step 2.1]


4.1 **Approximation for general data: (i) implies (ii).** Now let $u$ be the given entropy solution with datum $u_0$ and range in $I$, and fix $c\in I$. For $j\ge1$ set $w_j=\bigl((u_0-c)\mathbf 1_{[-j,j]}\bigr)*\rho_{\delta_j}$, where $\rho_{\delta_j}$ is a nonnegative mollifier of radius $\delta_j\downarrow0$: then $w_j\in C_c^\infty$, its values lie in $I-c$ (a convex combination of values of $u_0-c$), and $w_j\to u_0-c$ in $L^1_{\mathrm{loc}}(\mathbb R)$. Let $v_j$ be the entropy solution with datum $w_j$ for the flux $g$: by step 3.1 each $v_j$ satisfies the two-point estimate, and by [F4] applied to $v_j$ and $\tilde u=u-c$, the differences converge to $0$ in $L^1$ on every compact cylinder; a diagonal subsequence converges almost everywhere on $\Pi_T$. Passing the two-point estimate to that almost-everywhere limit proves (ii) for $u$. [F4, F5, step 3.1]


5.1 **Kruzhkov pairs and conclusion of (iii) implies (i).** For $k\in\mathbb R$ and $m\ge1$ put $\eta_m(s)=\sqrt{(s-k)^2+m^{-2}}$ and $q_m(s)=\int_k^s\eta_m'(z)f'(z)\,dz$, so $(\eta_m,q_m)$ is a smooth convex entropy pair. Step 2.2 gives $\partial_t\eta_m(u)+\partial_xq_m(u)\le0$ for every $m$; letting $m\to\infty$, $\eta_m\to|s-k|$ and $q_m\to\operatorname{sgn}(s-k)(f(s)-f(k))$ uniformly on the bounded interval $I$ by dominated convergence, so the distributional inequality passes to the limit and every Kruzhkov inequality holds. Together with the weak equation and the strong local $L^1$ trace (hypotheses), $u$ is a Kruzhkov entropy solution, proving (iii) implies (i); the reverse implication (i) implies (ii) is step 4.1, and the equivalence of (ii) and (iii) is step 1.2. [F1, F5, step 4.1, step 1.2, step 2.2]


6.1 **The piecewise $C^1$ remark.** If $u$ is piecewise $C^1$ with a single jump at a curve $x=s(t)$ and satisfies the hypotheses, then (ii) forces the right trace not to exceed the left trace across an upward jump: taking $x\uparrow s(t)$, $y\downarrow s(t)$ in the two-point inequality and letting $x,y\to s(t)$ gives $u^+-u^-\le0$, so an upward jump $u^+>u^-$ is excluded; for the remaining jumps with $u^->u^+$ the Rankine--Hugoniot condition and the chord criterion [F6] make them entropy-admissible. This shows how the slope bound encodes admissibility in the piecewise smooth class, while the equivalence itself was proved for all bounded weak solutions. [F6, step 4.1, step 1.2, step 5.1] ∎
