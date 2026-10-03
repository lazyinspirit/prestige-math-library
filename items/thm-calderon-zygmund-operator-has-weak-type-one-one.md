---
id: thm-calderon-zygmund-operator-has-weak-type-one-one
kind: theorem
title: "Calderón–Zygmund operators are of weak type (1,1)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-l-one-of-a-measure, def-sublinear-operator-weak-and-strong-type-p-q, lem-calderon-zygmund-decomposition-at-height-lambda, lem-cz-bad-part-is-integrable-away-from-expanded-cubes, lem-cz-good-part-has-controlled-ltwo-image, thm-chebyshev-markov-inequality-for-the-integral, thm-lebesgue-measure-under-dilations-and-reflections, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fatou-lemma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.3, weak (1,1) part (5.3.13) and its proof, printed pp. 359–363"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 2.9 and its proof, printed pp. 8–9"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $T$ be a Calderón–Zygmund operator with kernel constants $A_1,A_2$ and $L^2$
norm $B$. Then for every $f\in L^1(\mathbb R^n)$ and every $\lambda>0$,
$$|\{|Tf|>\lambda\}|\le C_n(A_2+B)\lambda^{-1}\|f\|_1$$
with a dimensional constant $C_n$ independent of $T$, $f$ and $\lambda$;
equivalently, $T$ extends to a bounded operator
$L^1(\mathbb R^n)\to L^{1,\infty}(\mathbb R^n)$.

## Facts & Assumptions

**Given:** A Calderón–Zygmund operator $T$ with kernel constants $A_1,A_2$ and $L^2$ norm bound $B$; $f\in L^1(\mathbb R^n)$ and $\lambda>0$; a constant $\gamma>0$ to be fixed; Countable Choice.

[F1] $T$ is linear, $L^2$-bounded with $\|Th\|_2\le B\|h\|_2$, and has the off-support kernel representation with constants $A_1,A_2$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]]); weak type $(1,1)$ with constant $A$ means exactly the inequality $\mu(\{|Th|>\lambda\})\le A\lambda^{-1}\|h\|_1$ for all $h\in L^1$ and $\lambda>0$ ([[def-sublinear-operator-weak-and-strong-type-p-q]]).

[F2] The Calderón–Zygmund decomposition of $h\in L^1$ at height $\mu>0$ writes $h=g+\sum_jb_j$ a.e. with $\|g\|_1\le\|h\|_1$, $\|g\|_2^2\le2^n\mu\|h\|_1$, $|g|\le2^n\mu$ a.e., $\int b_j=0$, $\|b_j\|_1\le2^{n+1}\mu|Q_j|$ and $\sum_j|Q_j|\le\mu^{-1}\|h\|_1$ ([[lem-calderon-zygmund-decomposition-at-height-lambda]]); the good part satisfies $|\{|Tg|>\mu/2\}|\le4B^22^n\mu^{-1}\|h\|_1$ ([[lem-cz-good-part-has-controlled-ltwo-image]]). If additionally $b_j\in L^2$, then for the dilated cube $Q_j^*$ of side $2\sqrt n$ times that of $Q_j$ one has $\int_{\mathbb R^n\setminus Q_j^*}|Tb_j|\le A_2\|b_j\|_1$ ([[lem-cz-bad-part-is-integrable-away-from-expanded-cubes]]); step 1.1 verifies this additional hypothesis before the estimate is used.

[F3] Chebyshev: $\mu(\{|u|\ge t\})\le t^{-1}\int|u|$ for nonnegative measurable $|u|$ ([[thm-chebyshev-markov-inequality-for-the-integral]]); dilation: $\lambda(rE)=r^n\lambda(E)$ for measurable $E$ ([[thm-lebesgue-measure-under-dilations-and-reflections]]); Tonelli applies to nonnegative product-measurable integrands over $\sigma$-finite products ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the $L^1$ convention is [[def-l-one-of-a-measure]] and Countable Choice is [[def-countable-choice]].

[F4] For nonnegative measurable $v_r$, $\int\liminf_r v_r\le\liminf_r\int v_r$ ([[thm-fatou-lemma]]).

## Proof

**Proof technique:** direct.

1.1 Assume first $f\in L^1\cap L^2$ and $B>0$, and apply the decomposition [F2] at height $\mu=\gamma\lambda$ with $\gamma:=2^{-(n+1)}B^{-1}$; write $f=g+b$, $b=\sum_jb_j$. The series $\sum_jb_j$ converges in $L^2$: the $b_j$ are supported on the pairwise disjoint cubes $Q_j$, and $\|b_j\|_2^2\le2\int_{Q_j}|f|^2+2\,(2^n\gamma\lambda)^2|Q_j|$ by $b_j=(f-|Q_j|^{-1}\int_{Q_j}f)\mathbf 1_{Q_j}$ and $\bigl||Q_j|^{-1}\int_{Q_j}f\bigr|\le2^n\gamma\lambda$ (the value of $|g|$ on $Q_j$), so $\sum_j\|b_j\|_2^2\le2\|f\|_2^2+2\cdot4^n\gamma\lambda\|f\|_1<\infty$ because $f\in L^1\cap L^2$ and $\sum_j|Q_j|\le(\gamma\lambda)^{-1}\|f\|_1$; hence $b\in L^2$ and, by linearity and $L^2$-continuity of $T$ in [F1], $Tf=Tg+\sum_jTb_j$ as $L^2$ classes, so $|Tf|\le|Tg|+\sum_j|Tb_j|$ almost everywhere: choose image partial sums whose squared $L^2$ errors relative to $Tb$ are at most $2^{-3r}$. By Chebyshev the sets where the errors exceed $2^{-r}$ have measures at most $2^{-r}$; their tail unions have measures tending to zero, so this subsequence converges almost everywhere, and the finite triangle inequalities pass to the limit. The good part is controlled at the target level $\lambda/2$ directly: Chebyshev's inequality for $|Tg|^2$ at level $(\lambda/2)^2$, the $L^2$ bound $\|Tg\|_2\le B\|g\|_2$ of [F1] and the decomposition bound $\|g\|_2^2\le2^n\gamma\lambda\|f\|_1$ at height $\mu=\gamma\lambda$ from [F2] give $$|\{|Tg|>\lambda/2\}|\le\frac{4}{\lambda^2}\|Tg\|_2^2\le\frac{4B^2}{\lambda^2}\,2^n\gamma\lambda\|f\|_1=4B^22^n\gamma\lambda^{-1}\|f\|_1=2B\,\lambda^{-1}\|f\|_1,$$ the last equality by the choice $\gamma=2^{-(n+1)}B^{-1}$. [F1, F2, F3, algebra]

1.2 The dilated cubes satisfy $|Q_j^*|=(2\sqrt n)^n|Q_j|$ by the dilation identity [F3] applied to the concentric dilation of $Q_j$, so the union bound and the decomposition's summability give $$|\textstyle\bigcup_jQ_j^*|\le\sum_j|Q_j^*|\le(2\sqrt n)^n(\gamma\lambda)^{-1}\|f\|_1=2^{n+1}n^{n/2}2^nB\,\lambda^{-1}\|f\|_1.$$ [F2, F3, algebra]

1.3 On the complement, Tonelli's theorem for the nonnegative series and the bad-part bound of [F2] give $$\int_{\mathbb R^n\setminus\bigcup_jQ_j^*}\sum_j|Tb_j|\,dx=\sum_j\int_{\mathbb R^n\setminus\bigcup_kQ_k^*}|Tb_j|\,dx\le\sum_j\int_{\mathbb R^n\setminus Q_j^*}|Tb_j|\,dx\le A_2\sum_j\|b_j\|_1,$$ and the decomposition's bounds $\|b_j\|_1\le2^{n+1}\gamma\lambda|Q_j|$ and $\sum_j|Q_j|\le(\gamma\lambda)^{-1}\|f\|_1$ show this is at most $2^{n+1}\gamma\lambda(\gamma\lambda)^{-1}A_2\|f\|_1=2^{n+1}A_2\|f\|_1$; hence Chebyshev [F3] at level $\lambda/2$ yields $|\{x\notin\bigcup_jQ_j^*:\sum_j|Tb_j|>\lambda/2\}|\le2^{n+2}A_2\lambda^{-1}\|f\|_1$. [F2, F3, algebra]

2.1 Combining step 1.1 (which supplies the almost-everywhere inequality and the good-part estimate), step 1.2 and step 1.3, $$|\{|Tf|>\lambda\}|\le|\{|Tg|>\lambda/2\}|+\bigl|\textstyle\bigcup_jQ_j^*\bigr|+\bigl|\{x\text{ outside the cubes}:\sum_j|Tb_j|>\lambda/2\}\bigr|\le C_n(A_2+B)\lambda^{-1}\|f\|_1,$$ where $C_n:=\max\{2+2^{2n+1}n^{n/2},\,2^{n+2}\}$ is the maximum of the three dimensional constants collected from steps 1.1–1.3; this is the assertion for $f\in L^1\cap L^2$. [step 1.1, step 1.2, step 1.3, algebra]

3.1 Extension to all $f\in L^1$ and $B\ge0$. If $B=0$, extend the zero operator on $L^2$ by zero on $L^1$. Otherwise put $D=C_n(A_2+B)$ and $f_m=f\mathbf1_{B(0,m)}\mathbf1_{\{|f|\le m\}}\in L^1\cap L^2$. The integrable tails show $\|f_m-f\|_1\to0$, so step 2.1 applied to differences makes $u_m=Tf_m$ Cauchy in measure. Select increasing $m_r$ such that $|\{|u_{m_{r+1}}-u_{m_r}|>2^{-r}\}|\le2^{-r}$. The measure of the union of these exceptional sets for $r\ge R$ is at most $\sum_{r\ge R}2^{-r}\to0$; outside their null limsup the successive differences are eventually bounded by $2^{-r}$, so $u_{m_r}$ converges to a finite measurable limit, denoted $Tf$. For each $\lambda>0$, $\mathbf1_{\{|Tf|>\lambda\}}\le\liminf_r\mathbf1_{\{|Tf_{m_r}|>\lambda\}}$ almost everywhere. Fatou's lemma [F4] and step 2.1 yield $|\{|Tf|>\lambda\}|\le\liminf_r|\{|Tf_{m_r}|>\lambda\}|\le D\lambda^{-1}\|f\|_1$. The same difference estimate implies uniqueness of limits in measure and independence of the chosen $L^1\cap L^2$ approximants; it also proves linearity by approximating two inputs and their linear combination. For $f\in L^1\cap L^2$ these truncations converge in $L^2$, so $Tf$ agrees with the original operator. Thus the compatible linear extension satisfies the required weak $(1,1)$ bound on all of $L^1$. [F1, F4, step 2.1, algebra] ∎
