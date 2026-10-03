---
id: thm-calderon-zygmund-singular-integrals-are-bounded-on-lp
kind: theorem
title: "Calderón–Zygmund operators are bounded on Lp"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-monotone-convergence-for-the-integral, cor-l-p-norm-recovery-by-unit-l-q-pairings, def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-hilbert-space-adjoint, def-l-p-space-as-a-quotient-by-null-functions, def-sublinear-operator-weak-and-strong-type-p-q, lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality, thm-calderon-zygmund-operator-has-weak-type-one-one, thm-chebyshev-markov-inequality-for-the-integral, thm-complex-holder-minkowski-and-the-quotient-norm, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-layer-cake-formula-for-l-p-powers, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.3, (5.3.14) and its proof, printed pp. 359–363"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 2.10, printed p. 9"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $T$ be a Calderón–Zygmund operator with kernel constants $A_1,A_2$ and $L^2$
norm $B$. Then for every $1<p<\infty$, $T$ extends uniquely to a bounded operator
on $L^p(\mathbb R^n)$ with
$$\|Tf\|_p\le C_{n,p}(A_2+B)\max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p,$$
where $C_{n,p}$ depends only on $n$ and $p$. In fact $C_{n,p}$ may be chosen to be a dimensional constant $C_n$ independent of $p$.

## Facts & Assumptions

**Given:** A Calderón–Zygmund operator $T$ with kernel $k$, constants $A_1,A_2$ and $L^2$ norm bound $B$; an exponent $1<p<\infty$ with conjugate $p'$; a constant $\delta>0$; Countable Choice.

[F1] $T$ is linear, $L^2$-bounded with $\|Th\|_2\le B\|h\|_2$, and satisfies the off-support representation with kernel $k$ off the support of compactly supported $L^2$ inputs; the kernel obeys the annular bound $A_1$ and Hörmander's condition $A_2$, the latter invariant under reflection: $k^*(x):=\overline{k(-x)}$ also satisfies both bounds with the same constants ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F2] $T$ is of weak type $(1,1)$ with constant $C_n(A_2+B)$: $|\{|Th|>\lambda\}|\le C_n(A_2+B)\lambda^{-1}\|h\|_1$ for all $h\in L^1$, and $\|Th\|_2\le B\|h\|_2$ for $h\in L^2$ ([[thm-calderon-zygmund-operator-has-weak-type-one-one]]); weak and strong type are as in [[def-sublinear-operator-weak-and-strong-type-p-q]].

[F3] Chebyshev: $|\{|u|>t\}|\le t^{-2}\int|u|^2$ for measurable $u$; layer cake: $\|g\|_q^q=q\int_0^\infty t^{q-1}|\{|g|>t\}|dt$; Fubini applies to absolutely integrable complex kernels ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); Tonelli applies to nonnegative product-measurable integrands on $\sigma$-finite products ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-layer-cake-formula-for-l-p-powers]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the $L^p$ and $L^{p'}$ norms are the quotient norms of [[def-l-p-space-as-a-quotient-by-null-functions]], Hölder's inequality is [[thm-complex-holder-minkowski-and-the-quotient-norm]], and $C_c^\infty$ is dense in $L^p$ for finite $p$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F4] For $1\le p<\infty$ with conjugate $q$, $\|f\|_p=\sup\{|\int fg|:g\in L^q,\|g\|_q\le1\}$ ([[cor-l-p-norm-recovery-by-unit-l-q-pairings]]); the $L^2$ adjoint satisfies $\langle Th,g\rangle=\langle h,T^*g\rangle$ for the first-variable-linear pairing ([[def-hilbert-space-adjoint]]); Monotone convergence is [[thm-monotone-convergence-for-the-integral]]; the interpolation-and-duality lemma with explicit constants is [[lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality]].



## Proof

**Proof technique:** direct.

1.1 The adjoint kernel $k^*(x)=\overline{k(-x)}$ satisfies the annular bound and Hörmander's condition with the constants $A_1,A_2$: the annular integral of $|k^*|$ is that of $|k|$ under the reflection $x\mapsto-x$, and $|k^*(x-y)-k^*(x)|=|k(y-x)-k(-x)|=|\overline{k(y-x)}-\overline{k(-x)}|$, whose integral over $|x|\ge2|y|$ equals $\int_{|u|\ge2|y|}|k(u+y)-k(u)|du\le A_2$ by the substitution $u=-x$ and the Hörmander condition applied to $-y$. The off-support representation for $T^*$ also follows from that of $T$. For compactly supported $h\in L^2$ and a compact set $E$ disjoint from its support, $u(y)=\int\overline{k(x-y)}h(x)\,dx$ is absolutely convergent for almost every $y\in E$: integrating its absolute majorant over $E$ is bounded by $\|h\|_1\int_{E-\operatorname{supp}h}|k(-z)|\,dz<\infty$, since the difference set is compact and avoids zero. For a bounded test $g$ supported in $E$, Fubini in the kernel formula for $Tg$ gives $\langle Tg,h\rangle=\langle g,u\rangle$; absolute integrability follows from the same majorant times $\|g\|_\infty$. The adjoint identity then says $T^*h=u$ almost everywhere on $E$, since both are locally integrable and agree against all such tests. Exhausting the complement of the support by countably many compact sets proves exactly the required representation with $k^*$. Hence $T^*$, which is $L^2$-bounded with norm $B$ by [F4], is again a Calderón–Zygmund operator with constants $A_1,A_2,B$, and by [F2] both $T$ and $T^*$ are weak $(1,1)$ with constant $A:=C_n(A_2+B)$. [F1, F2, F4, given, algebra]

1.2 Sharp two-level interpolation. Let $S$ be any linear operator defined on $L^1+L^2$, weak $(1,1)$ with constant $A$ and $L^2$-bounded with constant $B$, and let $1<q<2$. For $f\in L^q$ and any $\delta>0$ put $f_0:=f\mathbf 1_{\{|f|>\delta t\}}$ and $f_1:=f\mathbf 1_{\{|f|\le\delta t\}}$ at height $t>0$; then $f_0\in L^1$ and $f_1\in L^2$, since $\|f_0\|_1\le(\delta t)^{1-q}\|f\|_q^q$ and $\|f_1\|_2^2\le(\delta t)^{2-q}\|f\|_q^q$. Hence $\{|Sf|>t\}\subseteq\{|Sf_0|>t/2\}\cup\{|Sf_1|>t/2\}$ and the weak $(1,1)$ bound for $Sf_0$ together with Chebyshev and the $L^2$ bound for $Sf_1$ give $|\{|Sf|>t\}|\le\frac{2A}{t}\int_{\{|f|>\delta t\}}|f|+\frac{4B^2}{t^2}\int_{\{|f|\le\delta t\}}|f|^2$. Integrating $t^{q-1}|\{|Sf|>t\}|$ over $(0,\infty)$ and exchanging the integrals by Tonelli gives $\|Sf\|_q^q\le q\bigl[\frac{2A\delta^{1-q}}{q-1}+\frac{4B^2\delta^{2-q}}{2-q}\bigr]\|f\|_q^q$, because $\int_0^{|f|/\delta}t^{q-2}dt=\frac{(|f|/\delta)^{q-1}}{q-1}$ and $\int_{|f|/\delta}^\infty t^{q-3}dt=\frac{(|f|/\delta)^{q-2}}{2-q}$; choosing $\delta:=A/(2B^2)$ when $A,B>0$ balances the two terms at a constant multiple of $A^{2-q}B^{2q-2}$, so that $$\bigl\|Sf\bigr\|_q\le C_q\,A^{\frac2q-1}B^{2-\frac2q}\|f\|_q\le C_q(A+B)\|f\|_q,$$ the last inequality because the exponents $\frac2q-1$ and $2-\frac2q$ are nonnegative and sum to one, so the weighted geometric mean is at most the sum; if $A=0$, let $\delta\downarrow0$, and if $B=0$, let $\delta\to\infty$ in the preceding inequality, obtaining $Sf=0$ in either case. [F1, F2, F3, algebra]

2.1 The case $1<p<2$: by step 1.1 the operator $T$ has weak $(1,1)$ constant $A=C_n(A_2+B)$ and $L^2$ norm $B$, so step 1.2 with $q=p$ gives $\|Tf\|_p\le C_p A^{2/p-1}B^{2-2/p}\|f\|_p\le C_{n,p}(A_2+B)\|f\|_p\le C_{n,p}(A_2+B)\max(p,(p-1)^{-1})\|f\|_p$ for every $f\in L^p$ (which lies in $L^1+L^2$ by the canonical split of step 1.2, so $Tf$ is defined). [F2, step 1.1, step 1.2, algebra]

2.2 The case $2<p<\infty$: apply step 1.2 with $q=p'$ to the adjoint $T^*$, which by step 1.1 has weak $(1,1)$ constant $A$ and $L^2$ norm $B$: for every $g\in L^{p'}$, $\|T^*g\|_{p'}\le C_{p'}(A_2+B)\|g\|_{p'}$. Then for $f\in L^p\cap L^2$ and $g\in L^{p'}\cap L^2$ with $\|g\|_{p'}\le1$, the adjoint identity and Hölder's inequality give $|\int(Tf)g|=|\langle f,T^*\overline g\rangle|\le\|f\|_p\|T^*\overline g\|_{p'}\le C_{p'}(A_2+B)\|f\|_p$, To establish $Tf\in L^p$ before using norm recovery, put $u=Tf\in L^2$, $E_N=B(0,N)\cap\{|u|\le N\}$ and $a_N=(\int_{E_N}|u|^p)^{1/p}$. If $a_N>0$, take $g_N=\mathbf1_{E_N}|u|^{p-1}\theta_u/a_N^{p-1}$, with $\theta_u=\overline u/|u|$ on $u\ne0$ and zero otherwise. This test is bounded on a finite-measure set, hence lies in $L^{p'}\cap L^2$, and satisfies $\|g_N\|_{p'}=1$, $\int ug_N=a_N$. The preceding pairing bound gives $a_N\le C_{p'}(A_2+B)\|f\|_p$; if $a_N=0$ the same inequality is immediate. Since $E_N$ increases to a full-measure set, monotone convergence gives $\|Tf\|_p\le C_{p'}(A_2+B)\|f\|_p$; since $C_c^\infty\subseteq L^p\cap L^2$ is dense in $L^p$, this bound extends uniquely to all of $L^p$, and $C_{p'}(A_2+B)\le C_{n,p}(A_2+B)\max(p,(p-1)^{-1})$. [F3, F4, step 1.1, step 1.2, algebra]

3.1 The exponent dependence can be made dimension-only. Put $D=A_2+B$. If $D=0$, then $B=0$ and $T=0$. Otherwise normalize $S=T/D$. Step 1.1 and the weak endpoint give weak $(1,1)$ constants at most $a_n=C_n$ for both $S$ and $S^*$, and their $L^2$ norms are at most one. The interpolation-and-duality lemma [F4] at $q=3/2$ and its conjugate $3$ gives $\|S\|_{3\to3},\|S^*\|_{3\to3}\le d_n$ with $d_n$ depending only on $n$. For $1<p\le2$, split $f=f\mathbf1_{\{|f|>t\}}+f\mathbf1_{\{|f|\le t\}}$. Weak $(1,1)$ on the first part and Chebyshev with the strong $(3,3)$ bound on the second yield $|\{|Sf|>t\}|\le2a_nt^{-1}\int_{|f|>t}|f|+8d_n^3t^{-3}\int_{|f|\le t}|f|^3$. Layer cake and Tonelli, as in step 1.2, give $\|Sf\|_p^p\le p[2a_n/(p-1)+8d_n^3/(3-p)]\|f\|_p^p\le K_n(p-1)^{-1}\|f\|_p^p$, with $K_n\ge1$ independent of $p$. The compatible $L^1$ and $L^3$ actions agree on their intersection by approximation with bounded compact-support functions in both norms. Thus $\|S\|_{p\to p}\le K_n/(p-1)$ for $1<p\le2$. Apply this estimate to $S^*$ at $p'=p/(p-1)$ and use the finite-support tests and density argument of step 2.2 to get $\|S\|_{p\to p}\le K_n(p-1)\le K_np$ for $p>2$. Consequently $\|T\|_{p\to p}\le K_nD\max(p,(p-1)^{-1})$ throughout the strict range. [F2, F3, F4, step 1.1, step 1.2, step 2.2, algebra]

4.1 Steps 2.1 and 2.2 prove boundedness and uniqueness in the two open ranges; the given $L^2$ bound handles $p=2$. Step 3.1 also proves the stronger bound with a dimensional constant independent of $p$, and hence the stated estimate. [F3, step 2.1, step 2.2, step 3.1] ∎
