---
id: ex-green-kernel-for-a-biased-random-walk-on-the-integers
kind: example
title: "Green kernel of a biased integer walk"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable
  - def-green-kernel-of-a-transient-chain
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-measurable-function-between-measurable-spaces
  - def-measure
  - def-measure-kernel-and-probability-kernel
  - def-recurrent-and-transient-state
  - def-transition-matrix-and-n-step-transition-probabilities
  - prop-dirac-measure-is-a-probability-measure
  - cor-canonical-markov-chain-on-path-space
  - lem-geometric-sequence-null
  - thm-continuity-from-below-for-measures
  - thm-recurrence-transience-equivalent-criteria
  - thm-dirichlet-problem-for-finite-state-hitting-probabilities
  - thm-discrete-strong-markov-property
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-markov-property-for-bounded-future-path-functionals
  - thm-nonnegative-weighted-sums-of-measures
  - thm-tonelli-for-nonnegative-double-series
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.3, Example 5.3.9 and Theorems 5.3.10–5.3.11 with their complete scale-difference and stopped-martingale arguments, printed pp.285–286/PDF pp.292–293 (official PDF parser lines 19286–19338). The assumptions are birth–death probabilities p_i,q_i>0 on the half-line; translation and the constant ratio specialize the scale formula to the integer walk. Theorem 5.3.10 uses finite-interval exit almost surely without proving it, so the item supplies a uniform path-block bound."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§9.4, Example 9.9 and equation (9.20), printed pp.121–122/PDF pp.136–137 (official PDF parser lines 8649–8703), gives the finite-path biased gambler’s-ruin formula by effective resistance. §21.1, Example 21.2 and Proposition 21.3 with the complete diagonal-return proof, printed pp.291–293/PDF pp.306–308 (lines 21976–22088), is context for escape and geometric visit counts; it assumes finite-interval exit in Example 21.2 and irreducibility in Proposition 21.3, while the item proves the needed claims locally. Example 21.2’s displayed identification of the return-escape probability from 0 with the no-hit probability from 1 appears to omit the first-step factor; the proof here computes the exact return probability independently. §9.6, Lemma 9.6 and complete geometric-count argument, printed p.120/PDF p.135 (lines 8584–8596), concerns finite-network Green functions and is used only as context."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $p>q>0$ with $p+q=1$, put
$r=q/p$, and on $E=\mathbb Z$ with its full power-set sigma-algebra define
the kernel
$$
K(z,\cdot)=p\delta_{z+1}+q\delta_{z-1}.
$$
For each $x\in\mathbb Z$, let $\mathbb P_x$ be the canonical law with
$X_0=x$. Write $P(z,w)=K(z,\{w\})$ and $P^{(n)}(z,w)=K^n(z,\{w\})$;
these are the transition matrix and its iterates from
[[def-transition-matrix-and-n-step-transition-probabilities]]. Let
$T_y=\inf\{n\ge0:X_n=y\}$ and
$G(x,y)=\sum_{n\ge0}P^{(n)}(x,y)$, using
[[def-hitting-return-and-visit-times]] and
[[def-green-kernel-of-a-transient-chain]]. Then for every $x,y\in\mathbb Z$,
$$
G(x,y)=\begin{cases}\dfrac{1}{p-q},&y\ge x,\\[4pt]\dfrac{r^{x-y}}{p-q},&y<x.\end{cases}
$$

Durrett’s birth–death scale calculation supplies the finite-difference route
used below, and LPW’s finite-path formula gives the same finite-interval
gambler’s-ruin value. Durrett’s stopped-martingale argument invokes almost-sure
exit without proving it; the uniform path-block estimate below supplies that
step. LPW §21.1 Example 21.2 likewise uses finite-interval exit in its escape
calculation. Its displayed equality between the return-escape probability
from $0$ and the no-hit probability from $1$ appears to omit the initial-step
factor under the stated transition convention; no step here relies on that
equality. The local computation gives the exact positive-return probability.

## Verification

**Given:** $p>q>0$, $p+q=1$, and the kernel and Green series specified in the
Example.

[A1] AC is the principle that every family of nonempty sets has a choice
function. ([[def-axiom-of-choice]])

[F1] $\mathbb Z$ is at most countable; an explicit enumeration is
$0,1,-1,2,-2,\ldots$. “At most countable” means finite or in bijection with
$\mathbb N$. ([[def-countable]])

[F2] A Dirac measure is a probability measure, and finite nonnegative weighted
sums of measures are measures. The maps $z\mapsto z+1$ and $z\mapsto z-1$ are
measurable on the full power set; since $p+q=1$, $K$ is a probability kernel.
([[prop-dirac-measure-is-a-probability-measure]],
[[thm-nonnegative-weighted-sums-of-measures]],
[[def-measurable-function-between-measurable-spaces]],
[[def-measure-kernel-and-probability-kernel]])

[F3] Under AC, each probability kernel and initial probability law has a
canonical path-space Markov-chain law. For initial law $\delta_x$ this is
$\mathbb P_x$, and $X_0=x$ almost surely.
([[cor-canonical-markov-chain-on-path-space]],
[[def-initial-distribution-of-a-markov-chain]])

[F4] The matrix entries and iterates are $P(z,w)=K(z,\{w\})$ and $P^{(n)}(z,w)=K^n(z,\{w\})$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F15] Hitting and positive-return times use $T_A=\inf\{n\ge0:X_n\in A\}$ and $T_y^+=\inf\{n\ge1:X_n=y\}$, with the stated empty-infimum convention. ([[def-hitting-return-and-visit-times]])

[F16] A measure is countably additive on every pairwise disjoint measurable sequence, with the union measured by the nonnegative extended sum. ([[def-measure]])

[F5] If a finite-state chain hits a boundary set almost surely from every
state, then the expected bounded boundary payoff is the unique bounded
solution of its boundary and harmonic equations.
([[thm-dirichlet-problem-for-finite-state-hitting-probabilities]])

[F6] For every bounded measurable future-path functional $H$, its conditional
expectation given $\mathcal F_n$ is the canonical expectation from the current
state $X_n$. ([[thm-markov-property-for-bounded-future-path-functionals]])

[F7] Under AC and deterministic start $z$,
$\mathbb P_z(X_m=w)=P^{(m)}(z,w)$ for every $m\ge0$.
([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F8] The state $y$ is transient when $\mathbb P_y(T_y^+<\infty)<1$.
([[def-recurrent-and-transient-state]])

[F9] If $y$ is transient and
$\rho_y=\mathbb P_y(T_y^+<\infty)$, then
$\sum_{m\ge0}P^{(m)}(y,y)=\mathbb E_yN_y=1/(1-\rho_y)$.
([[thm-recurrence-transience-equivalent-criteria]])

[F10] The Green kernel is the extended nonnegative series
$G(z,w)=\sum_{m\ge0}P^{(m)}(z,w)$.
([[def-green-kernel-of-a-transient-chain]])

[F11] Probabilities of increasing events converge to the probability of their
union. ([[thm-continuity-from-below-for-measures]])

[F12] If $0\le s<1$, then $s^n\to0$ as $n\to\infty$.
([[lem-geometric-sequence-null]])

[F13] At a stopping time $\tau$, bounded measurable future-path functionals
satisfy the strong Markov conditional identity on $\{\tau<\infty\}$, with
the shifted value set to zero on $\{\tau=\infty\}$.
([[thm-discrete-strong-markov-property]])

[F14] For a nonnegative double series, the summation order may be interchanged
and both iterated sums equal the supremum of finite rectangular sums.
([[thm-tonelli-for-nonnegative-double-series]])

**Proof technique:** establish finite-interval absorption directly, solve its
harmonic boundary problem, take monotone boundary limits, then factor the
Green series at the first hit using bounded strong Markov tests.

1.1 The enumeration in [F1] makes $E$ countable. For each fixed $z$, [F2] shows that $K(z,\cdot)$ is a probability measure of total mass $p+q=1$; the row evaluation $z\mapsto K(z,A)=p\mathbf1_A(z+1)+q\mathbf1_A(z-1)$ is measurable for every $A\subseteq E$, so it is a probability kernel. With $\delta_x$ as initial law, [A1] and [F3] give the canonical deterministic-start chain for every $x$. Also $0<r<1$ and $0<p<1$, since $0<q<p$ and $p+q=1$. [A1, F1, F2, F3, given]

2.1 Fix integers $a<b$ and put $D=\{a,b\}$. On the finite set $E_{a,b}=\{a,a+1,\ldots,b\}$, define an absorbed kernel $K_{a,b}$ by $K_{a,b}(a,\cdot)=\delta_a$, $K_{a,b}(b,\cdot)=\delta_b$, and $K_{a,b}(i,\cdot)=p\delta_{i+1}+q\delta_{i-1}$ for $a<i<b$. If $b=a+1$, there are no interior states and the endpoint exit is immediate. The same finite-mixture argument as in step 1.1 makes this a probability kernel; take its canonical chain. Let $L=b-a$. Define a measurable future-path event $H$ which is certain from an endpoint and, from each interior $i$, requires the successive right moves $i\to i+1\to\cdots\to b$. Its probability from $i$ is $p^{b-i}\ge p^L$. If $A_k=\{T_D>kL\}$, then $X_{kL}$ is interior on $A_k$. By [F6], conditional on $\mathcal F_{kL}$ the event $H$ has probability at least $p^L$ on $A_k$; whenever $H$ occurs, $D$ is hit by time $(k+1)L$. Consequently $\mathbb P_x(T_D>(k+1)L)\le(1-p^L)\mathbb P_x(T_D>kL)$, so $\mathbb P_x(T_D>kL)\le(1-p^L)^k\to0$ by [F12]. Thus every start in $E_{a,b}$ hits $D$ almost surely, including endpoint starts where $T_D=0$. [F2, F3, F6, F12, step 1.1, given]

2.2 The assumptions $p>q>0$ and $p+q=1$ imply $0<r<1$, make every displayed denominator positive, and exclude zero right/left weights, deterministic motion, and the unbiased case $p=q$. By [F4], $P(z,w)=K(z,\{w\})$; since the kernel in [F2] is supported on $\{z-1,z+1\}$, all entries away from those neighbors are zero, as also follows from step 1.1. [F2, F4, given]

3.1 Put $\phi(i)=(1-r^{i-a})/(1-r^{b-a})$ for $a\le i\le b$. The denominator is positive, $0\le\phi\le1$, and $\phi(a)=0$, $\phi(b)=1$. For each interior $i$, $\phi(i+1)-\phi(i)=((1-r)r^{i-a})/(1-r^{b-a})=r(\phi(i)-\phi(i-1))$. Since $pr=q$, this is equivalent to $p\phi(i+1)+q\phi(i-1)=\phi(i)$. The almost-sure exit in step 2.1 and [F5], applied to boundary payoff $f(b)=1$, $f(a)=0$, identify $\mathbb P_i(T_b<T_a)=\phi(i)=(1-r^{i-a})/(1-r^{b-a})$ for $a<i<b$. The endpoints also have the displayed boundary values by the time-zero hitting convention in [F15]. [F15, F5, step 2.1, given]

4.1 If $x<y$, choose integers $M$ with $-M<x$ and use step 3.1 on $[-M,y]$; then $\mathbb P_x(T_y<T_{-M})=(1-r^{x+M})/(1-r^{y+M})$. As $M$ increases these events increase, and their union is $\{T_y<\infty\}$: every finite path segment ending at its first visit to $y$ has a finite minimum, so a sufficiently distant lower boundary is not reached first. By [F11] and [F12], the probabilities converge to $1$. If $x>y$, use $[y,M]$ with $M>x$; step 3.1 gives $\mathbb P_x(T_y<T_M)=1-(1-r^{x-y})/(1-r^{M-y})=(r^{x-y}-r^{M-y})/(1-r^{M-y})$. These events increase to $\{T_y<\infty\}$ because each finite path segment has a finite maximum, and [F11] and [F12] give the limit $r^{x-y}$. When $x=y$, $T_y=0$ and the hitting probability is $1$. Hence $\mathbb P_x(T_y<\infty)=1$ for $x\le y$ and $r^{x-y}$ for $x>y$. [F15, F11, F12, step 3.1, given]

5.1 From $y$, the first step goes to $y+1$ with probability $p$ or to $y-1$ with probability $q$, and there is no holding transition. The bounded future Markov identity [F6], applied to the event of ever hitting $y$ from the shifted path after time one, and the one-time marginal in [F7] together with step 4.1 give $\rho_y:=\mathbb P_y(T_y^+<\infty)=p\,\mathbb P_{y+1}(T_y<\infty)+q\,\mathbb P_{y-1}(T_y<\infty)=pr+q=2q$. Since $p>q$ and $p+q=1$, $2q<1$ and $y$ is transient by [F8]. The Green criterion [F9] and [F10] now give $G(y,y)=\sum_{m\ge0}P^{(m)}(y,y)=1/(1-2q)=1/(p-q)<\infty$. [F15, F6, F7, F8, F9, F10, step 4.1, given]

6.1 Fix $x,y$ and put $a_k=\mathbb P_x(T_y=k)$ and $b_m=P^{(m)}(y,y)$. For every $n\ge0$, the disjoint events $\{T_y=k,X_n=y\}$ for $0\le k\le n$ partition $\{X_n=y\}$, and finite additivity follows from [F16]. The events $\{T_y=k\}$ partition $\{T_y<\infty\}$, so countable additivity [F16] gives $\sum_ka_k=\mathbb P_x(T_y<\infty)$. For $m=n-k$, apply [F13] at $T_y$ to the bounded path functional $H_m(\omega)=\mathbf1_{\{\omega_m=y\}}$. On $\{T_y=k\}$ the stopped state is $y$, and [F7] identifies the post-hit probability with $b_m$; thus $\mathbb P_x(T_y=k,X_{k+m}=y)=a_kb_m$. Summing the finite partition and then over $n$, [F7] and [F14] give $G(x,y)=\sum_{n\ge0}\mathbb P_x(X_n=y)=\sum_{k,m\ge0}a_kb_m$. The rectangular partial sums factor as $(\sum_{k\le K}a_k)(\sum_{m\le M}b_m)$ and converge to the product of their finite limits: $\sum_ka_k=\mathbb P_x(T_y<\infty)\le1$ and $\sum_mb_m=G(y,y)=1/(p-q)$ by step 4.1. Therefore $G(x,y)=\mathbb P_x(T_y<\infty)G(y,y)$. Substitution of step 4.1 and the diagonal value from step 5.1 proves the stated two cases. This argument counts the time-zero visit when $x=y$ and uses the nonnegative Green series throughout, so no subtraction of extended values occurs. [F4, F15, F16, F7, F10, F13, F14, step 4.1, step 5.1, given]

7.1 The state space is the fixed infinite set $\mathbb Z$, so empty and one-state spaces cannot instantiate the Example. In the auxiliary interval $a<b$; if $b=a+1$, both states are absorbing endpoints and there is no interior equation, and step 3.1 uses its formula only when $a<i<b$. Endpoint starts have $T_D=0$ by steps 2.1–3.1, while $T_y=0$ for $x=y$ and $T_y^+$ requires a strictly positive return [F15]. Step 6.1 includes the time-zero visit in the Green series. [F15, step 2.1, step 3.1, step 4.1, step 6.1]

8.1 AC [A1] is used for canonical path laws [F3] and through the conditional Markov, finite-Dirichlet, finite-dimensional-law, recurrence-criterion and strong-Markov results [F5], [F6], [F7], [F9], [F13]; the explicit kernel, interval-path and difference-equation calculations are choice-free. The claim is a formula, not an iff statement. [A1, F3, F5, F6, F7, F9, F13, given] ∎
