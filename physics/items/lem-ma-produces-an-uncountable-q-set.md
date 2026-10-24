---
id: lem-ma-produces-an-uncountable-q-set
kind: lemma
title: "Martin's axiom produces an uncountable Q-set"
status: published
origin: pipeline
deps: [def-q-sets-and-heath-moore-space-interface, def-martins-axiom, def-axiom-of-choice, lem-solovay-almost-disjoint-extension-under-ma, rem-continuum-hypothesis, def-aleph-and-beth-hierarchies, def-cardinal, def-natural-numbers, def-function, lem-integer-part, cor-archimedean-reciprocal, thm-n-cross-n-countable, thm-cantor-set-ternary-description]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Theorem 4.4 and its proof, printed pp. 8-9, after Lemma 4.3"
verification:
  audited: 2026-09-22
---

## Statement

In $\mathrm{ZFC} + \mathrm{MA} + \lnot \mathrm{CH}$ every subset $E \subseteq
\mathbb R$ of cardinality $\omega_1$ is a Q-set
([[def-q-sets-and-heath-moore-space-interface]]); in particular an uncountable
Q-set exists.

## Facts & Assumptions

**Given:** Work in ZFC. Assume $\mathrm{MA} + \lnot\mathrm{CH}$ and a subset $E \subseteq \mathbb R$ with $|E| = \omega_1$.

[F1] $\lnot\mathrm{CH}$ says that there is a set $A$ with $\mathbb N \prec A \prec \mathcal P(\mathbb N)$ ([[rem-continuum-hypothesis]]); under choice every uncountable cardinal is at least $\omega_1$, so $\omega_1 \le |A| < 2^{\aleph_0}$ and hence $\omega_1 < 2^{\aleph_0}$ ([[def-aleph-and-beth-hierarchies]], [[def-cardinal]], [[def-axiom-of-choice]]). Moreover $\mathcal P(\mathbb N)$ injects into $\mathbb R$: send a subset to its characteristic binary sequence, then use the stated bijection from binary sequences onto the Cantor subset of $\mathbb R$ ([[thm-cantor-set-ternary-description]]).

[F2] $\mathrm{MA}$ is the scheme $\mathrm{MA}(\kappa)$ for every infinite $\kappa < \mathfrak c$ ([[def-martins-axiom]]).

[F3] Solovay's almost-disjoint extension lemma: if $\mathcal B \subseteq \mathcal P(\omega)$ is almost disjoint and $|\mathcal B| < \mathfrak c$, then every $A \subseteq \mathcal B$ all of whose members are infinite is extended by a $d \subseteq \omega$ that is infinite on $A$ and finite on $\mathcal B \setminus A$ ([[lem-solovay-almost-disjoint-extension-under-ma]]).

[L1] Put $W(k,n)=(k/2^n-2^{-n-1},k/2^n+2^{-n-1})$, $k\in\mathbb Z$, $n\in\mathbb N$. Enumerate pairs without repetition: encode $k\ge0$ by $2k$ and $k<0$ by $-2k-1$, and use the bijection of [[thm-n-cross-n-countable]]. For each $x,n$, the floor of $2^nx$ supplied by [[lem-integer-part]] shows that either $x$ lies in an interval of scale $n$, or $x=(2k+1)/2^{n+1}$ is exactly a midpoint. In the latter case it is a grid center at every scale $m\ge n+1$ and therefore belongs to an interval at every such scale. If no midpoint case occurs, it belongs at every scale. Thus every $x$ belongs to infinitely many distinct indexed intervals. These intervals form a base: a containing interval of sufficiently fine scale lies in any prescribed neighbourhood of $x$, since its diameter is $2^{-n}$ and these diameters tend to zero. Indeed $2^n\ge n+1$ by induction and [[cor-archimedean-reciprocal]] supplies arbitrarily small reciprocal bounds. Relative $G_\delta$ and Q-set have the meaning of [[def-q-sets-and-heath-moore-space-interface]].

[L2] If $x\ne y$ both belong to $W(k,n)$, then $|x-y|<2^{-n}$. At each fixed scale the intervals are pairwise disjoint, so at most one contains both points. By the decay proved in [L1], only finitely many scales can satisfy $2^{-n}>|x-y|$. Because the pair enumeration has no repetitions, $\{i:x,y\in W_i\}$ is finite. This uses the triangle inequality on the real line and the explicit interval endpoints.

## Proof

**Proof technique:** direct.

1.1 Fix $E$ with $|E| = \omega_1$ and the dyadic base $(W_i)_{i \in \omega}$ of [L1]; for $x \in E$ put $s(x) := \{i \in \omega : x \in W_i\}$. [given, L1]

2.1 $\mathcal B := \{s(x) : x \in E\}$ satisfies $|\mathcal B| \le \omega_1 < 2^{\aleph_0}$ by [F1], and $|s(x) \cap s(y)| < \omega$ for distinct $x,y \in E$ by [L2]. Each $s(x)$ is infinite by [L1], so distinct points have distinct codes: equality would make their intersection infinite. Thus $x\mapsto s(x)$ is injective. [step 1.1, F1, L1, L2]

3.1 Let $X \subseteq E$. Each $s(x)$ is infinite by [L1], so [F3] applies to $A := \{s(x) : x \in X\} \subseteq \mathcal B$ and gives $d \subseteq \omega$ with $|s(x) \cap d| = \omega$ for $x \in X$ and $|s(z) \cap d| < \omega$ for $z \in E \setminus X$. [step 2.1, F3, F2, L1]

4.1 If $d$ is infinite, enumerate it increasingly as $d=\{p(0)<p(1)<\cdots\}$ with domain $\omega$; if $d$ is finite then $X=\varnothing$ by step 3.1, and $X=E\cap\varnothing$ is relatively $G_\delta$ trivially. In the infinite case, $X=E\cap\bigcap_{n\in\omega}\bigcup_{k\ge n}W_{p(k)}$: for $x\in X$ the set $\{k:x\in W_{p(k)}\}$ is infinite by step 3.1, so $x$ lies in every tail union; conversely, if $x\in E$ lies in every tail union, then $\{k:x\in W_{p(k)}\}$ is infinite, so $|s(x)\cap d|=\omega$, and step 3.1 excludes $x\in E\setminus X$. [step 3.1, L1]

5.1 The sets $\bigcup_{k \ge n} W_{p(k)}$ are open in $\mathbb R$, so step 4.1 exhibits every subset $X \subseteq E$ as a relative $G_\delta$ set in $E$; hence $E$ is a Q-set, and since $|E| = \omega_1$ it is uncountable, so it is uncountable. Such an $E$ exists: [F1] gives an injection of $\omega_1$ into $\mathbb R$, and its image has cardinality $\omega_1$. Hence an uncountable Q-set exists. [step 4.1, L1, F1] ∎

## Remarks

- **Why $\omega_1$ and not $\mathfrak c$.** The almost-disjoint lemma needs $|\mathcal B| < \mathfrak c$; a set of reals of cardinality $\mathfrak c$ has $2^{\mathfrak c}$ subsets but only $\mathfrak c$ $G_\delta$ sets, so it cannot be a Q-set. Under $\mathrm{MA} + \lnot \mathrm{CH}$ the cardinal $\omega_1$ is below $\mathfrak c$, which is exactly the range in which the lemma applies.

- **Consistency.** Under $\mathrm{CH}$ there are no Q-sets: a Q-set would give a separable normal nonmetrizable Moore space ([[thm-bing-q-set-moore-space-is-normal-and-nonmetrizable]]), while Jones' argument refutes that when $2^{\aleph_0} < 2^{\aleph_1}$, which $\mathrm{CH}$ gives. Nothing in this item asserts a Q-set under $\mathrm{CH}$.
