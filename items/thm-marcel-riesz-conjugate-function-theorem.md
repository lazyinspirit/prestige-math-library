---
id: thm-marcel-riesz-conjugate-function-theorem
kind: theorem
title: "The Marcel Riesz conjugate-function theorem on the circle"
status: draft
origin: pipeline
deps: [def-conjugate-function-on-the-circle, def-period-one-fourier-coefficients-partial-sums-and-convolution, lem-periodic-conjugate-square-identity, thm-parseval-identity-for-fourier-series, thm-riesz-thorin-interpolation, lem-complex-lp-duality-from-real-lp-duality, thm-fejer-convergence-in-lp, thm-fejer-uniform-convergence-for-continuous-periodic-functions, lem-fejer-kernel-is-a-positive-approximate-identity, def-cesaro-and-abel-means-of-a-fourier-series, def-dirichlet-and-fejer-kernels, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-complex-holder-minkowski-and-the-quotient-norm, cor-l-p-norm-recovery-by-unit-l-q-pairings, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-countable-choice, def-the-one-dimensional-torus-and-normalized-haar-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 10, Definition 10.1 and Lemma 10.2, printed pp. 57-58; Chapter 12, Corollary 12.2, pp. 70-71"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.3, square identity (5.1.23) and the power-interpolation proof of Theorem 5.1.7, printed pp. 320-322"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and the conventions of
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]] on the
torus $T=\mathbb R/\mathbb Z$ with normalized Haar measure $m$, so that
$m(T)=1$: characters $e_k(x)=e^{2\pi ikx}$, Fourier coefficients
$\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}\,dt$, trigonometric polynomials as
finite complex linear combinations of characters, and $C$ the conjugate
function of [[def-conjugate-function-on-the-circle]], with
$\widehat{Cf}(k)=-i\operatorname{sgn}(k)\widehat f(k)$ and $\operatorname{sgn}(0)=0$.

1. For every $1<p<\infty$ the operator $C$ extends uniquely from the
   trigonometric polynomials to a bounded complex-linear operator
   $C_p:L^p(T;\mathbb C)\to L^p(T;\mathbb C)$, and the extensions are mutually
   consistent: $C_pf=C_qf$ almost everywhere for every
   $f\in L^p(T;\mathbb C)\cap L^q(T;\mathbb C)$.
2. Constants lie in the kernel: $C_p1=0$ for every $1<p<\infty$.
3. No compatible endpoint extension exists: there is no bounded operator
   $U:L^1(T;\mathbb C)\to L^1(T;\mathbb C)$ with $Up=Cp$ for every
   trigonometric polynomial $p$, and no bounded operator
   $V:L^\infty(T;\mathbb C)\to L^\infty(T;\mathbb C)$ with $Vp=Cp$ for every
   trigonometric polynomial $p$. The failure is of strong-type boundedness;
   assertions about weak type $(1,1)$, maximal truncations or a bounded
   mean-oscillation range are not made here.

## Facts & Assumptions

**Given:** Countable Choice; the torus $T=\mathbb R/\mathbb Z$ with normalized Haar measure $m$; the conjugate function $C$ on trigonometric polynomials, $\widehat{Cf}(k)=-i\operatorname{sgn}(k)\widehat f(k)$.

[F1] On trigonometric polynomials $C$ is complex-linear, kills constants and preserves real-valuedness; the characters satisfy $e_ae_b=e_{a+b}$ and a trigonometric polynomial has only finitely many nonzero Fourier coefficients. [[def-conjugate-function-on-the-circle]] [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]

[F2] For every real mean-zero trigonometric polynomial $g$ one has $(Cg)^2=g^2+2C(gCg)$. [[lem-periodic-conjugate-square-identity]]

[F3] Parseval: for $f,g\in L^2(T;\mathbb C)$, $\|f\|_2^2=\sum_k|\widehat f(k)|^2$ and $\langle f,g\rangle=\int_Tf\overline g\,dm=\sum_k\widehat f(k)\overline{\widehat g(k)}$, the sums being finite-subset-net limits whose value is also the limit of the symmetric partial sums $\sum_{|k|\le N}$. [[thm-parseval-identity-for-fourier-series]]

[F4] Hölder and Minkowski for complex $L^p$: for conjugate exponents and complex measurable functions, the integral of a product is bounded by the product of the norms, and the norm of a sum by the sum of the norms. [[thm-complex-holder-minkowski-and-the-quotient-norm]]

[F5] Cesàro means: $\sigma_Nf=f*F_N$; for $1\le p<\infty$ and $f\in L^p(T;\mathbb C)$ one has $\|\sigma_Nf-f\|_p\to0$; for continuous one-periodic $f$ one has $\sup_x|\sigma_Nf(x)-f(x)|\to0$. [[def-cesaro-and-abel-means-of-a-fourier-series]] [[thm-fejer-convergence-in-lp]] [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]

[F6] The Fejér kernel satisfies $F_N\ge0$ and $\int_0^1F_N=1$. [[lem-fejer-kernel-is-a-positive-approximate-identity]]

[F7] For one-period integrable $f$, $S_Nf(x)=\int_0^1f(x-t)D_N(t)\,dt$ at every $x$, where $D_N$ is real-valued, even and $\int_0^1D_N=1$. [[lem-fourier-partial-sums-are-dirichlet-convolutions]] [[def-dirichlet-and-fejer-kernels]]

[F8] On the continuous periodic functions with the supremum norm, $\|S_N:C(T)\to C(T)\|=\int_0^1|D_N(t)|\,dt$, and for $N\ge1$ this number is at least $\frac{1}{3\pi}\log(N+1)$. [[lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant]]

[F9] For every measure space and $1\le p\le\infty$ the complex space $L^p$ is complete. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

[F10] Riesz–Thorin: a complex-linear map defined on the complex finite simple functions with finite-measure support which is bounded with constants $M_0,M_1$ between $L^{p_0}\to L^{q_0}$ and $L^{p_1}\to L^{q_1}$, $1\le p_i<\infty$, $1<q_i<\infty$, extends uniquely to a bounded operator $L^{p_\theta}\to L^{q_\theta}$ with norm at most $M_0^{1-\theta}M_1^\theta$. [[thm-riesz-thorin-interpolation]]

[F11] For a finite measure space and $1<p<\infty$, every bounded complex-linear functional on $L^p$ is integration against a unique $h\in L^q$ with the bilinear pairing, and the norms agree. [[lem-complex-lp-duality-from-real-lp-duality]]

[F12] Norm recovery: for $1\le p<\infty$ (and $p=1$ only for sigma-finite measures, which includes $T$), $\|f\|_p=\sup\{|\int fg\,dm|:\|g\|_q\le1\}$. [[cor-l-p-norm-recovery-by-unit-l-q-pairings]]

[F13] On a finite measure space, $\|f\|_p\le m(X)^{1/p-1/r}\|f\|_r$ for $1\le p<r<\infty$ and $\|f\|_p\le m(X)^{1/p}\|f\|_\infty$. [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]

[F14] Tonelli/Fubini for $L^1$ functions on sigma-finite product spaces. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof

**Proof technique:** direct.

1.1 Let $g$ be a real mean-zero trigonometric polynomial. By [F3] and the coefficient rule of [F1], $\|Cg\|_2^2=\sum_k|\widehat{Cg}(k)|^2=\sum_{k\ne0}|\widehat g(k)|^2=\sum_k|\widehat g(k)|^2=\|g\|_2^2$, where $\widehat g(0)=0$ is used in the middle equality; again by [F1], $Cg$ is real-valued with $\widehat{Cg}(0)=0$, so $Cg$ is real with zero mean. Moreover [F3] with the coefficient rule gives $\int_Tg\,Cg=\sum_k\widehat g(k)\overline{\widehat{Cg}(k)}=i\sum_k\operatorname{sgn}(k)|\widehat g(k)|^2$, which is $i$ times the real number $\sum_k\operatorname{sgn}(k)|\widehat g(k)|^2$; since $g\,Cg$ is real-valued, its integral is real, so $\int_Tg\,Cg=0$ and $g\,Cg$ is a real mean-zero trigonometric polynomial. [F1, F3, given, algebra]

1.2 For a trigonometric polynomial $h$ put $P_+h:=\sum_{k\ge0}\widehat h(k)e_k$, and for $a\in\mathbb Z$ put $M_ah:=e_ah$. Then $P_+$ is complex-linear, $(M_ah)\widehat{\ }(k)=\widehat h(k-a)$ for every $k$, and for every trigonometric polynomial $h$ and every $N\ge1$ one has $S_Nh=M_{-N}P_+M_Nh-M_{N+1}P_+M_{-(N+1)}h$. Indeed the definitions and $e_ae_b=e_{a+b}$ of [F1] give $(M_{-N}P_+M_Nh)\widehat{\ }(k)=\mathbf 1_{\{k\ge-N\}}\widehat h(k)$ and $(M_{N+1}P_+M_{-(N+1)}h)\widehat{\ }(k)=\mathbf 1_{\{k\ge N+1\}}\widehat h(k)$ for every $k$, and subtracting gives $\mathbf 1_{\{|k|\le N\}}\widehat h(k)=\widehat{S_Nh}(k)$ for every $k$, which identifies the two trigonometric polynomials. [F1, given, algebra]

1.3 For $f\in L^1(T)$ and $g\in L^\infty(T)$, $\int_T(S_Nf)g\,dm=\int_Tf(S_Ng)\,dm$. Indeed [F7] gives $S_Nf(x)=\int_0^1f(x-t)D_N(t)\,dt$ and $S_Ng(s)=\int_0^1g(s-u)D_N(u)\,du$ with $D_N$ real and even, so the double integral of $|f(x-t)D_N(t)g(x)|$ is at most $\|f\|_1\|g\|_\infty\|D_N\|_\infty<\infty$ and [F14] applies; the substitution $s=x-t$ and evenness of $D_N$ turn $\int\!\!\int f(x-t)D_N(t)g(x)\,dt\,dx$ into $\int f(s)\bigl(\int D_N(s-x)g(x)\,dx\bigr)ds=\int f(s)S_Ng(s)\,ds$. [F7, F14, given, algebra]

1.4 For $f\in L^1(T)$, each $\sigma_jf$ is a trigonometric polynomial with $\|\sigma_jf\|_1\le\|f\|_1$ and $\|\sigma_jf-f\|_1\to0$; for $f\in L^\infty(T)$, each $\sigma_jf$ is a trigonometric polynomial with $\|\sigma_jf\|_\infty\le\|f\|_\infty$ and $\|\sigma_jf-f\|_1\to0$. This is [F5] with $p=1$ together with [F6]: from $F_j\ge0$ and $\int_0^1F_j=1$ one gets $|\sigma_jf|=|f*F_j|\le|f|*F_j$, hence $\|\sigma_jf\|_1\le\|f\|_1$ and, for $f\in L^\infty$, $|\sigma_jf(x)|\le\|f\|_\infty$ for every $x$. [F5, F6, given, algebra]

1.5 For $g\in L^1(T)$ and every real $x$ one has $|S_Ng(x)|\le\|D_N\|_\infty\|g\|_1$ by [F7], hence $\|S_Ng\|_\infty\le\|D_N\|_\infty\|g\|_1$: on the unit ball of $L^1$, every $S_N$ is bounded by $\|D_N\|_\infty$. [F7, given, algebra]

2.1 Put $A_m:=\sup\{\|Cg\|_{2^m}/\|g\|_{2^m}:g$ a real mean-zero trigonometric polynomial, $g\ne0\}$. Then $A_1=1$ by 1.1, and $A_{m+1}\le A_m+\sqrt{A_m^2+1}\le2A_m+1$ for every $m\ge1$, so every $A_m$ is finite. Indeed fix $m$, put $p:=2^m$ and let $g\ne0$ be real with zero mean; the square identity [F2], the identification of $g\,Cg$ as a real mean-zero trigonometric polynomial in 1.1, and the definition of $A_m$ give $\|Cg\|_{2p}^2=\|(Cg)^2\|_p\le\|g\|_{2p}^2+2\|C(gCg)\|_p\le\|g\|_{2p}^2+2A_m\|g\,Cg\|_p$, while [F4] applied with exponents $2,2$ to the functions $|g|^p$ and $|Cg|^p$ gives $\|g\,Cg\|_p\le\|g\|_{2p}\|Cg\|_{2p}$. Dividing by $\|g\|_{2p}^2>0$ and writing $u:=\|Cg\|_{2p}/\|g\|_{2p}\ge0$ yields $u^2\le1+2A_mu$, hence $u\le A_m+\sqrt{A_m^2+1}$; taking the supremum over $g$ gives the recursion. [step 1.1, F2, F4, given, algebra]

2.2 Suppose a bounded linear $V:L^\infty(T)\to L^\infty(T)$ satisfies $Vp=Cp$ for every trigonometric polynomial $p$; put $M:=\|V\|$ and $Af:=\frac12\bigl((\int_Tf\,dm)\mathbf 1+f+iVf\bigr)$ for $f\in L^\infty$. Then $\|A\|_{L^\infty\to L^\infty}\le1+\frac12M$ and $Ap=P_+p$ for every trigonometric polynomial $p$, by 1.2: the multiplier of $\frac12(f+iVf)$ is $1$ on positive frequencies, $0$ on negative frequencies and $1/2$ at zero, and the half-mean term supplies the remaining $1/2$ at zero. For $h\in L^\infty$ with $\|h\|_\infty\le1$ let $h_j:=\sigma_jh$: by 1.4 these are trigonometric polynomials with $\|h_j\|_\infty\le1$ and $\|h_j-h\|_1\to0$, and 1.2 gives $S_Nh_j=M_{-N}AM_Nh_j-M_{N+1}AM_{-(N+1)}h_j$ because $M_{\pm a}h_j$ is again a trigonometric polynomial on which $A$ acts as $P_+$. Hence $\|S_Nh_j\|_\infty\le2\|A\|_{L^\infty\to L^\infty}\|h_j\|_\infty\le2+M$, while 1.5 with $\|h_j-h\|_1\to0$ gives $\|S_Nh_j-S_Nh\|_\infty\to0$, so $\|S_Nh\|_\infty\le2+M$. Therefore $\|S_N\|_{L^\infty\to L^\infty}\le2+M$ for every $N$, and in particular the continuous functions give $\|S_N\|_{C\to C}\le2+M$. [step 1.2, step 1.4, step 1.5, given, algebra]

2.3 By [F8], $\|S_N:C(T)\to C(T)\|=\int_0^1|D_N|\ge\frac1{3\pi}\log(N+1)$ for every $N\ge1$. Write $L_N:=\int_0^1|D_N|$. Given $\delta>0$, choose a continuous one-periodic $g$ with $\|g\|_\infty\le1$ and $\|S_Ng\|_\infty\ge L_N-\delta/2$. Choose $x_0$ with $|S_Ng(x_0)|=\|S_Ng\|_\infty$, let $c$ have modulus one with $cS_Ng(x_0)=|S_Ng(x_0)|$ (take $c=1$ if this value is zero), and set $\psi_j:=cF_j(\cdot-x_0)$. Then $\|\psi_j\|_1=1$ by [F6], and $\int_T\psi_j(S_Ng)\,dm=c\,\sigma_j(S_Ng)(x_0)\to\|S_Ng\|_\infty$ because $S_Ng$ is continuous and its Cesaro means converge uniformly by [F5]. By pairing symmetry from 1.3 and $\|g\|_\infty\le1$, for all sufficiently large $j$ we have $\|S_N\psi_j\|_1\ge|\int_T(S_N\psi_j)g\,dm|=|\int_T\psi_j(S_Ng)\,dm|\ge\|S_Ng\|_\infty-\delta/2\ge L_N-\delta$. Since $\|\psi_j\|_1=1$, this gives $\|S_N\|_{L^1\to L^1}\ge L_N-\delta$ for every $\delta>0$, hence $\|S_N\|_{L^1\to L^1}\ge L_N\ge\frac1{3\pi}\log(N+1)$. [step 1.3, step 1.4, F5, F6, F8, given, algebra]

3.1 Suppose a bounded linear $U:L^1(T)\to L^1(T)$ satisfies $Up=Cp$ for every trigonometric polynomial $p$; put $M:=\|U\|$ and define $A$ on $L^1$ by the same formula $Af:=\frac12\bigl((\int_Tf\,dm)\mathbf 1+f+iUf\bigr)$. Then $\|A\|_{L^1\to L^1}\le1+\frac12M$ and $Ap=P_+p$ for every trigonometric polynomial $p$, by the frequency check in 2.2. For $f\in L^1$ with $\|f\|_1\le1$ and its Cesàro means $f_j=\sigma_jf$, which are trigonometric polynomials with $\|f_j\|_1\le1$ by 1.4, identity 1.2 gives $S_Nf_j=M_{-N}AM_Nf_j-M_{N+1}AM_{-(N+1)}f_j$ and hence $\|S_Nf_j\|_1\le2\|A\|_{L^1\to L^1}\le2+M$; by 1.5, $\|S_Nf_j-S_Nf\|_1\le\|D_N\|_\infty\|f_j-f\|_1\to0$, so $\|S_Nf\|_1\le2+M$. Therefore $\|S_N\|_{L^1\to L^1}\le2+M$ for every $N$. [step 2.2, step 1.2, step 1.4, step 1.5, given, algebra]

3.2 No bounded $V:L^\infty(T)\to L^\infty(T)$ satisfies $Vp=Cp$ on trigonometric polynomials: such a $V$ would give $\|S_N\|_{C\to C}\le2+\|V\|$ for every $N$ by 2.2, while $\|S_N\|_{C\to C}\ge\frac1{3\pi}\log(N+1)$ grows without bound by 2.3, a contradiction for $N$ large. [step 2.2, step 2.3, given]

3.3 For every $m\ge1$ there is a finite constant $K_m$ with $\|Cf\|_{2^m}\le K_m\|f\|_{2^m}$ for every complex trigonometric polynomial $f$: writing $f=\operatorname{Re}f+i\operatorname{Im}f$ and applying 2.1 to the real mean-zero parts gives $\|C(\operatorname{Re}f)\|_{2^m}\le A_m\|\operatorname{Re}f-\overline{\operatorname{Re}f}\|_{2^m}\le2A_m\|\operatorname{Re}f\|_{2^m}\le2A_m\|f\|_{2^m}$, and likewise for the imaginary part, so $K_m:=4A_m$ works; here $\|\operatorname{Re}f-\overline{\operatorname{Re}f}\|\le2\|\operatorname{Re}f\|$ uses $|\overline{\operatorname{Re}f}|\le\|\operatorname{Re}f\|_1\le\|\operatorname{Re}f\|_{2^m}$ and [F4]. Since the trigonometric polynomials are dense in $L^{2^m}(T;\mathbb C)$ by [F5] and that space is complete by [F9], $C$ therefore has a unique extension to a bounded complex-linear operator $C^{(m)}$ on $L^{2^m}$ with $\|C^{(m)}\|\le K_m$; uniqueness holds because two continuous extensions of one map agree on the dense polynomial core. [step 2.1, F4, F5, F9, given, algebra]

4.1 No bounded $U:L^1(T)\to L^1(T)$ satisfies $Up=Cp$ on trigonometric polynomials: such a $U$ would give $\|S_N\|_{L^1\to L^1}\le2+\|U\|$ for every $N$ by 3.1, while $\|S_N\|_{L^1\to L^1}\ge\frac1{3\pi}\log(N+1)$ grows without bound by 2.3, a contradiction for $N$ large. [step 3.1, step 2.3, given]

4.2 For all $f,g\in L^2(T;\mathbb C)$ one has $\int_T(C^{(1)}f)g\,dm=-\int_Tf(C^{(1)}g)\,dm$ for the bilinear pairing. Indeed, for trigonometric polynomials $f,g$ the coefficient identity $\int_T(Cf)g=\sum_k\widehat{Cf}(k)\widehat g(-k)$ and the rule $\widehat{Cf}(k)=-i\operatorname{sgn}(k)\widehat f(k)$ of [F1] give $\int_T(Cf)g=-i\sum_k\operatorname{sgn}(k)\widehat f(k)\widehat g(-k)=-\int_Tf(Cg)$, since $\widehat{Cg}(-k)=-i\operatorname{sgn}(-k)\widehat g(-k)=i\operatorname{sgn}(k)\widehat g(-k)$; both pairings are bounded bilinear functionals on $L^2\times L^2$ (bounded by $\|f\|_2\|g\|_2$ times the norm of $C^{(1)}$), and they agree on the dense polynomial core, so they agree everywhere. [step 1.1, step 3.3, F1, given, algebra]

4.3 Let $p\in[2,\infty)$. If $p=2^k$, set $C_p:=C^{(k)}$. Otherwise choose $m\ge1$ with $2^m<p<2^{m+1}$ and let $T$ be $C^{(1)}$ restricted to the complex finite simple functions on $T$. For $r=2^m$ and $r=2^{m+1}$, approximate a simple function $h$ by trigonometric polynomials in $L^r$ using [F5]; since $r\ge2$ and $m(T)=1$, [F13] gives convergence in $L^2$ as well. The extensions therefore satisfy $C^{(1)}h=C^{(m)}h$ and $C^{(1)}h=C^{(m+1)}h$ as $L^2$ classes, so $T$ has the endpoint bounds $K_m,K_{m+1}$. Applying [F10] gives an extension $C_p$ with $\|C_p\|\le K_m^{1-\theta}K_{m+1}^{\theta}$, where $\frac1p=\frac{1-\theta}{2^m}+\frac{\theta}{2^{m+1}}$. It agrees with $C$ on polynomials: uniformly approximate a polynomial $P$ by finite simple functions $h_j$; then $C_ph_j=C^{(m+1)}h_j\to C^{(m+1)}P=CP$ in $L^{2^{m+1}}$, hence in $L^p$ by [F13], while boundedness gives $C_ph_j\to C_pP$ in $L^p$. [step 3.3, F5, F10, F13, given, algebra]

5.1 Let $1<p<2$ and $q:=\frac{p}{p-1}>2$, so that 4.3 gives a bounded operator $C_q$ on $L^q$ with norm $K_q$. For $f\in L^p$ the formula $\Lambda_f(\psi):=-\int_Tf(C_q\psi)\,dm$ defines a complex-linear functional on $L^q$, bounded by $\|\Lambda_f\|\le K_q\|f\|_p$ because [F4] bounds $|\Lambda_f(\psi)|\le\|f\|_p\|C_q\psi\|_q\le K_q\|f\|_p\|\psi\|_q$; by [F11] there is a unique $h\in L^p$ with $\Lambda_f(\psi)=\int_T\psi h\,dm$ for all $\psi\in L^q$ and $\|h\|_p=\|\Lambda_f\|\le K_q\|f\|_p$. Put $C_pf:=h$: then $C_p$ is complex-linear and bounded with $\|C_p\|\le K_q$. It extends the polynomial core, because for a trigonometric polynomial $f$ and any $\psi\in L^q$ the defining identity, the consistency of 4.3 and the skew-adjointness of 4.2 give $\int_T(C_pf)\psi\,dm=-\int_Tf(C_q\psi)\,dm=-\int_Tf(C^{(1)}\psi)\,dm=\int_T(Cf)\psi\,dm$, so $C_pf=Cf$ by the norm recovery [F12] applied to the difference in $L^p$. [step 4.2, step 4.3, F4, F11, F12, given, algebra]

6.1 Collecting: for every $1<p<\infty$ the operator $C_p$ of 4.3 (for $p\ge2$) and of 5.1 (for $1<p<2$) is a bounded complex-linear extension of $C$ to $L^p(T;\mathbb C)$, and it is the only such extension because trigonometric polynomials are dense in $L^p$ for $p<\infty$ and continuous extensions of one map agree on a dense set. If $1<p\le q<\infty$ and $f\in L^p\cap L^q$, choose trigonometric polynomials $\phi_k\to f$ in $L^q$ using [F5]; [F13] gives convergence in $L^p$, and the bounded extensions agree on polynomials, so their images converge to the same $L^p$ limit. Thus $C_pf=C_qf$. Also $C_p1=0$ because $C$ kills constants by [F1]. By 3.2 there is no bounded compatible $L^\infty$ extension and by 4.1 no bounded compatible $L^1$ extension. This proves all three assertions. [step 3.2, step 4.1, step 4.3, step 5.1, F1, F5, F13, given] ∎
