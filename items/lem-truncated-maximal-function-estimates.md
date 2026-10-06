---
id: lem-truncated-maximal-function-estimates
kind: lemma
title: "Truncated maximal functions: finiteness, comparison estimates and the good-set bound"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution, def-grand-maximal-test-class-of-order-n, def-countable-choice, lem-schwartz-deconvolution-along-dyadic-dilations, lem-schwartz-dilations-preserve-schwartz-space, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, thm-finite-seminorm-bound-characterizes-tempered-distributions, def-centered-and-uncentered-hardy-littlewood-maximal-functions, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, def-metric-ball, thm-tempered-convolution-is-smooth-with-polynomial-growth, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, thm-holder-inequality-for-integrals, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, lem-sphere-and-ball-measures-scale, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, lem-schwartz-parameter-pairing-and-integral-interchange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Cruz-Uribe SFO, Li-An Daniel Wang, Variable Hardy Spaces, arXiv:1211.6505 (2012)"
      url: "https://arxiv.org/pdf/1211.6505"
      locator: "sections 3.1-3.2, printed pp. 8-15 (PDF pp. 9-16): the truncated operators $M^{\\epsilon,L}$, the estimates (3.5)-(3.9) and the construction of $L=L(f)$"
    - title: "Marcin Bownik, Anisotropic Hardy Spaces and Wavelets, Memoirs of the American Mathematical Society 164 (2003), no. 781"
      url: "https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf"
      locator: "Chapter 1, Section 7, Lemma 7.6 and (7.14)-(7.17), printed pp. 46-48: truncated maximal functions and the good-set bootstrap"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p<\infty$ and let $\varphi\in\mathcal S(\mathbb R^n)$ with
$\int\varphi\ne0$. For $0<\epsilon\le1/2$, $L>0$, $T>0$ and
$f\in\mathcal S'(\mathbb R^n)$ define the **truncated maximal functions**
$$M^{\epsilon,L}_{\varphi,0}f(x)=\sup_{0<t<1/\epsilon}\frac{|(f*\varphi_t)(x)|\,t^L}{(t+\epsilon+\epsilon|x|)^L},$$
$$M^{\epsilon,L}_{\varphi,1}f(x)=\sup_{0<t<1/\epsilon}\ \sup_{|x-y|<t}\frac{|(f*\varphi_t)(y)|\,t^L}{(t+\epsilon+\epsilon|y|)^L},$$
$$M^{\epsilon,L}_{\varphi,T}f(x)=\sup_{0<t<1/\epsilon}\ \sup_{y\in\mathbb R^n}\frac{|(f*\varphi_t)(x-y)|}{(1+|y|/t)^T}\frac{t^L}{(t+\epsilon+\epsilon|x-y|)^L},$$
$$M^{\epsilon,L}_Nf(x)=\sup_{\psi\in\mathcal F_N}M^{\epsilon,L}_{\psi,1}f(x),$$
where $M^0_\varphi f$, $M^{*,1}_\varphi f$ and $\mathcal F_N$ are those of
[[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]]
and [[def-grand-maximal-test-class-of-order-n]]. The displayed radial and
aperture-one truncation formulas also apply to every Schwartz test $\psi$,
including tests of zero integral; the nonzero-integral hypothesis is needed
only for estimates involving the fixed comparison kernel $\varphi$. Then:

For a nonnegative Borel function $g$, write $\widetilde Mg(x)$ for the
supremum of its centered ball averages, with the nonnegative Lebesgue integral
allowed to equal $+\infty$. If $g\in L^1_{\mathrm{loc}}$, then
$\widetilde Mg=Mg$ for the centered maximal operator of
[[def-centered-and-uncentered-hardy-littlewood-maximal-functions]].

1. For every $f\in\mathcal S'$ and every $0<p<\infty$ there is $L_0=L_0(f,n,\varphi,p)<\infty$ such that for every $L\ge L_0$ and every $0<\epsilon\le1/2$ the function $M^{\epsilon,L}_{\varphi,1}f$ belongs to $L^p(\mathbb R^n)$ and satisfies $M^{\epsilon,L}_{\varphi,1}f(x)\le C\epsilon^{-K}(1+|x|)^{-M}$ with some finite $C,K,M>0$ depending on $f,L,p$ (so the quantity $\|M^{\epsilon,L}_{\varphi,1}f\|_p$ is finite).
2. For every $T>0$ and $L>0$ there is $N_1$ such that for every $N\ge N_1$, every $0<\epsilon\le1/2$, every $f\in\mathcal S'$ and every $x$, $$M^{\epsilon,L}_Nf(x)\le C_1\,M^{\epsilon,L}_{\varphi,T}f(x)$$ with $C_1=C_1(n,\varphi,T,L)$ independent of $\epsilon$ and $f$.
3. For every $T>0$, setting $q=n/T$ and assuming $0<q<p$, one has for every $0<\epsilon\le1/2$, $L>0$ and $f\in\mathcal S'$ $$M^{\epsilon,L}_{\varphi,T}f(x)^q\le\widetilde M\bigl((M^{\epsilon,L}_{\varphi,1}f)^q\bigr)(x)\quad(x\in\mathbb R^n),\qquad \|M^{\epsilon,L}_{\varphi,T}f\|_{L^p}\le C_2\|M^{\epsilon,L}_{\varphi,1}f\|_{L^p},$$ where $\widetilde M$ is the extended centered average defined above and $C_2=C_2(n,p,q)$. The norm inequality is interpreted in the extended sense if its right-hand side is infinite.
4. For every $p_0>0$, $T>0$, $L>0$ and $\lambda>0$ there is $N_2$ such that for every $N\ge N_2$ there is $C_3=C_3(n,\varphi,p_0,T,L,\lambda,N)<\infty$ with the property that for every $0<\epsilon\le1/2$, every $f\in\mathcal S'$ and every $x$ satisfying $M^{\epsilon,L}_Nf(x)<\lambda M^{\epsilon,L}_{\varphi,1}f(x)$, $$M^{\epsilon,L}_{\varphi,1}f(x)\le C_3\,\widetilde M\bigl((M^0_\varphi f)^{p_0}\bigr)(x)^{1/p_0}.$$
5. (Untruncated good-set estimate.) For every $p_0>0$ and $\lambda>0$ there is $N_3$ such that for every $N\ge N_3$ there is $C_4=C_4(n,\varphi,p_0,\lambda,N)<\infty$ with the property that for every $f\in\mathcal S'$ and every $x$ with $M_Nf(x)\le\lambda M^{*,1}_\varphi f(x)<\infty$, $$M^{*,1}_\varphi f(x)\le C_4\,\widetilde M\bigl((M^0_\varphi f)^{p_0}\bigr)(x)^{1/p_0}.$$ The finiteness $M^{*,1}_\varphi f(x)<\infty$ is part of the hypothesis: no claim is made at points where $M^{*,1}_\varphi f(x)=+\infty$. For every $f$ with $M^{*,1}_\varphi f$ finite a.e. the estimate therefore holds a.e. on the set $F=\{M_Nf\le\lambda M^{*,1}_\varphi f\}$.


The point of the truncation is that $M^{\epsilon,L}_{\varphi,1}f$ is finite and
integrable, so the good-set argument of the last item can be run without an a
priori finiteness assumption on $M^{*,1}_\varphi f$; as $\epsilon\downarrow0$
the truncated functions increase pointwise to the untruncated ones. Countable
Choice is assumed through dyadic deconvolution and the measure-theoretic
estimates used below.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p<\infty$, $\varphi\in\mathcal S$ with $\int\varphi\ne0$, $0<\epsilon\le1/2$, $L,T>0$, $f\in\mathcal S'$; the maximal functions of [[def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution]] and [[def-grand-maximal-test-class-of-order-n]].

[F1] Finite-seminorm bound: there are integers $N_0,M\ge0$ and $C$ with $|\langle f,h\rangle|\le C\max_{|\alpha|\le N_0,|\beta|\le M}\sup_z|z^\alpha\partial^\beta h(z)|$ for all $h\in\mathcal S$. Applying this to $h(z)=\varphi_t(y-z)$ gives $|(f*\varphi_t)(y)|\le C_\varphi t^{-(n+M)}(1+|y|)^{N_0}$ when $0<t\le1$ and $|(f*\varphi_t)(y)|\le C_\varphi t^{N_0-n}(1+|y|)^{N_0}$ when $t\ge1$: for small scales the largest derivative seminorm is bounded by $t^{-n-M}$, while for large scales it is bounded by $t^{-n}$ and the polynomial weight contributes at most $t^{N_0}$ ([[thm-finite-seminorm-bound-characterizes-tempered-distributions]], [[def-schwartz-space-and-its-seminorms]]).

[F2] The centered Hardy-Littlewood maximal operator is defined for $L^1_{\mathrm{loc}}$ inputs and satisfies $\|Mg\|_{L^r}\le C_{n,r}\|g\|_{L^r}$ for $1<r<\infty$; also $M(h_1+h_2)\le Mh_1+Mh_2$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]], [[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]]).

[F3] The deconvolution lemma: for $\varphi$ with $\int\varphi\ne0$ and every pair of positive integers $L',N'$, there are $C_{\mathrm{dec}},M_{\mathrm{dec}},s_0>0$ such that for every $\psi\in\mathcal S$ there are $\eta^j\in\mathcal S$ with $\psi=\sum_{j\ge0}\eta^j*\varphi_{s_02^{-j}}$ in $\mathcal S$ and $\|\eta^j\|_{S_{N'}}\le C_{\mathrm{dec}}2^{-jnL'}\|\psi\|_{S_{M_{\mathrm{dec}}}}$ Any smaller positive value of $s_0$ also works, with constants depending on that value ([[lem-schwartz-deconvolution-along-dyadic-dilations]]).

[F4] For every $a\in\mathbb R^n$ and $r>0$, $\lambda(B(a,r))=c_nr^n$ with $c_n=\omega_{n-1}/n>0$; this follows from the centred-ball formula and translation invariance. Consequently, $B(x-y,t)\subseteq B(x,|y|+t)$ and $\lambda(B(x,|y|+t))/\lambda(B(x-y,t))=(1+|y|/t)^n$ ([[lem-sphere-and-ball-measures-scale]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-metric-ball]]).

[F5] Translate bound for the test seminorm: for $\psi\in\mathcal S$ and $h\in\mathbb R^n$ one has $P_N(\psi(\cdot+h))\le(1+|h|)^NP_N(\psi)$, because $(1+|w|)\le(1+|h|)(1+|w+h|)$ pointwise; hence for the translated derivative kernel $\Psi^z(w)=(\partial_j\varphi)(w+(z-x)/t)$ and $|(z-x)/t|\le r+1$ with $r\le1$ one has $P_N(\Psi^z)\le3^NP_N(\partial_j\varphi)\le3^NP_{N+1}(\varphi)<\infty$. Combining the componentwise bounds for $0\le j<n$ gives $|\nabla(f*\varphi_t)(z)|\le\sqrt n$ times this bound after applying the grand maximal estimate; write $c_{N,\varphi}:=\sqrt n\,3^NP_{N+1}(\varphi)$ for the resulting gradient constant ([[def-grand-maximal-test-class-of-order-n]], [[def-schwartz-space-and-its-seminorms]]).

[F6] For every $r>1$, $L^r(\mathbb R^n)\subset L^1_{\mathrm{loc}}(\mathbb R^n)$: if $K$ is compact, it is bounded and has finite measure, and Holder gives $\int_K|g|\le\lambda(K)^{1-1/r}\|g\|_{L^r}$ ([[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F7] The radial and aperture-one nontangential maximal functions are Borel measurable for every $f\in\mathcal S'$ ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]). For fixed $\epsilon,L$, the truncated aperture-one function is Borel: each strict superlevel set is the union of the open balls $B(y,t)$ indexed by the admissible witnesses whose weighted convolution value exceeds that level. The truncated grand maximal function is Borel by the same open-ball superlevel argument, with tests also indexed over $\mathcal F_N$. The tangential function is Borel because it is a supremum, over fixed witnesses, of continuous functions of $x$; smoothness of each convolution is [[thm-tempered-convolution-is-smooth-with-polynomial-growth]].




**Proof technique:** weighted distance estimates, the dyadic deconvolution comparison and a mean-value argument on the good set.

## Proof

**Proof technique:** direct.

1.1 Finiteness bound. Let $N_0,M,C_\varphi$ be as in [F1], and choose $L_0=L_0(f,n,\varphi,p)$ so large that $L_0>n+M$ and $L_0>N_0+n/p$. Fix $L\ge L_0$. For a witness $(y,t)$ with $0<t<1/\epsilon$ and $|x-y|<t$, write $W=\frac{|(f*\varphi_t)(y)|t^L}{(t+\epsilon+\epsilon|y|)^L}$. If $t\le1$, [F1] and $t+\epsilon+\epsilon|y|\ge\epsilon(1+|y|)$ give $$W\le C_\varphi t^{L-(n+M)}\epsilon^{-L}(1+|y|)^{N_0-L}\le C_\varphi\epsilon^{-L}(1+|y|)^{N_0-L},$$ because $L>n+M$. If $t\ge1$, the large-scale bound in [F1] gives $$W\le C_\varphi t^{L+N_0-n}\epsilon^{-L}(1+|y|)^{N_0-L} \le C_\varphi\epsilon^{-(L+\max\{0,L+N_0-n\})}(1+|y|)^{N_0-L},$$ because when $L+N_0-n\ge0$ one has $t^{L+N_0-n}\le\epsilon^{-(L+N_0-n)}$, while when $L+N_0-n<0$ the factor is at most $1$. Thus in both cases $W\le C'\epsilon^{-K}(1+|y|)^{-(L-N_0)}$ for some finite $K$. If $|x|\ge2/\epsilon$, then $|y|\ge|x|-t\ge|x|/2$, so this is at most $C''\epsilon^{-K}(1+|x|)^{-(L-N_0)}$. If $|x|\le2/\epsilon$, then $1+|x|\le1+2/\epsilon\le3/\epsilon$; absorbing the resulting factor $\epsilon^{-(L-N_0)}$ gives the same spatial-decay form with a possibly larger finite power of $\epsilon^{-1}$. Taking the supremum over witnesses yields $$M^{\epsilon,L}_{\varphi,1}f(x)\le C\epsilon^{-K'}(1+|x|)^{-(L-N_0)}.$$ Because $L>N_0+n/p$, this bound belongs to $L^p(\mathbb R^n)$, uniformly for each fixed $0<\epsilon\le1/2$. By [F7] the maximal function is Borel, so its $L^p$ norm is defined. [F1, F7, given, algebra]

1.2 Tangential dominated by aperture one. Fix $x,y$ and $0<t<1/\epsilon$, and put $q=n/T>0$ and $g=(M^{\epsilon,L}_{\varphi,1}f)^q$, which is nonnegative Borel by [F7]. For every $z\in B(x-y,t)$ the definition gives $\frac{|(f*\varphi_t)(x-y)|t^L}{(t+\epsilon+\epsilon|x-y|)^L}\le M^{\epsilon,L}_{\varphi,1}f(z)$. Raising to the $q$-th power, averaging with the integral allowed to be infinite, and enlarging the ball using [F4] gives $$|(f*\varphi_t)(x-y)|^q\frac{t^{Lq}}{(t+\epsilon+\epsilon|x-y|)^{Lq}}\le\frac{1}{\lambda(B(x-y,t))}\int_{B(x-y,t)}g\le\Bigl(1+\frac{|y|}{t}\Bigr)^n\widetilde Mg(x).$$ Since $n=Tq$, division by $(1+|y|/t)^{Tq}$ and taking the supremum over $y,t$ proves the pointwise estimate for every $L>0$. For the norm estimate assume $q<p$. If $\|M^{\epsilon,L}_{\varphi,1}f\|_p=\infty$, the extended norm inequality is trivial. Otherwise $g\in L^{p/q}$, and [F6] gives $g\in L^1_{\mathrm{loc}}$, so $\widetilde Mg=Mg$. Applying [F2] with $r=p/q>1$ yields $$\|M^{\epsilon,L}_{\varphi,T}f\|_p^q\le\|Mg\|_{p/q}\le C_{n,p,q}\|g\|_{p/q}=C_{n,p,q}\|M^{\epsilon,L}_{\varphi,1}f\|_p^q.$$ Taking $q$-th roots and renaming the constant proves assertion 3. [F2, F4, F6, F7, algebra]

1.3 Truncated grand maximal dominated by the truncated tangential maximal function. Fix $T>0$, $L>0$ and choose integers $L'>L+T$ and $N'>L+T+n$, for example $L'=\lfloor L+T\rfloor+1$ and $N'=\lfloor L+T+n\rfloor+1$. Apply [F3] with these parameters, obtaining $C_{\mathrm{dec}},M_{\mathrm{dec}},s_0$; by the scaling clause of [F3] we may assume $s_0\le1$, and we take an integer $N\ge\max(M_{\mathrm{dec}},N')$ so that $st\le t<1/\epsilon$ for every $j$ and $\|\psi\|_{S_{M_{\mathrm{dec}}}}\le1$ for $\psi\in\mathcal F_N$. Write $M_*=M_{\mathrm{dec}}$. For $\psi\in\mathcal F_N$, $t\in(0,1/\epsilon)$ and $x$ write the deconvolution $\psi=\sum_j\eta^j*\varphi_{s_02^{-j}}$ and set $s=s_02^{-j}$. If $M^{\epsilon,L}_{\varphi,T}f(x)=+\infty$, assertion 2 is immediate. Otherwise associativity follows from [[lem-schwartz-parameter-pairing-and-integral-interchange]] applied to $H(w)(z)=\eta_t^j(w)\varphi_{st}(x-w-z)$: each seminorm is bounded by an integrable polynomial weight times $|\eta_t^j(w)|$. Continuity of $f$ passes the Schwartz deconvolution partial sums to the scalar limit. Thus, with $w$ the integration variable, $$|(f*\psi_t)(x)|\le\sum_j\int_{\mathbb R^n}|(f*\varphi_{s t})(x-w)|\,|\eta^j_t(w)|\,dw .$$ By definition of $M^{\epsilon,L}_{\varphi,T}f(x)$, for every $w$ and $s,t>0$ with $st<1/\epsilon$, $$|(f*\varphi_{st})(x-w)|\le M^{\epsilon,L}_{\varphi,T}f(x)\Bigl(1+\frac{|w|}{st}\Bigr)^T\frac{(st+\epsilon+\epsilon|x-w|)^L}{(st)^L}.$$ Multiplying by $t^L/(t+\epsilon+\epsilon|x|)^L$ and using the triangle inequality $|x-w|\le|x|+|w|$, together with $\epsilon/(t+\epsilon)\le1/t$ (valid since $\epsilon\le1$ and $t\le1/\epsilon$), gives $$\Bigl(\frac{st+\epsilon+\epsilon|x-w|}{st}\Bigr)^L\Bigl(\frac{t}{t+\epsilon+\epsilon|x|}\Bigr)^L\le\Bigl(\frac1s+\frac{|w|}{st}\Bigr)^L .$$ Therefore, substituting $w=tu$ and using $N'>L+T+n$ so $(1+|u|)^{L+T-N'}$ is integrable, $$|(f*\psi_t)(x)|\frac{t^L}{(t+\epsilon+\epsilon|x|)^L}\le M^{\epsilon,L}_{\varphi,T}f(x)\sum_j\int_{\mathbb R^n}\Bigl(1+\frac{|u|}{s}\Bigr)^T\Bigl(\frac1s+\frac{|u|}{s}\Bigr)^L|\eta^j(u)|\,du\le M^{\epsilon,L}_{\varphi,T}f(x)\sum_j C_{T,L,N'}s^{-(T+L)}\|\eta^j\|_{S_{N'}}\le C'M^{\epsilon,L}_{\varphi,T}f(x)\sum_j 2^{j(T+L)}2^{-jnL'}=C_{\mathrm{rad}}M^{\epsilon,L}_{\varphi,T}f(x),$$ since $s\le1$, [F3] gives $\|\eta^j\|_{S_{N'}}\le C2^{-jnL'}\|\psi\|_{S_{M_{\mathrm{dec}}}}$, and $nL'>T+L$ makes the geometric series converge. The constants are independent of $N$, $\epsilon$, $\psi$, $t$ and $x$; the constant is independent of $\epsilon$ because no weight with $\epsilon$ remains. The same calculation for an arbitrary Schwartz test $\theta$ retains the factor $\|\theta\|_{S_{M_*}}$ on the right. For a cone witness $|z-x|<t$ and $\psi\in\mathcal F_N$, put $h=(z-x)/t$ and $\theta(w)=\psi(w+h)$, so $(f*\theta_t)(x)=(f*\psi_t)(z)$. Since $|h|<1$ and $N\ge M_*$, the weighted derivative inequality gives $\|\theta\|_{S_{M_*}}\le2^{M_*}$, independently of $N$. Also $t+\epsilon+\epsilon|x|\le2(t+\epsilon+\epsilon|z|)$ since $|x-z|<t$ and $\epsilon\le1$. Thus $$|(f*\psi_t)(z)|\frac{t^L}{(t+\epsilon+\epsilon|z|)^L}\le2^{L+M_*}CM^{\epsilon,L}_{\varphi,T}f(x).$$ Taking the supremum over these cone witnesses and tests proves assertion 2, with $C_1=C_1(n,\varphi,T,L)$ independent of $N$ and $\epsilon$. [F3, F5, algebra]

1.4 Good-set bound. Fix $p_0>0$, $\lambda>0$, $N$ large enough for the estimate below, $0<\epsilon\le1/2$, and $x$ with $M^{\epsilon,L}_Nf(x)<\lambda M^{\epsilon,L}_{\varphi,1}f(x)$. This condition forces $M^{\epsilon,L}_{\varphi,1}f(x)<\infty$: put $A=P_N(\varphi)>0$ and $\varphi_0=\varphi/A\in\mathcal F_N$. For every aperture-one witness $(t,y)$ at $x$, $v=(x-y)/t$ has $|v|<1$, and the translated kernel $\Psi(w)=\varphi_0(w-v)$ satisfies $P_N(\Psi)\le2^N$ by [F5]. Thus $\Psi/2^N\in\mathcal F_N$, $(f*\Psi_t)(x)=(f*(\varphi_0)_t)(y)$, and the denominator comparison $t+\epsilon+\epsilon|x|\le2(t+\epsilon+\epsilon|y|)$ gives $$M^{\epsilon,L}_Nf(x)\ge2^{-N-L}A^{-1}M^{\epsilon,L}_{\varphi,1}f(x).$$ In particular an infinite right-hand side would force an infinite left-hand side, contrary to the strict good-set inequality. If the aperture-one quantity is positive, its finiteness lets us choose $t\in(0,1/\epsilon)$ and $y$ with $|x-y|<t$ such that $$M^{\epsilon,L}_{\varphi,1}f(x)\le2|h(y)|\frac{t^L}{(t+\epsilon+\epsilon|y|)^L},\qquad h=f*\varphi_t.$$ If the aperture-one quantity is zero, the strict good-set inequality is impossible because $M^{\epsilon,L}_Nf(x)\ge0$. With $c=2^Lc_{N,\varphi}$, [F5] gives $$t\sup_{|z-y|<rt}|\nabla h(z)|\le c\,M^{\epsilon,L}_Nf(x)\,\frac{(t+\epsilon+\epsilon|y|)^L}{t^L}\qquad(0<r\le1).$$ Indeed, $t\partial_jh(z)=(f*\Psi^z_t)(x)$ for the translated derivative test function $\Psi^z$, whose translation length is at most $2$; its $P_N$ seminorm is at most $c_{N,\varphi}$. Also $t+\epsilon+\epsilon|x|\le2(t+\epsilon+\epsilon|y|)$ because $|x-y|<t$ and $\epsilon\le1$. The mean value theorem and the good-set hypothesis now give $$|h(x')-h(y)|\le cr\lambda M^{\epsilon,L}_{\varphi,1}f(x) \frac{(t+\epsilon+\epsilon|y|)^L}{t^L}\qquad(x'\in B(y,rt)).$$ Choose $0<r\le1$ so $cr\lambda\le1/4$. The saturation estimate yields $|h(x')|\ge\tfrac14M^{\epsilon,L}_{\varphi,1}f(x)(t+\epsilon+\epsilon|y|)^L/t^L\ge\tfrac14M^{\epsilon,L}_{\varphi,1}f(x)$ on $B(y,rt)$, and $|h(x')|\le M^0_\varphi f(x')$. Thus, using the ball inclusion and [F4], $$M^{\epsilon,L}_{\varphi,1}f(x)^{p_0} \le4^{p_0}\Bigl(\frac{1+r}{r}\Bigr)^n \frac1{\lambda(B(x,(1+r)t))}\int_{B(x,(1+r)t)}(M^0_\varphi f)^{p_0}.$$ By [F7], $(M^0_\varphi f)^{p_0}$ is Borel, so the extended average defined before assertion 1 applies even if it is not locally integrable. The displayed average is at most $\widetilde M((M^0_\varphi f)^{p_0})(x)$, so assertion 4 follows with $C_3=4((1+r)/r)^{n/p_0}$. [F5, F7, F4, algebra]

1.5 Removing truncation. For fixed $L,T,N$ and every fixed admissible witness, the weight $t^L/(t+\epsilon+\epsilon|z|)^L$ increases to $1$ as $\epsilon\downarrow0$, and the permitted scale range increases to all $t>0$. Hence the radial, aperture-one and tangential truncated functions increase to their corresponding untruncated suprema. The same argument, also taking the supremum over $\psi\in\mathcal F_N$, gives $M_N^{\epsilon,L}f(x)\uparrow M_Nf(x)$. The strict cone $|z-x|<t$ has the same supremum as the closed cone $|z-x|\le t$, because each convolution is continuous and every boundary point is a limit of interior points at fixed $t$; therefore this limit is precisely the supplied nontangential $M_N$. [given, F7, algebra]

2.1 Untruncated good-set estimate. Let $x$ satisfy $M_Nf(x)\le\lambda M^{*,1}_\varphi f(x)<\infty$, with $N\ge1$. If $M^{*,1}_\varphi f(x)=0$, the asserted bound is immediate; otherwise, by definition of the supremum choose $t>0,y$ with $|x-y|<t$ and $|h(y)|\ge\tfrac12M^{*,1}_\varphi f(x)$, where $h=f*\varphi_t$. As in step 1.4 but without truncation weights, $t\sup_{|z-y|<rt}|\nabla h(z)|\le c_{N,\varphi}M_Nf(x)$ by [F5]. Choose $r\le1$ so $c_{N,\varphi}r\lambda\le1/4$. The mean value theorem gives $|h(z)|\ge\tfrac14M^{*,1}_\varphi f(x)$ on $B(y,rt)$, and $|h(z)|\le M^0_\varphi f(z)$. Using [F4], the ball inclusion and the extended average $\widetilde M$ defined in step 1.4 yields $$M^{*,1}_\varphi f(x)^{p_0}\le 4^{p_0}\Bigl(\frac{1+r}{r}\Bigr)^n \widetilde M((M^0_\varphi f)^{p_0})(x).$$ This is assertion 5 with $N_3=1$ and $C_4=4((1+r)/r)^{n/p_0}$. [step 1.4, F5, F4, algebra]



3.1 Conclusion. Step 1.1 gives the finiteness and pointwise decay of the aperture-one truncated function; step 1.3 gives the pointwise comparison of the truncated grand maximal function with the truncated tangential one, with constants independent of $\epsilon$; step 1.2 gives the tangential-to-aperture-one comparison via the Hardy-Littlewood maximal operator; step 1.4 gives the truncated good-set bound and step 2.1 the untruncated one. Step 1.5 proves the stated monotone limits. [step 1.1, step 1.3, step 1.2, step 1.4, step 2.1, step 1.5] ∎
