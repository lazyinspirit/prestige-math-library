---
id: ex-the-alexander-subbase-lemma-applied-to-a-closed-interval
kind: example
title: "Compactness of $[0,1]$ derived from the subbase lemma alone, using only the rays as a subbasis and the least upper bound property"
status: draft
origin: session
deps: [thm-alexander-subbase-lemma, def-compact-space, def-order-topology-on-a-linearly-ordered-set, def-topology-basis-subbasis, def-interval, def-complete-ordered-field, lem-sup-epsilon, def-upper-bound, def-subspace-topology-top, def-real-order, def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "Alexander applied to $[0,1]$"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander subbase theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexander_subbase_theorem"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Example

Let $L := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ ([[def-interval]])
be linearly ordered by the order of $\mathbb{R}$ ([[def-real-order]]) and carry
the **order topology** of that order
([[def-order-topology-on-a-linearly-ordered-set]]), whose subbasis is the family

$$\mathcal{S} \;:=\; \{\, L_{<b} : b \in L \,\} \cup \{\, L_{>a} : a \in L \,\}, \qquad L_{<b} = \{t \in L : t < b\}, \quad L_{>a} = \{t \in L : a < t\}.$$

Then $L$ is compact ([[def-compact-space]]), and the proof below uses only
[[thm-alexander-subbase-lemma]] and the least upper bound property of
$\mathbb{R}$ ([[def-complete-ordered-field]]): no bisection, no metric, and no
sequence.

**This is a genuinely different route to the same conclusion.** Compactness of
$[0,1]$ also follows from Heine-Borel, and that is how it is obtained on the
companion page; the point of the present derivation is that the subbase lemma
reduces the problem to covers by rays, where the least upper bound property does
all the work in one step.

## Facts & Assumptions

**Given:** $L = [0,1]$ with the order inherited from $\mathbb{R}$, its order topology, and the subbasis $\mathcal{S}$ of open rays.

[L1] Alexander's subbase lemma: if $\mathcal{S}$ is a subbasis for the topology of a space $Z$ and every family $\mathcal{S}_0 \subseteq \mathcal{S}$ with $\bigcup \mathcal{S}_0 = Z$ has a finite subfamily with union $Z$, then $Z$ is compact ([[thm-alexander-subbase-lemma]], [[def-topology-basis-subbasis]]).

[L2] $\mathcal{S}$ is a subbasis for the order topology of $L$ ([[def-order-topology-on-a-linearly-ordered-set]], [[def-topological-space]]).

[L3] Every nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, and for such a set $S$ and an upper bound $u$ one has $u = \sup S$ exactly when every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]], [[def-upper-bound]]).

[L4] The order of $\mathbb{R}$ is total, and $0 \le t \le 1$ for every $t \in L$ ([[def-real-order]], [[def-interval]]).

[L5] The order topology of $L$ and the subspace topology $L$ inherits from the usual topology of $\mathbb{R}$ are compared nowhere below; every statement here is about the order topology alone ([[def-subspace-topology-top]], [[def-metrizable-space]], [[lem-real-line-is-a-metric-space]], [[def-metric-topology]]).

## Verification

**Proof technique:** direct.

1.1 Let $\mathcal{S}_0 \subseteq \mathcal{S}$ satisfy $\bigcup \mathcal{S}_0 = L$, and put $A := \{\, b \in L : L_{<b} \in \mathcal{S}_0 \,\}$ and $B := \{\, a \in L : L_{>a} \in \mathcal{S}_0 \,\}$, so that $\mathcal{S}_0$ consists of the rays $L_{<b}$ with $b \in A$ and the rays $L_{>a}$ with $a \in B$. [L2, construct]

1.2 The point $0$ lies in no $L_{>a}$ with $a \in L$, since $a < 0$ is impossible in $L$ by [L4]; so $0$ lies in some $L_{<b}$ with $b \in A$, and in particular $A$ is nonempty and $0 < b$ for that $b$. [L4, construct]

2.1 Put $C := \{\, t \in L : t < b \text{ for some } b \in A \,\}$, which contains $0$ by step 1.2 and is bounded above by $1$; so [L3] gives $s := \sup C$, and $0 \le s \le 1$, that is $s \in L$. [L3, L4, step 1.1, step 1.2]

3.1 $s$ lies in some member of $\mathcal{S}_0$, and that member cannot be a ray $L_{<b}$ with $b \in A$: if it were, then $s < b$, and the point $t := (s+b)/2$ would satisfy $s < t < b \le 1$ and $t \ge s \ge 0$, so $t \in L$ and $t \in C$ by the definition of $C$, contradicting $s = \sup C$. So $s \in L_{>a}$ for some $a \in B$, with $a < s$. [L3, L4, step 1.1, step 2.1]

4.1 By [L3] there is $t \in C$ with $a < t \le s$, and by the definition of $C$ there is $b \in A$ with $t < b$; in particular $a < b$. Then $L = L_{<b} \cup L_{>a}$: a point $u \in L$ has $u < b$, or else $u \ge b > a$ and $u \in L_{>a}$. [L3, L4, step 2.1, step 3.1]

5.1 So the two members $L_{<b}$ and $L_{>a}$ of $\mathcal{S}_0$ cover $L$. As $\mathcal{S}_0$ was an arbitrary cover of $L$ by members of $\mathcal{S}$, [L1] and [L2] make $L$ compact. [L1, L2, step 3.1, step 4.1] ∎

## Remarks

**Where the least upper bound property enters.** Exactly once, at step 2.1, to produce $s$; everything after that is bookkeeping about which of the two kinds of ray contains $s$. That is the whole content of the compactness of a closed interval, and the subbase lemma is what allows the argument to be run against rays only, which is why it comes out so short.

**The cost is the Axiom of Choice, and it is inherited.** [[thm-alexander-subbase-lemma]] is proved from Zorn's lemma, so this derivation spends the Axiom of Choice, whereas the bisection proof of Heine-Borel spends nothing. The two routes therefore have different prices for the same conclusion, and the cheaper one is the metric one.
