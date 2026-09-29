---
id: ex-gamblers-ruin-hitting-probabilities-from-harmonicity
kind: example
title: "Gambler’s ruin from harmonicity"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
  - prop-dirac-measure-is-a-probability-measure
  - cor-canonical-markov-chain-on-path-space
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-dirichlet-problem-for-finite-state-hitting-probabilities
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-nonnegative-weighted-sums-of-measures
proof_strategy: direct
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "§2.1, Proposition 2.1 and the complete proof of (2.1), printed p. 21 (PDF p. 36): the source derives the first-step recursion and solves it; the local geometric tail below makes finite absorption explicit before using the boundary-value theorem."
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "§2, Example 24.3 and complete Theorem 24.4 proof, printed/PDF pp. 3–4 (PDF parser lines 79–91, 117–187): the two-target probability is a nonnegative zero-running-cost exit payoff and obeys first-step equations; this is context only, and the source does not provide the finite absorption proof or the harmonic solution used here."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For every integer $N\ge1$, let
$E_N=\{0,1,\ldots,N\}$ with the discrete sigma-algebra and define the
transition matrix by
$$p_N(0,0)=p_N(N,N)=1,\qquad p_N(i,i-1)=p_N(i,i+1)=\frac12\quad(1\le i<N),$$
with all other entries zero. Under the deterministic start at $i$, let
$$T_j:=\inf\{n\ge0:X_n=j\}.$$
Then, for every $i\in E_N$,
$$\mathbb P_i(T_N<T_0)=\frac{i}{N}.$$

## Facts & Assumptions

**Given:** AC, an integer $N\ge1$, the finite state space $E_N$, the stated transition probabilities, and a deterministic initial state $i\in E_N$.

[A1] AC is assumed by the canonical path-law construction, conditional-expectation classes and their Markov identities, and the bounded Dirichlet theorem used below. ([[def-axiom-of-choice]])

[F1] A finite state space with its discrete sigma-algebra is at most countable, and every function from it to a discrete measurable space is measurable. ([[def-countable]], [[def-measurable-function-between-measurable-spaces]])

[F2] A Dirac measure is a probability measure, finite nonnegative weighted sums of measures are measures, and the probability-kernel requirements are pointwise row probability and measurability in the starting state. ([[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]], [[def-measure-kernel-and-probability-kernel]])

[F3] From a probability kernel and initial law, the canonical path space carries a Markov chain; for the Dirac initial law $\delta_i$, its law is denoted $\mathbb P_i$ and satisfies $X_0=i$ almost surely. ([[cor-canonical-markov-chain-on-path-space]], [[def-initial-distribution-of-a-markov-chain]])

[F4] The transition matrix is $p_N(x,y)=K_N(x,\{y\})$; the hitting time of a set uses $n\ge0$, and its sublevel events are adapted. ([[def-transition-matrix-and-n-step-transition-probabilities]], [[def-hitting-return-and-visit-times]])

[F5] Under a deterministic initial state, each finite path cylinder has probability equal to the product of its successive transition probabilities. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F6] For a bounded product-measurable path functional $H$, the conditional expectation of $H(X_n,X_{n+1},\ldots)$ given $\mathcal F_n$ is the canonical expectation of $H$ from $X_n$. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F7] Conditional expectation is order preserving and preserves constants; its defining event integrals give the expectation identity after multiplication by an indicator measurable at the conditioning time. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[def-conditional-expectation-given-a-sigma-algebra]])

[F8] If every deterministic start hits a boundary set almost surely, bounded real boundary data have a unique bounded harmonic extension, equal to the expected boundary payoff. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

## Proof

**Proof technique:** construct the finite absorbing kernel, prove a uniform geometric bound for boundary exit, and apply bounded Dirichlet uniqueness to the linear harmonic function.

1.1 For each $x\in E_N$, define a measure-valued row by $$ K_N(x,\cdot)= \begin{cases} \delta_0,&x=0,\\ \delta_N,&x=N,\\ \frac12\delta_{x-1}+\frac12\delta_{x+1},&1\le x<N. \end{cases} $$ By [F2], each row is a probability measure; because $E_N$ is finite and discrete, the map $x\mapsto K_N(x,B)$ is measurable for each $B\subseteq E_N$. Thus $K_N$ is a probability kernel. By [F4], its transition matrix is exactly the one in the Statement, including the zero weights off the listed transitions. [F1, F2, F4, given]

1.2 Define boundary data $f_N(0)=0$, $f_N(N)=1$, and set $g_N(i)=i/N$ on $E_N$. The function $g_N$ is bounded and agrees with $f_N$ on $A_N$. If $1\le i<N$, then [F4] and direct arithmetic give $$ P_Ng_N(i)=\frac12g_N(i-1)+\frac12g_N(i+1) =\frac{(i-1)+(i+1)}{2N}=\frac{i}{N}=g_N(i). $$ Thus $g_N$ satisfies the boundary and harmonic equations, with no interior equations required when $N=1$. [F4, given]

2.1 For each $i\in E_N$, take the canonical chain with kernel $K_N$ and initial law $\delta_i$, and write its law and expectation as $\mathbb P_i$ and $\mathbb E_i$. By [A1, F3], all these deterministic-start chains exist on the canonical path space and have the stated transition matrix. [A1, F3, step 1.1, given]

2.2 Define the bounded path functional $H_N:E_N^{\mathbb N_0}\to\{0,1\}$ by $H_N(w)=1$ exactly when $1\le w_0<N$ and $$w_s=\max\{w_0-s,0\}\quad(1\le s\le N),$$ and set $H_N(w)=0$ otherwise. It is measurable because it depends on finitely many coordinates in a finite discrete space. Under $\mathbb P_i$, for $1\le i<N$, the event $H_N=1$ specifies exactly $i$ left moves, each of probability $1/2$, followed by the absorbing self-loop at $0$; hence [F5] gives $$\mathbb E_iH_N(X_0,X_1,\ldots)=2^{-i}.$$ For $i=0$ or $i=N$ the expectation is zero by the definition of $H_N$. Thus the canonical expectation function is $$ h_N(i)=\begin{cases}2^{-i},&1\le i<N,\\0,&i\in\{0,N\}. \end{cases} $$ [F3, F5, step 1.1, given]

3.1 Put $A_N=\{0,N\}$ and $T=T_{A_N}$. By [F6], for every $m\ge0$, $$ \mathbb E_i[H_N(X_m,X_{m+1},\ldots)\mid\mathcal F_m]=h_N(X_m) \quad\text{almost surely}. $$ On $\{T>mN\}$ the state $X_{mN}$ lies in $\{1,\ldots,N-1\}$. The event $H_N(X_{mN},X_{mN+1},\ldots)=1$ then forces a visit to $0$ within the next $N$ steps, so $T\le(m+1)N$. Therefore [F6, F7] imply $$ \begin{aligned} \mathbb P_i(T>(m+1)N) &=\mathbb E_i\!\left[\mathbf1_{\{T>mN\}} \mathbb E_i[\mathbf1_{\{T>(m+1)N\}}\mid\mathcal F_{mN}]\right]\\ &\le (1-2^{-N})\,\mathbb P_i(T>mN) \end{aligned} $$ for every interior start; here $2^{-X_{mN}}\ge2^{-N}$ on the survival event. Induction gives $\mathbb P_i(T>mN)\le(1-2^{-N})^m$. Since $\{T=\infty\}\subseteq\{T>mN\}$ for every $m$ and the bound tends to zero, $\mathbb P_i(T<\infty)=1$. From either boundary state $T=0$, so every start hits $A_N$ almost surely. [F4, F6, F7, step 2.2, given]

4.1 By [A1, F8] and step 3.1, the hypotheses of the bounded Dirichlet theorem hold for the chain with kernel $K_N$, boundary $A_N$, and data $f_N$. Its expected boundary payoff is the unique bounded solution of those equations. Step 1.2 shows that this solution is $g_N$. [A1, F8, step 1.1, step 2.1, step 3.1, step 1.2, given]

5.1 For a path with $T<\infty$, the endpoints are distinct and $T$ is the first visit to one of them, so $f_N(X_T)=1$ exactly when $T_N<T_0$. If $T=\infty$, both hitting times are infinite and the theorem's payoff is zero, so the same indicator identity holds. Since $T<\infty$ almost surely by step 3.1, [F8, step 4.1] yield $$ \mathbb P_i(T_N<T_0)=\mathbb E_i[f_N(X_T)]=g_N(i)=\frac{i}{N}. $$ [F4, F8, step 3.1, step 4.1, given]

6.1 The assumption $N\ge1$ makes $E_N$ nonempty and $0,N$ distinct, so an empty state space, a one-state space, or an empty boundary set is inapplicable. For $N=1$ both states are boundary states and there is no interior equation; for $N=2$ the single interior equation in step 1.2 applies. At $i=0$, the time-zero convention gives $T_0=0$ and both sides are zero; at $i=N$, it gives $T_N=0<T_0$ and both sides are one. All unlisted transition weights are zero, and the boundary rows are absorbing. AC is assumed and used through the canonical chain laws, conditional-expectation properties and bounded-future Markov identity, and the Dirichlet theorem. The claim is a hitting-probability identity, not an iff statement. [A1, F3, F4, F6, F8, step 1.1, step 2.1, step 3.1, step 1.2, step 4.1, step 5.1, given] ∎

## Source notes

Levin, Peres and Wilmer, §2.1, Proposition 2.1 and the complete proof of (2.1), printed p. 21 (PDF p. 36), sets the fair nearest-neighbor walk on the finite path with absorbing endpoints, derives $p_0=0$, $p_N=1$ and $p_i=(p_{i-1}+p_{i+1})/2$, then solves for $p_i=i/N$. The source's displayed first-step derivation does not establish a finite exit-time bound before calling the boundary value a hitting probability; step 3.1 supplies that missing justification. Roch, Note 24 §2 Example 24.3 and the complete Theorem 24.4 proof, printed/PDF pp. 3–4, defines hitting-before-another-set as a boundary payoff and derives the first-step equation for bounded nonnegative exit data. It is context only: neither that passage nor its finite-irreducible tail lemma proves the present absorbing, reducible chain's exit bound or its harmonic solution.
