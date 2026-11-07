---
id: cor-smooth-number-density-in-almost-all-growing-short-intervals
kind: corollary
title: Smooth-number asymptotic in almost all growing short intervals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-short-interval-sum-of-an-arithmetic-function
- def-y-smooth-integer-and-smooth-counting-function
- def-dickman-de-brujin-function
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- lem-y-smooth-indicator-is-multiplicative
- lem-dickman-smooth-density-for-bounded-parameters
- lem-finite-one-sided-maximal-averages-and-smoothing
- lem-short-interval-prime-sum-calculus
- thm-matomaki-radziwill-mean-on-almost-all-short-intervals
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
forward_refs:
- cex-smooth-interval-density-without-upper-length-control
---

## Statement

Let $\psi:\mathbb Z_{\ge2}\to(0,\infty)$ satisfy $\psi(x)\to\infty$ as $x\to\infty$, and fix $u>0$. Assume the upper growth condition

$$\limsup_{x\to\infty}\frac{\log(x+\psi(x))}{\log x}\le\max\{1,1/u\}.$$

For each integer $x\ge2$, let $N_u(x,\psi)$ count the positive integers $n$ with $x\le n\le x+\psi(x)$ and every prime divisor of $n$ at most $x^{1/u}$. Then there is a set $E\subseteq\mathbb Z_{\ge2}$ with $\#(E\cap[2,X])=o(X)$ such that $N_u(x,\psi)\sim\rho(u)\psi(x)$ as integer $x\to\infty$ outside $E$.

No monotonicity of $\psi$ is assumed. In particular this includes all growing lengths $\psi(x)\le x$. For $u\ge1$ the condition allows lengths at most $x^{1+o(1)}$, and for $0<u<1$ it allows lengths at most $x^{1/u+o(1)}$.

## Statement references

[[def-short-interval-sum-of-an-arithmetic-function]]

[[def-y-smooth-integer-and-smooth-counting-function]]

[[def-dickman-de-brujin-function]]

[[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[[lem-y-smooth-indicator-is-multiplicative]]

[[lem-dickman-smooth-density-for-bounded-parameters]]

[[lem-finite-one-sided-maximal-averages-and-smoothing]]

[[lem-short-interval-prime-sum-calculus]]

[[thm-matomaki-radziwill-mean-on-almost-all-short-intervals]]

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[F1] Smoothness, the indicator $f_y$, and the counting function $\Psi$ have their stated meanings. ([[def-y-smooth-integer-and-smooth-counting-function]], [[lem-y-smooth-indicator-is-multiplicative]])

[F2] The Dickman function is continuous, positive on $[0,\infty)$, equal to $1$ on $[0,1]$, and satisfies its delay equation. ([[def-dickman-de-brujin-function]], [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]])

[F3] On each bounded parameter range, $\Psi(z,y)=z\rho(\log z/\log y)+O_U(z/\log y+1)$. ([[lem-dickman-smooth-density-for-bounded-parameters]])

[F4] The finite one-sided maximal weak bound and block smoothing estimate hold. ([[lem-finite-one-sided-maximal-averages-and-smoothing]])

[F5] The quantitative MR statement is uniform in the real $1$-bounded multiplicative function, length and discrepancy parameter. Its full local proof remains a held supplier obligation; this corollary does not close that branch. ([[thm-matomaki-radziwill-mean-on-almost-all-short-intervals]], [[def-short-interval-sum-of-an-arithmetic-function]])

[F6] Reciprocal prime sums satisfy $\sum_{p\le z}1/p=\log\log z+b+O(1/\log z)$, uniformly for $z\ge3$. ([[lem-short-interval-prime-sum-calculus]])

## Proof

1.1 First consider any integer start with $h=\psi(x)>x$ and write $y=x^{1/u}$, $z=x+h$ and $v=u\log z/\log x$. The growth hypothesis bounds $v$ on a fixed compact interval for all sufficiently large $x$. If $u\ge1$, it forces $v\to u$; if $u<1$, it gives $v\le1+o(1)$, with $v\ge u$. In both cases continuity and the constant value on $[0,1]$ in [F2] give $\rho(v)-\rho(u)\to0$. Subtract the two global counting estimates from [F3] at $z$ and $x$, including at most one integer endpoint correction: $N_u(x,\psi)=h\rho(u)+z(\rho(v)-\rho(u))+O_u(z/\log x+1)$. Since $z/h<2$, this is $h\rho(u)+o(h)$. This conclusion is pointwise on all such long starts. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 For the remaining starts work on a dyadic block $X\le x<2X$, with $X$ a sufficiently large power of two and $\psi(x)\le x$. Freeze the two smooth cutoffs at $y_-=X^{1/u}$ and $y_+=(2X)^{1/u}$, and put $f=f_{y_-}$, extending both indicators by zero on nonpositive integers, and $D(n)=f_{y_+}(n)-f_{y_-}(n)\ge0$. If $D(n)\ne0$ with $X\le n\le4X$, some prime in $(y_-,y_+]$ divides $n$. A union bound and [F6] therefore give $\sum_{X\le n\le4X}D(n)\le4X\sum_{y_-<p\le y_+}1/p=O_u(X/\log X)$. For each actual starting point in this block, $f(n)\le f_{x^{1/u}}(n)\le f(n)+D(n)$. [given, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Let $m_X=\min\{\psi(x):x\in\mathbb Z,\ X\le x<2X\}$, which tends to infinity even without monotonicity. Put $H=\lfloor\min(\sqrt{m_X},X^{1/4})\rfloor$. Eventually $H\ge2$, $H\to\infty$, and $H/m_X\to0$. The function $f$ is real, multiplicative and $1$-bounded by [F1]. Apply [F5] at the same length $H$ on the two starting blocks $[X,2X]$ and $[2X,4X]$, with $\delta=(\log H)^{-1/200}$. Its discrepancy threshold tends to zero. The exceptional fractions are bounded by a constant times $(\log H)^{1/3+1/100}H^{-\delta/25}+(\log X)^{-1/100}$, which tends to zero. The long mean on either block tends to $\rho(u)$ by [F3], since each fixed endpoint scale has logarithmic parameter $u+O_u(1/\log X)$. The closed MR sum differs from the half-open average $A_Hf(t)$ by at most $1/H$. Consequently $r_X:=X^{-1}\sum_{t\in[X,4X]\cap\mathbb Z}|A_Hf(t)-\rho(u)|\to0$. [given, F1, F2, F3, F4, F5, F6, step 2.1, algebra]

4.1 Define $g(t)=|A_Hf(t)-\rho(u)|$ on the integer interval $[X,4X]$, and zero elsewhere; also restrict $D$ to that interval. Both have finite support. Put $\lambda_X=(r_X+1/\log X)^{1/2}$. Apply [F4] to $g$ and $D$, with maximum length $\lceil2X+1\rceil$ and threshold $\lambda_X$. Outside a set $E_X\subset[X,2X)\cap\mathbb Z$ of size $O_u(X(r_X+1/\log X)/\lambda_X)=o(X)$, every such average of either nonnegative function is at most $\lambda_X$. [given, F1, F2, F3, F4, F5, F6, step 3.1, algebra]

5.1 For a start outside $E_X$ with $h=\psi(x)\le x$, take $L=\lfloor h\rfloor+1$. Then $h\ge m_X$, $L\le2X+1$, and the integer indices in the closed interval $[x,x+h]$ are exactly $x,\ldots,x+L-1$. The smoothing estimate in [F4] gives $|A_Lf(x)-\rho(u)|\le A_Lg(x)+(H-1)/L\le\lambda_X+H/m_X$. Step 2.1 and the maximal bound on $D$ imply $|N_u(x,\psi)/L-\rho(u)|\le2\lambda_X+H/m_X\to0$, uniformly over these starts. Finally $L/h=1+O(1/m_X)$, so the same conclusion holds after normalization by $h$. [given, F1, F2, F3, F4, F5, F6, step 4.1, algebra]

6.1 Let $E$ be the union of $E_X$ over dyadic blocks, together with finitely many initially excluded starts. Since $\#E_X=o(X)$, one has $\#(E\cap[2,Z])=o(Z)$: for any positive tolerance, all sufficiently late dyadic blocks have relative exceptional count below it, their lengths sum to $O(Z)$, and the finitely many earlier blocks contribute $o(Z)$. Step 5.1 proves the desired normalized limit at every short start outside $E$, while step 1.1 proves it at every sufficiently large long start. Positivity of $\rho(u)$ in [F2] converts the additive normalized limit into the stated asymptotic equivalence. [given, F1, F2, F3, F4, F5, F6, step 5.1, algebra] ∎

## Remarks

The displayed Corollary6 source formulation only writes $\psi(x)\to\infty$; that literal unrestricted wording admits a counterexample. The explicit growth condition above retains all genuinely short lengths and the further lengths allowed by the Dickman plateau. The unrestricted counterexample and its original complete calculation are preserved in [[cex-smooth-interval-density-without-upper-length-control]]. The proof here also freezes the moving cutoff and handles arbitrary variable lengths by a finite maximal estimate; it does not treat the source's one-line substitution as a completed local proof of these steps.
