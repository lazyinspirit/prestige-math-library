---
id: ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals
kind: example
title: "$\\mathbb{R}$ and $\\mathbb{Q}$ are $\\sigma$-compact, and Lindel\\\"of assuming countable choice; $\\mathbb{R}$ is locally compact and $\\mathbb{Q}$ is nowhere locally compact"
status: draft
origin: session
deps: [def-compactness-variants, def-compact-space, def-locally-compact-space, thm-compactness-agrees-with-metric-compactness, thm-heine-borel-rn, def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology, thm-rationals-countable, def-countable, lem-countable-iff-surjection-from-n, def-countable-choice, def-interval, def-canonical-natural, thm-of-archimedean, def-subspace-topology-top, def-neighbourhood-top, lem-of-q-dense, lem-q-and-irrationals-dense-r, def-hereditary-property, def-topological-space, def-complete-ordered-field, thm-closure-characterisation-top, def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: true
short: "sigma-compactness and Lindelofness of R and Q"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "σ-compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/%CE%A3-compact_space"
    - title: "Lindelöf space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lindel%C3%B6f_space"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ carry its usual topology and let $\mathbb{Q}$, the rationals
inside $\mathbb{R}$, carry the subspace topology
([[def-subspace-topology-top]]). Then:

1. **$\mathbb{R}$ is $\sigma$-compact** ([[def-compactness-variants]]):
   $\mathbb{R} = \bigcup_{n \in \mathbb{N}} [-\iota(n), \iota(n)]$, and each of
   those intervals is compact.
2. **$\mathbb{Q}$ is $\sigma$-compact**, being an at most countable union of its
   own singletons ([[thm-rationals-countable]]).
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]), both
   $\mathbb{R}$ and $\mathbb{Q}$ are Lindel&ouml;f.
4. **$\mathbb{R}$ is locally compact** ([[def-locally-compact-space]]) and
   **$\mathbb{Q}$ is locally compact at no point of it.**

Claims 1, 2 and 4 are theorems of ZF. Claim 3 spends countable choice once, to
name one member of a cover for each of countably many pieces.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the canonical natural $\iota$, the rationals $\mathbb{Q} \subseteq \mathbb{R}$ with the subspace topology, and for $n \in \mathbb{N}$ the interval $I_n := \{\, t \in \mathbb{R} : -\iota(n) \le t \le \iota(n) \,\}$.

[L1] $U \subseteq \mathbb{R}$ is open exactly when every $x \in U$ admits a real $r > 0$ with $(x-r,x+r) \subseteq U$; $\mathbb{R}$ is metrizable ([[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-metrizable-space]], [[def-interval]], [[def-topological-space]]).

[L2] A subset of $\mathbb{R}$ is a compact subset exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3; [[thm-compactness-agrees-with-metric-compactness]], claim 2; [[def-compact-space]]).

[L3] For every real $t$ there is $n \in \mathbb{N}$ with $t < \iota(n)$ ([[thm-of-archimedean]], [[def-canonical-natural]], [[def-complete-ordered-field]]).

[L4] $\mathbb{Q}$ is countably infinite, so there is a surjection $\mathbb{N} \to \mathbb{Q}$, and every at most countable family may be indexed by $\mathbb{N}$ ([[thm-rationals-countable]], [[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L5] Countable choice: for every family $(Y_n)_{n \in \mathbb{N}}$ of nonempty sets there is $f$ on $\mathbb{N}$ with $f(n) \in Y_n$ ([[def-countable-choice]]).

[L6] A space is $\sigma$-compact when it is the union of an at most countable family of compact subsets, and Lindel&ouml;f when every open cover has an at most countable subcover; a space is locally compact when every point has a compact neighbourhood, a neighbourhood of $x$ being a set containing an open set containing $x$ ([[def-compactness-variants]], [[def-locally-compact-space]], [[def-neighbourhood-top]]).

[L7] For reals $c < d$ there is a rational strictly between them, and there is also an irrational strictly between them ([[lem-of-q-dense]], [[lem-q-and-irrationals-dense-r]], claim 2; [[def-interior-closure-boundary-top]]).

[L8] For $A \subseteq S \subseteq X$ the topology $A$ inherits from $S$ is the one it inherits from $X$, so compactness of $A$ may be read in either; and a closed subset of $\mathbb{R}$ contains every real all of whose neighbourhoods meet it ([[def-hereditary-property]], [[def-subspace-topology-top]], [[thm-closure-characterisation-top]], claim 1).

## Verification

**Proof technique:** direct.

1.1 Each $I_n$ is closed in $\mathbb{R}$, its complement being the union of the open sets $\{t : t < -\iota(n)\}$ and $\{t : t > \iota(n)\}$, and it is bounded; so $I_n$ is a compact subset of $\mathbb{R}$ by [L2]. By [L3] every real $t$ satisfies $|t| < \iota(n)$ for some $n$, so $\mathbb{R} = \bigcup_{n \in \mathbb{N}} I_n$, an at most countable union of compact subsets: claim 1. [L1, L2, L3, L6]

1.2 Each singleton $\{r\}$ with $r \in \mathbb{Q}$ is a compact subset of $\mathbb{Q}$, the subspace it carries being a one-point space; and $\mathbb{Q}$ is the union of the family of its singletons, which is at most countable by [L4]. So $\mathbb{Q}$ is $\sigma$-compact: claim 2. [L4, L6]

1.3 For claim 4 in $\mathbb{R}$: given $p \in \mathbb{R}$ the set $\{t : |t-p| \le 1\}$ is closed and bounded, hence compact by [L2], and it contains the open $(p-1,p+1) \ni p$, so it is a compact neighbourhood of $p$ and $\mathbb{R}$ is locally compact. [L1, L2, L6]

2.1 For claim 3 assume countable choice and let $\mathcal{U}$ be an open cover of $\mathbb{R}$. For $n \in \mathbb{N}$ the set $T_n$ of finite subfamilies of $\mathcal{U}$ covering $I_n$ is nonempty, $I_n$ being compact by step 1.1, so [L5] supplies $\mathcal{V}_n \in T_n$ for every $n$; the union $\bigcup_{n \in \mathbb{N}} \mathcal{V}_n$ is an at most countable subfamily of $\mathcal{U}$ by [L4] and covers $\mathbb{R}$ by step 1.1. The same argument with the singletons of step 1.2 in place of the $I_n$ shows $\mathbb{Q}$ is Lindel&ouml;f: claim 3. [L4, L5, L6, step 1.1, step 1.2]

2.2 For claim 4 in $\mathbb{Q}$, let $r \in \mathbb{Q}$ and suppose $K \subseteq \mathbb{Q}$ were a compact neighbourhood of $r$ in $\mathbb{Q}$; then some set open in $\mathbb{Q}$ lies between $r$ and $K$, so by [L1] there is a real $\varepsilon > 0$ with $(r-\varepsilon, r+\varepsilon) \cap \mathbb{Q} \subseteq K$, and by [L8] the set $K$ is a compact subset of $\mathbb{R}$ as well, hence closed in $\mathbb{R}$ by [L2]. [L1, L2, L6, L8, step 1.2]

3.1 By [L7] there is an irrational $t$ with $r < t < r + \varepsilon$. Every neighbourhood of $t$ contains an interval $(c,d)$ with $r < c < t < d < r+\varepsilon$, and [L7] puts a rational $q$ with $c < q < d$ in it; that $q$ lies in $(r-\varepsilon, r+\varepsilon) \cap \mathbb{Q} \subseteq K$. So every neighbourhood of $t$ meets $K$, and $K$ closed gives $t \in K \subseteq \mathbb{Q}$ by [L8], contradicting the irrationality of $t$. Hence no point of $\mathbb{Q}$ has a compact neighbourhood in $\mathbb{Q}$, which completes claim 4. [L7, L8, step 2.2] ∎

## Remarks

**$\sigma$-compactness is much weaker than compactness.** Both $\mathbb{R}$ and $\mathbb{Q}$ are $\sigma$-compact and neither is compact; and $\mathbb{Q}$ is $\sigma$-compact for the cheapest possible reason, being at most countable, which shows that the property says nothing about how the pieces fit together.

**Local compactness is what separates the two spaces.** The line and the rationals agree on $\sigma$-compactness and on Lindel&ouml;fness and differ on local compactness, which is why $\mathbb{Q}$ is the standard witness that local compactness is not hereditary ([[fs-local-compactness-is-hereditary]]).
