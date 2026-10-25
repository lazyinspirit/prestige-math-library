---
id: cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk
kind: corollary
title: "Two-dimensional simple symmetric walk is recurrent"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-countable
  - def-dirac-measure
  - def-equinumerous
  - def-hitting-return-and-visit-times
  - def-initial-distribution-of-a-markov-chain
  - def-integers
  - def-injection-surjection-bijection
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-nonnegative-extended-series
  - def-pi-via-first-positive-cosine-zero
  - def-recurrent-and-transient-state
  - def-simple-symmetric-walk-on-zd
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-p-series-rational
  - lem-countable-iff-surjection-from-n
  - lem-matrix-chapman-kolmogorov-equations
  - prop-dirac-measure-is-a-probability-measure
  - cor-canonical-markov-chain-on-path-space
  - cor-central-binomial-coefficient-asymptotic-from-wallis
  - thm-binomial-closed-formula
  - thm-limit-comparison-test
  - thm-n-cross-n-countable
  - thm-nonnegative-weighted-sums-of-measures
  - thm-product-of-countable
  - thm-recurrence-transience-equivalent-criteria
  - thm-vandermonde-identity
  - def-binomial-coefficient
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "§5.4 Example 5.4.2, Theorem 5.4.3 and complete proof, and the d=2 calculation in Theorem 5.4.4, printed pp. 288–289/PDF pp. 295–296 (official PDF parser lines 19421–19505). Durrett defines the lattice walk by iid uniform coordinate increments, proves the return-series criterion, counts the four move types, applies Vandermonde and the one-dimensional central-binomial asymptotic. The local item separately constructs the countable-state kernel and canonical laws under AC, uses the library Wallis corollary, and proves the all-start statewise conclusion."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§21.1 Proposition 21.3 and complete proof, printed p. 292/PDF p. 308; §21.1 Example 21.5, printed p. 292/PDF p. 308. Proposition 21.3 assumes irreducibility and proves the Green-series recurrence criterion by geometric return counts and positive-probability paths; Example 21.5 uses the corner walk, its independent one-dimensional coordinates, the order-1/n return estimate, and a rotation/dilation to the nearest-neighbor walk. These are corroborating context only: the local item proves the all-start return series directly and does not use Proposition 21.3's irreducibility hypothesis."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Put $E=\mathbb Z^2$ with
its full power-set sigma-algebra. For $z\in E$ and $A\subseteq E$, define
$$K(z,A):=\tfrac14\bigl(\delta_{z+e_1}(A)+\delta_{z-e_1}(A)+\delta_{z+e_2}(A)+\delta_{z-e_2}(A)\bigr),$$
where $e_1=(1,0)$ and $e_2=(0,1)$. For each fixed $z$, let $\mathbb P_z$
be the canonical path-space law with initial measure $\delta_z$ and kernel
$K$, and let $p$ be its transition matrix. Then every state is recurrent:
$$\mathbb P_z(T_z^+<\infty)=1\qquad(z\in\mathbb Z^2),$$
where $T_z^+:=\inf\{n\ge1:X_n=z\}$.

## Facts & Assumptions

**Given:** AC, $E=\mathbb Z^2$, its full power-set sigma-algebra, and the
four-neighbor kernel $K$ in the Statement.

[A1] AC is the axiom that every family of nonempty sets has a choice function;
the canonical-chain construction and recurrence criterion below explicitly
assume it. ([[def-axiom-of-choice]])

[F1] $\mathbb Z$ is the quotient $(\mathbb N\times\mathbb N)/\sim$ and its
quotient map is onto. ([[def-integers]])

[F2] $\mathbb N\times\mathbb N\approx\mathbb N$; a nonempty set is at most
countable when a surjection from $\mathbb N$ onto it exists; bijections invert
and surjections compose. ([[thm-n-cross-n-countable]], [[def-equinumerous]],
[[lem-countable-iff-surjection-from-n]],
[[def-injection-surjection-bijection]], [[def-countable]])

[F3] The product of two at-most-countable sets is at most countable.
([[thm-product-of-countable]])

[F4] A Dirac measure is a probability measure, and a finite nonnegative
weighted sum of measures is a measure. ([[def-dirac-measure]],
[[prop-dirac-measure-is-a-probability-measure]],
[[thm-nonnegative-weighted-sums-of-measures]])

[F5] A probability kernel is pointwise a measure of total mass one and is
measurable in its source variable for each measurable target set. The
measurability test is preimages of Borel sets. ([[def-measure-kernel-and-probability-kernel]],
[[def-measurable-function-between-measurable-spaces]])

[F6] For $d\ge1$, the simple symmetric lattice matrix has mass $1/(2d)$ at
each distinct neighbor $z\pm e_j$ and zero elsewhere. ([[def-simple-symmetric-walk-on-zd]])

[F7] Under AC, the canonical path space carries a Markov chain with specified
initial probability measure and probability kernel; for initial $\delta_z$,
the notation is $\mathbb P_z$. ([[cor-canonical-markov-chain-on-path-space]],
[[def-initial-distribution-of-a-markov-chain]])

[F8] The transition entries and their iterates are
$p(x,y)=K(x,\{y\})$ and $p^{(n)}(x,y)=K^n(x,\{y\})$, with the identity at
$n=0$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F9] For a countable transition matrix,
$p^{(m+n)}(x,y)=\sum_w p^{(m)}(x,w)p^{(n)}(w,y)$.
([[lem-matrix-chapman-kolmogorov-equations]])

[F10] $\binom{N}{k}$ counts $k$-element subsets of an $N$-element set, and
for $k\le N$ its real value is $N!/(k!(N-k)!)$; Vandermonde gives
$\sum_{m=0}^{n}\binom{n}{m}\binom{n}{n-m}=\binom{2n}{n}$.
([[def-binomial-coefficient]], [[thm-binomial-closed-formula]],
[[thm-vandermonde-identity]])

[F11] For $n\ge1$,
$\sqrt{\pi n}\,\binom{2n}{n}/4^n\to1$, and $\pi>0$.
([[cor-central-binomial-coefficient-asymptotic-from-wallis]],
[[def-pi-via-first-positive-cosine-zero]])

[F12] The harmonic series $\sum_{n\ge1}1/n$ diverges, and positive sequences
whose ratio converges to a finite positive number have the same series
behavior. ([[thm-p-series-rational]], [[thm-limit-comparison-test]])

[F13] A nonnegative series is the supremum of its finite partial sums; a
state is recurrent exactly when its positive-time return probability is one,
and the return time starts at $n\ge1$. ([[def-nonnegative-extended-series]],
[[def-recurrent-and-transient-state]],
[[def-hitting-return-and-visit-times]])

[F14] Under AC, for a fixed state $z$ of a countable-state chain,
$$z\text{ is recurrent}\quad\Longleftrightarrow\quad\sum_{n=0}^{\infty}p^{(n)}(z,z)=\infty.$$
([[thm-recurrence-transience-equivalent-criteria]])

## Proof

**Proof technique:** count finite move words using the matrix
Chapman–Kolmogorov equations, then apply the statewise Green-series criterion.

1.1 The quotient map $q:\mathbb N\times\mathbb N\to\mathbb Z$ from [F1] is onto. By [F2] there is a bijection $b:\mathbb N\times\mathbb N\to\mathbb N$; for each $n$, injectivity and surjectivity give a unique pair $u$ with $b(u)=n$, so assigning that unique pair defines a map $b^{-1}:\mathbb N\to\mathbb N\times\mathbb N$. The composite $q\circ b^{-1}$ is onto: for $z\in\mathbb Z$, choose a pair $u$ with $q(u)=z$, and then $q(b^{-1}(b(u)))=z$. Hence [F2] makes $\mathbb Z$ at most countable, and [F3] makes $E=\mathbb Z\times\mathbb Z$ at most countable. It is nonempty, since $(0,0)\in E$. [F1, F2, F3, given]

1.2 For each $z$, the four summands in $K(z,\cdot)$ are probability measures by [F4]; their weighted sum is a measure, has total mass $4\cdot\tfrac14=1$, and is measurable in $z$ because the source sigma-algebra is the full power set [F5]. Hence $K$ is a probability kernel. Its four neighbors are distinct and its singleton entries are $1/4$ at those neighbors and zero elsewhere, agreeing with the $d=2$ matrix in [F6]. [F4, F5, F6, given]

2.1 For each fixed $z$, AC [A1] and [F7] therefore give the canonical chain law $\mathbb P_z$ with $X_0=z$ and kernel $K$; [F8] identifies its transition matrix and iterates. This verifies the chain hypotheses for [F14]. [A1, F7, F8, F14, step 1.1]

2.2 Let $S=\{e_1,-e_1,e_2,-e_2\}$. For any $x,y\in E$ and $n\ge0$, $p^{(n)}(x,y)=4^{-n}$ times the number of words $(s_1,\ldots,s_n)\in S^n$ with $x+s_1+\cdots+s_n=y$. At $n=0$ this is the identity-matrix statement [F8]. If it holds at $n$, [F9] writes $p^{(n+1)}(x,y)=\sum_w p^{(n)}(x,w)p(w,y)$. By [F6] only the four possible predecessors $w=y-s$, $s\in S$, contribute; grouping $n$-step words by their endpoint $w$ and appending the unique final step $s$ counts each $(n+1)$-step word exactly once. Each added factor is $1/4$, proving the formula by induction. [F6, F8, F9, step 1.2]

3.1 Fix $n\ge0$. A word of length $2n$ returns to its starting point exactly when, for some $m\in\{0,\ldots,n\}$, it contains $m$ up-steps, $m$ down-steps, and $n-m$ steps in each horizontal direction. For this $m$, choose the up, down, and left positions in succession; [F10] gives $$\binom{2n}{m}\binom{2n-m}{m}\binom{2n-2m}{n-m}=\frac{(2n)!}{m!^2(n-m)!^2}=\binom{2n}{n}\binom{n}{m}\binom{n}{n-m}.$$ The equalities follow by applying the real closed formula in [F10] to each coefficient. [F10, step 2.2, given]

4.1 Summing the counts from step 3.1 over $m=0,\ldots,n$, Vandermonde [F10] gives $$p^{(2n)}(z,z)=4^{-2n}\binom{2n}{n}\sum_{m=0}^{n}\binom{n}{m}\binom{n}{n-m}=4^{-2n}\binom{2n}{n}^{2}.$$ The formula includes $n=0$, where the empty word has weight one. It is independent of $z$. For odd length, each move flips the parity of the sum of the two coordinates, so $p^{(2n+1)}(z,z)=0$. [F6, F8, F9, F10, step 2.2, step 3.1]

5.1 Set $a_k:=p^{(2k+2)}(z,z)$ and $b_k:=1/(k+1)$ for $k\ge0$. By step 4.1 and [F11], $$\frac{a_k}{b_k}=(k+1)4^{-2(k+1)}\binom{2k+2}{k+1}^{2}\longrightarrow\frac1\pi>0.$$ Indeed, writing $u_n=4^{-n}\binom{2n}{n}$ gives $n u_n^2=(\sqrt{\pi n}\,u_n)^2/\pi\to1/\pi$. All $a_k,b_k$ are positive by step 4.1. [F11, step 4.1, given]

6.1 The harmonic series is $\sum_{k\ge0}b_k$ after the index shift $n=k+1$, and diverges by [F12]. The positive finite limit in step 5.1 and the limit-comparison theorem [F12] imply $\sum_{k\ge0}p^{(2k+2)}(z,z)=\sum_{k\ge0}a_k=\infty$. [F12, step 5.1]

7.1 Every return term is nonnegative. Therefore the full partial sum $\sum_{j=0}^{2M+2}p^{(j)}(z,z)$ dominates $\sum_{k=0}^{M}p^{(2k+2)}(z,z)$; the latter is unbounded by step 6.1. By [F13] the full Green series diverges. This argument does not mistake the $n=0$ identity term for a positive-time return. [F13, step 6.1]

8.1 The fixed state space $E=\mathbb Z^2$ contains $(0,0)$ and at least the distinct states $(1,0)$ and $(0,1)$, so empty and one-state cases do not occur. Every row has four positive entries; off-neighbor entries are zero, odd-time return entries vanish by step 4.1, and $p^{(0)}(z,z)=1$ is included only in the Green series, not in $T_z^+$. There is no boundary parameter, absorbing state, deterministic row, or iff claim. The one-way recurrence conclusion uses only the Green-divergence-to-recurrence direction of [F14]. [F6, F8, F13, F14, step 4.1, step 7.1, given]

9.1 For each fixed $z$, the statewise recurrence criterion [F14] and step 7.1 show that $z$ is recurrent. By [F13] this means exactly $\mathbb P_z(T_z^+<\infty)=1$. Since $z$ was arbitrary, every state of the two-dimensional simple symmetric walk is recurrent. AC is used to obtain the canonical laws and to apply the recurrence criterion; the finite word count, Vandermonde identity, asymptotic comparison, and parity argument require no choice. [A1, F13, F14, step 2.1, step 7.1, given] ∎

## Source notes

Durrett, *Probability: Theory and Examples*, 5th ed., §5.4 Example 5.4.2,
Theorem 5.4.3 and complete proof, and the $d=2$ part of Theorem 5.4.4, printed
pp. 288–289/PDF pp. 295–296 (official PDF parser lines 19421–19505), gives the
return-series criterion, four-direction path count, Vandermonde reduction,
and harmonic-order asymptotic. Its random-walk setup uses iid uniform
increments; the item constructs the corresponding matrix chain and its
canonical laws locally.

Levin–Peres–Wilmer, *Markov Chains and Mixing Times*, 2nd ed., §21.1
Proposition 21.3 and complete proof, and Example 21.5, printed p. 292/PDF p. 308,
give the Green-series criterion and
an alternate corner-walk proof. Proposition 21.3 assumes irreducibility; the
corner walk's communicating-class issue is resolved in the source by the
rotation/dilation observation. This item does not depend on that result: it
uses the library's statewise criterion and directly computes the same return
series from every starting state.
