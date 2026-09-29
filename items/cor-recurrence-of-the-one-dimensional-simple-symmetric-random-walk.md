---
id: cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk
kind: corollary
title: "One-dimensional simple symmetric walk is recurrent"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-binomial-coefficient
  - def-countable
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-recurrent-and-transient-state
  - def-simple-symmetric-walk-on-zd
  - def-transition-matrix-and-n-step-transition-probabilities
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - cor-canonical-markov-chain-on-path-space
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-recurrence-transience-equivalent-criteria
  - cor-central-binomial-coefficient-asymptotic-from-wallis
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
      locator: "§5.4, Theorem 5.4.3 and its complete proof, printed pp. 288–289/PDF pp. 295–296 (official PDF parser lines 19430–19460), gives the return-series recurrence criterion for random walks. The d=1 part of Theorem 5.4.4, printed p. 289/PDF p. 296 (lines 19461–19469), states odd-time parity and derives recurrence from ρ1(2n)∼(πn)^(-1/2). Durrett cites its earlier Theorem 3.1.3 for that asymptotic; this item instead uses the library central-binomial asymptotic and proves Green-series divergence locally."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume AC. Identify $\mathbb Z$ with $\mathbb Z^1$ and define, for
$A\subseteq\mathbb Z$,
$$K(z,A):=\tfrac12\delta_{z+1}(A)+\tfrac12\delta_{z-1}(A).$$
For each fixed $z\in\mathbb Z$, use the canonical chain law $\mathbb P_z$
with initial measure $\delta_z$ and kernel $K$. This is the simple symmetric
nearest-neighbor walk in dimension one
([[def-simple-symmetric-walk-on-zd]]). With
$T_z^+:=\inf\{n\ge1:X_n=z\}$, every state is recurrent:
$$\mathbb P_z(T_z^+<\infty)=1\qquad(z\in\mathbb Z).$$

## Facts & Assumptions

**Given:** AC, the state space $\mathbb Z$ with its full power-set sigma-algebra, the one-dimensional simple symmetric walk, and a fixed start $z$.

[A1] AC is assumed by the canonical path-law and finite-dimensional-law suppliers used here. ([[def-axiom-of-choice]])

[F1] In dimension one, the simple symmetric transition row has mass $1/2$ at each of the two distinct neighbors $z-1,z+1$, and zero elsewhere. ([[def-simple-symmetric-walk-on-zd]])

[F2] For each point $w$, $\delta_w$ is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F3] A finite nonnegative weighted sum of measures is a measure. ([[thm-nonnegative-weighted-sums-of-measures]])

[F4] A probability kernel is a measure in its target variable for each source point, has total mass one, and is measurable in the source point for each measurable target set. ([[def-measure-kernel-and-probability-kernel]])

[F5] A function is measurable when the preimage of each measurable target set is measurable in the source space. ([[def-measurable-function-between-measurable-spaces]])

[F6] Under AC, the path space carries the canonical law for a specified probability initial measure and probability kernel. ([[cor-canonical-markov-chain-on-path-space]])

[F7] With initial measure $\delta_z$, the fixed-start notation is $\mathbb P_z=\mathbb P_{\delta_z}$ and $X_0=z$ almost surely. ([[def-initial-distribution-of-a-markov-chain]])

[F8] Under the finite-dimensional law, the probability of a finite cylinder is the iterated product of its initial and transition probabilities. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F9] The matrix entries are $p(z,w)=K(z,\{w\})$ and $p^{(n)}(z,w)=K^n(z,\{w\})$, with $p^{(0)}(z,w)=\mathbf1_{\{z=w\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F10] $\binom{m}{k}$ is the number of $k$-element subsets of an $m$-element set. ([[def-binomial-coefficient]])

[F11] For a fixed state, recurrence is equivalent to divergence of its return Green series: $z$ is recurrent iff $\sum_{n\ge0}p^{(n)}(z,z)=\infty$. ([[thm-recurrence-transience-equivalent-criteria]])

[F12] Recurrence means that the positive-time return probability is one. ([[def-recurrent-and-transient-state]])

[F13] $T_z^+=\inf\{n\ge1:X_n=z\}$ is the strictly positive return time. ([[def-hitting-return-and-visit-times]])

[F14] For $n\ge1$, $4^{-n}\binom{2n}{n}\sim(\pi n)^{-1/2}$. ([[cor-central-binomial-coefficient-asymptotic-from-wallis]])

[F15] A set in bijection with $\mathbb N$ is countably infinite and hence at most countable. ([[def-countable]])

## Proof

**Proof technique:** count the finite return words, use the central-binomial asymptotic to make their Green series diverge, and apply the statewise recurrence criterion at each fixed start.

1.1 Define $e:\mathbb N\to\mathbb Z$ by $e(0)=0$, $e(2k-1)=k$, and $e(2k)=-k$ for $k\ge1$. Every integer occurs exactly once, so this is a bijection and $\mathbb Z$ is countably infinite, hence at most countable as required by the chain-law and recurrence suppliers. [F15, given]

1.2 For each fixed $z$, the two Dirac measures in the displayed definition of $K(z,\cdot)$ are probability measures [F2]; their weighted sum is a measure by [F3], and its total mass is $1/2+1/2=1$. For each fixed $A\subseteq\mathbb Z$, the map $z\mapsto K(z,A)$ is measurable because every subset of the discrete source $\mathbb Z$ is measurable [F5]. Thus [F4] makes $K$ a probability kernel. Its singleton entries agree with [F1], so this is exactly the d=1 simple symmetric walk kernel. [F1, F2, F3, F4, F5, given]

1.3 Under AC [A1], [F6] supplies the canonical law with initial measure $\delta_z$ for each fixed $z$; [F7] names it $\mathbb P_z$, and [F8] gives the probabilities of its finite path cylinders. The transition matrix of this chain is the matrix in [F9]. [A1, F6, F7, F8, F9, given]

1.4 Fix $z\in\mathbb Z$ and $n\ge0$. A sign word $(\varepsilon_1,\ldots,\varepsilon_{2n})\in\{-1,1\}^{2n}$ determines the path $X_j=z+\sum_{i=1}^j\varepsilon_i$ for $0\le j\le2n$. Each such cylinder has probability $2^{-2n}$ by [F1], [F7], and [F8]. Distinct sign words give disjoint cylinders, and their endpoint equals $z$ exactly when the word has equally many $+1$ and $-1$ entries. By [F10] there are $\binom{2n}{n}$ such words. Consequently $$p^{(2n)}(z,z)=\mathbb P_z(X_{2n}=z)=4^{-n}\binom{2n}{n}.$$ For $n=0$, this says $p^{(0)}(z,z)=1$, as required by [F9]. [F1, F7, F8, F9, F10, given]

1.5 A sum of an odd number of $\pm1$ increments is odd and cannot be zero. Thus $p^{(2n+1)}(z,z)=0$ for every $n\ge0$. [F1, F8, F9, given]

2.1 Put $a_n:=p^{(2n)}(z,z)$. By step 1.4 and [F14], $\sqrt{\pi n}\,a_n\to1$ as $n\to\infty$. Hence there is $N\ge1$ such that for $n\ge N$, $$a_n\ge\frac1{2\sqrt\pi\sqrt n}.$$ [F14, step 1.4, given]

3.1 For each integer $m\ge1$, there are $2m+1$ integers in $[m^2,(m+1)^2)$, and for each one $n^{-1/2}\ge(m+1)^{-1}$. Therefore $$\sum_{n=m^2}^{(m+1)^2-1}n^{-1/2}\ge\frac{2m+1}{m+1}>1.$$ Infinitely many such disjoint blocks show $\sum_{n\ge N}n^{-1/2}=\infty$; [step 2.1] then gives $\sum_{n\ge0}p^{(2n)}(z,z)=\infty$. The odd-time terms are zero by step 1.5, so the full Green series $\sum_{n\ge0}p^{(n)}(z,z)$ diverges. The initial $n=0$ term is $1$ and is included. [step 1.5, step 2.1, given]

4.1 By [F11], divergence of the Green series implies that this fixed state $z$ is recurrent; by [F12] and [F13], this means exactly $\mathbb P_z(T_z^+<\infty)=1$. Since $z$ was arbitrary, the conclusion holds for every state of $\mathbb Z$. This uses only the forward implication of [F11], and no converse to the corollary is asserted. [F11, F12, F13, step 3.1, given]

5.1 The state space is fixed as $\mathbb Z$, which contains $0$ and infinitely many integers, so the empty-space and one-state cases are inapplicable. Every row has two distinct positive transitions, so the walk is neither absorbing nor deterministic. Zero return weights occur at every odd time by step 1.5; the time-zero Green term is $1$ but is not a positive-time return [F12, F13]. AC [A1] is used exactly for the canonical path law and the stated finite-dimensional and recurrence suppliers. The enumeration of $\mathbb Z$, the finite path count, and the square-block divergence require no choice. The only iff input is [F11]; the proof uses its divergence-to-recurrence direction, so the reverse direction is not part of the claim. [A1, F1, F6, F8, F9, F11, F12, F13, step 1.1, step 1.3, step 1.5, step 3.1, step 4.1, given] ∎

## Source notes

Durrett, *Probability: Theory and Examples*, 5th ed., §5.4, Theorem 5.4.3 and complete proof (printed pp. 288–289/PDF pp. 295–296, official parser lines 19430–19460) gives the general return-series criterion for random walks. The d=1 part of Theorem 5.4.4 (printed p. 289/PDF p. 296, lines 19461–19469) uses odd-time parity and the central-order return probability to conclude recurrence. Its asymptotic is cited there from Theorem 3.1.3; here the published central-binomial asymptotic is used and the divergence is proved by square blocks. Durrett's source proof supports the result but does not replace the local kernel construction, finite-word calculation, or statewise Green-series argument above.
