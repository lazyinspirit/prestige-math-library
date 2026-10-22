---
id: thm-ip-nonlinear-landweber-fejer-and-finite-stopping
kind: theorem
title: Nonlinear Landweber Fejér decrease and discrepancy stopping
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-nonlinear-landweber-discrepancy
  - def-ip-nonlinear-forward-map
  - def-ip-tangential-cone-condition
  - def-frechet-derivative-between-banach-spaces
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-countable-choice
  - def-operator-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-inner-product-induces-a-norm
  - def-series
  - thm-nonnegative-series-bounded-partial-sums
  - thm-reals-cauchy-complete
  - thm-of-archimedean
  - thm-well-ordering-principle
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 11, Assumption 11.2, Lemma 11.3, and Theorems 11.4–11.6"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
    - title: "S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration, §2.1"
      url: "https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf"
---

## Statement

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let $F:U\to Y$ be Fréchet differentiable at every point with $F':U\to\mathcal B(X,Y)$ continuous in operator norm. Fix $x_0\in U$ and $r>0$ such that $\overline B_{2r}(x_0)\subseteq U$, and suppose an exact solution $x^\dagger\in\overline B_r(x_0)$ satisfies $y=F(x^\dagger)$. Assume $\|F'(x)\|\le1$ for every $x\in\overline B_{2r}(x_0)$ and that, for some $0\le\eta<1/2$,

$$
\|F(x)-F(\widetilde x)-F'(x)(x-\widetilde x)\|_Y\le\eta\|F(x)-F(\widetilde x)\|_Y
$$

for every $x,\widetilde x\in\overline B_{2r}(x_0)$. This is a uniform two-point hypothesis with the derivative based at the first point. Assume Countable Choice so that the bounded derivatives have Hilbert adjoints. For $\delta\ge0$ and $y^\delta\in Y$ with $\|y^\delta-y\|_Y\le\delta$, set $x_0^\delta=x_0$ and define the ideal Landweber sequence by

$$
x_{n+1}^\delta=x_n^\delta+F'(x_n^\delta)^*(y^\delta-F(x_n^\delta)).
$$

Let $\tau>2(1+\eta)/(1-2\eta)$. For $\delta>0$, let $N(\delta,y^\delta)$ denote the first $n\in\mathbb N_0$ with $\|y^\delta-F(x_n^\delta)\|_Y\le\tau\delta$, if it exists. Put $d_0=\|x_0-x^\dagger\|_X$ and $c_\tau=1-2\eta-2(1+\eta)/\tau>0$. Then the following hold.

1. For every update before the first discrepancy stop, writing $R_n^\delta=\|y^\delta-F(x_n^\delta)\|_Y$, the squared-error estimate is

   $$
   \|x_{n+1}^\delta-x^\dagger\|_X^2-\|x_n^\delta-x^\dagger\|_X^2\le R_n^\delta\bigl(2(1+\eta)\delta-(1-2\eta)R_n^\delta\bigr).
   $$

   In particular, the iterates are Fejér monotone relative to $x^\dagger$ up to the stop: their distance to $x^\dagger$ does not increase. Here Fejér monotonicity means exactly this nonincrease of distance to the stated solution.

2. If $\delta>0$, the first discrepancy index exists and

   $$
   N(\delta,y^\delta)<C\delta^{-2},\qquad C:=1+\frac{d_0^2}{c_\tau\tau^2}.
   $$

   A run of the finite-budget algorithm with budget $M\ge N(\delta,y^\delta)$ returns `stopped` at this first index; if $M<N(\delta,y^\delta)$, it returns `budget_exhausted` at $M$.

3. For exact data ($\delta=0$ and $y^\delta=y$), the ideal sequence is defined for every $n$, satisfies

   $$
   (1-2\eta)\sum_{n=0}^{\infty}\|F(x_n)-y\|_Y^2\le d_0^2,
   $$

   and converges strongly to some $\bar x\in\overline B_{2r}(x_0)$ with $F(\bar x)=y$. No finite stopping index is claimed in the exact-data case.

4. For noisy data ($\delta>0$), the ideal stopped iterates converge uniformly over the admissible noise ball to that same exact-data limit:

   $$
   \lim_{\delta\downarrow0}\ \sup_{\|y^\delta-y\|_Y\le\delta}\|x_{N(\delta,y^\delta)}^\delta-\bar x\|_X=0.
   $$

   For finite-budget runs this conclusion concerns outputs only when their budgets reach the first discrepancy indices. The theorem asserts neither a convergence rate nor that $\bar x$ is an $x_0$-minimum-norm solution.

## Statement references

[[alg-ip-nonlinear-landweber-discrepancy|Nonlinear Landweber update and discrepancy test]]

[[def-ip-nonlinear-forward-map|Real-Hilbert forward maps and exact solutions]]

[[def-ip-tangential-cone-condition|Pointwise local tangential-cone inequality; the theorem assumes its uniform two-point form on the outer ball]]

[[def-hilbert-space-adjoint|Hilbert adjoints under Countable Choice]]

[[thm-hilbert-adjoint-properties|Hilbert-adjoint identities and operator-norm equality]]

[[def-countable-choice|Axiom of Countable Choice]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 11, Assumption 11.2, Lemma 11.3, and Theorems 11.4–11.6](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, *A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration*, §2.1](https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf)

## Facts & Assumptions

**Given:** All hypotheses in the Statement. For any current iterate $u$ in the outer ball, write $A=F'(u)$ and $q=y^\delta-F(u)$. The update is $u^+=u+A^*q$.

[A1] [[def-countable-choice]]: the Axiom of Countable Choice, $\mathrm{AC}_\omega$, is assumed. No stronger form of choice is assumed.

[A2] The data satisfy $y=F(x^\dagger)$ and $\|y^\delta-y\|_Y\le\delta$.

[A3] The closed outer ball lies in $U$, $x^\dagger$ is within distance $r$ of $x_0$, $F'$ is continuous in operator norm on $U$, and the derivative bound and uniform two-point tangential-cone inequality in the Statement hold on that ball.

[F1] [[alg-ip-nonlinear-landweber-discrepancy]]: the iteration is $x_{n+1}^\delta=x_n^\delta+F'(x_n^\delta)^*(y^\delta-F(x_n^\delta))$ and the discrepancy check is made before the finite-budget check.

[F2] [[def-ip-tangential-cone-condition]]: at a base point $x$, the local TCC bounds $\|F(x+h)-F(x)-F'(x)h\|_Y$ by $\eta\|F(x+h)-F(x)\|_Y$. The theorem assumes this exact orientation uniformly for pairs in the outer ball.

[F3] [[def-hilbert-space-adjoint]] and [[thm-hilbert-adjoint-properties]]: $\langle Au,v\rangle_Y=\langle u,A^*v\rangle_X$ and $\|A^*\|=\|A\|$ for every bounded Hilbert-space operator $A$.

[F4] [[def-real-and-complex-inner-product-space]]: the real inner product is symmetric and $\|u\|_X^2=\langle u,u\rangle_X$; the corresponding expansion is $\|u+v\|_X^2=\|u\|_X^2+2\langle u,v\rangle_X+\|v\|_X^2$.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle u,v\rangle|\le\|u\|\,\|v\|$.

[F6] [[cor-inner-product-induces-a-norm]]: $\|u+v\|\le\|u\|+\|v\|$ in each real Hilbert space.

[F7] [[def-hilbert-space]]: every Cauchy sequence in $X$ for the induced norm converges in $X$.

[F8] [[def-series]] and [[thm-nonnegative-series-bounded-partial-sums]]: a series with nonnegative real terms and bounded partial sums converges, and its tails tend to zero.

[F9] [[thm-reals-cauchy-complete]] and [[thm-of-archimedean]]: the real field is complete and its natural numbers are unbounded above.

[F10] [[thm-well-ordering-principle]]: every nonempty set of natural indices has a least member.

[F11] [[def-operator-norm]]: for every bounded linear $T$, $\|Tu\|\le\|T\|\,\|u\|$.

[F12] [[def-ip-nonlinear-forward-map]]: a real-Hilbert forward map is $F:U\to Y$ on an open domain, and exact solutions satisfy $F(x^\dagger)=y$.

[F13] [[def-frechet-derivative-between-banach-spaces]]: each Fréchet derivative is a bounded real-linear operator, and differentiability on $U$ defines the derivative map $F':U\to\mathcal B(X,Y)$.

## Proof



1.1 Fix a current point $u$ and any exact solution $z$ in the outer ball, and set $e=u-z$, $R=F(u)-y^\delta$, and $w=F(u)-F(z)-F'(u)e$. The uniform TCC gives $\|w\|_Y\le\eta\|F(u)-F(z)\|_Y$. Since $y=F(z)$, $y^\delta-F(u)+F'(u)e=y^\delta-y-w$, so by the noise bound and the triangle inequality, $\|y^\delta-F(u)+F'(u)e\|_Y\le\delta+\eta\|F(u)-y\|_Y\le(1+\eta)\delta+\eta\|R\|_Y$. [given, A2, A3, F2, F6, algebra]

1.2 The update has $e^+=e+A^*(y^\delta-F(u))$. Expanding its squared norm and using the adjoint identity yields $\|e^+\|_X^2-\|e\|_X^2=2\langle y^\delta-F(u),Ae\rangle_Y+\|A^*(y^\delta-F(u))\|_X^2$. Since [F13] makes $A$ a bounded operator, [F11] gives $\|A^*(y^\delta-F(u))\|_X\le\|A^*\|\,\|R\|_Y=\|A\|\,\|R\|_Y\le\|R\|_Y$. [A1, A3, F3, F4, F11, F13, algebra]

2.1 Write $Ae=-(y^\delta-F(u))+(y^\delta-F(u)+Ae)$. By [F5] and step 1.2, $\|e^+\|_X^2-\|e\|_X^2\le-\|R\|_Y^2+2\|R\|_Y\,\|y^\delta-F(u)+Ae\|_Y$. Substituting step 1.1 gives the stated one-step estimate $\|e^+\|_X^2-\|e\|_X^2\le\|R\|_Y\bigl(2(1+\eta)\delta-(1-2\eta)\|R\|_Y\bigr)$. [step 1.1, step 1.2, F5, algebra]

3.1 If $\delta>0$ and $\|R\|_Y>\tau\delta$, then $2(1+\eta)\delta-(1-2\eta)\|R\|_Y<0$ by the strict lower bound on $\tau$, so the squared error decreases. For exact data $\delta=0$, the same bound is $-(1-2\eta)\|R\|_Y^2\le0$ for every residual, including zero. [given, step 2.1, algebra]

3.2 Put $c_\tau:=1-2\eta-2(1+\eta)/\tau$, which is positive by the strict hypothesis on $\tau$. For each $n<N(\delta,y^\delta)$, the residual is greater than $\tau\delta$; step 2.1 then gives $\|x_{n+1}^\delta-x^\dagger\|_X^2-\|x_n^\delta-x^\dagger\|_X^2\le-c_\tau(R_n^\delta)^2$. [given, step 2.1, algebra]

3.3 For exact data, step 2.1 gives $\|x_{n+1}-x^\dagger\|_X^2-\|x_n-x^\dagger\|_X^2\le-(1-2\eta)\|F(x_n)-y\|_Y^2$ for every $n$. Summing the first $K$ inequalities telescopes and yields $(1-2\eta)\sum_{n<K}\|F(x_n)-y\|_Y^2\le d_0^2-\|x_K-x^\dagger\|_X^2\le d_0^2$. [given, step 2.1, algebra]

4.1 The initial point satisfies $\|x_0-x^\dagger\|_X=d_0\le r$. At every update before the noisy stop, or at every exact-data update, step 3.1 keeps $\|x_n^\delta-x^\dagger\|_X\le d_0$; consequently $\|x_n^\delta-x_0\|_X\le\|x_n^\delta-x^\dagger\|_X+d_0\le2r$. Induction therefore keeps every iterate needed by the recurrence in the declared outer ball and proves Fejér decrease relative to $x^\dagger$. [given, A3, step 3.1, F1, F6, induction]

4.2 Suppose $\delta>0$ and the discrepancy test never succeeds. Summing step 3.2 over the first $K$ updates telescopes, while every residual exceeds $\tau\delta$, so $K\tau^2\delta^2<\sum_{n<K}(R_n^\delta)^2\le d_0^2/c_\tau$ for every natural $K\ge1$. The Archimedean property in [F9] supplies a natural $K>d_0^2/(c_\tau\tau^2\delta^2)$, contradicting this bound. Hence the first stopping index is finite. [given, step 3.2, F9, assume-contra, choose, algebra]

4.3 The partial sums of the nonnegative residual-square series are bounded by step 3.3. By [F8] the series converges, its tails tend to zero, and its terms tend to zero; thus $\|F(x_n)-y\|_Y\to0$ and the claimed infinite-series bound holds. [step 3.3, F8, algebra]

4.4 Let $e_j:=x_j-x^\dagger$, $a_j:=\|e_j\|_X^2$, and $\rho_j:=\|F(x_j)-y\|_Y$. The sequence $a_j$ is nonincreasing by step 3.1. Hence $\Delta_j:=a_j-a_{j+1}\ge0$, and the partial sums satisfy $\sum_{j<K}\Delta_j=a_0-a_K\le a_0$. Applying [F8] again shows that the tail sums $D_n:=\sum_{j\ge n}\Delta_j$ tend to zero. [step 3.1, step 3.3, F8, algebra]

5.1 If $N(\delta,y^\delta)=0$, the bound $N(\delta,y^\delta)<C\delta^{-2}$ is immediate because $C>0$ and $\delta>0$. If $N(\delta,y^\delta)\ge1$, telescoping through that positive first index gives $N(\delta,y^\delta)\tau^2\delta^2<d_0^2/c_\tau$, hence the same bound. If $d_0=0$, then $x_0=x^\dagger$ and the initial residual is at most $\delta<\tau\delta$, so $N=0$ and the same bound holds for the stated positive $C$. By [F1], a budget reaching $N$ returns the first stop, while a shorter budget returns `budget_exhausted`. [given, A2, step 3.2, step 4.2, F1, algebra]

5.2 Fix $m\ge n$ and choose $k\in\{n,\ldots,m\}$ minimizing the finite set of residuals $\rho_j$; [F10] supplies a least index among minimizers. For $n\le j<m$, put $A_j=F'(x_j)$, $w_j=F(x_j)-y-A_je_j$, and $v_{j,k}=F(x_j)-F(x_k)-A_j(x_j-x_k)$. The uniform TCC gives $\|w_j\|_Y\le\eta\rho_j$ and $\|v_{j,k}\|_Y\le\eta\|F(x_j)-F(x_k)\|_Y\le\eta(\rho_j+\rho_k)\le2\eta\rho_j$. Since $A_je_k=\bigl(F(x_j)-y-w_j\bigr)+\bigl(F(x_k)-F(x_j)+v_{j,k}\bigr)=F(x_k)-y-w_j+v_{j,k}$, Cauchy–Schwarz gives $|\langle y-F(x_j),A_je_k\rangle_Y|\le\rho_j(\rho_k+\|w_j\|_Y+\|v_{j,k}\|_Y)\le(1+3\eta)\rho_j^2$. [given, A3, step 4.1, F2, F5, F10, choose, algebra]

5.3 For any fixed finite number of executed updates, the noisy iterates converge to the exact iterates as $\delta\to0$ along data sequences whose discrepancy stop occurs no earlier. Indeed, the update map $(x,z)\mapsto x+F'(x)^*(z-F(x))$ is continuous: $F$ is continuous by Fréchet differentiability, $F'$ is continuous by hypothesis, and [F3] together with [F11] gives operator-norm continuity of the adjoint action. Induction from the common initial point proves the fixed-index assertion. [A3, F1, F3, F11, F13, step 4.1, induction, algebra]

6.1 The exact update gives $e_{j+1}-e_j=A_j^*(y-F(x_j))$. Summing this identity and using [F3] shows $\langle e_k-e_m,e_k\rangle_X\le(1+3\eta)\sum_{j=k}^{m-1}\rho_j^2\le(1+3\eta)\sum_{j\ge n}\rho_j^2$, and likewise $\langle e_k-e_n,e_k\rangle_X\le(1+3\eta)\sum_{j=n}^{k-1}\rho_j^2\le(1+3\eta)\sum_{j\ge n}\rho_j^2$. [step 5.2, F3, algebra]

7.1 Real inner-product expansion gives $\|e_m-e_k\|_X^2=2\langle e_k-e_m,e_k\rangle_X+a_m-a_k\le2(1+3\eta)\sum_{j\ge n}\rho_j^2$, since $a_m\le a_k$. It also gives $\|e_k-e_n\|_X^2=2\langle e_k-e_n,e_k\rangle_X+a_n-a_k\le2(1+3\eta)\sum_{j\ge n}\rho_j^2+D_n$, because $a_n-a_k=\sum_{j=n}^{k-1}\Delta_j\le D_n$. [step 4.4, step 6.1, F4, algebra]

8.1 By the triangle inequality, $\|e_m-e_n\|_X\le\sqrt{2(1+3\eta)\sum_{j\ge n}\rho_j^2}+\sqrt{2(1+3\eta)\sum_{j\ge n}\rho_j^2+D_n}$, which tends to zero uniformly in $m\ge n$ by steps 4.3 and 4.4. Thus $(e_n)$ is Cauchy. Completeness of $X$ gives $x_n\to\bar x$. By Fréchet differentiability at $\bar x$, $F(x_n)-F(\bar x)=F'(\bar x)(x_n-\bar x)+o(\|x_n-\bar x\|_X)$, so boundedness of $F'(\bar x)$ implies $F(x_n)\to F(\bar x)$; step 4.3 gives $F(\bar x)=y$. step 4.1 and the triangle inequality give $\|x_n-x_0\|_X\le2r$, so passage to the limit gives $\bar x\in\overline B_{2r}(x_0)$. [step 4.1, step 4.3, step 4.4, step 7.1, F6, F7, F12, F13, A3, algebra]

9.1 Suppose the uniform noisy-data conclusion fails. Then some $\varepsilon>0$ and, for every integer $j\ge1$, a positive $\delta_j<1/j$ and admissible datum $y_j$ can be selected so that the stopped iterate is at least $\varepsilon/2$ from $\bar x$; [A1] supplies this countable selection from the nonempty bad-data sets. Let $N_j=N(\delta_j,y_j)$. Passing to a subsequence, either $N_j$ is a fixed integer or $N_j\to\infty$: a bounded sequence of natural indices has a value occurring infinitely often, and an unbounded one has an increasing subsequence chosen recursively by least indices. [A1, F10, step 8.1, choose, assume-contra]

9.2 In the fixed-index case, write $N_j=N$. Step 5.3 gives $x_N^{\delta_j}\to x_N$. Fréchet differentiability at $x_N$ and boundedness of $F'(x_N)$ imply $F(x_N^{\delta_j})\to F(x_N)$. The discrepancy test and noise bound give $\|F(x_N^{\delta_j})-y\|_Y\le\tau\delta_j+\delta_j$, so $F(x_N)=y$. The exact update at $x_N$ is then zero, so $x_n=x_N$ for every $n\ge N$ and therefore $x_N=\bar x$. Step 5.3 now gives $x_N^{\delta_j}\to\bar x$, contradicting the selected distance lower bound. [A2, step 8.1, step 5.3, F1, F12, F13, algebra]

9.3 In the case $N_j\to\infty$, choose $L$ with $\|x_L-\bar x\|_X<\varepsilon/4$ by step 8.1. For all sufficiently large $j$, $N_j\ge L$ and step 5.3 gives $\|x_L^{\delta_j}-x_L\|_X<\varepsilon/4$. Each noisy iterate before its stop stays in the outer ball by step 4.1, and $\bar x$ lies there by step 8.1; applying the one-step estimate of step 2.1 with the exact solution $\bar x$ makes the noisy iterates Fejér monotone relative to $\bar x$ up to $N_j$. Hence $\|x_{N_j}^{\delta_j}-\bar x\|_X\le\|x_L^{\delta_j}-\bar x\|_X<\varepsilon/2$, again contradicting the selected lower bound. [A3, step 2.1, step 4.1, step 8.1, step 5.3, F6, algebra]

10.1 Both subsequence cases contradict the failure assumption in step 9.1. Therefore the supremum over all data satisfying $\|y^\delta-y\|_Y\le\delta$ tends to zero as $\delta\downarrow0$. [step 9.1, step 9.2, step 9.3, discharge-contradiction] ∎

## Remarks

The lower bound on $\tau$ is sufficient, not necessary. The local TCC constant can be difficult to verify and is often not known numerically; when it is unknown, a chosen $\tau$ cannot be certified by this theorem merely because it is a common practical value. The nonlinear residual sequence need not be monotone, which is why the exact-data Cauchy proof selects a minimum residual on each finite block. The result is local to the declared ball and gives neither a rate nor a minimum-norm selection.

## Remarks references

[S. Hubmer, E. Sherina, S. Kindermann, and K. Raik, *A numerical comparison of some heuristic stopping rules for nonlinear Landweber iteration*, §2.1](https://epub.oeaw.ac.at/0xc1aa5576_0x003dd6da.pdf)
