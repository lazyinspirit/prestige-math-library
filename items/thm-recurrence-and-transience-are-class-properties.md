---
id: thm-recurrence-and-transience-are-class-properties
kind: theorem
title: "Recurrence and transience are class properties"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-accessibility-communication-and-irreducibility
  - def-countable
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-recurrent-and-transient-state
  - def-transition-matrix-and-n-step-transition-probabilities
  - prop-dirac-measure-is-a-probability-measure
  - cor-canonical-markov-chain-on-path-space
  - lem-communication-is-an-equivalence-relation
  - lem-matrix-chapman-kolmogorov-equations
  - lem-geometric-sequence-null
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-renewal-decomposition-at-successive-return-times
  - thm-discrete-strong-markov-property
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.3, Theorem 5.3.2 and its complete proof, printed p. 282/PDF p. 289 (official PDF parser lines 19113–19149). For countable chains Durrett proves that a recurrent x and any accessible y imply y recurrent and ρ_yx=1; the proof extracts a shortest positive route and contradicts recurrence if y can avoid x, then uses the Green-series criterion for recurrence of y. This proof uses the pair's completed iid return-excursion theorem and strong Markov at T_x in place of the source's final Green-series comparison."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§21.1, Proposition 21.3 and its complete proof, printed pp. 291–292/PDF pp. 307–308 (official PDF parser lines 22015–22090). The source assumes irreducibility and proves the equivalent all-state recurrence and hitting statements. It is relevant after restriction to a closed communicating class but is not used in this local proof. §1.7, printed pp. 15–17/PDF pp. 30–32, supplies finite-state communicating-class terminology only."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $E$ be at most countable with
sigma-algebra $2^E$, and let $K$ be a probability kernel with transition
matrix $p(x,y)=K(x,\{y\})$. For each fixed $z\in E$, let $\mathbb P_z$ be the
canonical path-space law with initial measure $\delta_z$ and transition
kernel $K$. Write $T_z=\inf\{n\ge0:X_n=z\}$ and
$T_z^+=\inf\{n\ge1:X_n=z\}$. If $x$ and $y$ communicate, then
$$x\text{ is recurrent}\quad\Longleftrightarrow\quad y\text{ is recurrent}.$$
More strongly, if $x$ is recurrent and $x\to y$, then
$$\mathbb P_x(T_y<\infty)=\mathbb P_y(T_x<\infty)=1.$$
The communicating class $[x]:=\{z\in E:z\leftrightarrow x\}$ of a recurrent
state is closed: if $z\in[x]$ and $p(z,w)>0$, then $w\in[x]$.

## Facts & Assumptions

**Given:** AC, an at most countable state space $E$ with its full power-set sigma-algebra, a probability kernel $K$, its transition matrix $p$, and the canonical law for each fixed deterministic start.

[A1] Every family of nonempty sets has a choice function. AC is used for the canonical chain laws and the conditional Markov suppliers cited below. ([[def-axiom-of-choice]])

[F1] An at most countable set is finite or countably infinite. ([[def-countable]])

[F2] A probability kernel is a measure in its target variable and has total mass one. ([[def-measure-kernel-and-probability-kernel]])

[F3] The transition entries are $p(x,y)=K(x,\{y\})$, and matrix powers are defined from the iterated kernels. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F4] For each $z\in E$, the Dirac set function $\delta_z$ is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F5] Under AC, the canonical path space has the chain law with specified initial measure and transition kernel. ([[cor-canonical-markov-chain-on-path-space]])

[F6] With initial state fixed at $z$, $\mathbb P_z=\mathbb P_{\delta_z}$; in particular $X_0=z$ almost surely under $\mathbb P_z$. ([[def-initial-distribution-of-a-markov-chain]])

[F7] Accessibility means $x\to y$ exactly when $p^{(n)}(x,y)>0$ for some $n\in\mathbb N_0$; communication is mutual accessibility. ([[def-accessibility-communication-and-irreducibility]])

[F8] For $m,n\ge0$, $p^{(m+n)}(x,y)=\sum_{v\in E}p^{(m)}(x,v)p^{(n)}(v,y)$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F9] The finite-dimensional law of the coordinate chain gives the probability of every finite cylinder as the product of its successive transition probabilities when the initial state is fixed. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F10] $T_A=\inf\{n\ge0:X_n\in A\}$ and $T_x^+=\inf\{n\ge1:X_n=x\}$ are stopping times; the time-zero and positive return conventions are distinct. ([[def-hitting-return-and-visit-times]])

[F11] A state $x$ is recurrent exactly when $\mathbb P_x(T_x^+<\infty)=1$; transience means the probability is less than one, so the two cases exhaust all states. ([[def-recurrent-and-transient-state]])

[F12] If $x$ is recurrent, all its successive returns are finite almost surely and the completed return excursions from $x$ are iid. ([[thm-renewal-decomposition-at-successive-return-times]])

[F13] At a stopping time, the conditional law of a bounded measurable future path functional is the law started from the state at that time on the event the stopping time is finite. ([[thm-discrete-strong-markov-property]])

[F14] Communication is an equivalence relation, and its equivalence classes partition $E$. ([[lem-communication-is-an-equivalence-relation]])

[F15] If $0\le r<1$, then $r^m\to0$. ([[lem-geometric-sequence-null]])

## Proof

**Proof technique:** choose a shortest positive route, try it on successive return excursions, and use strong Markov at the finite hitting time.

1.1 Fix distinct $x,y$ with $x\to y$. By [F7], the set of $n$ with $p^{(n)}(x,y)>0$ is nonempty; choose its least element. It is positive because $p^{(0)}(x,y)=0$ by [F3]. Repeatedly decompose a positive $n$-step entry by [F8]. At each decomposition, some summand is positive, so this gives a finite route $x=z_0,z_1,\ldots,z_n=y$ with $$\alpha:=\prod_{i=1}^n p(z_{i-1},z_i)>0.$$ This is a witness for this fixed pair only; it makes no simultaneous choice of routes. Minimality of $n$ implies $z_i\ne x$ and $z_i\ne y$ for $1\le i<n$, since either repeated endpoint would leave a shorter positive route from $x$ to $y$. The finite-dimensional law [F9], with initial state $x$ [F6], gives $$\mathbb P_x(X_0=z_0,\ldots,X_n=z_n)=\alpha.$$ Call this cylinder event $C$. In particular, on $C$ the chain reaches $y$ before any positive return to $x$. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, given]

1.2 If $x=y$, recurrence of $y$ is the same assertion as recurrence of $x$; also $T_x=T_y=0$ under $\mathbb P_x$, so both hitting probabilities in the stronger claim equal one. This separates time-zero hitting from the strictly positive return used in [F11]. [F10, F11, given]

2.1 Suppose $x$ is recurrent and $x\ne y$. By [F12], the return excursions $E_1,E_2,\ldots$ are iid and finite almost surely. Let $B$ be the set of completed excursion words whose first $n$ transitions follow the route in step 1.1. Since $C$ contains no return to $x$ before time $n$, the event $\{E_1\in B\}$ agrees with $C$ except on the null event that the first return to $x$ is infinite. Hence $\mathbb P_x(E_1\in B)=\alpha$, and the same holds for each excursion by identical distribution. For every $m\ge1$, the probability that none of the first $m$ excursions begins with the route is $(1-\alpha)^m$. If $T_y=\infty$, none of them can begin with it; therefore $$\mathbb P_x(T_y=\infty)\le(1-\alpha)^m\qquad(m\ge1).$$ Since $0\le1-\alpha<1$, [F15] makes the right side tend to zero. Thus $\mathbb P_x(T_y<\infty)=1$. [A1, F1, F11, F12, F15, step 1.1, given]

2.2 Still suppose $x$ is recurrent and $x\ne y$. Let $H_x$ be the indicator of the measurable future-path event that no coordinate equals $x$. Put $q=\mathbb P_y(T_x=\infty)$. Apply [F13] at the deterministic stopping time $n$ from step 1.1. Since $X_n=y$ on $C$, the conditional future probability of avoiding $x$ is $q$, so $$\mathbb P_x\bigl(C\cap\{X_{n+j}\ne x\text{ for all }j\ge0\}\bigr)=\alpha q.$$ On this event there is no positive-time return to $x$: the route has no intermediate $x$, its endpoint $y$ is not $x$, and the future avoids $x$. If $q>0$ this contradicts [F11]. Hence $q=0$ and $\mathbb P_y(T_x<\infty)=1$. [A1, F10, F11, F13, step 1.1, given]

3.1 Under $\mathbb P_y$, let $\tau=T_x$. Step 2.2 gives $\tau<\infty$ almost surely, and $\tau\ge1$ because $x\ne y$. Apply [F13] at $\tau$ to the bounded future-path indicator $\mathbf1_{\{T_y<\infty\}}$. By step 2.1, its probability from $x$ is one. Thus after the chain first reaches $x$ it reaches $y$ again almost surely. This is a positive-time return from the initial state $y$, so $y$ is recurrent by [F11]. [A1, F10, F11, F13, step 2.1, step 2.2, given]

3.2 Assume $x$ is recurrent, as required for the closure claim. Let $z\in[x]$ and suppose $p(z,w)>0$. By [F14], $x\leftrightarrow z$, so some $m\ge0$ has $p^{(m)}(x,z)>0$ by [F7]. The one-step transition $p(z,w)>0$ and [F8] give $$p^{(m+1)}(x,w)\ge p^{(m)}(x,z)p(z,w)>0,$$ so $x\to w$. If $w\ne x$, steps 2.1 and 2.2 give $w\leftrightarrow x$; if $w=x$, membership is immediate. Thus $w\in[x]$, proving the class is closed. [F7, F8, F11, F14, step 2.1, step 2.2, given]

4.1 Suppose $x\leftrightarrow y$. If $x$ is recurrent, then either $x=y$ as in step 1.2 or $x\to y$ and step 3.1 shows $y$ is recurrent. If $y$ is recurrent, apply the implication of steps 2.1–3.1 to the ordered pair $(y,x)$ to get that $x$ is recurrent. This proves both directions of the equivalence. By [F11], a state that is not recurrent is transient, so the classification is shared. [F7, F11, step 1.2, step 2.1, step 2.2, step 3.1, given]

5.1 If $E=\varnothing$, there is no starting state and the assertions are vacuous. If $E$ has one state, its only transition row has probability one on itself; the state is recurrent and its class is closed. Zero transition weights cannot appear in the chosen route because every factor is positive; the Chapman–Kolmogorov sums otherwise include all states. For a deterministic transition map, recurrence of $x$ means its orbit returns to $x$ after some positive number of steps, so the orbit is a finite cycle; every state accessible from $x$ lies on that cycle and has the stated hitting and recurrence properties. The endpoint $x=y$ gives accessibility at time zero but recurrence still uses $T_x^+$ at positive time [F10, F11]; distinct communicating states use a route of length at least one. AC [A1] supplies the canonical fixed-start laws and is assumed by the renewal and strong-Markov results. The finite-route witness is selected only for each fixed pair, with no global route selection. The two recurrence implications were proved in step 4.1, so both iff cases are covered. [A1, F2, F3, F7, F8, F10, F11, F12, F13, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, given] ∎

## Source notes

Durrett, *Probability: Theory and Examples*, 5th ed., §5.3, Theorem 5.3.2 and its complete proof, printed p. 282/PDF p. 289 (official PDF parser lines 19113–19149). Durrett defines $\rho_{xy}=\mathbb P_x(T_y<\infty)$ and proves that recurrence is contagious: recurrent $x$ and $\rho_{xy}>0$ imply that $y$ is recurrent and $\rho_{yx}=1$. The proof first extracts a shortest positive route and shows $\rho_{yx}=1$ by ruling out a positive-probability route followed by avoidance of $x$; it then uses Theorem 5.3.1's Green-series criterion to establish recurrence of $y$. Here that last conclusion follows instead from the proved iid excursion law and strong Markov at $T_x$. No diagonal-series comparison is used. The exact countable-state theorem is the Durrett source for the claim; its argument is not treated as a substitute for the complete local proof.

Levin–Peres–Wilmer, *Markov Chains and Mixing Times*, 2nd ed., §21.1, Proposition 21.3 and its complete proof, printed pp. 291–292/PDF pp. 307–308 (official PDF parser lines 22015–22090). The source assumes irreducibility and proves the equivalent all-state recurrence and hitting statements. It is relevant after restriction to a closed communicating class but is not used in this local proof. Section 1.7, printed pp. 15–17/PDF pp. 30–32, supplies finite-state communicating-class terminology only.
