---
id: cex-diminishing-adaptation-alone-does-not-imply-strong-law
kind: counterexample
title: Diminishing adaptation and uniform ergodicity need not give a strong law
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
proof_strategy: direct
deps:
  - cor-markov-inequality-for-random-variables
  - def-countable-choice
  - def-dependent-choice
  - def-diminishing-adaptation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-total-variation-distance-for-probability-laws
  - thm-countable-product-of-probability-spaces
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-linearity-of-the-lebesgue-integral-on-l-one
axiom_use: "Countable choice and dependent choice are used only through the cited countable-product probability theorem for the finite-coordinate transition product. All finite matrix, variance, and schedule calculations are direct."
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§5, Theorem 5, pp. 7–9; §9, Theorem 23 and Example 24, pp. 20–23."
---

## Statement refuted

The claim that simultaneous uniform ergodicity and diminishing adaptation
imply
$$\frac1n\sum_{j=1}^n f(X_j)\longrightarrow\pi(f)\quad\text{almost surely}$$
for every bounded measurable $f$, even for a finite state space and a common
invariant target.

## Facts & Assumptions

**Given:** A finite state space, common target, kernel family, initial state, and block construction specified in the Counterexample below.

[A1] [[def-countable-choice]]: countable choice is assumed only through the countable-product probability theorem used below.

[A2] [[def-dependent-choice]]: dependent choice is assumed only through the same countable-product probability theorem.

[F1] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability rows and measurable event evaluations.

[F2] [[def-probability-measure]]: each finite uniform space is equipped with a countably additive probability measure of total mass one.

[F3] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi$ is invariant for $P$ when $\pi P=\pi$.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of setwise probability differences.

[F5] [[def-diminishing-adaptation]]: diminishing adaptation means $D_n=\sup_x\lVert P_{\Gamma_{n+1}}(x,\cdot)-P_{\Gamma_n}(x,\cdot)\rVert_{\rm TV}$ tends to zero in probability.

[F6] [[thm-countable-product-of-probability-spaces]]: under countable choice and dependent choice, a countable sequence of probability spaces has a product probability measure with the prescribed finite-coordinate product marginals.

[F7] [[thm-finite-and-countable-subadditivity-of-measures]]: the probability of a countable union is at most the sum of its probabilities.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: for a nonnegative random variable, expectation is its nonnegative integral.

[F9] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F10] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Y$ and $t>0$, $\mathbb P(Y\ge t)\le\mathbb E[Y]/t$.

## Counterexample

**Given:** [A1] [[def-countable-choice]] and [A2]
[[def-dependent-choice]], together with [F1]–[F10]. Let
$(\mathsf X,\mathcal X)=(\{0,1\},2^{\{0,1\}})$,
$(\Gamma,\mathcal G)=(\{0,1,2\},2^{\{0,1,2\}})$,
$\pi(0)=\pi(1)=1/2$, and $X_0=0$. Define three kernels
by the matrices, in state order $(0,1)$,
$$P_0=\begin{pmatrix}9/10&1/10\\1/10&9/10\end{pmatrix},\qquad P_1=\begin{pmatrix}1/10&9/10\\9/10&1/10\end{pmatrix},\qquad P_2=\begin{pmatrix}1/2&1/2\\1/2&1/2\end{pmatrix}.$$
Write $\Pi(x,\cdot)=\pi(\cdot)$, so $P_2=\Pi$.

1.1 Since $\mathsf X$ and $\Gamma$ are finite discrete spaces, all kernel evaluations are jointly measurable. Every displayed matrix has probability rows, is symmetric, and has column sums one. Thus each is a probability kernel and $\pi P_i=\pi$ by [F1] and [F3]. For a two-state symmetric kernel with flip probability $q$, $(\delta_x-\pi)P=(1-2q)(\delta_x-\pi)$; induction gives $P^m(x,\cdot)-\pi=(1-2q)^m(\delta_x-\pi)$. For $P_0$ and $P_1$, $|1-2q|=4/5$, while $P_2=\Pi$ reaches $\pi$ in one step. Since $\lVert\delta_x-\pi\rVert_{\rm TV}=1/2$ by [F4], $$\sup_{x\in\mathsf X,\,i\in\{0,1,2\}}\lVert P_i^m(x,\cdot)-\pi\rVert_{\rm TV}\le\tfrac12(4/5)^m\quad(m\ge0).$$ The family is simultaneously uniformly ergodic. [F1, F3, F4, given, algebra]

1.2 For $k\in\mathbb N$, let $L_k=2^{2^k}$ and $s_k=\sum_{j<k}L_j$, the number of transitions before block $k$. Since $\sum_{j<k}L_j\le k2^{2^{k-1}}$, $$\frac{s_k}{L_k}\le k2^{-2^{k-1}}\longrightarrow0.$$ [given, algebra]

1.3 For each $k$, equip the finite space $$\Omega_k=\{0,\ldots,k\}\times\{1,\ldots,10\}^{L_k}$$ with its uniform probability measure. Write a coordinate as $(J_k,U_{k,0},\ldots,U_{k,L_k-1})$ and put $I_k=1_{\{J_k=0\}}$. Direct counting gives $\mathbb P(I_k=1)=1/(k+1)$; conditional on any value of $J_k$, the $U_{k,t}$ are independent and uniform on $\{1,\ldots,10\}$, with a law not depending on $J_k$. The countable product over $k\in\mathbb N$ exists by [F6] under [A1]–[A2]. [A1, A2, F2, F6, given, algebra]

2.1 In block $k$, for its first transition $n=s_k$ set $\Gamma_n=2$ and use $U_{k,0}$ to draw from $P_2$ (the next state is $0$ iff $U_{k,0}\le5$). For $n=s_k+t$ with $1\le t<L_k$, set $\Gamma_n=2$ if $I_k=0$; if $I_k=1$, set $\Gamma_n=0$ when $X_n=0$ and $\Gamma_n=1$ when $X_n=1$. Use $U_{k,t}$ to sample the selected matrix row: for $P_0$ use thresholds $9$ and $1$ for rows $0$ and $1$ respectively, for $P_1$ use thresholds $1$ and $9$, and for $P_2$ use threshold $5$; the next state is $0$ exactly when $U_{k,t}$ is at most the row's threshold. This recursively defines measurable $X_n$ and $\Gamma_n$. Each next $U_{k,t}$ is independent of the gate and earlier block coordinates by [F2] and the finite product counting in step 1.3; different blocks have the product marginals in [F6]. Therefore conditional on the history, $X_{n+1}$ has law $P_{\Gamma_n}(X_n,\cdot)$, so this is an adaptive MCMC process with the stated kernel family. [F1, F2, F6, step 1.1, step 1.3, given]

3.1 If $I_k=0$, every parameter in block $k$ is $2$, and the next block also starts with parameter $2$; hence $D_n=0$ at every transition whose current block has gate zero. If $I_k=1$, then $D_n\le1$. For each $n$ in block $k$, $$\mathbb P(D_n>0)\le\mathbb P(I_k=1)=1/(k+1)\longrightarrow0$$ as $n\to\infty$, because each block is finite and its index tends to infinity. Thus $D_n\to0$ in probability by [F5]. [F4, F5, step 1.2, step 2.1, given]

3.2 Conditional on $I_k=1$, for each $1\le t<L_k$ the active rule uses $P_0$ from state $0$ and $P_1$ from state $1$. In either case the next state is $0$ iff $U_{k,t}\le9$. Hence $$Z_{k,t}:=1_{\{X_{s_k+t+1}=0\}}=1_{\{U_{k,t}\le9\}}$$ are independent Bernoulli variables with success probability $p=9/10$. [F1, F2, F6, step 1.3, step 2.1, given]

4.1 Put $N_k=L_k-1$ and $\bar Z_k=N_k^{-1}\sum_{t=1}^{N_k}Z_{k,t}$. Under $I_k=1$, each centered variable $Z_{k,t}-p$ has mean zero and second moment $p(1-p)=9/100$; distinct centered variables have zero product expectation by the finite product law of the $U_{k,t}$. Expanding the square and using [F8]–[F9] gives $$\mathbb E[(\bar Z_k-p)^2\mid I_k=1]=\frac{9}{100N_k}.$$ Since $\bar Z_k<4/5$ implies $(\bar Z_k-p)^2>1/100$, Markov's inequality [F10] yields $$\mathbb P(\bar Z_k<4/5\mid I_k=1)\le\frac9{N_k}.$$ [F2, F6, F8, F9, F10, step 3.2, algebra]

5.1 Let $H_k=\{I_k=1,\ \bar Z_k\ge4/5\}$. From steps 1.3 and 4.1, $$\mathbb P(H_k)\ge\frac1{k+1}\left(1-\frac9{L_k-1}\right)\ge\frac1{2(k+1)}$$ for all sufficiently large $k$, so $\sum_k\mathbb P(H_k)=\infty$. Each $H_k$ is a function only of coordinate $\Omega_k$, so [F6] makes these events independent. For any fixed $K$, $$\mathbb P\!\left(\bigcap_{k=K}^m H_k^c\right)=\prod_{k=K}^m(1-\mathbb P(H_k))\le\exp\!\left(-\sum_{k=K}^m\mathbb P(H_k)\right)\longrightarrow0.$$ Thus the probability of no $H_k$ after $K$ is zero; [F7] applied to the countable union over $K$ shows that infinitely many $H_k$ occur almost surely. [F6, F7, step 1.3, step 4.1, algebra]

6.1 At the endpoint $n_k=s_k+L_k$ of any block with $H_k$, the active outputs $X_{s_k+2},\ldots,X_{s_k+L_k}$ contain at least $(4/5)(L_k-1)$ zeros. Therefore $$\frac1{n_k}\sum_{j=1}^{n_k}1_{\{X_j=0\}}\ge\frac{(4/5)(L_k-1)}{s_k+L_k}\longrightarrow\frac45$$ along the infinitely many such blocks, by step 1.2. But $\pi(1_{\{0\}})=1/2$. The strong law fails almost surely despite simultaneous uniform ergodicity and diminishing adaptation. [step 1.2, step 5.1, given, algebra] ∎
