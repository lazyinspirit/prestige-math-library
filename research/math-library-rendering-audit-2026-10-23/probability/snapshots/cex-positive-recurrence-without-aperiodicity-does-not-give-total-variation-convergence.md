---
id: cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence
kind: counterexample
title: "Positive recurrence without aperiodicity does not imply total-variation convergence"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-accessibility-communication-and-irreducibility
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-hitting-return-and-visit-times
  - def-positive-recurrent-and-null-recurrent-state
  - def-period-of-a-state
  - def-aperiodic-chain
  - def-total-variation-distance-for-probability-laws
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
proof_strategy: direct
---

## Statement refuted

Aperiodicity cannot be dropped from the total-variation convergence theorem.
The refuted claim is: *if $p$ is an irreducible positive-recurrent transition
matrix on a countable state space $E$ with invariant probability $\pi$, then
$\lVert p^{(n)}(x,\cdot)-\pi\rVert_{\mathrm{TV}}\to0$ for every $x\in E$.*
The deterministic directed three-cycle on $E=\{0,1,2\}$ refutes this. It is
irreducible, every state is positive recurrent with $\mathbb E_xT_x^+=3$, and
$\pi=(1/3,1/3,1/3)$ is invariant; but the $n$-step law from $0$ is the point
mass at $n\bmod3$, so

$$\bigl\lVert p^{(n)}(0,\cdot)-\pi\bigr\rVert_{\mathrm{TV}}=\tfrac23 \qquad\text{for every }n\ge0,$$

and the laws do not converge, although the Cesàro averages
$\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)$ do converge to $\pi(y)$. The failure is
therefore confined to ordinary time, and the period is exactly three.

## Facts & Assumptions

**Given:** AC; the one-point probability space $(\Omega,\mathcal F,\mathbb P)$ with $\Omega=\{\omega\}$; the process $X_n:=n\bmod3$ on it; the matrix $p(i,i+1)=1$ for $i\in\{0,1,2\}$ with indices modulo $3$ and all other entries $0$; and $\pi=(1/3,1/3,1/3)$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the general Cesàro supplier [F10], whose conclusion is verified independently for the present matrix in step 4.1. ([[def-axiom-of-choice]])

[F1] For a countable probability kernel, $p(x,y)=K(x,\{y\})$ and $p^{(n)}(x,y)=K^n(x,\{y\})$ for $n\in\mathbb N_0$, with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$ and $\sum_{y}p^{(n)}(x,y)=1$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] For $r,s\ge0$, $p^{(r+s)}(x,z)=\sum_{w\in E}p^{(r)}(x,w)p^{(s)}(w,z)$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F3] $x\to y$ means $p^{(n)}(x,y)>0$ for some $n\ge0$; states communicate when each is accessible from the other, and the chain is irreducible when every pair communicates. ([[def-accessibility-communication-and-irreducibility]])

[F4] On a countable state space a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F5] $T_x^+:=\inf\{n\ge1:X_n=x\}$, with infimum $+\infty$ over the empty set; for a process started at $x$ the later return times are assigned $+\infty$ if the preceding one is infinite. ([[def-hitting-return-and-visit-times]])

[F6] A recurrent state $x$ is positive recurrent when $\mathbb E_xT_x^+<+\infty$ and null recurrent when $\mathbb E_xT_x^+=+\infty$. ([[def-positive-recurrent-and-null-recurrent-state]])

[F7] $R_x=\{n\ge1:p^{(n)}(x,x)>0\}$ is the positive return set, and when it is nonempty $d(x)$ is the greatest positive integer dividing every element of $R_x$. ([[def-period-of-a-state]])

[F8] For an irreducible chain the state periods $d(x)$ agree, the common value is positive and is called $\operatorname{per}(p)$, and the chain is aperiodic when $\operatorname{per}(p)=1$. ([[def-aperiodic-chain]])

[F9] $\lVert\mu-\nu\rVert_{\mathrm{TV}}=\sup_A|\mu(A)-\nu(A)|$, and on a countable discrete space $\lVert\mu-\nu\rVert_{\mathrm{TV}}=\frac12\sum_{x\in E}|\mu(x)-\nu(x)|$. ([[def-total-variation-distance-for-probability-laws]], [[lem-total-variation-half-l1-formula-on-a-countable-space]])

[F10] Assume AC. For an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\to\pi(y)$ for all $x,y\in E$. ([[thm-cesaro-convergence-for-irreducible-positive-recurrent-chains]])

## Counterexample

**Given:** AC; the one-point space $\Omega=\{\omega\}$; $X_n=n\bmod3$; the matrix $p(i,i+1)=1$ (indices mod $3$) with all other entries $0$; and $\pi=(1/3,1/3,1/3)$.

**Proof technique:** compute the powers of $p$ exactly, verify that $X$ is the corresponding periodic chain, and read off irreducibility, positive recurrence, the period, the nonconvergent $n$-step laws and the convergent Cesàro means.

1.1 The matrix $p$ is a transition matrix: its entries are $0$ or $1$, and every row has the single entry $p(i,i+1)=1$, so every row sums to one. By [F2] an induction on $n$ gives $p^{(n)}(x,y)=1$ when $y\equiv x+n\pmod3$ and $p^{(n)}(x,y)=0$ otherwise: the case $n=0$ is [F1], and $p^{(n+1)}(x,y)=\sum_wp^{(n)}(x,w)p(w,y)=p^{(n)}(x,y-1)$ takes the value $1$ exactly when $y-1\equiv x+n\pmod3$. In particular $p^{(3)}$ is the identity matrix, $p^{(n)}(x,x)=1$ exactly when $3$ divides $n$, and the $n$-step law from $x$ is the point mass at $(x+n)\bmod3$. [F1, F2, algebra]

2.1 The process $X$ is a $p$-chain started at $0$: $X_0=0$, and for every $n\ge0$ and $A\subseteq E$ the conditional probability $\mathbb P(X_{n+1}\in A\mid\mathcal F_n)$ is the almost-sure class of the constant $\mathbf 1_{\{n+1\bmod3\in A\}}$, while $K(X_n,A)=p(n\bmod3,A)=\mathbf 1_{\{n+1\bmod3\in A\}}$ by step 1.1; the two sides agree, and the same computation applied to the shifted process $X^{(x)}_n:=(x+n)\bmod3$ shows that each shift is a $p$-chain started at $x$. [F1, step 1.1, given]

2.2 The chain is irreducible: given $x,y\in E$, the integer $k:=(y-x)\bmod3$ lies in $\{0,1,2\}$ and step 1.1 gives $p^{(k)}(x,y)=1>0$, so $x\to y$; interchanging $x$ and $y$ gives $y\to x$. [F3, step 1.1]

2.3 The law $\pi$ is invariant: each column of $p$ has exactly one entry $1$, namely $p(y-1,y)=1$, so $\sum_{x\in E}\pi(x)p(x,y)=\frac13\cdot1=\frac13=\pi(y)$ for every $y$, which is the criterion of [F4]. [F4, step 1.1]

2.4 Failure of ordinary convergence: by step 1.1 the $n$-step law from $0$ is the point mass $\delta_{n\bmod3}$, and the half-$\ell^1$ formula [F9] gives $\lVert\delta_j-\pi\rVert_{\mathrm{TV}}=\frac12(\frac23+\frac13+\frac13)=\frac23$ for each $j\in\{0,1,2\}$. Hence $\lVert p^{(n)}(0,\cdot)-\pi\rVert_{\mathrm{TV}}=2/3$ for every $n\ge0$, including $n=0$, and the sequence of laws does not converge to $\pi$; it cycles through three distinct point masses. [F9, step 1.1]

3.1 Every state is positive recurrent with return time three: for the chain started at $x$, step 2.1 gives $X^{(x)}_n=(x+n)\bmod3$, so $X^{(x)}_n=x$ exactly when $3$ divides $n$; by [F5] this says $T^+_x=3$ identically, hence $\mathbb P_x(T_x^+<\infty)=1$ and $\mathbb E_xT_x^+=3<+\infty$, and [F6] makes $x$ positive recurrent. [F5, F6, step 2.1, given]

3.2 The chain is not aperiodic: by step 1.1 the positive return set of [F7] is $R_x=\{3,6,9,\dots\}$, whose greatest common divisor is $3$, so $d(x)=3$ for every $x$; since the chain is irreducible by step 2.2 the periods agree, and [F8] gives $\operatorname{per}(p)=3\ne1$, so $p$ is not aperiodic. [F7, F8, step 1.1, step 2.2]

4.1 Cesàro convergence: put $C:=p^{(0)}+p^{(1)}+p^{(2)}$. Step 1.1 gives $C(x,y)=1$ for all $x,y$, since exactly one of $k=0,1,2$ satisfies $y\equiv x+k\pmod3$. Writing $n=3m+r$ with $0\le r\le2$ and $R_r:=p^{(0)}+\cdots+p^{(r-1)}$ (so $R_0=0$, $R_1=I$, $R_2=I+p$), the periodicity in step 1.1 gives $\sum_{k=0}^{n-1}p^{(k)}=mC+R_r$, hence $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)=\frac{m}{n}C(x,y)+\frac{R_r(x,y)}{n}\to\frac13\cdot1+0=\frac13=\pi(y)$ because $m/n\to1/3$ and $R_r/n\to0$; for $n$ divisible by $3$ the average equals $\pi$ exactly. The chain is irreducible and positive recurrent with invariant $\pi$ by steps 2.2–2.4, so the general supplier [F10] gives the same limit, and the present computation verifies it directly. [F10, step 1.1, step 2.3, step 3.1, algebra]

5.1 Boundary and scope cases: the value $n=0$ is included and step 2.4 covers it, so the divergence is present from the first term and is not an artifact of a tail; the distance is $2/3=1-\frac13=1-\frac1d$ with period $d=3$, and for the deterministic two-cycle ($d=2$) the same formula gives $1/2$, so no single nonzero constant is being asserted and the example is sharp at period three; the state space is finite, so all sums in steps 2.3 and 4.1 are finite and no summation is interchanged; the chain lies outside the aperiodicity hypothesis by step 3.2, which is exactly the hypothesis whose necessity is being shown; the process is built by the explicit formula $X_n=n\bmod3$ on a one-point space, so no selection is made in steps 1.1–3.1, and AC [A1] is spent only on the general Cesàro supplier [F10], whose conclusion step 4.1 also establishes directly; the item refutes only the failure direction "positive recurrence without aperiodicity implies total-variation convergence", and it claims no converse and no failure of Cesàro convergence. [A1, F9, F10, step 3.2, step 4.1, given] ∎
