---
id: thm-dirichlet-problem-for-finite-state-hitting-probabilities
kind: theorem
title: "Bounded Dirichlet problem for hitting probabilities"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-initial-distribution-of-a-markov-chain
  - def-discrete-generator-of-a-countable-state-transition-matrix
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - lem-bounded-function-form-of-the-markov-property
  - lem-finite-irreducible-chain-hitting-time-geometric-tail
  - thm-dominated-convergence
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-markov-property-for-bounded-future-path-functionals
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "§9.2, Proposition 9.1 and complete proof, printed pp.117–118/PDF pp.132–133; its first-step representation is context only. The global-maximum uniqueness argument is not used for the countable bounded claim here."
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "§2, Example 24.3 and Theorem 24.4, printed/PDF pp.3–4, for the hitting-probability special case and nonnegative first-step equations on proper D. The signed bounded case and bounded uniqueness under almost-sure hitting are proved locally."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $X$ be a Markov chain with transition
kernel $K$ on an at most countable state space $E$ and transition matrix
$p(x,y)=K(x,\{y\})$. If $E=\varnothing$, the assertion is vacuous. For
$A\subseteq E$, suppose $\mathbb P_x(T_A<\infty)=1$ for every $x\in E$. For
bounded real boundary data $f:A\to\mathbb R$, define the payoff before any
random-time evaluation by
$$F_A=\begin{cases}f(X_{T_A}),&T_A<\infty,\\0,&T_A=\infty,\end{cases}\qquad u(x):=\mathbb E_xF_A.$$
Then $u$ is the unique bounded $v:E\to\mathbb R$ satisfying
$$v=f\text{ on }A,\qquad v=Pv\text{ on }A^c,$$
where for bounded real $q$,
$$Pq(x):=\sum_{y\in E}p(x,y)q(y)$$
is absolutely convergent. In particular, the almost-sure hitting hypothesis
holds when $E$ is finite, $p$ is irreducible, and $A$ is nonempty. For
$f\equiv1$ on $A$, $u(x)=\mathbb P_x(T_A<\infty)$.

## Facts & Assumptions

**Given:** AC; a Markov chain on an at most countable discrete state space with
transition matrix $p$; a set $A\subseteq E$; bounded real data $f$ on $A$; and
$\mathbb P_x(T_A<\infty)=1$ for every deterministic start $x$.

[A1] AC is the axiom that every family of nonempty sets has a choice function;
the canonical chain-law and conditional-expectation Markov interfaces below
assume it. ([[def-axiom-of-choice]])

[F1] The transition probabilities satisfy $p(x,y)=K(x,\{y\})$ and every
kernel row is a probability measure; in particular its singleton weights sum
to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] $T_A=\inf\{n\ge0:X_n\in A\}$, with
$\{T_A\le n\}=\bigcup_{j=0}^n\{X_j\in A\}$; hence $T_A$ is a stopping time
and $X_{n\wedge T_A}$ is defined for finite $n$. ([[def-hitting-return-and-visit-times]])

[F3] Under the deterministic start, $\mathbb P_x=\mathbb P_{\delta_x}$,
$\mathbb E_x$ is its expectation, and $X_0=x$ almost surely.
([[def-initial-distribution-of-a-markov-chain]])

[F4] For bounded measurable $q$, $$\mathbb E[q(X_{n+1})\mid\mathcal F_n]=Kq(X_n)\quad\text{a.s.},\qquad Kq(x):=\int_Eq(y)K(x,dy).$$ ([[lem-bounded-function-form-of-the-markov-property]])

[F5] For bounded product-measurable path functionals $H$,
$h(x):=\mathbb E_xH(X_0,X_1,\ldots)$ is measurable and
$$\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)\quad\text{a.s.}$$
([[thm-markov-property-for-bounded-future-path-functionals]])

[F6] On bounded real functions,
$Pq(x)=\sum_y p(x,y)q(y)$; the series is absolutely convergent since
$\sum_y p(x,y)=1$. ([[def-discrete-generator-of-a-countable-state-transition-matrix]])

[F7] A nonnegative function with finite range is simple; its simple integral
is the finite sum of its values times the measures of its disjoint level sets,
and this equals its nonnegative Lebesgue integral.
([[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F8] For an integrable real $q$, its integral is
$\int q\,d\mu=\int q^+\,d\mu-\int q^-\,d\mu$.
([[def-integrable-real-and-complex-functions-and-their-integrals]])

[F9] Dominated convergence passes limits through integrals when the functions
converge almost everywhere and are bounded by one integrable majorant.
([[thm-dominated-convergence]])

[F10] Conditional expectation preserves order and constants and satisfies
$\mathbb E(\mathbb E[Y\mid\mathcal G])=\mathbb E Y$ for integrable real $Y$.
([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F11] If $E$ is finite, $p$ is irreducible, and $A$ is nonempty, there are
$m\ge1$ and $\varepsilon\in(0,1)$ such that
$\mathbb P_x(T_A>km)\le(1-\varepsilon)^k$ for every $x$ and $k\ge0$.
([[lem-finite-irreducible-chain-hitting-time-geometric-tail]])

## Source scope

LPW Proposition 9.1 and its proof [S1] give context for the boundary-payoff
construction and the first-step decomposition. Its uniqueness argument uses a
global maximum, and its displayed assumptions do not supply the almost-sure
boundary-hit and bounded-data hypotheses used here; that argument is not
invoked for the countable bounded result. Roch Theorem 24.4 [S2] proves the
first-step equations for bounded nonnegative exit data on a proper domain. The
bounded real-data equations and the uniqueness statement below are derived
locally under the stated almost-sure hitting assumption.

## Proof

**Proof technique:** establish the bounded row-integral identity by finite
support truncations, derive the boundary and harmonic equations from bounded
Markov identities, and identify every bounded solution by a stopped martingale
and dominated convergence.

1.1 Fix $x\in E$ and a bounded real $q:E\to\mathbb R$, with $|q|\le M$. Take an increasing sequence of finite sets $E_j\uparrow E$ (eventually $E_j=E$ if $E$ is finite) and put $q_j=q\mathbf1_{E_j}$. The positive and negative parts of $q_j$ are finite-range nonnegative simple functions. By [F1], [F7] and [F8], $$Kq_j(x)=\int_Eq_j\,dK(x,\cdot)=\sum_{y\in E_j}p(x,y)q(y).$$ The constant $M$ is integrable for the probability measure $K(x,\cdot)$, so [F9] gives $Kq_j(x)\to Kq(x)$. Also $\sum_y p(x,y)|q(y)|\le M\sum_yp(x,y)=M$ by [F1], so the finite sums converge to the absolutely convergent row sum $Pq(x)$ from [F6]. Therefore $$Kq(x)=Pq(x).$$ This identity holds for every bounded real $q$ and each row; no positivity of the individual entries beyond being transition weights is required. [F1, F6, F7, F8, F9, given]

2.1 Choose $M<\infty$ with $|f(a)|\le M$ on $A$, extend $f$ by zero off $A$, and define $H(\omega)$ to be $f(\omega_{T_A(\omega)})$ when the first-hit time of $A$ is finite, and zero otherwise. Each event that the first hit is at time $n$ is cylinder-measurable; $H$ is the pointwise limit of its finite sums over these disjoint events, so it is product-measurable and $|H|\le M$. By [F5], $h(x):=\mathbb E_xH(X_0,X_1,\ldots)$ is measurable; [F10] gives $|h(x)|\le M$. The payoff in the Statement equals $H(X_0,X_1,\ldots)$ pathwise, including its zero value on nonhit paths, so $h=u$. If $x\in A$, [F2] and [F3] give $T_A=0$ and $h(x)=f(x)$. If $x\notin A$, deleting the first coordinate does not change $H$, including when the path never hits $A$. Thus [F5] at time $1$ and [F10] give $$h(x)=\mathbb E_xH(X_1,X_2,\ldots)=\mathbb E_xh(X_1).$$ Apply [F4] at time $0$ to the bounded function $h$, use [F3] and [F10] to take expectations, and then use step 1.1 to obtain $$u(x)=h(x)=K h(x)=P h(x)=P u(x).$$ This proves existence and both equations. [F2, F3, F4, F5, F10, step 1.1, given]

2.2 Let $v:E\to\mathbb R$ be any bounded solution of the stated boundary and harmonic equations, fix $x\in E$, set $T=T_A$, and define $Y_n=v(X_{n\wedge T})$. By [F2] this is adapted, and it is bounded by $\|v\|_\infty$. On $\{T\le n\}$, $Y_{n+1}=Y_n$; on $\{T>n\}$, $X_n\in A^c$ and $Y_{n+1}=v(X_{n+1})$. The one-step identity [F4], the row identity in step 1.1, and $v=Pv$ on $A^c$ imply $$\mathbb E_x[Y_{n+1}\mid\mathcal F_n]=Y_n\quad\text{a.s.}$$ Consequently $Y_n$ is a bounded martingale and [F3], [F10] give $\mathbb E_xY_n=v(x)$ for every $n$. The hypothesis makes $T<\infty$ $\mathbb P_x$-almost surely, so eventually $Y_n=v(X_T)=f(X_T)=F_A$ almost surely. Since $|Y_n|\le\|v\|_\infty$ is an integrable majorant, [F9] yields $$v(x)=\lim_n\mathbb E_xY_n=\mathbb E_xF_A=u(x).$$ As $x$ was arbitrary, every bounded solution equals $u$; this proves uniqueness. [F2, F3, F4, F9, F10, step 1.1, given]

3.1 If $E$ is finite, $p$ is irreducible and $A\ne\varnothing$, [F11] gives $\mathbb P_x(T_A=\infty)\le\mathbb P_x(T_A>km)\le(1-\varepsilon)^k\longrightarrow0$, so the almost-sure hitting hypothesis holds for every start. The preceding steps give the finite irreducible instance. When $f\equiv1$ on $A$, the pathwise payoff is $\mathbf1_{\{T_A<\infty\}}$, hence its expectation is the hitting probability; under the theorem's hypothesis it equals $1$. [F3, F11, step 2.1, step 2.2, given]

4.1 If $E=\varnothing$, there is no state or deterministic-start law and all assertions are vacuous. If $E\ne\varnothing$ and $A=\varnothing$, then $T_A=\infty$ everywhere, contradicting the hypothesis; thus every nonvacuous instance has $A\ne\varnothing$. If $A=E$, then $T_A=0$, the boundary equation determines $u$ and every solution directly. For a one-state chain these are the only admissible cases. If $f=0$, then $H=u=0$ and the uniqueness proof still applies. Deterministic rows are covered by the row identity and the same martingale calculation; a finite irreducible deterministic chain reaches every nonempty $A$ by the finite-tail argument. The endpoint $T_A=0$ is handled in step 2.1, while a first hit at time $1$ is included in the shifted-path and stopped-process identities in steps 2.1 and 2.2. AC [A1] is used through the canonical chain laws and conditional-expectation Markov identities [F4], [F5] and [F10]; choosing one enumeration of a countable $E$ adds no family-wise choice. The equations and uniqueness claim are not an iff statement. [A1, F1, F2, F3, F4, F5, F6, F10, F11, step 1.1, step 2.1, step 2.2, step 3.1, given] ∎
