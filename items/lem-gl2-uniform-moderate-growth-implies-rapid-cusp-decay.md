---
id: lem-gl2-uniform-moderate-growth-implies-rapid-cusp-decay
kind: lemma
title: "A Uniform Moderate-Growth Estimate Gives GL2 Cusp Decay"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-ftc-second-part
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, On the Rapid Decay of Cuspidal Automorphic Forms"
      url: "https://arxiv.org/pdf/1106.2149v1"
      locator: "§5, Theorem 5.13 and its preceding repeated-differentiation argument, printed pp. 27–28; the proof here specializes the argument to SL2 and gives the constants' dependence explicitly."
---

## Statement

Let $G=SL_2(\mathbb R)$, let $K=SO(2)$, and put
$$n_x=\begin{pmatrix}1&x\\0&1\end{pmatrix},\quad a_y=\begin{pmatrix}\sqrt y&0\\0&1/\sqrt y\end{pmatrix}\quad(y>0),\quad E=\begin{pmatrix}0&1\\0&0\end{pmatrix}.$$
Use the norm $\|g\|=\max(\|g\|_{\mathrm{op}},\|g^{-1}\|_{\mathrm{op}})$.
Fix a real basis $X_1,X_2,X_3$ of $\mathfrak{sl}_2(\mathbb R)$.
For a smooth function $\Phi:G^3\to\mathbb C$ write
$R_1(X)\Phi(g_1,g_2,g_3)=\left.\frac{d}{dt}\right|_{t=0}\Phi(g_1\exp(tX),g_2,g_3)$.
Assume that $\Phi(n_1g_1,g_2,g_3)=\Phi(g_1,g_2,g_3)$ and
$$\int_0^1\Phi(n_xg_1,g_2,g_3)\,dx=0\qquad(g_1,g_2,g_3\in G).$$
Assume also that there is a single $M\ge0$ such that, for every finite word
$D$ in $R_1(X_1),R_1(X_2),R_1(X_3)$, including the empty word,
there is $C_D<\infty$ with
$$|D\Phi(g_1,g_2,g_3)|\le C_D\|g_1\|^M\|g_2\|^M\|g_3\|^M.$$
Then, for each integer $r\ge0$, there is $A_r<\infty$ such that
$$|\Phi(n_xa_yk,g_2,g_3)|\le A_r y^{M/2-r}\|g_2\|^M\|g_3\|^M\qquad(x\in\mathbb R,\ y\ge1,\ k\in K).$$
Here $A_r$ is a fixed finite multiple of the maximum of $C_D$ over the
words of length $r$. In particular the diagonal restriction obeys, for
every real $N\ge0$, a bound
$$|\Phi(n_xa_yk,n_xa_yk,n_xa_yk)|\le B_N y^{-N}\qquad(0\le x\le1,\ y\ge1,\ k\in K).$$
All integrals are Riemann integrals of smooth functions on compact intervals.
No choice principle is assumed. The same conclusions hold uniformly for
a family of such functions when the indicated finitely many $C_D$ have
common bounds and the exponent $M$ is common.

## Statement references

[[thm-ftc-second-part|the fundamental theorem of calculus]]

## Facts & Assumptions

**Given:** $\Phi$, its periodicity and zero-average identities, the fixed exponent $M$, and the derivative bounds in the Statement.

[F1] [[thm-ftc-second-part]] gives $f(b)-f(a)=\int_a^bf'(t)\,dt$ for a continuously differentiable function; applying it to real and imaginary parts gives the complex version.

## Proof

**Given:** The data in the Statement, with $g_2,g_3$ fixed while estimating the first variable.

1.1 If a smooth one-periodic complex function $f$ has integral zero on $[0,1]$, then $f(x)=\int_0^1(f(x)-f(t))\,dt$ for $x\in[0,1]$. By [F1], $|f(x)-f(t)|\le|x-t|\sup_{[0,1]}|f'|\le\sup_{[0,1]}|f'|$. Hence $\sup|f|\le\sup|f'|$. Every positive-order derivative of a periodic smooth function also has integral zero. Iterating this inequality therefore gives $\sup|f|\le\sup|f^{(r)}|$ for each integer $r\ge0$. [given, F1, algebra]

1.2 Set $f(x)=\Phi(n_xa_yk,g_2,g_3)$. The hypotheses make it one-periodic with integral zero. Since $a_y^{-1}n_ta_y=n_{t/y}$, differentiation yields $f^{(r)}(x)=y^{-r}(R_1(\operatorname{Ad}(k^{-1})E)^r\Phi)(n_xa_yk,g_2,g_3)$. This formula follows first for $r=1$ from $n_{x+t}a_yk=n_xa_yk\exp((t/y)\operatorname{Ad}(k^{-1})E)$, and then by repeated differentiation of this one-parameter orbit. [given, algebra]

2.1 Expand $\operatorname{Ad}(k^{-1})E=\sum_{j=1}^3c_j(k)X_j$. The three coefficients are continuous on the compact group $K$, so their absolute values have a common finite upper bound $L$. Expanding the $r$th power gives at most $3^r$ words of length $r$, each with coefficient of modulus at most $L^r$. For $x\in[0,1]$ and $y\ge1$, submultiplicativity and $\|n_x\|\le2$, $\|a_y\|=\sqrt y$, $\|k\|=1$ give $\|n_xa_yk\|\le2\sqrt y$. The assumed derivative bounds and step 1.2 imply $|f^{(r)}(x)|\le y^{-r}3^rL^r2^M\max_{|D|=r}C_D\,y^{M/2}\|g_2\|^M\|g_3\|^M$. At $r=0$ use the empty word and interpret $3^0L^0=1$. [step 1.2, given, algebra]

3.1 Apply step 1.1 to the bound in step 2.1 and use periodicity to extend it to every real $x$. This proves the first asserted estimate with $A_r=3^rL^r2^M\max_{|D|=r}C_D$. The finite maximum and the explicit expansion show precisely which derivative bounds are needed. [step 1.1, step 2.1, algebra]

4.1 On the diagonal with $0\le x\le1$, the remaining two norms are each at most $2\sqrt y$. Step 3.1 therefore bounds the diagonal by $A_r2^{2M}y^{3M/2-r}$. Take the least nonnegative integer $r\ge N+3M/2$ to obtain the diagonal assertion. The same formulas give uniform constants for the families described in the Statement. Only finitely many derivative bounds are used for each asserted estimate. [step 3.1, algebra] ∎
