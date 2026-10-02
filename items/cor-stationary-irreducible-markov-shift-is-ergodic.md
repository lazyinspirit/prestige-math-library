---
id: cor-stationary-irreducible-markov-shift-is-ergodic
kind: corollary
title: "Stationary irreducible Markov shift is ergodic"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-accessibility-communication-and-irreducibility
  - def-strict-and-mod-null-invariant-sigma-algebras
  - def-ergodic-measure-preserving-system
  - def-hitting-return-and-visit-times
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-kac-return-time-formula-for-a-state
  - thm-recurrence-and-transience-are-class-properties
  - thm-markov-property-for-bounded-future-path-functionals
  - cor-bounded-harmonic-functions-yield-markov-chain-martingales
  - thm-optional-sampling-for-bounded-stopping-times
  - thm-levy-upward-convergence-of-conditional-expectations
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.6 and §6.2, ergodicity of stationary irreducible chains"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible
([[def-accessibility-communication-and-irreducibility]]) positive-recurrent
transition matrix on a nonempty countable state space $E$, let $\pi$ be its
invariant probability, and let $\mathbb P_\pi$ be the canonical path law on
$E^{\mathbb N_0}$ of the $p$-chain with initial law $\pi$
([[thm-invariant-initial-law-makes-the-chain-stationary]]). Then:

1. the invariant probability is unique, so the phrase "the" invariant
   probability is unambiguous; and
2. the left shift $\theta(z)_n=z_{n+1}$ preserves $\mathbb P_\pi$ and is
   ergodic for it ([[def-ergodic-measure-preserving-system]]): every
   $A$ with $\theta^{-1}A=A$ satisfies $\mathbb P_\pi(A)\in\{0,1\}$
   ([[def-strict-and-mod-null-invariant-sigma-algebras]]).

No aperiodicity hypothesis is used anywhere in the proof.

## Facts & Assumptions

**Given:** AC, a nonempty countable $E$, an irreducible positive-recurrent transition matrix $p$ on $E$, and the canonical path laws $\mathbb P_x$ of the chain started at $x$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the chain, statewise Kac, and conditional-expectation suppliers [F3]–[F8], [F11]. ([[def-axiom-of-choice]])

[F1] A measure-preserving system is ergodic for $\mu$ exactly when every $E\in\mathcal I=\{E:T^{-1}E=E\}$ has $\mu(E)=0$ or $\mu(X\setminus E)=0$. ([[def-ergodic-measure-preserving-system]], [[def-strict-and-mod-null-invariant-sigma-algebras]])

[F2] If $X$ is a $K$-chain with invariant initial law $\pi$, then its canonical path law is invariant under the left shift. ([[thm-invariant-initial-law-makes-the-chain-stationary]])

[F3] Assume AC. For an irreducible countable chain: some state positive recurrent, every state positive recurrent, and existence of an invariant probability are equivalent; if $b$ is positive recurrent then $\pi_*(y)=\mu_b(y)/\mathbb E_bT_b^+$ is an invariant probability with $\pi_*(b)=1/\mathbb E_bT_b^+$; and every invariant probability $\rho$ satisfies $\rho(b)>0$ and $\mathbb E_bT_b^+\le1/\rho(b)$ for every $b$. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F4] Assume AC. If $x$ is recurrent and $x\to y$, then $\mathbb P_x(T_y<\infty)=1$; recurrence is a class property. ([[thm-recurrence-and-transience-are-class-properties]])

[F5] Assume Choice. For bounded product-measurable $H:E^{\mathbb N_0}\to\mathbb R$, the function $h(x)=\mathbb E_x[H(X_0,X_1,\ldots)]$ is measurable and $\mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)$ a.s. for every $n\ge0$. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F6] Assume Choice. A bounded harmonic function $f$ (that is, $Pf=f$) of a countable-state $p$-chain yields the bounded martingale $(f(X_n))$. ([[cor-bounded-harmonic-functions-yield-markov-chain-martingales]])

[F7] Assume AC. If $M$ is a martingale and $\sigma\le\tau$ are stopping times bounded by a deterministic $N$, then $\mathbb E[M_\tau\mid\mathcal F_\sigma]=M_\sigma$ a.s., so in particular $\mathbb EM_\tau=\mathbb EM_\sigma$. ([[thm-optional-sampling-for-bounded-stopping-times]])

[F8] Assume AC. If $(\mathcal F_n)$ is increasing and $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$, then $\mathbb E[X\mid\mathcal F_n]\to\mathbb E[X\mid\mathcal F_\infty]$ almost surely and in $L^1$ for every $X\in L^1$. ([[thm-levy-upward-convergence-of-conditional-expectations]])

[F9] $T_A=\inf\{n\ge0:X_n\in A\}$ and $T_y$ is a stopping time because $\{T_A\le n\}=\bigcup_{j\le n}\{X_j\in A\}\in\mathcal F_n$; hence $T_y\wedge n$ is a stopping time bounded by $n$, and $X_{T_y\wedge n}=y$ for all $n\ge T_y$ when $T_y<\infty$. ([[def-hitting-return-and-visit-times]])

[F10] If $p$ is irreducible, then for every $x,y$ there is $n\ge0$ with $p^{(n)}(x,y)>0$. ([[def-accessibility-communication-and-irreducibility]])

[F11] Assume AC. If an irreducible countable transition matrix has invariant probability $\rho$, then for every $y\in E$, $\rho(y)>0$ and $\mathbb E_yT_y^+=1/\rho(y)$. ([[thm-kac-return-time-formula-for-a-state]])

[F12] If measurable functions $f_n$ on a probability space satisfy $f_n\to f$ almost surely and $|f_n|\le1$, then dominated convergence applies with the integrable majorant $1$, so $\mathbb E f_n\to\mathbb E f$. ([[thm-dominated-convergence]])

## Proof

**Given:** AC, an irreducible positive-recurrent $p$ on nonempty countable $E$, canonical path laws $\mathbb P_x$, and the invariant probability existence from [F3].

**Proof technique:** first pin down the invariant probability by applying the statewise Kac formula to each invariant law at every state; then for a strictly shift-invariant event use the harmonic function of its hitting probabilities, optional sampling up to the hitting time of a fixed state, and Lévy's upward theorem to force the event to have probability zero or one.

1.1 Uniqueness of the invariant probability: [F3] supplies an invariant probability $\pi_*$. Let $\rho$ be any invariant probability and fix an arbitrary $y\in E$. Applying [F11] to each of $\pi_*$ and $\rho$ gives $\pi_*(y)=1/\mathbb E_yT_y^+=\rho(y)$. Since this holds for every $y$, $\rho=\pi_*$ pointwise. Write $\pi$ for this unique invariant probability. [F3, F11, given]

2.1 Let $\mathbb P_\pi$ be the canonical path law of the chain with initial law $\pi$; by [F2] the left shift preserves $\mathbb P_\pi$. Fix a measurable $A\subseteq E^{\mathbb N_0}$ with $\theta^{-1}A=A$ and define $h(x):=\mathbb P_x(A)$ for $x\in E$; then $0\le h\le1$. [F2, step 1.1, given]

3.1 The function $h$ is harmonic, $Ph=h$: since $\theta^{-1}A=A$, the indicator satisfies $\mathbf 1_A(z)=\mathbf 1_A(\theta z)$ for every path $z$, so the bounded product-measurable functional $H:=\mathbf 1_A$ obeys $H(X_1,X_2,\ldots)=\mathbf 1_A(\theta\Phi)=\mathbf 1_A(\Phi)$ with $\Phi=(X_0,X_1,\ldots)$; applying [F5] with $n=1$ and taking expectations gives $h(x)=\mathbb E_x[\mathbf 1_A]=\mathbb E_x[h(X_1)]=\sum_{y\in E}p(x,y)h(y)$ for every $x$. [F5, step 2.1, given]

4.1 Since $h$ is bounded and harmonic, [F6] makes $(h(X_n))_{n\ge0}$ a bounded martingale under every $\mathbb P_x$. [F6, step 3.1, given]

5.1 Fix $x,y\in E$ and $n\ge0$. By [F9] the time $T_y\wedge n$ is a stopping time bounded by the deterministic $n$, so [F7] applied to the bounded martingale of step 4.1 with $\sigma=0$ and $\tau=T_y\wedge n$ gives $\mathbb E_x[h(X_{T_y\wedge n})]=h(x)$. [F7, F9, step 4.1, given]

6.1 Positive recurrence makes every state recurrent, and irreducibility [F10] gives $x\to y$, so [F4] gives $\mathbb P_x(T_y<\infty)=1$. Hence $T_y<\infty$ almost surely, $X_{T_y\wedge n}=y$ for all $n\ge T_y$ by [F9], and therefore $h(X_{T_y\wedge n})\to h(y)$ almost surely. The functions are measurable since $h$ is measurable by [F5], and bounded by $1$; applying [F12] under $\mathbb P_x$ with integrable majorant $1$ gives $\mathbb E_x[h(X_{T_y\wedge n})]\to h(y)$. Step 5.1 identifies these expectations with the constant $h(x)$. Thus $h(x)=h(y)$, and since $x,y$ were arbitrary, $h\equiv c$ for a single constant $c\in[0,1]$. [F4, F5, F9, F10, F12, step 5.1, given]

7.1 Under $\mathbb P_\pi$, [F5] gives $\mathbb E_\pi[\mathbf 1_A\mid\mathcal F_n]=h(X_n)=c$ almost surely for every $n$. The natural filtration satisfies $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)=$ the product sigma-algebra on $E^{\mathbb N_0}$, which contains $A$, so [F8] gives $\mathbf 1_A=\mathbb E_\pi[\mathbf 1_A\mid\mathcal F_\infty]=\lim_n\mathbb E_\pi[\mathbf 1_A\mid\mathcal F_n]=c$ $\mathbb P_\pi$-almost surely; as an indicator takes only the values $0,1$ almost surely, $c\in\{0,1\}$ and $\mathbb P_\pi(A)=c$. [F5, F8, step 6.1, given]

8.1 Every measurable $A$ with $\theta^{-1}A=A$ therefore has $\mathbb P_\pi(A)\in\{0,1\}$, and [F1] says exactly that $\theta$ is ergodic for $\mathbb P_\pi$; $\theta$ preserves $\mathbb P_\pi$ by step 2.1 and $\pi$ is the unique invariant probability by step 1.1, so the corollary holds and no aperiodicity hypothesis was used. [F1, F2, step 1.1, step 7.1, given]

9.1 Boundary and axiom cases: if $E$ is a singleton the chain is trivially irreducible and positive recurrent, $\mathbb P_\pi$ is the point mass at the constant path, and every shift-invariant event has measure $0$ or $1$, consistent with steps 7.1–5.1; $A=\varnothing$ and $A=E^{\mathbb N_0}$ give $c=0$ and $c=1$; the uniqueness claim and the ergodicity claim are both proved, so the two parts of the statement are not riding on an unproved equivalence; the argument uses the strictly invariant sigma-algebra exactly as in [F1] and never replaces it by the mod-null version; and AC [A1] enters through the chain-law, statewise Kac, and conditional-expectation suppliers [F3]–[F8], [F11], whose statements assume Choice, not through irreducibility itself. [A1, F3, F7, F8, F11, step 1.1, step 7.1, given] ∎
