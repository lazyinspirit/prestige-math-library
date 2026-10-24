---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-maximal-truncations-are-weak-one-one-and-strong-lp and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-5; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"52cb3f3cd4aa8f72f68271c685d20b97d67b5e4d30689d6a679f04c70ac54152","evidence":["research/frontier-38-owner-30-reader-5.md","research/frontier-38-owner-30-reader-findings-5.json","research/frontier-38-owner-30-dispatch/reader-reader-5.result.json","research/frontier-38-owner-30-step5-hash-5-post-5a.json","research/frontier-38-owner-30-alpha-batch-5-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-5.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-maximal-truncations-are-weak-one-one-and-strong-lp.md","historical_raw_sha256":"6b69e2162c158ab600d3fc18ce690d136615258ac259dd56a5d94fa252f09093","transformations":["publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:48:14.106Z"}}
id: thm-maximal-truncations-are-weak-one-one-and-strong-lp
kind: theorem
title: "Maximal truncations: weak (1,1) and strong Lp bounds"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, def-calderon-zygmund-kernel-and-principal-value-operator, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, def-l-one-of-a-measure, def-maximal-truncated-singular-integral, def-standard-holder-calderon-zygmund-kernel, lem-calderon-zygmund-decomposition-at-height-lambda, lem-cotlar-inequality-for-maximal-truncations, lem-holder-cz-kernels-satisfy-hormander-cancellation, thm-calderon-zygmund-singular-integrals-are-bounded-on-lp, thm-chebyshev-markov-inequality-for-the-integral, thm-hardy-littlewood-maximal-inequality-for-balls, thm-lebesgue-measure-under-dilations-and-reflections, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-fatou-lemma, thm-complex-holder-minkowski-and-the-quotient-norm, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.5 and its proof, printed pp. 366–371, and Corollary 5.3.7, printed p. 371; conditions (5.3.4) and (5.3.12), printed pp. 358–359"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 3.8 and Remark 3.9(b) on the weak (1,1) criterion for maximal singular integrals, printed pp. 11–12"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<\delta\le1$, and let $k$, $W$, $T$
satisfy the hypotheses of
[[lem-cotlar-inequality-for-maximal-truncations]]: $k$ is measurable and
locally integrable on $\mathbb R^n\setminus\{0\}$ with
$$|k(x)|\le A_1|x|^{-n},\qquad |k(x-y)-k(x)|\le A_2'|y|^\delta|x|^{-n-\delta}\ \ (|x|\ge2|y|>0),$$
and cancellation $\sup_{0<r<R}\bigl|\int_{r<|x|<R}k(x)\,dx\bigr|\le A_3$; $W$ is
a principal-value distribution for $k$; and $T$, the convolution operator with
$W$, is $L^2$-bounded with norm $B$ and satisfies the off-support
representation (3) of
[[def-calderon-zygmund-kernel-and-principal-value-operator]] with kernel $k$
(so $T$ is also a Calderón–Zygmund operator with kernel $k$). Then $T^{**}$ and
$T^*$ are of weak type $(1,1)$: there is a constant $C_{n,\delta}$, depending
only on $n$ and on the fixed exponent $\delta$, with
$$|\{|T^{**}f|>\lambda\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1 \qquad(f\in L^1(\mathbb R^n),\ \lambda>0),$$
and for every $1<p<\infty$ there is a constant $C_{n,p,\delta}$ with
$$\|T^{**}f\|_p\le C_{n,p,\delta}(A_1+A_2'+A_3+B)\max\bigl(p,(p-1)^{-1}\bigr) \|f\|_p\qquad(f\in L^p(\mathbb R^n)).$$
The same bounds hold for $T^*$, which satisfies $T^*f\le T^{**}f$ pointwise.
The proof consumes the Hörmander constant
$A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$ supplied by the standard $\delta$-Hölder
bound; since $A_2\le C_{n,\delta}A_2'$, this is why the constants depend on the
fixed exponent $\delta$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $0<\delta\le1$, finite constants $A_1,A_2',A_3,B\ge0$; the kernel $k$, principal-value distribution $W$ and $L^2$-bounded convolution operator $T$ with off-support representation as in the statement; $f\in L^1(\mathbb R^n)$ and $\lambda>0$; a height $\mu=\gamma\lambda$ with $\gamma>0$ to be fixed; the centered Hardy–Littlewood maximal operator $M$.

[F1] For $1\le p<\infty$ and $g\in L^p$ the integrals defining $T_\varepsilon g$ and $T^{(\varepsilon,N)}g$ converge absolutely at every point, $T^*g=\sup_{\varepsilon>0}|T_\varepsilon g|$, $T^{**}g=\sup_{0<\varepsilon<N<\infty}|T^{(\varepsilon,N)}g|$, and $T^*g\le T^{**}g\le2T^*g$ pointwise ([[def-maximal-truncated-singular-integral]]).

[F2] Cotlar's inequality: for every $u\in\mathcal S(\mathbb R^n)$ and almost every $x$, $T^*u(x)\le M(Tu)(x)+C_0(A_1+A_2'+A_3)Mu(x)$ with a constant $C_0=C_{n,\delta}$ ([[lem-cotlar-inequality-for-maximal-truncations]]).

[F3] Calderón–Zygmund decomposition at height $\mu$: $f=g+\sum_jb_j$ almost everywhere, with the maximal dyadic cubes $Q_j$ pairwise disjoint, $\sum_j|Q_j|\le\mu^{-1}\|f\|_1$, $b_j$ supported in $Q_j$ with $\int b_j=0$ and $\|b_j\|_1\le2^{n+1}\mu|Q_j|$, and the good part satisfying $\|g\|_1\le\|f\|_1$, $|g|\le2^n\mu$ and $\|g\|_2^2\le2^n\mu\|f\|_1$ ([[lem-calderon-zygmund-decomposition-at-height-lambda]]).

[F4] The pointwise size bound gives the annular condition with $A_1|S^{n-1}|\log2$, and the standard $\delta$-Hölder bound gives Hörmander's condition with $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$; hence $k$ is a Calderón–Zygmund kernel in the base sense and, since $T$ is a Calderón–Zygmund operator with kernel $k$, $T$ extends uniquely to a bounded operator on $L^p$ for $1<p<\infty$ with $\|Tu\|_p\le C_{n,p}(A_2+B)\max(p,(p-1)^{-1})\|u\|_p$ ([[lem-holder-cz-kernels-satisfy-hormander-cancellation]], [[def-standard-holder-calderon-zygmund-kernel]], [[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]]).

[F5] $M$ is the centered Hardy–Littlewood maximal operator: $|\{Mu>t\}|\le C_nt^{-1}\|u\|_1$ for $u\in L^1$, and $\|Mu\|_2\le C_M\|u\|_2$, $\|Mu\|_p\le C_{n,p}\max(p,(p-1)^{-1})\|u\|_p$ for $1<p<\infty$ ([[thm-hardy-littlewood-maximal-inequality-for-balls]], [[cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded]], [[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]).

[F6] Chebyshev's inequality; $|rE|=r^n|E|$ for measurable $E$; an $L^q$-convergent sequence has an almost-everywhere convergent subsequence; Tonelli's theorem applies to nonnegative product-measurable integrands; the $L^1$ convention is [[def-l-one-of-a-measure]] and Countable Choice is [[def-countable-choice]] ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).



[F7] Hölder holds for complex $L^p$ functions; $C_c^\infty$ is dense in finite-exponent Euclidean $L^p$ under Countable Choice; dominated convergence applies under an integrable majorant, and Fatou applies to nonnegative measurable functions. ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]], [[thm-dominated-convergence]], [[thm-fatou-lemma]])

## Proof

**Proof technique:** direct.

1.1 Cotlar's inequality extends to $L^2$ inputs. Choose $h_m\in C_c^\infty$ with $h_m\to h$ in $L^2$ by [F7]. For each $t>0$, the size bound makes $k_t=k\mathbf1_{\{|\cdot|>t\}}\in L^2$, so Hölder gives $|T_t(h_m-h)(x)|\le\|k_t\|_2\|h_m-h\|_2\to0$ for every $x$. Sublinearity and the $L^2$ bound of $M$ imply $M(Th_m)\to M(Th)$ and $Mh_m\to Mh$ in $L^2$; [F6] gives a common almost-everywhere convergent subsequence for these two families. Outside the countable union of the exceptional sets for [F2], pass its bound for each $h_m$ to the limit at every $t>0$, then take the supremum to get $T^*h\le M(Th)+C_0(A_1+A_2'+A_3)Mh$ almost everywhere. For every finite-exponent input, dominated convergence shows that $t\mapsto T_th(x)$ is continuous on $(0,\infty)$ for every $x$: nearby truncations are dominated by $|k(z)h(x-z)|\mathbf1_{\{|z|>t/2\}}$, integrable by [F1]. Thus both maximal suprema can be taken over rational parameters and are measurable. [F1, F2, F5, F6, F7, given]

1.2 Geometry of the dilated cubes. For each maximal cube $Q_j$ with centre $c_j$ and side length $\ell_j$, let $Q_j^*$ be the cube concentric with $Q_j$ and with side length $5\sqrt n\,\ell_j$; then $|Q_j^*|=(5\sqrt n)^n|Q_j|$ by the dilation identity [F6]. If $x\notin\bigcup_kQ_k^*$ and $y\in Q_j$, then $|x-c_j|_\infty>\tfrac{5\sqrt n}{2}\ell_j$, so $|x-c_j|\ge\tfrac{5\sqrt n}{2}\ell_j>2\cdot\tfrac{\sqrt n}{2}\ell_j\ge2|y-c_j|$; in particular $|x-y|\ge|x-c_j|-|y-c_j|\ge\tfrac{\sqrt n}{2}\ell_j>0$. Moreover, if $t>0$ and $j$ belongs to $J_3(x,t):=\{j:\exists\,y_0\in Q_j,\ |x-y_0|=t\}$, then $t\ge|x-c_j|-|y_0-c_j|\ge(\tfrac{5\sqrt n}{2}-\tfrac{\sqrt n}{2})\ell_j=2\sqrt n\,\ell_j$, and consequently every $y\in Q_j$ satisfies $\tfrac t2\le t-\sqrt n\,\ell_j\le|x-y|\le t+\sqrt n\,\ell_j\le\tfrac{3t}{2}$; hence $\bigcup_{j\in J_3(x,t)}Q_j\subseteq B(x,\tfrac{3t}{2})\setminus B(x,\tfrac t2)$. [F3, F6, algebra]

2.1 Splitting the truncated bad part. Fix $x\notin\bigcup_kQ_k^*$ and $t>0$, and split the indices into $J_1,J_2,J_3$ according to whether $|x-y|<t$ for all $y\in Q_j$, $|x-y|>t$ for all $y\in Q_j$, or $|x-y|=t$ for some $y\in Q_j$. Each index lies in exactly one of the three classes because $y\mapsto|x-y|$ is continuous on the connected cube. For $j\in J_1$ the integrand of $T_tb(x)$ vanishes on $Q_j$; for $j\in J_2$ one has $|k(x-y)|\le A_1t^{-n}$ on $Q_j$; for $j\in J_3$ step 1.2 gives $|k(x-y)|\le A_1(2/t)^n$ on $Q_j$. Hence $\sum_j\int_{Q_j\cap\{|x-y|>t\}}|k(x-y)||b_j(y)|\,dy\le\sum_{j\in J_2\cup J_3}\int_{Q_j}|k(x-y)||b_j(y)|\,dy\le\max\{A_1t^{-n},A_1(2/t)^n\}\sum_j\|b_j\|_1<\infty$ by [F3], so the series converges absolutely and $T_tb(x)=\sum_j\int_{Q_j\cap\{|x-y|>t\}}k(x-y)b_j(y)\,dy$. For $j\in J_2$ the truncation is inactive on $Q_j$ and the mean-zero property of $b_j$ gives $\bigl|\int_{Q_j}k(x-y)b_j(y)\,dy\bigr|=\bigl|\int_{Q_j}[k(x-y)-k(x-c_j)]b_j(y)\,dy\bigr|$. For $j\in J_3$, put $c_j(t):=|Q_j|^{-1}\int_{Q_j}b_j(y)\mathbf 1_{\{|x-y|>t\}}(y)\,dy$; then $|c_j(t)|\le|Q_j|^{-1}\|b_j\|_1\le2^{n+1}\mu$ and, since $\int_{Q_j}(b_j\mathbf 1_{\{|x-y|>t\}}-c_j(t))=0$, $$\int_{Q_j}k(x-y)b_j(y)\mathbf 1_{\{|x-y|>t\}}(y)\,dy=\int_{Q_j}\bigl[k(x-y)-k(x-c_j)\bigr]\bigl(b_j\mathbf 1_{\{|x-y|>t\}}-c_j(t)\bigr)dy+c_j(t)\int_{Q_j}k(x-y)\,dy.$$ Summing, using $|b_j\mathbf 1-c_j(t)|\le|b_j|+2^{n+1}\mu$ on $Q_j$, and using step 1.2 with $\int_{\{|z|\in[t/2,3t/2]\}}|k(z)|dz\le A_1|S^{n-1}|\log3$, yields $$\sup_{t>0}|T_tb(x)|\le2E_1(x)+2^{n+1}\mu E_2(x)+C_n\mu A_1,$$ where $E_1(x):=\sum_j\int_{Q_j}|k(x-y)-k(x-c_j)||b_j(y)|\,dy$ and $E_2(x):=\sum_j\int_{Q_j}|k(x-y)-k(x-c_j)|\,dy$: the $J_2$ sum and the first $J_3$ sum together contribute at most $E_1+2^{n+1}\mu E_2$ (both $E_1$ and $E_2$ majorize their sub-sums over $J_2$ and $J_3$; if one of them is infinite the displayed inequality is trivial), while $\sum_{j\in J_3}|c_j(t)|\int_{Q_j}|k(x-y)|dy\le2^{n+1}\mu\int_{\{|z|\in[t/2,3t/2]\}}|k(z)|dz$ by the containment of step 1.2 and the disjointness of the cubes. Since $T^{(\varepsilon,N)}b=T_\varepsilon b-T_Nb$, we obtain $T^{**}b(x)\le2\sup_{t>0}|T_tb(x)|\le4E_1(x)+2^{n+2}\mu E_2(x)+C_n\mu A_1$ at every such $x$ (with $C_n$ denoting a dimensional constant, as everywhere). [F1, F3, step 1.2, algebra]

2.2 Integrating $E_1$ and $E_2$ off the dilated cubes. By step 1.2, for $x\notin Q_j^*$ and $y\in Q_j$ one has $|x-c_j|\ge2|y-c_j|$, so in $\int_{(\bigcup_kQ_k^*)^c}E_1\le\sum_j\int_{Q_j}|b_j(y)|\bigl(\int_{|x-c_j|\ge2|y-c_j|}|k(x-y)-k(x-c_j)|\,dx\bigr)dy$ the inner integral is at most $A_2$ by Hörmander's condition, giving $\int_{(\bigcup_kQ_k^*)^c}E_1\le A_2\sum_j\|b_j\|_1\le A_22^{n+1}\mu\sum_j|Q_j|\le2^{n+1}A_2\|f\|_1$; similarly $\int_{(\bigcup_kQ_k^*)^c}E_2\le A_2\sum_j|Q_j|\le A_2\mu^{-1}\|f\|_1$. Both interchanges are Tonelli's theorem applied to nonnegative product-measurable integrands, and $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$ by [F4]. [F3, F4, F6, step 1.2]

3.1 The bad part is controlled off the cubes. Choose $\gamma:=(K_n(A_1+A_2'+A_3+B))^{-1}$ with a dimensional constant $K_n$ large enough that the last term of step 2.1 satisfies $C_n\mu A_1=C_n\gamma\lambda A_1\le\lambda/3$; if $A_1+A_2'+A_3+B=0$ then $k=0$ and $T^{**}=0$, so the theorem is trivial, and otherwise $\gamma>0$ is well defined. Then $\lambda/2=\lambda/3+\lambda/12+\lambda/12$ and step 2.1 give $\{x\notin\bigcup_kQ_k^*:T^{**}b(x)>\lambda/2\}\subseteq\{4E_1>\lambda/12\}\cup\{2^{n+2}\mu E_2>\lambda/12\}$, so by Chebyshev's inequality and step 2.2, $$|\{x\notin\textstyle\bigcup_kQ_k^*:T^{**}b>\lambda/2\}|\le\frac{48}{\lambda}\int E_1+\frac{12\cdot2^{n+2}\mu}{\lambda}\int E_2\le C_nA_2\lambda^{-1}\|f\|_1\le C_{n,\delta}A_2'\lambda^{-1}\|f\|_1.$$ [F6, step 2.1, step 2.2, algebra]

4.1 The good part. By step 1.1 and [F1], $T^{**}g\le2T^*g\le2M(Tg)+2C_0(A_1+A_2'+A_3)Mg$ almost everywhere, and $\|Tg\|_2\le B\|g\|_2$ by the $L^2$ bound of $T$. Chebyshev's inequality, the $L^2$ bound of $M$ and $\|g\|_1\le\|f\|_1$ give $$|\{T^{**}g>\lambda/2\}|\le|\{M(Tg)>\lambda/8\}|+|\{Mg>\lambda/(8C_0(A_1+A_2'+A_3))\}|\le\frac{64}{\lambda^2}\|M(Tg)\|_2^2+\frac{8C_nC_0(A_1+A_2'+A_3)}{\lambda}\|f\|_1\le\frac{64C_M^2B^2}{\lambda^2}\|g\|_2^2+\frac{8C_nC_0(A_1+A_2'+A_3)}{\lambda}\|f\|_1\le C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1,$$ where the last step uses $\|g\|_2^2\le2^n\mu\|f\|_1=2^n\gamma\lambda\|f\|_1$ and $\gamma B^2\le B/K_n\le(A_1+A_2'+A_3+B)/K_n$ (in the degenerate case of step 3.1 the bound is trivial). [F3, F5, F6, step 1.1]

5.1 Weak $(1,1)$ for $f\in L^1\cap L^2$. Subadditivity of the supremum gives $T^{**}f\le T^{**}g+T^{**}b$ pointwise, so $$|\{|T^{**}f|>\lambda\}|\le|\{T^{**}g>\lambda/2\}|+\Bigl|\bigcup_kQ_k^*\Bigr|+|\{x\notin\textstyle\bigcup_kQ_k^*:T^{**}b>\lambda/2\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1,$$ because the union of cubes has measure at most $(5\sqrt n)^n\sum_j|Q_j|\le(5\sqrt n)^n\mu^{-1}\|f\|_1\le(5\sqrt n)^nK_n(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1$ by steps 1.2 and 3.1 and [F3], while steps 3.1 and 4.1 bound the other two terms by dimensional multiples of $(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1$. [F3, step 1.2, step 3.1, step 4.1, algebra]

6.1 For general $f\in L^1$, put $f_m=f\mathbf1_{B(0,m)}\mathbf1_{\{|f|\le m\}}\in L^1\cap L^2$. Then $f_m\to f$ in $L^1$ and $\|f_m\|_1\le\|f\|_1$. For every $0<\varepsilon<N$, the size bound gives $|T^{(\varepsilon,N)}(f_m-f)(x)|\le A_1\varepsilon^{-n}\|f_m-f\|_1\to0$ at every $x$. Therefore $T^{**}f(x)\le\liminf_m T^{**}f_m(x)$: each fixed truncation is bounded by this liminf, and then one takes its supremum. Fatou [F7] applied to superlevel indicators and step 5.1 give the weak $(1,1)$ bound; $T^*\le T^{**}$ transfers it to $T^*$. No subsequence selection is needed here. [F1, F7, step 5.1, algebra]

7.1 For $1<p<\infty$ and $f\in L^p\cap L^2$, step 1.1 gives $T^{**}f\le2M(Tf)+2C_0(A_1+A_2'+A_3)Mf$ almost everywhere. The strong $L^p$ bounds [F4,F5] and $A_2\le C_{n,\delta}A_2'$ yield $\|T^{**}f\|_p\le C_{n,p,\delta}(A_1+A_2'+A_3+B)\max(p,(p-1)^{-1})\|f\|_p$; additional factors depending on $p$ are included in $C_{n,p,\delta}$, as allowed by the statement. For general $f\in L^p$, the same bounded compact-support approximants $f_m$ converge in $L^p$ and satisfy $\|f_m\|_p\le\|f\|_p$. Every doubly truncated kernel lies in $L^{p'}$, so Hölder gives $T^{(\varepsilon,N)}f_m(x)\to T^{(\varepsilon,N)}f(x)$ at every $x$ for every parameter pair. Hence $T^{**}f\le\liminf_mT^{**}f_m$ pointwise, and Fatou [F7] applied to the $p$th powers extends the bound to all $L^p$. The comparison $T^*\le T^{**}$ gives its bound too. [F1, F4, F5, F7, step 1.1, step 6.1, algebra]

8.1 Steps 5.1 and 6.1 give the weak $(1,1)$ bound for $T^{**}$, and step 7.1 gives the strong $L^p$ bounds for $T^{**}$; the pointwise comparison $T^*\le T^{**}$ of [F1] transfers both to $T^*$. This proves the theorem. [F1, step 5.1, step 6.1, step 7.1] ∎
