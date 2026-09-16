---
id: lem-ma-produces-an-uncountable-q-set
kind: lemma
title: "Martin's axiom produces an uncountable Q-set"
status: draft
origin: pipeline
deps: [def-q-sets-and-heath-moore-space-interface, def-martins-axiom, def-axiom-of-choice, lem-solovay-almost-disjoint-extension-under-ma, rem-continuum-hypothesis, def-aleph-and-beth-hierarchies, def-cardinal, def-natural-numbers, def-function]
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
---

## Statement

In $\mathrm{ZFC} + \mathrm{MA} + \lnot \mathrm{CH}$ every subset $E \subseteq
\mathbb R$ of cardinality $\omega_1$ is a Q-set
([[def-q-sets-and-heath-moore-space-interface]]); in particular an uncountable
Q-set exists.

## Facts & Assumptions

**Given:** $\mathrm{MA} + \lnot\mathrm{CH}$ and a subset $E \subseteq \mathbb R$ with $|E| = \omega_1$.

[F1] $\lnot\mathrm{CH}$ says that there is a set $A$ with $\mathbb N \prec A \prec \mathcal P(\mathbb N)$ ([[rem-continuum-hypothesis]]); under choice every uncountable cardinal is at least $\omega_1$, so $\omega_1 \le |A| < \mathfrak c$ and hence $\omega_1 < \mathfrak c$ ([[def-aleph-and-beth-hierarchies]], [[def-cardinal]], [[def-axiom-of-choice]]).

[F2] $\mathrm{MA}$ is the scheme $\mathrm{MA}(\kappa)$ for every infinite $\kappa < \mathfrak c$ ([[def-martins-axiom]]).

[F3] Solovay's almost-disjoint extension lemma: if $\mathcal B \subseteq \mathcal P(\omega)$ is almost disjoint and $|\mathcal B| < \mathfrak c$, then every $A \subseteq \mathcal B$ is extended by a $d \subseteq \omega$ infinite on $A$ and finite on $\mathcal B \setminus A$ ([[lem-solovay-almost-disjoint-extension-under-ma]]).

[L1] $\mathbb R$ has a countable base of dyadic intervals: enumerating the intervals $(k/2^n,(k+1)/2^n)$, $k \in \mathbb Z$, $n \in \mathbb N$, gives $W_i$ with $i \in \omega$; a set is relatively $G_\delta$ in $E$ exactly as in the definition of Q-set ([[def-q-sets-and-heath-moore-space-interface]]).

[L2] For distinct $x,y \in \mathbb R$ only finitely many dyadic intervals of a fixed scale $2^{-n}$ contain both, and only finitely many scales $n$ satisfy $2^{-n} > |x-y|$; hence $\{i : x,y \in W_i\}$ is finite ([[def-natural-numbers]], [[def-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix $E$ with $|E| = \omega_1$ and the dyadic base $(W_i)_{i \in \omega}$ of [L1]; for $x \in E$ put $s(x) := \{i \in \omega : x \in W_i\}$. [given, L1]

2.1 $\mathcal B := \{s(x) : x \in E\}$ satisfies $|\mathcal B| \le \omega_1 < \mathfrak c$ by [F1], and $|s(x) \cap s(y)| < \omega$ for distinct $x,y \in E$ by [L2]. [step 1.1, F1, L2]

3.1 Let $X \subseteq E$. Applying [F3] to $A := \{s(x) : x \in X\} \subseteq \mathcal B$ gives $d \subseteq \omega$ with $|s(x) \cap d| = \omega$ for $x \in X$ and $|s(z) \cap d| < \omega$ for $z \in E \setminus X$. [step 2.1, F3, F2]

4.1 If $d$ is infinite, enumerate it increasingly as $d = \{p(1) < p(2) < \dots\}$; if $d$ is finite then $X = \varnothing$ by step 3.1, and $X = E \cap \varnothing$ is relatively $G_\delta$ trivially. In the infinite case, $X = E \cap \bigcap_{n} \bigcup_{k \ge n} W_{p(k)}$: for $x \in X$ the set $\{k : x \in W_{p(k)}\}$ is infinite by step 3.1, so $x$ lies in every tail union; conversely if $x \in E$ lies in every tail union then $\{k : x \in W_{p(k)}\}$ is infinite, so $|s(x) \cap d| = \omega$, and step 3.1 excludes $x \in E \setminus X$. [step 3.1, L1]

5.1 The sets $\bigcup_{k \ge n} W_{p(k)}$ are open in $\mathbb R$, so step 4.1 exhibits every subset $X \subseteq E$ as a relative $G_\delta$ set in $E$; hence $E$ is a Q-set, and since $|E| = \omega_1$ it is uncountable, so an uncountable Q-set exists. [step 4.1, L1] ∎

## Remarks

- **Why $\omega_1$ and not $\mathfrak c$.** The almost-disjoint lemma needs $|\mathcal B| < \mathfrak c$; a set of reals of cardinality $\mathfrak c$ has $2^{\mathfrak c}$ subsets but only $\mathfrak c$ $G_\delta$ sets, so it cannot be a Q-set. Under $\mathrm{MA} + \lnot \mathrm{CH}$ the cardinal $\omega_1$ is below $\mathfrak c$, which is exactly the range in which the lemma applies.

- **Consistency.** Under $\mathrm{CH}$ there are no Q-sets: a Q-set would give a separable normal nonmetrizable Moore space ([[thm-bing-q-set-moore-space-is-normal-and-nonmetrizable]]), while Jones' argument refutes that when $2^{\aleph_0} < 2^{\aleph_1}$, which $\mathrm{CH}$ gives. Nothing in this item asserts a Q-set under $\mathrm{CH}$.
