---
id: ex-birth-and-death-chain-recurrence-criterion
kind: example
title: "Birth–death recurrence through scale products"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-accessibility-communication-and-irreducibility
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-initial-distribution-of-a-markov-chain
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-hitting-return-and-visit-times
  - def-recurrent-and-transient-state
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-dirichlet-problem-for-finite-state-hitting-probabilities
  - thm-continuity-from-above-for-measures
  - cor-canonical-markov-chain-on-path-space
  - def-measure-kernel-and-probability-kernel
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
proof_strategy: direct
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.3, Example 5.3.9 and its scale-product derivation, Theorem 5.3.10 and its complete stopped-martingale argument, and Theorem 5.3.11 plus the escape-probability formula, printed pp. 285–286/PDF pp. 292–293 (official PDF parser lines 19286–19338). The text uses finite-interval exit almost surely in Theorem 5.3.10 without deriving it; the local proof supplies a common-path geometric bound and derives the limiting events explicitly."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Assume AC. Let $X$ be a Markov chain on $mathbb N_0$ whose only possible
transitions from $i$ are to $i+1$, $i$, and (when $i\ge1$) $i-1$. Write
$p_i:=p(i,i+1)>0$ for $i\ge0$, $q_i:=p(i,i-1)>0$ for $i\ge1$, $q_0=0$,
and $r_i:=p(i,i)\ge0$. Thus
$$p_i+q_i+r_i=1\quad(i\ge1),\qquad p_0+r_0=1,$$
and every other transition probability is zero. Put
$$s_0=1,\qquad s_m=\prod_{j=1}^m\frac{q_j}{p_j},\qquad S=\sum_{m=0}^{\infty}s_m,\qquad H(i)=\sum_{m=0}^{i-1}s_m\quad(i\ge1).$$
Then state $0$ is recurrent if and only if $S=+\infty$. For every $i\ge1$,
$$\mathbb P_i(T_0=\infty)= \begin{cases} H(i)/S,&S<+\infty,\\ 0,&S=+\infty. \end{cases}$$

## Facts & Assumptions

**Given:** AC; a countable-state time-homogeneous Markov chain with the birth–death transition probabilities in the Example; and its canonical laws from each deterministic start.

[A1] AC is the assertion that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] Under AC, a probability kernel and initial law have a canonical path-space chain law, including each Dirac initial law. ([[cor-canonical-markov-chain-on-path-space]])

[F2] A time-homogeneous chain satisfies $$\mathbb P(X_{n+1}\in B\mid\mathcal F_n)=K(X_n,B)\quad\text{a.s.}$$ for each measurable $B$. ([[def-time-homogeneous-markov-chain-with-transition-kernel]])

[F3] Under deterministic start $i$, $\mathbb P_i=\mathbb P_{\delta_i}$ and $X_0=i$ almost surely. ([[def-initial-distribution-of-a-markov-chain]])

[F4] The transition matrix entries are $p(x,y)=K(x,\{y\})$ and its rows sum to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F5] Accessibility is defined by $$x\to y\quad\Longleftrightarrow\quad p^{(n)}(x,y)>0\text{ for some }n\in\mathbb N_0.$$ ([[def-accessibility-communication-and-irreducibility]])

[F6] Hitting and positive-return times are $$T_A=\inf\{n\ge0:X_n\in A\},\qquad T_x^+=\inf\{n\ge1:X_n=x\}.$$ ([[def-hitting-return-and-visit-times]])

[F7] State $x$ is recurrent exactly when $$\mathbb P_x(T_x^+<\infty)=1.$$ ([[def-recurrent-and-transient-state]])

[F8] Under a deterministic start, the finite-dimensional laws are given by iterating the transition kernel; in particular, a specified finite path has the product of its successive transition probabilities. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F9] For a bounded product-measurable future-path functional $G$, $$\mathbb E[G(X_n,X_{n+1},\ldots)\mid\mathcal F_n] =\mathbb E_{X_n}[G(X_0,X_1,\ldots)]\quad\text{a.s.}$$ ([[thm-markov-property-for-bounded-future-path-functionals]])

[F10] A probability kernel has measure rows of total mass one and measurable evaluation functions. ([[def-measure-kernel-and-probability-kernel]])

[F11] Each Dirac set function $\delta_y$ is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F12] A finite nonnegative weighted sum of measures is a measure. ([[thm-nonnegative-weighted-sums-of-measures]])

[F13] The finite Dirichlet theorem applies when a Markov chain on a finite state space hits a nonempty boundary set almost surely from every state. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

[F14] Under that hypothesis, for bounded boundary data the hitting payoff is the unique bounded solution of the boundary and interior harmonic equations. ([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

[F15] For decreasing measurable events $A_n$ under a probability measure, $$\mathbb P\!\left(\bigcap_n A_n\right)=\lim_n\mathbb P(A_n).$$ ([[thm-continuity-from-above-for-measures]])

## Proof

**Proof technique:** stop at a finite interval, establish almost-sure absorption there, solve the finite harmonic equation, and pass to the limit.

1.1 For $x<y$, the path that takes consecutive upward steps from $x$ to $y$ has probability $\prod_{k=x}^{y-1}p_k>0$; for $x>y$, consecutive downward steps have probability $\prod_{k=y+1}^{x}q_k>0$. By [F8], each such path gives positive $n$-step probability, so [F5] shows that every pair of states communicates. Thus the chain is irreducible. Every $q_j/p_j$ is finite and strictly positive, so every $s_m$ is well-defined and positive, and $1\le S\le+\infty$. [A1, F4, F5, F8, given]

1.2 Fix integers $M>i\ge1$ and set $E_M=\{0,1,\ldots,M\}$ and $\tau_M=T_{\{0,M\}}$. On $E_M$ define the matrix $\widehat p_M$ by making $0$ and $M$ absorbing and retaining the original row $(q_j,r_j,p_j)$ at each $1\le j<M$. For $x\in E_M$ and $B\subseteq E_M$, set $$\widehat K_M(x,B)=\sum_{y\in E_M}\widehat p_M(x,y)\delta_y(B).$$ Each row is a finite nonnegative weighted sum of Dirac probability measures; its weights sum to one, so [F10]–[F12] show that $\widehat K_M$ is a probability kernel. Under each original $\mathbb P_x$, $x\in E_M$, define $Y_n=X_{n\wedge\tau_M}$. This process stays in $E_M$. When $\tau_M\le n$ it is already at an absorbing endpoint; when $\tau_M>n$, it is at an interior state and its next original transition remains in $E_M$. Applying [F9] to the bounded functional $G(\omega)=\mathbf1_B(\omega_1)$ gives the conditional law of the next original state. Splitting on the $\mathcal F_n$-measurable events $\{\tau_M\le n\}$ and $\{\tau_M>n\}$ gives $$\mathbb E_x[\mathbf1_{\{Y_{n+1}\in B\}}\mid\mathcal F_n] =\mathbf1_{\{\tau_M\le n\}}\mathbf1_B(Y_n) +\mathbf1_{\{\tau_M>n\}}K(X_n,B);$$ on the second event $X_n=Y_n$ is interior and its birth–death row, given by [F4], is exactly the corresponding $\widehat K_M$ row; on the first event $Y_n$ is an absorbing endpoint and the first term is its row probability. Thus this conditional expectation is $\widehat K_M(Y_n,B)$, so $Y$ is a finite-state Markov chain with kernel $\widehat K_M$ and deterministic start $x$. [A1, F1, F2, F3, F4, F6, F9, F10, F11, F12, given]

2.1 For $1\le j<M$, the event that $Y$ takes $j$ consecutive downward steps from $j$ to $0$ has probability $q_jq_{j-1}\cdots q_1>0$ by [F8]. Let $$\varepsilon_M=\min_{1\le j<M}\prod_{k=1}^{j}q_k>0.$$ At any block time $kM$, if $Y_{kM}=j$ is interior, the conditional probability of following those $j$ downward steps is at least $\varepsilon_M$ by [F9]; the boundary is then hit within the next $M$ steps. If the chain is already at a boundary, it has already hit one. Therefore, writing $\sigma_M=T_{\{0,M\}}$ for $Y$, $$\mathbb P_x(\sigma_M>(k+1)M) \le(1-\varepsilon_M)\mathbb P_x(\sigma_M>kM),\qquad \mathbb P_x(\sigma_M>kM)\le(1-\varepsilon_M)^k.$$ This holds for every $x\in E_M$; hence $Y$ hits $\{0,M\}$ almost surely from every state. [A1, F8, F9, step 1.2, given]

2.2 Define $H(0)=0$ and $H(i)=\sum_{m=0}^{i-1}s_m$ for $i\ge1$. For $i\ge1$, $$H(i+1)-H(i)=s_i,\qquad H(i)-H(i-1)=s_{i-1},\qquad p_is_i=q_is_{i-1},$$ where the last equality follows from the product definition of $s_i$. Consequently $$p_i\bigl(H(i+1)-H(i)\bigr) =q_i\bigl(H(i)-H(i-1)\bigr),$$ which, together with $p_i+q_i+r_i=1$, gives $$H(i)=p_iH(i+1)+r_iH(i)+q_iH(i-1).$$ Thus $H/H(M)$ is harmonic at every interior state of the finite chain, equals zero at $0$, and equals one at $M$. [F4, step 1.1, given]

3.1 By step 2.1, the finite-state chain $Y$ satisfies the all-start almost-sure boundary-hitting hypothesis of [F13]. Apply [F13] with boundary $\{0,M\}$ and payoff zero at $0$, one at $M$. Its hitting payoff is $\mathbb P_i(T_M<T_0)$, and [F14] identifies the unique bounded harmonic extension as $H(i)/H(M)$ by step 2.2. Therefore $$\mathbb P_i(T_M<T_0)=\frac{H(i)}{H(M)}.$$ [A1, F6, F13, F14, step 2.1, step 2.2, given]

4.1 The stopped path $Y$ equals the original path $X$ through its first hit of $\{0,M\}$. Hence from the interior start $i$ the event that $Y$ first hits $M$ rather than $0$ is exactly the original event $\{T_M<T_0\}$. Thus the probability in step 3.1 is the original-chain probability, not a new boundary convention. [F6, step 1.2, step 3.1, given]

5.1 As $M>i$ increases, the events $A_M=\{T_M<T_0\}$ decrease: reaching $M+1$ before $0$ requires first reaching $M$ before $0$. If $T_0<\infty$, the path has a finite maximum before its first hit of $0$, so it fails to belong to $A_M$ for every $M$ above that maximum. Conversely, for each fixed $M$, step 2.1 shows that the first hit of $\{0,M\}$ is almost surely finite; on $\{T_0=\infty\}$ this forces $T_M<T_0$ almost surely. Taking the countable intersection over $M>i$ proves $$\mathbb P_i\!\left(\{T_0=\infty\}\mathbin\triangle \bigcap_{M>i}A_M\right)=0.$$ By [F15] and steps 3.1 and 4.1, $$\mathbb P_i(T_0=\infty) =\lim_{M\to\infty}\frac{H(i)}{H(M)}.$$ Since $H(M)=\sum_{m=0}^{M-1}s_m\uparrow S$, this limit is $H(i)/S$ when $S<+\infty$ and zero when $S=+\infty$. [A1, F6, F15, step 2.1, step 3.1, step 4.1, given]

6.1 From state $0$, the first step is a self-loop with probability $r_0$, which is an immediate positive-time return, or a move to $1$ with probability $p_0$. In the latter case, the future path returns to $0$ exactly when it hits $0$ from start $1$; applying [F9] to the bounded event functional $\mathbf1_{\{T_0<\infty\}}$ gives $$\mathbb P_0(T_0^+<\infty)=r_0+p_0\mathbb P_1(T_0<\infty) =1-p_0\mathbb P_1(T_0=\infty).$$ If $S=+\infty$, step 5.1 makes this return probability one, so $0$ is recurrent by [F7]. If $S<+\infty$, step 5.1 gives $\mathbb P_1(T_0=\infty)=H(1)/S=1/S>0$; since $p_0>0$, the return probability is strictly less than one and $0$ is not recurrent. This proves both directions of the stated equivalence. [A1, F3, F6, F7, F9, step 5.1, given]

7.1 The state space is the fixed infinite set $\mathbb N_0$, so empty and one-state spaces do not instantiate the claim. Zero transition weights are exactly the off-neighbor entries and $q_0=0$; zero holding probabilities are allowed. The finite auxiliary chain has absorbing endpoint rows, while the original interior rows have $p_i,q_i>0$. The hitting time $T_0$ includes time zero by [F6], but the escape formula starts at $i\ge1$; the return time $T_0^+$ from $0$ is strictly positive. The scale terms are all positive, $H(1)=1$, and $S\ge1$, so the finite-denominator branch is defined. AC [A1] is used for canonical chain laws [F1], finite-dimensional laws [F8], bounded future-path conditioning [F9], and the Dirichlet theorem [F13], [F14]; once these Markov facts are available, the finite path, product, and difference calculations are choice-free. Both iff directions are proved in step 6.1. [A1, F1, F6, F7, F8, F9, F13, F14, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 5.1, step 6.1, given] ∎

## Source notes

Durrett, §5.3, Example 5.3.9 (printed p. 285/PDF p. 292) derives the scale-product recursion and its cumulative function. Theorem 5.3.10 and its complete stopped-martingale proof (printed pp. 285–286/PDF pp. 292–293) give the finite-interval hitting formula; that proof states $X_{T_0\wedge T_M}\in\{0,M\}$ almost surely but does not establish that $T_0\wedge T_M$ is finite. Step 2.1 supplies this missing finite-interval absorption argument by a uniform positive-probability downward path. Theorem 5.3.11 and the following formula (printed p. 286/PDF p. 293) state the recurrence criterion and finite-scale escape probability. Durrett writes $T_c=\inf\{n\ge1:X_n=c\}$; for an interior starting state this agrees with $T_{\{0,M\}}$ using the $n\ge0$ hitting convention, while the positive return at state $0$ is derived separately in step 6.1. The limiting event identity needed here is proved explicitly in step 5.1.
